// Dependencies
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var request = require('request');

var app = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  request.get({
    url: "http://01e1e14f.ngrok.io/users",
  }, function(error, response, body) {
    console.log(body);
    res.render('index.ejs', { users: JSON.parse(body) });
  });
  // var stuff = fs.readFileSync('users.json', 'utf-8');
  // stuff = JSON.parse(stuff);
});

app.listen(8080);
