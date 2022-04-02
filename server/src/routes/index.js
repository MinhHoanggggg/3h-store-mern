const authRouter = require('./auth');
const categoryRouter = require('./category');
const productRouter = require('./product');

function route(app) {
    app.use('/api/auth', authRouter);
    app.use('/api/category', categoryRouter);
    app.use('/api/product', productRouter);
}

module.exports = route;