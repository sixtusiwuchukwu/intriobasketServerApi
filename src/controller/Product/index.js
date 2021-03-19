const __ProductModel = require("./../../models/product");

const bcrypt = require("bcrypt");

const cloudinary = require("cloudinary").v2;

const GenerateToken = require("../../utils/generateToken");

const GenerateCode = require("../../utils/generateVerificationCode");

const EmailUtils = require("../../utils/emailUtils/emailUtiles");

module.exports = class ProductController {
  async products() {
    return await __ProductModel.find({});
  }
};
