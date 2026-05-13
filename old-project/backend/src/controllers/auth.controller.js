const { z } = require("zod");
const User = require("../models/user");

const authSchema = z.object({
  username: z
    .string()
    .min(3, "username must be at least 3 characters")
    .max(20, "username must be at most 20 characters"),
  password: z.string().min(1, "password is required"),
});

exports.register = async (req, res, next) => {
  const result = authSchema.safeParse(req.body);
  if (!result.success) {
    return res
      .status(400)
      .json({ message: result.error.errors.map((err) => err.message) });
  }

  const { username, password } = result.data;
  try {
    const exists = await User.findByUsername(username);
    if (exists) {
      return res.sendStatus(409);
    }
    const user = new User({ username });
    await user.setPassword(password);
    await user.save();

    const token = user.generateToken();
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
    res.json(user.serialize());
  } catch (e) {
    next(e);
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.sendStatus(401);
  }
  try {
    const user = await User.findByUsername(username);
    if (!user) {
      return res.sendStatus(401);
    }
    const valid = await user.checkPassword(password);
    if (!valid) {
      return res.sendStatus(401);
    }
    const token = user.generateToken();
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true,
    });
    res.json(user.serialize());
  } catch (e) {
    next(e);
  }
};

exports.check = (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.json(req.user);
};

exports.logout = (req, res) => {
  res.clearCookie("access_token");
  res.sendStatus(204);
};
