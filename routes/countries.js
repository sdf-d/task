// require('dotenv').config()
// const {sleep} = require('../utils')
// const utils = require('../utils')
const express = require('express')
const router = express.Router()
const Country = require('../models/country')


router.get('/', async (req, res) => {
    console.log("countries endpoint called")
    const isRegionSpecified = req.query.region !== undefined
    const region = req.query.region?.toUpperCase()
    // const filter = isRegionSpecified ? {region : new RegExp(`^${region}$`, 'i')} : {}
    const filter = isRegionSpecified ? { region: region } : {}
    const countries = await Country.aggregate([
        { $project: { region: { $toUpper: '$region' }, name: 1, _id: 0 } },
        { $match: filter }])
    // {$match: { region: new RegExp(`^${region}$`, 'i')}}])
    // const all = await Country.find(filter, { _id: 0 }).lean()
    res.json(countries)
    // res.send(resstring)
})


module.exports = router