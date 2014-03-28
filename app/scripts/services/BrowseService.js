'use strict';

angular.module('swaptorApp')
  .service('BrowseService', function BrowseService($q, $http) {
        return{
            tradingitems:function() {
                var deferred = $q.defer();
                            $http({method: 'GET', url:'/api/tradingitems'}).success(function(data){
                        deferred.resolve(data);

//                            $http({method: 'GET', url:'/api/tradingItems'}).success(function(data){
//                            $http({method: 'GET', url:'/api/items'}).success(function(data){


                                }
                );
            return deferred.promise;
        },
            deleteitem:function(id) {
                var deferred = $q.defer();
                $http({method: 'POST', url:'/api/deletetradingitems?id='+id}).success(function(data){
                        deferred.resolve(data);

//                            $http({method: 'GET', url:'/api/tradingItems'}).success(function(data){
//                            $http({method: 'GET', url:'/api/items'}).success(function(data){

                    }
                );
                return deferred.promise;
            }
        };
  });









//
//$http.get('/api/items').success(function(response) {
//    $scope.tradingItems = response.tradingItems;
//
//});
//
//
//
//
//'use strict';
//
//angular.module('teamApp')
//    .service('TurtleService', function TurtleService($q, $http) {
//        return {
//            getTeams: function() {
//                var deferred = $q.defer();
//
//                $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team'}).success(function(data) {
//                        deferred.resolve(data);
//                    }
//                );
//                return deferred.promise;
//            },
//            getTeam: function(id) {
//                var deferred = $q.defer();
//
//                $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/team/'+id}).success(function(data) {
//                        deferred.resolve(data[0]);
//                    }
//                );
//                return deferred.promise;
//            },
//            getCharacter: function(id) {
//
//                var deferred = $q.defer();
//
//                $http({method: 'GET', url: 'http://pure-ocean-3603.herokuapp.com/character/'+id}).success(function(data) {
//                        deferred.resolve(data);
//                    }
//                );
//                return deferred.promise;
//            }
//        };
//    });