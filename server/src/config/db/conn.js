require('dotenv').config();
const mongoose = require('mongoose');

const connect = async() => {
    try {
        await await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@3h-store-mern.7pvtc.mongodb.net/3h-store-mern?retryWrites=true&w=majority`);

        console.log('connect success')
    } catch (error) {
        console.log('connect fail');
        process.exit(1);
    }
}

module.exports = { connect };