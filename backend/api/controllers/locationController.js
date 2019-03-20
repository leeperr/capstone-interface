'use strict';

var currentLocation = {
  x: 0,
  y: 0,
  z: 0
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

exports.updateLocation = function(req, res) {
  if (!req.body.hasOwnProperty("position")) {
    res.status(422);
  } else {
    currentLocation = req.body.position;
    res.json("Position Updated");
  }
}

exports.getLocation = function(req, res) {
  res.json(currentLocation);
}