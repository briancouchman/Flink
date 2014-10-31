'use strict';

angular.module('leeloo').value('messageFormatter', function(date, nick, message) {
    return date.toLocaleTimeString() + ' - ' +
        nick + ' - ' +
        message + '\n';

});