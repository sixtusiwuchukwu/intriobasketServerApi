const mongoose = require("mongoose");

const checkoutSchema = new mongoose.schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    totalCost: {
      type: Number,
      required: true,
    },
    deliveryStatus: {
      type: String,
    },
    address: {
      state: { type: String },
      location: { type: String },
    },
    products: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product",
      },
    ],
    user: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "user",
    },
  },
  {
    timeStamp: true,
  }
);

module.export = mongoose.model("checkout", checkoutSchema);
