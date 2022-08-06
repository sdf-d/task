// require('dotenv').config()
// const {sleep} = require('../utils')
const utils = require('../utils')
const express = require('express')
const router = express.Router()
const Country = require('../models/country')


router.get('/', async (req,res) => {
    console.log("countries endpoint called")
    const isRegionSpecified = req.query.region !== undefined
    const region = req.query.region?.toUpperCase()
    // const filter = isRegionSpecified ? {region : new RegExp(`^${region}$`, 'i')} : {}
    const filter = isRegionSpecified ? {region : region} : {}
    const test0 = await Country.aggregate([{$project: {region: {$toUpper: '$region'}, name: 1, _id: 0}},
        {$match: filter}])
        // {$match: { region: new RegExp(`^${region}$`, 'i')}}])
        const all = await Country.find(filter, {_id : 0}).lean()
    // resstring = isRegionSpecified ? `<h2>Welcomeeeeeeee ` + req.query.region + `</h2>` : `<h2>Welcomeeee</h2>`
    // console.log(utils.prettyPrint(test0))
    res.json(test0)
    // res.send(resstring)
})


module.exports = router