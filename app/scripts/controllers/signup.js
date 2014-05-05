'use strict';

angular.module('swaptorApp')
  .controller('SignupCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};
//        $scope.youKnow = function () {
//            alert('yes');
//        };
//        $scope.youKnow= function(){
//
//            navigator.geolocation.getCurrentPosition(
//                function(position) {
//                    $scope.lat = position.coords.latitude;
//                    $scope.lon = position.coords.longitude;
////                    console.log($scope.lat, $scope.lon);
//                }
//            )
//
//        };

    $scope.register = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
//          navigator.geolocation.getCurrentPosition(
//              function(position) {
//                  $scope.user.lat = position.coords.latitude;
//                  $scope.user.lon = position.coords.longitude;
//                  console.log($scope.user.lat, $scope.user.lon);
//              }
//          )
        Auth.createUser({
          name: $scope.user.name,
          email: $scope.user.email,
          password: $scope.user.password,
            zipcode:$scope.user.zipcode
//            lat: $scope.user.lat,
//            lon: $scope.user.lon
        })

        .then( function() {
          // Account created, redirect to home
          $location.path('/browse');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      }
    };
  });