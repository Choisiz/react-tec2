const Router = require("koa-router");
const posts = require("/posts");

const api = new Router();

api.use("/posts", posts.routes());
api.use("/auth", auth.routes());

module.exports = api;
