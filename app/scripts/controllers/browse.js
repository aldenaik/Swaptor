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
            $scope.testEmail="Hey Swapper! I am interested in swapping your " + oneItem.name + " for my " + oneItem.name+". Here is my description; "+oneItem.description
        };

        $scope.selectDeleteItem= function(oneItem){
            console.log(oneItem);
            $scope.currentItem = oneItem;
//                $scope.select = $scope.currentItem;
            $scope.deleteNotice="Click delete if you want to delete your " + oneItem.name + " from your potential items to trade..name."

        };



 });//////end of controller
