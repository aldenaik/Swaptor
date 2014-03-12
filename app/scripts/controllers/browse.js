'use strict';

angular.module('swaptorApp')
  .controller('BrowseCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        // On document ready:

  });

    $(window).load(function(){

    // Instantiate MixItUp:

    $('#Container').mixItUp();


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