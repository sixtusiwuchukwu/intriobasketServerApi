const express = require("express");

const router = express.Router();
const User = require("../../models/user");
const isAuth = require("../../utils/auth/isAuth");
const UserController = require("../../controller/User");

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  let result = await new UserController().userSignup(username, email, password);

  res.send(result);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    return res.send("email and password was not provided");
  }

  let result = await new UserController().userLogin(email, password);

  res.send(result);
});

router.post("/forgetpassword", async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.send("user email was not provided");
  }
  let result = await new UserController().forgetpassword(email, req);
  return res.send(result).setHeader({ token: result.token });
});

// verify forgetpasword code sent to user e of password
router.post("/verifyforgetpasswordcode", isAuth, async (req, res) => {
  const { code } = req.body;
  if (!code) {
    return res.send("no verification code provided");
  }
  let result = await new UserController().verifyforgetpasswordcode(
    req.user,
    code
  );
  return res.send(result);
});

router.post("/resetpassword", isAuth, async (req, res) => {
  const { newPassword } = req.body;
  if (!newPassword) {
    return res.send("newpassword was not provided");
  }
  let result = await new UserController().resetPassword(req.user, newPassword);
  return res.send(result);
});

module.exports = router;
