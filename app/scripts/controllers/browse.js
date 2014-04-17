'use strict';

angular.module('swaptorApp')
  .controller('BrowseCtrl', function ($scope, $http, tradingitems, $location, Auth, BrowseService) {

             $scope.tradingitems = tradingitems;

             $scope.currentUser = Auth.currentUser();
//            console.log($scope.currentUser);

        $scope.go = function (browse) {
            $location.path( "/browse" );
        }

            $scope.refreshItems= function(){
            $scope.tradingitems=BrowseService.tradingitems();
            }

            $scope.save = function(item){
                $scope.item = item;
            }

            $scope.selectItem= function(currentItems){


                $scope.currentItems = currentItems;
                $scope.testEmail="Hey Swapper! I am interested in swapping your " + $scope.item.name + " for my " + currentItems.name+". Here is my description; "+currentItems.description+". If you are interesting in talking about a possible swap please email me here at "+currentItems.email+"."
            };

            $scope.selectDeleteItem= function(tradingitems){
                $scope.currentItem = tradingitems;
                console.log($scope.currentItem);

            };

            $scope.deleteitem = function(currentItem) {
                console.log(currentItem);
                BrowseService.deleteitem(currentItem._id);
                $scope.refreshItems()

            }


//        $scope.electronics= function(){
//            $scope.electronics = "electronics";
//        };
//        $scope.bikes= function(){
//            $scope.bikes = "bikes";
//
//        };
//        $scope.furniture= function(){
//            $scope.furniture = "furniture";
//        };
//        $scope.clothing= function(){
//            $scope.clothing = "clothing";
//
//        };
 });//////end of controller
