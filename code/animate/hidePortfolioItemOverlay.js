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

var hidePortfolioItemOverlay = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(currentIndex) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _framer.animate.ease(_datas.portfolioItem[currentIndex].overlayOpacity, 0, {
              duration: 0.4
            });

            _framer.animate.ease(_datas.portfolioItem[currentIndex].captionOpacity, 0, {
              duration: 0.4
            });
            _framer.animate.ease(_datas.portfolioItem[currentIndex].captionRight, -50, {
              duration: 0.4
            });

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function hidePortfolioItemOverlay(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = hidePortfolioItemOverlay;