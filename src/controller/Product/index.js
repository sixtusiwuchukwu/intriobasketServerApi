const __ProductModel = require("./../../models/product");
const __UserModel = require("./../../models/user");
// const __CollectionModel = require("./../../models/collection/");
const __CategoryModel = require("./../../models/category");



const cloudinary = require("cloudinary").v2;

const EmailUtils = require("../../utils/emailUtils/emailUtiles");

module.exports = class ProductController {
  async products(req) {
    
    return await __ProductModel.find({});
  }

  async createProduct(
    req,
    productimage,
    productName,
    categoryName,
    collectionName,
    preOrderPrice,
    sellingPrice,
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
          await __ProductModel.create({
            productimage: result.secure_url,
            productName,
            categoryName,
            collectionName,
            preOrderPrice,
            sellingPrice,
            description,
          });
        }
      );
      return "sucessfully created a new product";
    } catch (error) {
      return error;
    }
  }

  async product(req, productId) {
    try {
      if (!req.user) {
        return "please log in to continue";
      }

      let foundProduct = await __ProductModel.findById({ _id: productId });

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
      if (!req.user) {
        return "please log in to continue";
      }
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
      if (!req.user) {
        return "please log in to continue";
      }
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

  async getHomeCollection() {
    try {
      let data = [];
      let collections = await __CollectionModel.find({});
      
      let there = await Promise.all([data]);
    
      let kkk = [...collections];
      kkk.forEach(async (item) => {
        let product = await __ProductModel
          .find({ collectionName: item.collectionName })
          .sort({ _id: -1 })
          .limit(1);
        return data.push({ product });
      });
      console.log(data);
    } catch (error) {
      return error.message;
    }
  }
  async getCategory(req, categoryName) {
    try {
      let result = await __ProductModel
        .find({ categoryName })
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
};
