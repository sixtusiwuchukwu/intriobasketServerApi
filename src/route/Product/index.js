const express = require("express");

const router = express.Router();

// const sndmail = require("../../handles/mail");
const User = require("../../models/user");

router.post("/", (req, res) => {
  const { fullname, email, username, password } = req.body;
  User.findOne({ username: req.body.username }).then((exiting_user) => {
    if (exiting_user) {
      return res.status(400).send({
        name_error: `user with ${exiting_user.username} already exist`,
      });
    }
    // creating new user
    User.create({
      fullname,
      email,
      username,
      password,
      avarter: null,
    })
      .then((user) => {
        // sndmail(user.email);
        return res.send(user);
      })
      .catch((error) => {
        res.json(error.message);
      });
  });
});

module.exports = router;
