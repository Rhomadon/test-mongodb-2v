const { ObjectId } = require("mongodb")
const db = require("../../config/mongodb")

const index = (req, res) => {
    db.collection('products').find().toArray().then(result => res.send(result)).catch(err => res.send(err))
}

const view = (req, res) => {
    const {id} = req.params

    db.collection('products').findOne({_id: ObjectId(id)})
    .then(result => res.send(result))
    .catch(err => res.send(err))
}

const store = (req, res) => {
    const {title, price, status} = req.body

    db.collection('products').insertOne({title, price, status})
    .then(result => res.send(result))
    .catch(err => res.send(err))
}

module.exports = {
    index,
    view,
    store
}