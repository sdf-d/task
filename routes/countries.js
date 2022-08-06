// require('dotenv').config()
// const {sleep} = require('../utils')
const express = require('express')
const router = express.Router()
const Country = require('../models/country')


router.get('/', async (req,res) => {
    console.log("countries endpoint called")
    const isRegionSpecified = req.query.region !== undefined
    const region = req.query.region 
    const filter = isRegionSpecified ? {region : region} : {}
    const all = await Country.find(filter, {_id : 0}).lean()
    // resstring = isRegionSpecified ? `<h2>Welcomeeeeeeee ` + req.query.region + `</h2>` : `<h2>Welcomeeee</h2>`
    res.json(all)
    // res.send(resstring)
})


module.exports = router