(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~admin~settings"],{

/***/ "../node_modules/@material-ui/core/es/FormControl/formControlState.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/FormControl/formControlState.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formControlState; });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "../node_modules/@material-ui/core/es/Input/Input.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Input/Input.js ***!
  \***********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/index.es.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "../node_modules/@material-ui/core/es/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // @inheritedComponent InputBase







var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};

function Input(props) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["disableUnderline", "classes"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    classes: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, classes, {
      root: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, _defineProperty({}, classes.underline, !disableUnderline)),
      underline: null
    })
  }, other));
}

 true ? Input.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]))]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["componentPropType"],

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The input value, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]))])
} : undefined;
_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"].defaultProps = {
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/Input/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Input/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "../node_modules/@material-ui/core/es/Input/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/es/InputBase/InputBase.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/InputBase/InputBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/index.es.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "../node_modules/@material-ui/core/es/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "../node_modules/@material-ui/core/es/FormControl/FormControlContext.js");
/* harmony import */ var _FormControl_withFormControlContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FormControl/withFormControlContext */ "../node_modules/@material-ui/core/es/FormControl/withFormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/es/utils/reactHelpers.js");
/* harmony import */ var _Textarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Textarea */ "../node_modules/@material-ui/core/es/InputBase/Textarea.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "../node_modules/@material-ui/core/es/InputBase/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */













var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: 0
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    /* Styles applied to the root element. */
    root: {
      // Mimics the default input display property used by browsers for an input.
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.primary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '1.1875em',
      // Reset (19px), match the native input line-height
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Styles applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px")
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      margin: 0,
      // Reset for Safari
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type` is not "text"`. */
    inputType: {
      // type="date" or type="time", etc. have specific styles we need to reset.
      height: '1.1875em' // Reset (19px), match the native input line-height

    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {}
  };
};
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/function (_React$Component) {
  _inherits(InputBase, _React$Component);

  var _super = _createSuper(InputBase);

  function InputBase(props) {
    var _this;

    _classCallCheck(this, InputBase);

    _this = _super.call(this, props);
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (event) {
      var muiFormControl = _this.props.muiFormControl; // Fix a bug with IE 11 where the focus/blur events are triggered
      // while the input is disabled.

      if (Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__["default"])({
        props: _this.props,
        muiFormControl: muiFormControl,
        states: ['disabled']
      }).disabled) {
        event.stopPropagation();
        return;
      }

      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    _this.handleBlur = function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      var muiFormControl = _this.props.muiFormControl;

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    _this.handleChange = function () {
      if (!_this.isControlled) {
        _this.checkDirty(_this.inputRef);
      } // Perform in the willUpdate


      if (_this.props.onChange) {
        var _this$props2;

        (_this$props2 = _this.props).onChange.apply(_this$props2, arguments);
      }
    };

    _this.handleRefInput = function (ref) {
      _this.inputRef = ref;
       true ? warning__WEBPACK_IMPORTED_MODULE_4___default()(!ref || ref instanceof HTMLInputElement || ref.focus, ['Material-UI: you have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` property.', 'Make sure the `inputRef` property is called with a HTMLInputElement.'].join('\n')) : undefined;
      var refProp;

      if (_this.props.inputRef) {
        refProp = _this.props.inputRef;
      } else if (_this.props.inputProps && _this.props.inputProps.ref) {
        refProp = _this.props.inputProps.ref;
      }

      Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_11__["setRef"])(refProp, ref);
    };

    _this.handleClick = function (event) {
      if (_this.inputRef && event.currentTarget === event.target) {
        _this.inputRef.focus();
      }

      if (_this.props.onClick) {
        _this.props.onClick(event);
      }
    };

    _this.isControlled = props.value != null;

    if (_this.isControlled) {
      _this.checkDirty(props);
    }

    return _this;
  }

  _createClass(InputBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.isControlled) {
        this.checkDirty(this.inputRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Book keep the focused state.
      if (!prevProps.disabled && this.props.disabled) {
        var muiFormControl = this.props.muiFormControl;

        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur();
        }
      }

      if (this.isControlled) {
        this.checkDirty(this.props);
      } // else performed in the onChange

    }
  }, {
    key: "checkDirty",
    value: function checkDirty(obj) {
      var muiFormControl = this.props.muiFormControl;

      if (Object(_utils__WEBPACK_IMPORTED_MODULE_13__["isFilled"])(obj)) {
        if (muiFormControl && muiFormControl.onFilled) {
          muiFormControl.onFilled();
        }

        if (this.props.onFilled) {
          this.props.onFilled();
        }

        return;
      }

      if (muiFormControl && muiFormControl.onEmpty) {
        muiFormControl.onEmpty();
      }

      if (this.props.onEmpty) {
        this.props.onEmpty();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _this$props = this.props,
          autoComplete = _this$props.autoComplete,
          autoFocus = _this$props.autoFocus,
          classes = _this$props.classes,
          classNameProp = _this$props.className,
          defaultValue = _this$props.defaultValue,
          endAdornment = _this$props.endAdornment,
          fullWidth = _this$props.fullWidth,
          id = _this$props.id,
          inputComponent = _this$props.inputComponent,
          _this$props$inputProp = _this$props.inputProps;
      _this$props$inputProp = _this$props$inputProp === void 0 ? {} : _this$props$inputProp;

      var inputPropsClassName = _this$props$inputProp.className,
          muiFormControl = _this$props.muiFormControl,
          multiline = _this$props.multiline,
          name = _this$props.name,
          onKeyDown = _this$props.onKeyDown,
          onKeyUp = _this$props.onKeyUp,
          placeholder = _this$props.placeholder,
          readOnly = _this$props.readOnly,
          renderPrefix = _this$props.renderPrefix,
          rows = _this$props.rows,
          rowsMax = _this$props.rowsMax,
          startAdornment = _this$props.startAdornment,
          type = _this$props.type,
          value = _this$props.value,
          inputPropsProp = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props.inputProps, ["className"]),
          other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "muiFormControl", "multiline", "name", "onBlur", "onChange", "onClick", "onEmpty", "onFilled", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderPrefix", "rows", "rowsMax", "startAdornment", "type", "value"]);

      var ariaDescribedby = other['aria-describedby'];
      delete other['aria-describedby'];
      var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__["default"])({
        props: this.props,
        muiFormControl: muiFormControl,
        states: ['disabled', 'error', 'margin', 'required', 'filled']
      });
      var focused = muiFormControl ? muiFormControl.focused : this.state.focused;
      var className = classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.root, (_classNames = {}, _defineProperty(_classNames, classes.disabled, fcs.disabled), _defineProperty(_classNames, classes.error, fcs.error), _defineProperty(_classNames, classes.fullWidth, fullWidth), _defineProperty(_classNames, classes.focused, focused), _defineProperty(_classNames, classes.formControl, muiFormControl), _defineProperty(_classNames, classes.marginDense, fcs.margin === 'dense'), _defineProperty(_classNames, classes.multiline, multiline), _defineProperty(_classNames, classes.adornedStart, startAdornment), _defineProperty(_classNames, classes.adornedEnd, endAdornment), _classNames), classNameProp);
      var inputClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()(classes.input, (_classNames2 = {}, _defineProperty(_classNames2, classes.disabled, fcs.disabled), _defineProperty(_classNames2, classes.inputType, type !== 'text'), _defineProperty(_classNames2, classes.inputTypeSearch, type === 'search'), _defineProperty(_classNames2, classes.inputMultiline, multiline), _defineProperty(_classNames2, classes.inputMarginDense, fcs.margin === 'dense'), _defineProperty(_classNames2, classes.inputAdornedStart, startAdornment), _defineProperty(_classNames2, classes.inputAdornedEnd, endAdornment), _classNames2), inputPropsClassName);
      var InputComponent = inputComponent;

      var inputProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, inputPropsProp, {
        ref: this.handleRefInput
      });

      if (typeof InputComponent !== 'string') {
        inputProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          // Rename ref to inputRef as we don't know the
          // provided `inputComponent` structure.
          inputRef: this.handleRefInput,
          type: type
        }, inputProps, {
          ref: null
        });
      } else if (multiline) {
        if (rows && !rowsMax) {
          InputComponent = 'textarea';
        } else {
          inputProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            rowsMax: rowsMax,
            textareaRef: this.handleRefInput
          }, inputProps, {
            ref: null
          });
          InputComponent = _Textarea__WEBPACK_IMPORTED_MODULE_12__["default"];
        }
      } else {
        inputProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          type: type
        }, inputProps);
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: className,
        onClick: this.handleClick
      }, other), renderPrefix ? renderPrefix(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, fcs, {
        startAdornment: startAdornment,
        focused: focused
      })) : null, startAdornment, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
        value: null
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputComponent, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        "aria-invalid": fcs.error,
        "aria-describedby": ariaDescribedby,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        className: inputClassName,
        defaultValue: defaultValue,
        disabled: fcs.disabled,
        id: id,
        name: name,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        placeholder: placeholder,
        readOnly: readOnly,
        required: fcs.required,
        rows: rows,
        value: value
      }, inputProps))), endAdornment);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.
      if (props.disabled && state.focused) {
        return {
          focused: false
        };
      }

      return null;
    }
  }]);

  return InputBase;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

 true ? InputBase.propTypes = {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]))]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["componentPropType"],

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * @ignore
   */
  muiFormControl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onEmpty: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFilled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  renderPrefix: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the input will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The input value, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]))])
} : undefined;
InputBase.defaultProps = {
  fullWidth: false,
  inputComponent: 'input',
  multiline: false,
  type: 'text'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_10__["default"])(styles, {
  name: 'MuiInputBase'
})(Object(_FormControl_withFormControlContext__WEBPACK_IMPORTED_MODULE_9__["default"])(InputBase)));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/InputBase/Textarea.js":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/InputBase/Textarea.js ***!
  \******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! debounce */ "../node_modules/debounce/index.js");
/* harmony import */ var debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-event-listener */ "../node_modules/react-event-listener/dist/react-event-listener.cjs.js");
/* harmony import */ var react_event_listener__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_event_listener__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/es/utils/reactHelpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






 // < 1kb payload overhead when lodash/debounce is > 3kb.




var ROWS_HEIGHT = 19;
var styles = {
  /* Styles applied to the root element. */
  root: {
    position: 'relative',
    // because the shadow has position: 'absolute',
    width: '100%'
  },
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    cursor: 'inherit',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    border: 'none',
    outline: 'none',
    background: 'transparent'
  },
  shadow: {
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: 'hidden',
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    position: 'absolute',
    height: 'auto',
    whiteSpace: 'pre-wrap'
  }
};
/**
 * @ignore - internal component.
 */

var Textarea = /*#__PURE__*/function (_React$Component) {
  _inherits(Textarea, _React$Component);

  var _super = _createSuper(Textarea);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _super.call(this);

    _this.handleRefInput = function (ref) {
      _this.inputRef = ref;
      Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_8__["setRef"])(_this.props.textareaRef, ref);
    };

    _this.handleRefSinglelineShadow = function (ref) {
      _this.singlelineShadowRef = ref;
    };

    _this.handleRefShadow = function (ref) {
      _this.shadowRef = ref;
    };

    _this.handleChange = function (event) {
      _this.value = event.target.value;

      if (!_this.isControlled) {
        // The component is not controlled, we need to update the shallow value.
        _this.shadowRef.value = _this.value;

        _this.syncHeightWithShadow();
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.isControlled = props.value != null; // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.

    _this.value = props.value || props.defaultValue || '';
    _this.state = {
      height: Number(props.rows) * ROWS_HEIGHT
    };

    if (typeof window !== 'undefined') {
      _this.handleResize = debounce__WEBPACK_IMPORTED_MODULE_5___default()(function () {
        _this.syncHeightWithShadow();
      }, 166); // Corresponds to 10 frames at 60 Hz.
    }

    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "syncHeightWithShadow",
    value: function syncHeightWithShadow() {
      var props = this.props; // Guarding for **broken** shallow rendering method that call componentDidMount
      // but doesn't handle refs correctly.
      // To remove once the shallow rendering has been fixed.

      if (!this.shadowRef) {
        return;
      }

      if (this.isControlled) {
        // The component is controlled, we need to update the shallow value.
        this.shadowRef.value = props.value == null ? '' : String(props.value);
      }

      var lineHeight = this.singlelineShadowRef.scrollHeight; // The Textarea might not be visible (p.ex: display: none).
      // In this case, the layout values read from the DOM will be 0.

      lineHeight = lineHeight === 0 ? ROWS_HEIGHT : lineHeight;
      var newHeight = this.shadowRef.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013

      if (newHeight === undefined) {
        return;
      }

      if (Number(props.rowsMax) >= Number(props.rows)) {
        newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
      }

      newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
      // This prevents infinite rendering loop.

      if (Math.abs(this.state.height - newHeight) > 1) {
        this.setState({
          height: newHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue,
          rows = _this$props.rows,
          style = _this$props.style,
          value = _this$props.value,
          other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["classes", "className", "defaultValue", "onChange", "rows", "rowsMax", "style", "textareaRef", "value"]);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_event_listener__WEBPACK_IMPORTED_MODULE_6___default.a, {
        target: "window",
        onResize: this.handleResize
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
        "aria-hidden": "true",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.textarea, classes.shadow),
        readOnly: true,
        ref: this.handleRefSinglelineShadow,
        rows: "1",
        tabIndex: -1,
        value: ""
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", {
        "aria-hidden": "true",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.textarea, classes.shadow),
        defaultValue: defaultValue,
        readOnly: true,
        ref: this.handleRefShadow,
        rows: rows,
        tabIndex: -1,
        value: value
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("textarea", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        rows: rows,
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.textarea, className),
        defaultValue: defaultValue,
        value: value,
        onChange: this.handleChange,
        ref: this.handleRefInput,
        style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          height: this.state.height
        }, style)
      }, other)));
    }
  }]);

  return Textarea;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

 true ? Textarea.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /**
   * @ignore
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Use that property to pass a ref callback to the native textarea element.
   */
  textareaRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number])
} : undefined;
Textarea.defaultProps = {
  rows: 1
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiPrivateTextarea'
})(Textarea));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/InputBase/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/InputBase/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "../node_modules/@material-ui/core/es/InputBase/InputBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/es/InputBase/utils.js":
/*!***************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/InputBase/utils.js ***!
  \***************************************************************/
/*! exports provided: hasValue, isFilled, isAdornedStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilled", function() { return isFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdornedStart", function() { return isAdornedStart; });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "../node_modules/@material-ui/core/es/Menu/Menu.js":
/*!*********************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Menu/Menu.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/util/scrollbarSize */ "../node_modules/dom-helpers/util/scrollbarSize.js");
/* harmony import */ var dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Popover */ "../node_modules/@material-ui/core/es/Popover/index.js");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MenuList */ "../node_modules/@material-ui/core/es/MenuList/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // @inheritedComponent Popover








var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  /* Styles applied to the `Paper` component. */
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tapable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  }
};

var Menu = /*#__PURE__*/function (_React$Component) {
  _inherits(Menu, _React$Component);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    _classCallCheck(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getContentAnchorEl = function () {
      if (_this.menuListRef.selectedItemRef) {
        return react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(_this.menuListRef.selectedItemRef);
      }

      return react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(_this.menuListRef).firstChild;
    };

    _this.focus = function () {
      if (_this.menuListRef && _this.menuListRef.selectedItemRef) {
        react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(_this.menuListRef.selectedItemRef).focus();
        return;
      }

      var menuList = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(_this.menuListRef);

      if (menuList && menuList.firstChild) {
        menuList.firstChild.focus();
      }
    };

    _this.handleMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };

    _this.handleEntering = function (element) {
      var _this$props2 = _this.props,
          disableAutoFocusItem = _this$props2.disableAutoFocusItem,
          theme = _this$props2.theme;
      var menuList = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(_this.menuListRef); // Focus so the scroll computation of the Popover works as expected.

      if (disableAutoFocusItem !== true) {
        _this.focus();
      } // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.


      if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
        var size = "".concat(dom_helpers_util_scrollbarSize__WEBPACK_IMPORTED_MODULE_5___default()(), "px");
        menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
        menuList.style.width = "calc(100% + ".concat(size, ")");
      }

      if (_this.props.onEntering) {
        _this.props.onEntering(element);
      }
    };

    _this.handleListKeyDown = function (event) {
      if (event.key === 'Tab') {
        event.preventDefault();

        if (_this.props.onClose) {
          _this.props.onClose(event, 'tabKeyDown');
        }
      }
    };

    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open && this.props.disableAutoFocusItem !== true) {
        this.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          MenuListProps = _this$props.MenuListProps,
          _this$props$PaperProp = _this$props.PaperProps,
          PaperProps = _this$props$PaperProp === void 0 ? {} : _this$props$PaperProp,
          PopoverClasses = _this$props.PopoverClasses,
          theme = _this$props.theme,
          other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["children", "classes", "disableAutoFocusItem", "MenuListProps", "onEntering", "PaperProps", "PopoverClasses", "theme"]);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Popover__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        getContentAnchorEl: this.getContentAnchorEl,
        classes: PopoverClasses,
        onEntering: this.handleEntering,
        anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        PaperProps: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, PaperProps, {
          classes: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, PaperProps.classes, {
            root: classes.paper
          })
        })
      }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuList__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        onKeyDown: this.handleListKeyDown
      }, MenuListProps, {
        ref: this.handleMenuListRef
      }), children));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

 true ? Menu.propTypes = {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * If `true`, the selected / first menu item will not be auto focused.
   */
  disableAutoFocusItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Properties applied to the [`MenuList`](/api/menu-list/) element.
   */
  MenuListProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the menu is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * `classes` property applied to the [`Popover`](/api/popover/) element.
   */
  PopoverClasses: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  }), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto'])])
} : undefined;
Menu.defaultProps = {
  disableAutoFocusItem: false,
  transitionDuration: 'auto'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiMenu',
  withTheme: true
})(Menu));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/NativeSelect/NativeSelect.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/NativeSelect/NativeSelect.js ***!
  \*************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/index.es.js");
/* harmony import */ var _NativeSelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NativeSelectInput */ "../node_modules/@material-ui/core/es/NativeSelect/NativeSelectInput.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/formControlState */ "../node_modules/@material-ui/core/es/FormControl/formControlState.js");
/* harmony import */ var _FormControl_withFormControlContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl/withFormControlContext */ "../node_modules/@material-ui/core/es/FormControl/withFormControlContext.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "../node_modules/@material-ui/core/es/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Input */ "../node_modules/@material-ui/core/es/Input/index.js");

 // @inheritedComponent Input










var styles = function styles(theme) {
  return {
    /* Styles applied to the `Input` component `root` class. */
    root: {
      position: 'relative',
      width: '100%'
    },

    /* Styles applied to the `Input` component `select` class. */
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      paddingRight: 32,
      borderRadius: 0,
      // Reset
      height: '1.1875em',
      // Reset (19px), match the native input line-height
      width: 'calc(100% - 32px)',
      minWidth: 16,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        backgroundColor: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove IE 11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      },
      '&[multiple]': {
        height: 'auto'
      },
      '&:not([multiple]) option, &:not([multiple]) optgroup': {
        backgroundColor: theme.palette.background.paper
      }
    },

    /* Styles applied to the `Input` component if `variant="filled"`. */
    filled: {
      width: 'calc(100% - 44px)'
    },

    /* Styles applied to the `Input` component if `variant="outlined"`. */
    outlined: {
      width: 'calc(100% - 46px)',
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the `Input` component `selectMenu` class. */
    selectMenu: {
      width: 'auto',
      // Fix Safari textOverflow
      height: 'auto',
      // Reset
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      minHeight: '1.1875em' // Reset (19px), match the native input line-height

    },

    /* Styles applied to the `Input` component `disabled` class. */
    disabled: {},

    /* Styles applied to the `Input` component `icon` class. */
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      color: theme.palette.action.active,
      'pointer-events': 'none' // Don't block pointer events on the select under the icon.

    }
  };
};
/**
 * An alternative to `<Select native />` with a much smaller bundle size footprint.
 */

function NativeSelect(props) {
  var children = props.children,
      classes = props.classes,
      IconComponent = props.IconComponent,
      input = props.input,
      inputProps = props.inputProps,
      muiFormControl = props.muiFormControl,
      other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["children", "classes", "IconComponent", "input", "inputProps", "muiFormControl", "variant"]);

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_7__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(input, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput__WEBPACK_IMPORTED_MODULE_5__["default"],
    inputProps: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {})
  }, other));
}

 true ? NativeSelect.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["componentPropType"],

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  muiFormControl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]))]),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
NativeSelect.defaultProps = {
  IconComponent: _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__["default"],
  input: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_10__["default"], null)
};
NativeSelect.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiNativeSelect'
})(Object(_FormControl_withFormControlContext__WEBPACK_IMPORTED_MODULE_8__["default"])(NativeSelect)));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/NativeSelect/NativeSelectInput.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/NativeSelect/NativeSelectInput.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/index.es.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/**
 * @ignore - internal component.
 */

function NativeSelectInput(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      variant = props.variant,
      other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["children", "classes", "className", "disabled", "IconComponent", "inputRef", "name", "onChange", "value", "variant"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.select, (_classNames = {}, _defineProperty(_classNames, classes.filled, variant === 'filled'), _defineProperty(_classNames, classes.outlined, variant === 'outlined'), _defineProperty(_classNames, classes.disabled, disabled), _classNames), className),
    name: name,
    disabled: disabled,
    onChange: onChange,
    value: value,
    ref: inputRef
  }, other), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IconComponent, {
    className: classes.icon
  }));
}

 true ? NativeSelectInput.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["componentPropType"],

  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]))]),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (NativeSelectInput);

/***/ }),

/***/ "../node_modules/@material-ui/core/es/Select/Select.js":
/*!*************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Select/Select.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/index.es.js");
/* harmony import */ var _SelectInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectInput */ "../node_modules/@material-ui/core/es/Select/SelectInput.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "../node_modules/@material-ui/core/es/FormControl/formControlState.js");
/* harmony import */ var _FormControl_withFormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/withFormControlContext */ "../node_modules/@material-ui/core/es/FormControl/withFormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
/* harmony import */ var _styles_mergeClasses__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/mergeClasses */ "../node_modules/@material-ui/core/es/styles/mergeClasses.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "../node_modules/@material-ui/core/es/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Input */ "../node_modules/@material-ui/core/es/Input/index.js");
/* harmony import */ var _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../NativeSelect/NativeSelect */ "../node_modules/@material-ui/core/es/NativeSelect/NativeSelect.js");
/* harmony import */ var _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../NativeSelect/NativeSelectInput */ "../node_modules/@material-ui/core/es/NativeSelect/NativeSelectInput.js");

 // @inheritedComponent Input









 // To replace with InputBase in v4




var styles = _NativeSelect_NativeSelect__WEBPACK_IMPORTED_MODULE_12__["styles"];

function Select(props) {
  var autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      input = props.input,
      inputProps = props.inputProps,
      MenuProps = props.MenuProps,
      muiFormControl = props.muiFormControl,
      multiple = props.multiple,
      _native = props["native"],
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "input", "inputProps", "MenuProps", "muiFormControl", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"]);

  var inputComponent = _native ? _NativeSelect_NativeSelectInput__WEBPACK_IMPORTED_MODULE_13__["default"] : _SelectInput__WEBPACK_IMPORTED_MODULE_5__["default"];
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant']
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(input, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      children: children,
      IconComponent: IconComponent,
      variant: fcs.variant,
      type: undefined,
      // We render a select. We can ignore the type provided by the `Input`.
      multiple: multiple
    }, _native ? {} : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      MenuProps: MenuProps,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: SelectDisplayProps
    }, inputProps, {
      classes: inputProps ? Object(_styles_mergeClasses__WEBPACK_IMPORTED_MODULE_9__["default"])({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {})
  }, other));
}

 true ? Select.propTypes = {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _material_ui_utils__WEBPACK_IMPORTED_MODULE_4__["componentPropType"],

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * Attributes applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Properties applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be using a native `select` element.
   */
  "native": prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Control `select` open state.
   * You can only use it when the `native` property is `false` (default).
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The input value.
   * This property is required when the `native` property is `false` (default).
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]))]),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
Select.defaultProps = {
  autoWidth: false,
  displayEmpty: false,
  IconComponent: _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_10__["default"],
  input: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Input__WEBPACK_IMPORTED_MODULE_11__["default"], null),
  multiple: false,
  "native": false
};
Select.muiName = 'Select';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiSelect'
})(Object(_FormControl_withFormControlContext__WEBPACK_IMPORTED_MODULE_7__["default"])(Select)));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/Select/SelectInput.js":
/*!******************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Select/SelectInput.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "../node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "../node_modules/@material-ui/utils/index.es.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menu/Menu */ "../node_modules/@material-ui/core/es/Menu/Menu.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../InputBase/utils */ "../node_modules/@material-ui/core/es/InputBase/utils.js");
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/es/utils/reactHelpers.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }












function areEqualValues(a, b) {
  if (_typeof(b) === 'object' && b !== null) {
    return a === b;
  }

  return String(a) === String(b);
}
/**
 * @ignore - internal component.
 */


var SelectInput = /*#__PURE__*/function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  var _super = _createSuper(SelectInput);

  function SelectInput(props) {
    var _this;

    _classCallCheck(this, SelectInput);

    _this = _super.call(this);
    _this.ignoreNextBlur = false;

    _this.update = function (_ref) {
      var event = _ref.event,
          open = _ref.open;

      if (_this.isOpenControlled) {
        if (open) {
          _this.props.onOpen(event);
        } else {
          _this.props.onClose(event);
        }

        return;
      }

      _this.setState({
        // Perform the layout computation outside of the render method.
        menuMinWidth: _this.props.autoWidth ? null : _this.displayRef.clientWidth,
        open: open
      });
    };

    _this.handleClick = function (event) {
      // Opening the menu is going to blur the. It will be focused back when closed.
      _this.ignoreNextBlur = true;

      _this.update({
        open: true,
        event: event
      });
    };

    _this.handleClose = function (event) {
      _this.update({
        open: false,
        event: event
      });
    };

    _this.handleItemClick = function (child) {
      return function (event) {
        if (!_this.props.multiple) {
          _this.update({
            open: false,
            event: event
          });
        }

        var _this$props2 = _this.props,
            onChange = _this$props2.onChange,
            name = _this$props2.name;

        if (onChange) {
          var value;

          if (_this.props.multiple) {
            value = Array.isArray(_this.props.value) ? _toConsumableArray(_this.props.value) : [];
            var itemIndex = value.indexOf(child.props.value);

            if (itemIndex === -1) {
              value.push(child.props.value);
            } else {
              value.splice(itemIndex, 1);
            }
          } else {
            value = child.props.value;
          }

          event.persist();
          event.target = {
            value: value,
            name: name
          };
          onChange(event, child);
        }
      };
    };

    _this.handleBlur = function (event) {
      if (_this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        _this.ignoreNextBlur = false;
        return;
      }

      if (_this.props.onBlur) {
        var _this$props3 = _this.props,
            value = _this$props3.value,
            name = _this$props3.name;
        event.persist();
        event.target = {
          value: value,
          name: name
        };

        _this.props.onBlur(event);
      }
    };

    _this.handleKeyDown = function (event) {
      if (_this.props.readOnly) {
        return;
      }

      if ([' ', 'ArrowUp', 'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
      // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
      'Enter'].indexOf(event.key) !== -1) {
        event.preventDefault(); // Opening the menu is going to blur the. It will be focused back when closed.

        _this.ignoreNextBlur = true;

        _this.update({
          open: true,
          event: event
        });
      }
    };

    _this.handleDisplayRef = function (ref) {
      _this.displayRef = ref;
    };

    _this.handleInputRef = function (ref) {
      var inputRef = _this.props.inputRef;

      if (!inputRef) {
        return;
      }

      var nodeProxy = {
        node: ref,
        // By pass the native input as we expose a rich object (array).
        value: _this.props.value,
        focus: function focus() {
          _this.displayRef.focus();
        }
      };
      Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_9__["setRef"])(inputRef, nodeProxy);
    };

    _this.isOpenControlled = props.open !== undefined;
    _this.state = {
      menuMinWidth: null,
      open: false
    };
    return _this;
  }

  _createClass(SelectInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isOpenControlled && this.props.open) {
        // Focus the display node so the focus is restored on this element once
        // the menu is closed.
        this.displayRef.focus(); // Rerender with the resolve `displayRef` reference.

        this.forceUpdate();
      }

      if (this.props.autoFocus) {
        this.displayRef.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames;

      var _this$props = this.props,
          autoWidth = _this$props.autoWidth,
          children = _this$props.children,
          classes = _this$props.classes,
          className = _this$props.className,
          disabled = _this$props.disabled,
          displayEmpty = _this$props.displayEmpty,
          IconComponent = _this$props.IconComponent,
          _this$props$MenuProps = _this$props.MenuProps,
          MenuProps = _this$props$MenuProps === void 0 ? {} : _this$props$MenuProps,
          multiple = _this$props.multiple,
          name = _this$props.name,
          onFocus = _this$props.onFocus,
          openProp = _this$props.open,
          readOnly = _this$props.readOnly,
          renderValue = _this$props.renderValue,
          SelectDisplayProps = _this$props.SelectDisplayProps,
          tabIndexProp = _this$props.tabIndex,
          _this$props$type = _this$props.type,
          type = _this$props$type === void 0 ? 'hidden' : _this$props$type,
          value = _this$props.value,
          variant = _this$props.variant,
          other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["autoWidth", "children", "classes", "className", "disabled", "displayEmpty", "IconComponent", "inputRef", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "required", "SelectDisplayProps", "tabIndex", "type", "value", "variant"]);

      var open = this.isOpenControlled && this.displayRef ? openProp : this.state.open;
      delete other['aria-invalid'];
      var display;
      var displaySingle = '';
      var displayMultiple = [];
      var computeDisplay = false; // No need to display any value if the field is empty.

      if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_8__["isFilled"])(this.props) || displayEmpty) {
        if (renderValue) {
          display = renderValue(value);
        } else {
          computeDisplay = true;
        }
      }

      var items = react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.map(children, function (child) {
        if (!react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(child)) {
          return null;
        }

         true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(child.type !== react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, ["Material-UI: the Select component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n')) : undefined;
        var selected;

        if (multiple) {
          if (!Array.isArray(value)) {
            throw new Error('Material-UI: the `value` property must be an array ' + 'when using the `Select` component with `multiple`.');
          }

          selected = value.some(function (v) {
            return areEqualValues(v, child.props.value);
          });

          if (selected && computeDisplay) {
            displayMultiple.push(child.props.children);
          }
        } else {
          selected = areEqualValues(value, child.props.value);

          if (selected && computeDisplay) {
            displaySingle = child.props.children;
          }
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
          onClick: _this2.handleItemClick(child),
          role: 'option',
          selected: selected,
          value: undefined,
          // The value is most likely not a valid HTML attribute.
          'data-value': child.props.value // Instead, we provide it as a data attribute.

        });
      });

      if (computeDisplay) {
        display = multiple ? displayMultiple.join(', ') : displaySingle;
      } // Avoid performing a layout computation in the render method.


      var menuMinWidth = this.state.menuMinWidth;

      if (!autoWidth && this.isOpenControlled && this.displayRef) {
        menuMinWidth = this.displayRef.clientWidth;
      }

      var tabIndex;

      if (typeof tabIndexProp !== 'undefined') {
        tabIndex = tabIndexProp;
      } else {
        tabIndex = disabled ? null : 0;
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: classes.root
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.select, classes.selectMenu, (_classNames = {}, _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.filled, variant === 'filled'), _defineProperty(_classNames, classes.outlined, variant === 'outlined'), _classNames), className),
        ref: this.handleDisplayRef,
        "aria-pressed": open ? 'true' : 'false',
        tabIndex: tabIndex,
        role: "button",
        "aria-owns": open ? "menu-".concat(name || '') : undefined,
        "aria-haspopup": "true",
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur,
        onClick: disabled || readOnly ? null : this.handleClick,
        onFocus: onFocus // The id can help with end-to-end testing automation.
        ,
        id: name ? "select-".concat(name) : undefined
      }, SelectDisplayProps), display || react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        value: Array.isArray(value) ? value.join(',') : value,
        name: name,
        ref: this.handleInputRef,
        type: type
      }, other)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IconComponent, {
        className: classes.icon
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
        id: "menu-".concat(name || ''),
        anchorEl: this.displayRef,
        open: open,
        onClose: this.handleClose
      }, MenuProps, {
        MenuListProps: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          role: 'listbox',
          disableListWrap: true
        }, MenuProps.MenuListProps),
        PaperProps: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, MenuProps.PaperProps, {
          style: _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
            minWidth: menuMinWidth
          }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
        })
      }), items));
    }
  }]);

  return SelectInput;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

 true ? SelectInput.propTypes = {
  /**
   * @ignore
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["componentPropType"],

  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /**
   * Properties applied to the [`Menu`](/api/menu/) element.
   */
  MenuProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Control `select` open state.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * @ignore
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Render the selected value.
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The input value.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]))]).isRequired,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['standard', 'outlined', 'filled'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (SelectInput);

/***/ }),

/***/ "../node_modules/@material-ui/core/es/Select/index.js":
/*!************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Select/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "../node_modules/@material-ui/core/es/Select/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Select__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/es/internal/svg-icons/ArrowDropDown.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/internal/svg-icons/ArrowDropDown.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/pure */ "../node_modules/recompose/pure.js");
/* harmony import */ var recompose_pure__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_pure__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../SvgIcon */ "../node_modules/@material-ui/core/es/SvgIcon/index.js");



/**
 * @ignore - internal component.
 */

var _ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M7 10l5 5 5-5z"
});

var ArrowDropDown = function ArrowDropDown(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], props, _ref);
};

ArrowDropDown = recompose_pure__WEBPACK_IMPORTED_MODULE_1___default()(ArrowDropDown);
ArrowDropDown.muiName = 'SvgIcon';
/* harmony default export */ __webpack_exports__["default"] = (ArrowDropDown);

/***/ }),

/***/ "../node_modules/@material-ui/icons/Edit.js":
/*!**************************************************!*\
  !*** ../node_modules/@material-ui/icons/Edit.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "../node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), _react.default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'Edit');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lcy9JbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL0lucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXMvSW5wdXRCYXNlL0lucHV0QmFzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL0lucHV0QmFzZS9UZXh0YXJlYS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL0lucHV0QmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL0lucHV0QmFzZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL01lbnUvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lcy9OYXRpdmVTZWxlY3QvTmF0aXZlU2VsZWN0SW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lcy9TZWxlY3QvU2VsZWN0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXMvU2VsZWN0L1NlbGVjdElucHV0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXMvU2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXMvaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdC5qcyJdLCJuYW1lcyI6WyJmb3JtQ29udHJvbFN0YXRlIiwicHJvcHMiLCJzdGF0ZXMiLCJtdWlGb3JtQ29udHJvbCIsInJlZHVjZSIsImFjYyIsInN0YXRlIiwic3R5bGVzIiwidGhlbWUiLCJsaWdodCIsInBhbGV0dGUiLCJ0eXBlIiwiYm90dG9tTGluZUNvbG9yIiwicm9vdCIsInBvc2l0aW9uIiwiZm9ybUNvbnRyb2wiLCJtYXJnaW5Ub3AiLCJmb2N1c2VkIiwiZGlzYWJsZWQiLCJ1bmRlcmxpbmUiLCJib3JkZXJCb3R0b20iLCJwcmltYXJ5IiwibGVmdCIsImJvdHRvbSIsImNvbnRlbnQiLCJyaWdodCIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwic2hvcnRlciIsImVhc2luZyIsImVhc2VPdXQiLCJwb2ludGVyRXZlbnRzIiwiYm9yZGVyQm90dG9tQ29sb3IiLCJlcnJvciIsIm1haW4iLCJ0ZXh0IiwiYm9yZGVyQm90dG9tU3R5bGUiLCJtdWx0aWxpbmUiLCJmdWxsV2lkdGgiLCJpbnB1dCIsImlucHV0TWFyZ2luRGVuc2UiLCJpbnB1dE11bHRpbGluZSIsImlucHV0VHlwZSIsImlucHV0VHlwZVNlYXJjaCIsIklucHV0IiwiZGlzYWJsZVVuZGVybGluZSIsImNsYXNzZXMiLCJvdGhlciIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiSW5wdXRCYXNlIiwiX2V4dGVuZHMiLCJjbGFzc05hbWVzIiwicHJvY2VzcyIsInByb3BUeXBlcyIsImF1dG9Db21wbGV0ZSIsIlByb3BUeXBlcyIsInN0cmluZyIsImF1dG9Gb2N1cyIsImJvb2wiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFZhbHVlIiwib25lT2ZUeXBlIiwibnVtYmVyIiwiYXJyYXlPZiIsImVuZEFkb3JubWVudCIsIm5vZGUiLCJpZCIsImlucHV0Q29tcG9uZW50IiwiY29tcG9uZW50UHJvcFR5cGUiLCJpbnB1dFByb3BzIiwiaW5wdXRSZWYiLCJmdW5jIiwibWFyZ2luIiwib25lT2YiLCJuYW1lIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInJlYWRPbmx5IiwicmVxdWlyZWQiLCJyb3dzIiwicm93c01heCIsInN0YXJ0QWRvcm5tZW50IiwidmFsdWUiLCJkZWZhdWx0UHJvcHMiLCJtdWlOYW1lIiwid2l0aFN0eWxlcyIsImNvbG9yIiwib3BhY2l0eSIsInBsYWNlaG9sZGVySGlkZGVuIiwicGxhY2Vob2xkZXJWaXNpYmxlIiwiZm9udEZhbWlseSIsInR5cG9ncmFwaHkiLCJmb250U2l6ZSIsInB4VG9SZW0iLCJsaW5lSGVpZ2h0IiwiY3Vyc29yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJhZG9ybmVkU3RhcnQiLCJhZG9ybmVkRW5kIiwibWFyZ2luRGVuc2UiLCJwYWRkaW5nIiwid2lkdGgiLCJmb250IiwiYm9yZGVyIiwiYm94U2l6aW5nIiwiYmFja2dyb3VuZCIsIldlYmtpdFRhcEhpZ2hsaWdodENvbG9yIiwibWluV2lkdGgiLCJvdXRsaW5lIiwiYm94U2hhZG93IiwicGFkZGluZ1RvcCIsInJlc2l6ZSIsImhlaWdodCIsImlucHV0QWRvcm5lZFN0YXJ0IiwiaW5wdXRBZG9ybmVkRW5kIiwiaGFuZGxlRm9jdXMiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsInNldFN0YXRlIiwib25Gb2N1cyIsImhhbmRsZUJsdXIiLCJvbkJsdXIiLCJoYW5kbGVDaGFuZ2UiLCJpc0NvbnRyb2xsZWQiLCJjaGVja0RpcnR5IiwiaGFuZGxlUmVmSW5wdXQiLCJyZWYiLCJ3YXJuaW5nIiwiSFRNTElucHV0RWxlbWVudCIsImZvY3VzIiwiam9pbiIsInJlZlByb3AiLCJzZXRSZWYiLCJoYW5kbGVDbGljayIsImN1cnJlbnRUYXJnZXQiLCJ0YXJnZXQiLCJvbkNsaWNrIiwicHJldlByb3BzIiwib2JqIiwiaXNGaWxsZWQiLCJvbkZpbGxlZCIsIm9uRW1wdHkiLCJfdGhpcyRwcm9wcyIsImNsYXNzTmFtZVByb3AiLCJpbnB1dFByb3BzQ2xhc3NOYW1lIiwib25LZXlEb3duIiwib25LZXlVcCIsInJlbmRlclByZWZpeCIsImlucHV0UHJvcHNQcm9wIiwiYXJpYURlc2NyaWJlZGJ5IiwiZmNzIiwiaW5wdXRDbGFzc05hbWUiLCJJbnB1dENvbXBvbmVudCIsInRleHRhcmVhUmVmIiwiVGV4dGFyZWEiLCJGb3JtQ29udHJvbENvbnRleHQiLCJQcm92aWRlciIsIkNvbXBvbmVudCIsIndpdGhGb3JtQ29udHJvbENvbnRleHQiLCJST1dTX0hFSUdIVCIsInRleHRhcmVhIiwic2hhZG93Iiwib3ZlcmZsb3ciLCJ2aXNpYmlsaXR5Iiwid2hpdGVTcGFjZSIsImhhbmRsZVJlZlNpbmdsZWxpbmVTaGFkb3ciLCJzaW5nbGVsaW5lU2hhZG93UmVmIiwiaGFuZGxlUmVmU2hhZG93Iiwic2hhZG93UmVmIiwic3luY0hlaWdodFdpdGhTaGFkb3ciLCJOdW1iZXIiLCJ3aW5kb3ciLCJoYW5kbGVSZXNpemUiLCJkZWJvdW5jZSIsImNsZWFyIiwiU3RyaW5nIiwic2Nyb2xsSGVpZ2h0IiwibmV3SGVpZ2h0IiwidW5kZWZpbmVkIiwiTWF0aCIsIm1pbiIsIm1heCIsImFicyIsInN0eWxlIiwiRXZlbnRMaXN0ZW5lciIsIm9uUmVzaXplIiwiY2xhc3NuYW1lcyIsInRhYkluZGV4IiwiaGFzVmFsdWUiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJTU1IiLCJpc0Fkb3JuZWRTdGFydCIsIlJUTF9PUklHSU4iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJMVFJfT1JJR0lOIiwicGFwZXIiLCJtYXhIZWlnaHQiLCJXZWJraXRPdmVyZmxvd1Njcm9sbGluZyIsIk1lbnUiLCJhcmdzIiwiZ2V0Q29udGVudEFuY2hvckVsIiwibWVudUxpc3RSZWYiLCJzZWxlY3RlZEl0ZW1SZWYiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwiZmlyc3RDaGlsZCIsIm1lbnVMaXN0IiwiaGFuZGxlTWVudUxpc3RSZWYiLCJoYW5kbGVFbnRlcmluZyIsImVsZW1lbnQiLCJkaXNhYmxlQXV0b0ZvY3VzSXRlbSIsImNsaWVudEhlaWdodCIsInNpemUiLCJnZXRTY3JvbGxiYXJTaXplIiwiZGlyZWN0aW9uIiwib25FbnRlcmluZyIsImhhbmRsZUxpc3RLZXlEb3duIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJvbkNsb3NlIiwib3BlbiIsImNoaWxkcmVuIiwiTWVudUxpc3RQcm9wcyIsIlBhcGVyUHJvcHMiLCJQb3BvdmVyQ2xhc3NlcyIsIlBvcG92ZXIiLCJhbmNob3JPcmlnaW4iLCJ0cmFuc2Zvcm1PcmlnaW4iLCJNZW51TGlzdCIsImFuY2hvckVsIiwib25FbnRlciIsIm9uRW50ZXJlZCIsIm9uRXhpdCIsIm9uRXhpdGVkIiwib25FeGl0aW5nIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwic2hhcGUiLCJlbnRlciIsImV4aXQiLCJ3aXRoVGhlbWUiLCJzZWxlY3QiLCJ1c2VyU2VsZWN0IiwicGFkZGluZ1JpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZENvbG9yIiwiZmlsbGVkIiwib3V0bGluZWQiLCJzZWxlY3RNZW51IiwidGV4dE92ZXJmbG93IiwibWluSGVpZ2h0IiwiaWNvbiIsInRvcCIsImFjdGlvbiIsImFjdGl2ZSIsIk5hdGl2ZVNlbGVjdCIsIkljb25Db21wb25lbnQiLCJjbG9uZUVsZW1lbnQiLCJOYXRpdmVTZWxlY3RJbnB1dCIsInZhcmlhbnQiLCJBcnJvd0Ryb3BEb3duSWNvbiIsIm5hdGl2ZVNlbGVjdFN0eWxlcyIsIlNlbGVjdCIsImF1dG9XaWR0aCIsImRpc3BsYXlFbXB0eSIsIk1lbnVQcm9wcyIsIm11bHRpcGxlIiwibmF0aXZlIiwib25PcGVuIiwicmVuZGVyVmFsdWUiLCJTZWxlY3REaXNwbGF5UHJvcHMiLCJTZWxlY3RJbnB1dCIsIm1lcmdlQ2xhc3NlcyIsImJhc2VDbGFzc2VzIiwibmV3Q2xhc3NlcyIsImFyZUVxdWFsVmFsdWVzIiwiYSIsImIiLCJpZ25vcmVOZXh0Qmx1ciIsInVwZGF0ZSIsImlzT3BlbkNvbnRyb2xsZWQiLCJtZW51TWluV2lkdGgiLCJkaXNwbGF5UmVmIiwiY2xpZW50V2lkdGgiLCJoYW5kbGVDbG9zZSIsImhhbmRsZUl0ZW1DbGljayIsImNoaWxkIiwiaXRlbUluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiLCJwZXJzaXN0IiwiaGFuZGxlS2V5RG93biIsImhhbmRsZURpc3BsYXlSZWYiLCJoYW5kbGVJbnB1dFJlZiIsIm5vZGVQcm94eSIsImZvcmNlVXBkYXRlIiwib3BlblByb3AiLCJ0YWJJbmRleFByb3AiLCJkaXNwbGF5U2luZ2xlIiwiZGlzcGxheU11bHRpcGxlIiwiY29tcHV0ZURpc3BsYXkiLCJpdGVtcyIsIkNoaWxkcmVuIiwibWFwIiwiaXNWYWxpZEVsZW1lbnQiLCJGcmFnbWVudCIsInNlbGVjdGVkIiwiRXJyb3IiLCJzb21lIiwidiIsInJvbGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImRpc2FibGVMaXN0V3JhcCIsIl9yZWYiLCJkIiwiQXJyb3dEcm9wRG93biIsIlN2Z0ljb24iLCJwdXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFlLFNBQVNBLGdCQUFULE9BSVo7QUFBQSxNQUhEQyxLQUdDLFFBSERBLEtBR0M7QUFBQSxNQUZEQyxNQUVDLFFBRkRBLE1BRUM7QUFBQSxNQUREQyxjQUNDLFFBRERBLGNBQ0M7QUFDRCxTQUFPRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFDQyxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDbkNELE9BQUcsQ0FBQ0MsS0FBRCxDQUFILEdB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O0FBQ0U0TSxTQUFPLEVBQUVqTixpREFBUyxDQUFDb0IsS0FBVixDQUFnQixDQUFDLFVBQUQsRUFBYSxVQUFiLEVBQXlCLFFBQXpCLENBQWhCO0FBakpxRCxDQUFoRSxHQWtKSSxTQWxKSjtBQW1KZXlNLDBFQUFmLEU7Ozs7Ozs7Ozs7OztBQ2xlQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJNEMsSUFBSSxHQUFHalIsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixNQUFwQixFQUE0QjtBQUNyQ2lSLEdBQUMsRUFBRTtBQURrQyxDQUE1QixDQUFYOztBQUlBLElBQUlDLGFBQWEsR0FBRyx1QkFBQXRVLEtBQUs7QUFBQSxTQUFJbUQsNENBQUssQ0FBQ0MsYUFBTixDQUFvQm1SLGdEQUFwQixFQUE2QnZVLEtBQTdCLEVBQW9Db1UsSUFBcEMsQ0FBSjtBQUFBLENBQXpCOztBQUVBRSxhQUFhLEdBQUdFLHFEQUFJLENBQUNGLGFBQUQsQ0FBcEI7QUFDQUEsYUFBYSxDQUFDNU8sT0FBZCxHQUF3QixTQUF4QjtBQUNlNE8sNEVBQWYsRTs7Ozs7Ozs7Ozs7O0FDZmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMscUhBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDZDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7O0FBRUQsMkIiLCJmaWxlIjoidmVuZG9yc35hZG1pbn5zZXR0aW5nc19kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtQ29udHJvbFN0YXRlKHtcbiAgcHJvcHMsXG4gIHN0YXRlcyxcbiAgbXVpRm9ybUNvbnRyb2xcbn0pIHtcbiAgcmV0dXJuIHN0YXRlcy5yZWR1Y2UoKGFjYywgc3RhdGUpID0+IHtcbiAgICBhY2Nbc3RhdGVdID0gcHJvcHNbc3RhdGVdO1xuXG4gICAgaWYgKG11aUZvcm1Db250cm9sKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BzW3N0YXRlXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYWNjW3N0YXRlXSA9IG11aUZvcm1Db250cm9sW3N0YXRlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG4vLyBAaW5oZXJpdGVkQ29tcG9uZW50IElucHV0QmFzZVxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IGNvbXBvbmVudFByb3BUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnLi4vSW5wdXRCYXNlJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCBjb25zdCBzdHlsZXMgPSB0aGVtZSA9PiB7XG4gIGNvbnN0IGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICBjb25zdCBib3R0b21MaW5lQ29sb3IgPSBsaWdodCA/ICdyZ2JhKDAsIDAsIDAsIDAuNDIpJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknO1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGEgZGVzY2VuZGFudCBvZiBgRm9ybUNvbnRyb2xgLiAqL1xuICAgIGZvcm1Db250cm9sOiB7XG4gICAgICAnbGFiZWwgKyAmJzoge1xuICAgICAgICBtYXJnaW5Ub3A6IDE2XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBmb2N1c2VkLiAqL1xuICAgIGZvY3VzZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlVW5kZXJsaW5lPXtmYWxzZX1gLiAqL1xuICAgIHVuZGVybGluZToge1xuICAgICAgJyY6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUucHJpbWFyeVtsaWdodCA/ICdkYXJrJyA6ICdsaWdodCddfWAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgLy8gRG9pbmcgdGhlIG90aGVyIHdheSBhcm91bmQgY3Jhc2ggb24gSUUgMTEgXCInJ1wiIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9pc3N1ZXMvMjQyXG4gICAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLFxuICAgICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlcixcbiAgICAgICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0XG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyYkZm9jdXNlZDphZnRlcic6IHtcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJ1xuICAgICAgfSxcbiAgICAgICcmJGVycm9yOmFmdGVyJzoge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVgoMSknIC8vIGVycm9yIGlzIGFsd2F5cyB1bmRlcmxpbmVkIGluIHJlZFxuXG4gICAgICB9LFxuICAgICAgJyY6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtib3R0b21MaW5lQ29sb3J9YCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXFxcXDAwYTBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3JkZXItYm90dG9tLWNvbG9yJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCk6bm90KCRmb2N1c2VkKTpub3QoJGVycm9yKTpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbTogYDJweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5fWAsXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtib3R0b21MaW5lQ29sb3J9YFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQ6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b21TdHlsZTogJ2RvdHRlZCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBpbnB1dE11bHRpbGluZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlYCBpcyBub3QgXCJ0ZXh0XCJgLiAqL1xuICAgIGlucHV0VHlwZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlPVwic2VhcmNoXCJgLiAqL1xuICAgIGlucHV0VHlwZVNlYXJjaDoge31cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIElucHV0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBkaXNhYmxlVW5kZXJsaW5lLFxuICAgIGNsYXNzZXNcbiAgfSA9IHByb3BzLFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJkaXNhYmxlVW5kZXJsaW5lXCIsIFwiY2xhc3Nlc1wiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsYXNzTmFtZXMoY2xhc3Nlcy5yb290LCB7XG4gICAgICAgIFtjbGFzc2VzLnVuZGVybGluZV06ICFkaXNhYmxlVW5kZXJsaW5lXG4gICAgICB9KSxcbiAgICAgIHVuZGVybGluZTogbnVsbFxuICAgIH0pXG4gIH0sIG90aGVyKSk7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IElucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoaXMgcHJvcGVydHkgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgaGVyZTpcbiAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGxcbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgd3JhcHBlciBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBpbnB1dCB2YWx1ZSwgdXNlZnVsIHdoZW4gbm90IGNvbnRyb2xsaW5nIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pKV0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIG5vdCBoYXZlIGFuIHVuZGVybGluZS5cbiAgICovXG4gIGRpc2FibGVVbmRlcmxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBlbmRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGluZGljYXRlIGFuIGVycm9yLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgbmF0aXZlIGlucHV0LlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogY29tcG9uZW50UHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVXNlIHRoYXQgcHJvcGVydHkgdG8gcGFzcyBhIHJlZiBjYWxsYmFjayB0byB0aGUgbmF0aXZlIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0UmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYSB0ZXh0YXJlYSBlbGVtZW50IHdpbGwgYmUgcmVuZGVyZWQuXG4gICAqL1xuICBtdWx0aWxpbmU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOYW1lIGF0dHJpYnV0ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hvcnQgaGludCBkaXNwbGF5ZWQgaW4gdGhlIGlucHV0IGJlZm9yZSB0aGUgdXNlciBlbnRlcnMgYSB2YWx1ZS5cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJdCBwcmV2ZW50cyB0aGUgdXNlciBmcm9tIGNoYW5naW5nIHRoZSB2YWx1ZSBvZiB0aGUgZmllbGRcbiAgICogKG5vdCBmcm9tIGludGVyYWN0aW5nIHdpdGggdGhlIGZpZWxkKS5cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBpbnB1dCBlbGVtZW50LiBJdCBzaG91bGQgYmUgYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3RdKSldKVxufSA6IHZvaWQgMDtcbklucHV0QmFzZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGZ1bGxXaWR0aDogZmFsc2UsXG4gIGlucHV0Q29tcG9uZW50OiAnaW5wdXQnLFxuICBtdWx0aWxpbmU6IGZhbHNlLFxuICB0eXBlOiAndGV4dCdcbn07XG5JbnB1dC5tdWlOYW1lID0gJ0lucHV0JztcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlJbnB1dCdcbn0pKElucHV0KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9JbnB1dCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2NsaWNrLWV2ZW50cy1oYXZlLWtleS1ldmVudHMsIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9ucyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgY29tcG9uZW50UHJvcFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgRm9ybUNvbnRyb2xDb250ZXh0IGZyb20gJy4uL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dCc7XG5pbXBvcnQgd2l0aEZvcm1Db250cm9sQ29udGV4dCBmcm9tICcuLi9Gb3JtQ29udHJvbC93aXRoRm9ybUNvbnRyb2xDb250ZXh0JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7IHNldFJlZiB9IGZyb20gJy4uL3V0aWxzL3JlYWN0SGVscGVycyc7XG5pbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9UZXh0YXJlYSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+IHtcbiAgY29uc3QgbGlnaHQgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCc7XG4gIGNvbnN0IHBsYWNlaG9sZGVyID0ge1xuICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICBvcGFjaXR5OiBsaWdodCA/IDAuNDIgOiAwLjUsXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5Jywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXJcbiAgICB9KVxuICB9O1xuICBjb25zdCBwbGFjZWhvbGRlckhpZGRlbiA9IHtcbiAgICBvcGFjaXR5OiAwXG4gIH07XG4gIGNvbnN0IHBsYWNlaG9sZGVyVmlzaWJsZSA9IHtcbiAgICBvcGFjaXR5OiBsaWdodCA/IDAuNDIgOiAwLjVcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIC8vIE1pbWljcyB0aGUgZGVmYXVsdCBpbnB1dCBkaXNwbGF5IHByb3BlcnR5IHVzZWQgYnkgYnJvd3NlcnMgZm9yIGFuIGlucHV0LlxuICAgICAgZm9udEZhbWlseTogdGhlbWUudHlwb2dyYXBoeS5mb250RmFtaWx5LFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkucHhUb1JlbSgxNiksXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4xODc1ZW0nLFxuICAgICAgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG4gICAgICBjdXJzb3I6ICd0ZXh0JyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkLFxuICAgICAgICBjdXJzb3I6ICdkZWZhdWx0J1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGBGb3JtQ29udHJvbGAuICovXG4gICAgZm9ybUNvbnRyb2w6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHN0YXJ0QWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkU3RhcnQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBhZG9ybmVkRW5kOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgbWFyZ2luRGVuc2U6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgbXVsdGlsaW5lOiB7XG4gICAgICBwYWRkaW5nOiBgJHs4IC0gMn1weCAwICR7OCAtIDF9cHhgXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZ1bGxXaWR0aD17dHJ1ZX1gLiAqL1xuICAgIGZ1bGxXaWR0aDoge1xuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LiAqL1xuICAgIGlucHV0OiB7XG4gICAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgICBjb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBwYWRkaW5nOiBgJHs4IC0gMn1weCAwICR7OCAtIDF9cHhgLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgLy8gUmVzZXQgZm9yIFNhZmFyaVxuICAgICAgLy8gUmVtb3ZlIGdyZXkgaGlnaGxpZ2h0XG4gICAgICBXZWJraXRUYXBIaWdobGlnaHRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAvLyBNYWtlIHRoZSBmbGV4IGl0ZW0gc2hyaW5rIHdpdGggRmlyZWZveFxuICAgICAgbWluV2lkdGg6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgLy8gRml4IElFIDExIHdpZHRoIGlzc3VlXG4gICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgJyY6Oi1tb3otcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIEZpcmVmb3ggMTkrXG4gICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIElFIDExXG4gICAgICAnJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAvLyBFZGdlXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMFxuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0IEZpcmVmb3ggaW52YWxpZCByZXF1aXJlZCBpbnB1dCBzdHlsZVxuICAgICAgJyY6aW52YWxpZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbic6IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwYWRkaW5nIHdoZW4gdHlwZT1zZWFyY2guXG4gICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAvLyBTaG93IGFuZCBoaWRlIHRoZSBwbGFjZWhvbGRlciBsb2dpY1xuICAgICAgJ2xhYmVsW2RhdGEtc2hyaW5rPWZhbHNlXSArICRmb3JtQ29udHJvbCAmJzoge1xuICAgICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAnJjo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBGaXJlZm94IDE5K1xuICAgICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgLy8gSUUgMTFcbiAgICAgICAgJyY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBFZGdlXG4gICAgICAgICcmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAnJjpmb2N1czo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSxcbiAgICAgICAgLy8gRmlyZWZveCAxOStcbiAgICAgICAgJyY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAvLyBJRSAxMVxuICAgICAgICAnJjpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlIC8vIEVkZ2VcblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAxIC8vIFJlc2V0IGlPUyBvcGFjaXR5XG5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbWFyZ2luPVwiZGVuc2VcImAuICovXG4gICAgaW5wdXRNYXJnaW5EZW5zZToge1xuICAgICAgcGFkZGluZ1RvcDogNCAtIDFcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgbXVsdGlsaW5lPXt0cnVlfWAuICovXG4gICAgaW5wdXRNdWx0aWxpbmU6IHtcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlYCBpcyBub3QgXCJ0ZXh0XCJgLiAqL1xuICAgIGlucHV0VHlwZToge1xuICAgICAgLy8gdHlwZT1cImRhdGVcIiBvciB0eXBlPVwidGltZVwiLCBldGMuIGhhdmUgc3BlY2lmaWMgc3R5bGVzIHdlIG5lZWQgdG8gcmVzZXQuXG4gICAgICBoZWlnaHQ6ICcxLjE4NzVlbScgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgdHlwZT1cInNlYXJjaFwiYC4gKi9cbiAgICBpbnB1dFR5cGVTZWFyY2g6IHtcbiAgICAgIC8vIEltcHJvdmUgdHlwZSBzZWFyY2ggc3R5bGUuXG4gICAgICAnLW1vei1hcHBlYXJhbmNlJzogJ3RleHRmaWVsZCcsXG4gICAgICAnLXdlYmtpdC1hcHBlYXJhbmNlJzogJ3RleHRmaWVsZCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGlucHV0QWRvcm5lZFN0YXJ0OiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYGVuZEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkRW5kOiB7fVxuICB9O1xufTtcbi8qKlxuICogYElucHV0QmFzZWAgY29udGFpbnMgYXMgZmV3IHN0eWxlcyBhcyBwb3NzaWJsZS5cbiAqIEl0IGFpbXMgdG8gYmUgYSBzaW1wbGUgYnVpbGRpbmcgYmxvY2sgZm9yIGNyZWF0aW5nIGFuIGlucHV0LlxuICogSXQgY29udGFpbnMgYSBsb2FkIG9mIHN0eWxlIHJlc2V0IGFuZCBzb21lIHN0YXRlIGxvZ2ljLlxuICovXG5cbmNsYXNzIElucHV0QmFzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMocHJvcHMsIHN0YXRlKSB7XG4gICAgLy8gVGhlIGJsdXIgd29uJ3QgZmlyZSB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0ZSBpcyBzZXQgb24gYSBmb2N1c2VkIGlucHV0LlxuICAgIC8vIFdlIG5lZWQgdG8gYm9vayBrZWVwIHRoZSBmb2N1c2VkIHN0YXRlIG1hbnVhbGx5LlxuICAgIGlmIChwcm9wcy5kaXNhYmxlZCAmJiBzdGF0ZS5mb2N1c2VkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb2N1c2VkOiBmYWxzZVxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb2N1c2VkOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUZvY3VzID0gZXZlbnQgPT4ge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtdWlGb3JtQ29udHJvbFxuICAgICAgfSA9IHRoaXMucHJvcHM7IC8vIEZpeCBhIGJ1ZyB3aXRoIElFIDExIHdoZXJlIHRoZSBmb2N1cy9ibHVyIGV2ZW50cyBhcmUgdHJpZ2dlcmVkXG4gICAgICAvLyB3aGlsZSB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuXG5cbiAgICAgIGlmIChmb3JtQ29udHJvbFN0YXRlKHtcbiAgICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICAgIG11aUZvcm1Db250cm9sLFxuICAgICAgICBzdGF0ZXM6IFsnZGlzYWJsZWQnXVxuICAgICAgfSkuZGlzYWJsZWQpIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZvY3VzZWQ6IHRydWVcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhldmVudCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKSB7XG4gICAgICAgIG11aUZvcm1Db250cm9sLm9uRm9jdXMoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUJsdXIgPSBldmVudCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZm9jdXNlZDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZXZlbnQpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIG11aUZvcm1Db250cm9sXG4gICAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgaWYgKG11aUZvcm1Db250cm9sICYmIG11aUZvcm1Db250cm9sLm9uQmx1cikge1xuICAgICAgICBtdWlGb3JtQ29udHJvbC5vbkJsdXIoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNDb250cm9sbGVkKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEaXJ0eSh0aGlzLmlucHV0UmVmKTtcbiAgICAgIH0gLy8gUGVyZm9ybSBpbiB0aGUgd2lsbFVwZGF0ZVxuXG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoLi4uYXJncyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlUmVmSW5wdXQgPSByZWYgPT4ge1xuICAgICAgdGhpcy5pbnB1dFJlZiA9IHJlZjtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoIXJlZiB8fCByZWYgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IHJlZi5mb2N1cywgWydNYXRlcmlhbC1VSTogeW91IGhhdmUgcHJvdmlkZWQgYSBgaW5wdXRDb21wb25lbnRgIHRvIHRoZSBpbnB1dCBjb21wb25lbnQnLCAndGhhdCBkb2VzIG5vdCBjb3JyZWN0bHkgaGFuZGxlIHRoZSBgaW5wdXRSZWZgIHByb3BlcnR5LicsICdNYWtlIHN1cmUgdGhlIGBpbnB1dFJlZmAgcHJvcGVydHkgaXMgY2FsbGVkIHdpdGggYSBIVE1MSW5wdXRFbGVtZW50LiddLmpvaW4oJ1xcbicpKSA6IHZvaWQgMDtcbiAgICAgIGxldCByZWZQcm9wO1xuXG4gICAgICBpZiAodGhpcy5wcm9wcy5pbnB1dFJlZikge1xuICAgICAgICByZWZQcm9wID0gdGhpcy5wcm9wcy5pbnB1dFJlZjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5pbnB1dFByb3BzICYmIHRoaXMucHJvcHMuaW5wdXRQcm9wcy5yZWYpIHtcbiAgICAgICAgcmVmUHJvcCA9IHRoaXMucHJvcHMuaW5wdXRQcm9wcy5yZWY7XG4gICAgICB9XG5cbiAgICAgIHNldFJlZihyZWZQcm9wLCByZWYpO1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gZXZlbnQgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRSZWYgJiYgZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuaW5wdXRSZWYuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmlzQ29udHJvbGxlZCA9IHByb3BzLnZhbHVlICE9IG51bGw7XG5cbiAgICBpZiAodGhpcy5pc0NvbnRyb2xsZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tEaXJ0eShwcm9wcyk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzQ29udHJvbGxlZCkge1xuICAgICAgdGhpcy5jaGVja0RpcnR5KHRoaXMuaW5wdXRSZWYpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAvLyBCb29rIGtlZXAgdGhlIGZvY3VzZWQgc3RhdGUuXG4gICAgaWYgKCFwcmV2UHJvcHMuZGlzYWJsZWQgJiYgdGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBtdWlGb3JtQ29udHJvbFxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkJsdXIpIHtcbiAgICAgICAgbXVpRm9ybUNvbnRyb2wub25CbHVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNDb250cm9sbGVkKSB7XG4gICAgICB0aGlzLmNoZWNrRGlydHkodGhpcy5wcm9wcyk7XG4gICAgfSAvLyBlbHNlIHBlcmZvcm1lZCBpbiB0aGUgb25DaGFuZ2VcblxuICB9XG5cbiAgY2hlY2tEaXJ0eShvYmopIHtcbiAgICBjb25zdCB7XG4gICAgICBtdWlGb3JtQ29udHJvbFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGlzRmlsbGVkKG9iaikpIHtcbiAgICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZpbGxlZCkge1xuICAgICAgICBtdWlGb3JtQ29udHJvbC5vbkZpbGxlZCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkZpbGxlZCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uRmlsbGVkKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25FbXB0eSkge1xuICAgICAgbXVpRm9ybUNvbnRyb2wub25FbXB0eSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uRW1wdHkpIHtcbiAgICAgIHRoaXMucHJvcHMub25FbXB0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAge1xuICAgICAgYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lUHJvcCxcbiAgICAgIGRlZmF1bHRWYWx1ZSxcbiAgICAgIGVuZEFkb3JubWVudCxcbiAgICAgIGZ1bGxXaWR0aCxcbiAgICAgIGlkLFxuICAgICAgaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dFByb3BzOiB7XG4gICAgICAgIGNsYXNzTmFtZTogaW5wdXRQcm9wc0NsYXNzTmFtZVxuICAgICAgfSA9IHt9LFxuICAgICAgbXVpRm9ybUNvbnRyb2wsXG4gICAgICBtdWx0aWxpbmUsXG4gICAgICBuYW1lLFxuICAgICAgb25LZXlEb3duLFxuICAgICAgb25LZXlVcCxcbiAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgcmVhZE9ubHksXG4gICAgICByZW5kZXJQcmVmaXgsXG4gICAgICByb3dzLFxuICAgICAgcm93c01heCxcbiAgICAgIHN0YXJ0QWRvcm5tZW50LFxuICAgICAgdHlwZSxcbiAgICAgIHZhbHVlXG4gICAgfSA9IF90aGlzJHByb3BzLFxuICAgICAgICAgIGlucHV0UHJvcHNQcm9wID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMuaW5wdXRQcm9wcywgW1wiY2xhc3NOYW1lXCJdKSxcbiAgICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGVmYXVsdFZhbHVlXCIsIFwiZGlzYWJsZWRcIiwgXCJlbmRBZG9ybm1lbnRcIiwgXCJlcnJvclwiLCBcImZ1bGxXaWR0aFwiLCBcImlkXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJpbnB1dFByb3BzXCIsIFwiaW5wdXRSZWZcIiwgXCJtYXJnaW5cIiwgXCJtdWlGb3JtQ29udHJvbFwiLCBcIm11bHRpbGluZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xpY2tcIiwgXCJvbkVtcHR5XCIsIFwib25GaWxsZWRcIiwgXCJvbkZvY3VzXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJQcmVmaXhcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInN0YXJ0QWRvcm5tZW50XCIsIFwidHlwZVwiLCBcInZhbHVlXCJdKTtcblxuICAgIGNvbnN0IGFyaWFEZXNjcmliZWRieSA9IG90aGVyWydhcmlhLWRlc2NyaWJlZGJ5J107XG4gICAgZGVsZXRlIG90aGVyWydhcmlhLWRlc2NyaWJlZGJ5J107XG4gICAgY29uc3QgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgICBwcm9wczogdGhpcy5wcm9wcyxcbiAgICAgIG11aUZvcm1Db250cm9sLFxuICAgICAgc3RhdGVzOiBbJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ21hcmdpbicsICdyZXF1aXJlZCcsICdmaWxsZWQnXVxuICAgIH0pO1xuICAgIGNvbnN0IGZvY3VzZWQgPSBtdWlGb3JtQ29udHJvbCA/IG11aUZvcm1Db250cm9sLmZvY3VzZWQgOiB0aGlzLnN0YXRlLmZvY3VzZWQ7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gY2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIHtcbiAgICAgIFtjbGFzc2VzLmRpc2FibGVkXTogZmNzLmRpc2FibGVkLFxuICAgICAgW2NsYXNzZXMuZXJyb3JdOiBmY3MuZXJyb3IsXG4gICAgICBbY2xhc3Nlcy5mdWxsV2lkdGhdOiBmdWxsV2lkdGgsXG4gICAgICBbY2xhc3Nlcy5mb2N1c2VkXTogZm9jdXNlZCxcbiAgICAgIFtjbGFzc2VzLmZvcm1Db250cm9sXTogbXVpRm9ybUNvbnRyb2wsXG4gICAgICBbY2xhc3Nlcy5tYXJnaW5EZW5zZV06IGZjcy5tYXJnaW4gPT09ICdkZW5zZScsXG4gICAgICBbY2xhc3Nlcy5tdWx0aWxpbmVdOiBtdWx0aWxpbmUsXG4gICAgICBbY2xhc3Nlcy5hZG9ybmVkU3RhcnRdOiBzdGFydEFkb3JubWVudCxcbiAgICAgIFtjbGFzc2VzLmFkb3JuZWRFbmRdOiBlbmRBZG9ybm1lbnRcbiAgICB9LCBjbGFzc05hbWVQcm9wKTtcbiAgICBjb25zdCBpbnB1dENsYXNzTmFtZSA9IGNsYXNzTmFtZXMoY2xhc3Nlcy5pbnB1dCwge1xuICAgICAgW2NsYXNzZXMuZGlzYWJsZWRdOiBmY3MuZGlzYWJsZWQsXG4gICAgICBbY2xhc3Nlcy5pbnB1dFR5cGVdOiB0eXBlICE9PSAndGV4dCcsXG4gICAgICBbY2xhc3Nlcy5pbnB1dFR5cGVTZWFyY2hdOiB0eXBlID09PSAnc2VhcmNoJyxcbiAgICAgIFtjbGFzc2VzLmlucHV0TXVsdGlsaW5lXTogbXVsdGlsaW5lLFxuICAgICAgW2NsYXNzZXMuaW5wdXRNYXJnaW5EZW5zZV06IGZjcy5tYXJnaW4gPT09ICdkZW5zZScsXG4gICAgICBbY2xhc3Nlcy5pbnB1dEFkb3JuZWRTdGFydF06IHN0YXJ0QWRvcm5tZW50LFxuICAgICAgW2NsYXNzZXMuaW5wdXRBZG9ybmVkRW5kXTogZW5kQWRvcm5tZW50XG4gICAgfSwgaW5wdXRQcm9wc0NsYXNzTmFtZSk7XG4gICAgbGV0IElucHV0Q29tcG9uZW50ID0gaW5wdXRDb21wb25lbnQ7XG5cbiAgICBsZXQgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCBpbnB1dFByb3BzUHJvcCwge1xuICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZklucHV0XG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIElucHV0Q29tcG9uZW50ICE9PSAnc3RyaW5nJykge1xuICAgICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgLy8gUmVuYW1lIHJlZiB0byBpbnB1dFJlZiBhcyB3ZSBkb24ndCBrbm93IHRoZVxuICAgICAgICAvLyBwcm92aWRlZCBgaW5wdXRDb21wb25lbnRgIHN0cnVjdHVyZS5cbiAgICAgICAgaW5wdXRSZWY6IHRoaXMuaGFuZGxlUmVmSW5wdXQsXG4gICAgICAgIHR5cGVcbiAgICAgIH0sIGlucHV0UHJvcHMsIHtcbiAgICAgICAgcmVmOiBudWxsXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG11bHRpbGluZSkge1xuICAgICAgaWYgKHJvd3MgJiYgIXJvd3NNYXgpIHtcbiAgICAgICAgSW5wdXRDb21wb25lbnQgPSAndGV4dGFyZWEnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgICByb3dzTWF4LFxuICAgICAgICAgIHRleHRhcmVhUmVmOiB0aGlzLmhhbmRsZVJlZklucHV0XG4gICAgICAgIH0sIGlucHV0UHJvcHMsIHtcbiAgICAgICAgICByZWY6IG51bGxcbiAgICAgICAgfSk7XG4gICAgICAgIElucHV0Q29tcG9uZW50ID0gVGV4dGFyZWE7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHR5cGVcbiAgICAgIH0sIGlucHV0UHJvcHMpO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgb25DbGljazogdGhpcy5oYW5kbGVDbGlja1xuICAgIH0sIG90aGVyKSwgcmVuZGVyUHJlZml4ID8gcmVuZGVyUHJlZml4KF9leHRlbmRzKHt9LCBmY3MsIHtcbiAgICAgIHN0YXJ0QWRvcm5tZW50LFxuICAgICAgZm9jdXNlZFxuICAgIH0pKSA6IG51bGwsIHN0YXJ0QWRvcm5tZW50LCBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Db250cm9sQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IG51bGxcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0Q29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgICBcImFyaWEtaW52YWxpZFwiOiBmY3MuZXJyb3IsXG4gICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogYXJpYURlc2NyaWJlZGJ5LFxuICAgICAgYXV0b0NvbXBsZXRlOiBhdXRvQ29tcGxldGUsXG4gICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgIGNsYXNzTmFtZTogaW5wdXRDbGFzc05hbWUsXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgIGRpc2FibGVkOiBmY3MuZGlzYWJsZWQsXG4gICAgICBpZDogaWQsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgb25CbHVyOiB0aGlzLmhhbmRsZUJsdXIsXG4gICAgICBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICBvbkZvY3VzOiB0aGlzLmhhbmRsZUZvY3VzLFxuICAgICAgb25LZXlEb3duOiBvbktleURvd24sXG4gICAgICBvbktleVVwOiBvbktleVVwLFxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgICAgcmVhZE9ubHk6IHJlYWRPbmx5LFxuICAgICAgcmVxdWlyZWQ6IGZjcy5yZXF1aXJlZCxcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9LCBpbnB1dFByb3BzKSkpLCBlbmRBZG9ybm1lbnQpO1xuICB9XG5cbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gSW5wdXRCYXNlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoaXMgcHJvcGVydHkgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgaGVyZTpcbiAgICogaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGxcbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgd3JhcHBlciBlbGVtZW50LlxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBpbnB1dCB2YWx1ZSwgdXNlZnVsIHdoZW4gbm90IGNvbnRyb2xsaW5nIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pKV0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBlbmRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGluZGljYXRlIGFuIGVycm9yLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgbmF0aXZlIGlucHV0LlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBpbnB1dENvbXBvbmVudDogY29tcG9uZW50UHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVXNlIHRoYXQgcHJvcGVydHkgdG8gcGFzcyBhIHJlZiBjYWxsYmFjayB0byB0aGUgbmF0aXZlIGlucHV0IGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0UmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKlxuICAgKiBJZiBgZGVuc2VgLCB3aWxsIGFkanVzdCB2ZXJ0aWNhbCBzcGFjaW5nLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBtYXJnaW46IFByb3BUeXBlcy5vbmVPZihbJ2RlbnNlJywgJ25vbmUnXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG11aUZvcm1Db250cm9sOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW1wdHk6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZpbGxlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNob3J0IGhpbnQgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBiZWZvcmUgdGhlIHVzZXIgZW50ZXJzIGEgdmFsdWUuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSXQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXG4gICAqIChub3QgZnJvbSBpbnRlcmFjdGluZyB3aXRoIHRoZSBmaWVsZCkuXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbmRlclByZWZpeDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgYmUgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93czogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiByb3dzIHRvIGRpc3BsYXkgd2hlbiBtdWx0aWxpbmUgb3B0aW9uIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgcm93c01heDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBTdGFydCBgSW5wdXRBZG9ybm1lbnRgIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIHN0YXJ0QWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgaW5wdXQgZWxlbWVudC4gSXQgc2hvdWxkIGJlIGEgdmFsaWQgSFRNTDUgaW5wdXQgdHlwZS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZSwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0XSkpXSlcbn0gOiB2b2lkIDA7XG5JbnB1dEJhc2UuZGVmYXVsdFByb3BzID0ge1xuICBmdWxsV2lkdGg6IGZhbHNlLFxuICBpbnB1dENvbXBvbmVudDogJ2lucHV0JyxcbiAgbXVsdGlsaW5lOiBmYWxzZSxcbiAgdHlwZTogJ3RleHQnXG59O1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0QmFzZSdcbn0pKHdpdGhGb3JtQ29udHJvbENvbnRleHQoSW5wdXRCYXNlKSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlJzsgLy8gPCAxa2IgcGF5bG9hZCBvdmVyaGVhZCB3aGVuIGxvZGFzaC9kZWJvdW5jZSBpcyA+IDNrYi5cblxuaW1wb3J0IEV2ZW50TGlzdGVuZXIgZnJvbSAncmVhY3QtZXZlbnQtbGlzdGVuZXInO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgc2V0UmVmIH0gZnJvbSAnLi4vdXRpbHMvcmVhY3RIZWxwZXJzJztcbmNvbnN0IFJPV1NfSEVJR0hUID0gMTk7XG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgLy8gYmVjYXVzZSB0aGUgc2hhZG93IGhhcyBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG4gIHRleHRhcmVhOiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICByZXNpemU6ICdub25lJyxcbiAgICBmb250OiAnaW5oZXJpdCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBjdXJzb3I6ICdpbmhlcml0JyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgLy8gT3ZlcmZsb3cgYWxzbyBuZWVkZWQgdG8gaGVyZSB0byByZW1vdmUgdGhlIGV4dHJhIHJvd1xuICAgIC8vIGFkZGVkIHRvIHRleHRhcmVhcyBpbiBGaXJlZm94LlxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAvLyBWaXNpYmlsaXR5IG5lZWRlZCB0byBoaWRlIHRoZSBleHRyYSB0ZXh0IGFyZWEgb24gaVBhZHNcbiAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICB3aGl0ZVNwYWNlOiAncHJlLXdyYXAnXG4gIH1cbn07XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuY2xhc3MgVGV4dGFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmhhbmRsZVJlZklucHV0ID0gcmVmID0+IHtcbiAgICAgIHRoaXMuaW5wdXRSZWYgPSByZWY7XG4gICAgICBzZXRSZWYodGhpcy5wcm9wcy50ZXh0YXJlYVJlZiwgcmVmKTtcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVSZWZTaW5nbGVsaW5lU2hhZG93ID0gcmVmID0+IHtcbiAgICAgIHRoaXMuc2luZ2xlbGluZVNoYWRvd1JlZiA9IHJlZjtcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVSZWZTaGFkb3cgPSByZWYgPT4ge1xuICAgICAgdGhpcy5zaGFkb3dSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuICAgICAgaWYgKCF0aGlzLmlzQ29udHJvbGxlZCkge1xuICAgICAgICAvLyBUaGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgc2hhbGxvdyB2YWx1ZS5cbiAgICAgICAgdGhpcy5zaGFkb3dSZWYudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmlzQ29udHJvbGxlZCA9IHByb3BzLnZhbHVlICE9IG51bGw7IC8vIDxJbnB1dD4gZXhwZWN0cyB0aGUgY29tcG9uZW50cyBpdCByZW5kZXJzIHRvIHJlc3BvbmQgdG8gJ3ZhbHVlJ1xuICAgIC8vIHNvIHRoYXQgaXQgY2FuIGNoZWNrIHdoZXRoZXIgdGhleSBhcmUgZmlsbGVkLlxuXG4gICAgdGhpcy52YWx1ZSA9IHByb3BzLnZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZSB8fCAnJztcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGVpZ2h0OiBOdW1iZXIocHJvcHMucm93cykgKiBST1dTX0hFSUdIVFxuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuaGFuZGxlUmVzaXplID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgICB0aGlzLnN5bmNIZWlnaHRXaXRoU2hhZG93KCk7XG4gICAgICB9LCAxNjYpOyAvLyBDb3JyZXNwb25kcyB0byAxMCBmcmFtZXMgYXQgNjAgSHouXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5zeW5jSGVpZ2h0V2l0aFNoYWRvdygpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuc3luY0hlaWdodFdpdGhTaGFkb3coKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuaGFuZGxlUmVzaXplLmNsZWFyKCk7XG4gIH1cblxuICBzeW5jSGVpZ2h0V2l0aFNoYWRvdygpIHtcbiAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHM7IC8vIEd1YXJkaW5nIGZvciAqKmJyb2tlbioqIHNoYWxsb3cgcmVuZGVyaW5nIG1ldGhvZCB0aGF0IGNhbGwgY29tcG9uZW50RGlkTW91bnRcbiAgICAvLyBidXQgZG9lc24ndCBoYW5kbGUgcmVmcyBjb3JyZWN0bHkuXG4gICAgLy8gVG8gcmVtb3ZlIG9uY2UgdGhlIHNoYWxsb3cgcmVuZGVyaW5nIGhhcyBiZWVuIGZpeGVkLlxuXG4gICAgaWYgKCF0aGlzLnNoYWRvd1JlZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ29udHJvbGxlZCkge1xuICAgICAgLy8gVGhlIGNvbXBvbmVudCBpcyBjb250cm9sbGVkLCB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgc2hhbGxvdyB2YWx1ZS5cbiAgICAgIHRoaXMuc2hhZG93UmVmLnZhbHVlID0gcHJvcHMudmFsdWUgPT0gbnVsbCA/ICcnIDogU3RyaW5nKHByb3BzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgbGluZUhlaWdodCA9IHRoaXMuc2luZ2xlbGluZVNoYWRvd1JlZi5zY3JvbGxIZWlnaHQ7IC8vIFRoZSBUZXh0YXJlYSBtaWdodCBub3QgYmUgdmlzaWJsZSAocC5leDogZGlzcGxheTogbm9uZSkuXG4gICAgLy8gSW4gdGhpcyBjYXNlLCB0aGUgbGF5b3V0IHZhbHVlcyByZWFkIGZyb20gdGhlIERPTSB3aWxsIGJlIDAuXG5cbiAgICBsaW5lSGVpZ2h0ID0gbGluZUhlaWdodCA9PT0gMCA/IFJPV1NfSEVJR0hUIDogbGluZUhlaWdodDtcbiAgICBsZXQgbmV3SGVpZ2h0ID0gdGhpcy5zaGFkb3dSZWYuc2Nyb2xsSGVpZ2h0OyAvLyBHdWFyZGluZyBmb3IganNkb20sIHdoZXJlIHNjcm9sbEhlaWdodCBpc24ndCBwcmVzZW50LlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2lzc3Vlcy8xMDEzXG5cbiAgICBpZiAobmV3SGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoTnVtYmVyKHByb3BzLnJvd3NNYXgpID49IE51bWJlcihwcm9wcy5yb3dzKSkge1xuICAgICAgbmV3SGVpZ2h0ID0gTWF0aC5taW4oTnVtYmVyKHByb3BzLnJvd3NNYXgpICogbGluZUhlaWdodCwgbmV3SGVpZ2h0KTtcbiAgICB9XG5cbiAgICBuZXdIZWlnaHQgPSBNYXRoLm1heChuZXdIZWlnaHQsIGxpbmVIZWlnaHQpOyAvLyBOZWVkIGEgbGFyZ2UgZW5vdWdoIGRpZmZlcmVudCB0byB1cGRhdGUgdGhlIGhlaWdodC5cbiAgICAvLyBUaGlzIHByZXZlbnRzIGluZmluaXRlIHJlbmRlcmluZyBsb29wLlxuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMuc3RhdGUuaGVpZ2h0IC0gbmV3SGVpZ2h0KSA+IDEpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBoZWlnaHQ6IG5ld0hlaWdodFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB7XG4gICAgICBjbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgcm93cyxcbiAgICAgIHN0eWxlLFxuICAgICAgdmFsdWVcbiAgICB9ID0gX3RoaXMkcHJvcHMsXG4gICAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImRlZmF1bHRWYWx1ZVwiLCBcIm9uQ2hhbmdlXCIsIFwicm93c1wiLCBcInJvd3NNYXhcIiwgXCJzdHlsZVwiLCBcInRleHRhcmVhUmVmXCIsIFwidmFsdWVcIl0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnJvb3RcbiAgICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KEV2ZW50TGlzdGVuZXIsIHtcbiAgICAgIHRhcmdldDogXCJ3aW5kb3dcIixcbiAgICAgIG9uUmVzaXplOiB0aGlzLmhhbmRsZVJlc2l6ZVxuICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyhjbGFzc2VzLnRleHRhcmVhLCBjbGFzc2VzLnNoYWRvdyksXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIHJlZjogdGhpcy5oYW5kbGVSZWZTaW5nbGVsaW5lU2hhZG93LFxuICAgICAgcm93czogXCIxXCIsXG4gICAgICB0YWJJbmRleDogLTEsXG4gICAgICB2YWx1ZTogXCJcIlxuICAgIH0pLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge1xuICAgICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIixcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NuYW1lcyhjbGFzc2VzLnRleHRhcmVhLCBjbGFzc2VzLnNoYWRvdyksXG4gICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZlNoYWRvdyxcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgICB0YWJJbmRleDogLTEsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIF9leHRlbmRzKHtcbiAgICAgIHJvd3M6IHJvd3MsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzbmFtZXMoY2xhc3Nlcy50ZXh0YXJlYSwgY2xhc3NOYW1lKSxcbiAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZklucHV0LFxuICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodFxuICAgICAgfSwgc3R5bGUpXG4gICAgfSwgb3RoZXIpKSk7XG4gIH1cblxufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFVzZSB0aGF0IHByb3BlcnR5IHRvIHBhc3MgYSByZWYgY2FsbGJhY2sgdG8gdGhlIG5hdGl2ZSB0ZXh0YXJlYSBlbGVtZW50LlxuICAgKi9cbiAgdGV4dGFyZWFSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSlcbn0gOiB2b2lkIDA7XG5UZXh0YXJlYS5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvd3M6IDFcbn07XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpUHJpdmF0ZVRleHRhcmVhJ1xufSkoVGV4dGFyZWEpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0lucHV0QmFzZSc7IiwiLy8gU3VwcG9ydHMgZGV0ZXJtaW5hdGlvbiBvZiBpc0NvbnRyb2xsZWQoKS5cbi8vIENvbnRyb2xsZWQgaW5wdXQgYWNjZXB0cyBpdHMgY3VycmVudCB2YWx1ZSBhcyBhIHByb3AuXG4vL1xuLy8gQHNlZSBodHRwczovL2ZhY2Vib29rLmdpdGh1Yi5pby9yZWFjdC9kb2NzL2Zvcm1zLmh0bWwjY29udHJvbGxlZC1jb21wb25lbnRzXG4vLyBAcGFyYW0gdmFsdWVcbi8vIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHN0cmluZyAoaW5jbHVkaW5nICcnKSBvciBudW1iZXIgKGluY2x1ZGluZyB6ZXJvKVxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICEoQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAwKTtcbn0gLy8gRGV0ZXJtaW5lIGlmIGZpZWxkIGlzIGVtcHR5IG9yIGZpbGxlZC5cbi8vIFJlc3BvbnNlIGRldGVybWluZXMgaWYgbGFiZWwgaXMgcHJlc2VudGVkIGFib3ZlIGZpZWxkIG9yIGFzIHBsYWNlaG9sZGVyLlxuLy9cbi8vIEBwYXJhbSBvYmpcbi8vIEBwYXJhbSBTU1Jcbi8vIEByZXR1cm5zIHtib29sZWFufSBGYWxzZSB3aGVuIG5vdCBwcmVzZW50IG9yIGVtcHR5IHN0cmluZy5cbi8vICAgICAgICAgICAgICAgICAgICBUcnVlIHdoZW4gYW55IG51bWJlciBvciBzdHJpbmcgd2l0aCBsZW5ndGguXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpbGxlZChvYmosIFNTUiA9IGZhbHNlKSB7XG4gIHJldHVybiBvYmogJiYgKGhhc1ZhbHVlKG9iai52YWx1ZSkgJiYgb2JqLnZhbHVlICE9PSAnJyB8fCBTU1IgJiYgaGFzVmFsdWUob2JqLmRlZmF1bHRWYWx1ZSkgJiYgb2JqLmRlZmF1bHRWYWx1ZSAhPT0gJycpO1xufSAvLyBEZXRlcm1pbmUgaWYgYW4gSW5wdXQgaXMgYWRvcm5lZCBvbiBzdGFydC5cbi8vIEl0J3MgY29ycmVzcG9uZGluZyB0byB0aGUgbGVmdCB3aXRoIExUUi5cbi8vXG4vLyBAcGFyYW0gb2JqXG4vLyBAcmV0dXJucyB7Ym9vbGVhbn0gRmFsc2Ugd2hlbiBubyBhZG9ybm1lbnRzLlxuLy8gICAgICAgICAgICAgICAgICAgIFRydWUgd2hlbiBhZG9ybmVkIGF0IHRoZSBzdGFydC5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWRvcm5lZFN0YXJ0KG9iaikge1xuICByZXR1cm4gb2JqLnN0YXJ0QWRvcm5tZW50O1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuLy8gQGluaGVyaXRlZENvbXBvbmVudCBQb3BvdmVyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IGdldFNjcm9sbGJhclNpemUgZnJvbSAnZG9tLWhlbHBlcnMvdXRpbC9zY3JvbGxiYXJTaXplJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBQb3BvdmVyIGZyb20gJy4uL1BvcG92ZXInO1xuaW1wb3J0IE1lbnVMaXN0IGZyb20gJy4uL01lbnVMaXN0JztcbmNvbnN0IFJUTF9PUklHSU4gPSB7XG4gIHZlcnRpY2FsOiAndG9wJyxcbiAgaG9yaXpvbnRhbDogJ3JpZ2h0J1xufTtcbmNvbnN0IExUUl9PUklHSU4gPSB7XG4gIHZlcnRpY2FsOiAndG9wJyxcbiAgaG9yaXpvbnRhbDogJ2xlZnQnXG59O1xuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50LiAqL1xuICBwYXBlcjoge1xuICAgIC8vIHNwZWNaOiBUaGUgbWF4aW11bSBoZWlnaHQgb2YgYSBzaW1wbGUgbWVudSBzaG91bGQgYmUgb25lIG9yIG1vcmUgcm93cyBsZXNzIHRoYW4gdGhlIHZpZXdcbiAgICAvLyBoZWlnaHQuIFRoaXMgZW5zdXJlcyBhIHRhcGFibGUgYXJlYSBvdXRzaWRlIG9mIHRoZSBzaW1wbGUgbWVudSB3aXRoIHdoaWNoIHRvIGRpc21pc3NcbiAgICAvLyB0aGUgbWVudS5cbiAgICBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSA5NnB4KScsXG4gICAgLy8gQWRkIGlPUyBtb21lbnR1bSBzY3JvbGxpbmcuXG4gICAgV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6ICd0b3VjaCdcbiAgfVxufTtcblxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMuZ2V0Q29udGVudEFuY2hvckVsID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubWVudUxpc3RSZWYuc2VsZWN0ZWRJdGVtUmVmKSB7XG4gICAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLm1lbnVMaXN0UmVmLnNlbGVjdGVkSXRlbVJlZik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLm1lbnVMaXN0UmVmKS5maXJzdENoaWxkO1xuICAgIH07XG5cbiAgICB0aGlzLmZvY3VzID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubWVudUxpc3RSZWYgJiYgdGhpcy5tZW51TGlzdFJlZi5zZWxlY3RlZEl0ZW1SZWYpIHtcbiAgICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5tZW51TGlzdFJlZi5zZWxlY3RlZEl0ZW1SZWYpLmZvY3VzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWVudUxpc3QgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLm1lbnVMaXN0UmVmKTtcblxuICAgICAgaWYgKG1lbnVMaXN0ICYmIG1lbnVMaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgbWVudUxpc3QuZmlyc3RDaGlsZC5mb2N1cygpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZU1lbnVMaXN0UmVmID0gcmVmID0+IHtcbiAgICAgIHRoaXMubWVudUxpc3RSZWYgPSByZWY7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlRW50ZXJpbmcgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgZGlzYWJsZUF1dG9Gb2N1c0l0ZW0sXG4gICAgICAgIHRoZW1lXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IG1lbnVMaXN0ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5tZW51TGlzdFJlZik7IC8vIEZvY3VzIHNvIHRoZSBzY3JvbGwgY29tcHV0YXRpb24gb2YgdGhlIFBvcG92ZXIgd29ya3MgYXMgZXhwZWN0ZWQuXG5cbiAgICAgIGlmIChkaXNhYmxlQXV0b0ZvY3VzSXRlbSAhPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9IC8vIExldCdzIGlnbm9yZSB0aGF0IHBpZWNlIG9mIGxvZ2ljIGlmIHVzZXJzIGFyZSBhbHJlYWR5IG92ZXJyaWRpbmcgdGhlIHdpZHRoXG4gICAgICAvLyBvZiB0aGUgbWVudS5cblxuXG4gICAgICBpZiAobWVudUxpc3QgJiYgZWxlbWVudC5jbGllbnRIZWlnaHQgPCBtZW51TGlzdC5jbGllbnRIZWlnaHQgJiYgIW1lbnVMaXN0LnN0eWxlLndpZHRoKSB7XG4gICAgICAgIGNvbnN0IHNpemUgPSBgJHtnZXRTY3JvbGxiYXJTaXplKCl9cHhgO1xuICAgICAgICBtZW51TGlzdC5zdHlsZVt0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gJ3BhZGRpbmdMZWZ0JyA6ICdwYWRkaW5nUmlnaHQnXSA9IHNpemU7XG4gICAgICAgIG1lbnVMaXN0LnN0eWxlLndpZHRoID0gYGNhbGMoMTAwJSArICR7c2l6ZX0pYDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25FbnRlcmluZykge1xuICAgICAgICB0aGlzLnByb3BzLm9uRW50ZXJpbmcoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlTGlzdEtleURvd24gPSBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xvc2UpIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoZXZlbnQsICd0YWJLZXlEb3duJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub3BlbiAmJiB0aGlzLnByb3BzLmRpc2FibGVBdXRvRm9jdXNJdGVtICE9PSB0cnVlKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzZXMsXG4gICAgICBNZW51TGlzdFByb3BzLFxuICAgICAgUGFwZXJQcm9wcyA9IHt9LFxuICAgICAgUG9wb3ZlckNsYXNzZXMsXG4gICAgICB0aGVtZVxuICAgIH0gPSBfdGhpcyRwcm9wcyxcbiAgICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJkaXNhYmxlQXV0b0ZvY3VzSXRlbVwiLCBcIk1lbnVMaXN0UHJvcHNcIiwgXCJvbkVudGVyaW5nXCIsIFwiUGFwZXJQcm9wc1wiLCBcIlBvcG92ZXJDbGFzc2VzXCIsIFwidGhlbWVcIl0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wb3ZlciwgX2V4dGVuZHMoe1xuICAgICAgZ2V0Q29udGVudEFuY2hvckVsOiB0aGlzLmdldENvbnRlbnRBbmNob3JFbCxcbiAgICAgIGNsYXNzZXM6IFBvcG92ZXJDbGFzc2VzLFxuICAgICAgb25FbnRlcmluZzogdGhpcy5oYW5kbGVFbnRlcmluZyxcbiAgICAgIGFuY2hvck9yaWdpbjogdGhlbWUuZGlyZWN0aW9uID09PSAncnRsJyA/IFJUTF9PUklHSU4gOiBMVFJfT1JJR0lOLFxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiB0aGVtZS5kaXJlY3Rpb24gPT09ICdydGwnID8gUlRMX09SSUdJTiA6IExUUl9PUklHSU4sXG4gICAgICBQYXBlclByb3BzOiBfZXh0ZW5kcyh7fSwgUGFwZXJQcm9wcywge1xuICAgICAgICBjbGFzc2VzOiBfZXh0ZW5kcyh7fSwgUGFwZXJQcm9wcy5jbGFzc2VzLCB7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5wYXBlclxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9LCBvdGhlciksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVudUxpc3QsIF9leHRlbmRzKHtcbiAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVMaXN0S2V5RG93blxuICAgIH0sIE1lbnVMaXN0UHJvcHMsIHtcbiAgICAgIHJlZjogdGhpcy5oYW5kbGVNZW51TGlzdFJlZlxuICAgIH0pLCBjaGlsZHJlbikpO1xuICB9XG5cbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTWVudS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgRE9NIGVsZW1lbnQgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBtZW51LlxuICAgKi9cbiAgYW5jaG9yRWw6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIE1lbnUgY29udGVudHMsIG5vcm1hbGx5IGBNZW51SXRlbWBzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdGVkIC8gZmlyc3QgbWVudSBpdGVtIHdpbGwgbm90IGJlIGF1dG8gZm9jdXNlZC5cbiAgICovXG4gIGRpc2FibGVBdXRvRm9jdXNJdGVtOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUHJvcGVydGllcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVMaXN0YF0oL2FwaS9tZW51LWxpc3QvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudUxpc3RQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOmBcImVzY2FwZUtleURvd25cImAsIGBcImJhY2tkcm9wQ2xpY2tcImAsIGBcInRhYktleURvd25cImBcbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCBiZWZvcmUgdGhlIE1lbnUgZW50ZXJzLlxuICAgKi9cbiAgb25FbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaGFzIGVudGVyZWQuXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBNZW51IGlzIGVudGVyaW5nLlxuICAgKi9cbiAgb25FbnRlcmluZzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIGJlZm9yZSB0aGUgTWVudSBleGl0cy5cbiAgICovXG4gIG9uRXhpdDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIE1lbnUgaGFzIGV4aXRlZC5cbiAgICovXG4gIG9uRXhpdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgTWVudSBpcyBleGl0aW5nLlxuICAgKi9cbiAgb25FeGl0aW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbWVudSBpcyB2aXNpYmxlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgUGFwZXJQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogYGNsYXNzZXNgIHByb3BlcnR5IGFwcGxpZWQgdG8gdGhlIFtgUG9wb3ZlcmBdKC9hcGkvcG9wb3Zlci8pIGVsZW1lbnQuXG4gICAqL1xuICBQb3BvdmVyQ2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGhlbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgdHJhbnNpdGlvbiBpbiBgbXNgLCBvciAnYXV0bydcbiAgICovXG4gIHRyYW5zaXRpb25EdXJhdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBlbnRlcjogUHJvcFR5cGVzLm51bWJlcixcbiAgICBleGl0OiBQcm9wVHlwZXMubnVtYmVyXG4gIH0pLCBQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pXSlcbn0gOiB2b2lkIDA7XG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZUF1dG9Gb2N1c0l0ZW06IGZhbHNlLFxuICB0cmFuc2l0aW9uRHVyYXRpb246ICdhdXRvJ1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlNZW51JyxcbiAgd2l0aFRoZW1lOiB0cnVlXG59KShNZW51KTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbi8vIEBpbmhlcml0ZWRDb21wb25lbnQgSW5wdXRcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29tcG9uZW50UHJvcFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IE5hdGl2ZVNlbGVjdElucHV0IGZyb20gJy4vTmF0aXZlU2VsZWN0SW5wdXQnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgd2l0aEZvcm1Db250cm9sQ29udGV4dCBmcm9tICcuLi9Gb3JtQ29udHJvbC93aXRoRm9ybUNvbnRyb2xDb250ZXh0JztcbmltcG9ydCBBcnJvd0Ryb3BEb3duSWNvbiBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bic7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgSW5wdXRgIGNvbXBvbmVudCBgcm9vdGAgY2xhc3MuICovXG4gIHJvb3Q6IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBJbnB1dGAgY29tcG9uZW50IGBzZWxlY3RgIGNsYXNzLiAqL1xuICBzZWxlY3Q6IHtcbiAgICAnLW1vei1hcHBlYXJhbmNlJzogJ25vbmUnLFxuICAgIC8vIFJlc2V0XG4gICAgJy13ZWJraXQtYXBwZWFyYW5jZSc6ICdub25lJyxcbiAgICAvLyBSZXNldFxuICAgIC8vIFdoZW4gaW50ZXJhY3RpbmcgcXVpY2tseSwgdGhlIHRleHQgY2FuIGVuZCB1cCBzZWxlY3RlZC5cbiAgICAvLyBOYXRpdmUgc2VsZWN0IGNhbid0IGJlIHNlbGVjdGVkIGVpdGhlci5cbiAgICB1c2VyU2VsZWN0OiAnbm9uZScsXG4gICAgcGFkZGluZ1JpZ2h0OiAzMixcbiAgICBib3JkZXJSYWRpdXM6IDAsXG4gICAgLy8gUmVzZXRcbiAgICBoZWlnaHQ6ICcxLjE4NzVlbScsXG4gICAgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG4gICAgd2lkdGg6ICdjYWxjKDEwMCUgLSAzMnB4KScsXG4gICAgbWluV2lkdGg6IDE2LFxuICAgIC8vIFNvIGl0IGRvZXNuJ3QgY29sbGFwc2UuXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgJyY6Zm9jdXMnOiB7XG4gICAgICAvLyBTaG93IHRoYXQgaXQncyBub3QgYW4gdGV4dCBpbnB1dFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjA1KScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KScsXG4gICAgICBib3JkZXJSYWRpdXM6IDAgLy8gUmVzZXQgQ2hyb21lIHN0eWxlXG5cbiAgICB9LFxuICAgIC8vIFJlbW92ZSBJRSAxMSBhcnJvd1xuICAgICcmOjotbXMtZXhwYW5kJzoge1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSxcbiAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgfSxcbiAgICAnJlttdWx0aXBsZV0nOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJ1xuICAgIH0sXG4gICAgJyY6bm90KFttdWx0aXBsZV0pIG9wdGlvbiwgJjpub3QoW211bHRpcGxlXSkgb3B0Z3JvdXAnOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlclxuICAgIH1cbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYElucHV0YCBjb21wb25lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAuICovXG4gIGZpbGxlZDoge1xuICAgIHdpZHRoOiAnY2FsYygxMDAlIC0gNDRweCknXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBJbnB1dGAgY29tcG9uZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gIG91dGxpbmVkOiB7XG4gICAgd2lkdGg6ICdjYWxjKDEwMCUgLSA0NnB4KScsXG4gICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYElucHV0YCBjb21wb25lbnQgYHNlbGVjdE1lbnVgIGNsYXNzLiAqL1xuICBzZWxlY3RNZW51OiB7XG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgICAvLyBGaXggU2FmYXJpIHRleHRPdmVyZmxvd1xuICAgIGhlaWdodDogJ2F1dG8nLFxuICAgIC8vIFJlc2V0XG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBtaW5IZWlnaHQ6ICcxLjE4NzVlbScgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG5cbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYElucHV0YCBjb21wb25lbnQgYGRpc2FibGVkYCBjbGFzcy4gKi9cbiAgZGlzYWJsZWQ6IHt9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgSW5wdXRgIGNvbXBvbmVudCBgaWNvbmAgY2xhc3MuICovXG4gIGljb246IHtcbiAgICAvLyBXZSB1c2UgYSBwb3NpdGlvbiBhYnNvbHV0ZSBvdmVyIGEgZmxleGJveCBpbiBvcmRlciB0byBmb3J3YXJkIHRoZSBwb2ludGVyIGV2ZW50c1xuICAgIC8vIHRvIHRoZSBpbnB1dC5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICByaWdodDogMCxcbiAgICB0b3A6ICdjYWxjKDUwJSAtIDEycHgpJyxcbiAgICAvLyBDZW50ZXIgdmVydGljYWxseVxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5hY3RpdmUsXG4gICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnIC8vIERvbid0IGJsb2NrIHBvaW50ZXIgZXZlbnRzIG9uIHRoZSBzZWxlY3QgdW5kZXIgdGhlIGljb24uXG5cbiAgfVxufSk7XG4vKipcbiAqIEFuIGFsdGVybmF0aXZlIHRvIGA8U2VsZWN0IG5hdGl2ZSAvPmAgd2l0aCBhIG11Y2ggc21hbGxlciBidW5kbGUgc2l6ZSBmb290cHJpbnQuXG4gKi9cblxuZnVuY3Rpb24gTmF0aXZlU2VsZWN0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc2VzLFxuICAgIEljb25Db21wb25lbnQsXG4gICAgaW5wdXQsXG4gICAgaW5wdXRQcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbFxuICB9ID0gcHJvcHMsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJtdWlGb3JtQ29udHJvbFwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIGNvbnN0IGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzLFxuICAgIG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWyd2YXJpYW50J11cbiAgfSk7XG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoaW5wdXQsIF9leHRlbmRzKHtcbiAgICAvLyBNb3N0IG9mIHRoZSBsb2dpYyBpcyBpbXBsZW1lbnRlZCBpbiBgTmF0aXZlU2VsZWN0SW5wdXRgLlxuICAgIC8vIFRoZSBgU2VsZWN0YCBjb21wb25lbnQgaXMgYSBzaW1wbGUgQVBJIHdyYXBwZXIgdG8gZXhwb3NlIHNvbWV0aGluZyBiZXR0ZXIgdG8gcGxheSB3aXRoLlxuICAgIGlucHV0Q29tcG9uZW50OiBOYXRpdmVTZWxlY3RJbnB1dCxcbiAgICBpbnB1dFByb3BzOiBfZXh0ZW5kcyh7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNsYXNzZXMsXG4gICAgICBJY29uQ29tcG9uZW50LFxuICAgICAgdmFyaWFudDogZmNzLnZhcmlhbnQsXG4gICAgICB0eXBlOiB1bmRlZmluZWRcbiAgICB9LCBpbnB1dFByb3BzLCBpbnB1dCA/IGlucHV0LnByb3BzLmlucHV0UHJvcHMgOiB7fSlcbiAgfSwgb3RoZXIpKTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gTmF0aXZlU2VsZWN0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPG9wdGlvbj5gIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogY29tcG9uZW50UHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIEFuIGBJbnB1dGAgZWxlbWVudDsgZG9lcyBub3QgaGF2ZSB0byBiZSBhIG1hdGVyaWFsLXVpIHNwZWNpZmljIGBJbnB1dGAuXG4gICAqL1xuICBpbnB1dDogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgLyoqXG4gICAqIEF0dHJpYnV0ZXMgYXBwbGllZCB0byB0aGUgYHNlbGVjdGAgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG11aUZvcm1Db250cm9sOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmJvb2xdKSldKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhbmRhcmQnLCAnb3V0bGluZWQnLCAnZmlsbGVkJ10pXG59IDogdm9pZCAwO1xuTmF0aXZlU2VsZWN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgSWNvbkNvbXBvbmVudDogQXJyb3dEcm9wRG93bkljb24sXG4gIGlucHV0OiBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCBudWxsKVxufTtcbk5hdGl2ZVNlbGVjdC5tdWlOYW1lID0gJ1NlbGVjdCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTmF0aXZlU2VsZWN0J1xufSkod2l0aEZvcm1Db250cm9sQ29udGV4dChOYXRpdmVTZWxlY3QpKTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBjb21wb25lbnRQcm9wVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZnVuY3Rpb24gTmF0aXZlU2VsZWN0SW5wdXQocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGRpc2FibGVkLFxuICAgIEljb25Db21wb25lbnQsXG4gICAgaW5wdXRSZWYsXG4gICAgbmFtZSxcbiAgICBvbkNoYW5nZSxcbiAgICB2YWx1ZSxcbiAgICB2YXJpYW50XG4gIH0gPSBwcm9wcyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiZGlzYWJsZWRcIiwgXCJJY29uQ29tcG9uZW50XCIsIFwiaW5wdXRSZWZcIiwgXCJuYW1lXCIsIFwib25DaGFuZ2VcIiwgXCJ2YWx1ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMucm9vdFxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3Nlcy5zZWxlY3QsIHtcbiAgICAgIFtjbGFzc2VzLmZpbGxlZF06IHZhcmlhbnQgPT09ICdmaWxsZWQnLFxuICAgICAgW2NsYXNzZXMub3V0bGluZWRdOiB2YXJpYW50ID09PSAnb3V0bGluZWQnLFxuICAgICAgW2NsYXNzZXMuZGlzYWJsZWRdOiBkaXNhYmxlZFxuICAgIH0sIGNsYXNzTmFtZSksXG4gICAgbmFtZTogbmFtZSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICByZWY6IGlucHV0UmVmXG4gIH0sIG90aGVyKSwgY2hpbGRyZW4pLCBSZWFjdC5jcmVhdGVFbGVtZW50KEljb25Db21wb25lbnQsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuaWNvblxuICB9KSk7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IE5hdGl2ZVNlbGVjdElucHV0LnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBvcHRpb24gZWxlbWVudHMgdG8gcG9wdWxhdGUgdGhlIHNlbGVjdCB3aXRoLlxuICAgKiBDYW4gYmUgc29tZSBgPG9wdGlvbj5gIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IGNvbXBvbmVudFByb3BUeXBlLFxuXG4gIC8qKlxuICAgKiBVc2UgdGhhdCBwcm9wZXJ0eSB0byBwYXNzIGEgcmVmIGNhbGxiYWNrIHRvIHRoZSBuYXRpdmUgc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5vYmplY3RdKSxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBzZWxlY3RgIG9yIGhpZGRlbiBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBmaXJlZCB3aGVuIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCB2YWx1ZS5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmJvb2xdKSldKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnc3RhbmRhcmQnLCAnb3V0bGluZWQnLCAnZmlsbGVkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgTmF0aXZlU2VsZWN0SW5wdXQ7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG4vLyBAaW5oZXJpdGVkQ29tcG9uZW50IElucHV0XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbXBvbmVudFByb3BUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBTZWxlY3RJbnB1dCBmcm9tICcuL1NlbGVjdElucHV0JztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IHdpdGhGb3JtQ29udHJvbENvbnRleHQgZnJvbSAnLi4vRm9ybUNvbnRyb2wvd2l0aEZvcm1Db250cm9sQ29udGV4dCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgbWVyZ2VDbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9tZXJnZUNsYXNzZXMnO1xuaW1wb3J0IEFycm93RHJvcERvd25JY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9BcnJvd0Ryb3BEb3duJzsgLy8gVG8gcmVwbGFjZSB3aXRoIElucHV0QmFzZSBpbiB2NFxuXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vSW5wdXQnO1xuaW1wb3J0IHsgc3R5bGVzIGFzIG5hdGl2ZVNlbGVjdFN0eWxlcyB9IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3QnO1xuaW1wb3J0IE5hdGl2ZVNlbGVjdElucHV0IGZyb20gJy4uL05hdGl2ZVNlbGVjdC9OYXRpdmVTZWxlY3RJbnB1dCc7XG5leHBvcnQgY29uc3Qgc3R5bGVzID0gbmF0aXZlU2VsZWN0U3R5bGVzO1xuXG5mdW5jdGlvbiBTZWxlY3QocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGF1dG9XaWR0aCxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc2VzLFxuICAgIGRpc3BsYXlFbXB0eSxcbiAgICBJY29uQ29tcG9uZW50LFxuICAgIGlucHV0LFxuICAgIGlucHV0UHJvcHMsXG4gICAgTWVudVByb3BzLFxuICAgIG11aUZvcm1Db250cm9sLFxuICAgIG11bHRpcGxlLFxuICAgIG5hdGl2ZSxcbiAgICBvbkNsb3NlLFxuICAgIG9uT3BlbixcbiAgICBvcGVuLFxuICAgIHJlbmRlclZhbHVlLFxuICAgIFNlbGVjdERpc3BsYXlQcm9wc1xuICB9ID0gcHJvcHMsXG4gICAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcImF1dG9XaWR0aFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImRpc3BsYXlFbXB0eVwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFwiLCBcImlucHV0UHJvcHNcIiwgXCJNZW51UHJvcHNcIiwgXCJtdWlGb3JtQ29udHJvbFwiLCBcIm11bHRpcGxlXCIsIFwibmF0aXZlXCIsIFwib25DbG9zZVwiLCBcIm9uT3BlblwiLCBcIm9wZW5cIiwgXCJyZW5kZXJWYWx1ZVwiLCBcIlNlbGVjdERpc3BsYXlQcm9wc1wiLCBcInZhcmlhbnRcIl0pO1xuXG4gIGNvbnN0IGlucHV0Q29tcG9uZW50ID0gbmF0aXZlID8gTmF0aXZlU2VsZWN0SW5wdXQgOiBTZWxlY3RJbnB1dDtcbiAgY29uc3QgZmNzID0gZm9ybUNvbnRyb2xTdGF0ZSh7XG4gICAgcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnXVxuICB9KTtcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpbnB1dCwgX2V4dGVuZHMoe1xuICAgIC8vIE1vc3Qgb2YgdGhlIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIGBTZWxlY3RJbnB1dGAuXG4gICAgLy8gVGhlIGBTZWxlY3RgIGNvbXBvbmVudCBpcyBhIHNpbXBsZSBBUEkgd3JhcHBlciB0byBleHBvc2Ugc29tZXRoaW5nIGJldHRlciB0byBwbGF5IHdpdGguXG4gICAgaW5wdXRDb21wb25lbnQsXG4gICAgaW5wdXRQcm9wczogX2V4dGVuZHMoe1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBJY29uQ29tcG9uZW50LFxuICAgICAgdmFyaWFudDogZmNzLnZhcmlhbnQsXG4gICAgICB0eXBlOiB1bmRlZmluZWQsXG4gICAgICAvLyBXZSByZW5kZXIgYSBzZWxlY3QuIFdlIGNhbiBpZ25vcmUgdGhlIHR5cGUgcHJvdmlkZWQgYnkgdGhlIGBJbnB1dGAuXG4gICAgICBtdWx0aXBsZVxuICAgIH0sIG5hdGl2ZSA/IHt9IDoge1xuICAgICAgYXV0b1dpZHRoLFxuICAgICAgZGlzcGxheUVtcHR5LFxuICAgICAgTWVudVByb3BzLFxuICAgICAgb25DbG9zZSxcbiAgICAgIG9uT3BlbixcbiAgICAgIG9wZW4sXG4gICAgICByZW5kZXJWYWx1ZSxcbiAgICAgIFNlbGVjdERpc3BsYXlQcm9wc1xuICAgIH0sIGlucHV0UHJvcHMsIHtcbiAgICAgIGNsYXNzZXM6IGlucHV0UHJvcHMgPyBtZXJnZUNsYXNzZXMoe1xuICAgICAgICBiYXNlQ2xhc3NlczogY2xhc3NlcyxcbiAgICAgICAgbmV3Q2xhc3NlczogaW5wdXRQcm9wcy5jbGFzc2VzLFxuICAgICAgICBDb21wb25lbnQ6IFNlbGVjdFxuICAgICAgfSkgOiBjbGFzc2VzXG4gICAgfSwgaW5wdXQgPyBpbnB1dC5wcm9wcy5pbnB1dFByb3BzIDoge30pXG4gIH0sIG90aGVyKSk7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFNlbGVjdC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIGl0ZW1zIGluc2lkZSB0aGVcbiAgICogbWVudSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYXQgbGVhc3QgdGhlIHdpZHRoIG9mIHRoZSBzZWxlY3QgaW5wdXQuXG4gICAqL1xuICBhdXRvV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYE1lbnVJdGVtYCB3aGVuIGBuYXRpdmVgIGlzIGZhbHNlIGFuZCBgb3B0aW9uYCB3aGVuIGBuYXRpdmVgIGlzIHRydWUuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzLWFwaSkgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc2VsZWN0ZWQgaXRlbSBpcyBkaXNwbGF5ZWQgZXZlbiBpZiBpdHMgdmFsdWUgaXMgZW1wdHkuXG4gICAqIFlvdSBjYW4gb25seSB1c2UgaXQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcGVydHkgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBkaXNwbGF5RW1wdHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0aGF0IGRpc3BsYXlzIHRoZSBhcnJvdy5cbiAgICovXG4gIEljb25Db21wb25lbnQ6IGNvbXBvbmVudFByb3BUeXBlLFxuXG4gIC8qKlxuICAgKiBBbiBgSW5wdXRgIGVsZW1lbnQ7IGRvZXMgbm90IGhhdmUgdG8gYmUgYSBtYXRlcmlhbC11aSBzcGVjaWZpYyBgSW5wdXRgLlxuICAgKi9cbiAgaW5wdXQ6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBBdHRyaWJ1dGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogV2hlbiBgbmF0aXZlYCBpcyBgdHJ1ZWAsIHRoZSBhdHRyaWJ1dGVzIGFyZSBhcHBsaWVkIG9uIHRoZSBgc2VsZWN0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUHJvcGVydGllcyBhcHBsaWVkIHRvIHRoZSBbYE1lbnVgXSgvYXBpL21lbnUvKSBlbGVtZW50LlxuICAgKi9cbiAgTWVudVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCBgdmFsdWVgIG11c3QgYmUgYW4gYXJyYXkgYW5kIHRoZSBtZW51IHdpbGwgc3VwcG9ydCBtdWx0aXBsZSBzZWxlY3Rpb25zLlxuICAgKi9cbiAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgd2lsbCBiZSB1c2luZyBhIG5hdGl2ZSBgc2VsZWN0YCBlbGVtZW50LlxuICAgKi9cbiAgbmF0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2NoaWxkXSBUaGUgcmVhY3QgZWxlbWVudCB0aGF0IHdhcyBzZWxlY3RlZCB3aGVuIGBuYXRpdmVgIGlzIGBmYWxzZWAgKGRlZmF1bHQpLlxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBjb21wb25lbnQgcmVxdWVzdHMgdG8gYmUgY2xvc2VkLlxuICAgKiBVc2UgaW4gY29udHJvbGxlZCBtb2RlIChzZWUgb3BlbikuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFja1xuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGNvbXBvbmVudCByZXF1ZXN0cyB0byBiZSBvcGVuZWQuXG4gICAqIFVzZSBpbiBjb250cm9sbGVkIG1vZGUgKHNlZSBvcGVuKS5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIGBzZWxlY3RgIG9wZW4gc3RhdGUuXG4gICAqIFlvdSBjYW4gb25seSB1c2UgaXQgd2hlbiB0aGUgYG5hdGl2ZWAgcHJvcGVydHkgaXMgYGZhbHNlYCAoZGVmYXVsdCkuXG4gICAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICogWW91IGNhbiBvbmx5IHVzZSBpdCB3aGVuIHRoZSBgbmF0aXZlYCBwcm9wZXJ0eSBpcyBgZmFsc2VgIChkZWZhdWx0KS5cbiAgICpcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgYHZhbHVlYCBwcm92aWRlZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBAcmV0dXJucyB7UmVhY3RFbGVtZW50fVxuICAgKi9cbiAgcmVuZGVyVmFsdWU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGFwcGxpZWQgdG8gdGhlIGNsaWNrYWJsZSBkaXYgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdERpc3BsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLlxuICAgKiBUaGlzIHByb3BlcnR5IGlzIHJlcXVpcmVkIHdoZW4gdGhlIGBuYXRpdmVgIHByb3BlcnR5IGlzIGBmYWxzZWAgKGRlZmF1bHQpLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pKV0pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydzdGFuZGFyZCcsICdvdXRsaW5lZCcsICdmaWxsZWQnXSlcbn0gOiB2b2lkIDA7XG5TZWxlY3QuZGVmYXVsdFByb3BzID0ge1xuICBhdXRvV2lkdGg6IGZhbHNlLFxuICBkaXNwbGF5RW1wdHk6IGZhbHNlLFxuICBJY29uQ29tcG9uZW50OiBBcnJvd0Ryb3BEb3duSWNvbixcbiAgaW5wdXQ6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXQsIG51bGwpLFxuICBtdWx0aXBsZTogZmFsc2UsXG4gIG5hdGl2ZTogZmFsc2Vcbn07XG5TZWxlY3QubXVpTmFtZSA9ICdTZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVNlbGVjdCdcbn0pKHdpdGhGb3JtQ29udHJvbENvbnRleHQoU2VsZWN0KSk7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgeyBjb21wb25lbnRQcm9wVHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgTWVudSBmcm9tICcuLi9NZW51L01lbnUnO1xuaW1wb3J0IHsgaXNGaWxsZWQgfSBmcm9tICcuLi9JbnB1dEJhc2UvdXRpbHMnO1xuaW1wb3J0IHsgc2V0UmVmIH0gZnJvbSAnLi4vdXRpbHMvcmVhY3RIZWxwZXJzJztcblxuZnVuY3Rpb24gYXJlRXF1YWxWYWx1ZXMoYSwgYikge1xuICBpZiAodHlwZW9mIGIgPT09ICdvYmplY3QnICYmIGIgIT09IG51bGwpIHtcbiAgICByZXR1cm4gYSA9PT0gYjtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbn1cbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5cbmNsYXNzIFNlbGVjdElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuaWdub3JlTmV4dEJsdXIgPSBmYWxzZTtcblxuICAgIHRoaXMudXBkYXRlID0gKHtcbiAgICAgIGV2ZW50LFxuICAgICAgb3BlblxuICAgIH0pID0+IHtcbiAgICAgIGlmICh0aGlzLmlzT3BlbkNvbnRyb2xsZWQpIHtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uT3BlbihldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vIFBlcmZvcm0gdGhlIGxheW91dCBjb21wdXRhdGlvbiBvdXRzaWRlIG9mIHRoZSByZW5kZXIgbWV0aG9kLlxuICAgICAgICBtZW51TWluV2lkdGg6IHRoaXMucHJvcHMuYXV0b1dpZHRoID8gbnVsbCA6IHRoaXMuZGlzcGxheVJlZi5jbGllbnRXaWR0aCxcbiAgICAgICAgb3BlblxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSBldmVudCA9PiB7XG4gICAgICAvLyBPcGVuaW5nIHRoZSBtZW51IGlzIGdvaW5nIHRvIGJsdXIgdGhlLiBJdCB3aWxsIGJlIGZvY3VzZWQgYmFjayB3aGVuIGNsb3NlZC5cbiAgICAgIHRoaXMuaWdub3JlTmV4dEJsdXIgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGUoe1xuICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICBldmVudFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2xvc2UgPSBldmVudCA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICAgIG9wZW46IGZhbHNlLFxuICAgICAgICBldmVudFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlSXRlbUNsaWNrID0gY2hpbGQgPT4gZXZlbnQgPT4ge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLm11bHRpcGxlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgICBvcGVuOiBmYWxzZSxcbiAgICAgICAgICBldmVudFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgbmFtZVxuICAgICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMubXVsdGlwbGUpIHtcbiAgICAgICAgICB2YWx1ZSA9IEFycmF5LmlzQXJyYXkodGhpcy5wcm9wcy52YWx1ZSkgPyBbLi4udGhpcy5wcm9wcy52YWx1ZV0gOiBbXTtcbiAgICAgICAgICBjb25zdCBpdGVtSW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoaWxkLnByb3BzLnZhbHVlKTtcblxuICAgICAgICAgIGlmIChpdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB2YWx1ZS5wdXNoKGNoaWxkLnByb3BzLnZhbHVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gY2hpbGQucHJvcHMudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wZXJzaXN0KCk7XG4gICAgICAgIGV2ZW50LnRhcmdldCA9IHtcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBuYW1lXG4gICAgICAgIH07XG4gICAgICAgIG9uQ2hhbmdlKGV2ZW50LCBjaGlsZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQmx1ciA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLmlnbm9yZU5leHRCbHVyID09PSB0cnVlKSB7XG4gICAgICAgIC8vIFRoZSBwYXJlbnQgY29tcG9uZW50cyBhcmUgcmVseWluZyBvbiB0aGUgYnViYmxpbmcgb2YgdGhlIGV2ZW50LlxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5pZ25vcmVOZXh0Qmx1ciA9IGZhbHNlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbmFtZVxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgZXZlbnQucGVyc2lzdCgpO1xuICAgICAgICBldmVudC50YXJnZXQgPSB7XG4gICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgbmFtZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb3BzLm9uQmx1cihldmVudCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlS2V5RG93biA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLnJlYWRPbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKFsnICcsICdBcnJvd1VwJywgJ0Fycm93RG93bicsIC8vIFRoZSBuYXRpdmUgc2VsZWN0IGRvZXNuJ3QgcmVzcG9uZCB0byBlbnRlciBvbiBNYWNPUywgYnV0IGl0J3MgcmVjb21tZW5kZWQgYnlcbiAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi93YWktYXJpYS1wcmFjdGljZXMvZXhhbXBsZXMvbGlzdGJveC9saXN0Ym94LWNvbGxhcHNpYmxlLmh0bWxcbiAgICAgICdFbnRlciddLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gT3BlbmluZyB0aGUgbWVudSBpcyBnb2luZyB0byBibHVyIHRoZS4gSXQgd2lsbCBiZSBmb2N1c2VkIGJhY2sgd2hlbiBjbG9zZWQuXG5cbiAgICAgICAgdGhpcy5pZ25vcmVOZXh0Qmx1ciA9IHRydWU7XG4gICAgICAgIHRoaXMudXBkYXRlKHtcbiAgICAgICAgICBvcGVuOiB0cnVlLFxuICAgICAgICAgIGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZURpc3BsYXlSZWYgPSByZWYgPT4ge1xuICAgICAgdGhpcy5kaXNwbGF5UmVmID0gcmVmO1xuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUlucHV0UmVmID0gcmVmID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgaW5wdXRSZWZcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBpZiAoIWlucHV0UmVmKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgbm9kZVByb3h5ID0ge1xuICAgICAgICBub2RlOiByZWYsXG4gICAgICAgIC8vIEJ5IHBhc3MgdGhlIG5hdGl2ZSBpbnB1dCBhcyB3ZSBleHBvc2UgYSByaWNoIG9iamVjdCAoYXJyYXkpLlxuICAgICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSxcbiAgICAgICAgZm9jdXM6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmRpc3BsYXlSZWYuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHNldFJlZihpbnB1dFJlZiwgbm9kZVByb3h5KTtcbiAgICB9O1xuXG4gICAgdGhpcy5pc09wZW5Db250cm9sbGVkID0gcHJvcHMub3BlbiAhPT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZW51TWluV2lkdGg6IG51bGwsXG4gICAgICBvcGVuOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5pc09wZW5Db250cm9sbGVkICYmIHRoaXMucHJvcHMub3Blbikge1xuICAgICAgLy8gRm9jdXMgdGhlIGRpc3BsYXkgbm9kZSBzbyB0aGUgZm9jdXMgaXMgcmVzdG9yZWQgb24gdGhpcyBlbGVtZW50IG9uY2VcbiAgICAgIC8vIHRoZSBtZW51IGlzIGNsb3NlZC5cbiAgICAgIHRoaXMuZGlzcGxheVJlZi5mb2N1cygpOyAvLyBSZXJlbmRlciB3aXRoIHRoZSByZXNvbHZlIGBkaXNwbGF5UmVmYCByZWZlcmVuY2UuXG5cbiAgICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcbiAgICAgIHRoaXMuZGlzcGxheVJlZi5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAge1xuICAgICAgYXV0b1dpZHRoLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgZGlzYWJsZWQsXG4gICAgICBkaXNwbGF5RW1wdHksXG4gICAgICBJY29uQ29tcG9uZW50LFxuICAgICAgTWVudVByb3BzID0ge30sXG4gICAgICBtdWx0aXBsZSxcbiAgICAgIG5hbWUsXG4gICAgICBvbkZvY3VzLFxuICAgICAgb3Blbjogb3BlblByb3AsXG4gICAgICByZWFkT25seSxcbiAgICAgIHJlbmRlclZhbHVlLFxuICAgICAgU2VsZWN0RGlzcGxheVByb3BzLFxuICAgICAgdGFiSW5kZXg6IHRhYkluZGV4UHJvcCxcbiAgICAgIHR5cGUgPSAnaGlkZGVuJyxcbiAgICAgIHZhbHVlLFxuICAgICAgdmFyaWFudFxuICAgIH0gPSBfdGhpcyRwcm9wcyxcbiAgICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJhdXRvV2lkdGhcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJkaXNhYmxlZFwiLCBcImRpc3BsYXlFbXB0eVwiLCBcIkljb25Db21wb25lbnRcIiwgXCJpbnB1dFJlZlwiLCBcIk1lbnVQcm9wc1wiLCBcIm11bHRpcGxlXCIsIFwibmFtZVwiLCBcIm9uQmx1clwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbG9zZVwiLCBcIm9uRm9jdXNcIiwgXCJvbk9wZW5cIiwgXCJvcGVuXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJWYWx1ZVwiLCBcInJlcXVpcmVkXCIsIFwiU2VsZWN0RGlzcGxheVByb3BzXCIsIFwidGFiSW5kZXhcIiwgXCJ0eXBlXCIsIFwidmFsdWVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICAgIGNvbnN0IG9wZW4gPSB0aGlzLmlzT3BlbkNvbnRyb2xsZWQgJiYgdGhpcy5kaXNwbGF5UmVmID8gb3BlblByb3AgOiB0aGlzLnN0YXRlLm9wZW47XG4gICAgZGVsZXRlIG90aGVyWydhcmlhLWludmFsaWQnXTtcbiAgICBsZXQgZGlzcGxheTtcbiAgICBsZXQgZGlzcGxheVNpbmdsZSA9ICcnO1xuICAgIGNvbnN0IGRpc3BsYXlNdWx0aXBsZSA9IFtdO1xuICAgIGxldCBjb21wdXRlRGlzcGxheSA9IGZhbHNlOyAvLyBObyBuZWVkIHRvIGRpc3BsYXkgYW55IHZhbHVlIGlmIHRoZSBmaWVsZCBpcyBlbXB0eS5cblxuICAgIGlmIChpc0ZpbGxlZCh0aGlzLnByb3BzKSB8fCBkaXNwbGF5RW1wdHkpIHtcbiAgICAgIGlmIChyZW5kZXJWYWx1ZSkge1xuICAgICAgICBkaXNwbGF5ID0gcmVuZGVyVmFsdWUodmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcHV0ZURpc3BsYXkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1zID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICBpZiAoIVJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhjaGlsZC50eXBlICE9PSBSZWFjdC5GcmFnbWVudCwgW1wiTWF0ZXJpYWwtVUk6IHRoZSBTZWxlY3QgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKSA6IHZvaWQgMDtcbiAgICAgIGxldCBzZWxlY3RlZDtcblxuICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdGVyaWFsLVVJOiB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5ICcgKyAnd2hlbiB1c2luZyB0aGUgYFNlbGVjdGAgY29tcG9uZW50IHdpdGggYG11bHRpcGxlYC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdGVkID0gdmFsdWUuc29tZSh2ID0+IGFyZUVxdWFsVmFsdWVzKHYsIGNoaWxkLnByb3BzLnZhbHVlKSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkICYmIGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgICAgICAgZGlzcGxheU11bHRpcGxlLnB1c2goY2hpbGQucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZCA9IGFyZUVxdWFsVmFsdWVzKHZhbHVlLCBjaGlsZC5wcm9wcy52YWx1ZSk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkICYmIGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgICAgICAgZGlzcGxheVNpbmdsZSA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgb25DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2soY2hpbGQpLFxuICAgICAgICByb2xlOiAnb3B0aW9uJyxcbiAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgIHZhbHVlOiB1bmRlZmluZWQsXG4gICAgICAgIC8vIFRoZSB2YWx1ZSBpcyBtb3N0IGxpa2VseSBub3QgYSB2YWxpZCBIVE1MIGF0dHJpYnV0ZS5cbiAgICAgICAgJ2RhdGEtdmFsdWUnOiBjaGlsZC5wcm9wcy52YWx1ZSAvLyBJbnN0ZWFkLCB3ZSBwcm92aWRlIGl0IGFzIGEgZGF0YSBhdHRyaWJ1dGUuXG5cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKGNvbXB1dGVEaXNwbGF5KSB7XG4gICAgICBkaXNwbGF5ID0gbXVsdGlwbGUgPyBkaXNwbGF5TXVsdGlwbGUuam9pbignLCAnKSA6IGRpc3BsYXlTaW5nbGU7XG4gICAgfSAvLyBBdm9pZCBwZXJmb3JtaW5nIGEgbGF5b3V0IGNvbXB1dGF0aW9uIGluIHRoZSByZW5kZXIgbWV0aG9kLlxuXG5cbiAgICBsZXQgbWVudU1pbldpZHRoID0gdGhpcy5zdGF0ZS5tZW51TWluV2lkdGg7XG5cbiAgICBpZiAoIWF1dG9XaWR0aCAmJiB0aGlzLmlzT3BlbkNvbnRyb2xsZWQgJiYgdGhpcy5kaXNwbGF5UmVmKSB7XG4gICAgICBtZW51TWluV2lkdGggPSB0aGlzLmRpc3BsYXlSZWYuY2xpZW50V2lkdGg7XG4gICAgfVxuXG4gICAgbGV0IHRhYkluZGV4O1xuXG4gICAgaWYgKHR5cGVvZiB0YWJJbmRleFByb3AgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0YWJJbmRleCA9IHRhYkluZGV4UHJvcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiSW5kZXggPSBkaXNhYmxlZCA/IG51bGwgOiAwO1xuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5yb290XG4gICAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoY2xhc3Nlcy5zZWxlY3QsIGNsYXNzZXMuc2VsZWN0TWVudSwge1xuICAgICAgICBbY2xhc3Nlcy5kaXNhYmxlZF06IGRpc2FibGVkLFxuICAgICAgICBbY2xhc3Nlcy5maWxsZWRdOiB2YXJpYW50ID09PSAnZmlsbGVkJyxcbiAgICAgICAgW2NsYXNzZXMub3V0bGluZWRdOiB2YXJpYW50ID09PSAnb3V0bGluZWQnXG4gICAgICB9LCBjbGFzc05hbWUpLFxuICAgICAgcmVmOiB0aGlzLmhhbmRsZURpc3BsYXlSZWYsXG4gICAgICBcImFyaWEtcHJlc3NlZFwiOiBvcGVuID8gJ3RydWUnIDogJ2ZhbHNlJyxcbiAgICAgIHRhYkluZGV4OiB0YWJJbmRleCxcbiAgICAgIHJvbGU6IFwiYnV0dG9uXCIsXG4gICAgICBcImFyaWEtb3duc1wiOiBvcGVuID8gYG1lbnUtJHtuYW1lIHx8ICcnfWAgOiB1bmRlZmluZWQsXG4gICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsXG4gICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgb25DbGljazogZGlzYWJsZWQgfHwgcmVhZE9ubHkgPyBudWxsIDogdGhpcy5oYW5kbGVDbGljayxcbiAgICAgIG9uRm9jdXM6IG9uRm9jdXMgLy8gVGhlIGlkIGNhbiBoZWxwIHdpdGggZW5kLXRvLWVuZCB0ZXN0aW5nIGF1dG9tYXRpb24uXG4gICAgICAsXG4gICAgICBpZDogbmFtZSA/IGBzZWxlY3QtJHtuYW1lfWAgOiB1bmRlZmluZWRcbiAgICB9LCBTZWxlY3REaXNwbGF5UHJvcHMpLCBkaXNwbGF5IHx8IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgIF9faHRtbDogJyYjODIwMzsnXG4gICAgICB9XG4gICAgfSkpLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgX2V4dGVuZHMoe1xuICAgICAgdmFsdWU6IEFycmF5LmlzQXJyYXkodmFsdWUpID8gdmFsdWUuam9pbignLCcpIDogdmFsdWUsXG4gICAgICBuYW1lOiBuYW1lLFxuICAgICAgcmVmOiB0aGlzLmhhbmRsZUlucHV0UmVmLFxuICAgICAgdHlwZTogdHlwZVxuICAgIH0sIG90aGVyKSksIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmljb25cbiAgICB9KSwgUmVhY3QuY3JlYXRlRWxlbWVudChNZW51LCBfZXh0ZW5kcyh7XG4gICAgICBpZDogYG1lbnUtJHtuYW1lIHx8ICcnfWAsXG4gICAgICBhbmNob3JFbDogdGhpcy5kaXNwbGF5UmVmLFxuICAgICAgb3Blbjogb3BlbixcbiAgICAgIG9uQ2xvc2U6IHRoaXMuaGFuZGxlQ2xvc2VcbiAgICB9LCBNZW51UHJvcHMsIHtcbiAgICAgIE1lbnVMaXN0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgICAgcm9sZTogJ2xpc3Rib3gnLFxuICAgICAgICBkaXNhYmxlTGlzdFdyYXA6IHRydWVcbiAgICAgIH0sIE1lbnVQcm9wcy5NZW51TGlzdFByb3BzKSxcbiAgICAgIFBhcGVyUHJvcHM6IF9leHRlbmRzKHt9LCBNZW51UHJvcHMuUGFwZXJQcm9wcywge1xuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICAgIG1pbldpZHRoOiBtZW51TWluV2lkdGhcbiAgICAgICAgfSwgTWVudVByb3BzLlBhcGVyUHJvcHMgIT0gbnVsbCA/IE1lbnVQcm9wcy5QYXBlclByb3BzLnN0eWxlIDogbnVsbClcbiAgICAgIH0pXG4gICAgfSksIGl0ZW1zKSk7XG4gIH1cblxufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTZWxlY3RJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgd2lkdGggb2YgdGhlIHBvcG92ZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHNldCBhY2NvcmRpbmcgdG8gdGhlIGl0ZW1zIGluc2lkZSB0aGVcbiAgICogbWVudSwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgYXQgbGVhc3QgdGhlIHdpZHRoIG9mIHRoZSBzZWxlY3QgaW5wdXQuXG4gICAqL1xuICBhdXRvV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uIGVsZW1lbnRzIHRvIHBvcHVsYXRlIHRoZSBzZWxlY3Qgd2l0aC5cbiAgICogQ2FuIGJlIHNvbWUgYDxNZW51SXRlbT5gIGVsZW1lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSBDU1MgY2xhc3MgbmFtZSBvZiB0aGUgc2VsZWN0IGVsZW1lbnQuXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBzZWxlY3RlZCBpdGVtIGlzIGRpc3BsYXllZCBldmVuIGlmIGl0cyB2YWx1ZSBpcyBlbXB0eS5cbiAgICovXG4gIGRpc3BsYXlFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRoYXQgZGlzcGxheXMgdGhlIGFycm93LlxuICAgKi9cbiAgSWNvbkNvbXBvbmVudDogY29tcG9uZW50UHJvcFR5cGUsXG5cbiAgLyoqXG4gICAqIFVzZSB0aGF0IHByb3BlcnR5IHRvIHBhc3MgYSByZWYgY2FsbGJhY2sgdG8gdGhlIG5hdGl2ZSBzZWxlY3QgZWxlbWVudC5cbiAgICovXG4gIGlucHV0UmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGFwcGxpZWQgdG8gdGhlIFtgTWVudWBdKC9hcGkvbWVudS8pIGVsZW1lbnQuXG4gICAqL1xuICBNZW51UHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIHRydWUsIGB2YWx1ZWAgbXVzdCBiZSBhbiBhcnJheSBhbmQgdGhlIG1lbnUgd2lsbCBzdXBwb3J0IG11bHRpcGxlIHNlbGVjdGlvbnMuXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgc2VsZWN0YCBvciBoaWRkZW4gYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiBhIG1lbnUgaXRlbSBpcyBzZWxlY3RlZC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBZb3UgY2FuIHB1bGwgb3V0IHRoZSBuZXcgdmFsdWUgYnkgYWNjZXNzaW5nIGBldmVudC50YXJnZXQudmFsdWVgLlxuICAgKiBAcGFyYW0ge29iamVjdH0gW2NoaWxkXSBUaGUgcmVhY3QgZWxlbWVudCB0aGF0IHdhcyBzZWxlY3RlZC5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2tcbiAgICovXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiB0aGUgY29tcG9uZW50IHJlcXVlc3RzIHRvIGJlIG9wZW5lZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2tcbiAgICovXG4gIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENvbnRyb2wgYHNlbGVjdGAgb3BlbiBzdGF0ZS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgc2VsZWN0ZWQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIGB2YWx1ZWAgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogQHJldHVybnMge1JlYWN0RWxlbWVudH1cbiAgICovXG4gIHJlbmRlclZhbHVlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0aWVzIGFwcGxpZWQgdG8gdGhlIGNsaWNrYWJsZSBkaXYgZWxlbWVudC5cbiAgICovXG4gIFNlbGVjdERpc3BsYXlQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGlucHV0IHZhbHVlLlxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLm9iamVjdF0pKV0pLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB2YXJpYW50IHRvIHVzZS5cbiAgICovXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbJ3N0YW5kYXJkJywgJ291dGxpbmVkJywgJ2ZpbGxlZCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdElucHV0OyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1NlbGVjdCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBwdXJlIGZyb20gJ3JlY29tcG9zZS9wdXJlJztcbmltcG9ydCBTdmdJY29uIGZyb20gJy4uLy4uL1N2Z0ljb24nO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBfcmVmID0gUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk03IDEwbDUgNSA1LTV6XCJcbn0pO1xuXG5sZXQgQXJyb3dEcm9wRG93biA9IHByb3BzID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgcHJvcHMsIF9yZWYpO1xuXG5BcnJvd0Ryb3BEb3duID0gcHVyZShBcnJvd0Ryb3BEb3duKTtcbkFycm93RHJvcERvd24ubXVpTmFtZSA9ICdTdmdJY29uJztcbmV4cG9ydCBkZWZhdWx0IEFycm93RHJvcERvd247IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0YS45OTU5Ljk5NTkgMCAwIDAtMS40MSAwbC0xLjgzIDEuODMgMy43NSAzLjc1IDEuODMtMS44M3pcIlxufSksIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZmlsbDogXCJub25lXCIsXG4gIGQ6IFwiTTAgMGgyNHYyNEgwelwiXG59KSksICdFZGl0Jyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=