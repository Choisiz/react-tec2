const Koa = equire("koa");
const Router = require("koa-router");

const app = new Koa();

const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "Home";
});

router.get("/about/:name?  ", (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? ` ${name}` : "About";
});

router.get("/posts", (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `Post #${id}` : "No post ID provided";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
