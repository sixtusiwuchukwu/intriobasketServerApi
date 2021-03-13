const __UserModel = require("./../../models/user");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const GenerateToken = require("../../utils/generateToken");

module.exports = class UserController {
  async userSignup(username, email, password) {
    let alreadyUser = await __UserModel.findOne({ email });
    if (!alreadyUser) {
      await __UserModel.create({ email, username, password });
      return "user Account created sucessfully";
    }
    return `user with this gmail ${email} already Exit`;
  }

  async userLogin(email, password) {
    let founduser = await __UserModel.findOne({ email });
    if (!founduser) {
      return "user not found";
    }

    const isPassword = await bcrypt.compare(password, founduser.password);

    if (!isPassword) {
      return " incorrect user password";
    }
    let { email: userEmail, username, isAdmin } = founduser;
    return {
      token: await GenerateToken(founduser),
      user: { userEmail, username, isAdmin },
    };
  }
  async forgetpassword() {}

  async verifyforgetpasswordcode() {}

  async resetPassword() {}
};
