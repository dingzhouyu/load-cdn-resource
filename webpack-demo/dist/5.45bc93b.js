(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ })

}]);