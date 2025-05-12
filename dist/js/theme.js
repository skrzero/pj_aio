/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/scripts/base.js":
/*!********************************!*\
  !*** ./assets/scripts/base.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Menu.js */ \"./assets/scripts/components/Menu.js\");\n/* harmony import */ var _components_Timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Timer.js */ \"./assets/scripts/components/Timer.js\");\n/* harmony import */ var _components_Timer_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_Timer_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  const MainMenu = new _components_Menu_js__WEBPACK_IMPORTED_MODULE_0__.Menu();\n  MainMenu.init();\n});\nlet btnMenu = document.querySelector(\".header_btn_Menu\"), mainMenu = document.getElementById(\"main-menu\"), btnCloseMenu = document.querySelector(\".close-mainMenu\");\nif (btnMenu && mainMenu) {\n  btnMenu.addEventListener(\"click\", function() {\n    mainMenu.classList.add(\"visible\");\n  });\n}\nif (btnCloseMenu && mainMenu) {\n  btnCloseMenu.addEventListener(\"click\", function() {\n    mainMenu.classList.remove(\"visible\");\n  });\n}\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/base.js?");

/***/ }),

/***/ "./assets/scripts/components/Menu.js":
/*!*******************************************!*\
  !*** ./assets/scripts/components/Menu.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Menu: () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _data_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/menu */ \"./assets/scripts/data/menu.js\");\n\nclass Menu {\n  constructor() {\n    this.menuContainer = document.querySelector(\"#menu-js\");\n  }\n  init() {\n    let menuTemplate = `<ul>`;\n    _data_menu__WEBPACK_IMPORTED_MODULE_0__.links.forEach((link) => {\n      menuTemplate += `<li><a href=\"\" icone=\"\" title=\"\">${link.title}</a></li>`;\n    });\n    menuTemplate += `</ul>`;\n    this.render(menuTemplate);\n  }\n  render(content) {\n    this.menuContainer.innerHTML = content;\n  }\n}\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/Menu.js?");

/***/ }),

/***/ "./assets/scripts/components/Timer.js":
/*!********************************************!*\
  !*** ./assets/scripts/components/Timer.js ***!
  \********************************************/
/***/ (() => {

eval("const timeDisplay = document.querySelector(\".minuteur_time\");\nconst startStopBtn = document.querySelector(\".btn_vert\");\nlet heures = 0;\nlet minutes = 0;\nlet secondes = 0;\nlet enCours = false;\nlet intervalId = null;\nfunction demarrerMinuteur() {\n  intervalId = setInterval(\n    () => {\n      secondes++;\n      if (secondes === 60) {\n        secondes = 0;\n        minutes++;\n      }\n      if (minutes === 60) {\n        minutes = 0;\n        heures++;\n      }\n      majTimer();\n      console.log(secondes);\n    },\n    1e3\n  );\n}\nfunction format(val) {\n  if (val < 10) {\n    return \"0\" + val;\n  } else {\n    return val;\n  }\n}\nfunction majTimer() {\n  timeDisplay.textContent = `${format(heures)}.${format(minutes)}.${format(secondes)}`;\n}\nfunction pauseMinuteur() {\n  clearInterval(intervalId);\n}\nstartStopBtn.onclick = () => {\n  if (!enCours) {\n    startStopBtn.textContent = \"Pause\";\n    demarrerMinuteur();\n    enCours = true;\n  } else {\n    startStopBtn.textContent = \"Demarer\";\n    pauseMinuteur();\n    enCours = false;\n  }\n};\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/components/Timer.js?");

/***/ }),

/***/ "./assets/scripts/data/menu.js":
/*!*************************************!*\
  !*** ./assets/scripts/data/menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   links: () => (/* binding */ links)\n/* harmony export */ });\nconst links = [\n  {\n    title: \"Accueil\",\n    url: \"index.html\"\n  },\n  {\n    title: \"Meteo\",\n    url: \"meteo.html\",\n    icone: \"\"\n  },\n  {\n    title: \"Minuteur\",\n    url: \"\"\n  },\n  {\n    title: \"Calendrier\",\n    url: \"\"\n  },\n  {\n    title: \"Mails\",\n    url: \"\"\n  }\n];\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/scripts/data/menu.js?");

/***/ }),

/***/ "./assets/styles/base.scss":
/*!*********************************!*\
  !*** ./assets/styles/base.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Afec_starter_kit/./assets/styles/base.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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