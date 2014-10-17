var express = require('express');
var http = require('http');

var app = express();
var httpServer = http.Server(app);

app.use(express.static(__dirname+'/public'));

app.get('/', function(req, res){
    res.sendfile(__dirname + '/public/index.html');
});
app.listen(3000);
console.log("Leeloo website up and running on port 3000");
