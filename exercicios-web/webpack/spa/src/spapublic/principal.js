/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/principal.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/imgs/logo.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/logo.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"6777486e7ac73f627f41dceddc0eedd1.png\";\n\n//# sourceURL=webpack:///./src/assets/imgs/logo.png?");

/***/ }),

/***/ "./src/assets/js/navegacao.js":
/*!************************************!*\
  !*** ./src/assets/js/navegacao.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\r\n    function marcarLinkComoSelecionado(hash) {\r\n        const links = document.querySelectorAll(`[wm-link]`)\r\n        links.forEach(link => link.classList.remove('selecionado'))\r\n\r\n        const link = document.querySelector(`[wm-link='${hash}']`)\r\n        link.classList.add('selecionado')\r\n    }\r\n\r\n    function navegarViaAjax(hash) {\r\n        if (!hash) return\r\n\r\n        const link = document.querySelector(`[wm-link='${hash}']`)\r\n        const destino = document.querySelector('[wm-link-destino]')\r\n\r\n        const url = hash.substring(1)\r\n        fetch(url)\r\n            .then(resp => resp.text())\r\n            .then(html => {\r\n                destino.innerHTML = html\r\n                marcarLinkComoSelecionado(hash)\r\n            })\r\n    }\r\n\r\n    function configurarLinks() {\r\n        document.querySelectorAll('[wm-link]')\r\n            .forEach(link => {\r\n                link.href = link.attributes['wm-link'].value\r\n            })\r\n    }\r\n\r\n    function navegacaoInicial() {\r\n        if (location.hash) {\r\n            navegarViaAjax(location.hash)\r\n        } else {\r\n            const primeiroLink = document.querySelector('[wm-link]')\r\n            navegarViaAjax(primeiroLink.hash)\r\n        }\r\n    }\r\n\r\n    window.onhashchange = e => navegarViaAjax(location.hash)\r\n    \r\n    configurarLinks()\r\n    navegacaoInicial()\r\n})()\n\n//# sourceURL=webpack:///./src/assets/js/navegacao.js?");

/***/ }),

/***/ "./src/assets/sass/index.scss":
/*!************************************!*\
  !*** ./src/assets/sass/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/sass/index.scss?");

/***/ }),

/***/ "./src/principal.js":
/*!**************************!*\
  !*** ./src/principal.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_js_navegacao_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/js/navegacao.js */ \"./src/assets/js/navegacao.js\");\n/* harmony import */ var _assets_js_navegacao_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_js_navegacao_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sass/index.scss */ \"./src/assets/sass/index.scss\");\n/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/imgs/logo.png */ \"./src/assets/imgs/logo.png\");\n/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/principal.js?");

/***/ })

/******/ });