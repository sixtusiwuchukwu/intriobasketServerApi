const express = require("express");

const router = express.Router();

// const sndmail = require("../../handles/mail");
const User = require("../../models/user");
const UserController = require("../../controller/User");

router.post("/signup", async (req, res) => {
  const { username, gmail, password } = req.body;

  let result = await new UserController().userSignup(username, gmail, password);

  res.send(result);
});

router.post("/login", async (req, res) => {
  const { gmail, password } = req.body;

  let result = await new UserController().userLogin(gmail, password);

  res.send(result);
});

module.exports = router;
