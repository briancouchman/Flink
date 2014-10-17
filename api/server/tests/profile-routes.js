var should = require('should');
var assert = require('assert');
var request = require('supertest');

var routes = require('../controllers/profile-routes.js');

describe('routers', function() {
    var url = 'http://localhost:8080';

    beforeEach('', function () {


    })

    describe('GET /profiles', function () {
        it('should return all the profiles', function () {
            request(url)
                .get('/profiles')
                .expect(200, function(err,res){
                    if (err) return done(err);

                    res.body.should.be.instanceof(Array).and.have.lengthOf(4);;

                    done();
                });

        })
    })
})