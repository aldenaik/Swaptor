'use strict';

angular.module('swaptorApp')
  .controller('BrowseCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $http.get('/api/images').success(function(response) {
            $scope.tradingItems = response.tradingItems;
        });

        // On document ready:




    $(function(){

    // Instantiate MixItUp:

 //


        $( "#ipad" ).click(function() {
            $( '.dim,.boxExpand,.ipadExpand' ).animate({
                height: "show"
            }, 300, function() {
                // Animation complete.
            });

        });
        $( ".close" ).click(function() {
            $( '.dim,.boxExpand,.ipadExpand' ).animate({
                height: "hide"
            }, 300, function() {
                // Animation complete.
                });

        });

     });
 });//////end of controller