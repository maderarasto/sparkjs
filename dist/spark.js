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

    // this.state = {
    //   id: 1,
    // };

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
        children: [{
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
      // TODO: call hook onStateChanged
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
    var _newNode$oldProps, _newNode$elementRef;
    newNode.oldProps = (_newNode$oldProps = newNode.oldProps) !== null && _newNode$oldProps !== void 0 ? _newNode$oldProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    newNode.elementRef = (_newNode$elementRef = newNode.elementRef) !== null && _newNode$elementRef !== void 0 ? _newNode$elementRef : null;
    if (newNode.isType('Component')) {
      var _newNode$pendingProps;
      newNode.instance = currentNode.instance;
      newNode.instance.props = (_newNode$pendingProps = newNode.pendingProps) !== null && _newNode$pendingProps !== void 0 ? _newNode$pendingProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
      // TODO: copy state and indicator if state changed
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
    processedChildren.push(childNode);
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
  // TODO: clear indicator if state changed

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
    value: function onStateChanged(component) {}
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
/* harmony export */   findClosestNode: () => (/* binding */ findClosestNode)
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
    // /** @type {Record<string, any>} */
    // this.state = EmptyObject; TODO: add support for states
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
    // this.stateChanged = false; TODO: add support for states

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
      // cloned.state = this.state; TODO: add support for states
      cloned.instance = this.instance;
      cloned.elementRef = this.elementRef;
      cloned.listeners = this.listeners;

      // Indicator properties
      cloned.effect = this.effect;
      cloned.mounted = this.mounted;
      cloned.pendingUpdate = this.pendingUpdate;
      // cloned.stateChanged = this.stateChanged; TODO: add support for states

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
      // this.state = sourceNode.state; TODO: add support for states
      this.instance = sourceNode.instance;
      this.elementRef = sourceNode.elementRef;
      this.listeners = sourceNode.listeners;

      // Indicator properties
      this.effect = sourceNode.effect;
      this.mounted = sourceNode.mounted;
      this.pendingUpdate = sourceNode.pendingUpdate;
      // this.stateChanged = sourceNode.stateChanged; TODO: add support for states

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BhcmsuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpRUFBZSxxQkFBdUIseUNBQXlDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkNDL0UsdUtBQUFBLENBQUEsRUFBQUMsQ0FBQSxFQUFBQyxDQUFBLHdCQUFBQyxNQUFBLEdBQUFBLE1BQUEsT0FBQUMsQ0FBQSxHQUFBRixDQUFBLENBQUFHLFFBQUEsa0JBQUFDLENBQUEsR0FBQUosQ0FBQSxDQUFBSyxXQUFBLDhCQUFBQyxFQUFBTixDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFDLENBQUEsR0FBQUwsQ0FBQSxJQUFBQSxDQUFBLENBQUFNLFNBQUEsWUFBQUMsU0FBQSxHQUFBUCxDQUFBLEdBQUFPLFNBQUEsRUFBQUMsQ0FBQSxHQUFBQyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxDQUFBQyxTQUFBLFVBQUFLLG1CQUFBLENBQUFILENBQUEsdUJBQUFWLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLFFBQUFFLENBQUEsRUFBQUMsQ0FBQSxFQUFBRyxDQUFBLEVBQUFJLENBQUEsTUFBQUMsQ0FBQSxHQUFBWCxDQUFBLFFBQUFZLENBQUEsT0FBQUMsQ0FBQSxLQUFBRixDQUFBLEtBQUFiLENBQUEsS0FBQWdCLENBQUEsRUFBQXBCLENBQUEsRUFBQXFCLENBQUEsRUFBQUMsQ0FBQSxFQUFBTixDQUFBLEVBQUFNLENBQUEsQ0FBQUMsSUFBQSxDQUFBdkIsQ0FBQSxNQUFBc0IsQ0FBQSxXQUFBQSxFQUFBckIsQ0FBQSxFQUFBQyxDQUFBLFdBQUFNLENBQUEsR0FBQVAsQ0FBQSxFQUFBUSxDQUFBLE1BQUFHLENBQUEsR0FBQVosQ0FBQSxFQUFBbUIsQ0FBQSxDQUFBZixDQUFBLEdBQUFGLENBQUEsRUFBQW1CLENBQUEsZ0JBQUFDLEVBQUFwQixDQUFBLEVBQUFFLENBQUEsU0FBQUssQ0FBQSxHQUFBUCxDQUFBLEVBQUFVLENBQUEsR0FBQVIsQ0FBQSxFQUFBSCxDQUFBLE9BQUFpQixDQUFBLElBQUFGLENBQUEsS0FBQVYsQ0FBQSxJQUFBTCxDQUFBLEdBQUFnQixDQUFBLENBQUFPLE1BQUEsRUFBQXZCLENBQUEsVUFBQUssQ0FBQSxFQUFBRSxDQUFBLEdBQUFTLENBQUEsQ0FBQWhCLENBQUEsR0FBQXFCLENBQUEsR0FBQUgsQ0FBQSxDQUFBRixDQUFBLEVBQUFRLENBQUEsR0FBQWpCLENBQUEsS0FBQU4sQ0FBQSxRQUFBSSxDQUFBLEdBQUFtQixDQUFBLEtBQUFyQixDQUFBLE1BQUFRLENBQUEsR0FBQUosQ0FBQSxFQUFBQyxDQUFBLEdBQUFELENBQUEsWUFBQUMsQ0FBQSxXQUFBRCxDQUFBLE1BQUFBLENBQUEsTUFBQVIsQ0FBQSxJQUFBUSxDQUFBLE9BQUFjLENBQUEsTUFBQWhCLENBQUEsR0FBQUosQ0FBQSxRQUFBb0IsQ0FBQSxHQUFBZCxDQUFBLFFBQUFDLENBQUEsTUFBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFoQixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBSSxDQUFBLE9BQUFjLENBQUEsR0FBQUcsQ0FBQSxLQUFBbkIsQ0FBQSxHQUFBSixDQUFBLFFBQUFNLENBQUEsTUFBQUosQ0FBQSxJQUFBQSxDQUFBLEdBQUFxQixDQUFBLE1BQUFqQixDQUFBLE1BQUFOLENBQUEsRUFBQU0sQ0FBQSxNQUFBSixDQUFBLEVBQUFlLENBQUEsQ0FBQWYsQ0FBQSxHQUFBcUIsQ0FBQSxFQUFBaEIsQ0FBQSxjQUFBSCxDQUFBLElBQUFKLENBQUEsYUFBQW1CLENBQUEsUUFBQUgsQ0FBQSxPQUFBZCxDQUFBLHFCQUFBRSxDQUFBLEVBQUFXLENBQUEsRUFBQVEsQ0FBQSxRQUFBVCxDQUFBLFlBQUFVLFNBQUEsdUNBQUFSLENBQUEsVUFBQUQsQ0FBQSxJQUFBSyxDQUFBLENBQUFMLENBQUEsRUFBQVEsQ0FBQSxHQUFBaEIsQ0FBQSxHQUFBUSxDQUFBLEVBQUFMLENBQUEsR0FBQWEsQ0FBQSxHQUFBeEIsQ0FBQSxHQUFBUSxDQUFBLE9BQUFULENBQUEsR0FBQVksQ0FBQSxNQUFBTSxDQUFBLEtBQUFWLENBQUEsS0FBQUMsQ0FBQSxHQUFBQSxDQUFBLFFBQUFBLENBQUEsU0FBQVUsQ0FBQSxDQUFBZixDQUFBLFFBQUFrQixDQUFBLENBQUFiLENBQUEsRUFBQUcsQ0FBQSxLQUFBTyxDQUFBLENBQUFmLENBQUEsR0FBQVEsQ0FBQSxHQUFBTyxDQUFBLENBQUFDLENBQUEsR0FBQVIsQ0FBQSxhQUFBSSxDQUFBLE1BQUFSLENBQUEsUUFBQUMsQ0FBQSxLQUFBSCxDQUFBLFlBQUFMLENBQUEsR0FBQU8sQ0FBQSxDQUFBRixDQUFBLFdBQUFMLENBQUEsR0FBQUEsQ0FBQSxDQUFBMEIsSUFBQSxDQUFBbkIsQ0FBQSxFQUFBSSxDQUFBLFVBQUFjLFNBQUEsMkNBQUF6QixDQUFBLENBQUEyQixJQUFBLFNBQUEzQixDQUFBLEVBQUFXLENBQUEsR0FBQVgsQ0FBQSxDQUFBNEIsS0FBQSxFQUFBcEIsQ0FBQSxTQUFBQSxDQUFBLG9CQUFBQSxDQUFBLEtBQUFSLENBQUEsR0FBQU8sQ0FBQSxlQUFBUCxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEdBQUFDLENBQUEsU0FBQUcsQ0FBQSxHQUFBYyxTQUFBLHVDQUFBcEIsQ0FBQSxnQkFBQUcsQ0FBQSxPQUFBRCxDQUFBLEdBQUFSLENBQUEsY0FBQUMsQ0FBQSxJQUFBaUIsQ0FBQSxHQUFBQyxDQUFBLENBQUFmLENBQUEsUUFBQVEsQ0FBQSxHQUFBVixDQUFBLENBQUF5QixJQUFBLENBQUF2QixDQUFBLEVBQUFlLENBQUEsT0FBQUUsQ0FBQSxrQkFBQXBCLENBQUEsSUFBQU8sQ0FBQSxHQUFBUixDQUFBLEVBQUFTLENBQUEsTUFBQUcsQ0FBQSxHQUFBWCxDQUFBLGNBQUFlLENBQUEsbUJBQUFhLEtBQUEsRUFBQTVCLENBQUEsRUFBQTJCLElBQUEsRUFBQVYsQ0FBQSxTQUFBaEIsQ0FBQSxFQUFBSSxDQUFBLEVBQUFFLENBQUEsUUFBQUksQ0FBQSxRQUFBUyxDQUFBLGdCQUFBVixVQUFBLGNBQUFtQixrQkFBQSxjQUFBQywyQkFBQSxLQUFBOUIsQ0FBQSxHQUFBWSxNQUFBLENBQUFtQixjQUFBLE1BQUF2QixDQUFBLE1BQUFMLENBQUEsSUFBQUgsQ0FBQSxDQUFBQSxDQUFBLElBQUFHLENBQUEsU0FBQVcsbUJBQUEsQ0FBQWQsQ0FBQSxPQUFBRyxDQUFBLGlDQUFBSCxDQUFBLEdBQUFXLENBQUEsR0FBQW1CLDBCQUFBLENBQUFyQixTQUFBLEdBQUFDLFNBQUEsQ0FBQUQsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUwsQ0FBQSxZQUFBTyxFQUFBaEIsQ0FBQSxXQUFBYSxNQUFBLENBQUFvQixjQUFBLEdBQUFwQixNQUFBLENBQUFvQixjQUFBLENBQUFqQyxDQUFBLEVBQUErQiwwQkFBQSxLQUFBL0IsQ0FBQSxDQUFBa0MsU0FBQSxHQUFBSCwwQkFBQSxFQUFBaEIsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBTSxDQUFBLHlCQUFBTixDQUFBLENBQUFVLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFGLENBQUEsR0FBQVosQ0FBQSxXQUFBOEIsaUJBQUEsQ0FBQXBCLFNBQUEsR0FBQXFCLDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBSCxDQUFBLGlCQUFBbUIsMEJBQUEsR0FBQWhCLG1CQUFBLENBQUFnQiwwQkFBQSxpQkFBQUQsaUJBQUEsR0FBQUEsaUJBQUEsQ0FBQUssV0FBQSx3QkFBQXBCLG1CQUFBLENBQUFnQiwwQkFBQSxFQUFBekIsQ0FBQSx3QkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxHQUFBRyxtQkFBQSxDQUFBSCxDQUFBLEVBQUFOLENBQUEsZ0JBQUFTLG1CQUFBLENBQUFILENBQUEsRUFBQVIsQ0FBQSxpQ0FBQVcsbUJBQUEsQ0FBQUgsQ0FBQSw4REFBQXdCLFlBQUEsWUFBQUEsYUFBQSxhQUFBQyxDQUFBLEVBQUE3QixDQUFBLEVBQUE4QixDQUFBLEVBQUF0QixDQUFBO0FBQUEsU0FBQUQsb0JBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUEsUUFBQU8sQ0FBQSxHQUFBSyxNQUFBLENBQUEwQixjQUFBLFFBQUEvQixDQUFBLHVCQUFBUixDQUFBLElBQUFRLENBQUEsUUFBQU8sbUJBQUEsWUFBQXlCLG1CQUFBeEMsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxhQUFBSyxFQUFBSixDQUFBLEVBQUFFLENBQUEsSUFBQVcsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLFlBQUFGLENBQUEsZ0JBQUF5QyxPQUFBLENBQUF2QyxDQUFBLEVBQUFFLENBQUEsRUFBQUosQ0FBQSxTQUFBRSxDQUFBLEdBQUFNLENBQUEsR0FBQUEsQ0FBQSxDQUFBUixDQUFBLEVBQUFFLENBQUEsSUFBQTJCLEtBQUEsRUFBQXpCLENBQUEsRUFBQXNDLFVBQUEsR0FBQXpDLENBQUEsRUFBQTBDLFlBQUEsR0FBQTFDLENBQUEsRUFBQTJDLFFBQUEsR0FBQTNDLENBQUEsTUFBQUQsQ0FBQSxDQUFBRSxDQUFBLElBQUFFLENBQUEsSUFBQUUsQ0FBQSxhQUFBQSxDQUFBLGNBQUFBLENBQUEsbUJBQUFTLG1CQUFBLENBQUFmLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFILENBQUE7QUFBQSxTQUFBNEMsbUJBQUF6QyxDQUFBLEVBQUFILENBQUEsRUFBQUQsQ0FBQSxFQUFBRSxDQUFBLEVBQUFJLENBQUEsRUFBQWUsQ0FBQSxFQUFBWixDQUFBLGNBQUFELENBQUEsR0FBQUosQ0FBQSxDQUFBaUIsQ0FBQSxFQUFBWixDQUFBLEdBQUFHLENBQUEsR0FBQUosQ0FBQSxDQUFBcUIsS0FBQSxXQUFBekIsQ0FBQSxnQkFBQUosQ0FBQSxDQUFBSSxDQUFBLEtBQUFJLENBQUEsQ0FBQW9CLElBQUEsR0FBQTNCLENBQUEsQ0FBQVcsQ0FBQSxJQUFBa0MsT0FBQSxDQUFBQyxPQUFBLENBQUFuQyxDQUFBLEVBQUFvQyxJQUFBLENBQUE5QyxDQUFBLEVBQUFJLENBQUE7QUFBQSxTQUFBMkMsa0JBQUE3QyxDQUFBLDZCQUFBSCxDQUFBLFNBQUFELENBQUEsR0FBQWtELFNBQUEsYUFBQUosT0FBQSxXQUFBNUMsQ0FBQSxFQUFBSSxDQUFBLFFBQUFlLENBQUEsR0FBQWpCLENBQUEsQ0FBQStDLEtBQUEsQ0FBQWxELENBQUEsRUFBQUQsQ0FBQSxZQUFBb0QsTUFBQWhELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxVQUFBakQsQ0FBQSxjQUFBaUQsT0FBQWpELENBQUEsSUFBQXlDLGtCQUFBLENBQUF4QixDQUFBLEVBQUFuQixDQUFBLEVBQUFJLENBQUEsRUFBQThDLEtBQUEsRUFBQUMsTUFBQSxXQUFBakQsQ0FBQSxLQUFBZ0QsS0FBQTtBQUFBLFNBQUFFLGdCQUFBakMsQ0FBQSxFQUFBakIsQ0FBQSxVQUFBaUIsQ0FBQSxZQUFBakIsQ0FBQSxhQUFBc0IsU0FBQTtBQUFBLFNBQUE2QixrQkFBQXZELENBQUEsRUFBQUUsQ0FBQSxhQUFBRCxDQUFBLE1BQUFBLENBQUEsR0FBQUMsQ0FBQSxDQUFBc0IsTUFBQSxFQUFBdkIsQ0FBQSxVQUFBSyxDQUFBLEdBQUFKLENBQUEsQ0FBQUQsQ0FBQSxHQUFBSyxDQUFBLENBQUFvQyxVQUFBLEdBQUFwQyxDQUFBLENBQUFvQyxVQUFBLFFBQUFwQyxDQUFBLENBQUFxQyxZQUFBLGtCQUFBckMsQ0FBQSxLQUFBQSxDQUFBLENBQUFzQyxRQUFBLFFBQUEvQixNQUFBLENBQUEwQixjQUFBLENBQUF2QyxDQUFBLEVBQUF3RCxjQUFBLENBQUFsRCxDQUFBLENBQUFtRCxHQUFBLEdBQUFuRCxDQUFBO0FBQUEsU0FBQW9ELGFBQUExRCxDQUFBLEVBQUFFLENBQUEsRUFBQUQsQ0FBQSxXQUFBQyxDQUFBLElBQUFxRCxpQkFBQSxDQUFBdkQsQ0FBQSxDQUFBVSxTQUFBLEVBQUFSLENBQUEsR0FBQUQsQ0FBQSxJQUFBc0QsaUJBQUEsQ0FBQXZELENBQUEsRUFBQUMsQ0FBQSxHQUFBWSxNQUFBLENBQUEwQixjQUFBLENBQUF2QyxDQUFBLGlCQUFBNEMsUUFBQSxTQUFBNUMsQ0FBQTtBQUFBLFNBQUF3RCxlQUFBdkQsQ0FBQSxRQUFBTyxDQUFBLEdBQUFtRCxZQUFBLENBQUExRCxDQUFBLGdDQUFBMkQsT0FBQSxDQUFBcEQsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBbUQsYUFBQTFELENBQUEsRUFBQUMsQ0FBQSxvQkFBQTBELE9BQUEsQ0FBQTNELENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFELENBQUEsR0FBQUMsQ0FBQSxDQUFBRSxNQUFBLENBQUEwRCxXQUFBLGtCQUFBN0QsQ0FBQSxRQUFBUSxDQUFBLEdBQUFSLENBQUEsQ0FBQTJCLElBQUEsQ0FBQTFCLENBQUEsRUFBQUMsQ0FBQSxnQ0FBQTBELE9BQUEsQ0FBQXBELENBQUEsVUFBQUEsQ0FBQSxZQUFBa0IsU0FBQSx5RUFBQXhCLENBQUEsR0FBQTRELE1BQUEsR0FBQUMsTUFBQSxFQUFBOUQsQ0FBQTtBQUFBLFNBQUErRCxXQUFBL0QsQ0FBQSxFQUFBSyxDQUFBLEVBQUFOLENBQUEsV0FBQU0sQ0FBQSxHQUFBMkQsZUFBQSxDQUFBM0QsQ0FBQSxHQUFBNEQsMEJBQUEsQ0FBQWpFLENBQUEsRUFBQWtFLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBL0QsQ0FBQSxFQUFBTixDQUFBLFFBQUFpRSxlQUFBLENBQUFoRSxDQUFBLEVBQUFxRSxXQUFBLElBQUFoRSxDQUFBLENBQUE2QyxLQUFBLENBQUFsRCxDQUFBLEVBQUFELENBQUE7QUFBQSxTQUFBa0UsMkJBQUFqRSxDQUFBLEVBQUFELENBQUEsUUFBQUEsQ0FBQSxpQkFBQTRELE9BQUEsQ0FBQTVELENBQUEsMEJBQUFBLENBQUEsVUFBQUEsQ0FBQSxpQkFBQUEsQ0FBQSxZQUFBMEIsU0FBQSxxRUFBQTZDLHNCQUFBLENBQUF0RSxDQUFBO0FBQUEsU0FBQXNFLHVCQUFBdkUsQ0FBQSxtQkFBQUEsQ0FBQSxZQUFBd0UsY0FBQSxzRUFBQXhFLENBQUE7QUFBQSxTQUFBbUUsMEJBQUEsY0FBQWxFLENBQUEsSUFBQXdFLE9BQUEsQ0FBQS9ELFNBQUEsQ0FBQWdFLE9BQUEsQ0FBQS9DLElBQUEsQ0FBQXlDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBSSxPQUFBLGlDQUFBeEUsQ0FBQSxhQUFBa0UseUJBQUEsWUFBQUEsMEJBQUEsYUFBQWxFLENBQUE7QUFBQSxTQUFBZ0UsZ0JBQUFoRSxDQUFBLFdBQUFnRSxlQUFBLEdBQUFwRCxNQUFBLENBQUFvQixjQUFBLEdBQUFwQixNQUFBLENBQUFtQixjQUFBLENBQUFULElBQUEsZUFBQXRCLENBQUEsV0FBQUEsQ0FBQSxDQUFBaUMsU0FBQSxJQUFBckIsTUFBQSxDQUFBbUIsY0FBQSxDQUFBL0IsQ0FBQSxNQUFBZ0UsZUFBQSxDQUFBaEUsQ0FBQTtBQUFBLFNBQUEwRSxVQUFBMUUsQ0FBQSxFQUFBRCxDQUFBLDZCQUFBQSxDQUFBLGFBQUFBLENBQUEsWUFBQTBCLFNBQUEsd0RBQUF6QixDQUFBLENBQUFTLFNBQUEsR0FBQUcsTUFBQSxDQUFBQyxNQUFBLENBQUFkLENBQUEsSUFBQUEsQ0FBQSxDQUFBVSxTQUFBLElBQUE0RCxXQUFBLElBQUF6QyxLQUFBLEVBQUE1QixDQUFBLEVBQUEyQyxRQUFBLE1BQUFELFlBQUEsV0FBQTlCLE1BQUEsQ0FBQTBCLGNBQUEsQ0FBQXRDLENBQUEsaUJBQUEyQyxRQUFBLFNBQUE1QyxDQUFBLElBQUE0RSxlQUFBLENBQUEzRSxDQUFBLEVBQUFELENBQUE7QUFBQSxTQUFBNEUsZ0JBQUEzRSxDQUFBLEVBQUFELENBQUEsV0FBQTRFLGVBQUEsR0FBQS9ELE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQVYsSUFBQSxlQUFBdEIsQ0FBQSxFQUFBRCxDQUFBLFdBQUFDLENBQUEsQ0FBQWlDLFNBQUEsR0FBQWxDLENBQUEsRUFBQUMsQ0FBQSxLQUFBMkUsZUFBQSxDQUFBM0UsQ0FBQSxFQUFBRCxDQUFBO0FBRHVDO0FBQ0g7QUFFcEMsSUFBTStFLFNBQVMsR0FBRyxDQUNoQjtFQUFFQyxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBTyxDQUFDLEVBQ3ZCO0VBQUVELEVBQUUsRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFNLENBQUMsRUFDdEI7RUFBRUQsRUFBRSxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQWEsQ0FBQyxFQUM3QjtFQUFFRCxFQUFFLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBVSxDQUFDLENBQzNCO0FBQUMsSUFFbUJDLEdBQUcsMEJBQUFDLFVBQUE7RUFDdEIsU0FBQUQsSUFBWUUsS0FBSyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUFBL0IsZUFBQSxPQUFBNEIsR0FBQTtJQUNqQkcsS0FBQSxHQUFBckIsVUFBQSxPQUFBa0IsR0FBQSxHQUFNRSxLQUFLOztJQUVYO0lBQ0E7SUFDQTs7SUFFQTs7SUFFQUMsS0FBQSxDQUFLQyxXQUFXLEdBQUdELEtBQUEsQ0FBS0MsV0FBVyxDQUFDL0QsSUFBSSxDQUFBOEQsS0FBSyxDQUFDO0lBQzlDQSxLQUFBLENBQUtFLGdCQUFnQixHQUFHRixLQUFBLENBQUtFLGdCQUFnQixDQUFDaEUsSUFBSSxDQUFBOEQsS0FBSyxDQUFDO0lBQ3hEQSxLQUFBLENBQUtHLFlBQVksR0FBR0gsS0FBQSxDQUFLRyxZQUFZLENBQUNqRSxJQUFJLENBQUE4RCxLQUFLLENBQUM7SUFBQyxPQUFBQSxLQUFBO0VBQ25EO0VBQUNWLFNBQUEsQ0FBQU8sR0FBQSxFQUFBQyxVQUFBO0VBQUEsT0FBQXpCLFlBQUEsQ0FBQXdCLEdBQUE7SUFBQXpCLEdBQUE7SUFBQTVCLEtBQUEsRUFFRCxTQUFBNEQsT0FBT0EsQ0FBQSxFQUFHO01BQ1I7TUFDQTtNQUNBO0lBQUE7RUFDRDtJQUFBaEMsR0FBQTtJQUFBNUIsS0FBQTtNQUFBLElBQUE2RCxRQUFBLEdBQUF6QyxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FFRCxTQUFBcUQsUUFBQTtRQUFBLE9BQUF2RCxZQUFBLEdBQUFDLENBQUEsV0FBQXVELFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBeEYsQ0FBQTtZQUFBO2NBQUEsT0FBQXdGLFFBQUEsQ0FBQXZFLENBQUE7VUFBQTtRQUFBLEdBQUFzRSxPQUFBO01BQUEsQ0FFQztNQUFBLFNBRktFLE9BQU9BLENBQUE7UUFBQSxPQUFBSCxRQUFBLENBQUF2QyxLQUFBLE9BQUFELFNBQUE7TUFBQTtNQUFBLE9BQVAyQyxPQUFPO0lBQUE7RUFBQTtJQUFBcEMsR0FBQTtJQUFBNUIsS0FBQSxFQUliLFNBQUF5RCxXQUFXQSxDQUFBLEVBQUc7TUFDWixJQUFJLENBQUNRLFFBQVEsQ0FBQztRQUNaZCxFQUFFLEVBQUUsSUFBSSxDQUFDZSxLQUFLLENBQUNmLEVBQUUsR0FBRztNQUN0QixDQUFDLENBQUM7SUFDSjtFQUFDO0lBQUF2QixHQUFBO0lBQUE1QixLQUFBLEVBRUQsU0FBQTJELFlBQVlBLENBQUNRLEVBQUUsRUFBRTtNQUNmQSxFQUFFLENBQUNDLGNBQWMsQ0FBQyxDQUFDO01BQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsRUFBRSxDQUFDO0lBQ2pCO0VBQUM7SUFBQXZDLEdBQUE7SUFBQTVCLEtBQUEsRUFFRCxTQUFBMEQsZ0JBQWdCQSxDQUFDUyxFQUFFLEVBQUU7TUFDbkJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxFQUFFLENBQUM7SUFDakI7RUFBQztJQUFBdkMsR0FBQTtJQUFBNUIsS0FBQSxFQUVELFNBQUF1RSxNQUFNQSxDQUFBLEVBQUc7TUFDUDtRQUFBQyxXQUFBO1FBQUFDLFVBQUE7VUFBQUMsS0FBQSxFQUNjO1lBQUVDLFFBQVEsRUFBRSxNQUFNO1lBQUVDLEtBQUssRUFBRTtVQUFRO1FBQUM7UUFBQUMsUUFBQTtVQUFBTCxXQUFBO1VBQUFDLFVBQUE7WUFBQXRCLEVBQUEsRUFDdEMsWUFBWTtZQUFBO1VBQUE7VUFBQTBCLFFBQUE7WUFBQUwsV0FBQTtZQUFBQyxVQUFBO1lBQUFJLFFBQUE7VUFBQTtRQUFBO1VBQUFMLFdBQUE7VUFBQUMsVUFBQTtVQUFBSSxRQUFBLGNBR1QsSUFBSSxDQUFDWCxLQUFLLENBQUNmLEVBQUU7UUFBQTtVQUFBcUIsV0FBQTtVQUFBQyxVQUFBO1VBQUFJLFFBQUEsR0FFckIzQixTQUFTLENBQUM0QixHQUFHLENBQUMsVUFBQ0MsSUFBSSxFQUFFcEcsQ0FBQztZQUFBO2NBQUE2RixXQUFBO2NBQUFDLFVBQUE7Z0JBQUE3QyxHQUFBLEVBQ1ptRCxJQUFJLENBQUM1QjtjQUFFO2NBQUEwQixRQUFBLEdBQUdFLElBQUksQ0FBQzNCLElBQUk7WUFBQTtVQUFBLENBQzdCLENBQUM7UUFBQTtVQUFBb0IsV0FBQTtVQUFBQyxVQUFBO1lBQUFPLFFBQUEsRUFFWSxJQUFJLENBQUNyQjtVQUFZO1VBQUFrQixRQUFBO1lBQUFMLFdBQUE7WUFBQUMsVUFBQTtjQUFBUSxJQUFBLEVBQ25CLE1BQU07Y0FBQUMsT0FBQSxFQUFVLElBQUksQ0FBQ3hCO1lBQWdCO1lBQUFtQixRQUFBO1VBQUE7WUFBQUwsV0FBQTtZQUFBQyxVQUFBO2NBQUFRLElBQUEsRUFDckM7WUFBUTtZQUFBSixRQUFBO1VBQUE7UUFBQTtVQUFBTCxXQUFBO1VBQUFDLFVBQUE7WUFBQVUsR0FBQSxFQUVabkMsNERBQUc7WUFBQW9DLEdBQUEsRUFBTTtVQUFFO1VBQUFQLFFBQUE7UUFBQTtVQUFBTCxXQUFBO1VBQUFDLFVBQUE7WUFBQVksT0FBQSxFQUNKLElBQUksQ0FBQzVCO1VBQVc7VUFBQW9CLFFBQUE7UUFBQTtNQUFBO0lBR3ZDO0VBQUM7QUFBQSxFQTVEOEI1QixrREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDVDFDLHVLQUFBOUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFDLENBQUEsd0JBQUFDLE1BQUEsR0FBQUEsTUFBQSxPQUFBQyxDQUFBLEdBQUFGLENBQUEsQ0FBQUcsUUFBQSxrQkFBQUMsQ0FBQSxHQUFBSixDQUFBLENBQUFLLFdBQUEsOEJBQUFDLEVBQUFOLENBQUEsRUFBQUUsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUMsQ0FBQSxHQUFBTCxDQUFBLElBQUFBLENBQUEsQ0FBQU0sU0FBQSxZQUFBQyxTQUFBLEdBQUFQLENBQUEsR0FBQU8sU0FBQSxFQUFBQyxDQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLENBQUFDLFNBQUEsVUFBQUssbUJBQUEsQ0FBQUgsQ0FBQSx1QkFBQVYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsUUFBQUUsQ0FBQSxFQUFBQyxDQUFBLEVBQUFHLENBQUEsRUFBQUksQ0FBQSxNQUFBQyxDQUFBLEdBQUFYLENBQUEsUUFBQVksQ0FBQSxPQUFBQyxDQUFBLEtBQUFGLENBQUEsS0FBQWIsQ0FBQSxLQUFBZ0IsQ0FBQSxFQUFBcEIsQ0FBQSxFQUFBcUIsQ0FBQSxFQUFBQyxDQUFBLEVBQUFOLENBQUEsRUFBQU0sQ0FBQSxDQUFBQyxJQUFBLENBQUF2QixDQUFBLE1BQUFzQixDQUFBLFdBQUFBLEVBQUFyQixDQUFBLEVBQUFDLENBQUEsV0FBQU0sQ0FBQSxHQUFBUCxDQUFBLEVBQUFRLENBQUEsTUFBQUcsQ0FBQSxHQUFBWixDQUFBLEVBQUFtQixDQUFBLENBQUFmLENBQUEsR0FBQUYsQ0FBQSxFQUFBbUIsQ0FBQSxnQkFBQUMsRUFBQXBCLENBQUEsRUFBQUUsQ0FBQSxTQUFBSyxDQUFBLEdBQUFQLENBQUEsRUFBQVUsQ0FBQSxHQUFBUixDQUFBLEVBQUFILENBQUEsT0FBQWlCLENBQUEsSUFBQUYsQ0FBQSxLQUFBVixDQUFBLElBQUFMLENBQUEsR0FBQWdCLENBQUEsQ0FBQU8sTUFBQSxFQUFBdkIsQ0FBQSxVQUFBSyxDQUFBLEVBQUFFLENBQUEsR0FBQVMsQ0FBQSxDQUFBaEIsQ0FBQSxHQUFBcUIsQ0FBQSxHQUFBSCxDQUFBLENBQUFGLENBQUEsRUFBQVEsQ0FBQSxHQUFBakIsQ0FBQSxLQUFBTixDQUFBLFFBQUFJLENBQUEsR0FBQW1CLENBQUEsS0FBQXJCLENBQUEsTUFBQVEsQ0FBQSxHQUFBSixDQUFBLEVBQUFDLENBQUEsR0FBQUQsQ0FBQSxZQUFBQyxDQUFBLFdBQUFELENBQUEsTUFBQUEsQ0FBQSxNQUFBUixDQUFBLElBQUFRLENBQUEsT0FBQWMsQ0FBQSxNQUFBaEIsQ0FBQSxHQUFBSixDQUFBLFFBQUFvQixDQUFBLEdBQUFkLENBQUEsUUFBQUMsQ0FBQSxNQUFBVSxDQUFBLENBQUFDLENBQUEsR0FBQWhCLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFJLENBQUEsT0FBQWMsQ0FBQSxHQUFBRyxDQUFBLEtBQUFuQixDQUFBLEdBQUFKLENBQUEsUUFBQU0sQ0FBQSxNQUFBSixDQUFBLElBQUFBLENBQUEsR0FBQXFCLENBQUEsTUFBQWpCLENBQUEsTUFBQU4sQ0FBQSxFQUFBTSxDQUFBLE1BQUFKLENBQUEsRUFBQWUsQ0FBQSxDQUFBZixDQUFBLEdBQUFxQixDQUFBLEVBQUFoQixDQUFBLGNBQUFILENBQUEsSUFBQUosQ0FBQSxhQUFBbUIsQ0FBQSxRQUFBSCxDQUFBLE9BQUFkLENBQUEscUJBQUFFLENBQUEsRUFBQVcsQ0FBQSxFQUFBUSxDQUFBLFFBQUFULENBQUEsWUFBQVUsU0FBQSx1Q0FBQVIsQ0FBQSxVQUFBRCxDQUFBLElBQUFLLENBQUEsQ0FBQUwsQ0FBQSxFQUFBUSxDQUFBLEdBQUFoQixDQUFBLEdBQUFRLENBQUEsRUFBQUwsQ0FBQSxHQUFBYSxDQUFBLEdBQUF4QixDQUFBLEdBQUFRLENBQUEsT0FBQVQsQ0FBQSxHQUFBWSxDQUFBLE1BQUFNLENBQUEsS0FBQVYsQ0FBQSxLQUFBQyxDQUFBLEdBQUFBLENBQUEsUUFBQUEsQ0FBQSxTQUFBVSxDQUFBLENBQUFmLENBQUEsUUFBQWtCLENBQUEsQ0FBQWIsQ0FBQSxFQUFBRyxDQUFBLEtBQUFPLENBQUEsQ0FBQWYsQ0FBQSxHQUFBUSxDQUFBLEdBQUFPLENBQUEsQ0FBQUMsQ0FBQSxHQUFBUixDQUFBLGFBQUFJLENBQUEsTUFBQVIsQ0FBQSxRQUFBQyxDQUFBLEtBQUFILENBQUEsWUFBQUwsQ0FBQSxHQUFBTyxDQUFBLENBQUFGLENBQUEsV0FBQUwsQ0FBQSxHQUFBQSxDQUFBLENBQUEwQixJQUFBLENBQUFuQixDQUFBLEVBQUFJLENBQUEsVUFBQWMsU0FBQSwyQ0FBQXpCLENBQUEsQ0FBQTJCLElBQUEsU0FBQTNCLENBQUEsRUFBQVcsQ0FBQSxHQUFBWCxDQUFBLENBQUE0QixLQUFBLEVBQUFwQixDQUFBLFNBQUFBLENBQUEsb0JBQUFBLENBQUEsS0FBQVIsQ0FBQSxHQUFBTyxDQUFBLGVBQUFQLENBQUEsQ0FBQTBCLElBQUEsQ0FBQW5CLENBQUEsR0FBQUMsQ0FBQSxTQUFBRyxDQUFBLEdBQUFjLFNBQUEsdUNBQUFwQixDQUFBLGdCQUFBRyxDQUFBLE9BQUFELENBQUEsR0FBQVIsQ0FBQSxjQUFBQyxDQUFBLElBQUFpQixDQUFBLEdBQUFDLENBQUEsQ0FBQWYsQ0FBQSxRQUFBUSxDQUFBLEdBQUFWLENBQUEsQ0FBQXlCLElBQUEsQ0FBQXZCLENBQUEsRUFBQWUsQ0FBQSxPQUFBRSxDQUFBLGtCQUFBcEIsQ0FBQSxJQUFBTyxDQUFBLEdBQUFSLENBQUEsRUFBQVMsQ0FBQSxNQUFBRyxDQUFBLEdBQUFYLENBQUEsY0FBQWUsQ0FBQSxtQkFBQWEsS0FBQSxFQUFBNUIsQ0FBQSxFQUFBMkIsSUFBQSxFQUFBVixDQUFBLFNBQUFoQixDQUFBLEVBQUFJLENBQUEsRUFBQUUsQ0FBQSxRQUFBSSxDQUFBLFFBQUFTLENBQUEsZ0JBQUFWLFVBQUEsY0FBQW1CLGtCQUFBLGNBQUFDLDJCQUFBLEtBQUE5QixDQUFBLEdBQUFZLE1BQUEsQ0FBQW1CLGNBQUEsTUFBQXZCLENBQUEsTUFBQUwsQ0FBQSxJQUFBSCxDQUFBLENBQUFBLENBQUEsSUFBQUcsQ0FBQSxTQUFBVyxtQkFBQSxDQUFBZCxDQUFBLE9BQUFHLENBQUEsaUNBQUFILENBQUEsR0FBQVcsQ0FBQSxHQUFBbUIsMEJBQUEsQ0FBQXJCLFNBQUEsR0FBQUMsU0FBQSxDQUFBRCxTQUFBLEdBQUFHLE1BQUEsQ0FBQUMsTUFBQSxDQUFBTCxDQUFBLFlBQUFPLEVBQUFoQixDQUFBLFdBQUFhLE1BQUEsQ0FBQW9CLGNBQUEsR0FBQXBCLE1BQUEsQ0FBQW9CLGNBQUEsQ0FBQWpDLENBQUEsRUFBQStCLDBCQUFBLEtBQUEvQixDQUFBLENBQUFrQyxTQUFBLEdBQUFILDBCQUFBLEVBQUFoQixtQkFBQSxDQUFBZixDQUFBLEVBQUFNLENBQUEseUJBQUFOLENBQUEsQ0FBQVUsU0FBQSxHQUFBRyxNQUFBLENBQUFDLE1BQUEsQ0FBQUYsQ0FBQSxHQUFBWixDQUFBLFdBQUE4QixpQkFBQSxDQUFBcEIsU0FBQSxHQUFBcUIsMEJBQUEsRUFBQWhCLG1CQUFBLENBQUFILENBQUEsaUJBQUFtQiwwQkFBQSxHQUFBaEIsbUJBQUEsQ0FBQWdCLDBCQUFBLGlCQUFBRCxpQkFBQSxHQUFBQSxpQkFBQSxDQUFBSyxXQUFBLHdCQUFBcEIsbUJBQUEsQ0FBQWdCLDBCQUFBLEVBQUF6QixDQUFBLHdCQUFBUyxtQkFBQSxDQUFBSCxDQUFBLEdBQUFHLG1CQUFBLENBQUFILENBQUEsRUFBQU4sQ0FBQSxnQkFBQVMsbUJBQUEsQ0FBQUgsQ0FBQSxFQUFBUixDQUFBLGlDQUFBVyxtQkFBQSxDQUFBSCxDQUFBLDhEQUFBd0IsWUFBQSxZQUFBQSxhQUFBLGFBQUFDLENBQUEsRUFBQTdCLENBQUEsRUFBQThCLENBQUEsRUFBQXRCLENBQUE7QUFBQSxTQUFBRCxvQkFBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQSxRQUFBTyxDQUFBLEdBQUFLLE1BQUEsQ0FBQTBCLGNBQUEsUUFBQS9CLENBQUEsdUJBQUFSLENBQUEsSUFBQVEsQ0FBQSxRQUFBTyxtQkFBQSxZQUFBeUIsbUJBQUF4QyxDQUFBLEVBQUFFLENBQUEsRUFBQUUsQ0FBQSxFQUFBSCxDQUFBLGFBQUFLLEVBQUFKLENBQUEsRUFBQUUsQ0FBQSxJQUFBVyxtQkFBQSxDQUFBZixDQUFBLEVBQUFFLENBQUEsWUFBQUYsQ0FBQSxnQkFBQXlDLE9BQUEsQ0FBQXZDLENBQUEsRUFBQUUsQ0FBQSxFQUFBSixDQUFBLFNBQUFFLENBQUEsR0FBQU0sQ0FBQSxHQUFBQSxDQUFBLENBQUFSLENBQUEsRUFBQUUsQ0FBQSxJQUFBMkIsS0FBQSxFQUFBekIsQ0FBQSxFQUFBc0MsVUFBQSxHQUFBekMsQ0FBQSxFQUFBMEMsWUFBQSxHQUFBMUMsQ0FBQSxFQUFBMkMsUUFBQSxHQUFBM0MsQ0FBQSxNQUFBRCxDQUFBLENBQUFFLENBQUEsSUFBQUUsQ0FBQSxJQUFBRSxDQUFBLGFBQUFBLENBQUEsY0FBQUEsQ0FBQSxtQkFBQVMsbUJBQUEsQ0FBQWYsQ0FBQSxFQUFBRSxDQUFBLEVBQUFFLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUE0QyxtQkFBQXpDLENBQUEsRUFBQUgsQ0FBQSxFQUFBRCxDQUFBLEVBQUFFLENBQUEsRUFBQUksQ0FBQSxFQUFBZSxDQUFBLEVBQUFaLENBQUEsY0FBQUQsQ0FBQSxHQUFBSixDQUFBLENBQUFpQixDQUFBLEVBQUFaLENBQUEsR0FBQUcsQ0FBQSxHQUFBSixDQUFBLENBQUFxQixLQUFBLFdBQUF6QixDQUFBLGdCQUFBSixDQUFBLENBQUFJLENBQUEsS0FBQUksQ0FBQSxDQUFBb0IsSUFBQSxHQUFBM0IsQ0FBQSxDQUFBVyxDQUFBLElBQUFrQyxPQUFBLENBQUFDLE9BQUEsQ0FBQW5DLENBQUEsRUFBQW9DLElBQUEsQ0FBQTlDLENBQUEsRUFBQUksQ0FBQTtBQUFBLFNBQUEyQyxrQkFBQTdDLENBQUEsNkJBQUFILENBQUEsU0FBQUQsQ0FBQSxHQUFBa0QsU0FBQSxhQUFBSixPQUFBLFdBQUE1QyxDQUFBLEVBQUFJLENBQUEsUUFBQWUsQ0FBQSxHQUFBakIsQ0FBQSxDQUFBK0MsS0FBQSxDQUFBbEQsQ0FBQSxFQUFBRCxDQUFBLFlBQUFvRCxNQUFBaEQsQ0FBQSxJQUFBeUMsa0JBQUEsQ0FBQXhCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBOEMsS0FBQSxFQUFBQyxNQUFBLFVBQUFqRCxDQUFBLGNBQUFpRCxPQUFBakQsQ0FBQSxJQUFBeUMsa0JBQUEsQ0FBQXhCLENBQUEsRUFBQW5CLENBQUEsRUFBQUksQ0FBQSxFQUFBOEMsS0FBQSxFQUFBQyxNQUFBLFdBQUFqRCxDQUFBLEtBQUFnRCxLQUFBO0FBQUEsU0FBQUUsZ0JBQUFqQyxDQUFBLEVBQUFqQixDQUFBLFVBQUFpQixDQUFBLFlBQUFqQixDQUFBLGFBQUFzQixTQUFBO0FBQUEsU0FBQTZCLGtCQUFBdkQsQ0FBQSxFQUFBRSxDQUFBLGFBQUFELENBQUEsTUFBQUEsQ0FBQSxHQUFBQyxDQUFBLENBQUFzQixNQUFBLEVBQUF2QixDQUFBLFVBQUFLLENBQUEsR0FBQUosQ0FBQSxDQUFBRCxDQUFBLEdBQUFLLENBQUEsQ0FBQW9DLFVBQUEsR0FBQXBDLENBQUEsQ0FBQW9DLFVBQUEsUUFBQXBDLENBQUEsQ0FBQXFDLFlBQUEsa0JBQUFyQyxDQUFBLEtBQUFBLENBQUEsQ0FBQXNDLFFBQUEsUUFBQS9CLE1BQUEsQ0FBQTBCLGNBQUEsQ0FBQXZDLENBQUEsRUFBQXdELGNBQUEsQ0FBQWxELENBQUEsQ0FBQW1ELEdBQUEsR0FBQW5ELENBQUE7QUFBQSxTQUFBb0QsYUFBQTFELENBQUEsRUFBQUUsQ0FBQSxFQUFBRCxDQUFBLFdBQUFDLENBQUEsSUFBQXFELGlCQUFBLENBQUF2RCxDQUFBLENBQUFVLFNBQUEsRUFBQVIsQ0FBQSxHQUFBRCxDQUFBLElBQUFzRCxpQkFBQSxDQUFBdkQsQ0FBQSxFQUFBQyxDQUFBLEdBQUFZLE1BQUEsQ0FBQTBCLGNBQUEsQ0FBQXZDLENBQUEsaUJBQUE0QyxRQUFBLFNBQUE1QyxDQUFBO0FBQUEsU0FBQXdELGVBQUF2RCxDQUFBLFFBQUFPLENBQUEsR0FBQW1ELFlBQUEsQ0FBQTFELENBQUEsZ0NBQUEyRCxPQUFBLENBQUFwRCxDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFtRCxhQUFBMUQsQ0FBQSxFQUFBQyxDQUFBLG9CQUFBMEQsT0FBQSxDQUFBM0QsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUQsQ0FBQSxHQUFBQyxDQUFBLENBQUFFLE1BQUEsQ0FBQTBELFdBQUEsa0JBQUE3RCxDQUFBLFFBQUFRLENBQUEsR0FBQVIsQ0FBQSxDQUFBMkIsSUFBQSxDQUFBMUIsQ0FBQSxFQUFBQyxDQUFBLGdDQUFBMEQsT0FBQSxDQUFBcEQsQ0FBQSxVQUFBQSxDQUFBLFlBQUFrQixTQUFBLHlFQUFBeEIsQ0FBQSxHQUFBNEQsTUFBQSxHQUFBQyxNQUFBLEVBQUE5RCxDQUFBO0FBRG9DO0FBQUEsSUFFZjZFLFNBQVM7RUFDNUI7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUNFLFNBQUFBLFVBQVlNLEtBQUssRUFBRTtJQUFBOUIsZUFBQSxPQUFBd0IsU0FBQTtJQUNqQixJQUFJLENBQUNNLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNXLEtBQUssR0FBR3FCLCtDQUFXO0VBQzFCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRSxPQUFBMUQsWUFBQSxDQUFBb0IsU0FBQTtJQUFBckIsR0FBQTtJQUFBNUIsS0FBQSxFQUtBLFNBQUFpRSxRQUFRQSxDQUFDQyxLQUFLLEVBQUU7TUFDZCxJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztNQUNsQjtJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBdEMsR0FBQTtJQUFBNUIsS0FBQSxFQUtBLFNBQUF1RSxNQUFNQSxDQUFBLEVBQUc7TUFDUCxPQUFPLElBQUk7SUFDYjs7SUFFQTtBQUNGO0FBQ0E7RUFGRTtJQUFBM0MsR0FBQTtJQUFBNUIsS0FBQTtNQUFBLElBQUF3RixRQUFBLEdBQUFwRSxpQkFBQSxjQUFBYixZQUFBLEdBQUFFLENBQUEsQ0FHQSxTQUFBcUQsUUFBQTtRQUFBLE9BQUF2RCxZQUFBLEdBQUFDLENBQUEsV0FBQXVELFFBQUE7VUFBQSxrQkFBQUEsUUFBQSxDQUFBeEYsQ0FBQTtZQUFBO2NBQUEsT0FBQXdGLFFBQUEsQ0FBQXZFLENBQUE7VUFBQTtRQUFBLEdBQUFzRSxPQUFBO01BQUEsQ0FBa0I7TUFBQSxTQUFaRixPQUFPQSxDQUFBO1FBQUEsT0FBQTRCLFFBQUEsQ0FBQWxFLEtBQUEsT0FBQUQsU0FBQTtNQUFBO01BQUEsT0FBUHVDLE9BQU87SUFBQTtJQUViO0FBQ0Y7QUFDQTtJQUZFO0VBQUE7SUFBQWhDLEdBQUE7SUFBQTVCLEtBQUE7TUFBQSxJQUFBeUYsUUFBQSxHQUFBckUsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBR0EsU0FBQWlGLFNBQUE7UUFBQSxPQUFBbkYsWUFBQSxHQUFBQyxDQUFBLFdBQUFtRixTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQXBILENBQUE7WUFBQTtjQUFBLE9BQUFvSCxTQUFBLENBQUFuRyxDQUFBO1VBQUE7UUFBQSxHQUFBa0csUUFBQTtNQUFBLENBQWtCO01BQUEsU0FBWkUsT0FBT0EsQ0FBQTtRQUFBLE9BQUFILFFBQUEsQ0FBQW5FLEtBQUEsT0FBQUQsU0FBQTtNQUFBO01BQUEsT0FBUHVFLE9BQU87SUFBQTtJQUViO0FBQ0Y7QUFDQTtJQUZFO0VBQUE7SUFBQWhFLEdBQUE7SUFBQTVCLEtBQUE7TUFBQSxJQUFBNkQsUUFBQSxHQUFBekMsaUJBQUEsY0FBQWIsWUFBQSxHQUFBRSxDQUFBLENBR0EsU0FBQW9GLFNBQUE7UUFBQSxPQUFBdEYsWUFBQSxHQUFBQyxDQUFBLFdBQUFzRixTQUFBO1VBQUEsa0JBQUFBLFNBQUEsQ0FBQXZILENBQUE7WUFBQTtjQUFBLE9BQUF1SCxTQUFBLENBQUF0RyxDQUFBO1VBQUE7UUFBQSxHQUFBcUcsUUFBQTtNQUFBLENBQWtCO01BQUEsU0FBWjdCLE9BQU9BLENBQUE7UUFBQSxPQUFBSCxRQUFBLENBQUF2QyxLQUFBLE9BQUFELFNBQUE7TUFBQTtNQUFBLE9BQVAyQyxPQUFPO0lBQUE7SUFFYjtBQUNGO0FBQ0E7SUFGRTtFQUFBO0lBQUFwQyxHQUFBO0lBQUE1QixLQUFBO01BQUEsSUFBQStGLFVBQUEsR0FBQTNFLGlCQUFBLGNBQUFiLFlBQUEsR0FBQUUsQ0FBQSxDQUdBLFNBQUF1RixTQUFBO1FBQUEsT0FBQXpGLFlBQUEsR0FBQUMsQ0FBQSxXQUFBeUYsU0FBQTtVQUFBLGtCQUFBQSxTQUFBLENBQUExSCxDQUFBO1lBQUE7Y0FBQSxPQUFBMEgsU0FBQSxDQUFBekcsQ0FBQTtVQUFBO1FBQUEsR0FBQXdHLFFBQUE7TUFBQSxDQUFvQjtNQUFBLFNBQWRFLFNBQVNBLENBQUE7UUFBQSxPQUFBSCxVQUFBLENBQUF6RSxLQUFBLE9BQUFELFNBQUE7TUFBQTtNQUFBLE9BQVQ2RSxTQUFTO0lBQUE7RUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEQ4QjtBQUN1Qzs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU00saUJBQWlCQSxDQUFDQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxFQUFFO0VBQ3BELElBQUlELFFBQVEsQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQzdCSCxJQUFJLENBQUNJLGdCQUFnQixDQUFDSCxRQUFRLENBQUNJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFBRUosU0FBUyxDQUFDO0lBQ3JFO0VBQ0Y7RUFFQSxJQUFJRCxRQUFRLEtBQUssT0FBTyxFQUFFO0lBQ3hCQyxTQUFTLEdBQUdMLHdEQUFnQixDQUFDSyxTQUFTLENBQUM7RUFDekMsQ0FBQyxNQUFNLElBQUlELFFBQVEsS0FBSyxPQUFPLEVBQUU7SUFDL0JDLFNBQVMsR0FBR0osb0RBQVksQ0FBQ0ksU0FBUyxDQUFDO0VBQ3JDO0VBRUFGLElBQUksQ0FBQ08sVUFBVSxDQUFDQyxZQUFZLENBQUNQLFFBQVEsRUFBRUMsU0FBUyxDQUFDO0FBQ25EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU08sd0JBQXdCQSxDQUFDVCxJQUFJLEVBQUU7RUFDdEMsU0FBQVUsRUFBQSxNQUFBQyxlQUFBLEdBQXlCcEksTUFBTSxDQUFDcUksT0FBTyxDQUFDWixJQUFJLENBQUNhLFlBQVksQ0FBQyxFQUFBSCxFQUFBLEdBQUFDLGVBQUEsQ0FBQXpILE1BQUEsRUFBQXdILEVBQUEsSUFBRTtJQUF2RCxJQUFBSSxrQkFBQSxHQUFBQyxjQUFBLENBQUFKLGVBQUEsQ0FBQUQsRUFBQTtNQUFLdkYsR0FBRyxHQUFBMkYsa0JBQUE7TUFBRXZILEtBQUssR0FBQXVILGtCQUFBO0lBQ2xCZixpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFN0UsR0FBRyxFQUFFNUIsS0FBSyxDQUFDO0VBQ3JDO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU3lILG1CQUFtQkEsQ0FBQ2hCLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUU7RUFDdEQsSUFBSUQsUUFBUSxDQUFDRSxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7SUFDN0IsSUFBTWMsU0FBUyxHQUFHaEIsUUFBUSxDQUFDSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JETixJQUFJLENBQUNrQixtQkFBbUIsQ0FBQ0QsU0FBUyxFQUFFakIsSUFBSSxDQUFDbUIsUUFBUSxDQUFDRixTQUFTLENBQUMsQ0FBQztJQUM3RGpCLElBQUksQ0FBQ0ksZ0JBQWdCLENBQUNhLFNBQVMsRUFBRWYsU0FBUyxDQUFDO0VBQzdDLENBQUMsTUFBTSxJQUFJRCxRQUFRLEtBQUssT0FBTyxFQUFFO0lBQy9CQyxTQUFTLEdBQUdMLHdEQUFnQixDQUFDSyxTQUFTLENBQUM7RUFDekMsQ0FBQyxNQUFNLElBQUlELFFBQVEsS0FBSyxPQUFPLEVBQUU7SUFDL0JDLFNBQVMsR0FBR0osb0RBQVksQ0FBQ0ksU0FBUyxDQUFDO0VBQ3JDO0VBRUEsSUFBSSxDQUFDRCxRQUFRLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUM5QkgsSUFBSSxDQUFDTyxVQUFVLENBQUNDLFlBQVksQ0FBQ1AsUUFBUSxFQUFFQyxTQUFTLENBQUM7RUFDbkQ7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTa0IsbUJBQW1CQSxDQUFDQyxVQUFVLEVBQUVwQixRQUFRLEVBQUVDLFNBQVMsRUFBRTtFQUM1RCxJQUFJRCxRQUFRLENBQUNFLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUM3QmtCLFVBQVUsQ0FBQ0gsbUJBQW1CLENBQUNqQixRQUFRLENBQUNJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsRUFBRUosU0FBUyxDQUFDO0VBQ2hGLENBQUMsTUFBTTtJQUNMbUIsVUFBVSxDQUFDZCxVQUFVLENBQUNlLGVBQWUsQ0FBQ3JCLFFBQVEsQ0FBQztFQUNqRDtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU3NCLFdBQVdBLENBQUN2QixJQUFJLEVBQUU7RUFDaENBLElBQUksQ0FBQzVCLFFBQVEsQ0FBQ29ELE9BQU8sQ0FBQyxVQUFDQyxLQUFLLEVBQUs7SUFDL0JGLFdBQVcsQ0FBQ0UsS0FBSyxDQUFDO0VBQ3BCLENBQUMsQ0FBQztFQUVGLElBQUl6QixJQUFJLENBQUNPLFVBQVUsRUFBRTtJQUNuQlAsSUFBSSxDQUFDMEIsY0FBYyxDQUFDLENBQUM7SUFDckIxQixJQUFJLENBQUNPLFVBQVUsQ0FBQ29CLFVBQVUsQ0FBQ0MsV0FBVyxDQUFDNUIsSUFBSSxDQUFDTyxVQUFVLENBQUM7RUFDekQ7RUFFQSxJQUFJUCxJQUFJLENBQUM2QixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDNUI3QixJQUFJLENBQUM4QixRQUFRLENBQUNyQyxTQUFTLENBQUMsQ0FBQztFQUMzQjtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNzQyxhQUFhQSxDQUFDL0IsSUFBSSxFQUFFZ0MsUUFBUSxFQUFFO0VBQzVDLElBQUloQyxJQUFJLENBQUM2QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDdkI3QixJQUFJLENBQUNPLFVBQVUsR0FBRzBCLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDbEMsSUFBSSxDQUFDbUMsR0FBRyxDQUFDO0VBQ3JELENBQUMsTUFBTSxJQUFJbkMsSUFBSSxDQUFDNkIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0lBQUEsSUFBQU8sSUFBQSxFQUFBQyxxQkFBQTtJQUNqQyxJQUFNQyxhQUFhLEdBQUc1Qyw4REFBZSxDQUFDTSxJQUFJLEVBQUUsU0FBUyxDQUFDO0lBQ3RELElBQU11QyxLQUFLLElBQUFILElBQUEsSUFBQUMscUJBQUEsR0FBR3JDLElBQUksQ0FBQ2EsWUFBWSxDQUFDMEIsS0FBSyxjQUFBRixxQkFBQSxjQUFBQSxxQkFBQSxHQUFJQyxhQUFhLGFBQWJBLGFBQWEsdUJBQWJBLGFBQWEsQ0FBRXpCLFlBQVksQ0FBQzBCLEtBQUssY0FBQUgsSUFBQSxjQUFBQSxJQUFBLEdBQUksRUFBRTtJQUVoRixJQUFJRyxLQUFLLEVBQUU7TUFDVHZDLElBQUksQ0FBQ08sVUFBVSxHQUFHMEIsUUFBUSxDQUFDTyxlQUFlLENBQUNELEtBQUssRUFBRXZDLElBQUksQ0FBQ21DLEdBQUcsQ0FBQztJQUM3RCxDQUFDLE1BQU07TUFDTG5DLElBQUksQ0FBQ08sVUFBVSxHQUFHMEIsUUFBUSxDQUFDRixhQUFhLENBQUMvQixJQUFJLENBQUNtQyxHQUFHLENBQUM7SUFDcEQ7SUFFQTFCLHdCQUF3QixDQUFDVCxJQUFJLENBQUM7RUFDaEM7RUFFQSxJQUFNeUMsUUFBUSxHQUFHN0MsMERBQWtCLENBQUNJLElBQUksQ0FBQztFQUN6QyxJQUFNMEMsT0FBTyxHQUFHRCxRQUFRLENBQUNyRSxRQUFRLENBQUM0RCxRQUFRLENBQUM7RUFFM0NTLFFBQVEsQ0FBQ0UsWUFBWSxDQUFDM0MsSUFBSSxDQUFDTyxVQUFVLEVBQUVtQyxPQUFPLENBQUM7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRSxhQUFhQSxDQUFDNUMsSUFBSSxFQUFFO0VBQ2xDLElBQU02QyxXQUFXLEdBQUdsRCxpREFBUyxDQUFDSyxJQUFJLENBQUNtQixRQUFRLEVBQUVuQixJQUFJLENBQUNhLFlBQVksQ0FBQztFQUUvRGdDLFdBQVcsQ0FBQ3JCLE9BQU8sQ0FBQyxVQUFDc0IsSUFBSSxFQUFLO0lBQzVCLElBQUlBLElBQUksQ0FBQ3RFLElBQUksS0FBSyxRQUFRLEVBQUc7TUFDM0I0QyxtQkFBbUIsQ0FBQ3BCLElBQUksRUFBRThDLElBQUksQ0FBQ25HLElBQUksRUFBRW1HLElBQUksQ0FBQ3ZKLEtBQUssQ0FBQztJQUNsRCxDQUFDLE1BQU0sSUFBSXVKLElBQUksQ0FBQ3RFLElBQUksS0FBSyxLQUFLLEVBQUc7TUFDL0J1QixpQkFBaUIsQ0FBQ0MsSUFBSSxFQUFFOEMsSUFBSSxDQUFDbkcsSUFBSSxFQUFFbUcsSUFBSSxDQUFDdkosS0FBSyxDQUFDO0lBQ2hELENBQUMsTUFBTSxJQUFJdUosSUFBSSxDQUFDdEUsSUFBSSxLQUFLLFFBQVEsRUFBRztNQUNsQ3dDLG1CQUFtQixDQUFDaEIsSUFBSSxFQUFFOEMsSUFBSSxDQUFDbkcsSUFBSSxFQUFFbUcsSUFBSSxDQUFDdkosS0FBSyxDQUFDO0lBQ2xEO0VBQ0YsQ0FBQyxDQUFDO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeElpRTtBQUNqQjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMwSixtQkFBbUJBLENBQUNqRCxJQUFJLEVBQUU7RUFDakNBLElBQUksQ0FBQ2tELE1BQU0sR0FBRyxXQUFXO0VBRXpCLElBQUlsRCxJQUFJLENBQUM2QixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDNUI3QixJQUFJLENBQUNtRCxlQUFlLENBQUMsQ0FBQztJQUV0QixJQUFJQyxZQUFZLEdBQUdwRCxJQUFJLENBQUM4QixRQUFRLENBQUNoRSxNQUFNLENBQUMsQ0FBQztJQUN6Q3NGLFlBQVksR0FBR0wsbUVBQTJCLENBQUNLLFlBQVksQ0FBQztJQUN4RCxJQUFJQyxPQUFPLEdBQUdMLCtEQUFnQixDQUFDSSxZQUFZLENBQUM7SUFFNUMsSUFBSUMsT0FBTyxFQUFFO01BQ1hyRCxJQUFJLENBQUNzRCxXQUFXLENBQUNELE9BQU8sQ0FBQztJQUMzQjtFQUNGO0VBRUFyRCxJQUFJLENBQUM1QixRQUFRLENBQUNvRCxPQUFPLENBQUMsVUFBQytCLFNBQVMsRUFBSztJQUNuQ0EsU0FBUyxDQUFDTCxNQUFNLEdBQUcsV0FBVztJQUM5QkQsbUJBQW1CLENBQUNNLFNBQVMsQ0FBQztFQUNoQyxDQUFDLENBQUM7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLGtCQUFrQkEsQ0FBQ0MsV0FBVyxFQUFFQyxPQUFPLEVBQXFCO0VBQUEsSUFBbkJDLFNBQVMsR0FBQS9JLFNBQUEsQ0FBQTFCLE1BQUEsUUFBQTBCLFNBQUEsUUFBQWdKLFNBQUEsR0FBQWhKLFNBQUEsTUFBRyxLQUFLO0VBQ2pFLElBQUk2SSxXQUFXLENBQUN0QixHQUFHLEtBQUt1QixPQUFPLENBQUN2QixHQUFHLEVBQUU7SUFBQSxJQUFBMEIsaUJBQUEsRUFBQUMsbUJBQUE7SUFDbkNKLE9BQU8sQ0FBQ3ZDLFFBQVEsSUFBQTBDLGlCQUFBLEdBQUdILE9BQU8sQ0FBQ3ZDLFFBQVEsY0FBQTBDLGlCQUFBLGNBQUFBLGlCQUFBLEdBQUkvRSwrQ0FBVztJQUNsRDRFLE9BQU8sQ0FBQ25ELFVBQVUsSUFBQXVELG1CQUFBLEdBQUdKLE9BQU8sQ0FBQ25ELFVBQVUsY0FBQXVELG1CQUFBLGNBQUFBLG1CQUFBLEdBQUksSUFBSTtJQUUvQyxJQUFJSixPQUFPLENBQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7TUFBQSxJQUFBa0MscUJBQUE7TUFDL0JMLE9BQU8sQ0FBQzVCLFFBQVEsR0FBRzJCLFdBQVcsQ0FBQzNCLFFBQVE7TUFDdkM0QixPQUFPLENBQUM1QixRQUFRLENBQUNoRixLQUFLLElBQUFpSCxxQkFBQSxHQUFHTCxPQUFPLENBQUM3QyxZQUFZLGNBQUFrRCxxQkFBQSxjQUFBQSxxQkFBQSxHQUFJakYsK0NBQVc7TUFDNUQ7SUFDRjtFQUNGO0VBRUEsSUFBSTZFLFNBQVMsRUFBRTtJQUNiRCxPQUFPLENBQUN0RixRQUFRLENBQUNvRCxPQUFPLENBQUMsVUFBQytCLFNBQVMsRUFBRVMsS0FBSyxFQUFLO01BQzdDUixrQkFBa0IsQ0FBQ0MsV0FBVyxDQUFDckYsUUFBUSxDQUFDNEYsS0FBSyxDQUFDLEVBQUVULFNBQVMsRUFBRUksU0FBUyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQztFQUNKO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTTSxZQUFZQSxDQUFDOUMsUUFBUSxFQUFFTixZQUFZLEVBQUU7RUFDNUMsSUFBSXZGLE9BQUEsQ0FBTzZGLFFBQVEsTUFBSyxRQUFRLElBQUk3RixPQUFBLENBQU91RixZQUFZLE1BQUssUUFBUSxFQUFFO0lBQ3BFLE9BQU8sS0FBSztFQUNkO0VBRUEsSUFBSXRJLE1BQU0sQ0FBQzJMLElBQUksQ0FBQy9DLFFBQVEsQ0FBQyxDQUFDakksTUFBTSxLQUFLWCxNQUFNLENBQUMyTCxJQUFJLENBQUNyRCxZQUFZLENBQUMsQ0FBQzNILE1BQU0sRUFBRTtJQUNyRSxPQUFPLEtBQUs7RUFDZDtFQUVBLE9BQU9YLE1BQU0sQ0FBQ3FJLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLENBQUNzRCxLQUFLLENBQUMsVUFBQS9CLElBQUEsRUFBZTRCLEtBQUssRUFBSztJQUFBLElBQUFJLEtBQUEsR0FBQXJELGNBQUEsQ0FBQXFCLElBQUE7TUFBdkJqSCxHQUFHLEdBQUFpSixLQUFBO01BQUU3SyxLQUFLLEdBQUE2SyxLQUFBO0lBQ3BELE9BQU83SyxLQUFLLEtBQUs0SCxRQUFRLENBQUNoRyxHQUFHLENBQUM7RUFDaEMsQ0FBQyxDQUFDO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTa0osZ0JBQWdCQSxDQUFDckUsSUFBSSxFQUFFO0VBQzlCLE9BQU8sQ0FBQ2lFLFlBQVksQ0FBQ2pFLElBQUksQ0FBQ21CLFFBQVEsRUFBRW5CLElBQUksQ0FBQ2EsWUFBWSxDQUFDO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTeUQsVUFBVUEsQ0FBQ3RFLElBQUksRUFBRTtFQUN4QkEsSUFBSSxDQUFDa0QsTUFBTSxHQUFHLFFBQVE7RUFDdEJsRCxJQUFJLENBQUN1RSxhQUFhLEdBQUcsSUFBSTtFQUV6QixJQUFJLENBQUN2RSxJQUFJLENBQUM2QixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDN0I7RUFDRjtFQUVBLElBQUl1QixZQUFZLEdBQUdwRCxJQUFJLENBQUM4QixRQUFRLENBQUNoRSxNQUFNLENBQUMsQ0FBQztFQUN6Q3NGLFlBQVksR0FBR0wsbUVBQTJCLENBQUNLLFlBQVksQ0FBQztFQUN4RCxJQUFNQyxPQUFPLEdBQUdMLCtEQUFnQixDQUFDSSxZQUFZLENBQUM7RUFFOUMsSUFBSUMsT0FBTyxFQUFFO0lBQ1hyRCxJQUFJLENBQUN3RSxLQUFLLENBQUMsQ0FBQztJQUNaeEUsSUFBSSxDQUFDc0QsV0FBVyxDQUFDRCxPQUFPLENBQUM7RUFDM0I7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTb0IsU0FBU0EsQ0FBQ2hCLFdBQVcsRUFBRUMsT0FBTyxFQUFFO0VBQ3ZDLElBQU1nQixpQkFBaUIsR0FBR2pCLFdBQVcsQ0FBQ2tCLEtBQUssQ0FBQyxDQUFDO0VBRTdDLElBQUlqQixPQUFPLENBQUM3QixNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7SUFDL0IsSUFBSXVCLFlBQVksR0FBR00sT0FBTyxDQUFDNUIsUUFBUSxDQUFDaEUsTUFBTSxDQUFDLENBQUM7SUFDNUNzRixZQUFZLEdBQUdMLG1FQUEyQixDQUFDSyxZQUFZLENBQUM7SUFDeEQsSUFBTUMsT0FBTyxHQUFHTCwrREFBZ0IsQ0FBQ0ksWUFBWSxDQUFDO0lBRTlDLElBQUlDLE9BQU8sRUFBRTtNQUNYSyxPQUFPLENBQUNjLEtBQUssQ0FBQyxDQUFDO01BQ2ZkLE9BQU8sQ0FBQ0osV0FBVyxDQUFDRCxPQUFPLENBQUM7SUFDOUI7RUFDRjtFQUVBcUIsaUJBQWlCLENBQUNFLE1BQU0sR0FBR2xCLE9BQU8sQ0FBQ2tCLE1BQU07RUFDekNGLGlCQUFpQixDQUFDdEcsUUFBUSxHQUFHc0YsT0FBTyxDQUFDdEYsUUFBUTtFQUU3Q3NGLE9BQU8sQ0FBQ21CLFFBQVEsQ0FBQ0gsaUJBQWlCLENBQUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0ksZUFBZUEsQ0FBQzlFLElBQUksRUFBRTdFLEdBQUcsRUFBRTtFQUFBLElBQUE0SixTQUFBLEdBQUFDLDBCQUFBLENBQ2RoRixJQUFJLENBQUM1QixRQUFRO0lBQUE2RyxLQUFBO0VBQUE7SUFBakMsS0FBQUYsU0FBQSxDQUFBRyxDQUFBLE1BQUFELEtBQUEsR0FBQUYsU0FBQSxDQUFBak4sQ0FBQSxJQUFBd0IsSUFBQSxHQUFtQztNQUFBLElBQXhCbUksS0FBSyxHQUFBd0QsS0FBQSxDQUFBMUwsS0FBQTtNQUNkLElBQUlrSSxLQUFLLENBQUN0RyxHQUFHLEtBQUtBLEdBQUcsRUFBRTtRQUNyQixPQUFPc0csS0FBSztNQUNkO0lBQ0Y7RUFBQyxTQUFBMEQsR0FBQTtJQUFBSixTQUFBLENBQUFyTixDQUFBLENBQUF5TixHQUFBO0VBQUE7SUFBQUosU0FBQSxDQUFBck0sQ0FBQTtFQUFBO0VBRUQsT0FBTyxJQUFJO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTME0scUJBQXFCQSxDQUFDM0IsV0FBVyxFQUFFNEIsWUFBWSxFQUFFckQsUUFBUSxFQUFFO0VBQ2xFO0VBQ0EsSUFBSXNELFNBQVMsR0FBRyxJQUFJO0VBRXBCLElBQUksQ0FBQzdCLFdBQVcsRUFBRTtJQUNoQixPQUFPLElBQUk7RUFDYjtFQUVBLElBQUk0QixZQUFZLENBQUNsSyxHQUFHLEVBQUU7SUFDcEJtSyxTQUFTLEdBQUdSLGVBQWUsQ0FBQ3JCLFdBQVcsRUFBRTRCLFlBQVksQ0FBQ2xLLEdBQUcsQ0FBQztFQUM1RDtFQUVBLElBQUltSyxTQUFTLEVBQUU7SUFDYixPQUFPQSxTQUFTO0VBQ2xCO0VBRUEsSUFBSTdCLFdBQVcsQ0FBQ3JGLFFBQVEsQ0FBQ2xGLE1BQU0sSUFBSThJLFFBQVEsRUFBRTtJQUMzQyxPQUFPLElBQUk7RUFDYjtFQUVBLE9BQU95QixXQUFXLENBQUNyRixRQUFRLENBQUM0RCxRQUFRLENBQUM7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU3VELFNBQVNBLENBQUM5QixXQUFXLEVBQUVDLE9BQU8sRUFBRTtFQUM5QyxJQUFJRCxXQUFXLElBQUlBLFdBQVcsQ0FBQ3RCLEdBQUcsS0FBS3VCLE9BQU8sQ0FBQ3ZCLEdBQUcsRUFBRTtJQUNsRHNCLFdBQVcsQ0FBQ1AsTUFBTSxHQUFHLFVBQVU7SUFDL0JELG1CQUFtQixDQUFDUyxPQUFPLENBQUM7SUFDNUI7RUFDRjtFQUVBLElBQUksQ0FBQ0QsV0FBVyxFQUFFO0lBQ2hCUixtQkFBbUIsQ0FBQ1MsT0FBTyxDQUFDO0lBQzVCO0VBQ0YsQ0FBQyxNQUFNLElBQUksQ0FBQ0EsT0FBTyxDQUFDN0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO0lBQ2xDMkIsa0JBQWtCLENBQUNDLFdBQVcsRUFBRUMsT0FBTyxDQUFDO0lBRXhDLElBQUlXLGdCQUFnQixDQUFDWCxPQUFPLENBQUMsRUFBRTtNQUM3QlksVUFBVSxDQUFDWixPQUFPLENBQUM7SUFDckIsQ0FBQyxNQUFNO01BQ0xlLFNBQVMsQ0FBQ2hCLFdBQVcsRUFBRUMsT0FBTyxDQUFDO0lBQ2pDO0VBQ0Y7RUFFQSxJQUFNOEIsaUJBQWlCLEdBQUcsRUFBRTtFQUM1QjlCLE9BQU8sQ0FBQ3RGLFFBQVEsQ0FBQ29ELE9BQU8sQ0FBQyxVQUFDK0IsU0FBUyxFQUFFUyxLQUFLLEVBQUs7SUFDN0MsSUFBTXlCLGFBQWEsR0FBR0wscUJBQXFCLENBQUMzQixXQUFXLEVBQUVGLFNBQVMsRUFBRVMsS0FBSyxDQUFDO0lBRTFFdUIsU0FBUyxDQUFDRSxhQUFhLEVBQUVsQyxTQUFTLENBQUM7SUFDbkNpQyxpQkFBaUIsQ0FBQ0UsSUFBSSxDQUFDbkMsU0FBUyxDQUFDO0VBQ25DLENBQUMsQ0FBQztFQUVGRSxXQUFXLENBQUNyRixRQUFRLENBQUNvRCxPQUFPLENBQUMsVUFBQytCLFNBQVMsRUFBRVMsS0FBSyxFQUFLO0lBQ2pELElBQUksQ0FBQ3dCLGlCQUFpQixDQUFDRyxRQUFRLENBQUNwQyxTQUFTLENBQUMsRUFBRTtNQUMxQ0EsU0FBUyxDQUFDTCxNQUFNLEdBQUcsVUFBVTtJQUMvQjtFQUNGLENBQUMsQ0FBQztBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUzBDLHVCQUF1QkEsQ0FBQzVGLElBQUksRUFBZ0I7RUFBQSxJQUFkZ0MsUUFBUSxHQUFBcEgsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBZ0osU0FBQSxHQUFBaEosU0FBQSxNQUFHLENBQUM7RUFDeEQ7RUFDQSxJQUFJaUwsT0FBTyxHQUFHLEVBQUU7RUFFaEIsSUFBSSxDQUFDN0YsSUFBSSxFQUFFO0lBQ1QsT0FBTzZGLE9BQU87RUFDaEI7RUFFQSxJQUFJN0YsSUFBSSxDQUFDa0QsTUFBTSxLQUFLLEVBQUUsRUFBRTtJQUN0QjJDLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDO01BQ1hsSCxJQUFJLEVBQUV3QixJQUFJLENBQUNrRCxNQUFNO01BQ2pCMEIsTUFBTSxFQUFFNUUsSUFBSSxDQUFDNEUsTUFBTTtNQUNuQmtCLE9BQU8sRUFBRTlGLElBQUk7TUFDYmdDLFFBQVEsRUFBUkE7SUFDRixDQUFDLENBQUM7SUFDRmhDLElBQUksQ0FBQ2tELE1BQU0sR0FBRyxFQUFFO0VBQ2xCO0VBRUFsRCxJQUFJLENBQUM1QixRQUFRLENBQUNvRCxPQUFPLENBQUMsVUFBQ0MsS0FBSyxFQUFFdUMsS0FBSyxFQUFLO0lBQ3RDNkIsT0FBTyxNQUFBRSxNQUFBLENBQUFDLGtCQUFBLENBQ0ZILE9BQU8sR0FBQUcsa0JBQUEsQ0FDUEosdUJBQXVCLENBQUNuRSxLQUFLLEVBQUV1QyxLQUFLLENBQUMsRUFDekM7RUFDSCxDQUFDLENBQUM7RUFFRixPQUFPNkIsT0FBTztBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0ksVUFBVUEsQ0FBQ2pHLElBQUksRUFBRTtFQUMvQkEsSUFBSSxDQUFDa0QsTUFBTSxHQUFHLEVBQUU7RUFDaEI7O0VBRUEsSUFBSSxDQUFDZSxZQUFZLENBQUNqRSxJQUFJLENBQUNtQixRQUFRLEVBQUVuQixJQUFJLENBQUNhLFlBQVksQ0FBQyxFQUFFO0lBQ25EYixJQUFJLENBQUNtQixRQUFRLEdBQUduQixJQUFJLENBQUNhLFlBQVk7RUFDbkM7RUFFQWIsSUFBSSxDQUFDNUIsUUFBUSxDQUFDb0QsT0FBTyxDQUFDLFVBQUNDLEtBQUssRUFBSztJQUMvQndFLFVBQVUsQ0FBQ3hFLEtBQUssQ0FBQztFQUNuQixDQUFDLENBQUM7QUFDSixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hSb0Q7QUFDd0I7QUFDWjtBQUV6RCxJQUFNMEUsS0FBSztFQUNoQixTQUFBQSxNQUFBLEVBQWM7SUFBQW5MLGVBQUEsT0FBQW1MLEtBQUE7SUFDWjtJQUNBLElBQUksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7SUFDbkI7SUFDQSxJQUFJLENBQUNDLFNBQVMsR0FBRyxJQUFJO0lBQ3JCO0lBQ0EsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSTtFQUMxQjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkUsT0FBQWxMLFlBQUEsQ0FBQStLLEtBQUE7SUFBQWhMLEdBQUE7SUFBQTVCLEtBQUEsRUFLQSxTQUFBZ04sZUFBZUEsQ0FBQ0MsTUFBTSxFQUFFO01BQ3RCLElBQUksQ0FBQ0gsU0FBUyxHQUFHRyxNQUFNO0lBQ3pCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFyTCxHQUFBO0lBQUE1QixLQUFBLEVBTUEsU0FBQWtOLEtBQUtBLENBQUNDLE9BQU8sRUFBRTtNQUNiLElBQUksT0FBT0EsT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUMvQixJQUFJLENBQUNOLE9BQU8sR0FBR25FLFFBQVEsQ0FBQzBFLGFBQWEsQ0FBQ0QsT0FBTyxDQUFDO01BQ2hELENBQUMsTUFBTTtRQUNMLElBQUksQ0FBQ04sT0FBTyxHQUFHTSxPQUFPO01BQ3hCO01BRUEsSUFBSSxFQUFFLElBQUksQ0FBQ04sT0FBTyxZQUFZUSxXQUFXLENBQUMsRUFBRTtRQUMxQyxNQUFNLElBQUlDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQztNQUNsRDtNQUVBLElBQUksQ0FBQy9JLE1BQU0sQ0FBQyxDQUFDO0lBQ2Y7RUFBQztJQUFBM0MsR0FBQTtJQUFBNUIsS0FBQSxFQUVELFNBQUF1RSxNQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDc0ksT0FBTyxFQUFFO1FBQ2pCLE1BQU0sSUFBSVMsS0FBSyxDQUFDLCtCQUErQixDQUFDO01BQ2xEO01BRUEsSUFBTXpELFlBQVksR0FBRyxJQUFJLENBQUNpRCxTQUFTLENBQUMsQ0FBQztNQUNyQyxJQUFNUyxjQUFjLEdBQUdaLG1FQUFvQixDQUFDOUMsWUFBWSxDQUFDO01BRXpEbUMsc0RBQVMsQ0FBQyxJQUFJLENBQUNlLFlBQVksRUFBRVEsY0FBYyxDQUFDO01BRTVDLElBQU1DLFNBQVMsR0FBR25CLG9FQUF1QixDQUFDLElBQUksQ0FBQ1UsWUFBWSxDQUFDO01BQzVELElBQU1VLFVBQVUsR0FBR3BCLG9FQUF1QixDQUFDa0IsY0FBYyxDQUFDO01BRTFEQyxTQUFTLENBQUN2RixPQUFPLENBQUMsVUFBQzBCLE1BQU0sRUFBSztRQUM1QixJQUFJQSxNQUFNLENBQUMxRSxJQUFJLEtBQUssVUFBVSxFQUFFO1VBQzlCK0MsaURBQVcsQ0FBQzJCLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQztRQUM3QjtNQUNGLENBQUMsQ0FBQztNQUVGLElBQUksQ0FBQ1EsWUFBWSxHQUFHUSxjQUFjO01BQ2xDLElBQUksQ0FBQ1IsWUFBWSxDQUFDL0YsVUFBVSxHQUFHLElBQUksQ0FBQzZGLE9BQU87O01BRTNDO01BQ0EsSUFBTWEscUJBQXFCLEdBQUcsRUFBRTtNQUNoQztNQUNBLElBQU1DLHFCQUFxQixHQUFHLEVBQUU7TUFDaEN0SixPQUFPLENBQUNDLEdBQUcsQ0FBQ21KLFVBQVUsQ0FBQztNQUN2QkEsVUFBVSxDQUFDeEYsT0FBTyxDQUFDLFVBQUMwQixNQUFNLEVBQUs7UUFDN0IsSUFBSUEsTUFBTSxDQUFDMUUsSUFBSSxLQUFLLFdBQVcsRUFBRTtVQUMvQjJJLGVBQWUsQ0FBQ2pFLE1BQU0sRUFBRStELHFCQUFxQixDQUFDO1FBQ2hELENBQUMsTUFBTSxJQUFJL0QsTUFBTSxDQUFDMUUsSUFBSSxLQUFLLFFBQVEsRUFBRTtVQUNuQzRJLFlBQVksQ0FBQ2xFLE1BQU0sRUFBRWdFLHFCQUFxQixDQUFDO1FBQzdDO01BQ0YsQ0FBQyxDQUFDO01BRUZqQix1REFBVSxDQUFDLElBQUksQ0FBQ0ssWUFBWSxDQUFDO0lBQy9COztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0VBSEU7SUFBQW5MLEdBQUE7SUFBQTVCLEtBQUEsRUFJQSxTQUFBOE4sY0FBY0EsQ0FBQ0MsU0FBUyxFQUFFLENBRTFCO0VBQUM7QUFBQTs7QUFHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNDLHFCQUFxQkEsQ0FBQ0MsY0FBYyxFQUFvQjtFQUFBLElBQWxCQyxNQUFNLEdBQUE3TSxTQUFBLENBQUExQixNQUFBLFFBQUEwQixTQUFBLFFBQUFnSixTQUFBLEdBQUFoSixTQUFBLE1BQUcsT0FBTztFQUM3RCxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMrSyxRQUFRLENBQUM4QixNQUFNLENBQUMsRUFBRTtJQUN6Q0EsTUFBTSxHQUFHLE9BQU87RUFDbEI7RUFFQSxPQUFPRCxjQUFjLENBQUN0TyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ2hDLElBQUl1TyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUNELGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0Usa0JBQWtCLENBQUMsQ0FBQyxFQUFFO01BQ2pFO0lBQ0YsQ0FBQyxNQUFNLElBQUlELE1BQU0sS0FBSyxRQUFRLElBQUksQ0FBQ0QsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDRyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUU7TUFDekU7SUFDRjtJQUVBLElBQUlGLE1BQU0sS0FBSyxPQUFPLEVBQUU7TUFDdEJELGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQ3JLLE9BQU8sR0FBRyxJQUFJO01BQ2hDcUssY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDMUYsUUFBUSxDQUFDM0UsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxNQUFNLElBQUlzSyxNQUFNLEtBQUssUUFBUSxFQUFFO01BQzlCRCxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMxRixRQUFRLENBQUN2RSxPQUFPLENBQUMsQ0FBQztJQUN0QztJQUVBaUssY0FBYyxDQUFDSSxLQUFLLENBQUMsQ0FBQztFQUN4QjtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNULGVBQWVBLENBQUNqRSxNQUFNLEVBQUVzRSxjQUFjLEVBQUU7RUFDL0MsSUFBSXRFLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQ2pFLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUN0QzJGLGNBQWMsQ0FBQ0ssT0FBTyxDQUFDM0UsTUFBTSxDQUFDNEMsT0FBTyxDQUFDO0VBQ3hDO0VBRUEsSUFBSTVDLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQ2pFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSXFCLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQ2pFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUNyRUUsbURBQWEsQ0FBQ21CLE1BQU0sQ0FBQzRDLE9BQU8sRUFBRTVDLE1BQU0sQ0FBQ2xCLFFBQVEsQ0FBQztJQUM5QztFQUNGO0VBRUF1RixxQkFBcUIsQ0FBQ0MsY0FBYyxFQUFFLE9BQU8sQ0FBQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTSixZQUFZQSxDQUFDbEUsTUFBTSxFQUFFc0UsY0FBYyxFQUFFO0VBQzVDdEUsTUFBTSxDQUFDNEMsT0FBTyxDQUFDdkIsYUFBYSxHQUFHLEtBQUs7RUFFcEMsSUFBSXJCLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQ2pFLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtJQUN0QzJGLGNBQWMsQ0FBQ0ssT0FBTyxDQUFDM0UsTUFBTSxDQUFDNEMsT0FBTyxDQUFDO0VBQ3hDO0VBRUEsSUFBSTVDLE1BQU0sQ0FBQzRDLE9BQU8sQ0FBQ2pFLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtJQUNwQ2UsbURBQWEsQ0FBQ00sTUFBTSxDQUFDNEMsT0FBTyxDQUFDO0VBQy9CO0VBRUF5QixxQkFBcUIsQ0FBQ0MsY0FBYyxFQUFFLFFBQVEsQ0FBQztBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKTyxJQUFNMUksV0FBVyxHQUFHLENBQUMsQ0FBQzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU2lFLDJCQUEyQkEsQ0FBQ0ssWUFBWSxFQUFFO0VBQ3hELElBQUksT0FBT0EsWUFBWSxLQUFLLFFBQVEsRUFBRTtJQUNwQyxPQUFPQSxZQUFZO0VBQ3JCOztFQUVBO0VBQ0EsSUFBSWhGLFFBQVEsR0FBRyxFQUFFO0VBQ2pCZ0YsWUFBWSxDQUFDaEYsUUFBUSxDQUFDb0QsT0FBTyxDQUFDLFVBQUFDLEtBQUssRUFBSTtJQUNyQyxJQUFJLENBQUNxRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3RHLEtBQUssQ0FBQyxFQUFFO01BQ3pCckQsUUFBUSxDQUFDc0gsSUFBSSxDQUFDakUsS0FBSyxDQUFDO01BQ3BCO0lBQ0Y7SUFFQXJELFFBQVEsTUFBQTJILE1BQUEsQ0FBQUMsa0JBQUEsQ0FDSDVILFFBQVEsR0FBQTRILGtCQUFBLENBQ1J2RSxLQUFLLEVBQ1Q7RUFDSCxDQUFDLENBQUM7RUFFRixPQUFBdUcsYUFBQSxDQUFBQSxhQUFBLEtBQ0s1RSxZQUFZO0lBQ2ZoRixRQUFRLEVBQVJBO0VBQVE7QUFFWjtBQUVPLFNBQVN5QixnQkFBZ0JBLENBQUN0RyxLQUFLLEVBQUU7RUFDdEMsSUFBSStCLE9BQUEsQ0FBTy9CLEtBQUssTUFBSyxRQUFRLEVBQUU7SUFDN0IsT0FBT0EsS0FBSyxDQUFDME8sUUFBUSxDQUFDLENBQUM7RUFDekI7RUFFQSxJQUFJQyxXQUFXLEdBQUcsQ0FBQ0osS0FBSyxDQUFDQyxPQUFPLENBQUN4TyxLQUFLLENBQUMsR0FBR2hCLE1BQU0sQ0FBQzJMLElBQUksQ0FBQzNLLEtBQUssQ0FBQyxDQUFDNE8sTUFBTSxDQUFDLFVBQUNDLFNBQVMsRUFBSztJQUNqRixPQUFPN08sS0FBSyxDQUFDNk8sU0FBUyxDQUFDO0VBQ3pCLENBQUMsQ0FBQyxHQUFHN08sS0FBSztFQUVWMk8sV0FBVyxHQUFHQSxXQUFXLENBQUNDLE1BQU0sQ0FBQyxVQUFDQyxTQUFTLEVBQUVwRSxLQUFLLEVBQUVxRSxNQUFNLEVBQUs7SUFDN0QsT0FBT0EsTUFBTSxDQUFDQyxPQUFPLENBQUNGLFNBQVMsQ0FBQyxLQUFLcEUsS0FBSztFQUM1QyxDQUFDLENBQUM7RUFFRixPQUFPa0UsV0FBVyxDQUFDSyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzlCO0FBRU8sU0FBU3pJLFlBQVlBLENBQUN2RyxLQUFLLEVBQUU7RUFDbEMsSUFBSXVPLEtBQUssQ0FBQ0MsT0FBTyxDQUFDeE8sS0FBSyxDQUFDLEVBQUU7SUFDeEIsTUFBTSxJQUFJc04sS0FBSyxDQUFDLCtCQUErQixDQUFDO0VBQ2xEO0VBRUEsSUFBSXZMLE9BQUEsQ0FBTy9CLEtBQUssTUFBSyxRQUFRLEVBQUU7SUFDN0IsT0FBT0EsS0FBSyxDQUFDME8sUUFBUSxDQUFDLENBQUM7RUFDekI7RUFFQSxPQUFPMVAsTUFBTSxDQUFDcUksT0FBTyxDQUFDckgsS0FBSyxDQUFDLENBQUM4RSxHQUFHLENBQUMsVUFBQStELElBQUEsRUFBa0I7SUFBQSxJQUFBZ0MsS0FBQSxHQUFBckQsY0FBQSxDQUFBcUIsSUFBQTtNQUFoQmpILEdBQUcsR0FBQWlKLEtBQUE7TUFBRTdLLEtBQUssR0FBQTZLLEtBQUE7SUFDM0MsSUFBSSxjQUFjLENBQUNvRSxJQUFJLENBQUNyTixHQUFHLENBQUMsRUFBRTtNQUM1QixJQUFNc04sU0FBUyxHQUFHdE4sR0FBRyxDQUFDdU4sS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDckssR0FBRyxDQUFDLFVBQUNzSyxLQUFLLEVBQUs7UUFDdEQsT0FBT0EsS0FBSyxDQUFDckksV0FBVyxDQUFDLENBQUM7TUFDNUIsQ0FBQyxDQUFDO01BRUZuRixHQUFHLEdBQUdzTixTQUFTLENBQUNGLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDM0I7SUFFQSxVQUFBeEMsTUFBQSxDQUFVNUssR0FBRyxRQUFBNEssTUFBQSxDQUFLeE0sS0FBSztFQUN6QixDQUFDLENBQUMsQ0FBQ2dQLElBQUksQ0FBQyxJQUFJLENBQUM7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTNUksU0FBU0EsQ0FBQ3dCLFFBQVEsRUFBRU4sWUFBWSxFQUFFO0VBQ2hEO0VBQ0EsSUFBTStILFNBQVMsR0FBRyxFQUFFO0VBRXBCLFNBQUFsSSxFQUFBLE1BQUFDLGVBQUEsR0FBMkJwSSxNQUFNLENBQUNxSSxPQUFPLENBQUNDLFlBQVksQ0FBQyxFQUFBSCxFQUFBLEdBQUFDLGVBQUEsQ0FBQXpILE1BQUEsRUFBQXdILEVBQUEsSUFBRTtJQUFwRCxJQUFBSSxrQkFBQSxHQUFBQyxjQUFBLENBQUFKLGVBQUEsQ0FBQUQsRUFBQTtNQUFPdkYsR0FBRyxHQUFBMkYsa0JBQUE7TUFBRXZILEtBQUssR0FBQXVILGtCQUFBO0lBQ3BCLElBQUlLLFFBQVEsQ0FBQ2hHLEdBQUcsQ0FBQyxLQUFLeUksU0FBUyxJQUFJekMsUUFBUSxDQUFDaEcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFO01BQ3pEeU4sU0FBUyxDQUFDbEQsSUFBSSxDQUFDO1FBQUVsSCxJQUFJLEVBQUUsS0FBSztRQUFFN0IsSUFBSSxFQUFFeEIsR0FBRztRQUFFNUIsS0FBSyxFQUFMQTtNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDLE1BQU0sSUFBSUEsS0FBSyxLQUFLNEgsUUFBUSxDQUFDaEcsR0FBRyxDQUFDLEVBQUU7TUFDbEN5TixTQUFTLENBQUNsRCxJQUFJLENBQUM7UUFBRWxILElBQUksRUFBRSxRQUFRO1FBQUU3QixJQUFJLEVBQUV4QixHQUFHO1FBQUU1QixLQUFLLEVBQUxBO01BQU8sQ0FBQyxDQUFDO0lBQ3ZEO0VBQ0Y7RUFFQSxTQUFBc1AsR0FBQSxNQUFBQyxnQkFBQSxHQUEyQnZRLE1BQU0sQ0FBQ3FJLE9BQU8sQ0FBQ08sUUFBUSxDQUFDLEVBQUEwSCxHQUFBLEdBQUFDLGdCQUFBLENBQUE1UCxNQUFBLEVBQUEyUCxHQUFBLElBQUU7SUFBaEQsSUFBQUUsbUJBQUEsR0FBQWhJLGNBQUEsQ0FBQStILGdCQUFBLENBQUFELEdBQUE7TUFBTzFOLElBQUcsR0FBQTROLG1CQUFBO01BQUV4UCxNQUFLLEdBQUF3UCxtQkFBQTtJQUNwQixJQUFJbEksWUFBWSxDQUFDMUYsSUFBRyxDQUFDLEtBQUt5SSxTQUFTLElBQUkvQyxZQUFZLENBQUMxRixJQUFHLENBQUMsS0FBSyxJQUFJLEVBQUU7TUFDakV5TixTQUFTLENBQUNsRCxJQUFJLENBQUM7UUFBRWxILElBQUksRUFBRSxRQUFRO1FBQUU3QixJQUFJLEVBQUV4QixJQUFHO1FBQUU1QixLQUFLLEVBQUxBO01BQU0sQ0FBQyxDQUFDO0lBQ3REO0VBQ0Y7RUFFQSxPQUFPcVAsU0FBUztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNoSixrQkFBa0JBLENBQUNJLElBQUksRUFBRTtFQUN2QyxJQUFJeUQsV0FBVyxHQUFHekQsSUFBSTtFQUV0QixPQUFPeUQsV0FBVyxJQUFJQSxXQUFXLENBQUNtQixNQUFNLEVBQUU7SUFDeEMsSUFBSW5CLFdBQVcsQ0FBQ21CLE1BQU0sQ0FBQ3JFLFVBQVUsRUFBRTtNQUNqQyxPQUFPa0QsV0FBVyxDQUFDbUIsTUFBTSxDQUFDckUsVUFBVTtJQUN0QztJQUVBa0QsV0FBVyxHQUFHQSxXQUFXLENBQUNtQixNQUFNO0VBQ2xDO0VBRUEsT0FBTyxJQUFJO0FBQ2IsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSG9DO0FBQ0g7QUFBQSxJQUVacUUsV0FBVztFQUM5QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNFLFNBQUFBLFlBQVl6SyxJQUFJLEVBQUUyRCxHQUFHLEVBQWM7SUFBQSxJQUFackYsS0FBSyxHQUFBbEMsU0FBQSxDQUFBMUIsTUFBQSxRQUFBMEIsU0FBQSxRQUFBZ0osU0FBQSxHQUFBaEosU0FBQSxNQUFHLENBQUMsQ0FBQztJQUFBSSxlQUFBLE9BQUFpTyxXQUFBO0lBQy9CLElBQUE3RyxJQUFBLEdBQStCdEYsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSSxDQUFDLENBQUM7TUFBbEMzQixHQUFHLEdBQUFpSCxJQUFBLENBQUhqSCxHQUFHO01BQUsrTixVQUFVLEdBQUFDLHdCQUFBLENBQUEvRyxJQUFBLEVBQUFnSCxTQUFBOztJQUUxQjtJQUNBLElBQUksQ0FBQ2pPLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ3FELElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUMyRCxHQUFHLEdBQUdBLEdBQUc7O0lBRWQ7SUFDQTtJQUNBLElBQUksQ0FBQ2hCLFFBQVEsR0FBR3JDLCtDQUFXO0lBQzNCO0lBQ0EsSUFBSSxDQUFDK0IsWUFBWSxHQUFHL0QsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSWdDLCtDQUFXO0lBQ3hDO0lBQ0E7SUFDQTtJQUNBLElBQUksQ0FBQ2dELFFBQVEsR0FBRyxJQUFJO0lBQ3BCO0lBQ0EsSUFBSSxDQUFDdkIsVUFBVSxHQUFHLElBQUk7SUFDdEI7SUFDQSxJQUFJLENBQUM4SSxTQUFTLEdBQUd2SywrQ0FBVzs7SUFFNUI7SUFDQTtJQUNBLElBQUksQ0FBQ29FLE1BQU0sR0FBRyxFQUFFO0lBQ2hCO0lBQ0EsSUFBSSxDQUFDL0YsT0FBTyxHQUFHLEtBQUs7SUFDcEI7SUFDQSxJQUFJLENBQUNvSCxhQUFhLEdBQUcsS0FBSztJQUMxQjtJQUNBOztJQUVBO0lBQ0E7SUFDQSxJQUFJLENBQUNLLE1BQU0sR0FBRyxJQUFJO0lBQ2xCO0lBQ0EsSUFBSSxDQUFDeEcsUUFBUSxHQUFHLEVBQUU7RUFDcEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtFQUpFLE9BQUFoRCxZQUFBLENBQUE2TixXQUFBO0lBQUE5TixHQUFBO0lBQUE1QixLQUFBLEVBS0EsU0FBQXNJLE1BQU1BLENBQUNyRCxJQUFJLEVBQUU7TUFDWCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxLQUFLQSxJQUFJO0lBQzNCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBckQsR0FBQTtJQUFBNUIsS0FBQSxFQUtBLFNBQUFtTyxrQkFBa0JBLENBQUEsRUFBRztNQUNuQixPQUFPLElBQUksQ0FBQ3RKLFFBQVEsQ0FBQ2tMLE1BQU0sQ0FBQyxVQUFDQyxLQUFLLEVBQUVoRyxTQUFTLEVBQUs7UUFDaEQsSUFBSWlHLE1BQU0sR0FBRyxLQUFLO1FBRWxCLElBQUlqRyxTQUFTLENBQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLElBQUkwQixTQUFTLENBQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7VUFDM0QySCxNQUFNLEdBQUdqRyxTQUFTLENBQUNoRCxVQUFVLEtBQUssSUFBSTtRQUN4QyxDQUFDLE1BQU0sSUFBSWdELFNBQVMsQ0FBQzFCLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtVQUN4QzJILE1BQU0sR0FBR2pHLFNBQVMsQ0FBQ3BHLE9BQU87UUFDNUI7UUFFQSxPQUFPb00sS0FBSyxJQUFJQyxNQUFNLElBQUlqRyxTQUFTLENBQUNtRSxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztNQUNuRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDdEosUUFBUSxDQUFDbEYsTUFBTTtJQUNoQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQWlDLEdBQUE7SUFBQTVCLEtBQUEsRUFLQSxTQUFBb08sa0JBQWtCQSxDQUFBLEVBQUc7TUFDbkIsT0FBTyxJQUFJLENBQUN2SixRQUFRLENBQUNrTCxNQUFNLENBQUMsVUFBQ0MsS0FBSyxFQUFFaEcsU0FBUyxFQUFLO1FBQ2hELE9BQU9nRyxLQUFLLElBQUksQ0FBQ2hHLFNBQVMsQ0FBQ2dCLGFBQWEsSUFBSWhCLFNBQVMsQ0FBQ29FLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO01BQ3JGLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUN2SixRQUFRLENBQUNsRixNQUFNO0lBQ2hDOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFpQyxHQUFBO0lBQUE1QixLQUFBLEVBTUEsU0FBQTZHLGdCQUFnQkEsQ0FBQzVCLElBQUksRUFBRWlMLFFBQVEsRUFBRTtNQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDbEosVUFBVSxFQUFFO1FBQ3BCO01BQ0Y7TUFFQSxJQUFJLENBQUMsSUFBSSxDQUFDOEksU0FBUyxDQUFDN0ssSUFBSSxDQUFDLEVBQUU7UUFDekIsSUFBSSxDQUFDNkssU0FBUyxDQUFDN0ssSUFBSSxDQUFDLEdBQUcsRUFBRTtNQUMzQjtNQUVBLElBQUksQ0FBQytCLFVBQVUsQ0FBQ0gsZ0JBQWdCLENBQUM1QixJQUFJLEVBQUVpTCxRQUFRLENBQUM7TUFDaEQsSUFBSSxDQUFDSixTQUFTLENBQUM3SyxJQUFJLENBQUMsQ0FBQ2tILElBQUksQ0FBQytELFFBQVEsQ0FBQztJQUNyQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBdE8sR0FBQTtJQUFBNUIsS0FBQSxFQU1BLFNBQUEySCxtQkFBbUJBLENBQUMxQyxJQUFJLEVBQUVpTCxRQUFRLEVBQUU7TUFBQSxJQUFBQyxvQkFBQTtNQUNsQztNQUNBLElBQU1DLGlCQUFpQixJQUFBRCxvQkFBQSxHQUFHLElBQUksQ0FBQ0wsU0FBUyxDQUFDN0ssSUFBSSxDQUFDLGNBQUFrTCxvQkFBQSxjQUFBQSxvQkFBQSxHQUFJLEVBQUU7TUFFcEQsSUFBSUMsaUJBQWlCLENBQUN6USxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2xDO01BQ0Y7TUFFQSxJQUFJMFEsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO01BQzNCLElBQU1DLGFBQWEsR0FBR0YsaUJBQWlCLENBQUNHLElBQUksQ0FBQyxVQUFDQyxlQUFlLEVBQUUvRixLQUFLLEVBQUs7UUFDdkUsSUFBSStGLGVBQWUsS0FBS04sUUFBUSxFQUFFO1VBQ2hDRyxrQkFBa0IsR0FBRzVGLEtBQUs7VUFDMUIsT0FBTyxJQUFJO1FBQ2I7UUFFQSxPQUFPLEtBQUs7TUFDZCxDQUFDLENBQUM7TUFFRixJQUFJLENBQUM2RixhQUFhLEVBQUU7UUFDbEIsTUFBTSxJQUFJaEQsS0FBSywwQkFBQWQsTUFBQSxDQUEwQnZILElBQUksZUFBQXVILE1BQUEsQ0FBWSxJQUFJLENBQUM1RCxHQUFHLDRFQUF5RSxDQUFDO01BQzdJO01BRUEsSUFBSSxDQUFDNUIsVUFBVSxDQUFDVyxtQkFBbUIsQ0FBQzFDLElBQUksRUFBRWlMLFFBQVEsQ0FBQztNQUNuREUsaUJBQWlCLENBQUNLLE1BQU0sQ0FBQ0osa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQ2pEOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUF6TyxHQUFBO0lBQUE1QixLQUFBLEVBR0EsU0FBQW1JLGNBQWNBLENBQUEsRUFBRztNQUFBLElBQUEzRSxLQUFBO01BQUEsSUFBQWtOLEtBQUEsWUFBQUEsTUFBQSxFQUNpRDtVQUEzRCxJQUFBbkosa0JBQUEsR0FBQUMsY0FBQSxDQUFBSixlQUFBLENBQUFELEVBQUE7WUFBT2xDLElBQUksR0FBQXNDLGtCQUFBO1lBQUV1SSxTQUFTLEdBQUF2SSxrQkFBQTtVQUN6QixJQUFJLENBQUMvRCxLQUFJLENBQUN3RCxVQUFVLEVBQUU7WUFBQTtjQUFBekgsQ0FBQTtZQUFBO1VBRXRCO1VBRUF1USxTQUFTLENBQUM3SCxPQUFPLENBQUMsVUFBQ2lJLFFBQVEsRUFBSztZQUM5QjFNLEtBQUksQ0FBQ3dELFVBQVUsQ0FBQ1csbUJBQW1CLENBQUMxQyxJQUFJLEVBQUVpTCxRQUFRLENBQUM7VUFDckQsQ0FBQyxDQUFDO1FBQ0osQ0FBQztRQUFBUyxJQUFBO01BUkQsU0FBQXhKLEVBQUEsTUFBQUMsZUFBQSxHQUFnQ3BJLE1BQU0sQ0FBQ3FJLE9BQU8sQ0FBQyxJQUFJLENBQUN5SSxTQUFTLENBQUMsRUFBQTNJLEVBQUEsR0FBQUMsZUFBQSxDQUFBekgsTUFBQSxFQUFBd0gsRUFBQTtRQUFBd0osSUFBQSxHQUFBRCxLQUFBO1FBQUEsSUFBQUMsSUFBQSxTQUFBQSxJQUFBLENBQUFwUixDQUFBO01BQUE7TUFVOUQsSUFBSSxDQUFDdVEsU0FBUyxHQUFHdkssK0NBQVc7SUFDOUI7O0lBRUE7QUFDRjtBQUNBO0VBRkU7SUFBQTNELEdBQUE7SUFBQTVCLEtBQUEsRUFHQSxTQUFBNEosZUFBZUEsQ0FBQSxFQUFHO01BQ2hCLElBQUksQ0FBQ3JCLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQ0ssR0FBRyxDQUFDLElBQUksQ0FBQ3RCLFlBQVksQ0FBQztNQUMvQyxJQUFJLENBQUNwRCxLQUFLLEdBQUcsSUFBSSxDQUFDcUUsUUFBUSxDQUFDckUsS0FBSztJQUNsQzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQXRDLEdBQUE7SUFBQTVCLEtBQUEsRUFLQSxTQUFBK0osV0FBV0EsQ0FBQ3RELElBQUksRUFBRTtNQUNoQkEsSUFBSSxDQUFDNEUsTUFBTSxHQUFHLElBQUk7TUFDbEIsSUFBSSxDQUFDeEcsUUFBUSxDQUFDc0gsSUFBSSxDQUFDMUYsSUFBSSxDQUFDO0lBQzFCOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUE3RSxHQUFBO0lBQUE1QixLQUFBLEVBTUEsU0FBQTRRLFlBQVlBLENBQUN6RyxPQUFPLEVBQUUwRyxPQUFPLEVBQUU7TUFDN0IsSUFBTTlCLE9BQU8sR0FBRyxJQUFJLENBQUNsSyxRQUFRLENBQUNrSyxPQUFPLENBQUM4QixPQUFPLENBQUM7TUFFOUMsSUFBSTlCLE9BQU8sSUFBSSxDQUFDLEVBQUU7UUFDaEI1RSxPQUFPLENBQUNrQixNQUFNLEdBQUcsSUFBSTtRQUNyQixJQUFJLENBQUN4RyxRQUFRLENBQUNrSyxPQUFPLENBQUMsQ0FBQzFELE1BQU0sR0FBRyxJQUFJO1FBQ3BDLElBQUksQ0FBQ3hHLFFBQVEsQ0FBQ2tLLE9BQU8sQ0FBQyxHQUFHNUUsT0FBTztNQUNsQztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7RUFKRTtJQUFBdkksR0FBQTtJQUFBNUIsS0FBQSxFQUtBLFNBQUFxSSxXQUFXQSxDQUFDNUIsSUFBSSxFQUFFO01BQ2hCLElBQU1zSSxPQUFPLEdBQUcsSUFBSSxDQUFDbEssUUFBUSxDQUFDa0ssT0FBTyxDQUFDdEksSUFBSSxDQUFDO01BRTNDLElBQUlzSSxPQUFPLElBQUksQ0FBQyxFQUFFO1FBQ2hCdEksSUFBSSxDQUFDNEUsTUFBTSxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDeEcsUUFBUSxDQUFDNEwsTUFBTSxDQUFDMUIsT0FBTyxFQUFFLENBQUMsQ0FBQztNQUNsQztJQUNGOztJQUVBO0FBQ0Y7QUFDQTtFQUZFO0lBQUFuTixHQUFBO0lBQUE1QixLQUFBLEVBR0EsU0FBQWlMLEtBQUtBLENBQUEsRUFBRztNQUNOLElBQUksQ0FBQ3BHLFFBQVEsQ0FBQ29ELE9BQU8sQ0FBQyxVQUFDeEIsSUFBSSxFQUFLO1FBQzlCQSxJQUFJLENBQUM0RSxNQUFNLEdBQUcsSUFBSTtNQUNwQixDQUFDLENBQUM7TUFFRixJQUFJLENBQUN4RyxRQUFRLEdBQUcsRUFBRTtJQUNwQjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQWpELEdBQUE7SUFBQTVCLEtBQUEsRUFLQSxTQUFBb0wsS0FBS0EsQ0FBQSxFQUFHO01BQ04sSUFBTTBGLE1BQU0sR0FBRyxJQUFJcEIsV0FBVyxDQUFDLElBQUksQ0FBQ3pLLElBQUksRUFBRSxJQUFJLENBQUMyRCxHQUFHLEVBQUE2RixhQUFBO1FBQ2hEN00sR0FBRyxFQUFFLElBQUksQ0FBQ0E7TUFBRyxHQUNWLElBQUksQ0FBQzBGLFlBQVksQ0FDckIsQ0FBQzs7TUFFRjtNQUNBd0osTUFBTSxDQUFDbEosUUFBUSxHQUFHLElBQUksQ0FBQ0EsUUFBUTtNQUMvQmtKLE1BQU0sQ0FBQ3hKLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVk7TUFDdkM7TUFDQXdKLE1BQU0sQ0FBQ3ZJLFFBQVEsR0FBRyxJQUFJLENBQUNBLFFBQVE7TUFDL0J1SSxNQUFNLENBQUM5SixVQUFVLEdBQUcsSUFBSSxDQUFDQSxVQUFVO01BQ25DOEosTUFBTSxDQUFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQ0EsU0FBUzs7TUFFakM7TUFDQWdCLE1BQU0sQ0FBQ25ILE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU07TUFDM0JtSCxNQUFNLENBQUNsTixPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPO01BQzdCa04sTUFBTSxDQUFDOUYsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYTtNQUN6Qzs7TUFFQTtNQUNBOEYsTUFBTSxDQUFDekYsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTTtNQUMzQnlGLE1BQU0sQ0FBQ2pNLFFBQVEsR0FBRyxJQUFJLENBQUNBLFFBQVE7TUFFL0IsT0FBT2lNLE1BQU07SUFDZjs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0VBSkU7SUFBQWxQLEdBQUE7SUFBQTVCLEtBQUEsRUFLQSxTQUFBc0wsUUFBUUEsQ0FBQ3lGLFVBQVUsRUFBRTtNQUNuQixJQUFJLENBQUNuUCxHQUFHLEdBQUdtUCxVQUFVLENBQUNuUCxHQUFHO01BQ3pCLElBQUksQ0FBQ3FELElBQUksR0FBRzhMLFVBQVUsQ0FBQzlMLElBQUk7TUFDM0IsSUFBSSxDQUFDMkQsR0FBRyxHQUFHbUksVUFBVSxDQUFDbkksR0FBRzs7TUFFekI7TUFDQSxJQUFJLENBQUNoQixRQUFRLEdBQUdtSixVQUFVLENBQUNuSixRQUFRO01BQ25DLElBQUksQ0FBQ04sWUFBWSxHQUFHeUosVUFBVSxDQUFDekosWUFBWTtNQUMzQztNQUNBLElBQUksQ0FBQ2lCLFFBQVEsR0FBR3dJLFVBQVUsQ0FBQ3hJLFFBQVE7TUFDbkMsSUFBSSxDQUFDdkIsVUFBVSxHQUFHK0osVUFBVSxDQUFDL0osVUFBVTtNQUN2QyxJQUFJLENBQUM4SSxTQUFTLEdBQUdpQixVQUFVLENBQUNqQixTQUFTOztNQUVyQztNQUNBLElBQUksQ0FBQ25HLE1BQU0sR0FBR29ILFVBQVUsQ0FBQ3BILE1BQU07TUFDL0IsSUFBSSxDQUFDL0YsT0FBTyxHQUFHbU4sVUFBVSxDQUFDbk4sT0FBTztNQUNqQyxJQUFJLENBQUNvSCxhQUFhLEdBQUcrRixVQUFVLENBQUMvRixhQUFhO01BQzdDOztNQUVBO01BQ0EsSUFBSSxDQUFDSyxNQUFNLEdBQUcwRixVQUFVLENBQUMxRixNQUFNO01BQy9CLElBQUksQ0FBQ3hHLFFBQVEsR0FBR2tNLFVBQVUsQ0FBQ2xNLFFBQVE7SUFDckM7RUFBQztBQUFBO0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUF0UmdDO0FBdVJoQyxTQUFTbU0sbUJBQW1CQSxDQUFDQyxRQUFRLEVBQUU7RUFDckMsSUFBTUMsUUFBUSxHQUFHLEVBQUU7RUFFbkIsT0FBT0QsUUFBUSxDQUFDckcsS0FBSyxDQUFDLFVBQUM3RixJQUFJLEVBQUs7SUFDOUIsSUFBSSxDQUFDQSxJQUFJLENBQUNOLFVBQVUsSUFBSSxDQUFDTSxJQUFJLENBQUNOLFVBQVUsQ0FBQzdDLEdBQUcsSUFBSXNQLFFBQVEsQ0FBQzlFLFFBQVEsQ0FBQ3JILElBQUksQ0FBQ04sVUFBVSxDQUFDN0MsR0FBRyxDQUFDLEVBQUU7TUFDdEYsT0FBTyxLQUFLO0lBQ2Q7SUFFQXNQLFFBQVEsQ0FBQy9FLElBQUksQ0FBQ3BILElBQUksQ0FBQ04sVUFBVSxDQUFDN0MsR0FBRyxDQUFDO0lBQ2xDLE9BQU8sSUFBSTtFQUNiLENBQUMsQ0FBQztBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTNkgsZ0JBQWdCQSxDQUFDSSxZQUFZLEVBQWlCO0VBQUEsSUFBZndCLE1BQU0sR0FBQWhLLFNBQUEsQ0FBQTFCLE1BQUEsUUFBQTBCLFNBQUEsUUFBQWdKLFNBQUEsR0FBQWhKLFNBQUEsTUFBRyxJQUFJO0VBQzFELElBQUF3SixLQUFBLEdBSUloQixZQUFZLGFBQVpBLFlBQVksY0FBWkEsWUFBWSxHQUFJLENBQUMsQ0FBQztJQUFBc0gsaUJBQUEsR0FBQXRHLEtBQUEsQ0FIcEJyRyxXQUFXO0lBQVhBLFdBQVcsR0FBQTJNLGlCQUFBLGNBQUd0SCxZQUFZLGFBQVpBLFlBQVksY0FBWkEsWUFBWSxHQUFJLEVBQUUsR0FBQXNILGlCQUFBO0lBQUFDLGdCQUFBLEdBQUF2RyxLQUFBLENBQ2hDcEcsVUFBVTtJQUFWQSxVQUFVLEdBQUEyTSxnQkFBQSxjQUFHLENBQUMsQ0FBQyxHQUFBQSxnQkFBQTtJQUFBQyxjQUFBLEdBQUF4RyxLQUFBLENBQ2ZoRyxRQUFRO0lBQVJBLFFBQVEsR0FBQXdNLGNBQUEsY0FBRyxFQUFFLEdBQUFBLGNBQUE7O0VBR2Y7RUFDQSxJQUFJNUssSUFBSTtFQUVSLElBQUksT0FBT2pDLFdBQVcsS0FBSyxVQUFVLEVBQUU7SUFDckNpQyxJQUFJLEdBQUcsSUFBSWlKLFdBQVcsQ0FBQyxXQUFXLEVBQUVsTCxXQUFXLEVBQUFpSyxhQUFBO01BQUk1SixRQUFRLEVBQVJBO0lBQVEsR0FBS0osVUFBVSxDQUFFLENBQUM7SUFDN0VJLFFBQVEsR0FBRyxFQUFFO0VBQ2YsQ0FBQyxNQUFNLElBQUk0SCxrQkFBQSxDQUFJZ0Qsc0NBQVEsRUFBRXJELFFBQVEsQ0FBQzVILFdBQVcsQ0FBQyxFQUFFO0lBQUU7SUFDaERpQyxJQUFJLEdBQUcsSUFBSWlKLFdBQVcsQ0FBQyxTQUFTLEVBQUVsTCxXQUFXLEVBQUVDLFVBQVUsQ0FBQztFQUM1RCxDQUFDLE1BQU0sSUFBSTFDLE9BQUEsQ0FBT3lDLFdBQVcsTUFBSyxRQUFRLEVBQUU7SUFDMUMsTUFBTSxJQUFJOEksS0FBSyxDQUFDLHdDQUF3QyxDQUFDO0VBQzNELENBQUMsTUFBTTtJQUNMN0csSUFBSSxHQUFHLElBQUlpSixXQUFXLENBQUMsTUFBTSxFQUFFbEwsV0FBVyxDQUFDO0VBQzdDO0VBRUEsSUFBSTZHLE1BQU0sRUFBRTtJQUNWQSxNQUFNLENBQUN0QixXQUFXLENBQUN0RCxJQUFJLENBQUM7RUFDMUI7RUFFQSxJQUFJLENBQUM1QixRQUFRLEVBQUU7SUFDYkEsUUFBUSxHQUFHLEVBQUU7RUFDZjtFQUVBQSxRQUFRLENBQUNvRCxPQUFPLENBQUMsVUFBQStCLFNBQVMsRUFBSTtJQUM1QixJQUFJLENBQUNBLFNBQVMsRUFBRTtNQUNkO0lBQ0Y7SUFFQSxJQUFJdUUsS0FBSyxDQUFDQyxPQUFPLENBQUN4RSxTQUFTLENBQUMsRUFBRTtNQUM1QixJQUFJLENBQUNnSCxtQkFBbUIsQ0FBQ2hILFNBQVMsQ0FBQyxFQUFFO1FBQ25DLE1BQU0sSUFBSXNELEtBQUssb0ZBQWtGLENBQUM7TUFDcEc7TUFFQXRELFNBQVMsQ0FBQy9CLE9BQU8sQ0FBQyxVQUFBcUosZ0JBQWdCLEVBQUk7UUFDcEM3SCxnQkFBZ0IsQ0FBQzZILGdCQUFnQixFQUFFN0ssSUFBSSxDQUFDO01BQzFDLENBQUMsQ0FBQztJQUNKLENBQUMsTUFBTTtNQUNMZ0QsZ0JBQWdCLENBQUNPLFNBQVMsRUFBRXZELElBQUksQ0FBQztJQUNuQztFQUNGLENBQUMsQ0FBQztFQUVGLE9BQU9BLElBQUk7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTTixlQUFlQSxDQUFDTSxJQUFJLEVBQUU4SyxRQUFRLEVBQUU7RUFDOUMsSUFBSSxDQUFDQSxRQUFRLEVBQUU7SUFDYixNQUFNLElBQUlqRSxLQUFLLENBQUMsbUNBQW1DLENBQUM7RUFDdEQ7RUFFQSxJQUFJcEQsV0FBVyxHQUFHekQsSUFBSTtFQUV0QixRQUFBK0ssWUFBQSxHQUFPdEgsV0FBVyxjQUFBc0gsWUFBQSxlQUFYQSxZQUFBLENBQWFuRyxNQUFNLEVBQUU7SUFBQSxJQUFBbUcsWUFBQSxFQUFBQyxxQkFBQTtJQUMxQixJQUFNQyxXQUFXLElBQUFELHFCQUFBLEdBQUd2SCxXQUFXLENBQUNtQixNQUFNLENBQUMvRCxZQUFZLGNBQUFtSyxxQkFBQSxjQUFBQSxxQkFBQSxHQUFJbE0sK0NBQVc7SUFFbEUsSUFBSTJFLFdBQVcsQ0FBQ21CLE1BQU0sQ0FBQ3BHLElBQUksS0FBSyxTQUFTLEVBQUU7TUFDekNpRixXQUFXLEdBQUdBLFdBQVcsQ0FBQ21CLE1BQU07TUFDaEM7SUFDRjtJQUVBLElBQUlrRyxRQUFRLENBQUMzSyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUk4SyxXQUFXLENBQUN2TyxFQUFFLEtBQUtvTyxRQUFRLENBQUN6SyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDeEUsT0FBUW9ELFdBQVcsQ0FBQ21CLE1BQU07SUFDNUIsQ0FBQyxNQUFNLElBQUlrRyxRQUFRLENBQUMzSyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUk4SyxXQUFXLFNBQU0sS0FBS0gsUUFBUSxDQUFDekssU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2xGLE9BQU9vRCxXQUFXLENBQUNtQixNQUFNO0lBQzNCLENBQUMsTUFBTSxJQUFJLDBDQUEwQyxDQUFDNEQsSUFBSSxDQUFDc0MsUUFBUSxDQUFDLEVBQUU7TUFDcEUsSUFBTXZSLEtBQUssR0FBR3VSLFFBQVEsQ0FBQ0ksT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQ0EsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7TUFFeEQsSUFBSXpILFdBQVcsQ0FBQ21CLE1BQU0sQ0FBQy9ELFlBQVksQ0FBQ3RILEtBQUssQ0FBQyxFQUFFO1FBQzFDLE9BQU9rSyxXQUFXLENBQUNtQixNQUFNO01BQzNCO0lBQ0YsQ0FBQyxNQUFNLElBQUluQixXQUFXLENBQUNtQixNQUFNLENBQUN6QyxHQUFHLEtBQUsySSxRQUFRLEVBQUU7TUFDOUMsT0FBT3JILFdBQVcsQ0FBQ21CLE1BQU07SUFDM0I7SUFFQW5CLFdBQVcsR0FBR0EsV0FBVyxDQUFDbUIsTUFBTTtFQUNsQztFQUVBLE9BQU8sSUFBSTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTc0Isb0JBQW9CQSxDQUFDOUMsWUFBWSxFQUFFO0VBQ2pELElBQU0rSCxRQUFRLEdBQUcsSUFBSWxDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDO0VBQzVDLElBQU0xRixTQUFTLEdBQUdQLGdCQUFnQixDQUFDSSxZQUFZLENBQUM7RUFFaEQsSUFBSUcsU0FBUyxFQUFFO0lBQ2I0SCxRQUFRLENBQUM3SCxXQUFXLENBQUNDLFNBQVMsQ0FBQztFQUNqQztFQUVBLE9BQU80SCxRQUFRO0FBQ2pCLEM7Ozs7OztVQ3JaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjhCO0FBQ047O0FBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0MsU0FBU0EsQ0FBQ0MsTUFBTSxFQUFFO0VBQ2hDLElBQUkvUCxPQUFBLENBQU8rUCxNQUFNLE1BQUssUUFBUSxFQUFFO0lBQzlCLE1BQU0sSUFBSXhFLEtBQUssQ0FBQyxvREFBb0QsQ0FBQztFQUN2RTtFQUVBeUUsTUFBTSxDQUFDQyxJQUFJLEdBQUcsSUFBSXBGLHlDQUFLLENBQUMsQ0FBQztFQUN6Qm1GLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDaEYsZUFBZSxDQUFDOEUsTUFBTSxDQUFDdk4sTUFBTSxDQUFDO0VBRTFDbUUsUUFBUSxDQUFDN0IsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtJQUNsRG1MLElBQUksQ0FBQzlFLEtBQUssQ0FBQzRFLE1BQU0sQ0FBQzNFLE9BQU8sQ0FBQztFQUM1QixDQUFDLENBQUM7QUFDSjtBQUVBMEUsU0FBUyxDQUFDO0VBQ1IxRSxPQUFPLEVBQUUsTUFBTTtFQUNmNUksTUFBTSxXQUFOQSxNQUFNQSxDQUFBLEVBQUc7SUFDUDtNQUFBQyxXQUFBLEVBQUFuQiw0Q0FBQTtNQUFBb0IsVUFBQTtNQUFBSSxRQUFBO0lBQUE7RUFDRjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL2V4YW1wbGUvaW1nL2xvZ28ucG5nIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3JlY29uY2lsZXIuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9zcGFyay5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvdmlydHVhbC1ub2RlLmpzIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmZTJhMGU0ZGNhY2VkNDc1NDMzOWQ2OTAzZmEzNGFkYi5wbmdcIjsiLCJpbXBvcnQgaW1nIGZyb20gJ0BwdWJsaWMvaW1nL2xvZ28ucG5nJztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiQC9jb21wb25lbnRcIjtcclxuXHJcbmNvbnN0IGxpc3RJdGVtcyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiAnSFRNTCcgfSxcclxuICB7IGlkOiAyLCBuYW1lOiAnQ1NTJyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdKYXZhc2NyaXB0JyB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6ICdOb2RlLmpzJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIC8vIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAvLyAgIGlkOiAxLFxyXG4gICAgLy8gfTtcclxuXHJcbiAgICAvLyB0aGlzLmlucHV0UmVmID0gY3JlYXRlUmVmKG51bGwpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVRleHRDaGFuZ2UgPSB0aGlzLmhhbmRsZVRleHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICAvLyBpZiAodGhpcy5pbnB1dFJlZi5jdXJyZW50KSB7XHJcbiAgICAvLyAgIHRoaXMuaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5wdXRSZWYpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaWQ6IHRoaXMuc3RhdGUuaWQgKyAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQoZXYpIHtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUZXh0Q2hhbmdlKGV2KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJ0b3AtaGVhZGVyXCIgY2xhc3M9e2BjbGFzcy0xIGNsYXNzLTJgfT5cclxuICAgICAgICAgIDxuYXY+TmF2aWdhdGlvbjwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwPlN0YXRlOiB7dGhpcy5zdGF0ZS5pZH08L3A+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAge2xpc3RJdGVtcy5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25JbnB1dD17dGhpcy5oYW5kbGVUZXh0Q2hhbmdlfSAvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+Q2xpY2s8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtFbXB0eU9iamVjdH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYSBjb21wb25lbnQgd2l0aCBwcm9wcyBhbmQgZW1wdHkgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gc3RhdGVcclxuICAgKi9cclxuICBzZXRTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgLy8gVE9ETzogY2FsbCBob29rIG9uU3RhdGVDaGFuZ2VkXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW5kZXJzIGNvbXBvbmVudCBhcyBKU1ggc3RydWN0dXJlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1NwYXJrSlMuUmVuZGVyUmVzdWx0fVxyXG4gICAqL1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyBtb3VudGVkIGludG8gRE9NLlxyXG4gICAqL1xyXG4gIGFzeW5jIG1vdW50ZWQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBhIGhvb2sgaXMgdHJpZ2dlcmVkIHdoZW4gYXBwbGljYXRpb24gaXMgcmVzdW1lZCBpbnRvIGNvbXBvbmVudC5cclxuICAgKi9cclxuICBhc3luYyByZXN1bWVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCB3aGVuIGNvbXBvbmVudCBpcyByZS1yZW5kZXJlZC5cclxuICAgKi9cclxuICBhc3luYyB1cGRhdGVkKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogQSBob29rIGlzIHRyaWdnZXJlZCBiZWZvcmUgY29tcG9uZW50IGlzIGRlc3Ryb3llZC5cclxuICAgKi9cclxuICBhc3luYyBkZXN0cm95ZWQoKSB7fVxyXG59IiwiaW1wb3J0IHtmaW5kQ2xvc2VzdE5vZGV9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5pbXBvcnQge2RpZmZQcm9wcywgZmluZENsb3Nlc3RET01Ob2RlLCByZXNvbHZlQ2xhc3NOYW1lLCByZXNvbHZlU3R5bGV9IGZyb20gXCJAL3V0aWxzXCI7XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWVcclxuICogQHBhcmFtIHthbnl9IHByb3BWYWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlQWRkaW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIocHJvcE5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCksIHByb3BWYWx1ZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5vZGUuZWxlbWVudFJlZi5zZXRBdHRyaWJ1dGUocHJvcE5hbWUsIHByb3BWYWx1ZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5mdW5jdGlvbiByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSkge1xyXG4gIGZvciAobGV0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhub2RlLnBlbmRpbmdQcm9wcykpIHtcclxuICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIGtleSwgdmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lXHJcbiAqIEBwYXJhbSB7YW55fSBwcm9wVmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBjb25zdCBldmVudE5hbWUgPSBwcm9wTmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcclxuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG5vZGUub2xkUHJvcHNbZXZlbnROYW1lXSk7XHJcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdjbGFzcycpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVDbGFzc05hbWUocHJvcFZhbHVlKTtcclxuICB9IGVsc2UgaWYgKHByb3BOYW1lID09PSAnc3R5bGUnKSB7XHJcbiAgICBwcm9wVmFsdWUgPSByZXNvbHZlU3R5bGUocHJvcFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGlmICghcHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcFZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSByZW5kZXJOb2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZVxyXG4gKiBAcGFyYW0ge2FueX0gcHJvcFZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVSZW1vdmluZ1Byb3BzKHJlbmRlck5vZGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpIHtcclxuICBpZiAocHJvcE5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xyXG4gICAgcmVuZGVyTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKHByb3BOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpLCBwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZW5kZXJOb2RlLmVsZW1lbnRSZWYucmVtb3ZlQXR0cmlidXRlKHByb3BOYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVbm1vdW50IHZpcnR1YWwgbm9kZSBhbmQgaXQncyBjaGlsZHJlbi5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgSFRNTCBlbGVtZW50IGl0IHdpbGwgcmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMgYW5kIHRoZW4gcmVtb3ZlIEhUTUwgZWxlbWVudC5cclxuICogSWYgdmlydHVhbCBub2RlIHJlcHJlc2VudHMgYSBjb21wb25lbnQgaW5zdGFuY2UgaXQgd2lsbCB0cmlnZ2VyIGhvb2sgZm9yIGRlc3Ryb3lpbmcgY29tcG9uZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudE5vZGUobm9kZSkge1xyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIHVubW91bnROb2RlKGNoaWxkKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKG5vZGUuZWxlbWVudFJlZikge1xyXG4gICAgbm9kZS5jbGVhbkxpc3RlbmVycygpO1xyXG4gICAgbm9kZS5lbGVtZW50UmVmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZS5lbGVtZW50UmVmKTtcclxuICB9XHJcblxyXG4gIGlmIChub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIG5vZGUuaW5zdGFuY2UuZGVzdHJveWVkKCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBIVE1MIGVsZW1lbnQgb3IgdGV4dCBub2RlIGluIERPTSB3aXRoIGl0cyBhcmd1bWVudHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChub2RlLCBwb3NpdGlvbikge1xyXG4gIGlmIChub2RlLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShub2RlLnRhZyk7XHJcbiAgfSBlbHNlIGlmIChub2RlLmlzVHlwZSgnRWxlbWVudCcpKSB7XHJcbiAgICBjb25zdCBjbG9zZXN0V2l0aE5TID0gZmluZENsb3Nlc3ROb2RlKG5vZGUsICdbeG1sbnNdJyk7XHJcbiAgICBjb25zdCB4bWxucyA9IG5vZGUucGVuZGluZ1Byb3BzLnhtbG5zID8/IGNsb3Nlc3RXaXRoTlM/LnBlbmRpbmdQcm9wcy54bWxucyA/PyAnJztcclxuXHJcbiAgICBpZiAoeG1sbnMpIHtcclxuICAgICAgbm9kZS5lbGVtZW50UmVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHhtbG5zLCBub2RlLnRhZyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUudGFnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMobm9kZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJlbnRFbCA9IGZpbmRDbG9zZXN0RE9NTm9kZShub2RlKTtcclxuICBjb25zdCBjaGlsZEF0ID0gcGFyZW50RWwuY2hpbGRyZW5bcG9zaXRpb25dO1xyXG5cclxuICBwYXJlbnRFbC5pbnNlcnRCZWZvcmUobm9kZS5lbGVtZW50UmVmLCBjaGlsZEF0KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVFbGVtZW50KG5vZGUpIHtcclxuICBjb25zdCBkaWZmZWRQcm9wcyA9IGRpZmZQcm9wcyhub2RlLm9sZFByb3BzLCBub2RlLnBlbmRpbmdQcm9wcyk7XHJcblxyXG4gIGRpZmZlZFByb3BzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAgIGlmIChwcm9wLnR5cGUgPT09ICdSZW1vdmUnICkge1xyXG4gICAgICBoYW5kbGVSZW1vdmluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ0FkZCcgKSB7XHJcbiAgICAgIGhhbmRsZUFkZGluZ1Byb3BzKG5vZGUsIHByb3AubmFtZSwgcHJvcC52YWx1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHByb3AudHlwZSA9PT0gJ1VwZGF0ZScgKSB7XHJcbiAgICAgIGhhbmRsZVVwZGF0aW5nUHJvcHMobm9kZSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlKTtcclxuICAgIH1cclxuICB9KTtcclxufSIsImltcG9ydCB7RW1wdHlPYmplY3QsIGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbn0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHtidWlsZFZpcnR1YWxUcmVlfSBmcm9tIFwiQC92aXJ0dWFsLW5vZGVcIjtcclxuXHJcbi8qKlxyXG4gKiBCdWlsZCBhbmQgbW91bnQgd2hvbGUgc3VidHJlZSBvZiB2aXJ0dWFsIG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmZ1bmN0aW9uIG1vdW50VmlydHVhbFN1YnRyZWUobm9kZSkge1xyXG4gIG5vZGUuZWZmZWN0ID0gJ1BsYWNlbWVudCc7XHJcblxyXG4gIGlmIChub2RlLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIG5vZGUuY3JlYXRlQ29tcG9uZW50KCk7XHJcblxyXG4gICAgbGV0IHJlbmRlclJlc3VsdCA9IG5vZGUuaW5zdGFuY2UucmVuZGVyKCk7XHJcbiAgICByZW5kZXJSZXN1bHQgPSBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KTtcclxuICAgIGxldCBzdWJ0cmVlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpXHJcblxyXG4gICAgaWYgKHN1YnRyZWUpIHtcclxuICAgICAgbm9kZS5hcHBlbmRDaGlsZChzdWJ0cmVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XHJcbiAgICBjaGlsZE5vZGUuZWZmZWN0ID0gJ1BsYWNlbWVudCc7XHJcbiAgICBtb3VudFZpcnR1YWxTdWJ0cmVlKGNoaWxkTm9kZSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb3B5IHJlZmVyZW5jZXMgc3VjaCBlbGVtZW50IHJlZmVyZW5jZSwgcHJvcHMgb3IgY29tcG9uZW50IGluc3RhbmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVjdXJzaXZlXHJcbiAqL1xyXG5mdW5jdGlvbiBjb3B5Tm9kZVJlZmVyZW5jZXMoY3VycmVudE5vZGUsIG5ld05vZGUsIHJlY3Vyc2l2ZSA9IGZhbHNlKSB7XHJcbiAgaWYgKGN1cnJlbnROb2RlLnRhZyA9PT0gbmV3Tm9kZS50YWcpIHtcclxuICAgIG5ld05vZGUub2xkUHJvcHMgPSBuZXdOb2RlLm9sZFByb3BzID8/IEVtcHR5T2JqZWN0O1xyXG4gICAgbmV3Tm9kZS5lbGVtZW50UmVmID0gbmV3Tm9kZS5lbGVtZW50UmVmID8/IG51bGw7XHJcblxyXG4gICAgaWYgKG5ld05vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgICBuZXdOb2RlLmluc3RhbmNlID0gY3VycmVudE5vZGUuaW5zdGFuY2U7XHJcbiAgICAgIG5ld05vZGUuaW5zdGFuY2UucHJvcHMgPSBuZXdOb2RlLnBlbmRpbmdQcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgICAgLy8gVE9ETzogY29weSBzdGF0ZSBhbmQgaW5kaWNhdG9yIGlmIHN0YXRlIGNoYW5nZWRcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyZWN1cnNpdmUpIHtcclxuICAgIG5ld05vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb3B5Tm9kZVJlZmVyZW5jZXMoY3VycmVudE5vZGUuY2hpbGRyZW5baW5kZXhdLCBjaGlsZE5vZGUsIHJlY3Vyc2l2ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgcGVuZGluZyBwcm9wcyBhcmUgZGlmZmVyZW50IGZyb20gb2xkIHByb3BzLlxyXG4gKiBJdCdzIHNoYWxsb3cgY29tcGFyaXNvbiBzbyBvYmplY3QtbGlrZSBwcm9wcyBhcmUgY29tcGFyZWQgdGhyb3VnaCByZWZlcmVuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5Qcm9wc30gb2xkUHJvcHNcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBwZW5kaW5nUHJvcHNcclxuICovXHJcbmZ1bmN0aW9uIGNvbXBhcmVQcm9wcyhvbGRQcm9wcywgcGVuZGluZ1Byb3BzKSB7XHJcbiAgaWYgKHR5cGVvZiBvbGRQcm9wcyAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHBlbmRpbmdQcm9wcyAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChPYmplY3Qua2V5cyhvbGRQcm9wcykubGVuZ3RoICE9PSBPYmplY3Qua2V5cyhwZW5kaW5nUHJvcHMpLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHBlbmRpbmdQcm9wcykuZXZlcnkoKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiB2YWx1ZSA9PT0gb2xkUHJvcHNba2V5XTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB2aXJ0dWFsIG5vZGUgc2hvdWxkIGJlIHVwZGF0ZWQuXHJcbiAqIFZpcnR1YWwgbm9kZSBzaG91bGQgdXBkYXRlIGlmIG5vZGUncyBwcm9wcyBhcmUgY2hhbmdlZC5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIHNob3VsZFVwZGF0ZU5vZGUobm9kZSkge1xyXG4gIHJldHVybiAhY29tcGFyZVByb3BzKG5vZGUub2xkUHJvcHMsIG5vZGUucGVuZGluZ1Byb3BzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVwZGF0ZXMgdmlydHVhbCBub2RlIGFuZCBpZiBpdCBpcyBjb21wb25lbnQgdGhlbiB0cnkgdG8gZ2V0IG5ldyByZW5kZXIgcmVzdWx0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5mdW5jdGlvbiB1cGRhdGVOb2RlKG5vZGUpIHtcclxuICBub2RlLmVmZmVjdCA9ICdVcGRhdGUnO1xyXG4gIG5vZGUucGVuZGluZ1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gIGlmICghbm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgcmVuZGVyUmVzdWx0ID0gbm9kZS5pbnN0YW5jZS5yZW5kZXIoKTtcclxuICByZW5kZXJSZXN1bHQgPSBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KTtcclxuICBjb25zdCBzdWJ0cmVlID0gYnVpbGRWaXJ0dWFsVHJlZShyZW5kZXJSZXN1bHQpXHJcblxyXG4gIGlmIChzdWJ0cmVlKSB7XHJcbiAgICBub2RlLmVtcHR5KCk7XHJcbiAgICBub2RlLmFwcGVuZENoaWxkKHN1YnRyZWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldXNlIGN1cnJlbnQgdmlydHVhbCBub2RlIHdpdGggY2hpbGRyZW4gb2YgbmV3IHZpcnR1YWwgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gcmV1c2VOb2RlKGN1cnJlbnROb2RlLCBuZXdOb2RlKSB7XHJcbiAgY29uc3QgY2xvbmVkQ3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5jbG9uZSgpO1xyXG5cclxuICBpZiAobmV3Tm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICBsZXQgcmVuZGVyUmVzdWx0ID0gbmV3Tm9kZS5pbnN0YW5jZS5yZW5kZXIoKTtcclxuICAgIHJlbmRlclJlc3VsdCA9IGZsYXR0ZW5SZW5kZXJSZXN1bHRDaGlsZHJlbihyZW5kZXJSZXN1bHQpO1xyXG4gICAgY29uc3Qgc3VidHJlZSA9IGJ1aWxkVmlydHVhbFRyZWUocmVuZGVyUmVzdWx0KVxyXG5cclxuICAgIGlmIChzdWJ0cmVlKSB7XHJcbiAgICAgIG5ld05vZGUuZW1wdHkoKTtcclxuICAgICAgbmV3Tm9kZS5hcHBlbmRDaGlsZChzdWJ0cmVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb25lZEN1cnJlbnROb2RlLnBhcmVudCA9IG5ld05vZGUucGFyZW50O1xyXG4gIGNsb25lZEN1cnJlbnROb2RlLmNoaWxkcmVuID0gbmV3Tm9kZS5jaGlsZHJlbjtcclxuXHJcbiAgbmV3Tm9kZS5jb3B5RnJvbShjbG9uZWRDdXJyZW50Tm9kZSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyBhIHZpcnR1YWwgbm9kZSBiYXNlZCBvbiBpdCdzIGRlZmluZWQga2V5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICovXHJcbmZ1bmN0aW9uIGZpbmROb2RlV2l0aEtleShub2RlLCBrZXkpIHtcclxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcclxuICAgIGlmIChjaGlsZC5rZXkgPT09IGtleSkge1xyXG4gICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEZpbmRzIGEgbWF0Y2hpbmcgY2hpbGQgaW4gY3VycmVudCBub2RlIGJhc2VkIG9uIHBvc2l0aW9uIG9yIGtleS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Q2hpbGROb2RlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxyXG4gKi9cclxuZnVuY3Rpb24gZmluZE1hdGNoaW5nQ2hpbGROb2RlKGN1cnJlbnROb2RlLCBuZXdDaGlsZE5vZGUsIHBvc2l0aW9uKSB7XHJcbiAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZX0gKi9cclxuICBsZXQgZm91bmROb2RlID0gbnVsbFxyXG5cclxuICBpZiAoIWN1cnJlbnROb2RlKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlmIChuZXdDaGlsZE5vZGUua2V5KSB7XHJcbiAgICBmb3VuZE5vZGUgPSBmaW5kTm9kZVdpdGhLZXkoY3VycmVudE5vZGUsIG5ld0NoaWxkTm9kZS5rZXkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZvdW5kTm9kZSkge1xyXG4gICAgcmV0dXJuIGZvdW5kTm9kZTtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50Tm9kZS5jaGlsZHJlbi5sZW5ndGggPD0gcG9zaXRpb24pIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGN1cnJlbnROb2RlLmNoaWxkcmVuW3Bvc2l0aW9uXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBhcmVzIG5vZGVzIGF0IHRoZSBzYW1lIHBvc2l0aW9uIGluIHR3byBkaWZmZXJlbnQgdHJlZXMgYW5kIG1hcmtzIGVmZmVjdHNcclxuICogdGhhdCBuZWVkcyB0byBiZSBsYXRlciBwcm9jZXNzZWQuXHJcbiAqXHJcbiAqIFBvc3NpYmxlIGVmZmVjdHM6XHJcbiAqIC0gUGxhY2VtZW50IChtYXJrZWQgZm9yIHBsYWNpbmcgYXMgbmV3IERPTSBlbGVtZW50KVxyXG4gKiAtIFVwZGF0ZSAobWFya2VkIGZvciB1cGRhdGluZyBwcm9wcyBvZiBET00gZWxlbWVudClcclxuICogLSBEZWxldGlvbiAobWFya2VkIGZvciByZW1vdmluZyBET00gZWxlbWVudClcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlY29uY2lsZShjdXJyZW50Tm9kZSwgbmV3Tm9kZSkge1xyXG4gIGlmIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS50YWcgIT09IG5ld05vZGUudGFnKSB7XHJcbiAgICBjdXJyZW50Tm9kZS5lZmZlY3QgPSAnRGVsZXRpb24nO1xyXG4gICAgbW91bnRWaXJ0dWFsU3VidHJlZShuZXdOb2RlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmICghY3VycmVudE5vZGUpIHtcclxuICAgIG1vdW50VmlydHVhbFN1YnRyZWUobmV3Tm9kZSk7XHJcbiAgICByZXR1cm47XHJcbiAgfSBlbHNlIGlmICghbmV3Tm9kZS5pc1R5cGUoJ1Jvb3QnKSkge1xyXG4gICAgY29weU5vZGVSZWZlcmVuY2VzKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuXHJcbiAgICBpZiAoc2hvdWxkVXBkYXRlTm9kZShuZXdOb2RlKSkge1xyXG4gICAgICB1cGRhdGVOb2RlKG5ld05vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV1c2VOb2RlKGN1cnJlbnROb2RlLCBuZXdOb2RlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2Nlc3NlZENoaWxkcmVuID0gW107XHJcbiAgbmV3Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBtYXRjaGluZ0NoaWxkID0gZmluZE1hdGNoaW5nQ2hpbGROb2RlKGN1cnJlbnROb2RlLCBjaGlsZE5vZGUsIGluZGV4KTtcclxuXHJcbiAgICByZWNvbmNpbGUobWF0Y2hpbmdDaGlsZCwgY2hpbGROb2RlKTtcclxuICAgIHByb2Nlc3NlZENoaWxkcmVuLnB1c2goY2hpbGROb2RlKTtcclxuICB9KTtcclxuXHJcbiAgY3VycmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKCFwcm9jZXNzZWRDaGlsZHJlbi5pbmNsdWRlcyhjaGlsZE5vZGUpKSB7XHJcbiAgICAgIGNoaWxkTm9kZS5lZmZlY3QgPSAnRGVsZXRpb24nO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhdmVyc2UgdGhyb3VnaCBhbGwgdmlydHVhbCBub2RlcyBpbiB2aXJ0dWFsIHRyZWUgYW5kIHJlc29sdmUgZWZmZWN0cyB0aGF0IG5lZWRzIHRvIGJlIHByb2Nlc3NlZC5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cclxuICogQHJldHVybnMge1NwYXJrSlMuRWZmZWN0W119XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMobm9kZSwgcG9zaXRpb24gPSAwKSB7XHJcbiAgLyoqIEB0eXBlIHtTcGFya0pTLkVmZmVjdFtdfSAqL1xyXG4gIGxldCBlZmZlY3RzID0gW107XHJcblxyXG4gIGlmICghbm9kZSkge1xyXG4gICAgcmV0dXJuIGVmZmVjdHM7XHJcbiAgfVxyXG5cclxuICBpZiAobm9kZS5lZmZlY3QgIT09ICcnKSB7XHJcbiAgICBlZmZlY3RzLnB1c2goe1xyXG4gICAgICB0eXBlOiBub2RlLmVmZmVjdCxcclxuICAgICAgcGFyZW50OiBub2RlLnBhcmVudCxcclxuICAgICAgbm9kZVJlZjogbm9kZSxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICB9KTtcclxuICAgIG5vZGUuZWZmZWN0ID0gJyc7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xyXG4gICAgZWZmZWN0cyA9IFtcclxuICAgICAgLi4uZWZmZWN0cyxcclxuICAgICAgLi4ucmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMoY2hpbGQsIGluZGV4KSxcclxuICAgIF07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlZmZlY3RzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xlYW5zIGFsbCBpbmRpY2F0b3JzIGFuZCBlZmZlY3RzIGZyb20gdmlydHVhbCB0cnVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5Ob2Rlcyhub2RlKSB7XHJcbiAgbm9kZS5lZmZlY3QgPSAnJztcclxuICAvLyBUT0RPOiBjbGVhciBpbmRpY2F0b3IgaWYgc3RhdGUgY2hhbmdlZFxyXG5cclxuICBpZiAoIWNvbXBhcmVQcm9wcyhub2RlLm9sZFByb3BzLCBub2RlLnBlbmRpbmdQcm9wcykpIHtcclxuICAgIG5vZGUub2xkUHJvcHMgPSBub2RlLnBlbmRpbmdQcm9wcztcclxuICB9XHJcblxyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIGNsZWFuTm9kZXMoY2hpbGQpO1xyXG4gIH0pO1xyXG59IiwiaW1wb3J0IHtidWlsZFZpcnR1YWxUcmVlUm9vdH0gZnJvbSBcIkAvdmlydHVhbC1ub2RlXCI7XHJcbmltcG9ydCB7Y2xlYW5Ob2RlcywgcmVjb25jaWxlLCByZXNvbHZlRWZmZWN0c0Zyb21Ob2Rlc30gZnJvbSBcIkAvcmVjb25jaWxlclwiO1xyXG5pbXBvcnQge2NyZWF0ZUVsZW1lbnQsIHVubW91bnROb2RlLCB1cGRhdGVFbGVtZW50fSBmcm9tIFwiQC9kb21cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGFyayB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fSAqL1xyXG4gICAgdGhpcy5fcm9vdEVsID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5SZW5kZXJDYWxsYmFja30gKi9cclxuICAgIHRoaXMuX3Jvb3RGdW5jID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV9ICovXHJcbiAgICB0aGlzLl92aXJ0dWFsVHJlZSA9IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm4gSlNYIHN0cnVjdHVyZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KCkgPT4gU3BhcmtKUy5SZW5kZXJSZXN1bHR9IHJvb3RGblxyXG4gICAqL1xyXG4gIHNldFJvb3RGdW5jdGlvbihyb290Rm4pIHtcclxuICAgIHRoaXMuX3Jvb3RGdW5jID0gcm9vdEZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW91bnRzIGFwcGxpY2F0aW9uIHRvIEhUTUwgZWxlbWVudCBhbmQgdHJpZ2dlciByZW5kZXIuXHJcbiAgICogSXQgdGhyb3dzIGVycm9yIGlmIHJvb3QgZWxlbWVudCBpc24ndCBmb3VuZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR8c3RyaW5nfSBtb3VudEVsXHJcbiAgICovXHJcbiAgbW91bnQobW91bnRFbCkge1xyXG4gICAgaWYgKHR5cGVvZiBtb3VudEVsID09PSAnc3RyaW5nJykge1xyXG4gICAgICB0aGlzLl9yb290RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vdW50RWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fcm9vdEVsID0gbW91bnRFbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoISh0aGlzLl9yb290RWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIHJvb3QgZWxlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Jvb3RFbCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGEgcm9vdCBlbGVtZW50Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyUmVzdWx0ID0gdGhpcy5fcm9vdEZ1bmMoKTtcclxuICAgIGNvbnN0IG5ld1ZpcnR1YWxUcmVlID0gYnVpbGRWaXJ0dWFsVHJlZVJvb3QocmVuZGVyUmVzdWx0KTtcclxuXHJcbiAgICByZWNvbmNpbGUodGhpcy5fdmlydHVhbFRyZWUsIG5ld1ZpcnR1YWxUcmVlKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGlvbnMgPSByZXNvbHZlRWZmZWN0c0Zyb21Ob2Rlcyh0aGlzLl92aXJ0dWFsVHJlZSk7XHJcbiAgICBjb25zdCBuZXdDaGFuZ2VzID0gcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMobmV3VmlydHVhbFRyZWUpO1xyXG5cclxuICAgIGRlbGV0aW9ucy5mb3JFYWNoKChlZmZlY3QpID0+IHtcclxuICAgICAgaWYgKGVmZmVjdC50eXBlID09PSAnRGVsZXRpb24nKSB7XHJcbiAgICAgICAgdW5tb3VudE5vZGUoZWZmZWN0Lm5vZGVSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl92aXJ0dWFsVHJlZSA9IG5ld1ZpcnR1YWxUcmVlO1xyXG4gICAgdGhpcy5fdmlydHVhbFRyZWUuZWxlbWVudFJlZiA9IHRoaXMuX3Jvb3RFbDtcclxuXHJcbiAgICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlW119ICovXHJcbiAgICBjb25zdCBtb3VudGVkQ29tcG9uZW50Tm9kZXMgPSBbXTtcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGVbXX0gKi9cclxuICAgIGNvbnN0IHVwZGF0ZWRDb21wb25lbnROb2RlcyA9IFtdO1xyXG4gICAgY29uc29sZS5sb2cobmV3Q2hhbmdlcyk7XHJcbiAgICBuZXdDaGFuZ2VzLmZvckVhY2goKGVmZmVjdCkgPT4ge1xyXG4gICAgICBpZiAoZWZmZWN0LnR5cGUgPT09ICdQbGFjZW1lbnQnKSB7XHJcbiAgICAgICAgaGFuZGxlUGxhY2VtZW50KGVmZmVjdCwgbW91bnRlZENvbXBvbmVudE5vZGVzKTtcclxuICAgICAgfSBlbHNlIGlmIChlZmZlY3QudHlwZSA9PT0gJ1VwZGF0ZScpIHtcclxuICAgICAgICBoYW5kbGVVcGRhdGUoZWZmZWN0LCB1cGRhdGVkQ29tcG9uZW50Tm9kZXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjbGVhbk5vZGVzKHRoaXMuX3ZpcnR1YWxUcmVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDb21wb25lbnR9IGNvbXBvbmVudFxyXG4gICAqL1xyXG4gIG9uU3RhdGVDaGFuZ2VkKGNvbXBvbmVudCkge1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgY29tcG9uZW50IG5vZGVzIGFyZSByZWFkeSB0byB0cmlnZ2VyIGhvb2tzIGZvciBtb3VudGluZyBvciB1cGRhdGluZy5cclxuICogV2hpY2ggaG9vayB0byB0cmlnZ2VyIGRlcGVuZHMgb24gZ2l2ZW4gYWN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlW119IGNvbXBvbmVudE5vZGVzXHJcbiAqIEBwYXJhbSB7J21vdW50J3wndXBkYXRlJ31hY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnROb2Rlcyhjb21wb25lbnROb2RlcywgYWN0aW9uID0gJ21vdW50Jykge1xyXG4gIGlmICghWydtb3VudCcsICd1cGRhdGUnXS5pbmNsdWRlcyhhY3Rpb24pKSB7XHJcbiAgICBhY3Rpb24gPSAnbW91bnQnO1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKGNvbXBvbmVudE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChhY3Rpb24gPT09ICdtb3VudCcgJiYgIWNvbXBvbmVudE5vZGVzWzBdLmFsbENoaWxkcmVuTW91bnRlZCgpKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd1cGRhdGUnICYmICFjb21wb25lbnROb2Rlc1swXS5hbGxDaGlsZHJlblVwZGF0ZWQoKSkge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uID09PSAnbW91bnQnKSB7XHJcbiAgICAgIGNvbXBvbmVudE5vZGVzWzBdLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICBjb21wb25lbnROb2Rlc1swXS5pbnN0YW5jZS5tb3VudGVkKCk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3VwZGF0ZScpIHtcclxuICAgICAgY29tcG9uZW50Tm9kZXNbMF0uaW5zdGFuY2UudXBkYXRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudE5vZGVzLnNoaWZ0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBlZmZlY3QgZm9yIHBsYWNpbmcgYSBuZXcgSFRNTCBlbGVtZW50IG9yIHRleHQgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLkVmZmVjdH0gZWZmZWN0XHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGVbXX0gY29tcG9uZW50Tm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVBsYWNlbWVudChlZmZlY3QsIGNvbXBvbmVudE5vZGVzKSB7XHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIGNvbXBvbmVudE5vZGVzLnVuc2hpZnQoZWZmZWN0Lm5vZGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnRWxlbWVudCcpIHx8IGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICBjcmVhdGVFbGVtZW50KGVmZmVjdC5ub2RlUmVmLCBlZmZlY3QucG9zaXRpb24pO1xyXG4gICAgLy8gVE9ETzogYXNzaWduIHJlZiBmcm9tIGVsZW1lbnQgcmVmXHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQ29tcG9uZW50Tm9kZXMoY29tcG9uZW50Tm9kZXMsICdtb3VudCcpO1xyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBlZmZlY3QgZm9yIHVwZGF0aW5nIGV4aXN0aW5nIEhUTUwgZWxlbWVudC5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLkVmZmVjdH0gZWZmZWN0XHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGVbXX0gY29tcG9uZW50Tm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShlZmZlY3QsIGNvbXBvbmVudE5vZGVzKSB7XHJcbiAgZWZmZWN0Lm5vZGVSZWYucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xyXG5cclxuICBpZiAoZWZmZWN0Lm5vZGVSZWYuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgY29tcG9uZW50Tm9kZXMudW5zaGlmdChlZmZlY3Qubm9kZVJlZik7XHJcbiAgfVxyXG5cclxuICBpZiAoZWZmZWN0Lm5vZGVSZWYuaXNUeXBlKCdFbGVtZW50JykpIHtcclxuICAgIHVwZGF0ZUVsZW1lbnQoZWZmZWN0Lm5vZGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0NvbXBvbmVudE5vZGVzKGNvbXBvbmVudE5vZGVzLCAndXBkYXRlJyk7XHJcbn0iLCJleHBvcnQgY29uc3QgRW1wdHlPYmplY3QgPSB7fTtcclxuXHJcbi8qKlxyXG4gKiBGbGF0dGVuIGNoaWxkcmVuIG9mIHJlbmRlciByZXN1bHQgaWYgYW55IG9mIHRoZW0gaXMgdHlwZSBvZiBhcnJheS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlJlbmRlclJlc3VsdH0gcmVuZGVyUmVzdWx0XHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLlJlbmRlclJlc3VsdH1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KSB7XHJcbiAgaWYgKHR5cGVvZiByZW5kZXJSZXN1bHQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gcmVuZGVyUmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgLyoqIEB0eXBlIHtSZW5kZXJSZXN1bHRbXX0gKi9cclxuICBsZXQgY2hpbGRyZW4gPSBbXTtcclxuICByZW5kZXJSZXN1bHQuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XHJcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRyZW4gPSBbXHJcbiAgICAgIC4uLmNoaWxkcmVuLFxyXG4gICAgICAuLi5jaGlsZCxcclxuICAgIF07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5yZW5kZXJSZXN1bHQsXHJcbiAgICBjaGlsZHJlbixcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlQ2xhc3NOYW1lKHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGNsYXNzVG9rZW5zID0gIUFycmF5LmlzQXJyYXkodmFsdWUpID8gT2JqZWN0LmtleXModmFsdWUpLmZpbHRlcigoY2xhc3NOYW1lKSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWVbY2xhc3NOYW1lXTtcclxuICB9KSA6IHZhbHVlO1xyXG5cclxuICBjbGFzc1Rva2VucyA9IGNsYXNzVG9rZW5zLmZpbHRlcigoY2xhc3NOYW1lLCBpbmRleCwgdG9rZW5zKSA9PiB7XHJcbiAgICByZXR1cm4gdG9rZW5zLmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gaW5kZXg7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBjbGFzc1Rva2Vucy5qb2luKCcgJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlU3R5bGUodmFsdWUpIHtcclxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignU3R5bGUgY2Fubm90IGJlIHVzZSBhcyBhcnJheSEnKTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyh2YWx1ZSkubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcclxuICAgIGlmICgvXlthLXpdKltBLVpdLy50ZXN0KGtleSkpIHtcclxuICAgICAgY29uc3Qga2V5VG9rZW5zID0ga2V5LnNwbGl0KC8oPz1bQS1aXSkvKS5tYXAoKHRva2VuKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAga2V5ID0ga2V5VG9rZW5zLmpvaW4oJy0nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCR7a2V5fTogJHt2YWx1ZX1gO1xyXG4gIH0pLmpvaW4oJzsgJyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IG9sZFByb3BzXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5Qcm9wc30gcGVuZGluZ1Byb3BzXHJcbiAqIEByZXR1cm5zIHtTcGFya0pTLlByb3BzRGlmZltdfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZQcm9wcyhvbGRQcm9wcywgcGVuZGluZ1Byb3BzKSB7XHJcbiAgLyoqIEB0eXBlIHtTcGFya0pTLlByb3BzRGlmZltdfSAqL1xyXG4gIGNvbnN0IHByb3BEaWZmcyA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhwZW5kaW5nUHJvcHMpKSB7XHJcbiAgICBpZiAob2xkUHJvcHNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IG9sZFByb3BzW2tleV0gPT09IG51bGwpIHtcclxuICAgICAgcHJvcERpZmZzLnB1c2goeyB0eXBlOiAnQWRkJywgbmFtZToga2V5LCB2YWx1ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG9sZFByb3BzW2tleV0pIHtcclxuICAgICAgcHJvcERpZmZzLnB1c2goeyB0eXBlOiAnVXBkYXRlJywgbmFtZToga2V5LCB2YWx1ZSwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvbGRQcm9wcykpIHtcclxuICAgIGlmIChwZW5kaW5nUHJvcHNba2V5XSA9PT0gdW5kZWZpbmVkIHx8IHBlbmRpbmdQcm9wc1trZXldID09PSBudWxsKSB7XHJcbiAgICAgIHByb3BEaWZmcy5wdXNoKHsgdHlwZTogJ1JlbW92ZScsIG5hbWU6IGtleSwgdmFsdWUgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcHJvcERpZmZzO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0RE9NTm9kZShub2RlKSB7XHJcbiAgbGV0IGN1cnJlbnROb2RlID0gbm9kZTtcclxuXHJcbiAgd2hpbGUgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLnBhcmVudCkge1xyXG4gICAgaWYgKGN1cnJlbnROb2RlLnBhcmVudC5lbGVtZW50UmVmKSB7XHJcbiAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQuZWxlbWVudFJlZjtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59IiwiaW1wb3J0IHtFbXB0eU9iamVjdH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IGh0bWxUYWdzIGZyb20gXCJodG1sLXRhZ3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpcnR1YWxOb2RlIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyB2aXJ0dWFsIG5vZGUgd2l0aCB0eXBlLCB0YWcgYW5kIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVR5cGV9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVRhZ30gdGFnXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVQcm9wc30gcHJvcHNcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih0eXBlLCB0YWcsIHByb3BzID0ge30pIHtcclxuICAgIGNvbnN0IHsga2V5LCAuLi5vdGhlclByb3BzIH0gPSBwcm9wcyA/PyB7fTtcclxuXHJcbiAgICAvKiogQHR5cGUge3N0cmluZ3x1bmRlZmluZWR9ICovXHJcbiAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnRhZyA9IHRhZztcclxuXHJcbiAgICAvLyBSZWZlcmVuY2UgcHJvcGVydGllc1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlByb3BzfSAqL1xyXG4gICAgdGhpcy5vbGRQcm9wcyA9IEVtcHR5T2JqZWN0O1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlByb3BzfSAqL1xyXG4gICAgdGhpcy5wZW5kaW5nUHJvcHMgPSBwcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgIC8vIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi9cclxuICAgIC8vIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdDsgVE9ETzogYWRkIHN1cHBvcnQgZm9yIHN0YXRlc1xyXG4gICAgLyoqIEB0eXBlIHtDb21wb25lbnR8bnVsbH0gKi9cclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudHxudWxsfSAqL1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgU3BhcmtKUy5FdmVudExpc3RlbmVyW10+fSAqL1xyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBFbXB0eU9iamVjdDtcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLkVmZmVjdFR5cGV9ICovXHJcbiAgICB0aGlzLmVmZmVjdCA9ICcnO1xyXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG4gICAgdGhpcy5tb3VudGVkID0gZmFsc2U7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXHJcbiAgICB0aGlzLnBlbmRpbmdVcGRhdGUgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cclxuICAgIC8vIHRoaXMuc3RhdGVDaGFuZ2VkID0gZmFsc2U7IFRPRE86IGFkZCBzdXBwb3J0IGZvciBzdGF0ZXNcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV8bnVsbH0gKi9cclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGVbXX0gKi9cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB2aXJ0dWFsIG5vZGUgaXMgb2YgY2VydGFpbiB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVUeXBlfSB0eXBlXHJcbiAgICovXHJcbiAgaXNUeXBlKHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIGNoaWxkcmVuIHdlcmUgbW91bnRlZCBpbnRvIERPTS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGFsbENoaWxkcmVuTW91bnRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgoY291bnQsIGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoY2hpbGROb2RlLmlzVHlwZSgnRWxlbWVudCcpIHx8IGNoaWxkTm9kZS5pc1R5cGUoJ1RleHQnKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGNoaWxkTm9kZS5lbGVtZW50UmVmICE9PSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gY2hpbGROb2RlLm1vdW50ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb3VudCArIChyZXN1bHQgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuTW91bnRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBjaGlsZHJlbiB3ZXJlIHVwZGF0ZWQgaW4gRE9NLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgYWxsQ2hpbGRyZW5VcGRhdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChjb3VudCwgY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb3VudCArICghY2hpbGROb2RlLnBlbmRpbmdVcGRhdGUgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuVXBkYXRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIEhUTUwgZWxlbWVudCBhbmQgc3RvcmUgaXQncyByZWZlcmVuY2UgaW50byBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudFJlZi5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAvKiogQHR5cGUge0V2ZW50TGlzdGVuZXJbXX0gKi9cclxuICAgIGNvbnN0IGxpc3RlbmVyc1dpdGhUeXBlID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0gPz8gW107XHJcblxyXG4gICAgaWYgKGxpc3RlbmVyc1dpdGhUeXBlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvdW5kTGlzdGVuZXJJbmRleCA9IC0xO1xyXG4gICAgY29uc3QgZm91bmRMaXN0ZW5lciA9IGxpc3RlbmVyc1dpdGhUeXBlLmZpbmQoKGFub3RoZXJMaXN0ZW5lciwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFub3RoZXJMaXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICBmb3VuZExpc3RlbmVySW5kZXggPSBpbmRleDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZExpc3RlbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXZlbnQgbGlzdGVuZXIgZm9yICR7dHlwZX0gb24gbm9kZSAke3RoaXMudGFnfSBub3QgZm91bmQuIENhdXNlOiBldmVudCBsaXN0ZW5lciBwcm9iYWJseSB3YXNuJ3QgYm91bmQgaW4gY29uc3RydWN0b3IuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgbGlzdGVuZXJzV2l0aFR5cGUuc3BsaWNlKGZvdW5kTGlzdGVuZXJJbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhbnMgYWxsIGxpc3RlbmVycyBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqL1xyXG4gIGNsZWFuTGlzdGVuZXJzKCkge1xyXG4gICAgZm9yIChjb25zdCBbdHlwZSwgbGlzdGVuZXJzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmxpc3RlbmVycykpIHtcclxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRSZWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBFbXB0eU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgY29tcG9uZW50IGFuZCBjb3B5IGl0J3Mgc3RhdGUgaW50byB2aXJ0dWFsIG9kZSdzIHN0YXRlLlxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy50YWcodGhpcy5wZW5kaW5nUHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5zdGFuY2Uuc3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmRzIGEgY2hpbGQgbm9kZSBpbnRvIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICBhcHBlbmRDaGlsZChub2RlKSB7XHJcbiAgICBub2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgaW4gY3VycmVudCBub2RlIHdpdGggYSBuZXcgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBvbGROb2RlXHJcbiAgICovXHJcbiAgcmVwbGFjZUNoaWxkKG5ld05vZGUsIG9sZE5vZGUpIHtcclxuICAgIGNvbnN0IGluZGV4T2YgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2Yob2xkTm9kZSk7XHJcblxyXG4gICAgaWYgKGluZGV4T2YgPj0gMCkge1xyXG4gICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW5baW5kZXhPZl0ucGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaGlsZHJlbltpbmRleE9mXSA9IG5ld05vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgY2hpbGQgbm9kZSBmcm9tIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICByZW1vdmVDaGlsZChub2RlKSB7XHJcbiAgICBjb25zdCBpbmRleE9mID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xyXG5cclxuICAgIGlmIChpbmRleE9mID49IDApIHtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gY3VycmVudCBub2RlLlxyXG4gICAqL1xyXG4gIGVtcHR5KCkge1xyXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbm90aGVyIGluc3RhbmNlIHdpdGggc2FtZSBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1ZpcnR1YWxOb2RlfVxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgY29uc3QgY2xvbmVkID0gbmV3IFZpcnR1YWxOb2RlKHRoaXMudHlwZSwgdGhpcy50YWcsIHtcclxuICAgICAga2V5OiB0aGlzLmtleSxcclxuICAgICAgLi4udGhpcy5wZW5kaW5nUHJvcHNcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQub2xkUHJvcHMgPSB0aGlzLm9sZFByb3BzO1xyXG4gICAgY2xvbmVkLnBlbmRpbmdQcm9wcyA9IHRoaXMucGVuZGluZ1Byb3BzO1xyXG4gICAgLy8gY2xvbmVkLnN0YXRlID0gdGhpcy5zdGF0ZTsgVE9ETzogYWRkIHN1cHBvcnQgZm9yIHN0YXRlc1xyXG4gICAgY2xvbmVkLmluc3RhbmNlID0gdGhpcy5pbnN0YW5jZTtcclxuICAgIGNsb25lZC5lbGVtZW50UmVmID0gdGhpcy5lbGVtZW50UmVmO1xyXG4gICAgY2xvbmVkLmxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzO1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQuZWZmZWN0ID0gdGhpcy5lZmZlY3Q7XHJcbiAgICBjbG9uZWQubW91bnRlZCA9IHRoaXMubW91bnRlZDtcclxuICAgIGNsb25lZC5wZW5kaW5nVXBkYXRlID0gdGhpcy5wZW5kaW5nVXBkYXRlO1xyXG4gICAgLy8gY2xvbmVkLnN0YXRlQ2hhbmdlZCA9IHRoaXMuc3RhdGVDaGFuZ2VkOyBUT0RPOiBhZGQgc3VwcG9ydCBmb3Igc3RhdGVzXHJcblxyXG4gICAgLy8gTm9kZSBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQucGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICBjbG9uZWQuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xyXG5cclxuICAgIHJldHVybiBjbG9uZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3B5IGFsbCBkYXRhIGZyb20gc291cmNlIHZpcnR1YWwgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IHNvdXJjZU5vZGVcclxuICAgKi9cclxuICBjb3B5RnJvbShzb3VyY2VOb2RlKSB7XHJcbiAgICB0aGlzLmtleSA9IHNvdXJjZU5vZGUua2V5O1xyXG4gICAgdGhpcy50eXBlID0gc291cmNlTm9kZS50eXBlO1xyXG4gICAgdGhpcy50YWcgPSBzb3VyY2VOb2RlLnRhZztcclxuXHJcbiAgICAvLyBSZWZlcmVuY2UgcHJvcGVydGllc1xyXG4gICAgdGhpcy5vbGRQcm9wcyA9IHNvdXJjZU5vZGUub2xkUHJvcHM7XHJcbiAgICB0aGlzLnBlbmRpbmdQcm9wcyA9IHNvdXJjZU5vZGUucGVuZGluZ1Byb3BzO1xyXG4gICAgLy8gdGhpcy5zdGF0ZSA9IHNvdXJjZU5vZGUuc3RhdGU7IFRPRE86IGFkZCBzdXBwb3J0IGZvciBzdGF0ZXNcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBzb3VyY2VOb2RlLmluc3RhbmNlO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gc291cmNlTm9kZS5lbGVtZW50UmVmO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBzb3VyY2VOb2RlLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgdGhpcy5lZmZlY3QgPSBzb3VyY2VOb2RlLmVmZmVjdDtcclxuICAgIHRoaXMubW91bnRlZCA9IHNvdXJjZU5vZGUubW91bnRlZDtcclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IHNvdXJjZU5vZGUucGVuZGluZ1VwZGF0ZTtcclxuICAgIC8vIHRoaXMuc3RhdGVDaGFuZ2VkID0gc291cmNlTm9kZS5zdGF0ZUNoYW5nZWQ7IFRPRE86IGFkZCBzdXBwb3J0IGZvciBzdGF0ZXNcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIHRoaXMucGFyZW50ID0gc291cmNlTm9kZS5wYXJlbnQ7XHJcbiAgICB0aGlzLmNoaWxkcmVuID0gc291cmNlTm9kZS5jaGlsZHJlbjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge0pTWFtdfSBqc3hBcnJheVxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tLZXlzSW5Kc3hBcnJheShqc3hBcnJheSkge1xyXG4gIGNvbnN0IHVzZWRLZXlzID0gW107XHJcblxyXG4gIHJldHVybiBqc3hBcnJheS5ldmVyeSgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKCFpdGVtLmF0dHJpYnV0ZXMgfHwgIWl0ZW0uYXR0cmlidXRlcy5rZXkgfHwgdXNlZEtleXMuaW5jbHVkZXMoaXRlbS5hdHRyaWJ1dGVzLmtleSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZWRLZXlzLnB1c2goaXRlbS5hdHRyaWJ1dGVzLmtleSk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5SZW5kZXJSZXN1bHR9IHJlbmRlclJlc3VsdFxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfG51bGx9IHBhcmVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkVmlydHVhbFRyZWUocmVuZGVyUmVzdWx0LCBwYXJlbnQgPSBudWxsKSB7XHJcbiAgbGV0IHtcclxuICAgIGVsZW1lbnROYW1lID0gcmVuZGVyUmVzdWx0ID8/ICcnLFxyXG4gICAgYXR0cmlidXRlcyA9IHt9LFxyXG4gICAgY2hpbGRyZW4gPSBbXVxyXG4gIH0gPSByZW5kZXJSZXN1bHQgPz8ge307XHJcblxyXG4gIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV9ICovXHJcbiAgbGV0IG5vZGU7XHJcblxyXG4gIGlmICh0eXBlb2YgZWxlbWVudE5hbWUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ0NvbXBvbmVudCcsIGVsZW1lbnROYW1lLCB7IGNoaWxkcmVuLCAuLi5hdHRyaWJ1dGVzIH0pO1xyXG4gICAgY2hpbGRyZW4gPSBbXTtcclxuICB9IGVsc2UgaWYgKFsuLi5odG1sVGFnc10uaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7IC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBTVkcgZWxlbWVudHNcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ0VsZW1lbnQnLCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudE5hbWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBjYW5ub3QgYmUgcmVuZGVyZWQgYXMgSlNYIG5vZGUhJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ1RleHQnLCBlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBpZiAocGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICBjaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgaWYgKCFjaGlsZE5vZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgaWYgKCFjaGVja0tleXNJbkpzeEFycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER5bmFtaWNhbGx5IG1hcHBlZCBub2RlcyBpbiBsb29wIG11c3QgaGF2ZSB1bmlxdWUga2V5cyBzcGVjaWZpZWQgaW4gXCJrZXlcIiBwcm9wLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaGlsZE5vZGUuZm9yRWFjaChhbm90aGVyQ2hpbGROb2RlID0+IHtcclxuICAgICAgICBidWlsZFZpcnR1YWxUcmVlKGFub3RoZXJDaGlsZE5vZGUsIG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1aWxkVmlydHVhbFRyZWUoY2hpbGROb2RlLCBub2RlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyBjbG9zZXN0IHBhcmVudCBiYXNlZCBvbiBzZWxlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdE5vZGUobm9kZSwgc2VsZWN0b3IpIHtcclxuICBpZiAoIXNlbGVjdG9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc2VsZWN0b3IgY2FuXFwndCBiZSBlbXB0eSBzdHJpbmcnKTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gIHdoaWxlIChjdXJyZW50Tm9kZT8ucGFyZW50KSB7XHJcbiAgICBjb25zdCBwYXJlbnRQcm9wcyA9IGN1cnJlbnROb2RlLnBhcmVudC5wZW5kaW5nUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcblxyXG4gICAgaWYgKGN1cnJlbnROb2RlLnBhcmVudC50eXBlICE9PSAnZWxlbWVudCcpIHtcclxuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykgJiYgcGFyZW50UHJvcHMuaWQgPT09IHNlbGVjdG9yLnN1YnN0cmluZygxKSkge1xyXG4gICAgICByZXR1cm4gIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aCgnLicpICYmIHBhcmVudFByb3BzLmNsYXNzID09PSBzZWxlY3Rvci5zdWJzdHJpbmcoMSkpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoL1tbYS16QS1aMC05XFwtX10qKD86PVwiW2EtekEtWjAtOVxcLV9dKlwiKT9dLy50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdG9yLnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQucGVuZGluZ1Byb3BzW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY3VycmVudE5vZGUucGFyZW50LnRhZyA9PT0gc2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgdmlydHVhbCB0cmVlIGZyb20gcm9vdCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpIHtcclxuICBjb25zdCByb290Tm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnUm9vdCcsICcnKTtcclxuICBjb25zdCBjaGlsZE5vZGUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCk7XHJcblxyXG4gIGlmIChjaGlsZE5vZGUpIHtcclxuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdE5vZGU7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtTcGFya30gZnJvbSBcIkAvc3BhcmtcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiQC9BcHBcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuQXBwQ29uZmlnfSBjb25maWdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoY29uZmlnKSB7XHJcbiAgaWYgKHR5cGVvZiBjb25maWcgIT09IFwib2JqZWN0XCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBuZWNlc3Nhcnkgb3B0aW9ucyBkZWZpbmVkIGluIGdpdmVuIGNvbmZpZy4nKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy4kYXBwID0gbmV3IFNwYXJrKCk7XHJcbiAgd2luZG93LiRhcHAuc2V0Um9vdEZ1bmN0aW9uKGNvbmZpZy5yZW5kZXIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgJGFwcC5tb3VudChjb25maWcubW91bnRFbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNyZWF0ZUFwcCh7XHJcbiAgbW91bnRFbDogJyNhcHAnLFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8QXBwIC8+XHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJfaW5oZXJpdHMiLCJfc2V0UHJvdG90eXBlT2YiLCJpbWciLCJDb21wb25lbnQiLCJsaXN0SXRlbXMiLCJpZCIsIm5hbWUiLCJBcHAiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsImhhbmRsZUNsaWNrIiwiaGFuZGxlVGV4dENoYW5nZSIsImhhbmRsZVN1Ym1pdCIsIm1vdW50ZWQiLCJfdXBkYXRlZCIsIl9jYWxsZWUiLCJfY29udGV4dCIsInVwZGF0ZWQiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJlbGVtZW50TmFtZSIsImF0dHJpYnV0ZXMiLCJzdHlsZSIsImZvbnRTaXplIiwiY29sb3IiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW0iLCJvblN1Ym1pdCIsInR5cGUiLCJvbklucHV0Iiwic3JjIiwiYWx0Iiwib25DbGljayIsImRlZmF1bHQiLCJFbXB0eU9iamVjdCIsIl9tb3VudGVkIiwiX3Jlc3VtZWQiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsInJlc3VtZWQiLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsIl9kZXN0cm95ZWQiLCJfY2FsbGVlNCIsIl9jb250ZXh0NCIsImRlc3Ryb3llZCIsImZpbmRDbG9zZXN0Tm9kZSIsImRpZmZQcm9wcyIsImZpbmRDbG9zZXN0RE9NTm9kZSIsInJlc29sdmVDbGFzc05hbWUiLCJyZXNvbHZlU3R5bGUiLCJoYW5kbGVBZGRpbmdQcm9wcyIsIm5vZGUiLCJwcm9wTmFtZSIsInByb3BWYWx1ZSIsInN0YXJ0c1dpdGgiLCJhZGRFdmVudExpc3RlbmVyIiwic3Vic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50UmVmIiwic2V0QXR0cmlidXRlIiwicmVzb2x2ZUVsZW1lbnRBdHRyaWJ1dGVzIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJlbnRyaWVzIiwicGVuZGluZ1Byb3BzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJoYW5kbGVVcGRhdGluZ1Byb3BzIiwiZXZlbnROYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9sZFByb3BzIiwiaGFuZGxlUmVtb3ZpbmdQcm9wcyIsInJlbmRlck5vZGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ1bm1vdW50Tm9kZSIsImZvckVhY2giLCJjaGlsZCIsImNsZWFuTGlzdGVuZXJzIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiaXNUeXBlIiwiaW5zdGFuY2UiLCJjcmVhdGVFbGVtZW50IiwicG9zaXRpb24iLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwidGFnIiwiX3JlZiIsIl9ub2RlJHBlbmRpbmdQcm9wcyR4bSIsImNsb3Nlc3RXaXRoTlMiLCJ4bWxucyIsImNyZWF0ZUVsZW1lbnROUyIsInBhcmVudEVsIiwiY2hpbGRBdCIsImluc2VydEJlZm9yZSIsInVwZGF0ZUVsZW1lbnQiLCJkaWZmZWRQcm9wcyIsInByb3AiLCJmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4iLCJidWlsZFZpcnR1YWxUcmVlIiwibW91bnRWaXJ0dWFsU3VidHJlZSIsImVmZmVjdCIsImNyZWF0ZUNvbXBvbmVudCIsInJlbmRlclJlc3VsdCIsInN1YnRyZWUiLCJhcHBlbmRDaGlsZCIsImNoaWxkTm9kZSIsImNvcHlOb2RlUmVmZXJlbmNlcyIsImN1cnJlbnROb2RlIiwibmV3Tm9kZSIsInJlY3Vyc2l2ZSIsInVuZGVmaW5lZCIsIl9uZXdOb2RlJG9sZFByb3BzIiwiX25ld05vZGUkZWxlbWVudFJlZiIsIl9uZXdOb2RlJHBlbmRpbmdQcm9wcyIsImluZGV4IiwiY29tcGFyZVByb3BzIiwia2V5cyIsImV2ZXJ5IiwiX3JlZjIiLCJzaG91bGRVcGRhdGVOb2RlIiwidXBkYXRlTm9kZSIsInBlbmRpbmdVcGRhdGUiLCJlbXB0eSIsInJldXNlTm9kZSIsImNsb25lZEN1cnJlbnROb2RlIiwiY2xvbmUiLCJwYXJlbnQiLCJjb3B5RnJvbSIsImZpbmROb2RlV2l0aEtleSIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwiZXJyIiwiZmluZE1hdGNoaW5nQ2hpbGROb2RlIiwibmV3Q2hpbGROb2RlIiwiZm91bmROb2RlIiwicmVjb25jaWxlIiwicHJvY2Vzc2VkQ2hpbGRyZW4iLCJtYXRjaGluZ0NoaWxkIiwicHVzaCIsImluY2x1ZGVzIiwicmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMiLCJlZmZlY3RzIiwibm9kZVJlZiIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNsZWFuTm9kZXMiLCJidWlsZFZpcnR1YWxUcmVlUm9vdCIsIlNwYXJrIiwiX3Jvb3RFbCIsIl9yb290RnVuYyIsIl92aXJ0dWFsVHJlZSIsInNldFJvb3RGdW5jdGlvbiIsInJvb3RGbiIsIm1vdW50IiwibW91bnRFbCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MRWxlbWVudCIsIkVycm9yIiwibmV3VmlydHVhbFRyZWUiLCJkZWxldGlvbnMiLCJuZXdDaGFuZ2VzIiwibW91bnRlZENvbXBvbmVudE5vZGVzIiwidXBkYXRlZENvbXBvbmVudE5vZGVzIiwiaGFuZGxlUGxhY2VtZW50IiwiaGFuZGxlVXBkYXRlIiwib25TdGF0ZUNoYW5nZWQiLCJjb21wb25lbnQiLCJwcm9jZXNzQ29tcG9uZW50Tm9kZXMiLCJjb21wb25lbnROb2RlcyIsImFjdGlvbiIsImFsbENoaWxkcmVuTW91bnRlZCIsImFsbENoaWxkcmVuVXBkYXRlZCIsInNoaWZ0IiwidW5zaGlmdCIsIkFycmF5IiwiaXNBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJ0b1N0cmluZyIsImNsYXNzVG9rZW5zIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwidG9rZW5zIiwiaW5kZXhPZiIsImpvaW4iLCJ0ZXN0Iiwia2V5VG9rZW5zIiwic3BsaXQiLCJ0b2tlbiIsInByb3BEaWZmcyIsIl9pMiIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiaHRtbFRhZ3MiLCJWaXJ0dWFsTm9kZSIsIm90aGVyUHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJsaXN0ZW5lcnMiLCJyZWR1Y2UiLCJjb3VudCIsInJlc3VsdCIsImxpc3RlbmVyIiwiX3RoaXMkbGlzdGVuZXJzJHR5cGUiLCJsaXN0ZW5lcnNXaXRoVHlwZSIsImZvdW5kTGlzdGVuZXJJbmRleCIsImZvdW5kTGlzdGVuZXIiLCJmaW5kIiwiYW5vdGhlckxpc3RlbmVyIiwic3BsaWNlIiwiX2xvb3AiLCJfcmV0IiwicmVwbGFjZUNoaWxkIiwib2xkTm9kZSIsImNsb25lZCIsInNvdXJjZU5vZGUiLCJjaGVja0tleXNJbkpzeEFycmF5IiwianN4QXJyYXkiLCJ1c2VkS2V5cyIsIl9yZWYyJGVsZW1lbnROYW1lIiwiX3JlZjIkYXR0cmlidXRlcyIsIl9yZWYyJGNoaWxkcmVuIiwiYW5vdGhlckNoaWxkTm9kZSIsInNlbGVjdG9yIiwiX2N1cnJlbnROb2RlIiwiX2N1cnJlbnROb2RlJHBhcmVudCRwIiwicGFyZW50UHJvcHMiLCJyZXBsYWNlIiwicm9vdE5vZGUiLCJjcmVhdGVBcHAiLCJjb25maWciLCJ3aW5kb3ciLCIkYXBwIl0sInNvdXJjZVJvb3QiOiIifQ==