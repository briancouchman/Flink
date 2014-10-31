'use strict';

angular.module('leeloo').directive('loginDirective', function(){
  return {
    replace: true,
    templateUrl: 'views/tpl/login.tpl.html'
  }
});
