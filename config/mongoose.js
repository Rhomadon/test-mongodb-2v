const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/mern_db')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connected Error...'))
db.once('open', () => console.log('Database mongoose connected...'))