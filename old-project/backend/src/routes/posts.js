const express = require("express");
const {
  list,
  write,
  read,
  remove,
  update,
  getPostById,
  checkOwnPost,
} = require("../controllers/posts.controller");
const checkLoggedIn = require("../middleware/checkLoggedIn");

const posts = express.Router();
const post = express.Router();

posts.get("/", list);
posts.post("/", checkLoggedIn, write);

post.get("/", read);
post.delete("/", checkLoggedIn, checkOwnPost, remove);
post.patch("/", checkLoggedIn, checkOwnPost, update);

posts.use("/:id", getPostById, post);

module.exports = posts;
