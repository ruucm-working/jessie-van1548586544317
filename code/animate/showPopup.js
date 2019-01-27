'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _framer = require('framer');

var _datas = require('../datas');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showPopup = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            log('showPopup!');
            _context.next = 3;
            return (0, _utils.sleep)(30);

          case 3:

            _datas.popup.visible = true;
            _context.next = 6;
            return (0, _utils.sleep)(0.3);

          case 6:

            _datas.popup.boxScale.set(0.6);
            _framer.animate.spring(_datas.popup.boxScale, 1);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function showPopup() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = showPopup;