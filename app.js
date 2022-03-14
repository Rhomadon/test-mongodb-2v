const express = require('express')
const app = express()
const productsRouterV1 = require('./app/versiNative/routes')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api', productsRouterV1)
app.listen(3000, () => console.log('Port: 3000'))