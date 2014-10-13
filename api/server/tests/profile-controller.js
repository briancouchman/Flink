var assert = require("assert");
var sinon = require("sinon");

var profileController = require('../controllers/profile-controller.js');

describe('profile controller', function(){
    beforeEach('', function(){
        profileController.file("fakePath");
        profileController.profiles = [
            {username: "profile1"},
            {username: "profile2"}
        ]

    })

    describe('#init()', function(){
        it('should read the saved profiles', function(){
            var spy = sinon.spy(profileController, "init");

            profileController.init();

            assert(spy.called);
        })
    })


    describe('#get()', function(){
        it('should get the requested profile', function(){
            var profile = profileController.get("profile1");

            assert.equal(profile.username, "profile1");
        })
        it('should return undefined is the profile does no exist', function(){
            var profile = profileController.get("notaProfile");

            assert.equal(profile, undefined);
        })
    })

    describe('#all()', function() {
        it('should get all the profiles', function () {
            var profiles = profileController.all();

            assert.equal(profiles.length, 2);
        })
    })

    describe('#add()', function() {
        it('should add a new profile', function () {
            var stub = sinon.stub(profileController, "save", function(){ /* does nothing */})
            profileController.add({username: "newProfile" });

            assert.equal(profileController.all().length, 3);
            stub.restore();
        })
    })
})
