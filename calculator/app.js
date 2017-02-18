var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

var name = "carlin";

app.get('/', function(req, res) {
  res.render('index.ejs', {
    person: name
  });
});

app.post('/', function(req, res) {
  console.log(req.body.newname);
  name = req.body.newname;
  res.redirect('/');
});

app.listen(8080);
