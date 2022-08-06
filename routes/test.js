// require('dotenv').config()
const {groupBy} = require('../utils')
const express = require('express')
const router = express.Router()
const axios = require('axios');
const businessLogic = require('../businessLogic')
// const Country = require('../models/country')


router.get('/', async (req,res) => {
    console.log("test endpoint called")
    const result = await axios.get('http://localhost:3000/countries')
    var data = result.data
    // var groupedData = groupBy(data, 'region')
    // console.log(JSON.stringify(groupedData, null, 2))
    var newdata = businessLogic.solveProblem1(data)
    // const isRegionSpecified = req.query.region !== undefined
    // const region = req.query.region 
    // const filter = isRegionSpecified ? {region : region} : {}
    // const all = await Country.find(filter, {_id : 0}).lean()
    // resstring = isRegionSpecified ? `<h2>Welcomeeeeeeee ` + req.query.region + `</h2>` : `<h2>Welcomeeee</h2>`
    // res.json(all)
    res.json(newdata)
    // res.send(resstring)
})


module.exports = router