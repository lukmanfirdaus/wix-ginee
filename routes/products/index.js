const { Router } = require('express');
const router = Router();
const productController = require('../../controller/product_controller');

router.post('/', (req, res) => {
    productController.createProduct(req, res);
});

router.get('/', (req, res) => {
    productController.getProduct(req, res);
});

module.exports = router;