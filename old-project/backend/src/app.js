const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/api");
const jwtMiddleware = require("./middleware/jwt");

const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });

const app = express();

app.use(express.json());
app.use(jwtMiddleware);
app.use("/api", api);

module.exports = app;
