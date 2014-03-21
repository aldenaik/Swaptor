'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://aldenaik:password123@ds037407.mongolab.com:37407/swaptor'
  }
};