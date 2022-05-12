const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    category: { type: String },
    description: { type: String },
    cost: { type: Number },
    discount_cost: { Number },
    productImage: { type: String },
    inStock: { type: String, enum: ["Yes", "No"], default: "Yes" },
  },
  {
    timestamps: true,
  }
);

// module.exports = mongoose.model("Food_Listing", productSchema);
module.exports = mongoose.model("product", productSchema);
