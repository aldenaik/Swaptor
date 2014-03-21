'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session');


/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);
  
  app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

    app.get('/api/items', api.items);
    app.get('/api/userOneItems', api.userOneItems);



//    var nodemailer = require("nodemailer");
//
//// create reusable transport method (opens pool of SMTP connections)
//    var smtpTransport = nodemailer.createTransport("SMTP",{
//        service: "Gmail",
//        auth: {
//            user: "swaptorservice@gmail.com",
//            pass: "swaptortrade"
//        }
//    });
    var middleware = require('./middleware');
    app.get('/api/email', function (req, res) {
//        res.render("partials/browse");
    });

    app.post('/api/email', api.email);
    app.post('/api/pictures', api.pictures);

    // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });


  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};