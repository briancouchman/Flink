'use strict';

angular.module('glidr').value('messageFormatter', function(date, nick, message) {
    return date.toLocaleTimeString() + ' - ' +
        nick + ' - ' +
        message + '\n';

});