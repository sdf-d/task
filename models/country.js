const mongoose = require('mongoose')


const countrySchema = new mongoose.Schema({
    name : {
        type: String
    },
    region : {
        type: String,
    },
})

module.exports = mongoose.model("Country", countrySchema, "countries")