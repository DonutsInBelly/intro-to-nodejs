var express = require('express');
var requestLib = require('request');
var ejs = require('ejs');

var app = express();
app.set('view engine', 'ejs');

var lol = function(request, response, next) {
	// do something request
	next();
};

app.get('/', lol,function(request, response) {
		requestLib.get(
				{
					url: 'https://carlin-api.herokuapp.com/all'
				},
				function(error, res, body) {
					response.render('index.ejs' , { data: JSON.parse(body) });
				});
		});

app.listen(process.env.PORT || 8080);
