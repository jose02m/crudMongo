const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.read);
router.post('/addProduct', productController.insert);
router.get('/delete/:id', productController.delete);
router.get('/find/:id', productController.find);
router.post('/edit/:id', productController.edit);

module.exports = router;