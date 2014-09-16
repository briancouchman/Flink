var express = require('express')
var AWS = require('aws-sdk');
var fs = require('fs');
var md5 = require('MD5');

var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

var profiles = [];

var app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

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
    if(md5(profile.password) == password){
      res.send({
        user: username,
        description: profile.description
      });
    }
  }
  console.log("User " + username + " cannot be authenticated.");
  res.status(403).send("User " + username + " cannot be authenticated.");
})

app.get('/profiles', function(req,res){
  var _profiles = []

  for(var username in profiles){
    var _profile = profiles[username];
    _profiles.push({
      user: username,
      description: _profile.description
    })
  }

  res.send(_profiles)
});



fs.readFile(__dirname + "/profiles.json", 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  profiles = JSON.parse(data);

  app.listen(8080, function() {
    console.log("Node app is running at localhost:" + app.get('port'))
    console.log(profiles);
  })
});
