const { Router } = require('express');
const router = Router();
const orderController = require('../../controller/order_controller');

router.get('/', (req, res) => {
    orderController.createOrder(req, res);
})

module.exports = router;