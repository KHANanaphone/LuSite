var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', function(req, res) {
    res.render('layout', {page: 'index.ejs'});
});

app.use(express.static(__dirname + '/assets'));

app.listen(3001);
console.log('listening on 3001');
