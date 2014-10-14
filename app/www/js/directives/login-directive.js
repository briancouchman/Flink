'use strict';

angular.module('glidr').directive('loginDirective', function(){
  return {
    replace: true,
    templateUrl: 'views/tpl/login.tpl.html'
  }
});
