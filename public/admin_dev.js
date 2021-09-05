(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin"],{

/***/ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/src/index.js!./admin/index.css":
/*!***************************************************************************************!*\
  !*** ../node_modules/css-loader!../node_modules/postcss-loader/src!./admin/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":root {\n  /* Global colours */\n  --text-color: #fff;\n  --secondary-text-color: rgba(255, 255, 255, 0.7);\n  --muted-text-color: rgba(255, 255, 255, 0.5);\n  --background-color: #151515;\n  --background-hover-color: #111;\n  --highlight-color: #9d2053;\n  --highbright-color: #b20062;\n  --scrollbar-color: #5f5f5f;\n  --canvas-color: #303030;\n  --divider-color: rgba(255, 255, 255, 0.12);\n\n  /* Link colors */\n  --link-color: #c72e6c;\n  --link-visited-color: #c72e6c;\n  --link-visited-color: var(--link-color);\n\n  /* Sizes */\n  --header-height: 56px;\n  --footer-height: 60px;\n\n  /* Footer colours */\n  --footer-border-color: #303036;\n\n  /* Overlay colours & sizes */\n  --overlay-header-close-size: 56px;\n  --overlay-header-close-size: var(--header-height);\n\n  /* Chat colours */\n  --chat-background-color: #1b1b1b;\n  --chat-border-color: #303036;\n  --chat-border-color: var(--footer-border-color);\n\n  /* User related colours */\n  --user-list-color: #1b1b1b;\n  --user-list-alternate-color: #222222;\n\n  /* Playlist colours & sizing */\n  --media-list-spacing: 3%;\n  --media-list-thumb-width: 85px;\n  --media-list-duration-width: 70px;\n  --media-list-color: transparent;\n  /* TODO Name this in some other way. It's used as the menu item focus colour\n   * in various places. */\n  --media-list-alternate-color: rgb(48, 48, 54);\n\n  /* Settings panel colours */\n  --settings-help-text-color: #aaa;\n\n  /* Form colours & sizes */\n  --forms-element-margin: 16px;\n  --forms-textfield-size: 50px;\n\n  /* Misc computed */\n  /* We can't use color-mod(var()) because var()s are preserved. Instead these values are hardcoded. */\n  /* In modern browsers with var() support, these values are defined in src/utils/createTheme.js. */\n  --selected-media-row-color: rgb(157, 32, 83);\n  --chat-suggestion-selected: rgb(255, 255, 255);\n  --overlay-background: rgb(21, 21, 21);\n  --soundcloud-meta-background: rgb(21, 21, 21);\n  --waitlist-locked-text-color: rgb(255, 255, 255);\n  --chat-timestamp-text-color: rgb(210, 210, 210);\n}\n\n.AdminApp {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #151515;\n  background: var(--background-color);\n}\n\n.AdminApp-menu {\n  position: absolute;\n  width: 250px;\n  top: 0;\n  bottom: 0;\n}\n\n.AdminApp-menuItem.is-selected {\n    background-color: #9d2053;\n    background-color: var(--highlight-color);\n  }\n\n.AdminApp-page {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  left: 250px;\n  padding: 20px;\n  overflow-y: scroll;\n}\n\n.AdminMotd {\n  width: 400px;\n}\n\n.AdminMotd-field {\n  border: 1px solid #303036;\n  border: 1px solid var(--chat-border-color);\n  background: #222222;\n  color: #fff;\n  color: var(--text-color);\n  width: 100%;\n  padding: 4px;\n  margin: -5px;\n}\n\n.AdminUserHeader {\n  background: #9d2053;\n  background: var(--highlight-color);\n  padding: 12px 24px;\n  line-height: 35px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.AdminUserHeader-filter {\n  background: #631032;\n  color: #ffffff;\n  border: 0px;\n  margin-left: 12px;\n  padding-left: 12px;\n  height: 35px;\n}\n\n.AdminUserRow {\n  background-color: #151515;\n  background-color: var(--background-color)\n}\n\n.AdminUserRow:nth-child(2n) {\n    background-color: #242424;\n  }\n\n.AdminUserRow-cell {\n  border-bottom: 0px none;\n  font-size: 12pt;\n  padding-right: 16px;\n}\n\n.AdminUserRow-avatar {\n  width: 48px;\n  padding-right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./admin/actions/bans.js":
/*!*******************************!*\
  !*** ./admin/actions/bans.js ***!
  \*******************************/
/*! exports provided: loadBansStart, loadBansComplete, loadBans, unbanUser, unbanUserAndReload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBansStart", function() { return loadBansStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBansComplete", function() { return loadBansComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBans", function() { return loadBans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbanUser", function() { return unbanUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unbanUserAndReload", function() { return unbanUserAndReload; });
/* harmony import */ var _actions_RequestActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/RequestActionCreators */ "./actions/RequestActionCreators.js");
/* harmony import */ var _utils_mergeIncludedModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/mergeIncludedModels */ "./utils/mergeIncludedModels.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/ActionTypes */ "./admin/constants/ActionTypes.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




function loadBansStart() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["LOAD_BANS_START"]
  };
}
function loadBansComplete(response) {
  var meta = response.meta;
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["LOAD_BANS_COMPLETE"],
    payload: {
      bans: Object(_utils_mergeIncludedModels__WEBPACK_IMPORTED_MODULE_1__["default"])(response)
    },
    meta: {
      page: Math.floor(meta.offset / meta.pageSize),
      size: meta.pageSize
    }
  };
}
function loadBans() {
  return Object(_actions_RequestActionCreators__WEBPACK_IMPORTED_MODULE_0__["get"])('/bans', {
    onStart: loadBansStart,
    onComplete: loadBansComplete
  });
}
function unbanUser(user) {
  return Object(_actions_RequestActionCreators__WEBPACK_IMPORTED_MODULE_0__["del"])("/bans/".concat(user._id), {});
}
function unbanUserAndReload(user) {
  return function (dispatch) {
    return dispatch(unbanUser(user)).then(function () {
      return dispatch(loadBans());
    });
  };
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadBansStart, "loadBansStart", "/Users/jneen/src/dj/ui/admin/actions/bans.js");
  reactHotLoader.register(loadBansComplete, "loadBansComplete", "/Users/jneen/src/dj/ui/admin/actions/bans.js");
  reactHotLoader.register(loadBans, "loadBans", "/Users/jneen/src/dj/ui/admin/actions/bans.js");
  reactHotLoader.register(unbanUser, "unbanUser", "/Users/jneen/src/dj/ui/admin/actions/bans.js");
  reactHotLoader.register(unbanUserAndReload, "unbanUserAndReload", "/Users/jneen/src/dj/ui/admin/actions/bans.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/actions/users.js":
/*!********************************!*\
  !*** ./admin/actions/users.js ***!
  \********************************/
/*! exports provided: loadUsersStart, loadUsersComplete, loadUsers, setUsersFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsersStart", function() { return loadUsersStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsersComplete", function() { return loadUsersComplete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUsers", function() { return loadUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUsersFilter", function() { return setUsersFilter; });
/* harmony import */ var _actions_RequestActionCreators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/RequestActionCreators */ "./actions/RequestActionCreators.js");
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./admin/constants/ActionTypes.js");
/* harmony import */ var _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors/userSelectors */ "./admin/selectors/userSelectors.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




function loadUsersStart() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOAD_USERS_START"]
  };
}
function loadUsersComplete(response) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOAD_USERS_COMPLETE"],
    payload: {
      users: response.data,
      page: Math.floor(response.meta.offset / response.meta.pageSize)
    },
    meta: response.meta
  };
}
function loadUsers() {
  var pagination = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function (dispatch, getState) {
    var filter = Object(_selectors_userSelectors__WEBPACK_IMPORTED_MODULE_2__["filterSelector"])(getState());
    var qs = {};
    if (pagination) qs.page = pagination;
    if (filter) qs.filter = filter;
    return dispatch(Object(_actions_RequestActionCreators__WEBPACK_IMPORTED_MODULE_0__["get"])('/users', {
      qs: qs,
      onStart: loadUsersStart,
      onComplete: loadUsersComplete
    }));
  };
}
function setUsersFilter() {
  var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_USERS_FILTER"],
    payload: {
      filter: filter
    }
  };
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(loadUsersStart, "loadUsersStart", "/Users/jneen/src/dj/ui/admin/actions/users.js");
  reactHotLoader.register(loadUsersComplete, "loadUsersComplete", "/Users/jneen/src/dj/ui/admin/actions/users.js");
  reactHotLoader.register(loadUsers, "loadUsers", "/Users/jneen/src/dj/ui/admin/actions/users.js");
  reactHotLoader.register(setUsersFilter, "setUsersFilter", "/Users/jneen/src/dj/ui/admin/actions/users.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/actions/view.js":
/*!*******************************!*\
  !*** ./admin/actions/view.js ***!
  \*******************************/
/*! exports provided: transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./admin/constants/ActionTypes.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

 // eslint-disable-next-line import/prefer-default-export

function transition(target) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TRANSITION"],
    payload: target
  };
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(transition, "transition", "/Users/jneen/src/dj/ui/admin/actions/view.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/AdminApp/CurrentPage.js":
/*!**************************************************!*\
  !*** ./admin/components/AdminApp/CurrentPage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var recompose_mapProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recompose/mapProps */ "../node_modules/recompose/mapProps.js");
/* harmony import */ var recompose_mapProps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recompose_mapProps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_componentFromProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/componentFromProp */ "../node_modules/recompose/componentFromProp.js");
/* harmony import */ var recompose_componentFromProp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_componentFromProp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Main */ "./admin/components/Main/index.js");
/* harmony import */ var _containers_UsersList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/UsersList */ "./admin/containers/UsersList.js");
/* harmony import */ var _containers_BansList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../containers/BansList */ "./admin/containers/BansList.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var pages = {
  main: _Main__WEBPACK_IMPORTED_MODULE_2__["default"],
  users: _containers_UsersList__WEBPACK_IMPORTED_MODULE_3__["default"],
  bans: _containers_BansList__WEBPACK_IMPORTED_MODULE_4__["default"]
};
var enhance = recompose_mapProps__WEBPACK_IMPORTED_MODULE_0___default()(function (_ref) {
  var page = _ref.page;
  return {
    component: pages[page]
  };
});
var CurrentPage = enhance(recompose_componentFromProp__WEBPACK_IMPORTED_MODULE_1___default()('component'));
var _default = CurrentPage;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pages, "pages", "/Users/jneen/src/dj/ui/admin/components/AdminApp/CurrentPage.js");
  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/components/AdminApp/CurrentPage.js");
  reactHotLoader.register(CurrentPage, "CurrentPage", "/Users/jneen/src/dj/ui/admin/components/AdminApp/CurrentPage.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/AdminApp/CurrentPage.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/AdminApp/index.js":
/*!********************************************!*\
  !*** ./admin/components/AdminApp/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/List */ "./components/List/index.js");
/* harmony import */ var _CurrentPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CurrentPage */ "./admin/components/AdminApp/CurrentPage.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../index.css */ "./admin/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var AdminApp = function AdminApp(_ref) {
  var currentView = _ref.currentView,
      onTransition = _ref.onTransition;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "AdminApp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "AdminApp-menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    selected: currentView === 'main',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('main');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Main"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    selected: currentView === 'users',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('users');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Users"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
    selected: currentView === 'bans',
    className: "AdminApp-menuItem",
    onClick: function onClick() {
      return onTransition('bans');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
    primary: "Bans"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "AdminApp-page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrentPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    page: currentView
  })));
};

AdminApp.propTypes = {
  currentView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onTransition: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = AdminApp;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(AdminApp, "AdminApp", "/Users/jneen/src/dj/ui/admin/components/AdminApp/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/AdminApp/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/BansList/Row.js":
/*!******************************************!*\
  !*** ./admin/components/BansList/Row.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ms */ "../node_modules/ms/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/es/Button/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/es/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/es/TableCell/index.js");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/Avatar */ "./components/Avatar/index.js");
/* harmony import */ var _components_Username_WithCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/Username/WithCard */ "./components/Username/WithCard.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};










var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["translate"])();
var avatarStyle = {
  width: 48,
  paddingRight: 0
};

var BanRow = function BanRow(_ref) {
  var t = _ref.t,
      ban = _ref.ban,
      onUnbanUser = _ref.onUnbanUser;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: avatarStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Avatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    user: ban.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Username_WithCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: ban.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, ms__WEBPACK_IMPORTED_MODULE_3___default()(ban.duration, {
    "long": true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, ban.reason || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, t('admin.bans.noReason'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Username_WithCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
    user: ban.moderator
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "raised",
    onClick: onUnbanUser
  }, t('admin.bans.unban'))));
};

BanRow.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  ban: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    duration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    reason: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    moderator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
  }).isRequired,
  onUnbanUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var _default = enhance(BanRow);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/components/BansList/Row.js");
  reactHotLoader.register(avatarStyle, "avatarStyle", "/Users/jneen/src/dj/ui/admin/components/BansList/Row.js");
  reactHotLoader.register(BanRow, "BanRow", "/Users/jneen/src/dj/ui/admin/components/BansList/Row.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/BansList/Row.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/BansList/index.js":
/*!********************************************!*\
  !*** ./admin/components/BansList/index.js ***!
  \********************************************/
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
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "../node_modules/@material-ui/core/es/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../node_modules/@material-ui/core/es/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../node_modules/@material-ui/core/es/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/es/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/es/TableCell/index.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Row */ "./admin/components/BansList/Row.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["translate"])();
var Header = recompose_withProps__WEBPACK_IMPORTED_MODULE_2___default()({
  style: {
    background: '#9d2053',
    padding: '12px 24px',
    lineHeight: '35px'
  }
})('div');
var Filter = recompose_withProps__WEBPACK_IMPORTED_MODULE_2___default()({
  style: {
    background: '#631032',
    color: '#ffffff',
    border: 0,
    marginLeft: 12,
    paddingLeft: 12,
    height: 35
  },
  type: 'text'
})('input');

var BansList = function BansList(_ref) {
  var t = _ref.t,
      bans = _ref.bans,
      _onUnbanUser = _ref.onUnbanUser;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Managing Bans:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      "float": 'right'
    }
  }, "Filter User:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Filter, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], null, t('admin.bans.user')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], null, t('admin.bans.duration')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], null, t('admin.bans.reason')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], null, t('admin.bans.bannedBy')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_8__["default"], null, t('admin.bans.actions')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], null, bans.map(function (ban) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: ban.user._id,
      ban: ban,
      onUnbanUser: function onUnbanUser() {
        return _onUnbanUser(ban.user);
      }
    });
  }))));
};

BansList.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  bans: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onUnbanUser: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var _default = enhance(BansList);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/components/BansList/index.js");
  reactHotLoader.register(Header, "Header", "/Users/jneen/src/dj/ui/admin/components/BansList/index.js");
  reactHotLoader.register(Filter, "Filter", "/Users/jneen/src/dj/ui/admin/components/BansList/index.js");
  reactHotLoader.register(BansList, "BansList", "/Users/jneen/src/dj/ui/admin/components/BansList/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/BansList/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/Main/index.js":
/*!****************************************!*\
  !*** ./admin/components/Main/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_Motd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/Motd */ "./admin/containers/Motd.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};




var Main = function Main() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Note that the admin interface is not yet done and most things do not work. You can, however, configure the message of the day! :P"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Motd__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

Main.propTypes = {};
var _default = Main;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Main, "Main", "/Users/jneen/src/dj/ui/admin/components/Main/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/Main/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/Motd/index.js":
/*!****************************************!*\
  !*** ./admin/components/Motd/index.js ***!
  \****************************************/
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
/* harmony import */ var recompose_withState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/withState */ "../node_modules/recompose/withState.js");
/* harmony import */ var recompose_withState__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_withState__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/withProps */ "../node_modules/recompose/withProps.js");
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_withProps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose/withHandlers */ "../node_modules/recompose/withHandlers.js");
/* harmony import */ var recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "../node_modules/@material-ui/core/es/Card/index.js");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "../node_modules/@material-ui/core/es/CardHeader/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "../node_modules/@material-ui/core/es/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActions */ "../node_modules/@material-ui/core/es/CardActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/es/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/es/IconButton/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Collapse */ "../node_modules/@material-ui/core/es/Collapse/index.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Edit */ "../node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var u_wave_parse_chat_markup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! u-wave-parse-chat-markup */ "../node_modules/u-wave-parse-chat-markup/dist/u-wave-parse-chat-markup.mjs");
/* harmony import */ var _components_Chat_Markup_compile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/Chat/Markup/compile */ "./components/Chat/Markup/compile.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

















var enhance = recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(recompose_withState__WEBPACK_IMPORTED_MODULE_3___default()('newMotd', 'setMotd', function (_ref) {
  var motd = _ref.motd;
  return motd;
}), recompose_withState__WEBPACK_IMPORTED_MODULE_3___default()('expanded', 'setExpanded', false), recompose_withProps__WEBPACK_IMPORTED_MODULE_4___default()(function (props) {
  var newMotd = props.newMotd,
      compileOptions = props.compileOptions,
      expanded = props.expanded,
      setExpanded = props.setExpanded;
  return {
    parsedMotd: Object(_components_Chat_Markup_compile__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(u_wave_parse_chat_markup__WEBPACK_IMPORTED_MODULE_14__["default"])(newMotd), compileOptions),
    onExpand: function onExpand() {
      return setExpanded(!expanded);
    }
  };
}), recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5___default()({
  onChange: function onChange(_ref2) {
    var setMotd = _ref2.setMotd;
    return function (event) {
      setMotd(event.target.value);
    };
  },
  onSubmit: function onSubmit(props) {
    return function (event) {
      var onSetMotd = props.onSetMotd,
          newMotd = props.newMotd,
          setExpanded = props.setExpanded;
      event.preventDefault();
      onSetMotd(newMotd);
      setExpanded(false);
    };
  }
}));

function autoFocus(el) {
  if (el) el.focus();
}

var Motd = function Motd(_ref3) {
  var canChangeMotd = _ref3.canChangeMotd,
      newMotd = _ref3.newMotd,
      parsedMotd = _ref3.parsedMotd,
      expanded = _ref3.expanded,
      onChange = _ref3.onChange,
      onSubmit = _ref3.onSubmit,
      onExpand = _ref3.onExpand;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "AdminMotd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Message of the Day",
    action: canChangeMotd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
      onClick: onExpand
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_13___default.a, null))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], null, parsedMotd), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__["default"], {
    "in": expanded,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "AdminMotd-field",
    rows: 4,
    onChange: onChange,
    value: newMotd,
    ref: autoFocus
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    type: "submit",
    variant: "raised",
    color: "primary"
  }, "Save")))));
};

Motd.propTypes = {
  canChangeMotd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  newMotd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  parsedMotd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onExpand: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
Motd.defaultProps = {
  canChangeMotd: false
};

var _default = enhance(Motd);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/components/Motd/index.js");
  reactHotLoader.register(autoFocus, "autoFocus", "/Users/jneen/src/dj/ui/admin/components/Motd/index.js");
  reactHotLoader.register(Motd, "Motd", "/Users/jneen/src/dj/ui/admin/components/Motd/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/Motd/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/UsersList/Header.js":
/*!**********************************************!*\
  !*** ./admin/components/UsersList/Header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "../node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/withProps */ "../node_modules/recompose/withProps.js");
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_withProps__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose/withHandlers */ "../node_modules/recompose/withHandlers.js");
/* harmony import */ var recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var enhance = recompose_compose__WEBPACK_IMPORTED_MODULE_3___default()(recompose_withProps__WEBPACK_IMPORTED_MODULE_4___default()(function (_ref) {
  var onFilter = _ref.onFilter;
  return {
    onFilterDebounced: lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(onFilter, 200)
  };
}), recompose_withHandlers__WEBPACK_IMPORTED_MODULE_5___default()({
  onChange: function onChange(_ref2) {
    var onFilterDebounced = _ref2.onFilterDebounced;
    return function (event) {
      return onFilterDebounced(event.target.value);
    };
  }
}));

var Filter = function Filter(_ref3) {
  var onChange = _ref3.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "AdminUserHeader-filter",
    onChange: onChange
  });
};

Filter.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var ConnectedFilter = enhance(Filter);

var Header = function Header(_ref4) {
  var onFilter = _ref4.onFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "AdminUserHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Managing Users:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Filter User:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ConnectedFilter, {
    onFilter: onFilter
  })));
};

Header.propTypes = {
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = Header;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/components/UsersList/Header.js");
  reactHotLoader.register(Filter, "Filter", "/Users/jneen/src/dj/ui/admin/components/UsersList/Header.js");
  reactHotLoader.register(ConnectedFilter, "ConnectedFilter", "/Users/jneen/src/dj/ui/admin/components/UsersList/Header.js");
  reactHotLoader.register(Header, "Header", "/Users/jneen/src/dj/ui/admin/components/UsersList/Header.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/UsersList/Header.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/UsersList/Row.js":
/*!*******************************************!*\
  !*** ./admin/components/UsersList/Row.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRow; });
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
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! recompose/withProps */ "../node_modules/recompose/withProps.js");
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(recompose_withProps__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/uniqueId */ "../node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "../node_modules/@material-ui/core/es/IconButton/index.js");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Menu */ "../node_modules/@material-ui/core/es/Menu/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "../node_modules/@material-ui/core/es/MenuItem/index.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "../node_modules/@material-ui/icons/MoreVert.js");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/es/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/es/TableCell/index.js");
/* harmony import */ var _components_Avatar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../components/Avatar */ "./components/Avatar/index.js");
/* harmony import */ var _components_Username_WithCard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/Username/WithCard */ "./components/Username/WithCard.js");
/* harmony import */ var _components_UserRole__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/UserRole */ "./components/UserRole/index.js");
/* harmony import */ var _utils_formatJoinDate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../utils/formatJoinDate */ "./utils/formatJoinDate.js");








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};
















var actionsStyle = {
  width: 48,
  paddingLeft: 0,
  paddingRight: 0
};
var TableCell = recompose_withProps__WEBPACK_IMPORTED_MODULE_10___default()(function (_ref) {
  var className = _ref.className;
  return {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('AdminUserRow-cell', className)
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"]);

var UserRow = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(UserRow, _React$Component);

  var _super = _createSuper(UserRow);

  function UserRow() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, UserRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "menu", lodash_uniqueId__WEBPACK_IMPORTED_MODULE_11___default()('menu'));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      open: false,
      anchorEl: null
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleOpenMenu", function (event) {
      _this.setState({
        open: true,
        anchorEl: event.currentTarget
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleCloseMenu", function () {
      _this.setState({
        open: false,
        anchorEl: null
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(UserRow, [{
    key: "render",
    value: function render() {
      var user = this.props.user;
      var _this$state = this.state,
          open = _this$state.open,
          anchorEl = _this$state.anchorEl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: "AdminUserRow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TableCell, {
        className: "AdminUserRow-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Avatar__WEBPACK_IMPORTED_MODULE_18__["default"], {
        user: user
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TableCell, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Username_WithCard__WEBPACK_IMPORTED_MODULE_19__["default"], {
        user: user
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TableCell, null, Object(_utils_formatJoinDate__WEBPACK_IMPORTED_MODULE_21__["default"])(user.createdAt, 'date')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TableCell, null, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TableCell, null, user.roles.length > 0 &&
      /*#__PURE__*/

      /* Only show the primary role here for space reasons. */
      react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_UserRole__WEBPACK_IMPORTED_MODULE_20__["default"], {
        roleName: user.roles[0]
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(TableCell, {
        style: actionsStyle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: this.handleOpenMenu,
        "aria-haspopup": "true",
        "aria-owns": open ? this.menu : null
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_15___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__["default"], {
        id: this.menu,
        open: open,
        anchorEl: anchorEl,
        onClose: this.handleCloseMenu
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__["default"], null, "Ban"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: // @ts-ignore
    function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return UserRow;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(UserRow, "propTypes", {
  user: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
});


;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(actionsStyle, "actionsStyle", "/Users/jneen/src/dj/ui/admin/components/UsersList/Row.js");
  reactHotLoader.register(TableCell, "TableCell", "/Users/jneen/src/dj/ui/admin/components/UsersList/Row.js");
  reactHotLoader.register(UserRow, "UserRow", "/Users/jneen/src/dj/ui/admin/components/UsersList/Row.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/components/UsersList/index.js":
/*!*********************************************!*\
  !*** ./admin/components/UsersList/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Table */ "../node_modules/@material-ui/core/es/Table/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableHead */ "../node_modules/@material-ui/core/es/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "../node_modules/@material-ui/core/es/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "../node_modules/@material-ui/core/es/TableFooter/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "../node_modules/@material-ui/core/es/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/es/TableRow/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/es/TableCell/index.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Row */ "./admin/components/UsersList/Row.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Header */ "./admin/components/UsersList/Header.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};













var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["translate"])();

var UsersList = function UsersList(_ref) {
  var t = _ref.t,
      pageSize = _ref.pageSize,
      currentPage = _ref.currentPage,
      totalUsers = _ref.totalUsers,
      users = _ref.users,
      onChangePage = _ref.onChangePage,
      onFilter = _ref.onFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onFilter: onFilter
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "AdminUserRow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "AdminUserRow-avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], null, t('admin.users.user')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], null, t('admin.users.joinedAt')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], null, t('admin.users.email')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], null, t('admin.users.roles')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_9__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], null, users.map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Row__WEBPACK_IMPORTED_MODULE_10__["default"], {
      user: user
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_7__["default"], {
    count: totalUsers,
    rowsPerPage: pageSize,
    rowsPerPageOptions: [pageSize],
    page: currentPage,
    onChangePage: onChangePage
  })))));
};

UsersList.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  pageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  totalUsers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  users: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onChangePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var _default = enhance(UsersList);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/components/UsersList/index.js");
  reactHotLoader.register(UsersList, "UsersList", "/Users/jneen/src/dj/ui/admin/components/UsersList/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/components/UsersList/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/constants/ActionTypes.js":
/*!****************************************!*\
  !*** ./admin/constants/ActionTypes.js ***!
  \****************************************/
/*! exports provided: TRANSITION, SET_USERS_FILTER, LOAD_USERS_START, LOAD_USERS_COMPLETE, LOAD_BANS_START, LOAD_BANS_COMPLETE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSITION", function() { return TRANSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_USERS_FILTER", function() { return SET_USERS_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_START", function() { return LOAD_USERS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USERS_COMPLETE", function() { return LOAD_USERS_COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BANS_START", function() { return LOAD_BANS_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_BANS_COMPLETE", function() { return LOAD_BANS_COMPLETE; });
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var TRANSITION = 'uwave/admin/view/TRANSITION';
var SET_USERS_FILTER = 'uwave/admin/users/SET_USERS_FILTER';
var LOAD_USERS_START = 'uwave/admin/users/LOAD_USERS_START';
var LOAD_USERS_COMPLETE = 'uwave/admin/users/LOAD_USERS_COMPLETE';
var LOAD_BANS_START = 'uwave/admin/bans/LOAD_BANS_START';
var LOAD_BANS_COMPLETE = 'uwave/admin/bans/LOAD_BANS_COMPLETE';
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(TRANSITION, "TRANSITION", "/Users/jneen/src/dj/ui/admin/constants/ActionTypes.js");
  reactHotLoader.register(SET_USERS_FILTER, "SET_USERS_FILTER", "/Users/jneen/src/dj/ui/admin/constants/ActionTypes.js");
  reactHotLoader.register(LOAD_USERS_START, "LOAD_USERS_START", "/Users/jneen/src/dj/ui/admin/constants/ActionTypes.js");
  reactHotLoader.register(LOAD_USERS_COMPLETE, "LOAD_USERS_COMPLETE", "/Users/jneen/src/dj/ui/admin/constants/ActionTypes.js");
  reactHotLoader.register(LOAD_BANS_START, "LOAD_BANS_START", "/Users/jneen/src/dj/ui/admin/constants/ActionTypes.js");
  reactHotLoader.register(LOAD_BANS_COMPLETE, "LOAD_BANS_COMPLETE", "/Users/jneen/src/dj/ui/admin/constants/ActionTypes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/containers/AdminApp.js":
/*!**************************************!*\
  !*** ./admin/containers/AdminApp.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose_getContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/getContext */ "../node_modules/recompose/getContext.js");
/* harmony import */ var recompose_getContext__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_getContext__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/lifecycle */ "../node_modules/recompose/lifecycle.js");
/* harmony import */ var recompose_lifecycle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_lifecycle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_AdminApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AdminApp */ "./admin/components/AdminApp/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers */ "./admin/reducers/index.js");
/* harmony import */ var _actions_view__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/view */ "./admin/actions/view.js");
/* harmony import */ var _selectors_viewSelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../selectors/viewSelectors */ "./admin/selectors/viewSelectors.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};











var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_4__["createStructuredSelector"])({
  currentView: _selectors_viewSelectors__WEBPACK_IMPORTED_MODULE_9__["currentViewSelector"]
});
var mapDispatchToProps = {
  onTransition: _actions_view__WEBPACK_IMPORTED_MODULE_8__["transition"]
};

function hasAdminState(store) {
  var state = store.getState();
  return state && !!state.admin;
}

function mountAdminReducer(store) {
  store.mount('admin', _reducers__WEBPACK_IMPORTED_MODULE_7__["default"]);
}

function mountAdminReducerOnce(store) {
  if (!hasAdminState(store)) {
    mountAdminReducer(store);
  }
}

var enhance = recompose_compose__WEBPACK_IMPORTED_MODULE_1___default()(recompose_getContext__WEBPACK_IMPORTED_MODULE_2___default()({
  store: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
}), recompose_lifecycle__WEBPACK_IMPORTED_MODULE_3___default()({
  componentWillMount: function componentWillMount() {
    if (this.props.store) {
      mountAdminReducerOnce(this.props.store);
    }
  }
}), Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps));

var _default = enhance(_components_AdminApp__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/jneen/src/dj/ui/admin/containers/AdminApp.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/jneen/src/dj/ui/admin/containers/AdminApp.js");
  reactHotLoader.register(hasAdminState, "hasAdminState", "/Users/jneen/src/dj/ui/admin/containers/AdminApp.js");
  reactHotLoader.register(mountAdminReducer, "mountAdminReducer", "/Users/jneen/src/dj/ui/admin/containers/AdminApp.js");
  reactHotLoader.register(mountAdminReducerOnce, "mountAdminReducerOnce", "/Users/jneen/src/dj/ui/admin/containers/AdminApp.js");
  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/containers/AdminApp.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/containers/AdminApp.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/containers/BansList.js":
/*!**************************************!*\
  !*** ./admin/containers/BansList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recompose_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/lifecycle */ "../node_modules/recompose/lifecycle.js");
/* harmony import */ var recompose_lifecycle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_lifecycle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_bans__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/bans */ "./admin/actions/bans.js");
/* harmony import */ var _components_BansList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BansList */ "./admin/components/BansList/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var mapStateToProps = function mapStateToProps(state) {
  return {
    bans: state.admin.bans.bans
  };
};

var mapDispatchToProps = {
  onLoadBans: _actions_bans__WEBPACK_IMPORTED_MODULE_3__["loadBans"],
  onUnbanUser: _actions_bans__WEBPACK_IMPORTED_MODULE_3__["unbanUserAndReload"]
};

var _default = recompose_compose__WEBPACK_IMPORTED_MODULE_1___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps), recompose_lifecycle__WEBPACK_IMPORTED_MODULE_2___default()({
  componentDidMount: function componentDidMount() {
    this.props.onLoadBans();
  }
}))(_components_BansList__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/jneen/src/dj/ui/admin/containers/BansList.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/jneen/src/dj/ui/admin/containers/BansList.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/containers/BansList.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/containers/Motd.js":
/*!**********************************!*\
  !*** ./admin/containers/Motd.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Motd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Motd */ "./admin/components/Motd/index.js");
/* harmony import */ var _actions_ChatActionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/ChatActionCreators */ "./actions/ChatActionCreators.js");
/* harmony import */ var _selectors_chatSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/chatSelectors */ "./selectors/chatSelectors.js");
/* harmony import */ var _selectors_authSelectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectors/authSelectors */ "./admin/selectors/authSelectors.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createStructuredSelector"])({
  motd: _selectors_chatSelectors__WEBPACK_IMPORTED_MODULE_4__["rawMotdSelector"],
  compileOptions: _selectors_chatSelectors__WEBPACK_IMPORTED_MODULE_4__["markupCompilerOptionsSelector"],
  canChangeMotd: _selectors_authSelectors__WEBPACK_IMPORTED_MODULE_5__["canChangeMotdSelector"]
});
var mapDispatchToProps = {
  onSetMotd: _actions_ChatActionCreators__WEBPACK_IMPORTED_MODULE_3__["setMotd"]
};

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_components_Motd__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/jneen/src/dj/ui/admin/containers/Motd.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/jneen/src/dj/ui/admin/containers/Motd.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/containers/Motd.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/containers/UsersList.js":
/*!***************************************!*\
  !*** ./admin/containers/UsersList.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recompose/withProps */ "../node_modules/recompose/withProps.js");
/* harmony import */ var recompose_withProps__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recompose_withProps__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var recompose_lifecycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/lifecycle */ "../node_modules/recompose/lifecycle.js");
/* harmony import */ var recompose_lifecycle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_lifecycle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_UsersList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UsersList */ "./admin/components/UsersList/index.js");
/* harmony import */ var _actions_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/users */ "./admin/actions/users.js");
/* harmony import */ var _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selectors/userSelectors */ "./admin/selectors/userSelectors.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_1__["createStructuredSelector"])({
  currentPage: _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_7__["pageSelector"],
  pageSize: _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_7__["pageSizeSelector"],
  totalUsers: _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_7__["totalUsersSelector"],
  users: _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_7__["usersSelector"]
});
var mapDispatchToProps = {
  onLoadUsers: _actions_users__WEBPACK_IMPORTED_MODULE_6__["loadUsers"],
  onFilter: _actions_users__WEBPACK_IMPORTED_MODULE_6__["setUsersFilter"]
};
var enhance = recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps), recompose_withProps__WEBPACK_IMPORTED_MODULE_3___default()(function (props) {
  return {
    onChangePage: function onChangePage(event, page) {
      var pageSize = props.pageSize,
          onLoadUsers = props.onLoadUsers;
      onLoadUsers({
        offset: page * pageSize,
        limit: pageSize
      });
    },
    onFilter: function onFilter(filter) {
      var pageSize = props.pageSize,
          onLoadUsers = props.onLoadUsers,
          onFilter = props.onFilter;
      onFilter(filter);
      onLoadUsers({
        offset: 0,
        limit: pageSize
      });
    }
  };
}), recompose_lifecycle__WEBPACK_IMPORTED_MODULE_4___default()({
  componentDidMount: function componentDidMount() {
    var onChangePage = this.props.onChangePage;
    onChangePage(null, 0);
  }
}));

var _default = enhance(_components_UsersList__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/jneen/src/dj/ui/admin/containers/UsersList.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Users/jneen/src/dj/ui/admin/containers/UsersList.js");
  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/admin/containers/UsersList.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/containers/UsersList.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/index.css":
/*!*************************!*\
  !*** ./admin/index.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src!./index.css */ "../node_modules/css-loader/index.js!../node_modules/postcss-loader/src/index.js!./admin/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./admin/reducers/bans.js":
/*!********************************!*\
  !*** ./admin/reducers/bans.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./admin/constants/ActionTypes.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var initialState = {
  currentPage: {
    offset: 0,
    limit: 50
  },
  bans: []
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOAD_BANS_START"]:
      return state;

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOAD_BANS_COMPLETE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        bans: action.payload.bans
      });

    default:
      return state;
  }
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/jneen/src/dj/ui/admin/reducers/bans.js");
  reactHotLoader.register(reducer, "reducer", "/Users/jneen/src/dj/ui/admin/reducers/bans.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/reducers/index.js":
/*!*********************************!*\
  !*** ./admin/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./admin/reducers/users.js");
/* harmony import */ var _bans__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bans */ "./admin/reducers/bans.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ "./admin/reducers/view.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






var _default = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  users: _users__WEBPACK_IMPORTED_MODULE_1__["default"],
  bans: _bans__WEBPACK_IMPORTED_MODULE_2__["default"],
  view: _view__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/reducers/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/reducers/users.js":
/*!*********************************!*\
  !*** ./admin/reducers/users.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./admin/constants/ActionTypes.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


var initialState = {
  filter: null,
  currentPage: 0,
  totalPages: 0,
  totalUsers: 0,
  users: []
};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["SET_USERS_FILTER"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        filter: action.payload.filter
      });

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOAD_USERS_START"]:
      return state;

    case _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["LOAD_USERS_COMPLETE"]:
      return _objectSpread(_objectSpread({}, state), {}, {
        currentPage: action.payload.page,
        totalUsers: action.meta.results,
        totalPages: Math.ceil(action.meta.results / action.meta.pageSize),
        users: action.payload.users
      });

    default:
      return state;
  }
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(initialState, "initialState", "/Users/jneen/src/dj/ui/admin/reducers/users.js");
  reactHotLoader.register(reducer, "reducer", "/Users/jneen/src/dj/ui/admin/reducers/users.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/reducers/view.js":
/*!********************************!*\
  !*** ./admin/reducers/view.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reducer; });
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/ActionTypes */ "./admin/constants/ActionTypes.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'main';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_0__["TRANSITION"]) {
    return action.payload;
  }

  return state;
}
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(reducer, "reducer", "/Users/jneen/src/dj/ui/admin/reducers/view.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/selectors/authSelectors.js":
/*!******************************************!*\
  !*** ./admin/selectors/authSelectors.js ***!
  \******************************************/
/*! exports provided: canChangeMotdSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canChangeMotdSelector", function() { return canChangeMotdSelector; });
/* harmony import */ var _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../selectors/userSelectors */ "./selectors/userSelectors.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

/* eslint-disable import/prefer-default-export */
 // TODO replace with check for the `motd.set` role.

var canChangeMotdSelector = _selectors_userSelectors__WEBPACK_IMPORTED_MODULE_0__["isModeratorSelector"];
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(canChangeMotdSelector, "canChangeMotdSelector", "/Users/jneen/src/dj/ui/admin/selectors/authSelectors.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/selectors/baseSelector.js":
/*!*****************************************!*\
  !*** ./admin/selectors/baseSelector.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

var _default = function _default(state) {
  return state.admin;
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/admin/selectors/baseSelector.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/selectors/userSelectors.js":
/*!******************************************!*\
  !*** ./admin/selectors/userSelectors.js ***!
  \******************************************/
/*! exports provided: pageSizeSelector, pageSelector, totalUsersSelector, filterSelector, usersSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageSizeSelector", function() { return pageSizeSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageSelector", function() { return pageSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalUsersSelector", function() { return totalUsersSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSelector", function() { return filterSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersSelector", function() { return usersSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony import */ var _baseSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseSelector */ "./admin/selectors/baseSelector.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};



var pageSizeSelector = function pageSizeSelector() {
  return 25;
};
var pageSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_baseSelector__WEBPACK_IMPORTED_MODULE_1__["default"], function (base) {
  return base.users.currentPage;
});
var totalUsersSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_baseSelector__WEBPACK_IMPORTED_MODULE_1__["default"], function (base) {
  return base.users.totalUsers;
});
var filterSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_baseSelector__WEBPACK_IMPORTED_MODULE_1__["default"], function (base) {
  return base.users.filter;
});
var usersSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_baseSelector__WEBPACK_IMPORTED_MODULE_1__["default"], function (base) {
  return base.users.users;
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(pageSizeSelector, "pageSizeSelector", "/Users/jneen/src/dj/ui/admin/selectors/userSelectors.js");
  reactHotLoader.register(pageSelector, "pageSelector", "/Users/jneen/src/dj/ui/admin/selectors/userSelectors.js");
  reactHotLoader.register(totalUsersSelector, "totalUsersSelector", "/Users/jneen/src/dj/ui/admin/selectors/userSelectors.js");
  reactHotLoader.register(filterSelector, "filterSelector", "/Users/jneen/src/dj/ui/admin/selectors/userSelectors.js");
  reactHotLoader.register(usersSelector, "usersSelector", "/Users/jneen/src/dj/ui/admin/selectors/userSelectors.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./admin/selectors/viewSelectors.js":
/*!******************************************!*\
  !*** ./admin/selectors/viewSelectors.js ***!
  \******************************************/
/*! exports provided: currentViewSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentViewSelector", function() { return currentViewSelector; });
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reselect */ "../node_modules/reselect/es/index.js");
/* harmony import */ var _baseSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseSelector */ "./admin/selectors/baseSelector.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};


 // eslint-disable-next-line import/prefer-default-export

var currentViewSelector = Object(reselect__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_baseSelector__WEBPACK_IMPORTED_MODULE_1__["default"], function (base) {
  return base.view;
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(currentViewSelector, "currentViewSelector", "/Users/jneen/src/dj/ui/admin/selectors/viewSelectors.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Username/WithCard.js":
/*!*****************************************!*\
  !*** ./components/Username/WithCard.js ***!
  \*****************************************/
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
/* harmony import */ var _utils_userCardable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/userCardable */ "./utils/userCardable.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! . */ "./components/Username/index.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};







var enhance = recompose_compose__WEBPACK_IMPORTED_MODULE_2___default()(Object(_utils_userCardable__WEBPACK_IMPORTED_MODULE_4__["default"])(), recompose_withProps__WEBPACK_IMPORTED_MODULE_3___default()(function (props) {
  return {
    onUsernameClick: function onUsernameClick(event) {
      var openUserCard = props.openUserCard,
          user = props.user;
      event.preventDefault();
      openUserCard(user);
    }
  };
}));

var UsernameWithCard = function UsernameWithCard(_ref) {
  var user = _ref.user,
      onUsernameClick = _ref.onUsernameClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: onUsernameClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["default"], {
    user: user
  }));
};

UsernameWithCard.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onUsernameClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var _default = enhance(UsernameWithCard);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/Username/WithCard.js");
  reactHotLoader.register(UsernameWithCard, "UsernameWithCard", "/Users/jneen/src/dj/ui/components/Username/WithCard.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/Username/WithCard.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hZG1pbi9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vYWN0aW9ucy9iYW5zLmpzIiwid2VicGFjazovLy8uL2FkbWluL2FjdGlvbnMvdXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vYWN0aW9ucy92aWV3LmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvQWRtaW5BcHAvQ3VycmVudFBhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vY29tcG9uZW50cy9BZG1pbkFwcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb21wb25lbnRzL0JhbnNMaXN0L1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb21wb25lbnRzL0JhbnNMaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvTWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb21wb25lbnRzL01vdGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vY29tcG9uZW50cy9Vc2Vyc0xpc3QvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbXBvbmVudHMvVXNlcnNMaXN0L1Jvdy5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb21wb25lbnRzL1VzZXJzTGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb25zdGFudHMvQWN0aW9uVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vY29udGFpbmVycy9BZG1pbkFwcC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb250YWluZXJzL0JhbnNMaXN0LmpzIiwid2VicGFjazovLy8uL2FkbWluL2NvbnRhaW5lcnMvTW90ZC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9jb250YWluZXJzL1VzZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9pbmRleC5jc3M/YjRhZSIsIndlYnBhY2s6Ly8vLi9hZG1pbi9yZWR1Y2Vycy9iYW5zLmpzIiwid2VicGFjazovLy8uL2FkbWluL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FkbWluL3JlZHVjZXJzL3VzZXJzLmpzIiwid2VicGFjazovLy8uL2FkbWluL3JlZHVjZXJzL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2VsZWN0b3JzL2F1dGhTZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYWRtaW4vc2VsZWN0b3JzL2Jhc2VTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9zZWxlY3RvcnMvdXNlclNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9hZG1pbi9zZWxlY3RvcnMvdmlld1NlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJuYW1lL1dpdGhDYXJkLmpzIl0sIm5hbWVzIjpbImxvYWRCYW5zU3RhcnQiLCJ0eXBlIiwiTE9BRF9CQU5TX1NUQVJUIiwibG9hZEJhbnNDb21wbGV0ZSIsInJlc3BvbnNlIiwibWV0YSIsIkxPQURfQkFOU19DT01QTEVURSIsInBheWxvYWQiLCJiYW5zIiwibWVyZ2VJbmNsdWRlZE1vZGVscyIsInBhZ2UiLCJNYXRoIiwiZmxvb3IiLCJvZmZzZXQiLCJwYWdlU2l6ZSIsInNpemUiLCJsb2FkQmFucyIsImdldCIsIm9uU3RhcnQiLCJvbkNvbXBsZXRlIiwidW5iYW5Vc2VyIiwidXNlciIsImRlbCIsIl9pZCIsInVuYmFuVXNlckFuZFJlbG9hZCIsImRpc3BhdGNoIiwidGhlbiIsImxvYWRVc2Vyc1N0YXJ0IiwiTE9BRF9VU0VSU19TVEFSVCIsImxvYWRVc2Vyc0NvbXBsZXRlIiwiTE9BRF9VU0VSU19DT01QTEVURSIsInVzZXJzIiwiZGF0YSIsImxvYWRVc2VycyIsInBhZ2luYXRpb24iLCJnZXRTdGF0ZSIsImZpbHRlciIsImZpbHRlclNlbGVjdG9yIiwicXMiLCJzZXRVc2Vyc0ZpbHRlciIsIlNFVF9VU0VSU19GSUxURVIiLCJ0cmFuc2l0aW9uIiwidGFyZ2V0IiwiVFJBTlNJVElPTiIsInBhZ2VzIiwibWFpbiIsIk1haW4iLCJVc2Vyc0xpc3QiLCJCYW5zTGlzdCIsImVuaGFuY2UiLCJtYXBQcm9wcyIsImNvbXBvbmVudCIsIkN1cnJlbnRQYWdlIiwiY29tcG9uZW50RnJvbVByb3AiLCJBZG1pbkFwcCIsImN1cnJlbnRWaWV3Iiwib25UcmFuc2l0aW9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJ0cmFuc2xhdGUiLCJhdmF0YXJTdHlsZSIsIndpZHRoIiwicGFkZGluZ1JpZ2h0IiwiQmFuUm93IiwidCIsImJhbiIsIm9uVW5iYW5Vc2VyIiwibXMiLCJkdXJhdGlvbiIsInJlYXNvbiIsIm1vZGVyYXRvciIsInNoYXBlIiwib2JqZWN0IiwibnVtYmVyIiwiSGVhZGVyIiwid2l0aFByb3BzIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImxpbmVIZWlnaHQiLCJGaWx0ZXIiLCJjb2xvciIsImJvcmRlciIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nTGVmdCIsImhlaWdodCIsIm1hcCIsImFycmF5IiwiY29tcG9zZSIsIndpdGhTdGF0ZSIsIm1vdGQiLCJwcm9wcyIsIm5ld01vdGQiLCJjb21waWxlT3B0aW9ucyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJwYXJzZWRNb3RkIiwiY29tcGlsZSIsInBhcnNlIiwib25FeHBhbmQiLCJ3aXRoSGFuZGxlcnMiLCJvbkNoYW5nZSIsInNldE1vdGQiLCJldmVudCIsInZhbHVlIiwib25TdWJtaXQiLCJvblNldE1vdGQiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9Gb2N1cyIsImVsIiwiZm9jdXMiLCJNb3RkIiwiY2FuQ2hhbmdlTW90ZCIsInBhZGRpbmdUb3AiLCJib29sIiwiZGVmYXVsdFByb3BzIiwib25GaWx0ZXIiLCJvbkZpbHRlckRlYm91bmNlZCIsImRlYm91bmNlIiwiQ29ubmVjdGVkRmlsdGVyIiwiYWN0aW9uc1N0eWxlIiwiVGFibGVDZWxsIiwiY2xhc3NOYW1lIiwiY3giLCJNdWlUYWJsZUNlbGwiLCJVc2VyUm93IiwidW5pcXVlSWQiLCJvcGVuIiwiYW5jaG9yRWwiLCJzZXRTdGF0ZSIsImN1cnJlbnRUYXJnZXQiLCJzdGF0ZSIsImZvcm1hdEpvaW5EYXRlIiwiY3JlYXRlZEF0Iiwicm9sZXMiLCJsZW5ndGgiLCJoYW5kbGVPcGVuTWVudSIsIm1lbnUiLCJoYW5kbGVDbG9zZU1lbnUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImN1cnJlbnRQYWdlIiwidG90YWxVc2VycyIsIm9uQ2hhbmdlUGFnZSIsIm1hcFN0YXRlVG9Qcm9wcyIsImNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciIsImN1cnJlbnRWaWV3U2VsZWN0b3IiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJoYXNBZG1pblN0YXRlIiwic3RvcmUiLCJhZG1pbiIsIm1vdW50QWRtaW5SZWR1Y2VyIiwibW91bnQiLCJhZG1pblJlZHVjZXIiLCJtb3VudEFkbWluUmVkdWNlck9uY2UiLCJnZXRDb250ZXh0IiwibGlmZWN5Y2xlIiwiY29tcG9uZW50V2lsbE1vdW50IiwiY29ubmVjdCIsIm9uTG9hZEJhbnMiLCJjb21wb25lbnREaWRNb3VudCIsInJhd01vdGRTZWxlY3RvciIsIm1hcmt1cENvbXBpbGVyT3B0aW9uc1NlbGVjdG9yIiwiY2FuQ2hhbmdlTW90ZFNlbGVjdG9yIiwicGFnZVNlbGVjdG9yIiwicGFnZVNpemVTZWxlY3RvciIsInRvdGFsVXNlcnNTZWxlY3RvciIsInVzZXJzU2VsZWN0b3IiLCJvbkxvYWRVc2VycyIsImxpbWl0IiwiaW5pdGlhbFN0YXRlIiwicmVkdWNlciIsImFjdGlvbiIsImNvbWJpbmVSZWR1Y2VycyIsInZpZXciLCJ0b3RhbFBhZ2VzIiwicmVzdWx0cyIsImNlaWwiLCJpc01vZGVyYXRvclNlbGVjdG9yIiwiY3JlYXRlU2VsZWN0b3IiLCJiYXNlU2VsZWN0b3IiLCJiYXNlIiwidXNlckNhcmRhYmxlIiwib25Vc2VybmFtZUNsaWNrIiwib3BlblVzZXJDYXJkIiwiVXNlcm5hbWVXaXRoQ2FyZCJd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LEtBQUs7QUFBQSxTQUFLO0FBQ2xCNEYsbUJBRGtCLDJCQUNGaEYsS0FERSxFQUNLO0FBQ3JCLFVBQVFpRixZQUFSLEdBQStCN0YsS0FBL0IsQ0FBUTZGLFlBQVI7QUFBQSxVQUFzQnRLLElBQXRCLEdBQStCeUUsS0FBL0IsQ0FBc0J6RSxJQUF0QjtBQUVBcUYsV0FBSyxDQUFDSSxjQUFOO0FBQ0E2RSxrQkFBWSxDQUFDdEssSUFBRCxDQUFaO0FBQ0Q7QUFOaUIsR0FBTDtBQUFBLENBQU4sQ0FGWSxDQUF2Qjs7QUFZQSxJQUFNdUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUd2SyxJQUFILFFBQUdBLElBQUg7QUFBQSxNQUFTcUssZUFBVCxRQUFTQSxlQUFUO0FBQUEsc0JBQ3ZCO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsV0FBTyxFQUFFQTtBQUEvQixrQkFDRSwyREFBQyx5Q0FBRDtBQUFjLFFBQUksRUFBRXJLO0FBQXBCLElBREYsQ0FEdUI7QUFBQSxDQUF6Qjs7QUFNQXVLLGdCQUFnQixDQUFDbkksU0FBakIsR0FBNkI7QUFDM0JwQyxNQUFJLEVBQUVxQyxpREFBUyxDQUFDaUIsTUFBVixDQUFpQmYsVUFESTtBQUUzQjhILGlCQUFlLEVBQUVoSSxpREFBUyxDQUFDRyxJQUFWLENBQWVEO0FBRkwsQ0FBN0I7O2VBS2VYLE9BQU8sQ0FBQzJJLGdCQUFELEM7O0FBQVA7Ozs7Ozs7Ozs7MEJBdkJUM0ksTzswQkFZQTJJLGdCIiwiZmlsZSI6ImFkbWluX2Rldi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLyogR2xvYmFsIGNvbG91cnMgKi9cXG4gIC0tdGV4dC1jb2xvcjogI2ZmZjtcXG4gIC0tc2Vjb25kYXJ5LXRleHQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcXG4gIC0tbXV0ZWQtdGV4dC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yOiAjMTExO1xcbiAgLS1oaWdobGlnaHQtY29sb3I6ICM5ZDIwNTM7XFxuICAtLWhpZ2hicmlnaHQtY29sb3I6ICNiMjAwNjI7XFxuICAtLXNjcm9sbGJhci1jb2xvcjogIzVmNWY1ZjtcXG4gIC0tY2FudmFzLWNvbG9yOiAjMzAzMDMwO1xcbiAgLS1kaXZpZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xcblxcbiAgLyogTGluayBjb2xvcnMgKi9cXG4gIC0tbGluay1jb2xvcjogI2M3MmU2YztcXG4gIC0tbGluay12aXNpdGVkLWNvbG9yOiAjYzcyZTZjO1xcbiAgLS1saW5rLXZpc2l0ZWQtY29sb3I6IHZhcigtLWxpbmstY29sb3IpO1xcblxcbiAgLyogU2l6ZXMgKi9cXG4gIC0taGVhZGVyLWhlaWdodDogNTZweDtcXG4gIC0tZm9vdGVyLWhlaWdodDogNjBweDtcXG5cXG4gIC8qIEZvb3RlciBjb2xvdXJzICovXFxuICAtLWZvb3Rlci1ib3JkZXItY29sb3I6ICMzMDMwMzY7XFxuXFxuICAvKiBPdmVybGF5IGNvbG91cnMgJiBzaXplcyAqL1xcbiAgLS1vdmVybGF5LWhlYWRlci1jbG9zZS1zaXplOiA1NnB4O1xcbiAgLS1vdmVybGF5LWhlYWRlci1jbG9zZS1zaXplOiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcXG5cXG4gIC8qIENoYXQgY29sb3VycyAqL1xcbiAgLS1jaGF0LWJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XFxuICAtLWNoYXQtYm9yZGVyLWNvbG9yOiAjMzAzMDM2O1xcbiAgLS1jaGF0LWJvcmRlci1jb2xvcjogdmFyKC0tZm9vdGVyLWJvcmRlci1jb2xvcik7XFxuXFxuICAvKiBVc2VyIHJlbGF0ZWQgY29sb3VycyAqL1xcbiAgLS11c2VyLWxpc3QtY29sb3I6ICMxYjFiMWI7XFxuICAtLXVzZXItbGlzdC1hbHRlcm5hdGUtY29sb3I6ICMyMjIyMjI7XFxuXFxuICAvKiBQbGF5bGlzdCBjb2xvdXJzICYgc2l6aW5nICovXFxuICAtLW1lZGlhLWxpc3Qtc3BhY2luZzogMyU7XFxuICAtLW1lZGlhLWxpc3QtdGh1bWItd2lkdGg6IDg1cHg7XFxuICAtLW1lZGlhLWxpc3QtZHVyYXRpb24td2lkdGg6IDcwcHg7XFxuICAtLW1lZGlhLWxpc3QtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLyogVE9ETyBOYW1lIHRoaXMgaW4gc29tZSBvdGhlciB3YXkuIEl0J3MgdXNlZCBhcyB0aGUgbWVudSBpdGVtIGZvY3VzIGNvbG91clxcbiAgICogaW4gdmFyaW91cyBwbGFjZXMuICovXFxuICAtLW1lZGlhLWxpc3QtYWx0ZXJuYXRlLWNvbG9yOiByZ2IoNDgsIDQ4LCA1NCk7XFxuXFxuICAvKiBTZXR0aW5ncyBwYW5lbCBjb2xvdXJzICovXFxuICAtLXNldHRpbmdzLWhlbHAtdGV4dC1jb2xvcjogI2FhYTtcXG5cXG4gIC8qIEZvcm0gY29sb3VycyAmIHNpemVzICovXFxuICAtLWZvcm1zLWVsZW1lbnQtbWFyZ2luOiAxNnB4O1xcbiAgLS1mb3Jtcy10ZXh0ZmllbGQtc2l6ZTogNTBweDtcXG5cXG4gIC8qIE1pc2MgY29tcHV0ZWQgKi9cXG4gIC8qIFdlIGNhbid0IHVzZSBjb2xvci1tb2QodmFyKCkpIGJlY2F1c2UgdmFyKClzIGFyZSBwcmVzZXJ2ZWQuIEluc3RlYWQgdGhlc2UgdmFsdWVzIGFyZSBoYXJkY29kZWQuICovXFxuICAvKiBJbiBtb2Rlcm4gYnJvd3NlcnMgd2l0aCB2YXIoKSBzdXBwb3J0LCB0aGVzZSB2YWx1ZXMgYXJlIGRlZmluZWQgaW4gc3JjL3V0aWxzL2NyZWF0ZVRoZW1lLmpzLiAqL1xcbiAgLS1zZWxlY3RlZC1tZWRpYS1yb3ctY29sb3I6IHJnYigxNTcsIDMyLCA4Myk7XFxuICAtLWNoYXQtc3VnZ2VzdGlvbi1zZWxlY3RlZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgLS1vdmVybGF5LWJhY2tncm91bmQ6IHJnYigyMSwgMjEsIDIxKTtcXG4gIC0tc291bmRjbG91ZC1tZXRhLWJhY2tncm91bmQ6IHJnYigyMSwgMjEsIDIxKTtcXG4gIC0td2FpdGxpc3QtbG9ja2VkLXRleHQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIC0tY2hhdC10aW1lc3RhbXAtdGV4dC1jb2xvcjogcmdiKDIxMCwgMjEwLCAyMTApO1xcbn1cXG5cXG4uQWRtaW5BcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjMTUxNTE1O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5BZG1pbkFwcC1tZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLkFkbWluQXBwLW1lbnVJdGVtLmlzLXNlbGVjdGVkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlkMjA1MztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaGxpZ2h0LWNvbG9yKTtcXG4gIH1cXG5cXG4uQWRtaW5BcHAtcGFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDI1MHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLkFkbWluTW90ZCB7XFxuICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5BZG1pbk1vdGQtZmllbGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMwMzAzNjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNoYXQtYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQ6ICMyMjIyMjI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogNHB4O1xcbiAgbWFyZ2luOiAtNXB4O1xcbn1cXG5cXG4uQWRtaW5Vc2VySGVhZGVyIHtcXG4gIGJhY2tncm91bmQ6ICM5ZDIwNTM7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1oaWdobGlnaHQtY29sb3IpO1xcbiAgcGFkZGluZzogMTJweCAyNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLkFkbWluVXNlckhlYWRlci1maWx0ZXIge1xcbiAgYmFja2dyb3VuZDogIzYzMTAzMjtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAwcHg7XFxuICBtYXJnaW4tbGVmdDogMTJweDtcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuXFxuLkFkbWluVXNlclJvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxNTE1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcilcXG59XFxuXFxuLkFkbWluVXNlclJvdzpudGgtY2hpbGQoMm4pIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyNDtcXG4gIH1cXG5cXG4uQWRtaW5Vc2VyUm93LWNlbGwge1xcbiAgYm9yZGVyLWJvdHRvbTogMHB4IG5vbmU7XFxuICBmb250LXNpemU6IDEycHQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uQWRtaW5Vc2VyUm93LWF2YXRhciB7XFxuICB3aWR0aDogNDhweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCB7IGdldCwgZGVsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9SZXF1ZXN0QWN0aW9uQ3JlYXRvcnMnO1xuaW1wb3J0IG1lcmdlSW5jbHVkZWRNb2RlbHMgZnJvbSAnLi4vLi4vdXRpbHMvbWVyZ2VJbmNsdWRlZE1vZGVscyc7XG5pbXBvcnQgeyBMT0FEX0JBTlNfU1RBUlQsIExPQURfQkFOU19DT01QTEVURSB9IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQmFuc1N0YXJ0KCkge1xuICByZXR1cm4geyB0eXBlOiBMT0FEX0JBTlNfU1RBUlQgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCYW5zQ29tcGxldGUocmVzcG9uc2UpIHtcbiAgY29uc3QgeyBtZXRhIH0gPSByZXNwb25zZTtcblxuICByZXR1cm4ge1xuICAgIHR5cGU6IExPQURfQkFOU19DT01QTEVURSxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBiYW5zOiBtZXJnZUluY2x1ZGVkTW9kZWxzKHJlc3BvbnNlKSxcbiAgICB9LFxuICAgIG1ldGE6IHtcbiAgICAgIHBhZ2U6IE1hdGguZmxvb3IobWV0YS5vZmZzZXQgLyBtZXRhLnBhZ2VTaXplKSxcbiAgICAgIHNpemU6IG1ldGEucGFnZVNpemUsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCYW5zKCkge1xuICByZXR1cm4gZ2V0KCcvYmFucycsIHtcbiAgICBvblN0YXJ0OiBsb2FkQmFuc1N0YXJ0LFxuICAgIG9uQ29tcGxldGU6IGxvYWRCYW5zQ29tcGxldGUsXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5iYW5Vc2VyKHVzZXIpIHtcbiAgcmV0dXJuIGRlbChgL2JhbnMvJHt1c2VyLl9pZH1gLCB7fSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmJhblVzZXJBbmRSZWxvYWQodXNlcikge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4gZGlzcGF0Y2godW5iYW5Vc2VyKHVzZXIpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRCYW5zKCkpKTtcbn1cbiIsImltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvUmVxdWVzdEFjdGlvbkNyZWF0b3JzJztcbmltcG9ydCB7XG4gIFNFVF9VU0VSU19GSUxURVIsXG4gIExPQURfVVNFUlNfU1RBUlQsXG4gIExPQURfVVNFUlNfQ09NUExFVEUsXG59IGZyb20gJy4uL2NvbnN0YW50cy9BY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBmaWx0ZXJTZWxlY3RvciB9IGZyb20gJy4uL3NlbGVjdG9ycy91c2VyU2VsZWN0b3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVc2Vyc1N0YXJ0KCkge1xuICByZXR1cm4geyB0eXBlOiBMT0FEX1VTRVJTX1NUQVJUIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcnNDb21wbGV0ZShyZXNwb25zZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPQURfVVNFUlNfQ09NUExFVEUsXG4gICAgcGF5bG9hZDoge1xuICAgICAgdXNlcnM6IHJlc3BvbnNlLmRhdGEsXG4gICAgICBwYWdlOiBNYXRoLmZsb29yKHJlc3BvbnNlLm1ldGEub2Zmc2V0IC8gcmVzcG9uc2UubWV0YS5wYWdlU2l6ZSksXG4gICAgfSxcbiAgICBtZXRhOiByZXNwb25zZS5tZXRhLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXJzKHBhZ2luYXRpb24gPSBudWxsKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgZmlsdGVyID0gZmlsdGVyU2VsZWN0b3IoZ2V0U3RhdGUoKSk7XG5cbiAgICBjb25zdCBxcyA9IHt9O1xuICAgIGlmIChwYWdpbmF0aW9uKSBxcy5wYWdlID0gcGFnaW5hdGlvbjtcbiAgICBpZiAoZmlsdGVyKSBxcy5maWx0ZXIgPSBmaWx0ZXI7XG5cbiAgICByZXR1cm4gZGlzcGF0Y2goZ2V0KCcvdXNlcnMnLCB7XG4gICAgICBxcyxcbiAgICAgIG9uU3RhcnQ6IGxvYWRVc2Vyc1N0YXJ0LFxuICAgICAgb25Db21wbGV0ZTogbG9hZFVzZXJzQ29tcGxldGUsXG4gICAgfSkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VXNlcnNGaWx0ZXIoZmlsdGVyID0gbnVsbCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9VU0VSU19GSUxURVIsXG4gICAgcGF5bG9hZDogeyBmaWx0ZXIgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IFRSQU5TSVRJT04gfSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb24odGFyZ2V0KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVFJBTlNJVElPTixcbiAgICBwYXlsb2FkOiB0YXJnZXQsXG4gIH07XG59XG4iLCJpbXBvcnQgbWFwUHJvcHMgZnJvbSAncmVjb21wb3NlL21hcFByb3BzJztcbmltcG9ydCBjb21wb25lbnRGcm9tUHJvcCBmcm9tICdyZWNvbXBvc2UvY29tcG9uZW50RnJvbVByb3AnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi4vTWFpbic7XG5pbXBvcnQgVXNlcnNMaXN0IGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvVXNlcnNMaXN0JztcbmltcG9ydCBCYW5zTGlzdCBmcm9tICcuLi8uLi9jb250YWluZXJzL0JhbnNMaXN0JztcblxuY29uc3QgcGFnZXMgPSB7XG4gIG1haW46IE1haW4sXG4gIHVzZXJzOiBVc2Vyc0xpc3QsXG4gIGJhbnM6IEJhbnNMaXN0LFxufTtcblxuY29uc3QgZW5oYW5jZSA9IG1hcFByb3BzKCh7IHBhZ2UgfSkgPT4gKHtcbiAgY29tcG9uZW50OiBwYWdlc1twYWdlXSxcbn0pKTtcblxuY29uc3QgQ3VycmVudFBhZ2UgPSBlbmhhbmNlKGNvbXBvbmVudEZyb21Qcm9wKCdjb21wb25lbnQnKSk7XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRQYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGlzdCwgeyBMaXN0SXRlbSwgTGlzdEl0ZW1UZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MaXN0JztcbmltcG9ydCBDdXJyZW50UGFnZSBmcm9tICcuL0N1cnJlbnRQYWdlJztcblxuaW1wb3J0ICcuLi8uLi9pbmRleC5jc3MnO1xuXG5jb25zdCBBZG1pbkFwcCA9ICh7XG4gIGN1cnJlbnRWaWV3LFxuICBvblRyYW5zaXRpb24sXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiQWRtaW5BcHBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFkbWluQXBwLW1lbnVcIj5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8TGlzdEl0ZW1cbiAgICAgICAgICBzZWxlY3RlZD17Y3VycmVudFZpZXcgPT09ICdtYWluJ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJBZG1pbkFwcC1tZW51SXRlbVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gb25UcmFuc2l0aW9uKCdtYWluJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJNYWluXCIgLz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPExpc3RJdGVtXG4gICAgICAgICAgc2VsZWN0ZWQ9e2N1cnJlbnRWaWV3ID09PSAndXNlcnMnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIkFkbWluQXBwLW1lbnVJdGVtXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRyYW5zaXRpb24oJ3VzZXJzJyl9XG4gICAgICAgID5cbiAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJVc2Vyc1wiIC8+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgIHNlbGVjdGVkPXtjdXJyZW50VmlldyA9PT0gJ2JhbnMnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIkFkbWluQXBwLW1lbnVJdGVtXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblRyYW5zaXRpb24oJ2JhbnMnKX1cbiAgICAgICAgPlxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkJhbnNcIiAvPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgPC9MaXN0PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQWRtaW5BcHAtcGFnZVwiPlxuICAgICAgPEN1cnJlbnRQYWdlIHBhZ2U9e2N1cnJlbnRWaWV3fSAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkFkbWluQXBwLnByb3BUeXBlcyA9IHtcbiAgY3VycmVudFZpZXc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25UcmFuc2l0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5BcHA7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IG1zIGZyb20gJ21zJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQXZhdGFyJztcbmltcG9ydCBVc2VybmFtZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJuYW1lL1dpdGhDYXJkJztcblxuY29uc3QgZW5oYW5jZSA9IHRyYW5zbGF0ZSgpO1xuY29uc3QgYXZhdGFyU3R5bGUgPSB7XG4gIHdpZHRoOiA0OCxcbiAgcGFkZGluZ1JpZ2h0OiAwLFxufTtcblxuY29uc3QgQmFuUm93ID0gKHtcbiAgdCxcbiAgYmFuLFxuICBvblVuYmFuVXNlcixcbn0pID0+IChcbiAgPFRhYmxlUm93PlxuICAgIDxUYWJsZUNlbGwgc3R5bGU9e2F2YXRhclN0eWxlfT5cbiAgICAgIDxBdmF0YXIgdXNlcj17YmFuLnVzZXJ9IC8+XG4gICAgPC9UYWJsZUNlbGw+XG4gICAgPFRhYmxlQ2VsbD5cbiAgICAgIDxVc2VybmFtZSB1c2VyPXtiYW4udXNlcn0gLz5cbiAgICA8L1RhYmxlQ2VsbD5cbiAgICA8VGFibGVDZWxsPlxuICAgICAge21zKGJhbi5kdXJhdGlvbiwgeyBsb25nOiB0cnVlIH0pfVxuICAgIDwvVGFibGVDZWxsPlxuICAgIDxUYWJsZUNlbGw+XG4gICAgICB7YmFuLnJlYXNvbiB8fCAoXG4gICAgICAgIDxlbT57dCgnYWRtaW4uYmFucy5ub1JlYXNvbicpfTwvZW0+XG4gICAgICApfVxuICAgIDwvVGFibGVDZWxsPlxuICAgIDxUYWJsZUNlbGw+XG4gICAgICA8VXNlcm5hbWUgdXNlcj17YmFuLm1vZGVyYXRvcn0gLz5cbiAgICA8L1RhYmxlQ2VsbD5cbiAgICA8VGFibGVDZWxsPlxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwicmFpc2VkXCJcbiAgICAgICAgb25DbGljaz17b25VbmJhblVzZXJ9XG4gICAgICA+XG4gICAgICAgIHt0KCdhZG1pbi5iYW5zLnVuYmFuJyl9XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1RhYmxlQ2VsbD5cbiAgPC9UYWJsZVJvdz5cbik7XG5cbkJhblJvdy5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGJhbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICByZWFzb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbW9kZXJhdG9yOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIG9uVW5iYW5Vc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShCYW5Sb3cpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFByb3BzIGZyb20gJ3JlY29tcG9zZS93aXRoUHJvcHMnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93JztcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsJztcbmltcG9ydCBCYW5Sb3cgZnJvbSAnLi9Sb3cnO1xuXG5jb25zdCBlbmhhbmNlID0gdHJhbnNsYXRlKCk7XG5cbmNvbnN0IEhlYWRlciA9IHdpdGhQcm9wcyh7XG4gIHN0eWxlOiB7XG4gICAgYmFja2dyb3VuZDogJyM5ZDIwNTMnLFxuICAgIHBhZGRpbmc6ICcxMnB4IDI0cHgnLFxuICAgIGxpbmVIZWlnaHQ6ICczNXB4JyxcbiAgfSxcbn0pKCdkaXYnKTtcblxuY29uc3QgRmlsdGVyID0gd2l0aFByb3BzKHtcbiAgc3R5bGU6IHtcbiAgICBiYWNrZ3JvdW5kOiAnIzYzMTAzMicsXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICBib3JkZXI6IDAsXG4gICAgbWFyZ2luTGVmdDogMTIsXG4gICAgcGFkZGluZ0xlZnQ6IDEyLFxuICAgIGhlaWdodDogMzUsXG4gIH0sXG4gIHR5cGU6ICd0ZXh0Jyxcbn0pKCdpbnB1dCcpO1xuXG5jb25zdCBCYW5zTGlzdCA9ICh7XG4gIHQsXG4gIGJhbnMsXG4gIG9uVW5iYW5Vc2VyLFxufSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPEhlYWRlcj5cbiAgICAgIDxzcGFuPk1hbmFnaW5nIEJhbnM6PC9zcGFuPlxuICAgICAgPHNwYW4gc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX0+XG4gICAgICAgIEZpbHRlciBVc2VyOlxuICAgICAgICA8RmlsdGVyIC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9IZWFkZXI+XG4gICAgPFRhYmxlPlxuICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgIDxUYWJsZUNlbGwgLz5cbiAgICAgICAgICA8VGFibGVDZWxsPnt0KCdhZG1pbi5iYW5zLnVzZXInKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPnt0KCdhZG1pbi5iYW5zLmR1cmF0aW9uJyl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbD57dCgnYWRtaW4uYmFucy5yZWFzb24nKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPnt0KCdhZG1pbi5iYW5zLmJhbm5lZEJ5Jyl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbD57dCgnYWRtaW4uYmFucy5hY3Rpb25zJyl9PC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlSGVhZD5cbiAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgIHtiYW5zLm1hcChiYW4gPT4gKFxuICAgICAgICAgIDxCYW5Sb3dcbiAgICAgICAgICAgIGtleT17YmFuLnVzZXIuX2lkfVxuICAgICAgICAgICAgYmFuPXtiYW59XG4gICAgICAgICAgICBvblVuYmFuVXNlcj17KCkgPT4gb25VbmJhblVzZXIoYmFuLnVzZXIpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZUJvZHk+XG4gICAgPC9UYWJsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbkJhbnNMaXN0LnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYmFuczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG9uVW5iYW5Vc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShCYW5zTGlzdCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vdGQgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Nb3RkJztcblxuY29uc3QgTWFpbiA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8cD5cbiAgICAgIE5vdGUgdGhhdCB0aGUgYWRtaW4gaW50ZXJmYWNlIGlzIG5vdCB5ZXQgZG9uZSBhbmQgbW9zdCB0aGluZ3MgZG8gbm90IHdvcmsuXG4gICAgICBZb3UgY2FuLCBob3dldmVyLCBjb25maWd1cmUgdGhlIG1lc3NhZ2Ugb2YgdGhlIGRheSEgOlBcbiAgICA8L3A+XG4gICAgPE1vdGQgLz5cbiAgPC9kaXY+XG4pO1xuXG5NYWluLnByb3BUeXBlcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICdyZWNvbXBvc2UvY29tcG9zZSc7XG5pbXBvcnQgd2l0aFN0YXRlIGZyb20gJ3JlY29tcG9zZS93aXRoU3RhdGUnO1xuaW1wb3J0IHdpdGhQcm9wcyBmcm9tICdyZWNvbXBvc2Uvd2l0aFByb3BzJztcbmltcG9ydCB3aXRoSGFuZGxlcnMgZnJvbSAncmVjb21wb3NlL3dpdGhIYW5kbGVycyc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQnO1xuaW1wb3J0IHBhcnNlIGZyb20gJ3Utd2F2ZS1wYXJzZS1jaGF0LW1hcmt1cCc7XG5pbXBvcnQgY29tcGlsZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0NoYXQvTWFya3VwL2NvbXBpbGUnO1xuXG5jb25zdCBlbmhhbmNlID0gY29tcG9zZShcbiAgd2l0aFN0YXRlKCduZXdNb3RkJywgJ3NldE1vdGQnLCAoeyBtb3RkIH0pID0+IG1vdGQpLFxuICB3aXRoU3RhdGUoJ2V4cGFuZGVkJywgJ3NldEV4cGFuZGVkJywgZmFsc2UpLFxuICB3aXRoUHJvcHMoKHByb3BzKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgbmV3TW90ZCwgY29tcGlsZU9wdGlvbnMsIGV4cGFuZGVkLCBzZXRFeHBhbmRlZCxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGFyc2VkTW90ZDogY29tcGlsZShwYXJzZShuZXdNb3RkKSwgY29tcGlsZU9wdGlvbnMpLFxuICAgICAgb25FeHBhbmQ6ICgpID0+IHNldEV4cGFuZGVkKCFleHBhbmRlZCksXG4gICAgfTtcbiAgfSksXG4gIHdpdGhIYW5kbGVycyh7XG4gICAgb25DaGFuZ2U6ICh7IHNldE1vdGQgfSkgPT4gKGV2ZW50KSA9PiB7XG4gICAgICBzZXRNb3RkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgICBvblN1Ym1pdDogcHJvcHMgPT4gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB7IG9uU2V0TW90ZCwgbmV3TW90ZCwgc2V0RXhwYW5kZWQgfSA9IHByb3BzO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb25TZXRNb3RkKG5ld01vdGQpO1xuICAgICAgc2V0RXhwYW5kZWQoZmFsc2UpO1xuICAgIH0sXG4gIH0pLFxuKTtcblxuZnVuY3Rpb24gYXV0b0ZvY3VzKGVsKSB7XG4gIGlmIChlbCkgZWwuZm9jdXMoKTtcbn1cblxuY29uc3QgTW90ZCA9ICh7XG4gIGNhbkNoYW5nZU1vdGQsXG4gIG5ld01vdGQsXG4gIHBhcnNlZE1vdGQsXG4gIGV4cGFuZGVkLFxuICBvbkNoYW5nZSxcbiAgb25TdWJtaXQsXG4gIG9uRXhwYW5kLFxufSkgPT4gKFxuICA8Q2FyZCBjbGFzc05hbWU9XCJBZG1pbk1vdGRcIj5cbiAgICA8Q2FyZEhlYWRlclxuICAgICAgdGl0bGU9XCJNZXNzYWdlIG9mIHRoZSBEYXlcIlxuICAgICAgYWN0aW9uPXtjYW5DaGFuZ2VNb3RkICYmIChcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17b25FeHBhbmR9PlxuICAgICAgICAgIDxFZGl0SWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICApfVxuICAgIC8+XG4gICAgPENhcmRDb250ZW50PntwYXJzZWRNb3RkfTwvQ2FyZENvbnRlbnQ+XG4gICAgPENvbGxhcHNlIGluPXtleHBhbmRlZH0gdW5tb3VudE9uRXhpdD5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxDYXJkQ29udGVudCBzdHlsZT17eyBwYWRkaW5nVG9wOiAwIH19PlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiQWRtaW5Nb3RkLWZpZWxkXCJcbiAgICAgICAgICAgIHJvd3M9ezR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17bmV3TW90ZH1cbiAgICAgICAgICAgIHJlZj17YXV0b0ZvY3VzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJyYWlzZWRcIlxuICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBTYXZlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9Db2xsYXBzZT5cbiAgPC9DYXJkPlxuKTtcblxuTW90ZC5wcm9wVHlwZXMgPSB7XG4gIGNhbkNoYW5nZU1vdGQ6IFByb3BUeXBlcy5ib29sLFxuICBuZXdNb3RkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHBhcnNlZE1vdGQ6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkV4cGFuZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbk1vdGQuZGVmYXVsdFByb3BzID0ge1xuICBjYW5DaGFuZ2VNb3RkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2UoTW90ZCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2gvZGVib3VuY2UnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAncmVjb21wb3NlL2NvbXBvc2UnO1xuaW1wb3J0IHdpdGhQcm9wcyBmcm9tICdyZWNvbXBvc2Uvd2l0aFByb3BzJztcbmltcG9ydCB3aXRoSGFuZGxlcnMgZnJvbSAncmVjb21wb3NlL3dpdGhIYW5kbGVycyc7XG5cbmNvbnN0IGVuaGFuY2UgPSBjb21wb3NlKFxuICB3aXRoUHJvcHMoKHsgb25GaWx0ZXIgfSkgPT4gKHtcbiAgICBvbkZpbHRlckRlYm91bmNlZDogZGVib3VuY2Uob25GaWx0ZXIsIDIwMCksXG4gIH0pKSxcbiAgd2l0aEhhbmRsZXJzKHtcbiAgICBvbkNoYW5nZTogKHsgb25GaWx0ZXJEZWJvdW5jZWQgfSkgPT4gKFxuICAgICAgZXZlbnQgPT4gb25GaWx0ZXJEZWJvdW5jZWQoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICksXG4gIH0pLFxuKTtcblxuY29uc3QgRmlsdGVyID0gKHsgb25DaGFuZ2UgfSkgPT4gKFxuICA8aW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgY2xhc3NOYW1lPVwiQWRtaW5Vc2VySGVhZGVyLWZpbHRlclwiXG4gICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAvPlxuKTtcbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgQ29ubmVjdGVkRmlsdGVyID0gZW5oYW5jZShGaWx0ZXIpO1xuXG5jb25zdCBIZWFkZXIgPSAoeyBvbkZpbHRlciB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiQWRtaW5Vc2VySGVhZGVyXCI+XG4gICAgPHNwYW4+TWFuYWdpbmcgVXNlcnM6PC9zcGFuPlxuICAgIDxzcGFuPlxuICAgICAgRmlsdGVyIFVzZXI6XG4gICAgICA8Q29ubmVjdGVkRmlsdGVyIG9uRmlsdGVyPXtvbkZpbHRlcn0gLz5cbiAgICA8L3NwYW4+XG4gIDwvZGl2PlxuKTtcbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIG9uRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgd2l0aFByb3BzIGZyb20gJ3JlY29tcG9zZS93aXRoUHJvcHMnO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJ2xvZGFzaC91bmlxdWVJZCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJztcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgTXVpVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQXZhdGFyJztcbmltcG9ydCBVc2VybmFtZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJuYW1lL1dpdGhDYXJkJztcbmltcG9ydCBVc2VyUm9sZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1VzZXJSb2xlJztcbmltcG9ydCBmb3JtYXRKb2luRGF0ZSBmcm9tICcuLi8uLi8uLi91dGlscy9mb3JtYXRKb2luRGF0ZSc7XG5cbmNvbnN0IGFjdGlvbnNTdHlsZSA9IHtcbiAgd2lkdGg6IDQ4LFxuICBwYWRkaW5nTGVmdDogMCxcbiAgcGFkZGluZ1JpZ2h0OiAwLFxufTtcblxuY29uc3QgVGFibGVDZWxsID0gd2l0aFByb3BzKCh7IGNsYXNzTmFtZSB9KSA9PiAoe1xuICBjbGFzc05hbWU6IGN4KCdBZG1pblVzZXJSb3ctY2VsbCcsIGNsYXNzTmFtZSksXG59KSkoTXVpVGFibGVDZWxsKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG1lbnUgPSB1bmlxdWVJZCgnbWVudScpO1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgdXNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIG9wZW46IGZhbHNlLFxuICAgIGFuY2hvckVsOiBudWxsLFxuICB9O1xuXG4gIGhhbmRsZU9wZW5NZW51ID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IHRydWUsIGFuY2hvckVsOiBldmVudC5jdXJyZW50VGFyZ2V0IH0pO1xuICB9O1xuXG4gIGhhbmRsZUNsb3NlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZmFsc2UsIGFuY2hvckVsOiBudWxsIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvcGVuLCBhbmNob3JFbCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPFRhYmxlUm93IGNsYXNzTmFtZT1cIkFkbWluVXNlclJvd1wiPlxuICAgICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT1cIkFkbWluVXNlclJvdy1hdmF0YXJcIj5cbiAgICAgICAgICA8QXZhdGFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgIDxVc2VybmFtZSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICB7Zm9ybWF0Sm9pbkRhdGUodXNlci5jcmVhdGVkQXQsICdkYXRlJyl9XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8VGFibGVDZWxsPkVtYWlsPC9UYWJsZUNlbGw+XG4gICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAge3VzZXIucm9sZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAvKiBPbmx5IHNob3cgdGhlIHByaW1hcnkgcm9sZSBoZXJlIGZvciBzcGFjZSByZWFzb25zLiAqL1xuICAgICAgICAgICAgPFVzZXJSb2xlIHJvbGVOYW1lPXt1c2VyLnJvbGVzWzBdfSAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8VGFibGVDZWxsIHN0eWxlPXthY3Rpb25zU3R5bGV9PlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW5NZW51fVxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgYXJpYS1vd25zPXtvcGVuID8gdGhpcy5tZW51IDogbnVsbH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TW9yZVZlcnRJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICBpZD17dGhpcy5tZW51fVxuICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlQ2xvc2VNZW51fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxNZW51SXRlbT5CYW48L01lbnVJdGVtPlxuICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8L1RhYmxlUm93PlxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgdHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5pbXBvcnQgVGFibGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGUnO1xuaW1wb3J0IFRhYmxlSGVhZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWQnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHknO1xuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlRm9vdGVyJztcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uJztcbmltcG9ydCBUYWJsZVJvdyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvdyc7XG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbCc7XG5pbXBvcnQgVXNlclJvdyBmcm9tICcuL1Jvdyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJztcblxuY29uc3QgZW5oYW5jZSA9IHRyYW5zbGF0ZSgpO1xuXG5jb25zdCBVc2Vyc0xpc3QgPSAoe1xuICB0LFxuICBwYWdlU2l6ZSxcbiAgY3VycmVudFBhZ2UsXG4gIHRvdGFsVXNlcnMsXG4gIHVzZXJzLFxuICBvbkNoYW5nZVBhZ2UsXG4gIG9uRmlsdGVyLFxufSkgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPEhlYWRlciBvbkZpbHRlcj17b25GaWx0ZXJ9IC8+XG4gICAgPFRhYmxlPlxuICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgPFRhYmxlUm93IGNsYXNzTmFtZT1cIkFkbWluVXNlclJvd1wiPlxuICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwiQWRtaW5Vc2VyUm93LWF2YXRhclwiIC8+XG4gICAgICAgICAgPFRhYmxlQ2VsbD57dCgnYWRtaW4udXNlcnMudXNlcicpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGw+e3QoJ2FkbWluLnVzZXJzLmpvaW5lZEF0Jyl9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgPFRhYmxlQ2VsbD57dCgnYWRtaW4udXNlcnMuZW1haWwnKX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICA8VGFibGVDZWxsPnt0KCdhZG1pbi51c2Vycy5yb2xlcycpfTwvVGFibGVDZWxsPlxuICAgICAgICAgIDxUYWJsZUNlbGwgLz5cbiAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IChcbiAgICAgICAgICA8VXNlclJvdyB1c2VyPXt1c2VyfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgPFRhYmxlRm9vdGVyPlxuICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxuICAgICAgICAgICAgY291bnQ9e3RvdGFsVXNlcnN9XG4gICAgICAgICAgICByb3dzUGVyUGFnZT17cGFnZVNpemV9XG4gICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1twYWdlU2l6ZV19XG4gICAgICAgICAgICBwYWdlPXtjdXJyZW50UGFnZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlUGFnZT17b25DaGFuZ2VQYWdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvVGFibGVSb3c+XG4gICAgICA8L1RhYmxlRm9vdGVyPlxuICAgIDwvVGFibGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5Vc2Vyc0xpc3QucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlU2l6ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBjdXJyZW50UGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0b3RhbFVzZXJzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHVzZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2VQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2UoVXNlcnNMaXN0KTtcbiIsImV4cG9ydCBjb25zdCBUUkFOU0lUSU9OID0gJ3V3YXZlL2FkbWluL3ZpZXcvVFJBTlNJVElPTic7XG5cbmV4cG9ydCBjb25zdCBTRVRfVVNFUlNfRklMVEVSID0gJ3V3YXZlL2FkbWluL3VzZXJzL1NFVF9VU0VSU19GSUxURVInO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUlNfU1RBUlQgPSAndXdhdmUvYWRtaW4vdXNlcnMvTE9BRF9VU0VSU19TVEFSVCc7XG5leHBvcnQgY29uc3QgTE9BRF9VU0VSU19DT01QTEVURSA9ICd1d2F2ZS9hZG1pbi91c2Vycy9MT0FEX1VTRVJTX0NPTVBMRVRFJztcbmV4cG9ydCBjb25zdCBMT0FEX0JBTlNfU1RBUlQgPSAndXdhdmUvYWRtaW4vYmFucy9MT0FEX0JBTlNfU1RBUlQnO1xuZXhwb3J0IGNvbnN0IExPQURfQkFOU19DT01QTEVURSA9ICd1d2F2ZS9hZG1pbi9iYW5zL0xPQURfQkFOU19DT01QTEVURSc7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAncmVjb21wb3NlL2NvbXBvc2UnO1xuaW1wb3J0IGdldENvbnRleHQgZnJvbSAncmVjb21wb3NlL2dldENvbnRleHQnO1xuaW1wb3J0IGxpZmVjeWNsZSBmcm9tICdyZWNvbXBvc2UvbGlmZWN5Y2xlJztcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQWRtaW5BcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BZG1pbkFwcCc7XG5pbXBvcnQgYWRtaW5SZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcbmltcG9ydCB7IHRyYW5zaXRpb24gfSBmcm9tICcuLi9hY3Rpb25zL3ZpZXcnO1xuaW1wb3J0IHsgY3VycmVudFZpZXdTZWxlY3RvciB9IGZyb20gJy4uL3NlbGVjdG9ycy92aWV3U2VsZWN0b3JzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgY3VycmVudFZpZXc6IGN1cnJlbnRWaWV3U2VsZWN0b3IsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBvblRyYW5zaXRpb246IHRyYW5zaXRpb24sXG59O1xuXG5mdW5jdGlvbiBoYXNBZG1pblN0YXRlKHN0b3JlKSB7XG4gIGNvbnN0IHN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcblxuICByZXR1cm4gc3RhdGUgJiYgISFzdGF0ZS5hZG1pbjtcbn1cblxuZnVuY3Rpb24gbW91bnRBZG1pblJlZHVjZXIoc3RvcmUpIHtcbiAgc3RvcmUubW91bnQoJ2FkbWluJywgYWRtaW5SZWR1Y2VyKTtcbn1cblxuZnVuY3Rpb24gbW91bnRBZG1pblJlZHVjZXJPbmNlKHN0b3JlKSB7XG4gIGlmICghaGFzQWRtaW5TdGF0ZShzdG9yZSkpIHtcbiAgICBtb3VudEFkbWluUmVkdWNlcihzdG9yZSk7XG4gIH1cbn1cblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGdldENvbnRleHQoeyBzdG9yZTogUHJvcFR5cGVzLm9iamVjdCB9KSxcbiAgbGlmZWN5Y2xlKHtcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5zdG9yZSkge1xuICAgICAgICBtb3VudEFkbWluUmVkdWNlck9uY2UodGhpcy5wcm9wcy5zdG9yZSk7XG4gICAgICB9XG4gICAgfSxcbiAgfSksXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShBZG1pbkFwcCk7XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAncmVjb21wb3NlL2NvbXBvc2UnO1xuaW1wb3J0IGxpZmVjeWNsZSBmcm9tICdyZWNvbXBvc2UvbGlmZWN5Y2xlJztcbmltcG9ydCB7IGxvYWRCYW5zLCB1bmJhblVzZXJBbmRSZWxvYWQgfSBmcm9tICcuLi9hY3Rpb25zL2JhbnMnO1xuaW1wb3J0IEJhbnNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQmFuc0xpc3QnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBiYW5zOiBzdGF0ZS5hZG1pbi5iYW5zLmJhbnMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBvbkxvYWRCYW5zOiBsb2FkQmFucyxcbiAgb25VbmJhblVzZXI6IHVuYmFuVXNlckFuZFJlbG9hZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpLFxuICBsaWZlY3ljbGUoe1xuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkxvYWRCYW5zKCk7XG4gICAgfSxcbiAgfSksXG4pKEJhbnNMaXN0KTtcbiIsImltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTW90ZCBmcm9tICcuLi9jb21wb25lbnRzL01vdGQnO1xuaW1wb3J0IHsgc2V0TW90ZCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvQ2hhdEFjdGlvbkNyZWF0b3JzJztcbmltcG9ydCB7XG4gIHJhd01vdGRTZWxlY3RvcixcbiAgbWFya3VwQ29tcGlsZXJPcHRpb25zU2VsZWN0b3IsXG59IGZyb20gJy4uLy4uL3NlbGVjdG9ycy9jaGF0U2VsZWN0b3JzJztcbmltcG9ydCB7IGNhbkNoYW5nZU1vdGRTZWxlY3RvciB9IGZyb20gJy4uL3NlbGVjdG9ycy9hdXRoU2VsZWN0b3JzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yKHtcbiAgbW90ZDogcmF3TW90ZFNlbGVjdG9yLFxuICBjb21waWxlT3B0aW9uczogbWFya3VwQ29tcGlsZXJPcHRpb25zU2VsZWN0b3IsXG4gIGNhbkNoYW5nZU1vdGQ6IGNhbkNoYW5nZU1vdGRTZWxlY3Rvcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIG9uU2V0TW90ZDogc2V0TW90ZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE1vdGQpO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBjb21wb3NlIGZyb20gJ3JlY29tcG9zZS9jb21wb3NlJztcbmltcG9ydCB3aXRoUHJvcHMgZnJvbSAncmVjb21wb3NlL3dpdGhQcm9wcyc7XG5pbXBvcnQgbGlmZWN5Y2xlIGZyb20gJ3JlY29tcG9zZS9saWZlY3ljbGUnO1xuaW1wb3J0IFVzZXJzTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJzTGlzdCc7XG5pbXBvcnQge1xuICBsb2FkVXNlcnMsXG4gIHNldFVzZXJzRmlsdGVyLFxufSBmcm9tICcuLi9hY3Rpb25zL3VzZXJzJztcbmltcG9ydCB7XG4gIHBhZ2VTZWxlY3RvcixcbiAgcGFnZVNpemVTZWxlY3RvcixcbiAgdG90YWxVc2Vyc1NlbGVjdG9yLFxuICB1c2Vyc1NlbGVjdG9yLFxufSBmcm9tICcuLi9zZWxlY3RvcnMvdXNlclNlbGVjdG9ycyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3Rvcih7XG4gIGN1cnJlbnRQYWdlOiBwYWdlU2VsZWN0b3IsXG4gIHBhZ2VTaXplOiBwYWdlU2l6ZVNlbGVjdG9yLFxuICB0b3RhbFVzZXJzOiB0b3RhbFVzZXJzU2VsZWN0b3IsXG4gIHVzZXJzOiB1c2Vyc1NlbGVjdG9yLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgb25Mb2FkVXNlcnM6IGxvYWRVc2VycyxcbiAgb25GaWx0ZXI6IHNldFVzZXJzRmlsdGVyLFxufTtcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpLFxuXG4gIHdpdGhQcm9wcyhwcm9wcyA9PiAoe1xuICAgIG9uQ2hhbmdlUGFnZTogKGV2ZW50LCBwYWdlKSA9PiB7XG4gICAgICBjb25zdCB7IHBhZ2VTaXplLCBvbkxvYWRVc2VycyB9ID0gcHJvcHM7XG5cbiAgICAgIG9uTG9hZFVzZXJzKHsgb2Zmc2V0OiBwYWdlICogcGFnZVNpemUsIGxpbWl0OiBwYWdlU2l6ZSB9KTtcbiAgICB9LFxuICAgIG9uRmlsdGVyOiAoZmlsdGVyKSA9PiB7XG4gICAgICBjb25zdCB7IHBhZ2VTaXplLCBvbkxvYWRVc2Vycywgb25GaWx0ZXIgfSA9IHByb3BzO1xuXG4gICAgICBvbkZpbHRlcihmaWx0ZXIpO1xuICAgICAgb25Mb2FkVXNlcnMoeyBvZmZzZXQ6IDAsIGxpbWl0OiBwYWdlU2l6ZSB9KTtcbiAgICB9LFxuICB9KSksXG5cbiAgbGlmZWN5Y2xlKHtcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIGNvbnN0IHsgb25DaGFuZ2VQYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBvbkNoYW5nZVBhZ2UobnVsbCwgMCk7XG4gICAgfSxcbiAgfSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBlbmhhbmNlKFVzZXJzTGlzdCk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2luZGV4LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcyEuL2luZGV4LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi9pbmRleC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQge1xuICBMT0FEX0JBTlNfU1RBUlQsXG4gIExPQURfQkFOU19DT01QTEVURSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjdXJyZW50UGFnZToge1xuICAgIG9mZnNldDogMCxcbiAgICBsaW1pdDogNTAsXG4gIH0sXG4gIGJhbnM6IFtdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgTE9BRF9CQU5TX1NUQVJUOlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIGNhc2UgTE9BRF9CQU5TX0NPTVBMRVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGJhbnM6IGFjdGlvbi5wYXlsb2FkLmJhbnMsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IHVzZXJzIGZyb20gJy4vdXNlcnMnO1xuaW1wb3J0IGJhbnMgZnJvbSAnLi9iYW5zJztcbmltcG9ydCB2aWV3IGZyb20gJy4vdmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHVzZXJzLFxuICBiYW5zLFxuICB2aWV3LFxufSk7XG4iLCJpbXBvcnQge1xuICBTRVRfVVNFUlNfRklMVEVSLFxuICBMT0FEX1VTRVJTX1NUQVJULFxuICBMT0FEX1VTRVJTX0NPTVBMRVRFLFxufSBmcm9tICcuLi9jb25zdGFudHMvQWN0aW9uVHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGZpbHRlcjogbnVsbCxcbiAgY3VycmVudFBhZ2U6IDAsXG4gIHRvdGFsUGFnZXM6IDAsXG4gIHRvdGFsVXNlcnM6IDAsXG4gIHVzZXJzOiBbXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfVVNFUlNfRklMVEVSOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGZpbHRlcjogYWN0aW9uLnBheWxvYWQuZmlsdGVyLFxuICAgICAgfTtcbiAgICBjYXNlIExPQURfVVNFUlNfU1RBUlQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgY2FzZSBMT0FEX1VTRVJTX0NPTVBMRVRFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBhY3Rpb24ucGF5bG9hZC5wYWdlLFxuICAgICAgICB0b3RhbFVzZXJzOiBhY3Rpb24ubWV0YS5yZXN1bHRzLFxuICAgICAgICB0b3RhbFBhZ2VzOiBNYXRoLmNlaWwoYWN0aW9uLm1ldGEucmVzdWx0cyAvIGFjdGlvbi5tZXRhLnBhZ2VTaXplKSxcbiAgICAgICAgdXNlcnM6IGFjdGlvbi5wYXlsb2FkLnVzZXJzLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUUkFOU0lUSU9OIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FjdGlvblR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9ICdtYWluJywgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gVFJBTlNJVElPTikge1xuICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBpc01vZGVyYXRvclNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc2VsZWN0b3JzL3VzZXJTZWxlY3RvcnMnO1xuXG4vLyBUT0RPIHJlcGxhY2Ugd2l0aCBjaGVjayBmb3IgdGhlIGBtb3RkLnNldGAgcm9sZS5cbmV4cG9ydCBjb25zdCBjYW5DaGFuZ2VNb3RkU2VsZWN0b3IgPSBpc01vZGVyYXRvclNlbGVjdG9yO1xuIiwiZXhwb3J0IGRlZmF1bHQgc3RhdGUgPT4gc3RhdGUuYWRtaW47XG4iLCJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCBiYXNlU2VsZWN0b3IgZnJvbSAnLi9iYXNlU2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgcGFnZVNpemVTZWxlY3RvciA9ICgpID0+IDI1O1xuZXhwb3J0IGNvbnN0IHBhZ2VTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBiYXNlU2VsZWN0b3IsXG4gIGJhc2UgPT4gYmFzZS51c2Vycy5jdXJyZW50UGFnZSxcbik7XG5leHBvcnQgY29uc3QgdG90YWxVc2Vyc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIGJhc2VTZWxlY3RvcixcbiAgYmFzZSA9PiBiYXNlLnVzZXJzLnRvdGFsVXNlcnMsXG4pO1xuZXhwb3J0IGNvbnN0IGZpbHRlclNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIGJhc2VTZWxlY3RvcixcbiAgYmFzZSA9PiBiYXNlLnVzZXJzLmZpbHRlcixcbik7XG5cbmV4cG9ydCBjb25zdCB1c2Vyc1NlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIGJhc2VTZWxlY3RvcixcbiAgYmFzZSA9PiBiYXNlLnVzZXJzLnVzZXJzLFxuKTtcbiIsImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yIH0gZnJvbSAncmVzZWxlY3QnO1xuaW1wb3J0IGJhc2VTZWxlY3RvciBmcm9tICcuL2Jhc2VTZWxlY3Rvcic7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgY29uc3QgY3VycmVudFZpZXdTZWxlY3RvciA9IGNyZWF0ZVNlbGVjdG9yKFxuICBiYXNlU2VsZWN0b3IsXG4gIGJhc2UgPT4gYmFzZS52aWV3LFxuKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAncmVjb21wb3NlL2NvbXBvc2UnO1xuaW1wb3J0IHdpdGhQcm9wcyBmcm9tICdyZWNvbXBvc2Uvd2l0aFByb3BzJztcbmltcG9ydCB1c2VyQ2FyZGFibGUgZnJvbSAnLi4vLi4vdXRpbHMvdXNlckNhcmRhYmxlJztcblxuaW1wb3J0IFVzZXJuYW1lQmFzZSBmcm9tICcuJztcblxuY29uc3QgZW5oYW5jZSA9IGNvbXBvc2UoXG4gIHVzZXJDYXJkYWJsZSgpLFxuICB3aXRoUHJvcHMocHJvcHMgPT4gKHtcbiAgICBvblVzZXJuYW1lQ2xpY2soZXZlbnQpIHtcbiAgICAgIGNvbnN0IHsgb3BlblVzZXJDYXJkLCB1c2VyIH0gPSBwcm9wcztcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9wZW5Vc2VyQ2FyZCh1c2VyKTtcbiAgICB9LFxuICB9KSksXG4pO1xuXG5jb25zdCBVc2VybmFtZVdpdGhDYXJkID0gKHsgdXNlciwgb25Vc2VybmFtZUNsaWNrIH0pID0+IChcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25Vc2VybmFtZUNsaWNrfT5cbiAgICA8VXNlcm5hbWVCYXNlIHVzZXI9e3VzZXJ9IC8+XG4gIDwvYnV0dG9uPlxuKTtcblxuVXNlcm5hbWVXaXRoQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25Vc2VybmFtZUNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShVc2VybmFtZVdpdGhDYXJkKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=