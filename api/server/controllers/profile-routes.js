var bodyParser = require('body-parser');
var express = require('express');

var profileController = require('./profile-controller.js')

var router = express.Router();


module.exports = function(app){
    app.use( bodyParser.json() );

    router.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        // log each request to the console
        console.log(req.method, req.url);

        // continue doing what we were doing and go to the route
        next();
    });
    app.use('/', router);

    profileController.init();

    /**
     * Authenticate a profile with a MD5 hashed password
     * @username the username for that profile (i.e. the key)
     * @password a MD5 hashed passwrod to be matched against a MD5 hased version of the password
     */
    router.get('/profiles/:username/authenticate/:password', function(req,res) {
        var username = req.params.username;
        var password = req.params.password;

        if(profileController.isAuthenticated(username, password)){
            var profile = profileController.get(username);

            res.send({
                user: username,
                description: profile.description
            });
        }else{
            console.log("User " + username + " cannot be authenticated.");
            res.status(403).send("User " + username + " cannot be authenticated.");
        }

    })

    router.get('/profiles/fb/:fbId', function(req,res){
        var facebookId = req.params.fbId;

        var profile = profileController.getFb(facebookId);
        if(typeof profile !== "undefined"){
            res.send(profile);
        }else{
            res.status(404).send("Unknown profile")
        }
    })


    /**
     * Find a profile
     * @username the username for that profile (i.e. the key)
     */
    router.get('/profiles/:username', function(req,res) {
        var username = req.params.username;

        var profile = profileController.get(username);
        if(typeof profile !== "undefined"){
            res.send(profile);
        }else{
            res.status(404).send("Unknown profile")
        }
    })

    /**
     * Register a new profile
     */
    router.post('/profiles', function(req,res){
        var profile = req.body;
        profileController.add(profile);
        res.send();
    })


    /**
     * Get all profiles
     */
    router.get('/profiles', function(req,res){
        res.send(profileController.all());
    });

}
