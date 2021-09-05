(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings"],{

/***/ "./components/Dialogs/ConfirmDialog/index.js":
/*!***************************************************!*\
  !*** ./components/Dialogs/ConfirmDialog/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmDialog; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ "../node_modules/@material-ui/core/es/Dialog/index.js");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "../node_modules/@material-ui/core/es/DialogContent/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "../node_modules/@material-ui/core/es/CircularProgress/index.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Form */ "./components/Form/index.js");
/* harmony import */ var _Form_Group__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Form/Group */ "./components/Form/Group.js");
/* harmony import */ var _Form_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Form/Button */ "./components/Form/Button.js");








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var ConfirmDialog = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ConfirmDialog, _React$Component);

  var _super = _createSuper(ConfirmDialog);

  function ConfirmDialog() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ConfirmDialog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      busy: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleSubmit", function (event) {
      event.preventDefault();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleConfirm", function (event) {
      var onConfirm = _this.props.onConfirm;
      event.preventDefault();
      var promise = onConfirm();

      if (promise && promise["finally"]) {
        _this.setState({
          busy: true
        });

        promise["finally"](function () {
          _this.setState({
            busy: false
          });
        });
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleClose", function (event) {
      var onCancel = _this.props.onCancel;

      if (event && event.preventDefault) {
        event.preventDefault();
      }

      onCancel();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ConfirmDialog, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          cancelLabel = _this$props.cancelLabel,
          confirmLabel = _this$props.confirmLabel,
          className = _this$props.className;
      var busy = this.state.busy;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('Dialog', className),
        onClose: this.handleClose,
        open: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "Dialog-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Form__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onSubmit: this.handleSubmit
      }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Form_Group__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "ConfirmDialog-buttons FormGroup--noSpacing"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ConfirmDialog-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        disabled: busy,
        onClick: this.handleClose
      }, cancelLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ConfirmDialog-spacer"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "ConfirmDialog-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Form_Button__WEBPACK_IMPORTED_MODULE_15__["default"], {
        disabled: busy,
        onClick: this.handleConfirm
      }, busy ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "Button-loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {
        size: "100%"
      })) : confirmLabel))))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ConfirmDialog;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ConfirmDialog, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  confirmLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  cancelLabel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ConfirmDialog, "defaultProps", {
  cancelLabel: 'Cancel',
  confirmLabel: 'OK'
});


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ConfirmDialog, "ConfirmDialog", "/Users/jneen/src/dj/ui/components/Dialogs/ConfirmDialog/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/ChangeUsernameButton.js":
/*!************************************************************!*\
  !*** ./components/SettingsManager/ChangeUsernameButton.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/es/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Edit */ "../node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Dialogs_PromptDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Dialogs/PromptDialog */ "./components/Dialogs/PromptDialog/index.js");
/* harmony import */ var _DialogCloseAnimation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../DialogCloseAnimation */ "./components/DialogCloseAnimation/index.js");








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["translate"])();

var ChangeUsernameButton = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ChangeUsernameButton, _React$Component);

  var _super = _createSuper(ChangeUsernameButton);

  function ChangeUsernameButton() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ChangeUsernameButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      changingUsername: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleOpen", function () {
      _this.setState({
        changingUsername: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleClose", function () {
      _this.closeDialog();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleSubmit", function (name) {
      var _this$props = _this.props,
          initialUsername = _this$props.initialUsername,
          onChangeUsername = _this$props.onChangeUsername;

      if (name === initialUsername) {
        _this.closeDialog();

        return null;
      }

      return onChangeUsername(name).then(_this.closeDialog.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this)));
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ChangeUsernameButton, [{
    key: "closeDialog",
    value: function closeDialog() {
      this.setState({
        changingUsername: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          t = _this$props2.t,
          initialUsername = _this$props2.initialUsername;
      var changingUsername = this.state.changingUsername;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "ChangeUsernameButton",
        onClick: this.handleOpen
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "ChangeUsernameButton-icon"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_DialogCloseAnimation__WEBPACK_IMPORTED_MODULE_13__["default"], {
        delay: 450
      }, changingUsername ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Dialogs_PromptDialog__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: t('settings.profile.username.change'),
        submitLabel: t('settings.profile.username.save'),
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, {
          nativeColor: "#777"
        }),
        value: initialUsername,
        onSubmit: this.handleSubmit,
        onCancel: this.handleClose
      }) : null));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ChangeUsernameButton;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(ChangeUsernameButton, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onChangeUsername: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  initialUsername: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
});

var _default = enhance(ChangeUsernameButton);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/SettingsManager/ChangeUsernameButton.js");
  reactHotLoader.register(ChangeUsernameButton, "ChangeUsernameButton", "/Users/jneen/src/dj/ui/components/SettingsManager/ChangeUsernameButton.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/ChangeUsernameButton.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/GithubIcon.js":
/*!**************************************************!*\
  !*** ./components/SettingsManager/GithubIcon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "../node_modules/@material-ui/core/es/SvgIcon/index.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



/* eslint-disable max-len */

var GithubIcon = function GithubIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    viewBox: "-40 -40 520 520"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"
  }));
};
/* eslint-enable max-len */


var _default = GithubIcon;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(GithubIcon, "GithubIcon", "/Users/jneen/src/dj/ui/components/SettingsManager/GithubIcon.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/GithubIcon.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/LabeledControl.js":
/*!******************************************************!*\
  !*** ./components/SettingsManager/LabeledControl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



 // The control is in `children`.

/* eslint-disable jsx-a11y/label-has-for */

var LabeledControl = function LabeledControl(_ref) {
  var id = _ref.id,
      label = _ref.label,
      children = _ref.children;
  var control = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "LabeledControl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "LabeledControl-label",
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(control, {
    id: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(control.className, 'LabeledControl-control')
  }));
};
/* eslint-enable jsx-a11y/label-has-for */


LabeledControl.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
var _default = LabeledControl;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(LabeledControl, "LabeledControl", "/Users/jneen/src/dj/ui/components/SettingsManager/LabeledControl.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/LabeledControl.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/LanguagePicker.js":
/*!******************************************************!*\
  !*** ./components/SettingsManager/LanguagePicker.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose_getContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/getContext */ "../node_modules/recompose/getContext.js");
/* harmony import */ var recompose_getContext__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_getContext__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "../node_modules/@material-ui/core/es/Select/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "../node_modules/@material-ui/core/es/MenuItem/index.js");


var _excluded = ["i18n"];

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var getResourceName = function getResourceName(i18n, language) {
  return i18n.t("locales.".concat(language));
};

var enhance = recompose_getContext__WEBPACK_IMPORTED_MODULE_4___default()({
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
});

var LanguagePicker = function LanguagePicker(_ref) {
  var i18n = _ref.i18n,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: "LanguagePicker"
  }, props), i18n.availableLanguages.map(function (lang) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: lang,
      value: lang
    }, getResourceName(i18n, lang));
  }));
};

LanguagePicker.propTypes = {
  i18n: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

var _default = enhance(LanguagePicker);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getResourceName, "getResourceName", "/Users/jneen/src/dj/ui/components/SettingsManager/LanguagePicker.js");
  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/SettingsManager/LanguagePicker.js");
  reactHotLoader.register(LanguagePicker, "LanguagePicker", "/Users/jneen/src/dj/ui/components/SettingsManager/LanguagePicker.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/LanguagePicker.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/Links.js":
/*!*********************************************!*\
  !*** ./components/SettingsManager/Links.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/withProps */ "../node_modules/recompose/withProps.js");
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_withProps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/es/Button/index.js");
/* harmony import */ var _material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Copyright */ "../node_modules/@material-ui/icons/Copyright.js");
/* harmony import */ var _material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _GithubIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GithubIcon */ "./components/SettingsManager/GithubIcon.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["translate"])();
var Link = recompose_withProps__WEBPACK_IMPORTED_MODULE_2___default()({
  className: 'SettingsPanel-link',
  target: '_blank'
})(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"]);

var Links = function Links(_ref) {
  var t = _ref.t;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "SettingsPanel-header"
  }, t('settings.links.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "http://u-wave.net"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GithubIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "SettingsPanel-linkIcon"
  }), t('settings.links.website')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "https://github.com/u-wave/web"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GithubIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "SettingsPanel-linkIcon"
  }), t('settings.links.source')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    href: "https://github.com/u-wave/web/tree/master/LICENSE"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Copyright__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "SettingsPanel-linkIcon"
  }), t('settings.links.license')));
};

Links.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var _default = enhance(Links);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/SettingsManager/Links.js");
  reactHotLoader.register(Link, "Link", "/Users/jneen/src/dj/ui/components/SettingsManager/Links.js");
  reactHotLoader.register(Links, "Links", "/Users/jneen/src/dj/ui/components/SettingsManager/Links.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/Links.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/LogoutButton.js":
/*!****************************************************!*\
  !*** ./components/SettingsManager/LogoutButton.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/es/Button/index.js");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/PowerSettingsNew */ "../node_modules/@material-ui/icons/PowerSettingsNew.js");
/* harmony import */ var _material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Dialogs/ConfirmDialog */ "./components/Dialogs/ConfirmDialog/index.js");
/* harmony import */ var _Form_Group__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Form/Group */ "./components/Form/Group.js");








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["translate"])();

var LogoutButton = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(LogoutButton, _React$Component);

  var _super = _createSuper(LogoutButton);

  function LogoutButton() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LogoutButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      showDialog: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleOpen", function () {
      _this.setState({
        showDialog: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleClose", function () {
      _this.closeDialog();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleConfirm", function () {
      var onLogout = _this.props.onLogout;
      onLogout();

      _this.closeDialog();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LogoutButton, [{
    key: "closeDialog",
    value: function closeDialog() {
      this.setState({
        showDialog: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var t = this.props.t;
      var showDialog = this.state.showDialog;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "LogoutButton",
        onClick: this.handleOpen
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_material_ui_icons_PowerSettingsNew__WEBPACK_IMPORTED_MODULE_11___default.a, {
        className: "LogoutButton-icon"
      }), t('settings.logout')), showDialog && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Dialogs_ConfirmDialog__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: t('dialogs.logout.title'),
        confirmLabel: t('dialogs.logout.action'),
        onConfirm: this.handleConfirm,
        onCancel: this.handleClose
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Form_Group__WEBPACK_IMPORTED_MODULE_13__["default"], null, t('dialogs.logout.confirm'))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return LogoutButton;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(LogoutButton, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired
});

var _default = enhance(LogoutButton);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/SettingsManager/LogoutButton.js");
  reactHotLoader.register(LogoutButton, "LogoutButton", "/Users/jneen/src/dj/ui/components/SettingsManager/LogoutButton.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/LogoutButton.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/NotificationSettings.js":
/*!************************************************************!*\
  !*** ./components/SettingsManager/NotificationSettings.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/withProps */ "../node_modules/recompose/withProps.js");
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_withProps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Switch */ "../node_modules/@material-ui/core/es/Switch/index.js");
/* harmony import */ var _LabeledControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LabeledControl */ "./components/SettingsManager/LabeledControl.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var enhance = recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(recompose_withProps__WEBPACK_IMPORTED_MODULE_3___default()(function (_ref) {
  var onSettingChange = _ref.onSettingChange;
  return {
    onToggleUserJoin: function onToggleUserJoin(e, value) {
      onSettingChange('notifications.userJoin', value);
    },
    onToggleUserLeave: function onToggleUserLeave(e, value) {
      onSettingChange('notifications.userLeave', value);
    },
    onToggleUserNameChanged: function onToggleUserNameChanged(e, value) {
      onSettingChange('notifications.userNameChanged', value);
    },
    onToggleSkip: function onToggleSkip(e, value) {
      onSettingChange('notifications.skip', value);
    }
  };
}), Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["translate"])());

var NotificationSettings = function NotificationSettings(_ref2) {
  var t = _ref2.t,
      settings = _ref2.settings,
      onToggleUserJoin = _ref2.onToggleUserJoin,
      onToggleUserLeave = _ref2.onToggleUserLeave,
      onToggleUserNameChanged = _ref2.onToggleUserNameChanged,
      onToggleSkip = _ref2.onToggleSkip;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "SettingsPanel-header"
  }, t('settings.notifications.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "SettingsPanel-helpText"
  }, t('settings.notifications.help')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: t('settings.notifications.userJoin'),
    id: "uw-setting-userjoin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    checked: settings.notifications.userJoin,
    onChange: onToggleUserJoin
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: t('settings.notifications.userLeave'),
    id: "uw-setting-userleave"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    checked: settings.notifications.userLeave,
    onChange: onToggleUserLeave
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: t('settings.notifications.userNameChanged'),
    id: "uw-setting-usernamechanged"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    checked: settings.notifications.userNameChanged,
    onChange: onToggleUserNameChanged
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: t('settings.notifications.skip'),
    id: "uw-setting-skip"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    checked: settings.notifications.skip,
    onChange: onToggleSkip
  })));
};

NotificationSettings.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSettingChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  // eslint-disable-line react/no-unused-prop-types
  onToggleUserJoin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleUserLeave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleUserNameChanged: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleSkip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var _default = enhance(NotificationSettings);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/SettingsManager/NotificationSettings.js");
  reactHotLoader.register(NotificationSettings, "NotificationSettings", "/Users/jneen/src/dj/ui/components/SettingsManager/NotificationSettings.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/NotificationSettings.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/Profile.js":
/*!***********************************************!*\
  !*** ./components/SettingsManager/Profile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Avatar */ "./components/Avatar/index.js");
/* harmony import */ var _UserCard_UserRoles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UserCard/UserRoles */ "./components/UserCard/UserRoles.js");
/* harmony import */ var _ChangeUsernameButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChangeUsernameButton */ "./components/SettingsManager/ChangeUsernameButton.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var formatJoinDate = function formatJoinDate(date) {
  return new Date(date).toLocaleString([], {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  });
};

var Profile = function Profile(_ref) {
  var className = _ref.className,
      user = _ref.user,
      onChangeUsername = _ref.onChangeUsername;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('SettingsPanelProfile', className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Avatar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "SettingsPanelProfile-avatar",
    user: user
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "SettingsPanelProfile-textblock"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "SettingsPanelProfile-username"
  }, user.username, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ChangeUsernameButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onChangeUsername: onChangeUsername,
    initialUsername: user.username
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_UserCard_UserRoles__WEBPACK_IMPORTED_MODULE_4__["default"], {
    roles: user.roles
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "SettingsPanelProfile-date"
  }, formatJoinDate(user.createdAt))));
};

Profile.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onChangeUsername: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
var _default = Profile;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(formatJoinDate, "formatJoinDate", "/Users/jneen/src/dj/ui/components/SettingsManager/Profile.js");
  reactHotLoader.register(Profile, "Profile", "/Users/jneen/src/dj/ui/components/SettingsManager/Profile.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/Profile.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/SettingsPanel.js":
/*!*****************************************************!*\
  !*** ./components/SettingsManager/SettingsPanel.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormGroup */ "../node_modules/@material-ui/core/es/FormGroup/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Switch */ "../node_modules/@material-ui/core/es/Switch/index.js");
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Profile */ "./components/SettingsManager/Profile.js");
/* harmony import */ var _LabeledControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LabeledControl */ "./components/SettingsManager/LabeledControl.js");
/* harmony import */ var _LanguagePicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LanguagePicker */ "./components/SettingsManager/LanguagePicker.js");
/* harmony import */ var _LogoutButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LogoutButton */ "./components/SettingsManager/LogoutButton.js");
/* harmony import */ var _NotificationSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./NotificationSettings */ "./components/SettingsManager/NotificationSettings.js");
/* harmony import */ var _Links__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Links */ "./components/SettingsManager/Links.js");








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};













var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["translate"])();

var SettingsPanel = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(SettingsPanel, _React$Component);

  var _super = _createSuper(SettingsPanel);

  function SettingsPanel() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SettingsPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleVideoEnabledChange", function (e, value) {
      var onSettingChange = _this.props.onSettingChange;
      onSettingChange('videoEnabled', value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleVideoSizeChange", function (e, value) {
      var onSettingChange = _this.props.onSettingChange;
      onSettingChange('videoSize', value ? 'large' : 'small');
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleMentionSoundChange", function (e, value) {
      var onSettingChange = _this.props.onSettingChange;
      onSettingChange('mentionSound', value);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleLanguageChange", function (event) {
      var onChangeLanguage = _this.props.onChangeLanguage;
      onChangeLanguage(event.target.value);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SettingsPanel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          className = _this$props.className,
          settings = _this$props.settings,
          user = _this$props.user,
          onSettingChange = _this$props.onSettingChange,
          onChangeUsername = _this$props.onChangeUsername,
          onLogout = _this$props.onLogout;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('SettingsPanel', className)
      }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Profile__WEBPACK_IMPORTED_MODULE_13__["default"], {
        user: user,
        onChangeUsername: onChangeUsername
      }), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "SettingsPanel-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "SettingsPanel-column SettingsPanel-column--left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        className: "SettingsPanel-header"
      }, t('settings.title')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_FormGroup__WEBPACK_IMPORTED_MODULE_11__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        label: t('settings.videoEnabled'),
        id: "uw-setting-videoenabled"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        checked: settings.videoEnabled,
        onChange: this.handleVideoEnabledChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        label: t('settings.videoSize'),
        id: "uw-setting-videosize"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        checked: settings.videoSize === 'large',
        onChange: this.handleVideoSizeChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        label: t('settings.mentionSound'),
        id: "uw-setting-mentionsound"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        checked: settings.mentionSound,
        onChange: this.handleMentionSoundChange
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_LabeledControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        label: t('settings.language'),
        id: "uw-setting-language"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_LanguagePicker__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: settings.language,
        onChange: this.handleLanguageChange
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "SettingsPanel-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Links__WEBPACK_IMPORTED_MODULE_18__["default"], null), user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "SettingsPanel-divider"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_LogoutButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
        onLogout: onLogout
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "SettingsPanel-column SettingsPanel-column--right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_NotificationSettings__WEBPACK_IMPORTED_MODULE_17__["default"], {
        settings: settings,
        onSettingChange: onSettingChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("hr", {
        className: "SettingsPanel-divider"
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SettingsPanel;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(SettingsPanel, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  settings: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  onSettingChange: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onChangeUsername: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onChangeLanguage: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired
});

var _default = enhance(SettingsPanel);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/SettingsManager/SettingsPanel.js");
  reactHotLoader.register(SettingsPanel, "SettingsPanel", "/Users/jneen/src/dj/ui/components/SettingsManager/SettingsPanel.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/SettingsPanel.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SettingsManager/index.js":
/*!*********************************************!*\
  !*** ./components/SettingsManager/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Overlay_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Overlay/Header */ "./components/Overlay/Header/index.js");
/* harmony import */ var _Overlay_Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Overlay/Content */ "./components/Overlay/Content.js");
/* harmony import */ var _SettingsPanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SettingsPanel */ "./components/SettingsManager/SettingsPanel.js");









var _excluded = ["t", "className", "onCloseOverlay"];

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["translate"])();

var SettingsManager = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SettingsManager, _React$Component);

  var _super = _createSuper(SettingsManager);

  function SettingsManager() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SettingsManager);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleLogout", function () {
      var _this$props = _this.props,
          onCloseOverlay = _this$props.onCloseOverlay,
          onLogout = _this$props.onLogout;
      onCloseOverlay();
      onLogout();
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(SettingsManager, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          t = _this$props2.t,
          className = _this$props2.className,
          onCloseOverlay = _this$props2.onCloseOverlay,
          props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_this$props2, _excluded);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_9___default()('SettingsManager', className)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Overlay_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: t('settings.title'),
        onCloseOverlay: onCloseOverlay
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_Overlay_Content__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "SettingsManager-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_SettingsPanel__WEBPACK_IMPORTED_MODULE_15__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
        onLogout: this.handleLogout
      }))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return SettingsManager;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(SettingsManager, "propTypes", {
  t: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  onCloseOverlay: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired,
  onLogout: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func.isRequired
});

var _default = enhance(SettingsManager);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/SettingsManager/index.js");
  reactHotLoader.register(SettingsManager, "SettingsManager", "/Users/jneen/src/dj/ui/components/SettingsManager/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/SettingsManager/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0RpYWxvZ3MvQ29uZmlybURpYWxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldHRpbmdzTWFuYWdlci9DaGFuZ2VVc2VybmFtZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldHRpbmdzTWFuYWdlci9HaXRodWJJY29uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2V0dGluZ3NNYW5hZ2VyL0xhYmVsZWRDb250cm9sLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2V0dGluZ3NNYW5hZ2VyL0xhbmd1YWdlUGlja2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2V0dGluZ3NNYW5hZ2VyL0xpbmtzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2V0dGluZ3NNYW5hZ2VyL0xvZ291dEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldHRpbmdzTWFuYWdlci9Ob3RpZmljYXRpb25TZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NldHRpbmdzTWFuYWdlci9Qcm9maWxlLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2V0dGluZ3NNYW5hZ2VyL1NldHRpbmdzUGFuZWwuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZXR0aW5nc01hbmFnZXIvaW5kZXguanMiXSwibmFtZXMiOlsiQ29uZmlybURpYWxvZyIsImJ1c3kiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwib25Db25maXJtIiwicHJvcHMiLCJwcm9taXNlIiwic2V0U3RhdGUiLCJvbkNhbmNlbCIsImNoaWxkcmVuIiwiY2FuY2VsTGFiZWwiLCJjb25maXJtTGFiZWwiLCJjbGFzc05hbWUiLCJzdGF0ZSIsImN4IiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVDb25maXJtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJQcm9wVHlwZXMiLCJub2RlIiwic3RyaW5nIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJlbmhhbmNlIiwidHJhbnNsYXRlIiwiQ2hhbmdlVXNlcm5hbWVCdXR0b24iLCJjaGFuZ2luZ1VzZXJuYW1lIiwiY2xvc2VEaWFsb2ciLCJuYW1lIiwiaW5pdGlhbFVzZXJuYW1lIiwib25DaGFuZ2VVc2VybmFtZSIsInRoZW4iLCJiaW5kIiwidCIsImhhbmRsZU9wZW4iLCJHaXRodWJJY29uIiwiTGFiZWxlZENvbnRyb2wiLCJpZCIsImxhYmVsIiwiY29udHJvbCIsIkNoaWxkcmVuIiwib25seSIsImNsb25lRWxlbWVudCIsInByb3BUeXBlcyIsImdldFJlc291cmNlTmFtZSIsImkxOG4iLCJsYW5ndWFnZSIsImdldENvbnRleHQiLCJvYmplY3QiLCJMYW5ndWFnZVBpY2tlciIsImF2YWlsYWJsZUxhbmd1YWdlcyIsIm1hcCIsImxhbmciLCJMaW5rIiwid2l0aFByb3BzIiwidGFyZ2V0IiwiQnV0dG9uIiwiTGlua3MiLCJMb2dvdXRCdXR0b24iLCJzaG93RGlhbG9nIiwib25Mb2dvdXQiLCJjb21wb3NlIiwib25TZXR0aW5nQ2hhbmdlIiwib25Ub2dnbGVVc2VySm9pbiIsImUiLCJ2YWx1ZSIsIm9uVG9nZ2xlVXNlckxlYXZlIiwib25Ub2dnbGVVc2VyTmFtZUNoYW5nZWQiLCJvblRvZ2dsZVNraXAiLCJOb3RpZmljYXRpb25TZXR0aW5ncyIsInNldHRpbmdzIiwibm90aWZpY2F0aW9ucyIsInVzZXJKb2luIiwidXNlckxlYXZlIiwidXNlck5hbWVDaGFuZ2VkIiwic2tpcCIsImZvcm1hdEpvaW5EYXRlIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtaW51dGUiLCJQcm9maWxlIiwidXNlciIsInVzZXJuYW1lIiwicm9sZXMiLCJjcmVhdGVkQXQiLCJTZXR0aW5nc1BhbmVsIiwib25DaGFuZ2VMYW5ndWFnZSIsInZpZGVvRW5hYmxlZCIsImhhbmRsZVZpZGVvRW5hYmxlZENoYW5nZSIsInZpZGVvU2l6ZSIsImhhbmRsZVZpZGVvU2l6ZUNoYW5nZSIsIm1lbnRpb25Tb3VuZCIsImhhbmRsZU1lbnRpb25Tb3VuZENoYW5nZSIsImhhbmRsZUxhbmd1YWdlQ2hhbmdlIiwiU2V0dGluZ3NNYW5hZ2VyIiwib25DbG9zZU92ZXJsYXkiLCJoYW5kbGVMb2dvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVxQkEsYTs7Ozs7Ozs7Ozs7Ozs7OztzTEFnQlg7QUFDTkMsVUFBSSxFQUFFO0FBREEsSzs7NkxBSU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ3hCQSxXQUFLLENBQUNDLGNBQU47QUFDRCxLOzs4TEFFZSxVQUFDRCxLQUFELEVBQVc7QUFDekIsVUFBUUUsU0FBUixHQUFzQixNQUFLQyxLQUEzQixDQUFRRCxTQUFSO0FBRUFGLFdBQUssQ0FBQ0MsY0FBTjtBQUNBLFVBQU1HLE9BQU8sR0FBR0YsU0FBUyxFQUF6Qjs7QUFDQSxVQUFJRSxPQUFPLElBQUlBLE9BQU8sV0FBdEIsRUFBZ0M7QUFDOUIsY0FBS0MsUUFBTCxDQUFjO0FBQUVOLGNBQUksRUFBRTtBQUFSLFNBQWQ7O0FBQ0FLLGVBQU8sV0FBUCxDQUFnQixZQUFNO0FBQ3BCLGdCQUFLQyxRQUFMLENBQWM7QUFBRU4sZ0JBQUksRUFBRTtBQUFSLFdBQWQ7QUFDRCxTQUZEO0FBR0Q7QUFDRixLOzs0TEFFYSxVQUFDQyxLQUFELEVBQVc7QUFDdkIsVUFBUU0sUUFBUixHQUFxQixNQUFLSCxLQUExQixDQUFRRyxRQUFSOztBQUVBLFVBQUlOLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxjQUFuQixFQUFtQztBQUNqQ0QsYUFBSyxDQUFDQyxjQUFOO0FBQ0Q7O0FBQ0RLLGNBQVE7QUFDVCxLOzs7Ozs7O1dBRUQsa0JBQVM7QUFDUCx3QkFLSSxL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O0FBSWpCc0MsVUFBUSxFQUFFMUMsa0RBQVMsQ0FBQ0csSUFBVixDQUFlQztBQUpSLEM7O2VBdUNOQyxPQUFPLENBQUM0RSxlQUFELEM7O0FBQVA7Ozs7Ozs7Ozs7MEJBMUNUNUUsTzswQkFFQTRFLGUiLCJmaWxlIjoic2V0dGluZ3NfZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vRm9ybSc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJy4uLy4uL0Zvcm0vR3JvdXAnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9Gb3JtL0J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1EaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29uZmlybUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNhbmNlbExhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgb25Db25maXJtOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2FuY2VsTGFiZWw6ICdDYW5jZWwnLFxuICAgIGNvbmZpcm1MYWJlbDogJ09LJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBidXN5OiBmYWxzZSxcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIGhhbmRsZUNvbmZpcm0gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ29uZmlybSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IG9uQ29uZmlybSgpO1xuICAgIGlmIChwcm9taXNlICYmIHByb21pc2UuZmluYWxseSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1c3k6IHRydWUgfSk7XG4gICAgICBwcm9taXNlLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnVzeTogZmFsc2UgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IG9uQ2FuY2VsIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBvbkNhbmNlbCgpO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIGNhbmNlbExhYmVsLFxuICAgICAgY29uZmlybUxhYmVsLFxuICAgICAgY2xhc3NOYW1lLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgYnVzeSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIGNsYXNzTmFtZT17Y3goJ0RpYWxvZycsIGNsYXNzTmFtZSl9XG4gICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgIG9wZW5cbiAgICAgID5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPVwiRGlhbG9nLWJvZHlcIj5cbiAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPEZvcm1Hcm91cCBjbGFzc05hbWU9XCJDb25maXJtRGlhbG9nLWJ1dHRvbnMgRm9ybUdyb3VwLS1ub1NwYWNpbmdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb25maXJtRGlhbG9nLWJ1dHRvblwiPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2J1c3l9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAge2NhbmNlbExhYmVsfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb25maXJtRGlhbG9nLXNwYWNlclwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29uZmlybURpYWxvZy1idXR0b25cIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtidXN5fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbmZpcm19PlxuICAgICAgICAgICAgICAgICAge2J1c3kgPyA8ZGl2IGNsYXNzTmFtZT1cIkJ1dHRvbi1sb2FkaW5nXCI+PENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT1cIjEwMCVcIiAvPjwvZGl2PiA6IGNvbmZpcm1MYWJlbH1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgIDwvRGlhbG9nPlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCc7XG5pbXBvcnQgUHJvbXB0RGlhbG9nIGZyb20gJy4uL0RpYWxvZ3MvUHJvbXB0RGlhbG9nJztcbmltcG9ydCBEaWFsb2dDbG9zZUFuaW1hdGlvbiBmcm9tICcuLi9EaWFsb2dDbG9zZUFuaW1hdGlvbic7XG5cbmNvbnN0IGVuaGFuY2UgPSB0cmFuc2xhdGUoKTtcblxuY2xhc3MgQ2hhbmdlVXNlcm5hbWVCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2VVc2VybmFtZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBpbml0aWFsVXNlcm5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgY2hhbmdpbmdVc2VybmFtZTogZmFsc2UsXG4gIH07XG5cbiAgaGFuZGxlT3BlbiA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hhbmdpbmdVc2VybmFtZTogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3NlRGlhbG9nKCk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB7IGluaXRpYWxVc2VybmFtZSwgb25DaGFuZ2VVc2VybmFtZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChuYW1lID09PSBpbml0aWFsVXNlcm5hbWUpIHtcbiAgICAgIHRoaXMuY2xvc2VEaWFsb2coKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gb25DaGFuZ2VVc2VybmFtZShuYW1lKVxuICAgICAgLnRoZW4odGhpcy5jbG9zZURpYWxvZy5iaW5kKHRoaXMpKTtcbiAgfTtcblxuICBjbG9zZURpYWxvZygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2hhbmdpbmdVc2VybmFtZTogZmFsc2UgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0LCBpbml0aWFsVXNlcm5hbWUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjaGFuZ2luZ1VzZXJuYW1lIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwiQ2hhbmdlVXNlcm5hbWVCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW59PlxuICAgICAgICAgIDxFZGl0SWNvbiBjbGFzc05hbWU9XCJDaGFuZ2VVc2VybmFtZUJ1dHRvbi1pY29uXCIgLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8RGlhbG9nQ2xvc2VBbmltYXRpb24gZGVsYXk9ezQ1MH0+XG4gICAgICAgICAge2NoYW5naW5nVXNlcm5hbWUgPyAoXG4gICAgICAgICAgICA8UHJvbXB0RGlhbG9nXG4gICAgICAgICAgICAgIHRpdGxlPXt0KCdzZXR0aW5ncy5wcm9maWxlLnVzZXJuYW1lLmNoYW5nZScpfVxuICAgICAgICAgICAgICBzdWJtaXRMYWJlbD17dCgnc2V0dGluZ3MucHJvZmlsZS51c2VybmFtZS5zYXZlJyl9XG4gICAgICAgICAgICAgIGljb249ezxFZGl0SWNvbiBuYXRpdmVDb2xvcj1cIiM3NzdcIiAvPn1cbiAgICAgICAgICAgICAgdmFsdWU9e2luaXRpYWxVc2VybmFtZX1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVDbG9zZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvRGlhbG9nQ2xvc2VBbmltYXRpb24+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShDaGFuZ2VVc2VybmFtZUJ1dHRvbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3ZnSWNvbic7XG5cbi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmNvbnN0IEdpdGh1Ykljb24gPSBwcm9wcyA9PiAoXG4gIDxTdmdJY29uIHZpZXdCb3g9XCItNDAgLTQwIDUyMCA1MjBcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNDA5LjEzMiAxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjhDMjk1LjczNiAxNS4xNjYgMjU5LjA1NyA1LjM2NSAyMTkuMjcgNS4zNjVjLTM5Ljc4IDAtNzYuNDcgOS44MDQtMTEwLjA2MiAyOS40MDgtMzMuNTk2IDE5LjYwNS02MC4xOTIgNDYuMjA0LTc5LjggNzkuOEM5LjgwMyAxNDguMTY4IDAgMTg0Ljg1MyAwIDIyNC42M2MwIDQ3Ljc4IDEzLjk0IDkwLjc0NSA0MS44MjcgMTI4LjkwNiAyNy44ODQgMzguMTY0IDYzLjkwNiA2NC41NzIgMTA4LjA2MyA3OS4yMjcgNS4xNC45NTQgOC45NDUuMjgzIDExLjQyLTEuOTk2IDIuNDc0LTIuMjgyIDMuNzEtNS4xNCAzLjcxLTguNTYyIDAtLjU3LS4wNS01LjcwOC0uMTQ0LTE1LjQxNy0uMDk4LTkuNzEtLjE0NC0xOC4xOC0uMTQ0LTI1LjQwNmwtNi41NjcgMS4xMzZjLTQuMTg3Ljc2Ny05LjQ3IDEuMDkyLTE1Ljg0NiAxLTYuMzc1LS4wOS0xMi45OTItLjc1Ny0xOS44NDMtMi02Ljg1NC0xLjIzLTEzLjIzLTQuMDg1LTE5LjEzLTguNTU4LTUuODk4LTQuNDczLTEwLjA4NS0xMC4zMjgtMTIuNTYtMTcuNTU2bC0yLjg1NS02LjU3Yy0xLjkwMy00LjM3NC00LjktOS4yMzMtOC45OTItMTQuNTYtNC4wOTMtNS4zMy04LjIzMi04Ljk0NC0xMi40Mi0xMC44NDdsLTEuOTk4LTEuNDNjLTEuMzMyLS45NTItMi41NjgtMi4xLTMuNzEtMy40My0xLjE0My0xLjMzLTEuOTk4LTIuNjYzLTIuNTctMy45OTctLjU3LTEuMzM1LS4wOTctMi40MyAxLjQyOC0zLjI5IDEuNTI1LS44NTggNC4yOC0xLjI3NSA4LjI4LTEuMjc1bDUuNzA4Ljg1M2MzLjgwNy43NjMgOC41MTYgMy4wNDIgMTQuMTMzIDYuODUgNS42MTUgMy44MDcgMTAuMjMgOC43NTUgMTMuODQ3IDE0Ljg0MyA0LjM4IDcuODA3IDkuNjU3IDEzLjc1NSAxNS44NDYgMTcuODQ4IDYuMTg0IDQuMDkzIDEyLjQyIDYuMTM2IDE4LjcgNi4xMzYgNi4yOCAwIDExLjcwMy0uNDc2IDE2LjI3My0xLjQyMyA0LjU2NS0uOTUgOC44NDgtMi4zODIgMTIuODQ3LTQuMjg0IDEuNzEzLTEyLjc1OCA2LjM3Ny0yMi41NiAxMy45ODgtMjkuNDEtMTAuODQ3LTEuMTQtMjAuNi0yLjg1Ny0yOS4yNjMtNS4xNC04LjY1OC0yLjI4Ni0xNy42MDUtNS45OTYtMjYuODM1LTExLjE0LTkuMjM1LTUuMTM3LTE2Ljg5Ni0xMS41MTYtMjIuOTg1LTE5LjEyNi02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTgtMy45LTEyLjM3My01Ljg1Mi0yNi42NDctNS44NTItNDIuODI1IDAtMjMuMDM1IDcuNTItNDIuNjM3IDIyLjU1Ny01OC44MTctNy4wNDQtMTcuMzE4LTYuMzgtMzYuNzMyIDEuOTk3LTU4LjI0IDUuNTItMS43MTUgMTMuNzA2LS40MjggMjQuNTU0IDMuODUzIDEwLjg1IDQuMjg0IDE4Ljc5NCA3Ljk1MyAyMy44NCAxMC45OTUgNS4wNDYgMy4wNCA5LjA5IDUuNjE4IDEyLjEzNSA3LjcwOCAxNy43MDYtNC45NDcgMzUuOTc3LTcuNDIgNTQuODItNy40MnMzNy4xMTYgMi40NzMgNTQuODIyIDcuNDJsMTAuODUtNi44NWM3LjQxOC00LjU3IDE2LjE4LTguNzU3IDI2LjI2LTEyLjU2NCAxMC4wOS0zLjgwNiAxNy44MDMtNC44NTQgMjMuMTM1LTMuMTQgOC41NjIgMjEuNTEgOS4zMjUgNDAuOTIzIDIuMjggNTguMjQgMTUuMDM1IDE2LjE4IDIyLjU1OCAzNS43ODggMjIuNTU4IDU4LjgxOCAwIDE2LjE3OC0xLjk1OCAzMC40OTctNS44NTMgNDIuOTY2LTMuOSAxMi40Ny04Ljk0IDIyLjQ1Ny0xNS4xMjUgMjkuOTgtNi4xOSA3LjUyLTEzLjkgMTMuODUtMjMuMTMgMTguOTg1LTkuMjMzIDUuMTQtMTguMTgzIDguODUtMjYuODQgMTEuMTM1LTguNjYzIDIuMjg2LTE4LjQxNiA0LjAwNC0yOS4yNjQgNS4xNDYgOS44OTQgOC41NjMgMTQuODQyIDIyLjA3OCAxNC44NDIgNDAuNTR2NjAuMjM3YzAgMy40MjIgMS4xOSA2LjI4IDMuNTcyIDguNTYyIDIuMzggMi4yNzggNi4xMzYgMi45NSAxMS4yNzYgMS45OTQgNDQuMTYzLTE0LjY1MyA4MC4xODUtNDEuMDYyIDEwOC4wNjgtNzkuMjI2IDI3Ljg4LTM4LjE2IDQxLjgyNi04MS4xMjYgNDEuODI2LTEyOC45MDYtLjAxLTM5Ljc3LTkuODE4LTc2LjQ1NC0yOS40MTQtMTEwLjA1elwiIC8+XG4gIDwvU3ZnSWNvbj5cbik7XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuZXhwb3J0IGRlZmF1bHQgR2l0aHViSWNvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBUaGUgY29udHJvbCBpcyBpbiBgY2hpbGRyZW5gLlxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbGFiZWwtaGFzLWZvciAqL1xuY29uc3QgTGFiZWxlZENvbnRyb2wgPSAoeyBpZCwgbGFiZWwsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgY29udHJvbCA9IFJlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJMYWJlbGVkQ29udHJvbFwiPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIkxhYmVsZWRDb250cm9sLWxhYmVsXCIgaHRtbEZvcj17aWR9PntsYWJlbH08L2xhYmVsPlxuICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjb250cm9sLCB7XG4gICAgICAgIGlkLFxuICAgICAgICBjbGFzc05hbWU6IGN4KGNvbnRyb2wuY2xhc3NOYW1lLCAnTGFiZWxlZENvbnRyb2wtY29udHJvbCcpLFxuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuLyogZXNsaW50LWVuYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5cbkxhYmVsZWRDb250cm9sLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbGVkQ29udHJvbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGdldENvbnRleHQgZnJvbSAncmVjb21wb3NlL2dldENvbnRleHQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3QnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcblxuY29uc3QgZ2V0UmVzb3VyY2VOYW1lID0gKGkxOG4sIGxhbmd1YWdlKSA9PiBpMThuLnQoYGxvY2FsZXMuJHtsYW5ndWFnZX1gKTtcblxuY29uc3QgZW5oYW5jZSA9IGdldENvbnRleHQoe1xuICBpMThuOiBQcm9wVHlwZXMub2JqZWN0LFxufSk7XG5cbmNvbnN0IExhbmd1YWdlUGlja2VyID0gKHsgaTE4biwgLi4ucHJvcHMgfSkgPT4gKFxuICA8U2VsZWN0IGNsYXNzTmFtZT1cIkxhbmd1YWdlUGlja2VyXCIgey4uLnByb3BzfT5cbiAgICB7aTE4bi5hdmFpbGFibGVMYW5ndWFnZXMubWFwKGxhbmcgPT4gKFxuICAgICAgPE1lbnVJdGVtIGtleT17bGFuZ30gdmFsdWU9e2xhbmd9PlxuICAgICAgICB7Z2V0UmVzb3VyY2VOYW1lKGkxOG4sIGxhbmcpfVxuICAgICAgPC9NZW51SXRlbT5cbiAgICApKX1cbiAgPC9TZWxlY3Q+XG4pO1xuXG5MYW5ndWFnZVBpY2tlci5wcm9wVHlwZXMgPSB7XG4gIGkxOG46IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2UoTGFuZ3VhZ2VQaWNrZXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFByb3BzIGZyb20gJ3JlY29tcG9zZS93aXRoUHJvcHMnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTGljZW5zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NvcHlyaWdodCc7XG5pbXBvcnQgR2l0aHViSWNvbiBmcm9tICcuL0dpdGh1Ykljb24nO1xuXG5jb25zdCBlbmhhbmNlID0gdHJhbnNsYXRlKCk7XG5cbmNvbnN0IExpbmsgPSB3aXRoUHJvcHMoe1xuICBjbGFzc05hbWU6ICdTZXR0aW5nc1BhbmVsLWxpbmsnLFxuICB0YXJnZXQ6ICdfYmxhbmsnLFxufSkoQnV0dG9uKTtcblxuY29uc3QgTGlua3MgPSAoeyB0IH0pID0+IChcbiAgPGRpdj5cbiAgICA8aDIgY2xhc3NOYW1lPVwiU2V0dGluZ3NQYW5lbC1oZWFkZXJcIj57dCgnc2V0dGluZ3MubGlua3MudGl0bGUnKX08L2gyPlxuICAgIDxMaW5rIGhyZWY9XCJodHRwOi8vdS13YXZlLm5ldFwiPlxuICAgICAgPEdpdGh1Ykljb24gY2xhc3NOYW1lPVwiU2V0dGluZ3NQYW5lbC1saW5rSWNvblwiIC8+XG4gICAgICB7dCgnc2V0dGluZ3MubGlua3Mud2Vic2l0ZScpfVxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Utd2F2ZS93ZWJcIj5cbiAgICAgIDxHaXRodWJJY29uIGNsYXNzTmFtZT1cIlNldHRpbmdzUGFuZWwtbGlua0ljb25cIiAvPlxuICAgICAge3QoJ3NldHRpbmdzLmxpbmtzLnNvdXJjZScpfVxuICAgIDwvTGluaz5cbiAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Utd2F2ZS93ZWIvdHJlZS9tYXN0ZXIvTElDRU5TRVwiPlxuICAgICAgPExpY2Vuc2VJY29uIGNsYXNzTmFtZT1cIlNldHRpbmdzUGFuZWwtbGlua0ljb25cIiAvPlxuICAgICAge3QoJ3NldHRpbmdzLmxpbmtzLmxpY2Vuc2UnKX1cbiAgICA8L0xpbms+XG4gIDwvZGl2PlxuKTtcblxuTGlua3MucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShMaW5rcyk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IExvZ291dEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Bvd2VyU2V0dGluZ3NOZXcnO1xuaW1wb3J0IENvbmZpcm1EaWFsb2cgZnJvbSAnLi4vRGlhbG9ncy9Db25maXJtRGlhbG9nJztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybS9Hcm91cCc7XG5cbmNvbnN0IGVuaGFuY2UgPSB0cmFuc2xhdGUoKTtcblxuY2xhc3MgTG9nb3V0QnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTG9nb3V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIHNob3dEaWFsb2c6IGZhbHNlLFxuICB9O1xuXG4gIGhhbmRsZU9wZW4gPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dEaWFsb2c6IHRydWUgfSk7XG4gIH07XG5cbiAgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICB9O1xuXG4gIGhhbmRsZUNvbmZpcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkxvZ291dCB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uTG9nb3V0KCk7XG4gICAgdGhpcy5jbG9zZURpYWxvZygpO1xuICB9O1xuXG4gIGNsb3NlRGlhbG9nKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RGlhbG9nOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHQgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzaG93RGlhbG9nIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJMb2dvdXRCdXR0b25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW59PlxuICAgICAgICAgIDxMb2dvdXRJY29uIGNsYXNzTmFtZT1cIkxvZ291dEJ1dHRvbi1pY29uXCIgLz5cbiAgICAgICAgICB7dCgnc2V0dGluZ3MubG9nb3V0Jyl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICB7c2hvd0RpYWxvZyAmJiAoXG4gICAgICAgICAgPENvbmZpcm1EaWFsb2dcbiAgICAgICAgICAgIHRpdGxlPXt0KCdkaWFsb2dzLmxvZ291dC50aXRsZScpfVxuICAgICAgICAgICAgY29uZmlybUxhYmVsPXt0KCdkaWFsb2dzLmxvZ291dC5hY3Rpb24nKX1cbiAgICAgICAgICAgIG9uQ29uZmlybT17dGhpcy5oYW5kbGVDb25maXJtfVxuICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvcm1Hcm91cD57dCgnZGlhbG9ncy5sb2dvdXQuY29uZmlybScpfTwvRm9ybUdyb3VwPlxuICAgICAgICAgIDwvQ29uZmlybURpYWxvZz5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKExvZ291dEJ1dHRvbik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjb21wb3NlIGZyb20gJ3JlY29tcG9zZS9jb21wb3NlJztcbmltcG9ydCB3aXRoUHJvcHMgZnJvbSAncmVjb21wb3NlL3dpdGhQcm9wcyc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBMYWJlbGVkQ29udHJvbCBmcm9tICcuL0xhYmVsZWRDb250cm9sJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHdpdGhQcm9wcygoeyBvblNldHRpbmdDaGFuZ2UgfSkgPT4gKHtcbiAgICBvblRvZ2dsZVVzZXJKb2luKGUsIHZhbHVlKSB7XG4gICAgICBvblNldHRpbmdDaGFuZ2UoJ25vdGlmaWNhdGlvbnMudXNlckpvaW4nLCB2YWx1ZSk7XG4gICAgfSxcbiAgICBvblRvZ2dsZVVzZXJMZWF2ZShlLCB2YWx1ZSkge1xuICAgICAgb25TZXR0aW5nQ2hhbmdlKCdub3RpZmljYXRpb25zLnVzZXJMZWF2ZScsIHZhbHVlKTtcbiAgICB9LFxuICAgIG9uVG9nZ2xlVXNlck5hbWVDaGFuZ2VkKGUsIHZhbHVlKSB7XG4gICAgICBvblNldHRpbmdDaGFuZ2UoJ25vdGlmaWNhdGlvbnMudXNlck5hbWVDaGFuZ2VkJywgdmFsdWUpO1xuICAgIH0sXG4gICAgb25Ub2dnbGVTa2lwKGUsIHZhbHVlKSB7XG4gICAgICBvblNldHRpbmdDaGFuZ2UoJ25vdGlmaWNhdGlvbnMuc2tpcCcsIHZhbHVlKTtcbiAgICB9LFxuICB9KSksXG4gIHRyYW5zbGF0ZSgpLFxuKTtcblxuY29uc3QgTm90aWZpY2F0aW9uU2V0dGluZ3MgPSAoe1xuICB0LFxuICBzZXR0aW5ncyxcbiAgb25Ub2dnbGVVc2VySm9pbixcbiAgb25Ub2dnbGVVc2VyTGVhdmUsXG4gIG9uVG9nZ2xlVXNlck5hbWVDaGFuZ2VkLFxuICBvblRvZ2dsZVNraXAsXG59KSA9PiAoXG4gIDxkaXY+XG4gICAgPGgyIGNsYXNzTmFtZT1cIlNldHRpbmdzUGFuZWwtaGVhZGVyXCI+e3QoJ3NldHRpbmdzLm5vdGlmaWNhdGlvbnMudGl0bGUnKX08L2gyPlxuICAgIDxwIGNsYXNzTmFtZT1cIlNldHRpbmdzUGFuZWwtaGVscFRleHRcIj57dCgnc2V0dGluZ3Mubm90aWZpY2F0aW9ucy5oZWxwJyl9PC9wPlxuICAgIDxMYWJlbGVkQ29udHJvbCBsYWJlbD17dCgnc2V0dGluZ3Mubm90aWZpY2F0aW9ucy51c2VySm9pbicpfSBpZD1cInV3LXNldHRpbmctdXNlcmpvaW5cIj5cbiAgICAgIDxTd2l0Y2hcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgY2hlY2tlZD17c2V0dGluZ3Mubm90aWZpY2F0aW9ucy51c2VySm9pbn1cbiAgICAgICAgb25DaGFuZ2U9e29uVG9nZ2xlVXNlckpvaW59XG4gICAgICAvPlxuICAgIDwvTGFiZWxlZENvbnRyb2w+XG4gICAgPExhYmVsZWRDb250cm9sIGxhYmVsPXt0KCdzZXR0aW5ncy5ub3RpZmljYXRpb25zLnVzZXJMZWF2ZScpfSBpZD1cInV3LXNldHRpbmctdXNlcmxlYXZlXCI+XG4gICAgICA8U3dpdGNoXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIGNoZWNrZWQ9e3NldHRpbmdzLm5vdGlmaWNhdGlvbnMudXNlckxlYXZlfVxuICAgICAgICBvbkNoYW5nZT17b25Ub2dnbGVVc2VyTGVhdmV9XG4gICAgICAvPlxuICAgIDwvTGFiZWxlZENvbnRyb2w+XG4gICAgPExhYmVsZWRDb250cm9sIGxhYmVsPXt0KCdzZXR0aW5ncy5ub3RpZmljYXRpb25zLnVzZXJOYW1lQ2hhbmdlZCcpfSBpZD1cInV3LXNldHRpbmctdXNlcm5hbWVjaGFuZ2VkXCI+XG4gICAgICA8U3dpdGNoXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgIGNoZWNrZWQ9e3NldHRpbmdzLm5vdGlmaWNhdGlvbnMudXNlck5hbWVDaGFuZ2VkfVxuICAgICAgICBvbkNoYW5nZT17b25Ub2dnbGVVc2VyTmFtZUNoYW5nZWR9XG4gICAgICAvPlxuICAgIDwvTGFiZWxlZENvbnRyb2w+XG4gICAgPExhYmVsZWRDb250cm9sIGxhYmVsPXt0KCdzZXR0aW5ncy5ub3RpZmljYXRpb25zLnNraXAnKX0gaWQ9XCJ1dy1zZXR0aW5nLXNraXBcIj5cbiAgICAgIDxTd2l0Y2hcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgY2hlY2tlZD17c2V0dGluZ3Mubm90aWZpY2F0aW9ucy5za2lwfVxuICAgICAgICBvbkNoYW5nZT17b25Ub2dnbGVTa2lwfVxuICAgICAgLz5cbiAgICA8L0xhYmVsZWRDb250cm9sPlxuICA8L2Rpdj5cbik7XG5cbk5vdGlmaWNhdGlvblNldHRpbmdzLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2V0dGluZ3M6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25TZXR0aW5nQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L25vLXVudXNlZC1wcm9wLXR5cGVzXG4gIG9uVG9nZ2xlVXNlckpvaW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uVG9nZ2xlVXNlckxlYXZlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvblRvZ2dsZVVzZXJOYW1lQ2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGVTa2lwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShOb3RpZmljYXRpb25TZXR0aW5ncyk7XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnLi4vQXZhdGFyJztcbmltcG9ydCBVc2VyUm9sZXMgZnJvbSAnLi4vVXNlckNhcmQvVXNlclJvbGVzJztcbmltcG9ydCBDaGFuZ2VVc2VybmFtZUJ1dHRvbiBmcm9tICcuL0NoYW5nZVVzZXJuYW1lQnV0dG9uJztcblxuY29uc3QgZm9ybWF0Sm9pbkRhdGUgPSBkYXRlID0+IG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKFtdLCB7XG4gIHllYXI6ICdudW1lcmljJyxcbiAgbW9udGg6ICdudW1lcmljJyxcbiAgZGF5OiAnbnVtZXJpYycsXG4gIGhvdXI6ICdudW1lcmljJyxcbiAgbWludXRlOiAnbnVtZXJpYycsXG59KTtcblxuY29uc3QgUHJvZmlsZSA9ICh7IGNsYXNzTmFtZSwgdXNlciwgb25DaGFuZ2VVc2VybmFtZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjeCgnU2V0dGluZ3NQYW5lbFByb2ZpbGUnLCBjbGFzc05hbWUpfT5cbiAgICA8QXZhdGFyXG4gICAgICBjbGFzc05hbWU9XCJTZXR0aW5nc1BhbmVsUHJvZmlsZS1hdmF0YXJcIlxuICAgICAgdXNlcj17dXNlcn1cbiAgICAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiU2V0dGluZ3NQYW5lbFByb2ZpbGUtdGV4dGJsb2NrXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwiU2V0dGluZ3NQYW5lbFByb2ZpbGUtdXNlcm5hbWVcIj5cbiAgICAgICAge3VzZXIudXNlcm5hbWV9XG4gICAgICAgIDxDaGFuZ2VVc2VybmFtZUJ1dHRvblxuICAgICAgICAgIG9uQ2hhbmdlVXNlcm5hbWU9e29uQ2hhbmdlVXNlcm5hbWV9XG4gICAgICAgICAgaW5pdGlhbFVzZXJuYW1lPXt1c2VyLnVzZXJuYW1lfVxuICAgICAgICAvPlxuICAgICAgPC9oMj5cbiAgICAgIDxVc2VyUm9sZXMgcm9sZXM9e3VzZXIucm9sZXN9IC8+XG4gICAgICA8cCBjbGFzc05hbWU9XCJTZXR0aW5nc1BhbmVsUHJvZmlsZS1kYXRlXCI+XG4gICAgICAgIHtmb3JtYXRKb2luRGF0ZSh1c2VyLmNyZWF0ZWRBdCl9XG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuUHJvZmlsZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIG9uQ2hhbmdlVXNlcm5hbWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUdyb3VwJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSc7XG5pbXBvcnQgTGFiZWxlZENvbnRyb2wgZnJvbSAnLi9MYWJlbGVkQ29udHJvbCc7XG5pbXBvcnQgTGFuZ3VhZ2VQaWNrZXIgZnJvbSAnLi9MYW5ndWFnZVBpY2tlcic7XG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gJy4vTG9nb3V0QnV0dG9uJztcbmltcG9ydCBOb3RpZmljYXRpb25TZXR0aW5ncyBmcm9tICcuL05vdGlmaWNhdGlvblNldHRpbmdzJztcbmltcG9ydCBMaW5rcyBmcm9tICcuL0xpbmtzJztcblxuY29uc3QgZW5oYW5jZSA9IHRyYW5zbGF0ZSgpO1xuXG5jbGFzcyBTZXR0aW5nc1BhbmVsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZXR0aW5nczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHVzZXI6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25TZXR0aW5nQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uQ2hhbmdlVXNlcm5hbWU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgb25DaGFuZ2VMYW5ndWFnZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvbkxvZ291dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfTtcblxuICBoYW5kbGVWaWRlb0VuYWJsZWRDaGFuZ2UgPSAoZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCB7IG9uU2V0dGluZ0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblNldHRpbmdDaGFuZ2UoJ3ZpZGVvRW5hYmxlZCcsIHZhbHVlKTtcbiAgfTtcblxuICBoYW5kbGVWaWRlb1NpemVDaGFuZ2UgPSAoZSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCB7IG9uU2V0dGluZ0NoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblNldHRpbmdDaGFuZ2UoJ3ZpZGVvU2l6ZScsIHZhbHVlID8gJ2xhcmdlJyA6ICdzbWFsbCcpO1xuICB9O1xuXG4gIGhhbmRsZU1lbnRpb25Tb3VuZENoYW5nZSA9IChlLCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHsgb25TZXR0aW5nQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU2V0dGluZ0NoYW5nZSgnbWVudGlvblNvdW5kJywgdmFsdWUpO1xuICB9O1xuXG4gIGhhbmRsZUxhbmd1YWdlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBvbkNoYW5nZUxhbmd1YWdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlTGFuZ3VhZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIHNldHRpbmdzLFxuICAgICAgdXNlcixcbiAgICAgIG9uU2V0dGluZ0NoYW5nZSxcbiAgICAgIG9uQ2hhbmdlVXNlcm5hbWUsXG4gICAgICBvbkxvZ291dCxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ1NldHRpbmdzUGFuZWwnLCBjbGFzc05hbWUpfT5cbiAgICAgICAge3VzZXIgJiYgKFxuICAgICAgICAgIDxQcm9maWxlXG4gICAgICAgICAgICB1c2VyPXt1c2VyfVxuICAgICAgICAgICAgb25DaGFuZ2VVc2VybmFtZT17b25DaGFuZ2VVc2VybmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7dXNlciAmJiA8aHIgY2xhc3NOYW1lPVwiU2V0dGluZ3NQYW5lbC1kaXZpZGVyXCIgLz59XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2V0dGluZ3NQYW5lbC1jb2x1bW4gU2V0dGluZ3NQYW5lbC1jb2x1bW4tLWxlZnRcIj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiU2V0dGluZ3NQYW5lbC1oZWFkZXJcIj57dCgnc2V0dGluZ3MudGl0bGUnKX08L2gyPlxuICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICA8TGFiZWxlZENvbnRyb2wgbGFiZWw9e3QoJ3NldHRpbmdzLnZpZGVvRW5hYmxlZCcpfSBpZD1cInV3LXNldHRpbmctdmlkZW9lbmFibGVkXCI+XG4gICAgICAgICAgICAgIDxTd2l0Y2hcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3NldHRpbmdzLnZpZGVvRW5hYmxlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVWaWRlb0VuYWJsZWRDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xhYmVsZWRDb250cm9sPlxuICAgICAgICAgICAgPExhYmVsZWRDb250cm9sIGxhYmVsPXt0KCdzZXR0aW5ncy52aWRlb1NpemUnKX0gaWQ9XCJ1dy1zZXR0aW5nLXZpZGVvc2l6ZVwiPlxuICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtzZXR0aW5ncy52aWRlb1NpemUgPT09ICdsYXJnZSd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmlkZW9TaXplQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9MYWJlbGVkQ29udHJvbD5cbiAgICAgICAgICAgIDxMYWJlbGVkQ29udHJvbCBsYWJlbD17dCgnc2V0dGluZ3MubWVudGlvblNvdW5kJyl9IGlkPVwidXctc2V0dGluZy1tZW50aW9uc291bmRcIj5cbiAgICAgICAgICAgICAgPFN3aXRjaFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17c2V0dGluZ3MubWVudGlvblNvdW5kfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU1lbnRpb25Tb3VuZENoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGFiZWxlZENvbnRyb2w+XG4gICAgICAgICAgICA8TGFiZWxlZENvbnRyb2wgbGFiZWw9e3QoJ3NldHRpbmdzLmxhbmd1YWdlJyl9IGlkPVwidXctc2V0dGluZy1sYW5ndWFnZVwiPlxuICAgICAgICAgICAgICA8TGFuZ3VhZ2VQaWNrZXJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MubGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTGFuZ3VhZ2VDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0xhYmVsZWRDb250cm9sPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgIDxociBjbGFzc05hbWU9XCJTZXR0aW5nc1BhbmVsLWRpdmlkZXJcIiAvPlxuICAgICAgICAgIDxMaW5rcyAvPlxuICAgICAgICAgIHt1c2VyICYmIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIlNldHRpbmdzUGFuZWwtZGl2aWRlclwiIC8+XG4gICAgICAgICAgICAgIDxMb2dvdXRCdXR0b24gb25Mb2dvdXQ9e29uTG9nb3V0fSAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJTZXR0aW5nc1BhbmVsLWNvbHVtbiBTZXR0aW5nc1BhbmVsLWNvbHVtbi0tcmlnaHRcIj5cbiAgICAgICAgICA8Tm90aWZpY2F0aW9uU2V0dGluZ3NcbiAgICAgICAgICAgIHNldHRpbmdzPXtzZXR0aW5nc31cbiAgICAgICAgICAgIG9uU2V0dGluZ0NoYW5nZT17b25TZXR0aW5nQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIlNldHRpbmdzUGFuZWwtZGl2aWRlclwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFNldHRpbmdzUGFuZWwpO1xuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBPdmVybGF5SGVhZGVyIGZyb20gJy4uL092ZXJsYXkvSGVhZGVyJztcbmltcG9ydCBPdmVybGF5Q29udGVudCBmcm9tICcuLi9PdmVybGF5L0NvbnRlbnQnO1xuaW1wb3J0IFNldHRpbmdzUGFuZWwgZnJvbSAnLi9TZXR0aW5nc1BhbmVsJztcblxuY29uc3QgZW5oYW5jZSA9IHRyYW5zbGF0ZSgpO1xuXG5jbGFzcyBTZXR0aW5nc01hbmFnZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2xvc2VPdmVybGF5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uTG9nb3V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgICBjb25zdCB7IG9uQ2xvc2VPdmVybGF5LCBvbkxvZ291dCB9ID0gdGhpcy5wcm9wcztcblxuICAgIG9uQ2xvc2VPdmVybGF5KCk7XG4gICAgb25Mb2dvdXQoKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdCxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG9uQ2xvc2VPdmVybGF5LFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3goJ1NldHRpbmdzTWFuYWdlcicsIGNsYXNzTmFtZSl9PlxuICAgICAgICA8T3ZlcmxheUhlYWRlclxuICAgICAgICAgIHRpdGxlPXt0KCdzZXR0aW5ncy50aXRsZScpfVxuICAgICAgICAgIG9uQ2xvc2VPdmVybGF5PXtvbkNsb3NlT3ZlcmxheX1cbiAgICAgICAgLz5cbiAgICAgICAgPE92ZXJsYXlDb250ZW50IGNsYXNzTmFtZT1cIlNldHRpbmdzTWFuYWdlci1ib2R5XCI+XG4gICAgICAgICAgPFNldHRpbmdzUGFuZWxcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIG9uTG9nb3V0PXt0aGlzLmhhbmRsZUxvZ291dH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L092ZXJsYXlDb250ZW50PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFNldHRpbmdzTWFuYWdlcik7XG4iXSwic291cmNlUm9vdCI6IiJ9