const { Schema, model } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  tags: [String],
  publishedDate: {
    type: Date,
    default: Date.now,
  },
});

const Post = model("Post", PostSchema);

module.exports = Post;
