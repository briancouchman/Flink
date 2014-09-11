var express = require('express');
var fs = require('fs');

var app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/authenticate/:user', function(req, res) {
  var user = req.params.user;
  console.log("User " + user + "authenticated");
  res.send({user: user, authenticated: true});
})


console.log("Server running on port 4444");
app.listen(4444);
