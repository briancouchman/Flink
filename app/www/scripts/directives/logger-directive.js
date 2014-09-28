'use strict';

angular.module('flink').directive('loggerDirective', function(){

  var _controller = function(){
    var logger = document.getElementById("logger");

    var oldf = console.log;

    var _log = function(text){
      logger.innerHTML = logger.innerHTML + text + "<br/>";
    }

    console.log = function(){
       _log(arguments[0]);
       oldf.apply(console, arguments);
    }

  }

  return {
    template: '<div id="logger" style="position:absolute; bottom:50px; height: 200px; background-color:white; width: 100%; overflow: auto"></div>',
    controller: _controller
  }
});
