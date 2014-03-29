'use strict';

angular.module('swaptorApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'BROWSE',
      'link': '/browse'
    }, {
        'title': 'PROFILE',
        'link': '/profile'
    },{
      'title': 'SETTINGS',
      'link': '/settings'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };
    
    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
