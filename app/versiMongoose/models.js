const mongoose = require('mongoose')

const productsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true]
    },
    price: {
        type: Number,
        required: [true]
    },
    status: {
        type: String,
        required: [true]
    },
})

const Products = mongoose.model('products', productsSchema)

module.exports = Products