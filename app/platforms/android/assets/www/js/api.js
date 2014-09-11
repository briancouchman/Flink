var apiService = {
  authenticate: function(user, callback){
    $.get( "http://localhost:4444/authenticate/" + user, callback);
  }

}
