const authRouter = require('./auth');
const categoryRouter = require('./category');
const productRouter = require('./product');
const cartRouter = require('./cart');

function route(app) {
    app.use('/api/cart', cartRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
}

module.exports = route;