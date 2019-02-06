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

exports.getRandomLocation = function(req, res) {
  let min = MIN_LOCATION;
  let max = MAX_LOCATION;
  if ('min' in req.query) {
    min = req.query.min;
  }
  if ('max' in req.query) {
    max = req.query.max;
  }
  currentLocation.x = randomNumber(max, min);
  currentLocation.y = randomNumber(max, min);
  currentLocation.z = randomNumber(max, min);
  res.json(currentLocation);
}