var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

var app = express();

var Schema = mongoose.Schema;


var sessionConfig = {
	secret:'CookieMonster', // Secret name for decoding secret and such
	resave:false, // Don't resave session if no changes were made
	saveUninitialized: true, // Don't save session if there was nothing initialized
	name:'myCookie', // Sets a custom cookie name
	cookie: {
		secure: false, // This need to be true, but only on HTTPS
		httpOnly: false, // Forces cookies to only be used over http
		maxAge: 3600000
	}
}
app.use(session(sessionConfig));

app.use(express.static(path.join(__dirname, 'exam2-app', 'dist')));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

require('./server/config/mongoose.js');


var routes_setter = require('./server/config/routes')
routes_setter(app);

app.all('*', function(req,res, next){
  res.sendFile(path.resolve('./exam2-app/dist/index.html'));
})

app.listen(8000, function(){
  console.log("listening on port 8000");
})
