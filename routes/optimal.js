const express = require('express')
const router = express.Router()
const axios = require('axios');
const businessLogic = require('../businessLogic')
const utils = require('../utils')


router.get('/', async (req, res) => {
    try {
        console.log("optimal endpoint called")
        const result = await axios.get('http://localhost:3000/countries')
        var data = result.data
        var solvedData = businessLogic.solveProblem2(data)
        res.json(solvedData)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router