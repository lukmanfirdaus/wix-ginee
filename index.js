const express = require('express')
const app = express()
const port = 80


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/products', (req, res) => {
    const {name, price} = req.body
    res.send(`Product ${name} with price ${price} has been created`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})