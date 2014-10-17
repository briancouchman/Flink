var express = require('express');
var AWS = require('aws-sdk');
var fs = require('fs');

var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
AWS.config.credentials = credentials;

var app = express();
var http = require('http').createServer(app);
var io = require('socket.io').listen(http);
require('./sockets/base')(io);

var profileRoutes = require('./controllers/profile-routes.js')(app);

app.get('/', function(request, response) {
  response.send('Glidr backend server. Ready !')
})

http.listen(8080, function() {
    console.log("Node backend API is running at localhost:8080");
})


