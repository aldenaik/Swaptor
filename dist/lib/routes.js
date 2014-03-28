'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    session = require('./controllers/session');
//    Object = require('../config/objectDescription');


/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.get('/api/awesomeThings', api.awesomeThings);

  app.post('/api/story', api.saveStory);

  app.post('/api/tradingitems', api.savetradingitems);


    app.post('/api/users', users.create);
  app.put('/api/users', users.changePassword);
  app.get('/api/users/me', users.me);
  app.get('/api/users/:id', users.show);

  app.post('/api/session', session.login);
  app.del('/api/session', session.logout);

//    app.del('/api/tradingitems', api.deltradingitems);

    app.get('/api/tradingitems', api.showtradingitems);


//    app.get('/api/items', api.items);
    app.get('/api/userOneItems', api.userOneItems);


    var middleware = require('./middleware');
    app.get('/api/email', function (req, res) {
//        res.render("partials/browse");
    });
    app.post('/api/deletetradingitems', api.deletetradingitems);


    app.post('/api/email', api.email);

    // All undefined api routes should return a 404
  app.get('/api/*', function(req, res) {
    res.send(404);
  });


  // All other routes to use Angular routing in app/scripts/app.js
  app.get('/partials/*', index.partials);
  app.get('/*', middleware.setUserCookie, index.index);
};