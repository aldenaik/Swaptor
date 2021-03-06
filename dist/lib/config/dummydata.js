'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
    name : 'HTML5 Boilerplate',
    info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
    awesomeness: 10
  }, {
    name : 'AngularJS',
    info : 'AngularJS is a toolset for building the framework most suited to your application development.',
    awesomeness: 10
  }, {
    name : 'Karma',
    info : 'Spectacular Test Runner for JavaScript.',
    awesomeness: 10
  }, {
    name : 'Express',
    info : 'Flexible and minimalist web application framework for node.js.',
    awesomeness: 10
  }, {
    name : 'MongoDB + Mongoose',
    info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
    awesomeness: 10
  },
//      name:'GoPro',
//            image:'https://s3.amazonaws.com/swapter1/gopro.jpeg',
//            description:'Record all sick stunts and ish you do... and if you dont do anything that cool, just think of all the cool things you will do when you have this camera',
//            want:'Any Electronics',
//            categories: ['all', 'electronics'],
//            email: 'aldenaikele@gmail.com'
//    },

      function() {
      console.log('finished populating things');
    }
  );
});

// Adds a default user
User.find({});
  User.create({
    provider: 'local',
    name: 'Test',
    email: 'test@gmail.com',
  zipcode: 94518,
//      lat: 38,
//     long: -122,
 password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
