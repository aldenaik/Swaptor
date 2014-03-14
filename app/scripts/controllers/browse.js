'use strict';

angular.module('swaptorApp')
  .controller('BrowseCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $http.get('/api/items').success(function(response) {
            $scope.tradingItems = response.tradingItems;
        });

        $http.get('/api/useroneitems').success(function(response) {
            $scope.onesitems = response.onesitems;
        });


        $scope.selectItem= function(oneItem){
            console.log(oneItem);
            $scope.currentItem = oneItem;
//                $scope.select = $scope.currentItem;
        };

        $scope.selectItem= function(oneItem){
            console.log(oneItem);
            $scope.currentItem = oneItem;
//                $scope.select = $scope.currentItem;
        };

 });//////end of controller
