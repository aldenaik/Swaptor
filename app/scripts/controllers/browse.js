'use strict';

angular.module('swaptorApp')
  .controller('BrowseCtrl', function ($scope, $http, tradingitems, onesitems, Auth, BrowseService) {

            $scope.tradingitems = tradingitems;

            $scope.onesitems = onesitems;

        $scope.currentUser = Auth.currentUser();
            console.log($scope.currentUser);
 //        $scope.openItem= function(tradingitems){
//            console.log(tradingitems);
//
//        };

        $scope.refreshItems= function(){
        $scope.tradingitems=BrowseService.tradingitems();
        }

        $scope.selectItem= function(currentItems){
            console.log(currentItems);
            console.log(tradingitems[1]);

            $scope.currentItems = currentItems;
//                $scope.select = $scope.currentItem;
            $scope.testEmail="Hey Swapper! I am interested in swapping your " + currentItems.name + " for my " + currentItems.name+". Here is my description; "+currentItems.description+". If you are interesting in talking about a possible swap please email me here at "+currentItems.email+"."
        };

        //// email////
//        $scope.email()= function(){
//        };


////end email
        $scope.selectDeleteItem= function(tradingitems){
            $scope.currentItem = tradingitems;
            console.log($scope.currentItem);


//                $scope.select = $scope.currentItem;
//            $scope.deleteNotice="Click delete if you want to delete your " + oneItem.name + " from your potential items to trade..name."


        };

        $scope.deleteitem = function(currentItem) {
            console.log(currentItem);
            BrowseService.deleteitem(currentItem._id);
            $scope.refreshItems()

        }


 });//////end of controller
