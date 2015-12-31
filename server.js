var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('layout', {page: 'home'});
});

app.get('/portfolio', function(req, res) {
    res.render('layout', {page: 'portfolio'});
});

app.get('/contact', function(req, res) {
    res.render('layout', {page: 'contact'});
});

app.use(express.static(__dirname + '/assets'));

app.listen(3001);
console.log('listening on 3001');
