const express = require('express');
const router = express.Router();

const productsController = require('../app/controller/ProductsController');



router.get('/dam', productsController.dam);
router.get('/vay', productsController.vay);
router.get('/quan', productsController.quan);
router.get('/ao', productsController.ao);
router.get('/phu-kien', productsController.phukien);
router.get('/deal-ban-chay', productsController.banchay);
router.get('/', productsController.products);


module.exports = router;