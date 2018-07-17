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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {



var courseBox = document.querySelector('.course-box');
var container = document.querySelector('.course-list-container');

var copy;

for (var i = 0; i < 10; i++) {
	copy = courseBox.cloneNode(true);
	container.appendChild(copy);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./style.less", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/dist/cjs.js!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  font-weight: lighter;\n  text-align: center;\n  outline: none;\n  color: #858585;\n  list-style: none;\n}\nbody {\n  width: 100%;\n  overflow-x: hidden;\n}\n.radius {\n  border-radius: 8px;\n  border: 1px solid #DBE2E8;\n  box-shadow: 1px 1px 10px #DBE2E8;\n  background-color: #fff;\n}\n.blue-color {\n  color: #1FB4E2;\n}\n.hidden {\n  display: none;\n}\n.clearfix::after {\n  content: \"\";\n  display: block;\n  clear: both;\n}\n.h1-font {\n  font-size: 3.5em;\n}\n.header .h1-font {\n  margin: 30px auto;\n}\n.blue-background {\n  display: block;\n  background-color: #EFFAFD;\n  width: 200%;\n  height: 1000px;\n  transform: rotate(-15deg);\n  position: absolute;\n  z-index: -10;\n  top: -200px;\n  right: -50px;\n}\n.main {\n  width: 1200px;\n  margin: 0 auto;\n}\n@media (max-width: 1179px) {\n  .main {\n    width: 100%;\n    margin: 0;\n  }\n}\n.filter-container {\n  margin-bottom: 30px;\n}\n@media (max-width: 768px) {\n  .filter-container {\n    display: none;\n  }\n}\n.filter-container .filter-menu {\n  float: right;\n}\n.filter-container .filter-menu .filter-menu-list a {\n  letter-spacing: 0.1em;\n  color: #7E97AC;\n  font-size: 0.9em;\n  font-weight: 400;\n}\n.filter-container .filter-menu .filter-menu-list a:hover {\n  color: #858585;\n}\n.side-menu-container {\n  display: inline-block;\n  vertical-align: top;\n}\n@media (max-width: 768px) {\n  .side-menu-container {\n    display: none;\n  }\n}\n.side-menu-container .select-menu-container {\n  padding-top: 50px;\n}\n.course-list-container {\n  display: inline-block;\n  margin-left: 40px;\n}\n@media (max-width: 768px) {\n  .course-list-container {\n    margin-left: 0;\n  }\n}\n.search-input-container {\n  width: 800px;\n  margin: 0 auto;\n  margin-bottom: 50px;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .search-input-container {\n    width: 95%;\n  }\n}\ninput.search {\n  box-sizing: border-box;\n  height: 50px;\n  width: 800px;\n  text-align: left;\n  padding: 0 20px;\n  font-size: 0.9em;\n}\n@media (max-width: 768px) {\n  input.search {\n    width: 100%;\n  }\n}\n.search-img {\n  position: absolute;\n  display: inline-block;\n  top: 15px;\n  right: 20px;\n  width: 25px;\n  height: 25px;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAgNTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2%0D%0AZyI+PHBhdGggZD0ibTI5LjYgOS4xYy0yLjUtMi01LjgtMy4xLTkuMi0zLjFzLTYuNyAxLjEtOS4y%0D%0AIDMuMmMtLjUuNC0xLjEuOS0xLjUgMS40LTUgNS42LTQuMyAxNCAxLjYgMTguNyAyLjUgMiA1Ljgg%0D%0AMy4xIDkuMiAzLjFzNi43LTEuMSA5LjItMy4yYy41LS40IDEtLjkgMS41LTEuNCAyLjQtMi43IDMu%0D%0ANi02LjEgMy4zLTkuNy0uMy0zLjUtMi02LjctNC45LTl6IiBmaWxsPSJub25lIi8+PHBhdGggZD0i%0D%0AbTQ4LjcgNDIuMS0xMS42LTExLjcuNS0uN2MyLjUtMy42IDMuNy03LjggMy4zLTEyLjEtLjQtNS4x%0D%0ALTMtOS44LTcuMS0xMy4xLTMuOC0yLjktOC41LTQuNS0xMy40LTQuNS01IDAtOS43IDEuNy0xMy40%0D%0AIDQuNi0uNy43LTEuNSAxLjQtMi4xIDIuMS03LjMgOC4xLTYuMyAyMC4zIDIuMyAyNy4xIDMuNyAy%0D%0ALjkgOC40IDQuNSAxMy4yIDQuNSAyLjkgMCA1LjYtLjUgOC4yLTEuNmwuOC0uMy42LjYuMi4yIDEx%0D%0ALjIgMTEuMmMxLjEgMS4xIDIuNiAxLjYgNC4xIDEuNSAxLjEtLjEgMi4yLS41IDMtMS4yIDEuOS0x%0D%0ALjcgMi00LjcuMi02LjZ6bS0xNy41LTE0LjNjLS41LjUtMSAxLTEuNSAxLjQtMi41IDIuMS01Ljgg%0D%0AMy4yLTkuMiAzLjJzLTYuNi0xLjEtOS4yLTMuMWMtNS45LTQuNy02LjctMTMuMS0xLjYtMTguNy41%0D%0ALS41IDEtMSAxLjUtMS40IDIuNS0yLjEgNS44LTMuMiA5LjItMy4yczYuNiAxLjEgOS4yIDMuMWMy%0D%0ALjkgMi4zIDQuNiA1LjUgNC45IDlzLS44IDctMy4zIDkuN3oiIGZpbGw9IiMwMWIzZTMiLz48L3N2%0D%0AZz4=');\n  background-repeat: no-repeat;\n  background-position: 98%;\n  background-size: 25px 25px;\n}\n.menu-style {\n  padding-top: 20px;\n  text-align: left;\n}\n.select-menu {\n  border-radius: 5px;\n}\n.select-menu li {\n  margin-bottom: 15px;\n  cursor: pointer;\n  color: #7E97AC;\n  font-weight: 400;\n  text-align: left;\n  font-size: 0.9em;\n}\n.select-menu li:not(:first-child) {\n  padding: 15px 10px;\n}\n.select-menu li:not(:first-child):hover {\n  box-shadow: 5px 5px 15px #c6ccd1;\n}\n.select-menu .title {\n  font-weight: bold;\n  color: #7E97AC;\n  font-size: 1em;\n}\n.select-menu li > input {\n  font-size: 0.8em;\n}\n.selected-tag {\n  margin-bottom: 20px;\n  border-color: #1FB4E2;\n  background-color: #bff0ff;\n  padding: 20px;\n}\n.selected-tag .selected-tag-style {\n  padding: 5px;\n  text-align: left;\n  font-size: 1.1em;\n  color: black;\n}\n.selected-tag .title {\n  font-weight: 400;\n}\n.selected-tag .tags {\n  text-align: left;\n  font-weight: 350;\n  color: #858585;\n}\n.course-box {\n  padding: 35px 30px 15px 30px;\n  margin-bottom: 30px;\n}\ndiv.new-btn {\n  text-align: center;\n  width: 60px;\n  height: 30px;\n  padding: 10px 0 0 0;\n  border: none;\n  color: #6857C2;\n  font-weight: 400;\n  position: absolute;\n  right: 0;\n  top: 10px;\n  box-shadow: 2px 2px 20px #cad1d6;\n}\n.course-detail {\n  padding-bottom: 25px;\n  border-bottom: 1px solid #DBE2E8;\n  position: relative;\n  display: inline-block;\n}\n@media (max-width: 768px) {\n  .course-detail {\n    border-bottom: none;\n  }\n}\n.course-img-container {\n  position: relative;\n  float: left;\n  width: 10vw;\n  min-width: 110px;\n  height: 110px;\n  cursor: pointer;\n}\n@media (max-width: 990px) {\n  .course-img-container {\n    display: none;\n  }\n}\n.course-img {\n  width: 10vw;\n  min-width: 110px;\n  height: 110px;\n  object-fit: cover;\n  border-radius: 8px;\n  box-shadow: 1px 1px 10px #DBE2E8;\n}\n.course-img-container::after {\n  position: absolute;\n  top: 0;\n  content: \"\";\n  display: block;\n  width: 10vw;\n  min-width: 110px;\n  height: 110px;\n  border-radius: 8px;\n  background-color: rgba(214, 205, 76, 0.5);\n  background-image: url('https://github.com/kizmo04/udacity-responsive/blob/master/img/nanodegree-icon.png?raw=true');\n  background-repeat: no-repeat;\n  background-position: 5px 5px;\n}\n.course-info {\n  display: inline-block;\n  padding-left: 30px;\n}\n@media (max-width: 768px) {\n  .course-info {\n    padding-left: 0;\n  }\n}\n.course-info .h5-font {\n  display: block;\n  font-size: 0.8em;\n  font-weight: bold;\n  color: #7E97AC;\n}\n@media (max-width: 768px) {\n  .course-info .h5-font::before {\n    width: 10px;\n    height: 10px;\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxOCAxMSIgeG1sbnM9Imh0%0D%0AdHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcv%0D%0AMTk5OS94bGluayI+PHRpdGxlPmljb24vcHJvZHVjdC9uYW5vZGVncmVlIGNvcHkgNDwvdGl0bGU+%0D%0APGRlZnM+PHBhdGggZD0iTTExLjY3NCA5LjQyOWg0LjI3bC0zLjkzOC03LjA3Mkw5Ljg3IDYuMjc2%0D%0AbDEuODA1IDMuMTUzem0tLjk2Ny03Ljg1OEg3LjI5M0w5IDQuNzAybDEuNzA3LTMuMTN6TTEyIDBj%0D%0ALjI1MSAwIC41MDMuMTMuNjQ3LjM5bDUuMjUgOS40MjhjLjI5MS41MjQtLjA3IDEuMTgyLS42NDgg%0D%0AMS4xODJoLTZhLjc0NC43NDQgMCAwIDEtLjY0Mi0uMzgxTDkgNy44MTNsLTEuNjA3IDIuODA2QS43%0D%0ANDQuNzQ0IDAgMCAxIDYuNzUgMTFILjc1MWMtLjU3OSAwLS45NC0uNjU4LS42NDgtMS4xODJMNS4z%0D%0ANTMuMzlBLjczNy43MzcgMCAwIDEgNiAwSDEyek0yLjA1NyA5LjQyOWg0LjI2OUw4LjEzIDYuMjc2%0D%0AIDUuOTk0IDIuMzU3IDIuMDU3IDkuNDN6IiBpZD0iYSIvPjwvZGVmcz48ZyBmaWxsPSJub25lIiBm%0D%0AaWxsLXJ1bGU9ImV2ZW5vZGQiPjx1c2UgZmlsbD0iIzAyQjNFNCIgZmlsbC1ydWxlPSJub256ZXJv%0D%0AIiB4bGluazpocmVmPSIjYSIvPjwvZz48L3N2Zz4=');\n    background-repeat: no-repeat;\n    background-position: 5px 5px;\n    background-size: 10px 10px;\n  }\n}\n.course-info .h3-font {\n  display: block;\n  font-size: 1.2em;\n  font-weight: bold;\n  color: black;\n  cursor: pointer;\n}\n.course-info .h3-font:hover {\n  color: #1FB4E2;\n}\n.course-info * {\n  text-align: left;\n}\n.info-section-container {\n  margin-top: 10px;\n  display: inline-block;\n  width: 45vw;\n  max-width: 500px;\n}\n@media (max-width: 768px) {\n  .info-section-container {\n    width: 90%;\n  }\n}\n.info-section {\n  display: inline-block;\n  vertical-align: top;\n  width: 30%;\n}\n@media (max-width: 768px) {\n  .info-section {\n    width: 95%;\n  }\n}\n.info-section .title {\n  padding: 3px 0;\n}\n.info-section .content {\n  color: black;\n}\n.skills {\n  margin-right: 20px;\n}\n@media (max-width: 768px) {\n  .collaboration {\n    display: none;\n  }\n}\n.category-menu {\n  padding-left: 20px;\n}\n.category-menu .title,\n.category-menu .list {\n  text-align: left;\n  padding: 15px 0;\n}\n.category-menu .title {\n  font-weight: bold;\n  font-size: 1em;\n}\n.category-menu .list {\n  padding: 5px 0;\n}\n.category-menu-list .list:hover {\n  position: relative;\n}\n.category-menu-list .list:hover a {\n  color: #1EB4E1;\n}\n.category-menu-list .list:hover::before {\n  content: \"\";\n  display: block;\n  background-color: #1EB4E1;\n  width: 3px;\n  height: 25px;\n  position: absolute;\n  top: 0;\n  left: -20px;\n}\n.category-menu-list .title:hover {\n  position: relative;\n}\n.category-menu-list .title:hover a {\n  color: #1EB4E1;\n}\n.category-menu-list .title:hover::before {\n  content: \"\";\n  display: block;\n  background-color: #1EB4E1;\n  width: 3px;\n  height: 25px;\n  position: absolute;\n  top: 10px;\n  left: -20px;\n}\n.blue-side-bar {\n  color: #1EB4E1;\n  position: relative;\n}\n.blue-side-bar::before {\n  content: \"\";\n  display: block;\n  background-color: #1EB4E1;\n  width: 3px;\n  height: 25px;\n  position: absolute;\n  top: 10px;\n  left: -20px;\n}\n.nanodeg-detail {\n  padding-top: 15px;\n}\n@media (max-width: 768px) {\n  .nanodeg-detail {\n    display: none;\n  }\n}\n.nanodeg-detail .nanodeg-btn {\n  float: left;\n}\n.nanodeg-detail .nanodeg-btn span {\n  color: #1EB4E1;\n  font-weight: 400;\n  font-size: 0.9em;\n  letter-spacing: 0.2em;\n}\n.nanodeg-detail .nanodeg-difficulty {\n  float: right;\n}\n.nanodeg-detail .nanodeg-difficulty span {\n  font-size: 0.7em;\n  font-weight: 400;\n  letter-spacing: 0.1em;\n}\n", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);