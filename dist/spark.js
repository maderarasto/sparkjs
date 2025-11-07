/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./example/img/logo.png":
/*!******************************!*\
  !*** ./example/img/logo.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "fe2a0e4dcaced4754339d6903fa34adb.png");

/***/ }),

/***/ "./node_modules/html-tags/html-tags.json":
/*!***********************************************!*\
  !*** ./node_modules/html-tags/html-tags.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","selectedcontent","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]');

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _public_img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @public/img/logo.png */ "./example/img/logo.png");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component */ "./src/component.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Header */ "./src/Header.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var listItems = [{
  id: 1,
  name: 'HTML'
}, {
  id: 2,
  name: 'CSS'
}, {
  id: 3,
  name: 'Javascript'
}, {
  id: 4,
  name: 'Node.js'
}];
var App = /*#__PURE__*/function (_Component) {
  function App(props) {
    var _this;
    _classCallCheck(this, App);
    _this = _callSuper(this, App, [props]);
    _this.state = {
      id: 1
    };

    // this.inputRef = createRef(null);

    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTextChange = _this.handleTextChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }
  _inherits(App, _Component);
  return _createClass(App, [{
    key: "mounted",
    value: function mounted() {
      // if (this.inputRef.current) {
      //   this.inputRef.current.focus();
      // }
    }
  }, {
    key: "updated",
    value: function () {
      var _updated = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2);
          }
        }, _callee);
      }));
      function updated() {
        return _updated.apply(this, arguments);
      }
      return updated;
    }()
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        id: this.state.id + 1
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(ev) {
      ev.preventDefault();
      console.log(ev);
    }
  }, {
    key: "handleTextChange",
    value: function handleTextChange(ev) {
      console.log(ev);
    }
  }, {
    key: "render",
    value: function render() {
      return {
        elementName: "div",
        attributes: {
          style: {
            fontSize: '1rem',
            color: 'black'
          }
        },
        children: [this.state.id % 2 === 0 ? {
          elementName: _Header__WEBPACK_IMPORTED_MODULE_2__["default"],
          attributes: {
            title: "Title ".concat(this.state.id)
          },
          children: null
        } : '', {
          elementName: "div",
          attributes: {
            id: "top-header",
            "class": "class-1 class-2"
          },
          children: [{
            elementName: "nav",
            attributes: {},
            children: ["Navigation"]
          }]
        }, {
          elementName: "p",
          attributes: {},
          children: ["State: ", this.state.id]
        }, {
          elementName: "ul",
          attributes: {},
          children: [listItems.map(function (item, i) {
            return {
              elementName: "li",
              attributes: {
                key: item.id
              },
              children: [item.name]
            };
          })]
        }, {
          elementName: "form",
          attributes: {
            onSubmit: this.handleSubmit
          },
          children: [{
            elementName: "input",
            attributes: {
              type: "text",
              onInput: this.handleTextChange
            },
            children: null
          }, {
            elementName: "input",
            attributes: {
              type: "submit"
            },
            children: null
          }]
        }, {
          elementName: "img",
          attributes: {
            src: _public_img_logo_png__WEBPACK_IMPORTED_MODULE_0__["default"],
            alt: ""
          },
          children: null
        }, {
          elementName: "button",
          attributes: {
            onClick: this.handleClick
          },
          children: ["Click"]
        }]
      };
    }
  }]);
}(_component__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/Header.jsx":
/*!************************!*\
  !*** ./src/Header.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/component */ "./src/component.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Header = /*#__PURE__*/function (_Component) {
  function Header(props) {
    _classCallCheck(this, Header);
    return _callSuper(this, Header, [props]);
  }
  _inherits(Header, _Component);
  return _createClass(Header, [{
    key: "mounted",
    value: function mounted() {
      console.log('Header mounted');
    }
  }, {
    key: "updated",
    value: function () {
      var _updated = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              console.log('Header updated');
            case 1:
              return _context.a(2);
          }
        }, _callee);
      }));
      function updated() {
        return _updated.apply(this, arguments);
      }
      return updated;
    }()
  }, {
    key: "destroyed",
    value: function () {
      var _destroyed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              console.log('Header destroyed');
            case 1:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      function destroyed() {
        return _destroyed.apply(this, arguments);
      }
      return destroyed;
    }()
  }, {
    key: "render",
    value: function render() {
      return {
        elementName: "h1",
        attributes: {},
        children: [this.props.title]
      };
    }
  }]);
}(_component__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Component = /*#__PURE__*/function () {
  /**
   * Initializes a component with props and empty state.
   *
   * @param {SparkJS.Props} props
   */
  function Component(props) {
    _classCallCheck(this, Component);
    this.props = props;
    this.state = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
  }

  /**
   * Sets a new state.
   *
   * @param {Record<string, any>} state
   */
  return _createClass(Component, [{
    key: "setState",
    value: function setState(state) {
      this.state = state;
      $app.onStateChanged(this);
    }

    /**
     * Renders component as JSX structure.
     *
     * @returns {SparkJS.RenderResult}
     */
  }, {
    key: "render",
    value: function render() {
      return null;
    }

    /**
     * A hook is triggered when component is mounted into DOM.
     */
  }, {
    key: "mounted",
    value: (function () {
      var _mounted = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              return _context.a(2);
          }
        }, _callee);
      }));
      function mounted() {
        return _mounted.apply(this, arguments);
      }
      return mounted;
    }()
    /**
     * a hook is triggered when application is resumed into component.
     */
    )
  }, {
    key: "resumed",
    value: (function () {
      var _resumed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              return _context2.a(2);
          }
        }, _callee2);
      }));
      function resumed() {
        return _resumed.apply(this, arguments);
      }
      return resumed;
    }()
    /**
     * A hook is triggered when component is re-rendered.
     */
    )
  }, {
    key: "updated",
    value: (function () {
      var _updated = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              return _context3.a(2);
          }
        }, _callee3);
      }));
      function updated() {
        return _updated.apply(this, arguments);
      }
      return updated;
    }()
    /**
     * A hook is triggered before component is destroyed.
     */
    )
  }, {
    key: "destroyed",
    value: (function () {
      var _destroyed = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.n) {
            case 0:
              return _context4.a(2);
          }
        }, _callee4);
      }));
      function destroyed() {
        return _destroyed.apply(this, arguments);
      }
      return destroyed;
    }())
  }]);
}();


/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   unmountNode: () => (/* binding */ unmountNode),
/* harmony export */   updateElement: () => (/* binding */ updateElement)
/* harmony export */ });
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



/**
 *
 * @param {VirtualNode} node
 * @param {string} propName
 * @param {any} propValue
 */
function handleAddingProps(node, propName, propValue) {
  if (propName.startsWith('on')) {
    node.addEventListener(propName.substring(2).toLowerCase(), propValue);
    return;
  }
  if (propName === 'class') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveClassName)(propValue);
  } else if (propName === 'style') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveStyle)(propValue);
  }
  node.elementRef.setAttribute(propName, propValue);
}

/**
 *
 * @param {VirtualNode} node
 */
function resolveElementAttributes(node) {
  for (var _i = 0, _Object$entries = Object.entries(node.pendingProps); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    handleAddingProps(node, key, value);
  }
}

/**
 *
 * @param {VirtualNode} node
 * @param {string} propName
 * @param {any} propValue
 */
function handleUpdatingProps(node, propName, propValue) {
  if (propName.startsWith('on')) {
    var eventName = propName.substring(2).toLowerCase();
    node.removeEventListener(eventName, node.oldProps[eventName]);
    node.addEventListener(eventName, propValue);
  } else if (propName === 'class') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveClassName)(propValue);
  } else if (propName === 'style') {
    propValue = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.resolveStyle)(propValue);
  }
  if (!propName.startsWith('on')) {
    node.elementRef.setAttribute(propName, propValue);
  }
}

/**
 *
 * @param {VirtualNode} renderNode
 * @param {string} propName
 * @param {any} propValue
 */
function handleRemovingProps(renderNode, propName, propValue) {
  if (propName.startsWith('on')) {
    renderNode.removeEventListener(propName.substring(2).toLowerCase(), propValue);
  } else {
    renderNode.elementRef.removeAttribute(propName);
  }
}

/**
 * Unmount virtual node and it's children.
 * If virtual node represents HTML element it will remove all event listeners and then remove HTML element.
 * If virtual node represents a component instance it will trigger hook for destroying component.
 *
 * @param {VirtualNode} node
 */
function unmountNode(node) {
  node.children.forEach(function (child) {
    unmountNode(child);
  });
  if (node.elementRef) {
    node.cleanListeners();
    node.elementRef.parentNode.removeChild(node.elementRef);
  }
  if (node.isType('Component')) {
    node.instance.destroyed();
  }
}

/**
 * Creates an HTML element or text node in DOM with its arguments.
 *
 * @param {VirtualNode} node
 * @param {number} position
 */
function createElement(node, position) {
  if (node.isType('Text')) {
    node.elementRef = document.createTextNode(node.tag);
  } else if (node.isType('Element')) {
    var _ref, _node$pendingProps$xm;
    var closestWithNS = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_0__.findClosestNode)(node, '[xmlns]');
    var xmlns = (_ref = (_node$pendingProps$xm = node.pendingProps.xmlns) !== null && _node$pendingProps$xm !== void 0 ? _node$pendingProps$xm : closestWithNS === null || closestWithNS === void 0 ? void 0 : closestWithNS.pendingProps.xmlns) !== null && _ref !== void 0 ? _ref : '';
    if (xmlns) {
      node.elementRef = document.createElementNS(xmlns, node.tag);
    } else {
      node.elementRef = document.createElement(node.tag);
    }
    resolveElementAttributes(node);
  }
  var parentEl = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findClosestDOMNode)(node);
  var childAt = parentEl.children[position];
  parentEl.insertBefore(node.elementRef, childAt);
}

/**
 *
 * @param {VirtualNode} node
 */
function updateElement(node) {
  var diffedProps = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.diffProps)(node.oldProps, node.pendingProps);
  diffedProps.forEach(function (prop) {
    if (prop.type === 'Remove') {
      handleRemovingProps(node, prop.name, prop.value);
    } else if (prop.type === 'Add') {
      handleAddingProps(node, prop.name, prop.value);
    } else if (prop.type === 'Update') {
      handleUpdatingProps(node, prop.name, prop.value);
    }
  });
}

/***/ }),

/***/ "./src/reconciler.js":
/*!***************************!*\
  !*** ./src/reconciler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanNodes: () => (/* binding */ cleanNodes),
/* harmony export */   reconcile: () => (/* binding */ reconcile),
/* harmony export */   resolveEffectsFromNodes: () => (/* binding */ resolveEffectsFromNodes)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



/**
 * Build and mount whole subtree of virtual node.
 *
 * @param {VirtualNode} node
 */
function mountVirtualSubtree(node) {
  node.effect = 'Placement';
  if (node.isType('Component')) {
    node.createComponent();
    var renderResult = node.instance.render();
    renderResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.flattenRenderResultChildren)(renderResult);
    var subtree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_1__.buildVirtualTree)(renderResult);
    if (subtree) {
      node.appendChild(subtree);
    }
  }
  node.children.forEach(function (childNode) {
    childNode.effect = 'Placement';
    mountVirtualSubtree(childNode);
  });
}

/**
 * Copy references such element reference, props or component instance.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 * @param {boolean} recursive
 */
function copyNodeReferences(currentNode, newNode) {
  var recursive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  if (currentNode.tag === newNode.tag) {
    var _currentNode$oldProps, _currentNode$elementR;
    newNode.oldProps = (_currentNode$oldProps = currentNode.oldProps) !== null && _currentNode$oldProps !== void 0 ? _currentNode$oldProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    newNode.elementRef = (_currentNode$elementR = currentNode.elementRef) !== null && _currentNode$elementR !== void 0 ? _currentNode$elementR : null;
    if (newNode.isType('Component')) {
      var _newNode$pendingProps;
      newNode.instance = currentNode.instance;
      newNode.instance.props = (_newNode$pendingProps = newNode.pendingProps) !== null && _newNode$pendingProps !== void 0 ? _newNode$pendingProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
      newNode.state = currentNode.state;
      newNode.stateChanged = currentNode.stateChanged;
    }
  }
  if (recursive) {
    newNode.children.forEach(function (childNode, index) {
      copyNodeReferences(currentNode.children[index], childNode, recursive);
    });
  }
}

/**
 * Checks if pending props are different from old props.
 * It's shallow comparison so object-like props are compared through reference.
 *
 * @param {SparkJS.Props} oldProps
 * @param {SparkJS.Props} pendingProps
 */
function compareProps(oldProps, pendingProps) {
  if (_typeof(oldProps) !== 'object' || _typeof(pendingProps) !== 'object') {
    return false;
  }
  if (Object.keys(oldProps).length !== Object.keys(pendingProps).length) {
    return false;
  }
  return Object.entries(pendingProps).every(function (_ref, index) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    return value === oldProps[key];
  });
}

/**
 * Checks if virtual node should be updated.
 * Virtual node should update if node's props are changed.
 *
 * @param {VirtualNode} node
 * @returns {boolean}
 */
function shouldUpdateNode(node) {
  return !compareProps(node.oldProps, node.pendingProps);
}

/**
 * Updates virtual node and if it is component then try to get new render result.
 *
 * @param {VirtualNode} node
 */
function updateNode(node) {
  node.effect = 'Update';
  node.pendingUpdate = true;
  if (!node.isType('Component')) {
    return;
  }
  var renderResult = node.instance.render();
  renderResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.flattenRenderResultChildren)(renderResult);
  var subtree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_1__.buildVirtualTree)(renderResult);
  if (subtree) {
    node.empty();
    node.appendChild(subtree);
  }
}

/**
 * Reuse current virtual node with children of new virtual node.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 */
function reuseNode(currentNode, newNode) {
  var clonedCurrentNode = currentNode.clone();
  if (newNode.isType('Component')) {
    var renderResult = newNode.instance.render();
    renderResult = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.flattenRenderResultChildren)(renderResult);
    var subtree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_1__.buildVirtualTree)(renderResult);
    if (subtree) {
      newNode.empty();
      newNode.appendChild(subtree);
    }
  }
  clonedCurrentNode.parent = newNode.parent;
  clonedCurrentNode.children = newNode.children;
  newNode.copyFrom(clonedCurrentNode);
}

/**
 * Finds a virtual node based on it's defined key.
 *
 * @param {VirtualNode} node
 * @param {string} key
 */
function findNodeWithKey(node, key) {
  var _iterator = _createForOfIteratorHelper(node.children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      if (child.key === key) {
        return child;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}

/**
 * Finds a matching child in current node based on position or key.
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newChildNode
 * @param {number} position
 */
function findMatchingChildNode(currentNode, newChildNode, position) {
  /** @type {VirtualNode} */
  var foundNode = null;
  if (!currentNode) {
    return null;
  }
  if (newChildNode.key) {
    foundNode = findNodeWithKey(currentNode, newChildNode.key);
  }
  if (foundNode) {
    return foundNode;
  }
  if (currentNode.children.length <= position) {
    return null;
  }
  return currentNode.children[position];
}

/**
 * Compares nodes at the same position in two different trees and marks effects
 * that needs to be later processed.
 *
 * Possible effects:
 * - Placement (marked for placing as new DOM element)
 * - Update (marked for updating props of DOM element)
 * - Deletion (marked for removing DOM element)
 *
 * @param {VirtualNode} currentNode
 * @param {VirtualNode} newNode
 */
function reconcile(currentNode, newNode) {
  if (currentNode && currentNode.tag !== newNode.tag) {
    currentNode.effect = 'Deletion';
    mountVirtualSubtree(newNode);
    return;
  }
  if (!currentNode) {
    mountVirtualSubtree(newNode);
    return;
  } else if (!newNode.isType('Root')) {
    copyNodeReferences(currentNode, newNode);
    if (shouldUpdateNode(newNode)) {
      updateNode(newNode);
    } else {
      reuseNode(currentNode, newNode);
    }
  }
  var processedChildren = [];
  newNode.children.forEach(function (childNode, index) {
    var matchingChild = findMatchingChildNode(currentNode, childNode, index);
    reconcile(matchingChild, childNode);
    processedChildren.push(matchingChild);
  });
  currentNode.children.forEach(function (childNode, index) {
    if (!processedChildren.includes(childNode)) {
      childNode.effect = 'Deletion';
    }
  });
}

/**
 * Traverse through all virtual nodes in virtual tree and resolve effects that needs to be processed.
 *
 * @param {VirtualNode} node
 * @param {number} position
 * @returns {SparkJS.Effect[]}
 */
function resolveEffectsFromNodes(node) {
  var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  /** @type {SparkJS.Effect[]} */
  var effects = [];
  if (!node) {
    return effects;
  }
  if (node.effect !== '') {
    effects.push({
      type: node.effect,
      parent: node.parent,
      nodeRef: node,
      position: position
    });
    node.effect = '';
  }
  node.children.forEach(function (child, index) {
    effects = [].concat(_toConsumableArray(effects), _toConsumableArray(resolveEffectsFromNodes(child, index)));
  });
  return effects;
}

/**
 * Cleans all indicators and effects from virtual true.
 *
 * @param {VirtualNode} node
 */
function cleanNodes(node) {
  node.effect = '';
  node.stateChanged = false;
  if (!compareProps(node.oldProps, node.pendingProps)) {
    node.oldProps = node.pendingProps;
  }
  node.children.forEach(function (child) {
    cleanNodes(child);
  });
}

/***/ }),

/***/ "./src/spark.js":
/*!**********************!*\
  !*** ./src/spark.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spark: () => (/* binding */ Spark)
/* harmony export */ });
/* harmony import */ var _virtual_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/virtual-node */ "./src/virtual-node.js");
/* harmony import */ var _reconciler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/reconciler */ "./src/reconciler.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/dom */ "./src/dom.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Spark = /*#__PURE__*/function () {
  function Spark() {
    _classCallCheck(this, Spark);
    /** @type {HTMLElement} */
    this._rootEl = null;
    /** @type {SparkJS.RenderCallback} */
    this._rootFunc = null;
    /** @type {VirtualNode} */
    this._virtualTree = null;
  }

  /**
   * Sets a function that return JSX structure.
   *
   * @param {() => SparkJS.RenderResult} rootFn
   */
  return _createClass(Spark, [{
    key: "setRootFunction",
    value: function setRootFunction(rootFn) {
      this._rootFunc = rootFn;
    }

    /**
     * Mounts application to HTML element and trigger render.
     * It throws error if root element isn't found.
     *
     * @param {HTMLElement|string} mountEl
     */
  }, {
    key: "mount",
    value: function mount(mountEl) {
      if (typeof mountEl === 'string') {
        this._rootEl = document.querySelector(mountEl);
      } else {
        this._rootEl = mountEl;
      }
      if (!(this._rootEl instanceof HTMLElement)) {
        throw new Error('Could not find a root element');
      }
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this._rootEl) {
        throw new Error('Could not find a root element');
      }
      var renderResult = this._rootFunc();
      var newVirtualTree = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_0__.buildVirtualTreeRoot)(renderResult);
      (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.reconcile)(this._virtualTree, newVirtualTree);
      var deletions = (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.resolveEffectsFromNodes)(this._virtualTree);
      var newChanges = (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.resolveEffectsFromNodes)(newVirtualTree);
      deletions.forEach(function (effect) {
        if (effect.type === 'Deletion') {
          (0,_dom__WEBPACK_IMPORTED_MODULE_2__.unmountNode)(effect.nodeRef);
        }
      });
      this._virtualTree = newVirtualTree;
      this._virtualTree.elementRef = this._rootEl;

      /** @type {VirtualNode[]} */
      var mountedComponentNodes = [];
      /** @type {VirtualNode[]} */
      var updatedComponentNodes = [];
      console.log(newChanges);
      newChanges.forEach(function (effect) {
        if (effect.type === 'Placement') {
          handlePlacement(effect, mountedComponentNodes);
        } else if (effect.type === 'Update') {
          handleUpdate(effect, updatedComponentNodes);
        }
      });
      (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.cleanNodes)(this._virtualTree);
    }

    /**
     *
     * @param {Component} component
     */
  }, {
    key: "onStateChanged",
    value: function onStateChanged(component) {
      var foundNode = (0,_virtual_node__WEBPACK_IMPORTED_MODULE_0__.findNodeByComponent)(this._virtualTree, component);
      if (!foundNode) {
        console.warn('Skipping render. A render node not found for component: ' + component.constructor.name);
        return;
      }

      // Request to re-render application.
      foundNode.stateChanged = true;
      foundNode.state = component.state;
      this.render();
    }
  }]);
}();

/**
 * Checks if component nodes are ready to trigger hooks for mounting or updating.
 * Which hook to trigger depends on given action.
 *
 * @param {VirtualNode[]} componentNodes
 * @param {'mount'|'update'}action
 */
function processComponentNodes(componentNodes) {
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'mount';
  if (!['mount', 'update'].includes(action)) {
    action = 'mount';
  }
  while (componentNodes.length > 0) {
    if (action === 'mount' && !componentNodes[0].allChildrenMounted()) {
      break;
    } else if (action === 'update' && !componentNodes[0].allChildrenUpdated()) {
      break;
    }
    if (action === 'mount') {
      componentNodes[0].mounted = true;
      componentNodes[0].instance.mounted();
    } else if (action === 'update') {
      componentNodes[0].instance.updated();
    }
    componentNodes.shift();
  }
}

/**
 * Handles effect for placing a new HTML element or text node.
 *
 * @param {SparkJS.Effect} effect
 * @param {VirtualNode[]} componentNodes
 */
function handlePlacement(effect, componentNodes) {
  if (effect.nodeRef.isType('Component')) {
    componentNodes.unshift(effect.nodeRef);
  }
  if (effect.nodeRef.isType('Element') || effect.nodeRef.isType('Text')) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createElement)(effect.nodeRef, effect.position);
    // TODO: assign ref from element ref
  }
  processComponentNodes(componentNodes, 'mount');
}

/**
 * Handles effect for updating existing HTML element.
 *
 * @param {SparkJS.Effect} effect
 * @param {VirtualNode[]} componentNodes
 */
function handleUpdate(effect, componentNodes) {
  effect.nodeRef.pendingUpdate = false;
  if (effect.nodeRef.isType('Component')) {
    componentNodes.unshift(effect.nodeRef);
  }
  if (effect.nodeRef.isType('Element')) {
    (0,_dom__WEBPACK_IMPORTED_MODULE_2__.updateElement)(effect.nodeRef);
  }
  processComponentNodes(componentNodes, 'update');
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyObject: () => (/* binding */ EmptyObject),
/* harmony export */   diffProps: () => (/* binding */ diffProps),
/* harmony export */   findClosestDOMNode: () => (/* binding */ findClosestDOMNode),
/* harmony export */   flattenRenderResultChildren: () => (/* binding */ flattenRenderResultChildren),
/* harmony export */   resolveClassName: () => (/* binding */ resolveClassName),
/* harmony export */   resolveStyle: () => (/* binding */ resolveStyle)
/* harmony export */ });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var EmptyObject = {};

/**
 * Flatten children of render result if any of them is type of array.
 *
 * @param {SparkJS.RenderResult} renderResult
 * @returns {SparkJS.RenderResult}
 */
function flattenRenderResultChildren(renderResult) {
  if (typeof renderResult === 'string') {
    return renderResult;
  }

  /** @type {RenderResult[]} */
  var children = [];
  renderResult.children.forEach(function (child) {
    if (!Array.isArray(child)) {
      children.push(child);
      return;
    }
    children = [].concat(_toConsumableArray(children), _toConsumableArray(child));
  });
  return _objectSpread(_objectSpread({}, renderResult), {}, {
    children: children
  });
}
function resolveClassName(value) {
  if (_typeof(value) !== 'object') {
    return value.toString();
  }
  var classTokens = !Array.isArray(value) ? Object.keys(value).filter(function (className) {
    return value[className];
  }) : value;
  classTokens = classTokens.filter(function (className, index, tokens) {
    return tokens.indexOf(className) === index;
  });
  return classTokens.join(' ');
}
function resolveStyle(value) {
  if (Array.isArray(value)) {
    throw new Error('Style cannot be use as array!');
  }
  if (_typeof(value) !== 'object') {
    return value.toString();
  }
  return Object.entries(value).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (/^[a-z]*[A-Z]/.test(key)) {
      var keyTokens = key.split(/(?=[A-Z])/).map(function (token) {
        return token.toLowerCase();
      });
      key = keyTokens.join('-');
    }
    return "".concat(key, ": ").concat(value);
  }).join('; ');
}

/**
 *
 * @param {SparkJS.Props} oldProps
 * @param {SparkJS.Props} pendingProps
 * @returns {SparkJS.PropsDiff[]}
 */
function diffProps(oldProps, pendingProps) {
  /** @type {SparkJS.PropsDiff[]} */
  var propDiffs = [];
  for (var _i = 0, _Object$entries = Object.entries(pendingProps); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];
    if (oldProps[key] === undefined || oldProps[key] === null) {
      propDiffs.push({
        type: 'Add',
        name: key,
        value: value
      });
    } else if (value !== oldProps[key]) {
      propDiffs.push({
        type: 'Update',
        name: key,
        value: value
      });
    }
  }
  for (var _i2 = 0, _Object$entries2 = Object.entries(oldProps); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
      _key = _Object$entries2$_i[0],
      _value = _Object$entries2$_i[1];
    if (pendingProps[_key] === undefined || pendingProps[_key] === null) {
      propDiffs.push({
        type: 'Remove',
        name: _key,
        value: _value
      });
    }
  }
  return propDiffs;
}

/**
 *
 * @param {VirtualNode} node
 */
function findClosestDOMNode(node) {
  var currentNode = node;
  while (currentNode && currentNode.parent) {
    if (currentNode.parent.elementRef) {
      return currentNode.parent.elementRef;
    }
    currentNode = currentNode.parent;
  }
  return null;
}

/***/ }),

/***/ "./src/virtual-node.js":
/*!*****************************!*\
  !*** ./src/virtual-node.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildVirtualTree: () => (/* binding */ buildVirtualTree),
/* harmony export */   buildVirtualTreeRoot: () => (/* binding */ buildVirtualTreeRoot),
/* harmony export */   "default": () => (/* binding */ VirtualNode),
/* harmony export */   findClosestNode: () => (/* binding */ findClosestNode),
/* harmony export */   findNodeByComponent: () => (/* binding */ findNodeByComponent)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ "./src/utils.js");
/* harmony import */ var html_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html-tags */ "./node_modules/html-tags/html-tags.json");
var _excluded = ["key"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var VirtualNode = /*#__PURE__*/function () {
  /**
   * Initializes virtual node with type, tag and properties.
   *
   * @param {SparkJS.NodeType} type
   * @param {SparkJS.NodeTag} tag
   * @param {SparkJS.NodeProps} props
   */
  function VirtualNode(type, tag) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, VirtualNode);
    var _ref = props !== null && props !== void 0 ? props : {},
      key = _ref.key,
      otherProps = _objectWithoutProperties(_ref, _excluded);

    /** @type {string|undefined} */
    this.key = key;
    this.type = type;
    this.tag = tag;

    // Reference properties
    /** @type {SparkJS.Props} */
    this.oldProps = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {SparkJS.Props} */
    this.pendingProps = props !== null && props !== void 0 ? props : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {Record<string, any>} */
    this.state = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {Component|null} */
    this.instance = null;
    /** @type {HTMLElement|null} */
    this.elementRef = null;
    /** @type {Record<string, SparkJS.EventListener[]>} */
    this.listeners = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;

    // Indicator properties
    /** @type {SparkJS.EffectType} */
    this.effect = '';
    /** @type {boolean} */
    this.mounted = false;
    /** @type {boolean} */
    this.pendingUpdate = false;
    /** @type {boolean} */
    this.stateChanged = false;

    // Node properties
    /** @type {VirtualNode|null} */
    this.parent = null;
    /** @type {VirtualNode[]} */
    this.children = [];
  }

  /**
   * Checks if virtual node is of certain type.
   *
   * @param {SparkJS.NodeType} type
   */
  return _createClass(VirtualNode, [{
    key: "isType",
    value: function isType(type) {
      return this.type === type;
    }

    /**
     * Checks if all children were mounted into DOM.
     *
     * @returns {boolean}
     */
  }, {
    key: "allChildrenMounted",
    value: function allChildrenMounted() {
      return this.children.reduce(function (count, childNode) {
        var result = false;
        if (childNode.isType('Element') || childNode.isType('Text')) {
          result = childNode.elementRef !== null;
        } else if (childNode.isType('Component')) {
          result = childNode.mounted;
        }
        return count + (result && childNode.allChildrenMounted() ? 1 : 0);
      }, 0) === this.children.length;
    }

    /**
     * Checks if all children were updated in DOM.
     *
     * @returns {boolean}
     */
  }, {
    key: "allChildrenUpdated",
    value: function allChildrenUpdated() {
      return this.children.reduce(function (count, childNode) {
        return count + (!childNode.pendingUpdate && childNode.allChildrenUpdated() ? 1 : 0);
      }, 0) === this.children.length;
    }

    /**
     * Adds a listener to HTML element and store it's reference into listeners of virtual node.
     *
     * @param {string} type
     * @param {SparkJS.EventListener} listener
     */
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      if (!this.elementRef) {
        return;
      }
      if (!this.listeners[type]) {
        this.listeners[type] = [];
      }
      this.elementRef.addEventListener(type, listener);
      this.listeners[type].push(listener);
    }

    /**
     * Removes an event listener from HTML element and from listeners of virtual node.
     *
     * @param {string} type
     * @param {SparkJS.EventListener} listener
     */
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var _this$listeners$type;
      /** @type {EventListener[]} */
      var listenersWithType = (_this$listeners$type = this.listeners[type]) !== null && _this$listeners$type !== void 0 ? _this$listeners$type : [];
      if (listenersWithType.length === 0) {
        return;
      }
      var foundListenerIndex = -1;
      var foundListener = listenersWithType.find(function (anotherListener, index) {
        if (anotherListener === listener) {
          foundListenerIndex = index;
          return true;
        }
        return false;
      });
      if (!foundListener) {
        throw new Error("An event listener for ".concat(type, " on node ").concat(this.tag, " not found. Cause: event listener probably wasn't bound in constructor."));
      }
      this.elementRef.removeEventListener(type, listener);
      listenersWithType.splice(foundListenerIndex, 1);
    }

    /**
     * Cleans all listeners from HTML element and from listeners of virtual node.
     */
  }, {
    key: "cleanListeners",
    value: function cleanListeners() {
      var _this = this;
      var _loop = function _loop() {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            type = _Object$entries$_i[0],
            listeners = _Object$entries$_i[1];
          if (!_this.elementRef) {
            return {
              v: void 0
            };
          }
          listeners.forEach(function (listener) {
            _this.elementRef.removeEventListener(type, listener);
          });
        },
        _ret;
      for (var _i = 0, _Object$entries = Object.entries(this.listeners); _i < _Object$entries.length; _i++) {
        _ret = _loop();
        if (_ret) return _ret.v;
      }
      this.listeners = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    }

    /**
     * Creates an instance of component and copy it's state into virtual ode's state.
     */
  }, {
    key: "createComponent",
    value: function createComponent() {
      this.instance = new this.tag(this.pendingProps);
      this.state = this.instance.state;
    }

    /**
     * Appends a child node into current node.
     *
     * @param {VirtualNode} node
     */
  }, {
    key: "appendChild",
    value: function appendChild(node) {
      node.parent = this;
      this.children.push(node);
    }

    /**
     * Replaces a child node in current node with a new node.
     *
     * @param {VirtualNode} newNode
     * @param {VirtualNode} oldNode
     */
  }, {
    key: "replaceChild",
    value: function replaceChild(newNode, oldNode) {
      var indexOf = this.children.indexOf(oldNode);
      if (indexOf >= 0) {
        newNode.parent = this;
        this.children[indexOf].parent = null;
        this.children[indexOf] = newNode;
      }
    }

    /**
     * Removes a child node from current node.
     *
     * @param {VirtualNode} node
     */
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var indexOf = this.children.indexOf(node);
      if (indexOf >= 0) {
        node.parent = null;
        this.children.splice(indexOf, 1);
      }
    }

    /**
     * Removes all children from current node.
     */
  }, {
    key: "empty",
    value: function empty() {
      this.children.forEach(function (node) {
        node.parent = null;
      });
      this.children = [];
    }

    /**
     * Create another instance with same properties.
     *
     * @returns {VirtualNode}
     */
  }, {
    key: "clone",
    value: function clone() {
      var cloned = new VirtualNode(this.type, this.tag, _objectSpread({
        key: this.key
      }, this.pendingProps));

      // Reference properties
      cloned.oldProps = this.oldProps;
      cloned.pendingProps = this.pendingProps;
      cloned.state = this.state;
      cloned.instance = this.instance;
      cloned.elementRef = this.elementRef;
      cloned.listeners = this.listeners;

      // Indicator properties
      cloned.effect = this.effect;
      cloned.mounted = this.mounted;
      cloned.pendingUpdate = this.pendingUpdate;
      cloned.stateChanged = this.stateChanged;

      // Node properties
      cloned.parent = this.parent;
      cloned.children = this.children;
      return cloned;
    }

    /**
     * Copy all data from source virtual node.
     *
     * @param {VirtualNode} sourceNode
     */
  }, {
    key: "copyFrom",
    value: function copyFrom(sourceNode) {
      this.key = sourceNode.key;
      this.type = sourceNode.type;
      this.tag = sourceNode.tag;

      // Reference properties
      this.oldProps = sourceNode.oldProps;
      this.pendingProps = sourceNode.pendingProps;
      this.state = sourceNode.state;
      this.instance = sourceNode.instance;
      this.elementRef = sourceNode.elementRef;
      this.listeners = sourceNode.listeners;

      // Indicator properties
      this.effect = sourceNode.effect;
      this.mounted = sourceNode.mounted;
      this.pendingUpdate = sourceNode.pendingUpdate;
      this.stateChanged = sourceNode.stateChanged;

      // Node properties
      this.parent = sourceNode.parent;
      this.children = sourceNode.children;
    }
  }]);
}();
/**
 *
 * @param {JSX[]} jsxArray
 */

function checkKeysInJsxArray(jsxArray) {
  var usedKeys = [];
  return jsxArray.every(function (item) {
    if (!item.attributes || !item.attributes.key || usedKeys.includes(item.attributes.key)) {
      return false;
    }
    usedKeys.push(item.attributes.key);
    return true;
  });
}

/**
 *
 * @param {SparkJS.RenderResult} renderResult
 * @param {VirtualNode|null} parent
 */
function buildVirtualTree(renderResult) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var _ref2 = renderResult !== null && renderResult !== void 0 ? renderResult : {},
    _ref2$elementName = _ref2.elementName,
    elementName = _ref2$elementName === void 0 ? renderResult !== null && renderResult !== void 0 ? renderResult : '' : _ref2$elementName,
    _ref2$attributes = _ref2.attributes,
    attributes = _ref2$attributes === void 0 ? {} : _ref2$attributes,
    _ref2$children = _ref2.children,
    children = _ref2$children === void 0 ? [] : _ref2$children;

  /** @type {VirtualNode} */
  var node;
  if (typeof elementName === 'function') {
    node = new VirtualNode('Component', elementName, _objectSpread({
      children: children
    }, attributes));
    children = [];
  } else if (_toConsumableArray(html_tags__WEBPACK_IMPORTED_MODULE_1__).includes(elementName)) {
    // TODO: add support for SVG elements
    node = new VirtualNode('Element', elementName, attributes);
  } else if (_typeof(elementName) === 'object') {
    throw new Error('Object cannot be rendered as JSX node!');
  } else {
    node = new VirtualNode('Text', elementName);
  }
  if (parent) {
    parent.appendChild(node);
  }
  if (!children) {
    children = [];
  }
  children.forEach(function (childNode) {
    if (!childNode) {
      return;
    }
    if (Array.isArray(childNode)) {
      if (!checkKeysInJsxArray(childNode)) {
        throw new Error("Dynamically mapped nodes in loop must have unique keys specified in \"key\" prop.");
      }
      childNode.forEach(function (anotherChildNode) {
        buildVirtualTree(anotherChildNode, node);
      });
    } else {
      buildVirtualTree(childNode, node);
    }
  });
  return node;
}

/**
 * Finds closest parent based on selector.
 *
 * @param {VirtualNode} node
 * @param {string} selector
 */
function findClosestNode(node, selector) {
  if (!selector) {
    throw new Error('A selector can\'t be empty string');
  }
  var currentNode = node;
  while ((_currentNode = currentNode) !== null && _currentNode !== void 0 && _currentNode.parent) {
    var _currentNode, _currentNode$parent$p;
    var parentProps = (_currentNode$parent$p = currentNode.parent.pendingProps) !== null && _currentNode$parent$p !== void 0 ? _currentNode$parent$p : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    if (currentNode.parent.type !== 'element') {
      currentNode = currentNode.parent;
      continue;
    }
    if (selector.startsWith('#') && parentProps.id === selector.substring(1)) {
      return currentNode.parent;
    } else if (selector.startsWith('.') && parentProps["class"] === selector.substring(1)) {
      return currentNode.parent;
    } else if (/[[a-zA-Z0-9\-_]*(?:="[a-zA-Z0-9\-_]*")?]/.test(selector)) {
      var value = selector.replace('[', '').replace(']', '');
      if (currentNode.parent.pendingProps[value]) {
        return currentNode.parent;
      }
    } else if (currentNode.parent.tag === selector) {
      return currentNode.parent;
    }
    currentNode = currentNode.parent;
  }
  return null;
}

/**
 * Finds a virtual node that is found by given component instance.
 *
 * @param {VirtualNode} node
 * @param  {Component} component
 * @returns {VirtualNode|null}
 */
function findNodeByComponent(node, component) {
  var foundNode = null;
  if (node.instance === component) {
    return node;
  }
  node.children.forEach(function (child) {
    foundNode = findNodeByComponent(child, component);
  });
  return foundNode;
}

/**
 * Build virtual tree from root node.
 *
 * @param {SparkJS.RenderResult} renderResult
 */
function buildVirtualTreeRoot(renderResult) {
  var rootNode = new VirtualNode('Root', '');
  var childNode = buildVirtualTree(renderResult);
  if (childNode) {
    rootNode.appendChild(childNode);
  }
  return rootNode;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createApp: () => (/* binding */ createApp)
/* harmony export */ });
/* harmony import */ var _spark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/spark */ "./src/spark.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/App */ "./src/App.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



/**
 *
 * @param {SparkJS.AppConfig} config
 */
function createApp(config) {
  if (_typeof(config) !== "object") {
    throw new Error('Missing necessary options defined in given config.');
  }
  window.$app = new _spark__WEBPACK_IMPORTED_MODULE_0__.Spark();
  window.$app.setRootFunction(config.render);
  document.addEventListener('DOMContentLoaded', function () {
    $app.mount(config.mountEl);
  });
}
createApp({
  mountEl: '#app',
  render: function render() {
    return {
      elementName: _App__WEBPACK_IMPORTED_MODULE_1__["default"],
      attributes: {},
      children: null
    };
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO0VBQ2hDLElBQUlyUSxPQUFBLENBQU9xUSxNQUFNLE1BQUssUUFBUSxFQUFFO0lBQzlCLE1BQU0sSUFBSXhFLEtBQUssQ0FBQyxvREFBb0QsQ0FBQztFQUN2RTtFQUVBeUUsTUFBTSxDQUFDdE0sSUFBSSxHQUFHLElBQUltSCx5Q0FBSyxDQUFDLENBQUM7RUFDekJtRixNQUFNLENBQUN0TSxJQUFJLENBQUN1SCxlQUFlLENBQUM4RSxNQUFNLENBQUM1TixNQUFNLENBQUM7RUFFMUN1RSxRQUFRLENBQUM3QixnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0lBQ2xEbkIsSUFBSSxDQUFDeUgsS0FBSyxDQUFDNEUsTUFBTSxDQUFDM0UsT0FBTyxDQUFDO0VBQzVCLENBQUMsQ0FBQztBQUNKO0FBRUEwRSxTQUFTLENBQUM7RUFDUjFFLE9BQU8sRUFBRSxNQUFNO0VBQ2ZqSixNQUFNLFdBQU5BLE1BQU1BLENBQUEsRUFBRztJQUNQO01BQUFDLFdBQUEsRUFBQW5CLDRDQUFBO01BQUFvQixVQUFBO01BQUFJLFFBQUE7SUFBQTtFQUNGO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFya2pzLy4vZXhhbXBsZS9pbWcvbG9nby5wbmciLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9BcHAuanN4Iiwid2VicGFjazovL3NwYXJranMvLi9zcmMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3JlY29uY2lsZXIuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9zcGFyay5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvdmlydHVhbC1ub2RlLmpzIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmZTJhMGU0ZGNhY2VkNDc1NDMzOWQ2OTAzZmEzNGFkYi5wbmdcIjsiLCJpbXBvcnQgaW1nIGZyb20gJ0BwdWJsaWMvaW1nL2xvZ28ucG5nJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiQC9IZWFkZXJcIjtcclxuXHJcbmNvbnN0IGxpc3RJdGVtcyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiAnSFRNTCcgfSxcclxuICB7IGlkOiAyLCBuYW1lOiAnQ1NTJyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdKYXZhc2NyaXB0JyB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6ICdOb2RlLmpzJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgfTtcclxuXHJcbiAgICAvLyB0aGlzLmlucHV0UmVmID0gY3JlYXRlUmVmKG51bGwpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVRleHRDaGFuZ2UgPSB0aGlzLmhhbmRsZVRleHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICAvLyBpZiAodGhpcy5pbnB1dFJlZi5jdXJyZW50KSB7XHJcbiAgICAvLyAgIHRoaXMuaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5wdXRSZWYpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaWQ6IHRoaXMuc3RhdGUuaWQgKyAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQoZXYpIHtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUZXh0Q2hhbmdlKGV2KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlkICUgMiA9PT0gMCA/IChcclxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9e2BUaXRsZSAke3RoaXMuc3RhdGUuaWR9YH0gLz5cclxuICAgICAgICApIDogJyd9XHJcbiAgICAgICAgPGRpdiBpZD1cInRvcC1oZWFkZXJcIiBjbGFzcz17YGNsYXNzLTEgY2xhc3MtMmB9PlxyXG4gICAgICAgICAgPG5hdj5OYXZpZ2F0aW9uPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+U3RhdGU6IHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bGlzdEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBvbklucHV0PXt0aGlzLmhhbmRsZVRleHRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIC8+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5DbGljazwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn0iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWFkZXIgbW91bnRlZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHtcclxuICAgIGNvbnNvbGUubG9nKCdIZWFkZXIgdXBkYXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVzdHJveWVkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciBkZXN0cm95ZWQnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIGEgY29tcG9uZW50IHdpdGggcHJvcHMgYW5kIGVtcHR5IHN0YXRlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gRW1wdHlPYmplY3RcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBuZXcgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1JlY29yZDxzdHJpbmcsIGFueT59IHN0YXRlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoc3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgICRhcHAub25TdGF0ZUNoYW5nZWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGNvbXBvbmVudCBhcyBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1NwYXJrSlMuUmVuZGVyUmVzdWx0fVxyXG4gICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkIGludG8gRE9NLlxyXG4gICAqL1xyXG4gIGFzeW5jIG1vdW50ZWQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBhIGhvb2sgaXMgdHJpZ2dlcmVkIHdoZW4gYXBwbGljYXRpb24gaXMgcmVzdW1lZCBpbnRvIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBhc3luYyByZXN1bWVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyByZS1yZW5kZXJlZC5cclxuICAgKi9cclxuICBhc3luYyB1cGRhdGVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCBiZWZvcmUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuICAgKi9cclxuICBhc3luYyBkZXN0cm95ZWQoKSB7fVxyXG59IiwiaW1wb3J0IHtmaW5kQ2xvc2VzdE5vZGV9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5pbXBvcnQge2RpZmZQcm9wcywgZmluZENsb3Nlc3RET01Ob2RlLCByZXNvbHZlQ2xhc3NOYW1lLCByZXNvbHZlU3R5bGV9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWVcclxuICogQHBhcmFtIHthbnl9IHByb3BWYWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlQWRkaW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIocHJvcE5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCksIHByb3BWYWx1ZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5vZGUuZWxlbWVudFJlZi5zZXRBdHRyaWJ1dGUocHJvcE5hbWUsIHByb3BWYWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSkge1xyXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhub2RlLnBlbmRpbmdQcm9wcykpIHtcclxuICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIGtleSwgdmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lXHJcbiAqIEBwYXJhbSB7YW55fSBwcm9wVmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBwcm9wTmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcclxuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG5vZGUub2xkUHJvcHNbZXZlbnROYW1lXSk7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGlmICghcHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcFZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSByZW5kZXJOb2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZVxyXG4gKiBAcGFyYW0ge2FueX0gcHJvcFZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVSZW1vdmluZ1Byb3BzKHJlbmRlck5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpIHtcclxuICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgcmVuZGVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHByb3BOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZW5kZXJOb2RlLmVsZW1lbnRSZWYucmVtb3ZlQXR0cmlidXRlKHByb3BOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbm1vdW50IHZpcnR1YWwgbm9kZSBhbmQgaXQncyBjaGlsZHJlbi5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgSFRNTCBlbGVtZW50IGl0IHdpbGwgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZW4gcmVtb3ZlIEhUTUwgZWxlbWVudC5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSBjb21wb25lbnQgaW5zdGFuY2UgaXQgd2lsbCB0cmlnZ2VyIGhvb2sgZm9yIGRlc3Ryb3lpbmcgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudE5vZGUobm9kZSkge1xyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHVubW91bnROb2RlKGNoaWxkKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5vZGUuZWxlbWVudFJlZikge1xyXG4gICAgbm9kZS5jbGVhbkxpc3RlbmVycygpO1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZS5lbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIG5vZGUuaW5zdGFuY2UuZGVzdHJveWVkKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgb3IgdGV4dCBub2RlIGluIERPTSB3aXRoIGl0cyBhcmd1bWVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChub2RlLCBwb3NpdGlvbikge1xyXG4gIGlmIChub2RlLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLnRhZyk7XHJcbiAgfSBlbHNlIGlmIChub2RlLmlzVHlwZSgnRWxlbWVudCcpKSB7XHJcbiAgICBjb25zdCBjbG9zZXN0V2l0aE5TID0gZmluZENsb3Nlc3ROb2RlKG5vZGUsICdbeG1sbnNdJyk7XHJcbiAgICBjb25zdCB4bWxucyA9IG5vZGUucGVuZGluZ1Byb3BzLnhtbG5zID8/IGNsb3Nlc3RXaXRoTlM/LnBlbmRpbmdQcm9wcy54bWxucyA/PyAnJztcclxuXHJcbiAgICBpZiAoeG1sbnMpIHtcclxuICAgICAgbm9kZS5lbGVtZW50UmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBub2RlLnRhZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUudGFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRFbCA9IGZpbmRDbG9zZXN0RE9NTm9kZShub2RlKTtcclxuICBjb25zdCBjaGlsZEF0ID0gcGFyZW50RWwuY2hpbGRyZW5bcG9zaXRpb25dO1xyXG5cclxuICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUobm9kZS5lbGVtZW50UmVmLCBjaGlsZEF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG5vZGUpIHtcclxuICBjb25zdCBkaWZmZWRQcm9wcyA9IGRpZmZQcm9wcyhub2RlLm9sZFByb3BzLCBub2RlLnBlbmRpbmdQcm9wcyk7XHJcblxyXG4gIGRpZmZlZFByb3BzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAgIGlmIChwcm9wLnR5cGUgPT09ICdSZW1vdmUnICkge1xyXG4gICAgICBoYW5kbGVSZW1vdmluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ0FkZCcgKSB7XHJcbiAgICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ1VwZGF0ZScgKSB7XHJcbiAgICAgIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCB7RW1wdHlPYmplY3QsIGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbn0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHtidWlsZFZpcnR1YWxUcmVlfSBmcm9tIFwiQC92aXJ0dWFsLW5vZGVcIjtcclxuXHJcbi8qKlxyXG4gKiBCdWlsZCBhbmQgbW91bnQgd2hvbGUgc3VidHJlZSBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmZ1bmN0aW9uIG1vdW50VmlydHVhbFN1YnRyZWUobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJ1BsYWNlbWVudCc7XHJcblxyXG4gIGlmIChub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIG5vZGUuY3JlYXRlQ29tcG9uZW50KCk7XHJcblxyXG4gICAgbGV0IHJlbmRlclJlc3VsdCA9IG5vZGUuaW5zdGFuY2UucmVuZGVyKCk7XHJcbiAgICByZW5kZXJSZXN1bHQgPSBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KTtcclxuICAgIGxldCBzdWJ0cmVlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpXHJcblxyXG4gICAgaWYgKHN1YnRyZWUpIHtcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdWJ0cmVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XHJcbiAgICBjaGlsZE5vZGUuZWZmZWN0ID0gJ1BsYWNlbWVudCc7XHJcbiAgICBtb3VudFZpcnR1YWxTdWJ0cmVlKGNoaWxkTm9kZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3B5IHJlZmVyZW5jZXMgc3VjaCBlbGVtZW50IHJlZmVyZW5jZSwgcHJvcHMgb3IgY29tcG9uZW50IGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVjdXJzaXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBjb3B5Tm9kZVJlZmVyZW5jZXMoY3VycmVudE5vZGUsIG5ld05vZGUsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XHJcbiAgaWYgKGN1cnJlbnROb2RlLnRhZyA9PT0gbmV3Tm9kZS50YWcpIHtcclxuICAgIG5ld05vZGUub2xkUHJvcHMgPSBjdXJyZW50Tm9kZS5vbGRQcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgIG5ld05vZGUuZWxlbWVudFJlZiA9IGN1cnJlbnROb2RlLmVsZW1lbnRSZWYgPz8gbnVsbDtcclxuXHJcbiAgICBpZiAobmV3Tm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICAgIG5ld05vZGUuaW5zdGFuY2UgPSBjdXJyZW50Tm9kZS5pbnN0YW5jZTtcclxuICAgICAgbmV3Tm9kZS5pbnN0YW5jZS5wcm9wcyA9IG5ld05vZGUucGVuZGluZ1Byb3BzID8/IEVtcHR5T2JqZWN0O1xyXG4gICAgICBuZXdOb2RlLnN0YXRlID0gY3VycmVudE5vZGUuc3RhdGU7XHJcbiAgICAgIG5ld05vZGUuc3RhdGVDaGFuZ2VkID0gY3VycmVudE5vZGUuc3RhdGVDaGFuZ2VkO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyZWN1cnNpdmUpIHtcclxuICAgIG5ld05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb3B5Tm9kZVJlZmVyZW5jZXMoY3VycmVudE5vZGUuY2hpbGRyZW5baW5kZXhdLCBjaGlsZE5vZGUsIHJlY3Vyc2l2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgcGVuZGluZyBwcm9wcyBhcmUgZGlmZmVyZW50IGZyb20gb2xkIHByb3BzLlxyXG4gKiBJdCdzIHNoYWxsb3cgY29tcGFyaXNvbiBzbyBvYmplY3QtbGlrZSBwcm9wcyBhcmUgY29tcGFyZWQgdGhyb3VnaCByZWZlcmVuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5Qcm9wc30gb2xkUHJvcHNcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwZW5kaW5nUHJvcHNcclxuICovXHJcbmZ1bmN0aW9uIGNvbXBhcmVQcm9wcyhvbGRQcm9wcywgcGVuZGluZ1Byb3BzKSB7XHJcbiAgaWYgKHR5cGVvZiBvbGRQcm9wcyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHBlbmRpbmdQcm9wcyAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChPYmplY3Qua2V5cyhvbGRQcm9wcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhwZW5kaW5nUHJvcHMpLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdQcm9wcykuZXZlcnkoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gb2xkUHJvcHNba2V5XTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB2aXJ0dWFsIG5vZGUgc2hvdWxkIGJlIHVwZGF0ZWQuXHJcbiAqIFZpcnR1YWwgbm9kZSBzaG91bGQgdXBkYXRlIGlmIG5vZGUncyBwcm9wcyBhcmUgY2hhbmdlZC5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZU5vZGUobm9kZSkge1xyXG4gIHJldHVybiAhY29tcGFyZVByb3BzKG5vZGUub2xkUHJvcHMsIG5vZGUucGVuZGluZ1Byb3BzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZXMgdmlydHVhbCBub2RlIGFuZCBpZiBpdCBpcyBjb21wb25lbnQgdGhlbiB0cnkgdG8gZ2V0IG5ldyByZW5kZXIgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVOb2RlKG5vZGUpIHtcclxuICBub2RlLmVmZmVjdCA9ICdVcGRhdGUnO1xyXG4gIG5vZGUucGVuZGluZ1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gIGlmICghbm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgcmVuZGVyUmVzdWx0ID0gbm9kZS5pbnN0YW5jZS5yZW5kZXIoKTtcclxuICByZW5kZXJSZXN1bHQgPSBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KTtcclxuICBjb25zdCBzdWJ0cmVlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpXHJcblxyXG4gIGlmIChzdWJ0cmVlKSB7XHJcbiAgICBub2RlLmVtcHR5KCk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldXNlIGN1cnJlbnQgdmlydHVhbCBub2RlIHdpdGggY2hpbGRyZW4gb2YgbmV3IHZpcnR1YWwgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gcmV1c2VOb2RlKGN1cnJlbnROb2RlLCBuZXdOb2RlKSB7XHJcbiAgY29uc3QgY2xvbmVkQ3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5jbG9uZSgpO1xyXG5cclxuICBpZiAobmV3Tm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICBsZXQgcmVuZGVyUmVzdWx0ID0gbmV3Tm9kZS5pbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gICAgY29uc3Qgc3VidHJlZSA9IGJ1aWxkVmlydHVhbFRyZWUocmVuZGVyUmVzdWx0KVxyXG5cclxuICAgIGlmIChzdWJ0cmVlKSB7XHJcbiAgICAgIG5ld05vZGUuZW1wdHkoKTtcclxuICAgICAgbmV3Tm9kZS5hcHBlbmRDaGlsZChzdWJ0cmVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb25lZEN1cnJlbnROb2RlLnBhcmVudCA9IG5ld05vZGUucGFyZW50O1xyXG4gIGNsb25lZEN1cnJlbnROb2RlLmNoaWxkcmVuID0gbmV3Tm9kZS5jaGlsZHJlbjtcclxuXHJcbiAgbmV3Tm9kZS5jb3B5RnJvbShjbG9uZWRDdXJyZW50Tm9kZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyBhIHZpcnR1YWwgbm9kZSBiYXNlZCBvbiBpdCdzIGRlZmluZWQga2V5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICovXHJcbmZ1bmN0aW9uIGZpbmROb2RlV2l0aEtleShub2RlLCBrZXkpIHtcclxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgIGlmIChjaGlsZC5rZXkgPT09IGtleSkge1xyXG4gICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIGEgbWF0Y2hpbmcgY2hpbGQgaW4gY3VycmVudCBub2RlIGJhc2VkIG9uIHBvc2l0aW9uIG9yIGtleS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Q2hpbGROb2RlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gZmluZE1hdGNoaW5nQ2hpbGROb2RlKGN1cnJlbnROb2RlLCBuZXdDaGlsZE5vZGUsIHBvc2l0aW9uKSB7XHJcbiAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZX0gKi9cclxuICBsZXQgZm91bmROb2RlID0gbnVsbFxyXG5cclxuICBpZiAoIWN1cnJlbnROb2RlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmIChuZXdDaGlsZE5vZGUua2V5KSB7XHJcbiAgICBmb3VuZE5vZGUgPSBmaW5kTm9kZVdpdGhLZXkoY3VycmVudE5vZGUsIG5ld0NoaWxkTm9kZS5rZXkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZvdW5kTm9kZSkge1xyXG4gICAgcmV0dXJuIGZvdW5kTm9kZTtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPD0gcG9zaXRpb24pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGN1cnJlbnROb2RlLmNoaWxkcmVuW3Bvc2l0aW9uXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIG5vZGVzIGF0IHRoZSBzYW1lIHBvc2l0aW9uIGluIHR3byBkaWZmZXJlbnQgdHJlZXMgYW5kIG1hcmtzIGVmZmVjdHNcclxuICogdGhhdCBuZWVkcyB0byBiZSBsYXRlciBwcm9jZXNzZWQuXHJcbiAqXHJcbiAqIFBvc3NpYmxlIGVmZmVjdHM6XHJcbiAqIC0gUGxhY2VtZW50IChtYXJrZWQgZm9yIHBsYWNpbmcgYXMgbmV3IERPTSBlbGVtZW50KVxyXG4gKiAtIFVwZGF0ZSAobWFya2VkIGZvciB1cGRhdGluZyBwcm9wcyBvZiBET00gZWxlbWVudClcclxuICogLSBEZWxldGlvbiAobWFya2VkIGZvciByZW1vdmluZyBET00gZWxlbWVudClcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShjdXJyZW50Tm9kZSwgbmV3Tm9kZSkge1xyXG4gIGlmIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS50YWcgIT09IG5ld05vZGUudGFnKSB7XHJcbiAgICBjdXJyZW50Tm9kZS5lZmZlY3QgPSAnRGVsZXRpb24nO1xyXG4gICAgbW91bnRWaXJ0dWFsU3VidHJlZShuZXdOb2RlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghY3VycmVudE5vZGUpIHtcclxuICAgIG1vdW50VmlydHVhbFN1YnRyZWUobmV3Tm9kZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIGlmICghbmV3Tm9kZS5pc1R5cGUoJ1Jvb3QnKSkge1xyXG4gICAgY29weU5vZGVSZWZlcmVuY2VzKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlTm9kZShuZXdOb2RlKSkge1xyXG4gICAgICB1cGRhdGVOb2RlKG5ld05vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV1c2VOb2RlKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZENoaWxkcmVuID0gW107XHJcbiAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGluZ0NoaWxkID0gZmluZE1hdGNoaW5nQ2hpbGROb2RlKGN1cnJlbnROb2RlLCBjaGlsZE5vZGUsIGluZGV4KTtcclxuXHJcbiAgICByZWNvbmNpbGUobWF0Y2hpbmdDaGlsZCwgY2hpbGROb2RlKTtcclxuICAgIHByb2Nlc3NlZENoaWxkcmVuLnB1c2gobWF0Y2hpbmdDaGlsZCk7XHJcbiAgfSk7XHJcblxyXG4gIGN1cnJlbnROb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcclxuICAgIGlmICghcHJvY2Vzc2VkQ2hpbGRyZW4uaW5jbHVkZXMoY2hpbGROb2RlKSkge1xyXG4gICAgICBjaGlsZE5vZGUuZWZmZWN0ID0gJ0RlbGV0aW9uJztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRyYXZlcnNlIHRocm91Z2ggYWxsIHZpcnR1YWwgbm9kZXMgaW4gdmlydHVhbCB0cmVlIGFuZCByZXNvbHZlIGVmZmVjdHMgdGhhdCBuZWVkcyB0byBiZSBwcm9jZXNzZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLkVmZmVjdFtdfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKG5vZGUsIHBvc2l0aW9uID0gMCkge1xyXG4gIC8qKiBAdHlwZSB7U3BhcmtKUy5FZmZlY3RbXX0gKi9cclxuICBsZXQgZWZmZWN0cyA9IFtdO1xyXG5cclxuICBpZiAoIW5vZGUpIHtcclxuICAgIHJldHVybiBlZmZlY3RzO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5vZGUuZWZmZWN0ICE9PSAnJykge1xyXG4gICAgZWZmZWN0cy5wdXNoKHtcclxuICAgICAgdHlwZTogbm9kZS5lZmZlY3QsXHJcbiAgICAgIHBhcmVudDogbm9kZS5wYXJlbnQsXHJcbiAgICAgIG5vZGVSZWY6IG5vZGUsXHJcbiAgICAgIHBvc2l0aW9uLFxyXG4gICAgfSk7XHJcbiAgICBub2RlLmVmZmVjdCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgIGVmZmVjdHMgPSBbXHJcbiAgICAgIC4uLmVmZmVjdHMsXHJcbiAgICAgIC4uLnJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKGNoaWxkLCBpbmRleCksXHJcbiAgICBdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZWZmZWN0cztcclxufVxyXG5cclxuLyoqXHJcbiAqIENsZWFucyBhbGwgaW5kaWNhdG9ycyBhbmQgZWZmZWN0cyBmcm9tIHZpcnR1YWwgdHJ1ZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFuTm9kZXMobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJyc7XHJcbiAgbm9kZS5zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgaWYgKCFjb21wYXJlUHJvcHMobm9kZS5vbGRQcm9wcywgbm9kZS5wZW5kaW5nUHJvcHMpKSB7XHJcbiAgICBub2RlLm9sZFByb3BzID0gbm9kZS5wZW5kaW5nUHJvcHM7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBjbGVhbk5vZGVzKGNoaWxkKTtcclxuICB9KTtcclxufSIsImltcG9ydCB7YnVpbGRWaXJ0dWFsVHJlZVJvb3QsIGZpbmROb2RlQnlDb21wb25lbnR9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5pbXBvcnQge2NsZWFuTm9kZXMsIHJlY29uY2lsZSwgcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXN9IGZyb20gXCJAL3JlY29uY2lsZXJcIjtcclxuaW1wb3J0IHtjcmVhdGVFbGVtZW50LCB1bm1vdW50Tm9kZSwgdXBkYXRlRWxlbWVudH0gZnJvbSBcIkAvZG9tXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhcmsge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cclxuICAgIHRoaXMuX3Jvb3RFbCA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuUmVuZGVyQ2FsbGJhY2t9ICovXHJcbiAgICB0aGlzLl9yb290RnVuYyA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gICAgdGhpcy5fdmlydHVhbFRyZWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIEpTWCBzdHJ1Y3R1cmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geygpID0+IFNwYXJrSlMuUmVuZGVyUmVzdWx0fSByb290Rm5cclxuICAgKi9cclxuICBzZXRSb290RnVuY3Rpb24ocm9vdEZuKSB7XHJcbiAgICB0aGlzLl9yb290RnVuYyA9IHJvb3RGbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdW50cyBhcHBsaWNhdGlvbiB0byBIVE1MIGVsZW1lbnQgYW5kIHRyaWdnZXIgcmVuZGVyLlxyXG4gICAqIEl0IHRocm93cyBlcnJvciBpZiByb290IGVsZW1lbnQgaXNuJ3QgZm91bmQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gbW91bnRFbFxyXG4gICAqL1xyXG4gIG1vdW50KG1vdW50RWwpIHtcclxuICAgIGlmICh0eXBlb2YgbW91bnRFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb3VudEVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Jvb3RFbCA9IG1vdW50RWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEodGhpcy5fcm9vdEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSByb290IGVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl9yb290RWwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIHJvb3QgZWxlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclJlc3VsdCA9IHRoaXMuX3Jvb3RGdW5jKCk7XHJcbiAgICBjb25zdCBuZXdWaXJ0dWFsVHJlZSA9IGJ1aWxkVmlydHVhbFRyZWVSb290KHJlbmRlclJlc3VsdCk7XHJcblxyXG4gICAgcmVjb25jaWxlKHRoaXMuX3ZpcnR1YWxUcmVlLCBuZXdWaXJ0dWFsVHJlZSk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRpb25zID0gcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXModGhpcy5fdmlydHVhbFRyZWUpO1xyXG4gICAgY29uc3QgbmV3Q2hhbmdlcyA9IHJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKG5ld1ZpcnR1YWxUcmVlKTtcclxuXHJcbiAgICBkZWxldGlvbnMuZm9yRWFjaCgoZWZmZWN0KSA9PiB7XHJcbiAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gJ0RlbGV0aW9uJykge1xyXG4gICAgICAgIHVubW91bnROb2RlKGVmZmVjdC5ub2RlUmVmKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdmlydHVhbFRyZWUgPSBuZXdWaXJ0dWFsVHJlZTtcclxuICAgIHRoaXMuX3ZpcnR1YWxUcmVlLmVsZW1lbnRSZWYgPSB0aGlzLl9yb290RWw7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZVtdfSAqL1xyXG4gICAgY29uc3QgbW91bnRlZENvbXBvbmVudE5vZGVzID0gW107XHJcbiAgICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlW119ICovXHJcbiAgICBjb25zdCB1cGRhdGVkQ29tcG9uZW50Tm9kZXMgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0NoYW5nZXMpO1xyXG4gICAgbmV3Q2hhbmdlcy5mb3JFYWNoKChlZmZlY3QpID0+IHtcclxuICAgICAgaWYgKGVmZmVjdC50eXBlID09PSAnUGxhY2VtZW50Jykge1xyXG4gICAgICAgIGhhbmRsZVBsYWNlbWVudChlZmZlY3QsIG1vdW50ZWRDb21wb25lbnROb2Rlcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWZmZWN0LnR5cGUgPT09ICdVcGRhdGUnKSB7XHJcbiAgICAgICAgaGFuZGxlVXBkYXRlKGVmZmVjdCwgdXBkYXRlZENvbXBvbmVudE5vZGVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xlYW5Ob2Rlcyh0aGlzLl92aXJ0dWFsVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICAgKi9cclxuICBvblN0YXRlQ2hhbmdlZChjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IGZvdW5kTm9kZSA9IGZpbmROb2RlQnlDb21wb25lbnQodGhpcy5fdmlydHVhbFRyZWUsIGNvbXBvbmVudCk7XHJcblxyXG4gICAgaWYgKCFmb3VuZE5vZGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdTa2lwcGluZyByZW5kZXIuIEEgcmVuZGVyIG5vZGUgbm90IGZvdW5kIGZvciBjb21wb25lbnQ6ICcgKyBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXF1ZXN0IHRvIHJlLXJlbmRlciBhcHBsaWNhdGlvbi5cclxuICAgIGZvdW5kTm9kZS5zdGF0ZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgZm91bmROb2RlLnN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgY29tcG9uZW50IG5vZGVzIGFyZSByZWFkeSB0byB0cmlnZ2VyIGhvb2tzIGZvciBtb3VudGluZyBvciB1cGRhdGluZy5cclxuICogV2hpY2ggaG9vayB0byB0cmlnZ2VyIGRlcGVuZHMgb24gZ2l2ZW4gYWN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlW119IGNvbXBvbmVudE5vZGVzXHJcbiAqIEBwYXJhbSB7J21vdW50J3wndXBkYXRlJ31hY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnROb2Rlcyhjb21wb25lbnROb2RlcywgYWN0aW9uID0gJ21vdW50Jykge1xyXG4gIGlmICghWydtb3VudCcsICd1cGRhdGUnXS5pbmNsdWRlcyhhY3Rpb24pKSB7XHJcbiAgICBhY3Rpb24gPSAnbW91bnQnO1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKGNvbXBvbmVudE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChhY3Rpb24gPT09ICdtb3VudCcgJiYgIWNvbXBvbmVudE5vZGVzWzBdLmFsbENoaWxkcmVuTW91bnRlZCgpKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd1cGRhdGUnICYmICFjb21wb25lbnROb2Rlc1swXS5hbGxDaGlsZHJlblVwZGF0ZWQoKSkge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uID09PSAnbW91bnQnKSB7XHJcbiAgICAgIGNvbXBvbmVudE5vZGVzWzBdLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICBjb21wb25lbnROb2Rlc1swXS5pbnN0YW5jZS5tb3VudGVkKCk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3VwZGF0ZScpIHtcclxuICAgICAgY29tcG9uZW50Tm9kZXNbMF0uaW5zdGFuY2UudXBkYXRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudE5vZGVzLnNoaWZ0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBlZmZlY3QgZm9yIHBsYWNpbmcgYSBuZXcgSFRNTCBlbGVtZW50IG9yIHRleHQgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLkVmZmVjdH0gZWZmZWN0XHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGVbXX0gY29tcG9uZW50Tm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVBsYWNlbWVudChlZmZlY3QsIGNvbXBvbmVudE5vZGVzKSB7XHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIGNvbXBvbmVudE5vZGVzLnVuc2hpZnQoZWZmZWN0Lm5vZGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnRWxlbWVudCcpIHx8IGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICBjcmVhdGVFbGVtZW50KGVmZmVjdC5ub2RlUmVmLCBlZmZlY3QucG9zaXRpb24pO1xyXG4gICAgLy8gVE9ETzogYXNzaWduIHJlZiBmcm9tIGVsZW1lbnQgcmVmXHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tcG9uZW50Tm9kZXMoY29tcG9uZW50Tm9kZXMsICdtb3VudCcpO1xyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBlZmZlY3QgZm9yIHVwZGF0aW5nIGV4aXN0aW5nIEhUTUwgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLkVmZmVjdH0gZWZmZWN0XHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGVbXX0gY29tcG9uZW50Tm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShlZmZlY3QsIGNvbXBvbmVudE5vZGVzKSB7XHJcbiAgZWZmZWN0Lm5vZGVSZWYucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBpZiAoZWZmZWN0Lm5vZGVSZWYuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgY29tcG9uZW50Tm9kZXMudW5zaGlmdChlZmZlY3Qubm9kZVJlZik7XHJcbiAgfVxyXG5cclxuICBpZiAoZWZmZWN0Lm5vZGVSZWYuaXNUeXBlKCdFbGVtZW50JykpIHtcclxuICAgIHVwZGF0ZUVsZW1lbnQoZWZmZWN0Lm5vZGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0NvbXBvbmVudE5vZGVzKGNvbXBvbmVudE5vZGVzLCAndXBkYXRlJyk7XHJcbn0iLCJleHBvcnQgY29uc3QgRW1wdHlPYmplY3QgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBGbGF0dGVuIGNoaWxkcmVuIG9mIHJlbmRlciByZXN1bHQgaWYgYW55IG9mIHRoZW0gaXMgdHlwZSBvZiBhcnJheS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlJlbmRlclJlc3VsdH0gcmVuZGVyUmVzdWx0XHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLlJlbmRlclJlc3VsdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KSB7XHJcbiAgaWYgKHR5cGVvZiByZW5kZXJSZXN1bHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqIEB0eXBlIHtSZW5kZXJSZXN1bHRbXX0gKi9cclxuICBsZXQgY2hpbGRyZW4gPSBbXTtcclxuICByZW5kZXJSZXN1bHQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XHJcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRyZW4gPSBbXHJcbiAgICAgIC4uLmNoaWxkcmVuLFxyXG4gICAgICAuLi5jaGlsZCxcclxuICAgIF07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5yZW5kZXJSZXN1bHQsXHJcbiAgICBjaGlsZHJlbixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQ2xhc3NOYW1lKHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNsYXNzVG9rZW5zID0gIUFycmF5LmlzQXJyYXkodmFsdWUpID8gT2JqZWN0LmtleXModmFsdWUpLmZpbHRlcigoY2xhc3NOYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWVbY2xhc3NOYW1lXTtcclxuICB9KSA6IHZhbHVlO1xyXG5cclxuICBjbGFzc1Rva2VucyA9IGNsYXNzVG9rZW5zLmZpbHRlcigoY2xhc3NOYW1lLCBpbmRleCwgdG9rZW5zKSA9PiB7XHJcbiAgICByZXR1cm4gdG9rZW5zLmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gaW5kZXg7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjbGFzc1Rva2Vucy5qb2luKCcgJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlU3R5bGUodmFsdWUpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignU3R5bGUgY2Fubm90IGJlIHVzZSBhcyBhcnJheSEnKTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyh2YWx1ZSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgIGlmICgvXlthLXpdKltBLVpdLy50ZXN0KGtleSkpIHtcclxuICAgICAgY29uc3Qga2V5VG9rZW5zID0ga2V5LnNwbGl0KC8oPz1bQS1aXSkvKS5tYXAoKHRva2VuKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAga2V5ID0ga2V5VG9rZW5zLmpvaW4oJy0nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7a2V5fTogJHt2YWx1ZX1gO1xyXG4gIH0pLmpvaW4oJzsgJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IG9sZFByb3BzXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5Qcm9wc30gcGVuZGluZ1Byb3BzXHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLlByb3BzRGlmZltdfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZQcm9wcyhvbGRQcm9wcywgcGVuZGluZ1Byb3BzKSB7XHJcbiAgLyoqIEB0eXBlIHtTcGFya0pTLlByb3BzRGlmZltdfSAqL1xyXG4gIGNvbnN0IHByb3BEaWZmcyA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nUHJvcHMpKSB7XHJcbiAgICBpZiAob2xkUHJvcHNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IG9sZFByb3BzW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgcHJvcERpZmZzLnB1c2goeyB0eXBlOiAnQWRkJywgbmFtZToga2V5LCB2YWx1ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG9sZFByb3BzW2tleV0pIHtcclxuICAgICAgcHJvcERpZmZzLnB1c2goeyB0eXBlOiAnVXBkYXRlJywgbmFtZToga2V5LCB2YWx1ZSwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvbGRQcm9wcykpIHtcclxuICAgIGlmIChwZW5kaW5nUHJvcHNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHBlbmRpbmdQcm9wc1trZXldID09PSBudWxsKSB7XHJcbiAgICAgIHByb3BEaWZmcy5wdXNoKHsgdHlwZTogJ1JlbW92ZScsIG5hbWU6IGtleSwgdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcERpZmZzO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0RE9NTm9kZShub2RlKSB7XHJcbiAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcclxuXHJcbiAgd2hpbGUgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLnBhcmVudCkge1xyXG4gICAgaWYgKGN1cnJlbnROb2RlLnBhcmVudC5lbGVtZW50UmVmKSB7XHJcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQuZWxlbWVudFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59IiwiaW1wb3J0IHtFbXB0eU9iamVjdH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IGh0bWxUYWdzIGZyb20gXCJodG1sLXRhZ3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxOb2RlIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyB2aXJ0dWFsIG5vZGUgd2l0aCB0eXBlLCB0YWcgYW5kIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVR5cGV9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVRhZ30gdGFnXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVQcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0eXBlLCB0YWcsIHByb3BzID0ge30pIHtcclxuICAgIGNvbnN0IHsga2V5LCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcyA/PyB7fTtcclxuXHJcbiAgICAvKiogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAvLyBSZWZlcmVuY2UgcHJvcGVydGllc1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlByb3BzfSAqL1xyXG4gICAgdGhpcy5vbGRQcm9wcyA9IEVtcHR5T2JqZWN0O1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlByb3BzfSAqL1xyXG4gICAgdGhpcy5wZW5kaW5nUHJvcHMgPSBwcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi9cclxuICAgIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7Q29tcG9uZW50fG51bGx9ICovXHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR8bnVsbH0gKi9cclxuICAgIHRoaXMuZWxlbWVudFJlZiA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIFNwYXJrSlMuRXZlbnRMaXN0ZW5lcltdPn0gKi9cclxuICAgIHRoaXMubGlzdGVuZXJzID0gRW1wdHlPYmplY3Q7XHJcblxyXG4gICAgLy8gSW5kaWNhdG9yIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5FZmZlY3RUeXBlfSAqL1xyXG4gICAgdGhpcy5lZmZlY3QgPSAnJztcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cclxuICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG4gICAgdGhpcy5wZW5kaW5nVXBkYXRlID0gZmFsc2U7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXHJcbiAgICB0aGlzLnN0YXRlQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIE5vZGUgcHJvcGVydGllc1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZXxudWxsfSAqL1xyXG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZVtdfSAqL1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHZpcnR1YWwgbm9kZSBpcyBvZiBjZXJ0YWluIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVR5cGV9IHR5cGVcclxuICAgKi9cclxuICBpc1R5cGUodHlwZSkge1xyXG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gdHlwZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbGwgY2hpbGRyZW4gd2VyZSBtb3VudGVkIGludG8gRE9NLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgYWxsQ2hpbGRyZW5Nb3VudGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChjb3VudCwgY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChjaGlsZE5vZGUuaXNUeXBlKCdFbGVtZW50JykgfHwgY2hpbGROb2RlLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gY2hpbGROb2RlLmVsZW1lbnRSZWYgIT09IG51bGw7XHJcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGROb2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgICAgICByZXN1bHQgPSBjaGlsZE5vZGUubW91bnRlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNvdW50ICsgKHJlc3VsdCAmJiBjaGlsZE5vZGUuYWxsQ2hpbGRyZW5Nb3VudGVkKCkgPyAxIDogMCk7XHJcbiAgICB9LCAwKSA9PT0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIGNoaWxkcmVuIHdlcmUgdXBkYXRlZCBpbiBET00uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICAgKi9cclxuICBhbGxDaGlsZHJlblVwZGF0ZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5yZWR1Y2UoKGNvdW50LCBjaGlsZE5vZGUpID0+IHtcclxuICAgICAgcmV0dXJuIGNvdW50ICsgKCFjaGlsZE5vZGUucGVuZGluZ1VwZGF0ZSAmJiBjaGlsZE5vZGUuYWxsQ2hpbGRyZW5VcGRhdGVkKCkgPyAxIDogMCk7XHJcbiAgICB9LCAwKSA9PT0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGEgbGlzdGVuZXIgdG8gSFRNTCBlbGVtZW50IGFuZCBzdG9yZSBpdCdzIHJlZmVyZW5jZSBpbnRvIGxpc3RlbmVycyBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5FdmVudExpc3RlbmVyfSBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIGFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIGlmICghdGhpcy5lbGVtZW50UmVmKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubGlzdGVuZXJzW3R5cGVdKSB7XHJcbiAgICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgdGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFuIGV2ZW50IGxpc3RlbmVyIGZyb20gSFRNTCBlbGVtZW50IGFuZCBmcm9tIGxpc3RlbmVycyBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5FdmVudExpc3RlbmVyfSBsaXN0ZW5lclxyXG4gICAqL1xyXG4gIHJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIC8qKiBAdHlwZSB7RXZlbnRMaXN0ZW5lcltdfSAqL1xyXG4gICAgY29uc3QgbGlzdGVuZXJzV2l0aFR5cGUgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSA/PyBbXTtcclxuXHJcbiAgICBpZiAobGlzdGVuZXJzV2l0aFR5cGUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZm91bmRMaXN0ZW5lckluZGV4ID0gLTE7XHJcbiAgICBjb25zdCBmb3VuZExpc3RlbmVyID0gbGlzdGVuZXJzV2l0aFR5cGUuZmluZCgoYW5vdGhlckxpc3RlbmVyLCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoYW5vdGhlckxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xyXG4gICAgICAgIGZvdW5kTGlzdGVuZXJJbmRleCA9IGluZGV4O1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIWZvdW5kTGlzdGVuZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBldmVudCBsaXN0ZW5lciBmb3IgJHt0eXBlfSBvbiBub2RlICR7dGhpcy50YWd9IG5vdCBmb3VuZC4gQ2F1c2U6IGV2ZW50IGxpc3RlbmVyIHByb2JhYmx5IHdhc24ndCBib3VuZCBpbiBjb25zdHJ1Y3Rvci5gKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcik7XHJcbiAgICBsaXN0ZW5lcnNXaXRoVHlwZS5zcGxpY2UoZm91bmRMaXN0ZW5lckluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFucyBhbGwgbGlzdGVuZXJzIGZyb20gSFRNTCBlbGVtZW50IGFuZCBmcm9tIGxpc3RlbmVycyBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAgICovXHJcbiAgY2xlYW5MaXN0ZW5lcnMoKSB7XHJcbiAgICBmb3IgKGNvbnN0IFt0eXBlLCBsaXN0ZW5lcnNdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubGlzdGVuZXJzKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudFJlZikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IEVtcHR5T2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiBjb21wb25lbnQgYW5kIGNvcHkgaXQncyBzdGF0ZSBpbnRvIHZpcnR1YWwgb2RlJ3Mgc3RhdGUuXHJcbiAgICovXHJcbiAgY3JlYXRlQ29tcG9uZW50KCkge1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG5ldyB0aGlzLnRhZyh0aGlzLnBlbmRpbmdQcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy5pbnN0YW5jZS5zdGF0ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGVuZHMgYSBjaGlsZCBub2RlIGludG8gY3VycmVudCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gICAqL1xyXG4gIGFwcGVuZENoaWxkKG5vZGUpIHtcclxuICAgIG5vZGUucGFyZW50ID0gdGhpcztcclxuICAgIHRoaXMuY2hpbGRyZW4ucHVzaChub2RlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcGxhY2VzIGEgY2hpbGQgbm9kZSBpbiBjdXJyZW50IG5vZGUgd2l0aCBhIG5ldyBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG9sZE5vZGVcclxuICAgKi9cclxuICByZXBsYWNlQ2hpbGQobmV3Tm9kZSwgb2xkTm9kZSkge1xyXG4gICAgY29uc3QgaW5kZXhPZiA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihvbGROb2RlKTtcclxuXHJcbiAgICBpZiAoaW5kZXhPZiA+PSAwKSB7XHJcbiAgICAgIG5ld05vZGUucGFyZW50ID0gdGhpcztcclxuICAgICAgdGhpcy5jaGlsZHJlbltpbmRleE9mXS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuW2luZGV4T2ZdID0gbmV3Tm9kZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSBjaGlsZCBub2RlIGZyb20gY3VycmVudCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gICAqL1xyXG4gIHJlbW92ZUNoaWxkKG5vZGUpIHtcclxuICAgIGNvbnN0IGluZGV4T2YgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2Yobm9kZSk7XHJcblxyXG4gICAgaWYgKGluZGV4T2YgPj0gMCkge1xyXG4gICAgICBub2RlLnBhcmVudCA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGluZGV4T2YsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbGwgY2hpbGRyZW4gZnJvbSBjdXJyZW50IG5vZGUuXHJcbiAgICovXHJcbiAgZW1wdHkoKSB7XHJcbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFub3RoZXIgaW5zdGFuY2Ugd2l0aCBzYW1lIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7VmlydHVhbE5vZGV9XHJcbiAgICovXHJcbiAgY2xvbmUoKSB7XHJcbiAgICBjb25zdCBjbG9uZWQgPSBuZXcgVmlydHVhbE5vZGUodGhpcy50eXBlLCB0aGlzLnRhZywge1xyXG4gICAgICBrZXk6IHRoaXMua2V5LFxyXG4gICAgICAuLi50aGlzLnBlbmRpbmdQcm9wc1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHByb3BlcnRpZXNcclxuICAgIGNsb25lZC5vbGRQcm9wcyA9IHRoaXMub2xkUHJvcHM7XHJcbiAgICBjbG9uZWQucGVuZGluZ1Byb3BzID0gdGhpcy5wZW5kaW5nUHJvcHM7XHJcbiAgICBjbG9uZWQuc3RhdGUgPSB0aGlzLnN0YXRlO1xyXG4gICAgY2xvbmVkLmluc3RhbmNlID0gdGhpcy5pbnN0YW5jZTtcclxuICAgIGNsb25lZC5lbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmO1xyXG4gICAgY2xvbmVkLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzO1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQuZWZmZWN0ID0gdGhpcy5lZmZlY3Q7XHJcbiAgICBjbG9uZWQubW91bnRlZCA9IHRoaXMubW91bnRlZDtcclxuICAgIGNsb25lZC5wZW5kaW5nVXBkYXRlID0gdGhpcy5wZW5kaW5nVXBkYXRlO1xyXG4gICAgY2xvbmVkLnN0YXRlQ2hhbmdlZCA9IHRoaXMuc3RhdGVDaGFuZ2VkO1xyXG5cclxuICAgIC8vIE5vZGUgcHJvcGVydGllc1xyXG4gICAgY2xvbmVkLnBhcmVudCA9IHRoaXMucGFyZW50O1xyXG4gICAgY2xvbmVkLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcclxuXHJcbiAgICByZXR1cm4gY2xvbmVkO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29weSBhbGwgZGF0YSBmcm9tIHNvdXJjZSB2aXJ0dWFsIG5vZGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBzb3VyY2VOb2RlXHJcbiAgICovXHJcbiAgY29weUZyb20oc291cmNlTm9kZSkge1xyXG4gICAgdGhpcy5rZXkgPSBzb3VyY2VOb2RlLmtleTtcclxuICAgIHRoaXMudHlwZSA9IHNvdXJjZU5vZGUudHlwZTtcclxuICAgIHRoaXMudGFnID0gc291cmNlTm9kZS50YWc7XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHByb3BlcnRpZXNcclxuICAgIHRoaXMub2xkUHJvcHMgPSBzb3VyY2VOb2RlLm9sZFByb3BzO1xyXG4gICAgdGhpcy5wZW5kaW5nUHJvcHMgPSBzb3VyY2VOb2RlLnBlbmRpbmdQcm9wcztcclxuICAgIHRoaXMuc3RhdGUgPSBzb3VyY2VOb2RlLnN0YXRlO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IHNvdXJjZU5vZGUuaW5zdGFuY2U7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBzb3VyY2VOb2RlLmVsZW1lbnRSZWY7XHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IHNvdXJjZU5vZGUubGlzdGVuZXJzO1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLmVmZmVjdCA9IHNvdXJjZU5vZGUuZWZmZWN0O1xyXG4gICAgdGhpcy5tb3VudGVkID0gc291cmNlTm9kZS5tb3VudGVkO1xyXG4gICAgdGhpcy5wZW5kaW5nVXBkYXRlID0gc291cmNlTm9kZS5wZW5kaW5nVXBkYXRlO1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZWQgPSBzb3VyY2VOb2RlLnN0YXRlQ2hhbmdlZDtcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIHRoaXMucGFyZW50ID0gc291cmNlTm9kZS5wYXJlbnQ7XHJcbiAgICB0aGlzLmNoaWxkcmVuID0gc291cmNlTm9kZS5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTWFtdfSBqc3hBcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tLZXlzSW5Kc3hBcnJheShqc3hBcnJheSkge1xyXG4gIGNvbnN0IHVzZWRLZXlzID0gW107XHJcblxyXG4gIHJldHVybiBqc3hBcnJheS5ldmVyeSgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKCFpdGVtLmF0dHJpYnV0ZXMgfHwgIWl0ZW0uYXR0cmlidXRlcy5rZXkgfHwgdXNlZEtleXMuaW5jbHVkZXMoaXRlbS5hdHRyaWJ1dGVzLmtleSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZWRLZXlzLnB1c2goaXRlbS5hdHRyaWJ1dGVzLmtleSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5SZW5kZXJSZXN1bHR9IHJlbmRlclJlc3VsdFxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfG51bGx9IHBhcmVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVmlydHVhbFRyZWUocmVuZGVyUmVzdWx0LCBwYXJlbnQgPSBudWxsKSB7XHJcbiAgbGV0IHtcclxuICAgIGVsZW1lbnROYW1lID0gcmVuZGVyUmVzdWx0ID8/ICcnLFxyXG4gICAgYXR0cmlidXRlcyA9IHt9LFxyXG4gICAgY2hpbGRyZW4gPSBbXVxyXG4gIH0gPSByZW5kZXJSZXN1bHQgPz8ge307XHJcblxyXG4gIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV9ICovXHJcbiAgbGV0IG5vZGU7XHJcblxyXG4gIGlmICh0eXBlb2YgZWxlbWVudE5hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ0NvbXBvbmVudCcsIGVsZW1lbnROYW1lLCB7IGNoaWxkcmVuLCAuLi5hdHRyaWJ1dGVzIH0pO1xyXG4gICAgY2hpbGRyZW4gPSBbXTtcclxuICB9IGVsc2UgaWYgKFsuLi5odG1sVGFnc10uaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7IC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBTVkcgZWxlbWVudHNcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ0VsZW1lbnQnLCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudE5hbWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBjYW5ub3QgYmUgcmVuZGVyZWQgYXMgSlNYIG5vZGUhJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ1RleHQnLCBlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBpZiAocGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICBjaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgaWYgKCFjaGlsZE5vZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgaWYgKCFjaGVja0tleXNJbkpzeEFycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER5bmFtaWNhbGx5IG1hcHBlZCBub2RlcyBpbiBsb29wIG11c3QgaGF2ZSB1bmlxdWUga2V5cyBzcGVjaWZpZWQgaW4gXCJrZXlcIiBwcm9wLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaGlsZE5vZGUuZm9yRWFjaChhbm90aGVyQ2hpbGROb2RlID0+IHtcclxuICAgICAgICBidWlsZFZpcnR1YWxUcmVlKGFub3RoZXJDaGlsZE5vZGUsIG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1aWxkVmlydHVhbFRyZWUoY2hpbGROb2RlLCBub2RlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyBjbG9zZXN0IHBhcmVudCBiYXNlZCBvbiBzZWxlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdE5vZGUobm9kZSwgc2VsZWN0b3IpIHtcclxuICBpZiAoIXNlbGVjdG9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc2VsZWN0b3IgY2FuXFwndCBiZSBlbXB0eSBzdHJpbmcnKTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gIHdoaWxlIChjdXJyZW50Tm9kZT8ucGFyZW50KSB7XHJcbiAgICBjb25zdCBwYXJlbnRQcm9wcyA9IGN1cnJlbnROb2RlLnBhcmVudC5wZW5kaW5nUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcblxyXG4gICAgaWYgKGN1cnJlbnROb2RlLnBhcmVudC50eXBlICE9PSAnZWxlbWVudCcpIHtcclxuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykgJiYgcGFyZW50UHJvcHMuaWQgPT09IHNlbGVjdG9yLnN1YnN0cmluZygxKSkge1xyXG4gICAgICByZXR1cm4gIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aCgnLicpICYmIHBhcmVudFByb3BzLmNsYXNzID09PSBzZWxlY3Rvci5zdWJzdHJpbmcoMSkpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoL1tbYS16QS1aMC05XFwtX10qKD86PVwiW2EtekEtWjAtOVxcLV9dKlwiKT9dLy50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdG9yLnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQucGVuZGluZ1Byb3BzW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY3VycmVudE5vZGUucGFyZW50LnRhZyA9PT0gc2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgYSB2aXJ0dWFsIG5vZGUgdGhhdCBpcyBmb3VuZCBieSBnaXZlbiBjb21wb25lbnQgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtICB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICogQHJldHVybnMge1ZpcnR1YWxOb2RlfG51bGx9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZE5vZGVCeUNvbXBvbmVudChub2RlLCBjb21wb25lbnQpIHtcclxuICBsZXQgZm91bmROb2RlID0gbnVsbDtcclxuXHJcbiAgaWYgKG5vZGUuaW5zdGFuY2UgPT09IGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBmb3VuZE5vZGUgPSBmaW5kTm9kZUJ5Q29tcG9uZW50KGNoaWxkLCBjb21wb25lbnQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm91bmROb2RlO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgdmlydHVhbCB0cmVlIGZyb20gcm9vdCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpIHtcclxuICBjb25zdCByb290Tm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnUm9vdCcsICcnKTtcclxuICBjb25zdCBjaGlsZE5vZGUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCk7XHJcblxyXG4gIGlmIChjaGlsZE5vZGUpIHtcclxuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdE5vZGU7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtTcGFya30gZnJvbSBcIkAvc3BhcmtcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiQC9BcHBcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuQXBwQ29uZmlnfSBjb25maWdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoY29uZmlnKSB7XHJcbiAgaWYgKHR5cGVvZiBjb25maWcgIT09IFwib2JqZWN0XCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBuZWNlc3Nhcnkgb3B0aW9ucyBkZWZpbmVkIGluIGdpdmVuIGNvbmZpZy4nKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy4kYXBwID0gbmV3IFNwYXJrKCk7XHJcbiAgd2luZG93LiRhcHAuc2V0Um9vdEZ1bmN0aW9uKGNvbmZpZy5yZW5kZXIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgJGFwcC5tb3VudChjb25maWcubW91bnRFbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNyZWF0ZUFwcCh7XHJcbiAgbW91bnRFbDogJyNhcHAnLFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8QXBwIC8+XHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJfaW5oZXJpdHMiLCJfc2V0UHJvdG90eXBlT2YiLCJpbWciLCJDb21wb25lbnQiLCJIZWFkZXIiLCJsaXN0SXRlbXMiLCJpZCIsIm5hbWUiLCJBcHAiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsInN0YXRlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVUZXh0Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwibW91bnRlZCIsIl91cGRhdGVkIiwiX2NhbGxlZSIsIl9jb250ZXh0IiwidXBkYXRlZCIsInNldFN0YXRlIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJlbGVtZW50TmFtZSIsImF0dHJpYnV0ZXMiLCJzdHlsZSIsImZvbnRTaXplIiwiY29sb3IiLCJjaGlsZHJlbiIsInRpdGxlIiwiY29uY2F0IiwibWFwIiwiaXRlbSIsIm9uU3VibWl0IiwidHlwZSIsIm9uSW5wdXQiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwiZGVmYXVsdCIsIl9kZXN0cm95ZWQiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsImRlc3Ryb3llZCIsIkVtcHR5T2JqZWN0IiwiJGFwcCIsIm9uU3RhdGVDaGFuZ2VkIiwiX21vdW50ZWQiLCJfcmVzdW1lZCIsInJlc3VtZWQiLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsIl9jYWxsZWU0IiwiX2NvbnRleHQ0IiwiZmluZENsb3Nlc3ROb2RlIiwiZGlmZlByb3BzIiwiZmluZENsb3Nlc3RET01Ob2RlIiwicmVzb2x2ZUNsYXNzTmFtZSIsInJlc29sdmVTdHlsZSIsImhhbmRsZUFkZGluZ1Byb3BzIiwibm9kZSIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3RhcnRzV2l0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnRSZWYiLCJzZXRBdHRyaWJ1dGUiLCJyZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJwZW5kaW5nUHJvcHMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImhhbmRsZVVwZGF0aW5nUHJvcHMiLCJldmVudE5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2xkUHJvcHMiLCJoYW5kbGVSZW1vdmluZ1Byb3BzIiwicmVuZGVyTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInVubW91bnROb2RlIiwiZm9yRWFjaCIsImNoaWxkIiwiY2xlYW5MaXN0ZW5lcnMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpc1R5cGUiLCJpbnN0YW5jZSIsImNyZWF0ZUVsZW1lbnQiLCJwb3NpdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJ0YWciLCJfcmVmIiwiX25vZGUkcGVuZGluZ1Byb3BzJHhtIiwiY2xvc2VzdFdpdGhOUyIsInhtbG5zIiwiY3JlYXRlRWxlbWVudE5TIiwicGFyZW50RWwiLCJjaGlsZEF0IiwiaW5zZXJ0QmVmb3JlIiwidXBkYXRlRWxlbWVudCIsImRpZmZlZFByb3BzIiwicHJvcCIsImZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbiIsImJ1aWxkVmlydHVhbFRyZWUiLCJtb3VudFZpcnR1YWxTdWJ0cmVlIiwiZWZmZWN0IiwiY3JlYXRlQ29tcG9uZW50IiwicmVuZGVyUmVzdWx0Iiwic3VidHJlZSIsImFwcGVuZENoaWxkIiwiY2hpbGROb2RlIiwiY29weU5vZGVSZWZlcmVuY2VzIiwiY3VycmVudE5vZGUiLCJuZXdOb2RlIiwicmVjdXJzaXZlIiwidW5kZWZpbmVkIiwiX2N1cnJlbnROb2RlJG9sZFByb3BzIiwiX2N1cnJlbnROb2RlJGVsZW1lbnRSIiwiX25ld05vZGUkcGVuZGluZ1Byb3BzIiwic3RhdGVDaGFuZ2VkIiwiaW5kZXgiLCJjb21wYXJlUHJvcHMiLCJrZXlzIiwiZXZlcnkiLCJfcmVmMiIsInNob3VsZFVwZGF0ZU5vZGUiLCJ1cGRhdGVOb2RlIiwicGVuZGluZ1VwZGF0ZSIsImVtcHR5IiwicmV1c2VOb2RlIiwiY2xvbmVkQ3VycmVudE5vZGUiLCJjbG9uZSIsInBhcmVudCIsImNvcHlGcm9tIiwiZmluZE5vZGVXaXRoS2V5IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJfc3RlcCIsInMiLCJlcnIiLCJmaW5kTWF0Y2hpbmdDaGlsZE5vZGUiLCJuZXdDaGlsZE5vZGUiLCJmb3VuZE5vZGUiLCJyZWNvbmNpbGUiLCJwcm9jZXNzZWRDaGlsZHJlbiIsIm1hdGNoaW5nQ2hpbGQiLCJwdXNoIiwiaW5jbHVkZXMiLCJyZXNvbHZlRWZmZWN0c0Zyb21Ob2RlcyIsImVmZmVjdHMiLCJub2RlUmVmIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY2xlYW5Ob2RlcyIsImJ1aWxkVmlydHVhbFRyZWVSb290IiwiZmluZE5vZGVCeUNvbXBvbmVudCIsIlNwYXJrIiwiX3Jvb3RFbCIsIl9yb290RnVuYyIsIl92aXJ0dWFsVHJlZSIsInNldFJvb3RGdW5jdGlvbiIsInJvb3RGbiIsIm1vdW50IiwibW91bnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIkVycm9yIiwibmV3VmlydHVhbFRyZWUiLCJkZWxldGlvbnMiLCJuZXdDaGFuZ2VzIiwibW91bnRlZENvbXBvbmVudE5vZGVzIiwidXBkYXRlZENvbXBvbmVudE5vZGVzIiwiaGFuZGxlUGxhY2VtZW50IiwiaGFuZGxlVXBkYXRlIiwiY29tcG9uZW50Iiwid2FybiIsInByb2Nlc3NDb21wb25lbnROb2RlcyIsImNvbXBvbmVudE5vZGVzIiwiYWN0aW9uIiwiYWxsQ2hpbGRyZW5Nb3VudGVkIiwiYWxsQ2hpbGRyZW5VcGRhdGVkIiwic2hpZnQiLCJ1bnNoaWZ0IiwiQXJyYXkiLCJpc0FycmF5IiwiX29iamVjdFNwcmVhZCIsInRvU3RyaW5nIiwiY2xhc3NUb2tlbnMiLCJmaWx0ZXIiLCJjbGFzc05hbWUiLCJ0b2tlbnMiLCJpbmRleE9mIiwiam9pbiIsInRlc3QiLCJrZXlUb2tlbnMiLCJzcGxpdCIsInRva2VuIiwicHJvcERpZmZzIiwiX2kyIiwiX09iamVjdCRlbnRyaWVzMiIsIl9PYmplY3QkZW50cmllczIkX2kiLCJodG1sVGFncyIsIlZpcnR1YWxOb2RlIiwib3RoZXJQcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsImxpc3RlbmVycyIsInJlZHVjZSIsImNvdW50IiwicmVzdWx0IiwibGlzdGVuZXIiLCJfdGhpcyRsaXN0ZW5lcnMkdHlwZSIsImxpc3RlbmVyc1dpdGhUeXBlIiwiZm91bmRMaXN0ZW5lckluZGV4IiwiZm91bmRMaXN0ZW5lciIsImZpbmQiLCJhbm90aGVyTGlzdGVuZXIiLCJzcGxpY2UiLCJfbG9vcCIsIl9yZXQiLCJyZXBsYWNlQ2hpbGQiLCJvbGROb2RlIiwiY2xvbmVkIiwic291cmNlTm9kZSIsImNoZWNrS2V5c0luSnN4QXJyYXkiLCJqc3hBcnJheSIsInVzZWRLZXlzIiwiX3JlZjIkZWxlbWVudE5hbWUiLCJfcmVmMiRhdHRyaWJ1dGVzIiwiX3JlZjIkY2hpbGRyZW4iLCJhbm90aGVyQ2hpbGROb2RlIiwic2VsZWN0b3IiLCJfY3VycmVudE5vZGUiLCJfY3VycmVudE5vZGUkcGFyZW50JHAiLCJwYXJlbnRQcm9wcyIsInJlcGxhY2UiLCJyb290Tm9kZSIsImNyZWF0ZUFwcCIsImNvbmZpZyIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=