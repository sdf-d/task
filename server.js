require('dotenv').config()
const express = require('express')

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection
console.log("mongo successful")


var app = express()


const countriesRouter = require('./routes/countries')
app.use('/countries', countriesRouter)
const salesrepRouter = require('./routes/salesrep')
app.use('/salesrep', salesrepRouter)
const optimalRouter = require('./routes/optimal')
app.use('/optimal', optimalRouter)



app.listen(3000, () => {
    console.log("Server at 3000!")
})

