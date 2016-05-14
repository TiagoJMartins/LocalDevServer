var express = require('express');
var logger = require('morgan');
var path = require('path');

var app = express();

var config = {
	PORT: 3000,
	STATIC_PATH: path.join(__dirname, 'public') 
}

app.use(logger('dev'));
app.use(express.static(config.STATIC_PATH));

require('./routes.js')(app);

app.listen(config.PORT, function() {
	console.log('Dev server listening on localhost port:', config.PORT);
	console.log('Static files being served from:', config.STATIC_PATH);
});