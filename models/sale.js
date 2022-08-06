require('dotenv').config()
const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
    id : Object,
    date : Object,
    item : Object,
    price : Object,
    quantity : Object
})

module.exports = mongoose.model("Sale", saleSchema)