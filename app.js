
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var about = require('./routes/about');
var soundboard = require('./routes/soundboard');
var fauxfilm = require('./routes/fauxfilm');
var photo = require('./routes/photo');
var yoga = require('./routes/yoga');
var quest = require('./routes/quest');
var drawing = require('./routes/drawing');
var fac = require('./routes/fac');
var readimagine = require('./routes/readimagine');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/soundboard', soundboard.view);
app.get('/fauxfilm', fauxfilm.view);
app.get('/about', about.view);
app.get('/photo', photo.view);
app.get('/yoga', yoga.view);
app.get('/quest', quest.view);
app.get('/drawing', drawing.view);
app.get('/fac', fac.view);
app.get('/readimagine', readimagine.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
