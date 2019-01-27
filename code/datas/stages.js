'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _framer = require('framer');

var top = (0, _framer.Animatable)(-100);
var opacity = (0, _framer.Animatable)(0);
var loadingOpacity = (0, _framer.Animatable)(1);

exports.default = (0, _framer.Data)({
  top: top,
  opacity: opacity,
  currentStage: 0,
  loadingOpacity: loadingOpacity
});