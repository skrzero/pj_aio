/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/base.js":
/*!********************************!*\
  !*** ./assets/scripts/base.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Menu.js */ \"./assets/scripts/components/Menu.js\");\n/* harmony import */ var _components_Timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Timer.js */ \"./assets/scripts/components/Timer.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var MainMenu = new _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__.Menu();\n  MainMenu.init();\n});\nvar btnMenu = document.querySelector('.header_btn_Menu'),\n  mainMenu = document.getElementById('main-menu'),\n  btnCloseMenu = document.querySelector('.close-mainMenu');\n\n// Si le bouton et le menu existent, alors...\nif (btnMenu && mainMenu) {\n  // Si on a cliqué sur l'icône \"Menu\"\n  btnMenu.addEventListener('click', function () {\n    mainMenu.classList.add('visible');\n  });\n}\nif (btnCloseMenu && mainMenu) {\n  btnCloseMenu.addEventListener('click', function () {\n    mainMenu.classList.remove('visible');\n  });\n}\n\n//# sourceURL=webpack://Afec_Starter_kit/./assets/scripts/base.js?");

/***/ }),

/***/ "./assets/scripts/components/Menu.js":
/*!*******************************************!*\
  !*** ./assets/scripts/components/Menu.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _data_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu.js */ \"./assets/scripts/data/menu.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar Menu = /*#__PURE__*/function () {\n  function Menu() {\n    _classCallCheck(this, Menu);\n    this.menuContainer = document.querySelector(\"#menu-js\");\n  }\n  return _createClass(Menu, [{\n    key: \"init\",\n    value: function init() {\n      var menuTemplate = \"<ul>\";\n      _data_menu_js__WEBPACK_IMPORTED_MODULE_0__.links.forEach(function (link) {\n        menuTemplate += \"<li><a href=\\\"\".concat(link.url, \"\\\" title=\\\"\").concat(link.title, \"\\\">\").concat(link.title, \"</a></li>\");\n      });\n      menuTemplate += \"</ul>\";\n      this.render(menuTemplate);\n    }\n  }, {\n    key: \"render\",\n    value: function render(content) {\n      this.menuContainer.innerHTML = content;\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://Afec_Starter_kit/./assets/scripts/components/Menu.js?");

/***/ }),

/***/ "./assets/scripts/components/Timer.js":
/*!********************************************!*\
  !*** ./assets/scripts/components/Timer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar timeDisplay = document.querySelector('.minuteur_time');\nvar startStopBtn = document.querySelector('.btn_vert');\nvar heures = 0;\nvar minutes = 0;\nvar secondes = 0;\nvar enCours = false;\nvar intervalId = null;\nfunction demarrerMinuteur() {\n  intervalId = setInterval(function () {\n    secondes++;\n    if (secondes === 60) {\n      secondes = 0;\n      minutes++;\n    }\n    if (minutes === 60) {\n      minutes = 0;\n      heures++;\n    }\n    majTimer();\n    console.log(secondes);\n  }, 1000);\n}\nfunction format(val) {\n  if (val < 10) {\n    return \"0\" + val;\n  } else {\n    return val;\n  }\n}\nfunction majTimer() {\n  timeDisplay.textContent = \"\".concat(format(heures), \".\").concat(format(minutes), \".\").concat(format(secondes));\n}\nfunction pauseMinuteur() {\n  clearInterval(intervalId);\n}\nstartStopBtn.onclick = function () {\n  if (!enCours) {\n    startStopBtn.textContent = \"Pause\";\n    demarrerMinuteur();\n    enCours = true;\n  } else {\n    startStopBtn.textContent = \"Demarer\";\n    pauseMinuteur();\n    enCours = false;\n  }\n};\n\n//# sourceURL=webpack://Afec_Starter_kit/./assets/scripts/components/Timer.js?");

/***/ }),

/***/ "./assets/scripts/data/menu.js":
/*!*************************************!*\
  !*** ./assets/scripts/data/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: () => (/* binding */ links)\n/* harmony export */ });\nvar links = [{\n  title: 'Accueil',\n  url: \"index.php\"\n}, {\n  title: \"Meteo\",\n  url: 'index.php?page=meteo',\n  icone: \"\"\n}, {\n  title: 'Minuteur',\n  url: 'index.php?page=minuteur'\n}, {\n  title: 'Calendrier',\n  url: 'index.php?page=calendrier'\n}, {\n  title: 'Mails',\n  url: 'index.php?page=mails'\n}];\n\n//# sourceURL=webpack://Afec_Starter_kit/./assets/scripts/data/menu.js?");

/***/ }),

/***/ "./assets/styles/base.scss":
/*!*********************************!*\
  !*** ./assets/styles/base.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Afec_Starter_kit/./assets/styles/base.scss?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./assets/scripts/base.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/styles/base.scss");
/******/ 	
/******/ })()
;