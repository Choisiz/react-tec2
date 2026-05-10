const koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const moongoose = require("mongoose");

const { PORT, MONGO_URI } = process.env;

moongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    createFakeData();
  })
  .catch((e) => {
    console.error(e);
  });

const api = require("./api");

const app = new koa();
const router = new Router();

router.use("/api", api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
