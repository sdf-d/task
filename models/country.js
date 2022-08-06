// require('dotenv').config()
const mongoose = require('mongoose')

// function toUpper (v) {
//     return v.toUpperCase();
// }

const countrySchema = new mongoose.Schema({
    name : {
        type: String
    },
    region : {
        type: String,
    },
})

module.exports = mongoose.model("Country", countrySchema, "countries")