require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')


var app = express()


const countriesRouter = require('./routes/countries')
app.use('/countries', countriesRouter)
const salesrepRouter = require('./routes/salesrep')
app.use('/salesrep', salesrepRouter)
const optimalRouter = require('./routes/optimal')
app.use('/optimal', optimalRouter)



mongoose.connect(process.env.MONGO_URL).then((x) => {
    console.log(`Connected to MongoDB: "${x.connections[0].name}"`)
    app.listen(3000, () => {
        console.log("Server at 3000!")
    })
}).catch((err) => {
    console.error('MongoDB error!\n', err)
})