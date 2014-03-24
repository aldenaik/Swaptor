'use strict';

angular.module('swaptorApp')

  /**
   * Removes server error when user updates input
   */
  .directive('mongooseError', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        element.on('keydown', function() {
          return ngModel.$setValidity('mongoose', true);
        });
      }
    };
  })


.directive('sdMixItUp', function (){
       return{
           restrict: 'A',
           link: function(scope, element, attrs){
               var unwatch = scope.$watch(attrs.sdMixItUp, function(val) {
                       if(element.mixItUp('isLoaded'))
                          element.mixItUp('destroy');

                       element.mixItUp();
                       // unwatch();
               });
           }
       };
   });