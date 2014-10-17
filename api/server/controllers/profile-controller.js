var fs = require("fs");
//var md5 = require('MD5');

var filepath = __dirname + "/../data/profiles.json";

module.exports = {
    profiles: [],

    file: function(_file){
        filepath = _file;
    },

    init: function(){
        this.read();
        console.log("Profile controller initialized. " + this.profiles.length + " profile ready.");
    },

    isAuthenticated: function(username, password) {
        var profile = this.get(username);
        if(typeof profile !== "undefined"){
            if(/*md5(profile.password)*/ profile.password == password){
               return true;
            }
        }
        return false;
    },

    get: function(username){
        var profile, profiles = this.all();

        for(var i = 0; i < profiles.length; i++){
            var p = profiles[i];
            if(p.username == username){
                profile = p;
                break;
            }
        }

        return profile;
    },

    all: function(){
        var _profiles = [];

        for(var i = 0; i < this.profiles.length; i++){
            var _profile = this.profiles[i];
            _profiles.push({
                username: _profile.username,
                description: _profile.description,
                email: _profile.email,
                password: _profile.password
            })
        }

        return _profiles;
    },

    add: function(profile){
        this.profiles.push(profile);
        this.save();
    },

    save: function(){
        fs.writeFile(filepath, JSON.stringify(this.profiles, null, 2), function (err) {
            if (err) {
                console.log('Error: ' + err);
                return;
            }
        });
    },

    read: function(){
        this.profiles = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    }

}