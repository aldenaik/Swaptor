'use strict';

angular.module('swaptorApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
