'use strict';

angular.module('swaptorApp')
  .controller('BrowseCtrl', function ($scope, $http, tradingItems, onesitems) {

  // .controller('BrowseCtrl', ['BrowseService', function ($scope, $http, tradingItems, onesitems) {
  //           ]

//        $http.get('/api/items').success(function(response) {
            $scope.tradingItems = tradingItems;


        // $http.get('/api/useroneitems').success(function(response) {
            $scope.onesitems = onesitems;
        // });


        $scope.selectItem= function(oneItem){
            console.log(oneItem);
            $scope.currentItem = oneItem;
//                $scope.select = $scope.currentItem;
            $scope.testEmail="Hey Swapper! I am interested in swapping your " + oneItem.name + " for my " + oneItem.name+". Here is my description; "+oneItem.description+". If you are interesting in talking about a possible swap please email me here at "+oneItem.email+"."
        };

        //// email////
//        $scope.email()= function(){
//        };


////end email
        $scope.selectDeleteItem= function(oneItem){
            console.log(oneItem);
            $scope.currentItem = oneItem;
//                $scope.select = $scope.currentItem;
            $scope.deleteNotice="Click delete if you want to delete your " + oneItem.name + " from your potential items to trade..name."

        };



 });//////end of controller
