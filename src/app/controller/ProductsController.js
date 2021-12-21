const ProductsModel = require('../model/products');

class ProductController {

   products(req, res) {
      // res.render('index', {page: 'dam'})
   }

   dam(req, res) {
      ProductsModel.find({loai: 'Đầm'})
         .then(products => res.render('index', {page: 'dam', products}))
   }

   vay(req, res) {
      ProductsModel.find({loai: 'Váy'})
         .then(products => res.render('index', {page: 'vay', products}))
   }

   ao(req, res) {
      ProductsModel.find({loai: 'Áo'})
         .then(products => res.render('index', {page: 'ao', products}))
   }

   quan(req, res) {
      ProductsModel.find({loai: 'Quần'})
         .then(products => res.render('index', {page: 'quan', products}))
   }

   phukien(req, res) {
      ProductsModel.find({loai: 'Phụ kiện'})
         .then(products => res.render('index', {page: 'phu-kien', products}))
   }

   banchay(req, res) {
      ProductsModel.find().limit(10)
      .then(products => res.render('index',{page: 'deal-ban-chay',products}))
      
   }

}

module.exports = new ProductController;
