const router = require('express').Router()
const Products = require('./models')

router.get('/v2', (req, res) => {
    Products.find().then(result => res.send(result)).catch(err => res.send(err))
})

router.get('/v2/:id', (req, res) => {
    const {id} = req.params

    Products.findById({_id: id})
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

router.post('/v2', (req, res) => {
    const {title, price, status} = req.body

    Products.create({title, price, status})
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

module.exports = router