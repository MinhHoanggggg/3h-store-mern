const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');
const Cart = require('../app/models/Cart')
const Product = require('../app/models/Product')

router.get('/:id', verifyToken, async(req, res) => {
    const idUser = { _id: req.params.id }

    try {
        const carts = await Cart.find({ idUser })

        var cartTotal = 0;

        for(var cart of carts){
            cartTotal += (cart.price * cart.qty);
        }
        
        res.json({ success: true, carts, cartTotal })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.post('/add', verifyToken, async(req, res) => {
    const { idUser, qty, productName, img, price } = req.body;

    if (!qty || !productName)
        return res
            .status(400)
            .json({ success: false, message: 'Fail' });

    try {

        const productDb = await Product.findOne({ productName })
        console.log(productDb);

        if (!productDb)
            return res
                .status(400)
                .json({ success: false, message: 'Sản phẩm đã ngừng cấp' })

        const cartDb = await Cart.findOne({ idUser, productName })
        if (cartDb)
            {
                cartDb.qty++;
                await cartDb.save();
                res.json({ success: true, message: 'Thêm sản phẩm vào giỏ hàng thành công'});
            }
        else
            {
                const newCart = new Cart({ idUser, qty, productName, img, price });
                await newCart.save();
                res.json({ success: true, message: 'Thêm sản phẩm vào giỏ hàng thành công', cart: newCart });
            }

    } catch (error) {
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.put('/update/:id', verifyToken, async(req, res) => {
    const { idUSer, productName, qty } = req.body

    try {
        let updatedCart = { qty };

        const cartUpdateCondition = { _id: req.params.id }

        updatedCart = await Cart.findOneAndUpdate(
            cartUpdateCondition, updatedCart, { new: true }
        )

        if (!updatedCart)
            return res.status(401).json({ success: false, message: 'Đã xảy ra lỗi' })
        
        res.json({
            success: true,
            message: 'Thay đổi số lượng thành công',
            cart: updatedCart
        })

    } catch (error) {
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.delete('/delete/:id', verifyToken, async(req, res) => {
    try {
        const cartDeleteCondition = { _id: req.params.id }
        await Cart.findOneAndDelete(cartDeleteCondition);

        res.json({ success: true, message: 'Đã thay đổi số lượng sản phẩm thành công'});
    } catch (error) {
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

module.exports = router
