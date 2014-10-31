var express = require('express');
//var AWS = require('aws-sdk');
var fs = require('fs');
//var md5 = require('MD5');

//var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
//AWS.config.credentials = credentials;

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
require('./sockets/base')(io);

var profileRoutes = require('./controllers/profile-routes.js')(app);

app.get('/', function(request, response) {
  response.send('Flink backend server. Ready !')
})

/**
 * Authenticate a profile with a MD5 hashed password
 * @username the username for that profile (i.e. the key)
 * @password a MD5 hashed passwrod to be matched against a MD5 hased version of the password
 */
app.get('/profiles/:username/:password', function(req,res) {
  var username = req.params.username;
  var password = req.params.password;

  var profile = profiles[username];
  if(typeof profile !== "undefined"){
    if(/*md5(profile.password)*/ profile.password == password){
      res.send({
        user: username,
        description: profile.description
      });
    }
  }
  console.log("User " + username + " cannot be authenticated.");
  res.status(403).send("User " + username + " cannot be authenticated.");
})

http.listen(8080, function() {
    console.log("Node backend API is running at localhost:8080");
})


