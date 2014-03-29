'use strict';

angular.module('swaptorApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'SETTINGS',
      'link': '/settings'
    },{
        'title': 'PROFILE',
        'link': '/profile'
    },
        {
        'title': 'BROWSE',
        'link': '/browse'
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
