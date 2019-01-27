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

var showStages = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _utils.sleep)(2);

          case 2:
            _framer.animate.easeOut(_datas.stages.loadingOpacity, 0, {
              duration: 0.4
            });

            _context.next = 5;
            return (0, _utils.sleep)(1);

          case 5:

            _framer.animate.easeOut(_datas.stages.opacity, 1, {
              duration: 0.2
            });
            // stages.top.set(-100)
            _framer.animate.easeOut(_datas.stages.top, 0, {
              duration: 0.2
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function showStages() {
    return _ref.apply(this, arguments);
  };
}();

exports.default = showStages;