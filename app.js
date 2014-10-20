"use strict"

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({entended:true}));
app.use(methodOverride('_method'));

// Home
app.get('/', function(req, res){
  res.render('home');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
