const express = require('express');
const router = express.Router();
const siteController = require('../app/controller/SiteController');


router.get('/page/:p', siteController.page);
router.get('/gioi-thieu',siteController.intro);
router.get('/dang-xuat', siteController.logout);
router.get('/dang-nhap', siteController.login);
router.post('/dang-nhap', siteController.signin);
router.post('/cookies', siteController.cookies);
router.get('/dang-ki', siteController.register);
router.post('/dang-ki', siteController.createNewAcc);
router.get('/', siteController.home)

module.exports = router;
