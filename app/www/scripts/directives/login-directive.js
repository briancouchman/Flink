'use strict';

angular.module('flink').directive('loginDirective', function(){
  return {
    replace: true,
    templateUrl: 'views/tpl/login.tpl.html'
  }
});
