const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();

const Category = require('../app/models/Category');

router.get('/', verifyToken, async(req, res) => {
    try {
        const posts = await Category.find({})
        res.json({ success: true, posts })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.post('/add', verifyToken, async(req, res) => {
    const { categoryName } = req.body;

    if (!categoryName)
        return res
            .status(400)
            .json({ success: false, message: 'Tên loại sản phẩm không được để trống' });

    try {

        const categorydb = await Category.findOne({ categoryName })

        if (categorydb)
            return res
                .status(400)
                .json({ success: false, message: 'Tên loại sản phẩm đã tồn tại' })

        const newCategory = new Category({ categoryName });
        await newCategory.save();

        res.json({ success: true, message: 'Thêm loại sản phẩm mới thành công', category: newCategory });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.put('/update/:id', verifyToken, async(req, res) => {
    const { categoryName } = req.body

    if (!categoryName)
        return res
            .status(400)
            .json({ success: false, message: 'Tên loại sản phẩm không được để trống' })

    try {
        let updatedCate = { categoryName }

        //check role
        const checkRole = req.role;
        if (checkRole == 0)
            return res
                .status(400)
                .json({ success: false, message: 'Bạn không có quyền' })

        const categoryUpdateCondition = { _id: req.params.id }

        updatedCate = await Category.findOneAndUpdate(
            categoryUpdateCondition, updatedCate, { new: true }
        )

        if (!updatedCate)
            return res.status(401).json({ success: false, message: 'Đã xảy ra lỗi' })

        res.json({
            success: true,
            message: 'Chỉnh sửa thành công',
            category: updatedCate
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Đã xảy ra lỗi' })
    }
})

router.delete('/delete/:id', verifyToken, async(req, res) => {
    try {
        const cateDeleteCondition = { _id: req.params.id }
        const deletedCate = await Category.findOneAndDelete(cateDeleteCondition);

        //check role
        const checkRole = req.role;
        if (checkRole == 0)
            return res
                .status(400)
                .json({ success: false, message: 'Bạn không có quyền' })

        if (!deletedCate)
            return res.status(401).json({ success: false, message: 'Đã xảy ra lỗi' })

        res.json({ success: true, message: 'Xóa loại sản phẩm thành công' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Đã xảy ra lỗi' })
    }
})

module.exports = router;