(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~serverList"],{

/***/ "../node_modules/@babel/runtime/helpers/jsx.js":
/*!*****************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/jsx.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var REACT_ELEMENT_TYPE;

function _createRawReactElement(type, props, key, children) {
  if (!REACT_ELEMENT_TYPE) {
    REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7;
  }

  var defaultProps = type && type.defaultProps;
  var childrenLength = arguments.length - 3;

  if (!props && childrenLength !== 0) {
    props = {
      children: void 0
    };
  }

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = new Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 3];
    }

    props.children = childArray;
  }

  if (props && defaultProps) {
    for (var propName in defaultProps) {
      if (props[propName] === void 0) {
        props[propName] = defaultProps[propName];
      }
    }
  } else if (!props) {
    props = defaultProps || {};
  }

  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key === undefined ? null : "" + key,
    ref: null,
    props: props,
    _owner: null
  };
}

module.exports = _createRawReactElement;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../node_modules/@material-ui/core/es/DialogActions/DialogActions.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/DialogActions/DialogActions.js ***!
  \***************************************************************************/
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
/* harmony import */ var _utils_reactHelpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/reactHelpers */ "../node_modules/@material-ui/core/es/utils/reactHelpers.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "../node_modules/@material-ui/core/es/Button/index.js");







 // So we don't have any override priority issue.

var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '0 0 auto',
    margin: '8px 4px'
  },

  /* Styles applied to the children. */
  action: {
    margin: '0 4px'
  }
};

function DialogActions(props) {
  var disableActionSpacing = props.disableActionSpacing,
      children = props.children,
      classes = props.classes,
      className = props.className,
      other = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(props, ["disableActionSpacing", "children", "classes", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.root, className)
  }, other), disableActionSpacing ? children : Object(_utils_reactHelpers__WEBPACK_IMPORTED_MODULE_6__["cloneChildrenWithClassName"])(children, classes.action));
}

 true ? DialogActions.propTypes = {
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
   * If `true`, the dialog actions do not have additional margin.
   */
  disableActionSpacing: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
DialogActions.defaultProps = {
  disableActionSpacing: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiDialogActions'
})(DialogActions));

/***/ }),

/***/ "../node_modules/@material-ui/core/es/DialogActions/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@material-ui/core/es/DialogActions/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DialogActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DialogActions */ "../node_modules/@material-ui/core/es/DialogActions/DialogActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _DialogActions__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "../node_modules/@material-ui/icons/Warning.js":
/*!*****************************************************!*\
  !*** ../node_modules/@material-ui/icons/Warning.js ***!
  \*****************************************************/
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
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
})), 'Warning');

exports.default = _default;

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/dist/u-wave-react-server-list.es.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/dist/u-wave-react-server-list.es.js ***!
  \*************************************************************************************/
/*! exports provided: Container, ServerList, loadServers, announceEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerList", function() { return ServerListing$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadServers", function() { return loadServers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announceEvents", function() { return announceEvents; });
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/jsx */ "../node_modules/@babel/runtime/helpers/jsx.js");
/* harmony import */ var _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/es/styles/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "../node_modules/@material-ui/core/es/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/es/Typography/index.js");
/* harmony import */ var strip_indent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! strip-indent */ "../node_modules/strip-indent/index.js");
/* harmony import */ var strip_indent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(strip_indent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-markdown */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/es/Button/index.js");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Dialog */ "../node_modules/@material-ui/core/es/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "../node_modules/@material-ui/core/es/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "../node_modules/@material-ui/core/es/DialogContent/index.js");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "../node_modules/@material-ui/core/es/DialogActions/index.js");
/* harmony import */ var _material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/withMobileDialog */ "../node_modules/@material-ui/core/es/withMobileDialog/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var recompose_withState__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! recompose/withState */ "../node_modules/recompose/withState.js");
/* harmony import */ var recompose_withState__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(recompose_withState__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! recompose/withProps */ "../node_modules/recompose/withProps.js");
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(recompose_withProps__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/es/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/es/CardContent/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/es/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Menu */ "../node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Warning */ "../node_modules/@material-ui/icons/Warning.js");
/* harmony import */ var _material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ms */ "../node_modules/@u-wave/react-server-list/node_modules/ms/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var event_source_polyfill__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! event-source-polyfill */ "../node_modules/event-source-polyfill/src/eventsource.js");
/* harmony import */ var event_source_polyfill__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(event_source_polyfill__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! isomorphic-fetch */ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "../node_modules/@babel/runtime/helpers/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26__);




























var enhance = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  root: {
    width: '100%',
    textAlign: 'center'
  }
}, {
  name: 'Loading'
});

var _ref2 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
  size: 300,
  mode: "indeterminate"
});

var Loading = function Loading(_ref) {
  var classes = _ref.classes,
      message = _ref.message;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: classes.root
  }, void 0, _ref2, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, message));
};

Loading.propTypes =  true ? {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    root: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired,
  message: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
var Loading$1 = enhance(Loading);

var Dialog = Object(_material_ui_core_withMobileDialog__WEBPACK_IMPORTED_MODULE_13__["default"])()(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_9__["default"]);
var enhance$1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  markdown: {
    color: 'rgba(255, 255, 255, 0.6)'
  }
}, {
  name: 'DescriptionDialog'
});

var DescriptionDialog = function DescriptionDialog(_ref) {
  var classes = _ref.classes,
      server = _ref.server,
      isOpen = _ref.isOpen,
      onCloseDescription = _ref.onCloseDescription;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(Dialog, {
    open: isOpen,
    onClose: onCloseDescription
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, server.name), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: classes.markdown
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(react_markdown__WEBPACK_IMPORTED_MODULE_7___default.a, {
    source: strip_indent__WEBPACK_IMPORTED_MODULE_6___default()(server.description)
  }))), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onClick: onCloseDescription
  }, void 0, "Close"), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
    color: "primary",
    variant: "raised",
    href: server.url
  }, void 0, "Join")));
};

DescriptionDialog.propTypes =  true ? {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    markdown: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired,
  server: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired,
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  onCloseDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
} : undefined;
var DescriptionDialog$1 = enhance$1(DescriptionDialog);

var enhance$2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  image: {
    width: '100%',
    paddingBottom: '75%',
    backgroundColor: 'black',
    backgroundPosition: 'center center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  nowPlaying: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: '100%',
    bottom: 0,
    color: 'white',
    background: 'rgba(0, 0, 0, 0.75)',
    padding: 16,
    paddingTop: 24
  },
  title: {
    margin: 0,
    fontSize: '150%'
  },
  artist: {
    margin: 0
  }
}, {
  name: 'CurrentMedia'
});

var _ref2$1 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("span", {});

var CurrentMedia = function CurrentMedia(_ref) {
  var classes = _ref.classes,
      media = _ref.media;
  return media ? _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: classes.image,
    style: {
      backgroundImage: "url(" + JSON.stringify(media.thumbnail) + ")"
    }
  }), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: classes.nowPlaying
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {
    className: classes.title
  }, void 0, media.title), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("p", {
    className: classes.artist
  }, void 0, media.artist))) : _ref2$1;
};

CurrentMedia.propTypes =  true ? {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    nowPlaying: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    artist: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired,
  media: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    thumbnail: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    artist: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  })
} : undefined;
var CurrentMedia$1 = enhance$2(CurrentMedia);

var downTimeout = ms__WEBPACK_IMPORTED_MODULE_22___default()('10 minutes');
var enhance$3 = recompose_compose__WEBPACK_IMPORTED_MODULE_14___default()(recompose_withState__WEBPACK_IMPORTED_MODULE_15___default()('isOpen', 'setDescriptionOpen', false), recompose_withProps__WEBPACK_IMPORTED_MODULE_16___default()(function (_ref) {
  var setDescriptionOpen = _ref.setDescriptionOpen;
  return {
    onOpenDescription: function onOpenDescription(event) {
      event.preventDefault();
      event.stopPropagation();
      setDescriptionOpen(true);
    },
    onCloseDescription: function onCloseDescription() {
      return setDescriptionOpen(false);
    }
  };
}), Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  root: {
    width: 360,
    margin: '0 20px 20px 20px',
    position: 'relative'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}, {
  name: 'ServerThumbnail'
}));
var WarningIcon = recompose_withProps__WEBPACK_IMPORTED_MODULE_16___default()({
  style: {
    height: 16,
    width: 16,
    verticalAlign: 'sub'
  }
})(_material_ui_icons_Warning__WEBPACK_IMPORTED_MODULE_21___default.a);
var WarningText = recompose_withProps__WEBPACK_IMPORTED_MODULE_16___default()({
  type: 'body1',
  style: {
    color: '#ed404f'
  }
})(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"]);

var timedOutMessage = function timedOutMessage(since) {
  return " This server may be down. It has not responded for " + since + ".";
};

var _ref3 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_20___default.a, {});

var _ref4 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(WarningIcon, {});

var ServerThumbnail = function ServerThumbnail(_ref2) {
  var classes = _ref2.classes,
      server = _ref2.server,
      media = _ref2.media,
      isOpen = _ref2.isOpen,
      onOpenDescription = _ref2.onOpenDescription,
      onCloseDescription = _ref2.onCloseDescription;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: classes.root
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: classes.header
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "headline"
  }, void 0, server.name), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variant: "body1"
  }, void 0, server.subtitle)), server.description && _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__["default"], {
    onClick: onOpenDescription
  }, void 0, _ref3))), _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("a", {
    href: server.url
  }, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(CurrentMedia$1, {
    media: media
  })), server.timeSincePing >= downTimeout && _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_18__["default"], {}, void 0, _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(WarningText, {}, void 0, _ref4, timedOutMessage(ms__WEBPACK_IMPORTED_MODULE_22___default()(server.timeSincePing, {
    long: true
  })))), server.description && _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(DescriptionDialog$1, {
    server: server,
    isOpen: isOpen,
    onCloseDescription: onCloseDescription
  })));
};

ServerThumbnail.propTypes =  true ? {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    root: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    header: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired,
  server: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    subtitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    timeSincePing: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    url: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
  }).isRequired,
  media: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  // eslint-disable-line react/forbid-prop-types
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onOpenDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onCloseDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
} : undefined;
var ServerThumbnail$1 = enhance$3(ServerThumbnail);

var enhance$4 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
}, {
  name: 'ServerListing'
});

var _ref2$2 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, "No servers are currently available.");

var ServerListing = function ServerListing(_ref) {
  var classes = _ref.classes,
      servers = _ref.servers;
  return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()("div", {
    className: classes.root
  }, void 0, servers.length === 0 ? _ref2$2 : servers.map(function (server) {
    return _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(ServerThumbnail$1, {
      server: server,
      media: server.booth && server.booth.media
    }, server.url);
  }));
};

ServerListing.propTypes =  true ? {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    root: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }).isRequired,
  servers: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
} : undefined;
var ServerListing$1 = enhance$4(ServerListing);

/* global EventSource */
var downTimeout$1 = ms__WEBPACK_IMPORTED_MODULE_22___default()('10 minutes');
function loadServers(hubServer) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_24___default()(hubServer).then(function (response) {
    return response.json();
  }).then(function (state) {
    return state.servers.sort(function (a, b) {
      if (a.timeSincePing >= downTimeout$1) {
        return 1;
      }

      if (b.timeSincePing >= downTimeout$1) {
        return -1;
      }

      return 0;
    });
  });
}
function announceEvents(hubServer, notify) {
  var source = new EventSource(hubServer.replace(/\/$/, '') + "/events");

  var listener = function listener(event) {
    var data;

    try {
      data = JSON.parse(event.data);
    } catch (err) {
      return;
    }

    notify(data);
  };

  source.addEventListener('message', listener);

  var remove = function remove() {
    source.removeEventListener('message', listener);
    source.close();
  };

  return {
    remove: remove
  };
}

function addServer(list, update) {
  var servers = list.map(function (server) {
    return server.publicKey === update.publicKey ? update : server;
  });

  if (servers.indexOf(update) === -1) {
    servers.unshift(update);
  }

  return servers;
}

var _ref2$3 =
/*#__PURE__*/
_babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(Loading$1, {
  message: "Loading available servers..."
});

var Container =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_25___default()(Container, _React$Component);

  function Container(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      servers: null
    };
    _this.update = _this.update.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(_this)));
    _this.handleUpdate = _this.handleUpdate.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_26___default()(_this)));
    return _this;
  }

  var _proto = Container.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var hub = this.props.hub;
    var servers = this.state.servers;

    if (!servers) {
      this.update();
    }

    this.events = announceEvents(hub, this.handleUpdate);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.events.remove();
  };

  _proto.update = function update() {
    var _this2 = this;

    var hub = this.props.hub;
    loadServers(hub).then(function (servers) {
      _this2.setState({
        servers: servers
      });
    });
  };

  _proto.handleUpdate = function handleUpdate(update) {
    this.setState(function (_ref) {
      var servers = _ref.servers;
      return {
        servers: addServer(servers, update)
      };
    });
  };

  _proto.render = function render() {
    var servers = this.state.servers;
    return servers == null ? _ref2$3 : _babel_runtime_helpers_jsx__WEBPACK_IMPORTED_MODULE_0___default()(ServerListing$1, {
      servers: servers
    });
  };

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
Container.propTypes =  true ? {
  hub: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
} : undefined;
Container.defaultProps = {
  hub: 'https://announce.u-wave.net/'
};


//# sourceMappingURL=u-wave-react-server-list.es.js.map


/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/ms/index.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/ms/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/ast-to-react.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/ast-to-react.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");

var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

var defaultNodePosition = {
  start: {
    line: 1,
    column: 1,
    offset: 0
  },
  end: {
    line: 1,
    column: 1,
    offset: 0
  }
};

function astToReact(node, options) {
  var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var renderer = options.renderers[node.type]; // nodes generated by plugins may not have position data
  // much of the code after this point will attempt to access properties of the node.position
  // this will set the node position to the parent node's position to prevent errors

  if (node.position === undefined) {
    node.position = parent.node && parent.node.position || defaultNodePosition;
  }

  var pos = node.position.start;
  var key = [node.type, pos.line, pos.column, index].join('-');

  if (!ReactIs.isValidElementType(renderer)) {
    throw new Error("Renderer for type `".concat(node.type, "` not defined or is not renderable"));
  }

  var nodeProps = getNodeProps(node, key, options, renderer, parent, index);
  return React.createElement(renderer, nodeProps, nodeProps.children || resolveChildren() || undefined);

  function resolveChildren() {
    return node.children && node.children.map(function (childNode, i) {
      return astToReact(childNode, options, {
        node: node,
        props: nodeProps
      }, i);
    });
  }
} // eslint-disable-next-line max-params, complexity


function getNodeProps(node, key, opts, renderer, parent, index) {
  var props = {
    key: key
  };
  var isTagRenderer = typeof renderer === 'string'; // `sourcePos` is true if the user wants source information (line/column info from markdown source)

  if (opts.sourcePos && node.position) {
    props['data-sourcepos'] = flattenPosition(node.position);
  }

  if (opts.rawSourcePos && !isTagRenderer) {
    props.sourcePosition = node.position;
  } // If `includeNodeIndex` is true, pass node index info to all non-tag renderers


  if (opts.includeNodeIndex && parent.node && parent.node.children && !isTagRenderer) {
    props.index = parent.node.children.indexOf(node);
    props.parentChildCount = parent.node.children.length;
  }

  var ref = node.identifier !== null && node.identifier !== undefined ? opts.definitions[node.identifier] || {} : null;

  switch (node.type) {
    case 'root':
      assignDefined(props, {
        className: opts.className
      });
      break;

    case 'text':
      props.nodeKey = key;
      props.children = node.value;
      break;

    case 'heading':
      props.level = node.depth;
      break;

    case 'list':
      props.start = node.start;
      props.ordered = node.ordered;
      props.tight = !node.loose;
      props.depth = node.depth;
      break;

    case 'listItem':
      props.checked = node.checked;
      props.tight = !node.loose;
      props.ordered = node.ordered;
      props.index = node.index;
      props.children = getListItemChildren(node, parent).map(function (childNode, i) {
        return astToReact(childNode, opts, {
          node: node,
          props: props
        }, i);
      });
      break;

    case 'definition':
      assignDefined(props, {
        identifier: node.identifier,
        title: node.title,
        url: node.url
      });
      break;

    case 'code':
      assignDefined(props, {
        language: node.lang && node.lang.split(/\s/, 1)[0]
      });
      break;

    case 'inlineCode':
      props.children = node.value;
      props.inline = true;
      break;

    case 'link':
      assignDefined(props, {
        title: node.title || undefined,
        target: typeof opts.linkTarget === 'function' ? opts.linkTarget(node.url, node.children, node.title) : opts.linkTarget,
        href: opts.transformLinkUri ? opts.transformLinkUri(node.url, node.children, node.title) : node.url
      });
      break;

    case 'image':
      assignDefined(props, {
        alt: node.alt || undefined,
        title: node.title || undefined,
        src: opts.transformImageUri ? opts.transformImageUri(node.url, node.children, node.title, node.alt) : node.url
      });
      break;

    case 'linkReference':
      assignDefined(props, xtend(ref, {
        href: opts.transformLinkUri ? opts.transformLinkUri(ref.href) : ref.href
      }));
      break;

    case 'imageReference':
      assignDefined(props, {
        src: opts.transformImageUri && ref.href ? opts.transformImageUri(ref.href, node.children, ref.title, node.alt) : ref.href,
        title: ref.title || undefined,
        alt: node.alt || undefined
      });
      break;

    case 'table':
    case 'tableHead':
    case 'tableBody':
      props.columnAlignment = node.align;
      break;

    case 'tableRow':
      props.isHeader = parent.node.type === 'tableHead';
      props.columnAlignment = parent.props.columnAlignment;
      break;

    case 'tableCell':
      assignDefined(props, {
        isHeader: parent.props.isHeader,
        align: parent.props.columnAlignment[index]
      });
      break;

    case 'virtualHtml':
      props.tag = node.tag;
      break;

    case 'html':
      // @todo find a better way than this
      props.isBlock = node.position.start.line !== node.position.end.line;
      props.escapeHtml = opts.escapeHtml;
      props.skipHtml = opts.skipHtml;
      break;

    case 'parsedHtml':
      {
        var parsedChildren;

        if (node.children) {
          parsedChildren = node.children.map(function (child, i) {
            return astToReact(child, opts, {
              node: node,
              props: props
            }, i);
          });
        }

        props.escapeHtml = opts.escapeHtml;
        props.skipHtml = opts.skipHtml;
        props.element = mergeNodeChildren(node, parsedChildren);
        break;
      }

    default:
      assignDefined(props, xtend(node, {
        type: undefined,
        position: undefined,
        children: undefined
      }));
  }

  if (!isTagRenderer && node.value) {
    props.value = node.value;
  }

  return props;
}

function assignDefined(target, attrs) {
  for (var key in attrs) {
    if (typeof attrs[key] !== 'undefined') {
      target[key] = attrs[key];
    }
  }
}

function mergeNodeChildren(node, parsedChildren) {
  var el = node.element;

  if (Array.isArray(el)) {
    var Fragment = React.Fragment || 'div';
    return React.createElement(Fragment, null, el);
  }

  if (el.props.children || parsedChildren) {
    var children = React.Children.toArray(el.props.children).concat(parsedChildren);
    return React.cloneElement(el, null, children);
  }

  return React.cloneElement(el, null);
}

function flattenPosition(pos) {
  return [pos.start.line, ':', pos.start.column, '-', pos.end.line, ':', pos.end.column].map(String).join('');
}

function getListItemChildren(node, parent) {
  if (node.loose) {
    return node.children;
  }

  if (parent.node && node.index > 0 && parent.node.children[node.index - 1].loose) {
    return node.children;
  }

  return unwrapParagraphs(node);
}

function unwrapParagraphs(node) {
  return node.children.reduce(function (array, child) {
    return array.concat(child.type === 'paragraph' ? child.children || [] : [child]);
  }, []);
}

module.exports = astToReact;

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/get-definitions.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/get-definitions.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function getDefinitions(node) {
  var defs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (node.children || []).reduce(function (definitions, child) {
    if (child.type === 'definition') {
      definitions[child.identifier] = {
        href: child.url,
        title: child.title
      };
    }

    return getDefinitions(child, definitions);
  }, defs);
};

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/plugins/disallow-node.js":
/*!**********************************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/plugins/disallow-node.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "../node_modules/unist-util-visit/index.js");

exports.ofType = function (types, mode) {
  return function (node) {
    types.forEach(function (type) {
      return visit(node, type, disallow, true);
    });
    return node;
  };

  function disallow(node, index, parent) {
    if (parent) {
      untangle(node, index, parent, mode);
    }
  }
};

exports.ifNotMatch = function (allowNode, mode) {
  return function (node) {
    visit(node, disallow, true);
    return node;
  };

  function disallow(node, index, parent) {
    if (parent && !allowNode(node, index, parent)) {
      untangle(node, index, parent, mode);
    }
  }
};

function untangle(node, index, parent, mode) {
  if (mode === 'remove') {
    parent.children.splice(index, 1);
  } else if (mode === 'unwrap') {
    var args = [index, 1];

    if (node.children) {
      args = args.concat(node.children);
    }

    Array.prototype.splice.apply(parent.children, args);
  }
}

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/plugins/naive-html.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/plugins/naive-html.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Naive, simple plugin to match inline nodes without attributes
 * This allows say <strong>foo</strong>, but not <strong class="very">foo</strong>
 * For proper HTML support, you'll want a different plugin
 **/
var visit = __webpack_require__(/*! unist-util-visit */ "../node_modules/unist-util-visit/index.js");

var type = 'virtualHtml';
var selfClosingRe = /^<(area|base|br|col|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)\s*\/?>$/i;
var simpleTagRe = /^<(\/?)([a-z]+)\s*>$/;

module.exports = function (tree) {
  var open;
  var currentParent;
  visit(tree, 'html', function (node, index, parent) {
    if (currentParent !== parent) {
      open = [];
      currentParent = parent;
    }

    var selfClosing = getSelfClosing(node);

    if (selfClosing) {
      parent.children.splice(index, 1, {
        type: type,
        tag: selfClosing,
        position: node.position
      });
      return true;
    }

    var current = getSimpleTag(node, parent);

    if (!current) {
      return true;
    }

    var matching = findAndPull(open, current.tag);

    if (matching) {
      parent.children.splice(index, 0, virtual(current, matching, parent));
    } else if (!current.opening) {
      open.push(current);
    }

    return true;
  }, true // Iterate in reverse
  );
  return tree;
};

function findAndPull(open, matchingTag) {
  var i = open.length;

  while (i--) {
    if (open[i].tag === matchingTag) {
      return open.splice(i, 1)[0];
    }
  }

  return false;
}

function getSimpleTag(node, parent) {
  var match = node.value.match(simpleTagRe);
  return match ? {
    tag: match[2],
    opening: !match[1],
    node: node
  } : false;
}

function getSelfClosing(node) {
  var match = node.value.match(selfClosingRe);
  return match ? match[1] : false;
}

function virtual(fromNode, toNode, parent) {
  var fromIndex = parent.children.indexOf(fromNode.node);
  var toIndex = parent.children.indexOf(toNode.node);
  var extracted = parent.children.splice(fromIndex, toIndex - fromIndex + 1);
  var children = extracted.slice(1, -1);
  return {
    type: type,
    children: children,
    tag: fromNode.tag,
    position: {
      start: fromNode.node.position.start,
      end: toNode.node.position.end,
      indent: []
    }
  };
}

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/react-markdown.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/react-markdown.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");

var unified = __webpack_require__(/*! unified */ "../node_modules/unified/index.js");

var parse = __webpack_require__(/*! remark-parse */ "../node_modules/remark-parse/index.js");

var PropTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var addListMetadata = __webpack_require__(/*! mdast-add-list-metadata */ "../node_modules/mdast-add-list-metadata/index.js");

var naiveHtml = __webpack_require__(/*! ./plugins/naive-html */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/plugins/naive-html.js");

var disallowNode = __webpack_require__(/*! ./plugins/disallow-node */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/plugins/disallow-node.js");

var astToReact = __webpack_require__(/*! ./ast-to-react */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/ast-to-react.js");

var wrapTableRows = __webpack_require__(/*! ./wrap-table-rows */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/wrap-table-rows.js");

var getDefinitions = __webpack_require__(/*! ./get-definitions */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/get-definitions.js");

var uriTransformer = __webpack_require__(/*! ./uri-transformer */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/uri-transformer.js");

var defaultRenderers = __webpack_require__(/*! ./renderers */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/renderers.js");

var symbols = __webpack_require__(/*! ./symbols */ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/symbols.js");

var allTypes = Object.keys(defaultRenderers);

var ReactMarkdown = function ReactMarkdown(props) {
  var src = props.source || props.children || '';
  var parserOptions = props.parserOptions;

  if (props.allowedTypes && props.disallowedTypes) {
    throw new Error('Only one of `allowedTypes` and `disallowedTypes` should be defined');
  }

  var renderers = xtend(defaultRenderers, props.renderers);
  var plugins = [[parse, parserOptions]].concat(props.plugins || []);
  var parser = plugins.reduce(applyParserPlugin, unified());
  var rawAst = parser.parse(src);
  var renderProps = xtend(props, {
    renderers: renderers,
    definitions: getDefinitions(rawAst)
  });
  var astPlugins = determineAstPlugins(props); // eslint-disable-next-line no-sync

  var transformedAst = parser.runSync(rawAst);
  var ast = astPlugins.reduce(function (node, plugin) {
    return plugin(node, renderProps);
  }, transformedAst);
  return astToReact(ast, renderProps);
};

function applyParserPlugin(parser, plugin) {
  return Array.isArray(plugin) ? parser.use.apply(parser, _toConsumableArray(plugin)) : parser.use(plugin);
}

function determineAstPlugins(props) {
  var plugins = [wrapTableRows, addListMetadata()];
  var disallowedTypes = props.disallowedTypes;

  if (props.allowedTypes) {
    disallowedTypes = allTypes.filter(function (type) {
      return type !== 'root' && props.allowedTypes.indexOf(type) === -1;
    });
  }

  var removalMethod = props.unwrapDisallowed ? 'unwrap' : 'remove';

  if (disallowedTypes && disallowedTypes.length > 0) {
    plugins.push(disallowNode.ofType(disallowedTypes, removalMethod));
  }

  if (props.allowNode) {
    plugins.push(disallowNode.ifNotMatch(props.allowNode, removalMethod));
  }

  var renderHtml = !props.escapeHtml && !props.skipHtml;
  var hasHtmlParser = (props.astPlugins || []).some(function (item) {
    var plugin = Array.isArray(item) ? item[0] : item;
    return plugin.identity === symbols.HtmlParser;
  });

  if (renderHtml && !hasHtmlParser) {
    plugins.push(naiveHtml);
  }

  return props.astPlugins ? plugins.concat(props.astPlugins) : plugins;
}

ReactMarkdown.defaultProps = {
  renderers: {},
  escapeHtml: true,
  skipHtml: false,
  sourcePos: false,
  rawSourcePos: false,
  transformLinkUri: uriTransformer,
  astPlugins: [],
  plugins: [],
  parserOptions: {}
};
ReactMarkdown.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  children: PropTypes.string,
  sourcePos: PropTypes.bool,
  rawSourcePos: PropTypes.bool,
  escapeHtml: PropTypes.bool,
  skipHtml: PropTypes.bool,
  allowNode: PropTypes.func,
  allowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  disallowedTypes: PropTypes.arrayOf(PropTypes.oneOf(allTypes)),
  transformLinkUri: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  linkTarget: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transformImageUri: PropTypes.func,
  astPlugins: PropTypes.arrayOf(PropTypes.func),
  unwrapDisallowed: PropTypes.bool,
  renderers: PropTypes.object,
  plugins: PropTypes.array,
  parserOptions: PropTypes.object
};
ReactMarkdown.types = allTypes;
ReactMarkdown.renderers = defaultRenderers;
ReactMarkdown.uriTransformer = uriTransformer;
module.exports = ReactMarkdown;

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/renderers.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/renderers.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable react/prop-types, react/no-multi-comp */


var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");

var React = __webpack_require__(/*! react */ "../node_modules/react/index.js");

var supportsStringRender = parseInt((React.version || '16').slice(0, 2), 10) >= 16;
var createElement = React.createElement;
module.exports = {
  break: 'br',
  paragraph: 'p',
  emphasis: 'em',
  strong: 'strong',
  thematicBreak: 'hr',
  blockquote: 'blockquote',
  delete: 'del',
  link: 'a',
  image: 'img',
  linkReference: 'a',
  imageReference: 'img',
  table: SimpleRenderer.bind(null, 'table'),
  tableHead: SimpleRenderer.bind(null, 'thead'),
  tableBody: SimpleRenderer.bind(null, 'tbody'),
  tableRow: SimpleRenderer.bind(null, 'tr'),
  tableCell: TableCell,
  root: Root,
  text: TextRenderer,
  list: List,
  listItem: ListItem,
  definition: NullRenderer,
  heading: Heading,
  inlineCode: InlineCode,
  code: CodeBlock,
  html: Html,
  virtualHtml: VirtualHtml,
  parsedHtml: ParsedHtml
};

function TextRenderer(props) {
  return supportsStringRender ? props.children : createElement('span', null, props.children);
}

function Root(props) {
  var useFragment = !props.className;
  var root = useFragment ? React.Fragment || 'div' : 'div';
  return createElement(root, useFragment ? null : props, props.children);
}

function SimpleRenderer(tag, props) {
  return createElement(tag, getCoreProps(props), props.children);
}

function TableCell(props) {
  var style = props.align ? {
    textAlign: props.align
  } : undefined;
  var coreProps = getCoreProps(props);
  return createElement(props.isHeader ? 'th' : 'td', style ? xtend({
    style: style
  }, coreProps) : coreProps, props.children);
}

function Heading(props) {
  return createElement("h".concat(props.level), getCoreProps(props), props.children);
}

function List(props) {
  var attrs = getCoreProps(props);

  if (props.start !== null && props.start !== 1 && props.start !== undefined) {
    attrs.start = props.start.toString();
  }

  return createElement(props.ordered ? 'ol' : 'ul', attrs, props.children);
}

function ListItem(props) {
  var checkbox = null;

  if (props.checked !== null && props.checked !== undefined) {
    var checked = props.checked;
    checkbox = createElement('input', {
      type: 'checkbox',
      checked: checked,
      readOnly: true
    });
  }

  return createElement('li', getCoreProps(props), checkbox, props.children);
}

function CodeBlock(props) {
  var className = props.language && "language-".concat(props.language);
  var code = createElement('code', className ? {
    className: className
  } : null, props.value);
  return createElement('pre', getCoreProps(props), code);
}

function InlineCode(props) {
  return createElement('code', getCoreProps(props), props.children);
}

function Html(props) {
  if (props.skipHtml) {
    return null;
  }

  var tag = props.isBlock ? 'div' : 'span';

  if (props.escapeHtml) {
    var comp = React.Fragment || tag;
    return createElement(comp, null, props.value);
  }

  var nodeProps = {
    dangerouslySetInnerHTML: {
      __html: props.value
    }
  };
  return createElement(tag, nodeProps);
}

function ParsedHtml(props) {
  return props['data-sourcepos'] ? React.cloneElement(props.element, {
    'data-sourcepos': props['data-sourcepos']
  }) : props.element;
}

function VirtualHtml(props) {
  return createElement(props.tag, getCoreProps(props), props.children);
}

function NullRenderer() {
  return null;
}

function getCoreProps(props) {
  return props['data-sourcepos'] ? {
    'data-sourcepos': props['data-sourcepos']
  } : {};
}

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/symbols.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/symbols.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HtmlParser = '__RMD_HTML_PARSER__';
exports.HtmlParser = typeof Symbol === 'undefined' ? HtmlParser : Symbol(HtmlParser);

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/uri-transformer.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/uri-transformer.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var protocols = ['http', 'https', 'mailto', 'tel'];

module.exports = function uriTransformer(uri) {
  var url = (uri || '').trim();
  var first = url.charAt(0);

  if (first === '#' || first === '/') {
    return url;
  }

  var colon = url.indexOf(':');

  if (colon === -1) {
    return url;
  }

  var length = protocols.length;
  var index = -1;

  while (++index < length) {
    var protocol = protocols[index];

    if (colon === protocol.length && url.slice(0, protocol.length).toLowerCase() === protocol) {
      return url;
    }
  }

  index = url.indexOf('?');

  if (index !== -1 && colon > index) {
    return url;
  }

  index = url.indexOf('#');

  if (index !== -1 && colon > index) {
    return url;
  } // eslint-disable-next-line no-script-url


  return 'javascript:void(0)';
};

/***/ }),

/***/ "../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/wrap-table-rows.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@u-wave/react-server-list/node_modules/react-markdown/lib/wrap-table-rows.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "../node_modules/unist-util-visit/index.js");

module.exports = function (node) {
  visit(node, 'table', wrap);
  return node;
};

function wrap(table) {
  var children = table.children;
  table.children = [{
    type: 'tableHead',
    align: table.align,
    children: [children[0]],
    position: children[0].position
  }];

  if (children.length > 1) {
    table.children.push({
      type: 'tableBody',
      align: table.align,
      children: children.slice(1),
      position: {
        start: children[1].position.start,
        end: children[children.length - 1].position.end
      }
    });
  }
}

/***/ }),

/***/ "../node_modules/bail/index.js":
/*!*************************************!*\
  !*** ../node_modules/bail/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = bail

function bail(err) {
  if (err) {
    throw err
  }
}


/***/ }),

/***/ "../node_modules/character-entities-legacy/index.json":
/*!************************************************************!*\
  !*** ../node_modules/character-entities-legacy/index.json ***!
  \************************************************************/
/*! exports provided: AElig, AMP, Aacute, Acirc, Agrave, Aring, Atilde, Auml, COPY, Ccedil, ETH, Eacute, Ecirc, Egrave, Euml, GT, Iacute, Icirc, Igrave, Iuml, LT, Ntilde, Oacute, Ocirc, Ograve, Oslash, Otilde, Ouml, QUOT, REG, THORN, Uacute, Ucirc, Ugrave, Uuml, Yacute, aacute, acirc, acute, aelig, agrave, amp, aring, atilde, auml, brvbar, ccedil, cedil, cent, copy, curren, deg, divide, eacute, ecirc, egrave, eth, euml, frac12, frac14, frac34, gt, iacute, icirc, iexcl, igrave, iquest, iuml, laquo, lt, macr, micro, middot, nbsp, not, ntilde, oacute, ocirc, ograve, ordf, ordm, oslash, otilde, ouml, para, plusmn, pound, quot, raquo, reg, sect, shy, sup1, sup2, sup3, szlig, thorn, times, uacute, ucirc, ugrave, uml, uuml, yacute, yen, yuml, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"AElig\":\"Æ\",\"AMP\":\"&\",\"Aacute\":\"Á\",\"Acirc\":\"Â\",\"Agrave\":\"À\",\"Aring\":\"Å\",\"Atilde\":\"Ã\",\"Auml\":\"Ä\",\"COPY\":\"©\",\"Ccedil\":\"Ç\",\"ETH\":\"Ð\",\"Eacute\":\"É\",\"Ecirc\":\"Ê\",\"Egrave\":\"È\",\"Euml\":\"Ë\",\"GT\":\">\",\"Iacute\":\"Í\",\"Icirc\":\"Î\",\"Igrave\":\"Ì\",\"Iuml\":\"Ï\",\"LT\":\"<\",\"Ntilde\":\"Ñ\",\"Oacute\":\"Ó\",\"Ocirc\":\"Ô\",\"Ograve\":\"Ò\",\"Oslash\":\"Ø\",\"Otilde\":\"Õ\",\"Ouml\":\"Ö\",\"QUOT\":\"\\\"\",\"REG\":\"®\",\"THORN\":\"Þ\",\"Uacute\":\"Ú\",\"Ucirc\":\"Û\",\"Ugrave\":\"Ù\",\"Uuml\":\"Ü\",\"Yacute\":\"Ý\",\"aacute\":\"á\",\"acirc\":\"â\",\"acute\":\"´\",\"aelig\":\"æ\",\"agrave\":\"à\",\"amp\":\"&\",\"aring\":\"å\",\"atilde\":\"ã\",\"auml\":\"ä\",\"brvbar\":\"¦\",\"ccedil\":\"ç\",\"cedil\":\"¸\",\"cent\":\"¢\",\"copy\":\"©\",\"curren\":\"¤\",\"deg\":\"°\",\"divide\":\"÷\",\"eacute\":\"é\",\"ecirc\":\"ê\",\"egrave\":\"è\",\"eth\":\"ð\",\"euml\":\"ë\",\"frac12\":\"½\",\"frac14\":\"¼\",\"frac34\":\"¾\",\"gt\":\">\",\"iacute\":\"í\",\"icirc\":\"î\",\"iexcl\":\"¡\",\"igrave\":\"ì\",\"iquest\":\"¿\",\"iuml\":\"ï\",\"laquo\":\"«\",\"lt\":\"<\",\"macr\":\"¯\",\"micro\":\"µ\",\"middot\":\"·\",\"nbsp\":\" \",\"not\":\"¬\",\"ntilde\":\"ñ\",\"oacute\":\"ó\",\"ocirc\":\"ô\",\"ograve\":\"ò\",\"ordf\":\"ª\",\"ordm\":\"º\",\"oslash\":\"ø\",\"otilde\":\"õ\",\"ouml\":\"ö\",\"para\":\"¶\",\"plusmn\":\"±\",\"pound\":\"£\",\"quot\":\"\\\"\",\"raquo\":\"»\",\"reg\":\"®\",\"sect\":\"§\",\"shy\":\"­\",\"sup1\":\"¹\",\"sup2\":\"²\",\"sup3\":\"³\",\"szlig\":\"ß\",\"thorn\":\"þ\",\"times\":\"×\",\"uacute\":\"ú\",\"ucirc\":\"û\",\"ugrave\":\"ù\",\"uml\":\"¨\",\"uuml\":\"ü\",\"yacute\":\"ý\",\"yen\":\"¥\",\"yuml\":\"ÿ\"}");

/***/ }),

/***/ "../node_modules/character-reference-invalid/index.json":
/*!**************************************************************!*\
  !*** ../node_modules/character-reference-invalid/index.json ***!
  \**************************************************************/
/*! exports provided: 0, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 158, 159, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":\"�\",\"128\":\"€\",\"130\":\"‚\",\"131\":\"ƒ\",\"132\":\"„\",\"133\":\"…\",\"134\":\"†\",\"135\":\"‡\",\"136\":\"ˆ\",\"137\":\"‰\",\"138\":\"Š\",\"139\":\"‹\",\"140\":\"Œ\",\"142\":\"Ž\",\"145\":\"‘\",\"146\":\"’\",\"147\":\"“\",\"148\":\"”\",\"149\":\"•\",\"150\":\"–\",\"151\":\"—\",\"152\":\"˜\",\"153\":\"™\",\"154\":\"š\",\"155\":\"›\",\"156\":\"œ\",\"158\":\"ž\",\"159\":\"Ÿ\"}");

/***/ }),

/***/ "../node_modules/collapse-white-space/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/collapse-white-space/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse

// `collapse(' \t\nbar \nbaz\t') // ' bar baz '`
function collapse(value) {
  return String(value).replace(/\s+/g, ' ')
}


/***/ }),

/***/ "../node_modules/event-source-polyfill/src/eventsource.js":
/*!****************************************************************!*\
  !*** ../node_modules/event-source-polyfill/src/eventsource.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */

/*jslint indent: 2, vars: true, plusplus: true */
/*global setTimeout, clearTimeout */

(function (global) {
  "use strict";

  var setTimeout = global.setTimeout;
  var clearTimeout = global.clearTimeout;
  var XMLHttpRequest = global.XMLHttpRequest;
  var XDomainRequest = global.XDomainRequest;
  var NativeEventSource = global.EventSource;
  var document = global.document;
  var Promise = global.Promise;
  var fetch = global.fetch;
  var Response = global.Response;
  var TextDecoder = global.TextDecoder;
  var TextEncoder = global.TextEncoder;

  if (Object.create == null) {
    Object.create = function (C) {
      function F(){}
      F.prototype = C;
      return new F();
    };
  }

  // ?
  if (Promise != undefined && Promise.prototype["finally"] == undefined) {
    Promise.prototype["finally"] = function (callback) {
      return this.then(function (result) {
        return Promise.resolve(callback()).then(function () {
          return result;
        });
      }, function (error) {
        return Promise.resolve(callback()).then(function () {
          throw error;
        });
      });
    };
  }

  function TextDecoderPolyfill() {
    this.bitsNeeded = 0;
    this.codePoint = 0;
  }

  TextDecoderPolyfill.prototype.decode = function (octets) {
    function valid(codePoint, shift, octetsCount) {
      if (octetsCount === 1) {
        return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07FF;
      }
      if (octetsCount === 2) {
        return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xD7FF || codePoint >= 0xE000 >> shift && codePoint << shift <= 0xFFFF;
      }
      if (octetsCount === 3) {
        return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10FFFF;
      }
      throw new Error();
    }
    function octetsCount(bitsNeeded, codePoint) {
      if (bitsNeeded === 6 * 1) {
        return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
      }
      if (bitsNeeded === 6 * 2) {
        return codePoint > 15 ? 3 : 2;
      }
      if (bitsNeeded === 6 * 3) {
        return 3;
      }
      throw new Error();
    }
    var REPLACER = 0xFFFD;
    var string = "";
    var bitsNeeded = this.bitsNeeded;
    var codePoint = this.codePoint;
    for (var i = 0; i < octets.length; i += 1) {
      var octet = octets[i];
      if (bitsNeeded !== 0) {
        if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
          bitsNeeded = 0;
          codePoint = REPLACER;
          string += String.fromCharCode(codePoint);
        }
      }
      if (bitsNeeded === 0) {
        if (octet >= 0 && octet <= 127) {
          bitsNeeded = 0;
          codePoint = octet;
        } else if (octet >= 192 && octet <= 223) {
          bitsNeeded = 6 * 1;
          codePoint = octet & 31;
        } else if (octet >= 224 && octet <= 239) {
          bitsNeeded = 6 * 2;
          codePoint = octet & 15;
        } else if (octet >= 240 && octet <= 247) {
          bitsNeeded = 6 * 3;
          codePoint = octet & 7;
        } else {
          bitsNeeded = 0;
          codePoint = REPLACER;
        }
        if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
          bitsNeeded = 0;
          codePoint = REPLACER;
        }
      } else {
        bitsNeeded -= 6;
        codePoint = codePoint << 6 | octet & 63;
      }
      if (bitsNeeded === 0) {
        if (codePoint <= 0xFFFF) {
          string += String.fromCharCode(codePoint);
        } else {
          string += String.fromCharCode(0xD800 + (codePoint - 0xFFFF - 1 >> 10));
          string += String.fromCharCode(0xDC00 + (codePoint - 0xFFFF - 1 & 0x3FF));
        }
      }
    }
    this.bitsNeeded = bitsNeeded;
    this.codePoint = codePoint;
    return string;
  };

  // Firefox < 38 throws an error with stream option
  var supportsStreamOption = function () {
    try {
      return new TextDecoder().decode(new TextEncoder().encode("test"), {stream: true}) === "test";
    } catch (error) {
      console.log(error);
    }
    return false;
  };

  // IE, Edge
  if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
    TextDecoder = TextDecoderPolyfill;
  }

  var k = function () {
  };

  function XHRWrapper(xhr) {
    this.withCredentials = false;
    this.responseType = "";
    this.readyState = 0;
    this.status = 0;
    this.statusText = "";
    this.responseText = "";
    this.onprogress = k;
    this.onreadystatechange = k;
    this._contentType = "";
    this._xhr = xhr;
    this._sendTimeout = 0;
    this._abort = k;
  }

  XHRWrapper.prototype.open = function (method, url) {
    this._abort(true);

    var that = this;
    var xhr = this._xhr;
    var state = 1;
    var timeout = 0;

    this._abort = function (silent) {
      if (that._sendTimeout !== 0) {
        clearTimeout(that._sendTimeout);
        that._sendTimeout = 0;
      }
      if (state === 1 || state === 2 || state === 3) {
        state = 4;
        xhr.onload = k;
        xhr.onerror = k;
        xhr.onabort = k;
        xhr.onprogress = k;
        xhr.onreadystatechange = k;
        // IE 8 - 9: XDomainRequest#abort() does not fire any event
        // Opera < 10: XMLHttpRequest#abort() does not fire any event
        xhr.abort();
        if (timeout !== 0) {
          clearTimeout(timeout);
          timeout = 0;
        }
        if (!silent) {
          that.readyState = 4;
          that.onreadystatechange();
        }
      }
      state = 0;
    };

    var onStart = function () {
      if (state === 1) {
        //state = 2;
        var status = 0;
        var statusText = "";
        var contentType = undefined;
        if (!("contentType" in xhr)) {
          try {
            status = xhr.status;
            statusText = xhr.statusText;
            contentType = xhr.getResponseHeader("Content-Type");
          } catch (error) {
            // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
            // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
            // https://bugs.webkit.org/show_bug.cgi?id=29121
            status = 0;
            statusText = "";
            contentType = undefined;
            // Firefox < 14, Chrome ?, Safari ?
            // https://bugs.webkit.org/show_bug.cgi?id=29658
            // https://bugs.webkit.org/show_bug.cgi?id=77854
          }
        } else {
          status = 200;
          statusText = "OK";
          contentType = xhr.contentType;
        }
        if (status !== 0) {
          state = 2;
          that.readyState = 2;
          that.status = status;
          that.statusText = statusText;
          that._contentType = contentType;
          that.onreadystatechange();
        }
      }
    };
    var onProgress = function () {
      onStart();
      if (state === 2 || state === 3) {
        state = 3;
        var responseText = "";
        try {
          responseText = xhr.responseText;
        } catch (error) {
          // IE 8 - 9 with XMLHttpRequest
        }
        that.readyState = 3;
        that.responseText = responseText;
        that.onprogress();
      }
    };
    var onFinish = function () {
      // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
      // IE 8 fires "onload" without "onprogress"
      onProgress();
      if (state === 1 || state === 2 || state === 3) {
        state = 4;
        if (timeout !== 0) {
          clearTimeout(timeout);
          timeout = 0;
        }
        that.readyState = 4;
        that.onreadystatechange();
      }
    };
    var onReadyStateChange = function () {
      if (xhr != undefined) { // Opera 12
        if (xhr.readyState === 4) {
          onFinish();
        } else if (xhr.readyState === 3) {
          onProgress();
        } else if (xhr.readyState === 2) {
          onStart();
        }
      }
    };
    var onTimeout = function () {
      timeout = setTimeout(function () {
        onTimeout();
      }, 500);
      if (xhr.readyState === 3) {
        onProgress();
      }
    };

    // XDomainRequest#abort removes onprogress, onerror, onload
    xhr.onload = onFinish;
    xhr.onerror = onFinish;
    // improper fix to match Firefox behaviour, but it is better than just ignore abort
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
    // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
    // https://code.google.com/p/chromium/issues/detail?id=153570
    // IE 8 fires "onload" without "onprogress
    xhr.onabort = onFinish;

    // https://bugzilla.mozilla.org/show_bug.cgi?id=736723    
    if (!("sendAsBinary" in XMLHttpRequest.prototype) && !("mozAnon" in XMLHttpRequest.prototype)) {
      xhr.onprogress = onProgress;
    }

    // IE 8 - 9 (XMLHTTPRequest)
    // Opera < 12
    // Firefox < 3.5
    // Firefox 3.5 - 3.6 - ? < 9.0
    // onprogress is not fired sometimes or delayed
    // see also #64
    xhr.onreadystatechange = onReadyStateChange;

    if ("contentType" in xhr) {
      url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
    }
    xhr.open(method, url, true);

    if ("readyState" in xhr) {
      // workaround for Opera 12 issue with "progress" events
      // #91
      timeout = setTimeout(function () {
        onTimeout();
      }, 0);
    }
  };
  XHRWrapper.prototype.abort = function () {
    this._abort(false);
  };
  XHRWrapper.prototype.getResponseHeader = function (name) {
    return this._contentType;
  };
  XHRWrapper.prototype.setRequestHeader = function (name, value) {
    var xhr = this._xhr;
    if ("setRequestHeader" in xhr) {
      xhr.setRequestHeader(name, value);
    }
  };
  XHRWrapper.prototype.getAllResponseHeaders = function () {
    return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : "";
  };
  XHRWrapper.prototype.send = function () {
    // loading indicator in Safari < ? (6), Chrome < 14, Firefox
    if (!("ontimeout" in XMLHttpRequest.prototype) &&
        document != undefined &&
        document.readyState != undefined &&
        document.readyState !== "complete") {
      var that = this;
      that._sendTimeout = setTimeout(function () {
        that._sendTimeout = 0;
        that.send();
      }, 4);
      return;
    }

    var xhr = this._xhr;
    // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
    xhr.withCredentials = this.withCredentials;
    xhr.responseType = this.responseType;
    try {
      // xhr.send(); throws "Not enough arguments" in Firefox 3.0
      xhr.send(undefined);
    } catch (error1) {
      // Safari 5.1.7, Opera 12
      throw error1;
    }
  };

  function toLowerCase(name) {
    return name.replace(/[A-Z]/g, function (c) {
      return String.fromCharCode(c.charCodeAt(0) + 0x20);
    });
  }

  function HeadersPolyfill(all) {
    // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
    var map = Object.create(null);
    var array = all.split("\r\n");
    for (var i = 0; i < array.length; i += 1) {
      var line = array[i];
      var parts = line.split(": ");
      var name = parts.shift();
      var value = parts.join(": ");
      map[toLowerCase(name)] = value;
    }
    this._map = map;
  }
  HeadersPolyfill.prototype.get = function (name) {
    return this._map[toLowerCase(name)];
  };

  function XHRTransport() {
  }

  XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
    xhr.open("GET", url);
    var offset = 0;
    xhr.onprogress = function () {
      var responseText = xhr.responseText;
      var chunk = responseText.slice(offset);
      offset += chunk.length;
      onProgressCallback(chunk);
    };
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 2) {
        var status = xhr.status;
        var statusText = xhr.statusText;
        var contentType = xhr.getResponseHeader("Content-Type");
        var headers = xhr.getAllResponseHeaders();
        onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
          xhr.abort();
        });
      } else if (xhr.readyState === 4) {
        onFinishCallback();
      }
    };
    xhr.withCredentials = withCredentials;
    xhr.responseType = "text";
    for (var name in headers) {
      if (Object.prototype.hasOwnProperty.call(headers, name)) {
        xhr.setRequestHeader(name, headers[name]);
      }
    }
    xhr.send();
  };
  
  function HeadersWrapper(headers) {
    this._headers = headers;
  }
  HeadersWrapper.prototype.get = function (name) {
    return this._headers.get(name);
  };

  function FetchTransport() {
  }

  FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
    // cache: "no-store"
    // https://bugs.chromium.org/p/chromium/issues/detail?id=453190
    var textDecoder = new TextDecoder();
    fetch(url, {
      headers: headers,
      credentials: withCredentials ? "include" : "same-origin"
    }).then(function (response) {
      var reader = response.body.getReader();
      onStartCallback(response.status, response.statusText, response.headers.get("Content-Type"), new HeadersWrapper(response.headers), function () {
        reader.cancel();
      });
      return new Promise(function (resolve, reject) {
        var readNextChunk = function () {
          reader.read().then(function (result) {
            if (result.done) {
              //Note: bytes in textDecoder are ignored
              resolve(undefined);
            } else {
              var chunk = textDecoder.decode(result.value, {stream: true});
              onProgressCallback(chunk);
              readNextChunk();
            }
          })["catch"](function (error) {
            reject(error);
          });
        };
        readNextChunk();
      });
    })["finally"](function () {
      onFinishCallback();
    });
  };

  function EventTarget() {
    this._listeners = Object.create(null);
  }

  function throwError(e) {
    setTimeout(function () {
      throw e;
    }, 0);
  }

  EventTarget.prototype.dispatchEvent = function (event) {
    event.target = this;
    var typeListeners = this._listeners[event.type];
    if (typeListeners != undefined) {
      var length = typeListeners.length;
      for (var i = 0; i < length; i += 1) {
        var listener = typeListeners[i];
        try {
          if (typeof listener.handleEvent === "function") {
            listener.handleEvent(event);
          } else {
            listener.call(this, event);
          }
        } catch (e) {
          throwError(e);
        }
      }
    }
  };
  EventTarget.prototype.addEventListener = function (type, listener) {
    type = String(type);
    var listeners = this._listeners;
    var typeListeners = listeners[type];
    if (typeListeners == undefined) {
      typeListeners = [];
      listeners[type] = typeListeners;
    }
    var found = false;
    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] === listener) {
        found = true;
      }
    }
    if (!found) {
      typeListeners.push(listener);
    }
  };
  EventTarget.prototype.removeEventListener = function (type, listener) {
    type = String(type);
    var listeners = this._listeners;
    var typeListeners = listeners[type];
    if (typeListeners != undefined) {
      var filtered = [];
      for (var i = 0; i < typeListeners.length; i += 1) {
        if (typeListeners[i] !== listener) {
          filtered.push(typeListeners[i]);
        }
      }
      if (filtered.length === 0) {
        delete listeners[type];
      } else {
        listeners[type] = filtered;
      }
    }
  };

  function Event(type) {
    this.type = type;
    this.target = undefined;
  }

  function MessageEvent(type, options) {
    Event.call(this, type);
    this.data = options.data;
    this.lastEventId = options.lastEventId;
  }

  MessageEvent.prototype = Object.create(Event.prototype);

  function ConnectionEvent(type, options) {
    Event.call(this, type);
    this.status = options.status;
    this.statusText = options.statusText;
    this.headers = options.headers;
  }

  ConnectionEvent.prototype = Object.create(Event.prototype);

  var WAITING = -1;
  var CONNECTING = 0;
  var OPEN = 1;
  var CLOSED = 2;

  var AFTER_CR = -1;
  var FIELD_START = 0;
  var FIELD = 1;
  var VALUE_START = 2;
  var VALUE = 3;

  var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;

  var MINIMUM_DURATION = 1000;
  var MAXIMUM_DURATION = 18000000;

  var parseDuration = function (value, def) {
    var n = parseInt(value, 10);
    if (n !== n) {
      n = def;
    }
    return clampDuration(n);
  };
  var clampDuration = function (n) {
    return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
  };

  var fire = function (that, f, event) {
    try {
      if (typeof f === "function") {
        f.call(that, event);
      }
    } catch (e) {
      throwError(e);
    }
  };

  function EventSourcePolyfill(url, options) {
    EventTarget.call(this);

    this.onopen = undefined;
    this.onmessage = undefined;
    this.onerror = undefined;

    this.url = undefined;
    this.readyState = undefined;
    this.withCredentials = undefined;

    this._close = undefined;

    start(this, url, options);
  }

  function getBestTransport() {
    return XMLHttpRequest && "withCredentials" in XMLHttpRequest.prototype
      ? XMLHttpRequest
      : XDomainRequest;
  }

  var isFetchSupported = fetch != undefined && Response != undefined && "body" in Response.prototype;

  function start(es, url, options) {
    url = String(url);
    var withCredentials = options != undefined && Boolean(options.withCredentials);

    var initialRetry = clampDuration(1000);
    var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);

    var lastEventId = "";
    var retry = initialRetry;
    var wasActivity = false;
    var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
    var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : getBestTransport();
    var xhr = isFetchSupported ? undefined : new XHRWrapper(new CurrentTransport());
    var transport = isFetchSupported ? new FetchTransport() : new XHRTransport();
    var cancelFunction = undefined;
    var timeout = 0;
    var currentState = WAITING;
    var dataBuffer = "";
    var lastEventIdBuffer = "";
    var eventTypeBuffer = "";

    var textBuffer = "";
    var state = FIELD_START;
    var fieldStart = 0;
    var valueStart = 0;

    var onStart = function (status, statusText, contentType, headers, cancel) {
      if (currentState === CONNECTING) {
        cancelFunction = cancel;
        if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
          currentState = OPEN;
          wasActivity = true;
          retry = initialRetry;
          es.readyState = OPEN;
          var event = new ConnectionEvent("open", {
            status: status,
            statusText: statusText,
            headers: headers
          });
          es.dispatchEvent(event);
          fire(es, es.onopen, event);
        } else {
          var message = "";
          if (status !== 200) {
            if (statusText) {
              statusText = statusText.replace(/\s+/g, " ");
            }
            message = "EventSource's response has a status " + status + " " + statusText + " that is not 200. Aborting the connection.";
          } else {
            message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? "-" : contentType.replace(/\s+/g, " ")) + ". Aborting the connection.";
          }
          throwError(new Error(message));
          close();
          var event = new ConnectionEvent("error", {
            status: status,
            statusText: statusText,
            headers: headers
          });
          es.dispatchEvent(event);
          fire(es, es.onerror, event);
        }
      }
    };

    var onProgress = function (textChunk) {
      if (currentState === OPEN) {
        var n = -1;
        for (var i = 0; i < textChunk.length; i += 1) {
          var c = textChunk.charCodeAt(i);
          if (c === "\n".charCodeAt(0) || c === "\r".charCodeAt(0)) {
            n = i;
          }
        }
        var chunk = (n !== -1 ? textBuffer : "") + textChunk.slice(0, n + 1);
        textBuffer = (n === -1 ? textBuffer : "") + textChunk.slice(n + 1);
        if (chunk !== "") {
          wasActivity = true;
        }
        for (var position = 0; position < chunk.length; position += 1) {
          var c = chunk.charCodeAt(position);
          if (state === AFTER_CR && c === "\n".charCodeAt(0)) {
            state = FIELD_START;
          } else {
            if (state === AFTER_CR) {
              state = FIELD_START;
            }
            if (c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0)) {
              if (state !== FIELD_START) {
                if (state === FIELD) {
                  valueStart = position + 1;
                }
                var field = chunk.slice(fieldStart, valueStart - 1);
                var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === " ".charCodeAt(0) ? 1 : 0), position);
                if (field === "data") {
                  dataBuffer += "\n";
                  dataBuffer += value;
                } else if (field === "id") {
                  lastEventIdBuffer = value;
                } else if (field === "event") {
                  eventTypeBuffer = value;
                } else if (field === "retry") {
                  initialRetry = parseDuration(value, initialRetry);
                  retry = initialRetry;
                } else if (field === "heartbeatTimeout") {
                  heartbeatTimeout = parseDuration(value, heartbeatTimeout);
                  if (timeout !== 0) {
                    clearTimeout(timeout);
                    timeout = setTimeout(function () {
                      onTimeout();
                    }, heartbeatTimeout);
                  }
                }
              }
              if (state === FIELD_START) {
                if (dataBuffer !== "") {
                  lastEventId = lastEventIdBuffer;
                  if (eventTypeBuffer === "") {
                    eventTypeBuffer = "message";
                  }
                  var event = new MessageEvent(eventTypeBuffer, {
                    data: dataBuffer.slice(1),
                    lastEventId: lastEventIdBuffer
                  });
                  es.dispatchEvent(event);
                  if (eventTypeBuffer === "message") {
                    fire(es, es.onmessage, event);
                  }
                  if (currentState === CLOSED) {
                    return;
                  }
                }
                dataBuffer = "";
                eventTypeBuffer = "";
              }
              state = c === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
            } else {
              if (state === FIELD_START) {
                fieldStart = position;
                state = FIELD;
              }
              if (state === FIELD) {
                if (c === ":".charCodeAt(0)) {
                  valueStart = position + 1;
                  state = VALUE_START;
                }
              } else if (state === VALUE_START) {
                state = VALUE;
              }
            }
          }
        }
      }
    };

    var onFinish = function () {
      if (currentState === OPEN || currentState === CONNECTING) {
        currentState = WAITING;
        if (timeout !== 0) {
          clearTimeout(timeout);
          timeout = 0;
        }
        timeout = setTimeout(function () {
          onTimeout();
        }, retry);
        retry = clampDuration(Math.min(initialRetry * 16, retry * 2));

        es.readyState = CONNECTING;
        var event = new Event("error");
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    };

    var close = function () {
      currentState = CLOSED;
      if (cancelFunction != undefined) {
        cancelFunction();
        cancelFunction = undefined;
      }
      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }
      es.readyState = CLOSED;
    };

    var onTimeout = function () {
      timeout = 0;

      if (currentState !== WAITING) {
        if (!wasActivity && cancelFunction != undefined) {
          throwError(new Error("No activity within " + heartbeatTimeout + " milliseconds. Reconnecting."));
          cancelFunction();
          cancelFunction = undefined;
        } else {
          wasActivity = false;
          timeout = setTimeout(function () {
            onTimeout();
          }, heartbeatTimeout);
        }
        return;
      }

      wasActivity = false;
      timeout = setTimeout(function () {
        onTimeout();
      }, heartbeatTimeout);

      currentState = CONNECTING;
      dataBuffer = "";
      eventTypeBuffer = "";
      lastEventIdBuffer = lastEventId;
      textBuffer = "";
      fieldStart = 0;
      valueStart = 0;
      state = FIELD_START;

      // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
      // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
      var requestURL = url;
      if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
        if (lastEventId !== "") {
          requestURL += (url.indexOf("?") === -1 ? "?" : "&") + "lastEventId=" + encodeURIComponent(lastEventId);
        }
      }
      var requestHeaders = {};
      requestHeaders["Accept"] = "text/event-stream";
      if (headers != undefined) {
        for (var name in headers) {
          if (Object.prototype.hasOwnProperty.call(headers, name)) {
            requestHeaders[name] = headers[name];
          }
        }
      }
      try {
        transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
      } catch (error) {
        close();
        throw error;
      }
    };

    es.url = url;
    es.readyState = CONNECTING;
    es.withCredentials = withCredentials;
    es._close = close;

    onTimeout();
  }

  EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
  EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
  EventSourcePolyfill.prototype.OPEN = OPEN;
  EventSourcePolyfill.prototype.CLOSED = CLOSED;
  EventSourcePolyfill.prototype.close = function () {
    this._close();
  };

  EventSourcePolyfill.CONNECTING = CONNECTING;
  EventSourcePolyfill.OPEN = OPEN;
  EventSourcePolyfill.CLOSED = CLOSED;
  EventSourcePolyfill.prototype.withCredentials = undefined;

  global.EventSourcePolyfill = EventSourcePolyfill;
  global.NativeEventSource = NativeEventSource;

  if (XMLHttpRequest != undefined && (NativeEventSource == undefined || !("withCredentials" in NativeEventSource.prototype))) {
    // Why replace a native EventSource ?
    // https://bugzilla.mozilla.org/show_bug.cgi?id=444328
    // https://bugzilla.mozilla.org/show_bug.cgi?id=831392
    // https://code.google.com/p/chromium/issues/detail?id=260144
    // https://code.google.com/p/chromium/issues/detail?id=225654
    // ...
    global.EventSource = EventSourcePolyfill;
  }

}(typeof window !== 'undefined' ? window : this));


/***/ }),

/***/ "../node_modules/extend/index.js":
/*!***************************************!*\
  !*** ../node_modules/extend/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var defineProperty = Object.defineProperty;
var gOPD = Object.getOwnPropertyDescriptor;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

// If name is '__proto__', and Object.defineProperty is available, define __proto__ as an own property on target
var setProperty = function setProperty(target, options) {
	if (defineProperty && options.name === '__proto__') {
		defineProperty(target, options.name, {
			enumerable: true,
			configurable: true,
			value: options.newValue,
			writable: true
		});
	} else {
		target[options.name] = options.newValue;
	}
};

// Return undefined instead of __proto__ if '__proto__' is not an own property
var getProperty = function getProperty(obj, name) {
	if (name === '__proto__') {
		if (!hasOwn.call(obj, name)) {
			return void 0;
		} else if (gOPD) {
			// In early versions of node, obj['__proto__'] is buggy when obj has
			// __proto__ as an own property. Object.getOwnPropertyDescriptor() works.
			return gOPD(obj, name).value;
		}
	}

	return obj[name];
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = getProperty(target, name);
				copy = getProperty(options, name);

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						setProperty(target, { name: name, newValue: extend(deep, clone, copy) });

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						setProperty(target, { name: name, newValue: copy });
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),

/***/ "../node_modules/inherits/inherits_browser.js":
/*!****************************************************!*\
  !*** ../node_modules/inherits/inherits_browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../node_modules/is-alphabetical/index.js":
/*!************************************************!*\
  !*** ../node_modules/is-alphabetical/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = alphabetical

// Check if the given character code, or the character code at the first
// character, is alphabetical.
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "../node_modules/is-alphanumerical/index.js":
/*!**************************************************!*\
  !*** ../node_modules/is-alphanumerical/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "../node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "../node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),

/***/ "../node_modules/is-buffer/index.js":
/*!******************************************!*\
  !*** ../node_modules/is-buffer/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "../node_modules/is-decimal/index.js":
/*!*******************************************!*\
  !*** ../node_modules/is-decimal/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = decimal

// Check if the given character code, or the character code at the first
// character, is decimal.
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "../node_modules/is-hexadecimal/index.js":
/*!***********************************************!*\
  !*** ../node_modules/is-hexadecimal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hexadecimal

// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "../node_modules/is-plain-obj/index.js":
/*!*********************************************!*\
  !*** ../node_modules/is-plain-obj/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),

/***/ "../node_modules/is-whitespace-character/index.js":
/*!********************************************************!*\
  !*** ../node_modules/is-whitespace-character/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = whitespace

var fromCode = String.fromCharCode
var re = /\s/

// Check if the given character code, or the character code at the first
// character, is a whitespace character.
function whitespace(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),

/***/ "../node_modules/is-word-character/index.js":
/*!**************************************************!*\
  !*** ../node_modules/is-word-character/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wordCharacter

var fromCode = String.fromCharCode
var re = /\w/

// Check if the given character code, or the character code at the first
// character, is a word character.
function wordCharacter(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  )
}


/***/ }),

/***/ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!****************************************************************!*\
  !*** ../node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "../node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "../node_modules/markdown-escapes/index.js":
/*!*************************************************!*\
  !*** ../node_modules/markdown-escapes/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = escapes

var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
]

var gfm = defaults.concat(['~', '|'])

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  "'",
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
])

escapes.default = defaults
escapes.gfm = gfm
escapes.commonmark = commonmark

// Get markdown escapes.
function escapes(options) {
  var settings = options || {}

  if (settings.commonmark) {
    return commonmark
  }

  return settings.gfm ? gfm : defaults
}


/***/ }),

/***/ "../node_modules/mdast-add-list-metadata/index.js":
/*!********************************************************!*\
  !*** ../node_modules/mdast-add-list-metadata/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var visitWithParents = __webpack_require__(/*! unist-util-visit-parents */ "../node_modules/unist-util-visit-parents/index.js");

function addListMetadata() {
  return function (ast) {
    visitWithParents(ast, 'list', function (listNode, parents) {
      var depth = 0, i, n;
      for (i = 0, n = parents.length; i < n; i++) {
        if (parents[i].type === 'list') depth += 1;
      }
      for (i = 0, n = listNode.children.length; i < n; i++) {
        var child = listNode.children[i];
        child.index = i;
        child.ordered = listNode.ordered;
      }
      listNode.depth = depth;
    });
    return ast;
  };
}

module.exports = addListMetadata;


/***/ }),

/***/ "../node_modules/parse-entities/decode-entity.browser.js":
/*!***************************************************************!*\
  !*** ../node_modules/parse-entities/decode-entity.browser.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "../node_modules/parse-entities/index.js":
/*!***********************************************!*\
  !*** ../node_modules/parse-entities/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "../node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__(/*! character-reference-invalid */ "../node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__(/*! is-decimal */ "../node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "../node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "../node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__(/*! ./decode-entity */ "../node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 //  '\f'
var space = 32 // ' '
var ampersand = 38 //  '&'
var semicolon = 59 //  ';'
var lessThan = 60 //  '<'
var equalsTo = 61 //  '='
var numberSign = 35 //  '#'
var uppercaseX = 88 //  'X'
var lowercaseX = 120 //  'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes, and any possible warnings.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "../node_modules/path-browserify/index.js":
/*!************************************************!*\
  !*** ../node_modules/path-browserify/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/remark-parse/index.js":
/*!*********************************************!*\
  !*** ../node_modules/remark-parse/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(/*! unherit */ "../node_modules/unherit/index.js");
var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");
var Parser = __webpack_require__(/*! ./lib/parser.js */ "../node_modules/remark-parse/lib/parser.js");

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/block-elements.json":
/*!************************************************************!*\
  !*** ../node_modules/remark-parse/lib/block-elements.json ***!
  \************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"address\",\"article\",\"aside\",\"base\",\"basefont\",\"blockquote\",\"body\",\"caption\",\"center\",\"col\",\"colgroup\",\"dd\",\"details\",\"dialog\",\"dir\",\"div\",\"dl\",\"dt\",\"fieldset\",\"figcaption\",\"figure\",\"footer\",\"form\",\"frame\",\"frameset\",\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"head\",\"header\",\"hgroup\",\"hr\",\"html\",\"iframe\",\"legend\",\"li\",\"link\",\"main\",\"menu\",\"menuitem\",\"meta\",\"nav\",\"noframes\",\"ol\",\"optgroup\",\"option\",\"p\",\"param\",\"pre\",\"section\",\"source\",\"title\",\"summary\",\"table\",\"tbody\",\"td\",\"tfoot\",\"th\",\"thead\",\"title\",\"tr\",\"track\",\"ul\"]");

/***/ }),

/***/ "../node_modules/remark-parse/lib/decode.js":
/*!**************************************************!*\
  !*** ../node_modules/remark-parse/lib/decode.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");
var entities = __webpack_require__(/*! parse-entities */ "../node_modules/parse-entities/index.js");

module.exports = factory;

/* Factory to create an entity decoder. */
function factory(ctx) {
  decoder.raw = decodeRaw;

  return decoder;

  /* Normalize `position` to add an `indent`. */
  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }

  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */
  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }

  /* Decode `value` (at `position`) into text-nodes. */
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }

  /* Decode `value` (at `position`) into a string. */
  function decodeRaw(value, position, options) {
    return entities(value, xtend(options, {
      position: normalize(position),
      warning: handleWarning
    }));
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/defaults.js":
/*!****************************************************!*\
  !*** ../node_modules/remark-parse/lib/defaults.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  position: true,
  gfm: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: __webpack_require__(/*! ./block-elements.json */ "../node_modules/remark-parse/lib/block-elements.json")
};


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/break.js":
/*!********************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/break.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/code-inline.js":
/*!**************************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/code-inline.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/delete.js":
/*!*********************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/delete.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/emphasis.js":
/*!***********************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/emphasis.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/escape.js":
/*!*********************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/escape.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/link.js":
/*!*******************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/link.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }

  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */
  return link < image ? link : image;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/strong.js":
/*!*********************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/strong.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/tag.js":
/*!******************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/tag.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/locate/url.js":
/*!******************************************************!*\
  !*** ../node_modules/remark-parse/lib/locate/url.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = locate;

var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/parse.js":
/*!*************************************************!*\
  !*** ../node_modules/remark-parse/lib/parse.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");
var removePosition = __webpack_require__(/*! unist-util-remove-position */ "../node_modules/unist-util-remove-position/index.js");

module.exports = parse;

var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;

/* Parse the bound file. */
function parse() {
  var self = this;
  var value = String(self.file);
  var start = {line: 1, column: 1, offset: 0};
  var content = xtend(start);
  var node;

  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */
  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);

    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/parser.js":
/*!**************************************************!*\
  !*** ../node_modules/remark-parse/lib/parser.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");
var toggle = __webpack_require__(/*! state-toggle */ "../node_modules/state-toggle/index.js");
var vfileLocation = __webpack_require__(/*! vfile-location */ "../node_modules/vfile-location/index.js");
var unescape = __webpack_require__(/*! ./unescape */ "../node_modules/remark-parse/lib/unescape.js");
var decode = __webpack_require__(/*! ./decode */ "../node_modules/remark-parse/lib/decode.js");
var tokenizer = __webpack_require__(/*! ./tokenizer */ "../node_modules/remark-parse/lib/tokenizer.js");

module.exports = Parser;

function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});

  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;

  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

var proto = Parser.prototype;

/* Expose core. */
proto.setOptions = __webpack_require__(/*! ./set-options */ "../node_modules/remark-parse/lib/set-options.js");
proto.parse = __webpack_require__(/*! ./parse */ "../node_modules/remark-parse/lib/parse.js");

/* Expose `defaults`. */
proto.options = __webpack_require__(/*! ./defaults */ "../node_modules/remark-parse/lib/defaults.js");

/* Enter and exit helpers. */
proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);

/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */
proto.interruptParagraph = [
  ['thematicBreak'],
  ['atxHeading'],
  ['fencedCode'],
  ['blockquote'],
  ['html'],
  ['setextHeading', {commonmark: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */
proto.interruptList = [
  ['atxHeading', {pedantic: false}],
  ['fencedCode', {pedantic: false}],
  ['thematicBreak', {pedantic: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */
proto.interruptBlockquote = [
  ['indentedCode', {commonmark: true}],
  ['fencedCode', {commonmark: true}],
  ['atxHeading', {commonmark: true}],
  ['setextHeading', {commonmark: true}],
  ['thematicBreak', {commonmark: true}],
  ['html', {commonmark: true}],
  ['list', {commonmark: true}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Handlers. */
proto.blockTokenizers = {
  newline: __webpack_require__(/*! ./tokenize/newline */ "../node_modules/remark-parse/lib/tokenize/newline.js"),
  indentedCode: __webpack_require__(/*! ./tokenize/code-indented */ "../node_modules/remark-parse/lib/tokenize/code-indented.js"),
  fencedCode: __webpack_require__(/*! ./tokenize/code-fenced */ "../node_modules/remark-parse/lib/tokenize/code-fenced.js"),
  blockquote: __webpack_require__(/*! ./tokenize/blockquote */ "../node_modules/remark-parse/lib/tokenize/blockquote.js"),
  atxHeading: __webpack_require__(/*! ./tokenize/heading-atx */ "../node_modules/remark-parse/lib/tokenize/heading-atx.js"),
  thematicBreak: __webpack_require__(/*! ./tokenize/thematic-break */ "../node_modules/remark-parse/lib/tokenize/thematic-break.js"),
  list: __webpack_require__(/*! ./tokenize/list */ "../node_modules/remark-parse/lib/tokenize/list.js"),
  setextHeading: __webpack_require__(/*! ./tokenize/heading-setext */ "../node_modules/remark-parse/lib/tokenize/heading-setext.js"),
  html: __webpack_require__(/*! ./tokenize/html-block */ "../node_modules/remark-parse/lib/tokenize/html-block.js"),
  footnote: __webpack_require__(/*! ./tokenize/footnote-definition */ "../node_modules/remark-parse/lib/tokenize/footnote-definition.js"),
  definition: __webpack_require__(/*! ./tokenize/definition */ "../node_modules/remark-parse/lib/tokenize/definition.js"),
  table: __webpack_require__(/*! ./tokenize/table */ "../node_modules/remark-parse/lib/tokenize/table.js"),
  paragraph: __webpack_require__(/*! ./tokenize/paragraph */ "../node_modules/remark-parse/lib/tokenize/paragraph.js")
};

proto.inlineTokenizers = {
  escape: __webpack_require__(/*! ./tokenize/escape */ "../node_modules/remark-parse/lib/tokenize/escape.js"),
  autoLink: __webpack_require__(/*! ./tokenize/auto-link */ "../node_modules/remark-parse/lib/tokenize/auto-link.js"),
  url: __webpack_require__(/*! ./tokenize/url */ "../node_modules/remark-parse/lib/tokenize/url.js"),
  html: __webpack_require__(/*! ./tokenize/html-inline */ "../node_modules/remark-parse/lib/tokenize/html-inline.js"),
  link: __webpack_require__(/*! ./tokenize/link */ "../node_modules/remark-parse/lib/tokenize/link.js"),
  reference: __webpack_require__(/*! ./tokenize/reference */ "../node_modules/remark-parse/lib/tokenize/reference.js"),
  strong: __webpack_require__(/*! ./tokenize/strong */ "../node_modules/remark-parse/lib/tokenize/strong.js"),
  emphasis: __webpack_require__(/*! ./tokenize/emphasis */ "../node_modules/remark-parse/lib/tokenize/emphasis.js"),
  deletion: __webpack_require__(/*! ./tokenize/delete */ "../node_modules/remark-parse/lib/tokenize/delete.js"),
  code: __webpack_require__(/*! ./tokenize/code-inline */ "../node_modules/remark-parse/lib/tokenize/code-inline.js"),
  break: __webpack_require__(/*! ./tokenize/break */ "../node_modules/remark-parse/lib/tokenize/break.js"),
  text: __webpack_require__(/*! ./tokenize/text */ "../node_modules/remark-parse/lib/tokenize/text.js")
};

/* Expose precedence. */
proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);

/* Tokenizers. */
proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;

/* Get all keys in `value`. */
function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/set-options.js":
/*!*******************************************************!*\
  !*** ../node_modules/remark-parse/lib/set-options.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js");
var escapes = __webpack_require__(/*! markdown-escapes */ "../node_modules/markdown-escapes/index.js");
var defaults = __webpack_require__(/*! ./defaults */ "../node_modules/remark-parse/lib/defaults.js");

module.exports = setOptions;

function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (typeof options === 'object') {
    options = xtend(options);
  } else {
    throw new Error(
      'Invalid value `' + options + '` ' +
      'for setting `options`'
    );
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (
      (key !== 'blocks' && typeof value !== 'boolean') ||
      (key === 'blocks' && typeof value !== 'object')
    ) {
      throw new Error('Invalid value `' + value + '` for setting `options.' + key + '`');
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);

  return self;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/auto-link.js":
/*!**************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/auto-link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var decode = __webpack_require__(/*! parse-entities */ "../node_modules/parse-entities/index.js");
var locate = __webpack_require__(/*! ../locate/tag */ "../node_modules/remark-parse/lib/locate/tag.js");

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;

var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;

/* Tokenise a link. */
function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenizers;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';

  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (
      whitespace(character) ||
      character === C_GT ||
      character === C_AT_SIGN ||
      (character === ':' && value.charAt(index + 1) === C_SLASH)
    ) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';

  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (
      character !== ':' ||
      value.charAt(index + 1) !== C_SLASH
    ) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }

  /* Temporarily remove all tokenizers except text in autolinks. */
  tokenizers = self.inlineTokenizers;
  self.inlineTokenizers = {text: tokenizers.text};

  exit = self.enterLink();

  content = self.tokenizeInline(content, now);

  self.inlineTokenizers = tokenizers;
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link, {nonTerminated: false}),
    children: content
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/blockquote.js":
/*!***************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/blockquote.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../node_modules/trim/index.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../node_modules/remark-parse/lib/util/interrupt.js");

module.exports = blockquote;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';

/* Tokenise a blockquote. */
function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);

      /* Check if the following code contains a possible
       * block. */
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);

    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);

    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();

  return add({
    type: 'blockquote',
    children: contents
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/break.js":
/*!**********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/break.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/break */ "../node_modules/remark-parse/lib/locate/break.js");

module.exports = hardBreak;
hardBreak.locator = locate;

var MIN_BREAK_LENGTH = 2;

function hardBreak(eat, value, silent) {
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (index < MIN_BREAK_LENGTH) {
        return;
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      queue += character;

      return eat(queue)({type: 'break'});
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/code-fenced.js":
/*!****************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/code-fenced.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim-trailing-lines */ "../node_modules/trim-trailing-lines/index.js");

module.exports = fencedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';

var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;

  /* Eat the fence. */
  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }

  /* Eat spacing before flag. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat flag. */
  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character === C_NEWLINE ||
      character === C_TILDE ||
      character === C_TICK
    ) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;

  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';

  /* Eat content. */
  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }

    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */
    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;

  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/code-indented.js":
/*!******************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/code-indented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "../node_modules/repeat-string/index.js");
var trim = __webpack_require__(/*! trim-trailing-lines */ "../node_modules/trim-trailing-lines/index.js");

module.exports = indentedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);

/* Tokenise indented code. */
function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;

      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (
      character === C_SPACE &&
      value.charAt(index + 1) === character &&
      value.charAt(index + 2) === character &&
      value.charAt(index + 3) === character
    ) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/code-inline.js":
/*!****************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/code-inline.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/code-inline */ "../node_modules/remark-parse/lib/locate/code-inline.js");

module.exports = inlineCode;
inlineCode.locator = locate;

var C_TICK = '`';

/* Tokenise inline code. */
function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/definition.js":
/*!***************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/definition.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "../node_modules/remark-parse/lib/util/normalize.js");

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;

var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL, {nonTerminated: false});

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}

/* Check if `character` can be inside an enclosed URI. */
function isEnclosedURLCharacter(character) {
  return character !== C_GT &&
    character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;

/* Check if `character` can be inside an unclosed URI. */
function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE &&
    !whitespace(character);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/delete.js":
/*!***********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/delete.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/delete */ "../node_modules/remark-parse/lib/locate/delete.js");

module.exports = strikethrough;
strikethrough.locator = locate;

var C_TILDE = '~';
var DOUBLE = '~~';

function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (
    !self.options.gfm ||
    value.charAt(0) !== C_TILDE ||
    value.charAt(1) !== C_TILDE ||
    whitespace(value.charAt(2))
  ) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (
      character === C_TILDE &&
      previous === C_TILDE &&
      (!preceding || !whitespace(preceding))
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/emphasis.js":
/*!*************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/emphasis.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../node_modules/trim/index.js");
var word = __webpack_require__(/*! is-word-character */ "../node_modules/is-word-character/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/emphasis */ "../node_modules/remark-parse/lib/locate/emphasis.js");

module.exports = emphasis;
emphasis.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/escape.js":
/*!***********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/escape.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var locate = __webpack_require__(/*! ../locate/escape */ "../node_modules/remark-parse/lib/locate/escape.js");

module.exports = escape;
escape.locator = locate;

function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = {type: 'break'};
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/footnote-definition.js":
/*!************************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/footnote-definition.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "../node_modules/remark-parse/lib/util/normalize.js");

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;

var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';

var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (
    value.charAt(index) !== C_BRACKET_OPEN ||
    value.charAt(index + 1) !== C_CARET
  ) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;

  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;

    return '';
  });

  add = eat(subvalue);

  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();

  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/heading-atx.js":
/*!****************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/heading-atx.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = atxHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';

var MAX_ATX_COUNT = 6;

function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;

  /* Eat initial spacing. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat hashes. */
  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (
    !depth ||
    (!settings.pedantic && value.charAt(index + 1) === C_HASH)
  ) {
    return;
  }

  length = value.length + 1;

  /* Eat intermediate white-space. */
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }

  /* Exit when not in pedantic mode without spacing. */
  if (
    !settings.pedantic &&
    queue.length === 0 &&
    character &&
    character !== C_NEWLINE
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  /* Eat content. */
  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (
      character !== C_SPACE &&
      character !== C_TAB &&
      character !== C_HASH
    ) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/heading-setext.js":
/*!*******************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/heading-setext.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = setextHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';

var MAX_HEADING_INDENT = 3;

/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */
var SETEXT_MARKERS = {};

SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;

  /* Eat initial indentation. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat content. */
  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  /* Ensure the content is followed by a newline and a
   * valid marker. */
  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;

  /* Eat Setext-line. */
  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/html-block.js":
/*!***************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/html-block.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var openCloseTag = __webpack_require__(/*! ../util/html */ "../node_modules/remark-parse/lib/util/html.js").openCloseTag;

module.exports = blockHTML;

var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;

  var sequences = [
    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
    [/^<!--/, /-->/, true],
    [/^<\?/, /\?>/, true],
    [/^<![A-Za-z]/, />/, true],
    [/^<!\[CDATA\[/, /\]\]>/, true],
    [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
    [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
  ];

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/html-inline.js":
/*!****************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/html-inline.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "../node_modules/is-alphabetical/index.js");
var locate = __webpack_require__(/*! ../locate/tag */ "../node_modules/remark-parse/lib/locate/tag.js");
var tag = __webpack_require__(/*! ../util/html */ "../node_modules/remark-parse/lib/util/html.js").tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;

var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (
    !alphabetical(character) &&
    character !== '?' &&
    character !== '!' &&
    character !== '/'
  ) {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/link.js":
/*!*********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/link.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/link */ "../node_modules/remark-parse/lib/locate/link.js");

module.exports = link;
link.locator = locate;

var own = {}.hasOwnProperty;

var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';

/* Map of characters, which can be used to mark link
 * and image titles. */
var LINK_MARKERS = {};

LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;

/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */
var COMMONMARK_LINK_MARKERS = {};

COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var pedantic = self.options.pedantic;
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;

  /* Detect whether this is an image. */
  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }

  /* Eat the opening. */
  if (character !== C_BRACKET_OPEN) {
    return;
  }

  /* Exit when this is a link and we’re already inside
   * a link. */
  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;

  /* Eat the content. */
  length = value.length;
  now = eat.now();
  depth = 0;

  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
    /* In GFM mode, brackets in code still count.
     * In all other modes, they don’t.  This empty
     * block prevents the next statements are
     * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (!pedantic) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;

        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }

  /* Eat the content closing. */
  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;

  /* Eat white-space. */
  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat the URL. */
  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && own.call(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (!pedantic) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }

  /* Eat white-space. */
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;

  /* Eat the title. */
  if (queue && own.call(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;

    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end, {nonTerminated: false});

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/list.js":
/*!*********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/list.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint-disable max-params */

var trim = __webpack_require__(/*! trim */ "../node_modules/trim/index.js");
var repeat = __webpack_require__(/*! repeat-string */ "../node_modules/repeat-string/index.js");
var decimal = __webpack_require__(/*! is-decimal */ "../node_modules/is-decimal/index.js");
var getIndent = __webpack_require__(/*! ../util/get-indentation */ "../node_modules/remark-parse/lib/util/get-indentation.js");
var removeIndent = __webpack_require__(/*! ../util/remove-indentation */ "../node_modules/remark-parse/lib/util/remove-indentation.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../node_modules/remark-parse/lib/util/interrupt.js");

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - (size % TAB_SIZE);
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);

  markers = commonmark ?
    LIST_ORDERED_COMMONMARK_MARKERS :
    LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - (size % TAB_SIZE);
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - (size % TAB_SIZE);
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (
      currentMarker === C_ASTERISK ||
      currentMarker === C_UNDERSCORE ||
      currentMarker === C_DASH
    ) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };

      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });

  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();

    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();

  node.loose = isLoose;

  return node;
}

function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;

  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
      value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

  /* The initial line was also matched by the below, so
   * we reset the `line`. */
  line = position.line;

  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;

    return '';
  }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_BULLET, replacer);

  lines = value.split(C_NEWLINE);

  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */
  trimmedLines[0] = rest;

  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;

  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) +
      lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;

    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;

    return max + rest;
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/newline.js":
/*!************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/newline.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");

module.exports = newline;

/* Tokenise newline. */
function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/paragraph.js":
/*!**************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/paragraph.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../node_modules/trim/index.js");
var decimal = __webpack_require__(/*! is-decimal */ "../node_modules/is-decimal/index.js");
var trimTrailingLines = __webpack_require__(/*! trim-trailing-lines */ "../node_modules/trim-trailing-lines/index.js");
var interrupt = __webpack_require__(/*! ../util/interrupt */ "../node_modules/remark-parse/lib/util/interrupt.js");

module.exports = paragraph;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var TAB_SIZE = 4;

/* Tokenise paragraph. */
function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }

    /* Stop if the next character is NEWLINE. */
    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }

    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */
    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);

    /* Check if the following code contains a possible
     * block. */
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }

    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */
    if (
      tokenizers.list.call(self, eat, subvalue, true) &&
      (
        self.inList ||
        commonmark ||
        (gfm && !decimal(trim.left(subvalue).charAt(0)))
      )
    ) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);

    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/reference.js":
/*!**************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/reference.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/link */ "../node_modules/remark-parse/lib/locate/link.js");
var normalize = __webpack_require__(/*! ../util/normalize */ "../node_modules/remark-parse/lib/util/normalize.js");

module.exports = reference;
reference.locator = locate;

var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;

  /* Check whether we’re eating an image. */
  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';

  /* Check whether we’re eating a footnote. */
  if (self.options.footnotes && value.charAt(index) === C_CARET) {
    /* Exit if `![^` is found, so the `!` will be seen as text after this,
     * and we’ll enter this function again when `[^` is found. */
    if (type === T_IMAGE) {
      return;
    }

    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }

  /* Eat the text. */
  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  /* Inline footnotes cannot have an identifier. */
  if (type !== T_FOOTNOTE && character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }

  /* Brackets cannot be inside the identifier. */
  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/strong.js":
/*!***********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/strong.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../node_modules/trim/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/strong */ "../node_modules/remark-parse/lib/locate/strong.js");

module.exports = strong;
strong.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (
    (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
    value.charAt(++index) !== character
  ) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (
      character === marker &&
      value.charAt(index + 1) === marker &&
      (!pedantic || !whitespace(prev))
    ) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/table.js":
/*!**********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/table.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");

module.exports = table;

var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;

var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;

  /* Exit when not in gfm-mode. */
  if (!self.options.gfm) {
    return;
  }

  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */
  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }

  /* Parse the alignment row. */
  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }

  /* Exit when without enough columns. */
  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  /* Parse the rows. */
  position = -1;
  rows = [];

  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = {type: 'tableRow', children: []};

    /* Eat a newline character when this is not the
     * first row. */
    if (position) {
      eat(C_NEWLINE);
    }

    /* Eat the row. */
    eat(line).reset(row, table);

    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();

            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);

          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }

    /* Eat the alignment row. */
    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/text.js":
/*!*********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/text.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text;

function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();

  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/thematic-break.js":
/*!*******************************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/thematic-break.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';

var THEMATIC_BREAK_MARKER_COUNT = 3;

function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (
    character !== C_ASTERISK &&
    character !== C_DASH &&
    character !== C_UNDERSCORE
  ) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (
      markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
      (!character || character === C_NEWLINE)
    ) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({type: 'thematicBreak'});
    } else {
      return;
    }
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenize/url.js":
/*!********************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenize/url.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var decode = __webpack_require__(/*! parse-entities */ "../node_modules/parse-entities/index.js");
var whitespace = __webpack_require__(/*! is-whitespace-character */ "../node_modules/is-whitespace-character/index.js");
var locate = __webpack_require__(/*! ../locate/url */ "../node_modules/remark-parse/lib/locate/url.js");

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';

var PROTOCOLS = [
  HTTP_PROTOCOL,
  HTTPS_PROTOCOL,
  MAILTO_PROTOCOL
];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (
      character === '.' ||
      character === ',' ||
      character === ':' ||
      character === ';' ||
      character === '"' ||
      character === '\'' ||
      character === ')' ||
      character === ']'
    ) {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue, {nonTerminated: false}),
    children: content
  });
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/tokenizer.js":
/*!*****************************************************!*\
  !*** ../node_modules/remark-parse/lib/tokenizer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};

/* Check whether a node is mergeable with adjacent nodes. */
function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;

  /* Only merge nodes which occupy the same size as their
   * `value`. */
  return start.line !== end.line ||
      end.column - start.column === node.value.length;
}

/* Merge two text nodes: `node` into `prev`. */
function mergeText(prev, node) {
  prev.value += node.value;

  return prev;
}

/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */
function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);

  return prev;
}

/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */
function factory(type) {
  return tokenize;

  /* Tokenizer for a bound `type`. */
  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;

    /* Trim white space only lines. */
    if (!value) {
      return tokens;
    }

    /* Expose on `eat`. */
    eat.now = now;
    eat.file = self.file;

    /* Sync initial offset. */
    updatePosition('');

    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */
    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (
          method &&
          /* istanbul ignore next */ (!method.onlyAtStart || self.atStart) &&
          (!method.notInList || !self.inList) &&
          (!method.notInBlock || !self.inBlock) &&
          (!method.notInLink || !self.inLink)
        ) {
          valueLength = value.length;

          method.apply(self, [eat, value]);

          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();

    return tokens;

    /* Update line, column, and offset based on
     * `value`. */
    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }

    /* Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets. */
    function getOffset() {
      var indentation = [];
      var pos = line + 1;

      /* Done.  Called when the last character is
       * eaten to retrieve the range’s offsets. */
      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);

          pos++;
        }

        return indentation;
      };
    }

    /* Get the current position. */
    function now() {
      var pos = {line: line, column: column};

      pos.offset = self.toOffset(pos);

      return pos;
    }

    /* Store position information for a node. */
    function Position(start) {
      this.start = start;
      this.end = now();
    }

    /* Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules. */
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(
          new Error(
            'Incorrectly eaten value: please report this ' +
            'warning on http://git.io/vg5Ft'
          ),
          now()
        );
      }
    }

    /* Mark position and patch `node.position`. */
    function position() {
      var before = now();

      return update;

      /* Add the position to a node. */
      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;

        node.position = new Position(start);

        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */
        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];

        return node;
      }
    }

    /* Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible. */
    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (
        prev &&
        node.type === prev.type &&
        node.type in MERGEABLE_NODES &&
        mergeable(prev) &&
        mergeable(node)
      ) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }

    /* Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`. */
    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();

      validateEat(subvalue);

      apply.reset = reset;
      reset.test = test;
      apply.test = test;

      value = value.substring(subvalue.length);

      updatePosition(subvalue);

      indent = indent();

      return apply;

      /* Add the given arguments, add `position` to
       * the returned node, and return the node. */
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }

      /* Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       * See `apply` above for what parameters are
       * expected. */
      function reset() {
        var node = apply.apply(null, arguments);

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return node;
      }

      /* Test the position, after eating, and reverse
       * to a not-eaten state. */
      function test() {
        var result = pos({});

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return result.position;
      }
    }
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/unescape.js":
/*!****************************************************!*\
  !*** ../node_modules/remark-parse/lib/unescape.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory;

/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */
function factory(ctx, key) {
  return unescape;

  /* De-escape a string using the expression at `key`
   * in `ctx`. */
  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);

      /* If the following character is not a valid escape,
       * add the slash. */
      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));

    return queue.join('');
  }
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/util/get-indentation.js":
/*!****************************************************************!*\
  !*** ../node_modules/remark-parse/lib/util/get-indentation.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = indentation;

/* Map of characters, and their column length,
 * which can be used as indentation. */
var characters = {' ': 1, '\t': 4};

/* Gets indentation information for a line. */
function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];

    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;

    character = value.charAt(++index);
  }

  return {indent: indent, stops: stops};
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/util/html.js":
/*!*****************************************************!*\
  !*** ../node_modules/remark-parse/lib/util/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');

exports.tag = new RegExp('^(?:' +
  openTag + '|' +
  closeTag + '|' +
  comment + '|' +
  processing + '|' +
  declaration + '|' +
  cdata +
')');


/***/ }),

/***/ "../node_modules/remark-parse/lib/util/interrupt.js":
/*!**********************************************************!*\
  !*** ../node_modules/remark-parse/lib/util/interrupt.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/util/normalize.js":
/*!**********************************************************!*\
  !*** ../node_modules/remark-parse/lib/util/normalize.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var collapseWhiteSpace = __webpack_require__(/*! collapse-white-space */ "../node_modules/collapse-white-space/index.js");

module.exports = normalize;

/* Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing. */
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}


/***/ }),

/***/ "../node_modules/remark-parse/lib/util/remove-indentation.js":
/*!*******************************************************************!*\
  !*** ../node_modules/remark-parse/lib/util/remove-indentation.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var trim = __webpack_require__(/*! trim */ "../node_modules/trim/index.js");
var repeat = __webpack_require__(/*! repeat-string */ "../node_modules/repeat-string/index.js");
var getIndent = __webpack_require__(/*! ./get-indentation */ "../node_modules/remark-parse/lib/util/get-indentation.js");

module.exports = indentation;

var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

/* Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible). */
function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;

  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);

    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;

      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (
        trim(values[position]).length !== 0 &&
        minIndent &&
        index !== minIndent
      ) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(
        index in stops ? stops[index] + 1 : 0
      );
    }
  }

  values.shift();

  return values.join(C_NEWLINE);
}


/***/ }),

/***/ "../node_modules/repeat-string/index.js":
/*!**********************************************!*\
  !*** ../node_modules/repeat-string/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ "../node_modules/replace-ext/index.js":
/*!********************************************!*\
  !*** ../node_modules/replace-ext/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(/*! path */ "../node_modules/path-browserify/index.js");

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;


/***/ }),

/***/ "../node_modules/state-toggle/index.js":
/*!*********************************************!*\
  !*** ../node_modules/state-toggle/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

// Construct a state `toggler`: a function which inverses `property` in context
// based on its current value.
// The by `toggler` returned function restores that value.
function factory(key, state, ctx) {
  return enter

  function enter() {
    var context = ctx || this
    var current = context[key]

    context[key] = !state

    return exit

    function exit() {
      context[key] = current
    }
  }
}


/***/ }),

/***/ "../node_modules/strip-indent/index.js":
/*!*********************************************!*\
  !*** ../node_modules/strip-indent/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => {
	const match = str.match(/^[ \t]*(?=\S)/gm);

	if (!match) {
		return str;
	}

	// TODO: use spread operator when targeting Node.js 6
	const indent = Math.min.apply(Math, match.map(x => x.length)); // eslint-disable-line
	const re = new RegExp(`^[ \\t]{${indent}}`, 'gm');

	return indent > 0 ? str.replace(re, '') : str;
};


/***/ }),

/***/ "../node_modules/trim-trailing-lines/index.js":
/*!****************************************************!*\
  !*** ../node_modules/trim-trailing-lines/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines

// Remove final newline characters from `value`.
function trimTrailingLines(value) {
  return String(value).replace(/\n+$/, '')
}


/***/ }),

/***/ "../node_modules/trim/index.js":
/*!*************************************!*\
  !*** ../node_modules/trim/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),

/***/ "../node_modules/trough/index.js":
/*!***************************************!*\
  !*** ../node_modules/trough/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var wrap = __webpack_require__(/*! ./wrap.js */ "../node_modules/trough/wrap.js")

module.exports = trough

trough.wrap = wrap

var slice = [].slice

// Create new middleware.
function trough() {
  var fns = []
  var middleware = {}

  middleware.run = run
  middleware.use = use

  return middleware

  // Run `fns`.  Last argument must be a completion handler.
  function run() {
    var index = -1
    var input = slice.call(arguments, 0, -1)
    var done = arguments[arguments.length - 1]

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done)
    }

    next.apply(null, [null].concat(input))

    // Run the next `fn`, if any.
    function next(err) {
      var fn = fns[++index]
      var params = slice.call(arguments, 0)
      var values = params.slice(1)
      var length = input.length
      var pos = -1

      if (err) {
        done(err)
        return
      }

      // Copy non-nully input into values.
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos]
        }
      }

      input = values

      // Next or done.
      if (fn) {
        wrap(fn, next).apply(null, input)
      } else {
        done.apply(null, [null].concat(input))
      }
    }
  }

  // Add `fn` to the list.
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn)
    }

    fns.push(fn)

    return middleware
  }
}


/***/ }),

/***/ "../node_modules/trough/wrap.js":
/*!**************************************!*\
  !*** ../node_modules/trough/wrap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = [].slice

module.exports = wrap

// Wrap `fn`.
// Can be sync or async; return a promise, receive a completion handler, return
// new values and errors.
function wrap(fn, callback) {
  var invoked

  return wrapped

  function wrapped() {
    var params = slice.call(arguments, 0)
    var callback = fn.length > params.length
    var result

    if (callback) {
      params.push(done)
    }

    try {
      result = fn.apply(null, params)
    } catch (error) {
      // Well, this is quite the pickle.
      // `fn` received a callback and invoked it (thus continuing the pipeline),
      // but later also threw an error.
      // We’re not about to restart the pipeline again, so the only thing left
      // to do is to throw the thing instead.
      if (callback && invoked) {
        throw error
      }

      return done(error)
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done)
      } else if (result instanceof Error) {
        done(result)
      } else {
        then(result)
      }
    }
  }

  // Invoke `next`, only once.
  function done() {
    if (!invoked) {
      invoked = true

      callback.apply(null, arguments)
    }
  }

  // Invoke `done` with one value.
  // Tracks if an error is passed, too.
  function then(value) {
    done(null, value)
  }
}


/***/ }),

/***/ "../node_modules/unherit/index.js":
/*!****************************************!*\
  !*** ../node_modules/unherit/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "../node_modules/xtend/immutable.js")
var inherits = __webpack_require__(/*! inherits */ "../node_modules/inherits/inherits_browser.js")

module.exports = unherit

// Create a custom constructor which can be modified without affecting the
// original class.
function unherit(Super) {
  var result
  var key
  var value

  inherits(Of, Super)
  inherits(From, Of)

  // Clone values.
  result = Of.prototype

  for (key in result) {
    value = result[key]

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value)
    }
  }

  return Of

  // Constructor accepting a single argument, which itself is an `arguments`
  // object.
  function From(parameters) {
    return Super.apply(this, parameters)
  }

  // Constructor accepting variadic arguments.
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments)
    }

    return Super.apply(this, arguments)
  }
}


/***/ }),

/***/ "../node_modules/unified/index.js":
/*!****************************************!*\
  !*** ../node_modules/unified/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dependencies. */
var extend = __webpack_require__(/*! extend */ "../node_modules/extend/index.js")
var bail = __webpack_require__(/*! bail */ "../node_modules/bail/index.js")
var vfile = __webpack_require__(/*! vfile */ "../node_modules/vfile/index.js")
var trough = __webpack_require__(/*! trough */ "../node_modules/trough/index.js")
var string = __webpack_require__(/*! x-is-string */ "../node_modules/x-is-string/index.js")
var plain = __webpack_require__(/*! is-plain-obj */ "../node_modules/is-plain-obj/index.js")

/* Expose a frozen processor. */
module.exports = unified().freeze()

var slice = [].slice
var own = {}.hasOwnProperty

/* Process pipeline. */
var pipeline = trough()
  .use(pipelineParse)
  .use(pipelineRun)
  .use(pipelineStringify)

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file)
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done)

  function done(err, tree, file) {
    if (err) {
      next(err)
    } else {
      ctx.tree = tree
      ctx.file = file
      next()
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file)
}

/* Function to create the first processor. */
function unified() {
  var attachers = []
  var transformers = trough()
  var namespace = {}
  var frozen = false
  var freezeIndex = -1

  /* Data management. */
  processor.data = data

  /* Lock. */
  processor.freeze = freeze

  /* Plug-ins. */
  processor.attachers = attachers
  processor.use = use

  /* API. */
  processor.parse = parse
  processor.stringify = stringify
  processor.run = run
  processor.runSync = runSync
  processor.process = process
  processor.processSync = processSync

  /* Expose. */
  return processor

  /* Create a new processor based on the processor
   * in the current scope. */
  function processor() {
    var destination = unified()
    var length = attachers.length
    var index = -1

    while (++index < length) {
      destination.use.apply(null, attachers[index])
    }

    destination.data(extend(true, {}, namespace))

    return destination
  }

  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */
  function freeze() {
    var values
    var plugin
    var options
    var transformer

    if (frozen) {
      return processor
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex]
      plugin = values[0]
      options = values[1]
      transformer = null

      if (options === false) {
        continue
      }

      if (options === true) {
        values[1] = undefined
      }

      transformer = plugin.apply(processor, values.slice(1))

      if (typeof transformer === 'function') {
        transformers.use(transformer)
      }
    }

    frozen = true
    freezeIndex = Infinity

    return processor
  }

  /* Data management.
   * Getter / setter for processor-specific informtion. */
  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen)

        namespace[key] = value

        return processor
      }

      /* Get `key`. */
      return (own.call(namespace, key) && namespace[key]) || null
    }

    /* Set space. */
    if (key) {
      assertUnfrozen('data', frozen)
      namespace = key
      return processor
    }

    /* Get space. */
    return namespace
  }

  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */
  function use(value) {
    var settings

    assertUnfrozen('use', frozen)

    if (value === null || value === undefined) {
      /* Empty */
    } else if (typeof value === 'function') {
      addPlugin.apply(null, arguments)
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value)
      } else {
        addPreset(value)
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`')
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings)
    }

    return processor

    function addPreset(result) {
      addList(result.plugins)

      if (result.settings) {
        settings = extend(settings || {}, result.settings)
      }
    }

    function add(value) {
      if (typeof value === 'function') {
        addPlugin(value)
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value)
        } else {
          addPreset(value)
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`')
      }
    }

    function addList(plugins) {
      var length
      var index

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length
        index = -1

        while (++index < length) {
          add(plugins[index])
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`')
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin)

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value)
        }

        entry[1] = value
      } else {
        attachers.push(slice.call(arguments))
      }
    }
  }

  function find(plugin) {
    var length = attachers.length
    var index = -1
    var entry

    while (++index < length) {
      entry = attachers[index]

      if (entry[0] === plugin) {
        return entry
      }
    }
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */
  function parse(doc) {
    var file = vfile(doc)
    var Parser

    freeze()
    Parser = processor.Parser
    assertParser('parse', Parser)

    if (newable(Parser)) {
      return new Parser(String(file), file).parse()
    }

    return Parser(String(file), file) // eslint-disable-line new-cap
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */
  function run(node, file, cb) {
    assertNode(node)
    freeze()

    if (!cb && typeof file === 'function') {
      cb = file
      file = null
    }

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done)

      function done(err, tree, file) {
        tree = tree || node
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(tree)
        } else {
          cb(null, tree, file)
        }
      }
    }
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */
  function runSync(node, file) {
    var complete = false
    var result

    run(node, file, done)

    assertDone('runSync', 'run', complete)

    return result

    function done(err, tree) {
      complete = true
      bail(err)
      result = tree
    }
  }

  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */
  function stringify(node, doc) {
    var file = vfile(doc)
    var Compiler

    freeze()
    Compiler = processor.Compiler
    assertCompiler('stringify', Compiler)
    assertNode(node)

    if (newable(Compiler)) {
      return new Compiler(node, file).compile()
    }

    return Compiler(node, file) // eslint-disable-line new-cap
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */
  function process(doc, cb) {
    freeze()
    assertParser('process', processor.Parser)
    assertCompiler('process', processor.Compiler)

    if (!cb) {
      return new Promise(executor)
    }

    executor(null, cb)

    function executor(resolve, reject) {
      var file = vfile(doc)

      pipeline.run(processor, {file: file}, done)

      function done(err) {
        if (err) {
          reject(err)
        } else if (resolve) {
          resolve(file)
        } else {
          cb(null, file)
        }
      }
    }
  }

  /* Process the given document (in string or VFile
   * representation), sync. */
  function processSync(doc) {
    var complete = false
    var file

    freeze()
    assertParser('processSync', processor.Parser)
    assertCompiler('processSync', processor.Compiler)
    file = vfile(doc)

    process(file, done)

    assertDone('processSync', 'process', complete)

    return file

    function done(err) {
      complete = true
      bail(err)
    }
  }
}

/* Check if `func` is a constructor. */
function newable(value) {
  return typeof value === 'function' && keys(value.prototype)
}

/* Check if `value` is an object with keys. */
function keys(value) {
  var key
  for (key in value) {
    return true
  }
  return false
}

/* Assert a parser is available. */
function assertParser(name, Parser) {
  if (typeof Parser !== 'function') {
    throw new Error('Cannot `' + name + '` without `Parser`')
  }
}

/* Assert a compiler is available. */
function assertCompiler(name, Compiler) {
  if (typeof Compiler !== 'function') {
    throw new Error('Cannot `' + name + '` without `Compiler`')
  }
}

/* Assert the processor is not frozen. */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      [
        'Cannot invoke `' + name + '` on a frozen processor.\nCreate a new ',
        'processor first, by invoking it: use `processor()` instead of ',
        '`processor`.'
      ].join('')
    )
  }
}

/* Assert `node` is a Unist node. */
function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`')
  }
}

/* Assert that `complete` is `true`. */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error(
      '`' + name + '` finished async. Use `' + asyncName + '` instead'
    )
  }
}


/***/ }),

/***/ "../node_modules/unist-util-is/convert.js":
/*!************************************************!*\
  !*** ../node_modules/unist-util-is/convert.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "../node_modules/unist-util-remove-position/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/unist-util-remove-position/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "../node_modules/unist-util-visit/index.js")

module.exports = removePosition

function removePosition(node, force) {
  visit(node, force ? hard : soft)
  return node
}

function hard(node) {
  delete node.position
}

function soft(node) {
  node.position = undefined
}


/***/ }),

/***/ "../node_modules/unist-util-stringify-position/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/unist-util-stringify-position/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty

module.exports = stringify

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null
  }

  /* Node. */
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return position(value.position)
  }

  /* Position. */
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return position(value)
  }

  /* Point. */
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return point(value)
  }

  /* ? */
  return null
}

function point(point) {
  if (!point || typeof point !== 'object') {
    point = {}
  }

  return index(point.line) + ':' + index(point.column)
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {}
  }

  return point(pos.start) + '-' + point(pos.end)
}

function index(value) {
  return value && typeof value === 'number' ? value : 1
}


/***/ }),

/***/ "../node_modules/unist-util-visit-parents/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/unist-util-visit-parents/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = visitParents

/* Visit. */
function visitParents(tree, type, visitor) {
  var stack = []

  if (typeof type === 'function') {
    visitor = type
    type = null
  }

  one(tree)

  /* Visit a single node. */
  function one(node) {
    var result

    if (!type || node.type === type) {
      result = visitor(node, stack.concat())
    }

    if (node.children && result !== false) {
      return all(node.children, node)
    }

    return result
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var length = children.length
    var index = -1
    var child

    stack.push(parent)

    while (++index < length) {
      child = children[index]

      if (child && one(child) === false) {
        return false
      }
    }

    stack.pop()

    return true
  }
}


/***/ }),

/***/ "../node_modules/unist-util-visit/index.js":
/*!*************************************************!*\
  !*** ../node_modules/unist-util-visit/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "../node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "../node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/unist-util-visit/node_modules/unist-util-visit-parents/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "../node_modules/unist-util-is/convert.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result = []
    var subresult

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents))

      if (result[0] === EXIT) {
        return result
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)))
      return subresult[0] === EXIT ? subresult : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var result

    while (index > min && index < children.length) {
      result = one(children[index], index, parents)

      if (result[0] === EXIT) {
        return result
      }

      index = typeof result[1] === 'number' ? result[1] : index + step
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "../node_modules/vfile-location/index.js":
/*!***********************************************!*\
  !*** ../node_modules/vfile-location/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = factory

function factory(file) {
  var contents = indices(String(file))

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  }
}

// Factory to get the line and column-based `position` for `offset` in the bound
// indices.
function offsetToPositionFactory(indices) {
  return offsetToPosition

  // Get the line and column-based `position` for `offset` in the bound indices.
  function offsetToPosition(offset) {
    var index = -1
    var length = indices.length

    if (offset < 0) {
      return {}
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: offset - (indices[index - 1] || 0) + 1,
          offset: offset
        }
      }
    }

    return {}
  }
}

// Factory to get the `offset` for a line and column-based `position` in the
// bound indices.
function positionToOffsetFactory(indices) {
  return positionToOffset

  // Get the `offset` for a line and column-based `position` in the bound
  // indices.
  function positionToOffset(position) {
    var line = position && position.line
    var column = position && position.column

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return (indices[line - 2] || 0) + column - 1 || 0
    }

    return -1
  }
}

// Get indices of line-breaks in `value`.
function indices(value) {
  var result = []
  var index = value.indexOf('\n')

  while (index !== -1) {
    result.push(index + 1)
    index = value.indexOf('\n', index + 1)
  }

  result.push(value.length + 1)

  return result
}


/***/ }),

/***/ "../node_modules/vfile-message/index.js":
/*!**********************************************!*\
  !*** ../node_modules/vfile-message/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! unist-util-stringify-position */ "../node_modules/unist-util-stringify-position/index.js")

module.exports = VMessage

// Inherit from `Error#`.
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype
VMessage.prototype = new VMessagePrototype()

// Message properties.
var proto = VMessage.prototype

proto.file = ''
proto.name = ''
proto.reason = ''
proto.message = ''
proto.stack = ''
proto.fatal = null
proto.column = null
proto.line = null

// Construct a new VMessage.
//
// Note: We cannot invoke `Error` on the created context, as that adds readonly
// `line` and `column` attributes on Safari 9, thus throwing and failing the
// data.
function VMessage(reason, position, origin) {
  var parts
  var range
  var location

  if (typeof position === 'string') {
    origin = position
    position = null
  }

  parts = parseOrigin(origin)
  range = stringify(position) || '1:1'

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  }

  // Node.
  if (position && position.position) {
    position = position.position
  }

  if (position) {
    // Position.
    if (position.start) {
      location = position
      position = position.start
    } else {
      // Point.
      location.start = position
    }
  }

  if (reason.stack) {
    this.stack = reason.stack
    reason = reason.message
  }

  this.message = reason
  this.name = range
  this.reason = reason
  this.line = position ? position.line : null
  this.column = position ? position.column : null
  this.location = location
  this.source = parts[0]
  this.ruleId = parts[1]
}

function parseOrigin(origin) {
  var result = [null, null]
  var index

  if (typeof origin === 'string') {
    index = origin.indexOf(':')

    if (index === -1) {
      result[1] = origin
    } else {
      result[0] = origin.slice(0, index)
      result[1] = origin.slice(index + 1)
    }
  }

  return result
}


/***/ }),

/***/ "../node_modules/vfile/core.js":
/*!*************************************!*\
  !*** ../node_modules/vfile/core.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(/*! path */ "../node_modules/path-browserify/index.js");
var replace = __webpack_require__(/*! replace-ext */ "../node_modules/replace-ext/index.js");
var buffer = __webpack_require__(/*! is-buffer */ "../node_modules/is-buffer/index.js");

module.exports = VFile;

var own = {}.hasOwnProperty;
var proto = VFile.prototype;

proto.toString = toString;

/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */
var order = [
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
];

/* Construct a new file. */
function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options};
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();

  /* Set path related properties in the correct order. */
  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }

  /* Set non-path related properties. */
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}

/* Access full path (`~/index.min.js`). */
Object.defineProperty(proto, 'path', {
  get: function () {
    return this.history[this.history.length - 1];
  },
  set: function (path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});

/* Access parent path (`~`). */
Object.defineProperty(proto, 'dirname', {
  get: function () {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function (dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});

/* Access basename (`index.min.js`). */
Object.defineProperty(proto, 'basename', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function (basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});

/* Access extname (`.js`). */
Object.defineProperty(proto, 'extname', {
  get: function () {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function (extname) {
    var ext = extname || '';

    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});

/* Access stem (`index.min`). */
Object.defineProperty(proto, 'stem', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function (stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});

/* Get the value of the file. */
function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}

/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}

/* Assert that `part` is not empty. */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/* Assert `path` exists. */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/vfile/index.js":
/*!**************************************!*\
  !*** ../node_modules/vfile/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VMessage = __webpack_require__(/*! vfile-message */ "../node_modules/vfile-message/index.js");
var VFile = __webpack_require__(/*! ./core.js */ "../node_modules/vfile/core.js");

module.exports = VFile;

var proto = VFile.prototype;

proto.message = message;
proto.info = info;
proto.fail = fail;

/* Slight backwards compatibility.  Remove in the future. */
proto.warn = message;

/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the stack. */
function message(reason, position, origin) {
  var filePath = this.path;
  var message = new VMessage(reason, position, origin);

  if (filePath) {
    message.name = filePath + ':' + message.name;
    message.file = filePath;
  }

  message.fatal = false;

  this.messages.push(message);

  return message;
}

/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message;
}

/* Info. Creates a vmessage, associates it with the file,
 * and marks the fatality as null. */
function info() {
  var message = this.message.apply(this, arguments);

  message.fatal = null;

  return message;
}


/***/ }),

/***/ "../node_modules/whatwg-fetch/fetch.js":
/*!*********************************************!*\
  !*** ../node_modules/whatwg-fetch/fetch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),

/***/ "../node_modules/x-is-string/index.js":
/*!********************************************!*\
  !*** ../node_modules/x-is-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = Object.prototype.toString

module.exports = isString

function isString(obj) {
    return toString.call(obj) === "[object String]"
}


/***/ }),

/***/ "../node_modules/xtend/immutable.js":
/*!******************************************!*\
  !*** ../node_modules/xtend/immutable.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvanN4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXMvRGlhbG9nQWN0aW9ucy9EaWFsb2dBY3Rpb25zLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXMvRGlhbG9nQWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9pY29ucy9XYXJuaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHUtd2F2ZS9yZWFjdC1zZXJ2ZXItbGlzdC9kaXN0L3Utd2F2ZS1yZWFjdC1zZXJ2ZXItbGlzdC5lcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0B1LXdhdmUvcmVhY3Qtc2VydmVyLWxpc3Qvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHUtd2F2ZS9yZWFjdC1zZXJ2ZXItbGlzdC9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL2FzdC10by1yZWFjdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0B1LXdhdmUvcmVhY3Qtc2VydmVyLWxpc3Qvbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9nZXQtZGVmaW5pdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AdS13YXZlL3JlYWN0LXNlcnZlci1saXN0L25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvcGx1Z2lucy9kaXNhbGxvdy1ub2RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvQHUtd2F2ZS9yZWFjdC1zZXJ2ZXItbGlzdC9ub2RlX21vZHVsZXMvcmVhY3QtbWFya2Rvd24vbGliL3BsdWdpbnMvbmFpdmUtaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0B1LXdhdmUvcmVhY3Qtc2VydmVyLWxpc3Qvbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9yZWFjdC1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0B1LXdhdmUvcmVhY3Qtc2VydmVyLWxpc3Qvbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi9yZW5kZXJlcnMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AdS13YXZlL3JlYWN0LXNlcnZlci1saXN0L25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvc3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL0B1LXdhdmUvcmVhY3Qtc2VydmVyLWxpc3Qvbm9kZV9tb2R1bGVzL3JlYWN0LW1hcmtkb3duL2xpYi91cmktdHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9AdS13YXZlL3JlYWN0LXNlcnZlci1saXN0L25vZGVfbW9kdWxlcy9yZWFjdC1tYXJrZG93bi9saWIvd3JhcC10YWJsZS1yb3dzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYmFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2NvbGxhcHNlLXdoaXRlLXNwYWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvZXZlbnQtc291cmNlLXBvbHlmaWxsL3NyYy9ldmVudHNvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2V4dGVuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pcy1hbHBoYWJldGljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pcy1hbHBoYW51bWVyaWNhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lzLWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pcy1oZXhhZGVjaW1hbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lzLXBsYWluLW9iai9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaXMtd29yZC1jaGFyYWN0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLWZldGNoL2ZldGNoLW5wbS1icm93c2VyaWZ5LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbWFya2Rvd24tZXNjYXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21kYXN0LWFkZC1saXN0LW1ldGFkYXRhL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvZGVjb2RlLWVudGl0eS5icm93c2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcGFyc2UtZW50aXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wYXRoLWJyb3dzZXJpZnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2RlY29kZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9icmVhay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvbG9jYXRlL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZGVsZXRlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvZW1waGFzaXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL2xvY2F0ZS9saW5rLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvc3Ryb25nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvdGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9sb2NhdGUvdXJsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi9zZXQtb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvYXV0by1saW5rLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9ibG9ja3F1b3RlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9icmVhay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvY29kZS1mZW5jZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtaW5kZW50ZWQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2NvZGUtaW5saW5lLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9kZWZpbml0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2VtcGhhc2lzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2Zvb3Rub3RlLWRlZmluaXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2hlYWRpbmctYXR4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9oZWFkaW5nLXNldGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvaHRtbC1pbmxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL2xpc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL25ld2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvcmVmZXJlbmNlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS9zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3Rva2VuaXplL3RhYmxlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90ZXh0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZS90aGVtYXRpYy1icmVhay5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdG9rZW5pemUvdXJsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi90b2tlbml6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3VuZXNjYXBlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2dldC1pbmRlbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9odG1sLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVtYXJrLXBhcnNlL2xpYi91dGlsL2ludGVycnVwdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlbWFyay1wYXJzZS9saWIvdXRpbC9ub3JtYWxpemUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZW1hcmstcGFyc2UvbGliL3V0aWwvcmVtb3ZlLWluZGVudGF0aW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVwZWF0LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlcGxhY2UtZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3RhdGUtdG9nZ2xlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3RyaXAtaW5kZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdHJpbS10cmFpbGluZy1saW5lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RyaW0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90cm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90cm91Z2gvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VuaGVyaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlmaWVkL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1pcy9jb252ZXJ0LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92ZmlsZS1sb2NhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3ZmaWxlLW1lc3NhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92ZmlsZS9jb3JlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdmZpbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy93aGF0d2ctZmV0Y2gvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy94LWlzLXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXgiLCJtYXJnaW4iLCJhY3Rpb24iLCJEaWFsb2dBY3Rpb25zIiwicHJvcHMiLCJkaXNhYmxlQWN0aW9uU3BhY2luZyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsIm90aGVyIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJfZXh0ZW5kcyIsImNsYXNzTmFtZXMiLCJjbG9uZUNoaWxkcmVuV2l0aENsYXNzTmFtZSIsInByb2Nlc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImJvb2wiLCJkZWZhdWx0UHJvcHMiLCJ3aXRoU3R5bGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrR0FBK0c7O0FBRS9HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFF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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUMzQ2E7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLG1FQUFrQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdCWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsYUFBYTtBQUN0RixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNERBQTRELGFBQWE7QUFDekU7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwwQkFBMEI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEOztBQUVoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHlCQUF5QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUN4M0JZOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLGtEQUFrRDs7QUFFN0U7QUFDQSxNQUFNO0FBQ04sMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiWTs7QUFFWixtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBaUI7QUFDNUMsY0FBYyxtQkFBTyxDQUFDLHVEQUFZOztBQUVsQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwQlk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1ZZOztBQUVaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2RhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBLHFKQUFxSjtBQUNySjs7Ozs7Ozs7Ozs7OztBQ05ZOztBQUVaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNiWTs7QUFFWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFPLENBQUMsMkRBQWM7QUFDdEI7Ozs7Ozs7Ozs7Ozs7QUNMWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4REEsdUJBQXVCLG1CQUFPLENBQUMsbUZBQTBCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ3BCWTs7QUFFWjs7QUFFQTs7QUFFQSx5QkFBeUI7O0FBRXpCOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBFQUEwRTtBQUMxRSwrQkFBK0I7QUFDL0Isa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCWTs7QUFFWixhQUFhLG1CQUFPLENBQUMsdUZBQTJCO0FBQ2hELGNBQWMsbUJBQU8sQ0FBQywyRkFBNkI7QUFDbkQsY0FBYyxtQkFBTyxDQUFDLHVEQUFZO0FBQ2xDLGtCQUFrQixtQkFBTyxDQUFDLCtEQUFnQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyxxRUFBbUI7QUFDaEQsbUJBQW1CLG1CQUFPLENBQUMsZ0ZBQWlCOztBQUU1Qzs7QUFFQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDLGlGQUF5QjtBQUNsRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RUFBbUI7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN4TGE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUM1SWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMxR2E7O0FBRWIsbUJBQW1CLG1CQUFPLENBQUMsbUVBQWM7O0FBRXpDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLDhCQUE4QjtBQUN0RDs7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYixtQkFBbUIsbUJBQU8sQ0FBQyxpRUFBaUI7QUFDNUMsYUFBYSxtQkFBTyxDQUFDLHFFQUFlO0FBQ3BDLFVBQVUsbUJBQU8sQ0FBQyxtRUFBYzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSx3QkFBd0IsOEJBQThCO0FBQ3REOzs7Ozs7Ozs7Ozs7O0FDckRhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLGlGQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsdUVBQWdCOztBQUVyQztBQUNBOztBQUVBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdFQUF3RSxxQkFBcUI7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdllhOztBQUViOztBQUVBLFdBQVcsbUJBQU8sQ0FBQywyQ0FBTTtBQUN6QixhQUFhLG1CQUFPLENBQUMsNkRBQWU7QUFDcEMsY0FBYyxtQkFBTyxDQUFDLHVEQUFZO0FBQ2xDLGdCQUFnQixtQkFBTyxDQUFDLHlGQUF5QjtBQUNqRCxtQkFBbUIsbUJBQU8sQ0FBQywrRkFBNEI7QUFDdkQsZ0JBQWdCLG1CQUFPLENBQUMsNkVBQW1COztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsSUFBSTtBQUN4RDtBQUNBLHFDQUFxQyxJQUFJOztBQUV6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDemRhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLGlGQUF5Qjs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDYTs7QUFFYixXQUFXLG1CQUFPLENBQUMsMkNBQU07QUFDekIsY0FBYyxtQkFBTyxDQUFDLHVEQUFZO0FBQ2xDLHdCQUF3QixtQkFBTyxDQUFDLHlFQUFxQjtBQUNyRCxnQkFBZ0IsbUJBQU8sQ0FBQyw2RUFBbUI7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7O0FDekhhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLGlGQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsdUVBQWdCO0FBQ3JDLGdCQUFnQixtQkFBTyxDQUFDLDZFQUFtQjs7QUFFM0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3TWE7O0FBRWIsV0FBVyxtQkFBTyxDQUFDLDJDQUFNO0FBQ3pCLGlCQUFpQixtQkFBTyxDQUFDLGlGQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMsMkVBQWtCOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViLGlCQUFpQixtQkFBTyxDQUFDLGlGQUF5Qjs7QUFFbEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pRYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUN6RGE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsc0JBQXNCO0FBQ2xELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JFYTs7QUFFYixhQUFhLG1CQUFPLENBQUMsK0RBQWdCO0FBQ3JDLGlCQUFpQixtQkFBTyxDQUFDLGlGQUF5QjtBQUNsRCxhQUFhLG1CQUFPLENBQUMscUVBQWU7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMvSWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxVWE7O0FBRWI7O0FBRUE7QUFDQTtBQUNB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLDBEQUEwRDtBQUMxRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsK0JBQStCLFdBQVc7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqZFk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdEZZOztBQUVaLFlBQVksbUJBQU8sQ0FB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QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4S2E7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLDZEQUFlO0FBQ3RDLFlBQVksbUJBQU8sQ0FBQyxnREFBVzs7QUFFL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsbUJBQW1CO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxvQkFBb0I7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0NBQXdDLDRCQUE0QjtBQUNwRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLHVCQUF1QjtBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHVDQUF1QywwQkFBMEI7QUFDakU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQiwwQkFBMEIsZUFBZTtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNqZEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoidmVuZG9yc35zZXJ2ZXJMaXN0X2Rldi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSRUFDVF9FTEVNRU5UX1RZUEU7XG5cbmZ1bmN0aW9uIF9jcmVhdGVSYXdSZWFjdEVsZW1lbnQodHlwZSwgcHJvcHMsIGtleSwgY2hpbGRyZW4pIHtcbiAgaWYgKCFSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICBSRUFDVF9FTEVNRU5UX1RZUEUgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sW1wiZm9yXCJdICYmIFN5bWJvbFtcImZvclwiXShcInJlYWN0LmVsZW1lbnRcIikgfHwgMHhlYWM3O1xuICB9XG5cbiAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHM7XG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAzO1xuXG4gIGlmICghcHJvcHMgJiYgY2hpbGRyZW5MZW5ndGggIT09IDApIHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGNoaWxkcmVuOiB2b2lkIDBcbiAgICB9O1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IG5ldyBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDNdO1xuICAgIH1cblxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIGlmIChwcm9wcyAmJiBkZWZhdWx0UHJvcHMpIHtcbiAgICBmb3IgKHZhciBwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHZvaWQgMCkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICghcHJvcHMpIHtcbiAgICBwcm9wcyA9IGRlZmF1bHRQcm9wcyB8fCB7fTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogXCJcIiArIGtleSxcbiAgICByZWY6IG51bGwsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIF9vd25lcjogbnVsbFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVSYXdSZWFjdEVsZW1lbnQ7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgY2xvbmVDaGlsZHJlbldpdGhDbGFzc05hbWUgfSBmcm9tICcuLi91dGlscy9yZWFjdEhlbHBlcnMnO1xuaW1wb3J0ICcuLi9CdXR0b24nOyAvLyBTbyB3ZSBkb24ndCBoYXZlIGFueSBvdmVycmlkZSBwcmlvcml0eSBpc3N1ZS5cblxuZXhwb3J0IGNvbnN0IHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBmbGV4OiAnMCAwIGF1dG8nLFxuICAgIG1hcmdpbjogJzhweCA0cHgnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBhY3Rpb246IHtcbiAgICBtYXJnaW46ICcwIDRweCdcbiAgfVxufTtcblxuZnVuY3Rpb24gRGlhbG9nQWN0aW9ucyhwcm9wcykge1xuICBjb25zdCB7XG4gICAgZGlzYWJsZUFjdGlvblNwYWNpbmcsXG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NlcyxcbiAgICBjbGFzc05hbWVcbiAgfSA9IHByb3BzLFxuICAgICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJkaXNhYmxlQWN0aW9uU3BhY2luZ1wiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSlcbiAgfSwgb3RoZXIpLCBkaXNhYmxlQWN0aW9uU3BhY2luZyA/IGNoaWxkcmVuIDogY2xvbmVDaGlsZHJlbldpdGhDbGFzc05hbWUoY2hpbGRyZW4sIGNsYXNzZXMuYWN0aW9uKSk7XG59XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IERpYWxvZ0FjdGlvbnMucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MtYXBpKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGRpYWxvZyBhY3Rpb25zIGRvIG5vdCBoYXZlIGFkZGl0aW9uYWwgbWFyZ2luLlxuICAgKi9cbiAgZGlzYWJsZUFjdGlvblNwYWNpbmc6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuRGlhbG9nQWN0aW9ucy5kZWZhdWx0UHJvcHMgPSB7XG4gIGRpc2FibGVBY3Rpb25TcGFjaW5nOiBmYWxzZVxufTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlEaWFsb2dBY3Rpb25zJ1xufSkoRGlhbG9nQWN0aW9ucyk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRGlhbG9nQWN0aW9ucyc7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NyZWF0ZVN2Z0ljb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL2NyZWF0ZVN2Z0ljb25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSAoMCwgX2NyZWF0ZVN2Z0ljb24uZGVmYXVsdCkoX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCwgbnVsbCwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBmaWxsOiBcIm5vbmVcIixcbiAgZDogXCJNMCAwaDI0djI0SDB6XCJcbn0pLCBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHpcIlxufSkpLCAnV2FybmluZycpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJpbXBvcnQgX2pzeCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2pzeCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBzdHJpcEluZGVudCBmcm9tICdzdHJpcC1pbmRlbnQnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBNdWlEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IHdpdGhNb2JpbGVEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvd2l0aE1vYmlsZURpYWxvZyc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICdyZWNvbXBvc2UvY29tcG9zZSc7XG5pbXBvcnQgd2l0aFN0YXRlIGZyb20gJ3JlY29tcG9zZS93aXRoU3RhdGUnO1xuaW1wb3J0IHdpdGhQcm9wcyBmcm9tICdyZWNvbXBvc2Uvd2l0aFByb3BzJztcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IERlc2NyaXB0aW9uSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgTXVpV2FybmluZ0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1dhcm5pbmcnO1xuaW1wb3J0IG1zIGZyb20gJ21zJztcbmltcG9ydCAnZXZlbnQtc291cmNlLXBvbHlmaWxsJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuXG52YXIgZW5oYW5jZSA9IHdpdGhTdHlsZXMoe1xuICByb290OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gIH1cbn0sIHtcbiAgbmFtZTogJ0xvYWRpbmcnXG59KTtcblxudmFyIF9yZWYyID1cbi8qI19fUFVSRV9fKi9cbl9qc3goQ2lyY3VsYXJQcm9ncmVzcywge1xuICBzaXplOiAzMDAsXG4gIG1vZGU6IFwiaW5kZXRlcm1pbmF0ZVwiXG59KTtcblxudmFyIExvYWRpbmcgPSBmdW5jdGlvbiBMb2FkaW5nKF9yZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBtZXNzYWdlID0gX3JlZi5tZXNzYWdlO1xuICByZXR1cm4gX2pzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnJvb3RcbiAgfSwgdm9pZCAwLCBfcmVmMiwgX2pzeChUeXBvZ3JhcGh5LCB7fSwgdm9pZCAwLCBtZXNzYWdlKSk7XG59O1xuXG5Mb2FkaW5nLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICByb290OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHt9O1xudmFyIExvYWRpbmckMSA9IGVuaGFuY2UoTG9hZGluZyk7XG5cbnZhciBEaWFsb2cgPSB3aXRoTW9iaWxlRGlhbG9nKCkoTXVpRGlhbG9nKTtcbnZhciBlbmhhbmNlJDEgPSB3aXRoU3R5bGVzKHtcbiAgbWFya2Rvd246IHtcbiAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSdcbiAgfVxufSwge1xuICBuYW1lOiAnRGVzY3JpcHRpb25EaWFsb2cnXG59KTtcblxudmFyIERlc2NyaXB0aW9uRGlhbG9nID0gZnVuY3Rpb24gRGVzY3JpcHRpb25EaWFsb2coX3JlZikge1xuICB2YXIgY2xhc3NlcyA9IF9yZWYuY2xhc3NlcyxcbiAgICAgIHNlcnZlciA9IF9yZWYuc2VydmVyLFxuICAgICAgaXNPcGVuID0gX3JlZi5pc09wZW4sXG4gICAgICBvbkNsb3NlRGVzY3JpcHRpb24gPSBfcmVmLm9uQ2xvc2VEZXNjcmlwdGlvbjtcbiAgcmV0dXJuIF9qc3goRGlhbG9nLCB7XG4gICAgb3BlbjogaXNPcGVuLFxuICAgIG9uQ2xvc2U6IG9uQ2xvc2VEZXNjcmlwdGlvblxuICB9LCB2b2lkIDAsIF9qc3goRGlhbG9nVGl0bGUsIHt9LCB2b2lkIDAsIHNlcnZlci5uYW1lKSwgX2pzeChEaWFsb2dDb250ZW50LCB7fSwgdm9pZCAwLCBfanN4KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMubWFya2Rvd25cbiAgfSwgdm9pZCAwLCBfanN4KE1hcmtkb3duLCB7XG4gICAgc291cmNlOiBzdHJpcEluZGVudChzZXJ2ZXIuZGVzY3JpcHRpb24pXG4gIH0pKSksIF9qc3goRGlhbG9nQWN0aW9ucywge30sIHZvaWQgMCwgX2pzeChCdXR0b24sIHtcbiAgICBvbkNsaWNrOiBvbkNsb3NlRGVzY3JpcHRpb25cbiAgfSwgdm9pZCAwLCBcIkNsb3NlXCIpLCBfanN4KEJ1dHRvbiwge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICB2YXJpYW50OiBcInJhaXNlZFwiLFxuICAgIGhyZWY6IHNlcnZlci51cmxcbiAgfSwgdm9pZCAwLCBcIkpvaW5cIikpKTtcbn07XG5cbkRlc2NyaXB0aW9uRGlhbG9nLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBtYXJrZG93bjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHNlcnZlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHVybDogUHJvcFR5cGVzLnN0cmluZ1xuICB9KS5pc1JlcXVpcmVkLFxuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuICBvbkNsb3NlRGVzY3JpcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0gOiB7fTtcbnZhciBEZXNjcmlwdGlvbkRpYWxvZyQxID0gZW5oYW5jZSQxKERlc2NyaXB0aW9uRGlhbG9nKTtcblxudmFyIGVuaGFuY2UkMiA9IHdpdGhTdHlsZXMoe1xuICBpbWFnZToge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZ0JvdHRvbTogJzc1JScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmxhY2snLFxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuICAgIGJhY2tncm91bmRTaXplOiAnY29udGFpbicsXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgfSxcbiAgbm93UGxheWluZzoge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgYm90dG9tOiAwLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIDAuNzUpJyxcbiAgICBwYWRkaW5nOiAxNixcbiAgICBwYWRkaW5nVG9wOiAyNFxuICB9LFxuICB0aXRsZToge1xuICAgIG1hcmdpbjogMCxcbiAgICBmb250U2l6ZTogJzE1MCUnXG4gIH0sXG4gIGFydGlzdDoge1xuICAgIG1hcmdpbjogMFxuICB9XG59LCB7XG4gIG5hbWU6ICdDdXJyZW50TWVkaWEnXG59KTtcblxudmFyIF9yZWYyJDEgPVxuLyojX19QVVJFX18qL1xuX2pzeChcInNwYW5cIiwge30pO1xuXG52YXIgQ3VycmVudE1lZGlhID0gZnVuY3Rpb24gQ3VycmVudE1lZGlhKF9yZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBtZWRpYSA9IF9yZWYubWVkaWE7XG4gIHJldHVybiBtZWRpYSA/IF9qc3goXCJkaXZcIiwge30sIHZvaWQgMCwgX2pzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmltYWdlLFxuICAgIHN0eWxlOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobWVkaWEudGh1bWJuYWlsKSArIFwiKVwiXG4gICAgfVxuICB9KSwgX2pzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLm5vd1BsYXlpbmdcbiAgfSwgdm9pZCAwLCBfanN4KFwicFwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRpdGxlXG4gIH0sIHZvaWQgMCwgbWVkaWEudGl0bGUpLCBfanN4KFwicFwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmFydGlzdFxuICB9LCB2b2lkIDAsIG1lZGlhLmFydGlzdCkpKSA6IF9yZWYyJDE7XG59O1xuXG5DdXJyZW50TWVkaWEucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbm93UGxheWluZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgYXJ0aXN0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSkuaXNSZXF1aXJlZCxcbiAgbWVkaWE6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdGh1bWJuYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFydGlzdDogUHJvcFR5cGVzLnN0cmluZ1xuICB9KVxufSA6IHt9O1xudmFyIEN1cnJlbnRNZWRpYSQxID0gZW5oYW5jZSQyKEN1cnJlbnRNZWRpYSk7XG5cbnZhciBkb3duVGltZW91dCA9IG1zKCcxMCBtaW51dGVzJyk7XG52YXIgZW5oYW5jZSQzID0gY29tcG9zZSh3aXRoU3RhdGUoJ2lzT3BlbicsICdzZXREZXNjcmlwdGlvbk9wZW4nLCBmYWxzZSksIHdpdGhQcm9wcyhmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgc2V0RGVzY3JpcHRpb25PcGVuID0gX3JlZi5zZXREZXNjcmlwdGlvbk9wZW47XG4gIHJldHVybiB7XG4gICAgb25PcGVuRGVzY3JpcHRpb246IGZ1bmN0aW9uIG9uT3BlbkRlc2NyaXB0aW9uKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzZXREZXNjcmlwdGlvbk9wZW4odHJ1ZSk7XG4gICAgfSxcbiAgICBvbkNsb3NlRGVzY3JpcHRpb246IGZ1bmN0aW9uIG9uQ2xvc2VEZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBzZXREZXNjcmlwdGlvbk9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfTtcbn0pLCB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIHdpZHRoOiAzNjAsXG4gICAgbWFyZ2luOiAnMCAyMHB4IDIwcHggMjBweCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcbiAgfVxufSwge1xuICBuYW1lOiAnU2VydmVyVGh1bWJuYWlsJ1xufSkpO1xudmFyIFdhcm5pbmdJY29uID0gd2l0aFByb3BzKHtcbiAgc3R5bGU6IHtcbiAgICBoZWlnaHQ6IDE2LFxuICAgIHdpZHRoOiAxNixcbiAgICB2ZXJ0aWNhbEFsaWduOiAnc3ViJ1xuICB9XG59KShNdWlXYXJuaW5nSWNvbik7XG52YXIgV2FybmluZ1RleHQgPSB3aXRoUHJvcHMoe1xuICB0eXBlOiAnYm9keTEnLFxuICBzdHlsZToge1xuICAgIGNvbG9yOiAnI2VkNDA0ZidcbiAgfVxufSkoVHlwb2dyYXBoeSk7XG5cbnZhciB0aW1lZE91dE1lc3NhZ2UgPSBmdW5jdGlvbiB0aW1lZE91dE1lc3NhZ2Uoc2luY2UpIHtcbiAgcmV0dXJuIFwiIFRoaXMgc2VydmVyIG1heSBiZSBkb3duLiBJdCBoYXMgbm90IHJlc3BvbmRlZCBmb3IgXCIgKyBzaW5jZSArIFwiLlwiO1xufTtcblxudmFyIF9yZWYzID1cbi8qI19fUFVSRV9fKi9cbl9qc3goRGVzY3JpcHRpb25JY29uLCB7fSk7XG5cbnZhciBfcmVmNCA9XG4vKiNfX1BVUkVfXyovXG5fanN4KFdhcm5pbmdJY29uLCB7fSk7XG5cbnZhciBTZXJ2ZXJUaHVtYm5haWwgPSBmdW5jdGlvbiBTZXJ2ZXJUaHVtYm5haWwoX3JlZjIpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmMi5jbGFzc2VzLFxuICAgICAgc2VydmVyID0gX3JlZjIuc2VydmVyLFxuICAgICAgbWVkaWEgPSBfcmVmMi5tZWRpYSxcbiAgICAgIGlzT3BlbiA9IF9yZWYyLmlzT3BlbixcbiAgICAgIG9uT3BlbkRlc2NyaXB0aW9uID0gX3JlZjIub25PcGVuRGVzY3JpcHRpb24sXG4gICAgICBvbkNsb3NlRGVzY3JpcHRpb24gPSBfcmVmMi5vbkNsb3NlRGVzY3JpcHRpb247XG4gIHJldHVybiBfanN4KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMucm9vdFxuICB9LCB2b2lkIDAsIF9qc3goQ2FyZCwge30sIHZvaWQgMCwgX2pzeChDYXJkQ29udGVudCwge30sIHZvaWQgMCwgX2pzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmhlYWRlclxuICB9LCB2b2lkIDAsIF9qc3goXCJkaXZcIiwge30sIHZvaWQgMCwgX2pzeChUeXBvZ3JhcGh5LCB7XG4gICAgdmFyaWFudDogXCJoZWFkbGluZVwiXG4gIH0sIHZvaWQgMCwgc2VydmVyLm5hbWUpLCBfanN4KFR5cG9ncmFwaHksIHtcbiAgICB2YXJpYW50OiBcImJvZHkxXCJcbiAgfSwgdm9pZCAwLCBzZXJ2ZXIuc3VidGl0bGUpKSwgc2VydmVyLmRlc2NyaXB0aW9uICYmIF9qc3goSWNvbkJ1dHRvbiwge1xuICAgIG9uQ2xpY2s6IG9uT3BlbkRlc2NyaXB0aW9uXG4gIH0sIHZvaWQgMCwgX3JlZjMpKSksIF9qc3goXCJhXCIsIHtcbiAgICBocmVmOiBzZXJ2ZXIudXJsXG4gIH0sIHZvaWQgMCwgX2pzeChDdXJyZW50TWVkaWEkMSwge1xuICAgIG1lZGlhOiBtZWRpYVxuICB9KSksIHNlcnZlci50aW1lU2luY2VQaW5nID49IGRvd25UaW1lb3V0ICYmIF9qc3goQ2FyZENvbnRlbnQsIHt9LCB2b2lkIDAsIF9qc3goV2FybmluZ1RleHQsIHt9LCB2b2lkIDAsIF9yZWY0LCB0aW1lZE91dE1lc3NhZ2UobXMoc2VydmVyLnRpbWVTaW5jZVBpbmcsIHtcbiAgICBsb25nOiB0cnVlXG4gIH0pKSkpLCBzZXJ2ZXIuZGVzY3JpcHRpb24gJiYgX2pzeChEZXNjcmlwdGlvbkRpYWxvZyQxLCB7XG4gICAgc2VydmVyOiBzZXJ2ZXIsXG4gICAgaXNPcGVuOiBpc09wZW4sXG4gICAgb25DbG9zZURlc2NyaXB0aW9uOiBvbkNsb3NlRGVzY3JpcHRpb25cbiAgfSkpKTtcbn07XG5cblNlcnZlclRodW1ibmFpbC5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcm9vdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHNlcnZlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN1YnRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlc2NyaXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRpbWVTaW5jZVBpbmc6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgdXJsOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG1lZGlhOiBQcm9wVHlwZXMub2JqZWN0LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25PcGVuRGVzY3JpcHRpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2xvc2VEZXNjcmlwdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufSA6IHt9O1xudmFyIFNlcnZlclRodW1ibmFpbCQxID0gZW5oYW5jZSQzKFNlcnZlclRodW1ibmFpbCk7XG5cbnZhciBlbmhhbmNlJDQgPSB3aXRoU3R5bGVzKHtcbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJ1xuICB9XG59LCB7XG4gIG5hbWU6ICdTZXJ2ZXJMaXN0aW5nJ1xufSk7XG5cbnZhciBfcmVmMiQyID1cbi8qI19fUFVSRV9fKi9cbl9qc3goVHlwb2dyYXBoeSwge30sIHZvaWQgMCwgXCJObyBzZXJ2ZXJzIGFyZSBjdXJyZW50bHkgYXZhaWxhYmxlLlwiKTtcblxudmFyIFNlcnZlckxpc3RpbmcgPSBmdW5jdGlvbiBTZXJ2ZXJMaXN0aW5nKF9yZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBzZXJ2ZXJzID0gX3JlZi5zZXJ2ZXJzO1xuICByZXR1cm4gX2pzeChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLnJvb3RcbiAgfSwgdm9pZCAwLCBzZXJ2ZXJzLmxlbmd0aCA9PT0gMCA/IF9yZWYyJDIgOiBzZXJ2ZXJzLm1hcChmdW5jdGlvbiAoc2VydmVyKSB7XG4gICAgcmV0dXJuIF9qc3goU2VydmVyVGh1bWJuYWlsJDEsIHtcbiAgICAgIHNlcnZlcjogc2VydmVyLFxuICAgICAgbWVkaWE6IHNlcnZlci5ib290aCAmJiBzZXJ2ZXIuYm9vdGgubWVkaWFcbiAgICB9LCBzZXJ2ZXIudXJsKTtcbiAgfSkpO1xufTtcblxuU2VydmVyTGlzdGluZy5wcm9wVHlwZXMgPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcm9vdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG4gIH0pLmlzUmVxdWlyZWQsXG4gIHNlcnZlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLmlzUmVxdWlyZWRcbn0gOiB7fTtcbnZhciBTZXJ2ZXJMaXN0aW5nJDEgPSBlbmhhbmNlJDQoU2VydmVyTGlzdGluZyk7XG5cbi8qIGdsb2JhbCBFdmVudFNvdXJjZSAqL1xudmFyIGRvd25UaW1lb3V0JDEgPSBtcygnMTAgbWludXRlcycpO1xuZnVuY3Rpb24gbG9hZFNlcnZlcnMoaHViU2VydmVyKSB7XG4gIHJldHVybiBmZXRjaChodWJTZXJ2ZXIpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSkudGhlbihmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUuc2VydmVycy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYS50aW1lU2luY2VQaW5nID49IGRvd25UaW1lb3V0JDEpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG5cbiAgICAgIGlmIChiLnRpbWVTaW5jZVBpbmcgPj0gZG93blRpbWVvdXQkMSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAwO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGFubm91bmNlRXZlbnRzKGh1YlNlcnZlciwgbm90aWZ5KSB7XG4gIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoaHViU2VydmVyLnJlcGxhY2UoL1xcLyQvLCAnJykgKyBcIi9ldmVudHNcIik7XG5cbiAgdmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gbGlzdGVuZXIoZXZlbnQpIHtcbiAgICB2YXIgZGF0YTtcblxuICAgIHRyeSB7XG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub3RpZnkoZGF0YSk7XG4gIH07XG5cbiAgc291cmNlLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lcik7XG5cbiAgdmFyIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICBzb3VyY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyKTtcbiAgICBzb3VyY2UuY2xvc2UoKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbW92ZTogcmVtb3ZlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZFNlcnZlcihsaXN0LCB1cGRhdGUpIHtcbiAgdmFyIHNlcnZlcnMgPSBsaXN0Lm1hcChmdW5jdGlvbiAoc2VydmVyKSB7XG4gICAgcmV0dXJuIHNlcnZlci5wdWJsaWNLZXkgPT09IHVwZGF0ZS5wdWJsaWNLZXkgPyB1cGRhdGUgOiBzZXJ2ZXI7XG4gIH0pO1xuXG4gIGlmIChzZXJ2ZXJzLmluZGV4T2YodXBkYXRlKSA9PT0gLTEpIHtcbiAgICBzZXJ2ZXJzLnVuc2hpZnQodXBkYXRlKTtcbiAgfVxuXG4gIHJldHVybiBzZXJ2ZXJzO1xufVxuXG52YXIgX3JlZjIkMyA9XG4vKiNfX1BVUkVfXyovXG5fanN4KExvYWRpbmckMSwge1xuICBtZXNzYWdlOiBcIkxvYWRpbmcgYXZhaWxhYmxlIHNlcnZlcnMuLi5cIlxufSk7XG5cbnZhciBDb250YWluZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoQ29udGFpbmVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBDb250YWluZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlcnZlcnM6IG51bGxcbiAgICB9O1xuICAgIF90aGlzLnVwZGF0ZSA9IF90aGlzLnVwZGF0ZS5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICBfdGhpcy5oYW5kbGVVcGRhdGUgPSBfdGhpcy5oYW5kbGVVcGRhdGUuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbnRhaW5lci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdmFyIGh1YiA9IHRoaXMucHJvcHMuaHViO1xuICAgIHZhciBzZXJ2ZXJzID0gdGhpcy5zdGF0ZS5zZXJ2ZXJzO1xuXG4gICAgaWYgKCFzZXJ2ZXJzKSB7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzID0gYW5ub3VuY2VFdmVudHMoaHViLCB0aGlzLmhhbmRsZVVwZGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5ldmVudHMucmVtb3ZlKCk7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBodWIgPSB0aGlzLnByb3BzLmh1YjtcbiAgICBsb2FkU2VydmVycyhodWIpLnRoZW4oZnVuY3Rpb24gKHNlcnZlcnMpIHtcbiAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgIHNlcnZlcnM6IHNlcnZlcnNcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVVcGRhdGUgPSBmdW5jdGlvbiBoYW5kbGVVcGRhdGUodXBkYXRlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHNlcnZlcnMgPSBfcmVmLnNlcnZlcnM7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzZXJ2ZXJzOiBhZGRTZXJ2ZXIoc2VydmVycywgdXBkYXRlKVxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBzZXJ2ZXJzID0gdGhpcy5zdGF0ZS5zZXJ2ZXJzO1xuICAgIHJldHVybiBzZXJ2ZXJzID09IG51bGwgPyBfcmVmMiQzIDogX2pzeChTZXJ2ZXJMaXN0aW5nJDEsIHtcbiAgICAgIHNlcnZlcnM6IHNlcnZlcnNcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ29udGFpbmVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuQ29udGFpbmVyLnByb3BUeXBlcyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHtcbiAgaHViOiBQcm9wVHlwZXMuc3RyaW5nXG59IDoge307XG5Db250YWluZXIuZGVmYXVsdFByb3BzID0ge1xuICBodWI6ICdodHRwczovL2Fubm91bmNlLnUtd2F2ZS5uZXQvJ1xufTtcblxuZXhwb3J0IHsgQ29udGFpbmVyLCBTZXJ2ZXJMaXN0aW5nJDEgYXMgU2VydmVyTGlzdCwgbG9hZFNlcnZlcnMsIGFubm91bmNlRXZlbnRzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11LXdhdmUtcmVhY3Qtc2VydmVyLWxpc3QuZXMuanMubWFwXG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxudmFyIGRlZmF1bHROb2RlUG9zaXRpb24gPSB7XG4gIHN0YXJ0OiB7XG4gICAgbGluZTogMSxcbiAgICBjb2x1bW46IDEsXG4gICAgb2Zmc2V0OiAwXG4gIH0sXG4gIGVuZDoge1xuICAgIGxpbmU6IDEsXG4gICAgY29sdW1uOiAxLFxuICAgIG9mZnNldDogMFxuICB9XG59O1xuXG5mdW5jdGlvbiBhc3RUb1JlYWN0KG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHBhcmVudCA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHZhciBpbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgdmFyIHJlbmRlcmVyID0gb3B0aW9ucy5yZW5kZXJlcnNbbm9kZS50eXBlXTsgLy8gbm9kZXMgZ2VuZXJhdGVkIGJ5IHBsdWdpbnMgbWF5IG5vdCBoYXZlIHBvc2l0aW9uIGRhdGFcbiAgLy8gbXVjaCBvZiB0aGUgY29kZSBhZnRlciB0aGlzIHBvaW50IHdpbGwgYXR0ZW1wdCB0byBhY2Nlc3MgcHJvcGVydGllcyBvZiB0aGUgbm9kZS5wb3NpdGlvblxuICAvLyB0aGlzIHdpbGwgc2V0IHRoZSBub2RlIHBvc2l0aW9uIHRvIHRoZSBwYXJlbnQgbm9kZSdzIHBvc2l0aW9uIHRvIHByZXZlbnQgZXJyb3JzXG5cbiAgaWYgKG5vZGUucG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgIG5vZGUucG9zaXRpb24gPSBwYXJlbnQubm9kZSAmJiBwYXJlbnQubm9kZS5wb3NpdGlvbiB8fCBkZWZhdWx0Tm9kZVBvc2l0aW9uO1xuICB9XG5cbiAgdmFyIHBvcyA9IG5vZGUucG9zaXRpb24uc3RhcnQ7XG4gIHZhciBrZXkgPSBbbm9kZS50eXBlLCBwb3MubGluZSwgcG9zLmNvbHVtbiwgaW5kZXhdLmpvaW4oJy0nKTtcblxuICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHJlbmRlcmVyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlbmRlcmVyIGZvciB0eXBlIGBcIi5jb25jYXQobm9kZS50eXBlLCBcImAgbm90IGRlZmluZWQgb3IgaXMgbm90IHJlbmRlcmFibGVcIikpO1xuICB9XG5cbiAgdmFyIG5vZGVQcm9wcyA9IGdldE5vZGVQcm9wcyhub2RlLCBrZXksIG9wdGlvbnMsIHJlbmRlcmVyLCBwYXJlbnQsIGluZGV4KTtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQocmVuZGVyZXIsIG5vZGVQcm9wcywgbm9kZVByb3BzLmNoaWxkcmVuIHx8IHJlc29sdmVDaGlsZHJlbigpIHx8IHVuZGVmaW5lZCk7XG5cbiAgZnVuY3Rpb24gcmVzb2x2ZUNoaWxkcmVuKCkge1xuICAgIHJldHVybiBub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZE5vZGUsIGkpIHtcbiAgICAgIHJldHVybiBhc3RUb1JlYWN0KGNoaWxkTm9kZSwgb3B0aW9ucywge1xuICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICBwcm9wczogbm9kZVByb3BzXG4gICAgICB9LCBpKTtcbiAgICB9KTtcbiAgfVxufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtcywgY29tcGxleGl0eVxuXG5cbmZ1bmN0aW9uIGdldE5vZGVQcm9wcyhub2RlLCBrZXksIG9wdHMsIHJlbmRlcmVyLCBwYXJlbnQsIGluZGV4KSB7XG4gIHZhciBwcm9wcyA9IHtcbiAgICBrZXk6IGtleVxuICB9O1xuICB2YXIgaXNUYWdSZW5kZXJlciA9IHR5cGVvZiByZW5kZXJlciA9PT0gJ3N0cmluZyc7IC8vIGBzb3VyY2VQb3NgIGlzIHRydWUgaWYgdGhlIHVzZXIgd2FudHMgc291cmNlIGluZm9ybWF0aW9uIChsaW5lL2NvbHVtbiBpbmZvIGZyb20gbWFya2Rvd24gc291cmNlKVxuXG4gIGlmIChvcHRzLnNvdXJjZVBvcyAmJiBub2RlLnBvc2l0aW9uKSB7XG4gICAgcHJvcHNbJ2RhdGEtc291cmNlcG9zJ10gPSBmbGF0dGVuUG9zaXRpb24obm9kZS5wb3NpdGlvbik7XG4gIH1cblxuICBpZiAob3B0cy5yYXdTb3VyY2VQb3MgJiYgIWlzVGFnUmVuZGVyZXIpIHtcbiAgICBwcm9wcy5zb3VyY2VQb3NpdGlvbiA9IG5vZGUucG9zaXRpb247XG4gIH0gLy8gSWYgYGluY2x1ZGVOb2RlSW5kZXhgIGlzIHRydWUsIHBhc3Mgbm9kZSBpbmRleCBpbmZvIHRvIGFsbCBub24tdGFnIHJlbmRlcmVyc1xuXG5cbiAgaWYgKG9wdHMuaW5jbHVkZU5vZGVJbmRleCAmJiBwYXJlbnQubm9kZSAmJiBwYXJlbnQubm9kZS5jaGlsZHJlbiAmJiAhaXNUYWdSZW5kZXJlcikge1xuICAgIHByb3BzLmluZGV4ID0gcGFyZW50Lm5vZGUuY2hpbGRyZW4uaW5kZXhPZihub2RlKTtcbiAgICBwcm9wcy5wYXJlbnRDaGlsZENvdW50ID0gcGFyZW50Lm5vZGUuY2hpbGRyZW4ubGVuZ3RoO1xuICB9XG5cbiAgdmFyIHJlZiA9IG5vZGUuaWRlbnRpZmllciAhPT0gbnVsbCAmJiBub2RlLmlkZW50aWZpZXIgIT09IHVuZGVmaW5lZCA/IG9wdHMuZGVmaW5pdGlvbnNbbm9kZS5pZGVudGlmaWVyXSB8fCB7fSA6IG51bGw7XG5cbiAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICBjYXNlICdyb290JzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBvcHRzLmNsYXNzTmFtZVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RleHQnOlxuICAgICAgcHJvcHMubm9kZUtleSA9IGtleTtcbiAgICAgIHByb3BzLmNoaWxkcmVuID0gbm9kZS52YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaGVhZGluZyc6XG4gICAgICBwcm9wcy5sZXZlbCA9IG5vZGUuZGVwdGg7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpc3QnOlxuICAgICAgcHJvcHMuc3RhcnQgPSBub2RlLnN0YXJ0O1xuICAgICAgcHJvcHMub3JkZXJlZCA9IG5vZGUub3JkZXJlZDtcbiAgICAgIHByb3BzLnRpZ2h0ID0gIW5vZGUubG9vc2U7XG4gICAgICBwcm9wcy5kZXB0aCA9IG5vZGUuZGVwdGg7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpc3RJdGVtJzpcbiAgICAgIHByb3BzLmNoZWNrZWQgPSBub2RlLmNoZWNrZWQ7XG4gICAgICBwcm9wcy50aWdodCA9ICFub2RlLmxvb3NlO1xuICAgICAgcHJvcHMub3JkZXJlZCA9IG5vZGUub3JkZXJlZDtcbiAgICAgIHByb3BzLmluZGV4ID0gbm9kZS5pbmRleDtcbiAgICAgIHByb3BzLmNoaWxkcmVuID0gZ2V0TGlzdEl0ZW1DaGlsZHJlbihub2RlLCBwYXJlbnQpLm1hcChmdW5jdGlvbiAoY2hpbGROb2RlLCBpKSB7XG4gICAgICAgIHJldHVybiBhc3RUb1JlYWN0KGNoaWxkTm9kZSwgb3B0cywge1xuICAgICAgICAgIG5vZGU6IG5vZGUsXG4gICAgICAgICAgcHJvcHM6IHByb3BzXG4gICAgICAgIH0sIGkpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2RlZmluaXRpb24nOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBpZGVudGlmaWVyOiBub2RlLmlkZW50aWZpZXIsXG4gICAgICAgIHRpdGxlOiBub2RlLnRpdGxlLFxuICAgICAgICB1cmw6IG5vZGUudXJsXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnY29kZSc6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIGxhbmd1YWdlOiBub2RlLmxhbmcgJiYgbm9kZS5sYW5nLnNwbGl0KC9cXHMvLCAxKVswXVxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2lubGluZUNvZGUnOlxuICAgICAgcHJvcHMuY2hpbGRyZW4gPSBub2RlLnZhbHVlO1xuICAgICAgcHJvcHMuaW5saW5lID0gdHJ1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnbGluayc6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIHRpdGxlOiBub2RlLnRpdGxlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgdGFyZ2V0OiB0eXBlb2Ygb3B0cy5saW5rVGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5saW5rVGFyZ2V0KG5vZGUudXJsLCBub2RlLmNoaWxkcmVuLCBub2RlLnRpdGxlKSA6IG9wdHMubGlua1RhcmdldCxcbiAgICAgICAgaHJlZjogb3B0cy50cmFuc2Zvcm1MaW5rVXJpID8gb3B0cy50cmFuc2Zvcm1MaW5rVXJpKG5vZGUudXJsLCBub2RlLmNoaWxkcmVuLCBub2RlLnRpdGxlKSA6IG5vZGUudXJsXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaW1hZ2UnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywge1xuICAgICAgICBhbHQ6IG5vZGUuYWx0IHx8IHVuZGVmaW5lZCxcbiAgICAgICAgdGl0bGU6IG5vZGUudGl0bGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBzcmM6IG9wdHMudHJhbnNmb3JtSW1hZ2VVcmkgPyBvcHRzLnRyYW5zZm9ybUltYWdlVXJpKG5vZGUudXJsLCBub2RlLmNoaWxkcmVuLCBub2RlLnRpdGxlLCBub2RlLmFsdCkgOiBub2RlLnVybFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2xpbmtSZWZlcmVuY2UnOlxuICAgICAgYXNzaWduRGVmaW5lZChwcm9wcywgeHRlbmQocmVmLCB7XG4gICAgICAgIGhyZWY6IG9wdHMudHJhbnNmb3JtTGlua1VyaSA/IG9wdHMudHJhbnNmb3JtTGlua1VyaShyZWYuaHJlZikgOiByZWYuaHJlZlxuICAgICAgfSkpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdpbWFnZVJlZmVyZW5jZSc6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB7XG4gICAgICAgIHNyYzogb3B0cy50cmFuc2Zvcm1JbWFnZVVyaSAmJiByZWYuaHJlZiA/IG9wdHMudHJhbnNmb3JtSW1hZ2VVcmkocmVmLmhyZWYsIG5vZGUuY2hpbGRyZW4sIHJlZi50aXRsZSwgbm9kZS5hbHQpIDogcmVmLmhyZWYsXG4gICAgICAgIHRpdGxlOiByZWYudGl0bGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBhbHQ6IG5vZGUuYWx0IHx8IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3RhYmxlJzpcbiAgICBjYXNlICd0YWJsZUhlYWQnOlxuICAgIGNhc2UgJ3RhYmxlQm9keSc6XG4gICAgICBwcm9wcy5jb2x1bW5BbGlnbm1lbnQgPSBub2RlLmFsaWduO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICd0YWJsZVJvdyc6XG4gICAgICBwcm9wcy5pc0hlYWRlciA9IHBhcmVudC5ub2RlLnR5cGUgPT09ICd0YWJsZUhlYWQnO1xuICAgICAgcHJvcHMuY29sdW1uQWxpZ25tZW50ID0gcGFyZW50LnByb3BzLmNvbHVtbkFsaWdubWVudDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndGFibGVDZWxsJzpcbiAgICAgIGFzc2lnbkRlZmluZWQocHJvcHMsIHtcbiAgICAgICAgaXNIZWFkZXI6IHBhcmVudC5wcm9wcy5pc0hlYWRlcixcbiAgICAgICAgYWxpZ246IHBhcmVudC5wcm9wcy5jb2x1bW5BbGlnbm1lbnRbaW5kZXhdXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndmlydHVhbEh0bWwnOlxuICAgICAgcHJvcHMudGFnID0gbm9kZS50YWc7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2h0bWwnOlxuICAgICAgLy8gQHRvZG8gZmluZCBhIGJldHRlciB3YXkgdGhhbiB0aGlzXG4gICAgICBwcm9wcy5pc0Jsb2NrID0gbm9kZS5wb3NpdGlvbi5zdGFydC5saW5lICE9PSBub2RlLnBvc2l0aW9uLmVuZC5saW5lO1xuICAgICAgcHJvcHMuZXNjYXBlSHRtbCA9IG9wdHMuZXNjYXBlSHRtbDtcbiAgICAgIHByb3BzLnNraXBIdG1sID0gb3B0cy5za2lwSHRtbDtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncGFyc2VkSHRtbCc6XG4gICAgICB7XG4gICAgICAgIHZhciBwYXJzZWRDaGlsZHJlbjtcblxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgICAgIHBhcnNlZENoaWxkcmVuID0gbm9kZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXN0VG9SZWFjdChjaGlsZCwgb3B0cywge1xuICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICBwcm9wczogcHJvcHNcbiAgICAgICAgICAgIH0sIGkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvcHMuZXNjYXBlSHRtbCA9IG9wdHMuZXNjYXBlSHRtbDtcbiAgICAgICAgcHJvcHMuc2tpcEh0bWwgPSBvcHRzLnNraXBIdG1sO1xuICAgICAgICBwcm9wcy5lbGVtZW50ID0gbWVyZ2VOb2RlQ2hpbGRyZW4obm9kZSwgcGFyc2VkQ2hpbGRyZW4pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICBhc3NpZ25EZWZpbmVkKHByb3BzLCB4dGVuZChub2RlLCB7XG4gICAgICAgIHR5cGU6IHVuZGVmaW5lZCxcbiAgICAgICAgcG9zaXRpb246IHVuZGVmaW5lZCxcbiAgICAgICAgY2hpbGRyZW46IHVuZGVmaW5lZFxuICAgICAgfSkpO1xuICB9XG5cbiAgaWYgKCFpc1RhZ1JlbmRlcmVyICYmIG5vZGUudmFsdWUpIHtcbiAgICBwcm9wcy52YWx1ZSA9IG5vZGUudmFsdWU7XG4gIH1cblxuICByZXR1cm4gcHJvcHM7XG59XG5cbmZ1bmN0aW9uIGFzc2lnbkRlZmluZWQodGFyZ2V0LCBhdHRycykge1xuICBmb3IgKHZhciBrZXkgaW4gYXR0cnMpIHtcbiAgICBpZiAodHlwZW9mIGF0dHJzW2tleV0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IGF0dHJzW2tleV07XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTm9kZUNoaWxkcmVuKG5vZGUsIHBhcnNlZENoaWxkcmVuKSB7XG4gIHZhciBlbCA9IG5vZGUuZWxlbWVudDtcblxuICBpZiAoQXJyYXkuaXNBcnJheShlbCkpIHtcbiAgICB2YXIgRnJhZ21lbnQgPSBSZWFjdC5GcmFnbWVudCB8fCAnZGl2JztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGcmFnbWVudCwgbnVsbCwgZWwpO1xuICB9XG5cbiAgaWYgKGVsLnByb3BzLmNoaWxkcmVuIHx8IHBhcnNlZENoaWxkcmVuKSB7XG4gICAgdmFyIGNoaWxkcmVuID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShlbC5wcm9wcy5jaGlsZHJlbikuY29uY2F0KHBhcnNlZENoaWxkcmVuKTtcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsLCBudWxsLCBjaGlsZHJlbik7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsLCBudWxsKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlblBvc2l0aW9uKHBvcykge1xuICByZXR1cm4gW3Bvcy5zdGFydC5saW5lLCAnOicsIHBvcy5zdGFydC5jb2x1bW4sICctJywgcG9zLmVuZC5saW5lLCAnOicsIHBvcy5lbmQuY29sdW1uXS5tYXAoU3RyaW5nKS5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0TGlzdEl0ZW1DaGlsZHJlbihub2RlLCBwYXJlbnQpIHtcbiAgaWYgKG5vZGUubG9vc2UpIHtcbiAgICByZXR1cm4gbm9kZS5jaGlsZHJlbjtcbiAgfVxuXG4gIGlmIChwYXJlbnQubm9kZSAmJiBub2RlLmluZGV4ID4gMCAmJiBwYXJlbnQubm9kZS5jaGlsZHJlbltub2RlLmluZGV4IC0gMV0ubG9vc2UpIHtcbiAgICByZXR1cm4gbm9kZS5jaGlsZHJlbjtcbiAgfVxuXG4gIHJldHVybiB1bndyYXBQYXJhZ3JhcGhzKG5vZGUpO1xufVxuXG5mdW5jdGlvbiB1bndyYXBQYXJhZ3JhcGhzKG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUuY2hpbGRyZW4ucmVkdWNlKGZ1bmN0aW9uIChhcnJheSwgY2hpbGQpIHtcbiAgICByZXR1cm4gYXJyYXkuY29uY2F0KGNoaWxkLnR5cGUgPT09ICdwYXJhZ3JhcGgnID8gY2hpbGQuY2hpbGRyZW4gfHwgW10gOiBbY2hpbGRdKTtcbiAgfSwgW10pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzdFRvUmVhY3Q7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGdldERlZmluaXRpb25zKG5vZGUpIHtcbiAgdmFyIGRlZnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICByZXR1cm4gKG5vZGUuY2hpbGRyZW4gfHwgW10pLnJlZHVjZShmdW5jdGlvbiAoZGVmaW5pdGlvbnMsIGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLnR5cGUgPT09ICdkZWZpbml0aW9uJykge1xuICAgICAgZGVmaW5pdGlvbnNbY2hpbGQuaWRlbnRpZmllcl0gPSB7XG4gICAgICAgIGhyZWY6IGNoaWxkLnVybCxcbiAgICAgICAgdGl0bGU6IGNoaWxkLnRpdGxlXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBnZXREZWZpbml0aW9ucyhjaGlsZCwgZGVmaW5pdGlvbnMpO1xuICB9LCBkZWZzKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKTtcblxuZXhwb3J0cy5vZlR5cGUgPSBmdW5jdGlvbiAodHlwZXMsIG1vZGUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgdHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgcmV0dXJuIHZpc2l0KG5vZGUsIHR5cGUsIGRpc2FsbG93LCB0cnVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaXNhbGxvdyhub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdW50YW5nbGUobm9kZSwgaW5kZXgsIHBhcmVudCwgbW9kZSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLmlmTm90TWF0Y2ggPSBmdW5jdGlvbiAoYWxsb3dOb2RlLCBtb2RlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAobm9kZSkge1xuICAgIHZpc2l0KG5vZGUsIGRpc2FsbG93LCB0cnVlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfTtcblxuICBmdW5jdGlvbiBkaXNhbGxvdyhub2RlLCBpbmRleCwgcGFyZW50KSB7XG4gICAgaWYgKHBhcmVudCAmJiAhYWxsb3dOb2RlKG5vZGUsIGluZGV4LCBwYXJlbnQpKSB7XG4gICAgICB1bnRhbmdsZShub2RlLCBpbmRleCwgcGFyZW50LCBtb2RlKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHVudGFuZ2xlKG5vZGUsIGluZGV4LCBwYXJlbnQsIG1vZGUpIHtcbiAgaWYgKG1vZGUgPT09ICdyZW1vdmUnKSB7XG4gICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gIH0gZWxzZSBpZiAobW9kZSA9PT0gJ3Vud3JhcCcpIHtcbiAgICB2YXIgYXJncyA9IFtpbmRleCwgMV07XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbikge1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KG5vZGUuY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIEFycmF5LnByb3RvdHlwZS5zcGxpY2UuYXBwbHkocGFyZW50LmNoaWxkcmVuLCBhcmdzKTtcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIE5haXZlLCBzaW1wbGUgcGx1Z2luIHRvIG1hdGNoIGlubGluZSBub2RlcyB3aXRob3V0IGF0dHJpYnV0ZXNcbiAqIFRoaXMgYWxsb3dzIHNheSA8c3Ryb25nPmZvbzwvc3Ryb25nPiwgYnV0IG5vdCA8c3Ryb25nIGNsYXNzPVwidmVyeVwiPmZvbzwvc3Ryb25nPlxuICogRm9yIHByb3BlciBIVE1MIHN1cHBvcnQsIHlvdSdsbCB3YW50IGEgZGlmZmVyZW50IHBsdWdpblxuICoqL1xudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdCcpO1xuXG52YXIgdHlwZSA9ICd2aXJ0dWFsSHRtbCc7XG52YXIgc2VsZkNsb3NpbmdSZSA9IC9ePChhcmVhfGJhc2V8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxrZXlnZW58bGlua3xtZXRhfHBhcmFtfHNvdXJjZXx0cmFja3x3YnIpXFxzKlxcLz8+JC9pO1xudmFyIHNpbXBsZVRhZ1JlID0gL148KFxcLz8pKFthLXpdKylcXHMqPiQvO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0cmVlKSB7XG4gIHZhciBvcGVuO1xuICB2YXIgY3VycmVudFBhcmVudDtcbiAgdmlzaXQodHJlZSwgJ2h0bWwnLCBmdW5jdGlvbiAobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIGlmIChjdXJyZW50UGFyZW50ICE9PSBwYXJlbnQpIHtcbiAgICAgIG9wZW4gPSBbXTtcbiAgICAgIGN1cnJlbnRQYXJlbnQgPSBwYXJlbnQ7XG4gICAgfVxuXG4gICAgdmFyIHNlbGZDbG9zaW5nID0gZ2V0U2VsZkNsb3Npbmcobm9kZSk7XG5cbiAgICBpZiAoc2VsZkNsb3NpbmcpIHtcbiAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEsIHtcbiAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgdGFnOiBzZWxmQ2xvc2luZyxcbiAgICAgICAgcG9zaXRpb246IG5vZGUucG9zaXRpb25cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnQgPSBnZXRTaW1wbGVUYWcobm9kZSwgcGFyZW50KTtcblxuICAgIGlmICghY3VycmVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoaW5nID0gZmluZEFuZFB1bGwob3BlbiwgY3VycmVudC50YWcpO1xuXG4gICAgaWYgKG1hdGNoaW5nKSB7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCB2aXJ0dWFsKGN1cnJlbnQsIG1hdGNoaW5nLCBwYXJlbnQpKTtcbiAgICB9IGVsc2UgaWYgKCFjdXJyZW50Lm9wZW5pbmcpIHtcbiAgICAgIG9wZW4ucHVzaChjdXJyZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSwgdHJ1ZSAvLyBJdGVyYXRlIGluIHJldmVyc2VcbiAgKTtcbiAgcmV0dXJuIHRyZWU7XG59O1xuXG5mdW5jdGlvbiBmaW5kQW5kUHVsbChvcGVuLCBtYXRjaGluZ1RhZykge1xuICB2YXIgaSA9IG9wZW4ubGVuZ3RoO1xuXG4gIHdoaWxlIChpLS0pIHtcbiAgICBpZiAob3BlbltpXS50YWcgPT09IG1hdGNoaW5nVGFnKSB7XG4gICAgICByZXR1cm4gb3Blbi5zcGxpY2UoaSwgMSlbMF07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRTaW1wbGVUYWcobm9kZSwgcGFyZW50KSB7XG4gIHZhciBtYXRjaCA9IG5vZGUudmFsdWUubWF0Y2goc2ltcGxlVGFnUmUpO1xuICByZXR1cm4gbWF0Y2ggPyB7XG4gICAgdGFnOiBtYXRjaFsyXSxcbiAgICBvcGVuaW5nOiAhbWF0Y2hbMV0sXG4gICAgbm9kZTogbm9kZVxuICB9IDogZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFNlbGZDbG9zaW5nKG5vZGUpIHtcbiAgdmFyIG1hdGNoID0gbm9kZS52YWx1ZS5tYXRjaChzZWxmQ2xvc2luZ1JlKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdmlydHVhbChmcm9tTm9kZSwgdG9Ob2RlLCBwYXJlbnQpIHtcbiAgdmFyIGZyb21JbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGZyb21Ob2RlLm5vZGUpO1xuICB2YXIgdG9JbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRvTm9kZS5ub2RlKTtcbiAgdmFyIGV4dHJhY3RlZCA9IHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoZnJvbUluZGV4LCB0b0luZGV4IC0gZnJvbUluZGV4ICsgMSk7XG4gIHZhciBjaGlsZHJlbiA9IGV4dHJhY3RlZC5zbGljZSgxLCAtMSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBjaGlsZHJlbjogY2hpbGRyZW4sXG4gICAgdGFnOiBmcm9tTm9kZS50YWcsXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHN0YXJ0OiBmcm9tTm9kZS5ub2RlLnBvc2l0aW9uLnN0YXJ0LFxuICAgICAgZW5kOiB0b05vZGUubm9kZS5wb3NpdGlvbi5lbmQsXG4gICAgICBpbmRlbnQ6IFtdXG4gICAgfVxuICB9O1xufSIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaXRlcikgPT09IFwiW29iamVjdCBBcmd1bWVudHNdXCIpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9IH1cblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIHVuaWZpZWQgPSByZXF1aXJlKCd1bmlmaWVkJyk7XG5cbnZhciBwYXJzZSA9IHJlcXVpcmUoJ3JlbWFyay1wYXJzZScpO1xuXG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpO1xuXG52YXIgYWRkTGlzdE1ldGFkYXRhID0gcmVxdWlyZSgnbWRhc3QtYWRkLWxpc3QtbWV0YWRhdGEnKTtcblxudmFyIG5haXZlSHRtbCA9IHJlcXVpcmUoJy4vcGx1Z2lucy9uYWl2ZS1odG1sJyk7XG5cbnZhciBkaXNhbGxvd05vZGUgPSByZXF1aXJlKCcuL3BsdWdpbnMvZGlzYWxsb3ctbm9kZScpO1xuXG52YXIgYXN0VG9SZWFjdCA9IHJlcXVpcmUoJy4vYXN0LXRvLXJlYWN0Jyk7XG5cbnZhciB3cmFwVGFibGVSb3dzID0gcmVxdWlyZSgnLi93cmFwLXRhYmxlLXJvd3MnKTtcblxudmFyIGdldERlZmluaXRpb25zID0gcmVxdWlyZSgnLi9nZXQtZGVmaW5pdGlvbnMnKTtcblxudmFyIHVyaVRyYW5zZm9ybWVyID0gcmVxdWlyZSgnLi91cmktdHJhbnNmb3JtZXInKTtcblxudmFyIGRlZmF1bHRSZW5kZXJlcnMgPSByZXF1aXJlKCcuL3JlbmRlcmVycycpO1xuXG52YXIgc3ltYm9scyA9IHJlcXVpcmUoJy4vc3ltYm9scycpO1xuXG52YXIgYWxsVHlwZXMgPSBPYmplY3Qua2V5cyhkZWZhdWx0UmVuZGVyZXJzKTtcblxudmFyIFJlYWN0TWFya2Rvd24gPSBmdW5jdGlvbiBSZWFjdE1hcmtkb3duKHByb3BzKSB7XG4gIHZhciBzcmMgPSBwcm9wcy5zb3VyY2UgfHwgcHJvcHMuY2hpbGRyZW4gfHwgJyc7XG4gIHZhciBwYXJzZXJPcHRpb25zID0gcHJvcHMucGFyc2VyT3B0aW9ucztcblxuICBpZiAocHJvcHMuYWxsb3dlZFR5cGVzICYmIHByb3BzLmRpc2FsbG93ZWRUeXBlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignT25seSBvbmUgb2YgYGFsbG93ZWRUeXBlc2AgYW5kIGBkaXNhbGxvd2VkVHlwZXNgIHNob3VsZCBiZSBkZWZpbmVkJyk7XG4gIH1cblxuICB2YXIgcmVuZGVyZXJzID0geHRlbmQoZGVmYXVsdFJlbmRlcmVycywgcHJvcHMucmVuZGVyZXJzKTtcbiAgdmFyIHBsdWdpbnMgPSBbW3BhcnNlLCBwYXJzZXJPcHRpb25zXV0uY29uY2F0KHByb3BzLnBsdWdpbnMgfHwgW10pO1xuICB2YXIgcGFyc2VyID0gcGx1Z2lucy5yZWR1Y2UoYXBwbHlQYXJzZXJQbHVnaW4sIHVuaWZpZWQoKSk7XG4gIHZhciByYXdBc3QgPSBwYXJzZXIucGFyc2Uoc3JjKTtcbiAgdmFyIHJlbmRlclByb3BzID0geHRlbmQocHJvcHMsIHtcbiAgICByZW5kZXJlcnM6IHJlbmRlcmVycyxcbiAgICBkZWZpbml0aW9uczogZ2V0RGVmaW5pdGlvbnMocmF3QXN0KVxuICB9KTtcbiAgdmFyIGFzdFBsdWdpbnMgPSBkZXRlcm1pbmVBc3RQbHVnaW5zKHByb3BzKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXN5bmNcblxuICB2YXIgdHJhbnNmb3JtZWRBc3QgPSBwYXJzZXIucnVuU3luYyhyYXdBc3QpO1xuICB2YXIgYXN0ID0gYXN0UGx1Z2lucy5yZWR1Y2UoZnVuY3Rpb24gKG5vZGUsIHBsdWdpbikge1xuICAgIHJldHVybiBwbHVnaW4obm9kZSwgcmVuZGVyUHJvcHMpO1xuICB9LCB0cmFuc2Zvcm1lZEFzdCk7XG4gIHJldHVybiBhc3RUb1JlYWN0KGFzdCwgcmVuZGVyUHJvcHMpO1xufTtcblxuZnVuY3Rpb24gYXBwbHlQYXJzZXJQbHVnaW4ocGFyc2VyLCBwbHVnaW4pIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGx1Z2luKSA/IHBhcnNlci51c2UuYXBwbHkocGFyc2VyLCBfdG9Db25zdW1hYmxlQXJyYXkocGx1Z2luKSkgOiBwYXJzZXIudXNlKHBsdWdpbik7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZUFzdFBsdWdpbnMocHJvcHMpIHtcbiAgdmFyIHBsdWdpbnMgPSBbd3JhcFRhYmxlUm93cywgYWRkTGlzdE1ldGFkYXRhKCldO1xuICB2YXIgZGlzYWxsb3dlZFR5cGVzID0gcHJvcHMuZGlzYWxsb3dlZFR5cGVzO1xuXG4gIGlmIChwcm9wcy5hbGxvd2VkVHlwZXMpIHtcbiAgICBkaXNhbGxvd2VkVHlwZXMgPSBhbGxUeXBlcy5maWx0ZXIoZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHJldHVybiB0eXBlICE9PSAncm9vdCcgJiYgcHJvcHMuYWxsb3dlZFR5cGVzLmluZGV4T2YodHlwZSkgPT09IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIHJlbW92YWxNZXRob2QgPSBwcm9wcy51bndyYXBEaXNhbGxvd2VkID8gJ3Vud3JhcCcgOiAncmVtb3ZlJztcblxuICBpZiAoZGlzYWxsb3dlZFR5cGVzICYmIGRpc2FsbG93ZWRUeXBlcy5sZW5ndGggPiAwKSB7XG4gICAgcGx1Z2lucy5wdXNoKGRpc2FsbG93Tm9kZS5vZlR5cGUoZGlzYWxsb3dlZFR5cGVzLCByZW1vdmFsTWV0aG9kKSk7XG4gIH1cblxuICBpZiAocHJvcHMuYWxsb3dOb2RlKSB7XG4gICAgcGx1Z2lucy5wdXNoKGRpc2FsbG93Tm9kZS5pZk5vdE1hdGNoKHByb3BzLmFsbG93Tm9kZSwgcmVtb3ZhbE1ldGhvZCkpO1xuICB9XG5cbiAgdmFyIHJlbmRlckh0bWwgPSAhcHJvcHMuZXNjYXBlSHRtbCAmJiAhcHJvcHMuc2tpcEh0bWw7XG4gIHZhciBoYXNIdG1sUGFyc2VyID0gKHByb3BzLmFzdFBsdWdpbnMgfHwgW10pLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICB2YXIgcGx1Z2luID0gQXJyYXkuaXNBcnJheShpdGVtKSA/IGl0ZW1bMF0gOiBpdGVtO1xuICAgIHJldHVybiBwbHVnaW4uaWRlbnRpdHkgPT09IHN5bWJvbHMuSHRtbFBhcnNlcjtcbiAgfSk7XG5cbiAgaWYgKHJlbmRlckh0bWwgJiYgIWhhc0h0bWxQYXJzZXIpIHtcbiAgICBwbHVnaW5zLnB1c2gobmFpdmVIdG1sKTtcbiAgfVxuXG4gIHJldHVybiBwcm9wcy5hc3RQbHVnaW5zID8gcGx1Z2lucy5jb25jYXQocHJvcHMuYXN0UGx1Z2lucykgOiBwbHVnaW5zO1xufVxuXG5SZWFjdE1hcmtkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVuZGVyZXJzOiB7fSxcbiAgZXNjYXBlSHRtbDogdHJ1ZSxcbiAgc2tpcEh0bWw6IGZhbHNlLFxuICBzb3VyY2VQb3M6IGZhbHNlLFxuICByYXdTb3VyY2VQb3M6IGZhbHNlLFxuICB0cmFuc2Zvcm1MaW5rVXJpOiB1cmlUcmFuc2Zvcm1lcixcbiAgYXN0UGx1Z2luczogW10sXG4gIHBsdWdpbnM6IFtdLFxuICBwYXJzZXJPcHRpb25zOiB7fVxufTtcblJlYWN0TWFya2Rvd24ucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gIHJhd1NvdXJjZVBvczogUHJvcFR5cGVzLmJvb2wsXG4gIGVzY2FwZUh0bWw6IFByb3BUeXBlcy5ib29sLFxuICBza2lwSHRtbDogUHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93Tm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKGFsbFR5cGVzKSksXG4gIGRpc2FsbG93ZWRUeXBlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9uZU9mKGFsbFR5cGVzKSksXG4gIHRyYW5zZm9ybUxpbmtVcmk6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuYm9vbF0pLFxuICBsaW5rVGFyZ2V0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLnN0cmluZ10pLFxuICB0cmFuc2Zvcm1JbWFnZVVyaTogUHJvcFR5cGVzLmZ1bmMsXG4gIGFzdFBsdWdpbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5mdW5jKSxcbiAgdW53cmFwRGlzYWxsb3dlZDogUHJvcFR5cGVzLmJvb2wsXG4gIHJlbmRlcmVyczogUHJvcFR5cGVzLm9iamVjdCxcbiAgcGx1Z2luczogUHJvcFR5cGVzLmFycmF5LFxuICBwYXJzZXJPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0XG59O1xuUmVhY3RNYXJrZG93bi50eXBlcyA9IGFsbFR5cGVzO1xuUmVhY3RNYXJrZG93bi5yZW5kZXJlcnMgPSBkZWZhdWx0UmVuZGVyZXJzO1xuUmVhY3RNYXJrZG93bi51cmlUcmFuc2Zvcm1lciA9IHVyaVRyYW5zZm9ybWVyO1xubW9kdWxlLmV4cG9ydHMgPSBSZWFjdE1hcmtkb3duOyIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMsIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIHN1cHBvcnRzU3RyaW5nUmVuZGVyID0gcGFyc2VJbnQoKFJlYWN0LnZlcnNpb24gfHwgJzE2Jykuc2xpY2UoMCwgMiksIDEwKSA+PSAxNjtcbnZhciBjcmVhdGVFbGVtZW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBicmVhazogJ2JyJyxcbiAgcGFyYWdyYXBoOiAncCcsXG4gIGVtcGhhc2lzOiAnZW0nLFxuICBzdHJvbmc6ICdzdHJvbmcnLFxuICB0aGVtYXRpY0JyZWFrOiAnaHInLFxuICBibG9ja3F1b3RlOiAnYmxvY2txdW90ZScsXG4gIGRlbGV0ZTogJ2RlbCcsXG4gIGxpbms6ICdhJyxcbiAgaW1hZ2U6ICdpbWcnLFxuICBsaW5rUmVmZXJlbmNlOiAnYScsXG4gIGltYWdlUmVmZXJlbmNlOiAnaW1nJyxcbiAgdGFibGU6IFNpbXBsZVJlbmRlcmVyLmJpbmQobnVsbCwgJ3RhYmxlJyksXG4gIHRhYmxlSGVhZDogU2ltcGxlUmVuZGVyZXIuYmluZChudWxsLCAndGhlYWQnKSxcbiAgdGFibGVCb2R5OiBTaW1wbGVSZW5kZXJlci5iaW5kKG51bGwsICd0Ym9keScpLFxuICB0YWJsZVJvdzogU2ltcGxlUmVuZGVyZXIuYmluZChudWxsLCAndHInKSxcbiAgdGFibGVDZWxsOiBUYWJsZUNlbGwsXG4gIHJvb3Q6IFJvb3QsXG4gIHRleHQ6IFRleHRSZW5kZXJlcixcbiAgbGlzdDogTGlzdCxcbiAgbGlzdEl0ZW06IExpc3RJdGVtLFxuICBkZWZpbml0aW9uOiBOdWxsUmVuZGVyZXIsXG4gIGhlYWRpbmc6IEhlYWRpbmcsXG4gIGlubGluZUNvZGU6IElubGluZUNvZGUsXG4gIGNvZGU6IENvZGVCbG9jayxcbiAgaHRtbDogSHRtbCxcbiAgdmlydHVhbEh0bWw6IFZpcnR1YWxIdG1sLFxuICBwYXJzZWRIdG1sOiBQYXJzZWRIdG1sXG59O1xuXG5mdW5jdGlvbiBUZXh0UmVuZGVyZXIocHJvcHMpIHtcbiAgcmV0dXJuIHN1cHBvcnRzU3RyaW5nUmVuZGVyID8gcHJvcHMuY2hpbGRyZW4gOiBjcmVhdGVFbGVtZW50KCdzcGFuJywgbnVsbCwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBSb290KHByb3BzKSB7XG4gIHZhciB1c2VGcmFnbWVudCA9ICFwcm9wcy5jbGFzc05hbWU7XG4gIHZhciByb290ID0gdXNlRnJhZ21lbnQgPyBSZWFjdC5GcmFnbWVudCB8fCAnZGl2JyA6ICdkaXYnO1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChyb290LCB1c2VGcmFnbWVudCA/IG51bGwgOiBwcm9wcywgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBTaW1wbGVSZW5kZXJlcih0YWcsIHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHRhZywgZ2V0Q29yZVByb3BzKHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBUYWJsZUNlbGwocHJvcHMpIHtcbiAgdmFyIHN0eWxlID0gcHJvcHMuYWxpZ24gPyB7XG4gICAgdGV4dEFsaWduOiBwcm9wcy5hbGlnblxuICB9IDogdW5kZWZpbmVkO1xuICB2YXIgY29yZVByb3BzID0gZ2V0Q29yZVByb3BzKHByb3BzKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocHJvcHMuaXNIZWFkZXIgPyAndGgnIDogJ3RkJywgc3R5bGUgPyB4dGVuZCh7XG4gICAgc3R5bGU6IHN0eWxlXG4gIH0sIGNvcmVQcm9wcykgOiBjb3JlUHJvcHMsIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gSGVhZGluZyhwcm9wcykge1xuICByZXR1cm4gY3JlYXRlRWxlbWVudChcImhcIi5jb25jYXQocHJvcHMubGV2ZWwpLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIExpc3QocHJvcHMpIHtcbiAgdmFyIGF0dHJzID0gZ2V0Q29yZVByb3BzKHByb3BzKTtcblxuICBpZiAocHJvcHMuc3RhcnQgIT09IG51bGwgJiYgcHJvcHMuc3RhcnQgIT09IDEgJiYgcHJvcHMuc3RhcnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGF0dHJzLnN0YXJ0ID0gcHJvcHMuc3RhcnQudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHByb3BzLm9yZGVyZWQgPyAnb2wnIDogJ3VsJywgYXR0cnMsIHByb3BzLmNoaWxkcmVuKTtcbn1cblxuZnVuY3Rpb24gTGlzdEl0ZW0ocHJvcHMpIHtcbiAgdmFyIGNoZWNrYm94ID0gbnVsbDtcblxuICBpZiAocHJvcHMuY2hlY2tlZCAhPT0gbnVsbCAmJiBwcm9wcy5jaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQ7XG4gICAgY2hlY2tib3ggPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHtcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgcmVhZE9ubHk6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIGdldENvcmVQcm9wcyhwcm9wcyksIGNoZWNrYm94LCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIENvZGVCbG9jayhwcm9wcykge1xuICB2YXIgY2xhc3NOYW1lID0gcHJvcHMubGFuZ3VhZ2UgJiYgXCJsYW5ndWFnZS1cIi5jb25jYXQocHJvcHMubGFuZ3VhZ2UpO1xuICB2YXIgY29kZSA9IGNyZWF0ZUVsZW1lbnQoJ2NvZGUnLCBjbGFzc05hbWUgPyB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVcbiAgfSA6IG51bGwsIHByb3BzLnZhbHVlKTtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3ByZScsIGdldENvcmVQcm9wcyhwcm9wcyksIGNvZGUpO1xufVxuXG5mdW5jdGlvbiBJbmxpbmVDb2RlKHByb3BzKSB7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KCdjb2RlJywgZ2V0Q29yZVByb3BzKHByb3BzKSwgcHJvcHMuY2hpbGRyZW4pO1xufVxuXG5mdW5jdGlvbiBIdG1sKHByb3BzKSB7XG4gIGlmIChwcm9wcy5za2lwSHRtbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIHRhZyA9IHByb3BzLmlzQmxvY2sgPyAnZGl2JyA6ICdzcGFuJztcblxuICBpZiAocHJvcHMuZXNjYXBlSHRtbCkge1xuICAgIHZhciBjb21wID0gUmVhY3QuRnJhZ21lbnQgfHwgdGFnO1xuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KGNvbXAsIG51bGwsIHByb3BzLnZhbHVlKTtcbiAgfVxuXG4gIHZhciBub2RlUHJvcHMgPSB7XG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgIF9faHRtbDogcHJvcHMudmFsdWVcbiAgICB9XG4gIH07XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KHRhZywgbm9kZVByb3BzKTtcbn1cblxuZnVuY3Rpb24gUGFyc2VkSHRtbChwcm9wcykge1xuICByZXR1cm4gcHJvcHNbJ2RhdGEtc291cmNlcG9zJ10gPyBSZWFjdC5jbG9uZUVsZW1lbnQocHJvcHMuZWxlbWVudCwge1xuICAgICdkYXRhLXNvdXJjZXBvcyc6IHByb3BzWydkYXRhLXNvdXJjZXBvcyddXG4gIH0pIDogcHJvcHMuZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gVmlydHVhbEh0bWwocHJvcHMpIHtcbiAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQocHJvcHMudGFnLCBnZXRDb3JlUHJvcHMocHJvcHMpLCBwcm9wcy5jaGlsZHJlbik7XG59XG5cbmZ1bmN0aW9uIE51bGxSZW5kZXJlcigpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldENvcmVQcm9wcyhwcm9wcykge1xuICByZXR1cm4gcHJvcHNbJ2RhdGEtc291cmNlcG9zJ10gPyB7XG4gICAgJ2RhdGEtc291cmNlcG9zJzogcHJvcHNbJ2RhdGEtc291cmNlcG9zJ11cbiAgfSA6IHt9O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgSHRtbFBhcnNlciA9ICdfX1JNRF9IVE1MX1BBUlNFUl9fJztcbmV4cG9ydHMuSHRtbFBhcnNlciA9IHR5cGVvZiBTeW1ib2wgPT09ICd1bmRlZmluZWQnID8gSHRtbFBhcnNlciA6IFN5bWJvbChIdG1sUGFyc2VyKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByb3RvY29scyA9IFsnaHR0cCcsICdodHRwcycsICdtYWlsdG8nLCAndGVsJ107XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdXJpVHJhbnNmb3JtZXIodXJpKSB7XG4gIHZhciB1cmwgPSAodXJpIHx8ICcnKS50cmltKCk7XG4gIHZhciBmaXJzdCA9IHVybC5jaGFyQXQoMCk7XG5cbiAgaWYgKGZpcnN0ID09PSAnIycgfHwgZmlyc3QgPT09ICcvJykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgY29sb24gPSB1cmwuaW5kZXhPZignOicpO1xuXG4gIGlmIChjb2xvbiA9PT0gLTEpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9IHByb3RvY29scy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IC0xO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHByb3RvY29sID0gcHJvdG9jb2xzW2luZGV4XTtcblxuICAgIGlmIChjb2xvbiA9PT0gcHJvdG9jb2wubGVuZ3RoICYmIHVybC5zbGljZSgwLCBwcm90b2NvbC5sZW5ndGgpLnRvTG93ZXJDYXNlKCkgPT09IHByb3RvY29sKSB7XG4gICAgICByZXR1cm4gdXJsO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4ID0gdXJsLmluZGV4T2YoJz8nKTtcblxuICBpZiAoaW5kZXggIT09IC0xICYmIGNvbG9uID4gaW5kZXgpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgaW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuXG4gIGlmIChpbmRleCAhPT0gLTEgJiYgY29sb24gPiBpbmRleCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNjcmlwdC11cmxcblxuXG4gIHJldHVybiAnamF2YXNjcmlwdDp2b2lkKDApJztcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgdmlzaXQobm9kZSwgJ3RhYmxlJywgd3JhcCk7XG4gIHJldHVybiBub2RlO1xufTtcblxuZnVuY3Rpb24gd3JhcCh0YWJsZSkge1xuICB2YXIgY2hpbGRyZW4gPSB0YWJsZS5jaGlsZHJlbjtcbiAgdGFibGUuY2hpbGRyZW4gPSBbe1xuICAgIHR5cGU6ICd0YWJsZUhlYWQnLFxuICAgIGFsaWduOiB0YWJsZS5hbGlnbixcbiAgICBjaGlsZHJlbjogW2NoaWxkcmVuWzBdXSxcbiAgICBwb3NpdGlvbjogY2hpbGRyZW5bMF0ucG9zaXRpb25cbiAgfV07XG5cbiAgaWYgKGNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcbiAgICB0YWJsZS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgIHR5cGU6ICd0YWJsZUJvZHknLFxuICAgICAgYWxpZ246IHRhYmxlLmFsaWduLFxuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLnNsaWNlKDEpLFxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgc3RhcnQ6IGNoaWxkcmVuWzFdLnBvc2l0aW9uLnN0YXJ0LFxuICAgICAgICBlbmQ6IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdLnBvc2l0aW9uLmVuZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYmFpbFxuXG5mdW5jdGlvbiBiYWlsKGVycikge1xuICBpZiAoZXJyKSB7XG4gICAgdGhyb3cgZXJyXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbGxhcHNlXG5cbi8vIGBjb2xsYXBzZSgnIFxcdFxcbmJhciBcXG5iYXpcXHQnKSAvLyAnIGJhciBiYXogJ2BcbmZ1bmN0aW9uIGNvbGxhcHNlKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1xccysvZywgJyAnKVxufVxuIiwiLyoqIEBsaWNlbnNlXHJcbiAqIGV2ZW50c291cmNlLmpzXHJcbiAqIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vWWFmZmxlL0V2ZW50U291cmNlL1xyXG4gKi9cclxuXHJcbi8qanNsaW50IGluZGVudDogMiwgdmFyczogdHJ1ZSwgcGx1c3BsdXM6IHRydWUgKi9cclxuLypnbG9iYWwgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0ICovXHJcblxyXG4oZnVuY3Rpb24gKGdsb2JhbCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB2YXIgc2V0VGltZW91dCA9IGdsb2JhbC5zZXRUaW1lb3V0O1xyXG4gIHZhciBjbGVhclRpbWVvdXQgPSBnbG9iYWwuY2xlYXJUaW1lb3V0O1xyXG4gIHZhciBYTUxIdHRwUmVxdWVzdCA9IGdsb2JhbC5YTUxIdHRwUmVxdWVzdDtcclxuICB2YXIgWERvbWFpblJlcXVlc3QgPSBnbG9iYWwuWERvbWFpblJlcXVlc3Q7XHJcbiAgdmFyIE5hdGl2ZUV2ZW50U291cmNlID0gZ2xvYmFsLkV2ZW50U291cmNlO1xyXG4gIHZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcclxuICB2YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xyXG4gIHZhciBmZXRjaCA9IGdsb2JhbC5mZXRjaDtcclxuICB2YXIgUmVzcG9uc2UgPSBnbG9iYWwuUmVzcG9uc2U7XHJcbiAgdmFyIFRleHREZWNvZGVyID0gZ2xvYmFsLlRleHREZWNvZGVyO1xyXG4gIHZhciBUZXh0RW5jb2RlciA9IGdsb2JhbC5UZXh0RW5jb2RlcjtcclxuXHJcbiAgaWYgKE9iamVjdC5jcmVhdGUgPT0gbnVsbCkge1xyXG4gICAgT2JqZWN0LmNyZWF0ZSA9IGZ1bmN0aW9uIChDKSB7XHJcbiAgICAgIGZ1bmN0aW9uIEYoKXt9XHJcbiAgICAgIEYucHJvdG90eXBlID0gQztcclxuICAgICAgcmV0dXJuIG5ldyBGKCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gP1xyXG4gIGlmIChQcm9taXNlICE9IHVuZGVmaW5lZCAmJiBQcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICBQcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpIHtcclxuICAgIHRoaXMuYml0c05lZWRlZCA9IDA7XHJcbiAgICB0aGlzLmNvZGVQb2ludCA9IDA7XHJcbiAgfVxyXG5cclxuICBUZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XHJcbiAgICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xyXG4gICAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN0ZGO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwODAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweEQ3RkYgfHwgY29kZVBvaW50ID49IDB4RTAwMCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHhGRkZGO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMHgwMTAwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4MTBGRkZGO1xyXG4gICAgICB9XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSB7XHJcbiAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xyXG4gICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj4gNiA+IDE1ID8gMyA6IGNvZGVQb2ludCA+IDMxID8gMiA6IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+IDE1ID8gMyA6IDI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDYgKiAzKSB7XHJcbiAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgIH1cclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgUkVQTEFDRVIgPSAweEZGRkQ7XHJcbiAgICB2YXIgc3RyaW5nID0gXCJcIjtcclxuICAgIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkO1xyXG4gICAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvY3RldHMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgdmFyIG9jdGV0ID0gb2N0ZXRzW2ldO1xyXG4gICAgICBpZiAoYml0c05lZWRlZCAhPT0gMCkge1xyXG4gICAgICAgIGlmIChvY3RldCA8IDEyOCB8fCBvY3RldCA+IDE5MSB8fCAhdmFsaWQoY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzLCBiaXRzTmVlZGVkIC0gNiwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSkpIHtcclxuICAgICAgICAgIGJpdHNOZWVkZWQgPSAwO1xyXG4gICAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XHJcbiAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xyXG4gICAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xyXG4gICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldDtcclxuICAgICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDE5MiAmJiBvY3RldCA8PSAyMjMpIHtcclxuICAgICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMTtcclxuICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMzE7XHJcbiAgICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XHJcbiAgICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDI7XHJcbiAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDE1O1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xyXG4gICAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzO1xyXG4gICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcclxuICAgICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYml0c05lZWRlZCAhPT0gMCAmJiAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKSkge1xyXG4gICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYml0c05lZWRlZCAtPSA2O1xyXG4gICAgICAgIGNvZGVQb2ludCA9IGNvZGVQb2ludCA8PCA2IHwgb2N0ZXQgJiA2MztcclxuICAgICAgfVxyXG4gICAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xyXG4gICAgICAgIGlmIChjb2RlUG9pbnQgPD0gMHhGRkZGKSB7XHJcbiAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweEQ4MDAgKyAoY29kZVBvaW50IC0gMHhGRkZGIC0gMSA+PiAxMCkpO1xyXG4gICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhEQzAwICsgKGNvZGVQb2ludCAtIDB4RkZGRiAtIDEgJiAweDNGRikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5iaXRzTmVlZGVkID0gYml0c05lZWRlZDtcclxuICAgIHRoaXMuY29kZVBvaW50ID0gY29kZVBvaW50O1xyXG4gICAgcmV0dXJuIHN0cmluZztcclxuICB9O1xyXG5cclxuICAvLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxyXG4gIHZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKFwidGVzdFwiKSwge3N0cmVhbTogdHJ1ZX0pID09PSBcInRlc3RcIjtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9O1xyXG5cclxuICAvLyBJRSwgRWRnZVxyXG4gIGlmIChUZXh0RGVjb2RlciA9PSB1bmRlZmluZWQgfHwgVGV4dEVuY29kZXIgPT0gdW5kZWZpbmVkIHx8ICFzdXBwb3J0c1N0cmVhbU9wdGlvbigpKSB7XHJcbiAgICBUZXh0RGVjb2RlciA9IFRleHREZWNvZGVyUG9seWZpbGw7XHJcbiAgfVxyXG5cclxuICB2YXIgayA9IGZ1bmN0aW9uICgpIHtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xyXG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gXCJcIjtcclxuICAgIHRoaXMucmVhZHlTdGF0ZSA9IDA7XHJcbiAgICB0aGlzLnN0YXR1cyA9IDA7XHJcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5yZXNwb25zZVRleHQgPSBcIlwiO1xyXG4gICAgdGhpcy5vbnByb2dyZXNzID0gaztcclxuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gaztcclxuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gXCJcIjtcclxuICAgIHRoaXMuX3hociA9IHhocjtcclxuICAgIHRoaXMuX3NlbmRUaW1lb3V0ID0gMDtcclxuICAgIHRoaXMuX2Fib3J0ID0gaztcclxuICB9XHJcblxyXG4gIFhIUldyYXBwZXIucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAobWV0aG9kLCB1cmwpIHtcclxuICAgIHRoaXMuX2Fib3J0KHRydWUpO1xyXG5cclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHZhciB4aHIgPSB0aGlzLl94aHI7XHJcbiAgICB2YXIgc3RhdGUgPSAxO1xyXG4gICAgdmFyIHRpbWVvdXQgPSAwO1xyXG5cclxuICAgIHRoaXMuX2Fib3J0ID0gZnVuY3Rpb24gKHNpbGVudCkge1xyXG4gICAgICBpZiAodGhhdC5fc2VuZFRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpO1xyXG4gICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcclxuICAgICAgfVxyXG4gICAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcclxuICAgICAgICBzdGF0ZSA9IDQ7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGs7XHJcbiAgICAgICAgeGhyLm9uZXJyb3IgPSBrO1xyXG4gICAgICAgIHhoci5vbmFib3J0ID0gaztcclxuICAgICAgICB4aHIub25wcm9ncmVzcyA9IGs7XHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGs7XHJcbiAgICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcclxuICAgICAgICAvLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XHJcbiAgICAgICAgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgIHRpbWVvdXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNDtcclxuICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlID0gMDtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gMSkge1xyXG4gICAgICAgIC8vc3RhdGUgPSAyO1xyXG4gICAgICAgIHZhciBzdGF0dXMgPSAwO1xyXG4gICAgICAgIHZhciBzdGF0dXNUZXh0ID0gXCJcIjtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKCEoXCJjb250ZW50VHlwZVwiIGluIHhocikpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXM7XHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dDtcclxuICAgICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXHJcbiAgICAgICAgICAgIC8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXHJcbiAgICAgICAgICAgIHN0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQgPSBcIlwiO1xyXG4gICAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5NjU4XHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAyMDA7XHJcbiAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJPS1wiO1xyXG4gICAgICAgICAgY29udGVudFR5cGUgPSB4aHIuY29udGVudFR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDApIHtcclxuICAgICAgICAgIHN0YXRlID0gMjtcclxuICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDI7XHJcbiAgICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQ7XHJcbiAgICAgICAgICB0aGF0Ll9jb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlO1xyXG4gICAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgb25TdGFydCgpO1xyXG4gICAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcclxuICAgICAgICBzdGF0ZSA9IDM7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMztcclxuICAgICAgICB0aGF0LnJlc3BvbnNlVGV4dCA9IHJlc3BvbnNlVGV4dDtcclxuICAgICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBvbkZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxyXG4gICAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcIlxyXG4gICAgICBvblByb2dyZXNzKCk7XHJcbiAgICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xyXG4gICAgICAgIHN0YXRlID0gNDtcclxuICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgdGltZW91dCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDQ7XHJcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBvblJlYWR5U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7IC8vIE9wZXJhIDEyXHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICBvbkZpbmlzaCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcclxuICAgICAgICAgIG9uUHJvZ3Jlc3MoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XHJcbiAgICAgICAgICBvblN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uVGltZW91dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICB9LCA1MDApO1xyXG4gICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcclxuICAgICAgICBvblByb2dyZXNzKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcclxuICAgIHhoci5vbmxvYWQgPSBvbkZpbmlzaDtcclxuICAgIHhoci5vbmVycm9yID0gb25GaW5pc2g7XHJcbiAgICAvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvdXIsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxyXG4gICAgLy8gc2VlIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc2ODU5NlxyXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODgwMjAwXHJcbiAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXHJcbiAgICAvLyBJRSA4IGZpcmVzIFwib25sb2FkXCIgd2l0aG91dCBcIm9ucHJvZ3Jlc3NcclxuICAgIHhoci5vbmFib3J0ID0gb25GaW5pc2g7XHJcblxyXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzICAgIFxyXG4gICAgaWYgKCEoXCJzZW5kQXNCaW5hcnlcIiBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmICEoXCJtb3pBbm9uXCIgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSkge1xyXG4gICAgICB4aHIub25wcm9ncmVzcyA9IG9uUHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxyXG4gICAgLy8gT3BlcmEgPCAxMlxyXG4gICAgLy8gRmlyZWZveCA8IDMuNVxyXG4gICAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXHJcbiAgICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxyXG4gICAgLy8gc2VlIGFsc28gIzY0XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlO1xyXG5cclxuICAgIGlmIChcImNvbnRlbnRUeXBlXCIgaW4geGhyKSB7XHJcbiAgICAgIHVybCArPSAodXJsLmluZGV4T2YoXCI/XCIpID09PSAtMSA/IFwiP1wiIDogXCImXCIpICsgXCJwYWRkaW5nPXRydWVcIjtcclxuICAgIH1cclxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuXHJcbiAgICBpZiAoXCJyZWFkeVN0YXRlXCIgaW4geGhyKSB7XHJcbiAgICAgIC8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xyXG4gICAgICAvLyAjOTFcclxuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFhIUldyYXBwZXIucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5fYWJvcnQoZmFsc2UpO1xyXG4gIH07XHJcbiAgWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO1xyXG4gIH07XHJcbiAgWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xyXG4gICAgdmFyIHhociA9IHRoaXMuX3hocjtcclxuICAgIGlmIChcInNldFJlcXVlc3RIZWFkZXJcIiBpbiB4aHIpIHtcclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgWEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIDogXCJcIjtcclxuICB9O1xyXG4gIFhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcclxuICAgIGlmICghKFwib250aW1lb3V0XCIgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxyXG4gICAgICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJjb21wbGV0ZVwiKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDA7XHJcbiAgICAgICAgdGhhdC5zZW5kKCk7XHJcbiAgICAgIH0sIDQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHhociA9IHRoaXMuX3hocjtcclxuICAgIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxyXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxyXG4gICAgICB4aHIuc2VuZCh1bmRlZmluZWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IxKSB7XHJcbiAgICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcclxuICAgICAgdGhyb3cgZXJyb3IxO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcclxuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSArIDB4MjApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XHJcbiAgICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxyXG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoXCJcXHJcXG5cIik7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgIHZhciBsaW5lID0gYXJyYXlbaV07XHJcbiAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoXCI6IFwiKTtcclxuICAgICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKFwiOiBcIik7XHJcbiAgICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHRoaXMuX21hcCA9IG1hcDtcclxuICB9XHJcbiAgSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCkge1xyXG4gIH1cclxuXHJcbiAgWEhSVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKHhociwgb25TdGFydENhbGxiYWNrLCBvblByb2dyZXNzQ2FsbGJhY2ssIG9uRmluaXNoQ2FsbGJhY2ssIHVybCwgd2l0aENyZWRlbnRpYWxzLCBoZWFkZXJzKSB7XHJcbiAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwpO1xyXG4gICAgdmFyIG9mZnNldCA9IDA7XHJcbiAgICB4aHIub25wcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgIHZhciBjaHVuayA9IHJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpO1xyXG4gICAgICBvZmZzZXQgKz0gY2h1bmsubGVuZ3RoO1xyXG4gICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMikge1xyXG4gICAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzO1xyXG4gICAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xyXG4gICAgICAgIG9uU3RhcnRDYWxsYmFjayhzdGF0dXMsIHN0YXR1c1RleHQsIGNvbnRlbnRUeXBlLCBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB4aHIuYWJvcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG4gICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XHJcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcnMpIHtcclxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xyXG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gIH07XHJcbiAgXHJcbiAgZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVycykge1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnM7XHJcbiAgfVxyXG4gIEhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge1xyXG4gIH1cclxuXHJcbiAgRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoeGhyLCBvblN0YXJ0Q2FsbGJhY2ssIG9uUHJvZ3Jlc3NDYWxsYmFjaywgb25GaW5pc2hDYWxsYmFjaywgdXJsLCB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMpIHtcclxuICAgIC8vIGNhY2hlOiBcIm5vLXN0b3JlXCJcclxuICAgIC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTQ1MzE5MFxyXG4gICAgdmFyIHRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCk7XHJcbiAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/IFwiaW5jbHVkZVwiIDogXCJzYW1lLW9yaWdpblwiXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcclxuICAgICAgb25TdGFydENhbGxiYWNrKHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJDb250ZW50LVR5cGVcIiksIG5ldyBIZWFkZXJzV3JhcHBlcihyZXNwb25zZS5oZWFkZXJzKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJlYWRlci5jYW5jZWwoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIHJlYWROZXh0Q2h1bmsgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICByZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcclxuICAgICAgICAgICAgICAvL05vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXHJcbiAgICAgICAgICAgICAgcmVzb2x2ZSh1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHtzdHJlYW06IHRydWV9KTtcclxuICAgICAgICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xyXG4gICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmVhZE5leHRDaHVuaygpO1xyXG4gICAgICB9KTtcclxuICAgIH0pW1wiZmluYWxseVwiXShmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEV2ZW50VGFyZ2V0KCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRocm93RXJyb3IoZSkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRocm93IGU7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5kaXNwYXRjaEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICBldmVudC50YXJnZXQgPSB0aGlzO1xyXG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV07XHJcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmhhbmRsZUV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgIHRocm93RXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBFdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgdHlwZSA9IFN0cmluZyh0eXBlKTtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XHJcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcclxuICAgIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0eXBlTGlzdGVuZXJzID0gW107XHJcbiAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IHR5cGVMaXN0ZW5lcnM7XHJcbiAgICB9XHJcbiAgICB2YXIgZm91bmQgPSBmYWxzZTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICBmb3VuZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICghZm91bmQpIHtcclxuICAgICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIEV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICB0eXBlID0gU3RyaW5nKHR5cGUpO1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycztcclxuICAgIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdO1xyXG4gICAgaWYgKHR5cGVMaXN0ZW5lcnMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHZhciBmaWx0ZXJlZCA9IFtdO1xyXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSAhPT0gbGlzdGVuZXIpIHtcclxuICAgICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RlbmVyc1t0eXBlXSA9IGZpbHRlcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gRXZlbnQodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcclxuICAgIEV2ZW50LmNhbGwodGhpcywgdHlwZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcbiAgICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZDtcclxuICB9XHJcblxyXG4gIE1lc3NhZ2VFdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7XHJcblxyXG4gIGZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XHJcbiAgICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpO1xyXG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1cztcclxuICAgIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dDtcclxuICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuICB9XHJcblxyXG4gIENvbm5lY3Rpb25FdmVudC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7XHJcblxyXG4gIHZhciBXQUlUSU5HID0gLTE7XHJcbiAgdmFyIENPTk5FQ1RJTkcgPSAwO1xyXG4gIHZhciBPUEVOID0gMTtcclxuICB2YXIgQ0xPU0VEID0gMjtcclxuXHJcbiAgdmFyIEFGVEVSX0NSID0gLTE7XHJcbiAgdmFyIEZJRUxEX1NUQVJUID0gMDtcclxuICB2YXIgRklFTEQgPSAxO1xyXG4gIHZhciBWQUxVRV9TVEFSVCA9IDI7XHJcbiAgdmFyIFZBTFVFID0gMztcclxuXHJcbiAgdmFyIGNvbnRlbnRUeXBlUmVnRXhwID0gL150ZXh0XFwvZXZlbnRcXC1zdHJlYW07PyhcXHMqY2hhcnNldFxcPXV0ZlxcLTgpPyQvaTtcclxuXHJcbiAgdmFyIE1JTklNVU1fRFVSQVRJT04gPSAxMDAwO1xyXG4gIHZhciBNQVhJTVVNX0RVUkFUSU9OID0gMTgwMDAwMDA7XHJcblxyXG4gIHZhciBwYXJzZUR1cmF0aW9uID0gZnVuY3Rpb24gKHZhbHVlLCBkZWYpIHtcclxuICAgIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKTtcclxuICAgIGlmIChuICE9PSBuKSB7XHJcbiAgICAgIG4gPSBkZWY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKTtcclxuICB9O1xyXG4gIHZhciBjbGFtcER1cmF0aW9uID0gZnVuY3Rpb24gKG4pIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTik7XHJcbiAgfTtcclxuXHJcbiAgdmFyIGZpcmUgPSBmdW5jdGlvbiAodGhhdCwgZiwgZXZlbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZiA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgZi5jYWxsKHRoYXQsIGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB0aHJvd0Vycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XHJcbiAgICBFdmVudFRhcmdldC5jYWxsKHRoaXMpO1xyXG5cclxuICAgIHRoaXMub25vcGVuID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5vbm1lc3NhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgdGhpcy51cmwgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBzdGFydCh0aGlzLCB1cmwsIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZ2V0QmVzdFRyYW5zcG9ydCgpIHtcclxuICAgIHJldHVybiBYTUxIdHRwUmVxdWVzdCAmJiBcIndpdGhDcmVkZW50aWFsc1wiIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZVxyXG4gICAgICA/IFhNTEh0dHBSZXF1ZXN0XHJcbiAgICAgIDogWERvbWFpblJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICB2YXIgaXNGZXRjaFN1cHBvcnRlZCA9IGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZSAhPSB1bmRlZmluZWQgJiYgXCJib2R5XCIgaW4gUmVzcG9uc2UucHJvdG90eXBlO1xyXG5cclxuICBmdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XHJcbiAgICB1cmwgPSBTdHJpbmcodXJsKTtcclxuICAgIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKTtcclxuXHJcbiAgICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKTtcclxuICAgIHZhciBoZWFydGJlYXRUaW1lb3V0ID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZCA/IHBhcnNlRHVyYXRpb24ob3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0LCA0NTAwMCkgOiBjbGFtcER1cmF0aW9uKDQ1MDAwKTtcclxuXHJcbiAgICB2YXIgbGFzdEV2ZW50SWQgPSBcIlwiO1xyXG4gICAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xyXG4gICAgdmFyIHdhc0FjdGl2aXR5ID0gZmFsc2U7XHJcbiAgICB2YXIgaGVhZGVycyA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWQgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpIDogdW5kZWZpbmVkO1xyXG4gICAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQgPyBvcHRpb25zLlRyYW5zcG9ydCA6IGdldEJlc3RUcmFuc3BvcnQoKTtcclxuICAgIHZhciB4aHIgPSBpc0ZldGNoU3VwcG9ydGVkID8gdW5kZWZpbmVkIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7XHJcbiAgICB2YXIgdHJhbnNwb3J0ID0gaXNGZXRjaFN1cHBvcnRlZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpO1xyXG4gICAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkc7XHJcbiAgICB2YXIgZGF0YUJ1ZmZlciA9IFwiXCI7XHJcbiAgICB2YXIgbGFzdEV2ZW50SWRCdWZmZXIgPSBcIlwiO1xyXG4gICAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9IFwiXCI7XHJcblxyXG4gICAgdmFyIHRleHRCdWZmZXIgPSBcIlwiO1xyXG4gICAgdmFyIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICB2YXIgZmllbGRTdGFydCA9IDA7XHJcbiAgICB2YXIgdmFsdWVTdGFydCA9IDA7XHJcblxyXG4gICAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XHJcbiAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcclxuICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IGNhbmNlbDtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAgJiYgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKSB7XHJcbiAgICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOO1xyXG4gICAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlO1xyXG4gICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XHJcbiAgICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTjtcclxuICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoXCJvcGVuXCIsIHtcclxuICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICBmaXJlKGVzLCBlcy5vbm9wZW4sIGV2ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIlwiO1xyXG4gICAgICAgICAgaWYgKHN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XHJcbiAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgKyBzdGF0dXMgKyBcIiBcIiArIHN0YXR1c1RleHQgKyBcIiB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLlwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBDb250ZW50LVR5cGUgc3BlY2lmeWluZyBhbiB1bnN1cHBvcnRlZCB0eXBlOiBcIiArIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWQgPyBcIi1cIiA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgXCIgXCIpKSArIFwiLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi5cIjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKG1lc3NhZ2UpKTtcclxuICAgICAgICAgIGNsb3NlKCk7XHJcbiAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KFwiZXJyb3JcIiwge1xyXG4gICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcclxuICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyc1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbiAodGV4dENodW5rKSB7XHJcbiAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcclxuICAgICAgICB2YXIgbiA9IC0xO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgaWYgKGMgPT09IFwiXFxuXCIuY2hhckNvZGVBdCgwKSB8fCBjID09PSBcIlxcclwiLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgbiA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiBcIlwiKSArIHRleHRDaHVuay5zbGljZSgwLCBuICsgMSk7XHJcbiAgICAgICAgdGV4dEJ1ZmZlciA9IChuID09PSAtMSA/IHRleHRCdWZmZXIgOiBcIlwiKSArIHRleHRDaHVuay5zbGljZShuICsgMSk7XHJcbiAgICAgICAgaWYgKGNodW5rICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpIHtcclxuICAgICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbik7XHJcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09IFwiXFxuXCIuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUikge1xyXG4gICAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGMgPT09IFwiXFxyXCIuY2hhckNvZGVBdCgwKSB8fCBjID09PSBcIlxcblwiLmNoYXJDb2RlQXQoMCkpIHtcclxuICAgICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBjaHVuay5zbGljZShmaWVsZFN0YXJ0LCB2YWx1ZVN0YXJ0IC0gMSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZSh2YWx1ZVN0YXJ0ICsgKHZhbHVlU3RhcnQgPCBwb3NpdGlvbiAmJiBjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpID09PSBcIiBcIi5jaGFyQ29kZUF0KDApID8gMSA6IDApLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQgPT09IFwiZGF0YVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gXCJcXG5cIjtcclxuICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09IFwiaWRcIikge1xyXG4gICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJldmVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJyZXRyeVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJoZWFydGJlYXRUaW1lb3V0XCIpIHtcclxuICAgICAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGhlYXJ0YmVhdFRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyO1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gXCJtZXNzYWdlXCI7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IE1lc3NhZ2VFdmVudChldmVudFR5cGVCdWZmZXIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlclxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChldmVudFR5cGVCdWZmZXIgPT09IFwibWVzc2FnZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ0xPU0VEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gXCJcXHJcIi5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gXCI6XCIuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxO1xyXG4gICAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFX1NUQVJUO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09IFZBTFVFX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XHJcbiAgICAgICAgY3VycmVudFN0YXRlID0gV0FJVElORztcclxuICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xyXG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgdGltZW91dCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgIH0sIHJldHJ5KTtcclxuICAgICAgICByZXRyeSA9IGNsYW1wRHVyYXRpb24oTWF0aC5taW4oaW5pdGlhbFJldHJ5ICogMTYsIHJldHJ5ICogMikpO1xyXG5cclxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElORztcclxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgRXZlbnQoXCJlcnJvclwiKTtcclxuICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBjdXJyZW50U3RhdGUgPSBDTE9TRUQ7XHJcbiAgICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjYW5jZWxGdW5jdGlvbigpO1xyXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRUQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRpbWVvdXQgPSAwO1xyXG5cclxuICAgICAgaWYgKGN1cnJlbnRTdGF0ZSAhPT0gV0FJVElORykge1xyXG4gICAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihcIk5vIGFjdGl2aXR5IHdpdGhpbiBcIiArIGhlYXJ0YmVhdFRpbWVvdXQgKyBcIiBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy5cIikpO1xyXG4gICAgICAgICAgY2FuY2VsRnVuY3Rpb24oKTtcclxuICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBvblRpbWVvdXQoKTtcclxuICAgICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2U7XHJcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBvblRpbWVvdXQoKTtcclxuICAgICAgfSwgaGVhcnRiZWF0VGltZW91dCk7XHJcblxyXG4gICAgICBjdXJyZW50U3RhdGUgPSBDT05ORUNUSU5HO1xyXG4gICAgICBkYXRhQnVmZmVyID0gXCJcIjtcclxuICAgICAgZXZlbnRUeXBlQnVmZmVyID0gXCJcIjtcclxuICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZDtcclxuICAgICAgdGV4dEJ1ZmZlciA9IFwiXCI7XHJcbiAgICAgIGZpZWxkU3RhcnQgPSAwO1xyXG4gICAgICB2YWx1ZVN0YXJ0ID0gMDtcclxuICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVDtcclxuXHJcbiAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxyXG4gICAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXHJcbiAgICAgIHZhciByZXF1ZXN0VVJMID0gdXJsO1xyXG4gICAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSBcImRhdGE6XCIgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSBcImJsb2I6XCIpIHtcclxuICAgICAgICBpZiAobGFzdEV2ZW50SWQgIT09IFwiXCIpIHtcclxuICAgICAgICAgIHJlcXVlc3RVUkwgKz0gKHVybC5pbmRleE9mKFwiP1wiKSA9PT0gLTEgPyBcIj9cIiA6IFwiJlwiKSArIFwibGFzdEV2ZW50SWQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7fTtcclxuICAgICAgcmVxdWVzdEhlYWRlcnNbXCJBY2NlcHRcIl0gPSBcInRleHQvZXZlbnQtc3RyZWFtXCI7XHJcbiAgICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVycykge1xyXG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnNbbmFtZV07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdHJhbnNwb3J0Lm9wZW4oeGhyLCBvblN0YXJ0LCBvblByb2dyZXNzLCBvbkZpbmlzaCwgcmVxdWVzdFVSTCwgd2l0aENyZWRlbnRpYWxzLCByZXF1ZXN0SGVhZGVycyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY2xvc2UoKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBlcy51cmwgPSB1cmw7XHJcbiAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElORztcclxuICAgIGVzLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscztcclxuICAgIGVzLl9jbG9zZSA9IGNsb3NlO1xyXG5cclxuICAgIG9uVGltZW91dCgpO1xyXG4gIH1cclxuXHJcbiAgRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSk7XHJcbiAgRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkc7XHJcbiAgRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuT1BFTiA9IE9QRU47XHJcbiAgRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEO1xyXG4gIEV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdGhpcy5fY2xvc2UoKTtcclxuICB9O1xyXG5cclxuICBFdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HO1xyXG4gIEV2ZW50U291cmNlUG9seWZpbGwuT1BFTiA9IE9QRU47XHJcbiAgRXZlbnRTb3VyY2VQb2x5ZmlsbC5DTE9TRUQgPSBDTE9TRUQ7XHJcbiAgRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xyXG5cclxuICBnbG9iYWwuRXZlbnRTb3VyY2VQb2x5ZmlsbCA9IEV2ZW50U291cmNlUG9seWZpbGw7XHJcbiAgZ2xvYmFsLk5hdGl2ZUV2ZW50U291cmNlID0gTmF0aXZlRXZlbnRTb3VyY2U7XHJcblxyXG4gIGlmIChYTUxIdHRwUmVxdWVzdCAhPSB1bmRlZmluZWQgJiYgKE5hdGl2ZUV2ZW50U291cmNlID09IHVuZGVmaW5lZCB8fCAhKFwid2l0aENyZWRlbnRpYWxzXCIgaW4gTmF0aXZlRXZlbnRTb3VyY2UucHJvdG90eXBlKSkpIHtcclxuICAgIC8vIFdoeSByZXBsYWNlIGEgbmF0aXZlIEV2ZW50U291cmNlID9cclxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0NDMyOFxyXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODMxMzkyXHJcbiAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjYwMTQ0XHJcbiAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MjI1NjU0XHJcbiAgICAvLyAuLi5cclxuICAgIGdsb2JhbC5FdmVudFNvdXJjZSA9IEV2ZW50U291cmNlUG9seWZpbGw7XHJcbiAgfVxyXG5cclxufSh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMpKTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ09QRCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgeyAvKiovIH1cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxuLy8gSWYgbmFtZSBpcyAnX19wcm90b19fJywgYW5kIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBpcyBhdmFpbGFibGUsIGRlZmluZSBfX3Byb3RvX18gYXMgYW4gb3duIHByb3BlcnR5IG9uIHRhcmdldFxudmFyIHNldFByb3BlcnR5ID0gZnVuY3Rpb24gc2V0UHJvcGVydHkodGFyZ2V0LCBvcHRpb25zKSB7XG5cdGlmIChkZWZpbmVQcm9wZXJ0eSAmJiBvcHRpb25zLm5hbWUgPT09ICdfX3Byb3RvX18nKSB7XG5cdFx0ZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBvcHRpb25zLm5hbWUsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHR2YWx1ZTogb3B0aW9ucy5uZXdWYWx1ZSxcblx0XHRcdHdyaXRhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0dGFyZ2V0W29wdGlvbnMubmFtZV0gPSBvcHRpb25zLm5ld1ZhbHVlO1xuXHR9XG59O1xuXG4vLyBSZXR1cm4gdW5kZWZpbmVkIGluc3RlYWQgb2YgX19wcm90b19fIGlmICdfX3Byb3RvX18nIGlzIG5vdCBhbiBvd24gcHJvcGVydHlcbnZhciBnZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwgbmFtZSkge1xuXHRpZiAobmFtZSA9PT0gJ19fcHJvdG9fXycpIHtcblx0XHRpZiAoIWhhc093bi5jYWxsKG9iaiwgbmFtZSkpIHtcblx0XHRcdHJldHVybiB2b2lkIDA7XG5cdFx0fSBlbHNlIGlmIChnT1BEKSB7XG5cdFx0XHQvLyBJbiBlYXJseSB2ZXJzaW9ucyBvZiBub2RlLCBvYmpbJ19fcHJvdG9fXyddIGlzIGJ1Z2d5IHdoZW4gb2JqIGhhc1xuXHRcdFx0Ly8gX19wcm90b19fIGFzIGFuIG93biBwcm9wZXJ0eS4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcigpIHdvcmtzLlxuXHRcdFx0cmV0dXJuIGdPUEQob2JqLCBuYW1lKS52YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gb2JqW25hbWVdO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZTtcblx0dmFyIHRhcmdldCA9IGFyZ3VtZW50c1swXTtcblx0dmFyIGkgPSAxO1xuXHR2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcblx0dmFyIGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH1cblx0aWYgKHRhcmdldCA9PSBudWxsIHx8ICh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IGdldFByb3BlcnR5KHRhcmdldCwgbmFtZSk7XG5cdFx0XHRcdGNvcHkgPSBnZXRQcm9wZXJ0eShvcHRpb25zLCBuYW1lKTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0c2V0UHJvcGVydHkodGFyZ2V0LCB7IG5hbWU6IG5hbWUsIG5ld1ZhbHVlOiBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpIH0pO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzZXRQcm9wZXJ0eSh0YXJnZXQsIHsgbmFtZTogbmFtZSwgbmV3VmFsdWU6IGNvcHkgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG4iLCJpZiAodHlwZW9mIE9iamVjdC5jcmVhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgLy8gaW1wbGVtZW50YXRpb24gZnJvbSBzdGFuZGFyZCBub2RlLmpzICd1dGlsJyBtb2R1bGVcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbmhlcml0cyhjdG9yLCBzdXBlckN0b3IpIHtcbiAgICBjdG9yLnN1cGVyXyA9IHN1cGVyQ3RvclxuICAgIGN0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckN0b3IucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogY3RvcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICB2YXIgVGVtcEN0b3IgPSBmdW5jdGlvbiAoKSB7fVxuICAgIFRlbXBDdG9yLnByb3RvdHlwZSA9IHN1cGVyQ3Rvci5wcm90b3R5cGVcbiAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgY3Rvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBjdG9yXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhYmV0aWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFiZXRpY2FsLlxuZnVuY3Rpb24gYWxwaGFiZXRpY2FsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSAvKiBhLXogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSAvKiBBLVogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbHBoYWJldGljYWwgPSByZXF1aXJlKCdpcy1hbHBoYWJldGljYWwnKVxudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJylcblxubW9kdWxlLmV4cG9ydHMgPSBhbHBoYW51bWVyaWNhbFxuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYWxwaGFudW1lcmljYWwuXG5mdW5jdGlvbiBhbHBoYW51bWVyaWNhbChjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGFscGhhYmV0aWNhbChjaGFyYWN0ZXIpIHx8IGRlY2ltYWwoY2hhcmFjdGVyKVxufVxuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNpbWFsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBkZWNpbWFsLlxuZnVuY3Rpb24gZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NyAvKiAwLTkgKi9cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhleGFkZWNpbWFsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBoZXhhZGVjaW1hbC5cbmZ1bmN0aW9uIGhleGFkZWNpbWFsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3IC8qIGEgKi8gJiYgY29kZSA8PSAxMDIpIC8qIHogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gNzApIC8qIFogKi8gfHxcbiAgICAoY29kZSA+PSA0OCAvKiBBICovICYmIGNvZGUgPD0gNTcpIC8qIFogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoeCkge1xuXHR2YXIgcHJvdG90eXBlO1xuXHRyZXR1cm4gdG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgT2JqZWN0XScgJiYgKHByb3RvdHlwZSA9IE9iamVjdC5nZXRQcm90b3R5cGVPZih4KSwgcHJvdG90eXBlID09PSBudWxsIHx8IHByb3RvdHlwZSA9PT0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHt9KSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gd2hpdGVzcGFjZVxuXG52YXIgZnJvbUNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG52YXIgcmUgPSAvXFxzL1xuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHdoaXRlc3BhY2UoY2hhcmFjdGVyKSB7XG4gIHJldHVybiByZS50ZXN0KFxuICAgIHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdudW1iZXInID8gZnJvbUNvZGUoY2hhcmFjdGVyKSA6IGNoYXJhY3Rlci5jaGFyQXQoMClcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gd29yZENoYXJhY3RlclxuXG52YXIgZnJvbUNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG52YXIgcmUgPSAvXFx3L1xuXG4vLyBDaGVjayBpZiB0aGUgZ2l2ZW4gY2hhcmFjdGVyIGNvZGUsIG9yIHRoZSBjaGFyYWN0ZXIgY29kZSBhdCB0aGUgZmlyc3Rcbi8vIGNoYXJhY3RlciwgaXMgYSB3b3JkIGNoYXJhY3Rlci5cbmZ1bmN0aW9uIHdvcmRDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiByZS50ZXN0KFxuICAgIHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdudW1iZXInID8gZnJvbUNvZGUoY2hhcmFjdGVyKSA6IGNoYXJhY3Rlci5jaGFyQXQoMClcbiAgKVxufVxuIiwiLy8gdGhlIHdoYXR3Zy1mZXRjaCBwb2x5ZmlsbCBpbnN0YWxscyB0aGUgZmV0Y2goKSBmdW5jdGlvblxuLy8gb24gdGhlIGdsb2JhbCBvYmplY3QgKHdpbmRvdyBvciBzZWxmKVxuLy9cbi8vIFJldHVybiB0aGF0IGFzIHRoZSBleHBvcnQgZm9yIHVzZSBpbiBXZWJwYWNrLCBCcm93c2VyaWZ5IGV0Yy5cbnJlcXVpcmUoJ3doYXR3Zy1mZXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBzZWxmLmZldGNoLmJpbmQoc2VsZik7XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGVzXG5cbnZhciBkZWZhdWx0cyA9IFtcbiAgJ1xcXFwnLFxuICAnYCcsXG4gICcqJyxcbiAgJ3snLFxuICAnfScsXG4gICdbJyxcbiAgJ10nLFxuICAnKCcsXG4gICcpJyxcbiAgJyMnLFxuICAnKycsXG4gICctJyxcbiAgJy4nLFxuICAnIScsXG4gICdfJyxcbiAgJz4nXG5dXG5cbnZhciBnZm0gPSBkZWZhdWx0cy5jb25jYXQoWyd+JywgJ3wnXSlcblxudmFyIGNvbW1vbm1hcmsgPSBnZm0uY29uY2F0KFtcbiAgJ1xcbicsXG4gICdcIicsXG4gICckJyxcbiAgJyUnLFxuICAnJicsXG4gIFwiJ1wiLFxuICAnLCcsXG4gICcvJyxcbiAgJzonLFxuICAnOycsXG4gICc8JyxcbiAgJz0nLFxuICAnPycsXG4gICdAJyxcbiAgJ14nXG5dKVxuXG5lc2NhcGVzLmRlZmF1bHQgPSBkZWZhdWx0c1xuZXNjYXBlcy5nZm0gPSBnZm1cbmVzY2FwZXMuY29tbW9ubWFyayA9IGNvbW1vbm1hcmtcblxuLy8gR2V0IG1hcmtkb3duIGVzY2FwZXMuXG5mdW5jdGlvbiBlc2NhcGVzKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuXG4gIGlmIChzZXR0aW5ncy5jb21tb25tYXJrKSB7XG4gICAgcmV0dXJuIGNvbW1vbm1hcmtcbiAgfVxuXG4gIHJldHVybiBzZXR0aW5ncy5nZm0gPyBnZm0gOiBkZWZhdWx0c1xufVxuIiwidmFyIHZpc2l0V2l0aFBhcmVudHMgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKTtcblxuZnVuY3Rpb24gYWRkTGlzdE1ldGFkYXRhKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGFzdCkge1xuICAgIHZpc2l0V2l0aFBhcmVudHMoYXN0LCAnbGlzdCcsIGZ1bmN0aW9uIChsaXN0Tm9kZSwgcGFyZW50cykge1xuICAgICAgdmFyIGRlcHRoID0gMCwgaSwgbjtcbiAgICAgIGZvciAoaSA9IDAsIG4gPSBwYXJlbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBpZiAocGFyZW50c1tpXS50eXBlID09PSAnbGlzdCcpIGRlcHRoICs9IDE7XG4gICAgICB9XG4gICAgICBmb3IgKGkgPSAwLCBuID0gbGlzdE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IGxpc3ROb2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICBjaGlsZC5pbmRleCA9IGk7XG4gICAgICAgIGNoaWxkLm9yZGVyZWQgPSBsaXN0Tm9kZS5vcmRlcmVkO1xuICAgICAgfVxuICAgICAgbGlzdE5vZGUuZGVwdGggPSBkZXB0aDtcbiAgICB9KTtcbiAgICByZXR1cm4gYXN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZExpc3RNZXRhZGF0YTtcbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxudmFyIGVsXG5cbnZhciBzZW1pY29sb24gPSA1OSAvLyAgJzsnXG5cbm1vZHVsZS5leHBvcnRzID0gZGVjb2RlRW50aXR5XG5cbmZ1bmN0aW9uIGRlY29kZUVudGl0eShjaGFyYWN0ZXJzKSB7XG4gIHZhciBlbnRpdHkgPSAnJicgKyBjaGFyYWN0ZXJzICsgJzsnXG4gIHZhciBjaGFyXG5cbiAgZWwgPSBlbCB8fCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgZWwuaW5uZXJIVE1MID0gZW50aXR5XG4gIGNoYXIgPSBlbC50ZXh0Q29udGVudFxuXG4gIC8vIFNvbWUgZW50aXRpZXMgZG8gbm90IHJlcXVpcmUgdGhlIGNsb3Npbmcgc2VtaWNvbG9uIChgJm5vdGAgLSBmb3IgaW5zdGFuY2UpLFxuICAvLyB3aGljaCBsZWFkcyB0byBzaXR1YXRpb25zIHdoZXJlIHBhcnNpbmcgdGhlIGFzc3VtZWQgZW50aXR5IG9mICZub3RpdDsgd2lsbFxuICAvLyByZXN1bHQgaW4gdGhlIHN0cmluZyBgwqxpdDtgLiAgV2hlbiB3ZSBlbmNvdW50ZXIgYSB0cmFpbGluZyBzZW1pY29sb24gYWZ0ZXJcbiAgLy8gcGFyc2luZyBhbmQgdGhlIGVudGl0eSB0byBkZWNvZGUgd2FzIG5vdCBhIHNlbWljb2xvbiAoYCZzZW1pO2ApLCB3ZSBjYW5cbiAgLy8gYXNzdW1lIHRoYXQgdGhlIG1hdGNoaW5nIHdhcyBpbmNvbXBsZXRlXG4gIGlmIChjaGFyLmNoYXJDb2RlQXQoY2hhci5sZW5ndGggLSAxKSA9PT0gc2VtaWNvbG9uICYmIGNoYXJhY3RlcnMgIT09ICdzZW1pJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgLy8gSWYgdGhlIGRlY29kZWQgc3RyaW5nIGlzIGVxdWFsIHRvIHRoZSBpbnB1dCwgdGhlIGVudGl0eSB3YXMgbm90IHZhbGlkXG4gIHJldHVybiBjaGFyID09PSBlbnRpdHkgPyBmYWxzZSA6IGNoYXJcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbGVnYWN5ID0gcmVxdWlyZSgnY2hhcmFjdGVyLWVudGl0aWVzLWxlZ2FjeScpXG52YXIgaW52YWxpZCA9IHJlcXVpcmUoJ2NoYXJhY3Rlci1yZWZlcmVuY2UtaW52YWxpZCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxudmFyIGhleGFkZWNpbWFsID0gcmVxdWlyZSgnaXMtaGV4YWRlY2ltYWwnKVxudmFyIGFscGhhbnVtZXJpY2FsID0gcmVxdWlyZSgnaXMtYWxwaGFudW1lcmljYWwnKVxudmFyIGRlY29kZUVudGl0eSA9IHJlcXVpcmUoJy4vZGVjb2RlLWVudGl0eScpXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VFbnRpdGllc1xuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcbnZhciBmcm9tQ2hhckNvZGUgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG52YXIgbm9vcCA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuXG4vLyBEZWZhdWx0IHNldHRpbmdzLlxudmFyIGRlZmF1bHRzID0ge1xuICB3YXJuaW5nOiBudWxsLFxuICByZWZlcmVuY2U6IG51bGwsXG4gIHRleHQ6IG51bGwsXG4gIHdhcm5pbmdDb250ZXh0OiBudWxsLFxuICByZWZlcmVuY2VDb250ZXh0OiBudWxsLFxuICB0ZXh0Q29udGV4dDogbnVsbCxcbiAgcG9zaXRpb246IHt9LFxuICBhZGRpdGlvbmFsOiBudWxsLFxuICBhdHRyaWJ1dGU6IGZhbHNlLFxuICBub25UZXJtaW5hdGVkOiB0cnVlXG59XG5cbi8vIENoYXJhY3RlcnMuXG52YXIgdGFiID0gOSAvLyAnXFx0J1xudmFyIGxpbmVGZWVkID0gMTAgLy8gJ1xcbidcbnZhciBmb3JtRmVlZCA9IDEyIC8vICAnXFxmJ1xudmFyIHNwYWNlID0gMzIgLy8gJyAnXG52YXIgYW1wZXJzYW5kID0gMzggLy8gICcmJ1xudmFyIHNlbWljb2xvbiA9IDU5IC8vICAnOydcbnZhciBsZXNzVGhhbiA9IDYwIC8vICAnPCdcbnZhciBlcXVhbHNUbyA9IDYxIC8vICAnPSdcbnZhciBudW1iZXJTaWduID0gMzUgLy8gICcjJ1xudmFyIHVwcGVyY2FzZVggPSA4OCAvLyAgJ1gnXG52YXIgbG93ZXJjYXNlWCA9IDEyMCAvLyAgJ3gnXG52YXIgcmVwbGFjZW1lbnRDaGFyYWN0ZXIgPSA2NTUzMyAvLyAn77+9J1xuXG4vLyBSZWZlcmVuY2UgdHlwZXMuXG52YXIgbmFtZSA9ICduYW1lZCdcbnZhciBoZXhhID0gJ2hleGFkZWNpbWFsJ1xudmFyIGRlY2kgPSAnZGVjaW1hbCdcblxuLy8gTWFwIG9mIGJhc2VzLlxudmFyIGJhc2VzID0ge31cblxuYmFzZXNbaGV4YV0gPSAxNlxuYmFzZXNbZGVjaV0gPSAxMFxuXG4vLyBNYXAgb2YgdHlwZXMgdG8gdGVzdHMuXG4vLyBFYWNoIHR5cGUgb2YgY2hhcmFjdGVyIHJlZmVyZW5jZSBhY2NlcHRzIGRpZmZlcmVudCBjaGFyYWN0ZXJzLlxuLy8gVGhpcyB0ZXN0IGlzIHVzZWQgdG8gZGV0ZWN0IHdoZXRoZXIgYSByZWZlcmVuY2UgaGFzIGVuZGVkIChhcyB0aGUgc2VtaWNvbG9uXG4vLyBpcyBub3Qgc3RyaWN0bHkgbmVlZGVkKS5cbnZhciB0ZXN0cyA9IHt9XG5cbnRlc3RzW25hbWVdID0gYWxwaGFudW1lcmljYWxcbnRlc3RzW2RlY2ldID0gZGVjaW1hbFxudGVzdHNbaGV4YV0gPSBoZXhhZGVjaW1hbFxuXG4vLyBXYXJuaW5nIHR5cGVzLlxudmFyIG5hbWVkTm90VGVybWluYXRlZCA9IDFcbnZhciBudW1lcmljTm90VGVybWluYXRlZCA9IDJcbnZhciBuYW1lZEVtcHR5ID0gM1xudmFyIG51bWVyaWNFbXB0eSA9IDRcbnZhciBuYW1lZFVua25vd24gPSA1XG52YXIgbnVtZXJpY0Rpc2FsbG93ZWQgPSA2XG52YXIgbnVtZXJpY1Byb2hpYml0ZWQgPSA3XG5cbi8vIFdhcm5pbmcgbWVzc2FnZXMuXG52YXIgbWVzc2FnZXMgPSB7fVxuXG5tZXNzYWdlc1tuYW1lZE5vdFRlcm1pbmF0ZWRdID1cbiAgJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbidcbm1lc3NhZ2VzW251bWVyaWNOb3RUZXJtaW5hdGVkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUgdGVybWluYXRlZCBieSBhIHNlbWljb2xvbidcbm1lc3NhZ2VzW25hbWVkRW1wdHldID0gJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBlbXB0eSdcbm1lc3NhZ2VzW251bWVyaWNFbXB0eV0gPSAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZW1wdHknXG5tZXNzYWdlc1tuYW1lZFVua25vd25dID0gJ05hbWVkIGNoYXJhY3RlciByZWZlcmVuY2VzIG11c3QgYmUga25vd24nXG5tZXNzYWdlc1tudW1lcmljRGlzYWxsb3dlZF0gPVxuICAnTnVtZXJpYyBjaGFyYWN0ZXIgcmVmZXJlbmNlcyBjYW5ub3QgYmUgZGlzYWxsb3dlZCdcbm1lc3NhZ2VzW251bWVyaWNQcm9oaWJpdGVkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSBVbmljb2RlIHJhbmdlJ1xuXG4vLyBXcmFwIHRvIGVuc3VyZSBjbGVhbiBwYXJhbWV0ZXJzIGFyZSBnaXZlbiB0byBgcGFyc2VgLlxuZnVuY3Rpb24gcGFyc2VFbnRpdGllcyh2YWx1ZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSB7fVxuICB2YXIgb3B0aW9uXG4gIHZhciBrZXlcblxuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge31cbiAgfVxuXG4gIGZvciAoa2V5IGluIGRlZmF1bHRzKSB7XG4gICAgb3B0aW9uID0gb3B0aW9uc1trZXldXG4gICAgc2V0dGluZ3Nba2V5XSA9XG4gICAgICBvcHRpb24gPT09IG51bGwgfHwgb3B0aW9uID09PSB1bmRlZmluZWQgPyBkZWZhdWx0c1trZXldIDogb3B0aW9uXG4gIH1cblxuICBpZiAoc2V0dGluZ3MucG9zaXRpb24uaW5kZW50IHx8IHNldHRpbmdzLnBvc2l0aW9uLnN0YXJ0KSB7XG4gICAgc2V0dGluZ3MuaW5kZW50ID0gc2V0dGluZ3MucG9zaXRpb24uaW5kZW50IHx8IFtdXG4gICAgc2V0dGluZ3MucG9zaXRpb24gPSBzZXR0aW5ncy5wb3NpdGlvbi5zdGFydFxuICB9XG5cbiAgcmV0dXJuIHBhcnNlKHZhbHVlLCBzZXR0aW5ncylcbn1cblxuLy8gUGFyc2UgZW50aXRpZXMuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gcGFyc2UodmFsdWUsIHNldHRpbmdzKSB7XG4gIHZhciBhZGRpdGlvbmFsID0gc2V0dGluZ3MuYWRkaXRpb25hbFxuICB2YXIgbm9uVGVybWluYXRlZCA9IHNldHRpbmdzLm5vblRlcm1pbmF0ZWRcbiAgdmFyIGhhbmRsZVRleHQgPSBzZXR0aW5ncy50ZXh0XG4gIHZhciBoYW5kbGVSZWZlcmVuY2UgPSBzZXR0aW5ncy5yZWZlcmVuY2VcbiAgdmFyIGhhbmRsZVdhcm5pbmcgPSBzZXR0aW5ncy53YXJuaW5nXG4gIHZhciB0ZXh0Q29udGV4dCA9IHNldHRpbmdzLnRleHRDb250ZXh0XG4gIHZhciByZWZlcmVuY2VDb250ZXh0ID0gc2V0dGluZ3MucmVmZXJlbmNlQ29udGV4dFxuICB2YXIgd2FybmluZ0NvbnRleHQgPSBzZXR0aW5ncy53YXJuaW5nQ29udGV4dFxuICB2YXIgcG9zID0gc2V0dGluZ3MucG9zaXRpb25cbiAgdmFyIGluZGVudCA9IHNldHRpbmdzLmluZGVudCB8fCBbXVxuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIHZhciBpbmRleCA9IDBcbiAgdmFyIGxpbmVzID0gLTFcbiAgdmFyIGNvbHVtbiA9IHBvcy5jb2x1bW4gfHwgMVxuICB2YXIgbGluZSA9IHBvcy5saW5lIHx8IDFcbiAgdmFyIHF1ZXVlID0gJydcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBlbnRpdHlDaGFyYWN0ZXJzXG4gIHZhciBuYW1lZEVudGl0eVxuICB2YXIgdGVybWluYXRlZFxuICB2YXIgY2hhcmFjdGVyc1xuICB2YXIgY2hhcmFjdGVyXG4gIHZhciByZWZlcmVuY2VcbiAgdmFyIGZvbGxvd2luZ1xuICB2YXIgd2FybmluZ1xuICB2YXIgcmVhc29uXG4gIHZhciBvdXRwdXRcbiAgdmFyIGVudGl0eVxuICB2YXIgYmVnaW5cbiAgdmFyIHN0YXJ0XG4gIHZhciB0eXBlXG4gIHZhciB0ZXN0XG4gIHZhciBwcmV2XG4gIHZhciBuZXh0XG4gIHZhciBkaWZmXG4gIHZhciBlbmRcblxuICBpZiAodHlwZW9mIGFkZGl0aW9uYWwgPT09ICdzdHJpbmcnKSB7XG4gICAgYWRkaXRpb25hbCA9IGFkZGl0aW9uYWwuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgLy8gQ2FjaGUgdGhlIGN1cnJlbnQgcG9pbnQuXG4gIHByZXYgPSBub3coKVxuXG4gIC8vIFdyYXAgYGhhbmRsZVdhcm5pbmdgLlxuICB3YXJuaW5nID0gaGFuZGxlV2FybmluZyA/IHBhcnNlRXJyb3IgOiBub29wXG5cbiAgLy8gRW5zdXJlIHRoZSBhbGdvcml0aG0gd2Fsa3Mgb3ZlciB0aGUgZmlyc3QgY2hhcmFjdGVyIGFuZCB0aGUgZW5kIChpbmNsdXNpdmUpLlxuICBpbmRleC0tXG4gIGxlbmd0aCsrXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAvLyBJZiB0aGUgcHJldmlvdXMgY2hhcmFjdGVyIHdhcyBhIG5ld2xpbmUuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbGluZUZlZWQpIHtcbiAgICAgIGNvbHVtbiA9IGluZGVudFtsaW5lc10gfHwgMVxuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBhbXBlcnNhbmQpIHtcbiAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAxKVxuXG4gICAgICAvLyBUaGUgYmVoYXZpb3VyIGRlcGVuZHMgb24gdGhlIGlkZW50aXR5IG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAgICAgIGlmIChcbiAgICAgICAgZm9sbG93aW5nID09PSB0YWIgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBsaW5lRmVlZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGZvcm1GZWVkIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gc3BhY2UgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBhbXBlcnNhbmQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBsZXNzVGhhbiB8fFxuICAgICAgICBmb2xsb3dpbmcgIT09IGZvbGxvd2luZyB8fFxuICAgICAgICAoYWRkaXRpb25hbCAmJiBmb2xsb3dpbmcgPT09IGFkZGl0aW9uYWwpXG4gICAgICApIHtcbiAgICAgICAgLy8gTm90IGEgY2hhcmFjdGVyIHJlZmVyZW5jZS5cbiAgICAgICAgLy8gTm8gY2hhcmFjdGVycyBhcmUgY29uc3VtZWQsIGFuZCBub3RoaW5nIGlzIHJldHVybmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBhbiBlcnJvciwgZWl0aGVyLlxuICAgICAgICBxdWV1ZSArPSBmcm9tQ2hhckNvZGUoY2hhcmFjdGVyKVxuICAgICAgICBjb2x1bW4rK1xuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHN0YXJ0ID0gaW5kZXggKyAxXG4gICAgICBiZWdpbiA9IHN0YXJ0XG4gICAgICBlbmQgPSBzdGFydFxuXG4gICAgICBpZiAoZm9sbG93aW5nID09PSBudW1iZXJTaWduKSB7XG4gICAgICAgIC8vIE51bWVyaWNhbCBlbnRpdHkuXG4gICAgICAgIGVuZCA9ICsrYmVnaW5cblxuICAgICAgICAvLyBUaGUgYmVoYXZpb3VyIGZ1cnRoZXIgZGVwZW5kcyBvbiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgIGlmIChmb2xsb3dpbmcgPT09IHVwcGVyY2FzZVggfHwgZm9sbG93aW5nID09PSBsb3dlcmNhc2VYKSB7XG4gICAgICAgICAgLy8gQVNDSUkgaGV4IGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gaGV4YVxuICAgICAgICAgIGVuZCA9ICsrYmVnaW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBU0NJSSBkaWdpdHMuXG4gICAgICAgICAgdHlwZSA9IGRlY2lcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTmFtZWQgZW50aXR5LlxuICAgICAgICB0eXBlID0gbmFtZVxuICAgICAgfVxuXG4gICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gJydcbiAgICAgIGVudGl0eSA9ICcnXG4gICAgICBjaGFyYWN0ZXJzID0gJydcbiAgICAgIHRlc3QgPSB0ZXN0c1t0eXBlXVxuICAgICAgZW5kLS1cblxuICAgICAgd2hpbGUgKCsrZW5kIDwgbGVuZ3RoKSB7XG4gICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgIGlmICghdGVzdChmb2xsb3dpbmcpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoYXJhY3RlcnMgKz0gZnJvbUNoYXJDb2RlKGZvbGxvd2luZylcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBjYW4gbWF0Y2ggYSBsZWdhY3kgbmFtZWQgcmVmZXJlbmNlLlxuICAgICAgICAvLyBJZiBzbywgd2UgY2FjaGUgdGhhdCBhcyB0aGUgbGFzdCB2aWFibGUgbmFtZWQgcmVmZXJlbmNlLlxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgd2UgZG8gbm90IG5lZWQgdG8gd2FsayBiYWNrd2FyZHMgbGF0ZXIuXG4gICAgICAgIGlmICh0eXBlID09PSBuYW1lICYmIG93bi5jYWxsKGxlZ2FjeSwgY2hhcmFjdGVycykpIHtcbiAgICAgICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gY2hhcmFjdGVyc1xuICAgICAgICAgIGVudGl0eSA9IGxlZ2FjeVtjaGFyYWN0ZXJzXVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRlcm1pbmF0ZWQgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZCkgPT09IHNlbWljb2xvblxuXG4gICAgICBpZiAodGVybWluYXRlZCkge1xuICAgICAgICBlbmQrK1xuXG4gICAgICAgIG5hbWVkRW50aXR5ID0gdHlwZSA9PT0gbmFtZSA/IGRlY29kZUVudGl0eShjaGFyYWN0ZXJzKSA6IGZhbHNlXG5cbiAgICAgICAgaWYgKG5hbWVkRW50aXR5KSB7XG4gICAgICAgICAgZW50aXR5Q2hhcmFjdGVycyA9IGNoYXJhY3RlcnNcbiAgICAgICAgICBlbnRpdHkgPSBuYW1lZEVudGl0eVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRpZmYgPSAxICsgZW5kIC0gc3RhcnRcblxuICAgICAgaWYgKCF0ZXJtaW5hdGVkICYmICFub25UZXJtaW5hdGVkKSB7XG4gICAgICAgIC8vIEVtcHR5LlxuICAgICAgfSBlbHNlIGlmICghY2hhcmFjdGVycykge1xuICAgICAgICAvLyBBbiBlbXB0eSAocG9zc2libGUpIGVudGl0eSBpcyB2YWxpZCwgdW5sZXNzIGl04oCZcyBudW1lcmljICh0aHVzIGFuXG4gICAgICAgIC8vIGFtcGVyc2FuZCBmb2xsb3dlZCBieSBhbiBvY3RvdGhvcnApLlxuICAgICAgICBpZiAodHlwZSAhPT0gbmFtZSkge1xuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0VtcHR5LCBkaWZmKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IG5hbWUpIHtcbiAgICAgICAgLy8gQW4gYW1wZXJzYW5kIGZvbGxvd2VkIGJ5IGFueXRoaW5nIHVua25vd24sIGFuZCBub3QgdGVybWluYXRlZCwgaXNcbiAgICAgICAgLy8gaW52YWxpZC5cbiAgICAgICAgaWYgKHRlcm1pbmF0ZWQgJiYgIWVudGl0eSkge1xuICAgICAgICAgIHdhcm5pbmcobmFtZWRVbmtub3duLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHRoZXJlcyBzb21ldGhpbmcgYWZ0ZXIgYW4gZW50aXR5IG5hbWUgd2hpY2ggaXMgbm90IGtub3duLCBjYXBcbiAgICAgICAgICAvLyB0aGUgcmVmZXJlbmNlLlxuICAgICAgICAgIGlmIChlbnRpdHlDaGFyYWN0ZXJzICE9PSBjaGFyYWN0ZXJzKSB7XG4gICAgICAgICAgICBlbmQgPSBiZWdpbiArIGVudGl0eUNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgICAgICBkaWZmID0gMSArIGVuZCAtIGJlZ2luXG4gICAgICAgICAgICB0ZXJtaW5hdGVkID0gZmFsc2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBJZiB0aGUgcmVmZXJlbmNlIGlzIG5vdCB0ZXJtaW5hdGVkLCB3YXJuLlxuICAgICAgICAgIGlmICghdGVybWluYXRlZCkge1xuICAgICAgICAgICAgcmVhc29uID0gZW50aXR5Q2hhcmFjdGVycyA/IG5hbWVkTm90VGVybWluYXRlZCA6IG5hbWVkRW1wdHlcblxuICAgICAgICAgICAgaWYgKHNldHRpbmdzLmF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICBmb2xsb3dpbmcgPSB2YWx1ZS5jaGFyQ29kZUF0KGVuZClcblxuICAgICAgICAgICAgICBpZiAoZm9sbG93aW5nID09PSBlcXVhbHNUbykge1xuICAgICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgICAgIGVudGl0eSA9IG51bGxcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbHBoYW51bWVyaWNhbChmb2xsb3dpbmcpKSB7XG4gICAgICAgICAgICAgICAgZW50aXR5ID0gbnVsbFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3YXJuaW5nKHJlYXNvbiwgZGlmZilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZWZlcmVuY2UgPSBlbnRpdHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghdGVybWluYXRlZCkge1xuICAgICAgICAgIC8vIEFsbCBub24tdGVybWluYXRlZCBudW1lcmljIGVudGl0aWVzIGFyZSBub3QgcmVuZGVyZWQsIGFuZCB0cmlnZ2VyIGFcbiAgICAgICAgICAvLyB3YXJuaW5nLlxuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY05vdFRlcm1pbmF0ZWQsIGRpZmYpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXaGVuIHRlcm1pbmF0ZWQgYW5kIG51bWJlciwgcGFyc2UgYXMgZWl0aGVyIGhleGFkZWNpbWFsIG9yIGRlY2ltYWwuXG4gICAgICAgIHJlZmVyZW5jZSA9IHBhcnNlSW50KGNoYXJhY3RlcnMsIGJhc2VzW3R5cGVdKVxuXG4gICAgICAgIC8vIFRyaWdnZXIgYSB3YXJuaW5nIHdoZW4gdGhlIHBhcnNlZCBudW1iZXIgaXMgcHJvaGliaXRlZCwgYW5kIHJlcGxhY2VcbiAgICAgICAgLy8gd2l0aCByZXBsYWNlbWVudCBjaGFyYWN0ZXIuXG4gICAgICAgIGlmIChwcm9oaWJpdGVkKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNQcm9oaWJpdGVkLCBkaWZmKVxuICAgICAgICAgIHJlZmVyZW5jZSA9IGZyb21DaGFyQ29kZShyZXBsYWNlbWVudENoYXJhY3RlcilcbiAgICAgICAgfSBlbHNlIGlmIChyZWZlcmVuY2UgaW4gaW52YWxpZCkge1xuICAgICAgICAgIC8vIFRyaWdnZXIgYSB3YXJuaW5nIHdoZW4gdGhlIHBhcnNlZCBudW1iZXIgaXMgZGlzYWxsb3dlZCwgYW5kIHJlcGxhY2VcbiAgICAgICAgICAvLyBieSBhbiBhbHRlcm5hdGl2ZS5cbiAgICAgICAgICB3YXJuaW5nKG51bWVyaWNEaXNhbGxvd2VkLCBkaWZmKVxuICAgICAgICAgIHJlZmVyZW5jZSA9IGludmFsaWRbcmVmZXJlbmNlXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFBhcnNlIHRoZSBudW1iZXIuXG4gICAgICAgICAgb3V0cHV0ID0gJydcblxuICAgICAgICAgIC8vIFRyaWdnZXIgYSB3YXJuaW5nIHdoZW4gdGhlIHBhcnNlZCBudW1iZXIgc2hvdWxkIG5vdCBiZSB1c2VkLlxuICAgICAgICAgIGlmIChkaXNhbGxvd2VkKHJlZmVyZW5jZSkpIHtcbiAgICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0Rpc2FsbG93ZWQsIGRpZmYpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gU3RyaW5naWZ5IHRoZSBudW1iZXIuXG4gICAgICAgICAgaWYgKHJlZmVyZW5jZSA+IDB4ZmZmZikge1xuICAgICAgICAgICAgcmVmZXJlbmNlIC09IDB4MTAwMDBcbiAgICAgICAgICAgIG91dHB1dCArPSBmcm9tQ2hhckNvZGUoKHJlZmVyZW5jZSA+Pj4gKDEwICYgMHgzZmYpKSB8IDB4ZDgwMClcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IDB4ZGMwMCB8IChyZWZlcmVuY2UgJiAweDNmZilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWZlcmVuY2UgPSBvdXRwdXQgKyBmcm9tQ2hhckNvZGUocmVmZXJlbmNlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZvdW5kIGl0IVxuICAgICAgLy8gRmlyc3QgZWF0IHRoZSBxdWV1ZWQgY2hhcmFjdGVycyBhcyBub3JtYWwgdGV4dCwgdGhlbiBlYXQgYW4gZW50aXR5LlxuICAgICAgaWYgKHJlZmVyZW5jZSkge1xuICAgICAgICBmbHVzaCgpXG5cbiAgICAgICAgcHJldiA9IG5vdygpXG4gICAgICAgIGluZGV4ID0gZW5kIC0gMVxuICAgICAgICBjb2x1bW4gKz0gZW5kIC0gc3RhcnQgKyAxXG4gICAgICAgIHJlc3VsdC5wdXNoKHJlZmVyZW5jZSlcbiAgICAgICAgbmV4dCA9IG5vdygpXG4gICAgICAgIG5leHQub2Zmc2V0KytcblxuICAgICAgICBpZiAoaGFuZGxlUmVmZXJlbmNlKSB7XG4gICAgICAgICAgaGFuZGxlUmVmZXJlbmNlLmNhbGwoXG4gICAgICAgICAgICByZWZlcmVuY2VDb250ZXh0LFxuICAgICAgICAgICAgcmVmZXJlbmNlLFxuICAgICAgICAgICAge3N0YXJ0OiBwcmV2LCBlbmQ6IG5leHR9LFxuICAgICAgICAgICAgdmFsdWUuc2xpY2Uoc3RhcnQgLSAxLCBlbmQpXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcHJldiA9IG5leHRcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHdlIGNvdWxkIG5vdCBmaW5kIGEgcmVmZXJlbmNlLCBxdWV1ZSB0aGUgY2hlY2tlZCBjaGFyYWN0ZXJzIChhc1xuICAgICAgICAvLyBub3JtYWwgY2hhcmFjdGVycyksIGFuZCBtb3ZlIHRoZSBwb2ludGVyIHRvIHRoZWlyIGVuZC5cbiAgICAgICAgLy8gVGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIHdlIGNhbiBiZSBjZXJ0YWluIG5laXRoZXIgbmV3bGluZXMgbm9yXG4gICAgICAgIC8vIGFtcGVyc2FuZHMgYXJlIGluY2x1ZGVkLlxuICAgICAgICBjaGFyYWN0ZXJzID0gdmFsdWUuc2xpY2Uoc3RhcnQgLSAxLCBlbmQpXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcnNcbiAgICAgICAgY29sdW1uICs9IGNoYXJhY3RlcnMubGVuZ3RoXG4gICAgICAgIGluZGV4ID0gZW5kIC0gMVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBIYW5kbGUgYW55dGhpbmcgb3RoZXIgdGhhbiBhbiBhbXBlcnNhbmQsIGluY2x1ZGluZyBuZXdsaW5lcyBhbmQgRU9GLlxuICAgICAgaWYgKFxuICAgICAgICBjaGFyYWN0ZXIgPT09IDEwIC8vIExpbmUgZmVlZFxuICAgICAgKSB7XG4gICAgICAgIGxpbmUrK1xuICAgICAgICBsaW5lcysrXG4gICAgICAgIGNvbHVtbiA9IDBcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgIHF1ZXVlICs9IGZyb21DaGFyQ29kZShjaGFyYWN0ZXIpXG4gICAgICAgIGNvbHVtbisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbHVzaCgpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSByZWR1Y2VkIG5vZGVzLCBhbmQgYW55IHBvc3NpYmxlIHdhcm5pbmdzLlxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG5cbiAgLy8gR2V0IGN1cnJlbnQgcG9zaXRpb24uXG4gIGZ1bmN0aW9uIG5vdygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogbGluZSxcbiAgICAgIGNvbHVtbjogY29sdW1uLFxuICAgICAgb2Zmc2V0OiBpbmRleCArIChwb3Mub2Zmc2V0IHx8IDApXG4gICAgfVxuICB9XG5cbiAgLy8g4oCcVGhyb3figJ0gYSBwYXJzZS1lcnJvcjogYSB3YXJuaW5nLlxuICBmdW5jdGlvbiBwYXJzZUVycm9yKGNvZGUsIG9mZnNldCkge1xuICAgIHZhciBwb3NpdGlvbiA9IG5vdygpXG5cbiAgICBwb3NpdGlvbi5jb2x1bW4gKz0gb2Zmc2V0XG4gICAgcG9zaXRpb24ub2Zmc2V0ICs9IG9mZnNldFxuXG4gICAgaGFuZGxlV2FybmluZy5jYWxsKHdhcm5pbmdDb250ZXh0LCBtZXNzYWdlc1tjb2RlXSwgcG9zaXRpb24sIGNvZGUpXG4gIH1cblxuICAvLyBGbHVzaCBgcXVldWVgIChub3JtYWwgdGV4dCkuXG4gIC8vIE1hY3JvIGludm9rZWQgYmVmb3JlIGVhY2ggZW50aXR5IGFuZCBhdCB0aGUgZW5kIG9mIGB2YWx1ZWAuXG4gIC8vIERvZXMgbm90aGluZyB3aGVuIGBxdWV1ZWAgaXMgZW1wdHkuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIGlmIChxdWV1ZSkge1xuICAgICAgcmVzdWx0LnB1c2gocXVldWUpXG5cbiAgICAgIGlmIChoYW5kbGVUZXh0KSB7XG4gICAgICAgIGhhbmRsZVRleHQuY2FsbCh0ZXh0Q29udGV4dCwgcXVldWUsIHtzdGFydDogcHJldiwgZW5kOiBub3coKX0pXG4gICAgICB9XG5cbiAgICAgIHF1ZXVlID0gJydcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgaXMgb3V0c2lkZSB0aGUgcGVybWlzc2libGUgdW5pY29kZSByYW5nZS5cbmZ1bmN0aW9uIHByb2hpYml0ZWQoY29kZSkge1xuICByZXR1cm4gKGNvZGUgPj0gMHhkODAwICYmIGNvZGUgPD0gMHhkZmZmKSB8fCBjb2RlID4gMHgxMGZmZmZcbn1cblxuLy8gQ2hlY2sgaWYgYGNoYXJhY3RlcmAgaXMgZGlzYWxsb3dlZC5cbmZ1bmN0aW9uIGRpc2FsbG93ZWQoY29kZSkge1xuICByZXR1cm4gKFxuICAgIChjb2RlID49IDB4MDAwMSAmJiBjb2RlIDw9IDB4MDAwOCkgfHxcbiAgICBjb2RlID09PSAweDAwMGIgfHxcbiAgICAoY29kZSA+PSAweDAwMGQgJiYgY29kZSA8PSAweDAwMWYpIHx8XG4gICAgKGNvZGUgPj0gMHgwMDdmICYmIGNvZGUgPD0gMHgwMDlmKSB8fFxuICAgIChjb2RlID49IDB4ZmRkMCAmJiBjb2RlIDw9IDB4ZmRlZikgfHxcbiAgICAoY29kZSAmIDB4ZmZmZikgPT09IDB4ZmZmZiB8fFxuICAgIChjb2RlICYgMHhmZmZmKSA9PT0gMHhmZmZlXG4gIClcbn1cbiIsIi8vIC5kaXJuYW1lLCAuYmFzZW5hbWUsIGFuZCAuZXh0bmFtZSBtZXRob2RzIGFyZSBleHRyYWN0ZWQgZnJvbSBOb2RlLmpzIHY4LjExLjEsXG4vLyBiYWNrcG9ydGVkIGFuZCB0cmFuc3BsaXRlZCB3aXRoIEJhYmVsLCB3aXRoIGJhY2t3YXJkcy1jb21wYXQgZml4ZXNcblxuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbi8vIHJlc29sdmVzIC4gYW5kIC4uIGVsZW1lbnRzIGluIGEgcGF0aCBhcnJheSB3aXRoIGRpcmVjdG9yeSBuYW1lcyB0aGVyZVxuLy8gbXVzdCBiZSBubyBzbGFzaGVzLCBlbXB0eSBlbGVtZW50cywgb3IgZGV2aWNlIG5hbWVzIChjOlxcKSBpbiB0aGUgYXJyYXlcbi8vIChzbyBhbHNvIG5vIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHNsYXNoZXMgLSBpdCBkb2VzIG5vdCBkaXN0aW5ndWlzaFxuLy8gcmVsYXRpdmUgYW5kIGFic29sdXRlIHBhdGhzKVxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXkocGFydHMsIGFsbG93QWJvdmVSb290KSB7XG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBwYXJ0cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciBsYXN0ID0gcGFydHNbaV07XG4gICAgaWYgKGxhc3QgPT09ICcuJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgIH0gZWxzZSBpZiAobGFzdCA9PT0gJy4uJykge1xuICAgICAgcGFydHMuc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBwYXJ0cy5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIC8vIGlmIHRoZSBwYXRoIGlzIGFsbG93ZWQgdG8gZ28gYWJvdmUgdGhlIHJvb3QsIHJlc3RvcmUgbGVhZGluZyAuLnNcbiAgaWYgKGFsbG93QWJvdmVSb290KSB7XG4gICAgZm9yICg7IHVwLS07IHVwKSB7XG4gICAgICBwYXJ0cy51bnNoaWZ0KCcuLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuLy8gcGF0aC5yZXNvbHZlKFtmcm9tIC4uLl0sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZXNvbHZlID0gZnVuY3Rpb24oKSB7XG4gIHZhciByZXNvbHZlZFBhdGggPSAnJyxcbiAgICAgIHJlc29sdmVkQWJzb2x1dGUgPSBmYWxzZTtcblxuICBmb3IgKHZhciBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gLTEgJiYgIXJlc29sdmVkQWJzb2x1dGU7IGktLSkge1xuICAgIHZhciBwYXRoID0gKGkgPj0gMCkgPyBhcmd1bWVudHNbaV0gOiBwcm9jZXNzLmN3ZCgpO1xuXG4gICAgLy8gU2tpcCBlbXB0eSBhbmQgaW52YWxpZCBlbnRyaWVzXG4gICAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIHRvIHBhdGgucmVzb2x2ZSBtdXN0IGJlIHN0cmluZ3MnKTtcbiAgICB9IGVsc2UgaWYgKCFwYXRoKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICByZXNvbHZlZFBhdGggPSBwYXRoICsgJy8nICsgcmVzb2x2ZWRQYXRoO1xuICAgIHJlc29sdmVkQWJzb2x1dGUgPSBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xuICB9XG5cbiAgLy8gQXQgdGhpcyBwb2ludCB0aGUgcGF0aCBzaG91bGQgYmUgcmVzb2x2ZWQgdG8gYSBmdWxsIGFic29sdXRlIHBhdGgsIGJ1dFxuICAvLyBoYW5kbGUgcmVsYXRpdmUgcGF0aHMgdG8gYmUgc2FmZSAobWlnaHQgaGFwcGVuIHdoZW4gcHJvY2Vzcy5jd2QoKSBmYWlscylcblxuICAvLyBOb3JtYWxpemUgdGhlIHBhdGhcbiAgcmVzb2x2ZWRQYXRoID0gbm9ybWFsaXplQXJyYXkoZmlsdGVyKHJlc29sdmVkUGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFyZXNvbHZlZEFic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgcmV0dXJuICgocmVzb2x2ZWRBYnNvbHV0ZSA/ICcvJyA6ICcnKSArIHJlc29sdmVkUGF0aCkgfHwgJy4nO1xufTtcblxuLy8gcGF0aC5ub3JtYWxpemUocGF0aClcbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMubm9ybWFsaXplID0gZnVuY3Rpb24ocGF0aCkge1xuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKSxcbiAgICAgIHRyYWlsaW5nU2xhc2ggPSBzdWJzdHIocGF0aCwgLTEpID09PSAnLyc7XG5cbiAgLy8gTm9ybWFsaXplIHRoZSBwYXRoXG4gIHBhdGggPSBub3JtYWxpemVBcnJheShmaWx0ZXIocGF0aC5zcGxpdCgnLycpLCBmdW5jdGlvbihwKSB7XG4gICAgcmV0dXJuICEhcDtcbiAgfSksICFpc0Fic29sdXRlKS5qb2luKCcvJyk7XG5cbiAgaWYgKCFwYXRoICYmICFpc0Fic29sdXRlKSB7XG4gICAgcGF0aCA9ICcuJztcbiAgfVxuICBpZiAocGF0aCAmJiB0cmFpbGluZ1NsYXNoKSB7XG4gICAgcGF0aCArPSAnLyc7XG4gIH1cblxuICByZXR1cm4gKGlzQWJzb2x1dGUgPyAnLycgOiAnJykgKyBwYXRoO1xufTtcblxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5pc0Fic29sdXRlID0gZnVuY3Rpb24ocGF0aCkge1xuICByZXR1cm4gcGF0aC5jaGFyQXQoMCkgPT09ICcvJztcbn07XG5cbi8vIHBvc2l4IHZlcnNpb25cbmV4cG9ydHMuam9pbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0aHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICByZXR1cm4gZXhwb3J0cy5ub3JtYWxpemUoZmlsdGVyKHBhdGhzLCBmdW5jdGlvbihwLCBpbmRleCkge1xuICAgIGlmICh0eXBlb2YgcCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50cyB0byBwYXRoLmpvaW4gbXVzdCBiZSBzdHJpbmdzJyk7XG4gICAgfVxuICAgIHJldHVybiBwO1xuICB9KS5qb2luKCcvJykpO1xufTtcblxuXG4vLyBwYXRoLnJlbGF0aXZlKGZyb20sIHRvKVxuLy8gcG9zaXggdmVyc2lvblxuZXhwb3J0cy5yZWxhdGl2ZSA9IGZ1bmN0aW9uKGZyb20sIHRvKSB7XG4gIGZyb20gPSBleHBvcnRzLnJlc29sdmUoZnJvbSkuc3Vic3RyKDEpO1xuICB0byA9IGV4cG9ydHMucmVzb2x2ZSh0bykuc3Vic3RyKDEpO1xuXG4gIGZ1bmN0aW9uIHRyaW0oYXJyKSB7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICBmb3IgKDsgc3RhcnQgPCBhcnIubGVuZ3RoOyBzdGFydCsrKSB7XG4gICAgICBpZiAoYXJyW3N0YXJ0XSAhPT0gJycpIGJyZWFrO1xuICAgIH1cblxuICAgIHZhciBlbmQgPSBhcnIubGVuZ3RoIC0gMTtcbiAgICBmb3IgKDsgZW5kID49IDA7IGVuZC0tKSB7XG4gICAgICBpZiAoYXJyW2VuZF0gIT09ICcnKSBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoc3RhcnQgPiBlbmQpIHJldHVybiBbXTtcbiAgICByZXR1cm4gYXJyLnNsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEpO1xuICB9XG5cbiAgdmFyIGZyb21QYXJ0cyA9IHRyaW0oZnJvbS5zcGxpdCgnLycpKTtcbiAgdmFyIHRvUGFydHMgPSB0cmltKHRvLnNwbGl0KCcvJykpO1xuXG4gIHZhciBsZW5ndGggPSBNYXRoLm1pbihmcm9tUGFydHMubGVuZ3RoLCB0b1BhcnRzLmxlbmd0aCk7XG4gIHZhciBzYW1lUGFydHNMZW5ndGggPSBsZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZnJvbVBhcnRzW2ldICE9PSB0b1BhcnRzW2ldKSB7XG4gICAgICBzYW1lUGFydHNMZW5ndGggPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgdmFyIG91dHB1dFBhcnRzID0gW107XG4gIGZvciAodmFyIGkgPSBzYW1lUGFydHNMZW5ndGg7IGkgPCBmcm9tUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBvdXRwdXRQYXJ0cy5wdXNoKCcuLicpO1xuICB9XG5cbiAgb3V0cHV0UGFydHMgPSBvdXRwdXRQYXJ0cy5jb25jYXQodG9QYXJ0cy5zbGljZShzYW1lUGFydHNMZW5ndGgpKTtcblxuICByZXR1cm4gb3V0cHV0UGFydHMuam9pbignLycpO1xufTtcblxuZXhwb3J0cy5zZXAgPSAnLyc7XG5leHBvcnRzLmRlbGltaXRlciA9ICc6JztcblxuZXhwb3J0cy5kaXJuYW1lID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgaWYgKHR5cGVvZiBwYXRoICE9PSAnc3RyaW5nJykgcGF0aCA9IHBhdGggKyAnJztcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSByZXR1cm4gJy4nO1xuICB2YXIgY29kZSA9IHBhdGguY2hhckNvZGVBdCgwKTtcbiAgdmFyIGhhc1Jvb3QgPSBjb2RlID09PSA0NyAvKi8qLztcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgZm9yICh2YXIgaSA9IHBhdGgubGVuZ3RoIC0gMTsgaSA+PSAxOyAtLWkpIHtcbiAgICBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIGVuZCA9IGk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAvLyBXZSBzYXcgdGhlIGZpcnN0IG5vbi1wYXRoIHNlcGFyYXRvclxuICAgICAgbWF0Y2hlZFNsYXNoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiBoYXNSb290ID8gJy8nIDogJy4nO1xuICBpZiAoaGFzUm9vdCAmJiBlbmQgPT09IDEpIHtcbiAgICAvLyByZXR1cm4gJy8vJztcbiAgICAvLyBCYWNrd2FyZHMtY29tcGF0IGZpeDpcbiAgICByZXR1cm4gJy8nO1xuICB9XG4gIHJldHVybiBwYXRoLnNsaWNlKDAsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBiYXNlbmFtZShwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG5cbiAgdmFyIHN0YXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgdmFyIGk7XG5cbiAgZm9yIChpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIGlmIChwYXRoLmNoYXJDb2RlQXQoaSkgPT09IDQ3IC8qLyovKSB7XG4gICAgICAgIC8vIElmIHdlIHJlYWNoZWQgYSBwYXRoIHNlcGFyYXRvciB0aGF0IHdhcyBub3QgcGFydCBvZiBhIHNldCBvZiBwYXRoXG4gICAgICAgIC8vIHNlcGFyYXRvcnMgYXQgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLCBzdG9wIG5vd1xuICAgICAgICBpZiAoIW1hdGNoZWRTbGFzaCkge1xuICAgICAgICAgIHN0YXJ0ID0gaSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gcGF0aCBjb21wb25lbnRcbiAgICAgIG1hdGNoZWRTbGFzaCA9IGZhbHNlO1xuICAgICAgZW5kID0gaSArIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGVuZCA9PT0gLTEpIHJldHVybiAnJztcbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnQsIGVuZCk7XG59XG5cbi8vIFVzZXMgYSBtaXhlZCBhcHByb2FjaCBmb3IgYmFja3dhcmRzLWNvbXBhdGliaWxpdHksIGFzIGV4dCBiZWhhdmlvciBjaGFuZ2VkXG4vLyBpbiBuZXcgTm9kZS5qcyB2ZXJzaW9ucywgc28gb25seSBiYXNlbmFtZSgpIGFib3ZlIGlzIGJhY2twb3J0ZWQgaGVyZVxuZXhwb3J0cy5iYXNlbmFtZSA9IGZ1bmN0aW9uIChwYXRoLCBleHQpIHtcbiAgdmFyIGYgPSBiYXNlbmFtZShwYXRoKTtcbiAgaWYgKGV4dCAmJiBmLnN1YnN0cigtMSAqIGV4dC5sZW5ndGgpID09PSBleHQpIHtcbiAgICBmID0gZi5zdWJzdHIoMCwgZi5sZW5ndGggLSBleHQubGVuZ3RoKTtcbiAgfVxuICByZXR1cm4gZjtcbn07XG5cbmV4cG9ydHMuZXh0bmFtZSA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gIGlmICh0eXBlb2YgcGF0aCAhPT0gJ3N0cmluZycpIHBhdGggPSBwYXRoICsgJyc7XG4gIHZhciBzdGFydERvdCA9IC0xO1xuICB2YXIgc3RhcnRQYXJ0ID0gMDtcbiAgdmFyIGVuZCA9IC0xO1xuICB2YXIgbWF0Y2hlZFNsYXNoID0gdHJ1ZTtcbiAgLy8gVHJhY2sgdGhlIHN0YXRlIG9mIGNoYXJhY3RlcnMgKGlmIGFueSkgd2Ugc2VlIGJlZm9yZSBvdXIgZmlyc3QgZG90IGFuZFxuICAvLyBhZnRlciBhbnkgcGF0aCBzZXBhcmF0b3Igd2UgZmluZFxuICB2YXIgcHJlRG90U3RhdGUgPSAwO1xuICBmb3IgKHZhciBpID0gcGF0aC5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgIHZhciBjb2RlID0gcGF0aC5jaGFyQ29kZUF0KGkpO1xuICAgIGlmIChjb2RlID09PSA0NyAvKi8qLykge1xuICAgICAgICAvLyBJZiB3ZSByZWFjaGVkIGEgcGF0aCBzZXBhcmF0b3IgdGhhdCB3YXMgbm90IHBhcnQgb2YgYSBzZXQgb2YgcGF0aFxuICAgICAgICAvLyBzZXBhcmF0b3JzIGF0IHRoZSBlbmQgb2YgdGhlIHN0cmluZywgc3RvcCBub3dcbiAgICAgICAgaWYgKCFtYXRjaGVkU2xhc2gpIHtcbiAgICAgICAgICBzdGFydFBhcnQgPSBpICsgMTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICBpZiAoZW5kID09PSAtMSkge1xuICAgICAgLy8gV2Ugc2F3IHRoZSBmaXJzdCBub24tcGF0aCBzZXBhcmF0b3IsIG1hcmsgdGhpcyBhcyB0aGUgZW5kIG9mIG91clxuICAgICAgLy8gZXh0ZW5zaW9uXG4gICAgICBtYXRjaGVkU2xhc2ggPSBmYWxzZTtcbiAgICAgIGVuZCA9IGkgKyAxO1xuICAgIH1cbiAgICBpZiAoY29kZSA9PT0gNDYgLyouKi8pIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBvdXIgZmlyc3QgZG90LCBtYXJrIGl0IGFzIHRoZSBzdGFydCBvZiBvdXIgZXh0ZW5zaW9uXG4gICAgICAgIGlmIChzdGFydERvdCA9PT0gLTEpXG4gICAgICAgICAgc3RhcnREb3QgPSBpO1xuICAgICAgICBlbHNlIGlmIChwcmVEb3RTdGF0ZSAhPT0gMSlcbiAgICAgICAgICBwcmVEb3RTdGF0ZSA9IDE7XG4gICAgfSBlbHNlIGlmIChzdGFydERvdCAhPT0gLTEpIHtcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgYW5kIG5vbi1wYXRoIHNlcGFyYXRvciBiZWZvcmUgb3VyIGRvdCwgc28gd2Ugc2hvdWxkXG4gICAgICAvLyBoYXZlIGEgZ29vZCBjaGFuY2UgYXQgaGF2aW5nIGEgbm9uLWVtcHR5IGV4dGVuc2lvblxuICAgICAgcHJlRG90U3RhdGUgPSAtMTtcbiAgICB9XG4gIH1cblxuICBpZiAoc3RhcnREb3QgPT09IC0xIHx8IGVuZCA9PT0gLTEgfHxcbiAgICAgIC8vIFdlIHNhdyBhIG5vbi1kb3QgY2hhcmFjdGVyIGltbWVkaWF0ZWx5IGJlZm9yZSB0aGUgZG90XG4gICAgICBwcmVEb3RTdGF0ZSA9PT0gMCB8fFxuICAgICAgLy8gVGhlIChyaWdodC1tb3N0KSB0cmltbWVkIHBhdGggY29tcG9uZW50IGlzIGV4YWN0bHkgJy4uJ1xuICAgICAgcHJlRG90U3RhdGUgPT09IDEgJiYgc3RhcnREb3QgPT09IGVuZCAtIDEgJiYgc3RhcnREb3QgPT09IHN0YXJ0UGFydCArIDEpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgcmV0dXJuIHBhdGguc2xpY2Uoc3RhcnREb3QsIGVuZCk7XG59O1xuXG5mdW5jdGlvbiBmaWx0ZXIgKHhzLCBmKSB7XG4gICAgaWYgKHhzLmZpbHRlcikgcmV0dXJuIHhzLmZpbHRlcihmKTtcbiAgICB2YXIgcmVzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB4cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZih4c1tpXSwgaSwgeHMpKSByZXMucHVzaCh4c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59XG5cbi8vIFN0cmluZy5wcm90b3R5cGUuc3Vic3RyIC0gbmVnYXRpdmUgaW5kZXggZG9uJ3Qgd29yayBpbiBJRThcbnZhciBzdWJzdHIgPSAnYWInLnN1YnN0cigtMSkgPT09ICdiJ1xuICAgID8gZnVuY3Rpb24gKHN0ciwgc3RhcnQsIGxlbikgeyByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKSB9XG4gICAgOiBmdW5jdGlvbiAoc3RyLCBzdGFydCwgbGVuKSB7XG4gICAgICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gc3RyLmxlbmd0aCArIHN0YXJ0O1xuICAgICAgICByZXR1cm4gc3RyLnN1YnN0cihzdGFydCwgbGVuKTtcbiAgICB9XG47XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1bmhlcml0ID0gcmVxdWlyZSgndW5oZXJpdCcpO1xudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcbnZhciBQYXJzZXIgPSByZXF1aXJlKCcuL2xpYi9wYXJzZXIuanMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcbnBhcnNlLlBhcnNlciA9IFBhcnNlcjtcblxuZnVuY3Rpb24gcGFyc2Uob3B0aW9ucykge1xuICB2YXIgTG9jYWwgPSB1bmhlcml0KFBhcnNlcik7XG4gIExvY2FsLnByb3RvdHlwZS5vcHRpb25zID0geHRlbmQoTG9jYWwucHJvdG90eXBlLm9wdGlvbnMsIHRoaXMuZGF0YSgnc2V0dGluZ3MnKSwgb3B0aW9ucyk7XG4gIHRoaXMuUGFyc2VyID0gTG9jYWw7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG52YXIgZW50aXRpZXMgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG5cbi8qIEZhY3RvcnkgdG8gY3JlYXRlIGFuIGVudGl0eSBkZWNvZGVyLiAqL1xuZnVuY3Rpb24gZmFjdG9yeShjdHgpIHtcbiAgZGVjb2Rlci5yYXcgPSBkZWNvZGVSYXc7XG5cbiAgcmV0dXJuIGRlY29kZXI7XG5cbiAgLyogTm9ybWFsaXplIGBwb3NpdGlvbmAgdG8gYWRkIGFuIGBpbmRlbnRgLiAqL1xuICBmdW5jdGlvbiBub3JtYWxpemUocG9zaXRpb24pIHtcbiAgICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXQ7XG4gICAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lO1xuICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgIHdoaWxlICgrK2xpbmUpIHtcbiAgICAgIGlmICghKGxpbmUgaW4gb2Zmc2V0cykpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKChvZmZzZXRzW2xpbmVdIHx8IDApICsgMSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBwb3NpdGlvbixcbiAgICAgIGluZGVudDogcmVzdWx0XG4gICAgfTtcbiAgfVxuXG4gIC8qIEhhbmRsZSBhIHdhcm5pbmcuXG4gICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd29vb3JtL3BhcnNlLWVudGl0aWVzXG4gICAqIGZvciB0aGUgd2FybmluZ3MuICovXG4gIGZ1bmN0aW9uIGhhbmRsZVdhcm5pbmcocmVhc29uLCBwb3NpdGlvbiwgY29kZSkge1xuICAgIGlmIChjb2RlID09PSAzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY3R4LmZpbGUubWVzc2FnZShyZWFzb24sIHBvc2l0aW9uKTtcbiAgfVxuXG4gIC8qIERlY29kZSBgdmFsdWVgIChhdCBgcG9zaXRpb25gKSBpbnRvIHRleHQtbm9kZXMuICovXG4gIGZ1bmN0aW9uIGRlY29kZXIodmFsdWUsIHBvc2l0aW9uLCBoYW5kbGVyKSB7XG4gICAgZW50aXRpZXModmFsdWUsIHtcbiAgICAgIHBvc2l0aW9uOiBub3JtYWxpemUocG9zaXRpb24pLFxuICAgICAgd2FybmluZzogaGFuZGxlV2FybmluZyxcbiAgICAgIHRleHQ6IGhhbmRsZXIsXG4gICAgICByZWZlcmVuY2U6IGhhbmRsZXIsXG4gICAgICB0ZXh0Q29udGV4dDogY3R4LFxuICAgICAgcmVmZXJlbmNlQ29udGV4dDogY3R4XG4gICAgfSk7XG4gIH1cblxuICAvKiBEZWNvZGUgYHZhbHVlYCAoYXQgYHBvc2l0aW9uYCkgaW50byBhIHN0cmluZy4gKi9cbiAgZnVuY3Rpb24gZGVjb2RlUmF3KHZhbHVlLCBwb3NpdGlvbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBlbnRpdGllcyh2YWx1ZSwgeHRlbmQob3B0aW9ucywge1xuICAgICAgcG9zaXRpb246IG5vcm1hbGl6ZShwb3NpdGlvbiksXG4gICAgICB3YXJuaW5nOiBoYW5kbGVXYXJuaW5nXG4gICAgfSkpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwb3NpdGlvbjogdHJ1ZSxcbiAgZ2ZtOiB0cnVlLFxuICBjb21tb25tYXJrOiBmYWxzZSxcbiAgZm9vdG5vdGVzOiBmYWxzZSxcbiAgcGVkYW50aWM6IGZhbHNlLFxuICBibG9ja3M6IHJlcXVpcmUoJy4vYmxvY2stZWxlbWVudHMuanNvbicpXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZTtcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGluZGV4ID0gdmFsdWUuaW5kZXhPZignXFxuJywgZnJvbUluZGV4KTtcblxuICB3aGlsZSAoaW5kZXggPiBmcm9tSW5kZXgpIHtcbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4IC0gMSkgIT09ICcgJykge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaW5kZXgtLTtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCdgJywgZnJvbUluZGV4KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBsb2NhdGU7XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZS5pbmRleE9mKCd+ficsIGZyb21JbmRleCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9jYXRlO1xuXG5mdW5jdGlvbiBsb2NhdGUodmFsdWUsIGZyb21JbmRleCkge1xuICB2YXIgYXN0ZXJpc2sgPSB2YWx1ZS5pbmRleE9mKCcqJywgZnJvbUluZGV4KTtcbiAgdmFyIHVuZGVyc2NvcmUgPSB2YWx1ZS5pbmRleE9mKCdfJywgZnJvbUluZGV4KTtcblxuICBpZiAodW5kZXJzY29yZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gYXN0ZXJpc2s7XG4gIH1cblxuICBpZiAoYXN0ZXJpc2sgPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVyc2NvcmU7XG4gIH1cblxuICByZXR1cm4gdW5kZXJzY29yZSA8IGFzdGVyaXNrID8gdW5kZXJzY29yZSA6IGFzdGVyaXNrO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZTtcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJ1xcXFwnLCBmcm9tSW5kZXgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZTtcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxpbmsgPSB2YWx1ZS5pbmRleE9mKCdbJywgZnJvbUluZGV4KTtcbiAgdmFyIGltYWdlID0gdmFsdWUuaW5kZXhPZignIVsnLCBmcm9tSW5kZXgpO1xuXG4gIGlmIChpbWFnZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gbGluaztcbiAgfVxuXG4gIC8qIExpbmsgY2FuIG5ldmVyIGJlIGAtMWAgaWYgYW4gaW1hZ2UgaXMgZm91bmQsIHNvIHdlIGRvbuKAmXQgbmVlZFxuICAgKiB0byBjaGVjayBmb3IgdGhhdCA6KSAqL1xuICByZXR1cm4gbGluayA8IGltYWdlID8gbGluayA6IGltYWdlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZTtcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGFzdGVyaXNrID0gdmFsdWUuaW5kZXhPZignKionLCBmcm9tSW5kZXgpO1xuICB2YXIgdW5kZXJzY29yZSA9IHZhbHVlLmluZGV4T2YoJ19fJywgZnJvbUluZGV4KTtcblxuICBpZiAodW5kZXJzY29yZSA9PT0gLTEpIHtcbiAgICByZXR1cm4gYXN0ZXJpc2s7XG4gIH1cblxuICBpZiAoYXN0ZXJpc2sgPT09IC0xKSB7XG4gICAgcmV0dXJuIHVuZGVyc2NvcmU7XG4gIH1cblxuICByZXR1cm4gdW5kZXJzY29yZSA8IGFzdGVyaXNrID8gdW5kZXJzY29yZSA6IGFzdGVyaXNrO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZTtcblxuZnVuY3Rpb24gbG9jYXRlKHZhbHVlLCBmcm9tSW5kZXgpIHtcbiAgcmV0dXJuIHZhbHVlLmluZGV4T2YoJzwnLCBmcm9tSW5kZXgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxvY2F0ZTtcblxudmFyIFBST1RPQ09MUyA9IFsnaHR0cHM6Ly8nLCAnaHR0cDovLycsICdtYWlsdG86J107XG5cbmZ1bmN0aW9uIGxvY2F0ZSh2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBQUk9UT0NPTFMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIG1pbiA9IC0xO1xuICB2YXIgcG9zaXRpb247XG5cbiAgaWYgKCF0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBwb3NpdGlvbiA9IHZhbHVlLmluZGV4T2YoUFJPVE9DT0xTW2luZGV4XSwgZnJvbUluZGV4KTtcblxuICAgIGlmIChwb3NpdGlvbiAhPT0gLTEgJiYgKHBvc2l0aW9uIDwgbWluIHx8IG1pbiA9PT0gLTEpKSB7XG4gICAgICBtaW4gPSBwb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWluO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpO1xudmFyIHJlbW92ZVBvc2l0aW9uID0gcmVxdWlyZSgndW5pc3QtdXRpbC1yZW1vdmUtcG9zaXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZTtcblxudmFyIENfTkVXTElORSA9ICdcXG4nO1xudmFyIEVYUFJFU1NJT05fTElORV9CUkVBS1MgPSAvXFxyXFxufFxcci9nO1xuXG4vKiBQYXJzZSB0aGUgYm91bmQgZmlsZS4gKi9cbmZ1bmN0aW9uIHBhcnNlKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciB2YWx1ZSA9IFN0cmluZyhzZWxmLmZpbGUpO1xuICB2YXIgc3RhcnQgPSB7bGluZTogMSwgY29sdW1uOiAxLCBvZmZzZXQ6IDB9O1xuICB2YXIgY29udGVudCA9IHh0ZW5kKHN0YXJ0KTtcbiAgdmFyIG5vZGU7XG5cbiAgLyogQ2xlYW4gbm9uLXVuaXggbmV3bGluZXM6IGBcXHJcXG5gIGFuZCBgXFxyYCBhcmUgYWxsXG4gICAqIGNoYW5nZWQgdG8gYFxcbmAuICBUaGlzIHNob3VsZCBub3QgYWZmZWN0IHBvc2l0aW9uYWxcbiAgICogaW5mb3JtYXRpb24uICovXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShFWFBSRVNTSU9OX0xJTkVfQlJFQUtTLCBDX05FV0xJTkUpO1xuXG4gIGlmICh2YWx1ZS5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDEpO1xuXG4gICAgY29udGVudC5jb2x1bW4rKztcbiAgICBjb250ZW50Lm9mZnNldCsrO1xuICB9XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiAncm9vdCcsXG4gICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVCbG9jayh2YWx1ZSwgY29udGVudCksXG4gICAgcG9zaXRpb246IHtcbiAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgIGVuZDogc2VsZi5lb2YgfHwgeHRlbmQoc3RhcnQpXG4gICAgfVxuICB9O1xuXG4gIGlmICghc2VsZi5vcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgcmVtb3ZlUG9zaXRpb24obm9kZSwgdHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKTtcbnZhciB0b2dnbGUgPSByZXF1aXJlKCdzdGF0ZS10b2dnbGUnKTtcbnZhciB2ZmlsZUxvY2F0aW9uID0gcmVxdWlyZSgndmZpbGUtbG9jYXRpb24nKTtcbnZhciB1bmVzY2FwZSA9IHJlcXVpcmUoJy4vdW5lc2NhcGUnKTtcbnZhciBkZWNvZGUgPSByZXF1aXJlKCcuL2RlY29kZScpO1xudmFyIHRva2VuaXplciA9IHJlcXVpcmUoJy4vdG9rZW5pemVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VyO1xuXG5mdW5jdGlvbiBQYXJzZXIoZG9jLCBmaWxlKSB7XG4gIHRoaXMuZmlsZSA9IGZpbGU7XG4gIHRoaXMub2Zmc2V0ID0ge307XG4gIHRoaXMub3B0aW9ucyA9IHh0ZW5kKHRoaXMub3B0aW9ucyk7XG4gIHRoaXMuc2V0T3B0aW9ucyh7fSk7XG5cbiAgdGhpcy5pbkxpc3QgPSBmYWxzZTtcbiAgdGhpcy5pbkJsb2NrID0gZmFsc2U7XG4gIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gIHRoaXMuYXRTdGFydCA9IHRydWU7XG5cbiAgdGhpcy50b09mZnNldCA9IHZmaWxlTG9jYXRpb24oZmlsZSkudG9PZmZzZXQ7XG4gIHRoaXMudW5lc2NhcGUgPSB1bmVzY2FwZSh0aGlzLCAnZXNjYXBlJyk7XG4gIHRoaXMuZGVjb2RlID0gZGVjb2RlKHRoaXMpO1xufVxuXG52YXIgcHJvdG8gPSBQYXJzZXIucHJvdG90eXBlO1xuXG4vKiBFeHBvc2UgY29yZS4gKi9cbnByb3RvLnNldE9wdGlvbnMgPSByZXF1aXJlKCcuL3NldC1vcHRpb25zJyk7XG5wcm90by5wYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcblxuLyogRXhwb3NlIGBkZWZhdWx0c2AuICovXG5wcm90by5vcHRpb25zID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKiBFbnRlciBhbmQgZXhpdCBoZWxwZXJzLiAqL1xucHJvdG8uZXhpdFN0YXJ0ID0gdG9nZ2xlKCdhdFN0YXJ0JywgdHJ1ZSk7XG5wcm90by5lbnRlckxpc3QgPSB0b2dnbGUoJ2luTGlzdCcsIGZhbHNlKTtcbnByb3RvLmVudGVyTGluayA9IHRvZ2dsZSgnaW5MaW5rJywgZmFsc2UpO1xucHJvdG8uZW50ZXJCbG9jayA9IHRvZ2dsZSgnaW5CbG9jaycsIGZhbHNlKTtcblxuLyogTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBwYXJhZ3JhcGg6XG4gKlxuICogYGBgbWFya2Rvd25cbiAqIEEgcGFyYWdyYXBoLCBmb2xsb3dlZCBieSBhIHRoZW1hdGljIGJyZWFrLlxuICogX19fXG4gKiBgYGBcbiAqXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnVxuICogdGhlIHBhcmFncmFwaC4gKi9cbnByb3RvLmludGVycnVwdFBhcmFncmFwaCA9IFtcbiAgWyd0aGVtYXRpY0JyZWFrJ10sXG4gIFsnYXR4SGVhZGluZyddLFxuICBbJ2ZlbmNlZENvZGUnXSxcbiAgWydibG9ja3F1b3RlJ10sXG4gIFsnaHRtbCddLFxuICBbJ3NldGV4dEhlYWRpbmcnLCB7Y29tbW9ubWFyazogZmFsc2V9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV0sXG4gIFsnZm9vdG5vdGUnLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXTtcblxuLyogTm9kZXMgdGhhdCBjYW4gaW50ZXJ1cHQgYSBsaXN0OlxuICpcbiAqIGBgYG1hcmtkb3duXG4gKiAtIE9uZVxuICogX19fXG4gKiBgYGBcbiAqXG4gKiBJbiB0aGUgYWJvdmUgZXhhbXBsZSwgdGhlIHRoZW1hdGljIGJyZWFrIOKAnGludGVydXB0c+KAnVxuICogdGhlIGxpc3QuICovXG5wcm90by5pbnRlcnJ1cHRMaXN0ID0gW1xuICBbJ2F0eEhlYWRpbmcnLCB7cGVkYW50aWM6IGZhbHNlfV0sXG4gIFsnZmVuY2VkQ29kZScsIHtwZWRhbnRpYzogZmFsc2V9XSxcbiAgWyd0aGVtYXRpY0JyZWFrJywge3BlZGFudGljOiBmYWxzZX1dLFxuICBbJ2RlZmluaXRpb24nLCB7Y29tbW9ubWFyazogZmFsc2V9XSxcbiAgWydmb290bm90ZScsIHtjb21tb25tYXJrOiBmYWxzZX1dXG5dO1xuXG4vKiBOb2RlcyB0aGF0IGNhbiBpbnRlcnVwdCBhIGJsb2NrcXVvdGU6XG4gKlxuICogYGBgbWFya2Rvd25cbiAqID4gQSBwYXJhZ3JhcGguXG4gKiBfX19cbiAqIGBgYFxuICpcbiAqIEluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgdGhlbWF0aWMgYnJlYWsg4oCcaW50ZXJ1cHRz4oCdXG4gKiB0aGUgYmxvY2txdW90ZS4gKi9cbnByb3RvLmludGVycnVwdEJsb2NrcXVvdGUgPSBbXG4gIFsnaW5kZW50ZWRDb2RlJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydmZW5jZWRDb2RlJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydhdHhIZWFkaW5nJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydzZXRleHRIZWFkaW5nJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWyd0aGVtYXRpY0JyZWFrJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydodG1sJywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydsaXN0Jywge2NvbW1vbm1hcms6IHRydWV9XSxcbiAgWydkZWZpbml0aW9uJywge2NvbW1vbm1hcms6IGZhbHNlfV0sXG4gIFsnZm9vdG5vdGUnLCB7Y29tbW9ubWFyazogZmFsc2V9XVxuXTtcblxuLyogSGFuZGxlcnMuICovXG5wcm90by5ibG9ja1Rva2VuaXplcnMgPSB7XG4gIG5ld2xpbmU6IHJlcXVpcmUoJy4vdG9rZW5pemUvbmV3bGluZScpLFxuICBpbmRlbnRlZENvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1pbmRlbnRlZCcpLFxuICBmZW5jZWRDb2RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2NvZGUtZmVuY2VkJyksXG4gIGJsb2NrcXVvdGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvYmxvY2txdW90ZScpLFxuICBhdHhIZWFkaW5nOiByZXF1aXJlKCcuL3Rva2VuaXplL2hlYWRpbmctYXR4JyksXG4gIHRoZW1hdGljQnJlYWs6IHJlcXVpcmUoJy4vdG9rZW5pemUvdGhlbWF0aWMtYnJlYWsnKSxcbiAgbGlzdDogcmVxdWlyZSgnLi90b2tlbml6ZS9saXN0JyksXG4gIHNldGV4dEhlYWRpbmc6IHJlcXVpcmUoJy4vdG9rZW5pemUvaGVhZGluZy1zZXRleHQnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi90b2tlbml6ZS9odG1sLWJsb2NrJyksXG4gIGZvb3Rub3RlOiByZXF1aXJlKCcuL3Rva2VuaXplL2Zvb3Rub3RlLWRlZmluaXRpb24nKSxcbiAgZGVmaW5pdGlvbjogcmVxdWlyZSgnLi90b2tlbml6ZS9kZWZpbml0aW9uJyksXG4gIHRhYmxlOiByZXF1aXJlKCcuL3Rva2VuaXplL3RhYmxlJyksXG4gIHBhcmFncmFwaDogcmVxdWlyZSgnLi90b2tlbml6ZS9wYXJhZ3JhcGgnKVxufTtcblxucHJvdG8uaW5saW5lVG9rZW5pemVycyA9IHtcbiAgZXNjYXBlOiByZXF1aXJlKCcuL3Rva2VuaXplL2VzY2FwZScpLFxuICBhdXRvTGluazogcmVxdWlyZSgnLi90b2tlbml6ZS9hdXRvLWxpbmsnKSxcbiAgdXJsOiByZXF1aXJlKCcuL3Rva2VuaXplL3VybCcpLFxuICBodG1sOiByZXF1aXJlKCcuL3Rva2VuaXplL2h0bWwtaW5saW5lJyksXG4gIGxpbms6IHJlcXVpcmUoJy4vdG9rZW5pemUvbGluaycpLFxuICByZWZlcmVuY2U6IHJlcXVpcmUoJy4vdG9rZW5pemUvcmVmZXJlbmNlJyksXG4gIHN0cm9uZzogcmVxdWlyZSgnLi90b2tlbml6ZS9zdHJvbmcnKSxcbiAgZW1waGFzaXM6IHJlcXVpcmUoJy4vdG9rZW5pemUvZW1waGFzaXMnKSxcbiAgZGVsZXRpb246IHJlcXVpcmUoJy4vdG9rZW5pemUvZGVsZXRlJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vdG9rZW5pemUvY29kZS1pbmxpbmUnKSxcbiAgYnJlYWs6IHJlcXVpcmUoJy4vdG9rZW5pemUvYnJlYWsnKSxcbiAgdGV4dDogcmVxdWlyZSgnLi90b2tlbml6ZS90ZXh0Jylcbn07XG5cbi8qIEV4cG9zZSBwcmVjZWRlbmNlLiAqL1xucHJvdG8uYmxvY2tNZXRob2RzID0ga2V5cyhwcm90by5ibG9ja1Rva2VuaXplcnMpO1xucHJvdG8uaW5saW5lTWV0aG9kcyA9IGtleXMocHJvdG8uaW5saW5lVG9rZW5pemVycyk7XG5cbi8qIFRva2VuaXplcnMuICovXG5wcm90by50b2tlbml6ZUJsb2NrID0gdG9rZW5pemVyKCdibG9jaycpO1xucHJvdG8udG9rZW5pemVJbmxpbmUgPSB0b2tlbml6ZXIoJ2lubGluZScpO1xucHJvdG8udG9rZW5pemVGYWN0b3J5ID0gdG9rZW5pemVyO1xuXG4vKiBHZXQgYWxsIGtleXMgaW4gYHZhbHVlYC4gKi9cbmZ1bmN0aW9uIGtleXModmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuXG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG52YXIgZXNjYXBlcyA9IHJlcXVpcmUoJ21hcmtkb3duLWVzY2FwZXMnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRPcHRpb25zO1xuXG5mdW5jdGlvbiBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgY3VycmVudCA9IHNlbGYub3B0aW9ucztcbiAgdmFyIGtleTtcbiAgdmFyIHZhbHVlO1xuXG4gIGlmIChvcHRpb25zID09IG51bGwpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0aW9ucyA9IHh0ZW5kKG9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdJbnZhbGlkIHZhbHVlIGAnICsgb3B0aW9ucyArICdgICcgK1xuICAgICAgJ2ZvciBzZXR0aW5nIGBvcHRpb25zYCdcbiAgICApO1xuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICB2YWx1ZSA9IG9wdGlvbnNba2V5XTtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICB2YWx1ZSA9IGN1cnJlbnRba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAoa2V5ICE9PSAnYmxvY2tzJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJykgfHxcbiAgICAgIChrZXkgPT09ICdibG9ja3MnICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpXG4gICAgKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdmFsdWUgYCcgKyB2YWx1ZSArICdgIGZvciBzZXR0aW5nIGBvcHRpb25zLicgKyBrZXkgKyAnYCcpO1xuICAgIH1cblxuICAgIG9wdGlvbnNba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgc2VsZi5vcHRpb25zID0gb3B0aW9ucztcbiAgc2VsZi5lc2NhcGUgPSBlc2NhcGVzKG9wdGlvbnMpO1xuXG4gIHJldHVybiBzZWxmO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJyk7XG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXV0b0xpbms7XG5hdXRvTGluay5sb2NhdG9yID0gbG9jYXRlO1xuYXV0b0xpbmsubm90SW5MaW5rID0gdHJ1ZTtcblxudmFyIENfTFQgPSAnPCc7XG52YXIgQ19HVCA9ICc+JztcbnZhciBDX0FUX1NJR04gPSAnQCc7XG52YXIgQ19TTEFTSCA9ICcvJztcbnZhciBNQUlMVE8gPSAnbWFpbHRvOic7XG52YXIgTUFJTFRPX0xFTkdUSCA9IE1BSUxUTy5sZW5ndGg7XG5cbi8qIFRva2VuaXNlIGEgbGluay4gKi9cbmZ1bmN0aW9uIGF1dG9MaW5rKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZjtcbiAgdmFyIHN1YnZhbHVlO1xuICB2YXIgbGVuZ3RoO1xuICB2YXIgaW5kZXg7XG4gIHZhciBxdWV1ZTtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIGhhc0F0Q2hhcmFjdGVyO1xuICB2YXIgbGluaztcbiAgdmFyIG5vdztcbiAgdmFyIGNvbnRlbnQ7XG4gIHZhciB0b2tlbml6ZXJzO1xuICB2YXIgZXhpdDtcblxuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSBDX0xUKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2VsZiA9IHRoaXM7XG4gIHN1YnZhbHVlID0gJyc7XG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgaW5kZXggPSAwO1xuICBxdWV1ZSA9ICcnO1xuICBoYXNBdENoYXJhY3RlciA9IGZhbHNlO1xuICBsaW5rID0gJyc7XG5cbiAgaW5kZXgrKztcbiAgc3VidmFsdWUgPSBDX0xUO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoXG4gICAgICB3aGl0ZXNwYWNlKGNoYXJhY3RlcikgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gQ19HVCB8fFxuICAgICAgY2hhcmFjdGVyID09PSBDX0FUX1NJR04gfHxcbiAgICAgIChjaGFyYWN0ZXIgPT09ICc6JyAmJiB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gQ19TTEFTSClcbiAgICApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKCFxdWV1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxpbmsgKz0gcXVldWU7XG4gIHF1ZXVlID0gJyc7XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgbGluayArPSBjaGFyYWN0ZXI7XG4gIGluZGV4Kys7XG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gQ19BVF9TSUdOKSB7XG4gICAgaGFzQXRDaGFyYWN0ZXIgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciAhPT0gJzonIHx8XG4gICAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gQ19TTEFTSFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxpbmsgKz0gQ19TTEFTSDtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikgfHwgY2hhcmFjdGVyID09PSBDX0dUKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgaWYgKCFxdWV1ZSB8fCBjaGFyYWN0ZXIgIT09IENfR1QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGxpbmsgKz0gcXVldWU7XG4gIGNvbnRlbnQgPSBsaW5rO1xuICBzdWJ2YWx1ZSArPSBsaW5rICsgY2hhcmFjdGVyO1xuICBub3cgPSBlYXQubm93KCk7XG4gIG5vdy5jb2x1bW4rKztcbiAgbm93Lm9mZnNldCsrO1xuXG4gIGlmIChoYXNBdENoYXJhY3Rlcikge1xuICAgIGlmIChsaW5rLnNsaWNlKDAsIE1BSUxUT19MRU5HVEgpLnRvTG93ZXJDYXNlKCkgPT09IE1BSUxUTykge1xuICAgICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKE1BSUxUT19MRU5HVEgpO1xuICAgICAgbm93LmNvbHVtbiArPSBNQUlMVE9fTEVOR1RIO1xuICAgICAgbm93Lm9mZnNldCArPSBNQUlMVE9fTEVOR1RIO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5rID0gTUFJTFRPICsgbGluaztcbiAgICB9XG4gIH1cblxuICAvKiBUZW1wb3JhcmlseSByZW1vdmUgYWxsIHRva2VuaXplcnMgZXhjZXB0IHRleHQgaW4gYXV0b2xpbmtzLiAqL1xuICB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzO1xuICBzZWxmLmlubGluZVRva2VuaXplcnMgPSB7dGV4dDogdG9rZW5pemVycy50ZXh0fTtcblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKTtcblxuICBjb250ZW50ID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpO1xuXG4gIHNlbGYuaW5saW5lVG9rZW5pemVycyA9IHRva2VuaXplcnM7XG4gIGV4aXQoKTtcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogZGVjb2RlKGxpbmssIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pLFxuICAgIGNoaWxkcmVuOiBjb250ZW50XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0nKTtcbnZhciBpbnRlcnJ1cHQgPSByZXF1aXJlKCcuLi91dGlsL2ludGVycnVwdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGU7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG52YXIgQ19HVCA9ICc+JztcblxuLyogVG9rZW5pc2UgYSBibG9ja3F1b3RlLiAqL1xuZnVuY3Rpb24gYmxvY2txdW90ZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgb2Zmc2V0cyA9IHNlbGYub2Zmc2V0O1xuICB2YXIgdG9rZW5pemVycyA9IHNlbGYuYmxvY2tUb2tlbml6ZXJzO1xuICB2YXIgaW50ZXJydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRCbG9ja3F1b3RlO1xuICB2YXIgbm93ID0gZWF0Lm5vdygpO1xuICB2YXIgY3VycmVudExpbmUgPSBub3cubGluZTtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgY29udGVudHMgPSBbXTtcbiAgdmFyIGluZGVudHMgPSBbXTtcbiAgdmFyIGFkZDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIHJlc3Q7XG4gIHZhciBuZXh0SW5kZXg7XG4gIHZhciBjb250ZW50O1xuICB2YXIgbGluZTtcbiAgdmFyIHN0YXJ0SW5kZXg7XG4gIHZhciBwcmVmaXhlZDtcbiAgdmFyIGV4aXQ7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IENfU1BBQ0UgJiYgY2hhcmFjdGVyICE9PSBDX1RBQikge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBDX0dUKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5kZXggPSAwO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG5leHRJbmRleCA9IHZhbHVlLmluZGV4T2YoQ19ORVdMSU5FLCBpbmRleCk7XG4gICAgc3RhcnRJbmRleCA9IGluZGV4O1xuICAgIHByZWZpeGVkID0gZmFsc2U7XG5cbiAgICBpZiAobmV4dEluZGV4ID09PSAtMSkge1xuICAgICAgbmV4dEluZGV4ID0gbGVuZ3RoO1xuICAgIH1cblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJiBjaGFyYWN0ZXIgIT09IENfVEFCKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpID09PSBDX0dUKSB7XG4gICAgICBpbmRleCsrO1xuICAgICAgcHJlZml4ZWQgPSB0cnVlO1xuXG4gICAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSA9PT0gQ19TUEFDRSkge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbmRleCA9IHN0YXJ0SW5kZXg7XG4gICAgfVxuXG4gICAgY29udGVudCA9IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0SW5kZXgpO1xuXG4gICAgaWYgKCFwcmVmaXhlZCAmJiAhdHJpbShjb250ZW50KSkge1xuICAgICAgaW5kZXggPSBzdGFydEluZGV4O1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgaWYgKCFwcmVmaXhlZCkge1xuICAgICAgcmVzdCA9IHZhbHVlLnNsaWNlKGluZGV4KTtcblxuICAgICAgLyogQ2hlY2sgaWYgdGhlIGZvbGxvd2luZyBjb2RlIGNvbnRhaW5zIGEgcG9zc2libGVcbiAgICAgICAqIGJsb2NrLiAqL1xuICAgICAgaWYgKGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIHJlc3QsIHRydWVdKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5lID0gc3RhcnRJbmRleCA9PT0gaW5kZXggPyBjb250ZW50IDogdmFsdWUuc2xpY2Uoc3RhcnRJbmRleCwgbmV4dEluZGV4KTtcblxuICAgIGluZGVudHMucHVzaChpbmRleCAtIHN0YXJ0SW5kZXgpO1xuICAgIHZhbHVlcy5wdXNoKGxpbmUpO1xuICAgIGNvbnRlbnRzLnB1c2goY29udGVudCk7XG5cbiAgICBpbmRleCA9IG5leHRJbmRleCArIDE7XG4gIH1cblxuICBpbmRleCA9IC0xO1xuICBsZW5ndGggPSBpbmRlbnRzLmxlbmd0aDtcbiAgYWRkID0gZWF0KHZhbHVlcy5qb2luKENfTkVXTElORSkpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2Zmc2V0c1tjdXJyZW50TGluZV0gPSAob2Zmc2V0c1tjdXJyZW50TGluZV0gfHwgMCkgKyBpbmRlbnRzW2luZGV4XTtcbiAgICBjdXJyZW50TGluZSsrO1xuICB9XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJCbG9jaygpO1xuICBjb250ZW50cyA9IHNlbGYudG9rZW5pemVCbG9jayhjb250ZW50cy5qb2luKENfTkVXTElORSksIG5vdyk7XG4gIGV4aXQoKTtcblxuICByZXR1cm4gYWRkKHtcbiAgICB0eXBlOiAnYmxvY2txdW90ZScsXG4gICAgY2hpbGRyZW46IGNvbnRlbnRzXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2JyZWFrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gaGFyZEJyZWFrO1xuaGFyZEJyZWFrLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBNSU5fQlJFQUtfTEVOR1RIID0gMjtcblxuZnVuY3Rpb24gaGFyZEJyZWFrKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIHF1ZXVlID0gJyc7XG4gIHZhciBjaGFyYWN0ZXI7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gJ1xcbicpIHtcbiAgICAgIGlmIChpbmRleCA8IE1JTl9CUkVBS19MRU5HVEgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG5cbiAgICAgIHJldHVybiBlYXQocXVldWUpKHt0eXBlOiAnYnJlYWsnfSk7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gJyAnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbS10cmFpbGluZy1saW5lcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZlbmNlZENvZGU7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG52YXIgQ19USUxERSA9ICd+JztcbnZhciBDX1RJQ0sgPSAnYCc7XG5cbnZhciBNSU5fRkVOQ0VfQ09VTlQgPSAzO1xudmFyIENPREVfSU5ERU5UX0NPVU5UID0gNDtcblxuZnVuY3Rpb24gZmVuY2VkQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2V0dGluZ3MgPSBzZWxmLm9wdGlvbnM7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgc3VidmFsdWUgPSAnJztcbiAgdmFyIGZlbmNlQ291bnQ7XG4gIHZhciBtYXJrZXI7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBmbGFnO1xuICB2YXIgcXVldWU7XG4gIHZhciBjb250ZW50O1xuICB2YXIgZXhkZW50ZWRDb250ZW50O1xuICB2YXIgY2xvc2luZztcbiAgdmFyIGV4ZGVudGVkQ2xvc2luZztcbiAgdmFyIGluZGVudDtcbiAgdmFyIG5vdztcblxuICBpZiAoIXNldHRpbmdzLmdmbSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIEVhdCBpbml0aWFsIHNwYWNpbmcuICovXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmIGNoYXJhY3RlciAhPT0gQ19UQUIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaW5kZW50ID0gaW5kZXg7XG5cbiAgLyogRWF0IHRoZSBmZW5jZS4gKi9cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICBpZiAoY2hhcmFjdGVyICE9PSBDX1RJTERFICYmIGNoYXJhY3RlciAhPT0gQ19USUNLKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW5kZXgrKztcbiAgbWFya2VyID0gY2hhcmFjdGVyO1xuICBmZW5jZUNvdW50ID0gMTtcbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBmZW5jZUNvdW50Kys7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChmZW5jZUNvdW50IDwgTUlOX0ZFTkNFX0NPVU5UKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogRWF0IHNwYWNpbmcgYmVmb3JlIGZsYWcuICovXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmIGNoYXJhY3RlciAhPT0gQ19UQUIpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgLyogRWF0IGZsYWcuICovXG4gIGZsYWcgPSAnJztcbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBDX05FV0xJTkUgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gQ19USUxERSB8fFxuICAgICAgY2hhcmFjdGVyID09PSBDX1RJQ0tcbiAgICApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UgfHwgY2hhcmFjdGVyID09PSBDX1RBQikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBmbGFnICs9IHF1ZXVlICsgY2hhcmFjdGVyO1xuICAgICAgcXVldWUgPSAnJztcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICBpZiAoY2hhcmFjdGVyICYmIGNoYXJhY3RlciAhPT0gQ19ORVdMSU5FKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpO1xuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aDtcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGg7XG5cbiAgc3VidmFsdWUgKz0gZmxhZztcbiAgZmxhZyA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKGZsYWcpLCBub3cpO1xuXG4gIGlmIChxdWV1ZSkge1xuICAgIHN1YnZhbHVlICs9IHF1ZXVlO1xuICB9XG5cbiAgcXVldWUgPSAnJztcbiAgY2xvc2luZyA9ICcnO1xuICBleGRlbnRlZENsb3NpbmcgPSAnJztcbiAgY29udGVudCA9ICcnO1xuICBleGRlbnRlZENvbnRlbnQgPSAnJztcblxuICAvKiBFYXQgY29udGVudC4gKi9cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgICBjb250ZW50ICs9IGNsb3Npbmc7XG4gICAgZXhkZW50ZWRDb250ZW50ICs9IGV4ZGVudGVkQ2xvc2luZztcbiAgICBjbG9zaW5nID0gJyc7XG4gICAgZXhkZW50ZWRDbG9zaW5nID0gJyc7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX05FV0xJTkUpIHtcbiAgICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyO1xuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvKiBBZGQgdGhlIG5ld2xpbmUgdG8gYHN1YnZhbHVlYCBpZiBpdHMgdGhlIGZpcnN0XG4gICAgICogY2hhcmFjdGVyLiAgT3RoZXJ3aXNlLCBhZGQgaXQgdG8gdGhlIGBjbG9zaW5nYFxuICAgICAqIHF1ZXVlLiAqL1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjbG9zaW5nICs9IGNoYXJhY3RlcjtcbiAgICAgIGV4ZGVudGVkQ2xvc2luZyArPSBjaGFyYWN0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnO1xuICAgIGluZGV4Kys7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IENfU1BBQ0UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgY2xvc2luZyArPSBxdWV1ZTtcbiAgICBleGRlbnRlZENsb3NpbmcgKz0gcXVldWUuc2xpY2UoaW5kZW50KTtcblxuICAgIGlmIChxdWV1ZS5sZW5ndGggPj0gQ09ERV9JTkRFTlRfQ09VTlQpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHF1ZXVlID0gJyc7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjbG9zaW5nICs9IHF1ZXVlO1xuICAgIGV4ZGVudGVkQ2xvc2luZyArPSBxdWV1ZTtcblxuICAgIGlmIChxdWV1ZS5sZW5ndGggPCBmZW5jZUNvdW50KSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBxdWV1ZSA9ICcnO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmIGNoYXJhY3RlciAhPT0gQ19UQUIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNsb3NpbmcgKz0gY2hhcmFjdGVyO1xuICAgICAgZXhkZW50ZWRDbG9zaW5nICs9IGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBDX05FV0xJTkUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBjbG9zaW5nO1xuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnY29kZScsXG4gICAgbGFuZzogZmxhZyB8fCBudWxsLFxuICAgIHZhbHVlOiB0cmltKGV4ZGVudGVkQ29udGVudClcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJyk7XG52YXIgdHJpbSA9IHJlcXVpcmUoJ3RyaW0tdHJhaWxpbmctbGluZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbmRlbnRlZENvZGU7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG5cbnZhciBDT0RFX0lOREVOVF9DT1VOVCA9IDQ7XG52YXIgQ09ERV9JTkRFTlQgPSByZXBlYXQoQ19TUEFDRSwgQ09ERV9JTkRFTlRfQ09VTlQpO1xuXG4vKiBUb2tlbmlzZSBpbmRlbnRlZCBjb2RlLiAqL1xuZnVuY3Rpb24gaW5kZW50ZWRDb2RlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIHN1YnZhbHVlID0gJyc7XG4gIHZhciBjb250ZW50ID0gJyc7XG4gIHZhciBzdWJ2YWx1ZVF1ZXVlID0gJyc7XG4gIHZhciBjb250ZW50UXVldWUgPSAnJztcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIGJsYW5rUXVldWU7XG4gIHZhciBpbmRlbnQ7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGluZGVudCkge1xuICAgICAgaW5kZW50ID0gZmFsc2U7XG5cbiAgICAgIHN1YnZhbHVlICs9IHN1YnZhbHVlUXVldWU7XG4gICAgICBjb250ZW50ICs9IGNvbnRlbnRRdWV1ZTtcbiAgICAgIHN1YnZhbHVlUXVldWUgPSAnJztcbiAgICAgIGNvbnRlbnRRdWV1ZSA9ICcnO1xuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBDX05FV0xJTkUpIHtcbiAgICAgICAgc3VidmFsdWVRdWV1ZSA9IGNoYXJhY3RlcjtcbiAgICAgICAgY29udGVudFF1ZXVlID0gY2hhcmFjdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBjb250ZW50ICs9IGNoYXJhY3RlcjtcblxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgICAgICBpZiAoIWNoYXJhY3RlciB8fCBjaGFyYWN0ZXIgPT09IENfTkVXTElORSkge1xuICAgICAgICAgICAgY29udGVudFF1ZXVlID0gY2hhcmFjdGVyO1xuICAgICAgICAgICAgc3VidmFsdWVRdWV1ZSA9IGNoYXJhY3RlcjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgICBjb250ZW50ICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IENfU1BBQ0UgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDIpID09PSBjaGFyYWN0ZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDMpID09PSBjaGFyYWN0ZXJcbiAgICApIHtcbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gQ09ERV9JTkRFTlQ7XG4gICAgICBpbmRleCArPSAzO1xuICAgICAgaW5kZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19UQUIpIHtcbiAgICAgIHN1YnZhbHVlUXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYmxhbmtRdWV1ZSA9ICcnO1xuXG4gICAgICB3aGlsZSAoY2hhcmFjdGVyID09PSBDX1RBQiB8fCBjaGFyYWN0ZXIgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgYmxhbmtRdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gQ19ORVdMSU5FKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdWJ2YWx1ZVF1ZXVlICs9IGJsYW5rUXVldWUgKyBjaGFyYWN0ZXI7XG4gICAgICBjb250ZW50UXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjb250ZW50KSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgdHlwZTogJ2NvZGUnLFxuICAgICAgbGFuZzogbnVsbCxcbiAgICAgIHZhbHVlOiB0cmltKGNvbnRlbnQpXG4gICAgfSk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9jb2RlLWlubGluZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGU7XG5pbmxpbmVDb2RlLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBDX1RJQ0sgPSAnYCc7XG5cbi8qIFRva2VuaXNlIGlubGluZSBjb2RlLiAqL1xuZnVuY3Rpb24gaW5saW5lQ29kZShlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHF1ZXVlID0gJyc7XG4gIHZhciB0aWNrUXVldWUgPSAnJztcbiAgdmFyIGNvbnRlbnRRdWV1ZTtcbiAgdmFyIHN1YnF1ZXVlO1xuICB2YXIgY291bnQ7XG4gIHZhciBvcGVuaW5nQ291bnQ7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIGZvdW5kO1xuICB2YXIgbmV4dDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19USUNLKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBDX1RJQ0s7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHF1ZXVlO1xuICBvcGVuaW5nQ291bnQgPSBpbmRleDtcbiAgcXVldWUgPSAnJztcbiAgbmV4dCA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIGNvdW50ID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSBuZXh0O1xuICAgIG5leHQgPSB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfVElDSykge1xuICAgICAgY291bnQrKztcbiAgICAgIHRpY2tRdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICB9XG5cbiAgICBpZiAoY291bnQgJiYgbmV4dCAhPT0gQ19USUNLKSB7XG4gICAgICBpZiAoY291bnQgPT09IG9wZW5pbmdDb3VudCkge1xuICAgICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIHRpY2tRdWV1ZTtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gdGlja1F1ZXVlO1xuICAgICAgdGlja1F1ZXVlID0gJyc7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmICghZm91bmQpIHtcbiAgICBpZiAob3BlbmluZ0NvdW50ICUgMiAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHF1ZXVlID0gJyc7XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnRlbnRRdWV1ZSA9ICcnO1xuICBzdWJxdWV1ZSA9ICcnO1xuICBsZW5ndGggPSBxdWV1ZS5sZW5ndGg7XG4gIGluZGV4ID0gLTE7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSBxdWV1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHN1YnF1ZXVlKSB7XG4gICAgICBpZiAoY29udGVudFF1ZXVlKSB7XG4gICAgICAgIGNvbnRlbnRRdWV1ZSArPSBzdWJxdWV1ZTtcbiAgICAgIH1cblxuICAgICAgc3VicXVldWUgPSAnJztcbiAgICB9XG5cbiAgICBjb250ZW50UXVldWUgKz0gY2hhcmFjdGVyO1xuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgIHR5cGU6ICdpbmxpbmVDb2RlJyxcbiAgICB2YWx1ZTogY29udGVudFF1ZXVlXG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJyk7XG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uO1xuZGVmaW5pdGlvbi5ub3RJbkxpc3QgPSB0cnVlO1xuZGVmaW5pdGlvbi5ub3RJbkJsb2NrID0gdHJ1ZTtcblxudmFyIENfRE9VQkxFX1FVT1RFID0gJ1wiJztcbnZhciBDX1NJTkdMRV9RVU9URSA9ICdcXCcnO1xudmFyIENfQkFDS1NMQVNIID0gJ1xcXFwnO1xudmFyIENfTkVXTElORSA9ICdcXG4nO1xudmFyIENfVEFCID0gJ1xcdCc7XG52YXIgQ19TUEFDRSA9ICcgJztcbnZhciBDX0JSQUNLRVRfT1BFTiA9ICdbJztcbnZhciBDX0JSQUNLRVRfQ0xPU0UgPSAnXSc7XG52YXIgQ19QQVJFTl9PUEVOID0gJygnO1xudmFyIENfUEFSRU5fQ0xPU0UgPSAnKSc7XG52YXIgQ19DT0xPTiA9ICc6JztcbnZhciBDX0xUID0gJzwnO1xudmFyIENfR1QgPSAnPic7XG5cbmZ1bmN0aW9uIGRlZmluaXRpb24oZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGNvbW1vbm1hcmsgPSBzZWxmLm9wdGlvbnMuY29tbW9ubWFyaztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIHN1YnZhbHVlID0gJyc7XG4gIHZhciBiZWZvcmVVUkw7XG4gIHZhciBiZWZvcmVUaXRsZTtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgdGVzdDtcbiAgdmFyIGlkZW50aWZpZXI7XG4gIHZhciB1cmw7XG4gIHZhciB0aXRsZTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJiBjaGFyYWN0ZXIgIT09IENfVEFCKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gQ19CUkFDS0VUX09QRU4pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbmRleCsrO1xuICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9DTE9TRSkge1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfQkFDS1NMQVNIKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChcbiAgICAhcXVldWUgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBDX0JSQUNLRVRfQ0xPU0UgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gQ19DT0xPTlxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZGVudGlmaWVyID0gcXVldWU7XG4gIHN1YnZhbHVlICs9IHF1ZXVlICsgQ19CUkFDS0VUX0NMT1NFICsgQ19DT0xPTjtcbiAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19UQUIgJiZcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJlxuICAgICAgY2hhcmFjdGVyICE9PSBDX05FV0xJTkVcbiAgICApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgcXVldWUgPSAnJztcbiAgYmVmb3JlVVJMID0gc3VidmFsdWU7XG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gQ19MVCkge1xuICAgIGluZGV4Kys7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmICghaXNFbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBpc0VuY2xvc2VkVVJMQ2hhcmFjdGVyLmRlbGltaXRlcikge1xuICAgICAgc3VidmFsdWUgKz0gQ19MVCArIHF1ZXVlICsgY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpbmRleCAtPSBxdWV1ZS5sZW5ndGggKyAxO1xuICAgICAgcXVldWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBpZiAoIXF1ZXVlKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoIWlzVW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZTtcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB1cmwgPSBxdWV1ZTtcbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyICE9PSBDX1RBQiAmJlxuICAgICAgY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmXG4gICAgICBjaGFyYWN0ZXIgIT09IENfTkVXTElORVxuICAgICkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuICB0ZXN0ID0gbnVsbDtcblxuICBpZiAoY2hhcmFjdGVyID09PSBDX0RPVUJMRV9RVU9URSkge1xuICAgIHRlc3QgPSBDX0RPVUJMRV9RVU9URTtcbiAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfU0lOR0xFX1FVT1RFKSB7XG4gICAgdGVzdCA9IENfU0lOR0xFX1FVT1RFO1xuICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19QQVJFTl9PUEVOKSB7XG4gICAgdGVzdCA9IENfUEFSRU5fQ0xPU0U7XG4gIH1cblxuICBpZiAoIXRlc3QpIHtcbiAgICBxdWV1ZSA9ICcnO1xuICAgIGluZGV4ID0gc3VidmFsdWUubGVuZ3RoO1xuICB9IGVsc2UgaWYgKHF1ZXVlKSB7XG4gICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXI7XG4gICAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gICAgcXVldWUgPSAnJztcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gdGVzdCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FIHx8IGNoYXJhY3RlciA9PT0gdGVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IENfTkVXTElORTtcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gdGVzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGJlZm9yZVRpdGxlID0gc3VidmFsdWU7XG4gICAgc3VidmFsdWUgKz0gcXVldWUgKyBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgICB0aXRsZSA9IHF1ZXVlO1xuICAgIHF1ZXVlID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IENfVEFCICYmIGNoYXJhY3RlciAhPT0gQ19TUEFDRSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gIGlmICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FKSB7XG4gICAgaWYgKHNpbGVudCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgYmVmb3JlVVJMID0gZWF0KGJlZm9yZVVSTCkudGVzdCgpLmVuZDtcbiAgICB1cmwgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh1cmwpLCBiZWZvcmVVUkwsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pO1xuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBiZWZvcmVUaXRsZSA9IGVhdChiZWZvcmVUaXRsZSkudGVzdCgpLmVuZDtcbiAgICAgIHRpdGxlID0gc2VsZi5kZWNvZGUucmF3KHNlbGYudW5lc2NhcGUodGl0bGUpLCBiZWZvcmVUaXRsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgdHlwZTogJ2RlZmluaXRpb24nLFxuICAgICAgaWRlbnRpZmllcjogbm9ybWFsaXplKGlkZW50aWZpZXIpLFxuICAgICAgdGl0bGU6IHRpdGxlIHx8IG51bGwsXG4gICAgICB1cmw6IHVybFxuICAgIH0pO1xuICB9XG59XG5cbi8qIENoZWNrIGlmIGBjaGFyYWN0ZXJgIGNhbiBiZSBpbnNpZGUgYW4gZW5jbG9zZWQgVVJJLiAqL1xuZnVuY3Rpb24gaXNFbmNsb3NlZFVSTENoYXJhY3RlcihjaGFyYWN0ZXIpIHtcbiAgcmV0dXJuIGNoYXJhY3RlciAhPT0gQ19HVCAmJlxuICAgIGNoYXJhY3RlciAhPT0gQ19CUkFDS0VUX09QRU4gJiZcbiAgICBjaGFyYWN0ZXIgIT09IENfQlJBQ0tFVF9DTE9TRTtcbn1cblxuaXNFbmNsb3NlZFVSTENoYXJhY3Rlci5kZWxpbWl0ZXIgPSBDX0dUO1xuXG4vKiBDaGVjayBpZiBgY2hhcmFjdGVyYCBjYW4gYmUgaW5zaWRlIGFuIHVuY2xvc2VkIFVSSS4gKi9cbmZ1bmN0aW9uIGlzVW5jbG9zZWRVUkxDaGFyYWN0ZXIoY2hhcmFjdGVyKSB7XG4gIHJldHVybiBjaGFyYWN0ZXIgIT09IENfQlJBQ0tFVF9PUEVOICYmXG4gICAgY2hhcmFjdGVyICE9PSBDX0JSQUNLRVRfQ0xPU0UgJiZcbiAgICAhd2hpdGVzcGFjZShjaGFyYWN0ZXIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJyk7XG52YXIgbG9jYXRlID0gcmVxdWlyZSgnLi4vbG9jYXRlL2RlbGV0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2g7XG5zdHJpa2V0aHJvdWdoLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBDX1RJTERFID0gJ34nO1xudmFyIERPVUJMRSA9ICd+fic7XG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2goZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGNoYXJhY3RlciA9ICcnO1xuICB2YXIgcHJldmlvdXMgPSAnJztcbiAgdmFyIHByZWNlZGluZyA9ICcnO1xuICB2YXIgc3VidmFsdWUgPSAnJztcbiAgdmFyIGluZGV4O1xuICB2YXIgbGVuZ3RoO1xuICB2YXIgbm93O1xuXG4gIGlmIChcbiAgICAhc2VsZi5vcHRpb25zLmdmbSB8fFxuICAgIHZhbHVlLmNoYXJBdCgwKSAhPT0gQ19USUxERSB8fFxuICAgIHZhbHVlLmNoYXJBdCgxKSAhPT0gQ19USUxERSB8fFxuICAgIHdoaXRlc3BhY2UodmFsdWUuY2hhckF0KDIpKVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpbmRleCA9IDE7XG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgbm93ID0gZWF0Lm5vdygpO1xuICBub3cuY29sdW1uICs9IDI7XG4gIG5vdy5vZmZzZXQgKz0gMjtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09IENfVElMREUgJiZcbiAgICAgIHByZXZpb3VzID09PSBDX1RJTERFICYmXG4gICAgICAoIXByZWNlZGluZyB8fCAhd2hpdGVzcGFjZShwcmVjZWRpbmcpKVxuICAgICkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgaWYgKHNpbGVudCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGVhdChET1VCTEUgKyBzdWJ2YWx1ZSArIERPVUJMRSkoe1xuICAgICAgICB0eXBlOiAnZGVsZXRlJyxcbiAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoc3VidmFsdWUsIG5vdylcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHByZXZpb3VzO1xuICAgIHByZWNlZGluZyA9IHByZXZpb3VzO1xuICAgIHByZXZpb3VzID0gY2hhcmFjdGVyO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpO1xudmFyIHdvcmQgPSByZXF1aXJlKCdpcy13b3JkLWNoYXJhY3RlcicpO1xudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lbXBoYXNpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcGhhc2lzO1xuZW1waGFzaXMubG9jYXRvciA9IGxvY2F0ZTtcblxudmFyIENfQVNURVJJU0sgPSAnKic7XG52YXIgQ19VTkRFUlNDT1JFID0gJ18nO1xuXG5mdW5jdGlvbiBlbXBoYXNpcyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgdmFyIG5vdztcbiAgdmFyIHBlZGFudGljO1xuICB2YXIgbWFya2VyO1xuICB2YXIgcXVldWU7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIGxlbmd0aDtcbiAgdmFyIHByZXY7XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gQ19BU1RFUklTSyAmJiBjaGFyYWN0ZXIgIT09IENfVU5ERVJTQ09SRSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljO1xuICBzdWJ2YWx1ZSA9IGNoYXJhY3RlcjtcbiAgbWFya2VyID0gY2hhcmFjdGVyO1xuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIGluZGV4Kys7XG4gIHF1ZXVlID0gJyc7XG4gIGNoYXJhY3RlciA9ICcnO1xuXG4gIGlmIChwZWRhbnRpYyAmJiB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJldiA9IGNoYXJhY3RlcjtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gbWFya2VyICYmICghcGVkYW50aWMgfHwgIXdoaXRlc3BhY2UocHJldikpKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICBpZiAoIXRyaW0ocXVldWUpIHx8IHByZXYgPT09IG1hcmtlcikge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcGVkYW50aWMgJiYgbWFya2VyID09PSBDX1VOREVSU0NPUkUgJiYgd29yZChjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgcXVldWUgKz0gbWFya2VyO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICAgICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBub3cgPSBlYXQubm93KCk7XG4gICAgICAgIG5vdy5jb2x1bW4rKztcbiAgICAgICAgbm93Lm9mZnNldCsrO1xuXG4gICAgICAgIHJldHVybiBlYXQoc3VidmFsdWUgKyBxdWV1ZSArIG1hcmtlcikoe1xuICAgICAgICAgIHR5cGU6ICdlbXBoYXNpcycsXG4gICAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUocXVldWUsIG5vdylcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IG1hcmtlcjtcbiAgICB9XG5cbiAgICBpZiAoIXBlZGFudGljICYmIGNoYXJhY3RlciA9PT0gJ1xcXFwnKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9lc2NhcGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBlc2NhcGU7XG5lc2NhcGUubG9jYXRvciA9IGxvY2F0ZTtcblxuZnVuY3Rpb24gZXNjYXBlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBub2RlO1xuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgPT09ICdcXFxcJykge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgxKTtcblxuICAgIGlmIChzZWxmLmVzY2FwZS5pbmRleE9mKGNoYXJhY3RlcikgIT09IC0xKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICBpZiAoc2lsZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSAnXFxuJykge1xuICAgICAgICBub2RlID0ge3R5cGU6ICdicmVhayd9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm9kZSA9IHtcbiAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgdmFsdWU6IGNoYXJhY3RlclxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZWF0KCdcXFxcJyArIGNoYXJhY3Rlcikobm9kZSk7XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuLi91dGlsL25vcm1hbGl6ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvb3Rub3RlRGVmaW5pdGlvbjtcbmZvb3Rub3RlRGVmaW5pdGlvbi5ub3RJbkxpc3QgPSB0cnVlO1xuZm9vdG5vdGVEZWZpbml0aW9uLm5vdEluQmxvY2sgPSB0cnVlO1xuXG52YXIgQ19CQUNLU0xBU0ggPSAnXFxcXCc7XG52YXIgQ19ORVdMSU5FID0gJ1xcbic7XG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfQlJBQ0tFVF9PUEVOID0gJ1snO1xudmFyIENfQlJBQ0tFVF9DTE9TRSA9ICddJztcbnZhciBDX0NBUkVUID0gJ14nO1xudmFyIENfQ09MT04gPSAnOic7XG5cbnZhciBFWFBSRVNTSU9OX0lOSVRJQUxfVEFCID0gL14oIHs0fXxcXHQpPy9nbTtcblxuZnVuY3Rpb24gZm9vdG5vdGVEZWZpbml0aW9uKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBvZmZzZXRzID0gc2VsZi5vZmZzZXQ7XG4gIHZhciBpbmRleDtcbiAgdmFyIGxlbmd0aDtcbiAgdmFyIHN1YnZhbHVlO1xuICB2YXIgbm93O1xuICB2YXIgY3VycmVudExpbmU7XG4gIHZhciBjb250ZW50O1xuICB2YXIgcXVldWU7XG4gIHZhciBzdWJxdWV1ZTtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIGlkZW50aWZpZXI7XG4gIHZhciBhZGQ7XG4gIHZhciBleGl0O1xuXG4gIGlmICghc2VsZi5vcHRpb25zLmZvb3Rub3Rlcykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGluZGV4ID0gMDtcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICBzdWJ2YWx1ZSA9ICcnO1xuICBub3cgPSBlYXQubm93KCk7XG4gIGN1cnJlbnRMaW5lID0gbm93LmxpbmU7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBDX0JSQUNLRVRfT1BFTiB8fFxuICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpICE9PSBDX0NBUkVUXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHN1YnZhbHVlICs9IENfQlJBQ0tFVF9PUEVOICsgQ19DQVJFVDtcbiAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIHF1ZXVlID0gJyc7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9DTE9TRSkge1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfQkFDS1NMQVNIKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmIChcbiAgICAhcXVldWUgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBDX0JSQUNLRVRfQ0xPU0UgfHxcbiAgICB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gQ19DT0xPTlxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZGVudGlmaWVyID0gbm9ybWFsaXplKHF1ZXVlKTtcbiAgc3VidmFsdWUgKz0gcXVldWUgKyBDX0JSQUNLRVRfQ0xPU0UgKyBDX0NPTE9OO1xuICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19UQUIgJiYgY2hhcmFjdGVyICE9PSBDX1NQQUNFKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoO1xuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aDtcbiAgcXVldWUgPSAnJztcbiAgY29udGVudCA9ICcnO1xuICBzdWJxdWV1ZSA9ICcnO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX05FV0xJTkUpIHtcbiAgICAgIHN1YnF1ZXVlID0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciAhPT0gQ19ORVdMSU5FKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG5cbiAgICAgIHF1ZXVlICs9IHN1YnF1ZXVlO1xuICAgICAgc3VicXVldWUgPSAnJztcblxuICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3VicXVldWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBzdWJxdWV1ZTtcbiAgICB9XG5cbiAgICBpZiAocXVldWUpIHtcbiAgICAgIGNvbnRlbnQgKz0gcXVldWU7XG4gICAgICBxdWV1ZSA9ICcnO1xuICAgIH1cblxuICAgIGNvbnRlbnQgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICBzdWJ2YWx1ZSArPSBjb250ZW50O1xuXG4gIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoRVhQUkVTU0lPTl9JTklUSUFMX1RBQiwgZnVuY3Rpb24gKGxpbmUpIHtcbiAgICBvZmZzZXRzW2N1cnJlbnRMaW5lXSA9IChvZmZzZXRzW2N1cnJlbnRMaW5lXSB8fCAwKSArIGxpbmUubGVuZ3RoO1xuICAgIGN1cnJlbnRMaW5lKys7XG5cbiAgICByZXR1cm4gJyc7XG4gIH0pO1xuXG4gIGFkZCA9IGVhdChzdWJ2YWx1ZSk7XG5cbiAgZXhpdCA9IHNlbGYuZW50ZXJCbG9jaygpO1xuICBjb250ZW50ID0gc2VsZi50b2tlbml6ZUJsb2NrKGNvbnRlbnQsIG5vdyk7XG4gIGV4aXQoKTtcblxuICByZXR1cm4gYWRkKHtcbiAgICB0eXBlOiAnZm9vdG5vdGVEZWZpbml0aW9uJyxcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgIGNoaWxkcmVuOiBjb250ZW50XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF0eEhlYWRpbmc7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG52YXIgQ19IQVNIID0gJyMnO1xuXG52YXIgTUFYX0FUWF9DT1VOVCA9IDY7XG5cbmZ1bmN0aW9uIGF0eEhlYWRpbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNldHRpbmdzID0gc2VsZi5vcHRpb25zO1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMTtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBub3cgPSBlYXQubm93KCk7XG4gIHZhciBzdWJ2YWx1ZSA9ICcnO1xuICB2YXIgY29udGVudCA9ICcnO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgcXVldWU7XG4gIHZhciBkZXB0aDtcblxuICAvKiBFYXQgaW5pdGlhbCBzcGFjaW5nLiAqL1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmIGNoYXJhY3RlciAhPT0gQ19UQUIpIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICAvKiBFYXQgaGFzaGVzLiAqL1xuICBkZXB0aCA9IDA7XG5cbiAgd2hpbGUgKCsraW5kZXggPD0gbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgIT09IENfSEFTSCkge1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBkZXB0aCsrO1xuICB9XG5cbiAgaWYgKGRlcHRoID4gTUFYX0FUWF9DT1VOVCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChcbiAgICAhZGVwdGggfHxcbiAgICAoIXNldHRpbmdzLnBlZGFudGljICYmIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBDX0hBU0gpXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aCArIDE7XG5cbiAgLyogRWF0IGludGVybWVkaWF0ZSB3aGl0ZS1zcGFjZS4gKi9cbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1NQQUNFICYmIGNoYXJhY3RlciAhPT0gQ19UQUIpIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICAvKiBFeGl0IHdoZW4gbm90IGluIHBlZGFudGljIG1vZGUgd2l0aG91dCBzcGFjaW5nLiAqL1xuICBpZiAoXG4gICAgIXNldHRpbmdzLnBlZGFudGljICYmXG4gICAgcXVldWUubGVuZ3RoID09PSAwICYmXG4gICAgY2hhcmFjdGVyICYmXG4gICAgY2hhcmFjdGVyICE9PSBDX05FV0xJTkVcbiAgKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyogRWF0IGNvbnRlbnQuICovXG4gIHN1YnZhbHVlICs9IHF1ZXVlO1xuICBxdWV1ZSA9ICcnO1xuICBjb250ZW50ID0gJyc7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKCFjaGFyYWN0ZXIgfHwgY2hhcmFjdGVyID09PSBDX05FV0xJTkUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGNoYXJhY3RlciAhPT0gQ19TUEFDRSAmJlxuICAgICAgY2hhcmFjdGVyICE9PSBDX1RBQiAmJlxuICAgICAgY2hhcmFjdGVyICE9PSBDX0hBU0hcbiAgICApIHtcbiAgICAgIGNvbnRlbnQgKz0gcXVldWUgKyBjaGFyYWN0ZXI7XG4gICAgICBxdWV1ZSA9ICcnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gQ19TUEFDRSB8fCBjaGFyYWN0ZXIgPT09IENfVEFCKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gQ19IQVNIKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgfVxuXG4gICAgd2hpbGUgKGNoYXJhY3RlciA9PT0gQ19TUEFDRSB8fCBjaGFyYWN0ZXIgPT09IENfVEFCKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgfVxuXG4gICAgaW5kZXgtLTtcbiAgfVxuXG4gIG5vdy5jb2x1bW4gKz0gc3VidmFsdWUubGVuZ3RoO1xuICBub3cub2Zmc2V0ICs9IHN1YnZhbHVlLmxlbmd0aDtcbiAgc3VidmFsdWUgKz0gY29udGVudCArIHF1ZXVlO1xuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgZGVwdGg6IGRlcHRoLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0ZXh0SGVhZGluZztcblxudmFyIENfTkVXTElORSA9ICdcXG4nO1xudmFyIENfVEFCID0gJ1xcdCc7XG52YXIgQ19TUEFDRSA9ICcgJztcbnZhciBDX0VRVUFMUyA9ICc9JztcbnZhciBDX0RBU0ggPSAnLSc7XG5cbnZhciBNQVhfSEVBRElOR19JTkRFTlQgPSAzO1xuXG4vKiBNYXAgb2YgY2hhcmFjdGVycyB3aGljaCBjYW4gYmUgdXNlZCB0byBtYXJrIHNldGV4dFxuICogaGVhZGVycywgbWFwcGluZyB0byB0aGVpciBjb3JyZXNwb25kaW5nIGRlcHRoLiAqL1xudmFyIFNFVEVYVF9NQVJLRVJTID0ge307XG5cblNFVEVYVF9NQVJLRVJTW0NfRVFVQUxTXSA9IDE7XG5TRVRFWFRfTUFSS0VSU1tDX0RBU0hdID0gMjtcblxuZnVuY3Rpb24gc2V0ZXh0SGVhZGluZyhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgbm93ID0gZWF0Lm5vdygpO1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIHN1YnZhbHVlID0gJyc7XG4gIHZhciBjb250ZW50O1xuICB2YXIgcXVldWU7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBtYXJrZXI7XG4gIHZhciBkZXB0aDtcblxuICAvKiBFYXQgaW5pdGlhbCBpbmRlbnRhdGlvbi4gKi9cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19TUEFDRSB8fCBpbmRleCA+PSBNQVhfSEVBRElOR19JTkRFTlQpIHtcbiAgICAgIGluZGV4LS07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICAvKiBFYXQgY29udGVudC4gKi9cbiAgY29udGVudCA9ICcnO1xuICBxdWV1ZSA9ICcnO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfTkVXTElORSkge1xuICAgICAgaW5kZXgtLTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UgfHwgY2hhcmFjdGVyID09PSBDX1RBQikge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZW50ICs9IHF1ZXVlICsgY2hhcmFjdGVyO1xuICAgICAgcXVldWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBub3cuY29sdW1uICs9IHN1YnZhbHVlLmxlbmd0aDtcbiAgbm93Lm9mZnNldCArPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIHN1YnZhbHVlICs9IGNvbnRlbnQgKyBxdWV1ZTtcblxuICAvKiBFbnN1cmUgdGhlIGNvbnRlbnQgaXMgZm9sbG93ZWQgYnkgYSBuZXdsaW5lIGFuZCBhXG4gICAqIHZhbGlkIG1hcmtlci4gKi9cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICBtYXJrZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gQ19ORVdMSU5FIHx8ICFTRVRFWFRfTUFSS0VSU1ttYXJrZXJdKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuXG4gIC8qIEVhdCBTZXRleHQtbGluZS4gKi9cbiAgcXVldWUgPSBtYXJrZXI7XG4gIGRlcHRoID0gU0VURVhUX01BUktFUlNbbWFya2VyXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBtYXJrZXIpIHtcbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IENfTkVXTElORSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGluZGV4LS07XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZWF0KHN1YnZhbHVlICsgcXVldWUpKHtcbiAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgZGVwdGg6IGRlcHRoLFxuICAgIGNoaWxkcmVuOiBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdylcbiAgfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcGVuQ2xvc2VUYWcgPSByZXF1aXJlKCcuLi91dGlsL2h0bWwnKS5vcGVuQ2xvc2VUYWc7XG5cbm1vZHVsZS5leHBvcnRzID0gYmxvY2tIVE1MO1xuXG52YXIgQ19UQUIgPSAnXFx0JztcbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfTkVXTElORSA9ICdcXG4nO1xudmFyIENfTFQgPSAnPCc7XG5cbmZ1bmN0aW9uIGJsb2NrSFRNTChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgYmxvY2tzID0gc2VsZi5vcHRpb25zLmJsb2NrcztcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIG5leHQ7XG4gIHZhciBsaW5lO1xuICB2YXIgb2Zmc2V0O1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgY291bnQ7XG4gIHZhciBzZXF1ZW5jZTtcbiAgdmFyIHN1YnZhbHVlO1xuXG4gIHZhciBzZXF1ZW5jZXMgPSBbXG4gICAgWy9ePChzY3JpcHR8cHJlfHN0eWxlKSg/PShcXHN8PnwkKSkvaSwgLzxcXC8oc2NyaXB0fHByZXxzdHlsZSk+L2ksIHRydWVdLFxuICAgIFsvXjwhLS0vLCAvLS0+LywgdHJ1ZV0sXG4gICAgWy9ePFxcPy8sIC9cXD8+LywgdHJ1ZV0sXG4gICAgWy9ePCFbQS1aYS16XS8sIC8+LywgdHJ1ZV0sXG4gICAgWy9ePCFcXFtDREFUQVxcWy8sIC9cXF1cXF0+LywgdHJ1ZV0sXG4gICAgW25ldyBSZWdFeHAoJ148Lz8oJyArIGJsb2Nrcy5qb2luKCd8JykgKyAnKSg/PShcXFxcc3wvPz58JCkpJywgJ2knKSwgL14kLywgdHJ1ZV0sXG4gICAgW25ldyBSZWdFeHAob3BlbkNsb3NlVGFnLnNvdXJjZSArICdcXFxccyokJyksIC9eJC8sIGZhbHNlXVxuICBdO1xuXG4gIC8qIEVhdCBpbml0aWFsIHNwYWNpbmcuICovXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoY2hhcmFjdGVyICE9PSBDX1RBQiAmJiBjaGFyYWN0ZXIgIT09IENfU1BBQ0UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGluZGV4Kys7XG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19MVCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG5leHQgPSB2YWx1ZS5pbmRleE9mKENfTkVXTElORSwgaW5kZXggKyAxKTtcbiAgbmV4dCA9IG5leHQgPT09IC0xID8gbGVuZ3RoIDogbmV4dDtcbiAgbGluZSA9IHZhbHVlLnNsaWNlKGluZGV4LCBuZXh0KTtcbiAgb2Zmc2V0ID0gLTE7XG4gIGNvdW50ID0gc2VxdWVuY2VzLmxlbmd0aDtcblxuICB3aGlsZSAoKytvZmZzZXQgPCBjb3VudCkge1xuICAgIGlmIChzZXF1ZW5jZXNbb2Zmc2V0XVswXS50ZXN0KGxpbmUpKSB7XG4gICAgICBzZXF1ZW5jZSA9IHNlcXVlbmNlc1tvZmZzZXRdO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFzZXF1ZW5jZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gc2VxdWVuY2VbMl07XG4gIH1cblxuICBpbmRleCA9IG5leHQ7XG5cbiAgaWYgKCFzZXF1ZW5jZVsxXS50ZXN0KGxpbmUpKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBuZXh0ID0gdmFsdWUuaW5kZXhPZihDX05FV0xJTkUsIGluZGV4ICsgMSk7XG4gICAgICBuZXh0ID0gbmV4dCA9PT0gLTEgPyBsZW5ndGggOiBuZXh0O1xuICAgICAgbGluZSA9IHZhbHVlLnNsaWNlKGluZGV4ICsgMSwgbmV4dCk7XG5cbiAgICAgIGlmIChzZXF1ZW5jZVsxXS50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGlmIChsaW5lKSB7XG4gICAgICAgICAgaW5kZXggPSBuZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gbmV4dDtcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KTtcblxuICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7dHlwZTogJ2h0bWwnLCB2YWx1ZTogc3VidmFsdWV9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpO1xudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS90YWcnKTtcbnZhciB0YWcgPSByZXF1aXJlKCcuLi91dGlsL2h0bWwnKS50YWc7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5saW5lSFRNTDtcbmlubGluZUhUTUwubG9jYXRvciA9IGxvY2F0ZTtcblxudmFyIEVYUFJFU1NJT05fSFRNTF9MSU5LX09QRU4gPSAvXjxhIC9pO1xudmFyIEVYUFJFU1NJT05fSFRNTF9MSU5LX0NMT1NFID0gL148XFwvYT4vaTtcblxuZnVuY3Rpb24gaW5saW5lSFRNTChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgc3VidmFsdWU7XG5cbiAgaWYgKHZhbHVlLmNoYXJBdCgwKSAhPT0gJzwnIHx8IGxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMSk7XG5cbiAgaWYgKFxuICAgICFhbHBoYWJldGljYWwoY2hhcmFjdGVyKSAmJlxuICAgIGNoYXJhY3RlciAhPT0gJz8nICYmXG4gICAgY2hhcmFjdGVyICE9PSAnIScgJiZcbiAgICBjaGFyYWN0ZXIgIT09ICcvJ1xuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLm1hdGNoKHRhZyk7XG5cbiAgaWYgKCFzdWJ2YWx1ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5vdCB1c2VkIHlldC4gKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3VidmFsdWUgPSBzdWJ2YWx1ZVswXTtcblxuICBpZiAoIXNlbGYuaW5MaW5rICYmIEVYUFJFU1NJT05fSFRNTF9MSU5LX09QRU4udGVzdChzdWJ2YWx1ZSkpIHtcbiAgICBzZWxmLmluTGluayA9IHRydWU7XG4gIH0gZWxzZSBpZiAoc2VsZi5pbkxpbmsgJiYgRVhQUkVTU0lPTl9IVE1MX0xJTktfQ0xPU0UudGVzdChzdWJ2YWx1ZSkpIHtcbiAgICBzZWxmLmluTGluayA9IGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkoe3R5cGU6ICdodG1sJywgdmFsdWU6IHN1YnZhbHVlfSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvbGluaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbms7XG5saW5rLmxvY2F0b3IgPSBsb2NhdGU7XG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIENfQkFDS1NMQVNIID0gJ1xcXFwnO1xudmFyIENfQlJBQ0tFVF9PUEVOID0gJ1snO1xudmFyIENfQlJBQ0tFVF9DTE9TRSA9ICddJztcbnZhciBDX1BBUkVOX09QRU4gPSAnKCc7XG52YXIgQ19QQVJFTl9DTE9TRSA9ICcpJztcbnZhciBDX0xUID0gJzwnO1xudmFyIENfR1QgPSAnPic7XG52YXIgQ19USUNLID0gJ2AnO1xudmFyIENfRE9VQkxFX1FVT1RFID0gJ1wiJztcbnZhciBDX1NJTkdMRV9RVU9URSA9ICdcXCcnO1xuXG4vKiBNYXAgb2YgY2hhcmFjdGVycywgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbWFyayBsaW5rXG4gKiBhbmQgaW1hZ2UgdGl0bGVzLiAqL1xudmFyIExJTktfTUFSS0VSUyA9IHt9O1xuXG5MSU5LX01BUktFUlNbQ19ET1VCTEVfUVVPVEVdID0gQ19ET1VCTEVfUVVPVEU7XG5MSU5LX01BUktFUlNbQ19TSU5HTEVfUVVPVEVdID0gQ19TSU5HTEVfUVVPVEU7XG5cbi8qIE1hcCBvZiBjaGFyYWN0ZXJzLCB3aGljaCBjYW4gYmUgdXNlZCB0byBtYXJrIGxpbmtcbiAqIGFuZCBpbWFnZSB0aXRsZXMgaW4gY29tbW9ubWFyay1tb2RlLiAqL1xudmFyIENPTU1PTk1BUktfTElOS19NQVJLRVJTID0ge307XG5cbkNPTU1PTk1BUktfTElOS19NQVJLRVJTW0NfRE9VQkxFX1FVT1RFXSA9IENfRE9VQkxFX1FVT1RFO1xuQ09NTU9OTUFSS19MSU5LX01BUktFUlNbQ19TSU5HTEVfUVVPVEVdID0gQ19TSU5HTEVfUVVPVEU7XG5DT01NT05NQVJLX0xJTktfTUFSS0VSU1tDX1BBUkVOX09QRU5dID0gQ19QQVJFTl9DTE9TRTtcblxuZnVuY3Rpb24gbGluayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc3VidmFsdWUgPSAnJztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgwKTtcbiAgdmFyIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljO1xuICB2YXIgY29tbW9ubWFyayA9IHNlbGYub3B0aW9ucy5jb21tb25tYXJrO1xuICB2YXIgZ2ZtID0gc2VsZi5vcHRpb25zLmdmbTtcbiAgdmFyIGNsb3NlZDtcbiAgdmFyIGNvdW50O1xuICB2YXIgb3BlbmluZztcbiAgdmFyIGJlZm9yZVVSTDtcbiAgdmFyIGJlZm9yZVRpdGxlO1xuICB2YXIgc3VicXVldWU7XG4gIHZhciBoYXNNYXJrZXI7XG4gIHZhciBtYXJrZXJzO1xuICB2YXIgaXNJbWFnZTtcbiAgdmFyIGNvbnRlbnQ7XG4gIHZhciBtYXJrZXI7XG4gIHZhciBsZW5ndGg7XG4gIHZhciB0aXRsZTtcbiAgdmFyIGRlcHRoO1xuICB2YXIgcXVldWU7XG4gIHZhciB1cmw7XG4gIHZhciBub3c7XG4gIHZhciBleGl0O1xuICB2YXIgbm9kZTtcblxuICAvKiBEZXRlY3Qgd2hldGhlciB0aGlzIGlzIGFuIGltYWdlLiAqL1xuICBpZiAoY2hhcmFjdGVyID09PSAnIScpIHtcbiAgICBpc0ltYWdlID0gdHJ1ZTtcbiAgICBzdWJ2YWx1ZSA9IGNoYXJhY3RlcjtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gIH1cblxuICAvKiBFYXQgdGhlIG9wZW5pbmcuICovXG4gIGlmIChjaGFyYWN0ZXIgIT09IENfQlJBQ0tFVF9PUEVOKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogRXhpdCB3aGVuIHRoaXMgaXMgYSBsaW5rIGFuZCB3ZeKAmXJlIGFscmVhZHkgaW5zaWRlXG4gICAqIGEgbGluay4gKi9cbiAgaWYgKCFpc0ltYWdlICYmIHNlbGYuaW5MaW5rKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICBxdWV1ZSA9ICcnO1xuICBpbmRleCsrO1xuXG4gIC8qIEVhdCB0aGUgY29udGVudC4gKi9cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICBub3cgPSBlYXQubm93KCk7XG4gIGRlcHRoID0gMDtcblxuICBub3cuY29sdW1uICs9IGluZGV4O1xuICBub3cub2Zmc2V0ICs9IGluZGV4O1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gICAgc3VicXVldWUgPSBjaGFyYWN0ZXI7XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX1RJQ0spIHtcbiAgICAgIC8qIElubGluZS1jb2RlIGluIGxpbmsgY29udGVudC4gKi9cbiAgICAgIGNvdW50ID0gMTtcblxuICAgICAgd2hpbGUgKHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBDX1RJQ0spIHtcbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBjb3VudCsrO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wZW5pbmcpIHtcbiAgICAgICAgb3BlbmluZyA9IGNvdW50O1xuICAgICAgfSBlbHNlIGlmIChjb3VudCA+PSBvcGVuaW5nKSB7XG4gICAgICAgIG9wZW5pbmcgPSAwO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX0JBQ0tTTEFTSCkge1xuICAgICAgLyogQWxsb3cgYnJhY2tldHMgdG8gYmUgZXNjYXBlZC4gKi9cbiAgICAgIGluZGV4Kys7XG4gICAgICBzdWJxdWV1ZSArPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuICAgIC8qIEluIEdGTSBtb2RlLCBicmFja2V0cyBpbiBjb2RlIHN0aWxsIGNvdW50LlxuICAgICAqIEluIGFsbCBvdGhlciBtb2RlcywgdGhleSBkb27igJl0LiAgVGhpcyBlbXB0eVxuICAgICAqIGJsb2NrIHByZXZlbnRzIHRoZSBuZXh0IHN0YXRlbWVudHMgYXJlXG4gICAgICogZW50ZXJlZC4gKi9cbiAgICB9IGVsc2UgaWYgKCghb3BlbmluZyB8fCBnZm0pICYmIGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX09QRU4pIHtcbiAgICAgIGRlcHRoKys7XG4gICAgfSBlbHNlIGlmICgoIW9wZW5pbmcgfHwgZ2ZtKSAmJiBjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9DTE9TRSkge1xuICAgICAgaWYgKGRlcHRoKSB7XG4gICAgICAgIGRlcHRoLS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBBbGxvdyB3aGl0ZS1zcGFjZSBiZXR3ZWVuIGNvbnRlbnQgYW5kXG4gICAgICAgICAqIHVybCBpbiBHRk0gbW9kZS4gKi9cbiAgICAgICAgaWYgKCFwZWRhbnRpYykge1xuICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4ICsgMSk7XG5cbiAgICAgICAgICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdWJxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSAhPT0gQ19QQVJFTl9PUEVOKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gQ19QQVJFTl9PUEVOO1xuICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICBpbmRleCsrO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHF1ZXVlICs9IHN1YnF1ZXVlO1xuICAgIHN1YnF1ZXVlID0gJyc7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIC8qIEVhdCB0aGUgY29udGVudCBjbG9zaW5nLiAqL1xuICBpZiAoIWNsb3NlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnRlbnQgPSBxdWV1ZTtcbiAgc3VidmFsdWUgKz0gcXVldWUgKyBzdWJxdWV1ZTtcbiAgaW5kZXgrKztcblxuICAvKiBFYXQgd2hpdGUtc3BhY2UuICovXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICBpZiAoIXdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cblxuICAvKiBFYXQgdGhlIFVSTC4gKi9cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgbWFya2VycyA9IGNvbW1vbm1hcmsgPyBDT01NT05NQVJLX0xJTktfTUFSS0VSUyA6IExJTktfTUFSS0VSUztcbiAgcXVldWUgPSAnJztcbiAgYmVmb3JlVVJMID0gc3VidmFsdWU7XG5cbiAgaWYgKGNoYXJhY3RlciA9PT0gQ19MVCkge1xuICAgIGluZGV4Kys7XG4gICAgYmVmb3JlVVJMICs9IENfTFQ7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfR1QpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmIChjb21tb25tYXJrICYmIGNoYXJhY3RlciA9PT0gJ1xcbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBDX0dUKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3VidmFsdWUgKz0gQ19MVCArIHF1ZXVlICsgQ19HVDtcbiAgICB1cmwgPSBxdWV1ZTtcbiAgICBpbmRleCsrO1xuICB9IGVsc2Uge1xuICAgIGNoYXJhY3RlciA9IG51bGw7XG4gICAgc3VicXVldWUgPSAnJztcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKHN1YnF1ZXVlICYmIG93bi5jYWxsKG1hcmtlcnMsIGNoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgICAgaWYgKCFwZWRhbnRpYykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgc3VicXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19QQVJFTl9PUEVOKSB7XG4gICAgICAgICAgZGVwdGgrKztcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfUEFSRU5fQ0xPU0UpIHtcbiAgICAgICAgICBpZiAoZGVwdGggPT09IDApIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlcHRoLS07XG4gICAgICAgIH1cblxuICAgICAgICBxdWV1ZSArPSBzdWJxdWV1ZTtcbiAgICAgICAgc3VicXVldWUgPSAnJztcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBDX0JBQ0tTTEFTSCkge1xuICAgICAgICAgIHF1ZXVlICs9IENfQkFDS1NMQVNIO1xuICAgICAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdCgrK2luZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgIH1cblxuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBxdWV1ZTtcbiAgICB1cmwgPSBxdWV1ZTtcbiAgICBpbmRleCA9IHN1YnZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIC8qIEVhdCB3aGl0ZS1zcGFjZS4gKi9cbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgc3VidmFsdWUgKz0gcXVldWU7XG5cbiAgLyogRWF0IHRoZSB0aXRsZS4gKi9cbiAgaWYgKHF1ZXVlICYmIG93bi5jYWxsKG1hcmtlcnMsIGNoYXJhY3RlcikpIHtcbiAgICBpbmRleCsrO1xuICAgIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgICBxdWV1ZSA9ICcnO1xuICAgIG1hcmtlciA9IG1hcmtlcnNbY2hhcmFjdGVyXTtcbiAgICBiZWZvcmVUaXRsZSA9IHN1YnZhbHVlO1xuXG4gICAgLyogSW4gY29tbW9ubWFyay1tb2RlLCB0aGluZ3MgYXJlIHByZXR0eSBlYXN5OiB0aGVcbiAgICAgKiBtYXJrZXIgY2Fubm90IG9jY3VyIGluc2lkZSB0aGUgdGl0bGUuXG4gICAgICpcbiAgICAgKiBOb24tY29tbW9ubWFyayBkb2VzLCBob3dldmVyLCBzdXBwb3J0IG5lc3RlZFxuICAgICAqIGRlbGltaXRlcnMuICovXG4gICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19CQUNLU0xBU0gpIHtcbiAgICAgICAgICBxdWV1ZSArPSBDX0JBQ0tTTEFTSDtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCsrO1xuICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICB9XG5cbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgIT09IG1hcmtlcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRpdGxlID0gcXVldWU7XG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZSArIGNoYXJhY3RlcjtcbiAgICAgIGluZGV4Kys7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgIGlmICghd2hpdGVzcGFjZShjaGFyYWN0ZXIpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN1YnF1ZXVlID0gJyc7XG5cbiAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgICAgIGlmIChoYXNNYXJrZXIpIHtcbiAgICAgICAgICAgIHF1ZXVlICs9IG1hcmtlciArIHN1YnF1ZXVlO1xuICAgICAgICAgICAgc3VicXVldWUgPSAnJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYXNNYXJrZXIgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKCFoYXNNYXJrZXIpIHtcbiAgICAgICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX1BBUkVOX0NMT1NFKSB7XG4gICAgICAgICAgc3VidmFsdWUgKz0gcXVldWUgKyBtYXJrZXIgKyBzdWJxdWV1ZTtcbiAgICAgICAgICB0aXRsZSA9IHF1ZXVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHdoaXRlc3BhY2UoY2hhcmFjdGVyKSkge1xuICAgICAgICAgIHN1YnF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdWV1ZSArPSBtYXJrZXIgKyBzdWJxdWV1ZSArIGNoYXJhY3RlcjtcbiAgICAgICAgICBzdWJxdWV1ZSA9ICcnO1xuICAgICAgICAgIGhhc01hcmtlciA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodmFsdWUuY2hhckF0KGluZGV4KSAhPT0gQ19QQVJFTl9DTE9TRSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAtIG5ldmVyIHVzZWQgKHlldCkgKi9cbiAgaWYgKHNpbGVudCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgc3VidmFsdWUgKz0gQ19QQVJFTl9DTE9TRTtcblxuICB1cmwgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZSh1cmwpLCBlYXQoYmVmb3JlVVJMKS50ZXN0KCkuZW5kLCB7bm9uVGVybWluYXRlZDogZmFsc2V9KTtcblxuICBpZiAodGl0bGUpIHtcbiAgICBiZWZvcmVUaXRsZSA9IGVhdChiZWZvcmVUaXRsZSkudGVzdCgpLmVuZDtcbiAgICB0aXRsZSA9IHNlbGYuZGVjb2RlLnJhdyhzZWxmLnVuZXNjYXBlKHRpdGxlKSwgYmVmb3JlVGl0bGUpO1xuICB9XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiBpc0ltYWdlID8gJ2ltYWdlJyA6ICdsaW5rJyxcbiAgICB0aXRsZTogdGl0bGUgfHwgbnVsbCxcbiAgICB1cmw6IHVybFxuICB9O1xuXG4gIGlmIChpc0ltYWdlKSB7XG4gICAgbm9kZS5hbHQgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShjb250ZW50KSwgbm93KSB8fCBudWxsO1xuICB9IGVsc2Uge1xuICAgIGV4aXQgPSBzZWxmLmVudGVyTGluaygpO1xuICAgIG5vZGUuY2hpbGRyZW4gPSBzZWxmLnRva2VuaXplSW5saW5lKGNvbnRlbnQsIG5vdyk7XG4gICAgZXhpdCgpO1xuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkobm9kZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1wYXJhbXMgKi9cblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJyk7XG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJyk7XG52YXIgZ2V0SW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9nZXQtaW5kZW50YXRpb24nKTtcbnZhciByZW1vdmVJbmRlbnQgPSByZXF1aXJlKCcuLi91dGlsL3JlbW92ZS1pbmRlbnRhdGlvbicpO1xudmFyIGludGVycnVwdCA9IHJlcXVpcmUoJy4uL3V0aWwvaW50ZXJydXB0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdDtcblxudmFyIENfQVNURVJJU0sgPSAnKic7XG52YXIgQ19VTkRFUlNDT1JFID0gJ18nO1xudmFyIENfUExVUyA9ICcrJztcbnZhciBDX0RBU0ggPSAnLSc7XG52YXIgQ19ET1QgPSAnLic7XG52YXIgQ19TUEFDRSA9ICcgJztcbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfUEFSRU5fQ0xPU0UgPSAnKSc7XG52YXIgQ19YX0xPV0VSID0gJ3gnO1xuXG52YXIgVEFCX1NJWkUgPSA0O1xudmFyIEVYUFJFU1NJT05fTE9PU0VfTElTVF9JVEVNID0gL1xcblxcbig/IVxccyokKS87XG52YXIgRVhQUkVTU0lPTl9UQVNLX0lURU0gPSAvXlxcWyhbIFxcdF18eHxYKV1bIFxcdF0vO1xudmFyIEVYUFJFU1NJT05fQlVMTEVUID0gL14oWyBcXHRdKikoWyorLV18XFxkK1suKV0pKCB7MSw0fSg/ISApfCB8XFx0fCR8KD89XFxuKSkoW15cXG5dKikvO1xudmFyIEVYUFJFU1NJT05fUEVEQU5USUNfQlVMTEVUID0gL14oWyBcXHRdKikoWyorLV18XFxkK1suKV0pKFsgXFx0XSspLztcbnZhciBFWFBSRVNTSU9OX0lOSVRJQUxfSU5ERU5UID0gL14oIHsxLDR9fFxcdCk/L2dtO1xuXG4vKiBNYXAgb2YgY2hhcmFjdGVycyB3aGljaCBjYW4gYmUgdXNlZCB0byBtYXJrXG4gKiBsaXN0LWl0ZW1zLiAqL1xudmFyIExJU1RfVU5PUkRFUkVEX01BUktFUlMgPSB7fTtcblxuTElTVF9VTk9SREVSRURfTUFSS0VSU1tDX0FTVEVSSVNLXSA9IHRydWU7XG5MSVNUX1VOT1JERVJFRF9NQVJLRVJTW0NfUExVU10gPSB0cnVlO1xuTElTVF9VTk9SREVSRURfTUFSS0VSU1tDX0RBU0hdID0gdHJ1ZTtcblxuLyogTWFwIG9mIGNoYXJhY3RlcnMgd2hpY2ggY2FuIGJlIHVzZWQgdG8gbWFya1xuICogbGlzdC1pdGVtcyBhZnRlciBhIGRpZ2l0LiAqL1xudmFyIExJU1RfT1JERVJFRF9NQVJLRVJTID0ge307XG5cbkxJU1RfT1JERVJFRF9NQVJLRVJTW0NfRE9UXSA9IHRydWU7XG5cbi8qIE1hcCBvZiBjaGFyYWN0ZXJzIHdoaWNoIGNhbiBiZSB1c2VkIHRvIG1hcmtcbiAqIGxpc3QtaXRlbXMgYWZ0ZXIgYSBkaWdpdC4gKi9cbnZhciBMSVNUX09SREVSRURfQ09NTU9OTUFSS19NQVJLRVJTID0ge307XG5cbkxJU1RfT1JERVJFRF9DT01NT05NQVJLX01BUktFUlNbQ19ET1RdID0gdHJ1ZTtcbkxJU1RfT1JERVJFRF9DT01NT05NQVJLX01BUktFUlNbQ19QQVJFTl9DTE9TRV0gPSB0cnVlO1xuXG5mdW5jdGlvbiBsaXN0KGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjb21tb25tYXJrID0gc2VsZi5vcHRpb25zLmNvbW1vbm1hcms7XG4gIHZhciBwZWRhbnRpYyA9IHNlbGYub3B0aW9ucy5wZWRhbnRpYztcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVycztcbiAgdmFyIGludGVydXB0b3JzID0gc2VsZi5pbnRlcnJ1cHRMaXN0O1xuICB2YXIgbWFya2VycztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgdmFyIHN0YXJ0ID0gbnVsbDtcbiAgdmFyIHNpemUgPSAwO1xuICB2YXIgcXVldWU7XG4gIHZhciBvcmRlcmVkO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgbWFya2VyO1xuICB2YXIgbmV4dEluZGV4O1xuICB2YXIgc3RhcnRJbmRleDtcbiAgdmFyIHByZWZpeGVkO1xuICB2YXIgY3VycmVudE1hcmtlcjtcbiAgdmFyIGNvbnRlbnQ7XG4gIHZhciBsaW5lO1xuICB2YXIgcHJldkVtcHR5O1xuICB2YXIgZW1wdHk7XG4gIHZhciBpdGVtcztcbiAgdmFyIGFsbExpbmVzO1xuICB2YXIgZW1wdHlMaW5lcztcbiAgdmFyIGl0ZW07XG4gIHZhciBlbnRlclRvcDtcbiAgdmFyIGV4aXRCbG9ja3F1b3RlO1xuICB2YXIgaXNMb29zZTtcbiAgdmFyIG5vZGU7XG4gIHZhciBub3c7XG4gIHZhciBlbmQ7XG4gIHZhciBpbmRlbnRlZDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19UQUIpIHtcbiAgICAgIHNpemUgKz0gVEFCX1NJWkUgLSAoc2l6ZSAlIFRBQl9TSVpFKTtcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19TUEFDRSkge1xuICAgICAgc2l6ZSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKHNpemUgPj0gVEFCX1NJWkUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gIG1hcmtlcnMgPSBjb21tb25tYXJrID9cbiAgICBMSVNUX09SREVSRURfQ09NTU9OTUFSS19NQVJLRVJTIDpcbiAgICBMSVNUX09SREVSRURfTUFSS0VSUztcblxuICBpZiAoTElTVF9VTk9SREVSRURfTUFSS0VSU1tjaGFyYWN0ZXJdID09PSB0cnVlKSB7XG4gICAgbWFya2VyID0gY2hhcmFjdGVyO1xuICAgIG9yZGVyZWQgPSBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICBvcmRlcmVkID0gdHJ1ZTtcbiAgICBxdWV1ZSA9ICcnO1xuXG4gICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICBpZiAoIWRlY2ltYWwoY2hhcmFjdGVyKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKCFxdWV1ZSB8fCBtYXJrZXJzW2NoYXJhY3Rlcl0gIT09IHRydWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdGFydCA9IHBhcnNlSW50KHF1ZXVlLCAxMCk7XG4gICAgbWFya2VyID0gY2hhcmFjdGVyO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09IENfU1BBQ0UgJiYgY2hhcmFjdGVyICE9PSBDX1RBQikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluZGV4ID0gMDtcbiAgaXRlbXMgPSBbXTtcbiAgYWxsTGluZXMgPSBbXTtcbiAgZW1wdHlMaW5lcyA9IFtdO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIG5leHRJbmRleCA9IHZhbHVlLmluZGV4T2YoQ19ORVdMSU5FLCBpbmRleCk7XG4gICAgc3RhcnRJbmRleCA9IGluZGV4O1xuICAgIHByZWZpeGVkID0gZmFsc2U7XG4gICAgaW5kZW50ZWQgPSBmYWxzZTtcblxuICAgIGlmIChuZXh0SW5kZXggPT09IC0xKSB7XG4gICAgICBuZXh0SW5kZXggPSBsZW5ndGg7XG4gICAgfVxuXG4gICAgZW5kID0gaW5kZXggKyBUQUJfU0laRTtcbiAgICBzaXplID0gMDtcblxuICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19UQUIpIHtcbiAgICAgICAgc2l6ZSArPSBUQUJfU0laRSAtIChzaXplICUgVEFCX1NJWkUpO1xuICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgc2l6ZSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKHNpemUgPj0gVEFCX1NJWkUpIHtcbiAgICAgIGluZGVudGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbSAmJiBzaXplID49IGl0ZW0uaW5kZW50KSB7XG4gICAgICBpbmRlbnRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgICBjdXJyZW50TWFya2VyID0gbnVsbDtcblxuICAgIGlmICghaW5kZW50ZWQpIHtcbiAgICAgIGlmIChMSVNUX1VOT1JERVJFRF9NQVJLRVJTW2NoYXJhY3Rlcl0gPT09IHRydWUpIHtcbiAgICAgICAgY3VycmVudE1hcmtlciA9IGNoYXJhY3RlcjtcbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgc2l6ZSsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWUgPSAnJztcblxuICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgICAgICAgaWYgKCFkZWNpbWFsKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgICAgICAgaW5kZXgrKztcblxuICAgICAgICBpZiAocXVldWUgJiYgbWFya2Vyc1tjaGFyYWN0ZXJdID09PSB0cnVlKSB7XG4gICAgICAgICAgY3VycmVudE1hcmtlciA9IGNoYXJhY3RlcjtcbiAgICAgICAgICBzaXplICs9IHF1ZXVlLmxlbmd0aCArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBDX1RBQikge1xuICAgICAgICAgIHNpemUgKz0gVEFCX1NJWkUgLSAoc2l6ZSAlIFRBQl9TSVpFKTtcbiAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19TUEFDRSkge1xuICAgICAgICAgIGVuZCA9IGluZGV4ICsgVEFCX1NJWkU7XG5cbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXgpICE9PSBDX1NQQUNFKSB7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICAgICAgc2l6ZSsrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbmRleCA9PT0gZW5kICYmIHZhbHVlLmNoYXJBdChpbmRleCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgICAgIGluZGV4IC09IFRBQl9TSVpFIC0gMTtcbiAgICAgICAgICAgIHNpemUgLT0gVEFCX1NJWkUgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgIT09IENfTkVXTElORSAmJiBjaGFyYWN0ZXIgIT09ICcnKSB7XG4gICAgICAgICAgY3VycmVudE1hcmtlciA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudE1hcmtlcikge1xuICAgICAgaWYgKCFwZWRhbnRpYyAmJiBtYXJrZXIgIT09IGN1cnJlbnRNYXJrZXIpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHByZWZpeGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjb21tb25tYXJrICYmICFpbmRlbnRlZCAmJiB2YWx1ZS5jaGFyQXQoc3RhcnRJbmRleCkgPT09IENfU1BBQ0UpIHtcbiAgICAgICAgaW5kZW50ZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChjb21tb25tYXJrICYmIGl0ZW0pIHtcbiAgICAgICAgaW5kZW50ZWQgPSBzaXplID49IGl0ZW0uaW5kZW50IHx8IHNpemUgPiBUQUJfU0laRTtcbiAgICAgIH1cblxuICAgICAgcHJlZml4ZWQgPSBmYWxzZTtcbiAgICAgIGluZGV4ID0gc3RhcnRJbmRleDtcbiAgICB9XG5cbiAgICBsaW5lID0gdmFsdWUuc2xpY2Uoc3RhcnRJbmRleCwgbmV4dEluZGV4KTtcbiAgICBjb250ZW50ID0gc3RhcnRJbmRleCA9PT0gaW5kZXggPyBsaW5lIDogdmFsdWUuc2xpY2UoaW5kZXgsIG5leHRJbmRleCk7XG5cbiAgICBpZiAoXG4gICAgICBjdXJyZW50TWFya2VyID09PSBDX0FTVEVSSVNLIHx8XG4gICAgICBjdXJyZW50TWFya2VyID09PSBDX1VOREVSU0NPUkUgfHxcbiAgICAgIGN1cnJlbnRNYXJrZXIgPT09IENfREFTSFxuICAgICkge1xuICAgICAgaWYgKHRva2VuaXplcnMudGhlbWF0aWNCcmVhay5jYWxsKHNlbGYsIGVhdCwgbGluZSwgdHJ1ZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJldkVtcHR5ID0gZW1wdHk7XG4gICAgZW1wdHkgPSAhdHJpbShjb250ZW50KS5sZW5ndGg7XG5cbiAgICBpZiAoaW5kZW50ZWQgJiYgaXRlbSkge1xuICAgICAgaXRlbS52YWx1ZSA9IGl0ZW0udmFsdWUuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpO1xuICAgICAgYWxsTGluZXMgPSBhbGxMaW5lcy5jb25jYXQoZW1wdHlMaW5lcywgbGluZSk7XG4gICAgICBlbXB0eUxpbmVzID0gW107XG4gICAgfSBlbHNlIGlmIChwcmVmaXhlZCkge1xuICAgICAgaWYgKGVtcHR5TGluZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGl0ZW0udmFsdWUucHVzaCgnJyk7XG4gICAgICAgIGl0ZW0udHJhaWwgPSBlbXB0eUxpbmVzLmNvbmNhdCgpO1xuICAgICAgfVxuXG4gICAgICBpdGVtID0ge1xuICAgICAgICB2YWx1ZTogW2xpbmVdLFxuICAgICAgICBpbmRlbnQ6IHNpemUsXG4gICAgICAgIHRyYWlsOiBbXVxuICAgICAgfTtcblxuICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgIGFsbExpbmVzID0gYWxsTGluZXMuY29uY2F0KGVtcHR5TGluZXMsIGxpbmUpO1xuICAgICAgZW1wdHlMaW5lcyA9IFtdO1xuICAgIH0gZWxzZSBpZiAoZW1wdHkpIHtcbiAgICAgIGlmIChwcmV2RW1wdHkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGVtcHR5TGluZXMucHVzaChsaW5lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHByZXZFbXB0eSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGludGVycnVwdChpbnRlcnVwdG9ycywgdG9rZW5pemVycywgc2VsZiwgW2VhdCwgbGluZSwgdHJ1ZV0pKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpdGVtLnZhbHVlID0gaXRlbS52YWx1ZS5jb25jYXQoZW1wdHlMaW5lcywgbGluZSk7XG4gICAgICBhbGxMaW5lcyA9IGFsbExpbmVzLmNvbmNhdChlbXB0eUxpbmVzLCBsaW5lKTtcbiAgICAgIGVtcHR5TGluZXMgPSBbXTtcbiAgICB9XG5cbiAgICBpbmRleCA9IG5leHRJbmRleCArIDE7XG4gIH1cblxuICBub2RlID0gZWF0KGFsbExpbmVzLmpvaW4oQ19ORVdMSU5FKSkucmVzZXQoe1xuICAgIHR5cGU6ICdsaXN0JyxcbiAgICBvcmRlcmVkOiBvcmRlcmVkLFxuICAgIHN0YXJ0OiBzdGFydCxcbiAgICBsb29zZTogbnVsbCxcbiAgICBjaGlsZHJlbjogW11cbiAgfSk7XG5cbiAgZW50ZXJUb3AgPSBzZWxmLmVudGVyTGlzdCgpO1xuICBleGl0QmxvY2txdW90ZSA9IHNlbGYuZW50ZXJCbG9jaygpO1xuICBpc0xvb3NlID0gZmFsc2U7XG4gIGluZGV4ID0gLTE7XG4gIGxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGl0ZW0gPSBpdGVtc1tpbmRleF0udmFsdWUuam9pbihDX05FV0xJTkUpO1xuICAgIG5vdyA9IGVhdC5ub3coKTtcblxuICAgIGl0ZW0gPSBlYXQoaXRlbSkobGlzdEl0ZW0oc2VsZiwgaXRlbSwgbm93KSwgbm9kZSk7XG5cbiAgICBpZiAoaXRlbS5sb29zZSkge1xuICAgICAgaXNMb29zZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaXRlbSA9IGl0ZW1zW2luZGV4XS50cmFpbC5qb2luKENfTkVXTElORSk7XG5cbiAgICBpZiAoaW5kZXggIT09IGxlbmd0aCAtIDEpIHtcbiAgICAgIGl0ZW0gKz0gQ19ORVdMSU5FO1xuICAgIH1cblxuICAgIGVhdChpdGVtKTtcbiAgfVxuXG4gIGVudGVyVG9wKCk7XG4gIGV4aXRCbG9ja3F1b3RlKCk7XG5cbiAgbm9kZS5sb29zZSA9IGlzTG9vc2U7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGxpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldDtcbiAgdmFyIGZuID0gY3R4Lm9wdGlvbnMucGVkYW50aWMgPyBwZWRhbnRpY0xpc3RJdGVtIDogbm9ybWFsTGlzdEl0ZW07XG4gIHZhciBjaGVja2VkID0gbnVsbDtcbiAgdmFyIHRhc2s7XG4gIHZhciBpbmRlbnQ7XG5cbiAgdmFsdWUgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXG4gIGlmIChjdHgub3B0aW9ucy5nZm0pIHtcbiAgICB0YXNrID0gdmFsdWUubWF0Y2goRVhQUkVTU0lPTl9UQVNLX0lURU0pO1xuXG4gICAgaWYgKHRhc2spIHtcbiAgICAgIGluZGVudCA9IHRhc2tbMF0ubGVuZ3RoO1xuICAgICAgY2hlY2tlZCA9IHRhc2tbMV0udG9Mb3dlckNhc2UoKSA9PT0gQ19YX0xPV0VSO1xuICAgICAgb2Zmc2V0c1twb3NpdGlvbi5saW5lXSArPSBpbmRlbnQ7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKGluZGVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnbGlzdEl0ZW0nLFxuICAgIGxvb3NlOiBFWFBSRVNTSU9OX0xPT1NFX0xJU1RfSVRFTS50ZXN0KHZhbHVlKSB8fFxuICAgICAgdmFsdWUuY2hhckF0KHZhbHVlLmxlbmd0aCAtIDEpID09PSBDX05FV0xJTkUsXG4gICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICBjaGlsZHJlbjogY3R4LnRva2VuaXplQmxvY2sodmFsdWUsIHBvc2l0aW9uKVxuICB9O1xufVxuXG4vKiBDcmVhdGUgYSBsaXN0LWl0ZW0gdXNpbmcgb3Zlcmx5IHNpbXBsZSBtZWNoYW5pY3MuICovXG5mdW5jdGlvbiBwZWRhbnRpY0xpc3RJdGVtKGN0eCwgdmFsdWUsIHBvc2l0aW9uKSB7XG4gIHZhciBvZmZzZXRzID0gY3R4Lm9mZnNldDtcbiAgdmFyIGxpbmUgPSBwb3NpdGlvbi5saW5lO1xuXG4gIC8qIFJlbW92ZSB0aGUgbGlzdC1pdGVt4oCZcyBidWxsZXQuICovXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShFWFBSRVNTSU9OX1BFREFOVElDX0JVTExFVCwgcmVwbGFjZXIpO1xuXG4gIC8qIFRoZSBpbml0aWFsIGxpbmUgd2FzIGFsc28gbWF0Y2hlZCBieSB0aGUgYmVsb3csIHNvXG4gICAqIHdlIHJlc2V0IHRoZSBgbGluZWAuICovXG4gIGxpbmUgPSBwb3NpdGlvbi5saW5lO1xuXG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKEVYUFJFU1NJT05fSU5JVElBTF9JTkRFTlQsIHJlcGxhY2VyKTtcblxuICAvKiBBIHNpbXBsZSByZXBsYWNlciB3aGljaCByZW1vdmVkIGFsbCBtYXRjaGVzLFxuICAgKiBhbmQgYWRkcyB0aGVpciBsZW5ndGggdG8gYG9mZnNldGAuICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VyKCQwKSB7XG4gICAgb2Zmc2V0c1tsaW5lXSA9IChvZmZzZXRzW2xpbmVdIHx8IDApICsgJDAubGVuZ3RoO1xuICAgIGxpbmUrKztcblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vKiBDcmVhdGUgYSBsaXN0LWl0ZW0gdXNpbmcgc2FuZSBtZWNoYW5pY3MuICovXG5mdW5jdGlvbiBub3JtYWxMaXN0SXRlbShjdHgsIHZhbHVlLCBwb3NpdGlvbikge1xuICB2YXIgb2Zmc2V0cyA9IGN0eC5vZmZzZXQ7XG4gIHZhciBsaW5lID0gcG9zaXRpb24ubGluZTtcbiAgdmFyIG1heDtcbiAgdmFyIGJ1bGxldDtcbiAgdmFyIHJlc3Q7XG4gIHZhciBsaW5lcztcbiAgdmFyIHRyaW1tZWRMaW5lcztcbiAgdmFyIGluZGV4O1xuICB2YXIgbGVuZ3RoO1xuXG4gIC8qIFJlbW92ZSB0aGUgbGlzdC1pdGVt4oCZcyBidWxsZXQuICovXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShFWFBSRVNTSU9OX0JVTExFVCwgcmVwbGFjZXIpO1xuXG4gIGxpbmVzID0gdmFsdWUuc3BsaXQoQ19ORVdMSU5FKTtcblxuICB0cmltbWVkTGluZXMgPSByZW1vdmVJbmRlbnQodmFsdWUsIGdldEluZGVudChtYXgpLmluZGVudCkuc3BsaXQoQ19ORVdMSU5FKTtcblxuICAvKiBXZSByZXBsYWNlZCB0aGUgaW5pdGlhbCBidWxsZXQgd2l0aCBzb21ldGhpbmdcbiAgICogZWxzZSBhYm92ZSwgd2hpY2ggd2FzIHVzZWQgdG8gdHJpY2tcbiAgICogYHJlbW92ZUluZGVudGF0aW9uYCBpbnRvIHJlbW92aW5nIHNvbWUgbW9yZVxuICAgKiBjaGFyYWN0ZXJzIHdoZW4gcG9zc2libGUuICBIb3dldmVyLCB0aGF0IGNvdWxkXG4gICAqIHJlc3VsdCBpbiB0aGUgaW5pdGlhbCBsaW5lIHRvIGJlIHN0cmlwcGVkIG1vcmVcbiAgICogdGhhbiBpdCBzaG91bGQgYmUuICovXG4gIHRyaW1tZWRMaW5lc1swXSA9IHJlc3Q7XG5cbiAgb2Zmc2V0c1tsaW5lXSA9IChvZmZzZXRzW2xpbmVdIHx8IDApICsgYnVsbGV0Lmxlbmd0aDtcbiAgbGluZSsrO1xuXG4gIGluZGV4ID0gMDtcbiAgbGVuZ3RoID0gbGluZXMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2Zmc2V0c1tsaW5lXSA9IChvZmZzZXRzW2xpbmVdIHx8IDApICtcbiAgICAgIGxpbmVzW2luZGV4XS5sZW5ndGggLSB0cmltbWVkTGluZXNbaW5kZXhdLmxlbmd0aDtcbiAgICBsaW5lKys7XG4gIH1cblxuICByZXR1cm4gdHJpbW1lZExpbmVzLmpvaW4oQ19ORVdMSU5FKTtcblxuICBmdW5jdGlvbiByZXBsYWNlcigkMCwgJDEsICQyLCAkMywgJDQpIHtcbiAgICBidWxsZXQgPSAkMSArICQyICsgJDM7XG4gICAgcmVzdCA9ICQ0O1xuXG4gICAgLyogTWFrZSBzdXJlIHRoYXQgdGhlIGZpcnN0IG5pbmUgbnVtYmVyZWQgbGlzdCBpdGVtc1xuICAgICAqIGNhbiBpbmRlbnQgd2l0aCBhbiBleHRyYSBzcGFjZS4gIFRoYXQgaXMsIHdoZW5cbiAgICAgKiB0aGUgYnVsbGV0IGRpZCBub3QgcmVjZWl2ZSBhbiBleHRyYSBmaW5hbCBzcGFjZS4gKi9cbiAgICBpZiAoTnVtYmVyKCQyKSA8IDEwICYmIGJ1bGxldC5sZW5ndGggJSAyID09PSAxKSB7XG4gICAgICAkMiA9IENfU1BBQ0UgKyAkMjtcbiAgICB9XG5cbiAgICBtYXggPSAkMSArIHJlcGVhdChDX1NQQUNFLCAkMi5sZW5ndGgpICsgJDM7XG5cbiAgICByZXR1cm4gbWF4ICsgcmVzdDtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2hpdGVzcGFjZSA9IHJlcXVpcmUoJ2lzLXdoaXRlc3BhY2UtY2hhcmFjdGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3bGluZTtcblxuLyogVG9rZW5pc2UgbmV3bGluZS4gKi9cbmZ1bmN0aW9uIG5ld2xpbmUoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMCk7XG4gIHZhciBsZW5ndGg7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgaW5kZXg7XG5cbiAgaWYgKGNoYXJhY3RlciAhPT0gJ1xcbicpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGluZGV4ID0gMTtcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoO1xuICBzdWJ2YWx1ZSA9IGNoYXJhY3RlcjtcbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09ICdcXG4nKSB7XG4gICAgICBzdWJ2YWx1ZSArPSBxdWV1ZTtcbiAgICAgIHF1ZXVlID0gJyc7XG4gICAgfVxuXG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGVhdChzdWJ2YWx1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpO1xudmFyIGRlY2ltYWwgPSByZXF1aXJlKCdpcy1kZWNpbWFsJyk7XG52YXIgdHJpbVRyYWlsaW5nTGluZXMgPSByZXF1aXJlKCd0cmltLXRyYWlsaW5nLWxpbmVzJyk7XG52YXIgaW50ZXJydXB0ID0gcmVxdWlyZSgnLi4vdXRpbC9pbnRlcnJ1cHQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGg7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG5cbnZhciBUQUJfU0laRSA9IDQ7XG5cbi8qIFRva2VuaXNlIHBhcmFncmFwaC4gKi9cbmZ1bmN0aW9uIHBhcmFncmFwaChlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2V0dGluZ3MgPSBzZWxmLm9wdGlvbnM7XG4gIHZhciBjb21tb25tYXJrID0gc2V0dGluZ3MuY29tbW9ubWFyaztcbiAgdmFyIGdmbSA9IHNldHRpbmdzLmdmbTtcbiAgdmFyIHRva2VuaXplcnMgPSBzZWxmLmJsb2NrVG9rZW5pemVycztcbiAgdmFyIGludGVycnVwdG9ycyA9IHNlbGYuaW50ZXJydXB0UGFyYWdyYXBoO1xuICB2YXIgaW5kZXggPSB2YWx1ZS5pbmRleE9mKENfTkVXTElORSk7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciBwb3NpdGlvbjtcbiAgdmFyIHN1YnZhbHVlO1xuICB2YXIgY2hhcmFjdGVyO1xuICB2YXIgc2l6ZTtcbiAgdmFyIG5vdztcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAvKiBFYXQgZXZlcnl0aGluZyBpZiB0aGVyZeKAmXMgbm8gZm9sbG93aW5nIG5ld2xpbmUuICovXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBsZW5ndGg7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvKiBTdG9wIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBORVdMSU5FLiAqL1xuICAgIGlmICh2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gQ19ORVdMSU5FKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICAvKiBJbiBjb21tb25tYXJrLW1vZGUsIGZvbGxvd2luZyBpbmRlbnRlZCBsaW5lc1xuICAgICAqIGFyZSBwYXJ0IG9mIHRoZSBwYXJhZ3JhcGguICovXG4gICAgaWYgKGNvbW1vbm1hcmspIHtcbiAgICAgIHNpemUgPSAwO1xuICAgICAgcG9zaXRpb24gPSBpbmRleCArIDE7XG5cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGxlbmd0aCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocG9zaXRpb24pO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfVEFCKSB7XG4gICAgICAgICAgc2l6ZSA9IFRBQl9TSVpFO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19TUEFDRSkge1xuICAgICAgICAgIHNpemUrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaXplID49IFRBQl9TSVpFKSB7XG4gICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihDX05FV0xJTkUsIGluZGV4ICsgMSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN1YnZhbHVlID0gdmFsdWUuc2xpY2UoaW5kZXggKyAxKTtcblxuICAgIC8qIENoZWNrIGlmIHRoZSBmb2xsb3dpbmcgY29kZSBjb250YWlucyBhIHBvc3NpYmxlXG4gICAgICogYmxvY2suICovXG4gICAgaWYgKGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIHNlbGYsIFtlYXQsIHN1YnZhbHVlLCB0cnVlXSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIC8qIEJyZWFrIGlmIHRoZSBmb2xsb3dpbmcgbGluZSBzdGFydHMgYSBsaXN0LCB3aGVuXG4gICAgICogYWxyZWFkeSBpbiBhIGxpc3QsIG9yIHdoZW4gaW4gY29tbW9ubWFyaywgb3Igd2hlblxuICAgICAqIGluIGdmbSBtb2RlIGFuZCB0aGUgYnVsbGV0IGlzICpub3QqIG51bWVyaWMuICovXG4gICAgaWYgKFxuICAgICAgdG9rZW5pemVycy5saXN0LmNhbGwoc2VsZiwgZWF0LCBzdWJ2YWx1ZSwgdHJ1ZSkgJiZcbiAgICAgIChcbiAgICAgICAgc2VsZi5pbkxpc3QgfHxcbiAgICAgICAgY29tbW9ubWFyayB8fFxuICAgICAgICAoZ2ZtICYmICFkZWNpbWFsKHRyaW0ubGVmdChzdWJ2YWx1ZSkuY2hhckF0KDApKSlcbiAgICAgIClcbiAgICApIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHBvc2l0aW9uID0gaW5kZXg7XG4gICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKENfTkVXTElORSwgaW5kZXggKyAxKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEgJiYgdHJpbSh2YWx1ZS5zbGljZShwb3NpdGlvbiwgaW5kZXgpKSA9PT0gJycpIHtcbiAgICAgIGluZGV4ID0gcG9zaXRpb247XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBzdWJ2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIGluZGV4KTtcblxuICBpZiAodHJpbShzdWJ2YWx1ZSkgPT09ICcnKSB7XG4gICAgZWF0KHN1YnZhbHVlKTtcblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBub3cgPSBlYXQubm93KCk7XG4gIHN1YnZhbHVlID0gdHJpbVRyYWlsaW5nTGluZXMoc3VidmFsdWUpO1xuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShzdWJ2YWx1ZSwgbm93KVxuICB9KTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9saW5rJyk7XG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnLi4vdXRpbC9ub3JtYWxpemUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWZlcmVuY2U7XG5yZWZlcmVuY2UubG9jYXRvciA9IGxvY2F0ZTtcblxudmFyIFRfTElOSyA9ICdsaW5rJztcbnZhciBUX0lNQUdFID0gJ2ltYWdlJztcbnZhciBUX0ZPT1ROT1RFID0gJ2Zvb3Rub3RlJztcbnZhciBSRUZFUkVOQ0VfVFlQRV9TSE9SVENVVCA9ICdzaG9ydGN1dCc7XG52YXIgUkVGRVJFTkNFX1RZUEVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCc7XG52YXIgUkVGRVJFTkNFX1RZUEVfRlVMTCA9ICdmdWxsJztcbnZhciBDX0NBUkVUID0gJ14nO1xudmFyIENfQkFDS1NMQVNIID0gJ1xcXFwnO1xudmFyIENfQlJBQ0tFVF9PUEVOID0gJ1snO1xudmFyIENfQlJBQ0tFVF9DTE9TRSA9ICddJztcblxuZnVuY3Rpb24gcmVmZXJlbmNlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoMCk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIHZhciBzdWJ2YWx1ZSA9ICcnO1xuICB2YXIgaW50cm8gPSAnJztcbiAgdmFyIHR5cGUgPSBUX0xJTks7XG4gIHZhciByZWZlcmVuY2VUeXBlID0gUkVGRVJFTkNFX1RZUEVfU0hPUlRDVVQ7XG4gIHZhciBjb250ZW50O1xuICB2YXIgaWRlbnRpZmllcjtcbiAgdmFyIG5vdztcbiAgdmFyIG5vZGU7XG4gIHZhciBleGl0O1xuICB2YXIgcXVldWU7XG4gIHZhciBicmFja2V0ZWQ7XG4gIHZhciBkZXB0aDtcblxuICAvKiBDaGVjayB3aGV0aGVyIHdl4oCZcmUgZWF0aW5nIGFuIGltYWdlLiAqL1xuICBpZiAoY2hhcmFjdGVyID09PSAnIScpIHtcbiAgICB0eXBlID0gVF9JTUFHRTtcbiAgICBpbnRybyA9IGNoYXJhY3RlcjtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gIH1cblxuICBpZiAoY2hhcmFjdGVyICE9PSBDX0JSQUNLRVRfT1BFTikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGluZGV4Kys7XG4gIGludHJvICs9IGNoYXJhY3RlcjtcbiAgcXVldWUgPSAnJztcblxuICAvKiBDaGVjayB3aGV0aGVyIHdl4oCZcmUgZWF0aW5nIGEgZm9vdG5vdGUuICovXG4gIGlmIChzZWxmLm9wdGlvbnMuZm9vdG5vdGVzICYmIHZhbHVlLmNoYXJBdChpbmRleCkgPT09IENfQ0FSRVQpIHtcbiAgICAvKiBFeGl0IGlmIGAhW15gIGlzIGZvdW5kLCBzbyB0aGUgYCFgIHdpbGwgYmUgc2VlbiBhcyB0ZXh0IGFmdGVyIHRoaXMsXG4gICAgICogYW5kIHdl4oCZbGwgZW50ZXIgdGhpcyBmdW5jdGlvbiBhZ2FpbiB3aGVuIGBbXmAgaXMgZm91bmQuICovXG4gICAgaWYgKHR5cGUgPT09IFRfSU1BR0UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbnRybyArPSBDX0NBUkVUO1xuICAgIGluZGV4Kys7XG4gICAgdHlwZSA9IFRfRk9PVE5PVEU7XG4gIH1cblxuICAvKiBFYXQgdGhlIHRleHQuICovXG4gIGRlcHRoID0gMDtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX09QRU4pIHtcbiAgICAgIGJyYWNrZXRlZCA9IHRydWU7XG4gICAgICBkZXB0aCsrO1xuICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBDX0JSQUNLRVRfQ0xPU0UpIHtcbiAgICAgIGlmICghZGVwdGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGRlcHRoLS07XG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19CQUNLU0xBU0gpIHtcbiAgICAgIHF1ZXVlICs9IENfQkFDS1NMQVNIO1xuICAgICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgc3VidmFsdWUgPSBxdWV1ZTtcbiAgY29udGVudCA9IHF1ZXVlO1xuICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gIGlmIChjaGFyYWN0ZXIgIT09IENfQlJBQ0tFVF9DTE9TRSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGluZGV4Kys7XG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgcXVldWUgPSAnJztcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHF1ZXVlICs9IGNoYXJhY3RlcjtcbiAgICBpbmRleCsrO1xuICB9XG5cbiAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAvKiBJbmxpbmUgZm9vdG5vdGVzIGNhbm5vdCBoYXZlIGFuIGlkZW50aWZpZXIuICovXG4gIGlmICh0eXBlICE9PSBUX0ZPT1ROT1RFICYmIGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX09QRU4pIHtcbiAgICBpZGVudGlmaWVyID0gJyc7XG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQlJBQ0tFVF9PUEVOIHx8IGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX0NMT1NFKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBDX0JBQ0tTTEFTSCkge1xuICAgICAgICBpZGVudGlmaWVyICs9IENfQkFDS1NMQVNIO1xuICAgICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGlkZW50aWZpZXIgKz0gY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX0NMT1NFKSB7XG4gICAgICByZWZlcmVuY2VUeXBlID0gaWRlbnRpZmllciA/IFJFRkVSRU5DRV9UWVBFX0ZVTEwgOiBSRUZFUkVOQ0VfVFlQRV9DT0xMQVBTRUQ7XG4gICAgICBxdWV1ZSArPSBpZGVudGlmaWVyICsgY2hhcmFjdGVyO1xuICAgICAgaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgaWRlbnRpZmllciA9ICcnO1xuICAgIH1cblxuICAgIHN1YnZhbHVlICs9IHF1ZXVlO1xuICAgIHF1ZXVlID0gJyc7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWRlbnRpZmllciA9IGNvbnRlbnQ7XG4gIH1cblxuICAvKiBCcmFja2V0cyBjYW5ub3QgYmUgaW5zaWRlIHRoZSBpZGVudGlmaWVyLiAqL1xuICBpZiAocmVmZXJlbmNlVHlwZSAhPT0gUkVGRVJFTkNFX1RZUEVfRlVMTCAmJiBicmFja2V0ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWJ2YWx1ZSA9IGludHJvICsgc3VidmFsdWU7XG5cbiAgaWYgKHR5cGUgPT09IFRfTElOSyAmJiBzZWxmLmluTGluaykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZSA9PT0gVF9GT09UTk9URSAmJiBjb250ZW50LmluZGV4T2YoJyAnKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZWF0KHN1YnZhbHVlKSh7XG4gICAgICB0eXBlOiAnZm9vdG5vdGUnLFxuICAgICAgY2hpbGRyZW46IHRoaXMudG9rZW5pemVJbmxpbmUoY29udGVudCwgZWF0Lm5vdygpKVxuICAgIH0pO1xuICB9XG5cbiAgbm93ID0gZWF0Lm5vdygpO1xuICBub3cuY29sdW1uICs9IGludHJvLmxlbmd0aDtcbiAgbm93Lm9mZnNldCArPSBpbnRyby5sZW5ndGg7XG4gIGlkZW50aWZpZXIgPSByZWZlcmVuY2VUeXBlID09PSBSRUZFUkVOQ0VfVFlQRV9GVUxMID8gaWRlbnRpZmllciA6IGNvbnRlbnQ7XG5cbiAgbm9kZSA9IHtcbiAgICB0eXBlOiB0eXBlICsgJ1JlZmVyZW5jZScsXG4gICAgaWRlbnRpZmllcjogbm9ybWFsaXplKGlkZW50aWZpZXIpXG4gIH07XG5cbiAgaWYgKHR5cGUgPT09IFRfTElOSyB8fCB0eXBlID09PSBUX0lNQUdFKSB7XG4gICAgbm9kZS5yZWZlcmVuY2VUeXBlID0gcmVmZXJlbmNlVHlwZTtcbiAgfVxuXG4gIGlmICh0eXBlID09PSBUX0xJTkspIHtcbiAgICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKTtcbiAgICBub2RlLmNoaWxkcmVuID0gc2VsZi50b2tlbml6ZUlubGluZShjb250ZW50LCBub3cpO1xuICAgIGV4aXQoKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSBUX0lNQUdFKSB7XG4gICAgbm9kZS5hbHQgPSBzZWxmLmRlY29kZS5yYXcoc2VsZi51bmVzY2FwZShjb250ZW50KSwgbm93KSB8fCBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGVhdChzdWJ2YWx1ZSkobm9kZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB0cmltID0gcmVxdWlyZSgndHJpbScpO1xudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xudmFyIGxvY2F0ZSA9IHJlcXVpcmUoJy4uL2xvY2F0ZS9zdHJvbmcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdHJvbmc7XG5zdHJvbmcubG9jYXRvciA9IGxvY2F0ZTtcblxudmFyIENfQVNURVJJU0sgPSAnKic7XG52YXIgQ19VTkRFUlNDT1JFID0gJ18nO1xuXG5mdW5jdGlvbiBzdHJvbmcoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGNoYXJhY3RlciA9IHZhbHVlLmNoYXJBdChpbmRleCk7XG4gIHZhciBub3c7XG4gIHZhciBwZWRhbnRpYztcbiAgdmFyIG1hcmtlcjtcbiAgdmFyIHF1ZXVlO1xuICB2YXIgc3VidmFsdWU7XG4gIHZhciBsZW5ndGg7XG4gIHZhciBwcmV2O1xuXG4gIGlmIChcbiAgICAoY2hhcmFjdGVyICE9PSBDX0FTVEVSSVNLICYmIGNoYXJhY3RlciAhPT0gQ19VTkRFUlNDT1JFKSB8fFxuICAgIHZhbHVlLmNoYXJBdCgrK2luZGV4KSAhPT0gY2hhcmFjdGVyXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBlZGFudGljID0gc2VsZi5vcHRpb25zLnBlZGFudGljO1xuICBtYXJrZXIgPSBjaGFyYWN0ZXI7XG4gIHN1YnZhbHVlID0gbWFya2VyICsgbWFya2VyO1xuICBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG4gIGluZGV4Kys7XG4gIHF1ZXVlID0gJyc7XG4gIGNoYXJhY3RlciA9ICcnO1xuXG4gIGlmIChwZWRhbnRpYyAmJiB3aGl0ZXNwYWNlKHZhbHVlLmNoYXJBdChpbmRleCkpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgcHJldiA9IGNoYXJhY3RlcjtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKFxuICAgICAgY2hhcmFjdGVyID09PSBtYXJrZXIgJiZcbiAgICAgIHZhbHVlLmNoYXJBdChpbmRleCArIDEpID09PSBtYXJrZXIgJiZcbiAgICAgICghcGVkYW50aWMgfHwgIXdoaXRlc3BhY2UocHJldikpXG4gICAgKSB7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXggKyAyKTtcblxuICAgICAgaWYgKGNoYXJhY3RlciAhPT0gbWFya2VyKSB7XG4gICAgICAgIGlmICghdHJpbShxdWV1ZSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gICAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vdyA9IGVhdC5ub3coKTtcbiAgICAgICAgbm93LmNvbHVtbiArPSAyO1xuICAgICAgICBub3cub2Zmc2V0ICs9IDI7XG5cbiAgICAgICAgcmV0dXJuIGVhdChzdWJ2YWx1ZSArIHF1ZXVlICsgc3VidmFsdWUpKHtcbiAgICAgICAgICB0eXBlOiAnc3Ryb25nJyxcbiAgICAgICAgICBjaGlsZHJlbjogc2VsZi50b2tlbml6ZUlubGluZShxdWV1ZSwgbm93KVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXBlZGFudGljICYmIGNoYXJhY3RlciA9PT0gJ1xcXFwnKSB7XG4gICAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoKytpbmRleCk7XG4gICAgfVxuXG4gICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIGluZGV4Kys7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHdoaXRlc3BhY2UgPSByZXF1aXJlKCdpcy13aGl0ZXNwYWNlLWNoYXJhY3RlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlO1xuXG52YXIgQ19CQUNLU0xBU0ggPSAnXFxcXCc7XG52YXIgQ19USUNLID0gJ2AnO1xudmFyIENfREFTSCA9ICctJztcbnZhciBDX1BJUEUgPSAnfCc7XG52YXIgQ19DT0xPTiA9ICc6JztcbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfTkVXTElORSA9ICdcXG4nO1xudmFyIENfVEFCID0gJ1xcdCc7XG5cbnZhciBNSU5fVEFCTEVfQ09MVU1OUyA9IDE7XG52YXIgTUlOX1RBQkxFX1JPV1MgPSAyO1xuXG52YXIgVEFCTEVfQUxJR05fTEVGVCA9ICdsZWZ0JztcbnZhciBUQUJMRV9BTElHTl9DRU5URVIgPSAnY2VudGVyJztcbnZhciBUQUJMRV9BTElHTl9SSUdIVCA9ICdyaWdodCc7XG52YXIgVEFCTEVfQUxJR05fTk9ORSA9IG51bGw7XG5cbmZ1bmN0aW9uIHRhYmxlKGVhdCwgdmFsdWUsIHNpbGVudCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBpbmRleDtcbiAgdmFyIGFsaWdubWVudHM7XG4gIHZhciBhbGlnbm1lbnQ7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIHJvdztcbiAgdmFyIGxlbmd0aDtcbiAgdmFyIGxpbmVzO1xuICB2YXIgcXVldWU7XG4gIHZhciBjaGFyYWN0ZXI7XG4gIHZhciBoYXNEYXNoO1xuICB2YXIgYWxpZ247XG4gIHZhciBjZWxsO1xuICB2YXIgcHJlYW1ibGU7XG4gIHZhciBjb3VudDtcbiAgdmFyIG9wZW5pbmc7XG4gIHZhciBub3c7XG4gIHZhciBwb3NpdGlvbjtcbiAgdmFyIGxpbmVDb3VudDtcbiAgdmFyIGxpbmU7XG4gIHZhciByb3dzO1xuICB2YXIgdGFibGU7XG4gIHZhciBsaW5lSW5kZXg7XG4gIHZhciBwaXBlSW5kZXg7XG4gIHZhciBmaXJzdDtcblxuICAvKiBFeGl0IHdoZW4gbm90IGluIGdmbS1tb2RlLiAqL1xuICBpZiAoIXNlbGYub3B0aW9ucy5nZm0pIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKiBHZXQgdGhlIHJvd3MuXG4gICAqIERldGVjdGluZyB0YWJsZXMgc29vbiBpcyBoYXJkLCBzbyB0aGVyZSBhcmUgc29tZVxuICAgKiBjaGVja3MgZm9yIHBlcmZvcm1hbmNlIGhlcmUsIHN1Y2ggYXMgdGhlIG1pbmltdW1cbiAgICogbnVtYmVyIG9mIHJvd3MsIGFuZCBhbGxvd2VkIGNoYXJhY3RlcnMgaW4gdGhlXG4gICAqIGFsaWdubWVudCByb3cuICovXG4gIGluZGV4ID0gMDtcbiAgbGluZUNvdW50ID0gMDtcbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoICsgMTtcbiAgbGluZXMgPSBbXTtcblxuICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICBsaW5lSW5kZXggPSB2YWx1ZS5pbmRleE9mKENfTkVXTElORSwgaW5kZXgpO1xuICAgIHBpcGVJbmRleCA9IHZhbHVlLmluZGV4T2YoQ19QSVBFLCBpbmRleCArIDEpO1xuXG4gICAgaWYgKGxpbmVJbmRleCA9PT0gLTEpIHtcbiAgICAgIGxpbmVJbmRleCA9IHZhbHVlLmxlbmd0aDtcbiAgICB9XG5cbiAgICBpZiAocGlwZUluZGV4ID09PSAtMSB8fCBwaXBlSW5kZXggPiBsaW5lSW5kZXgpIHtcbiAgICAgIGlmIChsaW5lQ291bnQgPCBNSU5fVEFCTEVfUk9XUykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxpbmVzLnB1c2godmFsdWUuc2xpY2UoaW5kZXgsIGxpbmVJbmRleCkpO1xuICAgIGxpbmVDb3VudCsrO1xuICAgIGluZGV4ID0gbGluZUluZGV4ICsgMTtcbiAgfVxuXG4gIC8qIFBhcnNlIHRoZSBhbGlnbm1lbnQgcm93LiAqL1xuICBzdWJ2YWx1ZSA9IGxpbmVzLmpvaW4oQ19ORVdMSU5FKTtcbiAgYWxpZ25tZW50cyA9IGxpbmVzLnNwbGljZSgxLCAxKVswXSB8fCBbXTtcbiAgaW5kZXggPSAwO1xuICBsZW5ndGggPSBhbGlnbm1lbnRzLmxlbmd0aDtcbiAgbGluZUNvdW50LS07XG4gIGFsaWdubWVudCA9IGZhbHNlO1xuICBhbGlnbiA9IFtdO1xuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIGNoYXJhY3RlciA9IGFsaWdubWVudHMuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IENfUElQRSkge1xuICAgICAgaGFzRGFzaCA9IG51bGw7XG5cbiAgICAgIGlmIChhbGlnbm1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaXJzdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduLnB1c2goYWxpZ25tZW50KTtcbiAgICAgICAgYWxpZ25tZW50ID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IENfREFTSCkge1xuICAgICAgaGFzRGFzaCA9IHRydWU7XG4gICAgICBhbGlnbm1lbnQgPSBhbGlnbm1lbnQgfHwgVEFCTEVfQUxJR05fTk9ORTtcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19DT0xPTikge1xuICAgICAgaWYgKGFsaWdubWVudCA9PT0gVEFCTEVfQUxJR05fTEVGVCkge1xuICAgICAgICBhbGlnbm1lbnQgPSBUQUJMRV9BTElHTl9DRU5URVI7XG4gICAgICB9IGVsc2UgaWYgKGhhc0Rhc2ggJiYgYWxpZ25tZW50ID09PSBUQUJMRV9BTElHTl9OT05FKSB7XG4gICAgICAgIGFsaWdubWVudCA9IFRBQkxFX0FMSUdOX1JJR0hUO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ25tZW50ID0gVEFCTEVfQUxJR05fTEVGVDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCF3aGl0ZXNwYWNlKGNoYXJhY3RlcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpbmRleCsrO1xuICB9XG5cbiAgaWYgKGFsaWdubWVudCAhPT0gZmFsc2UpIHtcbiAgICBhbGlnbi5wdXNoKGFsaWdubWVudCk7XG4gIH1cblxuICAvKiBFeGl0IHdoZW4gd2l0aG91dCBlbm91Z2ggY29sdW1ucy4gKi9cbiAgaWYgKGFsaWduLmxlbmd0aCA8IE1JTl9UQUJMRV9DT0xVTU5TKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKiBQYXJzZSB0aGUgcm93cy4gKi9cbiAgcG9zaXRpb24gPSAtMTtcbiAgcm93cyA9IFtdO1xuXG4gIHRhYmxlID0gZWF0KHN1YnZhbHVlKS5yZXNldCh7XG4gICAgdHlwZTogJ3RhYmxlJyxcbiAgICBhbGlnbjogYWxpZ24sXG4gICAgY2hpbGRyZW46IHJvd3NcbiAgfSk7XG5cbiAgd2hpbGUgKCsrcG9zaXRpb24gPCBsaW5lQ291bnQpIHtcbiAgICBsaW5lID0gbGluZXNbcG9zaXRpb25dO1xuICAgIHJvdyA9IHt0eXBlOiAndGFibGVSb3cnLCBjaGlsZHJlbjogW119O1xuXG4gICAgLyogRWF0IGEgbmV3bGluZSBjaGFyYWN0ZXIgd2hlbiB0aGlzIGlzIG5vdCB0aGVcbiAgICAgKiBmaXJzdCByb3cuICovXG4gICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICBlYXQoQ19ORVdMSU5FKTtcbiAgICB9XG5cbiAgICAvKiBFYXQgdGhlIHJvdy4gKi9cbiAgICBlYXQobGluZSkucmVzZXQocm93LCB0YWJsZSk7XG5cbiAgICBsZW5ndGggPSBsaW5lLmxlbmd0aCArIDE7XG4gICAgaW5kZXggPSAwO1xuICAgIHF1ZXVlID0gJyc7XG4gICAgY2VsbCA9ICcnO1xuICAgIHByZWFtYmxlID0gdHJ1ZTtcbiAgICBjb3VudCA9IG51bGw7XG4gICAgb3BlbmluZyA9IG51bGw7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGNoYXJhY3RlciA9IGxpbmUuY2hhckF0KGluZGV4KTtcblxuICAgICAgaWYgKGNoYXJhY3RlciA9PT0gQ19UQUIgfHwgY2hhcmFjdGVyID09PSBDX1NQQUNFKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVhdChjaGFyYWN0ZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5kZXgrKztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFyYWN0ZXIgPT09ICcnIHx8IGNoYXJhY3RlciA9PT0gQ19QSVBFKSB7XG4gICAgICAgIGlmIChwcmVhbWJsZSkge1xuICAgICAgICAgIGVhdChjaGFyYWN0ZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChjaGFyYWN0ZXIgJiYgb3BlbmluZykge1xuICAgICAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgICAgICAgICAgaW5kZXgrKztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICgoY2VsbCB8fCBjaGFyYWN0ZXIpICYmICFwcmVhbWJsZSkge1xuICAgICAgICAgICAgc3VidmFsdWUgPSBjZWxsO1xuXG4gICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBpZiAoY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgc3VidmFsdWUgKz0gcXVldWUuc2xpY2UoMCwgcXVldWUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgcXVldWUgPSBxdWV1ZS5jaGFyQXQocXVldWUubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3VidmFsdWUgKz0gcXVldWU7XG4gICAgICAgICAgICAgICAgcXVldWUgPSAnJztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3cgPSBlYXQubm93KCk7XG5cbiAgICAgICAgICAgIGVhdChzdWJ2YWx1ZSkoe1xuICAgICAgICAgICAgICB0eXBlOiAndGFibGVDZWxsJyxcbiAgICAgICAgICAgICAgY2hpbGRyZW46IHNlbGYudG9rZW5pemVJbmxpbmUoY2VsbCwgbm93KVxuICAgICAgICAgICAgfSwgcm93KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlYXQocXVldWUgKyBjaGFyYWN0ZXIpO1xuXG4gICAgICAgICAgcXVldWUgPSAnJztcbiAgICAgICAgICBjZWxsID0gJyc7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChxdWV1ZSkge1xuICAgICAgICAgIGNlbGwgKz0gcXVldWU7XG4gICAgICAgICAgcXVldWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwgKz0gY2hhcmFjdGVyO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IENfQkFDS1NMQVNIICYmIGluZGV4ICE9PSBsZW5ndGggLSAyKSB7XG4gICAgICAgICAgY2VsbCArPSBsaW5lLmNoYXJBdChpbmRleCArIDEpO1xuICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBDX1RJQ0spIHtcbiAgICAgICAgICBjb3VudCA9IDE7XG5cbiAgICAgICAgICB3aGlsZSAobGluZS5jaGFyQXQoaW5kZXggKyAxKSA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICBjZWxsICs9IGNoYXJhY3RlcjtcbiAgICAgICAgICAgIGluZGV4Kys7XG4gICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghb3BlbmluZykge1xuICAgICAgICAgICAgb3BlbmluZyA9IGNvdW50O1xuICAgICAgICAgIH0gZWxzZSBpZiAoY291bnQgPj0gb3BlbmluZykge1xuICAgICAgICAgICAgb3BlbmluZyA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHByZWFtYmxlID0gZmFsc2U7XG4gICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIC8qIEVhdCB0aGUgYWxpZ25tZW50IHJvdy4gKi9cbiAgICBpZiAoIXBvc2l0aW9uKSB7XG4gICAgICBlYXQoQ19ORVdMSU5FICsgYWxpZ25tZW50cyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhYmxlO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRleHQ7XG5cbmZ1bmN0aW9uIHRleHQoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIG1ldGhvZHM7XG4gIHZhciB0b2tlbml6ZXJzO1xuICB2YXIgaW5kZXg7XG4gIHZhciBsZW5ndGg7XG4gIHZhciBzdWJ2YWx1ZTtcbiAgdmFyIHBvc2l0aW9uO1xuICB2YXIgdG9rZW5pemVyO1xuICB2YXIgbmFtZTtcbiAgdmFyIG1pbjtcbiAgdmFyIG5vdztcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSBuZXZlciB1c2VkICh5ZXQpICovXG4gIGlmIChzaWxlbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG1ldGhvZHMgPSBzZWxmLmlubGluZU1ldGhvZHM7XG4gIGxlbmd0aCA9IG1ldGhvZHMubGVuZ3RoO1xuICB0b2tlbml6ZXJzID0gc2VsZi5pbmxpbmVUb2tlbml6ZXJzO1xuICBpbmRleCA9IC0xO1xuICBtaW4gPSB2YWx1ZS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBuYW1lID0gbWV0aG9kc1tpbmRleF07XG5cbiAgICBpZiAobmFtZSA9PT0gJ3RleHQnIHx8ICF0b2tlbml6ZXJzW25hbWVdKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB0b2tlbml6ZXIgPSB0b2tlbml6ZXJzW25hbWVdLmxvY2F0b3I7XG5cbiAgICBpZiAoIXRva2VuaXplcikge1xuICAgICAgZWF0LmZpbGUuZmFpbCgnTWlzc2luZyBsb2NhdG9yOiBgJyArIG5hbWUgKyAnYCcpO1xuICAgIH1cblxuICAgIHBvc2l0aW9uID0gdG9rZW5pemVyLmNhbGwoc2VsZiwgdmFsdWUsIDEpO1xuXG4gICAgaWYgKHBvc2l0aW9uICE9PSAtMSAmJiBwb3NpdGlvbiA8IG1pbikge1xuICAgICAgbWluID0gcG9zaXRpb247XG4gICAgfVxuICB9XG5cbiAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZSgwLCBtaW4pO1xuICBub3cgPSBlYXQubm93KCk7XG5cbiAgc2VsZi5kZWNvZGUoc3VidmFsdWUsIG5vdywgZnVuY3Rpb24gKGNvbnRlbnQsIHBvc2l0aW9uLCBzb3VyY2UpIHtcbiAgICBlYXQoc291cmNlIHx8IGNvbnRlbnQpKHtcbiAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgIHZhbHVlOiBjb250ZW50XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljQnJlYWs7XG5cbnZhciBDX05FV0xJTkUgPSAnXFxuJztcbnZhciBDX1RBQiA9ICdcXHQnO1xudmFyIENfU1BBQ0UgPSAnICc7XG52YXIgQ19BU1RFUklTSyA9ICcqJztcbnZhciBDX1VOREVSU0NPUkUgPSAnXyc7XG52YXIgQ19EQVNIID0gJy0nO1xuXG52YXIgVEhFTUFUSUNfQlJFQUtfTUFSS0VSX0NPVU5UID0gMztcblxuZnVuY3Rpb24gdGhlbWF0aWNCcmVhayhlYXQsIHZhbHVlLCBzaWxlbnQpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGggKyAxO1xuICB2YXIgc3VidmFsdWUgPSAnJztcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIG1hcmtlcjtcbiAgdmFyIG1hcmtlckNvdW50O1xuICB2YXIgcXVldWU7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXgpO1xuXG4gICAgaWYgKGNoYXJhY3RlciAhPT0gQ19UQUIgJiYgY2hhcmFjdGVyICE9PSBDX1NQQUNFKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzdWJ2YWx1ZSArPSBjaGFyYWN0ZXI7XG4gIH1cblxuICBpZiAoXG4gICAgY2hhcmFjdGVyICE9PSBDX0FTVEVSSVNLICYmXG4gICAgY2hhcmFjdGVyICE9PSBDX0RBU0ggJiZcbiAgICBjaGFyYWN0ZXIgIT09IENfVU5ERVJTQ09SRVxuICApIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBtYXJrZXIgPSBjaGFyYWN0ZXI7XG4gIHN1YnZhbHVlICs9IGNoYXJhY3RlcjtcbiAgbWFya2VyQ291bnQgPSAxO1xuICBxdWV1ZSA9ICcnO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IG1hcmtlcikge1xuICAgICAgbWFya2VyQ291bnQrKztcbiAgICAgIHN1YnZhbHVlICs9IHF1ZXVlICsgbWFya2VyO1xuICAgICAgcXVldWUgPSAnJztcbiAgICB9IGVsc2UgaWYgKGNoYXJhY3RlciA9PT0gQ19TUEFDRSkge1xuICAgICAgcXVldWUgKz0gY2hhcmFjdGVyO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBtYXJrZXJDb3VudCA+PSBUSEVNQVRJQ19CUkVBS19NQVJLRVJfQ09VTlQgJiZcbiAgICAgICghY2hhcmFjdGVyIHx8IGNoYXJhY3RlciA9PT0gQ19ORVdMSU5FKVxuICAgICkge1xuICAgICAgc3VidmFsdWUgKz0gcXVldWU7XG5cbiAgICAgIGlmIChzaWxlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlYXQoc3VidmFsdWUpKHt0eXBlOiAndGhlbWF0aWNCcmVhayd9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZGVjb2RlID0gcmVxdWlyZSgncGFyc2UtZW50aXRpZXMnKTtcbnZhciB3aGl0ZXNwYWNlID0gcmVxdWlyZSgnaXMtd2hpdGVzcGFjZS1jaGFyYWN0ZXInKTtcbnZhciBsb2NhdGUgPSByZXF1aXJlKCcuLi9sb2NhdGUvdXJsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXJsO1xudXJsLmxvY2F0b3IgPSBsb2NhdGU7XG51cmwubm90SW5MaW5rID0gdHJ1ZTtcblxudmFyIENfQlJBQ0tFVF9PUEVOID0gJ1snO1xudmFyIENfQlJBQ0tFVF9DTE9TRSA9ICddJztcbnZhciBDX1BBUkVOX09QRU4gPSAnKCc7XG52YXIgQ19QQVJFTl9DTE9TRSA9ICcpJztcbnZhciBDX0xUID0gJzwnO1xudmFyIENfQVRfU0lHTiA9ICdAJztcblxudmFyIEhUVFBfUFJPVE9DT0wgPSAnaHR0cDovLyc7XG52YXIgSFRUUFNfUFJPVE9DT0wgPSAnaHR0cHM6Ly8nO1xudmFyIE1BSUxUT19QUk9UT0NPTCA9ICdtYWlsdG86JztcblxudmFyIFBST1RPQ09MUyA9IFtcbiAgSFRUUF9QUk9UT0NPTCxcbiAgSFRUUFNfUFJPVE9DT0wsXG4gIE1BSUxUT19QUk9UT0NPTFxuXTtcblxudmFyIFBST1RPQ09MU19MRU5HVEggPSBQUk9UT0NPTFMubGVuZ3RoO1xuXG5mdW5jdGlvbiB1cmwoZWF0LCB2YWx1ZSwgc2lsZW50KSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHN1YnZhbHVlO1xuICB2YXIgY29udGVudDtcbiAgdmFyIGNoYXJhY3RlcjtcbiAgdmFyIGluZGV4O1xuICB2YXIgcG9zaXRpb247XG4gIHZhciBwcm90b2NvbDtcbiAgdmFyIG1hdGNoO1xuICB2YXIgbGVuZ3RoO1xuICB2YXIgcXVldWU7XG4gIHZhciBwYXJlbkNvdW50O1xuICB2YXIgbmV4dENoYXJhY3RlcjtcbiAgdmFyIGV4aXQ7XG5cbiAgaWYgKCFzZWxmLm9wdGlvbnMuZ2ZtKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc3VidmFsdWUgPSAnJztcbiAgaW5kZXggPSAtMTtcbiAgbGVuZ3RoID0gUFJPVE9DT0xTX0xFTkdUSDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHByb3RvY29sID0gUFJPVE9DT0xTW2luZGV4XTtcbiAgICBtYXRjaCA9IHZhbHVlLnNsaWNlKDAsIHByb3RvY29sLmxlbmd0aCk7XG5cbiAgICBpZiAobWF0Y2gudG9Mb3dlckNhc2UoKSA9PT0gcHJvdG9jb2wpIHtcbiAgICAgIHN1YnZhbHVlID0gbWF0Y2g7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIXN1YnZhbHVlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW5kZXggPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDtcbiAgcXVldWUgPSAnJztcbiAgcGFyZW5Db3VudCA9IDA7XG5cbiAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcblxuICAgIGlmICh3aGl0ZXNwYWNlKGNoYXJhY3RlcikgfHwgY2hhcmFjdGVyID09PSBDX0xUKSB7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBjaGFyYWN0ZXIgPT09ICcuJyB8fFxuICAgICAgY2hhcmFjdGVyID09PSAnLCcgfHxcbiAgICAgIGNoYXJhY3RlciA9PT0gJzonIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09ICc7JyB8fFxuICAgICAgY2hhcmFjdGVyID09PSAnXCInIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09ICdcXCcnIHx8XG4gICAgICBjaGFyYWN0ZXIgPT09ICcpJyB8fFxuICAgICAgY2hhcmFjdGVyID09PSAnXSdcbiAgICApIHtcbiAgICAgIG5leHRDaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQoaW5kZXggKyAxKTtcblxuICAgICAgaWYgKCFuZXh0Q2hhcmFjdGVyIHx8IHdoaXRlc3BhY2UobmV4dENoYXJhY3RlcikpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNoYXJhY3RlciA9PT0gQ19QQVJFTl9PUEVOIHx8IGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX09QRU4pIHtcbiAgICAgIHBhcmVuQ291bnQrKztcbiAgICB9XG5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBDX1BBUkVOX0NMT1NFIHx8IGNoYXJhY3RlciA9PT0gQ19CUkFDS0VUX0NMT1NFKSB7XG4gICAgICBwYXJlbkNvdW50LS07XG5cbiAgICAgIGlmIChwYXJlbkNvdW50IDwgMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWV1ZSArPSBjaGFyYWN0ZXI7XG4gICAgaW5kZXgrKztcbiAgfVxuXG4gIGlmICghcXVldWUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzdWJ2YWx1ZSArPSBxdWV1ZTtcbiAgY29udGVudCA9IHN1YnZhbHVlO1xuXG4gIGlmIChwcm90b2NvbCA9PT0gTUFJTFRPX1BST1RPQ09MKSB7XG4gICAgcG9zaXRpb24gPSBxdWV1ZS5pbmRleE9mKENfQVRfU0lHTik7XG5cbiAgICBpZiAocG9zaXRpb24gPT09IC0xIHx8IHBvc2l0aW9uID09PSBsZW5ndGggLSAxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGVudCA9IGNvbnRlbnQuc3Vic3RyKE1BSUxUT19QUk9UT0NPTC5sZW5ndGgpO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gbmV2ZXIgdXNlZCAoeWV0KSAqL1xuICBpZiAoc2lsZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBleGl0ID0gc2VsZi5lbnRlckxpbmsoKTtcbiAgY29udGVudCA9IHNlbGYudG9rZW5pemVJbmxpbmUoY29udGVudCwgZWF0Lm5vdygpKTtcbiAgZXhpdCgpO1xuXG4gIHJldHVybiBlYXQoc3VidmFsdWUpKHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiBkZWNvZGUoc3VidmFsdWUsIHtub25UZXJtaW5hdGVkOiBmYWxzZX0pLFxuICAgIGNoaWxkcmVuOiBjb250ZW50XG4gIH0pO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG5cbnZhciBNRVJHRUFCTEVfTk9ERVMgPSB7XG4gIHRleHQ6IG1lcmdlVGV4dCxcbiAgYmxvY2txdW90ZTogbWVyZ2VCbG9ja3F1b3RlXG59O1xuXG4vKiBDaGVjayB3aGV0aGVyIGEgbm9kZSBpcyBtZXJnZWFibGUgd2l0aCBhZGphY2VudCBub2Rlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlYWJsZShub2RlKSB7XG4gIHZhciBzdGFydDtcbiAgdmFyIGVuZDtcblxuICBpZiAobm9kZS50eXBlICE9PSAndGV4dCcgfHwgIW5vZGUucG9zaXRpb24pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXJ0ID0gbm9kZS5wb3NpdGlvbi5zdGFydDtcbiAgZW5kID0gbm9kZS5wb3NpdGlvbi5lbmQ7XG5cbiAgLyogT25seSBtZXJnZSBub2RlcyB3aGljaCBvY2N1cHkgdGhlIHNhbWUgc2l6ZSBhcyB0aGVpclxuICAgKiBgdmFsdWVgLiAqL1xuICByZXR1cm4gc3RhcnQubGluZSAhPT0gZW5kLmxpbmUgfHxcbiAgICAgIGVuZC5jb2x1bW4gLSBzdGFydC5jb2x1bW4gPT09IG5vZGUudmFsdWUubGVuZ3RoO1xufVxuXG4vKiBNZXJnZSB0d28gdGV4dCBub2RlczogYG5vZGVgIGludG8gYHByZXZgLiAqL1xuZnVuY3Rpb24gbWVyZ2VUZXh0KHByZXYsIG5vZGUpIHtcbiAgcHJldi52YWx1ZSArPSBub2RlLnZhbHVlO1xuXG4gIHJldHVybiBwcmV2O1xufVxuXG4vKiBNZXJnZSB0d28gYmxvY2txdW90ZXM6IGBub2RlYCBpbnRvIGBwcmV2YCwgdW5sZXNzIGluXG4gKiBDb21tb25NYXJrIG1vZGUuICovXG5mdW5jdGlvbiBtZXJnZUJsb2NrcXVvdGUocHJldiwgbm9kZSkge1xuICBpZiAodGhpcy5vcHRpb25zLmNvbW1vbm1hcmspIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHByZXYuY2hpbGRyZW4gPSBwcmV2LmNoaWxkcmVuLmNvbmNhdChub2RlLmNoaWxkcmVuKTtcblxuICByZXR1cm4gcHJldjtcbn1cblxuLyogQ29uc3RydWN0IGEgdG9rZW5pemVyLiAgVGhpcyBjcmVhdGVzIGJvdGhcbiAqIGB0b2tlbml6ZUlubGluZWAgYW5kIGB0b2tlbml6ZUJsb2NrYC4gKi9cbmZ1bmN0aW9uIGZhY3RvcnkodHlwZSkge1xuICByZXR1cm4gdG9rZW5pemU7XG5cbiAgLyogVG9rZW5pemVyIGZvciBhIGJvdW5kIGB0eXBlYC4gKi9cbiAgZnVuY3Rpb24gdG9rZW5pemUodmFsdWUsIGxvY2F0aW9uKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciBvZmZzZXQgPSBzZWxmLm9mZnNldDtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIG1ldGhvZHMgPSBzZWxmW3R5cGUgKyAnTWV0aG9kcyddO1xuICAgIHZhciB0b2tlbml6ZXJzID0gc2VsZlt0eXBlICsgJ1Rva2VuaXplcnMnXTtcbiAgICB2YXIgbGluZSA9IGxvY2F0aW9uLmxpbmU7XG4gICAgdmFyIGNvbHVtbiA9IGxvY2F0aW9uLmNvbHVtbjtcbiAgICB2YXIgaW5kZXg7XG4gICAgdmFyIGxlbmd0aDtcbiAgICB2YXIgbWV0aG9kO1xuICAgIHZhciBuYW1lO1xuICAgIHZhciBtYXRjaGVkO1xuICAgIHZhciB2YWx1ZUxlbmd0aDtcblxuICAgIC8qIFRyaW0gd2hpdGUgc3BhY2Ugb25seSBsaW5lcy4gKi9cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH1cblxuICAgIC8qIEV4cG9zZSBvbiBgZWF0YC4gKi9cbiAgICBlYXQubm93ID0gbm93O1xuICAgIGVhdC5maWxlID0gc2VsZi5maWxlO1xuXG4gICAgLyogU3luYyBpbml0aWFsIG9mZnNldC4gKi9cbiAgICB1cGRhdGVQb3NpdGlvbignJyk7XG5cbiAgICAvKiBJdGVyYXRlIG92ZXIgYHZhbHVlYCwgYW5kIGl0ZXJhdGUgb3ZlciBhbGxcbiAgICAgKiB0b2tlbml6ZXJzLiAgV2hlbiBvbmUgZWF0cyBzb21ldGhpbmcsIHJlLWl0ZXJhdGVcbiAgICAgKiB3aXRoIHRoZSByZW1haW5pbmcgdmFsdWUuICBJZiBubyB0b2tlbml6ZXIgZWF0cyxcbiAgICAgKiBzb21ldGhpbmcgZmFpbGVkIChzaG91bGQgbm90IGhhcHBlbikgYW5kIGFuXG4gICAgICogZXhjZXB0aW9uIGlzIHRocm93bi4gKi9cbiAgICB3aGlsZSAodmFsdWUpIHtcbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICBsZW5ndGggPSBtZXRob2RzLmxlbmd0aDtcbiAgICAgIG1hdGNoZWQgPSBmYWxzZTtcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgbmFtZSA9IG1ldGhvZHNbaW5kZXhdO1xuICAgICAgICBtZXRob2QgPSB0b2tlbml6ZXJzW25hbWVdO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtZXRob2QgJiZcbiAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyAoIW1ldGhvZC5vbmx5QXRTdGFydCB8fCBzZWxmLmF0U3RhcnQpICYmXG4gICAgICAgICAgKCFtZXRob2Qubm90SW5MaXN0IHx8ICFzZWxmLmluTGlzdCkgJiZcbiAgICAgICAgICAoIW1ldGhvZC5ub3RJbkJsb2NrIHx8ICFzZWxmLmluQmxvY2spICYmXG4gICAgICAgICAgKCFtZXRob2Qubm90SW5MaW5rIHx8ICFzZWxmLmluTGluaylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdmFsdWVMZW5ndGggPSB2YWx1ZS5sZW5ndGg7XG5cbiAgICAgICAgICBtZXRob2QuYXBwbHkoc2VsZiwgW2VhdCwgdmFsdWVdKTtcblxuICAgICAgICAgIG1hdGNoZWQgPSB2YWx1ZUxlbmd0aCAhPT0gdmFsdWUubGVuZ3RoO1xuXG4gICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgIGlmICghbWF0Y2hlZCkge1xuICAgICAgICBzZWxmLmZpbGUuZmFpbChuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3AnKSwgZWF0Lm5vdygpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLmVvZiA9IG5vdygpO1xuXG4gICAgcmV0dXJuIHRva2VucztcblxuICAgIC8qIFVwZGF0ZSBsaW5lLCBjb2x1bW4sIGFuZCBvZmZzZXQgYmFzZWQgb25cbiAgICAgKiBgdmFsdWVgLiAqL1xuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN1YnZhbHVlKSB7XG4gICAgICB2YXIgbGFzdEluZGV4ID0gLTE7XG4gICAgICB2YXIgaW5kZXggPSBzdWJ2YWx1ZS5pbmRleE9mKCdcXG4nKTtcblxuICAgICAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBsaW5lKys7XG4gICAgICAgIGxhc3RJbmRleCA9IGluZGV4O1xuICAgICAgICBpbmRleCA9IHN1YnZhbHVlLmluZGV4T2YoJ1xcbicsIGluZGV4ICsgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsYXN0SW5kZXggPT09IC0xKSB7XG4gICAgICAgIGNvbHVtbiArPSBzdWJ2YWx1ZS5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2x1bW4gPSBzdWJ2YWx1ZS5sZW5ndGggLSBsYXN0SW5kZXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaW5lIGluIG9mZnNldCkge1xuICAgICAgICBpZiAobGFzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNvbHVtbiArPSBvZmZzZXRbbGluZV07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sdW1uIDw9IG9mZnNldFtsaW5lXSkge1xuICAgICAgICAgIGNvbHVtbiA9IG9mZnNldFtsaW5lXSArIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBHZXQgb2Zmc2V0LiAgQ2FsbGVkIGJlZm9yZSB0aGUgZmlyc3QgY2hhcmFjdGVyIGlzXG4gICAgICogZWF0ZW4gdG8gcmV0cmlldmUgdGhlIHJhbmdlJ3Mgb2Zmc2V0cy4gKi9cbiAgICBmdW5jdGlvbiBnZXRPZmZzZXQoKSB7XG4gICAgICB2YXIgaW5kZW50YXRpb24gPSBbXTtcbiAgICAgIHZhciBwb3MgPSBsaW5lICsgMTtcblxuICAgICAgLyogRG9uZS4gIENhbGxlZCB3aGVuIHRoZSBsYXN0IGNoYXJhY3RlciBpc1xuICAgICAgICogZWF0ZW4gdG8gcmV0cmlldmUgdGhlIHJhbmdl4oCZcyBvZmZzZXRzLiAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxhc3QgPSBsaW5lICsgMTtcblxuICAgICAgICB3aGlsZSAocG9zIDwgbGFzdCkge1xuICAgICAgICAgIGluZGVudGF0aW9uLnB1c2goKG9mZnNldFtwb3NdIHx8IDApICsgMSk7XG5cbiAgICAgICAgICBwb3MrKztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbmRlbnRhdGlvbjtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uLiAqL1xuICAgIGZ1bmN0aW9uIG5vdygpIHtcbiAgICAgIHZhciBwb3MgPSB7bGluZTogbGluZSwgY29sdW1uOiBjb2x1bW59O1xuXG4gICAgICBwb3Mub2Zmc2V0ID0gc2VsZi50b09mZnNldChwb3MpO1xuXG4gICAgICByZXR1cm4gcG9zO1xuICAgIH1cblxuICAgIC8qIFN0b3JlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIG5vZGUuICovXG4gICAgZnVuY3Rpb24gUG9zaXRpb24oc3RhcnQpIHtcbiAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcbiAgICAgIHRoaXMuZW5kID0gbm93KCk7XG4gICAgfVxuXG4gICAgLyogVGhyb3cgd2hlbiBhIHZhbHVlIGlzIGluY29ycmVjdGx5IGVhdGVuLlxuICAgICAqIFRoaXMgc2hvdWxkbuKAmXQgaGFwcGVuIGJ1dCB3aWxsIHRocm93IG9uIG5ldyxcbiAgICAgKiBpbmNvcnJlY3QgcnVsZXMuICovXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFYXQoc3VidmFsdWUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgICAgaWYgKHZhbHVlLnN1YnN0cmluZygwLCBzdWJ2YWx1ZS5sZW5ndGgpICE9PSBzdWJ2YWx1ZSkge1xuICAgICAgICAvKiBDYXB0dXJlIHN0YWNrLXRyYWNlLiAqL1xuICAgICAgICBzZWxmLmZpbGUuZmFpbChcbiAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnSW5jb3JyZWN0bHkgZWF0ZW4gdmFsdWU6IHBsZWFzZSByZXBvcnQgdGhpcyAnICtcbiAgICAgICAgICAgICd3YXJuaW5nIG9uIGh0dHA6Ly9naXQuaW8vdmc1RnQnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBub3coKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIE1hcmsgcG9zaXRpb24gYW5kIHBhdGNoIGBub2RlLnBvc2l0aW9uYC4gKi9cbiAgICBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICAgIHZhciBiZWZvcmUgPSBub3coKTtcblxuICAgICAgcmV0dXJuIHVwZGF0ZTtcblxuICAgICAgLyogQWRkIHRoZSBwb3NpdGlvbiB0byBhIG5vZGUuICovXG4gICAgICBmdW5jdGlvbiB1cGRhdGUobm9kZSwgaW5kZW50KSB7XG4gICAgICAgIHZhciBwcmV2ID0gbm9kZS5wb3NpdGlvbjtcbiAgICAgICAgdmFyIHN0YXJ0ID0gcHJldiA/IHByZXYuc3RhcnQgOiBiZWZvcmU7XG4gICAgICAgIHZhciBjb21iaW5lZCA9IFtdO1xuICAgICAgICB2YXIgbiA9IHByZXYgJiYgcHJldi5lbmQubGluZTtcbiAgICAgICAgdmFyIGwgPSBiZWZvcmUubGluZTtcblxuICAgICAgICBub2RlLnBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHN0YXJ0KTtcblxuICAgICAgICAvKiBJZiB0aGVyZSB3YXMgYWxyZWFkeSBhIGBwb3NpdGlvbmAsIHRoaXNcbiAgICAgICAgICogbm9kZSB3YXMgbWVyZ2VkLiAgRml4aW5nIGBzdGFydGAgd2FzbuKAmXRcbiAgICAgICAgICogaGFyZCwgYnV0IHRoZSBpbmRlbnQgaXMgZGlmZmVyZW50LlxuICAgICAgICAgKiBFc3BlY2lhbGx5IGJlY2F1c2Ugc29tZSBpbmZvcm1hdGlvbiwgdGhlXG4gICAgICAgICAqIGluZGVudCBiZXR3ZWVuIGBuYCBhbmQgYGxgIHdhc27igJl0XG4gICAgICAgICAqIHRyYWNrZWQuICBMdWNraWx5LCB0aGF0IHNwYWNlIGlzXG4gICAgICAgICAqIChzaG91bGQgYmU/KSBlbXB0eSwgc28gd2UgY2FuIHNhZmVseVxuICAgICAgICAgKiBjaGVjayBmb3IgaXQgbm93LiAqL1xuICAgICAgICBpZiAocHJldiAmJiBpbmRlbnQgJiYgcHJldi5pbmRlbnQpIHtcbiAgICAgICAgICBjb21iaW5lZCA9IHByZXYuaW5kZW50O1xuXG4gICAgICAgICAgaWYgKG4gPCBsKSB7XG4gICAgICAgICAgICB3aGlsZSAoKytuIDwgbCkge1xuICAgICAgICAgICAgICBjb21iaW5lZC5wdXNoKChvZmZzZXRbbl0gfHwgMCkgKyAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tYmluZWQucHVzaChiZWZvcmUuY29sdW1uKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmRlbnQgPSBjb21iaW5lZC5jb25jYXQoaW5kZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5vZGUucG9zaXRpb24uaW5kZW50ID0gaW5kZW50IHx8IFtdO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qIEFkZCBgbm9kZWAgdG8gYHBhcmVudGBzIGNoaWxkcmVuIG9yIHRvIGB0b2tlbnNgLlxuICAgICAqIFBlcmZvcm1zIG1lcmdlcyB3aGVyZSBwb3NzaWJsZS4gKi9cbiAgICBmdW5jdGlvbiBhZGQobm9kZSwgcGFyZW50KSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4gOiB0b2tlbnM7XG4gICAgICB2YXIgcHJldiA9IGNoaWxkcmVuW2NoaWxkcmVuLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHByZXYgJiZcbiAgICAgICAgbm9kZS50eXBlID09PSBwcmV2LnR5cGUgJiZcbiAgICAgICAgbm9kZS50eXBlIGluIE1FUkdFQUJMRV9OT0RFUyAmJlxuICAgICAgICBtZXJnZWFibGUocHJldikgJiZcbiAgICAgICAgbWVyZ2VhYmxlKG5vZGUpXG4gICAgICApIHtcbiAgICAgICAgbm9kZSA9IE1FUkdFQUJMRV9OT0RFU1tub2RlLnR5cGVdLmNhbGwoc2VsZiwgcHJldiwgbm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlICE9PSBwcmV2KSB7XG4gICAgICAgIGNoaWxkcmVuLnB1c2gobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLmF0U3RhcnQgJiYgdG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICBzZWxmLmV4aXRTdGFydCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICAvKiBSZW1vdmUgYHN1YnZhbHVlYCBmcm9tIGB2YWx1ZWAuXG4gICAgICogYHN1YnZhbHVlYCBtdXN0IGJlIGF0IHRoZSBzdGFydCBvZiBgdmFsdWVgLiAqL1xuICAgIGZ1bmN0aW9uIGVhdChzdWJ2YWx1ZSkge1xuICAgICAgdmFyIGluZGVudCA9IGdldE9mZnNldCgpO1xuICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgICB2YXIgY3VycmVudCA9IG5vdygpO1xuXG4gICAgICB2YWxpZGF0ZUVhdChzdWJ2YWx1ZSk7XG5cbiAgICAgIGFwcGx5LnJlc2V0ID0gcmVzZXQ7XG4gICAgICByZXNldC50ZXN0ID0gdGVzdDtcbiAgICAgIGFwcGx5LnRlc3QgPSB0ZXN0O1xuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnN1YnN0cmluZyhzdWJ2YWx1ZS5sZW5ndGgpO1xuXG4gICAgICB1cGRhdGVQb3NpdGlvbihzdWJ2YWx1ZSk7XG5cbiAgICAgIGluZGVudCA9IGluZGVudCgpO1xuXG4gICAgICByZXR1cm4gYXBwbHk7XG5cbiAgICAgIC8qIEFkZCB0aGUgZ2l2ZW4gYXJndW1lbnRzLCBhZGQgYHBvc2l0aW9uYCB0b1xuICAgICAgICogdGhlIHJldHVybmVkIG5vZGUsIGFuZCByZXR1cm4gdGhlIG5vZGUuICovXG4gICAgICBmdW5jdGlvbiBhcHBseShub2RlLCBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBvcyhhZGQocG9zKG5vZGUpLCBwYXJlbnQpLCBpbmRlbnQpO1xuICAgICAgfVxuXG4gICAgICAvKiBGdW5jdGlvbnMganVzdCBsaWtlIGFwcGx5LCBidXQgcmVzZXRzIHRoZVxuICAgICAgICogY29udGVudDogIHRoZSBsaW5lIGFuZCBjb2x1bW4gYXJlIHJldmVyc2VkLFxuICAgICAgICogYW5kIHRoZSBlYXRlbiB2YWx1ZSBpcyByZS1hZGRlZC5cbiAgICAgICAqIFRoaXMgaXMgdXNlZnVsIGZvciBub2RlcyB3aXRoIGEgc2luZ2xlXG4gICAgICAgKiB0eXBlIG9mIGNvbnRlbnQsIHN1Y2ggYXMgbGlzdHMgYW5kIHRhYmxlcy5cbiAgICAgICAqIFNlZSBgYXBwbHlgIGFib3ZlIGZvciB3aGF0IHBhcmFtZXRlcnMgYXJlXG4gICAgICAgKiBleHBlY3RlZC4gKi9cbiAgICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xuICAgICAgICB2YXIgbm9kZSA9IGFwcGx5LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgbGluZSA9IGN1cnJlbnQubGluZTtcbiAgICAgICAgY29sdW1uID0gY3VycmVudC5jb2x1bW47XG4gICAgICAgIHZhbHVlID0gc3VidmFsdWUgKyB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgIH1cblxuICAgICAgLyogVGVzdCB0aGUgcG9zaXRpb24sIGFmdGVyIGVhdGluZywgYW5kIHJldmVyc2VcbiAgICAgICAqIHRvIGEgbm90LWVhdGVuIHN0YXRlLiAqL1xuICAgICAgZnVuY3Rpb24gdGVzdCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBvcyh7fSk7XG5cbiAgICAgICAgbGluZSA9IGN1cnJlbnQubGluZTtcbiAgICAgICAgY29sdW1uID0gY3VycmVudC5jb2x1bW47XG4gICAgICAgIHZhbHVlID0gc3VidmFsdWUgKyB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0LnBvc2l0aW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3Rvcnk7XG5cbi8qIEZhY3RvcnkgdG8gZGUtZXNjYXBlIGEgdmFsdWUsIGJhc2VkIG9uIGEgbGlzdCBhdCBga2V5YFxuICogaW4gYGN0eGAuICovXG5mdW5jdGlvbiBmYWN0b3J5KGN0eCwga2V5KSB7XG4gIHJldHVybiB1bmVzY2FwZTtcblxuICAvKiBEZS1lc2NhcGUgYSBzdHJpbmcgdXNpbmcgdGhlIGV4cHJlc3Npb24gYXQgYGtleWBcbiAgICogaW4gYGN0eGAuICovXG4gIGZ1bmN0aW9uIHVuZXNjYXBlKHZhbHVlKSB7XG4gICAgdmFyIHByZXYgPSAwO1xuICAgIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcXFwnKTtcbiAgICB2YXIgZXNjYXBlID0gY3R4W2tleV07XG4gICAgdmFyIHF1ZXVlID0gW107XG4gICAgdmFyIGNoYXJhY3RlcjtcblxuICAgIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHF1ZXVlLnB1c2godmFsdWUuc2xpY2UocHJldiwgaW5kZXgpKTtcbiAgICAgIHByZXYgPSBpbmRleCArIDE7XG4gICAgICBjaGFyYWN0ZXIgPSB2YWx1ZS5jaGFyQXQocHJldik7XG5cbiAgICAgIC8qIElmIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVyIGlzIG5vdCBhIHZhbGlkIGVzY2FwZSxcbiAgICAgICAqIGFkZCB0aGUgc2xhc2guICovXG4gICAgICBpZiAoIWNoYXJhY3RlciB8fCBlc2NhcGUuaW5kZXhPZihjaGFyYWN0ZXIpID09PSAtMSkge1xuICAgICAgICBxdWV1ZS5wdXNoKCdcXFxcJyk7XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignXFxcXCcsIHByZXYpO1xuICAgIH1cblxuICAgIHF1ZXVlLnB1c2godmFsdWUuc2xpY2UocHJldikpO1xuXG4gICAgcmV0dXJuIHF1ZXVlLmpvaW4oJycpO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50YXRpb247XG5cbi8qIE1hcCBvZiBjaGFyYWN0ZXJzLCBhbmQgdGhlaXIgY29sdW1uIGxlbmd0aCxcbiAqIHdoaWNoIGNhbiBiZSB1c2VkIGFzIGluZGVudGF0aW9uLiAqL1xudmFyIGNoYXJhY3RlcnMgPSB7JyAnOiAxLCAnXFx0JzogNH07XG5cbi8qIEdldHMgaW5kZW50YXRpb24gaW5mb3JtYXRpb24gZm9yIGEgbGluZS4gKi9cbmZ1bmN0aW9uIGluZGVudGF0aW9uKHZhbHVlKSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBpbmRlbnQgPSAwO1xuICB2YXIgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KGluZGV4KTtcbiAgdmFyIHN0b3BzID0ge307XG4gIHZhciBzaXplO1xuXG4gIHdoaWxlIChjaGFyYWN0ZXIgaW4gY2hhcmFjdGVycykge1xuICAgIHNpemUgPSBjaGFyYWN0ZXJzW2NoYXJhY3Rlcl07XG5cbiAgICBpbmRlbnQgKz0gc2l6ZTtcblxuICAgIGlmIChzaXplID4gMSkge1xuICAgICAgaW5kZW50ID0gTWF0aC5mbG9vcihpbmRlbnQgLyBzaXplKSAqIHNpemU7XG4gICAgfVxuXG4gICAgc3RvcHNbaW5kZW50XSA9IGluZGV4O1xuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckF0KCsraW5kZXgpO1xuICB9XG5cbiAgcmV0dXJuIHtpbmRlbnQ6IGluZGVudCwgc3RvcHM6IHN0b3BzfTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGF0dHJpYnV0ZU5hbWUgPSAnW2EtekEtWl86XVthLXpBLVowLTk6Ll8tXSonO1xudmFyIHVucXVvdGVkID0gJ1teXCJcXCc9PD5gXFxcXHUwMDAwLVxcXFx1MDAyMF0rJztcbnZhciBzaW5nbGVRdW90ZWQgPSAnXFwnW15cXCddKlxcJyc7XG52YXIgZG91YmxlUXVvdGVkID0gJ1wiW15cIl0qXCInO1xudmFyIGF0dHJpYnV0ZVZhbHVlID0gJyg/OicgKyB1bnF1b3RlZCArICd8JyArIHNpbmdsZVF1b3RlZCArICd8JyArIGRvdWJsZVF1b3RlZCArICcpJztcbnZhciBhdHRyaWJ1dGUgPSAnKD86XFxcXHMrJyArIGF0dHJpYnV0ZU5hbWUgKyAnKD86XFxcXHMqPVxcXFxzKicgKyBhdHRyaWJ1dGVWYWx1ZSArICcpPyknO1xudmFyIG9wZW5UYWcgPSAnPFtBLVphLXpdW0EtWmEtejAtOVxcXFwtXSonICsgYXR0cmlidXRlICsgJypcXFxccypcXFxcLz8+JztcbnZhciBjbG9zZVRhZyA9ICc8XFxcXC9bQS1aYS16XVtBLVphLXowLTlcXFxcLV0qXFxcXHMqPic7XG52YXIgY29tbWVudCA9ICc8IS0tLS0+fDwhLS0oPzotP1tePi1dKSg/Oi0/W14tXSkqLS0+JztcbnZhciBwcm9jZXNzaW5nID0gJzxbP10uKj9bP10+JztcbnZhciBkZWNsYXJhdGlvbiA9ICc8IVtBLVphLXpdK1xcXFxzK1tePl0qPic7XG52YXIgY2RhdGEgPSAnPCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+JztcblxuZXhwb3J0cy5vcGVuQ2xvc2VUYWcgPSBuZXcgUmVnRXhwKCdeKD86JyArIG9wZW5UYWcgKyAnfCcgKyBjbG9zZVRhZyArICcpJyk7XG5cbmV4cG9ydHMudGFnID0gbmV3IFJlZ0V4cCgnXig/OicgK1xuICBvcGVuVGFnICsgJ3wnICtcbiAgY2xvc2VUYWcgKyAnfCcgK1xuICBjb21tZW50ICsgJ3wnICtcbiAgcHJvY2Vzc2luZyArICd8JyArXG4gIGRlY2xhcmF0aW9uICsgJ3wnICtcbiAgY2RhdGEgK1xuJyknKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBpbnRlcnJ1cHQ7XG5cbmZ1bmN0aW9uIGludGVycnVwdChpbnRlcnJ1cHRvcnMsIHRva2VuaXplcnMsIGN0eCwgcGFyYW1zKSB7XG4gIHZhciBib29scyA9IFsncGVkYW50aWMnLCAnY29tbW9ubWFyayddO1xuICB2YXIgY291bnQgPSBib29scy5sZW5ndGg7XG4gIHZhciBsZW5ndGggPSBpbnRlcnJ1cHRvcnMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGludGVycnVwdG9yO1xuICB2YXIgY29uZmlnO1xuICB2YXIgZm47XG4gIHZhciBvZmZzZXQ7XG4gIHZhciBib29sO1xuICB2YXIgaWdub3JlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaW50ZXJydXB0b3IgPSBpbnRlcnJ1cHRvcnNbaW5kZXhdO1xuICAgIGNvbmZpZyA9IGludGVycnVwdG9yWzFdIHx8IHt9O1xuICAgIGZuID0gaW50ZXJydXB0b3JbMF07XG4gICAgb2Zmc2V0ID0gLTE7XG4gICAgaWdub3JlID0gZmFsc2U7XG5cbiAgICB3aGlsZSAoKytvZmZzZXQgPCBjb3VudCkge1xuICAgICAgYm9vbCA9IGJvb2xzW29mZnNldF07XG5cbiAgICAgIGlmIChjb25maWdbYm9vbF0gIT09IHVuZGVmaW5lZCAmJiBjb25maWdbYm9vbF0gIT09IGN0eC5vcHRpb25zW2Jvb2xdKSB7XG4gICAgICAgIGlnbm9yZSA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpZ25vcmUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmICh0b2tlbml6ZXJzW2ZuXS5hcHBseShjdHgsIHBhcmFtcykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvbGxhcHNlV2hpdGVTcGFjZSA9IHJlcXVpcmUoJ2NvbGxhcHNlLXdoaXRlLXNwYWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplO1xuXG4vKiBOb3JtYWxpemUgYW4gaWRlbnRpZmllci4gIENvbGxhcHNlcyBtdWx0aXBsZSB3aGl0ZSBzcGFjZVxuICogY2hhcmFjdGVycyBpbnRvIGEgc2luZ2xlIHNwYWNlLCBhbmQgcmVtb3ZlcyBjYXNpbmcuICovXG5mdW5jdGlvbiBub3JtYWxpemUodmFsdWUpIHtcbiAgcmV0dXJuIGNvbGxhcHNlV2hpdGVTcGFjZSh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHRyaW0gPSByZXF1aXJlKCd0cmltJyk7XG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xudmFyIGdldEluZGVudCA9IHJlcXVpcmUoJy4vZ2V0LWluZGVudGF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gaW5kZW50YXRpb247XG5cbnZhciBDX1NQQUNFID0gJyAnO1xudmFyIENfTkVXTElORSA9ICdcXG4nO1xudmFyIENfVEFCID0gJ1xcdCc7XG5cbi8qIFJlbW92ZSB0aGUgbWluaW11bSBpbmRlbnQgZnJvbSBldmVyeSBsaW5lIGluIGB2YWx1ZWAuXG4gKiBTdXBwb3J0cyBib3RoIHRhYiwgc3BhY2VkLCBhbmQgbWl4ZWQgaW5kZW50YXRpb24gKGFzXG4gKiB3ZWxsIGFzIHBvc3NpYmxlKS4gKi9cbmZ1bmN0aW9uIGluZGVudGF0aW9uKHZhbHVlLCBtYXhpbXVtKSB7XG4gIHZhciB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChDX05FV0xJTkUpO1xuICB2YXIgcG9zaXRpb24gPSB2YWx1ZXMubGVuZ3RoICsgMTtcbiAgdmFyIG1pbkluZGVudCA9IEluZmluaXR5O1xuICB2YXIgbWF0cml4ID0gW107XG4gIHZhciBpbmRleDtcbiAgdmFyIGluZGVudGF0aW9uO1xuICB2YXIgc3RvcHM7XG4gIHZhciBwYWRkaW5nO1xuXG4gIHZhbHVlcy51bnNoaWZ0KHJlcGVhdChDX1NQQUNFLCBtYXhpbXVtKSArICchJyk7XG5cbiAgd2hpbGUgKHBvc2l0aW9uLS0pIHtcbiAgICBpbmRlbnRhdGlvbiA9IGdldEluZGVudCh2YWx1ZXNbcG9zaXRpb25dKTtcblxuICAgIG1hdHJpeFtwb3NpdGlvbl0gPSBpbmRlbnRhdGlvbi5zdG9wcztcblxuICAgIGlmICh0cmltKHZhbHVlc1twb3NpdGlvbl0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGluZGVudGF0aW9uLmluZGVudCkge1xuICAgICAgaWYgKGluZGVudGF0aW9uLmluZGVudCA+IDAgJiYgaW5kZW50YXRpb24uaW5kZW50IDwgbWluSW5kZW50KSB7XG4gICAgICAgIG1pbkluZGVudCA9IGluZGVudGF0aW9uLmluZGVudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbWluSW5kZW50ID0gSW5maW5pdHk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5JbmRlbnQgIT09IEluZmluaXR5KSB7XG4gICAgcG9zaXRpb24gPSB2YWx1ZXMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uLS0pIHtcbiAgICAgIHN0b3BzID0gbWF0cml4W3Bvc2l0aW9uXTtcbiAgICAgIGluZGV4ID0gbWluSW5kZW50O1xuXG4gICAgICB3aGlsZSAoaW5kZXggJiYgIShpbmRleCBpbiBzdG9wcykpIHtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0cmltKHZhbHVlc1twb3NpdGlvbl0pLmxlbmd0aCAhPT0gMCAmJlxuICAgICAgICBtaW5JbmRlbnQgJiZcbiAgICAgICAgaW5kZXggIT09IG1pbkluZGVudFxuICAgICAgKSB7XG4gICAgICAgIHBhZGRpbmcgPSBDX1RBQjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhZGRpbmcgPSAnJztcbiAgICAgIH1cblxuICAgICAgdmFsdWVzW3Bvc2l0aW9uXSA9IHBhZGRpbmcgKyB2YWx1ZXNbcG9zaXRpb25dLnNsaWNlKFxuICAgICAgICBpbmRleCBpbiBzdG9wcyA/IHN0b3BzW2luZGV4XSArIDEgOiAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHZhbHVlcy5zaGlmdCgpO1xuXG4gIHJldHVybiB2YWx1ZXMuam9pbihDX05FV0xJTkUpO1xufVxuIiwiLyohXG4gKiByZXBlYXQtc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9yZXBlYXQtc3RyaW5nPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVzdWx0cyBjYWNoZVxuICovXG5cbnZhciByZXMgPSAnJztcbnZhciBjYWNoZTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcGVhdGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGVhdDtcblxuLyoqXG4gKiBSZXBlYXQgdGhlIGdpdmVuIGBzdHJpbmdgIHRoZSBzcGVjaWZpZWQgYG51bWJlcmBcbiAqIG9mIHRpbWVzLlxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xuICogcmVwZWF0KCdBJywgNSk7XG4gKiAvLz0+IEFBQUFBXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmluZ2AgVGhlIHN0cmluZyB0byByZXBlYXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBgbnVtYmVyYCBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlcGVhdGVkIHN0cmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXBlYXQoc3RyLCBudW0pIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIC8vIGNvdmVyIGNvbW1vbiwgcXVpY2sgdXNlIGNhc2VzXG4gIGlmIChudW0gPT09IDEpIHJldHVybiBzdHI7XG4gIGlmIChudW0gPT09IDIpIHJldHVybiBzdHIgKyBzdHI7XG5cbiAgdmFyIG1heCA9IHN0ci5sZW5ndGggKiBudW07XG4gIGlmIChjYWNoZSAhPT0gc3RyIHx8IHR5cGVvZiBjYWNoZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjYWNoZSA9IHN0cjtcbiAgICByZXMgPSAnJztcbiAgfSBlbHNlIGlmIChyZXMubGVuZ3RoID49IG1heCkge1xuICAgIHJldHVybiByZXMuc3Vic3RyKDAsIG1heCk7XG4gIH1cblxuICB3aGlsZSAobWF4ID4gcmVzLmxlbmd0aCAmJiBudW0gPiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHJlcyArPSBzdHI7XG4gICAgfVxuXG4gICAgbnVtID4+PSAxO1xuICAgIHN0ciArPSBzdHI7XG4gIH1cblxuICByZXMgKz0gc3RyO1xuICByZXMgPSByZXMuc3Vic3RyKDAsIG1heCk7XG4gIHJldHVybiByZXM7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuXG5mdW5jdGlvbiByZXBsYWNlRXh0KG5wYXRoLCBleHQpIHtcbiAgaWYgKHR5cGVvZiBucGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbnBhdGg7XG4gIH1cblxuICBpZiAobnBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG5wYXRoO1xuICB9XG5cbiAgdmFyIG5GaWxlTmFtZSA9IHBhdGguYmFzZW5hbWUobnBhdGgsIHBhdGguZXh0bmFtZShucGF0aCkpICsgZXh0O1xuICByZXR1cm4gcGF0aC5qb2luKHBhdGguZGlybmFtZShucGF0aCksIG5GaWxlTmFtZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVwbGFjZUV4dDtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuLy8gQ29uc3RydWN0IGEgc3RhdGUgYHRvZ2dsZXJgOiBhIGZ1bmN0aW9uIHdoaWNoIGludmVyc2VzIGBwcm9wZXJ0eWAgaW4gY29udGV4dFxuLy8gYmFzZWQgb24gaXRzIGN1cnJlbnQgdmFsdWUuXG4vLyBUaGUgYnkgYHRvZ2dsZXJgIHJldHVybmVkIGZ1bmN0aW9uIHJlc3RvcmVzIHRoYXQgdmFsdWUuXG5mdW5jdGlvbiBmYWN0b3J5KGtleSwgc3RhdGUsIGN0eCkge1xuICByZXR1cm4gZW50ZXJcblxuICBmdW5jdGlvbiBlbnRlcigpIHtcbiAgICB2YXIgY29udGV4dCA9IGN0eCB8fCB0aGlzXG4gICAgdmFyIGN1cnJlbnQgPSBjb250ZXh0W2tleV1cblxuICAgIGNvbnRleHRba2V5XSA9ICFzdGF0ZVxuXG4gICAgcmV0dXJuIGV4aXRcblxuICAgIGZ1bmN0aW9uIGV4aXQoKSB7XG4gICAgICBjb250ZXh0W2tleV0gPSBjdXJyZW50XG4gICAgfVxuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHN0ciA9PiB7XG5cdGNvbnN0IG1hdGNoID0gc3RyLm1hdGNoKC9eWyBcXHRdKig/PVxcUykvZ20pO1xuXG5cdGlmICghbWF0Y2gpIHtcblx0XHRyZXR1cm4gc3RyO1xuXHR9XG5cblx0Ly8gVE9ETzogdXNlIHNwcmVhZCBvcGVyYXRvciB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDZcblx0Y29uc3QgaW5kZW50ID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgbWF0Y2gubWFwKHggPT4geC5sZW5ndGgpKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRjb25zdCByZSA9IG5ldyBSZWdFeHAoYF5bIFxcXFx0XXske2luZGVudH19YCwgJ2dtJyk7XG5cblx0cmV0dXJuIGluZGVudCA+IDAgPyBzdHIucmVwbGFjZShyZSwgJycpIDogc3RyO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1UcmFpbGluZ0xpbmVzXG5cbi8vIFJlbW92ZSBmaW5hbCBuZXdsaW5lIGNoYXJhY3RlcnMgZnJvbSBgdmFsdWVgLlxuZnVuY3Rpb24gdHJpbVRyYWlsaW5nTGluZXModmFsdWUpIHtcbiAgcmV0dXJuIFN0cmluZyh2YWx1ZSkucmVwbGFjZSgvXFxuKyQvLCAnJylcbn1cbiIsIlxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuZnVuY3Rpb24gdHJpbShzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbn1cblxuZXhwb3J0cy5sZWZ0ID0gZnVuY3Rpb24oc3RyKXtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKTtcbn07XG5cbmV4cG9ydHMucmlnaHQgPSBmdW5jdGlvbihzdHIpe1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccyokLywgJycpO1xufTtcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgd3JhcCA9IHJlcXVpcmUoJy4vd3JhcC5qcycpXG5cbm1vZHVsZS5leHBvcnRzID0gdHJvdWdoXG5cbnRyb3VnaC53cmFwID0gd3JhcFxuXG52YXIgc2xpY2UgPSBbXS5zbGljZVxuXG4vLyBDcmVhdGUgbmV3IG1pZGRsZXdhcmUuXG5mdW5jdGlvbiB0cm91Z2goKSB7XG4gIHZhciBmbnMgPSBbXVxuICB2YXIgbWlkZGxld2FyZSA9IHt9XG5cbiAgbWlkZGxld2FyZS5ydW4gPSBydW5cbiAgbWlkZGxld2FyZS51c2UgPSB1c2VcblxuICByZXR1cm4gbWlkZGxld2FyZVxuXG4gIC8vIFJ1biBgZm5zYC4gIExhc3QgYXJndW1lbnQgbXVzdCBiZSBhIGNvbXBsZXRpb24gaGFuZGxlci5cbiAgZnVuY3Rpb24gcnVuKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGlucHV0ID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIC0xKVxuICAgIHZhciBkb25lID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXVxuXG4gICAgaWYgKHR5cGVvZiBkb25lICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uIGFzIGxhc3QgYXJndW1lbnQsIG5vdCAnICsgZG9uZSlcbiAgICB9XG5cbiAgICBuZXh0LmFwcGx5KG51bGwsIFtudWxsXS5jb25jYXQoaW5wdXQpKVxuXG4gICAgLy8gUnVuIHRoZSBuZXh0IGBmbmAsIGlmIGFueS5cbiAgICBmdW5jdGlvbiBuZXh0KGVycikge1xuICAgICAgdmFyIGZuID0gZm5zWysraW5kZXhdXG4gICAgICB2YXIgcGFyYW1zID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApXG4gICAgICB2YXIgdmFsdWVzID0gcGFyYW1zLnNsaWNlKDEpXG4gICAgICB2YXIgbGVuZ3RoID0gaW5wdXQubGVuZ3RoXG4gICAgICB2YXIgcG9zID0gLTFcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBkb25lKGVycilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIENvcHkgbm9uLW51bGx5IGlucHV0IGludG8gdmFsdWVzLlxuICAgICAgd2hpbGUgKCsrcG9zIDwgbGVuZ3RoKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbcG9zXSA9PT0gbnVsbCB8fCB2YWx1ZXNbcG9zXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsdWVzW3Bvc10gPSBpbnB1dFtwb3NdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaW5wdXQgPSB2YWx1ZXNcblxuICAgICAgLy8gTmV4dCBvciBkb25lLlxuICAgICAgaWYgKGZuKSB7XG4gICAgICAgIHdyYXAoZm4sIG5leHQpLmFwcGx5KG51bGwsIGlucHV0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9uZS5hcHBseShudWxsLCBbbnVsbF0uY29uY2F0KGlucHV0KSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYGZuYCB0byB0aGUgbGlzdC5cbiAgZnVuY3Rpb24gdXNlKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgZm5gIHRvIGJlIGEgZnVuY3Rpb24sIG5vdCAnICsgZm4pXG4gICAgfVxuXG4gICAgZm5zLnB1c2goZm4pXG5cbiAgICByZXR1cm4gbWlkZGxld2FyZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNsaWNlID0gW10uc2xpY2VcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwXG5cbi8vIFdyYXAgYGZuYC5cbi8vIENhbiBiZSBzeW5jIG9yIGFzeW5jOyByZXR1cm4gYSBwcm9taXNlLCByZWNlaXZlIGEgY29tcGxldGlvbiBoYW5kbGVyLCByZXR1cm5cbi8vIG5ldyB2YWx1ZXMgYW5kIGVycm9ycy5cbmZ1bmN0aW9uIHdyYXAoZm4sIGNhbGxiYWNrKSB7XG4gIHZhciBpbnZva2VkXG5cbiAgcmV0dXJuIHdyYXBwZWRcblxuICBmdW5jdGlvbiB3cmFwcGVkKCkge1xuICAgIHZhciBwYXJhbXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMClcbiAgICB2YXIgY2FsbGJhY2sgPSBmbi5sZW5ndGggPiBwYXJhbXMubGVuZ3RoXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBwYXJhbXMucHVzaChkb25lKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICByZXN1bHQgPSBmbi5hcHBseShudWxsLCBwYXJhbXMpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFdlbGwsIHRoaXMgaXMgcXVpdGUgdGhlIHBpY2tsZS5cbiAgICAgIC8vIGBmbmAgcmVjZWl2ZWQgYSBjYWxsYmFjayBhbmQgaW52b2tlZCBpdCAodGh1cyBjb250aW51aW5nIHRoZSBwaXBlbGluZSksXG4gICAgICAvLyBidXQgbGF0ZXIgYWxzbyB0aHJldyBhbiBlcnJvci5cbiAgICAgIC8vIFdl4oCZcmUgbm90IGFib3V0IHRvIHJlc3RhcnQgdGhlIHBpcGVsaW5lIGFnYWluLCBzbyB0aGUgb25seSB0aGluZyBsZWZ0XG4gICAgICAvLyB0byBkbyBpcyB0byB0aHJvdyB0aGUgdGhpbmcgaW5zdGVhZC5cbiAgICAgIGlmIChjYWxsYmFjayAmJiBpbnZva2VkKSB7XG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkb25lKGVycm9yKVxuICAgIH1cblxuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc3VsdC50aGVuKHRoZW4sIGRvbmUpXG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIGRvbmUocmVzdWx0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhlbihyZXN1bHQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gSW52b2tlIGBuZXh0YCwgb25seSBvbmNlLlxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlmICghaW52b2tlZCkge1xuICAgICAgaW52b2tlZCA9IHRydWVcblxuICAgICAgY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludm9rZSBgZG9uZWAgd2l0aCBvbmUgdmFsdWUuXG4gIC8vIFRyYWNrcyBpZiBhbiBlcnJvciBpcyBwYXNzZWQsIHRvby5cbiAgZnVuY3Rpb24gdGhlbih2YWx1ZSkge1xuICAgIGRvbmUobnVsbCwgdmFsdWUpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgaW5oZXJpdHMgPSByZXF1aXJlKCdpbmhlcml0cycpXG5cbm1vZHVsZS5leHBvcnRzID0gdW5oZXJpdFxuXG4vLyBDcmVhdGUgYSBjdXN0b20gY29uc3RydWN0b3Igd2hpY2ggY2FuIGJlIG1vZGlmaWVkIHdpdGhvdXQgYWZmZWN0aW5nIHRoZVxuLy8gb3JpZ2luYWwgY2xhc3MuXG5mdW5jdGlvbiB1bmhlcml0KFN1cGVyKSB7XG4gIHZhciByZXN1bHRcbiAgdmFyIGtleVxuICB2YXIgdmFsdWVcblxuICBpbmhlcml0cyhPZiwgU3VwZXIpXG4gIGluaGVyaXRzKEZyb20sIE9mKVxuXG4gIC8vIENsb25lIHZhbHVlcy5cbiAgcmVzdWx0ID0gT2YucHJvdG90eXBlXG5cbiAgZm9yIChrZXkgaW4gcmVzdWx0KSB7XG4gICAgdmFsdWUgPSByZXN1bHRba2V5XVxuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gJ2NvbmNhdCcgaW4gdmFsdWUgPyB2YWx1ZS5jb25jYXQoKSA6IHh0ZW5kKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBPZlxuXG4gIC8vIENvbnN0cnVjdG9yIGFjY2VwdGluZyBhIHNpbmdsZSBhcmd1bWVudCwgd2hpY2ggaXRzZWxmIGlzIGFuIGBhcmd1bWVudHNgXG4gIC8vIG9iamVjdC5cbiAgZnVuY3Rpb24gRnJvbShwYXJhbWV0ZXJzKSB7XG4gICAgcmV0dXJuIFN1cGVyLmFwcGx5KHRoaXMsIHBhcmFtZXRlcnMpXG4gIH1cblxuICAvLyBDb25zdHJ1Y3RvciBhY2NlcHRpbmcgdmFyaWFkaWMgYXJndW1lbnRzLlxuICBmdW5jdGlvbiBPZigpIHtcbiAgICBpZiAoISh0aGlzIGluc3RhbmNlb2YgT2YpKSB7XG4gICAgICByZXR1cm4gbmV3IEZyb20oYXJndW1lbnRzKVxuICAgIH1cblxuICAgIHJldHVybiBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBEZXBlbmRlbmNpZXMuICovXG52YXIgZXh0ZW5kID0gcmVxdWlyZSgnZXh0ZW5kJylcbnZhciBiYWlsID0gcmVxdWlyZSgnYmFpbCcpXG52YXIgdmZpbGUgPSByZXF1aXJlKCd2ZmlsZScpXG52YXIgdHJvdWdoID0gcmVxdWlyZSgndHJvdWdoJylcbnZhciBzdHJpbmcgPSByZXF1aXJlKCd4LWlzLXN0cmluZycpXG52YXIgcGxhaW4gPSByZXF1aXJlKCdpcy1wbGFpbi1vYmonKVxuXG4vKiBFeHBvc2UgYSBmcm96ZW4gcHJvY2Vzc29yLiAqL1xubW9kdWxlLmV4cG9ydHMgPSB1bmlmaWVkKCkuZnJlZXplKClcblxudmFyIHNsaWNlID0gW10uc2xpY2VcbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vKiBQcm9jZXNzIHBpcGVsaW5lLiAqL1xudmFyIHBpcGVsaW5lID0gdHJvdWdoKClcbiAgLnVzZShwaXBlbGluZVBhcnNlKVxuICAudXNlKHBpcGVsaW5lUnVuKVxuICAudXNlKHBpcGVsaW5lU3RyaW5naWZ5KVxuXG5mdW5jdGlvbiBwaXBlbGluZVBhcnNlKHAsIGN0eCkge1xuICBjdHgudHJlZSA9IHAucGFyc2UoY3R4LmZpbGUpXG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lUnVuKHAsIGN0eCwgbmV4dCkge1xuICBwLnJ1bihjdHgudHJlZSwgY3R4LmZpbGUsIGRvbmUpXG5cbiAgZnVuY3Rpb24gZG9uZShlcnIsIHRyZWUsIGZpbGUpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBuZXh0KGVycilcbiAgICB9IGVsc2Uge1xuICAgICAgY3R4LnRyZWUgPSB0cmVlXG4gICAgICBjdHguZmlsZSA9IGZpbGVcbiAgICAgIG5leHQoKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwaXBlbGluZVN0cmluZ2lmeShwLCBjdHgpIHtcbiAgY3R4LmZpbGUuY29udGVudHMgPSBwLnN0cmluZ2lmeShjdHgudHJlZSwgY3R4LmZpbGUpXG59XG5cbi8qIEZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgZmlyc3QgcHJvY2Vzc29yLiAqL1xuZnVuY3Rpb24gdW5pZmllZCgpIHtcbiAgdmFyIGF0dGFjaGVycyA9IFtdXG4gIHZhciB0cmFuc2Zvcm1lcnMgPSB0cm91Z2goKVxuICB2YXIgbmFtZXNwYWNlID0ge31cbiAgdmFyIGZyb3plbiA9IGZhbHNlXG4gIHZhciBmcmVlemVJbmRleCA9IC0xXG5cbiAgLyogRGF0YSBtYW5hZ2VtZW50LiAqL1xuICBwcm9jZXNzb3IuZGF0YSA9IGRhdGFcblxuICAvKiBMb2NrLiAqL1xuICBwcm9jZXNzb3IuZnJlZXplID0gZnJlZXplXG5cbiAgLyogUGx1Zy1pbnMuICovXG4gIHByb2Nlc3Nvci5hdHRhY2hlcnMgPSBhdHRhY2hlcnNcbiAgcHJvY2Vzc29yLnVzZSA9IHVzZVxuXG4gIC8qIEFQSS4gKi9cbiAgcHJvY2Vzc29yLnBhcnNlID0gcGFyc2VcbiAgcHJvY2Vzc29yLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuICBwcm9jZXNzb3IucnVuID0gcnVuXG4gIHByb2Nlc3Nvci5ydW5TeW5jID0gcnVuU3luY1xuICBwcm9jZXNzb3IucHJvY2VzcyA9IHByb2Nlc3NcbiAgcHJvY2Vzc29yLnByb2Nlc3NTeW5jID0gcHJvY2Vzc1N5bmNcblxuICAvKiBFeHBvc2UuICovXG4gIHJldHVybiBwcm9jZXNzb3JcblxuICAvKiBDcmVhdGUgYSBuZXcgcHJvY2Vzc29yIGJhc2VkIG9uIHRoZSBwcm9jZXNzb3JcbiAgICogaW4gdGhlIGN1cnJlbnQgc2NvcGUuICovXG4gIGZ1bmN0aW9uIHByb2Nlc3NvcigpIHtcbiAgICB2YXIgZGVzdGluYXRpb24gPSB1bmlmaWVkKClcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZGVzdGluYXRpb24udXNlLmFwcGx5KG51bGwsIGF0dGFjaGVyc1tpbmRleF0pXG4gICAgfVxuXG4gICAgZGVzdGluYXRpb24uZGF0YShleHRlbmQodHJ1ZSwge30sIG5hbWVzcGFjZSkpXG5cbiAgICByZXR1cm4gZGVzdGluYXRpb25cbiAgfVxuXG4gIC8qIEZyZWV6ZTogdXNlZCB0byBzaWduYWwgYSBwcm9jZXNzb3IgdGhhdCBoYXMgZmluaXNoZWRcbiAgICogY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogRm9yIGV4YW1wbGUsIHRha2UgdW5pZmllZCBpdHNlbGYuICBJdOKAmXMgZnJvemVuLlxuICAgKiBQbHVnLWlucyBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGl0LiAgUmF0aGVyLCBpdCBzaG91bGRcbiAgICogYmUgZXh0ZW5kZWQsIGJ5IGludm9raW5nIGl0LCBiZWZvcmUgbW9kaWZ5aW5nIGl0LlxuICAgKlxuICAgKiBJbiBlc3NlbmNlLCBhbHdheXMgaW52b2tlIHRoaXMgd2hlbiBleHBvcnRpbmcgYVxuICAgKiBwcm9jZXNzb3IuICovXG4gIGZ1bmN0aW9uIGZyZWV6ZSgpIHtcbiAgICB2YXIgdmFsdWVzXG4gICAgdmFyIHBsdWdpblxuICAgIHZhciBvcHRpb25zXG4gICAgdmFyIHRyYW5zZm9ybWVyXG5cbiAgICBpZiAoZnJvemVuKSB7XG4gICAgICByZXR1cm4gcHJvY2Vzc29yXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrZnJlZXplSW5kZXggPCBhdHRhY2hlcnMubGVuZ3RoKSB7XG4gICAgICB2YWx1ZXMgPSBhdHRhY2hlcnNbZnJlZXplSW5kZXhdXG4gICAgICBwbHVnaW4gPSB2YWx1ZXNbMF1cbiAgICAgIG9wdGlvbnMgPSB2YWx1ZXNbMV1cbiAgICAgIHRyYW5zZm9ybWVyID0gbnVsbFxuXG4gICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMgPT09IHRydWUpIHtcbiAgICAgICAgdmFsdWVzWzFdID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIHRyYW5zZm9ybWVyID0gcGx1Z2luLmFwcGx5KHByb2Nlc3NvciwgdmFsdWVzLnNsaWNlKDEpKVxuXG4gICAgICBpZiAodHlwZW9mIHRyYW5zZm9ybWVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyYW5zZm9ybWVycy51c2UodHJhbnNmb3JtZXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnJvemVuID0gdHJ1ZVxuICAgIGZyZWV6ZUluZGV4ID0gSW5maW5pdHlcblxuICAgIHJldHVybiBwcm9jZXNzb3JcbiAgfVxuXG4gIC8qIERhdGEgbWFuYWdlbWVudC5cbiAgICogR2V0dGVyIC8gc2V0dGVyIGZvciBwcm9jZXNzb3Itc3BlY2lmaWMgaW5mb3JtdGlvbi4gKi9cbiAgZnVuY3Rpb24gZGF0YShrZXksIHZhbHVlKSB7XG4gICAgaWYgKHN0cmluZyhrZXkpKSB7XG4gICAgICAvKiBTZXQgYGtleWAuICovXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcblxuICAgICAgICBuYW1lc3BhY2Vba2V5XSA9IHZhbHVlXG5cbiAgICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgICAgfVxuXG4gICAgICAvKiBHZXQgYGtleWAuICovXG4gICAgICByZXR1cm4gKG93bi5jYWxsKG5hbWVzcGFjZSwga2V5KSAmJiBuYW1lc3BhY2Vba2V5XSkgfHwgbnVsbFxuICAgIH1cblxuICAgIC8qIFNldCBzcGFjZS4gKi9cbiAgICBpZiAoa2V5KSB7XG4gICAgICBhc3NlcnRVbmZyb3plbignZGF0YScsIGZyb3plbilcbiAgICAgIG5hbWVzcGFjZSA9IGtleVxuICAgICAgcmV0dXJuIHByb2Nlc3NvclxuICAgIH1cblxuICAgIC8qIEdldCBzcGFjZS4gKi9cbiAgICByZXR1cm4gbmFtZXNwYWNlXG4gIH1cblxuICAvKiBQbHVnLWluIG1hbmFnZW1lbnQuXG4gICAqXG4gICAqIFBhc3MgaXQ6XG4gICAqICogICBhbiBhdHRhY2hlciBhbmQgb3B0aW9ucyxcbiAgICogKiAgIGEgcHJlc2V0LFxuICAgKiAqICAgYSBsaXN0IG9mIHByZXNldHMsIGF0dGFjaGVycywgYW5kIGFyZ3VtZW50cyAobGlzdFxuICAgKiAgICAgb2YgYXR0YWNoZXJzIGFuZCBvcHRpb25zKS4gKi9cbiAgZnVuY3Rpb24gdXNlKHZhbHVlKSB7XG4gICAgdmFyIHNldHRpbmdzXG5cbiAgICBhc3NlcnRVbmZyb3plbigndXNlJywgZnJvemVuKVxuXG4gICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8qIEVtcHR5ICovXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFkZFBsdWdpbi5hcHBseShudWxsLCBhcmd1bWVudHMpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgICAgYWRkTGlzdCh2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgIH1cblxuICAgIGlmIChzZXR0aW5ncykge1xuICAgICAgbmFtZXNwYWNlLnNldHRpbmdzID0gZXh0ZW5kKG5hbWVzcGFjZS5zZXR0aW5ncyB8fCB7fSwgc2V0dGluZ3MpXG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2Nlc3NvclxuXG4gICAgZnVuY3Rpb24gYWRkUHJlc2V0KHJlc3VsdCkge1xuICAgICAgYWRkTGlzdChyZXN1bHQucGx1Z2lucylcblxuICAgICAgaWYgKHJlc3VsdC5zZXR0aW5ncykge1xuICAgICAgICBzZXR0aW5ncyA9IGV4dGVuZChzZXR0aW5ncyB8fCB7fSwgcmVzdWx0LnNldHRpbmdzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZCh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhZGRQbHVnaW4odmFsdWUpXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgaWYgKCdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgICAgICAgYWRkUGx1Z2luLmFwcGx5KG51bGwsIHZhbHVlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZFByZXNldCh2YWx1ZSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB1c2FibGUgdmFsdWUsIG5vdCBgJyArIHZhbHVlICsgJ2AnKVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZExpc3QocGx1Z2lucykge1xuICAgICAgdmFyIGxlbmd0aFxuICAgICAgdmFyIGluZGV4XG5cbiAgICAgIGlmIChwbHVnaW5zID09PSBudWxsIHx8IHBsdWdpbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvKiBFbXB0eSAqL1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2lucyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gcGx1Z2lucykge1xuICAgICAgICBsZW5ndGggPSBwbHVnaW5zLmxlbmd0aFxuICAgICAgICBpbmRleCA9IC0xXG5cbiAgICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgICBhZGQocGx1Z2luc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYSBsaXN0IG9mIHBsdWdpbnMsIG5vdCBgJyArIHBsdWdpbnMgKyAnYCcpXG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbiwgdmFsdWUpIHtcbiAgICAgIHZhciBlbnRyeSA9IGZpbmQocGx1Z2luKVxuXG4gICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKHBsYWluKGVudHJ5WzFdKSAmJiBwbGFpbih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IGV4dGVuZChlbnRyeVsxXSwgdmFsdWUpXG4gICAgICAgIH1cblxuICAgICAgICBlbnRyeVsxXSA9IHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdHRhY2hlcnMucHVzaChzbGljZS5jYWxsKGFyZ3VtZW50cykpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZmluZChwbHVnaW4pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXR0YWNoZXJzLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGVudHJ5XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgZW50cnkgPSBhdHRhY2hlcnNbaW5kZXhdXG5cbiAgICAgIGlmIChlbnRyeVswXSA9PT0gcGx1Z2luKSB7XG4gICAgICAgIHJldHVybiBlbnRyeVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKVxuICAgKiBpbnRvIGEgVW5pc3Qgbm9kZSB1c2luZyB0aGUgYFBhcnNlcmAgb24gdGhlXG4gICAqIHByb2Nlc3Nvci4gKi9cbiAgZnVuY3Rpb24gcGFyc2UoZG9jKSB7XG4gICAgdmFyIGZpbGUgPSB2ZmlsZShkb2MpXG4gICAgdmFyIFBhcnNlclxuXG4gICAgZnJlZXplKClcbiAgICBQYXJzZXIgPSBwcm9jZXNzb3IuUGFyc2VyXG4gICAgYXNzZXJ0UGFyc2VyKCdwYXJzZScsIFBhcnNlcilcblxuICAgIGlmIChuZXdhYmxlKFBhcnNlcikpIHtcbiAgICAgIHJldHVybiBuZXcgUGFyc2VyKFN0cmluZyhmaWxlKSwgZmlsZSkucGFyc2UoKVxuICAgIH1cblxuICAgIHJldHVybiBQYXJzZXIoU3RyaW5nKGZpbGUpLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8qIFJ1biB0cmFuc2Zvcm1zIG9uIGEgVW5pc3Qgbm9kZSByZXByZXNlbnRhdGlvbiBvZiBhIGZpbGVcbiAgICogKGluIHN0cmluZyBvciBWRmlsZSByZXByZXNlbnRhdGlvbiksIGFzeW5jLiAqL1xuICBmdW5jdGlvbiBydW4obm9kZSwgZmlsZSwgY2IpIHtcbiAgICBhc3NlcnROb2RlKG5vZGUpXG4gICAgZnJlZXplKClcblxuICAgIGlmICghY2IgJiYgdHlwZW9mIGZpbGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNiID0gZmlsZVxuICAgICAgZmlsZSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHRyYW5zZm9ybWVycy5ydW4obm9kZSwgdmZpbGUoZmlsZSksIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyLCB0cmVlLCBmaWxlKSB7XG4gICAgICAgIHRyZWUgPSB0cmVlIHx8IG5vZGVcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUodHJlZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYihudWxsLCB0cmVlLCBmaWxlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyogUnVuIHRyYW5zZm9ybXMgb24gYSBVbmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZVxuICAgKiAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKSwgc3luYy4gKi9cbiAgZnVuY3Rpb24gcnVuU3luYyhub2RlLCBmaWxlKSB7XG4gICAgdmFyIGNvbXBsZXRlID0gZmFsc2VcbiAgICB2YXIgcmVzdWx0XG5cbiAgICBydW4obm9kZSwgZmlsZSwgZG9uZSlcblxuICAgIGFzc2VydERvbmUoJ3J1blN5bmMnLCAncnVuJywgY29tcGxldGUpXG5cbiAgICByZXR1cm4gcmVzdWx0XG5cbiAgICBmdW5jdGlvbiBkb25lKGVyciwgdHJlZSkge1xuICAgICAgY29tcGxldGUgPSB0cnVlXG4gICAgICBiYWlsKGVycilcbiAgICAgIHJlc3VsdCA9IHRyZWVcbiAgICB9XG4gIH1cblxuICAvKiBTdHJpbmdpZnkgYSBVbmlzdCBub2RlIHJlcHJlc2VudGF0aW9uIG9mIGEgZmlsZVxuICAgKiAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKSBpbnRvIGEgc3RyaW5nXG4gICAqIHVzaW5nIHRoZSBgQ29tcGlsZXJgIG9uIHRoZSBwcm9jZXNzb3IuICovXG4gIGZ1bmN0aW9uIHN0cmluZ2lmeShub2RlLCBkb2MpIHtcbiAgICB2YXIgZmlsZSA9IHZmaWxlKGRvYylcbiAgICB2YXIgQ29tcGlsZXJcblxuICAgIGZyZWV6ZSgpXG4gICAgQ29tcGlsZXIgPSBwcm9jZXNzb3IuQ29tcGlsZXJcbiAgICBhc3NlcnRDb21waWxlcignc3RyaW5naWZ5JywgQ29tcGlsZXIpXG4gICAgYXNzZXJ0Tm9kZShub2RlKVxuXG4gICAgaWYgKG5ld2FibGUoQ29tcGlsZXIpKSB7XG4gICAgICByZXR1cm4gbmV3IENvbXBpbGVyKG5vZGUsIGZpbGUpLmNvbXBpbGUoKVxuICAgIH1cblxuICAgIHJldHVybiBDb21waWxlcihub2RlLCBmaWxlKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5ldy1jYXBcbiAgfVxuXG4gIC8qIFBhcnNlIGEgZmlsZSAoaW4gc3RyaW5nIG9yIFZGaWxlIHJlcHJlc2VudGF0aW9uKVxuICAgKiBpbnRvIGEgVW5pc3Qgbm9kZSB1c2luZyB0aGUgYFBhcnNlcmAgb24gdGhlIHByb2Nlc3NvcixcbiAgICogdGhlbiBydW4gdHJhbnNmb3JtcyBvbiB0aGF0IG5vZGUsIGFuZCBjb21waWxlIHRoZVxuICAgKiByZXN1bHRpbmcgbm9kZSB1c2luZyB0aGUgYENvbXBpbGVyYCBvbiB0aGUgcHJvY2Vzc29yLFxuICAgKiBhbmQgc3RvcmUgdGhhdCByZXN1bHQgb24gdGhlIFZGaWxlLiAqL1xuICBmdW5jdGlvbiBwcm9jZXNzKGRvYywgY2IpIHtcbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2VzcycsIHByb2Nlc3Nvci5QYXJzZXIpXG4gICAgYXNzZXJ0Q29tcGlsZXIoJ3Byb2Nlc3MnLCBwcm9jZXNzb3IuQ29tcGlsZXIpXG5cbiAgICBpZiAoIWNiKSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZXhlY3V0b3IpXG4gICAgfVxuXG4gICAgZXhlY3V0b3IobnVsbCwgY2IpXG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgICBwaXBlbGluZS5ydW4ocHJvY2Vzc29yLCB7ZmlsZTogZmlsZX0sIGRvbmUpXG5cbiAgICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2IobnVsbCwgZmlsZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIFByb2Nlc3MgdGhlIGdpdmVuIGRvY3VtZW50IChpbiBzdHJpbmcgb3IgVkZpbGVcbiAgICogcmVwcmVzZW50YXRpb24pLCBzeW5jLiAqL1xuICBmdW5jdGlvbiBwcm9jZXNzU3luYyhkb2MpIHtcbiAgICB2YXIgY29tcGxldGUgPSBmYWxzZVxuICAgIHZhciBmaWxlXG5cbiAgICBmcmVlemUoKVxuICAgIGFzc2VydFBhcnNlcigncHJvY2Vzc1N5bmMnLCBwcm9jZXNzb3IuUGFyc2VyKVxuICAgIGFzc2VydENvbXBpbGVyKCdwcm9jZXNzU3luYycsIHByb2Nlc3Nvci5Db21waWxlcilcbiAgICBmaWxlID0gdmZpbGUoZG9jKVxuXG4gICAgcHJvY2VzcyhmaWxlLCBkb25lKVxuXG4gICAgYXNzZXJ0RG9uZSgncHJvY2Vzc1N5bmMnLCAncHJvY2VzcycsIGNvbXBsZXRlKVxuXG4gICAgcmV0dXJuIGZpbGVcblxuICAgIGZ1bmN0aW9uIGRvbmUoZXJyKSB7XG4gICAgICBjb21wbGV0ZSA9IHRydWVcbiAgICAgIGJhaWwoZXJyKVxuICAgIH1cbiAgfVxufVxuXG4vKiBDaGVjayBpZiBgZnVuY2AgaXMgYSBjb25zdHJ1Y3Rvci4gKi9cbmZ1bmN0aW9uIG5ld2FibGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBrZXlzKHZhbHVlLnByb3RvdHlwZSlcbn1cblxuLyogQ2hlY2sgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3Qgd2l0aCBrZXlzLiAqL1xuZnVuY3Rpb24ga2V5cyh2YWx1ZSkge1xuICB2YXIga2V5XG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyogQXNzZXJ0IGEgcGFyc2VyIGlzIGF2YWlsYWJsZS4gKi9cbmZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCBQYXJzZXIpIHtcbiAgaWYgKHR5cGVvZiBQYXJzZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBgJyArIG5hbWUgKyAnYCB3aXRob3V0IGBQYXJzZXJgJylcbiAgfVxufVxuXG4vKiBBc3NlcnQgYSBjb21waWxlciBpcyBhdmFpbGFibGUuICovXG5mdW5jdGlvbiBhc3NlcnRDb21waWxlcihuYW1lLCBDb21waWxlcikge1xuICBpZiAodHlwZW9mIENvbXBpbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgYCcgKyBuYW1lICsgJ2Agd2l0aG91dCBgQ29tcGlsZXJgJylcbiAgfVxufVxuXG4vKiBBc3NlcnQgdGhlIHByb2Nlc3NvciBpcyBub3QgZnJvemVuLiAqL1xuZnVuY3Rpb24gYXNzZXJ0VW5mcm96ZW4obmFtZSwgZnJvemVuKSB7XG4gIGlmIChmcm96ZW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBbXG4gICAgICAgICdDYW5ub3QgaW52b2tlIGAnICsgbmFtZSArICdgIG9uIGEgZnJvemVuIHByb2Nlc3Nvci5cXG5DcmVhdGUgYSBuZXcgJyxcbiAgICAgICAgJ3Byb2Nlc3NvciBmaXJzdCwgYnkgaW52b2tpbmcgaXQ6IHVzZSBgcHJvY2Vzc29yKClgIGluc3RlYWQgb2YgJyxcbiAgICAgICAgJ2Bwcm9jZXNzb3JgLidcbiAgICAgIF0uam9pbignJylcbiAgICApXG4gIH1cbn1cblxuLyogQXNzZXJ0IGBub2RlYCBpcyBhIFVuaXN0IG5vZGUuICovXG5mdW5jdGlvbiBhc3NlcnROb2RlKG5vZGUpIHtcbiAgaWYgKCFub2RlIHx8ICFzdHJpbmcobm9kZS50eXBlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgbm9kZSwgZ290IGAnICsgbm9kZSArICdgJylcbiAgfVxufVxuXG4vKiBBc3NlcnQgdGhhdCBgY29tcGxldGVgIGlzIGB0cnVlYC4gKi9cbmZ1bmN0aW9uIGFzc2VydERvbmUobmFtZSwgYXN5bmNOYW1lLCBjb21wbGV0ZSkge1xuICBpZiAoIWNvbXBsZXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ2AnICsgbmFtZSArICdgIGZpbmlzaGVkIGFzeW5jLiBVc2UgYCcgKyBhc3luY05hbWUgKyAnYCBpbnN0ZWFkJ1xuICAgIClcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29udmVydFxuXG5mdW5jdGlvbiBjb252ZXJ0KHRlc3QpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlRmFjdG9yeSh0ZXN0KVxuICB9XG5cbiAgaWYgKHRlc3QgPT09IG51bGwgfHwgdGVzdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG9rXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuICgnbGVuZ3RoJyBpbiB0ZXN0ID8gYW55RmFjdG9yeSA6IG1hdGNoZXNGYWN0b3J5KSh0ZXN0KVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRlc3RcbiAgfVxuXG4gIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgZnVuY3Rpb24sIHN0cmluZywgb3Igb2JqZWN0IGFzIHRlc3QnKVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0QWxsKHRlc3RzKSB7XG4gIHZhciByZXN1bHRzID0gW11cbiAgdmFyIGxlbmd0aCA9IHRlc3RzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0c1tpbmRleF0gPSBjb252ZXJ0KHRlc3RzW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbi8vIFV0aWxpdHkgYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbi8vIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG5mdW5jdGlvbiBtYXRjaGVzRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiBtYXRjaGVzXG5cbiAgZnVuY3Rpb24gbWF0Y2hlcyhub2RlKSB7XG4gICAgdmFyIGtleVxuXG4gICAgZm9yIChrZXkgaW4gdGVzdCkge1xuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gdGVzdFtrZXldKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gYW55RmFjdG9yeSh0ZXN0cykge1xuICB2YXIgY2hlY2tzID0gY29udmVydEFsbCh0ZXN0cylcbiAgdmFyIGxlbmd0aCA9IGNoZWNrcy5sZW5ndGhcblxuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMoKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoY2hlY2tzW2luZGV4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byBjb252ZXJ0IGEgc3RyaW5nIGludG8gYSBmdW5jdGlvbiB3aGljaCBjaGVja3MgYSBnaXZlbiBub2Rl4oCZcyB0eXBlXG4vLyBmb3Igc2FpZCBzdHJpbmcuXG5mdW5jdGlvbiB0eXBlRmFjdG9yeSh0ZXN0KSB7XG4gIHJldHVybiB0eXBlXG5cbiAgZnVuY3Rpb24gdHlwZShub2RlKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4obm9kZSAmJiBub2RlLnR5cGUgPT09IHRlc3QpXG4gIH1cbn1cblxuLy8gVXRpbGl0eSB0byByZXR1cm4gdHJ1ZS5cbmZ1bmN0aW9uIG9rKCkge1xuICByZXR1cm4gdHJ1ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlbW92ZVBvc2l0aW9uXG5cbmZ1bmN0aW9uIHJlbW92ZVBvc2l0aW9uKG5vZGUsIGZvcmNlKSB7XG4gIHZpc2l0KG5vZGUsIGZvcmNlID8gaGFyZCA6IHNvZnQpXG4gIHJldHVybiBub2RlXG59XG5cbmZ1bmN0aW9uIGhhcmQobm9kZSkge1xuICBkZWxldGUgbm9kZS5wb3NpdGlvblxufVxuXG5mdW5jdGlvbiBzb2Z0KG5vZGUpIHtcbiAgbm9kZS5wb3NpdGlvbiA9IHVuZGVmaW5lZFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ2lmeVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgLyogTm90aGluZy4gKi9cbiAgaWYgKCF2YWx1ZSB8fCB0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIC8qIE5vZGUuICovXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ3Bvc2l0aW9uJykgfHwgb3duLmNhbGwodmFsdWUsICd0eXBlJykpIHtcbiAgICByZXR1cm4gcG9zaXRpb24odmFsdWUucG9zaXRpb24pXG4gIH1cblxuICAvKiBQb3NpdGlvbi4gKi9cbiAgaWYgKG93bi5jYWxsKHZhbHVlLCAnc3RhcnQnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2VuZCcpKSB7XG4gICAgcmV0dXJuIHBvc2l0aW9uKHZhbHVlKVxuICB9XG5cbiAgLyogUG9pbnQuICovXG4gIGlmIChvd24uY2FsbCh2YWx1ZSwgJ2xpbmUnKSB8fCBvd24uY2FsbCh2YWx1ZSwgJ2NvbHVtbicpKSB7XG4gICAgcmV0dXJuIHBvaW50KHZhbHVlKVxuICB9XG5cbiAgLyogPyAqL1xuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwb2ludChwb2ludCkge1xuICBpZiAoIXBvaW50IHx8IHR5cGVvZiBwb2ludCAhPT0gJ29iamVjdCcpIHtcbiAgICBwb2ludCA9IHt9XG4gIH1cblxuICByZXR1cm4gaW5kZXgocG9pbnQubGluZSkgKyAnOicgKyBpbmRleChwb2ludC5jb2x1bW4pXG59XG5cbmZ1bmN0aW9uIHBvc2l0aW9uKHBvcykge1xuICBpZiAoIXBvcyB8fCB0eXBlb2YgcG9zICE9PSAnb2JqZWN0Jykge1xuICAgIHBvcyA9IHt9XG4gIH1cblxuICByZXR1cm4gcG9pbnQocG9zLnN0YXJ0KSArICctJyArIHBvaW50KHBvcy5lbmQpXG59XG5cbmZ1bmN0aW9uIGluZGV4KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiAxXG59XG4iLCIndXNlIHN0cmljdCdcblxuLyogRXhwb3NlLiAqL1xubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFBhcmVudHNcblxuLyogVmlzaXQuICovXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdHlwZSwgdmlzaXRvcikge1xuICB2YXIgc3RhY2sgPSBbXVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZpc2l0b3IgPSB0eXBlXG4gICAgdHlwZSA9IG51bGxcbiAgfVxuXG4gIG9uZSh0cmVlKVxuXG4gIC8qIFZpc2l0IGEgc2luZ2xlIG5vZGUuICovXG4gIGZ1bmN0aW9uIG9uZShub2RlKSB7XG4gICAgdmFyIHJlc3VsdFxuXG4gICAgaWYgKCF0eXBlIHx8IG5vZGUudHlwZSA9PT0gdHlwZSkge1xuICAgICAgcmVzdWx0ID0gdmlzaXRvcihub2RlLCBzdGFjay5jb25jYXQoKSlcbiAgICB9XG5cbiAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiByZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gYWxsKG5vZGUuY2hpbGRyZW4sIG5vZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyogVmlzaXQgY2hpbGRyZW4gaW4gYHBhcmVudGAuICovXG4gIGZ1bmN0aW9uIGFsbChjaGlsZHJlbiwgcGFyZW50KSB7XG4gICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aFxuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIGNoaWxkXG5cbiAgICBzdGFjay5wdXNoKHBhcmVudClcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkcmVuW2luZGV4XVxuXG4gICAgICBpZiAoY2hpbGQgJiYgb25lKGNoaWxkKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhY2sucG9wKClcblxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0XG5cbnZhciB2aXNpdFBhcmVudHMgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0LXBhcmVudHMnKVxuXG52YXIgQ09OVElOVUUgPSB2aXNpdFBhcmVudHMuQ09OVElOVUVcbnZhciBTS0lQID0gdmlzaXRQYXJlbnRzLlNLSVBcbnZhciBFWElUID0gdmlzaXRQYXJlbnRzLkVYSVRcblxudmlzaXQuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXQuU0tJUCA9IFNLSVBcbnZpc2l0LkVYSVQgPSBFWElUXG5cbmZ1bmN0aW9uIHZpc2l0KHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgb3ZlcmxvYWQsIHJldmVyc2UpXG5cbiAgZnVuY3Rpb24gb3ZlcmxvYWQobm9kZSwgcGFyZW50cykge1xuICAgIHZhciBwYXJlbnQgPSBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV1cbiAgICB2YXIgaW5kZXggPSBwYXJlbnQgPyBwYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihub2RlKSA6IG51bGxcbiAgICByZXR1cm4gdmlzaXRvcihub2RlLCBpbmRleCwgcGFyZW50KVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB2aXNpdFBhcmVudHNcblxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxuXG52YXIgQ09OVElOVUUgPSB0cnVlXG52YXIgU0tJUCA9ICdza2lwJ1xudmFyIEVYSVQgPSBmYWxzZVxuXG52aXNpdFBhcmVudHMuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXRQYXJlbnRzLlNLSVAgPSBTS0lQXG52aXNpdFBhcmVudHMuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgdmFyIGlzXG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICBpcyA9IGNvbnZlcnQodGVzdClcblxuICBvbmUodHJlZSwgbnVsbCwgW10pXG5cbiAgLy8gVmlzaXQgYSBzaW5nbGUgbm9kZS5cbiAgZnVuY3Rpb24gb25lKG5vZGUsIGluZGV4LCBwYXJlbnRzKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdmFyIHN1YnJlc3VsdFxuXG4gICAgaWYgKCF0ZXN0IHx8IGlzKG5vZGUsIGluZGV4LCBwYXJlbnRzW3BhcmVudHMubGVuZ3RoIC0gMV0gfHwgbnVsbCkpIHtcbiAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChub2RlLmNoaWxkcmVuICYmIHJlc3VsdFswXSAhPT0gU0tJUCkge1xuICAgICAgc3VicmVzdWx0ID0gdG9SZXN1bHQoYWxsKG5vZGUuY2hpbGRyZW4sIHBhcmVudHMuY29uY2F0KG5vZGUpKSlcbiAgICAgIHJldHVybiBzdWJyZXN1bHRbMF0gPT09IEVYSVQgPyBzdWJyZXN1bHQgOiByZXN1bHRcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvLyBWaXNpdCBjaGlsZHJlbiBpbiBgcGFyZW50YC5cbiAgZnVuY3Rpb24gYWxsKGNoaWxkcmVuLCBwYXJlbnRzKSB7XG4gICAgdmFyIG1pbiA9IC0xXG4gICAgdmFyIHN0ZXAgPSByZXZlcnNlID8gLTEgOiAxXG4gICAgdmFyIGluZGV4ID0gKHJldmVyc2UgPyBjaGlsZHJlbi5sZW5ndGggOiBtaW4pICsgc3RlcFxuICAgIHZhciByZXN1bHRcblxuICAgIHdoaWxlIChpbmRleCA+IG1pbiAmJiBpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gb25lKGNoaWxkcmVuW2luZGV4XSwgaW5kZXgsIHBhcmVudHMpXG5cbiAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfVxuXG4gICAgICBpbmRleCA9IHR5cGVvZiByZXN1bHRbMV0gPT09ICdudW1iZXInID8gcmVzdWx0WzFdIDogaW5kZXggKyBzdGVwXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvUmVzdWx0KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBbQ09OVElOVUUsIHZhbHVlXVxuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxuZnVuY3Rpb24gZmFjdG9yeShmaWxlKSB7XG4gIHZhciBjb250ZW50cyA9IGluZGljZXMoU3RyaW5nKGZpbGUpKVxuXG4gIHJldHVybiB7XG4gICAgdG9Qb3NpdGlvbjogb2Zmc2V0VG9Qb3NpdGlvbkZhY3RvcnkoY29udGVudHMpLFxuICAgIHRvT2Zmc2V0OiBwb3NpdGlvblRvT2Zmc2V0RmFjdG9yeShjb250ZW50cylcbiAgfVxufVxuXG4vLyBGYWN0b3J5IHRvIGdldCB0aGUgbGluZSBhbmQgY29sdW1uLWJhc2VkIGBwb3NpdGlvbmAgZm9yIGBvZmZzZXRgIGluIHRoZSBib3VuZFxuLy8gaW5kaWNlcy5cbmZ1bmN0aW9uIG9mZnNldFRvUG9zaXRpb25GYWN0b3J5KGluZGljZXMpIHtcbiAgcmV0dXJuIG9mZnNldFRvUG9zaXRpb25cblxuICAvLyBHZXQgdGhlIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGZvciBgb2Zmc2V0YCBpbiB0aGUgYm91bmQgaW5kaWNlcy5cbiAgZnVuY3Rpb24gb2Zmc2V0VG9Qb3NpdGlvbihvZmZzZXQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBsZW5ndGggPSBpbmRpY2VzLmxlbmd0aFxuXG4gICAgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoaW5kaWNlc1tpbmRleF0gPiBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5lOiBpbmRleCArIDEsXG4gICAgICAgICAgY29sdW1uOiBvZmZzZXQgLSAoaW5kaWNlc1tpbmRleCAtIDFdIHx8IDApICsgMSxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cblxuLy8gRmFjdG9yeSB0byBnZXQgdGhlIGBvZmZzZXRgIGZvciBhIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGluIHRoZVxuLy8gYm91bmQgaW5kaWNlcy5cbmZ1bmN0aW9uIHBvc2l0aW9uVG9PZmZzZXRGYWN0b3J5KGluZGljZXMpIHtcbiAgcmV0dXJuIHBvc2l0aW9uVG9PZmZzZXRcblxuICAvLyBHZXQgdGhlIGBvZmZzZXRgIGZvciBhIGxpbmUgYW5kIGNvbHVtbi1iYXNlZCBgcG9zaXRpb25gIGluIHRoZSBib3VuZFxuICAvLyBpbmRpY2VzLlxuICBmdW5jdGlvbiBwb3NpdGlvblRvT2Zmc2V0KHBvc2l0aW9uKSB7XG4gICAgdmFyIGxpbmUgPSBwb3NpdGlvbiAmJiBwb3NpdGlvbi5saW5lXG4gICAgdmFyIGNvbHVtbiA9IHBvc2l0aW9uICYmIHBvc2l0aW9uLmNvbHVtblxuXG4gICAgaWYgKCFpc05hTihsaW5lKSAmJiAhaXNOYU4oY29sdW1uKSAmJiBsaW5lIC0gMSBpbiBpbmRpY2VzKSB7XG4gICAgICByZXR1cm4gKGluZGljZXNbbGluZSAtIDJdIHx8IDApICsgY29sdW1uIC0gMSB8fCAwXG4gICAgfVxuXG4gICAgcmV0dXJuIC0xXG4gIH1cbn1cblxuLy8gR2V0IGluZGljZXMgb2YgbGluZS1icmVha3MgaW4gYHZhbHVlYC5cbmZ1bmN0aW9uIGluZGljZXModmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicpXG5cbiAgd2hpbGUgKGluZGV4ICE9PSAtMSkge1xuICAgIHJlc3VsdC5wdXNoKGluZGV4ICsgMSlcbiAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJ1xcbicsIGluZGV4ICsgMSlcbiAgfVxuXG4gIHJlc3VsdC5wdXNoKHZhbHVlLmxlbmd0aCArIDEpXG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBzdHJpbmdpZnkgPSByZXF1aXJlKCd1bmlzdC11dGlsLXN0cmluZ2lmeS1wb3NpdGlvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gVk1lc3NhZ2VcblxuLy8gSW5oZXJpdCBmcm9tIGBFcnJvciNgLlxuZnVuY3Rpb24gVk1lc3NhZ2VQcm90b3R5cGUoKSB7fVxuVk1lc3NhZ2VQcm90b3R5cGUucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlXG5WTWVzc2FnZS5wcm90b3R5cGUgPSBuZXcgVk1lc3NhZ2VQcm90b3R5cGUoKVxuXG4vLyBNZXNzYWdlIHByb3BlcnRpZXMuXG52YXIgcHJvdG8gPSBWTWVzc2FnZS5wcm90b3R5cGVcblxucHJvdG8uZmlsZSA9ICcnXG5wcm90by5uYW1lID0gJydcbnByb3RvLnJlYXNvbiA9ICcnXG5wcm90by5tZXNzYWdlID0gJydcbnByb3RvLnN0YWNrID0gJydcbnByb3RvLmZhdGFsID0gbnVsbFxucHJvdG8uY29sdW1uID0gbnVsbFxucHJvdG8ubGluZSA9IG51bGxcblxuLy8gQ29uc3RydWN0IGEgbmV3IFZNZXNzYWdlLlxuLy9cbi8vIE5vdGU6IFdlIGNhbm5vdCBpbnZva2UgYEVycm9yYCBvbiB0aGUgY3JlYXRlZCBjb250ZXh0LCBhcyB0aGF0IGFkZHMgcmVhZG9ubHlcbi8vIGBsaW5lYCBhbmQgYGNvbHVtbmAgYXR0cmlidXRlcyBvbiBTYWZhcmkgOSwgdGh1cyB0aHJvd2luZyBhbmQgZmFpbGluZyB0aGVcbi8vIGRhdGEuXG5mdW5jdGlvbiBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIHBhcnRzXG4gIHZhciByYW5nZVxuICB2YXIgbG9jYXRpb25cblxuICBpZiAodHlwZW9mIHBvc2l0aW9uID09PSAnc3RyaW5nJykge1xuICAgIG9yaWdpbiA9IHBvc2l0aW9uXG4gICAgcG9zaXRpb24gPSBudWxsXG4gIH1cblxuICBwYXJ0cyA9IHBhcnNlT3JpZ2luKG9yaWdpbilcbiAgcmFuZ2UgPSBzdHJpbmdpZnkocG9zaXRpb24pIHx8ICcxOjEnXG5cbiAgbG9jYXRpb24gPSB7XG4gICAgc3RhcnQ6IHtsaW5lOiBudWxsLCBjb2x1bW46IG51bGx9LFxuICAgIGVuZDoge2xpbmU6IG51bGwsIGNvbHVtbjogbnVsbH1cbiAgfVxuXG4gIC8vIE5vZGUuXG4gIGlmIChwb3NpdGlvbiAmJiBwb3NpdGlvbi5wb3NpdGlvbikge1xuICAgIHBvc2l0aW9uID0gcG9zaXRpb24ucG9zaXRpb25cbiAgfVxuXG4gIGlmIChwb3NpdGlvbikge1xuICAgIC8vIFBvc2l0aW9uLlxuICAgIGlmIChwb3NpdGlvbi5zdGFydCkge1xuICAgICAgbG9jYXRpb24gPSBwb3NpdGlvblxuICAgICAgcG9zaXRpb24gPSBwb3NpdGlvbi5zdGFydFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBQb2ludC5cbiAgICAgIGxvY2F0aW9uLnN0YXJ0ID0gcG9zaXRpb25cbiAgICB9XG4gIH1cblxuICBpZiAocmVhc29uLnN0YWNrKSB7XG4gICAgdGhpcy5zdGFjayA9IHJlYXNvbi5zdGFja1xuICAgIHJlYXNvbiA9IHJlYXNvbi5tZXNzYWdlXG4gIH1cblxuICB0aGlzLm1lc3NhZ2UgPSByZWFzb25cbiAgdGhpcy5uYW1lID0gcmFuZ2VcbiAgdGhpcy5yZWFzb24gPSByZWFzb25cbiAgdGhpcy5saW5lID0gcG9zaXRpb24gPyBwb3NpdGlvbi5saW5lIDogbnVsbFxuICB0aGlzLmNvbHVtbiA9IHBvc2l0aW9uID8gcG9zaXRpb24uY29sdW1uIDogbnVsbFxuICB0aGlzLmxvY2F0aW9uID0gbG9jYXRpb25cbiAgdGhpcy5zb3VyY2UgPSBwYXJ0c1swXVxuICB0aGlzLnJ1bGVJZCA9IHBhcnRzWzFdXG59XG5cbmZ1bmN0aW9uIHBhcnNlT3JpZ2luKG9yaWdpbikge1xuICB2YXIgcmVzdWx0ID0gW251bGwsIG51bGxdXG4gIHZhciBpbmRleFxuXG4gIGlmICh0eXBlb2Ygb3JpZ2luID09PSAnc3RyaW5nJykge1xuICAgIGluZGV4ID0gb3JpZ2luLmluZGV4T2YoJzonKVxuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmVzdWx0WzFdID0gb3JpZ2luXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFswXSA9IG9yaWdpbi5zbGljZSgwLCBpbmRleClcbiAgICAgIHJlc3VsdFsxXSA9IG9yaWdpbi5zbGljZShpbmRleCArIDEpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbnZhciByZXBsYWNlID0gcmVxdWlyZSgncmVwbGFjZS1leHQnKTtcbnZhciBidWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWRmlsZTtcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5O1xudmFyIHByb3RvID0gVkZpbGUucHJvdG90eXBlO1xuXG5wcm90by50b1N0cmluZyA9IHRvU3RyaW5nO1xuXG4vKiBPcmRlciBvZiBzZXR0aW5nIChsZWFzdCBzcGVjaWZpYyB0byBtb3N0KSwgd2UgbmVlZCB0aGlzIGJlY2F1c2VcbiAqIG90aGVyd2lzZSBge3N0ZW06ICdhJywgcGF0aDogJ34vYi5qcyd9YCB3b3VsZCB0aHJvdywgYXMgYSBwYXRoXG4gKiBpcyBuZWVkZWQgYmVmb3JlIGEgc3RlbSBjYW4gYmUgc2V0LiAqL1xudmFyIG9yZGVyID0gW1xuICAnaGlzdG9yeScsXG4gICdwYXRoJyxcbiAgJ2Jhc2VuYW1lJyxcbiAgJ3N0ZW0nLFxuICAnZXh0bmFtZScsXG4gICdkaXJuYW1lJ1xuXTtcblxuLyogQ29uc3RydWN0IGEgbmV3IGZpbGUuICovXG5mdW5jdGlvbiBWRmlsZShvcHRpb25zKSB7XG4gIHZhciBwcm9wO1xuICB2YXIgaW5kZXg7XG4gIHZhciBsZW5ndGg7XG5cbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyB8fCBidWZmZXIob3B0aW9ucykpIHtcbiAgICBvcHRpb25zID0ge2NvbnRlbnRzOiBvcHRpb25zfTtcbiAgfSBlbHNlIGlmICgnbWVzc2FnZScgaW4gb3B0aW9ucyAmJiAnbWVzc2FnZXMnIGluIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBWRmlsZSkpIHtcbiAgICByZXR1cm4gbmV3IFZGaWxlKG9wdGlvbnMpO1xuICB9XG5cbiAgdGhpcy5kYXRhID0ge307XG4gIHRoaXMubWVzc2FnZXMgPSBbXTtcbiAgdGhpcy5oaXN0b3J5ID0gW107XG4gIHRoaXMuY3dkID0gcHJvY2Vzcy5jd2QoKTtcblxuICAvKiBTZXQgcGF0aCByZWxhdGVkIHByb3BlcnRpZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuICovXG4gIGluZGV4ID0gLTE7XG4gIGxlbmd0aCA9IG9yZGVyLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHByb3AgPSBvcmRlcltpbmRleF07XG5cbiAgICBpZiAob3duLmNhbGwob3B0aW9ucywgcHJvcCkpIHtcbiAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdO1xuICAgIH1cbiAgfVxuXG4gIC8qIFNldCBub24tcGF0aCByZWxhdGVkIHByb3BlcnRpZXMuICovXG4gIGZvciAocHJvcCBpbiBvcHRpb25zKSB7XG4gICAgaWYgKG9yZGVyLmluZGV4T2YocHJvcCkgPT09IC0xKSB7XG4gICAgICB0aGlzW3Byb3BdID0gb3B0aW9uc1twcm9wXTtcbiAgICB9XG4gIH1cbn1cblxuLyogQWNjZXNzIGZ1bGwgcGF0aCAoYH4vaW5kZXgubWluLmpzYCkuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdwYXRoJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5oaXN0b3J5W3RoaXMuaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAocGF0aCkge1xuICAgIGFzc2VydE5vbkVtcHR5KHBhdGgsICdwYXRoJyk7XG5cbiAgICBpZiAocGF0aCAhPT0gdGhpcy5wYXRoKSB7XG4gICAgICB0aGlzLmhpc3RvcnkucHVzaChwYXRoKTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKiBBY2Nlc3MgcGFyZW50IHBhdGggKGB+YCkuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sICdkaXJuYW1lJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMucGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoLmRpcm5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAoZGlybmFtZSkge1xuICAgIGFzc2VydFBhdGgodGhpcy5wYXRoLCAnZGlybmFtZScpO1xuICAgIHRoaXMucGF0aCA9IHBhdGguam9pbihkaXJuYW1lIHx8ICcnLCB0aGlzLmJhc2VuYW1lKTtcbiAgfVxufSk7XG5cbi8qIEFjY2VzcyBiYXNlbmFtZSAoYGluZGV4Lm1pbi5qc2ApLiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvLCAnYmFzZW5hbWUnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoKSA6IHVuZGVmaW5lZDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiAoYmFzZW5hbWUpIHtcbiAgICBhc3NlcnROb25FbXB0eShiYXNlbmFtZSwgJ2Jhc2VuYW1lJyk7XG4gICAgYXNzZXJ0UGFydChiYXNlbmFtZSwgJ2Jhc2VuYW1lJyk7XG4gICAgdGhpcy5wYXRoID0gcGF0aC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgYmFzZW5hbWUpO1xuICB9XG59KTtcblxuLyogQWNjZXNzIGV4dG5hbWUgKGAuanNgKS4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ2V4dG5hbWUnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguZXh0bmFtZSh0aGlzLnBhdGgpIDogdW5kZWZpbmVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChleHRuYW1lKSB7XG4gICAgdmFyIGV4dCA9IGV4dG5hbWUgfHwgJyc7XG5cbiAgICBhc3NlcnRQYXJ0KGV4dCwgJ2V4dG5hbWUnKTtcbiAgICBhc3NlcnRQYXRoKHRoaXMucGF0aCwgJ2V4dG5hbWUnKTtcblxuICAgIGlmIChleHQpIHtcbiAgICAgIGlmIChleHQuY2hhckF0KDApICE9PSAnLicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgbXVzdCBzdGFydCB3aXRoIGAuYCcpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZXh0LmluZGV4T2YoJy4nLCAxKSAhPT0gLTEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZXh0bmFtZWAgY2Fubm90IGNvbnRhaW4gbXVsdGlwbGUgZG90cycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGF0aCA9IHJlcGxhY2UodGhpcy5wYXRoLCBleHQpO1xuICB9XG59KTtcblxuLyogQWNjZXNzIHN0ZW0gKGBpbmRleC5taW5gKS4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90bywgJ3N0ZW0nLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5wYXRoID09PSAnc3RyaW5nJyA/IHBhdGguYmFzZW5hbWUodGhpcy5wYXRoLCB0aGlzLmV4dG5hbWUpIDogdW5kZWZpbmVkO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIChzdGVtKSB7XG4gICAgYXNzZXJ0Tm9uRW1wdHkoc3RlbSwgJ3N0ZW0nKTtcbiAgICBhc3NlcnRQYXJ0KHN0ZW0sICdzdGVtJyk7XG4gICAgdGhpcy5wYXRoID0gcGF0aC5qb2luKHRoaXMuZGlybmFtZSB8fCAnJywgc3RlbSArICh0aGlzLmV4dG5hbWUgfHwgJycpKTtcbiAgfVxufSk7XG5cbi8qIEdldCB0aGUgdmFsdWUgb2YgdGhlIGZpbGUuICovXG5mdW5jdGlvbiB0b1N0cmluZyhlbmNvZGluZykge1xuICB2YXIgdmFsdWUgPSB0aGlzLmNvbnRlbnRzIHx8ICcnO1xuICByZXR1cm4gYnVmZmVyKHZhbHVlKSA/IHZhbHVlLnRvU3RyaW5nKGVuY29kaW5nKSA6IFN0cmluZyh2YWx1ZSk7XG59XG5cbi8qIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgYSBwYXRoIChpLmUuLCBkb2VzXG4gKiBub3QgY29udGFpbiBgcGF0aC5zZXBgKS4gKi9cbmZ1bmN0aW9uIGFzc2VydFBhcnQocGFydCwgbmFtZSkge1xuICBpZiAocGFydC5pbmRleE9mKHBhdGguc2VwKSAhPT0gLTEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgbmFtZSArICdgIGNhbm5vdCBiZSBhIHBhdGg6IGRpZCBub3QgZXhwZWN0IGAnICsgcGF0aC5zZXAgKyAnYCcpO1xuICB9XG59XG5cbi8qIEFzc2VydCB0aGF0IGBwYXJ0YCBpcyBub3QgZW1wdHkuICovXG5mdW5jdGlvbiBhc3NlcnROb25FbXB0eShwYXJ0LCBuYW1lKSB7XG4gIGlmICghcGFydCkge1xuICAgIHRocm93IG5ldyBFcnJvcignYCcgKyBuYW1lICsgJ2AgY2Fubm90IGJlIGVtcHR5Jyk7XG4gIH1cbn1cblxuLyogQXNzZXJ0IGBwYXRoYCBleGlzdHMuICovXG5mdW5jdGlvbiBhc3NlcnRQYXRoKHBhdGgsIG5hbWUpIHtcbiAgaWYgKCFwYXRoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZXR0aW5nIGAnICsgbmFtZSArICdgIHJlcXVpcmVzIGBwYXRoYCB0byBiZSBzZXQgdG9vJyk7XG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFZNZXNzYWdlID0gcmVxdWlyZSgndmZpbGUtbWVzc2FnZScpO1xudmFyIFZGaWxlID0gcmVxdWlyZSgnLi9jb3JlLmpzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVkZpbGU7XG5cbnZhciBwcm90byA9IFZGaWxlLnByb3RvdHlwZTtcblxucHJvdG8ubWVzc2FnZSA9IG1lc3NhZ2U7XG5wcm90by5pbmZvID0gaW5mbztcbnByb3RvLmZhaWwgPSBmYWlsO1xuXG4vKiBTbGlnaHQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuICBSZW1vdmUgaW4gdGhlIGZ1dHVyZS4gKi9cbnByb3RvLndhcm4gPSBtZXNzYWdlO1xuXG4vKiBDcmVhdGUgYSBtZXNzYWdlIHdpdGggYHJlYXNvbmAgYXQgYHBvc2l0aW9uYC5cbiAqIFdoZW4gYW4gZXJyb3IgaXMgcGFzc2VkIGluIGFzIGByZWFzb25gLCBjb3BpZXMgdGhlIHN0YWNrLiAqL1xuZnVuY3Rpb24gbWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pIHtcbiAgdmFyIGZpbGVQYXRoID0gdGhpcy5wYXRoO1xuICB2YXIgbWVzc2FnZSA9IG5ldyBWTWVzc2FnZShyZWFzb24sIHBvc2l0aW9uLCBvcmlnaW4pO1xuXG4gIGlmIChmaWxlUGF0aCkge1xuICAgIG1lc3NhZ2UubmFtZSA9IGZpbGVQYXRoICsgJzonICsgbWVzc2FnZS5uYW1lO1xuICAgIG1lc3NhZ2UuZmlsZSA9IGZpbGVQYXRoO1xuICB9XG5cbiAgbWVzc2FnZS5mYXRhbCA9IGZhbHNlO1xuXG4gIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcblxuICByZXR1cm4gbWVzc2FnZTtcbn1cblxuLyogRmFpbC4gQ3JlYXRlcyBhIHZtZXNzYWdlLCBhc3NvY2lhdGVzIGl0IHdpdGggdGhlIGZpbGUsXG4gKiBhbmQgdGhyb3dzIGl0LiAqL1xuZnVuY3Rpb24gZmFpbCgpIHtcbiAgdmFyIG1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICBtZXNzYWdlLmZhdGFsID0gdHJ1ZTtcblxuICB0aHJvdyBtZXNzYWdlO1xufVxuXG4vKiBJbmZvLiBDcmVhdGVzIGEgdm1lc3NhZ2UsIGFzc29jaWF0ZXMgaXQgd2l0aCB0aGUgZmlsZSxcbiAqIGFuZCBtYXJrcyB0aGUgZmF0YWxpdHkgYXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGluZm8oKSB7XG4gIHZhciBtZXNzYWdlID0gdGhpcy5tZXNzYWdlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgbWVzc2FnZS5mYXRhbCA9IG51bGw7XG5cbiAgcmV0dXJuIG1lc3NhZ2U7XG59XG4iLCIoZnVuY3Rpb24oc2VsZikge1xuICAndXNlIHN0cmljdCc7XG5cbiAgaWYgKHNlbGYuZmV0Y2gpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIHZhciBzdXBwb3J0ID0ge1xuICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcbiAgICBpdGVyYWJsZTogJ1N5bWJvbCcgaW4gc2VsZiAmJiAnaXRlcmF0b3InIGluIFN5bWJvbCxcbiAgICBibG9iOiAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJiAnQmxvYicgaW4gc2VsZiAmJiAoZnVuY3Rpb24oKSB7XG4gICAgICB0cnkge1xuICAgICAgICBuZXcgQmxvYigpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfVxuXG4gIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyKSB7XG4gICAgdmFyIHZpZXdDbGFzc2VzID0gW1xuICAgICAgJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQzMkFycmF5XScsXG4gICAgICAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nXG4gICAgXVxuXG4gICAgdmFyIGlzRGF0YVZpZXcgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICAgIH1cblxuICAgIHZhciBpc0FycmF5QnVmZmVyVmlldyA9IEFycmF5QnVmZmVyLmlzVmlldyB8fCBmdW5jdGlvbihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSlcbiAgICB9XG4gICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGNoYXJhY3RlciBpbiBoZWFkZXIgZmllbGQgbmFtZScpXG4gICAgfVxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KClcbiAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuaXRlcmFibGUpIHtcbiAgICAgIGl0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9XG5cbiAgICBpZiAoaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMpIHtcbiAgICAgIGhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKVxuICAgICAgfSwgdGhpcylcbiAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcbiAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGhlYWRlcnMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCBoZWFkZXJzW25hbWVdKVxuICAgICAgfSwgdGhpcylcbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXVxuICAgIHRoaXMubWFwW25hbWVdID0gb2xkVmFsdWUgPyBvbGRWYWx1ZSsnLCcrdmFsdWUgOiB2YWx1ZVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIG5hbWUgPSBub3JtYWxpemVOYW1lKG5hbWUpXG4gICAgcmV0dXJuIHRoaXMuaGFzKG5hbWUpID8gdGhpcy5tYXBbbmFtZV0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdXG4gICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgIEhlYWRlcnMucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl0gPSBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzXG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWVcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNBcnJheUJ1ZmZlcihibG9iKSB7XG4gICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGJsb2IpXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRCbG9iQXNUZXh0KGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICBmdW5jdGlvbiByZWFkQXJyYXlCdWZmZXJBc1RleHQoYnVmKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYpXG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGFyc1tpXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUodmlld1tpXSlcbiAgICB9XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpXG4gIH1cblxuICBmdW5jdGlvbiBidWZmZXJDbG9uZShidWYpIHtcbiAgICBpZiAoYnVmLnNsaWNlKSB7XG4gICAgICByZXR1cm4gYnVmLnNsaWNlKDApXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmLmJ5dGVMZW5ndGgpXG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKVxuICAgICAgcmV0dXJuIHZpZXcuYnVmZmVyXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gQm9keSgpIHtcbiAgICB0aGlzLmJvZHlVc2VkID0gZmFsc2VcblxuICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgdGhpcy5fYm9keUluaXQgPSBib2R5XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYm9keSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlCbG9iID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keS50b1N0cmluZygpXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgc3VwcG9ydC5ibG9iICYmIGlzRGF0YVZpZXcoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keS5idWZmZXIpXG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pXG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgKEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpIHx8IGlzQXJyYXlCdWZmZXJWaWV3KGJvZHkpKSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnN1bWVkKHRoaXMpIHx8IFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYmxvYigpLnRoZW4ocmVhZEJsb2JBc0FycmF5QnVmZmVyKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy50ZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG5cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBSZXF1ZXN0KSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gU3RyaW5nKGlucHV0KVxuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG4gICAgaWYgKG9wdGlvbnMuaGVhZGVycyB8fCAhdGhpcy5oZWFkZXJzKSB7XG4gICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKVxuICAgIHRoaXMubW9kZSA9IG9wdGlvbnMubW9kZSB8fCB0aGlzLm1vZGUgfHwgbnVsbFxuICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cbiAgICBpZiAoKHRoaXMubWV0aG9kID09PSAnR0VUJyB8fCB0aGlzLm1ldGhvZCA9PT0gJ0hFQUQnKSAmJiBib2R5KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG4gICAgfVxuICAgIHRoaXMuX2luaXRCb2R5KGJvZHkpXG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7IGJvZHk6IHRoaXMuX2JvZHlJbml0IH0pXG4gIH1cblxuICBmdW5jdGlvbiBkZWNvZGUoYm9keSkge1xuICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcbiAgICBib2R5LnRyaW0oKS5zcGxpdCgnJicpLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcykge1xuICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG4gICAgICAgIHZhciBuYW1lID0gc3BsaXQuc2hpZnQoKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc9JykucmVwbGFjZSgvXFwrL2csICcgJylcbiAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZvcm1cbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhyYXdIZWFkZXJzKSB7XG4gICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpXG4gICAgLy8gUmVwbGFjZSBpbnN0YW5jZXMgb2YgXFxyXFxuIGFuZCBcXG4gZm9sbG93ZWQgYnkgYXQgbGVhc3Qgb25lIHNwYWNlIG9yIGhvcml6b250YWwgdGFiIHdpdGggYSBzcGFjZVxuICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmM3MjMwI3NlY3Rpb24tMy4yXG4gICAgdmFyIHByZVByb2Nlc3NlZEhlYWRlcnMgPSByYXdIZWFkZXJzLnJlcGxhY2UoL1xccj9cXG5bXFx0IF0rL2csICcgJylcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6JylcbiAgICAgIHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpLnRyaW0oKVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwYXJ0cy5qb2luKCc6JykudHJpbSgpXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gaGVhZGVyc1xuICB9XG5cbiAgQm9keS5jYWxsKFJlcXVlc3QucHJvdG90eXBlKVxuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge31cbiAgICB9XG5cbiAgICB0aGlzLnR5cGUgPSAnZGVmYXVsdCdcbiAgICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzID09PSB1bmRlZmluZWQgPyAyMDAgOiBvcHRpb25zLnN0YXR1c1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSAnc3RhdHVzVGV4dCcgaW4gb3B0aW9ucyA/IG9wdGlvbnMuc3RhdHVzVGV4dCA6ICdPSydcbiAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJ1xuICAgIHRoaXMuX2luaXRCb2R5KGJvZHlJbml0KVxuICB9XG5cbiAgQm9keS5jYWxsKFJlc3BvbnNlLnByb3RvdHlwZSlcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9XG5cbiAgUmVzcG9uc2UuZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogMCwgc3RhdHVzVGV4dDogJyd9KVxuICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICB2YXIgcmVkaXJlY3RTdGF0dXNlcyA9IFszMDEsIDMwMiwgMzAzLCAzMDcsIDMwOF1cblxuICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG4gICAgaWYgKHJlZGlyZWN0U3RhdHVzZXMuaW5kZXhPZihzdGF0dXMpID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgc3RhdHVzIGNvZGUnKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UobnVsbCwge3N0YXR1czogc3RhdHVzLCBoZWFkZXJzOiB7bG9jYXRpb246IHVybH19KVxuICB9XG5cbiAgc2VsZi5IZWFkZXJzID0gSGVhZGVyc1xuICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG4gIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZVxuXG4gIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zLnVybCA9ICdyZXNwb25zZVVSTCcgaW4geGhyID8geGhyLnJlc3BvbnNlVVJMIDogb3B0aW9ucy5oZWFkZXJzLmdldCgnWC1SZXF1ZXN0LVVSTCcpXG4gICAgICAgIHZhciBib2R5ID0gJ3Jlc3BvbnNlJyBpbiB4aHIgPyB4aHIucmVzcG9uc2UgOiB4aHIucmVzcG9uc2VUZXh0XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKVxuICAgICAgfVxuXG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpXG4gICAgICB9XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSlcblxuICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZVxuICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnb21pdCcpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYidcbiAgICAgIH1cblxuICAgICAgcmVxdWVzdC5oZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gICAgICB9KVxuXG4gICAgICB4aHIuc2VuZCh0eXBlb2YgcmVxdWVzdC5fYm9keUluaXQgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHJlcXVlc3QuX2JvZHlJbml0KVxuICAgIH0pXG4gIH1cbiAgc2VsZi5mZXRjaC5wb2x5ZmlsbCA9IHRydWVcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcbiIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZ1xuXG5mdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbChvYmopID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==