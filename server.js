'use strict';

var express = require('express'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose');

/**
 * Main application file
// */

//This is Ruby

//S3_BUCKET_NAME = 'CREATE_A_BUCKET_AND_SET_THE_NAME_HERE'
//S3_SECRET_KEY = 'GET_THIS_IN_AWS_CONSOLE'
//S3_ACCESS_KEY = 'GET_THIS_IN_AWS_CONSOLE'
//
//get '/signS3put' do
//    objectName = params[:s3_object_name]
//mimeType = params['s3_object_type']
//expires = Time.now.to_i + 100 # PUT request to S3 must start within 100 seconds
//
//amzHeaders = "x-amz-acl:public-read" # set the public read permission on the uploaded file
//stringToSign = "PUT\n\n#{mimeType}\n#{expires}\n#{amzHeaders}\n/#{S3_BUCKET_NAME}/#{objectName}";
//sig = CGI::escape(Base64.strict_encode64(OpenSSL::HMAC.digest('sha1', S3_SECRET_KEY, stringToSign)))
//
//{
//    signed_request: CGI::escape("#{S3_URL}#{S3_BUCKET_NAME}/#{objectName}?AWSAccessKeyId=#{S3_ACCESS_KEY}&Expires=#{expires}&Signature=#{sig}"),
//        url: "http://s3.amazonaws.com/#{S3_BUCKET_NAME}/#{objectName}"
//}.to_json




// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Application Config
var config = require('./lib/config/config');

// Connect to database
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

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