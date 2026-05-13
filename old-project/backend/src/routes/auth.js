const express = require("express");
const {
  register,
  login,
  check,
  logout,
} = require("../controllers/auth.controller");

const auth = express.Router();

auth.post("/register", register);
auth.post("/login", login);
auth.get("/check", check);
auth.post("/logout", logout);

module.exports = auth;
