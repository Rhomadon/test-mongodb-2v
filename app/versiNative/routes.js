const router = require('express').Router()
const productsControl = require('./controlers')

router.get('/v1', productsControl.index)
router.get('/v1/:id', productsControl.view)
router.post('/v1', productsControl.store)

module.exports = router