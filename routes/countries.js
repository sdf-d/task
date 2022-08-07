const express = require('express')
const router = express.Router()
const Country = require('../models/country')


router.get('/', async (req, res) => {
    console.log("countries endpoint called")
    const isRegionSpecified = req.query.region !== undefined
    const region = req.query.region?.toUpperCase()
    const filter = isRegionSpecified ? { region: region } : {}
    const countries = await Country.aggregate([
        { $project: { region: { $toUpper: '$region' }, name: 1, _id: 0 } },
        { $match: filter }])
    res.json(countries)
})


module.exports = router