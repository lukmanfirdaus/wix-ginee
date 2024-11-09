const { Router } = require('express');
const router = Router();

router.post('/orders', (req, res) => {
    const {name, price} = req.body
    res.send(`Order ${name} with price ${price} has been created`)
})

module.exports = router;