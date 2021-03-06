const mongoose = require("mongoose");

const __Cart = require("../../models/cart/cart");

module.exports = class CartController {
    async getUserCart(req) {
        if (!req.user) {
            return "login to continue";
        }
        let userCart = await __Cart.find({userId: req.user._id});
        return userCart;
    }

    async AddToCart(req) {
        if (!req.user) {
            return "login to continue";
        }
        try {
            let alreadyAdded = await __Cart.findOne({
                userId: req.user._id,
                productId: req.body.productId,
            });
            if (alreadyAdded) {
                return await __Cart.findOneAndUpdate(
                    {userId: req.user._id, productId: req.body.productId},
                    {quantity: alreadyAdded.quantity + 1}
                );
            }
            await __Cart.create({...req.body, userId: req.user._id});
        } catch (err) {
            console.log(err);
            return "internal server error";
        } finally {
            return await __Cart.find({userId: req.user._id});
        }
    }

    async deleteSingleUserCart(req) {
        try {
                await __Cart.findOneAndDelete({userId: req.user._id, productId: req.params.productId});
            return "deleted";
        } catch (err) {
            console.log(err);
            return "internal server";
        }
    }

    async addOffLine(req) {
        try {
            for (const cartItem of req.body) {
                let alreadyAdded = await __Cart.findOne({userId: req.user._id, productId: cartItem.productId,});
                if (alreadyAdded) {
                    await __Cart.findOneAndUpdate({
                        userId: req.user._id,
                        productId: cartItem.productId
                    }, {quantity: alreadyAdded.quantity + cartItem.quantity});
                } else {
                    return await __Cart.create({...cartItem, userId: req.user._id})
                }
            }

            return "success"

        } catch (err) {
            console.log(err)
            return ("internal server error")
        }
    }

    async increaseQuantity(req){
        if(!req.user){
            return "login to continue"
        }
       let isFound = await __Cart.findOne({userId:req.user._id,productId:req.params.Id})

        await __Cart.findOneAndUpdate({userId:req.user._id,productId:req.params.Id},{quantity:isFound.quantity + 1})
    return "updated"
    }
    async decreaseQuantity(req){
        if(!req.user){
            return "login to continue"
        }
       let isFound = await __Cart.findOne({userId:req.user._id,productId:req.params.Id})
        console.log(isFound)
        let noZeros = isFound.quantity === 1 ? 1 : isFound.quantity - 1
        await __Cart.findOneAndUpdate({userId:req.user._id,productId:req.params.Id},{quantity:noZeros})
        return "updated"
    }


};
