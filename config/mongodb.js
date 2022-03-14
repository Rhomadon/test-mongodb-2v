const { MongoClient } = require('mongodb')

const url = 'mongodb://127.0.0.1:27017'
const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

client.connect((error, client) => {
    if(error) {
        return console.log('Database not Connected...')
    }
    console.log('Database native connected...')
})

const db = client.db('mern_db')

module.exports = db