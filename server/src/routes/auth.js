const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const verifyToken = require('../middleware/auth');

const User = require('../app/models/User');

// router.get('/', verifyToken, async(req, res) => {
//     try {
//         const user = await User.findById(req.userId).select('-password')
//         if (!user)
//             return res.status(400).json({ success: false, message: 'User not found' })
//         res.json({ success: true, user })
//     } catch (error) {
//         console.log(error)
//         res.status(500).json({ success: false, message: 'Internal server error' })
//     }
// })

router.post('/register', async(req, res) => {
    const { username, password } = req.body

    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu trống' })

    try {

        const user = await User.findOne({ username })

        if (user)
            return res
                .status(400)
                .json({ success: false, message: 'Tên đăng nhập đã tồn tại' })

        const hashedPassword = await argon2.hash(password)
        const newUser = new User({ username, password: hashedPassword, role: 0 })
        await newUser.save()

        // nhả token
        const accessToken = jwt.sign({ userId: newUser._id },
            process.env.ACCESS_TOKEN_SECRET
        )

        res.json({
            success: true,
            message: 'Tạo tài khoản thành công',
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Không ổn rồi đại vương, đã xảy ra lỗi!' })
    }
})

router.post('/login', async(req, res) => {
    const { username, password } = req.body

    // Simple validation
    if (!username || !password)
        return res
            .status(400)
            .json({ success: false, message: 'Tên đăng nhập hoặc mật khẩu trống' })

    try {

        const user = await User.findOne({ username })
        if (!user)
            return res
                .status(400)
                .json({ success: false, message: 'Tên tài khoản không tồn tại' })

        const passwordValid = await argon2.verify(user.password, password)
        if (!passwordValid)
            return res
                .status(400)
                .json({ success: false, message: 'Sai mật khẩu' })

        // nhả token
        const accessToken = jwt.sign({ userId: user._id },
            process.env.ACCESS_TOKEN_SECRET
        )

        res.json({
            success: true,
            message: 'Chúc mừng bạn đã đăng nhập thành công',
            accessToken
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Không ổn rồi đại vương, đã xảy ra lỗi!' })
    }
})

module.exports = router