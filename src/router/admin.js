const express = require('express');
const router = express.Router();

const AdminController = require('../app/controller/AdminController');



router.get('/', AdminController.Admin)
router.get('/cap-nhat/:id', AdminController.edit_pro)
router.get('/san-pham', AdminController.product)
router.post('/cap-nhat/:id', AdminController.update_pro)
router.post('/xoa/:id', AdminController.delete)
router.post('/', AdminController.Add_pro)

module.exports = router;