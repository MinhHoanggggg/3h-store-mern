const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cart = new Schema({
    idUser: String,
    qty: String,
    productName: String
});

module.exports = MyModel = mongoose.model('carts', Cart);