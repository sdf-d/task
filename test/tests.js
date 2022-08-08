var assert = require('assert');
var chai = require('chai')
let chaiHttp = require('chai-http');
var businessLogic = require('../businessLogic')
var server = require('../server')

chai.use(chaiHttp);


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
            chai.expect(businessLogic.solveProblem1(testCountries0_0)).to.deep.equal(testSolutions0_0);
        });

    });
});

describe('SolveProblem1', function () {
    describe('#Test0', function () {
        it('should be equal', function () {
            chai.expect(businessLogic.solveProblem2(testCountries0_0)).to.deep.equal(testSolutions1_0);
        });

    });
});


describe('/GET countries', () => {
    it('it should GET all the countries in db', (done) => {
      chai.request(server)
          .get('/countries')
          .end((err, res) => {
                chai.expect(res).to.have.status(200);
                chai.expect(res.body).to.be.a('array');
            done();
          });
    });
});