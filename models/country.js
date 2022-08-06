// require('dotenv').config()
const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({
    name : String,
    region : String
})

module.exports = mongoose.model("Country", countrySchema, "countries")