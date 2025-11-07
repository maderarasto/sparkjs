/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./example/img/logo.png":
/*!******************************!*\
  !*** ./example/img/logo.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
module.exports = /*#__PURE__*/JSON.parse('["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","search","section","select","selectedcontent","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"]');

/***/ }),

/***/ "./node_modules/svg-tags/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/svg-tags/lib/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./svg-tags.json */ "./node_modules/svg-tags/lib/svg-tags.json");

/***/ }),

/***/ "./node_modules/svg-tags/lib/svg-tags.json":
/*!*************************************************!*\
  !*** ./node_modules/svg-tags/lib/svg-tags.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]');

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _public_img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @public/img/logo.png */ "./example/img/logo.png");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component */ "./src/component.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Header */ "./src/Header.jsx");
/* harmony import */ var _spark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/spark */ "./src/spark.js");
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
    _this.inputRef = (0,_spark__WEBPACK_IMPORTED_MODULE_3__.createRef)(null);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleTextChange = _this.handleTextChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }
  _inherits(App, _Component);
  return _createClass(App, [{
    key: "mounted",
    value: function mounted() {
      if (this.inputRef.current) {
        this.inputRef.current.focus();
      }
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
              ref: this.inputRef,
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
          elementName: "svg",
          attributes: {
            xmlns: "http://www.w3.org/2000/svg",
            width: "407.273",
            height: "720",
            viewBox: "0 0 407.273 720",
            "xmlns:xlink": "http://www.w3.org/1999/xlink",
            role: "img",
            artist: "Katerina Limpitsouni",
            source: "https://undraw.co/"
          },
          children: [{
            elementName: "g",
            attributes: {
              transform: "translate(-704.356 -232.671)"
            },
            children: [{
              elementName: "rect",
              attributes: {
                width: "395.152",
                height: "720",
                rx: "58.728",
                transform: "translate(711.022 232.671)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M732.338,221.859V799.483A64.6,64.6,0,0,1,667.817,864H415.041a64.6,64.6,0,0,1-64.521-64.521V221.859a64.6,64.6,0,0,1,64.521-64.521H448.1v11.418a19.492,19.492,0,0,0,19.49,19.491H615.272a19.492,19.492,0,0,0,19.491-19.49V157.338h33.055a64.6,64.6,0,0,1,64.521,64.521Z",
                transform: "translate(367.169 82.003)",
                fill: "#fff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M344.368,275.729a4.854,4.854,0,0,1-4.849-4.848v-9.7a4.848,4.848,0,0,1,9.7,0v9.7A4.854,4.854,0,0,1,344.368,275.729Z",
                transform: "translate(364.836 103.002)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M344.368,319.725a4.854,4.854,0,0,1-4.848-4.849V288.184a4.848,4.848,0,0,1,9.7,0v26.693a4.854,4.854,0,0,1-4.848,4.848Z",
                transform: "translate(364.836 108.729)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M344.368,352.7a4.854,4.854,0,0,1-4.848-4.849V321.162a4.848,4.848,0,0,1,9.7,0v26.693a4.854,4.854,0,0,1-4.848,4.848Z",
                transform: "translate(364.836 115.725)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M672.368,341.43a4.854,4.854,0,0,1-4.848-4.848V271.45a4.849,4.849,0,0,1,9.7,0v65.131a4.854,4.854,0,0,1-4.849,4.848Z",
                transform: "translate(434.412 105.18)",
                fill: "#3f3d56"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M523.718,171.242H486.143a3.03,3.03,0,0,1,0-6.061h37.576a3.03,3.03,0,0,1,0,6.061Z",
                transform: "translate(395.295 83.666)",
                fill: "#fff"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "2.424",
                cy: "2.424",
                r: "2.424",
                transform: "translate(935.982 249.454)",
                fill: "#fff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M451.1,317.426H409a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,409,231.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM409,233.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,409,315h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.579,19.579,0,0,0,451.1,233.789Z",
                transform: "translate(374.912 97.705)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.6,317.926H494.5a22.005,22.005,0,0,1-21.98-21.98v-42.1a22.005,22.005,0,0,1,21.98-21.98h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1A22.005,22.005,0,0,1,536.6,317.926Zm-42.1-83.636a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,494.5,315.5h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,536.6,234.289Z",
                transform: "translate(393.048 97.811)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M622.1,318.426H580a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,580,232.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM580,234.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,580,316h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,622.1,234.789Z",
                transform: "translate(411.184 97.918)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M451.1,416.426H409a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,409,330.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM409,332.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,409,414h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.579,19.579,0,0,0,451.1,332.789Z",
                transform: "translate(374.912 118.705)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.6,416.926H494.5a22.005,22.005,0,0,1-21.98-21.98v-42.1a22.005,22.005,0,0,1,21.98-21.98h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98Zm-42.1-83.636a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,494.5,414.5h42.1a19.579,19.579,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,536.6,333.289Z",
                transform: "translate(393.048 118.811)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M622.1,417.426H580a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,580,331.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22,22,0,0,1-21.98,21.98ZM580,333.79a19.579,19.579,0,0,0-19.556,19.556v42.1A19.579,19.579,0,0,0,580,415h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,622.1,333.789Z",
                transform: "translate(411.184 118.918)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M450.888,716h-42.1a20.792,20.792,0,0,1-20.768-20.768v-42.1a20.792,20.792,0,0,1,20.768-20.768h42.1a20.792,20.792,0,0,1,20.768,20.768v42.1A20.792,20.792,0,0,1,450.888,716Z",
                transform: "translate(375.124 182.766)",
                fill: "#6c63ff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.388,716.5h-42.1a20.791,20.791,0,0,1-20.768-20.768v-42.1a20.791,20.791,0,0,1,20.768-20.768h42.1a20.792,20.792,0,0,1,20.768,20.768v42.1A20.792,20.792,0,0,1,536.388,716.5Z",
                transform: "translate(393.26 182.872)",
                fill: "#f2f2f2"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M621.888,717h-42.1a20.791,20.791,0,0,1-20.768-20.768v-42.1a20.791,20.791,0,0,1,20.768-20.768h42.1a20.791,20.791,0,0,1,20.768,20.768v42.1A20.792,20.792,0,0,1,621.888,717Z",
                transform: "translate(411.397 182.978)",
                fill: "#f2f2f2"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "6.061",
                cy: "6.061",
                r: "6.061",
                transform: "translate(880.719 768.465)",
                fill: "#ccc"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "6.061",
                cy: "6.061",
                r: "6.061",
                transform: "translate(902.537 768.465)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "6.061",
                cy: "6.061",
                r: "6.061",
                transform: "translate(924.355 768.465)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M682.642,732.381H393.059a24.934,24.934,0,0,1-24.906-24.905v-61.7a24.934,24.934,0,0,1,24.906-24.905H682.642a24.934,24.934,0,0,1,24.906,24.905v61.7a24.934,24.934,0,0,1-24.906,24.905ZM393.059,623.29a22.507,22.507,0,0,0-22.482,22.481v61.7a22.507,22.507,0,0,0,22.482,22.481H682.642a22.507,22.507,0,0,0,22.482-22.481v-61.7a22.507,22.507,0,0,0-22.482-22.481Z",
                transform: "translate(370.91 180.327)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M425.893,183.03H393.166a6.061,6.061,0,0,1,0-12.121h32.727a6.061,6.061,0,1,1,0,12.121Z",
                transform: "translate(374.93 84.881)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "5.455",
                cy: "5.455",
                r: "5.455",
                transform: "translate(1010.416 256.396)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "5.455",
                cy: "5.455",
                r: "5.455",
                transform: "translate(1027.386 256.396)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "5.455",
                cy: "5.455",
                r: "5.455",
                transform: "translate(1044.355 256.396)",
                fill: "#e6e6e6"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "14.545",
                cy: "14.545",
                r: "14.545",
                transform: "translate(824.46 441.851)",
                fill: "#6c63ff"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "14.545",
                cy: "14.545",
                r: "14.545",
                transform: "translate(929.914 810.335)",
                fill: "#6c63ff"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M451.1,515.426H409a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,409,429.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM409,431.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.578,19.578,0,0,0,409,513h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.579,19.579,0,0,0,451.1,431.789Z",
                transform: "translate(374.912 139.705)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M536.6,515.926H494.5a22.005,22.005,0,0,1-21.98-21.98v-42.1a22.005,22.005,0,0,1,21.98-21.98h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1A22.005,22.005,0,0,1,536.6,515.926Zm-42.1-83.636a19.579,19.579,0,0,0-19.556,19.556v42.1A19.578,19.578,0,0,0,494.5,513.5h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,536.6,432.289Z",
                transform: "translate(393.048 139.811)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "path",
              attributes: {
                d: "M622.1,516.426H580a22.005,22.005,0,0,1-21.98-21.98v-42.1A22.005,22.005,0,0,1,580,430.365h42.1a22.005,22.005,0,0,1,21.98,21.98v42.1a22.005,22.005,0,0,1-21.98,21.98ZM580,432.789a19.579,19.579,0,0,0-19.556,19.556v42.1A19.578,19.578,0,0,0,580,514h42.1a19.578,19.578,0,0,0,19.556-19.556v-42.1A19.578,19.578,0,0,0,622.1,432.789Z",
                transform: "translate(411.184 139.918)",
                fill: "#090814"
              },
              children: null
            }, {
              elementName: "circle",
              attributes: {
                cx: "14.545",
                cy: "14.545",
                r: "14.545",
                transform: "translate(929.914 564.275)",
                fill: "#6c63ff"
              },
              children: null
            }]
          }]
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanNodes: () => (/* binding */ cleanNodes),
/* harmony export */   reconcile: () => (/* binding */ reconcile),
/* harmony export */   resolveEffectsFromNodes: () => (/* binding */ resolveEffectsFromNodes),
/* harmony export */   resolveLastMountedNode: () => (/* binding */ resolveLastMountedNode)
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



/** @type {VirtualNode|null} */
var lastMountedVirtualNode = null;

/**
 * Build and mount whole subtree of virtual node.
 *
 * @param {VirtualNode} node
 */
function mountVirtualSubtree(node) {
  node.effect = 'Placement';
  lastMountedVirtualNode = node;
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
function resolveLastMountedNode() {
  return lastMountedVirtualNode;
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Spark: () => (/* binding */ Spark),
/* harmony export */   createRef: () => (/* binding */ createRef)
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
    if (effect.nodeRef.ref) {
      effect.nodeRef.ref.current = effect.nodeRef.elementRef;
    }
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
function createRef(value) {
  var lastMountedNode = (0,_reconciler__WEBPACK_IMPORTED_MODULE_1__.resolveLastMountedNode)();
  if (!lastMountedNode) {
    console.warn('Skipping createRef. Last mounted virtual node not found. Cause: probably calling createRef outside of constructor.');
    return;
  }
  var ref = {
    current: value
  };
  lastMountedNode.refs.push(ref);
  return ref;
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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
/* harmony import */ var svg_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg-tags */ "./node_modules/svg-tags/lib/index.js");
var _excluded = ["key", "ref"];
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
    var key = props.key,
      ref = props.ref,
      otherProps = _objectWithoutProperties(props, _excluded);

    /** @type {string|undefined} */
    this.key = key;
    this.type = type;
    this.tag = tag;

    // Reference properties
    /** @type {SparkJS.Props} */
    this.oldProps = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {SparkJS.Props} */
    this.pendingProps = otherProps !== null && otherProps !== void 0 ? otherProps : _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {Record<string, any>} */
    this.state = _utils__WEBPACK_IMPORTED_MODULE_0__.EmptyObject;
    /** @type {SparkJS.RefObject[]} */
    this.refs = [];
    /** @type {SparkJS.RefObject|null} */
    this.ref = ref;
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
  var _ref = renderResult !== null && renderResult !== void 0 ? renderResult : {},
    _ref$elementName = _ref.elementName,
    elementName = _ref$elementName === void 0 ? renderResult !== null && renderResult !== void 0 ? renderResult : '' : _ref$elementName,
    _ref$attributes = _ref.attributes,
    attributes = _ref$attributes === void 0 ? {} : _ref$attributes,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? [] : _ref$children;

  /** @type {VirtualNode} */
  var node;
  if (typeof elementName === 'function') {
    node = new VirtualNode('Component', elementName, _objectSpread({
      children: children
    }, attributes));
    children = [];
  } else if (_toConsumableArray(html_tags__WEBPACK_IMPORTED_MODULE_1__).includes(elementName) || _toConsumableArray(svg_tags__WEBPACK_IMPORTED_MODULE_2__).includes(elementName)) {
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
    if (!currentNode.parent.isType('Element')) {
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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SjtBQUVBb0UsU0FBUyxDQUFDO0VBQ1JwRSxPQUFPLEVBQUUsTUFBTTtFQUNmeEssTUFBTSxXQUFOQSxNQUFNQSxDQUFBLEVBQUc7SUFDUDtNQUFBQyxXQUFBLEVBQUF0Qiw0Q0FBQTtNQUFBdUIsVUFBQTtNQUFBSSxRQUFBO0lBQUE7RUFDRjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL2V4YW1wbGUvaW1nL2xvZ28ucG5nIiwid2VicGFjazovL3NwYXJranMvLi9ub2RlX21vZHVsZXMvc3ZnLXRhZ3MvbGliL2luZGV4LmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9yZWNvbmNpbGVyLmpzIiwid2VicGFjazovL3NwYXJranMvLi9zcmMvc3BhcmsuanMiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9zcGFya2pzLy4vc3JjL3ZpcnR1YWwtbm9kZS5qcyIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zcGFya2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NwYXJranMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vc3Bhcmtqcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZmUyYTBlNGRjYWNlZDQ3NTQzMzlkNjkwM2ZhMzRhZGIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCAnLi9zdmctdGFncy5qc29uJyApOyIsImltcG9ydCBpbWcgZnJvbSAnQHB1YmxpYy9pbWcvbG9nby5wbmcnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCJAL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL0hlYWRlclwiO1xyXG5pbXBvcnQge2NyZWF0ZVJlZn0gZnJvbSBcIkAvc3BhcmtcIjtcclxuXHJcbmNvbnN0IGxpc3RJdGVtcyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiAnSFRNTCcgfSxcclxuICB7IGlkOiAyLCBuYW1lOiAnQ1NTJyB9LFxyXG4gIHsgaWQ6IDMsIG5hbWU6ICdKYXZhc2NyaXB0JyB9LFxyXG4gIHsgaWQ6IDQsIG5hbWU6ICdOb2RlLmpzJyB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmlucHV0UmVmID0gY3JlYXRlUmVmKG51bGwpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVRleHRDaGFuZ2UgPSB0aGlzLmhhbmRsZVRleHRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5jdXJyZW50KSB7XHJcbiAgICAgIHRoaXMuaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdXBkYXRlZCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5wdXRSZWYpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgaWQ6IHRoaXMuc3RhdGUuaWQgKyAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVTdWJtaXQoZXYpIHtcclxuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVUZXh0Q2hhbmdlKGV2KSB7XHJcbiAgICBjb25zb2xlLmxvZyhldik7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRTaXplOiAnMXJlbScsIGNvbG9yOiAnYmxhY2snIH19PlxyXG4gICAgICAgIHt0aGlzLnN0YXRlLmlkICUgMiA9PT0gMCA/IChcclxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9e2BUaXRsZSAke3RoaXMuc3RhdGUuaWR9YH0gLz5cclxuICAgICAgICApIDogJyd9XHJcbiAgICAgICAgPGRpdiBpZD1cInRvcC1oZWFkZXJcIiBjbGFzcz17YGNsYXNzLTEgY2xhc3MtMmB9PlxyXG4gICAgICAgICAgPG5hdj5OYXZpZ2F0aW9uPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHA+U3RhdGU6IHt0aGlzLnN0YXRlLmlkfTwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICB7bGlzdEl0ZW1zLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT57aXRlbS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICA8aW5wdXQgcmVmPXt0aGlzLmlucHV0UmVmfSB0eXBlPVwidGV4dFwiIG9uSW5wdXQ9e3RoaXMuaGFuZGxlVGV4dENoYW5nZX0gLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQwNy4yNzNcIiBoZWlnaHQ9XCI3MjBcIiB2aWV3Qm94PVwiMCAwIDQwNy4yNzMgNzIwXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgcm9sZT1cImltZ1wiIGFydGlzdD1cIkthdGVyaW5hIExpbXBpdHNvdW5pXCIgc291cmNlPVwiaHR0cHM6Ly91bmRyYXcuY28vXCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC03MDQuMzU2IC0yMzIuNjcxKVwiPjxyZWN0IHdpZHRoPVwiMzk1LjE1MlwiIGhlaWdodD1cIjcyMFwiIHJ4PVwiNTguNzI4XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDcxMS4wMjIgMjMyLjY3MSlcIiBmaWxsPVwiIzNmM2Q1NlwiLz48cGF0aCBkPVwiTTczMi4zMzgsMjIxLjg1OVY3OTkuNDgzQTY0LjYsNjQuNiwwLDAsMSw2NjcuODE3LDg2NEg0MTUuMDQxYTY0LjYsNjQuNiwwLDAsMS02NC41MjEtNjQuNTIxVjIyMS44NTlhNjQuNiw2NC42LDAsMCwxLDY0LjUyMS02NC41MjFINDQ4LjF2MTEuNDE4YTE5LjQ5MiwxOS40OTIsMCwwLDAsMTkuNDksMTkuNDkxSDYxNS4yNzJhMTkuNDkyLDE5LjQ5MiwwLDAsMCwxOS40OTEtMTkuNDlWMTU3LjMzOGgzMy4wNTVhNjQuNiw2NC42LDAsMCwxLDY0LjUyMSw2NC41MjFaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM2Ny4xNjkgODIuMDAzKVwiIGZpbGw9XCIjZmZmXCIvPjxwYXRoIGQ9XCJNMzQ0LjM2OCwyNzUuNzI5YTQuODU0LDQuODU0LDAsMCwxLTQuODQ5LTQuODQ4di05LjdhNC44NDgsNC44NDgsMCwwLDEsOS43LDB2OS43QTQuODU0LDQuODU0LDAsMCwxLDM0NC4zNjgsMjc1LjcyOVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzY0LjgzNiAxMDMuMDAyKVwiIGZpbGw9XCIjM2YzZDU2XCIvPjxwYXRoIGQ9XCJNMzQ0LjM2OCwzMTkuNzI1YTQuODU0LDQuODU0LDAsMCwxLTQuODQ4LTQuODQ5VjI4OC4xODRhNC44NDgsNC44NDgsMCwwLDEsOS43LDB2MjYuNjkzYTQuODU0LDQuODU0LDAsMCwxLTQuODQ4LDQuODQ4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNjQuODM2IDEwOC43MjkpXCIgZmlsbD1cIiMzZjNkNTZcIi8+PHBhdGggZD1cIk0zNDQuMzY4LDM1Mi43YTQuODU0LDQuODU0LDAsMCwxLTQuODQ4LTQuODQ5VjMyMS4xNjJhNC44NDgsNC44NDgsMCwwLDEsOS43LDB2MjYuNjkzYTQuODU0LDQuODU0LDAsMCwxLTQuODQ4LDQuODQ4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNjQuODM2IDExNS43MjUpXCIgZmlsbD1cIiMzZjNkNTZcIi8+PHBhdGggZD1cIk02NzIuMzY4LDM0MS40M2E0Ljg1NCw0Ljg1NCwwLDAsMS00Ljg0OC00Ljg0OFYyNzEuNDVhNC44NDksNC44NDksMCwwLDEsOS43LDB2NjUuMTMxYTQuODU0LDQuODU0LDAsMCwxLTQuODQ5LDQuODQ4WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg0MzQuNDEyIDEwNS4xOClcIiBmaWxsPVwiIzNmM2Q1NlwiLz48cGF0aCBkPVwiTTUyMy43MTgsMTcxLjI0Mkg0ODYuMTQzYTMuMDMsMy4wMywwLDAsMSwwLTYuMDYxaDM3LjU3NmEzLjAzLDMuMDMsMCwwLDEsMCw2LjA2MVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzk1LjI5NSA4My42NjYpXCIgZmlsbD1cIiNmZmZcIi8+PGNpcmNsZSBjeD1cIjIuNDI0XCIgY3k9XCIyLjQyNFwiIHI9XCIyLjQyNFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5MzUuOTgyIDI0OS40NTQpXCIgZmlsbD1cIiNmZmZcIi8+PHBhdGggZD1cIk00NTEuMSwzMTcuNDI2SDQwOWEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LTIxLjk4di00Mi4xQTIyLjAwNSwyMi4wMDUsMCwwLDEsNDA5LDIzMS4zNjVoNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LDIxLjk4djQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OCwyMS45OFpNNDA5LDIzMy43ODlhMTkuNTc5LDE5LjU3OSwwLDAsMC0xOS41NTYsMTkuNTU2djQyLjFBMTkuNTc5LDE5LjU3OSwwLDAsMCw0MDksMzE1aDQyLjFhMTkuNTc5LDE5LjU3OSwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OSwxOS41NzksMCwwLDAsNDUxLjEsMjMzLjc4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc0LjkxMiA5Ny43MDUpXCIgZmlsbD1cIiMwOTA4MTRcIi8+PHBhdGggZD1cIk01MzYuNiwzMTcuOTI2SDQ5NC41YTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgtMjEuOTh2LTQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OC0yMS45OGg0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEsMjEuOTgsMjEuOTh2NDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDUzNi42LDMxNy45MjZabS00Mi4xLTgzLjYzNmExOS41NzksMTkuNTc5LDAsMCwwLTE5LjU1NiwxOS41NTZ2NDIuMUExOS41NzksMTkuNTc5LDAsMCwwLDQ5NC41LDMxNS41aDQyLjFhMTkuNTc5LDE5LjU3OSwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNTM2LjYsMjM0LjI4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzkzLjA0OCA5Ny44MTEpXCIgZmlsbD1cIiMwOTA4MTRcIi8+PHBhdGggZD1cIk02MjIuMSwzMTguNDI2SDU4MGEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LTIxLjk4di00Mi4xQTIyLjAwNSwyMi4wMDUsMCwwLDEsNTgwLDIzMi4zNjVoNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LDIxLjk4djQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OCwyMS45OFpNNTgwLDIzNC43ODlhMTkuNTc5LDE5LjU3OSwwLDAsMC0xOS41NTYsMTkuNTU2djQyLjFBMTkuNTc5LDE5LjU3OSwwLDAsMCw1ODAsMzE2aDQyLjFhMTkuNTc4LDE5LjU3OCwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNjIyLjEsMjM0Ljc4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDExLjE4NCA5Ny45MTgpXCIgZmlsbD1cIiMwOTA4MTRcIi8+PHBhdGggZD1cIk00NTEuMSw0MTYuNDI2SDQwOWEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LTIxLjk4di00Mi4xQTIyLjAwNSwyMi4wMDUsMCwwLDEsNDA5LDMzMC4zNjVoNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LDIxLjk4djQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OCwyMS45OFpNNDA5LDMzMi43ODlhMTkuNTc5LDE5LjU3OSwwLDAsMC0xOS41NTYsMTkuNTU2djQyLjFBMTkuNTc5LDE5LjU3OSwwLDAsMCw0MDksNDE0aDQyLjFhMTkuNTc5LDE5LjU3OSwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OSwxOS41NzksMCwwLDAsNDUxLjEsMzMyLjc4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc0LjkxMiAxMTguNzA1KVwiIGZpbGw9XCIjMDkwODE0XCIvPjxwYXRoIGQ9XCJNNTM2LjYsNDE2LjkyNkg0OTQuNWEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LTIxLjk4di00Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEsMjEuOTgtMjEuOThoNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LDIxLjk4djQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OCwyMS45OFptLTQyLjEtODMuNjM2YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OSwxOS41NzksMCwwLDAsNDk0LjUsNDE0LjVoNDIuMWExOS41NzksMTkuNTc5LDAsMCwwLDE5LjU1Ni0xOS41NTZ2LTQyLjFBMTkuNTc4LDE5LjU3OCwwLDAsMCw1MzYuNiwzMzMuMjg5WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOTMuMDQ4IDExOC44MTEpXCIgZmlsbD1cIiMwOTA4MTRcIi8+PHBhdGggZD1cIk02MjIuMSw0MTcuNDI2SDU4MGEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LTIxLjk4di00Mi4xQTIyLjAwNSwyMi4wMDUsMCwwLDEsNTgwLDMzMS4zNjVoNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LDIxLjk4djQyLjFhMjIsMjIsMCwwLDEtMjEuOTgsMjEuOThaTTU4MCwzMzMuNzlhMTkuNTc5LDE5LjU3OSwwLDAsMC0xOS41NTYsMTkuNTU2djQyLjFBMTkuNTc5LDE5LjU3OSwwLDAsMCw1ODAsNDE1aDQyLjFhMTkuNTc4LDE5LjU3OCwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNjIyLjEsMzMzLjc4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDExLjE4NCAxMTguOTE4KVwiIGZpbGw9XCIjMDkwODE0XCIvPjxwYXRoIGQ9XCJNNDUwLjg4OCw3MTZoLTQyLjFhMjAuNzkyLDIwLjc5MiwwLDAsMS0yMC43NjgtMjAuNzY4di00Mi4xYTIwLjc5MiwyMC43OTIsMCwwLDEsMjAuNzY4LTIwLjc2OGg0Mi4xYTIwLjc5MiwyMC43OTIsMCwwLDEsMjAuNzY4LDIwLjc2OHY0Mi4xQTIwLjc5MiwyMC43OTIsMCwwLDEsNDUwLjg4OCw3MTZaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3NS4xMjQgMTgyLjc2NilcIiBmaWxsPVwiIzZjNjNmZlwiLz48cGF0aCBkPVwiTTUzNi4zODgsNzE2LjVoLTQyLjFhMjAuNzkxLDIwLjc5MSwwLDAsMS0yMC43NjgtMjAuNzY4di00Mi4xYTIwLjc5MSwyMC43OTEsMCwwLDEsMjAuNzY4LTIwLjc2OGg0Mi4xYTIwLjc5MiwyMC43OTIsMCwwLDEsMjAuNzY4LDIwLjc2OHY0Mi4xQTIwLjc5MiwyMC43OTIsMCwwLDEsNTM2LjM4OCw3MTYuNVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzkzLjI2IDE4Mi44NzIpXCIgZmlsbD1cIiNmMmYyZjJcIi8+PHBhdGggZD1cIk02MjEuODg4LDcxN2gtNDIuMWEyMC43OTEsMjAuNzkxLDAsMCwxLTIwLjc2OC0yMC43Njh2LTQyLjFhMjAuNzkxLDIwLjc5MSwwLDAsMSwyMC43NjgtMjAuNzY4aDQyLjFhMjAuNzkxLDIwLjc5MSwwLDAsMSwyMC43NjgsMjAuNzY4djQyLjFBMjAuNzkyLDIwLjc5MiwwLDAsMSw2MjEuODg4LDcxN1pcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDExLjM5NyAxODIuOTc4KVwiIGZpbGw9XCIjZjJmMmYyXCIvPjxjaXJjbGUgY3g9XCI2LjA2MVwiIGN5PVwiNi4wNjFcIiByPVwiNi4wNjFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoODgwLjcxOSA3NjguNDY1KVwiIGZpbGw9XCIjY2NjXCIvPjxjaXJjbGUgY3g9XCI2LjA2MVwiIGN5PVwiNi4wNjFcIiByPVwiNi4wNjFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTAyLjUzNyA3NjguNDY1KVwiIGZpbGw9XCIjZTZlNmU2XCIvPjxjaXJjbGUgY3g9XCI2LjA2MVwiIGN5PVwiNi4wNjFcIiByPVwiNi4wNjFcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTI0LjM1NSA3NjguNDY1KVwiIGZpbGw9XCIjZTZlNmU2XCIvPjxwYXRoIGQ9XCJNNjgyLjY0Miw3MzIuMzgxSDM5My4wNTlhMjQuOTM0LDI0LjkzNCwwLDAsMS0yNC45MDYtMjQuOTA1di02MS43YTI0LjkzNCwyNC45MzQsMCwwLDEsMjQuOTA2LTI0LjkwNUg2ODIuNjQyYTI0LjkzNCwyNC45MzQsMCwwLDEsMjQuOTA2LDI0LjkwNXY2MS43YTI0LjkzNCwyNC45MzQsMCwwLDEtMjQuOTA2LDI0LjkwNVpNMzkzLjA1OSw2MjMuMjlhMjIuNTA3LDIyLjUwNywwLDAsMC0yMi40ODIsMjIuNDgxdjYxLjdhMjIuNTA3LDIyLjUwNywwLDAsMCwyMi40ODIsMjIuNDgxSDY4Mi42NDJhMjIuNTA3LDIyLjUwNywwLDAsMCwyMi40ODItMjIuNDgxdi02MS43YTIyLjUwNywyMi41MDcsMCwwLDAtMjIuNDgyLTIyLjQ4MVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzcwLjkxIDE4MC4zMjcpXCIgZmlsbD1cIiNlNmU2ZTZcIi8+PHBhdGggZD1cIk00MjUuODkzLDE4My4wM0gzOTMuMTY2YTYuMDYxLDYuMDYxLDAsMCwxLDAtMTIuMTIxaDMyLjcyN2E2LjA2MSw2LjA2MSwwLDEsMSwwLDEyLjEyMVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc0LjkzIDg0Ljg4MSlcIiBmaWxsPVwiI2U2ZTZlNlwiLz48Y2lyY2xlIGN4PVwiNS40NTVcIiBjeT1cIjUuNDU1XCIgcj1cIjUuNDU1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwMTAuNDE2IDI1Ni4zOTYpXCIgZmlsbD1cIiNlNmU2ZTZcIi8+PGNpcmNsZSBjeD1cIjUuNDU1XCIgY3k9XCI1LjQ1NVwiIHI9XCI1LjQ1NVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDI3LjM4NiAyNTYuMzk2KVwiIGZpbGw9XCIjZTZlNmU2XCIvPjxjaXJjbGUgY3g9XCI1LjQ1NVwiIGN5PVwiNS40NTVcIiByPVwiNS40NTVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA0NC4zNTUgMjU2LjM5NilcIiBmaWxsPVwiI2U2ZTZlNlwiLz48Y2lyY2xlIGN4PVwiMTQuNTQ1XCIgY3k9XCIxNC41NDVcIiByPVwiMTQuNTQ1XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDgyNC40NiA0NDEuODUxKVwiIGZpbGw9XCIjNmM2M2ZmXCIvPjxjaXJjbGUgY3g9XCIxNC41NDVcIiBjeT1cIjE0LjU0NVwiIHI9XCIxNC41NDVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTI5LjkxNCA4MTAuMzM1KVwiIGZpbGw9XCIjNmM2M2ZmXCIvPjxwYXRoIGQ9XCJNNDUxLjEsNTE1LjQyNkg0MDlhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMUEyMi4wMDUsMjIuMDA1LDAsMCwxLDQwOSw0MjkuMzY1aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xYTIyLjAwNSwyMi4wMDUsMCwwLDEtMjEuOTgsMjEuOThaTTQwOSw0MzEuNzg5YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNDA5LDUxM2g0Mi4xYTE5LjU3OCwxOS41NzgsMCwwLDAsMTkuNTU2LTE5LjU1NnYtNDIuMUExOS41NzksMTkuNTc5LDAsMCwwLDQ1MS4xLDQzMS43ODlaXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3NC45MTIgMTM5LjcwNSlcIiBmaWxsPVwiIzA5MDgxNFwiLz48cGF0aCBkPVwiTTUzNi42LDUxNS45MjZINDk0LjVhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OC0yMS45OHYtNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LTIxLjk4aDQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMSwyMS45OCwyMS45OHY0Mi4xQTIyLjAwNSwyMi4wMDUsMCwwLDEsNTM2LjYsNTE1LjkyNlptLTQyLjEtODMuNjM2YTE5LjU3OSwxOS41NzksMCwwLDAtMTkuNTU2LDE5LjU1NnY0Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNDk0LjUsNTEzLjVoNDIuMWExOS41NzgsMTkuNTc4LDAsMCwwLDE5LjU1Ni0xOS41NTZ2LTQyLjFBMTkuNTc4LDE5LjU3OCwwLDAsMCw1MzYuNiw0MzIuMjg5WlwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOTMuMDQ4IDEzOS44MTEpXCIgZmlsbD1cIiMwOTA4MTRcIi8+PHBhdGggZD1cIk02MjIuMSw1MTYuNDI2SDU4MGEyMi4wMDUsMjIuMDA1LDAsMCwxLTIxLjk4LTIxLjk4di00Mi4xQTIyLjAwNSwyMi4wMDUsMCwwLDEsNTgwLDQzMC4zNjVoNDIuMWEyMi4wMDUsMjIuMDA1LDAsMCwxLDIxLjk4LDIxLjk4djQyLjFhMjIuMDA1LDIyLjAwNSwwLDAsMS0yMS45OCwyMS45OFpNNTgwLDQzMi43ODlhMTkuNTc5LDE5LjU3OSwwLDAsMC0xOS41NTYsMTkuNTU2djQyLjFBMTkuNTc4LDE5LjU3OCwwLDAsMCw1ODAsNTE0aDQyLjFhMTkuNTc4LDE5LjU3OCwwLDAsMCwxOS41NTYtMTkuNTU2di00Mi4xQTE5LjU3OCwxOS41NzgsMCwwLDAsNjIyLjEsNDMyLjc4OVpcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNDExLjE4NCAxMzkuOTE4KVwiIGZpbGw9XCIjMDkwODE0XCIvPjxjaXJjbGUgY3g9XCIxNC41NDVcIiBjeT1cIjE0LjU0NVwiIHI9XCIxNC41NDVcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOTI5LjkxNCA1NjQuMjc1KVwiIGZpbGw9XCIjNmM2M2ZmXCIvPjwvZz48L3N2Zz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PkNsaWNrPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBtb3VudGVkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciBtb3VudGVkJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyB1cGRhdGVkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ0hlYWRlciB1cGRhdGVkJyk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBkZXN0cm95ZWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZygnSGVhZGVyIGRlc3Ryb3llZCcpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGgxPnt0aGlzLnByb3BzLnRpdGxlfTwvaDE+XHJcbiAgICApXHJcbiAgfVxyXG59IiwiaW1wb3J0IHtFbXB0eU9iamVjdH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgYSBjb21wb25lbnQgd2l0aCBwcm9wcyBhbmQgZW1wdHkgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHByb3BzXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuICAgIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyBzdGF0ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7UmVjb3JkPHN0cmluZywgYW55Pn0gc3RhdGVcclxuICAgKi9cclxuICBzZXRTdGF0ZShzdGF0ZSkge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgJGFwcC5vblN0YXRlQ2hhbmdlZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbmRlcnMgY29tcG9uZW50IGFzIEpTWCBzdHJ1Y3R1cmUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7U3BhcmtKUy5SZW5kZXJSZXN1bHR9XHJcbiAgICovXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIGhvb2sgaXMgdHJpZ2dlcmVkIHdoZW4gY29tcG9uZW50IGlzIG1vdW50ZWQgaW50byBET00uXHJcbiAgICovXHJcbiAgYXN5bmMgbW91bnRlZCgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIGEgaG9vayBpcyB0cmlnZ2VyZWQgd2hlbiBhcHBsaWNhdGlvbiBpcyByZXN1bWVkIGludG8gY29tcG9uZW50LlxyXG4gICAqL1xyXG4gIGFzeW5jIHJlc3VtZWQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBBIGhvb2sgaXMgdHJpZ2dlcmVkIHdoZW4gY29tcG9uZW50IGlzIHJlLXJlbmRlcmVkLlxyXG4gICAqL1xyXG4gIGFzeW5jIHVwZGF0ZWQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBBIGhvb2sgaXMgdHJpZ2dlcmVkIGJlZm9yZSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxyXG4gICAqL1xyXG4gIGFzeW5jIGRlc3Ryb3llZCgpIHt9XHJcbn0iLCJpbXBvcnQge2ZpbmRDbG9zZXN0Tm9kZX0gZnJvbSBcIkAvdmlydHVhbC1ub2RlXCI7XHJcbmltcG9ydCB7ZGlmZlByb3BzLCBmaW5kQ2xvc2VzdERPTU5vZGUsIHJlc29sdmVDbGFzc05hbWUsIHJlc29sdmVTdHlsZX0gZnJvbSBcIkAvdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wTmFtZVxyXG4gKiBAcGFyYW0ge2FueX0gcHJvcFZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVBZGRpbmdQcm9wcyhub2RlLCBwcm9wTmFtZSwgcHJvcFZhbHVlKSB7XHJcbiAgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcclxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihwcm9wTmFtZS5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKSwgcHJvcFZhbHVlKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChwcm9wTmFtZSA9PT0gJ2NsYXNzJykge1xyXG4gICAgcHJvcFZhbHVlID0gcmVzb2x2ZUNsYXNzTmFtZShwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVTdHlsZShwcm9wVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbm9kZS5lbGVtZW50UmVmLnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcFZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmZ1bmN0aW9uIHJlc29sdmVFbGVtZW50QXR0cmlidXRlcyhub2RlKSB7XHJcbiAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG5vZGUucGVuZGluZ1Byb3BzKSkge1xyXG4gICAgaGFuZGxlQWRkaW5nUHJvcHMobm9kZSwga2V5LCB2YWx1ZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJvcE5hbWVcclxuICogQHBhcmFtIHthbnl9IHByb3BWYWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gaGFuZGxlVXBkYXRpbmdQcm9wcyhub2RlLCBwcm9wTmFtZSwgcHJvcFZhbHVlKSB7XHJcbiAgaWYgKHByb3BOYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcclxuICAgIGNvbnN0IGV2ZW50TmFtZSA9IHByb3BOYW1lLnN1YnN0cmluZygyKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbm9kZS5vbGRQcm9wc1tldmVudE5hbWVdKTtcclxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIHByb3BWYWx1ZSk7XHJcbiAgfSBlbHNlIGlmIChwcm9wTmFtZSA9PT0gJ2NsYXNzJykge1xyXG4gICAgcHJvcFZhbHVlID0gcmVzb2x2ZUNsYXNzTmFtZShwcm9wVmFsdWUpO1xyXG4gIH0gZWxzZSBpZiAocHJvcE5hbWUgPT09ICdzdHlsZScpIHtcclxuICAgIHByb3BWYWx1ZSA9IHJlc29sdmVTdHlsZShwcm9wVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICBub2RlLmVsZW1lbnRSZWYuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBwcm9wVmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IHJlbmRlck5vZGVcclxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BOYW1lXHJcbiAqIEBwYXJhbSB7YW55fSBwcm9wVmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVJlbW92aW5nUHJvcHMocmVuZGVyTm9kZSwgcHJvcE5hbWUsIHByb3BWYWx1ZSkge1xyXG4gIGlmIChwcm9wTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XHJcbiAgICByZW5kZXJOb2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIocHJvcE5hbWUuc3Vic3RyaW5nKDIpLnRvTG93ZXJDYXNlKCksIHByb3BWYWx1ZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlbmRlck5vZGUuZWxlbWVudFJlZi5yZW1vdmVBdHRyaWJ1dGUocHJvcE5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFVubW91bnQgdmlydHVhbCBub2RlIGFuZCBpdCdzIGNoaWxkcmVuLlxyXG4gKiBJZiB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBIVE1MIGVsZW1lbnQgaXQgd2lsbCByZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycyBhbmQgdGhlbiByZW1vdmUgSFRNTCBlbGVtZW50LlxyXG4gKiBJZiB2aXJ0dWFsIG5vZGUgcmVwcmVzZW50cyBhIGNvbXBvbmVudCBpbnN0YW5jZSBpdCB3aWxsIHRyaWdnZXIgaG9vayBmb3IgZGVzdHJveWluZyBjb21wb25lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Tm9kZShub2RlKSB7XHJcbiAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xyXG4gICAgdW5tb3VudE5vZGUoY2hpbGQpO1xyXG4gIH0pO1xyXG5cclxuICBpZiAobm9kZS5lbGVtZW50UmVmKSB7XHJcbiAgICBub2RlLmNsZWFuTGlzdGVuZXJzKCk7XHJcbiAgICBub2RlLmVsZW1lbnRSZWYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlLmVsZW1lbnRSZWYpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG5vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgbm9kZS5pbnN0YW5jZS5kZXN0cm95ZWQoKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIEhUTUwgZWxlbWVudCBvciB0ZXh0IG5vZGUgaW4gRE9NIHdpdGggaXRzIGFyZ3VtZW50cy5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KG5vZGUsIHBvc2l0aW9uKSB7XHJcbiAgaWYgKG5vZGUuaXNUeXBlKCdUZXh0JykpIHtcclxuICAgIG5vZGUuZWxlbWVudFJlZiA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5vZGUudGFnKTtcclxuICB9IGVsc2UgaWYgKG5vZGUuaXNUeXBlKCdFbGVtZW50JykpIHtcclxuICAgIGNvbnN0IGNsb3Nlc3RXaXRoTlMgPSBmaW5kQ2xvc2VzdE5vZGUobm9kZSwgJ1t4bWxuc10nKTtcclxuICAgIGNvbnN0IHhtbG5zID0gbm9kZS5wZW5kaW5nUHJvcHMueG1sbnMgPz8gY2xvc2VzdFdpdGhOUz8ucGVuZGluZ1Byb3BzLnhtbG5zID8/ICcnO1xyXG5cclxuICAgIGlmICh4bWxucykge1xyXG4gICAgICBub2RlLmVsZW1lbnRSZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoeG1sbnMsIG5vZGUudGFnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5vZGUuZWxlbWVudFJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZS50YWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVFbGVtZW50QXR0cmlidXRlcyhub2RlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmVudEVsID0gZmluZENsb3Nlc3RET01Ob2RlKG5vZGUpO1xyXG4gIGNvbnN0IGNoaWxkQXQgPSBwYXJlbnRFbC5jaGlsZHJlbltwb3NpdGlvbl07XHJcblxyXG4gIHBhcmVudEVsLmluc2VydEJlZm9yZShub2RlLmVsZW1lbnRSZWYsIGNoaWxkQXQpO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUVsZW1lbnQobm9kZSkge1xyXG4gIGNvbnN0IGRpZmZlZFByb3BzID0gZGlmZlByb3BzKG5vZGUub2xkUHJvcHMsIG5vZGUucGVuZGluZ1Byb3BzKTtcclxuXHJcbiAgZGlmZmVkUHJvcHMuZm9yRWFjaCgocHJvcCkgPT4ge1xyXG4gICAgaWYgKHByb3AudHlwZSA9PT0gJ1JlbW92ZScgKSB7XHJcbiAgICAgIGhhbmRsZVJlbW92aW5nUHJvcHMobm9kZSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcC50eXBlID09PSAnQWRkJyApIHtcclxuICAgICAgaGFuZGxlQWRkaW5nUHJvcHMobm9kZSwgcHJvcC5uYW1lLCBwcm9wLnZhbHVlKTtcclxuICAgIH0gZWxzZSBpZiAocHJvcC50eXBlID09PSAnVXBkYXRlJyApIHtcclxuICAgICAgaGFuZGxlVXBkYXRpbmdQcm9wcyhub2RlLCBwcm9wLm5hbWUsIHByb3AudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59IiwiaW1wb3J0IHtFbXB0eU9iamVjdCwgZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVufSBmcm9tIFwiQC91dGlsc1wiO1xyXG5pbXBvcnQge2J1aWxkVmlydHVhbFRyZWV9IGZyb20gXCJAL3ZpcnR1YWwtbm9kZVwiO1xyXG5cclxuLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZXxudWxsfSAqL1xyXG5sZXQgbGFzdE1vdW50ZWRWaXJ0dWFsTm9kZSA9IG51bGw7XHJcblxyXG4vKipcclxuICogQnVpbGQgYW5kIG1vdW50IHdob2xlIHN1YnRyZWUgb2YgdmlydHVhbCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5mdW5jdGlvbiBtb3VudFZpcnR1YWxTdWJ0cmVlKG5vZGUpIHtcclxuICBub2RlLmVmZmVjdCA9ICdQbGFjZW1lbnQnO1xyXG4gIGxhc3RNb3VudGVkVmlydHVhbE5vZGUgPSBub2RlO1xyXG5cclxuICBpZiAobm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICBub2RlLmNyZWF0ZUNvbXBvbmVudCgpO1xyXG5cclxuICAgIGxldCByZW5kZXJSZXN1bHQgPSBub2RlLmluc3RhbmNlLnJlbmRlcigpO1xyXG4gICAgcmVuZGVyUmVzdWx0ID0gZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuKHJlbmRlclJlc3VsdCk7XHJcbiAgICBsZXQgc3VidHJlZSA9IGJ1aWxkVmlydHVhbFRyZWUocmVuZGVyUmVzdWx0KVxyXG5cclxuICAgIGlmIChzdWJ0cmVlKSB7XHJcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoc3VidHJlZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgY2hpbGROb2RlLmVmZmVjdCA9ICdQbGFjZW1lbnQnO1xyXG4gICAgbW91bnRWaXJ0dWFsU3VidHJlZShjaGlsZE5vZGUpO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogQ29weSByZWZlcmVuY2VzIHN1Y2ggZWxlbWVudCByZWZlcmVuY2UsIHByb3BzIG9yIGNvbXBvbmVudCBpbnN0YW5jZS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gY3VycmVudE5vZGVcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbmV3Tm9kZVxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHJlY3Vyc2l2ZVxyXG4gKi9cclxuZnVuY3Rpb24gY29weU5vZGVSZWZlcmVuY2VzKGN1cnJlbnROb2RlLCBuZXdOb2RlLCByZWN1cnNpdmUgPSBmYWxzZSkge1xyXG4gIGlmIChjdXJyZW50Tm9kZS50YWcgPT09IG5ld05vZGUudGFnKSB7XHJcbiAgICBuZXdOb2RlLm9sZFByb3BzID0gY3VycmVudE5vZGUub2xkUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcbiAgICBuZXdOb2RlLmVsZW1lbnRSZWYgPSBjdXJyZW50Tm9kZS5lbGVtZW50UmVmID8/IG51bGw7XHJcblxyXG4gICAgaWYgKG5ld05vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgICBuZXdOb2RlLmluc3RhbmNlID0gY3VycmVudE5vZGUuaW5zdGFuY2U7XHJcbiAgICAgIG5ld05vZGUuaW5zdGFuY2UucHJvcHMgPSBuZXdOb2RlLnBlbmRpbmdQcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgICAgbmV3Tm9kZS5zdGF0ZSA9IGN1cnJlbnROb2RlLnN0YXRlO1xyXG4gICAgICBuZXdOb2RlLnN0YXRlQ2hhbmdlZCA9IGN1cnJlbnROb2RlLnN0YXRlQ2hhbmdlZDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocmVjdXJzaXZlKSB7XHJcbiAgICBuZXdOb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcclxuICAgICAgY29weU5vZGVSZWZlcmVuY2VzKGN1cnJlbnROb2RlLmNoaWxkcmVuW2luZGV4XSwgY2hpbGROb2RlLCByZWN1cnNpdmUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2tzIGlmIHBlbmRpbmcgcHJvcHMgYXJlIGRpZmZlcmVudCBmcm9tIG9sZCBwcm9wcy5cclxuICogSXQncyBzaGFsbG93IGNvbXBhcmlzb24gc28gb2JqZWN0LWxpa2UgcHJvcHMgYXJlIGNvbXBhcmVkIHRocm91Z2ggcmVmZXJlbmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IG9sZFByb3BzXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5Qcm9wc30gcGVuZGluZ1Byb3BzXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21wYXJlUHJvcHMob2xkUHJvcHMsIHBlbmRpbmdQcm9wcykge1xyXG4gIGlmICh0eXBlb2Ygb2xkUHJvcHMgIT09ICdvYmplY3QnIHx8IHR5cGVvZiBwZW5kaW5nUHJvcHMgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoT2JqZWN0LmtleXMob2xkUHJvcHMpLmxlbmd0aCAhPT0gT2JqZWN0LmtleXMocGVuZGluZ1Byb3BzKS5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuZW50cmllcyhwZW5kaW5nUHJvcHMpLmV2ZXJ5KChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IG9sZFByb3BzW2tleV07XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgdmlydHVhbCBub2RlIHNob3VsZCBiZSB1cGRhdGVkLlxyXG4gKiBWaXJ0dWFsIG5vZGUgc2hvdWxkIHVwZGF0ZSBpZiBub2RlJ3MgcHJvcHMgYXJlIGNoYW5nZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiBzaG91bGRVcGRhdGVOb2RlKG5vZGUpIHtcclxuICByZXR1cm4gIWNvbXBhcmVQcm9wcyhub2RlLm9sZFByb3BzLCBub2RlLnBlbmRpbmdQcm9wcyk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVcGRhdGVzIHZpcnR1YWwgbm9kZSBhbmQgaWYgaXQgaXMgY29tcG9uZW50IHRoZW4gdHJ5IHRvIGdldCBuZXcgcmVuZGVyIHJlc3VsdC5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlTm9kZShub2RlKSB7XHJcbiAgbm9kZS5lZmZlY3QgPSAnVXBkYXRlJztcclxuICBub2RlLnBlbmRpbmdVcGRhdGUgPSB0cnVlO1xyXG5cclxuICBpZiAoIW5vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IHJlbmRlclJlc3VsdCA9IG5vZGUuaW5zdGFuY2UucmVuZGVyKCk7XHJcbiAgcmVuZGVyUmVzdWx0ID0gZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuKHJlbmRlclJlc3VsdCk7XHJcbiAgY29uc3Qgc3VidHJlZSA9IGJ1aWxkVmlydHVhbFRyZWUocmVuZGVyUmVzdWx0KVxyXG5cclxuICBpZiAoc3VidHJlZSkge1xyXG4gICAgbm9kZS5lbXB0eSgpO1xyXG4gICAgbm9kZS5hcHBlbmRDaGlsZChzdWJ0cmVlKTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXVzZSBjdXJyZW50IHZpcnR1YWwgbm9kZSB3aXRoIGNoaWxkcmVuIG9mIG5ldyB2aXJ0dWFsIG5vZGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IGN1cnJlbnROb2RlXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICovXHJcbmZ1bmN0aW9uIHJldXNlTm9kZShjdXJyZW50Tm9kZSwgbmV3Tm9kZSkge1xyXG4gIGNvbnN0IGNsb25lZEN1cnJlbnROb2RlID0gY3VycmVudE5vZGUuY2xvbmUoKTtcclxuXHJcbiAgaWYgKG5ld05vZGUuaXNUeXBlKCdDb21wb25lbnQnKSkge1xyXG4gICAgbGV0IHJlbmRlclJlc3VsdCA9IG5ld05vZGUuaW5zdGFuY2UucmVuZGVyKCk7XHJcbiAgICByZW5kZXJSZXN1bHQgPSBmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4ocmVuZGVyUmVzdWx0KTtcclxuICAgIGNvbnN0IHN1YnRyZWUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdClcclxuXHJcbiAgICBpZiAoc3VidHJlZSkge1xyXG4gICAgICBuZXdOb2RlLmVtcHR5KCk7XHJcbiAgICAgIG5ld05vZGUuYXBwZW5kQ2hpbGQoc3VidHJlZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9uZWRDdXJyZW50Tm9kZS5wYXJlbnQgPSBuZXdOb2RlLnBhcmVudDtcclxuICBjbG9uZWRDdXJyZW50Tm9kZS5jaGlsZHJlbiA9IG5ld05vZGUuY2hpbGRyZW47XHJcblxyXG4gIG5ld05vZGUuY29weUZyb20oY2xvbmVkQ3VycmVudE5vZGUpO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgYSB2aXJ0dWFsIG5vZGUgYmFzZWQgb24gaXQncyBkZWZpbmVkIGtleS5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAqL1xyXG5mdW5jdGlvbiBmaW5kTm9kZVdpdGhLZXkobm9kZSwga2V5KSB7XHJcbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICBpZiAoY2hpbGQua2V5ID09PSBrZXkpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyBhIG1hdGNoaW5nIGNoaWxkIGluIGN1cnJlbnQgbm9kZSBiYXNlZCBvbiBwb3NpdGlvbiBvciBrZXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IGN1cnJlbnROb2RlXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld0NoaWxkTm9kZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cclxuICovXHJcbmZ1bmN0aW9uIGZpbmRNYXRjaGluZ0NoaWxkTm9kZShjdXJyZW50Tm9kZSwgbmV3Q2hpbGROb2RlLCBwb3NpdGlvbikge1xyXG4gIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV9ICovXHJcbiAgbGV0IGZvdW5kTm9kZSA9IG51bGxcclxuXHJcbiAgaWYgKCFjdXJyZW50Tm9kZSkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAobmV3Q2hpbGROb2RlLmtleSkge1xyXG4gICAgZm91bmROb2RlID0gZmluZE5vZGVXaXRoS2V5KGN1cnJlbnROb2RlLCBuZXdDaGlsZE5vZGUua2V5KTtcclxuICB9XHJcblxyXG4gIGlmIChmb3VuZE5vZGUpIHtcclxuICAgIHJldHVybiBmb3VuZE5vZGU7XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoIDw9IHBvc2l0aW9uKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjdXJyZW50Tm9kZS5jaGlsZHJlbltwb3NpdGlvbl07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTGFzdE1vdW50ZWROb2RlKCkge1xyXG4gIHJldHVybiBsYXN0TW91bnRlZFZpcnR1YWxOb2RlO1xyXG59XHJcblxyXG4vKipcclxuICogQ29tcGFyZXMgbm9kZXMgYXQgdGhlIHNhbWUgcG9zaXRpb24gaW4gdHdvIGRpZmZlcmVudCB0cmVlcyBhbmQgbWFya3MgZWZmZWN0c1xyXG4gKiB0aGF0IG5lZWRzIHRvIGJlIGxhdGVyIHByb2Nlc3NlZC5cclxuICpcclxuICogUG9zc2libGUgZWZmZWN0czpcclxuICogLSBQbGFjZW1lbnQgKG1hcmtlZCBmb3IgcGxhY2luZyBhcyBuZXcgRE9NIGVsZW1lbnQpXHJcbiAqIC0gVXBkYXRlIChtYXJrZWQgZm9yIHVwZGF0aW5nIHByb3BzIG9mIERPTSBlbGVtZW50KVxyXG4gKiAtIERlbGV0aW9uIChtYXJrZWQgZm9yIHJlbW92aW5nIERPTSBlbGVtZW50KVxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBjdXJyZW50Tm9kZVxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBuZXdOb2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVjb25jaWxlKGN1cnJlbnROb2RlLCBuZXdOb2RlKSB7XHJcbiAgaWYgKGN1cnJlbnROb2RlICYmIGN1cnJlbnROb2RlLnRhZyAhPT0gbmV3Tm9kZS50YWcpIHtcclxuICAgIGN1cnJlbnROb2RlLmVmZmVjdCA9ICdEZWxldGlvbic7XHJcbiAgICBtb3VudFZpcnR1YWxTdWJ0cmVlKG5ld05vZGUpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjdXJyZW50Tm9kZSkge1xyXG4gICAgbW91bnRWaXJ0dWFsU3VidHJlZShuZXdOb2RlKTtcclxuICAgIHJldHVybjtcclxuICB9IGVsc2UgaWYgKCFuZXdOb2RlLmlzVHlwZSgnUm9vdCcpKSB7XHJcbiAgICBjb3B5Tm9kZVJlZmVyZW5jZXMoY3VycmVudE5vZGUsIG5ld05vZGUpO1xyXG5cclxuICAgIGlmIChzaG91bGRVcGRhdGVOb2RlKG5ld05vZGUpKSB7XHJcbiAgICAgIHVwZGF0ZU5vZGUobmV3Tm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXVzZU5vZGUoY3VycmVudE5vZGUsIG5ld05vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvY2Vzc2VkQ2hpbGRyZW4gPSBbXTtcclxuICBuZXdOb2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG1hdGNoaW5nQ2hpbGQgPSBmaW5kTWF0Y2hpbmdDaGlsZE5vZGUoY3VycmVudE5vZGUsIGNoaWxkTm9kZSwgaW5kZXgpO1xyXG5cclxuICAgIHJlY29uY2lsZShtYXRjaGluZ0NoaWxkLCBjaGlsZE5vZGUpO1xyXG4gICAgcHJvY2Vzc2VkQ2hpbGRyZW4ucHVzaChtYXRjaGluZ0NoaWxkKTtcclxuICB9KTtcclxuXHJcbiAgY3VycmVudE5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGROb2RlLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKCFwcm9jZXNzZWRDaGlsZHJlbi5pbmNsdWRlcyhjaGlsZE5vZGUpKSB7XHJcbiAgICAgIGNoaWxkTm9kZS5lZmZlY3QgPSAnRGVsZXRpb24nO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKipcclxuICogVHJhdmVyc2UgdGhyb3VnaCBhbGwgdmlydHVhbCBub2RlcyBpbiB2aXJ0dWFsIHRyZWUgYW5kIHJlc29sdmUgZWZmZWN0cyB0aGF0IG5lZWRzIHRvIGJlIHByb2Nlc3NlZC5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gcG9zaXRpb25cclxuICogQHJldHVybnMge1NwYXJrSlMuRWZmZWN0W119XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMobm9kZSwgcG9zaXRpb24gPSAwKSB7XHJcbiAgLyoqIEB0eXBlIHtTcGFya0pTLkVmZmVjdFtdfSAqL1xyXG4gIGxldCBlZmZlY3RzID0gW107XHJcblxyXG4gIGlmICghbm9kZSkge1xyXG4gICAgcmV0dXJuIGVmZmVjdHM7XHJcbiAgfVxyXG5cclxuICBpZiAobm9kZS5lZmZlY3QgIT09ICcnKSB7XHJcbiAgICBlZmZlY3RzLnB1c2goe1xyXG4gICAgICB0eXBlOiBub2RlLmVmZmVjdCxcclxuICAgICAgcGFyZW50OiBub2RlLnBhcmVudCxcclxuICAgICAgbm9kZVJlZjogbm9kZSxcclxuICAgICAgcG9zaXRpb24sXHJcbiAgICB9KTtcclxuICAgIG5vZGUuZWZmZWN0ID0gJyc7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xyXG4gICAgZWZmZWN0cyA9IFtcclxuICAgICAgLi4uZWZmZWN0cyxcclxuICAgICAgLi4ucmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXMoY2hpbGQsIGluZGV4KSxcclxuICAgIF07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBlZmZlY3RzO1xyXG59XHJcblxyXG4vKipcclxuICogQ2xlYW5zIGFsbCBpbmRpY2F0b3JzIGFuZCBlZmZlY3RzIGZyb20gdmlydHVhbCB0cnVlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBub2RlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5Ob2Rlcyhub2RlKSB7XHJcbiAgbm9kZS5lZmZlY3QgPSAnJztcclxuICBub2RlLnN0YXRlQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICBpZiAoIWNvbXBhcmVQcm9wcyhub2RlLm9sZFByb3BzLCBub2RlLnBlbmRpbmdQcm9wcykpIHtcclxuICAgIG5vZGUub2xkUHJvcHMgPSBub2RlLnBlbmRpbmdQcm9wcztcclxuICB9XHJcblxyXG4gIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgIGNsZWFuTm9kZXMoY2hpbGQpO1xyXG4gIH0pO1xyXG59IiwiaW1wb3J0IHtidWlsZFZpcnR1YWxUcmVlUm9vdCwgZmluZE5vZGVCeUNvbXBvbmVudH0gZnJvbSBcIkAvdmlydHVhbC1ub2RlXCI7XHJcbmltcG9ydCB7Y2xlYW5Ob2RlcywgcmVjb25jaWxlLCByZXNvbHZlRWZmZWN0c0Zyb21Ob2RlcywgcmVzb2x2ZUxhc3RNb3VudGVkTm9kZX0gZnJvbSBcIkAvcmVjb25jaWxlclwiO1xyXG5pbXBvcnQge2NyZWF0ZUVsZW1lbnQsIHVubW91bnROb2RlLCB1cGRhdGVFbGVtZW50fSBmcm9tIFwiQC9kb21cIjtcclxuXHJcbi8qKlxyXG4gKiBDaGVja3MgaWYgY29tcG9uZW50IG5vZGVzIGFyZSByZWFkeSB0byB0cmlnZ2VyIGhvb2tzIGZvciBtb3VudGluZyBvciB1cGRhdGluZy5cclxuICogV2hpY2ggaG9vayB0byB0cmlnZ2VyIGRlcGVuZHMgb24gZ2l2ZW4gYWN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlW119IGNvbXBvbmVudE5vZGVzXHJcbiAqIEBwYXJhbSB7J21vdW50J3wndXBkYXRlJ31hY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnROb2Rlcyhjb21wb25lbnROb2RlcywgYWN0aW9uID0gJ21vdW50Jykge1xyXG4gIGlmICghWydtb3VudCcsICd1cGRhdGUnXS5pbmNsdWRlcyhhY3Rpb24pKSB7XHJcbiAgICBhY3Rpb24gPSAnbW91bnQnO1xyXG4gIH1cclxuXHJcbiAgd2hpbGUgKGNvbXBvbmVudE5vZGVzLmxlbmd0aCA+IDApIHtcclxuICAgIGlmIChhY3Rpb24gPT09ICdtb3VudCcgJiYgIWNvbXBvbmVudE5vZGVzWzBdLmFsbENoaWxkcmVuTW91bnRlZCgpKSB7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09ICd1cGRhdGUnICYmICFjb21wb25lbnROb2Rlc1swXS5hbGxDaGlsZHJlblVwZGF0ZWQoKSkge1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYWN0aW9uID09PSAnbW91bnQnKSB7XHJcbiAgICAgIGNvbXBvbmVudE5vZGVzWzBdLm1vdW50ZWQgPSB0cnVlO1xyXG4gICAgICBjb21wb25lbnROb2Rlc1swXS5pbnN0YW5jZS5tb3VudGVkKCk7XHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3VwZGF0ZScpIHtcclxuICAgICAgY29tcG9uZW50Tm9kZXNbMF0uaW5zdGFuY2UudXBkYXRlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudE5vZGVzLnNoaWZ0KCk7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBlZmZlY3QgZm9yIHBsYWNpbmcgYSBuZXcgSFRNTCBlbGVtZW50IG9yIHRleHQgbm9kZS5cclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLkVmZmVjdH0gZWZmZWN0XHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGVbXX0gY29tcG9uZW50Tm9kZXNcclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZVBsYWNlbWVudChlZmZlY3QsIGNvbXBvbmVudE5vZGVzKSB7XHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIGNvbXBvbmVudE5vZGVzLnVuc2hpZnQoZWZmZWN0Lm5vZGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnRWxlbWVudCcpIHx8IGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnVGV4dCcpKSB7XHJcbiAgICBjcmVhdGVFbGVtZW50KGVmZmVjdC5ub2RlUmVmLCBlZmZlY3QucG9zaXRpb24pO1xyXG5cclxuICAgIGlmIChlZmZlY3Qubm9kZVJlZi5yZWYpIHtcclxuICAgICAgZWZmZWN0Lm5vZGVSZWYucmVmLmN1cnJlbnQgPSBlZmZlY3Qubm9kZVJlZi5lbGVtZW50UmVmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0NvbXBvbmVudE5vZGVzKGNvbXBvbmVudE5vZGVzLCAnbW91bnQnKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgZWZmZWN0IGZvciB1cGRhdGluZyBleGlzdGluZyBIVE1MIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5FZmZlY3R9IGVmZmVjdFxyXG4gKiBAcGFyYW0ge1ZpcnR1YWxOb2RlW119IGNvbXBvbmVudE5vZGVzXHJcbiAqL1xyXG5mdW5jdGlvbiBoYW5kbGVVcGRhdGUoZWZmZWN0LCBjb21wb25lbnROb2Rlcykge1xyXG4gIGVmZmVjdC5ub2RlUmVmLnBlbmRpbmdVcGRhdGUgPSBmYWxzZTtcclxuXHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnQ29tcG9uZW50JykpIHtcclxuICAgIGNvbXBvbmVudE5vZGVzLnVuc2hpZnQoZWZmZWN0Lm5vZGVSZWYpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVmZmVjdC5ub2RlUmVmLmlzVHlwZSgnRWxlbWVudCcpKSB7XHJcbiAgICB1cGRhdGVFbGVtZW50KGVmZmVjdC5ub2RlUmVmKTtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NDb21wb25lbnROb2Rlcyhjb21wb25lbnROb2RlcywgJ3VwZGF0ZScpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bhcmsge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgLyoqIEB0eXBlIHtIVE1MRWxlbWVudH0gKi9cclxuICAgIHRoaXMuX3Jvb3RFbCA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuUmVuZGVyQ2FsbGJhY2t9ICovXHJcbiAgICB0aGlzLl9yb290RnVuYyA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gICAgdGhpcy5fdmlydHVhbFRyZWUgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIEpTWCBzdHJ1Y3R1cmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geygpID0+IFNwYXJrSlMuUmVuZGVyUmVzdWx0fSByb290Rm5cclxuICAgKi9cclxuICBzZXRSb290RnVuY3Rpb24ocm9vdEZuKSB7XHJcbiAgICB0aGlzLl9yb290RnVuYyA9IHJvb3RGbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdW50cyBhcHBsaWNhdGlvbiB0byBIVE1MIGVsZW1lbnQgYW5kIHRyaWdnZXIgcmVuZGVyLlxyXG4gICAqIEl0IHRocm93cyBlcnJvciBpZiByb290IGVsZW1lbnQgaXNuJ3QgZm91bmQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gbW91bnRFbFxyXG4gICAqL1xyXG4gIG1vdW50KG1vdW50RWwpIHtcclxuICAgIGlmICh0eXBlb2YgbW91bnRFbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5fcm9vdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihtb3VudEVsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3Jvb3RFbCA9IG1vdW50RWw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCEodGhpcy5fcm9vdEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSByb290IGVsZW1lbnQnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKCF0aGlzLl9yb290RWwpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIHJvb3QgZWxlbWVudCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbmRlclJlc3VsdCA9IHRoaXMuX3Jvb3RGdW5jKCk7XHJcbiAgICBjb25zdCBuZXdWaXJ0dWFsVHJlZSA9IGJ1aWxkVmlydHVhbFRyZWVSb290KHJlbmRlclJlc3VsdCk7XHJcblxyXG4gICAgcmVjb25jaWxlKHRoaXMuX3ZpcnR1YWxUcmVlLCBuZXdWaXJ0dWFsVHJlZSk7XHJcblxyXG4gICAgY29uc3QgZGVsZXRpb25zID0gcmVzb2x2ZUVmZmVjdHNGcm9tTm9kZXModGhpcy5fdmlydHVhbFRyZWUpO1xyXG4gICAgY29uc3QgbmV3Q2hhbmdlcyA9IHJlc29sdmVFZmZlY3RzRnJvbU5vZGVzKG5ld1ZpcnR1YWxUcmVlKTtcclxuXHJcbiAgICBkZWxldGlvbnMuZm9yRWFjaCgoZWZmZWN0KSA9PiB7XHJcbiAgICAgIGlmIChlZmZlY3QudHlwZSA9PT0gJ0RlbGV0aW9uJykge1xyXG4gICAgICAgIHVubW91bnROb2RlKGVmZmVjdC5ub2RlUmVmKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fdmlydHVhbFRyZWUgPSBuZXdWaXJ0dWFsVHJlZTtcclxuICAgIHRoaXMuX3ZpcnR1YWxUcmVlLmVsZW1lbnRSZWYgPSB0aGlzLl9yb290RWw7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtWaXJ0dWFsTm9kZVtdfSAqL1xyXG4gICAgY29uc3QgbW91bnRlZENvbXBvbmVudE5vZGVzID0gW107XHJcbiAgICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlW119ICovXHJcbiAgICBjb25zdCB1cGRhdGVkQ29tcG9uZW50Tm9kZXMgPSBbXTtcclxuICAgIGNvbnNvbGUubG9nKG5ld0NoYW5nZXMpO1xyXG4gICAgbmV3Q2hhbmdlcy5mb3JFYWNoKChlZmZlY3QpID0+IHtcclxuICAgICAgaWYgKGVmZmVjdC50eXBlID09PSAnUGxhY2VtZW50Jykge1xyXG4gICAgICAgIGhhbmRsZVBsYWNlbWVudChlZmZlY3QsIG1vdW50ZWRDb21wb25lbnROb2Rlcyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZWZmZWN0LnR5cGUgPT09ICdVcGRhdGUnKSB7XHJcbiAgICAgICAgaGFuZGxlVXBkYXRlKGVmZmVjdCwgdXBkYXRlZENvbXBvbmVudE5vZGVzKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgY2xlYW5Ob2Rlcyh0aGlzLl92aXJ0dWFsVHJlZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICAgKi9cclxuICBvblN0YXRlQ2hhbmdlZChjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IGZvdW5kTm9kZSA9IGZpbmROb2RlQnlDb21wb25lbnQodGhpcy5fdmlydHVhbFRyZWUsIGNvbXBvbmVudCk7XHJcblxyXG4gICAgaWYgKCFmb3VuZE5vZGUpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdTa2lwcGluZyByZW5kZXIuIEEgcmVuZGVyIG5vZGUgbm90IGZvdW5kIGZvciBjb21wb25lbnQ6ICcgKyBjb21wb25lbnQuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXF1ZXN0IHRvIHJlLXJlbmRlciBhcHBsaWNhdGlvbi5cclxuICAgIGZvdW5kTm9kZS5zdGF0ZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgZm91bmROb2RlLnN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWYodmFsdWUpIHtcclxuICBjb25zdCBsYXN0TW91bnRlZE5vZGUgPSByZXNvbHZlTGFzdE1vdW50ZWROb2RlKCk7XHJcblxyXG4gIGlmICghbGFzdE1vdW50ZWROb2RlKSB7XHJcbiAgICBjb25zb2xlLndhcm4oJ1NraXBwaW5nIGNyZWF0ZVJlZi4gTGFzdCBtb3VudGVkIHZpcnR1YWwgbm9kZSBub3QgZm91bmQuIENhdXNlOiBwcm9iYWJseSBjYWxsaW5nIGNyZWF0ZVJlZiBvdXRzaWRlIG9mIGNvbnN0cnVjdG9yLicpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVmID0ge1xyXG4gICAgY3VycmVudDogdmFsdWVcclxuICB9XHJcblxyXG4gIGxhc3RNb3VudGVkTm9kZS5yZWZzLnB1c2gocmVmKTtcclxuICByZXR1cm4gcmVmO1xyXG59IiwiZXhwb3J0IGNvbnN0IEVtcHR5T2JqZWN0ID0ge307XHJcblxyXG4vKipcclxuICogRmxhdHRlbiBjaGlsZHJlbiBvZiByZW5kZXIgcmVzdWx0IGlmIGFueSBvZiB0aGVtIGlzIHR5cGUgb2YgYXJyYXkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3BhcmtKUy5SZW5kZXJSZXN1bHR9IHJlbmRlclJlc3VsdFxyXG4gKiBAcmV0dXJucyB7U3BhcmtKUy5SZW5kZXJSZXN1bHR9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlblJlbmRlclJlc3VsdENoaWxkcmVuKHJlbmRlclJlc3VsdCkge1xyXG4gIGlmICh0eXBlb2YgcmVuZGVyUmVzdWx0ID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIHJlbmRlclJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8qKiBAdHlwZSB7UmVuZGVyUmVzdWx0W119ICovXHJcbiAgbGV0IGNoaWxkcmVuID0gW107XHJcbiAgcmVuZGVyUmVzdWx0LmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xyXG4gICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkcmVuID0gW1xyXG4gICAgICAuLi5jaGlsZHJlbixcclxuICAgICAgLi4uY2hpbGQsXHJcbiAgICBdO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgLi4ucmVuZGVyUmVzdWx0LFxyXG4gICAgY2hpbGRyZW4sXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUNsYXNzTmFtZSh2YWx1ZSkge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIGxldCBjbGFzc1Rva2VucyA9ICFBcnJheS5pc0FycmF5KHZhbHVlKSA/IE9iamVjdC5rZXlzKHZhbHVlKS5maWx0ZXIoKGNsYXNzTmFtZSkgPT4ge1xyXG4gICAgcmV0dXJuIHZhbHVlW2NsYXNzTmFtZV07XHJcbiAgfSkgOiB2YWx1ZTtcclxuXHJcbiAgY2xhc3NUb2tlbnMgPSBjbGFzc1Rva2Vucy5maWx0ZXIoKGNsYXNzTmFtZSwgaW5kZXgsIHRva2VucykgPT4ge1xyXG4gICAgcmV0dXJuIHRva2Vucy5pbmRleE9mKGNsYXNzTmFtZSkgPT09IGluZGV4O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY2xhc3NUb2tlbnMuam9pbignICcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVN0eWxlKHZhbHVlKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0eWxlIGNhbm5vdCBiZSB1c2UgYXMgYXJyYXkhJyk7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmVudHJpZXModmFsdWUpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICBpZiAoL15bYS16XSpbQS1aXS8udGVzdChrZXkpKSB7XHJcbiAgICAgIGNvbnN0IGtleVRva2VucyA9IGtleS5zcGxpdCgvKD89W0EtWl0pLykubWFwKCh0b2tlbikgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2tlbi50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGtleSA9IGtleVRva2Vucy5qb2luKCctJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGAke2tleX06ICR7dmFsdWV9YDtcclxuICB9KS5qb2luKCc7ICcpO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtTcGFya0pTLlByb3BzfSBvbGRQcm9wc1xyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUHJvcHN9IHBlbmRpbmdQcm9wc1xyXG4gKiBAcmV0dXJucyB7U3BhcmtKUy5Qcm9wc0RpZmZbXX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWZmUHJvcHMob2xkUHJvcHMsIHBlbmRpbmdQcm9wcykge1xyXG4gIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc0RpZmZbXX0gKi9cclxuICBjb25zdCBwcm9wRGlmZnMgPSBbXTtcclxuXHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocGVuZGluZ1Byb3BzKSkge1xyXG4gICAgaWYgKG9sZFByb3BzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBvbGRQcm9wc1trZXldID09PSBudWxsKSB7XHJcbiAgICAgIHByb3BEaWZmcy5wdXNoKHsgdHlwZTogJ0FkZCcsIG5hbWU6IGtleSwgdmFsdWUgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBvbGRQcm9wc1trZXldKSB7XHJcbiAgICAgIHByb3BEaWZmcy5wdXNoKHsgdHlwZTogJ1VwZGF0ZScsIG5hbWU6IGtleSwgdmFsdWUsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2xkUHJvcHMpKSB7XHJcbiAgICBpZiAocGVuZGluZ1Byb3BzW2tleV0gPT09IHVuZGVmaW5lZCB8fCBwZW5kaW5nUHJvcHNba2V5XSA9PT0gbnVsbCkge1xyXG4gICAgICBwcm9wRGlmZnMucHVzaCh7IHR5cGU6ICdSZW1vdmUnLCBuYW1lOiBrZXksIHZhbHVlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb3BEaWZmcztcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdERPTU5vZGUobm9kZSkge1xyXG4gIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gIHdoaWxlIChjdXJyZW50Tm9kZSAmJiBjdXJyZW50Tm9kZS5wYXJlbnQpIHtcclxuICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQuZWxlbWVudFJlZikge1xyXG4gICAgICByZXR1cm4gY3VycmVudE5vZGUucGFyZW50LmVsZW1lbnRSZWY7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufSIsImltcG9ydCB7RW1wdHlPYmplY3R9IGZyb20gXCJAL3V0aWxzXCI7XHJcbmltcG9ydCBodG1sVGFncyBmcm9tIFwiaHRtbC10YWdzXCI7XHJcbmltcG9ydCBzdmdUYWdzIGZyb20gXCJzdmctdGFnc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlydHVhbE5vZGUge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVzIHZpcnR1YWwgbm9kZSB3aXRoIHR5cGUsIHRhZyBhbmQgcHJvcGVydGllcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVHlwZX0gdHlwZVxyXG4gICAqIEBwYXJhbSB7U3BhcmtKUy5Ob2RlVGFnfSB0YWdcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuTm9kZVByb3BzfSBwcm9wc1xyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHR5cGUsIHRhZywgcHJvcHMgPSB7fSkge1xyXG4gICAgY29uc3QgeyBrZXksIHJlZiwgLi4ub3RoZXJQcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd8dW5kZWZpbmVkfSAqL1xyXG4gICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy50YWcgPSB0YWc7XHJcblxyXG4gICAgLy8gUmVmZXJlbmNlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMub2xkUHJvcHMgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5Qcm9wc30gKi9cclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gb3RoZXJQcm9wcyA/PyBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gKi9cclxuICAgIHRoaXMuc3RhdGUgPSBFbXB0eU9iamVjdDtcclxuICAgIC8qKiBAdHlwZSB7U3BhcmtKUy5SZWZPYmplY3RbXX0gKi9cclxuICAgIHRoaXMucmVmcyA9IFtdO1xyXG4gICAgLyoqIEB0eXBlIHtTcGFya0pTLlJlZk9iamVjdHxudWxsfSAqL1xyXG4gICAgdGhpcy5yZWYgPSByZWY7XHJcbiAgICAvKiogQHR5cGUge0NvbXBvbmVudHxudWxsfSAqL1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvKiogQHR5cGUge0hUTUxFbGVtZW50fG51bGx9ICovXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYgPSBudWxsO1xyXG4gICAgLyoqIEB0eXBlIHtSZWNvcmQ8c3RyaW5nLCBTcGFya0pTLkV2ZW50TGlzdGVuZXJbXT59ICovXHJcbiAgICB0aGlzLmxpc3RlbmVycyA9IEVtcHR5T2JqZWN0O1xyXG5cclxuICAgIC8vIEluZGljYXRvciBwcm9wZXJ0aWVzXHJcbiAgICAvKiogQHR5cGUge1NwYXJrSlMuRWZmZWN0VHlwZX0gKi9cclxuICAgIHRoaXMuZWZmZWN0ID0gJyc7XHJcbiAgICAvKiogQHR5cGUge2Jvb2xlYW59ICovXHJcbiAgICB0aGlzLm1vdW50ZWQgPSBmYWxzZTtcclxuICAgIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IGZhbHNlO1xyXG4gICAgLyoqIEB0eXBlIHtib29sZWFufSAqL1xyXG4gICAgdGhpcy5zdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGV8bnVsbH0gKi9cclxuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcclxuICAgIC8qKiBAdHlwZSB7VmlydHVhbE5vZGVbXX0gKi9cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB2aXJ0dWFsIG5vZGUgaXMgb2YgY2VydGFpbiB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTcGFya0pTLk5vZGVUeXBlfSB0eXBlXHJcbiAgICovXHJcbiAgaXNUeXBlKHR5cGUpIHtcclxuICAgIHJldHVybiB0aGlzLnR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgYWxsIGNoaWxkcmVuIHdlcmUgbW91bnRlZCBpbnRvIERPTS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIGFsbENoaWxkcmVuTW91bnRlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLnJlZHVjZSgoY291bnQsIGNoaWxkTm9kZSkgPT4ge1xyXG4gICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoY2hpbGROb2RlLmlzVHlwZSgnRWxlbWVudCcpIHx8IGNoaWxkTm9kZS5pc1R5cGUoJ1RleHQnKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IGNoaWxkTm9kZS5lbGVtZW50UmVmICE9PSBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoaWxkTm9kZS5pc1R5cGUoJ0NvbXBvbmVudCcpKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gY2hpbGROb2RlLm1vdW50ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb3VudCArIChyZXN1bHQgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuTW91bnRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFsbCBjaGlsZHJlbiB3ZXJlIHVwZGF0ZWQgaW4gRE9NLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgYWxsQ2hpbGRyZW5VcGRhdGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hpbGRyZW4ucmVkdWNlKChjb3VudCwgY2hpbGROb2RlKSA9PiB7XHJcbiAgICAgIHJldHVybiBjb3VudCArICghY2hpbGROb2RlLnBlbmRpbmdVcGRhdGUgJiYgY2hpbGROb2RlLmFsbENoaWxkcmVuVXBkYXRlZCgpID8gMSA6IDApO1xyXG4gICAgfSwgMCkgPT09IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIEhUTUwgZWxlbWVudCBhbmQgc3RvcmUgaXQncyByZWZlcmVuY2UgaW50byBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICBhZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuZWxlbWVudFJlZikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmxpc3RlbmVyc1t0eXBlXSkge1xyXG4gICAgICB0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWxlbWVudFJlZi5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgIHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lciBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcGFyYW0ge1NwYXJrSlMuRXZlbnRMaXN0ZW5lcn0gbGlzdGVuZXJcclxuICAgKi9cclxuICByZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XHJcbiAgICAvKiogQHR5cGUge0V2ZW50TGlzdGVuZXJbXX0gKi9cclxuICAgIGNvbnN0IGxpc3RlbmVyc1dpdGhUeXBlID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0gPz8gW107XHJcblxyXG4gICAgaWYgKGxpc3RlbmVyc1dpdGhUeXBlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGZvdW5kTGlzdGVuZXJJbmRleCA9IC0xO1xyXG4gICAgY29uc3QgZm91bmRMaXN0ZW5lciA9IGxpc3RlbmVyc1dpdGhUeXBlLmZpbmQoKGFub3RoZXJMaXN0ZW5lciwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGFub3RoZXJMaXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcclxuICAgICAgICBmb3VuZExpc3RlbmVySW5kZXggPSBpbmRleDtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFmb3VuZExpc3RlbmVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gZXZlbnQgbGlzdGVuZXIgZm9yICR7dHlwZX0gb24gbm9kZSAke3RoaXMudGFnfSBub3QgZm91bmQuIENhdXNlOiBldmVudCBsaXN0ZW5lciBwcm9iYWJseSB3YXNuJ3QgYm91bmQgaW4gY29uc3RydWN0b3IuYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lbGVtZW50UmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpO1xyXG4gICAgbGlzdGVuZXJzV2l0aFR5cGUuc3BsaWNlKGZvdW5kTGlzdGVuZXJJbmRleCwgMSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhbnMgYWxsIGxpc3RlbmVycyBmcm9tIEhUTUwgZWxlbWVudCBhbmQgZnJvbSBsaXN0ZW5lcnMgb2YgdmlydHVhbCBub2RlLlxyXG4gICAqL1xyXG4gIGNsZWFuTGlzdGVuZXJzKCkge1xyXG4gICAgZm9yIChjb25zdCBbdHlwZSwgbGlzdGVuZXJzXSBvZiBPYmplY3QuZW50cmllcyh0aGlzLmxpc3RlbmVycykpIHtcclxuICAgICAgaWYgKCF0aGlzLmVsZW1lbnRSZWYpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBFbXB0eU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgY29tcG9uZW50IGFuZCBjb3B5IGl0J3Mgc3RhdGUgaW50byB2aXJ0dWFsIG9kZSdzIHN0YXRlLlxyXG4gICAqL1xyXG4gIGNyZWF0ZUNvbXBvbmVudCgpIHtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgdGhpcy50YWcodGhpcy5wZW5kaW5nUHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5zdGFuY2Uuc3RhdGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBcHBlbmRzIGEgY2hpbGQgbm9kZSBpbnRvIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICBhcHBlbmRDaGlsZChub2RlKSB7XHJcbiAgICBub2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2gobm9kZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlcyBhIGNoaWxkIG5vZGUgaW4gY3VycmVudCBub2RlIHdpdGggYSBuZXcgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5ld05vZGVcclxuICAgKiBAcGFyYW0ge1ZpcnR1YWxOb2RlfSBvbGROb2RlXHJcbiAgICovXHJcbiAgcmVwbGFjZUNoaWxkKG5ld05vZGUsIG9sZE5vZGUpIHtcclxuICAgIGNvbnN0IGluZGV4T2YgPSB0aGlzLmNoaWxkcmVuLmluZGV4T2Yob2xkTm9kZSk7XHJcblxyXG4gICAgaWYgKGluZGV4T2YgPj0gMCkge1xyXG4gICAgICBuZXdOb2RlLnBhcmVudCA9IHRoaXM7XHJcbiAgICAgIHRoaXMuY2hpbGRyZW5baW5kZXhPZl0ucGFyZW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5jaGlsZHJlbltpbmRleE9mXSA9IG5ld05vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgY2hpbGQgbm9kZSBmcm9tIGN1cnJlbnQgbm9kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICAgKi9cclxuICByZW1vdmVDaGlsZChub2RlKSB7XHJcbiAgICBjb25zdCBpbmRleE9mID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKG5vZGUpO1xyXG5cclxuICAgIGlmIChpbmRleE9mID49IDApIHtcclxuICAgICAgbm9kZS5wYXJlbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleE9mLCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGNoaWxkcmVuIGZyb20gY3VycmVudCBub2RlLlxyXG4gICAqL1xyXG4gIGVtcHR5KCkge1xyXG4gICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKChub2RlKSA9PiB7XHJcbiAgICAgIG5vZGUucGFyZW50ID0gbnVsbDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhbm90aGVyIGluc3RhbmNlIHdpdGggc2FtZSBwcm9wZXJ0aWVzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1ZpcnR1YWxOb2RlfVxyXG4gICAqL1xyXG4gIGNsb25lKCkge1xyXG4gICAgY29uc3QgY2xvbmVkID0gbmV3IFZpcnR1YWxOb2RlKHRoaXMudHlwZSwgdGhpcy50YWcsIHtcclxuICAgICAga2V5OiB0aGlzLmtleSxcclxuICAgICAgLi4udGhpcy5wZW5kaW5nUHJvcHNcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICBjbG9uZWQub2xkUHJvcHMgPSB0aGlzLm9sZFByb3BzO1xyXG4gICAgY2xvbmVkLnBlbmRpbmdQcm9wcyA9IHRoaXMucGVuZGluZ1Byb3BzO1xyXG4gICAgY2xvbmVkLnN0YXRlID0gdGhpcy5zdGF0ZTtcclxuICAgIGNsb25lZC5pbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2U7XHJcbiAgICBjbG9uZWQuZWxlbWVudFJlZiA9IHRoaXMuZWxlbWVudFJlZjtcclxuICAgIGNsb25lZC5saXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgY2xvbmVkLmVmZmVjdCA9IHRoaXMuZWZmZWN0O1xyXG4gICAgY2xvbmVkLm1vdW50ZWQgPSB0aGlzLm1vdW50ZWQ7XHJcbiAgICBjbG9uZWQucGVuZGluZ1VwZGF0ZSA9IHRoaXMucGVuZGluZ1VwZGF0ZTtcclxuICAgIGNsb25lZC5zdGF0ZUNoYW5nZWQgPSB0aGlzLnN0YXRlQ2hhbmdlZDtcclxuXHJcbiAgICAvLyBOb2RlIHByb3BlcnRpZXNcclxuICAgIGNsb25lZC5wYXJlbnQgPSB0aGlzLnBhcmVudDtcclxuICAgIGNsb25lZC5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XHJcblxyXG4gICAgcmV0dXJuIGNsb25lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgYWxsIGRhdGEgZnJvbSBzb3VyY2UgdmlydHVhbCBub2RlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gc291cmNlTm9kZVxyXG4gICAqL1xyXG4gIGNvcHlGcm9tKHNvdXJjZU5vZGUpIHtcclxuICAgIHRoaXMua2V5ID0gc291cmNlTm9kZS5rZXk7XHJcbiAgICB0aGlzLnR5cGUgPSBzb3VyY2VOb2RlLnR5cGU7XHJcbiAgICB0aGlzLnRhZyA9IHNvdXJjZU5vZGUudGFnO1xyXG5cclxuICAgIC8vIFJlZmVyZW5jZSBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLm9sZFByb3BzID0gc291cmNlTm9kZS5vbGRQcm9wcztcclxuICAgIHRoaXMucGVuZGluZ1Byb3BzID0gc291cmNlTm9kZS5wZW5kaW5nUHJvcHM7XHJcbiAgICB0aGlzLnN0YXRlID0gc291cmNlTm9kZS5zdGF0ZTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBzb3VyY2VOb2RlLmluc3RhbmNlO1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gc291cmNlTm9kZS5lbGVtZW50UmVmO1xyXG4gICAgdGhpcy5saXN0ZW5lcnMgPSBzb3VyY2VOb2RlLmxpc3RlbmVycztcclxuXHJcbiAgICAvLyBJbmRpY2F0b3IgcHJvcGVydGllc1xyXG4gICAgdGhpcy5lZmZlY3QgPSBzb3VyY2VOb2RlLmVmZmVjdDtcclxuICAgIHRoaXMubW91bnRlZCA9IHNvdXJjZU5vZGUubW91bnRlZDtcclxuICAgIHRoaXMucGVuZGluZ1VwZGF0ZSA9IHNvdXJjZU5vZGUucGVuZGluZ1VwZGF0ZTtcclxuICAgIHRoaXMuc3RhdGVDaGFuZ2VkID0gc291cmNlTm9kZS5zdGF0ZUNoYW5nZWQ7XHJcblxyXG4gICAgLy8gTm9kZSBwcm9wZXJ0aWVzXHJcbiAgICB0aGlzLnBhcmVudCA9IHNvdXJjZU5vZGUucGFyZW50O1xyXG4gICAgdGhpcy5jaGlsZHJlbiA9IHNvdXJjZU5vZGUuY2hpbGRyZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtKU1hbXX0ganN4QXJyYXlcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrS2V5c0luSnN4QXJyYXkoanN4QXJyYXkpIHtcclxuICBjb25zdCB1c2VkS2V5cyA9IFtdO1xyXG5cclxuICByZXR1cm4ganN4QXJyYXkuZXZlcnkoKGl0ZW0pID0+IHtcclxuICAgIGlmICghaXRlbS5hdHRyaWJ1dGVzIHx8ICFpdGVtLmF0dHJpYnV0ZXMua2V5IHx8IHVzZWRLZXlzLmluY2x1ZGVzKGl0ZW0uYXR0cmlidXRlcy5rZXkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VkS2V5cy5wdXNoKGl0ZW0uYXR0cmlidXRlcy5rZXkpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZXxudWxsfSBwYXJlbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCwgcGFyZW50ID0gbnVsbCkge1xyXG4gIGxldCB7XHJcbiAgICBlbGVtZW50TmFtZSA9IHJlbmRlclJlc3VsdCA/PyAnJyxcclxuICAgIGF0dHJpYnV0ZXMgPSB7fSxcclxuICAgIGNoaWxkcmVuID0gW11cclxuICB9ID0gcmVuZGVyUmVzdWx0ID8/IHt9O1xyXG5cclxuICAvKiogQHR5cGUge1ZpcnR1YWxOb2RlfSAqL1xyXG4gIGxldCBub2RlO1xyXG5cclxuICBpZiAodHlwZW9mIGVsZW1lbnROYW1lID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBub2RlID0gbmV3IFZpcnR1YWxOb2RlKCdDb21wb25lbnQnLCBlbGVtZW50TmFtZSwgeyBjaGlsZHJlbiwgLi4uYXR0cmlidXRlcyB9KTtcclxuICAgIGNoaWxkcmVuID0gW107XHJcbiAgfSBlbHNlIGlmIChbLi4uaHRtbFRhZ3NdLmluY2x1ZGVzKGVsZW1lbnROYW1lKSB8fCBbLi4uc3ZnVGFnc10uaW5jbHVkZXMoZWxlbWVudE5hbWUpKSB7IC8vIFRPRE86IGFkZCBzdXBwb3J0IGZvciBTVkcgZWxlbWVudHNcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ0VsZW1lbnQnLCBlbGVtZW50TmFtZSwgYXR0cmlidXRlcyk7XHJcbiAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudE5hbWUgPT09ICdvYmplY3QnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBjYW5ub3QgYmUgcmVuZGVyZWQgYXMgSlNYIG5vZGUhJyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5vZGUgPSBuZXcgVmlydHVhbE5vZGUoJ1RleHQnLCBlbGVtZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBpZiAocGFyZW50KSB7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNoaWxkcmVuKSB7XHJcbiAgICBjaGlsZHJlbiA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZE5vZGUgPT4ge1xyXG4gICAgaWYgKCFjaGlsZE5vZGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgaWYgKCFjaGVja0tleXNJbkpzeEFycmF5KGNoaWxkTm9kZSkpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYER5bmFtaWNhbGx5IG1hcHBlZCBub2RlcyBpbiBsb29wIG11c3QgaGF2ZSB1bmlxdWUga2V5cyBzcGVjaWZpZWQgaW4gXCJrZXlcIiBwcm9wLmApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjaGlsZE5vZGUuZm9yRWFjaChhbm90aGVyQ2hpbGROb2RlID0+IHtcclxuICAgICAgICBidWlsZFZpcnR1YWxUcmVlKGFub3RoZXJDaGlsZE5vZGUsIG5vZGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ1aWxkVmlydHVhbFRyZWUoY2hpbGROb2RlLCBub2RlKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaW5kcyBjbG9zZXN0IHBhcmVudCBiYXNlZCBvbiBzZWxlY3Rvci5cclxuICpcclxuICogQHBhcmFtIHtWaXJ0dWFsTm9kZX0gbm9kZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdE5vZGUobm9kZSwgc2VsZWN0b3IpIHtcclxuICBpZiAoIXNlbGVjdG9yKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0Egc2VsZWN0b3IgY2FuXFwndCBiZSBlbXB0eSBzdHJpbmcnKTtcclxuICB9XHJcblxyXG4gIGxldCBjdXJyZW50Tm9kZSA9IG5vZGU7XHJcblxyXG4gIHdoaWxlIChjdXJyZW50Tm9kZT8ucGFyZW50KSB7XHJcbiAgICBjb25zdCBwYXJlbnRQcm9wcyA9IGN1cnJlbnROb2RlLnBhcmVudC5wZW5kaW5nUHJvcHMgPz8gRW1wdHlPYmplY3Q7XHJcblxyXG4gICAgaWYgKCFjdXJyZW50Tm9kZS5wYXJlbnQuaXNUeXBlKCdFbGVtZW50JykpIHtcclxuICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIGNvbnRpbnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWxlY3Rvci5zdGFydHNXaXRoKCcjJykgJiYgcGFyZW50UHJvcHMuaWQgPT09IHNlbGVjdG9yLnN1YnN0cmluZygxKSkge1xyXG4gICAgICByZXR1cm4gIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iuc3RhcnRzV2l0aCgnLicpICYmIHBhcmVudFByb3BzLmNsYXNzID09PSBzZWxlY3Rvci5zdWJzdHJpbmcoMSkpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH0gZWxzZSBpZiAoL1tbYS16QS1aMC05XFwtX10qKD86PVwiW2EtekEtWjAtOVxcLV9dKlwiKT9dLy50ZXN0KHNlbGVjdG9yKSkge1xyXG4gICAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdG9yLnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKTtcclxuXHJcbiAgICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQucGVuZGluZ1Byb3BzW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50Tm9kZS5wYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoY3VycmVudE5vZGUucGFyZW50LnRhZyA9PT0gc2VsZWN0b3IpIHtcclxuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlLnBhcmVudDtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG4vKipcclxuICogRmluZHMgYSB2aXJ0dWFsIG5vZGUgdGhhdCBpcyBmb3VuZCBieSBnaXZlbiBjb21wb25lbnQgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7VmlydHVhbE5vZGV9IG5vZGVcclxuICogQHBhcmFtICB7Q29tcG9uZW50fSBjb21wb25lbnRcclxuICogQHJldHVybnMge1ZpcnR1YWxOb2RlfG51bGx9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZE5vZGVCeUNvbXBvbmVudChub2RlLCBjb21wb25lbnQpIHtcclxuICBsZXQgZm91bmROb2RlID0gbnVsbDtcclxuXHJcbiAgaWYgKG5vZGUuaW5zdGFuY2UgPT09IGNvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbiAgfVxyXG5cclxuICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICBmb3VuZE5vZGUgPSBmaW5kTm9kZUJ5Q29tcG9uZW50KGNoaWxkLCBjb21wb25lbnQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZm91bmROb2RlO1xyXG59XHJcblxyXG4vKipcclxuICogQnVpbGQgdmlydHVhbCB0cmVlIGZyb20gcm9vdCBub2RlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuUmVuZGVyUmVzdWx0fSByZW5kZXJSZXN1bHRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFZpcnR1YWxUcmVlUm9vdChyZW5kZXJSZXN1bHQpIHtcclxuICBjb25zdCByb290Tm9kZSA9IG5ldyBWaXJ0dWFsTm9kZSgnUm9vdCcsICcnKTtcclxuICBjb25zdCBjaGlsZE5vZGUgPSBidWlsZFZpcnR1YWxUcmVlKHJlbmRlclJlc3VsdCk7XHJcblxyXG4gIGlmIChjaGlsZE5vZGUpIHtcclxuICAgIHJvb3ROb2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcm9vdE5vZGU7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC9eYmxvYjovLCBcIlwiKS5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHtTcGFya30gZnJvbSBcIkAvc3BhcmtcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiQC9BcHBcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1NwYXJrSlMuQXBwQ29uZmlnfSBjb25maWdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHAoY29uZmlnKSB7XHJcbiAgaWYgKHR5cGVvZiBjb25maWcgIT09IFwib2JqZWN0XCIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBuZWNlc3Nhcnkgb3B0aW9ucyBkZWZpbmVkIGluIGdpdmVuIGNvbmZpZy4nKTtcclxuICB9XHJcblxyXG4gIHdpbmRvdy4kYXBwID0gbmV3IFNwYXJrKCk7XHJcbiAgd2luZG93LiRhcHAuc2V0Um9vdEZ1bmN0aW9uKGNvbmZpZy5yZW5kZXIpO1xyXG5cclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgJGFwcC5tb3VudChjb25maWcubW91bnRFbCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNyZWF0ZUFwcCh7XHJcbiAgbW91bnRFbDogJyNhcHAnLFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8QXBwIC8+XHJcbiAgfVxyXG59KSJdLCJuYW1lcyI6WyJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsZW5ndGgiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2FsbFN1cGVyIiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsImNvbnN0cnVjdG9yIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJfaW5oZXJpdHMiLCJfc2V0UHJvdG90eXBlT2YiLCJpbWciLCJDb21wb25lbnQiLCJIZWFkZXIiLCJjcmVhdGVSZWYiLCJsaXN0SXRlbXMiLCJpZCIsIm5hbWUiLCJBcHAiLCJfQ29tcG9uZW50IiwicHJvcHMiLCJfdGhpcyIsInN0YXRlIiwiaW5wdXRSZWYiLCJoYW5kbGVDbGljayIsImhhbmRsZVRleHRDaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJtb3VudGVkIiwiY3VycmVudCIsImZvY3VzIiwiX3VwZGF0ZWQiLCJfY2FsbGVlIiwiX2NvbnRleHQiLCJ1cGRhdGVkIiwic2V0U3RhdGUiLCJldiIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImVsZW1lbnROYW1lIiwiYXR0cmlidXRlcyIsInN0eWxlIiwiZm9udFNpemUiLCJjb2xvciIsImNoaWxkcmVuIiwidGl0bGUiLCJjb25jYXQiLCJtYXAiLCJpdGVtIiwib25TdWJtaXQiLCJyZWYiLCJ0eXBlIiwib25JbnB1dCIsInNyYyIsImFsdCIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94Iiwicm9sZSIsImFydGlzdCIsInNvdXJjZSIsInRyYW5zZm9ybSIsInJ4IiwiZmlsbCIsImN4IiwiY3kiLCJvbkNsaWNrIiwiZGVmYXVsdCIsIl9kZXN0cm95ZWQiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsImRlc3Ryb3llZCIsIkVtcHR5T2JqZWN0IiwiJGFwcCIsIm9uU3RhdGVDaGFuZ2VkIiwiX21vdW50ZWQiLCJfcmVzdW1lZCIsInJlc3VtZWQiLCJfY2FsbGVlMyIsIl9jb250ZXh0MyIsIl9jYWxsZWU0IiwiX2NvbnRleHQ0IiwiZmluZENsb3Nlc3ROb2RlIiwiZGlmZlByb3BzIiwiZmluZENsb3Nlc3RET01Ob2RlIiwicmVzb2x2ZUNsYXNzTmFtZSIsInJlc29sdmVTdHlsZSIsImhhbmRsZUFkZGluZ1Byb3BzIiwibm9kZSIsInByb3BOYW1lIiwicHJvcFZhbHVlIiwic3RhcnRzV2l0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJzdHJpbmciLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnRSZWYiLCJzZXRBdHRyaWJ1dGUiLCJyZXNvbHZlRWxlbWVudEF0dHJpYnV0ZXMiLCJfaSIsIl9PYmplY3QkZW50cmllcyIsImVudHJpZXMiLCJwZW5kaW5nUHJvcHMiLCJfT2JqZWN0JGVudHJpZXMkX2kiLCJfc2xpY2VkVG9BcnJheSIsImhhbmRsZVVwZGF0aW5nUHJvcHMiLCJldmVudE5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2xkUHJvcHMiLCJoYW5kbGVSZW1vdmluZ1Byb3BzIiwicmVuZGVyTm9kZSIsInJlbW92ZUF0dHJpYnV0ZSIsInVubW91bnROb2RlIiwiZm9yRWFjaCIsImNoaWxkIiwiY2xlYW5MaXN0ZW5lcnMiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJpc1R5cGUiLCJpbnN0YW5jZSIsImNyZWF0ZUVsZW1lbnQiLCJwb3NpdGlvbiIsImRvY3VtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJ0YWciLCJfcmVmIiwiX25vZGUkcGVuZGluZ1Byb3BzJHhtIiwiY2xvc2VzdFdpdGhOUyIsImNyZWF0ZUVsZW1lbnROUyIsInBhcmVudEVsIiwiY2hpbGRBdCIsImluc2VydEJlZm9yZSIsInVwZGF0ZUVsZW1lbnQiLCJkaWZmZWRQcm9wcyIsInByb3AiLCJmbGF0dGVuUmVuZGVyUmVzdWx0Q2hpbGRyZW4iLCJidWlsZFZpcnR1YWxUcmVlIiwibGFzdE1vdW50ZWRWaXJ0dWFsTm9kZSIsIm1vdW50VmlydHVhbFN1YnRyZWUiLCJlZmZlY3QiLCJjcmVhdGVDb21wb25lbnQiLCJyZW5kZXJSZXN1bHQiLCJzdWJ0cmVlIiwiYXBwZW5kQ2hpbGQiLCJjaGlsZE5vZGUiLCJjb3B5Tm9kZVJlZmVyZW5jZXMiLCJjdXJyZW50Tm9kZSIsIm5ld05vZGUiLCJyZWN1cnNpdmUiLCJ1bmRlZmluZWQiLCJfY3VycmVudE5vZGUkb2xkUHJvcHMiLCJfY3VycmVudE5vZGUkZWxlbWVudFIiLCJfbmV3Tm9kZSRwZW5kaW5nUHJvcHMiLCJzdGF0ZUNoYW5nZWQiLCJpbmRleCIsImNvbXBhcmVQcm9wcyIsImtleXMiLCJldmVyeSIsIl9yZWYyIiwic2hvdWxkVXBkYXRlTm9kZSIsInVwZGF0ZU5vZGUiLCJwZW5kaW5nVXBkYXRlIiwiZW1wdHkiLCJyZXVzZU5vZGUiLCJjbG9uZWRDdXJyZW50Tm9kZSIsImNsb25lIiwicGFyZW50IiwiY29weUZyb20iLCJmaW5kTm9kZVdpdGhLZXkiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwicyIsImVyciIsImZpbmRNYXRjaGluZ0NoaWxkTm9kZSIsIm5ld0NoaWxkTm9kZSIsImZvdW5kTm9kZSIsInJlc29sdmVMYXN0TW91bnRlZE5vZGUiLCJyZWNvbmNpbGUiLCJwcm9jZXNzZWRDaGlsZHJlbiIsIm1hdGNoaW5nQ2hpbGQiLCJwdXNoIiwiaW5jbHVkZXMiLCJyZXNvbHZlRWZmZWN0c0Zyb21Ob2RlcyIsImVmZmVjdHMiLCJub2RlUmVmIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiY2xlYW5Ob2RlcyIsImJ1aWxkVmlydHVhbFRyZWVSb290IiwiZmluZE5vZGVCeUNvbXBvbmVudCIsInByb2Nlc3NDb21wb25lbnROb2RlcyIsImNvbXBvbmVudE5vZGVzIiwiYWN0aW9uIiwiYWxsQ2hpbGRyZW5Nb3VudGVkIiwiYWxsQ2hpbGRyZW5VcGRhdGVkIiwic2hpZnQiLCJoYW5kbGVQbGFjZW1lbnQiLCJ1bnNoaWZ0IiwiaGFuZGxlVXBkYXRlIiwiU3BhcmsiLCJfcm9vdEVsIiwiX3Jvb3RGdW5jIiwiX3ZpcnR1YWxUcmVlIiwic2V0Um9vdEZ1bmN0aW9uIiwicm9vdEZuIiwibW91bnQiLCJtb3VudEVsIiwicXVlcnlTZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiRXJyb3IiLCJuZXdWaXJ0dWFsVHJlZSIsImRlbGV0aW9ucyIsIm5ld0NoYW5nZXMiLCJtb3VudGVkQ29tcG9uZW50Tm9kZXMiLCJ1cGRhdGVkQ29tcG9uZW50Tm9kZXMiLCJjb21wb25lbnQiLCJ3YXJuIiwibGFzdE1vdW50ZWROb2RlIiwicmVmcyIsIkFycmF5IiwiaXNBcnJheSIsIl9vYmplY3RTcHJlYWQiLCJ0b1N0cmluZyIsImNsYXNzVG9rZW5zIiwiZmlsdGVyIiwiY2xhc3NOYW1lIiwidG9rZW5zIiwiaW5kZXhPZiIsImpvaW4iLCJ0ZXN0Iiwia2V5VG9rZW5zIiwic3BsaXQiLCJ0b2tlbiIsInByb3BEaWZmcyIsIl9pMiIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwiaHRtbFRhZ3MiLCJzdmdUYWdzIiwiVmlydHVhbE5vZGUiLCJvdGhlclByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwibGlzdGVuZXJzIiwicmVkdWNlIiwiY291bnQiLCJyZXN1bHQiLCJsaXN0ZW5lciIsIl90aGlzJGxpc3RlbmVycyR0eXBlIiwibGlzdGVuZXJzV2l0aFR5cGUiLCJmb3VuZExpc3RlbmVySW5kZXgiLCJmb3VuZExpc3RlbmVyIiwiZmluZCIsImFub3RoZXJMaXN0ZW5lciIsInNwbGljZSIsIl9sb29wIiwiX3JldCIsInJlcGxhY2VDaGlsZCIsIm9sZE5vZGUiLCJjbG9uZWQiLCJzb3VyY2VOb2RlIiwiY2hlY2tLZXlzSW5Kc3hBcnJheSIsImpzeEFycmF5IiwidXNlZEtleXMiLCJfcmVmJGVsZW1lbnROYW1lIiwiX3JlZiRhdHRyaWJ1dGVzIiwiX3JlZiRjaGlsZHJlbiIsImFub3RoZXJDaGlsZE5vZGUiLCJzZWxlY3RvciIsIl9jdXJyZW50Tm9kZSIsIl9jdXJyZW50Tm9kZSRwYXJlbnQkcCIsInBhcmVudFByb3BzIiwicmVwbGFjZSIsInJvb3ROb2RlIiwiY3JlYXRlQXBwIiwiY29uZmlnIiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==