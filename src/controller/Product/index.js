const __ProductModel = require("./../../models/product");
const __UserModel = require("./../../models/user");
const __Checkout = require("./../../models/checkout");
const __CategoryModel = require("./../../models/category");
const Mongoose = require("mongoose")

const cloudinary = require("cloudinary").v2;

const EmailUtils = require("../../utils/emailUtils/emailUtiles");

module.exports = class ProductController {
  async products(req) {
    return await __ProductModel.find({}).sort({ _id: -1 });
  }

  async Adminproducts(req) {
    let { query } = req.params;

    if (query !== "All") {
      return await __ProductModel.find({ inStock: query }).sort({ _id: -1 });
    }
    return await __ProductModel.find({}).sort({ _id: -1 });
  }

  async createProduct(req) {
    try {
      const { _id } = req.user;
      // const admin = await __Admin.findOne({
      //   _id: req.user._id,
      //   role: ["superAdmin", "aggregator", "admin"],
      // });
      // if (!admin) {
      //   return "you are not authorization failed";
      // }

      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });

      await cloudinary.uploader.upload(
        req.body.productImage,
        {
          width: 512,
          height: 512,
          crop: "scale",
          allowed_formats: ["jpg", "png", "jpeg", "svg", "bmp"],
          public_id: "",
          folder: "intriobasket-products",
        },
        async function (error, result) {
          if (error) {
            return error.message;
          }
          await __ProductModel.create({
            ...req.body,
            productimage: result.secure_url,
          });
        }
      );

      return "sucessfully created a new product";
    } catch (error) {
      return error;
    }
  }

  async Getproduct(req,productId) {
    try {
      let foundProduct = await __ProductModel.findById(productId);
  
      if (!foundProduct) {
        return "product not found";
      }
      return foundProduct;
    } catch (error) {
      return error.message;
    }
  }
  async deleteProduct(req, productId) {
    try {
      // if (!req.user) {
      //   return "please log in to continue";
      // }
      let notfoundItem = await __ProductModel.findById(productId);
      if (!notfoundItem) {
        return "item not found";
      }
      await __ProductModel.findByIdAndRemove(productId, (err, deleted) => {
        if (err) {
          return err.message;
        }
      });
      return "product deleted sucessfully";
    } catch (error) {
      return error.message;
    }
  }
  async deleteProducts(req, products) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      await products.forEach(async (productId) => {
        await __ProductModel.findByIdAndRemove(productId);
      }, Promise.resolve());
      return "product deleted sucessfully";
    } catch (error) {
      return error.message;
    }
  }

  async createcollection(req, collectionName) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }

      let isFound = await __CollectionModel.findOne({ collectionName });

      if (isFound) {
        return "collectionName Already exist";
      }

      await __CollectionModel.create({ collectionName });
      return "collection created sucessfully";
    } catch (error) {
      console.log(error.message);
    }
  }
  async createcategory(req, categoryName) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }

      let isFound = await __CategoryModel.findOne({ categoryName });

      if (isFound) {
        return "category Name Already exist";
      }

      await __CategoryModel.create({ categoryName });
      return "category created sucessfully";
    } catch (error) {
      return error.message;
    }
  }
  async getCategories(req) {
    try {
      let result = await __CategoryModel.find({});
      return result;
    } catch (error) {
      return error.message;
    }
  }
  async getCollections(req) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      return await __CollectionModel.find({});
    } catch (error) {
      return error.message;
    }
  }
  async getCollection(req, collectionName) {
    try {
      let result = await __ProductModel
        .find({
          collectionName: collectionName,
        })
        .sort({ _id: -1 });
      if (result.length < 1) {
        return "collection is not found";
      }
      return result;
    } catch (error) {
      return error.message;
    }
  }

  async getRecentSold() {
    let data = await __Checkout.find({}).select("products").sort({ _id: -1 });

    const uniqueOrderProducts = new Set();
    data
      .flatMap((order) => order.products)
      .forEach((item) => {
        uniqueOrderProducts.add(item.product);
      });
    const ordersToString = JSON.stringify([...uniqueOrderProducts]);
    let arr = [...new Set(JSON.parse(ordersToString))];
    let split = arr.slice(0, 10);
    let ids = split.flatMap((id)=>Mongoose.Types.ObjectId(id))
    return await __ProductModel.find({ _id: { $in: ids } });
  }
  async getCategory(category) {
    try {
      let result = await __ProductModel
        .find({ category: category.toUpperCase() })
        .sort({ _id: -1 });
      if (!result) {
        return "category not found";
      }
      return result;
    } catch (error) {
      return error.message;
    }
  }
  async searchProduct(productName) {
    try {
      let result = await __ProductModel.find({
        productName: { $regex: productName, $options: "i" },
      });
      return result;
    } catch (error) {
      return error.message;
    }
  }
  async deleteCategory(req, id) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      await __CategoryModel.findByIdAndRemove(id);
      return "category deleted sucessfully";
    } catch (error) {
      return error.message;
    }
  }
  async deleteCollection(req, id) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }
      await __CollectionModel.findByIdAndRemove(id);

      return "collection deleted sucessfully";
    } catch (error) {
      return error.message;
    }
  }
  async updateProductStatus(req) {
    // if (!req.user) {
    //   return "please log in to continue";
    // }
    await __ProductModel.findOneAndUpdate(
      { _id: req.body.productId },
      { inStock: req.body.inStock }
    );
    return "updated";
  }
  async Updateproduct(req,id) {
    // if (!req.user) {
    //   return "please log in to continue";
    // }
    await __ProductModel.findOneAndUpdate(
      { _id:id },
      { ...req.body }
    );
    return "sucessfully updated product";
  }
};
