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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hideMenuItemOverlay = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(currentIndex) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // hover effect
            _framer.animate.ease(_datas.menuItem[currentIndex].overlayOpacity, 0, {
              duration: 0.1
            });

            // dim stages content
            _framer.animate.ease(_datas.stages.opacity, 1, {
              duration: 0.1
            });

            // hide menuItemData
            _datas.menuItem[currentIndex].dataScale.set(0);
            _framer.animate.ease(_datas.menuItem[currentIndex].dataOpacity, 0, {
              duration: 0.1
            });

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function hideMenuItemOverlay(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = hideMenuItemOverlay;