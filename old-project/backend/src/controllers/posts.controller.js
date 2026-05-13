const { z } = require("zod");
const { ObjectId } = require("mongoose").Types;
const Post = require("../models/post");

const postSchema = z.object({
  title: z.string().min(1, "제목은 필수입니다."),
  body: z.string().min(1, "내용은 필수입니다."),
  tags: z.array(z.string()).optional(),
});

const postUpdateSchema = postSchema.partial();

exports.getPostById = async (req, res, next) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.sendStatus(400);
  }

  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      return res.sendStatus(404);
    }
    req.post = post;
    return next();
  } catch (e) {
    return next(e);
  }
};

exports.write = async (req, res, next) => {
  const result = postSchema.safeParse(req.body);
  if (!result.success) {
    return res
      .status(400)
      .json({ message: result.error.errors.map((err) => err.message) });
  }

  const { title, body, tags } = result.data;
  const post = new Post({
    title,
    body,
    tags,
    user: req.user,
  });

  try {
    await post.save();
    res.json(post);
  } catch (e) {
    next(e);
  }
};

exports.list = async (req, res, next) => {
  const page = parseInt(req.query.page || "1", 10);
  if (page < 1) {
    return res.sendStatus(400);
  }

  const { tag, username } = req.query;
  const query = {
    ...(username ? { "user.username": username } : {}),
    ...(tag ? { tags: tag } : {}),
  };

  try {
    const posts = await Post.find(query)
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .lean()
      .exec();
    const postCount = await Post.countDocuments(query).exec();
    res.set("Last-Page", Math.ceil(postCount / 10));
    res.json(
      posts.map((post) => ({
        ...post,
        body:
          post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      })),
    );
  } catch (e) {
    next(e);
  }
};

exports.read = (req, res) => {
  res.json(req.post);
};

exports.remove = async (req, res, next) => {
  const { id } = req.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};

exports.update = async (req, res, next) => {
  const result = postUpdateSchema.safeParse(req.body);
  if (!result.success) {
    return res
      .status(400)
      .json({ message: result.error.errors.map((err) => err.message) });
  }

  const { id } = req.params;
  try {
    const post = await Post.findByIdAndUpdate(id, result.data, {
      new: true,
    }).exec();
    if (!post) {
      return res.sendStatus(404);
    }
    res.json(post);
  } catch (e) {
    next(e);
  }
};

exports.checkOwnPost = (req, res, next) => {
  const { user, post } = req;
  if (!user || post.user._id.toString() !== user._id) {
    return res.sendStatus(403);
  }
  next();
};
