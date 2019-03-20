'use strict';
module.exports = function(app) {
  var location = require('../controllers/locationController');

  // location Routes
  app.route('/randomLocation')
    .get(location.getRandomLocation);

  app.route('/location')
    .get(location.getLocation)
    .post(location.updateLocation);
};