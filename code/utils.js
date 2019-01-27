"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sleep = exports.sleep = function sleep(sec) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, sec * 1000);
  });
};