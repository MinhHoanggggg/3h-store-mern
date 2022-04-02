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

router.post('/', verifyToken, async(req, res) => {
    const { categoryName, discription } = req.body;

    if (!categoryName)
        return res
            .status(400)
            .json({ success: false, message: 'Tên loại sản phẩm đã tồn tại' });

    try {
        const newCategory = new Category({ categoryName, discription });
        await newCategory.save();
        res.json({ success: true, message: 'Thêm loại sản phẩm mới thành công', category: newCategory });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Có gì đó không ổn rồi đại vương, đã xảy ra lỗi' });
    }
})

router.put('/:id', verifyToken, async(req, res) => {
    const { catecategoryName, discriptiongoryName } = req.body

    // Simple validation
    if (!categoryName)
        return res
            .status(400)
            .json({ success: false, message: 'Tên loại sản phẩm không được để trống' })

    try {
        let updatedPost = { categoryName, discription }

        updatedPost = await Post.findOneAndUpdate(
            updatedPost, { new: true }
        )

        res.json({
            success: true,
            message: 'Thành công',
            post: updatedPost
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Đã xảy ra lỗi' })
    }
})

router.delete('/:id', verifyToken, async(req, res) => {
    try {
        const deletedCategory = await Post.findOneAndDelete(postDeleteCondition)

        // User not authorised or post not found
        if (!deletedCategory)
            return res.status(401).json({
                success: false,
                message: 'Post not found or user not authorised'
            })

        res.json({ success: true, category: deletedCategory })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
})

module.exports = router;