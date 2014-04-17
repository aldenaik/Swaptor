'use strict';

angular.module('swaptorApp')
  .controller('SettingsCtrl', function ($scope, $location, User, Auth) {
    $scope.errors = {};

        $scope.go = function (browse) {
            $location.path( "/browse" );
        }

    $scope.changePassword = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.changePassword( $scope.user.oldPassword, $scope.user.newPassword )
        .then( function() {
          $scope.message = 'Password successfully changed.';
        })
        .catch( function() {
          form.password.$setValidity('mongoose', false);
          $scope.errors.other = 'Incorrect password';
        });
      }
		};
  });
