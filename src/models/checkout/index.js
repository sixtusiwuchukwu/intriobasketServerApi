const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema(
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
      enum:["pending", "delivered","inTransit"],
      default:"pending"
    },
    deliverySchedule:{
      type:String,
    },
    transactionRefId:{
      type:String,
    },
    billingAddress: {
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

module.exports = mongoose.model("checkout", checkoutSchema);
