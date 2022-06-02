const mongoose = require("mongoose");

const __Cart = require("../../models/cart/cart");

module.exports = class CartController {
    async getUserCart(req) {
        if (!req.user) {
            return "login to continue";
        }
        return __Cart.find({userId: req.user._id});

    }

    async AddToCart(req) {
        if (!req.user) {
            return "login to continue";
        }
        try {
            if (req.body.offline) {
                for (const cartItem of req.body.offline) {
                    await __Cart.create({cartItem, userId: req.user._id})
                }
                const response = await __Cart.find({userId: req.user._id});
                return response
            } else {
                await __Cart.create({...req.body, userId: req.user._id})
                const response = await __Cart.find({userId: req.user._id});
                return response

            }
        } catch (err) {
            console.log(err)
            return ("internal server error")
        }
    }
};
