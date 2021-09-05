(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history"],{

/***/ "./components/RoomHistory/HistoryList.js":
/*!***********************************************!*\
  !*** ./components/RoomHistory/HistoryList.js ***!
  \***********************************************/
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
/* harmony import */ var _MediaList_BaseMediaList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MediaList/BaseMediaList */ "./components/MediaList/BaseMediaList.js");
/* harmony import */ var _MediaList_Actions_AddToPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MediaList/Actions/AddToPlaylist */ "./components/MediaList/Actions/AddToPlaylist.js");
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Row */ "./components/RoomHistory/Row.js");
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var addMediaActions = function addMediaActions(onOpenAddMediaMenu) {
  return function (media, selection) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MediaList_Actions_AddToPlaylist__WEBPACK_IMPORTED_MODULE_4__["default"], {
      onAdd: function onAdd(position) {
        return onOpenAddMediaMenu(position, media, selection);
      }
    }));
  };
};

var noActions = function noActions() {
  return [];
};

var HistoryList = recompose_withProps__WEBPACK_IMPORTED_MODULE_2___default()(function (_ref) {
  var onOpenAddMediaMenu = _ref.onOpenAddMediaMenu;
  return {
    className: 'RoomHistory-list',
    listComponent: 'div',
    rowComponent: _Row__WEBPACK_IMPORTED_MODULE_5__["default"],
    makeActions: onOpenAddMediaMenu ? addMediaActions(onOpenAddMediaMenu) : noActions
  };
})(_MediaList_BaseMediaList__WEBPACK_IMPORTED_MODULE_3__["default"]);
HistoryList.propTypes = {
  onOpenAddMediaMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
var _default = HistoryList;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(addMediaActions, "addMediaActions", "/Users/jneen/src/dj/ui/components/RoomHistory/HistoryList.js");
  reactHotLoader.register(noActions, "noActions", "/Users/jneen/src/dj/ui/components/RoomHistory/HistoryList.js");
  reactHotLoader.register(HistoryList, "HistoryList", "/Users/jneen/src/dj/ui/components/RoomHistory/HistoryList.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/RoomHistory/HistoryList.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/RoomHistory/Row.js":
/*!***************************************!*\
  !*** ./components/RoomHistory/Row.js ***!
  \***************************************/
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
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-dnd */ "../node_modules/react-dnd/lib/index.js");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dnd-html5-backend */ "../node_modules/react-dnd-html5-backend/lib/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _constants_DDItemTypes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../constants/DDItemTypes */ "./constants/DDItemTypes.js");
/* harmony import */ var _MediaList_Actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../MediaList/Actions */ "./components/MediaList/Actions.js");
/* harmony import */ var _SongTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SongTitle */ "./components/SongTitle/index.js");
/* harmony import */ var _TimeAgo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../TimeAgo */ "./components/TimeAgo/index.js");
/* harmony import */ var _Votes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Votes */ "./components/RoomHistory/Votes.js");








(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};












var inSelection = function inSelection(selection, media) {
  return selection.some(function (item) {
    return item._id === media._id;
  });
};

var mediaSource = {
  beginDrag: function beginDrag(_ref) {
    var selection = _ref.selection,
        media = _ref.media;
    return {
      media: inSelection(selection, media.media) ? selection : [media.media]
    };
  }
};

var collect = function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
};

var enhance = Object(react_dnd__WEBPACK_IMPORTED_MODULE_10__["DragSource"])(_constants_DDItemTypes__WEBPACK_IMPORTED_MODULE_12__["MEDIA"], mediaSource, collect);

var HistoryRow = /*#__PURE__*/function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(HistoryRow, _React$Component);

  var _super = _createSuper(HistoryRow);

  function HistoryRow() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HistoryRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "state", {
      showActions: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleMouseEnter", function () {
      _this.setState({
        showActions: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleMouseLeave", function () {
      _this.setState({
        showActions: false
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleDoubleClick", function () {
      var _this$props = _this.props,
          onOpenPreviewMediaDialog = _this$props.onOpenPreviewMediaDialog,
          media = _this$props.media;
      onOpenPreviewMediaDialog(media.media);
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this), "handleKeyPress", function (event) {
      var onClick = _this.props.onClick;

      if (event.code === 'Space') {
        onClick();
      }
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HistoryRow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connectDragPreview = this.props.connectDragPreview;
      connectDragPreview(Object(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_11__["getEmptyImage"])());
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          historyEntry = _this$props2.media,
          className = _this$props2.className,
          selection = _this$props2.selection,
          selected = _this$props2.selected,
          connectDragSource = _this$props2.connectDragSource,
          makeActions = _this$props2.makeActions,
          onClick = _this$props2.onClick;
      var showActions = this.state.showActions;
      var media = historyEntry.media,
          timestamp = historyEntry.timestamp,
          user = historyEntry.user,
          stats = historyEntry.stats;
      var selectedClass = selected ? 'is-selected' : '';
      var thumbnail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "MediaListRow-thumb"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        className: "MediaListRow-image",
        src: media.thumbnail,
        alt: ""
      }));
      return connectDragSource(
      /*#__PURE__*/
      // See PlaylistManager/Panel/Row.js
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('MediaListRow', 'HistoryRow', className, selectedClass),
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onDoubleClick: this.handleDoubleClick,
        onKeyPress: this.handleKeyPress,
        onClick: onClick
      }, thumbnail, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SongTitle__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: "HistoryRow-song",
        size: "mediaRow",
        artist: media.artist,
        title: media.title
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "HistoryRow-votes"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Votes__WEBPACK_IMPORTED_MODULE_16__["default"], stats)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "HistoryRow-user"
      }, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "HistoryRow-time",
        dateTime: timestamp
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_TimeAgo__WEBPACK_IMPORTED_MODULE_15__["default"], {
        timestamp: timestamp
      })), showActions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_MediaList_Actions__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('MediaListRow-actions', selectedClass),
        selection: selection,
        media: media,
        makeActions: makeActions
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

  return HistoryRow;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(HistoryRow, "propTypes", {
  className: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string,
  connectDragSource: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  connectDragPreview: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func.isRequired,
  media: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  selection: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  onOpenPreviewMediaDialog: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func,
  makeActions: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.func
});

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(HistoryRow, "defaultProps", {
  selected: false
});

var _default = enhance(HistoryRow);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(inSelection, "inSelection", "/Users/jneen/src/dj/ui/components/RoomHistory/Row.js");
  reactHotLoader.register(mediaSource, "mediaSource", "/Users/jneen/src/dj/ui/components/RoomHistory/Row.js");
  reactHotLoader.register(collect, "collect", "/Users/jneen/src/dj/ui/components/RoomHistory/Row.js");
  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/RoomHistory/Row.js");
  reactHotLoader.register(HistoryRow, "HistoryRow", "/Users/jneen/src/dj/ui/components/RoomHistory/Row.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/RoomHistory/Row.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/RoomHistory/Votes.js":
/*!*****************************************!*\
  !*** ./components/RoomHistory/Votes.js ***!
  \*****************************************/
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
/* harmony import */ var _material_ui_icons_ThumbDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/ThumbDown */ "../node_modules/@material-ui/icons/ThumbDown.js");
/* harmony import */ var _material_ui_icons_ThumbDown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbDown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ThumbUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ThumbUp */ "../node_modules/@material-ui/icons/ThumbUp.js");
/* harmony import */ var _material_ui_icons_ThumbUp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ThumbUp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "../node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/FavoriteBorder */ "../node_modules/@material-ui/icons/FavoriteBorder.js");
/* harmony import */ var _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6__);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};









var Votes = function Votes(_ref) {
  var upvotes = _ref.upvotes,
      downvotes = _ref.downvotes,
      favorites = _ref.favorites,
      isUpvote = _ref.isUpvote,
      isDownvote = _ref.isDownvote,
      isFavorite = _ref.isFavorite;
  var CurrentFavoriteIcon = isFavorite ? _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_5___default.a : _material_ui_icons_FavoriteBorder__WEBPACK_IMPORTED_MODULE_6___default.a;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "HistoryVotes AudienceResponse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ResponseButton ResponseButton--static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ResponseButton-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ThumbUp__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('HistoryVotes-icon', isUpvote && 'ResponseButton-icon--upvoted')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ResponseButton-count"
  }, upvotes.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ResponseButton ResponseButton--static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ResponseButton-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CurrentFavoriteIcon, {
    className: "HistoryVotes-icon ResponseButton-icon--favorite"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ResponseButton-count"
  }, favorites.length))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ResponseButton ResponseButton--static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ResponseButton-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ThumbDown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('HistoryVotes-icon', isDownvote && 'ResponseButton-icon--downvoted')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "ResponseButton-count"
  }, downvotes.length))));
};

Votes.propTypes = {
  upvotes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  favorites: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  downvotes: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  isUpvote: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isFavorite: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  isDownvote: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
};
var _default = Votes;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Votes, "Votes", "/Users/jneen/src/dj/ui/components/RoomHistory/Votes.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/RoomHistory/Votes.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/RoomHistory/index.js":
/*!*****************************************!*\
  !*** ./components/RoomHistory/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _Overlay_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Overlay/Header */ "./components/Overlay/Header/index.js");
/* harmony import */ var _Overlay_Content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Overlay/Content */ "./components/Overlay/Content.js");
/* harmony import */ var _HistoryList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HistoryList */ "./components/RoomHistory/HistoryList.js");


var _excluded = ["t", "className", "onCloseOverlay", "onOpenAddMediaMenu", "onOpenPreviewMediaDialog"];

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};








var enhance = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["translate"])();

var RoomHistory = function RoomHistory(_ref) {
  var t = _ref.t,
      className = _ref.className,
      onCloseOverlay = _ref.onCloseOverlay,
      onOpenAddMediaMenu = _ref.onOpenAddMediaMenu,
      onOpenPreviewMediaDialog = _ref.onOpenPreviewMediaDialog,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('RoomHistory', className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Overlay_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    direction: "top",
    className: "AppRow AppRow--top",
    title: t('history.title'),
    onCloseOverlay: onCloseOverlay
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Overlay_Content__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "RoomHistory-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_HistoryList__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    onOpenAddMediaMenu: onOpenAddMediaMenu,
    onOpenPreviewMediaDialog: onOpenPreviewMediaDialog
  }, props))));
};

RoomHistory.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  onCloseOverlay: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onOpenAddMediaMenu: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onOpenPreviewMediaDialog: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};

var _default = enhance(RoomHistory);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(enhance, "enhance", "/Users/jneen/src/dj/ui/components/RoomHistory/index.js");
  reactHotLoader.register(RoomHistory, "RoomHistory", "/Users/jneen/src/dj/ui/components/RoomHistory/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/RoomHistory/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/TimeAgo/index.js":
/*!*************************************!*\
  !*** ./components/TimeAgo/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "../node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ms */ "../node_modules/ms/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_timed__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/timed */ "./utils/timed.js");


(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};






 // Bit weird to do it like this perhaps, convert to an english string first and
// then translate afterwards.

function translateMs(str) {
  // `ms` output of the form "3 hours"
  var _str$split = str.split(' '),
      _str$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_str$split, 2),
      count = _str$split2[0],
      key = _str$split2[1];

  return {
    key: "".concat(key.replace(/s$/, ''), "s"),
    count: parseInt(count, 10)
  };
}

var TimeAgo = function TimeAgo(_ref) {
  var t = _ref.t,
      currentTime = _ref.currentTime,
      timestamp = _ref.timestamp;
  var secondsAgo = Math.max(0, Math.floor((currentTime - timestamp) / 1000));
  var msString = ms__WEBPACK_IMPORTED_MODULE_5___default()(secondsAgo * 1000, {
    "long": true
  });

  var _translateMs = translateMs(msString),
      key = _translateMs.key,
      count = _translateMs.count;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, t('timeAgo.format', {
    time: t("timeAgo.".concat(key), {
      count: count,
      defaultValue: msString
    })
  }));
};

TimeAgo.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  currentTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  timestamp: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

var _default = recompose_compose__WEBPACK_IMPORTED_MODULE_4___default()(Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["translate"])(), Object(_utils_timed__WEBPACK_IMPORTED_MODULE_6__["default"])())(TimeAgo);

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(translateMs, "translateMs", "/Users/jneen/src/dj/ui/components/TimeAgo/index.js");
  reactHotLoader.register(TimeAgo, "TimeAgo", "/Users/jneen/src/dj/ui/components/TimeAgo/index.js");
  reactHotLoader.register(_default, "default", "/Users/jneen/src/dj/ui/components/TimeAgo/index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Jvb21IaXN0b3J5L0hpc3RvcnlMaXN0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbUhpc3RvcnkvUm93LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUm9vbUhpc3RvcnkvVm90ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Sb29tSGlzdG9yeS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RpbWVBZ28vaW5kZXguanMiXSwibmFtZXMiOlsiYWRkTWVkaWFBY3Rpb25zIiwib25PcGVuQWRkTWVkaWFNZW51IiwibWVkaWEiLCJzZWxlY3Rpb24iLCJwb3NpdGlvbiIsIm5vQWN0aW9ucyIsIkhpc3RvcnlMaXN0Iiwid2l0aFByb3BzIiwiY2xhc3NOYW1lIiwibGlzdENvbXBvbmVudCIsInJvd0NvbXBvbmVudCIsIkhpc3RvcnlSb3ciLCJtYWtlQWN0aW9ucyIsIkJhc2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImluU2VsZWN0aW9uIiwic29tZSIsIml0ZW0iLCJfaWQiLCJtZWRpYVNvdXJjZSIsImJlZ2luRHJhZyIsImNvbGxlY3QiLCJjb25uZWN0IiwiY29ubmVjdERyYWdTb3VyY2UiLCJkcmFnU291cmNlIiwiY29ubmVjdERyYWdQcmV2aWV3IiwiZHJhZ1ByZXZpZXciLCJlbmhhbmNlIiwiRHJhZ1NvdXJjZSIsIk1FRElBIiwic2hvd0FjdGlvbnMiLCJzZXRTdGF0ZSIsInByb3BzIiwib25PcGVuUHJldmlld01lZGlhRGlhbG9nIiwiZXZlbnQiLCJvbkNsaWNrIiwiY29kZSIsImdldEVtcHR5SW1hZ2UiLCJoaXN0b3J5RW50cnkiLCJzZWxlY3RlZCIsInN0YXRlIiwidGltZXN0YW1wIiwidXNlciIsInN0YXRzIiwic2VsZWN0ZWRDbGFzcyIsInRodW1ibmFpbCIsImN4IiwiaGFuZGxlTW91c2VFbnRlciIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVEb3VibGVDbGljayIsImhhbmRsZUtleVByZXNzIiwiYXJ0aXN0IiwidGl0bGUiLCJ1c2VybmFtZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwic3RyaW5nIiwib2JqZWN0IiwiYm9vbCIsImFycmF5IiwiVm90ZXMiLCJ1cHZvdGVzIiwiZG93bnZvdGVzIiwiZmF2b3JpdGVzIiwiaXNVcHZvdGUiLCJpc0Rvd252b3RlIiwiaXNGYXZvcml0ZSIsIkN1cnJlbnRGYXZvcml0ZUljb24iLCJGYXZvcml0ZWRJY29uIiwiRmF2b3JpdGVJY29uIiwibGVuZ3RoIiwidHJhbnNsYXRlIiwiUm9vbUhpc3RvcnkiLCJ0Iiwib25DbG9zZU92ZXJsYXkiLCJ0cmFuc2xhdGVNcyIsInN0ciIsInNwbGl0IiwiY291bnQiLCJrZXkiLCJyZXBsYWNlIiwicGFyc2VJbnQiLCJUaW1lQWdvIiwiY3VycmVudFRpbWUiLCJzZWNvbmRzQWdvIiwiTWF0aCIsIm1heCIsImZsb29yIiwibXNTdHJpbmciLCJtcyIsInRpbWUiLCJkZWZhdWx0VmFsdWUiLCJudW1iZXIiLCJjb21wb3NlIiwidGltZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsa0JBQWtCO0FBQUEsU0FBSSxVQUFDQyxLQUFELEVBQVFDLFNBQVI7QUFBQSx3QkFDNUMsMkRBQUMsNENBQUQsQ0FBTyxRQUFQLHFCQUNFLDJEQUFDLHdFQUFEO0FBQXFCLFdBQUssRUFBRSxlQUFBQyxRQUFRO0FBQUEsZUFBSUgsa0JBQWtCLENBQUNHLFFBQUQsRUFBV0YsS0FBWCxFQUFrQkMsU0FBbEIsQ0FBdEI7QUFBQTtBQUFwQyxNQURGLENBRDRDO0FBQUEsR0FBSjtBQUFBLENBQTFDOztBQU1BLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTSxFQUFOO0FBQUEsQ0FBbEI7O0FBRUEs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LCtEQUFTLEVBRFcsRUFFcEJ1Qiw0REFBSyxFQUZlLENBQVAsQ0FHYlosT0FIYSxDOztBQUFBOzs7Ozs7Ozs7OzBCQS9CTlAsVzswQkFTSE8sTyIsImZpbGUiOiJoaXN0b3J5X2Rldi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHdpdGhQcm9wcyBmcm9tICdyZWNvbXBvc2Uvd2l0aFByb3BzJztcbmltcG9ydCBCYXNlIGZyb20gJy4uL01lZGlhTGlzdC9CYXNlTWVkaWFMaXN0JztcbmltcG9ydCBBZGRUb1BsYXlsaXN0QWN0aW9uIGZyb20gJy4uL01lZGlhTGlzdC9BY3Rpb25zL0FkZFRvUGxheWxpc3QnO1xuaW1wb3J0IEhpc3RvcnlSb3cgZnJvbSAnLi9Sb3cnO1xuXG5jb25zdCBhZGRNZWRpYUFjdGlvbnMgPSBvbk9wZW5BZGRNZWRpYU1lbnUgPT4gKG1lZGlhLCBzZWxlY3Rpb24pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxBZGRUb1BsYXlsaXN0QWN0aW9uIG9uQWRkPXtwb3NpdGlvbiA9PiBvbk9wZW5BZGRNZWRpYU1lbnUocG9zaXRpb24sIG1lZGlhLCBzZWxlY3Rpb24pfSAvPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3Qgbm9BY3Rpb25zID0gKCkgPT4gW107XG5cbmNvbnN0IEhpc3RvcnlMaXN0ID0gd2l0aFByb3BzKCh7IG9uT3BlbkFkZE1lZGlhTWVudSB9KSA9PiAoe1xuICBjbGFzc05hbWU6ICdSb29tSGlzdG9yeS1saXN0JyxcbiAgbGlzdENvbXBvbmVudDogJ2RpdicsXG4gIHJvd0NvbXBvbmVudDogSGlzdG9yeVJvdyxcbiAgbWFrZUFjdGlvbnM6IG9uT3BlbkFkZE1lZGlhTWVudVxuICAgID8gYWRkTWVkaWFBY3Rpb25zKG9uT3BlbkFkZE1lZGlhTWVudSlcbiAgICA6IG5vQWN0aW9ucyxcbn0pKShCYXNlKTtcblxuSGlzdG9yeUxpc3QucHJvcFR5cGVzID0ge1xuICBvbk9wZW5BZGRNZWRpYU1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5TGlzdDtcbiIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRHJhZ1NvdXJjZSB9IGZyb20gJ3JlYWN0LWRuZCc7XG5pbXBvcnQgeyBnZXRFbXB0eUltYWdlIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnO1xuaW1wb3J0IHsgTUVESUEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvRERJdGVtVHlwZXMnO1xuXG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuLi9NZWRpYUxpc3QvQWN0aW9ucyc7XG5pbXBvcnQgU29uZ1RpdGxlIGZyb20gJy4uL1NvbmdUaXRsZSc7XG5pbXBvcnQgVGltZUFnbyBmcm9tICcuLi9UaW1lQWdvJztcblxuaW1wb3J0IEhpc3RvcnlWb3RlcyBmcm9tICcuL1ZvdGVzJztcblxuY29uc3QgaW5TZWxlY3Rpb24gPSAoc2VsZWN0aW9uLCBtZWRpYSkgPT4gc2VsZWN0aW9uLnNvbWUoaXRlbSA9PiBpdGVtLl9pZCA9PT0gbWVkaWEuX2lkKTtcblxuY29uc3QgbWVkaWFTb3VyY2UgPSB7XG4gIGJlZ2luRHJhZyh7IHNlbGVjdGlvbiwgbWVkaWEgfSkge1xuICAgIHJldHVybiB7XG4gICAgICBtZWRpYTogaW5TZWxlY3Rpb24oc2VsZWN0aW9uLCBtZWRpYS5tZWRpYSkgPyBzZWxlY3Rpb24gOiBbbWVkaWEubWVkaWFdLFxuICAgIH07XG4gIH0sXG59O1xuXG5jb25zdCBjb2xsZWN0ID0gY29ubmVjdCA9PiAoe1xuICBjb25uZWN0RHJhZ1NvdXJjZTogY29ubmVjdC5kcmFnU291cmNlKCksXG4gIGNvbm5lY3REcmFnUHJldmlldzogY29ubmVjdC5kcmFnUHJldmlldygpLFxufSk7XG5cbmNvbnN0IGVuaGFuY2UgPSBEcmFnU291cmNlKE1FRElBLCBtZWRpYVNvdXJjZSwgY29sbGVjdCk7XG5cbmNsYXNzIEhpc3RvcnlSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25uZWN0RHJhZ1NvdXJjZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBjb25uZWN0RHJhZ1ByZXZpZXc6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgbWVkaWE6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIHNlbGVjdGlvbjogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgb25PcGVuUHJldmlld01lZGlhRGlhbG9nOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBtYWtlQWN0aW9uczogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzZWxlY3RlZDogZmFsc2UsXG4gIH07XG5cbiAgc3RhdGUgPSB7IHNob3dBY3Rpb25zOiBmYWxzZSB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY29ubmVjdERyYWdQcmV2aWV3IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29ubmVjdERyYWdQcmV2aWV3KGdldEVtcHR5SW1hZ2UoKSk7XG4gIH1cblxuICBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWN0aW9uczogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWN0aW9uczogZmFsc2UgfSk7XG4gIH07XG5cbiAgaGFuZGxlRG91YmxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBvbk9wZW5QcmV2aWV3TWVkaWFEaWFsb2csIG1lZGlhIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgb25PcGVuUHJldmlld01lZGlhRGlhbG9nKG1lZGlhLm1lZGlhKTtcbiAgfTtcblxuICBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnKSB7XG4gICAgICBvbkNsaWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtZWRpYTogaGlzdG9yeUVudHJ5LFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgc2VsZWN0aW9uLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBjb25uZWN0RHJhZ1NvdXJjZSxcbiAgICAgIC8vIGFjdGlvbnNcbiAgICAgIG1ha2VBY3Rpb25zLFxuICAgICAgLy8gZXRjXG4gICAgICBvbkNsaWNrLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2hvd0FjdGlvbnMgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBjb25zdCB7XG4gICAgICBtZWRpYSwgdGltZXN0YW1wLCB1c2VyLCBzdGF0cyxcbiAgICB9ID0gaGlzdG9yeUVudHJ5O1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRDbGFzcyA9IHNlbGVjdGVkID8gJ2lzLXNlbGVjdGVkJyA6ICcnO1xuICAgIGNvbnN0IHRodW1ibmFpbCA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWVkaWFMaXN0Um93LXRodW1iXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJNZWRpYUxpc3RSb3ctaW1hZ2VcIlxuICAgICAgICAgIHNyYz17bWVkaWEudGh1bWJuYWlsfVxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIHJldHVybiBjb25uZWN0RHJhZ1NvdXJjZSgoXG4gICAgICAvLyBTZWUgUGxheWxpc3RNYW5hZ2VyL1BhbmVsL1Jvdy5qc1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGpzeC1hMTF5L25vLXN0YXRpYy1lbGVtZW50LWludGVyYWN0aW9uc1xuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e2N4KCdNZWRpYUxpc3RSb3cnLCAnSGlzdG9yeVJvdycsIGNsYXNzTmFtZSwgc2VsZWN0ZWRDbGFzcyl9XG4gICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5oYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuaGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgb25Eb3VibGVDbGljaz17dGhpcy5oYW5kbGVEb3VibGVDbGlja31cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgID5cbiAgICAgICAge3RodW1ibmFpbH1cbiAgICAgICAgPFNvbmdUaXRsZVxuICAgICAgICAgIGNsYXNzTmFtZT1cIkhpc3RvcnlSb3ctc29uZ1wiXG4gICAgICAgICAgc2l6ZT1cIm1lZGlhUm93XCJcbiAgICAgICAgICBhcnRpc3Q9e21lZGlhLmFydGlzdH1cbiAgICAgICAgICB0aXRsZT17bWVkaWEudGl0bGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGlzdG9yeVJvdy12b3Rlc1wiPlxuICAgICAgICAgIDxIaXN0b3J5Vm90ZXMgey4uLnN0YXRzfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJIaXN0b3J5Um93LXVzZXJcIj5cbiAgICAgICAgICB7dXNlci51c2VybmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSGlzdG9yeVJvdy10aW1lXCIgZGF0ZVRpbWU9e3RpbWVzdGFtcH0+XG4gICAgICAgICAgPFRpbWVBZ28gdGltZXN0YW1wPXt0aW1lc3RhbXB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2hvd0FjdGlvbnMgJiYgKFxuICAgICAgICAgIDxBY3Rpb25zXG4gICAgICAgICAgICBjbGFzc05hbWU9e2N4KCdNZWRpYUxpc3RSb3ctYWN0aW9ucycsIHNlbGVjdGVkQ2xhc3MpfVxuICAgICAgICAgICAgc2VsZWN0aW9uPXtzZWxlY3Rpb259XG4gICAgICAgICAgICBtZWRpYT17bWVkaWF9XG4gICAgICAgICAgICBtYWtlQWN0aW9ucz17bWFrZUFjdGlvbnN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVuaGFuY2UoSGlzdG9yeVJvdyk7XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEb3dudm90ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1RodW1iRG93bic7XG5pbXBvcnQgVXB2b3RlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVGh1bWJVcCc7XG5pbXBvcnQgRmF2b3JpdGVkSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGVCb3JkZXInO1xuXG5jb25zdCBWb3RlcyA9ICh7XG4gIHVwdm90ZXMsIGRvd252b3RlcywgZmF2b3JpdGVzLCBpc1Vwdm90ZSwgaXNEb3dudm90ZSwgaXNGYXZvcml0ZSxcbn0pID0+IHtcbiAgY29uc3QgQ3VycmVudEZhdm9yaXRlSWNvbiA9IGlzRmF2b3JpdGUgPyBGYXZvcml0ZWRJY29uIDogRmF2b3JpdGVJY29uO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSGlzdG9yeVZvdGVzIEF1ZGllbmNlUmVzcG9uc2VcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VCdXR0b24gUmVzcG9uc2VCdXR0b24tLXN0YXRpY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlQnV0dG9uLWNvbnRlbnRcIj5cbiAgICAgICAgICA8VXB2b3RlSWNvbiBjbGFzc05hbWU9e2N4KCdIaXN0b3J5Vm90ZXMtaWNvbicsIGlzVXB2b3RlICYmICdSZXNwb25zZUJ1dHRvbi1pY29uLS11cHZvdGVkJyl9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUmVzcG9uc2VCdXR0b24tY291bnRcIj57dXB2b3Rlcy5sZW5ndGh9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZXNwb25zZUJ1dHRvbiBSZXNwb25zZUJ1dHRvbi0tc3RhdGljXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VCdXR0b24tY29udGVudFwiPlxuICAgICAgICAgIDxDdXJyZW50RmF2b3JpdGVJY29uIGNsYXNzTmFtZT1cIkhpc3RvcnlWb3Rlcy1pY29uIFJlc3BvbnNlQnV0dG9uLWljb24tLWZhdm9yaXRlXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJSZXNwb25zZUJ1dHRvbi1jb3VudFwiPntmYXZvcml0ZXMubGVuZ3RofTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzcG9uc2VCdXR0b24gUmVzcG9uc2VCdXR0b24tLXN0YXRpY1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJlc3BvbnNlQnV0dG9uLWNvbnRlbnRcIj5cbiAgICAgICAgICA8RG93bnZvdGVJY29uIGNsYXNzTmFtZT17Y3goJ0hpc3RvcnlWb3Rlcy1pY29uJywgaXNEb3dudm90ZSAmJiAnUmVzcG9uc2VCdXR0b24taWNvbi0tZG93bnZvdGVkJyl9IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiUmVzcG9uc2VCdXR0b24tY291bnRcIj57ZG93bnZvdGVzLmxlbmd0aH08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Wb3Rlcy5wcm9wVHlwZXMgPSB7XG4gIHVwdm90ZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBmYXZvcml0ZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBkb3dudm90ZXM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBpc1Vwdm90ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNGYXZvcml0ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNEb3dudm90ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZvdGVzO1xuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tICdyZWFjdC1pMThuZXh0JztcbmltcG9ydCBPdmVybGF5SGVhZGVyIGZyb20gJy4uL092ZXJsYXkvSGVhZGVyJztcbmltcG9ydCBPdmVybGF5Q29udGVudCBmcm9tICcuLi9PdmVybGF5L0NvbnRlbnQnO1xuaW1wb3J0IEhpc3RvcnlMaXN0IGZyb20gJy4vSGlzdG9yeUxpc3QnO1xuXG5jb25zdCBlbmhhbmNlID0gdHJhbnNsYXRlKCk7XG5cbmNvbnN0IFJvb21IaXN0b3J5ID0gKHtcbiAgdCxcbiAgY2xhc3NOYW1lLFxuICBvbkNsb3NlT3ZlcmxheSxcbiAgb25PcGVuQWRkTWVkaWFNZW51LFxuICBvbk9wZW5QcmV2aWV3TWVkaWFEaWFsb2csXG4gIC4uLnByb3BzXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjeCgnUm9vbUhpc3RvcnknLCBjbGFzc05hbWUpfT5cbiAgICA8T3ZlcmxheUhlYWRlclxuICAgICAgZGlyZWN0aW9uPVwidG9wXCJcbiAgICAgIGNsYXNzTmFtZT1cIkFwcFJvdyBBcHBSb3ctLXRvcFwiXG4gICAgICB0aXRsZT17dCgnaGlzdG9yeS50aXRsZScpfVxuICAgICAgb25DbG9zZU92ZXJsYXk9e29uQ2xvc2VPdmVybGF5fVxuICAgIC8+XG4gICAgPE92ZXJsYXlDb250ZW50IGNsYXNzTmFtZT1cIlJvb21IaXN0b3J5LWJvZHlcIj5cbiAgICAgIDxIaXN0b3J5TGlzdFxuICAgICAgICBvbk9wZW5BZGRNZWRpYU1lbnU9e29uT3BlbkFkZE1lZGlhTWVudX1cbiAgICAgICAgb25PcGVuUHJldmlld01lZGlhRGlhbG9nPXtvbk9wZW5QcmV2aWV3TWVkaWFEaWFsb2d9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgPC9PdmVybGF5Q29udGVudD5cbiAgPC9kaXY+XG4pO1xuXG5Sb29tSGlzdG9yeS5wcm9wVHlwZXMgPSB7XG4gIHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25DbG9zZU92ZXJsYXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uT3BlbkFkZE1lZGlhTWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25PcGVuUHJldmlld01lZGlhRGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZShSb29tSGlzdG9yeSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LWkxOG5leHQnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAncmVjb21wb3NlL2NvbXBvc2UnO1xuaW1wb3J0IG1zIGZyb20gJ21zJztcblxuaW1wb3J0IHRpbWVkIGZyb20gJy4uLy4uL3V0aWxzL3RpbWVkJztcblxuLy8gQml0IHdlaXJkIHRvIGRvIGl0IGxpa2UgdGhpcyBwZXJoYXBzLCBjb252ZXJ0IHRvIGFuIGVuZ2xpc2ggc3RyaW5nIGZpcnN0IGFuZFxuLy8gdGhlbiB0cmFuc2xhdGUgYWZ0ZXJ3YXJkcy5cbmZ1bmN0aW9uIHRyYW5zbGF0ZU1zKHN0cikge1xuICAvLyBgbXNgIG91dHB1dCBvZiB0aGUgZm9ybSBcIjMgaG91cnNcIlxuICBjb25zdCBbY291bnQsIGtleV0gPSBzdHIuc3BsaXQoJyAnKTtcbiAgcmV0dXJuIHtcbiAgICBrZXk6IGAke2tleS5yZXBsYWNlKC9zJC8sICcnKX1zYCxcbiAgICBjb3VudDogcGFyc2VJbnQoY291bnQsIDEwKSxcbiAgfTtcbn1cblxuY29uc3QgVGltZUFnbyA9ICh7IHQsIGN1cnJlbnRUaW1lLCB0aW1lc3RhbXAgfSkgPT4ge1xuICBjb25zdCBzZWNvbmRzQWdvID0gTWF0aC5tYXgoMCwgTWF0aC5mbG9vcigoY3VycmVudFRpbWUgLSB0aW1lc3RhbXApIC8gMTAwMCkpO1xuICBjb25zdCBtc1N0cmluZyA9IG1zKHNlY29uZHNBZ28gKiAxMDAwLCB7IGxvbmc6IHRydWUgfSk7XG4gIGNvbnN0IHsga2V5LCBjb3VudCB9ID0gdHJhbnNsYXRlTXMobXNTdHJpbmcpO1xuICByZXR1cm4gKFxuICAgIDxzcGFuPlxuICAgICAge3QoJ3RpbWVBZ28uZm9ybWF0Jywge1xuICAgICAgICB0aW1lOiB0KGB0aW1lQWdvLiR7a2V5fWAsIHtcbiAgICAgICAgICBjb3VudCxcbiAgICAgICAgICBkZWZhdWx0VmFsdWU6IG1zU3RyaW5nLFxuICAgICAgICB9KSxcbiAgICAgIH0pfVxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cblRpbWVBZ28ucHJvcFR5cGVzID0ge1xuICB0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjdXJyZW50VGltZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aW1lc3RhbXA6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXG4gIHRyYW5zbGF0ZSgpLFxuICB0aW1lZCgpLFxuKShUaW1lQWdvKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=