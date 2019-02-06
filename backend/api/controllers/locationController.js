'use strict';

var currentLocation = {
  x: 1,
  y: 1,
  z: 2
};

const MAX_LOCATION = 3;
const MIN_LOCATION = 1;

function randomNumber(max, min) {
  return (Math.random() * max) + min;
}

exports.getCurrentLocation = function(req, res) {
  currentLocation.x = randomNumber(MAX_LOCATION, MIN_LOCATION);
  currentLocation.y = randomNumber(MAX_LOCATION, MIN_LOCATION);
  currentLocation.z = randomNumber(MAX_LOCATION, MIN_LOCATION);
  res.json(currentLocation);
}