const express = require('express')
const router = express.Router()
const axios = require('axios');
const businessLogic = require('../businessLogic')
const utils = require('../utils')


router.get('/', async (req,res) => {
    console.log("salesrep endpoint called")
    const result = await axios.get('http://localhost:3000/countries')
    var data = result.data
    var newdata = businessLogic.solveProblem2(data)
    res.json(newdata)
})


module.exports = router