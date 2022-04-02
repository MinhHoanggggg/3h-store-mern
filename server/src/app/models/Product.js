const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Product = new Schema({
    productName: String,
    price: Number,
    description: String,
    amount: String,
    img: String,
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

module.exports = MyModel = mongoose.model('products', Product);