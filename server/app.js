var express = require('express');
var app = express.createServer();

app.configure('development', function(){
	app.use(express.static(__dirname+'/public'));
});

app.get('/', function(req, res){
	res.redirect('/public/index.html');
});

app.get('/guerrometro', function(req, res){
	var orc = Math.round(Math.random()*100);
	
	var data = {
		orc : orc,
		human : 100-orc
	}
	
	res.send(data);
});

app.listen(80);