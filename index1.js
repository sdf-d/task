require('dotenv').config()
const express = require('express')
const path = require('path')



// axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
//   .then(response => {
//     console.log(response.data.url);
//     console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });


const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection
console.log("mongo successful")


var app = express()

// app.use(express.json())



const countriesRouter = require('./routes/countries')
app.use('/countries', countriesRouter)
const salesrepRouter = require('./routes/salesrep')
app.use('/salesrep', salesrepRouter)
const testRouter = require('./routes/test')
app.use('/test', testRouter)





app.get('/', (req,res) => {
    console.log("hellooo")
    resstring = req.query.region  !== undefined ? `<h2>Welcomeeeeeeeee ` + req.query.region + `</h2>` : `<h2>Welcomeeeeeeeee</h2>`
    res.send(resstring)
})







// const Sale = require('./models/sale')
// const Country = require('./models/country')



// task = async () => {
//     const filter = {};
//     const all = await Country.find(filter, {_id : 0}).lean()
//     // .lean().exec(function (err, countries) {
//         // console.log(countries);
//     // });
//     console.log(JSON.stringify(all))
// }

// task = async () => {
//     const result = await axios.get('http://localhost:3000/countries')
//     console.log(JSON.stringify(result.data[0]))
// }

// task()

console.log("here 1")


// app.listen(3000, () => {
//     console.log("Server at 3000!")
// }).on("error", (err) => {
//     process.once('SIGUSR2', function () {
//         process.kill(process.pid, 'SIGUSR2');
//     });

//     process.on('SIGINT', function () {
//         // this is only called on ctrl+c, not restart
//         process.kill(process.pid, 'SIGINT');
//     });
// })

app.listen(3000, () => {
    console.log("Server at 3000!")
})

console.log("here 2")