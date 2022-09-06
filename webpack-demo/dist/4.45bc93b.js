(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4,5],{

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'bar',
});

function loadScripts(prefix, hash, src) {
  const resolve = (...args) => args.join('/')
  const script = document.createElement('script')
  // path resolve
  script.src = resolve.apply(null, hash ? [prefix, hash, src] : [prefix, src])
  document.body.appendChild(script)
}

loadScripts('.', '', 'public/foo.js')

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'foo',
    bar: _bar__WEBPACK_IMPORTED_MODULE_0__["default"],
});

/***/ })

}]);