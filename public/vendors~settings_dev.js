(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~settings"],{

/***/ "../node_modules/@material-ui/core/es/FormGroup/FormGroup.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/FormGroup/FormGroup.js ***!
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  },

  /* Styles applied to the root element if `row={true}`. */
  row: {
    flexDirection: 'row'
  }
};
/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 */

function FormGroup(props) {
  var classes = props.classes,
      className = props.className,
      children = props.children,
      row = props.row,
      other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["classes", "className", "children", "row"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, _defineProperty({}, classes.row, row), className)
  }, other), children);
}

 true ? FormGroup.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

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
   * Display group of elements in a compact row.
   */
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
FormGroup.defaultProps = {
  row: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiFormGroup'
})(FormGroup));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/FormGroup/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/FormGroup/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormGroup */ "../node_modules/@material-ui/core/es/FormGroup/FormGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/core/es/Switch/Switch.js":
/*!*************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Switch/Switch.js ***!
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/@material-ui/core/es/styles/withStyles.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/helpers */ "../node_modules/@material-ui/core/es/utils/helpers.js");
/* harmony import */ var _internal_SwitchBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../internal/SwitchBase */ "../node_modules/@material-ui/core/es/internal/SwitchBase.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 62,
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      // For correct alignment with the text.
      verticalAlign: 'middle'
    },

    /* Styles used to create the `icon` passed to the internal `SwitchBase` component `icon` prop. */
    icon: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied the icon element component if `checked={true}`. */
    iconChecked: {
      boxShadow: theme.shadows[2]
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      padding: 0,
      height: 48,
      width: 48,
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },

    /* Styles applied to the internal `SwitchBase` component's `checked` class. */
    checked: {
      transform: 'translateX(14px)',
      '& + $bar': {
        opacity: 0.5
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '& + $bar': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '& + $bar': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the internal SwitchBase component's disabled class. */
    disabled: {
      '& + $bar': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      },
      '& $icon': {
        boxShadow: theme.shadows[1]
      },
      '&$switchBase': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800],
        '& + $bar': {
          backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
        }
      }
    },

    /* Styles applied to the bar element. */
    bar: {
      borderRadius: 14 / 2,
      display: 'block',
      position: 'absolute',
      zIndex: -1,
      width: 34,
      height: 14,
      top: '50%',
      left: '50%',
      marginTop: -7,
      marginLeft: -17,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};

function Switch(props) {
  var classes = props.classes,
      className = props.className,
      color = props.color,
      other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["classes", "className", "color"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_SwitchBase__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    type: "checkbox",
    icon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: classes.icon
    }),
    classes: {
      root: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.switchBase, classes["color".concat(Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_6__["capitalize"])(color))]),
      checked: classes.checked,
      disabled: classes.disabled
    },
    checkedIcon: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.icon, classes.iconChecked)
    })
  }, other)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.bar
  }));
}

 true ? Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

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
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'default']),

  /**
   * @ignore
   */
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.checked`.
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The input component property `type`.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool])
} : undefined;
Switch.defaultProps = {
  color: 'secondary'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiSwitch'
})(Switch));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/Switch/index.js":
/*!************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/Switch/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch */ "../node_modules/@material-ui/core/es/Switch/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Switch__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/icons/Copyright.js":
/*!*******************************************************!*\
  !*** ../node_modules/@material-ui/icons/Copyright.js ***!
  \*******************************************************/
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

var _default = (0, _createSvgIcon.default)(_react.default.createElement(_react.default.Fragment, null, _react.default.createElement("defs", null, _react.default.createElement("path", {
  id: "a",
  d: "M24 0v24H0V0h24z"
})), _react.default.createElement("path", {
  d: "M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
})), 'Copyright');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@material-ui/icons/PowerSettingsNew.js":
/*!**************************************************************!*\
  !*** ../node_modules/@material-ui/icons/PowerSettingsNew.js ***!
  \**************************************************************/
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
  fill: "none",
  d: "M0 0h24v24H0z"
}), _react.default.createElement("path", {
  d: "M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
})), 'PowerSettingsNew');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzL0Zvcm1Hcm91cC9Gb3JtR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lcy9Gb3JtR3JvdXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lcy9Td2l0Y2gvU3dpdGNoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXMvU3dpdGNoL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0NvcHlyaWdodC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9Qb3dlclNldHRpbmdzTmV3LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsInJvb3QiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwicm93IiwiRm9ybUdyb3VwIiwicHJvcHMiLCJjbGFzc2VzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJvdGhlciIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiX2V4dGVuZHMiLCJjbGFzc05hbWVzIiwicHJvY2VzcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIndpdGhTdHlsZXMiLCJuYW1lIiwidGhlbWUiLCJ3aWR0aCIsInBvc2l0aW9uIiwiZmxleFNocmluayIsInpJbmRleCIsInZlcnRpY2FsQWxpZ24iLCJpY29uIiwiYm94U2hhZG93Iiwic2hhZG93cyIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsImJvcmRlclJhZGl1cyIsImljb25DaGVja2VkIiwic3dpdGNoQmFzZSIsInBhZGRpbmciLCJjb2xvciIsInBhbGV0dGUiLCJ0eXBlIiwiZ3JleSIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImR1cmF0aW9uIiwic2hvcnRlc3QiLCJjaGVja2VkIiwidHJhbnNmb3JtIiwib3BhY2l0eSIsImNvbG9yUHJpbWFyeSIsInByaW1hcnkiLCJtYWluIiwiY29sb3JTZWNvbmRhcnkiLCJzZWNvbmRhcnkiLCJkaXNhYmxlZCIsImNvbW1vbiIsImJsYWNrIiwid2hpdGUiLCJiYXIiLCJ0b3AiLCJsZWZ0IiwibWFyZ2luVG9wIiwibWFyZ2luTGVmdCIsIlN3aXRjaCIsIlN3aXRjaEJhc2UiLCJjYXBpdGFsaXplIiwiY2hlY2tlZEljb24iLCJvbmVPZlR5cGUiLCJvbmVPZiIsImRlZmF1bHRDaGVja2VkIiwiZGlzYWJsZVJpcHBsZSIsImlkIiwiaW5wdXRQcm9wcyIsImlucHV0UmVmIiwiZnVuYyIsIm9uQ2hhbmdlIiwidmFsdWUiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxNQUFNLEdBQUc7QUFDcEI7QUFDQUMsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLGlCQUFhLEVBQUUsUUFGWDtBQUdKQyxZQUFRLEVBQUU7QUFITixHQUZjOztBQVFwQjtBQUNBQyxLQUFHLEVBQUU7QUFDSEYsaUJBQWEsRUFBRTtBQURaO0FBVGUsQ0FBZjtBQWFQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0csU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDeEIsTUFDRUMsT0FERixHQUtJRCxLQUxKLENBQ0VDLE9BREY7QUFBQSxNQUVFQyxTQUZGLEdBS0lGLEtBTEosQ0FFRUUsU0FGRjtBQUFBLE1BR0VDLFFBSEYsR0FLSUgsS0FMSixDQUdFRyxRQUhGO0FBQUEsTUFJRUwsR0FKRixHQUtJRSxLQUxKLENBSUVGLEdB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QUFDQTtBQUNFNEQsVUFBUSxFQUFFOUQsaURBQVMsQ0FBQzZELElBckVxQzs7QUF1RXpEO0FBQ0Y7QUFDQTtBQUNFbkMsTUFBSSxFQUFFMUIsaURBQVMsQ0FBQ0ksTUExRXlDOztBQTRFekQ7QUFDRjtBQUNBO0FBQ0UyRCxPQUFLLEVBQUUvRCxpREFBUyxDQUFDc0QsU0FBVixDQUFvQixDQUFDdEQsaURBQVMsQ0FBQ0ksTUFBWCxFQUFtQkosaURBQVMsQ0FBQ2dFLE1BQTdCLEVBQXFDaEUsaURBQVMsQ0FBQ0ssSUFBL0MsQ0FBcEI7QUEvRWtELENBQTNELEdBZ0ZJLFNBaEZKO0FBaUZBNkMsTUFBTSxDQUFDNUMsWUFBUCxHQUFzQjtBQUNwQmtCLE9BQUssRUFBRTtBQURhLENBQXRCO0FBR2VqQixpSUFBVSxDQUFDMUIsTUFBRCxFQUFTO0FBQ2hDMkIsTUFBSSxFQUFFO0FBRDBCLENBQVQsQ0FBVixDQUVaMEMsTUFGWSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQzlOQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FhOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLHFIQUE4Qzs7QUFFbkY7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxvQ0FBb0MsbUJBQU8sQ0FBQyw2Q0FBTzs7QUFFbkQsNENBQTRDLG1CQUFPLENBQUMsd0ZBQXVCOztBQUUzRTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOztBQUVELDJCOzs7Ozs7Ozs7Ozs7QUNwQmE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMscUhBQThDOztBQUVuRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDZDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx3RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLENBQUM7O0FBRUQsMkIiLCJmaWxlIjoidmVuZG9yc35zZXR0aW5nc19kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgY29uc3Qgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGZsZXhXcmFwOiAnd3JhcCdcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGByb3c9e3RydWV9YC4gKi9cbiAgcm93OiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdydcbiAgfVxufTtcbi8qKlxuICogYEZvcm1Hcm91cGAgd3JhcHMgY29udHJvbHMgc3VjaCBhcyBgQ2hlY2tib3hgIGFuZCBgU3dpdGNoYC5cbiAqIEl0IHByb3ZpZGVzIGNvbXBhY3Qgcm93IGxheW91dC5cbiAqIEZvciB0aGUgYFJhZGlvYCwgeW91IHNob3VsZCBiZSB1c2luZyB0aGUgYFJhZGlvR3JvdXBgIGNvbXBvbmVudCBpbnN0ZWFkIG9mIHRoaXMgb25lLlxuICovXG5cbmZ1bmN0aW9uIEZvcm1Hcm91cChwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWUsXG4gICAgY2hpbGRyZW4sXG4gICAgcm93XG4gIH0gPSBwcm9wcyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwicm93XCJdKTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzZXMucm9vdCwge1xuICAgICAgW2NsYXNzZXMucm93XTogcm93XG4gICAgfSwgY2xhc3NOYW1lKVxuICB9LCBvdGhlciksIGNoaWxkcmVuKTtcbn1cblxucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gRm9ybUdyb3VwLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzLWFwaSkgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGdyb3VwIG9mIGVsZW1lbnRzIGluIGEgY29tcGFjdCByb3cuXG4gICAqL1xuICByb3c6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuRm9ybUdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm93OiBmYWxzZVxufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlGb3JtR3JvdXAnXG59KShGb3JtR3JvdXApOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1Hcm91cCc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IFN3aXRjaEJhc2UgZnJvbSAnLi4vaW50ZXJuYWwvU3dpdGNoQmFzZSc7XG5leHBvcnQgY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgd2lkdGg6IDYyLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgekluZGV4OiAwLFxuICAgIC8vIFJlc2V0IHRoZSBzdGFja2luZyBjb250ZXh0LlxuICAgIC8vIEZvciBjb3JyZWN0IGFsaWdubWVudCB3aXRoIHRoZSB0ZXh0LlxuICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnXG4gIH0sXG5cbiAgLyogU3R5bGVzIHVzZWQgdG8gY3JlYXRlIHRoZSBgaWNvbmAgcGFzc2VkIHRvIHRoZSBpbnRlcm5hbCBgU3dpdGNoQmFzZWAgY29tcG9uZW50IGBpY29uYCBwcm9wLiAqL1xuICBpY29uOiB7XG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzFdLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ2N1cnJlbnRDb2xvcicsXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRoZSBpY29uIGVsZW1lbnQgY29tcG9uZW50IGlmIGBjaGVja2VkPXt0cnVlfWAuICovXG4gIGljb25DaGVja2VkOiB7XG4gICAgYm94U2hhZG93OiB0aGVtZS5zaGFkb3dzWzJdXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGBTd2l0Y2hCYXNlYCBjb21wb25lbnQncyBgcm9vdGAgY2xhc3MuICovXG4gIHN3aXRjaEJhc2U6IHtcbiAgICBwYWRkaW5nOiAwLFxuICAgIGhlaWdodDogNDgsXG4gICAgd2lkdGg6IDQ4LFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNTBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0sXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlc3RcbiAgICB9KVxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBgU3dpdGNoQmFzZWAgY29tcG9uZW50J3MgYGNoZWNrZWRgIGNsYXNzLiAqL1xuICBjaGVja2VkOiB7XG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxNHB4KScsXG4gICAgJyYgKyAkYmFyJzoge1xuICAgICAgb3BhY2l0eTogMC41XG4gICAgfVxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBTd2l0Y2hCYXNlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICBjb2xvclByaW1hcnk6IHtcbiAgICAnJiRjaGVja2VkJzoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgJyYgKyAkYmFyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBTd2l0Y2hCYXNlIGNvbXBvbmVudCdzIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgJyYkY2hlY2tlZCc6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgJyYgKyAkYmFyJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIFN3aXRjaEJhc2UgY29tcG9uZW50J3MgZGlzYWJsZWQgY2xhc3MuICovXG4gIGRpc2FibGVkOiB7XG4gICAgJyYgKyAkYmFyJzoge1xuICAgICAgb3BhY2l0eTogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gMC4xMiA6IDAuMVxuICAgIH0sXG4gICAgJyYgJGljb24nOiB7XG4gICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV1cbiAgICB9LFxuICAgICcmJHN3aXRjaEJhc2UnOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0gOiB0aGVtZS5wYWxldHRlLmdyZXlbODAwXSxcbiAgICAgICcmICsgJGJhcic6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayA6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBiYXIgZWxlbWVudC4gKi9cbiAgYmFyOiB7XG4gICAgYm9yZGVyUmFkaXVzOiAxNCAvIDIsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB6SW5kZXg6IC0xLFxuICAgIHdpZHRoOiAzNCxcbiAgICBoZWlnaHQ6IDE0LFxuICAgIHRvcDogJzUwJScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgbWFyZ2luVG9wOiAtNyxcbiAgICBtYXJnaW5MZWZ0OiAtMTcsXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnb3BhY2l0eScsICdiYWNrZ3JvdW5kLWNvbG9yJ10sIHtcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdFxuICAgIH0pLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2sgOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcbiAgICBvcGFjaXR5OiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAwLjM4IDogMC4zXG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBTd2l0Y2gocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNsYXNzZXMsXG4gICAgY2xhc3NOYW1lLFxuICAgIGNvbG9yXG4gIH0gPSBwcm9wcyxcbiAgICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCJdKTtcblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSlcbiAgfSwgUmVhY3QuY3JlYXRlRWxlbWVudChTd2l0Y2hCYXNlLCBfZXh0ZW5kcyh7XG4gICAgdHlwZTogXCJjaGVja2JveFwiLFxuICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5pY29uXG4gICAgfSksXG4gICAgY2xhc3Nlczoge1xuICAgICAgcm9vdDogY2xhc3NOYW1lcyhjbGFzc2VzLnN3aXRjaEJhc2UsIGNsYXNzZXNbYGNvbG9yJHtjYXBpdGFsaXplKGNvbG9yKX1gXSksXG4gICAgICBjaGVja2VkOiBjbGFzc2VzLmNoZWNrZWQsXG4gICAgICBkaXNhYmxlZDogY2xhc3Nlcy5kaXNhYmxlZFxuICAgIH0sXG4gICAgY2hlY2tlZEljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc2VzLmljb24sIGNsYXNzZXMuaWNvbkNoZWNrZWQpXG4gICAgfSlcbiAgfSwgb3RoZXIpKSwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5iYXJcbiAgfSkpO1xufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTd2l0Y2gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY29tcG9uZW50IGlzIGNoZWNrZWQuXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyBjaGVja2VkLlxuICAgKi9cbiAgY2hlY2tlZEljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2Nzcy1hcGkpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5JywgJ2RlZmF1bHQnXSksXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgc3dpdGNoIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHJpcHBsZSBlZmZlY3Qgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaWNvbiB0byBkaXNwbGF5IHdoZW4gdGhlIGNvbXBvbmVudCBpcyB1bmNoZWNrZWQuXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQXR0cmlidXRlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBVc2UgdGhhdCBwcm9wZXJ0eSB0byBwYXNzIGEgcmVmIGNhbGxiYWNrIHRvIHRoZSBuYXRpdmUgaW5wdXQgY29tcG9uZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHN0YXRlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LmNoZWNrZWRgLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWQgVGhlIGBjaGVja2VkYCB2YWx1ZSBvZiB0aGUgc3dpdGNoXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBpbnB1dCBjb21wb25lbnQgcHJvcGVydHkgYHR5cGVgLlxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIHZhbHVlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLmJvb2xdKVxufSA6IHZvaWQgMDtcblN3aXRjaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbG9yOiAnc2Vjb25kYXJ5J1xufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTd2l0Y2gnXG59KShTd2l0Y2gpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N3aXRjaCc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRlZnNcIiwgbnVsbCwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBpZDogXCJhXCIsXG4gIGQ6IFwiTTI0IDB2MjRIMFYwaDI0elwiXG59KSksIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTAuMDggMTAuODZjLjA1LS4zMy4xNi0uNjIuMy0uODdzLjM0LS40Ni41OS0uNjJjLjI0LS4xNS41NC0uMjIuOTEtLjIzLjIzLjAxLjQ0LjA1LjYzLjEzLjIuMDkuMzguMjEuNTIuMzZzLjI1LjMzLjM0LjUzLjEzLjQyLjE0LjY0aDEuNzljLS4wMi0uNDctLjExLS45LS4yOC0xLjI5cy0uNC0uNzMtLjctMS4wMS0uNjYtLjUtMS4wOC0uNjYtLjg4LS4yMy0xLjM5LS4yM2MtLjY1IDAtMS4yMi4xMS0xLjcuMzRzLS44OC41My0xLjIuOTItLjU2Ljg0LS43MSAxLjM2UzggMTEuMjkgOCAxMS44N3YuMjdjMCAuNTguMDggMS4xMi4yMyAxLjY0cy4zOS45Ny43MSAxLjM1LjcyLjY5IDEuMi45MSAxLjA1LjM0IDEuNy4zNGMuNDcgMCAuOTEtLjA4IDEuMzItLjIzcy43Ny0uMzYgMS4wOC0uNjMuNTYtLjU4Ljc0LS45NC4yOS0uNzQuMy0xLjE1aC0xLjc5Yy0uMDEuMjEtLjA2LjQtLjE1LjU4cy0uMjEuMzMtLjM2LjQ2LS4zMi4yMy0uNTIuM2MtLjE5LjA3LS4zOS4wOS0uNi4xLS4zNi0uMDEtLjY2LS4wOC0uODktLjIzLS4yNS0uMTYtLjQ1LS4zNy0uNTktLjYycy0uMjUtLjU1LS4zLS44OC0uMDgtLjY3LS4wOC0xdi0uMjdjMC0uMzUuMDMtLjY4LjA4LTEuMDF6TTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTAgMThjLTQuNDEgMC04LTMuNTktOC04czMuNTktOCA4LTggOCAzLjU5IDggOC0zLjU5IDgtOCA4elwiXG59KSksICdDb3B5cmlnaHQnKTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsOiBcIm5vbmVcIixcbiAgZDogXCJNMCAwaDI0djI0SDB6XCJcbn0pLCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEzIDNoLTJ2MTBoMlYzem00LjgzIDIuMTdsLTEuNDIgMS40MkMxNy45OSA3Ljg2IDE5IDkuODEgMTkgMTJjMCAzLjg3LTMuMTMgNy03IDdzLTctMy4xMy03LTdjMC0yLjE5IDEuMDEtNC4xNCAyLjU4LTUuNDJMNi4xNyA1LjE3QzQuMjMgNi44MiAzIDkuMjYgMyAxMmMwIDQuOTcgNC4wMyA5IDkgOXM5LTQuMDMgOS05YzAtMi43NC0xLjIzLTUuMTgtMy4xNy02LjgzelwiXG59KSksICdQb3dlclNldHRpbmdzTmV3Jyk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyJdLCJzb3VyY2VSb290IjoiIn0=