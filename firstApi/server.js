var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./api/routes/beerRoute.js');
var passport = require('passport');

var port = process.env.PORT || 3129;


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/beerlocker', { useNewUrlParser: true });


var app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(passport.initialize());

routes(app);
app.listen(port);




