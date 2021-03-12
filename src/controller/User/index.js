const __UserModel = require("./../../models/user");

const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const GenerateToken = require("../../utils/generateToken");

module.exports = class UserController {
  async userSignup(username, gmail, password) {
    let alreadyUser = await __UserModel.findOne({ gmail });
    if (!alreadyUser) {
      await __UserModel.create({ gmail, username, password });
      return "user Account created sucessfully";
    }
    return `user with this gmail ${gmail} already Exit`;
  }

  async userLogin(gmail, password) {
    let founduser = await __UserModel.findOne({ gmail });
    if (!founduser) {
      return "user not found";
    }

    const isPassword = await bcrypt.compare(password, founduser.password);

    if (!isPassword) {
      return " incorrect user password";
    }
    let { gmail: userGmail, username } = founduser;
    return {
      token: await GenerateToken(founduser),
      user: { userGmail, username },
    };
  }
  async forgetpassword() {}

  async verifyforgetpasswordcode() {}

  async resetPassword() {}
};
