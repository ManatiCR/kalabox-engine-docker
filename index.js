'use strict';

module.exports = function(kbox) {

  var VError = require('verror');

  var load = function(s) {

    try {
      return require(s)(kbox);
    } catch (err) {
      throw new VError(err, 'Error loading module "%s".', s);
    }

  };

  load('./lib/tasks.js');
  load('./lib/install.js');

};
