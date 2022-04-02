const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    categoryName: String,
    discription: String
}, {
    timestamps: true,
});

module.exports = MyModel = mongoose.model('categories', Category);