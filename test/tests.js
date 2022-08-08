var assert = require('assert');
var chai = require('chai')
var expect = chai.expect
var businessLogic = require('../businessLogic')

testCountries0_0 = [
    {
        name: "c0",
        region: "r0"
    },
    {
        name: "c1",
        region: "r0"
    },
    {
        name: "c2",
        region: "r0"
    }
]

testSolutions0_0 = [
    {
        region: "r0",
        minSalesReq: 1,
        maxSalesReq: 1
    }
]



testSolutions1_0 = [
    {
        region: "r0",
        countryList: ["c0", "c1", "c2"],
        countryCount: 3
    }
]


describe('SolveProblem0', function () {
    describe('#Test0', function () {
        it('should be 1,1', function () {
            expect(businessLogic.solveProblem1(testCountries0_0)).to.deep.equal(testSolutions0_0);
        });

    });
});

describe('SolveProblem1', function () {
    describe('#Test0', function () {
        it('c0, c1, c2', function () {
            expect(businessLogic.solveProblem2(testCountries0_0)).to.deep.equal(testSolutions1_0);
        });

    });
});