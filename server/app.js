var express = require('express');
var app = express.createServer();

app.configure('development', function(){
	app.use(express.static(__dirname+'/public'));
});

app.get('/', function(req, res){
	res.redirect('/public/index.html');
});

app.listen(8080);