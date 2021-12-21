const siteRouter = require('./site');
const productsRouter = require('./products');
const adminRouter = require('./admin');

function route(app) {

   app.use('/admin', adminRouter);
   app.use('/san-pham', productsRouter);
   app.use('/', siteRouter);
}

module.exports = route;