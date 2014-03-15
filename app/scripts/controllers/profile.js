'use strict';

angular.module('swaptorApp')
    .controller('ProfileCtrl', function ($scope, $http) {
        $http.get('/api/awesomeThings').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });




    });
