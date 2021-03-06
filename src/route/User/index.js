const express = require("express");

const router = express.Router();
const isAuth = require("../../utils/auth/isAuth");
const UserController = require("../../controller/User");

router.post("/signup", async (req, res) => {
  const {fullName, email, password,gender,phone,referal} = req.body;

  let result = await new UserController().userSignup(req,fullName, email, password,gender,phone,referal);

  res.send(result);
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email | !password) {
    return res.status("email and password was not provided");
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
  return res.send(result);
});

// verify forgetpasword code sent to user e of password
router.post("/verifyforgetpasswordcode", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("user Authentication token missing");
  }
  const { code } = req.body;
  if (!code) {
    return res.send("no verification code provided");
  }
  let result = await new UserController().verifyforgetpasswordcode(req, code);
  return res.send(result);
});

router.post("/resetpassword", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("user Authentication token missing");
  }
  const { newPassword } = req.body;
  if (!newPassword) {
    return res.send("newpassword was not provided");
  }
  let result = await new UserController().resetPassword(req, newPassword);
  return res.send(result);
});

router.put("/updateuserprofileimage", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }
  const { profileImage } = req.body;
  if (!profileImage | (profileImage === "")) {
    return res.send("profileImage is not provided");
  }

  const result = await new UserController().updateUserprofileImage(
    req,
    profileImage
  );

  return res.send(result);
});

router.put("/updateUserPassword", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword | !newPassword) {
    return res.send("oldPassword and newPassword is not provided");
  }
  const result = await new UserController().updateUserPassword(
    req,
    oldPassword,
    newPassword
  );

  return res.send(result);
});
router.put("/updateUserProfile", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }


  const result = await new UserController().updateUserProfile(
    req,
  );

  return res.send(result);
});
router.put("/updateUserAddress", isAuth, async (req, res) => {
  if (!req.user) {
    return res.send("please log in to continue");
  }


  const result = await new UserController().updateUserAddress(
    req,
  );

  return res.send(result);
});

router.post("/verifyuser",async(req,res)=>{
  let result = await new UserController().verifyUser(req.query.code,req.query.id)
res.send(result)
})

module.exports = router;
