const express = require("express");

const router = express.Router();

// const sndmail = require("../../handles/mail");
const User = require("../../models/user");
const UserController = require("../../controller/User");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  let result = await new UserController().userSignup(username, email, password);

  res.send(result);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let result = await new UserController().userLogin(email, password);

  res.send(result);
});

module.exports = router;
