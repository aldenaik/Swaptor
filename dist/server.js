'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    AWS = require('aws-sdk'),
    fs = require('fs');




// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

// Connect to database
//var db = mongoose.connect("mongodb://aldenaik:password123@ds037407.mongolab.com:37407/swaptor");


// Bootstrap models
var modelsPath = path.join(__dirname, 'lib/models');
fs.readdirSync(modelsPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(modelsPath + '/' + file);
  }
});

// Populate empty DB with sample data
require('./lib/config/dummydata');
  
// Passport Configuration
var passport = require('./lib/config/passport');

var app = express();

// Express settings
require('./lib/config/express')(app);

// Routing
require('./lib/routes')(app);

// Start server
app.listen(config.port, function () {
  console.log('Express server listening on port %d in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;