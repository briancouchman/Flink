'use strict';

angular.module('glidr').factory('storageService', function() {
  console.log("Loading storageService");


  if(typeof window.localStorage === "undefined"){
    console.error("Local storage not available");
  }

  return {
    store: function(key,value){
      window.localStorage.setItem(key, value);
    },

    get: function(key){
      return window.localStorage.getItem(key);
    },

    clear: function(key, value){
      window.localStorage.removeItem(key);
    },

    clearAll: function(){
      window.localStorage.clear();
    }
  }

});
