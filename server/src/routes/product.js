const express = require('express');
const verifyToken = require('../middleware/auth');
const router = express.Router();

const Product = require('../app/models/Product');


module.exports = router;