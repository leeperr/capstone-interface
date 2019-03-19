'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
} from 'react-native';

import {
  ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "7756B7E2-DF19-46E5-B33D-9BBC487AB647";

var PosterScene = require('./js/PosterScene/PosterScene.js');

var TwistInterface = createReactClass({
  render: function () {
    return (
      <ViroARSceneNavigator
        initialScene={{
          scene: PosterScene,
        }}
        apiKey={apiKey} />
    );
  }
});

module.exports = TwistInterface;
