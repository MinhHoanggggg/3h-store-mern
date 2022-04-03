const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();

const Product = require('../app/models/Product');

router.get('/', verifyToken, async(req, res) => {
    try {
        const products = await Product.find({})
        res.json({ success: true, products })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.post('/add', verifyToken, async(req, res) => {
    const { productName, price, description, amount, img, slug } = req.body;

    if (!productName || !price || !description || !amount || !img || !slug)
        return res
            .status(400)
            .json({ success: false, message: 'Vui lòng nhập đầy đủ các trường' });

    //check role
    const checkRole = req.role;
    if (checkRole == 0)
        return res
            .status(400)
            .json({ success: false, message: 'Bạn không có quyền' })

    try {

        const productdb = await Product.findOne({ productName })
        const slugdb = await Product.findOne({ slug })

        if (productdb)
            return res
                .status(400)
                .json({ success: false, message: 'Tên loại sản phẩm đã tồn tại' })

        if (slugdb)
            return res
                .status(400)
                .json({ success: false, message: 'Tên slug đã tồn tại' })

        const newProduct = new Product({ productName, price, description, amount, img, slug });
        await newProduct.save();

        res.json({ success: true, message: 'Thêm loại sản phẩm mới thành công' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.put('/update/:id', verifyToken, async(req, res) => {
    const { productName, price, description, amount, img, slug } = req.body

    if (!productName || !price || !description || !amount || !img || !slug)
        return res
            .status(400)
            .json({ success: false, message: 'Vui lòng nhập đầy đủ các trường' });

    try {
        let updatedProduct = { productName, price, description, amount, img, slug }

        //check role
        const checkRole = req.role;
        if (checkRole == 0)
            return res
                .status(400)
                .json({ success: false, message: 'Bạn không có quyền' })

        const productUpdateCondition = { _id: req.params.id }

        updatedProduct = await Product.findOneAndUpdate(
            productUpdateCondition, updatedProduct, { new: true }
        )

        if (!updatedProduct)
            return res.status(401).json({ success: false, message: 'Đã xảy ra lỗi' })

        res.json({
            success: true,
            message: 'Chỉnh sửa thành công',
            product: updatedProduct
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Đã xảy ra lỗi' })
    }
})

router.delete('/delete/:id', verifyToken, async(req, res) => {
    try {
        const productDeleteCondition = { _id: req.params.id }
        const deletedProduct = await Product.findOneAndDelete(productDeleteCondition);

        //check role
        const checkRole = req.role;
        if (checkRole == 0)
            return res
                .status(400)
                .json({ success: false, message: 'Bạn không có quyền' })

        if (!deletedProduct)
            return res.status(401).json({ success: false, message: 'Đã xảy ra lỗi' })

        res.json({ success: true, message: 'Xóa sản phẩm thành công' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Đã xảy ra lỗi' })
    }
})
module.exports = router;