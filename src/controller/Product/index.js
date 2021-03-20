const __ProductModel = require("./../../models/product");
const __UserModel = require("./../../models/user");

const bcrypt = require("bcrypt");

const cloudinary = require("cloudinary").v2;

const GenerateToken = require("../../utils/generateToken");

const GenerateCode = require("../../utils/generateVerificationCode");

const EmailUtils = require("../../utils/emailUtils/emailUtiles");

module.exports = class ProductController {
  async products() {
    return await __ProductModel.find({});
  }

  async createProduct(
    req,
    productimage,
    productname,
    catergory,
    collection,
    price,
    description
  ) {
    try {
      const { _id } = req.user;
      let foundUser = await __UserModel.findById(_id);
      if (!foundUser) {
        return "user not found";
      }
      if (foundUser.isAdmin === false) {
        return "you are not authorised to create a new product";
      }

      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      await cloudinary.uploader.upload(
        productimage,
        {
          width: 512,
          height: 512,
          crop: "scale",
          allowed_formats: ["jpg", "png", "jpeg", "svg", "bmp"],
          public_id: "",
          folder: "shopwitbee-products",
        },
        async function (error, result) {
          if (error) {
            return error.message;
          }
          await __ProductModel.create(
            (productimage = result.secure_url),
            productname,
            catergory,
            collection,
            price,
            description
          );
        }
      );
      return "sucessfully created a new product";
    } catch (error) {
      return error;
    }
  }

  async product(productId) {
    let foundProduct = await __ProductModel.findById({ _id: productId });

    if (!foundProduct) {
      return "product not found";
    }
    return foundProduct;
  }
  async deleteProduct(productId) {
    await __ProductModel.findByIdAndDelete({ _id: productId });
    return "product dddddeleted sucessfully";
  }
};
