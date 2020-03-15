var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: toggleLayers, editIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleLayers", function() { return toggleLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editIndicator", function() { return editIndicator; });
// Required libraries
var DOM = __webpack_require__(/*! sketch/dom */ "sketch/dom");

var UI = __webpack_require__(/*! sketch/ui */ "sketch/ui");

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var document = DOM.getSelectedDocument(); // For first time sketch-ignore is ran, set a key to save indicator data

if (Settings.settingForKey('indicator-key') === undefined) {
  Settings.setSettingForKey('indicator-key', '\\\\');
} // Set indicator variable


var indicator = Settings.settingForKey('indicator-key'); // For first time sketch-ignore is ran on specific document, set a key to save toggle hide/show data

if (Settings.documentSettingForKey(document, 'hide-is-on-key') === undefined) {
  Settings.setDocumentSettingForKey(document, 'hide-is-on-key', false);
} // toggleLayers


var toggleLayers = function toggleLayers() {
  document.pages.map(function (value) {
    value.layers.map(function (value) {
      if (value.name.startsWith(indicator)) {
        if (Settings.documentSettingForKey(document, 'hide-is-on-key')) {
          Settings.setDocumentSettingForKey(document, 'hide-is-on-key', false);
          value.hidden = false;
        } else {
          Settings.setDocumentSettingForKey(document, 'hide-is-on-key', true);
          value.hidden = true;
        }
      }
    });
  });
}; // editIndicator

var editIndicator = function editIndicator() {
  UI.getInputFromUser("Edit Indicator", {
    description: 'sketch-ignore will hide/show files that begin with this indicator text when Toggle Ignored is called. (Case-sensitive)',
    type: UI.INPUT_TYPE.string,
    initialValue: indicator
  }, function (error, value) {
    if (error) {
      UI.message("sketch-ignore: No changes were made.");
      return;
    } else {
      Settings.setSettingForKey('indicator-key', value);
      indicator = value;
      UI.message("sketch-ignore: Indicator set to \"".concat(indicator, "\"."));
    }
  });
};

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ }),

/***/ "sketch/ui":
/*!****************************!*\
  !*** external "sketch/ui" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/ui");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['editIndicator'] = __skpm_run.bind(this, 'editIndicator');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['toggleLayers'] = __skpm_run.bind(this, 'toggleLayers')

//# sourceMappingURL=__index.js.map