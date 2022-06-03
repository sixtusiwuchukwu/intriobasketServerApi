const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  
},{timestamp:true})

module.exports = mongoose.model("cart", CartSchema);
