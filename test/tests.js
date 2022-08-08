var assert = require('assert');
var chai = require('chai')
var expect = chai.expect
var businessLogic = require('../businessLogic')

testCountries0_0 = [
    {
        country: "c0",
        region: "r0"
    },
    {
        country: "c1",
        region: "r0"
    },
    {
        country: "c2",
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

describe('SolveProblem0', function () {
    describe('#Test0', function () {
        it('should be 1,1', function () {
            expect(businessLogic.solveProblem1(testCountries0_0)).to.deep.equal(testSolutions0_0);
        });

    });
});