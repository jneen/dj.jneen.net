(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~googleButton"],{

/***/ "../node_modules/react-google-button/es/GoogleButton.js":
/*!**************************************************************!*\
  !*** ../node_modules/react-google-button/es/GoogleButton.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "../node_modules/react-google-button/es/icons.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "../node_modules/react-google-button/es/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var GoogleButton = function (_PureComponent) {
  _inherits(GoogleButton, _PureComponent);

  function GoogleButton() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoogleButton);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoogleButton.__proto__ || Object.getPrototypeOf(GoogleButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hovered: false
    }, _this.getStyle = function (propStyles) {
      var baseStyle = _this.props.type === 'dark' ? _styles__WEBPACK_IMPORTED_MODULE_3__["darkStyle"] : _styles__WEBPACK_IMPORTED_MODULE_3__["lightStyle"];
      if (_this.state.hovered) {
        return _extends({}, baseStyle, _styles__WEBPACK_IMPORTED_MODULE_3__["hoverStyle"], propStyles);
      }
      if (_this.props.disabled) {
        return _extends({}, baseStyle, _styles__WEBPACK_IMPORTED_MODULE_3__["disabledStyle"], propStyles);
      }
      return _extends({}, baseStyle, propStyles);
    }, _this.mouseOver = function () {
      if (!_this.props.disabled) {
        _this.setState({ hovered: true });
      }
    }, _this.mouseOut = function () {
      if (!_this.props.disabled) {
        _this.setState({ hovered: false });
      }
    }, _this.click = function (e) {
      if (!_this.props.disabled) {
        _this.props.onClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoogleButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          style = _props.style,
          otherProps = _objectWithoutProperties(_props, ['label', 'style']);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'div',
        _extends({}, otherProps, {
          onClick: this.click,
          style: this.getStyle(style),
          onMouseOver: this.mouseOver,
          onMouseOut: this.mouseOut
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_2__["GoogleIcon"], this.props),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'span',
          null,
          label
        )
      );
    }
  }]);

  return GoogleButton;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

GoogleButton.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['light', 'dark']),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
GoogleButton.defaultProps = {
  label: 'Sign in with Google',
  disabled: false,
  type: 'dark',
  onClick: function onClick() {}
};
/* harmony default export */ __webpack_exports__["default"] = (GoogleButton);

/***/ }),

/***/ "../node_modules/react-google-button/es/icons.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-google-button/es/icons.js ***!
  \*******************************************************/
/*! exports provided: GoogleIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleIcon", function() { return GoogleIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "../node_modules/react-google-button/es/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var darkSvg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  'svg',
  {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '46px',
    height: '46px',
    viewBox: '0 0 46 46',
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["svgStyle"]
  },
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'defs',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'filter',
      {
        x: '-50%',
        y: '-50%',
        width: '200%',
        height: '200%',
        filterUnits: 'objectBoundingBox',
        id: 'filter-1'
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feOffset', { dx: '0', dy: '1', 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter1',
        result: 'shadowBlurOuter1'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0',
        'in': 'shadowBlurOuter1',
        type: 'matrix',
        result: 'shadowMatrixOuter1'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feOffset', { dx: '0', dy: '0', 'in': 'SourceAlpha', result: 'shadowOffsetOuter2' }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter2',
        result: 'shadowBlurOuter2'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0',
        'in': 'shadowBlurOuter2',
        type: 'matrix',
        result: 'shadowMatrixOuter2'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'feMerge',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feMergeNode', { 'in': 'shadowMatrixOuter1' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feMergeNode', { 'in': 'shadowMatrixOuter2' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feMergeNode', { 'in': 'SourceGraphic' })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', { id: 'path-2', x: '0', y: '0', width: '40', height: '40', rx: '2' }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', { id: 'path-3', x: '5', y: '5', width: '38', height: '38', rx: '1' })
  ),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    {
      id: 'Google-Button',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd'
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', { id: '9-PATCH', transform: 'translate(-608.000000, -219.000000)' }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      {
        id: 'btn_google_dark_normal',
        transform: 'translate(-1.000000, -1.000000)'
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        {
          id: 'button',
          transform: 'translate(4.000000, 4.000000)',
          filter: 'url(#filter-1)'
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          { id: 'button-bg' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: '#4285F4', fillRule: 'evenodd' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        { id: 'button-bg-copy' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: '#FFFFFF', fillRule: 'evenodd' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        { id: 'logo_googleg_48dp', transform: 'translate(15.000000, 15.000000)' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z',
          id: 'Shape',
          fill: '#4285F4'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z',
          id: 'Shape',
          fill: '#34A853'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z',
          id: 'Shape',
          fill: '#FBBC05'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z',
          id: 'Shape',
          fill: '#EA4335'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', { d: 'M0,0 L18,0 L18,18 L0,18 L0,0 Z', id: 'Shape' })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', { id: 'handles_square' })
    )
  )
);

var lightSvg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  'svg',
  {
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    width: '46px',
    height: '46px',
    viewBox: '0 0 46 46',
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["svgStyle"]
  },
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'defs',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'filter',
      {
        x: '-50%',
        y: '-50%',
        width: '200%',
        height: '200%',
        filterUnits: 'objectBoundingBox',
        id: 'filter-1'
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feOffset', { dx: '0', dy: '1', 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter1',
        result: 'shadowBlurOuter1'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0',
        'in': 'shadowBlurOuter1',
        type: 'matrix',
        result: 'shadowMatrixOuter1'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feOffset', { dx: '0', dy: '0', 'in': 'SourceAlpha', result: 'shadowOffsetOuter2' }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feGaussianBlur', {
        stdDeviation: '0.5',
        'in': 'shadowOffsetOuter2',
        result: 'shadowBlurOuter2'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feColorMatrix', {
        values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0',
        'in': 'shadowBlurOuter2',
        type: 'matrix',
        result: 'shadowMatrixOuter2'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'feMerge',
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feMergeNode', { 'in': 'shadowMatrixOuter1' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feMergeNode', { 'in': 'shadowMatrixOuter2' }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('feMergeNode', { 'in': 'SourceGraphic' })
      )
    ),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', { id: 'path-2', x: '0', y: '0', width: '40', height: '40', rx: '2' })
  ),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    {
      id: 'Google-Button',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd'
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', { id: '9-PATCH', transform: 'translate(-608.000000, -160.000000)' }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      {
        id: 'btn_google_light_normal',
        transform: 'translate(-1.000000, -1.000000)'
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        {
          id: 'button',
          transform: 'translate(4.000000, 4.000000)',
          filter: 'url(#filter-1)'
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          { id: 'button-bg' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: '#FFFFFF', fillRule: 'evenodd' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        { id: 'logo_googleg_48dp', transform: 'translate(15.000000, 15.000000)' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z',
          id: 'Shape',
          fill: '#4285F4'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z',
          id: 'Shape',
          fill: '#34A853'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z',
          id: 'Shape',
          fill: '#FBBC05'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
          d: 'M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z',
          id: 'Shape',
          fill: '#EA4335'
        }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', { d: 'M0,0 L18,0 L18,18 L0,18 L0,0 Z', id: 'Shape' })
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', { id: 'handles_square' })
    )
  )
);

var disabledSvg = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
  'svg',
  {
    width: '46px',
    height: '46px',
    viewBox: '0 0 46 46',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    style: _styles__WEBPACK_IMPORTED_MODULE_2__["svgStyle"]
  },
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'defs',
    null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('rect', { id: 'path-1', x: '0', y: '0', width: '40', height: '40', rx: '2' })
  ),
  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'g',
    {
      id: 'Google-Button',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd'
    },
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', { id: '9-PATCH', transform: 'translate(-788.000000, -219.000000)' }),
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      'g',
      {
        id: 'btn_google_dark_disabled',
        transform: 'translate(-1.000000, -1.000000)'
      },
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        'g',
        { id: 'button', transform: 'translate(4.000000, 4.000000)' },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          'g',
          { id: 'button-bg' },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fillOpacity: '0.08', fill: '#000000', fillRule: 'evenodd' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' }),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('use', { fill: 'none' })
        )
      ),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('path', {
        d: 'M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z',
        id: 'Shape-Copy',
        fillOpacity: '0.4',
        fill: '#000000'
      }),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('g', { id: 'handles_square' })
    )
  )
);

var GoogleIcon = function GoogleIcon(_ref) {
  var disabled = _ref.disabled,
      type = _ref.type;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    'div',
    { style: !disabled ? _styles__WEBPACK_IMPORTED_MODULE_2__["iconStyle"] : _extends({}, _styles__WEBPACK_IMPORTED_MODULE_2__["iconStyle"], _styles__WEBPACK_IMPORTED_MODULE_2__["disabledIconStyle"]) },
    !disabled ? type === 'dark' ? darkSvg : lightSvg : disabledSvg
  );
};

GoogleIcon.propTypes = {
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['light', 'dark'])
};

GoogleIcon.defaultProps = {
  type: 'dark'
};

/***/ }),

/***/ "../node_modules/react-google-button/es/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/react-google-button/es/index.js ***!
  \*******************************************************/
/*! exports provided: GoogleButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GoogleButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GoogleButton */ "../node_modules/react-google-button/es/GoogleButton.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GoogleButton", function() { return _GoogleButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _GoogleButton__WEBPACK_IMPORTED_MODULE_0__["default"]; });






/***/ }),

/***/ "../node_modules/react-google-button/es/styles.js":
/*!********************************************************!*\
  !*** ../node_modules/react-google-button/es/styles.js ***!
  \********************************************************/
/*! exports provided: darkStyle, lightStyle, iconStyle, svgStyle, hoverStyle, disabledStyle, disabledIconStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkStyle", function() { return darkStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightStyle", function() { return lightStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconStyle", function() { return iconStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgStyle", function() { return svgStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoverStyle", function() { return hoverStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledStyle", function() { return disabledStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disabledIconStyle", function() { return disabledIconStyle; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var baseStyle = {
  height: '50px',
  width: '240px',
  border: 'none',
  textAlign: 'center',
  verticalAlign: 'center',
  boxShadow: '0 2px 4px 0 rgba(0,0,0,.25)',
  fontSize: '16px',
  lineHeight: '48px',
  display: 'block',
  borderRadius: '1px',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s',
  fontFamily: 'Roboto,arial,sans-serif',
  cursor: 'pointer'
};

var darkStyle = _extends({
  backgroundColor: '#4285f4',
  color: '#fff'
}, baseStyle);

var lightStyle = _extends({
  backgroundColor: '#fff',
  color: 'rgba(0,0,0,.54)'
}, baseStyle);

var iconStyle = {
  width: '48px',
  height: '48px',
  textAlign: 'center',
  verticalAlign: 'center',
  display: 'block',
  marginTop: '1px',
  marginLeft: '1px',
  float: 'left',
  backgroundColor: '#fff',
  borderRadius: '1px',
  whiteSpace: 'nowrap'
};

var svgStyle = {
  width: '48px',
  height: '48px',
  display: 'block'
};

var hoverStyle = {
  boxShadow: '0 0 3px 3px rgba(66,133,244,.3)',
  transition: 'background-color .218s, border-color .218s, box-shadow .218s'

  // export const pressedStyle = {
  //   backgroundColor: '#3367D6'
  // }

};var disabledStyle = {
  backgroundColor: 'rgba(37, 5, 5, .08)',
  color: 'rgba(0, 0, 0, .40)',
  cursor: 'not-allowed'
};

var disabledIconStyle = {
  backgroundColor: 'transparent'
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1idXR0b24vZXMvR29vZ2xlQnV0dG9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZ29vZ2xlLWJ1dHRvbi9lcy9pY29ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1idXR0b24vZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtYnV0dG9uL2VzL3N0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UCxnQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRS9iO0FBQ1Y7QUFDRTtBQUN1Qzs7QUFFNUU7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxvREFBb0QsaURBQVMsR0FBRyxrREFBVTtBQUMxRTtBQUNBLDBCQUEw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O0FBRUEsRUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxFIiwiZmlsZSI6InZlbmRvcnN+Z29vZ2xlQnV0dG9uX2Rldi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHb29nbGVJY29uIH0gZnJvbSAnLi9pY29ucyc7XG5pbXBvcnQgeyBkYXJrU3R5bGUsIGxpZ2h0U3R5bGUsIGRpc2FibGVkU3R5bGUsIGhvdmVyU3R5bGUgfSBmcm9tICcuL3N0eWxlcyc7XG5cbnZhciBHb29nbGVCdXR0b24gPSBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEdvb2dsZUJ1dHRvbiwgX1B1cmVDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdvb2dsZUJ1dHRvbigpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR29vZ2xlQnV0dG9uKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBHb29nbGVCdXR0b24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihHb29nbGVCdXR0b24pKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGhvdmVyZWQ6IGZhbHNlXG4gICAgfSwgX3RoaXMuZ2V0U3R5bGUgPSBmdW5jdGlvbiAocHJvcFN0eWxlcykge1xuICAgICAgdmFyIGJhc2VTdHlsZSA9IF90aGlzLnByb3BzLnR5cGUgPT09ICdkYXJrJyA/IGRhcmtTdHlsZSA6IGxpZ2h0U3R5bGU7XG4gICAgICBpZiAoX3RoaXMuc3RhdGUuaG92ZXJlZCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGJhc2VTdHlsZSwgaG92ZXJTdHlsZSwgcHJvcFN0eWxlcyk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBiYXNlU3R5bGUsIGRpc2FibGVkU3R5bGUsIHByb3BTdHlsZXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBiYXNlU3R5bGUsIHByb3BTdHlsZXMpO1xuICAgIH0sIF90aGlzLm1vdXNlT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBob3ZlcmVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH0sIF90aGlzLm1vdXNlT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFfdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7IGhvdmVyZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghX3RoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25DbGljayhlKTtcbiAgICAgIH1cbiAgICB9LCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhHb29nbGVCdXR0b24sIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbGFiZWwgPSBfcHJvcHMubGFiZWwsXG4gICAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb3RoZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMsIFsnbGFiZWwnLCAnc3R5bGUnXSk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgX2V4dGVuZHMoe30sIG90aGVyUHJvcHMsIHtcbiAgICAgICAgICBvbkNsaWNrOiB0aGlzLmNsaWNrLFxuICAgICAgICAgIHN0eWxlOiB0aGlzLmdldFN0eWxlKHN0eWxlKSxcbiAgICAgICAgICBvbk1vdXNlT3ZlcjogdGhpcy5tb3VzZU92ZXIsXG4gICAgICAgICAgb25Nb3VzZU91dDogdGhpcy5tb3VzZU91dFxuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChHb29nbGVJY29uLCB0aGlzLnByb3BzKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnc3BhbicsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBsYWJlbFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHb29nbGVCdXR0b247XG59KFB1cmVDb21wb25lbnQpO1xuXG5Hb29nbGVCdXR0b24ucHJvcFR5cGVzID0ge1xuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKSxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3Rcbn07XG5Hb29nbGVCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBsYWJlbDogJ1NpZ24gaW4gd2l0aCBHb29nbGUnLFxuICBkaXNhYmxlZDogZmFsc2UsXG4gIHR5cGU6ICdkYXJrJyxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHt9XG59O1xuZXhwb3J0IGRlZmF1bHQgR29vZ2xlQnV0dG9uOyIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgaWNvblN0eWxlLCBkaXNhYmxlZEljb25TdHlsZSwgc3ZnU3R5bGUgfSBmcm9tICcuL3N0eWxlcyc7XG5cbnZhciBkYXJrU3ZnID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgJ3N2ZycsXG4gIHtcbiAgICB2ZXJzaW9uOiAnMS4xJyxcbiAgICB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcbiAgICB3aWR0aDogJzQ2cHgnLFxuICAgIGhlaWdodDogJzQ2cHgnLFxuICAgIHZpZXdCb3g6ICcwIDAgNDYgNDYnLFxuICAgIHN0eWxlOiBzdmdTdHlsZVxuICB9LFxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkZWZzJyxcbiAgICBudWxsLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZmlsdGVyJyxcbiAgICAgIHtcbiAgICAgICAgeDogJy01MCUnLFxuICAgICAgICB5OiAnLTUwJScsXG4gICAgICAgIHdpZHRoOiAnMjAwJScsXG4gICAgICAgIGhlaWdodDogJzIwMCUnLFxuICAgICAgICBmaWx0ZXJVbml0czogJ29iamVjdEJvdW5kaW5nQm94JyxcbiAgICAgICAgaWQ6ICdmaWx0ZXItMSdcbiAgICAgIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdmZU9mZnNldCcsIHsgZHg6ICcwJywgZHk6ICcxJywgJ2luJzogJ1NvdXJjZUFscGhhJywgcmVzdWx0OiAnc2hhZG93T2Zmc2V0T3V0ZXIxJyB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ZlR2F1c3NpYW5CbHVyJywge1xuICAgICAgICBzdGREZXZpYXRpb246ICcwLjUnLFxuICAgICAgICAnaW4nOiAnc2hhZG93T2Zmc2V0T3V0ZXIxJyxcbiAgICAgICAgcmVzdWx0OiAnc2hhZG93Qmx1ck91dGVyMSdcbiAgICAgIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZmVDb2xvck1hdHJpeCcsIHtcbiAgICAgICAgdmFsdWVzOiAnMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjE2OCAwJyxcbiAgICAgICAgJ2luJzogJ3NoYWRvd0JsdXJPdXRlcjEnLFxuICAgICAgICB0eXBlOiAnbWF0cml4JyxcbiAgICAgICAgcmVzdWx0OiAnc2hhZG93TWF0cml4T3V0ZXIxJ1xuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdmZU9mZnNldCcsIHsgZHg6ICcwJywgZHk6ICcwJywgJ2luJzogJ1NvdXJjZUFscGhhJywgcmVzdWx0OiAnc2hhZG93T2Zmc2V0T3V0ZXIyJyB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ZlR2F1c3NpYW5CbHVyJywge1xuICAgICAgICBzdGREZXZpYXRpb246ICcwLjUnLFxuICAgICAgICAnaW4nOiAnc2hhZG93T2Zmc2V0T3V0ZXIyJyxcbiAgICAgICAgcmVzdWx0OiAnc2hhZG93Qmx1ck91dGVyMidcbiAgICAgIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZmVDb2xvck1hdHJpeCcsIHtcbiAgICAgICAgdmFsdWVzOiAnMCAwIDAgMCAwICAgMCAwIDAgMCAwICAgMCAwIDAgMCAwICAwIDAgMCAwLjA4NCAwJyxcbiAgICAgICAgJ2luJzogJ3NoYWRvd0JsdXJPdXRlcjInLFxuICAgICAgICB0eXBlOiAnbWF0cml4JyxcbiAgICAgICAgcmVzdWx0OiAnc2hhZG93TWF0cml4T3V0ZXIyJ1xuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZmVNZXJnZScsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ZlTWVyZ2VOb2RlJywgeyAnaW4nOiAnc2hhZG93TWF0cml4T3V0ZXIxJyB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZmVNZXJnZU5vZGUnLCB7ICdpbic6ICdzaGFkb3dNYXRyaXhPdXRlcjInIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdmZU1lcmdlTm9kZScsIHsgJ2luJzogJ1NvdXJjZUdyYXBoaWMnIH0pXG4gICAgICApXG4gICAgKSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdyZWN0JywgeyBpZDogJ3BhdGgtMicsIHg6ICcwJywgeTogJzAnLCB3aWR0aDogJzQwJywgaGVpZ2h0OiAnNDAnLCByeDogJzInIH0pLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7IGlkOiAncGF0aC0zJywgeDogJzUnLCB5OiAnNScsIHdpZHRoOiAnMzgnLCBoZWlnaHQ6ICczOCcsIHJ4OiAnMScgfSlcbiAgKSxcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZycsXG4gICAge1xuICAgICAgaWQ6ICdHb29nbGUtQnV0dG9uJyxcbiAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgc3Ryb2tlV2lkdGg6ICcxJyxcbiAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgIGZpbGxSdWxlOiAnZXZlbm9kZCdcbiAgICB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2cnLCB7IGlkOiAnOS1QQVRDSCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNjA4LjAwMDAwMCwgLTIxOS4wMDAwMDApJyB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2cnLFxuICAgICAge1xuICAgICAgICBpZDogJ2J0bl9nb29nbGVfZGFya19ub3JtYWwnLFxuICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTEuMDAwMDAwLCAtMS4wMDAwMDApJ1xuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdnJyxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnYnV0dG9uJyxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoNC4wMDAwMDAsIDQuMDAwMDAwKScsXG4gICAgICAgICAgZmlsdGVyOiAndXJsKCNmaWx0ZXItMSknXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2cnLFxuICAgICAgICAgIHsgaWQ6ICdidXR0b24tYmcnIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnIzQyODVGNCcsIGZpbGxSdWxlOiAnZXZlbm9kZCcgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnbm9uZScgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnbm9uZScgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnbm9uZScgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdnJyxcbiAgICAgICAgeyBpZDogJ2J1dHRvbi1iZy1jb3B5JyB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd1c2UnLCB7IGZpbGw6ICcjRkZGRkZGJywgZmlsbFJ1bGU6ICdldmVub2RkJyB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnbm9uZScgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VzZScsIHsgZmlsbDogJ25vbmUnIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCd1c2UnLCB7IGZpbGw6ICdub25lJyB9KVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdnJyxcbiAgICAgICAgeyBpZDogJ2xvZ29fZ29vZ2xlZ180OGRwJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDE1LjAwMDAwMCwgMTUuMDAwMDAwKScgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICAgICBkOiAnTTE3LjY0LDkuMjA0NTQ1NDUgQzE3LjY0LDguNTY2MzYzNjQgMTcuNTgyNzI3Myw3Ljk1MjcyNzI3IDE3LjQ3NjM2MzYsNy4zNjM2MzYzNiBMOSw3LjM2MzYzNjM2IEw5LDEwLjg0NSBMMTMuODQzNjM2NCwxMC44NDUgQzEzLjYzNSwxMS45NyAxMy4wMDA5MDkxLDEyLjkyMzE4MTggMTIuMDQ3NzI3MywxMy41NjEzNjM2IEwxMi4wNDc3MjczLDE1LjgxOTU0NTUgTDE0Ljk1NjM2MzYsMTUuODE5NTQ1NSBDMTYuNjU4MTgxOCwxNC4yNTI3MjczIDE3LjY0LDExLjk0NTQ1NDUgMTcuNjQsOS4yMDQ1NDU0NSBMMTcuNjQsOS4yMDQ1NDU0NSBaJyxcbiAgICAgICAgICBpZDogJ1NoYXBlJyxcbiAgICAgICAgICBmaWxsOiAnIzQyODVGNCdcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgICAgZDogJ005LDE4IEMxMS40MywxOCAxMy40NjcyNzI3LDE3LjE5NDA5MDkgMTQuOTU2MzYzNiwxNS44MTk1NDU1IEwxMi4wNDc3MjczLDEzLjU2MTM2MzYgQzExLjI0MTgxODIsMTQuMTAxMzYzNiAxMC4yMTA5MDkxLDE0LjQyMDQ1NDUgOSwxNC40MjA0NTQ1IEM2LjY1NTkwOTA5LDE0LjQyMDQ1NDUgNC42NzE4MTgxOCwxMi44MzcyNzI3IDMuOTY0MDkwOTEsMTAuNzEgTDAuOTU3MjcyNzI3LDEwLjcxIEwwLjk1NzI3MjcyNywxMy4wNDE4MTgyIEMyLjQzODE4MTgyLDE1Ljk4MzE4MTggNS40ODE4MTgxOCwxOCA5LDE4IEw5LDE4IFonLFxuICAgICAgICAgIGlkOiAnU2hhcGUnLFxuICAgICAgICAgIGZpbGw6ICcjMzRBODUzJ1xuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICAgICBkOiAnTTMuOTY0MDkwOTEsMTAuNzEgQzMuNzg0MDkwOTEsMTAuMTcgMy42ODE4MTgxOCw5LjU5MzE4MTgyIDMuNjgxODE4MTgsOSBDMy42ODE4MTgxOCw4LjQwNjgxODE4IDMuNzg0MDkwOTEsNy44MyAzLjk2NDA5MDkxLDcuMjkgTDMuOTY0MDkwOTEsNC45NTgxODE4MiBMMC45NTcyNzI3MjcsNC45NTgxODE4MiBDMC4zNDc3MjcyNzMsNi4xNzMxODE4MiAwLDcuNTQ3NzI3MjcgMCw5IEMwLDEwLjQ1MjI3MjcgMC4zNDc3MjcyNzMsMTEuODI2ODE4MiAwLjk1NzI3MjcyNywxMy4wNDE4MTgyIEwzLjk2NDA5MDkxLDEwLjcxIEwzLjk2NDA5MDkxLDEwLjcxIFonLFxuICAgICAgICAgIGlkOiAnU2hhcGUnLFxuICAgICAgICAgIGZpbGw6ICcjRkJCQzA1J1xuICAgICAgICB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgncGF0aCcsIHtcbiAgICAgICAgICBkOiAnTTksMy41Nzk1NDU0NSBDMTAuMzIxMzYzNiwzLjU3OTU0NTQ1IDExLjUwNzcyNzMsNC4wMzM2MzYzNiAxMi40NDA0NTQ1LDQuOTI1NDU0NTUgTDE1LjAyMTgxODIsMi4zNDQwOTA5MSBDMTMuNDYzMTgxOCwwLjg5MTgxODE4MiAxMS40MjU5MDkxLDAgOSwwIEM1LjQ4MTgxODE4LDAgMi40MzgxODE4MiwyLjAxNjgxODE4IDAuOTU3MjcyNzI3LDQuOTU4MTgxODIgTDMuOTY0MDkwOTEsNy4yOSBDNC42NzE4MTgxOCw1LjE2MjcyNzI3IDYuNjU1OTA5MDksMy41Nzk1NDU0NSA5LDMuNTc5NTQ1NDUgTDksMy41Nzk1NDU0NSBaJyxcbiAgICAgICAgICBpZDogJ1NoYXBlJyxcbiAgICAgICAgICBmaWxsOiAnI0VBNDMzNSdcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7IGQ6ICdNMCwwIEwxOCwwIEwxOCwxOCBMMCwxOCBMMCwwIFonLCBpZDogJ1NoYXBlJyB9KVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2cnLCB7IGlkOiAnaGFuZGxlc19zcXVhcmUnIH0pXG4gICAgKVxuICApXG4pO1xuXG52YXIgbGlnaHRTdmcgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAnc3ZnJyxcbiAge1xuICAgIHZlcnNpb246ICcxLjEnLFxuICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgIHdpZHRoOiAnNDZweCcsXG4gICAgaGVpZ2h0OiAnNDZweCcsXG4gICAgdmlld0JveDogJzAgMCA0NiA0NicsXG4gICAgc3R5bGU6IHN2Z1N0eWxlXG4gIH0sXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgJ2RlZnMnLFxuICAgIG51bGwsXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICdmaWx0ZXInLFxuICAgICAge1xuICAgICAgICB4OiAnLTUwJScsXG4gICAgICAgIHk6ICctNTAlJyxcbiAgICAgICAgd2lkdGg6ICcyMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMjAwJScsXG4gICAgICAgIGZpbHRlclVuaXRzOiAnb2JqZWN0Qm91bmRpbmdCb3gnLFxuICAgICAgICBpZDogJ2ZpbHRlci0xJ1xuICAgICAgfSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ZlT2Zmc2V0JywgeyBkeDogJzAnLCBkeTogJzEnLCAnaW4nOiAnU291cmNlQWxwaGEnLCByZXN1bHQ6ICdzaGFkb3dPZmZzZXRPdXRlcjEnIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZmVHYXVzc2lhbkJsdXInLCB7XG4gICAgICAgIHN0ZERldmlhdGlvbjogJzAuNScsXG4gICAgICAgICdpbic6ICdzaGFkb3dPZmZzZXRPdXRlcjEnLFxuICAgICAgICByZXN1bHQ6ICdzaGFkb3dCbHVyT3V0ZXIxJ1xuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdmZUNvbG9yTWF0cml4Jywge1xuICAgICAgICB2YWx1ZXM6ICcwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMTY4IDAnLFxuICAgICAgICAnaW4nOiAnc2hhZG93Qmx1ck91dGVyMScsXG4gICAgICAgIHR5cGU6ICdtYXRyaXgnLFxuICAgICAgICByZXN1bHQ6ICdzaGFkb3dNYXRyaXhPdXRlcjEnXG4gICAgICB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ZlT2Zmc2V0JywgeyBkeDogJzAnLCBkeTogJzAnLCAnaW4nOiAnU291cmNlQWxwaGEnLCByZXN1bHQ6ICdzaGFkb3dPZmZzZXRPdXRlcjInIH0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZmVHYXVzc2lhbkJsdXInLCB7XG4gICAgICAgIHN0ZERldmlhdGlvbjogJzAuNScsXG4gICAgICAgICdpbic6ICdzaGFkb3dPZmZzZXRPdXRlcjInLFxuICAgICAgICByZXN1bHQ6ICdzaGFkb3dCbHVyT3V0ZXIyJ1xuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdmZUNvbG9yTWF0cml4Jywge1xuICAgICAgICB2YWx1ZXM6ICcwIDAgMCAwIDAgICAwIDAgMCAwIDAgICAwIDAgMCAwIDAgIDAgMCAwIDAuMDg0IDAnLFxuICAgICAgICAnaW4nOiAnc2hhZG93Qmx1ck91dGVyMicsXG4gICAgICAgIHR5cGU6ICdtYXRyaXgnLFxuICAgICAgICByZXN1bHQ6ICdzaGFkb3dNYXRyaXhPdXRlcjInXG4gICAgICB9KSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdmZU1lcmdlJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgnZmVNZXJnZU5vZGUnLCB7ICdpbic6ICdzaGFkb3dNYXRyaXhPdXRlcjEnIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdmZU1lcmdlTm9kZScsIHsgJ2luJzogJ3NoYWRvd01hdHJpeE91dGVyMicgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2ZlTWVyZ2VOb2RlJywgeyAnaW4nOiAnU291cmNlR3JhcGhpYycgfSlcbiAgICAgIClcbiAgICApLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7IGlkOiAncGF0aC0yJywgeDogJzAnLCB5OiAnMCcsIHdpZHRoOiAnNDAnLCBoZWlnaHQ6ICc0MCcsIHJ4OiAnMicgfSlcbiAgKSxcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZycsXG4gICAge1xuICAgICAgaWQ6ICdHb29nbGUtQnV0dG9uJyxcbiAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgc3Ryb2tlV2lkdGg6ICcxJyxcbiAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgIGZpbGxSdWxlOiAnZXZlbm9kZCdcbiAgICB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2cnLCB7IGlkOiAnOS1QQVRDSCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNjA4LjAwMDAwMCwgLTE2MC4wMDAwMDApJyB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2cnLFxuICAgICAge1xuICAgICAgICBpZDogJ2J0bl9nb29nbGVfbGlnaHRfbm9ybWFsJyxcbiAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC0xLjAwMDAwMCwgLTEuMDAwMDAwKSdcbiAgICAgIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZycsXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2J1dHRvbicsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDQuMDAwMDAwLCA0LjAwMDAwMCknLFxuICAgICAgICAgIGZpbHRlcjogJ3VybCgjZmlsdGVyLTEpJ1xuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdnJyxcbiAgICAgICAgICB7IGlkOiAnYnV0dG9uLWJnJyB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VzZScsIHsgZmlsbDogJyNGRkZGRkYnLCBmaWxsUnVsZTogJ2V2ZW5vZGQnIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VzZScsIHsgZmlsbDogJ25vbmUnIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VzZScsIHsgZmlsbDogJ25vbmUnIH0pLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3VzZScsIHsgZmlsbDogJ25vbmUnIH0pXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZycsXG4gICAgICAgIHsgaWQ6ICdsb2dvX2dvb2dsZWdfNDhkcCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgxNS4wMDAwMDAsIDE1LjAwMDAwMCknIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgICAgZDogJ00xNy42NCw5LjIwNDU0NTQ1IEMxNy42NCw4LjU2NjM2MzY0IDE3LjU4MjcyNzMsNy45NTI3MjcyNyAxNy40NzYzNjM2LDcuMzYzNjM2MzYgTDksNy4zNjM2MzYzNiBMOSwxMC44NDUgTDEzLjg0MzYzNjQsMTAuODQ1IEMxMy42MzUsMTEuOTcgMTMuMDAwOTA5MSwxMi45MjMxODE4IDEyLjA0NzcyNzMsMTMuNTYxMzYzNiBMMTIuMDQ3NzI3MywxNS44MTk1NDU1IEwxNC45NTYzNjM2LDE1LjgxOTU0NTUgQzE2LjY1ODE4MTgsMTQuMjUyNzI3MyAxNy42NCwxMS45NDU0NTQ1IDE3LjY0LDkuMjA0NTQ1NDUgTDE3LjY0LDkuMjA0NTQ1NDUgWicsXG4gICAgICAgICAgaWQ6ICdTaGFwZScsXG4gICAgICAgICAgZmlsbDogJyM0Mjg1RjQnXG4gICAgICAgIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywge1xuICAgICAgICAgIGQ6ICdNOSwxOCBDMTEuNDMsMTggMTMuNDY3MjcyNywxNy4xOTQwOTA5IDE0Ljk1NjM2MzYsMTUuODE5NTQ1NSBMMTIuMDQ3NzI3MywxMy41NjEzNjM2IEMxMS4yNDE4MTgyLDE0LjEwMTM2MzYgMTAuMjEwOTA5MSwxNC40MjA0NTQ1IDksMTQuNDIwNDU0NSBDNi42NTU5MDkwOSwxNC40MjA0NTQ1IDQuNjcxODE4MTgsMTIuODM3MjcyNyAzLjk2NDA5MDkxLDEwLjcxIEwwLjk1NzI3MjcyNywxMC43MSBMMC45NTcyNzI3MjcsMTMuMDQxODE4MiBDMi40MzgxODE4MiwxNS45ODMxODE4IDUuNDgxODE4MTgsMTggOSwxOCBMOSwxOCBaJyxcbiAgICAgICAgICBpZDogJ1NoYXBlJyxcbiAgICAgICAgICBmaWxsOiAnIzM0QTg1MydcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgICAgZDogJ00zLjk2NDA5MDkxLDEwLjcxIEMzLjc4NDA5MDkxLDEwLjE3IDMuNjgxODE4MTgsOS41OTMxODE4MiAzLjY4MTgxODE4LDkgQzMuNjgxODE4MTgsOC40MDY4MTgxOCAzLjc4NDA5MDkxLDcuODMgMy45NjQwOTA5MSw3LjI5IEwzLjk2NDA5MDkxLDQuOTU4MTgxODIgTDAuOTU3MjcyNzI3LDQuOTU4MTgxODIgQzAuMzQ3NzI3MjczLDYuMTczMTgxODIgMCw3LjU0NzcyNzI3IDAsOSBDMCwxMC40NTIyNzI3IDAuMzQ3NzI3MjczLDExLjgyNjgxODIgMC45NTcyNzI3MjcsMTMuMDQxODE4MiBMMy45NjQwOTA5MSwxMC43MSBMMy45NjQwOTA5MSwxMC43MSBaJyxcbiAgICAgICAgICBpZDogJ1NoYXBlJyxcbiAgICAgICAgICBmaWxsOiAnI0ZCQkMwNSdcbiAgICAgICAgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgICAgZDogJ005LDMuNTc5NTQ1NDUgQzEwLjMyMTM2MzYsMy41Nzk1NDU0NSAxMS41MDc3MjczLDQuMDMzNjM2MzYgMTIuNDQwNDU0NSw0LjkyNTQ1NDU1IEwxNS4wMjE4MTgyLDIuMzQ0MDkwOTEgQzEzLjQ2MzE4MTgsMC44OTE4MTgxODIgMTEuNDI1OTA5MSwwIDksMCBDNS40ODE4MTgxOCwwIDIuNDM4MTgxODIsMi4wMTY4MTgxOCAwLjk1NzI3MjcyNyw0Ljk1ODE4MTgyIEwzLjk2NDA5MDkxLDcuMjkgQzQuNjcxODE4MTgsNS4xNjI3MjcyNyA2LjY1NTkwOTA5LDMuNTc5NTQ1NDUgOSwzLjU3OTU0NTQ1IEw5LDMuNTc5NTQ1NDUgWicsXG4gICAgICAgICAgaWQ6ICdTaGFwZScsXG4gICAgICAgICAgZmlsbDogJyNFQTQzMzUnXG4gICAgICAgIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBkOiAnTTAsMCBMMTgsMCBMMTgsMTggTDAsMTggTDAsMCBaJywgaWQ6ICdTaGFwZScgfSlcbiAgICAgICksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdnJywgeyBpZDogJ2hhbmRsZXNfc3F1YXJlJyB9KVxuICAgIClcbiAgKVxuKTtcblxudmFyIGRpc2FibGVkU3ZnID0gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgJ3N2ZycsXG4gIHtcbiAgICB3aWR0aDogJzQ2cHgnLFxuICAgIGhlaWdodDogJzQ2cHgnLFxuICAgIHZpZXdCb3g6ICcwIDAgNDYgNDYnLFxuICAgIHZlcnNpb246ICcxLjEnLFxuICAgIHhtbG5zOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuICAgIHN0eWxlOiBzdmdTdHlsZVxuICB9LFxuICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICdkZWZzJyxcbiAgICBudWxsLFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3JlY3QnLCB7IGlkOiAncGF0aC0xJywgeDogJzAnLCB5OiAnMCcsIHdpZHRoOiAnNDAnLCBoZWlnaHQ6ICc0MCcsIHJ4OiAnMicgfSlcbiAgKSxcbiAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZycsXG4gICAge1xuICAgICAgaWQ6ICdHb29nbGUtQnV0dG9uJyxcbiAgICAgIHN0cm9rZTogJ25vbmUnLFxuICAgICAgc3Ryb2tlV2lkdGg6ICcxJyxcbiAgICAgIGZpbGw6ICdub25lJyxcbiAgICAgIGZpbGxSdWxlOiAnZXZlbm9kZCdcbiAgICB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2cnLCB7IGlkOiAnOS1QQVRDSCcsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNzg4LjAwMDAwMCwgLTIxOS4wMDAwMDApJyB9KSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2cnLFxuICAgICAge1xuICAgICAgICBpZDogJ2J0bl9nb29nbGVfZGFya19kaXNhYmxlZCcsXG4gICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtMS4wMDAwMDAsIC0xLjAwMDAwMCknXG4gICAgICB9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2cnLFxuICAgICAgICB7IGlkOiAnYnV0dG9uJywgdHJhbnNmb3JtOiAndHJhbnNsYXRlKDQuMDAwMDAwLCA0LjAwMDAwMCknIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2cnLFxuICAgICAgICAgIHsgaWQ6ICdidXR0b24tYmcnIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsT3BhY2l0eTogJzAuMDgnLCBmaWxsOiAnIzAwMDAwMCcsIGZpbGxSdWxlOiAnZXZlbm9kZCcgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnbm9uZScgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnbm9uZScgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCgndXNlJywgeyBmaWxsOiAnbm9uZScgfSlcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3BhdGgnLCB7XG4gICAgICAgIGQ6ICdNMjQuMDAxLDI1LjcxIEwyNC4wMDEsMjIuMzYyIEwzMi40MjUsMjIuMzYyIEMzMi41NTEsMjIuOTI5IDMyLjY1LDIzLjQ2IDMyLjY1LDI0LjIwNyBDMzIuNjUsMjkuMzQ2IDI5LjIwMywzMyAyNC4wMSwzMyBDMTkuMDQyLDMzIDE1LjAxLDI4Ljk2OCAxNS4wMSwyNCBDMTUuMDEsMTkuMDMyIDE5LjA0MiwxNSAyNC4wMSwxNSBDMjYuNDQsMTUgMjguNDc0LDE1Ljg5MSAzMC4wMzEsMTcuMzQ5IEwyNy40NzUsMTkuODMzIEMyNi44MjcsMTkuMjIxIDI1LjY5MywxOC41MDEgMjQuMDEsMTguNTAxIEMyMS4wMzEsMTguNTAxIDE4LjYwMSwyMC45NzYgMTguNjAxLDI0LjAwOSBDMTguNjAxLDI3LjA0MiAyMS4wMzEsMjkuNTE3IDI0LjAxLDI5LjUxNyBDMjcuNDU3LDI5LjUxNyAyOC43MjYsMjcuMTMyIDI4Ljk2LDI1LjcxOSBMMjQuMDAxLDI1LjcxOSBMMjQuMDAxLDI1LjcxIFonLFxuICAgICAgICBpZDogJ1NoYXBlLUNvcHknLFxuICAgICAgICBmaWxsT3BhY2l0eTogJzAuNCcsXG4gICAgICAgIGZpbGw6ICcjMDAwMDAwJ1xuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KCdnJywgeyBpZDogJ2hhbmRsZXNfc3F1YXJlJyB9KVxuICAgIClcbiAgKVxuKTtcblxuZXhwb3J0IHZhciBHb29nbGVJY29uID0gZnVuY3Rpb24gR29vZ2xlSWNvbihfcmVmKSB7XG4gIHZhciBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICB0eXBlID0gX3JlZi50eXBlO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAnZGl2JyxcbiAgICB7IHN0eWxlOiAhZGlzYWJsZWQgPyBpY29uU3R5bGUgOiBfZXh0ZW5kcyh7fSwgaWNvblN0eWxlLCBkaXNhYmxlZEljb25TdHlsZSkgfSxcbiAgICAhZGlzYWJsZWQgPyB0eXBlID09PSAnZGFyaycgPyBkYXJrU3ZnIDogbGlnaHRTdmcgOiBkaXNhYmxlZFN2Z1xuICApO1xufTtcblxuR29vZ2xlSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKVxufTtcblxuR29vZ2xlSWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdkYXJrJ1xufTsiLCJpbXBvcnQgX0dvb2dsZUJ1dHRvbiBmcm9tICcuL0dvb2dsZUJ1dHRvbic7XG5leHBvcnQgeyBfR29vZ2xlQnV0dG9uIGFzIEdvb2dsZUJ1dHRvbiB9O1xuaW1wb3J0IF9kZWZhdWx0IGZyb20gJy4vR29vZ2xlQnV0dG9uJztcbmV4cG9ydCB7IF9kZWZhdWx0IGFzIGRlZmF1bHQgfTsiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgYmFzZVN0eWxlID0ge1xuICBoZWlnaHQ6ICc1MHB4JyxcbiAgd2lkdGg6ICcyNDBweCcsXG4gIGJvcmRlcjogJ25vbmUnLFxuICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICB2ZXJ0aWNhbEFsaWduOiAnY2VudGVyJyxcbiAgYm94U2hhZG93OiAnMCAycHggNHB4IDAgcmdiYSgwLDAsMCwuMjUpJyxcbiAgZm9udFNpemU6ICcxNnB4JyxcbiAgbGluZUhlaWdodDogJzQ4cHgnLFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICBib3JkZXJSYWRpdXM6ICcxcHgnLFxuICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZC1jb2xvciAuMjE4cywgYm9yZGVyLWNvbG9yIC4yMThzLCBib3gtc2hhZG93IC4yMThzJyxcbiAgZm9udEZhbWlseTogJ1JvYm90byxhcmlhbCxzYW5zLXNlcmlmJyxcbiAgY3Vyc29yOiAncG9pbnRlcidcbn07XG5cbmV4cG9ydCB2YXIgZGFya1N0eWxlID0gX2V4dGVuZHMoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjNDI4NWY0JyxcbiAgY29sb3I6ICcjZmZmJ1xufSwgYmFzZVN0eWxlKTtcblxuZXhwb3J0IHZhciBsaWdodFN0eWxlID0gX2V4dGVuZHMoe1xuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgY29sb3I6ICdyZ2JhKDAsMCwwLC41NCknXG59LCBiYXNlU3R5bGUpO1xuXG5leHBvcnQgdmFyIGljb25TdHlsZSA9IHtcbiAgd2lkdGg6ICc0OHB4JyxcbiAgaGVpZ2h0OiAnNDhweCcsXG4gIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gIHZlcnRpY2FsQWxpZ246ICdjZW50ZXInLFxuICBkaXNwbGF5OiAnYmxvY2snLFxuICBtYXJnaW5Ub3A6ICcxcHgnLFxuICBtYXJnaW5MZWZ0OiAnMXB4JyxcbiAgZmxvYXQ6ICdsZWZ0JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gIGJvcmRlclJhZGl1czogJzFweCcsXG4gIHdoaXRlU3BhY2U6ICdub3dyYXAnXG59O1xuXG5leHBvcnQgdmFyIHN2Z1N0eWxlID0ge1xuICB3aWR0aDogJzQ4cHgnLFxuICBoZWlnaHQ6ICc0OHB4JyxcbiAgZGlzcGxheTogJ2Jsb2NrJ1xufTtcblxuZXhwb3J0IHZhciBob3ZlclN0eWxlID0ge1xuICBib3hTaGFkb3c6ICcwIDAgM3B4IDNweCByZ2JhKDY2LDEzMywyNDQsLjMpJyxcbiAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQtY29sb3IgLjIxOHMsIGJvcmRlci1jb2xvciAuMjE4cywgYm94LXNoYWRvdyAuMjE4cydcblxuICAvLyBleHBvcnQgY29uc3QgcHJlc3NlZFN0eWxlID0ge1xuICAvLyAgIGJhY2tncm91bmRDb2xvcjogJyMzMzY3RDYnXG4gIC8vIH1cblxufTtleHBvcnQgdmFyIGRpc2FibGVkU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMzcsIDUsIDUsIC4wOCknLFxuICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjQwKScsXG4gIGN1cnNvcjogJ25vdC1hbGxvd2VkJ1xufTtcblxuZXhwb3J0IHZhciBkaXNhYmxlZEljb25TdHlsZSA9IHtcbiAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG59OyJdLCJzb3VyY2VSb290IjoiIn0=