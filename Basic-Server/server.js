// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var request = require('request');

var app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  request.get({
    url: "https://carlin-api.herokuapp.com/quote",
  }, function(error, response, body) {
    console.log(body);
    res.render('index.ejs', { object: JSON.parse(body) });
  });
});

app.get('/all', function(req, res) {
  request.get({
    url: "https://carlin-api.herokuapp.com/all",
  }, function(error, response, body) {
    console.log(body);
    res.render('all.ejs', { object: JSON.parse(body) });
  });
});

app.listen(process.env.PORT || 8080);
