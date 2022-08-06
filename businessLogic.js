const utils = require('./utils')

function getGroupedCountries(data) {
    var regions = {}
    data.forEach( (country) => {
        if (country.region in regions) {
            regions[country.region].push(country.name)
        }
        else {
            regions[country.region] = [country.name]
        }
    })
    return regions
}

function getMaxRep(num) {
    return Math.floor(num/3)
}

function getMinRep(num) {
    return Math.ceil(num/7)
}

function withMinMaxReps(groupedCountries) {
    // var retObj = []
    // Object.keys(groupedCountries).forEach((region) => {
    //     retObj.push({...item, minSalesReq: getMinRep(item.length), maxSalesReq: getMaxRep(item.length)})
    // }
    // Object.entries(groupedCountries).map((item) => {
    //     return {...item, minSalesReq: getMinRep(item.length), maxSalesReq: getMaxRep(item.length)}
    // })

    return Object.values(Object.fromEntries(Object.entries(groupedCountries).map(
        ([k,v]) => [k, {region: k, minSalesReq: getMinRep(v.length), maxSalesReq: getMaxRep(v.length)}])
    ))
}


function solveProblem1 (data) {
    // console.log(utils.prettyPrint(data))
    var groupedCountries = getGroupedCountries(data)
    var solvedGroupedCountries = withMinMaxReps(groupedCountries)
    console.log(utils.prettyPrint(solvedGroupedCountries))
    return solvedGroupedCountries
}

function solveProblem2 (data) {
    var groupedCountries = getGroupedCountries(data)

    var reps = []

    Object.entries(groupedCountries).forEach(([region,countries]) => {
        var minRepNum = getMinRep(countries.length)
        var repPerCountry = Math.floor(countries.length / minRepNum)
        var leftOutRepNum = countries.length % repPerCountry
        // var regionReps = []
        var countriesIndex = 0
        for(var i=0; i<minRepNum; i++) {
            var rep = {}
            rep.region = region
            countryCount = repPerCountry
            if (leftOutRepNum > 0) {
                leftOutRepNum -= 1
                countryCount += 1
            }
            rep.countryList = countries.slice(countriesIndex, countriesIndex + countryCount)
            rep.countryCount = countryCount
            reps.push(rep);
        }
    })
    console.log(utils.prettyPrint(reps))
    return reps
}

module.exports = {
    solveProblem1,
    solveProblem2
}