const { Router } = require('express');
const router = Router();

router.post('/products', (req, res) => {
    const {name, price} = req.body
    res.send(`Product ${name} with price ${price} has been created`)
})

module.exports = router;