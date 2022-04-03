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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sources-backend/index.js":
/*!**********************************!*\
  !*** ./sources-backend/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hapi_hapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hapi/hapi */ \"@hapi/hapi\");\n/* harmony import */ var _hapi_hapi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hapi_hapi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hapi_inert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hapi/inert */ \"@hapi/inert\");\n/* harmony import */ var _hapi_inert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hapi_inert__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var sources_common_components_App_svelte__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sources-common/components/App.svelte */ \"./sources-common/components/App.svelte\");\n\n\n\n\n\n(async () => {\n  const server = _hapi_hapi__WEBPACK_IMPORTED_MODULE_1___default.a.server({\n    port: 8000,\n    host: \"localhost\"\n  });\n\n  await server.register(_hapi_inert__WEBPACK_IMPORTED_MODULE_2___default.a);\n\n  server.route([{\n    method: 'GET',\n    path: '/{param*}',\n    handler: {\n      directory: {\n        path: path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, \"www\")\n      }\n    }\n  }, {\n    method: \"GET\",\n    path: \"/\",\n    handler: async (request, h) => {\n      const { html } = sources_common_components_App_svelte__WEBPACK_IMPORTED_MODULE_3__[\"default\"].render();\n\n      return `\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n          <meta charset=\"UTF-8\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n          <title>Svelte TODO</title>\n          <link rel=\"stylesheet\" href=\"/builds/main.css\">\n        </head>\n        <body>\n          ${html}\n          <script defer src=\"/builds/main.js\"></script>\n        </body>\n        </html>\n      `;\n    }\n  }]);\n\n  await server.start();\n  console.log(`Server is ready to rock on port ${server.info.uri}`);\n})();\n\n\n//# sourceURL=webpack:///./sources-backend/index.js?");

/***/ }),

/***/ "./sources-common/components/App.svelte":
/*!**********************************************!*\
  !*** ./sources-common/components/App.svelte ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ \"svelte/internal\");\n/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svelte_internal__WEBPACK_IMPORTED_MODULE_0__);\n/* sources-common/components/App.svelte generated by Svelte v3.19.1 */\n\n\nconst App = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"create_ssr_component\"])(($$result, $$props, $$bindings, $$slots) => {\n\tlet newTodo = { text: \"\", priority: 0, id: 0 };\n\tlet todos = [];\n\n\tfunction submitTodo() {\n\t\tif (!newTodo.text) return;\n\t\ttodos = [...todos, Object.assign({}, newTodo)];\n\t\tnewTodo.text = \"\";\n\t\tnewTodo.id++;\n\t}\n\n\tfunction removeTodo(id) {\n\t\ttodos = todos.filter(todo => todo.id != id);\n\t}\n\n\tlet todosSorted = todos.sort((a, b) => a.priority - b.priority);\n\n\treturn `<h1>TODO</h1>\n<div class=\"${\"todos-left-notice\"}\">\n  There is ${Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"escape\"])(todos.length)} todos left.\n</div>\n<form id=\"${\"todoForm\"}\" class=\"${\"form-todo\"}\">\n  <input type=\"${\"text\"}\"${Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"add_attribute\"])(\"value\", newTodo.text, 1)}>\n  <input type=\"${\"text\"}\"${Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"add_attribute\"])(\"value\", newTodo.priority, 1)}>\n  <input type=\"${\"submit\"}\" value=\"${\"OK\"}\" ${newTodo.text.length == 0 ? \"disabled\" : \"\"}>\n</form>\n<div class=\"${\"todos-grid\"}\">\n  ${Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"each\"])(todosSorted, todo => `<div class=\"${\"todo-text\"}\">${Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"escape\"])(todo.text)}</div>\n    <div class=\"${\"todo-priority\"}\">${Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[\"escape\"])(todo.priority)}</div>\n    <div class=\"${\"todo-controls\"}\"><button>done</button></div>`)}\n</div>`;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./sources-common/components/App.svelte?");

/***/ }),

/***/ 0:
/*!*******************************!*\
  !*** multi ./sources-backend ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./sources-backend */\"./sources-backend/index.js\");\n\n\n//# sourceURL=webpack:///multi_./sources-backend?");

/***/ }),

/***/ "@hapi/hapi":
/*!*****************************!*\
  !*** external "@hapi/hapi" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/hapi\");\n\n//# sourceURL=webpack:///external_%22@hapi/hapi%22?");

/***/ }),

/***/ "@hapi/inert":
/*!******************************!*\
  !*** external "@hapi/inert" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@hapi/inert\");\n\n//# sourceURL=webpack:///external_%22@hapi/inert%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "svelte/internal":
/*!**********************************!*\
  !*** external "svelte/internal" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"svelte/internal\");\n\n//# sourceURL=webpack:///external_%22svelte/internal%22?");

/***/ })

/******/ });