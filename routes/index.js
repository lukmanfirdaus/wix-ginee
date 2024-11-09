const { Router } = require('express');
const router = Router();
const productRoutes = require('./products');
const orderRoutes = require('./orders');

router.use('/products', productRoutes);
router.use('/orders', orderRoutes);

module.exports = router;