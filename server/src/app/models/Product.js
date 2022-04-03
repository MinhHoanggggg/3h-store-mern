const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    productName: String,
    price: Number,
    description: String,
    amount: String,
    img: String,
    slug: String
}, {
    timestamps: true,
});

module.exports = MyModel = mongoose.model('products', Product);