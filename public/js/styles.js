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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;


  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthOddness = reference.width % 2 === popper.width % 2;
  var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;
  var noRound = function noRound(v) {
    return v;
  };

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
  var verticalToInteger = !shouldRound ? noRound : Math.round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./resources/vendor/js/dashboard.js":
/*!******************************************!*\
  !*** ./resources/vendor/js/dashboard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  'use strict';

  $(function () {
    if ($('#dashboard-area-chart').length) {
      var lineChartCanvas = $("#dashboard-area-chart").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [{
          label: 'Product',
          data: [0, 11, 6, 10, 8, 0],
          backgroundColor: 'rgba(0, 128, 207, 0.4)',
          borderWidth: 1,
          fill: true
        }, {
          label: 'Product',
          data: [0, 7, 11, 8, 11, 0],
          backgroundColor: 'rgba(2, 178, 248, 0.4)',
          borderWidth: 1,
          fill: true
        }, {
          label: 'Support',
          data: [0, 14, 10, 14, 6, 0],
          backgroundColor: 'rgba(73, 221, 255, 0.4)',
          borderWidth: 1,
          fill: true
        }]
      };
      var options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [{
            display: false
          }],
          xAxes: [{
            display: false,
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 3
          }
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        stepsize: 1
      };
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }
  });
})(jQuery);

/***/ }),

/***/ "./resources/vendor/js/misc.js":
/*!*************************************!*\
  !*** ./resources/vendor/js/misc.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  'use strict';

  $(function () {
    var sidebar = $('.sidebar'); //Add active class to nav-link based on url dynamically
    //Active class can be hard coded directly in html file also as required

    var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
    $('.nav li a', sidebar).each(function () {
      var $this = $(this);

      if (current === "") {
        //for root url
        if ($this.attr('href').indexOf("index.html") !== -1) {
          $(this).parents('.nav-item').last().addClass('active');

          if ($(this).parents('.sub-menu').length) {
            $(this).closest('.collapse').addClass('show');
            $(this).addClass('active');
          }
        }
      } else {
        //for other url
        if ($this.attr('href').indexOf(current) !== -1) {
          $(this).parents('.nav-item').last().addClass('active');

          if ($(this).parents('.sub-menu').length) {
            $(this).closest('.collapse').addClass('show');
            $(this).addClass('active');
          }
        }
      }
    }); //Close other submenu in sidebar on opening any

    sidebar.on('show.bs.collapse', '.collapse', function () {
      sidebar.find('.collapse.show').collapse('hide');
    }); //Change sidebar and content-wrapper height

    applyStyles();

    function applyStyles() {
      //Applying perfect scrollbar
      if ($('.scroll-container').length) {
        var ScrollContainer = new PerfectScrollbar('.scroll-container');
      }
    } //checkbox and radios


    $(".form-check label,.form-radio label").append('<i class="input-helper"></i>');
    $(".purchace-popup .popup-dismiss").on("click", function () {
      $(".purchace-popup").slideToggle();
    });
  });
})(jQuery);

/***/ }),

/***/ "./resources/vendor/js/vendor.bundle.addons.js":
/*!*****************************************************!*\
  !*** ./resources/vendor/js/vendor.bundle.addons.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\NITRO 5\\projects\\realtime\\resources\\vendor\\js\\vendor.bundle.addons.js: Deleting local variable in strict mode (17953:23052)\n\n  17951 | // └────────────────────────────────────────────────────────────────────┘ \\\\\n  17952 | !function(a,b){\"function\"==typeof define&&define.amd?define(\"eve\",function(){return b()}):\"object\"==typeof exports?module.exports=b():a.eve=b()}(this,function(){var a,b,c=\"0.4.2\",d=\"hasOwnProperty\",e=/[\\.\\/]/,f=\"*\",g=function(){},h=function(a,b){return a-b},i={n:{}},j=function(c,d){c=String(c);var e,f=b,g=Array.prototype.slice.call(arguments,2),i=j.listeners(c),k=0,l=[],m={},n=[],o=a;a=c,b=0;for(var p=0,q=i.length;q>p;p++)\"zIndex\"in i[p]&&(l.push(i[p].zIndex),i[p].zIndex<0&&(m[i[p].zIndex]=i[p]));for(l.sort(h);l[k]<0;)if(e=m[l[k++]],n.push(e.apply(d,g)),b)return b=f,n;for(p=0;q>p;p++)if(e=i[p],\"zIndex\"in e)if(e.zIndex==l[k]){if(n.push(e.apply(d,g)),b)break;do if(k++,e=m[l[k]],e&&n.push(e.apply(d,g)),b)break;while(e)}else m[e.zIndex]=e;else if(n.push(e.apply(d,g)),b)break;return b=f,a=o,n.length?n:null};return j._events=i,j.listeners=function(a){var b,c,d,g,h,j,k,l,m=a.split(e),n=i,o=[n],p=[];for(g=0,h=m.length;h>g;g++){for(l=[],j=0,k=o.length;k>j;j++)for(n=o[j].n,c=[n[m[g]],n[f]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},j.on=function(a,b){if(a=String(a),\"function\"!=typeof b)return function(){};for(var c=a.split(e),d=i,f=0,h=c.length;h>f;f++)d=d.n,d=d.hasOwnProperty(c[f])&&d[c[f]]||(d[c[f]]={n:{}});for(d.f=d.f||[],f=0,h=d.f.length;h>f;f++)if(d.f[f]==b)return g;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},j.f=function(a){var b=[].slice.call(arguments,1);return function(){j.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},j.stop=function(){b=1},j.nt=function(b){return b?new RegExp(\"(?:\\\\.|\\\\/|^)\"+b+\"(?:\\\\.|\\\\/|$)\").test(a):a},j.nts=function(){return a.split(e)},j.off=j.unbind=function(a,b){if(!a)return void(j._events=i={n:{}});var c,g,h,k,l,m,n,o=a.split(e),p=[i];for(k=0,l=o.length;l>k;k++)for(m=0;m<p.length;m+=h.length-2){if(h=[m,1],c=p[m].n,o[k]!=f)c[o[k]]&&h.push(c[o[k]]);else for(g in c)c[d](g)&&h.push(c[g]);p.splice.apply(p,h)}for(k=0,l=p.length;l>k;k++)for(c=p[k];c.n;){if(b){if(c.f){for(m=0,n=c.f.length;n>m;m++)if(c.f[m]==b){c.f.splice(m,1);break}!c.f.length&&delete c.f}for(g in c.n)if(c.n[d](g)&&c.n[g].f){var q=c.n[g].f;for(m=0,n=q.length;n>m;m++)if(q[m]==b){q.splice(m,1);break}!q.length&&delete c.n[g].f}}else{delete c.f;for(g in c.n)c.n[d](g)&&c.n[g].f&&delete c.n[g].f}c=c.n}},j.once=function(a,b){var c=function(){return j.unbind(a,c),b.apply(this,arguments)};return j.on(a,c)},j.version=c,j.toString=function(){return\"You are running Eve \"+c},j}),function(a,b){\"function\"==typeof define&&define.amd?define(\"raphael.core\",[\"eve\"],function(a){return b(a)}):\"object\"==typeof exports?module.exports=b(require(\"eve\")):a.Raphael=b(a.eve)}(this,function(a){function b(c){if(b.is(c,\"function\"))return t?c():a.on(\"raphael.DOMload\",c);if(b.is(c,U))return b._engine.create[C](b,c.splice(0,3+b.is(c[0],S))).add(c);var d=Array.prototype.slice.call(arguments,0);if(b.is(d[d.length-1],\"function\")){var e=d.pop();return t?e.call(b._engine.create[C](b,d)):a.on(\"raphael.DOMload\",function(){e.call(b._engine.create[C](b,d))})}return b._engine.create[C](b,arguments)}function c(a){if(\"function\"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var d in a)a[y](d)&&(b[d]=c(a[d]));return b}function d(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function e(a,b,c){function e(){var f=Array.prototype.slice.call(arguments,0),g=f.join(\"␀\"),h=e.cache=e.cache||{},i=e.count=e.count||[];return h[y](g)?(d(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[C](b,f),c?c(h[g]):h[g])}return e}function f(){return this.hex}function g(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push([\"C\",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function h(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function i(a,b,c,d,e,f,g,i,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=h(q,a,c,e,g),s=h(q,b,d,f,i),t=r*r+s*s;o+=n[p]*M.sqrt(t)}return k*o}function j(a,b,c,d,e,f,g,h,j){if(!(0>j||i(a,b,c,d,e,f,g,h)<j)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=i(a,b,c,d,e,f,g,h,n);P(k-j)>o;)m/=2,n+=(j>k?1:-1)*m,k=i(a,b,c,d,e,f,g,h,n);return n}}function k(a,b,c,d,e,f,g,h){if(!(N(a,c)<O(e,g)||O(a,c)>N(e,g)||N(b,d)<O(f,h)||O(b,d)>N(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+O(a,c).toFixed(2)||n>+N(a,c).toFixed(2)||n<+O(e,g).toFixed(2)||n>+N(e,g).toFixed(2)||o<+O(b,d).toFixed(2)||o>+N(b,d).toFixed(2)||o<+O(f,h).toFixed(2)||o>+N(f,h).toFixed(2)))return{x:l,y:m}}}}function l(a,c,d){var e=b.bezierBBox(a),f=b.bezierBBox(c);if(!b.isBBoxIntersect(e,f))return d?0:[];for(var g=i.apply(0,a),h=i.apply(0,c),j=N(~~(g/5),1),l=N(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;j+1>q;q++){var r=b.findDotsAtSegment.apply(b,a.concat(q/j));m.push({x:r.x,y:r.y,t:q/j})}for(q=0;l+1>q;q++)r=b.findDotsAtSegment.apply(b,c.concat(q/l)),n.push({x:r.x,y:r.y,t:q/l});for(q=0;j>q;q++)for(var s=0;l>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=P(u.x-t.x)<.001?\"y\":\"x\",y=P(w.x-v.x)<.001?\"y\":\"x\",z=k(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+P((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+P((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:O(A,1),t2:O(B,1)}))}}return p}function m(a,c,d){a=b._path2curve(a),c=b._path2curve(c);for(var e,f,g,h,i,j,k,m,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if(\"M\"==s[0])e=i=s[1],f=j=s[2];else{\"C\"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=c.length;u>t;t++){var v=c[t];if(\"M\"==v[0])g=k=v[1],h=m=v[2];else{\"C\"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,m,k,m],g=k,h=m);var w=l(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function n(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function o(){return this.x+G+this.y+G+this.width+\" × \"+this.height}function p(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,P(f)<b)return e;if(h=(3*l*e+2*k)*e+j,P(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),P(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function q(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[y](e)&&(d[$(e)]=a[e],c.push($(e)));c.sort(ka)}this.anim=d,this.top=c[c.length-1],this.percents=c}function r(c,d,e,f,g,h){e=$(e);var i,j,k,l,m,o,q=c.ms,r={},s={},t={};if(f)for(w=0,x=fb.length;x>w;w++){var u=fb[w];if(u.el.id==d.id&&u.anim==c){u.percent!=e?(fb.splice(w,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var w=0,x=c.percents.length;x>w;w++){if(c.percents[w]==e||c.percents[w]>f*c.top){e=c.percents[w],m=c.percents[w-1]||0,q=q/c.top*(e-m),l=c.percents[w+1],i=c.anim[e];break}f&&d.attr(c.anim[c.percents[w]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var z in i)if(i[y](z)&&(ca[y](z)||d.paper.customAttributes[y](z)))switch(r[z]=d.attr(z),null==r[z]&&(r[z]=ba[z]),s[z]=i[z],ca[z]){case S:t[z]=(s[z]-r[z])/q;break;case\"colour\":r[z]=b.getRGB(r[z]);var A=b.getRGB(s[z]);t[z]={r:(A.r-r[z].r)/q,g:(A.g-r[z].g)/q,b:(A.b-r[z].b)/q};break;case\"path\":var B=Ia(r[z],s[z]),C=B[1];for(r[z]=B[0],t[z]=[],w=0,x=r[z].length;x>w;w++){t[z][w]=[0];for(var E=1,F=r[z][w].length;F>E;E++)t[z][w][E]=(C[w][E]-r[z][w][E])/q}break;case\"transform\":var G=d._,J=Na(G[z],s[z]);if(J)for(r[z]=J.from,s[z]=J.to,t[z]=[],t[z].real=!0,w=0,x=r[z].length;x>w;w++)for(t[z][w]=[r[z][w][0]],E=1,F=r[z][w].length;F>E;E++)t[z][w][E]=(s[z][w][E]-r[z][w][E])/q;else{var K=d.matrix||new n,L={_:{transform:G.transform},getBBox:function(){return d.getBBox(1)}};r[z]=[K.a,K.b,K.c,K.d,K.e,K.f],La(L,s[z]),s[z]=L._.transform,t[z]=[(L.matrix.a-K.a)/q,(L.matrix.b-K.b)/q,(L.matrix.c-K.c)/q,(L.matrix.d-K.d)/q,(L.matrix.e-K.e)/q,(L.matrix.f-K.f)/q]}break;case\"csv\":var M=H(i[z])[I](v),N=H(r[z])[I](v);if(\"clip-rect\"==z)for(r[z]=N,t[z]=[],w=N.length;w--;)t[z][w]=(M[w]-r[z][w])/q;s[z]=M;break;default:for(M=[][D](i[z]),N=[][D](r[z]),t[z]=[],w=d.paper.customAttributes[z].length;w--;)t[z][w]=((M[w]||0)-(N[w]||0))/q}var O=i.easing,P=b.easing_formulas[O];if(!P)if(P=H(O).match(Y),P&&5==P.length){var Q=P;P=function(a){return p(a,+Q[1],+Q[2],+Q[3],+Q[4],q)}}else P=la;if(o=i.start||c.start||+new Date,u={anim:c,percent:e,timestamp:o,start:o+(c.del||0),status:0,initstatus:f||0,stop:!1,ms:q,easing:P,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||c.times,origin:d.attr(),totalOrigin:g},fb.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-q*f,1==fb.length))return hb();k&&(u.start=new Date-u.ms*f),1==fb.length&&gb(hb)}a(\"raphael.anim.start.\"+d.id,d,c)}}function s(a){for(var b=0;b<fb.length;b++)fb[b].el.paper==a&&fb.splice(b--,1)}b.version=\"2.1.4\",b.eve=a;var t,u,v=/[, ]+/,w={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},x=/\\{(\\d+)\\}/g,y=\"hasOwnProperty\",z={doc:document,win:window},A={was:Object.prototype[y].call(z.win,\"Raphael\"),is:z.win.Raphael},B=function(){this.ca=this.customAttributes={}},C=\"apply\",D=\"concat\",E=\"ontouchstart\"in z.win||z.win.DocumentTouch&&z.doc instanceof DocumentTouch,F=\"\",G=\" \",H=String,I=\"split\",J=\"click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel\"[I](G),K={mousedown:\"touchstart\",mousemove:\"touchmove\",mouseup:\"touchend\"},L=H.prototype.toLowerCase,M=Math,N=M.max,O=M.min,P=M.abs,Q=M.pow,R=M.PI,S=\"number\",T=\"string\",U=\"array\",V=Object.prototype.toString,W=(b._ISURL=/^url\\(['\"]?(.+?)['\"]?\\)$/i,/^\\s*((#[a-f\\d]{6})|(#[a-f\\d]{3})|rgba?\\(\\s*([\\d\\.]+%?\\s*,\\s*[\\d\\.]+%?\\s*,\\s*[\\d\\.]+%?(?:\\s*,\\s*[\\d\\.]+%?)?)\\s*\\)|hsba?\\(\\s*([\\d\\.]+(?:deg|\\xb0|%)?\\s*,\\s*[\\d\\.]+%?\\s*,\\s*[\\d\\.]+(?:%?\\s*,\\s*[\\d\\.]+)?)%?\\s*\\)|hsla?\\(\\s*([\\d\\.]+(?:deg|\\xb0|%)?\\s*,\\s*[\\d\\.]+%?\\s*,\\s*[\\d\\.]+(?:%?\\s*,\\s*[\\d\\.]+)?)%?\\s*\\))\\s*$/i),X={NaN:1,Infinity:1,\"-Infinity\":1},Y=/^(?:cubic-)?bezier\\(([^,]+),([^,]+),([^,]+),([^\\)]+)\\)/,Z=M.round,$=parseFloat,_=parseInt,aa=H.prototype.toUpperCase,ba=b._availableAttrs={\"arrow-end\":\"none\",\"arrow-start\":\"none\",blur:0,\"clip-rect\":\"0 0 1e9 1e9\",cursor:\"default\",cx:0,cy:0,fill:\"#fff\",\"fill-opacity\":1,font:'10px \"Arial\"',\"font-family\":'\"Arial\"',\"font-size\":\"10\",\"font-style\":\"normal\",\"font-weight\":400,gradient:0,height:0,href:\"http://raphaeljs.com/\",\"letter-spacing\":0,opacity:1,path:\"M0,0\",r:0,rx:0,ry:0,src:\"\",stroke:\"#000\",\"stroke-dasharray\":\"\",\"stroke-linecap\":\"butt\",\"stroke-linejoin\":\"butt\",\"stroke-miterlimit\":0,\"stroke-opacity\":1,\"stroke-width\":1,target:\"_blank\",\"text-anchor\":\"middle\",title:\"Raphael\",transform:\"\",width:0,x:0,y:0},ca=b._availableAnimAttrs={blur:S,\"clip-rect\":\"csv\",cx:S,cy:S,fill:\"colour\",\"fill-opacity\":S,\"font-size\":S,height:S,opacity:S,path:\"path\",r:S,rx:S,ry:S,stroke:\"colour\",\"stroke-opacity\":S,\"stroke-width\":S,transform:\"transform\",width:S,x:S,y:S},da=/[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*/,ea={hs:1,rg:1},fa=/,?([achlmqrstvxz]),?/gi,ga=/([achlmrqstvz])[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029,]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*)+)/gi,ha=/([rstm])[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029,]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*)+)/gi,ia=/(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,?[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*/gi,ja=(b._radial_gradient=/^r(?:\\(([^,]+?)[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*,[\\x09\\x0a\\x0b\\x0c\\x0d\\x20\\xa0\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u2028\\u2029]*([^\\)]+?)\\))?/,{}),ka=function(a,b){return $(a)-$(b)},la=function(a){return a},ma=b._rectPath=function(a,b,c,d,e){return e?[[\"M\",a+e,b],[\"l\",c-2*e,0],[\"a\",e,e,0,0,1,e,e],[\"l\",0,d-2*e],[\"a\",e,e,0,0,1,-e,e],[\"l\",2*e-c,0],[\"a\",e,e,0,0,1,-e,-e],[\"l\",0,2*e-d],[\"a\",e,e,0,0,1,e,-e],[\"z\"]]:[[\"M\",a,b],[\"l\",c,0],[\"l\",0,d],[\"l\",-c,0],[\"z\"]]},na=function(a,b,c,d){return null==d&&(d=c),[[\"M\",a,b],[\"m\",0,-d],[\"a\",c,d,0,1,1,0,2*d],[\"a\",c,d,0,1,1,0,-2*d],[\"z\"]]},oa=b._getPath={path:function(a){return a.attr(\"path\")},circle:function(a){var b=a.attrs;return na(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return na(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return ma(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return ma(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return ma(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return ma(b.x,b.y,b.width,b.height)}},pa=b.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Ia(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(b._g=z,b.type=z.win.SVGAngle||z.doc.implementation.hasFeature(\"http://www.w3.org/TR/SVG11/feature#BasicStructure\",\"1.1\")?\"SVG\":\"VML\",\"VML\"==b.type){var qa,ra=z.doc.createElement(\"div\");if(ra.innerHTML='<v:shape adj=\"1\"/>',qa=ra.firstChild,qa.style.behavior=\"url(#default#VML)\",!qa||\"object\"!=typeof qa.adj)return b.type=F;ra=null}b.svg=!(b.vml=\"VML\"==b.type),b._Paper=B,b.fn=u=B.prototype=b.prototype,b._id=0,b._oid=0,b.is=function(a,b){return b=L.call(b),\"finite\"==b?!X[y](+a):\"array\"==b?a instanceof Array:\"null\"==b&&null===a||b==typeof a&&null!==a||\"object\"==b&&a===Object(a)||\"array\"==b&&Array.isArray&&Array.isArray(a)||V.call(a).slice(8,-1).toLowerCase()==b},b.angle=function(a,c,d,e,f,g){if(null==f){var h=a-d,i=c-e;return h||i?(180+180*M.atan2(-i,-h)/R+360)%360:0}return b.angle(a,c,f,g)-b.angle(d,e,f,g)},b.rad=function(a){return a%360*R/180},b.deg=function(a){return Math.round(180*a/R%360*1e3)/1e3},b.snapTo=function(a,c,d){if(d=b.is(d,\"finite\")?d:10,b.is(a,U)){for(var e=a.length;e--;)if(P(a[e]-c)<=d)return a[e]}else{a=+a;var f=c%a;if(d>f)return c-f;if(f>a-d)return c-f+a}return c};b.createUUID=function(a,b){return function(){return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*M.random()|0,c=\"x\"==a?b:3&b|8;return c.toString(16)});b.setWindow=function(c){a(\"raphael.setWindow\",b,z.win,c),z.win=c,z.doc=z.win.document,b._engine.initWin&&b._engine.initWin(z.win)};var sa=function(a){if(b.vml){var c,d=/^\\s+|\\s+$/g;try{var f=new ActiveXObject(\"htmlfile\");f.write(\"<body>\"),f.close(),c=f.body}catch(g){c=createPopup().document.body}var h=c.createTextRange();sa=e(function(a){try{c.style.color=H(a).replace(d,F);var b=h.queryCommandValue(\"ForeColor\");return b=(255&b)<<16|65280&b|(16711680&b)>>>16,\"#\"+(\"000000\"+b.toString(16)).slice(-6)}catch(e){return\"none\"}})}else{var i=z.doc.createElement(\"i\");i.title=\"Raphaël Colour Picker\",i.style.display=\"none\",z.doc.body.appendChild(i),sa=e(function(a){return i.style.color=a,z.doc.defaultView.getComputedStyle(i,F).getPropertyValue(\"color\")})}return sa(a)},ta=function(){return\"hsb(\"+[this.h,this.s,this.b]+\")\"},ua=function(){return\"hsl(\"+[this.h,this.s,this.l]+\")\"},va=function(){return this.hex},wa=function(a,c,d){if(null==c&&b.is(a,\"object\")&&\"r\"in a&&\"g\"in a&&\"b\"in a&&(d=a.b,c=a.g,a=a.r),null==c&&b.is(a,T)){var e=b.getRGB(a);a=e.r,c=e.g,d=e.b}return(a>1||c>1||d>1)&&(a/=255,c/=255,d/=255),[a,c,d]},xa=function(a,c,d,e){a*=255,c*=255,d*=255;var f={r:a,g:c,b:d,hex:b.rgb(a,c,d),toString:va};return b.is(e,\"finite\")&&(f.opacity=e),f};b.color=function(a){var c;return b.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"b\"in a?(c=b.hsb2rgb(a),a.r=c.r,a.g=c.g,a.b=c.b,a.hex=c.hex):b.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"l\"in a?(c=b.hsl2rgb(a),a.r=c.r,a.g=c.g,a.b=c.b,a.hex=c.hex):(b.is(a,\"string\")&&(a=b.getRGB(a)),b.is(a,\"object\")&&\"r\"in a&&\"g\"in a&&\"b\"in a?(c=b.rgb2hsl(a),a.h=c.h,a.s=c.s,a.l=c.l,c=b.rgb2hsb(a),a.v=c.b):(a={hex:\"none\"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=va,a},b.hsb2rgb=function(a,b,c,d){this.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"b\"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-P(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],xa(e,f,g,d)},b.hsl2rgb=function(a,b,c,d){this.is(a,\"object\")&&\"h\"in a&&\"s\"in a&&\"l\"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-P(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],xa(e,f,g,d)},b.rgb2hsb=function(a,b,c){c=wa(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=N(a,b,c),g=f-O(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:ta}},b.rgb2hsl=function(a,b,c){c=wa(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=N(a,b,c),h=O(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:ua}},b._path2string=function(){return this.join(\",\").replace(fa,\"$1\")};b._preload=function(a,b){var c=z.doc.createElement(\"img\");c.style.cssText=\"position:absolute;left:-9999em;top:-9999em\",c.onload=function(){b.call(this),this.onload=null,z.doc.body.removeChild(this)},c.onerror=function(){z.doc.body.removeChild(this)},z.doc.body.appendChild(c),c.src=a};b.getRGB=e(function(a){if(!a||(a=H(a)).indexOf(\"-\")+1)return{r:-1,g:-1,b:-1,hex:\"none\",error:1,toString:f};if(\"none\"==a)return{r:-1,g:-1,b:-1,hex:\"none\",toString:f};!(ea[y](a.toLowerCase().substring(0,2))||\"#\"==a.charAt())&&(a=sa(a));var c,d,e,g,h,i,j=a.match(W);return j?(j[2]&&(e=_(j[2].substring(5),16),d=_(j[2].substring(3,5),16),c=_(j[2].substring(1,3),16)),j[3]&&(e=_((h=j[3].charAt(3))+h,16),d=_((h=j[3].charAt(2))+h,16),c=_((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][I](da),c=$(i[0]),\"%\"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),\"%\"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),\"%\"==i[2].slice(-1)&&(e*=2.55),\"rgba\"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&\"%\"==i[3].slice(-1)&&(g/=100)),j[5]?(i=j[5][I](da),c=$(i[0]),\"%\"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),\"%\"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),\"%\"==i[2].slice(-1)&&(e*=2.55),(\"deg\"==i[0].slice(-3)||\"°\"==i[0].slice(-1))&&(c/=360),\"hsba\"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&\"%\"==i[3].slice(-1)&&(g/=100),b.hsb2rgb(c,d,e,g)):j[6]?(i=j[6][I](da),c=$(i[0]),\"%\"==i[0].slice(-1)&&(c*=2.55),d=$(i[1]),\"%\"==i[1].slice(-1)&&(d*=2.55),e=$(i[2]),\"%\"==i[2].slice(-1)&&(e*=2.55),(\"deg\"==i[0].slice(-3)||\"°\"==i[0].slice(-1))&&(c/=360),\"hsla\"==j[1].toLowerCase().slice(0,4)&&(g=$(i[3])),i[3]&&\"%\"==i[3].slice(-1)&&(g/=100),b.hsl2rgb(c,d,e,g)):(j={r:c,g:d,b:e,toString:f},j.hex=\"#\"+(16777216|e|d<<8|c<<16).toString(16).slice(1),b.is(g,\"finite\")&&(j.opacity=g),j)):{r:-1,g:-1,b:-1,hex:\"none\",error:1,toString:f}},b),b.hsb=e(function(a,c,d){return b.hsb2rgb(a,c,d).hex}),b.hsl=e(function(a,c,d){return b.hsl2rgb(a,c,d).hex}),b.rgb=e(function(a,b,c){function d(a){return a+.5|0}return\"#\"+(16777216|d(c)|d(b)<<8|d(a)<<16).toString(16).slice(1)}),b.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},b.getColor.reset=function(){delete this.start},b.parsePathString=function(a){if(!a)return null;var c=ya(a);if(c.arr)return Aa(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return b.is(a,U)&&b.is(a[0],U)&&(e=Aa(a)),e.length||H(a).replace(ga,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(ia,function(a,b){b&&f.push(+b)}),\"m\"==g&&f.length>2&&(e.push([b][D](f.splice(0,2))),g=\"l\",b=\"m\"==b?\"l\":\"L\"),\"r\"==g)e.push([b][D](f));else for(;f.length>=d[g]&&(e.push([b][D](f.splice(0,d[g]))),d[g]););}),e.toString=b._path2string,c.arr=Aa(e),e},b.parseTransformString=e(function(a){if(!a)return null;var c=[];return b.is(a,U)&&b.is(a[0],U)&&(c=Aa(a)),c.length||H(a).replace(ha,function(a,b,d){{var e=[];L.call(b)}d.replace(ia,function(a,b){b&&e.push(+b)}),c.push([b][D](e))}),c.toString=b._path2string,c});var ya=function(a){var b=ya.ps=ya.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[y](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};b.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=Q(j,3),l=Q(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*M.atan2(q-s,r-t)/R;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},b.bezierBBox=function(a,c,d,e,f,g,h,i){b.is(a,\"array\")||(a=[a,c,d,e,f,g,h,i]);var j=Ha.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},b.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},b.isBBoxIntersect=function(a,c){var d=b.isPointInsideBBox;return d(c,a.x,a.y)||d(c,a.x2,a.y)||d(c,a.x,a.y2)||d(c,a.x2,a.y2)||d(a,c.x,c.y)||d(a,c.x2,c.y)||d(a,c.x,c.y2)||d(a,c.x2,c.y2)||(a.x<c.x2&&a.x>c.x||c.x<a.x2&&c.x>a.x)&&(a.y<c.y2&&a.y>c.y||c.y<a.y2&&c.y>a.y)},b.pathIntersection=function(a,b){return m(a,b)},b.pathIntersectionNumber=function(a,b){return m(a,b,1)},b.isPointInsidePath=function(a,c,d){var e=b.pathBBox(a);return b.isPointInsideBBox(e,c,d)&&m(a,[[\"M\",c,d],[\"H\",e.x2+10]],1)%2==1},b._removedFactory=function(b){return function(){a(\"raphael.log\",null,\"Raphaël: you are calling to method “\"+b+\"” of removed object\",b)}};var za=b.pathBBox=function(a){var b=ya(a);if(b.bbox)return c(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Ia(a);for(var d,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(d=a[i],\"M\"==d[0])e=d[1],f=d[2],g.push(e),h.push(f);else{var k=Ha(e,f,d[1],d[2],d[3],d[4],d[5],d[6]);g=g[D](k.min.x,k.max.x),h=h[D](k.min.y,k.max.y),e=d[5],f=d[6]}var l=O[C](0,g),m=O[C](0,h),n=N[C](0,g),o=N[C](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=c(r),r},Aa=function(a){var d=c(a);return d.toString=b._path2string,d},Ba=b._pathToRelative=function(a){var c=ya(a);if(c.rel)return Aa(c.rel);b.is(a,U)&&b.is(a&&a[0],U)||(a=b.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;\"M\"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push([\"M\",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=L.call(m[0]))switch(l[0]=L.call(m[0]),l[0]){case\"a\":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case\"v\":l[1]=+(m[1]-f).toFixed(3);break;case\"m\":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],\"m\"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case\"z\":e=g,f=h;break;case\"h\":e+=+d[j][r-1];break;case\"v\":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=b._path2string,c.rel=Aa(d),d},Ca=b._pathToAbsolute=function(a){var c=ya(a);if(c.abs)return Aa(c.abs);if(b.is(a,U)&&b.is(a&&a[0],U)||(a=b.parsePathString(a)),!a||!a.length)return[[\"M\",0,0]];var d=[],e=0,f=0,h=0,i=0,j=0;\"M\"==a[0][0]&&(e=+a[0][1],f=+a[0][2],h=e,i=f,j++,d[0]=[\"M\",e,f]);for(var k,l,m=3==a.length&&\"M\"==a[0][0]&&\"R\"==a[1][0].toUpperCase()&&\"Z\"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=aa.call(l[0]))switch(k[0]=aa.call(l[0]),k[0]){case\"A\":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case\"V\":k[1]=+l[1]+f;break;case\"H\":k[1]=+l[1]+e;break;case\"R\":for(var p=[e,f][D](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[D](g(p,m));break;case\"M\":h=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if(\"R\"==l[0])p=[e,f][D](l.slice(1)),d.pop(),d=d[D](g(p,m)),k=[\"R\"][D](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case\"Z\":e=h,f=i;break;case\"H\":e=k[1];break;case\"V\":f=k[1];break;case\"M\":h=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=b._path2string,c.abs=Aa(d),d},Da=function(a,b,c,d){return[a,b,c,d,c,d]},Ea=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Fa=function(a,b,c,d,f,g,h,i,j,k){var l,m=120*R/180,n=R/180*(+f||0),o=[],p=e(function(a,b,c){var d=a*M.cos(c)-b*M.sin(c),e=a*M.sin(c)+b*M.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(M.cos(R/180*f),M.sin(R/180*f),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=M.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*M.sqrt(P((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=M.asin(((b-x)/d).toFixed(9)),z=M.asin(((j-x)/d).toFixed(9));y=w>a?R-y:y,z=w>i?R-z:z,0>y&&(y=2*R+y),0>z&&(z=2*R+z),h&&y>z&&(y-=2*R),!h&&z>y&&(z-=2*R)}var A=z-y;if(P(A)>m){var B=z,C=i,E=j;z=y+m*(h&&z>y?1:-1),i=w+c*M.cos(z),j=x+d*M.sin(z),o=Fa(i,j,c,d,f,0,h,C,E,[z,B,w,x])}A=z-y;var F=M.cos(y),G=M.sin(y),H=M.cos(z),J=M.sin(z),K=M.tan(A/4),L=4/3*c*K,N=4/3*d*K,O=[a,b],Q=[a+L*G,b-N*F],S=[i+L*J,j-N*H],T=[i,j];if(Q[0]=2*O[0]-Q[0],Q[1]=2*O[1]-Q[1],k)return[Q,S,T][D](o);o=[Q,S,T][D](o).join()[I](\",\");for(var U=[],V=0,W=o.length;W>V;V++)U[V]=V%2?p(o[V-1],o[V],n).y:p(o[V],o[V+1],n).x;return U},Ga=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:Q(j,3)*a+3*Q(j,2)*i*c+3*j*i*i*e+Q(i,3)*g,y:Q(j,3)*b+3*Q(j,2)*i*d+3*j*i*i*f+Q(i,3)*h}},Ha=e(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+M.sqrt(k*k-4*j*l))/2/j,n=(-k-M.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return P(m)>\"1e12\"&&(m=.5),P(n)>\"1e12\"&&(n=.5),m>0&&1>m&&(i=Ga(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ga(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+M.sqrt(k*k-4*j*l))/2/j,n=(-k-M.sqrt(k*k-4*j*l))/2/j,P(m)>\"1e12\"&&(m=.5),P(n)>\"1e12\"&&(n=.5),m>0&&1>m&&(i=Ga(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Ga(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:O[C](0,p),y:O[C](0,o)},max:{x:N[C](0,p),y:N[C](0,o)}}}),Ia=b._path2curve=e(function(a,b){var c=!b&&ya(a);if(!b&&c.curve)return Aa(c.curve);for(var d=Ca(a),e=b&&Ca(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e,f={T:1,Q:1};if(!a)return[\"C\",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in f)&&(b.qx=b.qy=null),a[0]){case\"M\":b.X=a[1],b.Y=a[2];break;case\"A\":a=[\"C\"][D](Fa[C](0,[b.x,b.y][D](a.slice(1))));break;case\"S\":\"C\"==c||\"S\"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=[\"C\",d,e][D](a.slice(1));break;case\"T\":\"Q\"==c||\"T\"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=[\"C\"][D](Ea(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case\"Q\":b.qx=a[1],b.qy=a[2],a=[\"C\"][D](Ea(b.x,b.y,a[1],a[2],a[3],a[4]));break;case\"L\":a=[\"C\"][D](Da(b.x,b.y,a[1],a[2]));break;case\"H\":a=[\"C\"][D](Da(b.x,b.y,a[1],b.y));break;case\"V\":a=[\"C\"][D](Da(b.x,b.y,b.x,a[1]));break;case\"Z\":a=[\"C\"][D](Da(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)k[b]=\"A\",e&&(l[b]=\"A\"),a.splice(b++,0,[\"C\"][D](c.splice(0,6)));a.splice(b,1),p=N(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&\"M\"==a[g][0]&&\"M\"!=b[g][0]&&(b.splice(g,0,[\"M\",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],p=N(d.length,e&&e.length||0))},k=[],l=[],m=\"\",n=\"\",o=0,p=N(d.length,e&&e.length||0);p>o;o++){d[o]&&(m=d[o][0]),\"C\"!=m&&(k[o]=m,o&&(n=k[o-1])),d[o]=h(d[o],f,n),\"A\"!=k[o]&&\"C\"==m&&(k[o]=\"C\"),i(d,o),e&&(e[o]&&(m=e[o][0]),\"C\"!=m&&(l[o]=m,o&&(n=l[o-1])),e[o]=h(e[o],g,n),\"A\"!=l[o]&&\"C\"==m&&(l[o]=\"C\"),i(e,o)),j(d,e,f,g,o),j(e,d,g,f,o);var q=d[o],r=e&&e[o],s=q.length,t=e&&r.length;f.x=q[s-2],f.y=q[s-1],f.bx=$(q[s-4])||f.x,f.by=$(q[s-3])||f.y,g.bx=e&&($(r[t-4])||g.x),g.by=e&&($(r[t-3])||g.y),g.x=e&&r[t-2],g.y=e&&r[t-1]}return e||(c.curve=Aa(d)),e?[d,e]:d},null,Aa),Ja=(b._parseDots=e(function(a){for(var c=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\\d\\.]*)/);if(f.color=b.getRGB(g[1]),f.color.error)return null;f.opacity=f.color.opacity,f.color=f.color.hex,g[2]&&(f.offset=g[2]+\"%\"),c.push(f)}for(d=1,e=c.length-1;e>d;d++)if(!c[d].offset){for(var h=$(c[d-1].offset||0),i=0,j=d+1;e>j;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=$(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,c[d].offset=h+\"%\"}return c}),b._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Ka=(b._tofront=function(a,b){b.top!==a&&(Ja(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},b._toback=function(a,b){b.bottom!==a&&(Ja(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},b._insertafter=function(a,b,c){Ja(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},b._insertbefore=function(a,b,c){Ja(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},b.toMatrix=function(a,b){var c=za(a),d={_:{transform:F},getBBox:function(){return c}};return La(d,b),d.matrix}),La=(b.transformPath=function(a,b){return pa(a,Ka(a,b))},b._extractTransform=function(a,c){if(null==c)return a._.transform;c=H(c).replace(/\\.{3}|\\u2026/g,a._.transform||F);var d=b.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=a._,k=new n;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var o,p,q,r,s,t=d[l],u=t.length,v=H(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;\"t\"==v&&3==u?w?(o=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-o,r-p)):k.translate(t[1],t[2]):\"r\"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):\"s\"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):\"m\"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Ma=function(a){var b=a[0];switch(b.toLowerCase()){case\"t\":return[b,0,0];case\"m\":return[b,1,0,0,1,0,0];case\"r\":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case\"s\":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Na=b._equaliseTransform=function(a,c){\n> 17953 | c=H(c).replace(/\\.{3}|\\u2026/g,a),a=b.parseTransformString(a)||[],c=b.parseTransformString(c)||[];for(var d,e,f,g,h=N(a.length,c.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Ma(c[k]),g=c[k]||Ma(f),f[0]!=g[0]||\"r\"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||\"s\"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=N(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};b._getContainer=function(a,c,d,e){var f;return f=null!=e||b.is(a,\"object\")?a:z.doc.getElementById(a),null!=f?f.tagName?null==c?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d}:{container:1,x:a,y:c,width:d,height:e}:void 0},b.pathToRelative=Ba,b._engine={},b.path2curve=Ia,b.matrix=function(a,b,c,d,e,f){return new n(a,b,c,d,e,f)},function(a){function c(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var b=M.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof n&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new n(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new n(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,c,d){a=b.rad(a),c=c||0,d=d||0;var e=+M.cos(a).toFixed(9),f=+M.sin(a).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[H.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return b.svg?\"matrix(\"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+\")\":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return\"progid:DXImageTransform.Microsoft.Matrix(M11=\"+this.get(0)+\", M12=\"+this.get(2)+\", M21=\"+this.get(1)+\", M22=\"+this.get(3)+\", Dx=\"+this.get(4)+\", Dy=\"+this.get(5)+\", sizingmethod='auto expand')\"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=M.sqrt(c(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=M.sqrt(c(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=b.deg(M.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=b.deg(M.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[I]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?\"t\"+[b.dx,b.dy]:F)+(1!=b.scalex||1!=b.scaley?\"s\"+[b.scalex,b.scaley,0,0]:F)+(b.rotate?\"r\"+[b.rotate,0,0]:F)):\"m\"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(n.prototype);for(var Oa=function(){this.returnValue=!1},Pa=function(){return this.originalEvent.preventDefault()},Qa=function(){this.cancelBubble=!0},Ra=function(){return this.originalEvent.stopPropagation()},Sa=function(a){var b=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,c=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},Ta=function(){return z.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=Sa(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),E&&K[b]){var f=function(b){for(var e=Sa(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Pa,b.stopPropagation=Ra;break}return c.call(d,b,e.x,e.y)};a.addEventListener(K[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),E&&K[b]&&a.removeEventListener(K[b],f,!1),!0}}:z.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||z.win.event;var b=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,e=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Oa,a.stopPropagation=a.stopPropagation||Qa,c.call(d,a,f,g)};a.attachEvent(\"on\"+b,e);var f=function(){return a.detachEvent(\"on\"+b,e),!0};return f}:void 0}(),Ua=[],Va=function(b){for(var c,d=b.clientX,e=b.clientY,f=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,g=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft,h=Ua.length;h--;){if(c=Ua[h],E&&b.touches){for(var i,j=b.touches.length;j--;)if(i=b.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(b.originalEvent?b.originalEvent:b).preventDefault();break}}else b.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;z.win.opera&&n.removeChild(l),l.style.display=\"none\",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,z.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&a(\"raphael.drag.over.\"+c.el.id,c.el,k),d+=g,e+=f,a(\"raphael.drag.move.\"+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,b)}},Wa=function(c){b.unmousemove(Va).unmouseup(Wa);for(var d,e=Ua.length;e--;)d=Ua[e],d.el._drag={},a(\"raphael.drag.end.\"+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,c);Ua=[]},Xa=b.el={},Ya=J.length;Ya--;)!function(a){b[a]=Xa[a]=function(c,d){return b.is(c,\"function\")&&(this.events=this.events||[],this.events.push({name:a,f:c,unbind:Ta(this.shape||this.node||z.doc,a,c,d||this)})),this},b[\"un\"+a]=Xa[\"un\"+a]=function(c){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!b.is(c,\"undefined\")&&d[e].f!=c||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(J[Ya]);Xa.data=function(c,d){var e=ja[this.id]=ja[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(b.is(c,\"object\")){for(var f in c)c[y](f)&&this.data(f,c[f]);return this}return a(\"raphael.data.get.\"+this.id,this,e[c],c),e[c]}return e[c]=d,a(\"raphael.data.set.\"+this.id,this,d,c),this},Xa.removeData=function(a){return null==a?ja[this.id]={}:ja[this.id]&&delete ja[this.id][a],this},Xa.getData=function(){return c(ja[this.id]||{})},Xa.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},Xa.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var Za=[];Xa.drag=function(c,d,e,f,g,h){function i(i){(i.originalEvent||i).preventDefault();var j=i.clientX,k=i.clientY,l=z.doc.documentElement.scrollTop||z.doc.body.scrollTop,m=z.doc.documentElement.scrollLeft||z.doc.body.scrollLeft;if(this._drag.id=i.identifier,E&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!Ua.length&&b.mousemove(Va).mouseup(Wa),Ua.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&a.on(\"raphael.drag.start.\"+this.id,d),c&&a.on(\"raphael.drag.move.\"+this.id,c),e&&a.on(\"raphael.drag.end.\"+this.id,e),a(\"raphael.drag.start.\"+this.id,g||f||this,i.clientX+m,i.clientY+l,i)}return this._drag={},Za.push({el:this,start:i}),this.mousedown(i),this},Xa.onDragOver=function(b){b?a.on(\"raphael.drag.over.\"+this.id,b):a.unbind(\"raphael.drag.over.\"+this.id)},Xa.undrag=function(){for(var c=Za.length;c--;)Za[c].el==this&&(this.unmousedown(Za[c].start),Za.splice(c,1),a.unbind(\"raphael.drag.*.\"+this.id));!Za.length&&b.unmousemove(Va).unmouseup(Wa),Ua=[]},u.circle=function(a,c,d){var e=b._engine.circle(this,a||0,c||0,d||0);return this.__set__&&this.__set__.push(e),e},u.rect=function(a,c,d,e,f){var g=b._engine.rect(this,a||0,c||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},u.ellipse=function(a,c,d,e){var f=b._engine.ellipse(this,a||0,c||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},u.path=function(a){a&&!b.is(a,T)&&!b.is(a[0],U)&&(a+=F);var c=b._engine.path(b.format[C](b,arguments),this);return this.__set__&&this.__set__.push(c),c},u.image=function(a,c,d,e,f){var g=b._engine.image(this,a||\"about:blank\",c||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},u.text=function(a,c,d){var e=b._engine.text(this,a||0,c||0,H(d));return this.__set__&&this.__set__.push(e),e},u.set=function(a){!b.is(a,\"array\")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var c=new jb(a);return this.__set__&&this.__set__.push(c),c.paper=this,c.type=\"set\",c},u.setStart=function(a){this.__set__=a||this.set()},u.setFinish=function(a){var b=this.__set__;return delete this.__set__,b},u.getSize=function(){var a=this.canvas.parentNode;return{width:a.offsetWidth,height:a.offsetHeight}},u.setSize=function(a,c){return b._engine.setSize.call(this,a,c)},u.setViewBox=function(a,c,d,e,f){return b._engine.setViewBox.call(this,a,c,d,e,f)},u.top=u.bottom=null,u.raphael=b;var $a=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(z.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(z.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};u.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=z.doc.elementFromPoint(a,b);if(z.win.opera&&\"svg\"==e.tagName){var f=$a(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},u.getElementsByBBox=function(a){var c=this.set();return this.forEach(function(d){b.isBBoxIntersect(d.getBBox(),a)&&c.push(d)}),c},u.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},u.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},u.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},Xa.isPointInside=function(a,c){var d=this.realPath=oa[this.type](this);return this.attr(\"transform\")&&this.attr(\"transform\").length&&(d=b.transformPath(d,this.attr(\"transform\"))),b.isPointInsidePath(d,a,c)},Xa.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=oa[this.type](this),b.bboxwt=za(this.realPath),b.bboxwt.toString=o,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=oa[this.type](this)),b.bbox=za(pa(this.realPath,this.matrix)),b.bbox.toString=o,b.dirty=b.dirtyT=0),b.bbox)},Xa.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},Xa.glow=function(a){if(\"text\"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr(\"stroke-width\")||1),fill:a.fill||!1,opacity:null==a.opacity?.5:a.opacity,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||\"#000\"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||oa[this.type](this);f=this.matrix?pa(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:\"none\",\"stroke-linejoin\":\"round\",\"stroke-linecap\":\"round\",\"stroke-width\":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var _a=function(a,c,d,e,f,g,h,k,l){return null==l?i(a,c,d,e,f,g,h,k):b.findDotsAtSegment(a,c,d,e,f,g,h,k,j(a,c,d,e,f,g,h,k,l))},ab=function(a,c){return function(d,e,f){d=Ia(d);for(var g,h,i,j,k,l=\"\",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],\"M\"==i[0])g=+i[1],h=+i[2];else{if(j=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(c&&!m.start){if(k=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=[\"C\"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=[\"M\"+k.x,k.y+\"C\"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!c)return k=_a(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:c?m:b.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},bb=ab(1),cb=ab(),db=ab(0,1);b.getTotalLength=bb,b.getPointAtLength=cb,b.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return db(a,b).end;var d=db(a,c,1);return b?db(d,b).end:d},Xa.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():bb(a)},Xa.getPointAtLength=function(a){var b=this.getPath();if(b)return cb(b,a)},Xa.getPath=function(){var a,c=b._getPath[this.type];if(\"text\"!=this.type&&\"set\"!=this.type)return c&&(a=c(this)),a},Xa.getSubpath=function(a,c){var d=this.getPath();if(d)return b.getSubpath(d,a,c)};var eb=b.easing_formulas={linear:function(a){return a},\"<\":function(a){return Q(a,1.7)},\">\":function(a){return Q(a,.48)},\"<>\":function(a){var b=.48-a/1.04,c=M.sqrt(.1734+b*b),d=c-b,e=Q(P(d),1/3)*(0>d?-1:1),f=-c-b,g=Q(P(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:Q(2,-10*a)*M.sin(2*(a-.075)*R/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};eb.easeIn=eb[\"ease-in\"]=eb[\"<\"],eb.easeOut=eb[\"ease-out\"]=eb[\">\"],eb.easeInOut=eb[\"ease-in-out\"]=eb[\"<>\"],eb[\"back-in\"]=eb.backIn,eb[\"back-out\"]=eb.backOut;var fb=[],gb=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},hb=function(){for(var c=+new Date,d=0;d<fb.length;d++){var e=fb[d];if(!e.el.removed&&!e.paused){var f,g,h=c-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&fb.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var s in k)if(k[y](s)){switch(ca[s]){case S:f=+k[s]+q*i*l[s];break;case\"colour\":f=\"rgb(\"+[ib(Z(k[s].r+q*i*l[s].r)),ib(Z(k[s].g+q*i*l[s].g)),ib(Z(k[s].b+q*i*l[s].b))].join(\",\")+\")\";break;case\"path\":f=[];for(var t=0,u=k[s].length;u>t;t++){f[t]=[k[s][t][0]];for(var v=1,w=k[s][t].length;w>v;v++)f[t][v]=+k[s][t][v]+q*i*l[s][t][v];f[t]=f[t].join(G)}f=f.join(G);break;case\"transform\":if(l[s].real)for(f=[],t=0,u=k[s].length;u>t;t++)for(f[t]=[k[s][t][0]],v=1,w=k[s][t].length;w>v;v++)f[t][v]=k[s][t][v]+q*i*l[s][t][v];else{var x=function(a){return+k[s][a]+q*i*l[s][a]};f=[[\"m\",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case\"csv\":if(\"clip-rect\"==s)for(f=[],t=4;t--;)f[t]=+k[s][t]+q*i*l[s][t];break;default:var z=[][D](k[s]);for(f=[],t=n.paper.customAttributes[s].length;t--;)f[t]=+z[t]+q*i*l[s][t]}o[s]=f}n.attr(o),function(b,c,d){setTimeout(function(){a(\"raphael.anim.frame.\"+b,c,d)})}(n.id,n,e.anim)}else{if(function(c,d,e){setTimeout(function(){a(\"raphael.anim.frame.\"+d.id,d,e),a(\"raphael.anim.finish.\"+d.id,d,e),b.is(c,\"function\")&&c.call(d)})}(e.callback,n,e.anim),n.attr(m),fb.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[y](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),r(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&r(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}fb.length&&gb(hb)},ib=function(a){return a>255?255:0>a?0:a};Xa.animateWith=function(a,c,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof q?d:b.animation(d,e,f,g);r(i,h,i.percents[0],null,h.attr());for(var j=0,k=fb.length;k>j;j++)if(fb[j].anim==c&&fb[j].el==a){fb[k-1].start=fb[j].start;break}return h},Xa.onAnimation=function(b){return b?a.on(\"raphael.anim.frame.\"+this.id,b):a.unbind(\"raphael.anim.frame.\"+this.id),this},q.prototype.delay=function(a){var b=new q(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},q.prototype.repeat=function(a){var b=new q(this.anim,this.ms);return b.del=this.del,b.times=M.floor(N(a,0))||1,b},b.animation=function(a,c,d,e){if(a instanceof q)return a;(b.is(d,\"function\")||!d)&&(e=e||d||null,d=null),a=Object(a),c=+c||0;var f,g,h={};for(g in a)a[y](g)&&$(g)!=g&&$(g)+\"%\"!=g&&(f=!0,h[g]=a[g]);if(f)return d&&(h.easing=d),e&&(h.callback=e),new q({100:h},c);if(e){var i=0;for(var j in a){var k=_(j);a[y](j)&&k>i&&(i=k)}i+=\"%\",!a[i].callback&&(a[i].callback=e)}return new q(a,c)},Xa.animate=function(a,c,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof q?a:b.animation(a,c,d,e);return r(g,f,g.percents[0],null,f.attr()),f},Xa.setTime=function(a,b){return a&&null!=b&&this.status(a,O(b,a.ms)/a.ms),this},Xa.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return r(a,this,-1,O(b,1)),this;for(c=fb.length;c>f;f++)if(d=fb[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},Xa.pause=function(b){for(var c=0;c<fb.length;c++)fb[c].el.id!=this.id||b&&fb[c].anim!=b||a(\"raphael.anim.pause.\"+this.id,this,fb[c].anim)!==!1&&(fb[c].paused=!0);return this},Xa.resume=function(b){for(var c=0;c<fb.length;c++)if(fb[c].el.id==this.id&&(!b||fb[c].anim==b)){var d=fb[c];a(\"raphael.anim.resume.\"+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},Xa.stop=function(b){for(var c=0;c<fb.length;c++)fb[c].el.id!=this.id||b&&fb[c].anim!=b||a(\"raphael.anim.stop.\"+this.id,this,fb[c].anim)!==!1&&fb.splice(c--,1);return this},a.on(\"raphael.remove\",s),a.on(\"raphael.clear\",s),Xa.toString=function(){return\"Raphaël’s object\"};var jb=function(a){if(this.items=[],this.length=0,this.type=\"set\",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=Xa.constructor&&a[b].constructor!=jb||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},kb=jb.prototype;kb.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=Xa.constructor&&a.constructor!=jb||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},kb.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},kb.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var lb in Xa)Xa[y](lb)&&(kb[lb]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][C](c,b)})}}(lb));return kb.attr=function(a,c){if(a&&b.is(a,U)&&b.is(a[0],\"object\"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,c);return this},kb.clear=function(){for(;this.length;)this.pop()},kb.splice=function(a,b,c){a=0>a?N(this.length+a,0):a,b=N(0,O(this.length-a,b));var d,e=[],f=[],g=[];for(d=2;d<arguments.length;d++)g.push(arguments[d]);for(d=0;b>d;d++)f.push(this[a+d]);for(;d<this.length-a;d++)e.push(this[a+d]);var h=g.length;for(d=0;d<h+e.length;d++)this.items[a+d]=this[a+d]=h>d?g[d]:e[d-h];for(d=this.items.length=this.length-=b-h;this[d];)delete this[d++];return new jb(f)},kb.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},kb.animate=function(a,c,d,e){(b.is(d,\"function\")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=b.is(d,T)?d:g;var k=b.animation(a,c,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},kb.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},kb.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=O[C](0,a),b=O[C](0,b),c=N[C](0,c),d=N[C](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},kb.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},kb.toString=function(){return\"Raphaël‘s set\"},kb.glow=function(a){var b=this.paper.set();return this.forEach(function(c,d){var e=c.glow(a);null!=e&&e.forEach(function(a,c){b.push(a)})}),b},kb.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(c=!0,!1):void 0}),c},b.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face[\"font-family\"];for(var d in a.face)a.face[y](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face[\"units-per-em\"]=_(a.face[\"units-per-em\"],10);for(var e in a.glyphs)if(a.glyphs[y](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&\"M\"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:\"L\",c:\"C\",x:\"z\",t:\"m\",r:\"l\",v:\"c\"}[a]||\"M\"})+\"z\"},f.k)for(var g in f.k)f[y](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},u.getFont=function(a,c,d,e){if(e=e||\"normal\",d=d||\"normal\",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400,b.fonts){var f=b.fonts[a];if(!f){var g=new RegExp(\"(^|\\\\s)\"+a.replace(/[^\\w\\d\\s+!~.:_-]/g,F)+\"(\\\\s|$)\",\"i\");for(var h in b.fonts)if(b.fonts[y](h)&&g.test(h)){f=b.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face[\"font-weight\"]!=c||i.face[\"font-style\"]!=d&&i.face[\"font-style\"]||i.face[\"font-stretch\"]!=e);j++);return i}},u.print=function(a,c,d,e,f,g,h,i){g=g||\"middle\",h=N(O(h||0,1),-1),i=N(O(i||1,3),1);var j,k=H(d)[I](F),l=0,m=0,n=F;if(b.is(e,\"string\")&&(e=this.getFont(e)),e){j=(f||16)/e.face[\"units-per-em\"];for(var o=e.face.bbox[I](v),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+(\"baseline\"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if(\"\\n\"==k[t])l=0,x=0,m=0,r+=q*i;else{var w=m&&e.glyphs[k[t-1]]||{},x=e.glyphs[k[t]];l+=m?(w.w||e.w)+(w.k&&w.k[k[t]]||0)+e.w*h:0,m=1}x&&x.d&&(n+=b.transformPath(x.d,[\"t\",l*j,r*j,\"s\",j,j,p,s,\"t\",(a-p)/j,(c-s)/j]))}}return this.path(n).attr({fill:\"#000\",stroke:\"none\"})},u.add=function(a){if(b.is(a,\"array\"))for(var c,d=this.set(),e=0,f=a.length;f>e;e++)c=a[e]||{},w[y](c.type)&&d.push(this[c.type]().attr(c));return d},b.format=function(a,c){var d=b.is(c,U)?[0][D](c):arguments;return a&&b.is(a,T)&&d.length-1&&(a=a.replace(x,function(a,b){return null==d[++b]?F:d[b]})),a||F},b.fullfill=function(){var a=/\\{([^\\}]+)\\}/g,b=/(?:(?:^|\\.)(.+?)(?=\\[|\\.|$|\\()|\\[('|\")(.+?)\\2\\])(\\(\\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),\"function\"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+\"\"};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),b.ninja=function(){return A.was?z.win.Raphael=A.is:delete Raphael,b},b.st=kb,a.on(\"raphael.DOMload\",function(){t=!0}),function(a,c,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):b.eve(\"raphael.DOMload\")}null==a.readyState&&a.addEventListener&&(a.addEventListener(c,d=function(){a.removeEventListener(c,d,!1),a.readyState=\"complete\"},!1),a.readyState=\"loading\"),e()}(document,\"DOMContentLoaded\"),b}),function(a,b){\"function\"==typeof define&&define.amd?define(\"raphael.svg\",[\"raphael.core\"],function(a){return b(a)}):b(\"object\"==typeof exports?require(\"./raphael.core\"):a.Raphael)}(this,function(a){if(!a||a.svg){var b=\"hasOwnProperty\",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l=\"\",m=\" \",n=\"http://www.w3.org/1999/xlink\",o={block:\"M5,0 0,2.5 5,5z\",classic:\"M5,0 0,2.5 5,5 3.5,3 3.5,2z\",diamond:\"M2.5,0 5,2.5 2.5,5 0,2.5z\",open:\"M6,1 1,3.5 6,6\",oval:\"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z\"},p={};a.toString=function(){return\"Your browser supports SVG.\\nYou are running Raphaël \"+this.version};var q=function(d,e){if(e){\"string\"==typeof d&&(d=q(d));for(var f in e)e[b](f)&&(\"xlink:\"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS(\"http://www.w3.org/2000/svg\",d),d.style&&(d.style.webkitTapHighlightColor=\"rgba(0,0,0,0)\");return d},r=function(b,e){var j=\"linear\",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){if(e=c(e).replace(a._radial_gradient,function(a,b,c){if(j=\"radial\",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\\s*\\-\\s*/),\"linear\"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;if(k=k.replace(/[\\(\\)\\s,\\xb0#]/g,\"_\"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient),!b.gradient){s=q(j+\"Gradient\",{id:k}),b.gradient=s,q(s,\"radial\"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q(\"stop\",{offset:w[x].offset?w[x].offset:x?\"100%\":\"0%\",\"stop-color\":w[x].color||\"#fff\",\"stop-opacity\":isFinite(w[x].opacity)?w[x].opacity:1}))}}return q(o,{fill:\"url('\"+document.location.origin+document.location.pathname+\"#\"+k+\"')\",opacity:1,\"fill-opacity\":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+\" translate(\"+b.x+\",\"+b.y+\")\"})},t=function(d,e,f){if(\"path\"==d.type){for(var g,h,i,j,k,m=c(e).toLowerCase().split(\"-\"),n=d.paper,r=f?\"end\":\"start\",s=d.node,t=d.attrs,u=t[\"stroke-width\"],v=m.length,w=\"classic\",x=3,y=3,z=5;v--;)switch(m[v]){case\"block\":case\"classic\":case\"oval\":case\"diamond\":case\"open\":case\"none\":w=m[v];break;case\"wide\":y=5;break;case\"narrow\":y=2;break;case\"long\":x=5;break;case\"short\":x=2}if(\"open\"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:\"none\",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:\"none\"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},\"none\"!=w){var A=\"raphael-marker-\"+w,B=\"raphael-marker-\"+r+w+x+y+\"-obj\"+d.id;a._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q(\"path\"),{\"stroke-linecap\":\"round\",d:o[w],id:A})),p[A]=1);var C,D=a._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName(\"use\")[0]):(D=q(q(\"marker\"),{id:B,markerHeight:y,markerWidth:x,orient:\"auto\",refX:j,refY:y/2}),C=q(q(\"use\"),{\"xlink:href\":\"#\"+A,transform:(f?\"rotate(180 \"+x/2+\" \"+y/2+\") \":l)+\"scale(\"+x/z+\",\"+y/z+\")\",\"stroke-width\":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*(\"diamond\"!=w&&\"oval\"!=w);f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-E*u):(g=E*u,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k[\"marker-\"+r]=\"url(#\"+B+\")\",(h||g)&&(k.d=a.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+\"Path\"]=A,d._.arrows[r+\"Marker\"]=B,d._.arrows[r+\"dx\"]=E,d._.arrows[r+\"Type\"]=w,d._.arrows[r+\"String\"]=e}else f?(g=d._.arrows.startdx*u||0,h=a.getTotalLength(t.path)-g):(g=0,h=a.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+\"Path\"]&&q(s,{d:a.getSubpath(t.path,g,h)}),delete d._.arrows[r+\"Path\"],delete d._.arrows[r+\"Marker\"],delete d._.arrows[r+\"dx\"],delete d._.arrows[r+\"Type\"],delete d._.arrows[r+\"String\"];for(k in p)if(p[b](k)&&!p[k]){var F=a._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={\"-\":[3,1],\".\":[1,1],\"-.\":[3,1,1,1],\"-..\":[3,1,1,1,1,1],\". \":[1,3],\"- \":[4,3],\"--\":[8,3],\"- .\":[4,3,1,3],\"--.\":[8,3,1,3],\"--..\":[8,3,1,3,1,3]},v=function(a,b,d){if(b=u[c(b).toLowerCase()]){for(var e=a.attrs[\"stroke-width\"]||\"1\",f={round:e,square:e,butt:0}[a.attrs[\"stroke-linecap\"]||d[\"stroke-linecap\"]]||0,g=[],h=b.length;h--;)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{\"stroke-dasharray\":g.join(\",\")})}else q(a.node,{\"stroke-dasharray\":\"none\"})},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility=\"hidden\";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];switch(k[o]=p,o){case\"blur\":d.blur(p);break;case\"title\":var u=i.getElementsByTagName(\"title\");if(u.length&&(u=u[0]))u.firstChild.nodeValue=p;else{u=q(\"title\");var w=a._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u)}break;case\"href\":case\"target\":var x=i.parentNode;if(\"a\"!=x.tagName.toLowerCase()){var z=q(\"a\");x.insertBefore(z,i),z.appendChild(i),x=z}\"target\"==o?x.setAttributeNS(n,\"show\",\"blank\"==p?\"new\":p):x.setAttributeNS(n,o,p);break;case\"cursor\":i.style.cursor=p;break;case\"transform\":d.transform(p);break;case\"arrow-start\":t(d,p);break;case\"arrow-end\":t(d,p,1);break;case\"clip-rect\":var A=c(p).split(j);if(4==A.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var B=q(\"clipPath\"),C=q(\"rect\");B.id=a.createUUID(),q(C,{x:A[0],y:A[1],width:A[2],height:A[3]}),B.appendChild(C),d.paper.defs.appendChild(B),q(i,{\"clip-path\":\"url(#\"+B.id+\")\"}),d.clip=C}if(!p){var D=i.getAttribute(\"clip-path\");if(D){var E=a._g.doc.getElementById(D.replace(/(^url\\(#|\\)$)/g,l));E&&E.parentNode.removeChild(E),q(i,{\"clip-path\":l}),delete d.clip}}break;case\"path\":\"path\"==d.type&&(q(i,{d:p?k.path=a._pathToAbsolute(p):\"M0,0\"}),d._.dirty=1,d._.arrows&&(\"startString\"in d._.arrows&&t(d,d._.arrows.startString),\"endString\"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case\"width\":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o=\"x\",p=k.x;case\"x\":k.fx&&(p=-k.x-(k.width||0));case\"rx\":if(\"rx\"==o&&\"rect\"==d.type)break;case\"cx\":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case\"height\":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o=\"y\",p=k.y;case\"y\":k.fy&&(p=-k.y-(k.height||0));case\"ry\":if(\"ry\"==o&&\"rect\"==d.type)break;case\"cy\":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case\"r\":\"rect\"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case\"src\":\"image\"==d.type&&i.setAttributeNS(n,\"href\",p);break;case\"stroke-width\":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),i.setAttribute(o,p),k[\"stroke-dasharray\"]&&v(d,k[\"stroke-dasharray\"],f),d._.arrows&&(\"startString\"in d._.arrows&&t(d,d._.arrows.startString),\"endString\"in d._.arrows&&t(d,d._.arrows.endString,1));break;case\"stroke-dasharray\":v(d,p,f);break;case\"fill\":var F=c(p).match(a._ISURL);if(F){B=q(\"pattern\");var G=q(\"image\");B.id=a.createUUID(),q(B,{x:0,y:0,patternUnits:\"userSpaceOnUse\",height:1,width:1}),q(G,{x:0,y:0,\"xlink:href\":F[1]}),B.appendChild(G),function(b){a._preload(F[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(G,{width:a,height:c})})}(B),d.paper.defs.appendChild(B),q(i,{fill:\"url(#\"+B.id+\")\"}),d.pattern=B,d.pattern&&s(d);break}var H=a.getRGB(p);if(H.error){if((\"circle\"==d.type||\"ellipse\"==d.type||\"r\"!=c(p).charAt())&&r(d,p)){if(\"opacity\"in k||\"fill-opacity\"in k){var I=a._g.doc.getElementById(i.getAttribute(\"fill\").replace(/^url\\(#|\\)$/g,l));if(I){var J=I.getElementsByTagName(\"stop\");q(J[J.length-1],{\"stop-opacity\":(\"opacity\"in k?k.opacity:1)*(\"fill-opacity\"in k?k[\"fill-opacity\"]:1)})}}k.gradient=p,k.fill=\"none\";break}}else delete f.gradient,delete k.gradient,!a.is(k.opacity,\"undefined\")&&a.is(f.opacity,\"undefined\")&&q(i,{opacity:k.opacity}),!a.is(k[\"fill-opacity\"],\"undefined\")&&a.is(f[\"fill-opacity\"],\"undefined\")&&q(i,{\"fill-opacity\":k[\"fill-opacity\"]});H[b](\"opacity\")&&q(i,{\"fill-opacity\":H.opacity>1?H.opacity/100:H.opacity});case\"stroke\":H=a.getRGB(p),i.setAttribute(o,H.hex),\"stroke\"==o&&H[b](\"opacity\")&&q(i,{\"stroke-opacity\":H.opacity>1?H.opacity/100:H.opacity}),\"stroke\"==o&&d._.arrows&&(\"startString\"in d._.arrows&&t(d,d._.arrows.startString),\"endString\"in d._.arrows&&t(d,d._.arrows.endString,1));break;case\"gradient\":(\"circle\"==d.type||\"ellipse\"==d.type||\"r\"!=c(p).charAt())&&r(d,p);\n        |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ^\n  17954 | \n  17955 | break;case\"opacity\":k.gradient&&!k[b](\"stroke-opacity\")&&q(i,{\"stroke-opacity\":p>1?p/100:p});case\"fill-opacity\":if(k.gradient){I=a._g.doc.getElementById(i.getAttribute(\"fill\").replace(/^url\\(#|\\)$/g,l)),I&&(J=I.getElementsByTagName(\"stop\"),q(J[J.length-1],{\"stop-opacity\":p}));break}default:\"font-size\"==o&&(p=e(p,10)+\"px\");var K=o.replace(/(\\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[K]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(\"text\"==d.type&&(f[b](\"text\")||f[b](\"font\")||f[b](\"font-size\")||f[b](\"x\")||f[b](\"y\"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue(\"font-size\"),10):10;if(f[b](\"text\")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=c(f.text).split(\"\\n\"),m=[],n=0,o=k.length;o>n;n++)j=q(\"tspan\"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(a._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName(\"tspan\"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,\"finite\")&&q(m[0],{dy:r})}},z=function(a){return a.parentNode&&\"a\"===a.parentNode.tagName.toLowerCase()?a.parentNode:a},A=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},B=a.el;A.prototype=B,B.constructor=A,a._engine.path=function(a,b){var c=q(\"path\");b.canvas&&b.canvas.appendChild(c);var d=new A(c,b);return d.type=\"path\",w(d,{fill:\"none\",stroke:\"#000\",path:a}),d},B.rotate=function(a,b,e){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(b=e),null==b||null==e){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([[\"r\",a,b,e]])),this},B.scale=function(a,b,e,f){if(this.removed)return this;if(a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==b&&(b=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([[\"s\",a,b,e,f]])),this},B.translate=function(a,b){return this.removed?this:(a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([[\"t\",a,b]])),this)},B.transform=function(c){var d=this._;if(null==c)return d.transform;if(a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[b](\"stroke-width\")?this.attrs[\"stroke-width\"]:1;this.attr({\"stroke-width\":e})}return this},B.hide=function(){return this.removed||(this.node.style.display=\"none\"),this},B.show=function(){return this.removed||(this.node.style.display=\"\"),this},B.remove=function(){var b=z(this.node);if(!this.removed&&b.parentNode){var c=this.paper;c.__set__&&c.__set__.exclude(this),k.unbind(\"raphael.*.*.\"+this.id),this.gradient&&c.defs.removeChild(this.gradient),a._tear(this,c),b.parentNode.removeChild(b),this.removeData();for(var d in this)this[d]=\"function\"==typeof this[d]?a._removedFactory(d):null;this.removed=!0}},B._getBBox=function(){if(\"none\"==this.node.style.display){this.show();var a=!0}var b,c=!1;this.paper.canvas.parentElement?b=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&&(b=this.paper.canvas.parentNode.style),b&&\"none\"==b.display&&(c=!0,b.display=\"\");var d={};try{d=this.node.getBBox()}catch(e){d={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{d=d||{},c&&(b.display=\"none\")}return a&&this.hide(),d},B.attr=function(c,d){if(this.removed)return this;if(null==c){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);return e.gradient&&\"none\"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&a.is(c,\"string\")){if(\"fill\"==c&&\"none\"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if(\"transform\"==c)return this._.transform;for(var g=c.split(j),h={},i=0,l=g.length;l>i;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],\"function\")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(null==d&&a.is(c,\"array\")){for(h={},i=0,l=c.length;l>i;i++)h[c[i]]=this.attr(c[i]);return h}if(null!=d){var m={};m[c]=d}else null!=c&&a.is(c,\"object\")&&(m=c);for(var n in m)k(\"raphael.attr.\"+n+\".\"+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],\"function\")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}return w(this,m),this},B.toFront=function(){if(this.removed)return this;var b=z(this.node);b.parentNode.appendChild(b);var c=this.paper;return c.top!=this&&a._tofront(this,c),this},B.toBack=function(){if(this.removed)return this;var b=z(this.node),c=b.parentNode;c.insertBefore(b,c.firstChild),a._toback(this,this.paper);this.paper;return this},B.insertAfter=function(b){if(this.removed||!b)return this;var c=z(this.node),d=z(b.node||b[b.length-1].node);return d.nextSibling?d.parentNode.insertBefore(c,d.nextSibling):d.parentNode.appendChild(c),a._insertafter(this,b,this.paper),this},B.insertBefore=function(b){if(this.removed||!b)return this;var c=z(this.node),d=z(b.node||b[0].node);return d.parentNode.insertBefore(c,d),a._insertbefore(this,b,this.paper),this},B.blur=function(b){var c=this;if(0!==+b){var d=q(\"filter\"),e=q(\"feGaussianBlur\");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:\"url(#\"+d.id+\")\"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute(\"filter\");return c},a._engine.circle=function(a,b,c,d){var e=q(\"circle\");a.canvas&&a.canvas.appendChild(e);var f=new A(e,a);return f.attrs={cx:b,cy:c,r:d,fill:\"none\",stroke:\"#000\"},f.type=\"circle\",q(e,f.attrs),f},a._engine.rect=function(a,b,c,d,e,f){var g=q(\"rect\");a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:b,y:c,width:d,height:e,rx:f||0,ry:f||0,fill:\"none\",stroke:\"#000\"},h.type=\"rect\",q(g,h.attrs),h},a._engine.ellipse=function(a,b,c,d,e){var f=q(\"ellipse\");a.canvas&&a.canvas.appendChild(f);var g=new A(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:\"none\",stroke:\"#000\"},g.type=\"ellipse\",q(f,g.attrs),g},a._engine.image=function(a,b,c,d,e,f){var g=q(\"image\");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:\"none\"}),g.setAttributeNS(n,\"href\",b),a.canvas&&a.canvas.appendChild(g);var h=new A(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type=\"image\",h},a._engine.text=function(b,c,d,e){var f=q(\"text\");b.canvas&&b.canvas.appendChild(f);var g=new A(f,b);return g.attrs={x:c,y:d,\"text-anchor\":\"middle\",text:e,\"font-family\":a._availableAttrs[\"font-family\"],\"font-size\":a._availableAttrs[\"font-size\"],stroke:\"none\",fill:\"#000\"},g.type=\"text\",w(g,g.attrs),g},a._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute(\"width\",this.width),this.canvas.setAttribute(\"height\",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error(\"SVG container not found.\");var h,i=q(\"svg\"),j=\"overflow:hidden;\";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:\"http://www.w3.org/2000/svg\",\"xmlns:xlink\":\"http://www.w3.org/1999/xlink\"}),1==c?(i.style.cssText=j+\"position:absolute;left:\"+d+\"px;top:\"+e+\"px\",a._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+\"position:relative\",c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i)),c=new a._Paper,c.width=f,c.height=g,c.canvas=i,c.clear(),c._left=c._top=0,h&&(c.renderfix=function(){}),c.renderfix(),c},a._engine.setViewBox=function(a,b,c,d,e){k(\"raphael.setViewBox\",this,this._viewBox,[a,b,c,d,e]);var f,h,i=this.getSize(),j=g(c/i.width,d/i.height),l=this.top,n=e?\"xMidYMid meet\":\"xMinYMin\";for(null==a?(this._vbSize&&(j=1),delete this._vbSize,f=\"0 0 \"+this.width+m+this.height):(this._vbSize=j,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:n});j&&l;)h=\"stroke-width\"in l.attrs?l.attrs[\"stroke-width\"]:1,l.attr({\"stroke-width\":h}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[a,b,c,d,!!e],this},a.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+\"px\"),f&&(this._top=(this._top+f)%1,c.top=this._top+\"px\"))},a.prototype.clear=function(){a.eve(\"raphael.clear\",this);for(var b=this.canvas;b.firstChild;)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q(\"desc\")).appendChild(a._g.doc.createTextNode(\"Created with Raphaël \"+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q(\"defs\"))},a.prototype.remove=function(){k(\"raphael.remove\",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=\"function\"==typeof this[b]?a._removedFactory(b):null};var C=a.st;for(var D in B)B[b](D)&&!C[b](D)&&(C[D]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(D))}}),function(a,b){\"function\"==typeof define&&define.amd?define(\"raphael.vml\",[\"raphael.core\"],function(a){return b(a)}):b(\"object\"==typeof exports?require(\"./raphael.core\"):a.Raphael)}(this,function(a){if(!a||a.vml){var b=\"hasOwnProperty\",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j=\"fill\",k=/[, ]+/,l=a.eve,m=\" progid:DXImageTransform.Microsoft\",n=\" \",o=\"\",p={M:\"m\",L:\"l\",C:\"c\",Z:\"x\",m:\"t\",l:\"r\",c:\"v\",z:\"x\"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\\S+Blur\\([^\\)]+\\)/g,s=/-?[^,\\s-]+/g,t=\"position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)\",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/gi,e=a._pathToAbsolute;if(c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g,e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=\"m\"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p[\"m\"==b?\"l\":\"L\"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(b);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),\"z\"==i&&(i=\"x\");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?\",\":o);g.push(i)}return g.join(n)},y=function(b,c,d){var e=a.matrix();return e.rotate(-b,.5,.5),{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p=\"\",q=u/b,r=u/c;if(m.visibility=\"hidden\",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+=\"x\"),0>c&&(p+=\" y\")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility=\"visible\"}};a.toString=function(){return\"Your browser doesn’t support SVG. Falling down to VML.\\nYou are running Raphaël \"+this.version};var A=function(a,b,d){for(var e=c(b).toLowerCase().split(\"-\"),f=d?\"end\":\"start\",g=e.length,h=\"classic\",i=\"medium\",j=\"medium\";g--;)switch(e[g]){case\"block\":case\"classic\":case\"oval\":case\"diamond\":case\"open\":case\"none\":h=e[g];break;case\"wide\":case\"narrow\":j=e[g];break;case\"long\":case\"short\":i=e[g]}var k=a.node.getElementsByTagName(\"stroke\")[0];k[f+\"arrow\"]=h,k[f+\"arrowlength\"]=i,k[f+\"arrowwidth\"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[b](t)&&(m[t]=i[t]);if(q&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),\"blur\"in i&&e.blur(i.blur),(i.path&&\"path\"==e.type||q)&&(l.path=x(~c(m.path).toLowerCase().indexOf(\"r\")?a._pathToAbsolute(m.path):m.path),e._.dirty=1,\"image\"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),\"transform\"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=a.format(\"ar{0},{1},{2},{3},{4},{1},{4},{1}x\",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if(\"clip-rect\"in i){var G=c(i[\"clip-rect\"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||a._g.doc.createElement(\"div\"),I=H.style;I.clip=a.format(\"rect({1}px {2}px {3}px {0}px)\",G),l.clipRect||(I.position=\"absolute\",I.top=0,I.left=0,I.width=e.paper.width+\"px\",I.height=e.paper.height+\"px\",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i[\"clip-rect\"]||l.clipRect&&(l.clipRect.style.clip=\"auto\")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i[\"font-family\"]&&(J.fontFamily='\"'+i[\"font-family\"].split(\",\")[0].replace(/^['\"]+|['\"]+$/g,o)+'\"'),i[\"font-size\"]&&(J.fontSize=i[\"font-size\"]),i[\"font-weight\"]&&(J.fontWeight=i[\"font-weight\"]),i[\"font-style\"]&&(J.fontStyle=i[\"font-style\"])}if(\"arrow-start\"in i&&A(s,i[\"arrow-start\"]),\"arrow-end\"in i&&A(s,i[\"arrow-end\"],1),null!=i.opacity||null!=i[\"stroke-width\"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i[\"stroke-width\"]||null!=i[\"stroke-opacity\"]||null!=i[\"fill-opacity\"]||null!=i[\"stroke-dasharray\"]||null!=i[\"stroke-miterlimit\"]||null!=i[\"stroke-linejoin\"]||null!=i[\"stroke-linecap\"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),\"image\"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||\"none\"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=c(i.fill).match(a._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type=\"tile\";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],a._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=a.getRGB(i.fill).hex,K.src=o,K.type=\"solid\",a.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||\"r\"!=c(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill=\"none\",m.gradient=i.fill,K.rotate=!1)}if(\"fill-opacity\"in i||\"opacity\"in i){var O=((+m[\"fill-opacity\"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color=\"none\")}l.appendChild(K);var P=l.getElementsByTagName(\"stroke\")&&l.getElementsByTagName(\"stroke\")[0],Q=!1;!P&&(Q=P=F(\"stroke\")),(i.stroke&&\"none\"!=i.stroke||i[\"stroke-width\"]||null!=i[\"stroke-opacity\"]||i[\"stroke-dasharray\"]||i[\"stroke-miterlimit\"]||i[\"stroke-linejoin\"]||i[\"stroke-linecap\"])&&(P.on=!0),(\"none\"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i[\"stroke-width\"])&&(P.on=!1);var R=a.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m[\"stroke-opacity\"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i[\"stroke-width\"])||1);if(O=h(g(O,0),1),null==i[\"stroke-width\"]&&(S=m[\"stroke-width\"]),i[\"stroke-width\"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i[\"stroke-linejoin\"]&&(P.joinstyle=i[\"stroke-linejoin\"]||\"miter\"),P.miterlimit=i[\"stroke-miterlimit\"]||8,i[\"stroke-linecap\"]&&(P.endcap=\"butt\"==i[\"stroke-linecap\"]?\"flat\":\"square\"==i[\"stroke-linecap\"]?\"square\":\"round\"),\"stroke-dasharray\"in i){var T={\"-\":\"shortdash\",\".\":\"shortdot\",\"-.\":\"shortdashdot\",\"-..\":\"shortdashdotdot\",\". \":\"dot\",\"- \":\"dash\",\"--\":\"longdash\",\"- .\":\"dashdot\",\"--.\":\"longdashdot\",\"--..\":\"longdashdotdot\"};P.dashstyle=T[b](i[\"stroke-dasharray\"])?T[i[\"stroke-dasharray\"]]:o}Q&&l.appendChild(P)}if(\"text\"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\\d+(?:\\.\\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m[\"font-family\"]&&(p.fontFamily=m[\"font-family\"]),m[\"font-weight\"]&&(p.fontWeight=m[\"font-weight\"]),m[\"font-style\"]&&(p.fontStyle=m[\"font-style\"]),W=d(m[\"font-size\"]||W&&W[0])||10,p.fontSize=W*V+\"px\",s.textpath.string&&(U.innerHTML=c(s.textpath.string).replace(/</g,\"&#60;\").replace(/&/g,\"&#38;\").replace(/\\n/g,\"<br>\"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,(\"x\"in i||\"y\"in i)&&(s.path.v=a.format(\"m{0},{1}l{2},{1}\",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=[\"x\",\"y\",\"text\",\"font\",\"font-family\",\"font-weight\",\"font-style\",\"font-size\"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m[\"text-anchor\"]){case\"start\":s.textpath.style[\"v-text-align\"]=\"left\",s.bbx=s.W/2;break;case\"end\":s.textpath.style[\"v-text-align\"]=\"right\",s.bbx=-s.W/2;break;default:s.textpath.style[\"v-text-align\"]=\"center\",s.bbx=0}s.textpath.style[\"v-text-kern\"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=(b.attrs,Math.pow),i=\"linear\",j=\".5 .5\";if(b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){return i=\"radial\",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\\s*\\-\\s*/),\"linear\"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=a._parseDots(f);if(!l)return null;if(b=b.shape||b.node,l.length){b.removeChild(g),g.on=!0,g.method=\"none\",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():\"0% \"+g.color,\"radial\"==i?(g.type=\"gradientTitle\",g.focus=\"100%\",g.focussize=\"0 0\",g.focusposition=j,g.angle=0):(g.type=\"gradient\",g.angle=(270-k)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(null==b)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?\"s\"+[e.scale,e.scale]+\"-1-1t\"+[e.dx,e.dy]:o;e&&(d=b=c(b).replace(/\\.{3}|\\u2026/g,this._.transform||o)),a._extractTransform(this,f+b);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~c(this.attrs.fill).indexOf(\"-\"),l=!c(this.attrs.fill).indexOf(\"url(\");if(h.translate(1,1),l||k||\"image\"==this.type)if(i.matrix=\"1 0 0 1\",i.offset=\"0 0\",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=c(h),i.offset=h.offset();return null!==d&&(this._.transform=d,a._extractTransform(this,d)),this},E.rotate=function(a,b,e){if(this.removed)return this;if(null!=a){if(a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(b=e),null==b||null==e){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([[\"r\",a,b,e]])),this}},E.translate=function(a,b){return this.removed?this:(a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([[\"t\",a,b]])),this)},E.scale=function(a,b,e,f){if(this.removed)return this;if(a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==b&&(b=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([[\"s\",a,b,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display=\"none\"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E.auxGetBBox=a.el.getBBox,E.getBBox=function(){var a=this.auxGetBBox();if(this.paper&&this.paper._viewBoxShift){var b={},c=1/this.paper._viewBoxShift.scale;return b.x=a.x-this.paper._viewBoxShift.dx,b.x*=c,b.y=a.y-this.paper._viewBoxShift.dy,b.y*=c,b.width=a.width*c,b.height=a.height*c,b.x2=b.x+b.width,b.y2=b.y+b.height,b}return a},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind(\"raphael.*.*.\"+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=\"function\"==typeof this[b]?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(null==c){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);return e.gradient&&\"none\"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&a.is(c,\"string\")){if(c==j&&\"none\"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=c.split(k),h={},i=0,m=g.length;m>i;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],\"function\")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&a.is(c,\"array\")){for(h={},i=0,m=c.length;m>i;i++)h[c[i]]=this.attr(c[i]);return h}var n;null!=d&&(n={},n[c]=d),null==d&&a.is(c,\"object\")&&(n=c);for(var o in n)l(\"raphael.attr.\"+o+\".\"+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],\"function\")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&\"text\"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper)),this)},E.insertAfter=function(b){return this.removed?this:(b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper),this)},E.insertBefore=function(b){return this.removed?this:(b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper),this)},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;return d=d.replace(r,o),0!==+b?(this.attrs.blur=b,c.filter=d+n+m+\".Blur(pixelradius=\"+(+b||1.5)+\")\",c.margin=a.format(\"-{0}px 0 0 -{0}px\",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur),this},a._engine.path=function(a,b){var c=F(\"shape\");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:\"none\",stroke:\"#000\"};a&&(e.path=a),d.type=\"path\",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F(\"skew\");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;return i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type=\"rect\",i},a._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type=\"ellipse\",B(f,{cx:b,cy:c,rx:d,ry:e}),f},a._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type=\"circle\",B(e,{cx:b,cy:c,r:d}),e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:\"none\"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type=\"image\",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type=\"tile\",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},a._engine.text=function(b,d,e,g){var h=F(\"shape\"),i=F(\"path\"),j=F(\"textpath\");d=d||0,e=e||0,g=g||\"\",i.v=a.format(\"m{0},{1}l{2},{1}\",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin=\"0 0\";var k=new D(h,b),l={fill:\"#000\",stroke:\"none\",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type=\"text\",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F(\"skew\");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},a._engine.setSize=function(b,c){var d=this.canvas.style;return this.width=b,this.height=c,b==+b&&(b+=\"px\"),c==+c&&(c+=\"px\"),d.width=b,d.height=c,d.clip=\"rect(0 \"+b+\" \"+c+\" 0)\",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox),this},a._engine.setViewBox=function(b,c,d,e,f){a.eve(\"raphael.setViewBox\",this,this._viewBox,[b,c,d,e,f]);var g,h,i=this.getSize(),j=i.width,k=i.height;return f&&(g=k/e,h=j/d,j>d*g&&(b-=(j-d*g)/2/g),k>e*h&&(c-=(k-e*h)/2/h)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:i},this.forEach(function(a){a.transform(\"...\")}),this};var F;a._engine.initWin=function(a){var b=a.document;b.styleSheets.length<31?b.createStyleSheet().addRule(\".rvml\",\"behavior:url(#default#VML)\"):b.styleSheets[0].addRule(\".rvml\",\"behavior:url(#default#VML)\");try{!b.namespaces.rvml&&b.namespaces.add(\"rvml\",\"urn:schemas-microsoft-com:vml\"),F=function(a){return b.createElement(\"<rvml:\"+a+' class=\"rvml\">')}}catch(c){F=function(a){return b.createElement(\"<\"+a+' xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e=b.width,f=b.x,g=b.y;if(!c)throw new Error(\"VML container not found.\");var h=new a._Paper,i=h.canvas=a._g.doc.createElement(\"div\"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+=\"px\"),d==+d&&(d+=\"px\"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin=\"0 0\",h.span=a._g.doc.createElement(\"span\"),h.span.style.cssText=\"position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;\",i.appendChild(h.span),j.cssText=a.format(\"top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden\",e,d),1==c?(a._g.doc.body.appendChild(i),j.left=f+\"px\",j.top=g+\"px\",j.position=\"absolute\"):c.firstChild?c.insertBefore(i,c.firstChild):c.appendChild(i),h.renderfix=function(){},h},a.prototype.clear=function(){a.eve(\"raphael.clear\",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement(\"span\"),this.span.style.cssText=\"position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;\",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve(\"raphael.remove\",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=\"function\"==typeof this[b]?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}});\n  17956 | /**\n    at Parser.raise (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:4051:15)\n    at Parser.parseMaybeUnary (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:6072:16)\n    at Parser.parseExprOps (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5968:21)\n    at Parser.parseMaybeConditional (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5940:21)\n    at Parser.parseMaybeAssign (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5887:21)\n    at Parser.parseConditional (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5957:31)\n    at Parser.parseMaybeConditional (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5947:17)\n    at Parser.parseMaybeAssign (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5887:21)\n    at Parser.parseExpression (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5840:21)\n    at Parser.parseReturnStatement (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7863:28)\n    at Parser.parseStatementContent (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7539:21)\n    at Parser.parseStatement (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7505:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8073:23)\n    at Parser.parseBlockBody (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8060:10)\n    at Parser.parseBlock (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8049:10)\n    at Parser.parseFunctionBody (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7157:24)\n    at Parser.parseFunctionBodyAndFinish (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7139:10)\n    at C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8225:14\n    at Parser.withTopicForbiddingContext (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7429:14)\n    at Parser.parseFunction (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8224:10)\n    at Parser.parseFunctionExpression (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:6586:17)\n    at Parser.parseExprAtom (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:6490:21)\n    at Parser.parseExprSubscripts (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:6104:21)\n    at Parser.parseMaybeUnary (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:6083:21)\n    at Parser.parseExprOps (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5968:21)\n    at Parser.parseMaybeConditional (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5940:21)\n    at Parser.parseMaybeAssign (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5887:21)\n    at Parser.parseMaybeAssign (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5927:27)\n    at Parser.parseExpression (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:5848:37)\n    at Parser.parseReturnStatement (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7863:28)\n    at Parser.parseStatementContent (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7539:21)\n    at Parser.parseStatement (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7505:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8073:23)\n    at Parser.parseBlockBody (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8060:10)\n    at Parser.parseBlock (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:8049:10)\n    at Parser.parseFunctionBody (C:\\Users\\NITRO 5\\projects\\realtime\\node_modules\\@babel\\parser\\lib\\index.js:7157:24)");

/***/ }),

/***/ "./resources/vendor/js/vendor.bundle.base.js":
/*!***************************************************!*\
  !*** ./resources/vendor/js/vendor.bundle.base.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function (a, b) {
  "use strict";

  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  "use strict";

  var c = [],
      d = a.document,
      e = Object.getPrototypeOf,
      f = c.slice,
      g = c.concat,
      h = c.push,
      i = c.indexOf,
      j = {},
      k = j.toString,
      l = j.hasOwnProperty,
      m = l.toString,
      n = m.call(Object),
      o = {};

  function p(a, b) {
    b = b || d;
    var c = b.createElement("script");
    c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
  }

  var q = "3.2.1",
      r = function r(a, b) {
    return new r.fn.init(a, b);
  },
      s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      t = /^-ms-/,
      u = /-([a-z])/g,
      v = function v(a, b) {
    return b.toUpperCase();
  };

  r.fn = r.prototype = {
    jquery: q,
    constructor: r,
    length: 0,
    toArray: function toArray() {
      return f.call(this);
    },
    get: function get(a) {
      return null == a ? f.call(this) : a < 0 ? this[a + this.length] : this[a];
    },
    pushStack: function pushStack(a) {
      var b = r.merge(this.constructor(), a);
      return b.prevObject = this, b;
    },
    each: function each(a) {
      return r.each(this, a);
    },
    map: function map(a) {
      return this.pushStack(r.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(f.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: h,
    sort: c.sort,
    splice: c.splice
  }, r.extend = r.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = Array.isArray(d))) ? (e ? (e = !1, f = c && Array.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }

    return g;
  }, r.extend({
    expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === r.type(a);
    },
    isWindow: function isWindow(a) {
      return null != a && a === a.window;
    },
    isNumeric: function isNumeric(a) {
      var b = r.type(a);
      return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
    },
    isPlainObject: function isPlainObject(a) {
      var b, c;
      return !(!a || "[object Object]" !== k.call(a)) && (!(b = e(a)) || (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n));
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? j[k.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(a) {
      p(a);
    },
    camelCase: function camelCase(a) {
      return a.replace(t, "ms-").replace(u, v);
    },
    each: function each(a, b) {
      var c,
          d = 0;

      if (w(a)) {
        for (c = a.length; d < c; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(s, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      return null == b ? -1 : i.call(b, a, c);
    },
    merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; d < c; d++) {
        a[e++] = b[d];
      }

      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          e,
          f = 0,
          h = [];
      if (w(a)) for (d = a.length; f < d; f++) {
        e = b(a[f], f, c), null != e && h.push(e);
      } else for (f in a) {
        e = b(a[f], f, c), null != e && h.push(e);
      }
      return g.apply([], h);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, d, e;
      if ("string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a)) return d = f.call(arguments, 2), e = function e() {
        return a.apply(b || this, d.concat(f.call(arguments)));
      }, e.guid = a.guid = a.guid || r.guid++, e;
    },
    now: Date.now,
    support: o
  }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    j["[object " + b + "]"] = b.toLowerCase();
  });

  function w(a) {
    var b = !!a && "length" in a && a.length,
        c = r.type(a);
    return "function" !== c && !r.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }

  var x = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ha(),
        z = ha(),
        A = ha(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = {}.hasOwnProperty,
        D = [],
        E = D.pop,
        F = D.push,
        G = D.push,
        H = D.slice,
        I = function I(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        K = "[\\x20\\t\\r\\n\\f]",
        L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
        N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        O = new RegExp(K + "+", "g"),
        P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
        Q = new RegExp("^" + K + "*," + K + "*"),
        R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
        S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
        T = new RegExp(N),
        U = new RegExp("^" + L + "$"),
        V = {
      ID: new RegExp("^#(" + L + ")"),
      CLASS: new RegExp("^\\.(" + L + ")"),
      TAG: new RegExp("^(" + L + "|[*])"),
      ATTR: new RegExp("^" + M),
      PSEUDO: new RegExp("^" + N),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + J + ")$", "i"),
      needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
    },
        W = /^(?:input|select|textarea|button)$/i,
        X = /^h\d$/i,
        Y = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        $ = /[+~]/,
        _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
        aa = function aa(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ca = function ca(a, b) {
      return b ? "\0" === a ? "\uFFFD" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
    },
        da = function da() {
      m();
    },
        ea = ta(function (a) {
      return a.disabled === !0 && ("form" in a || "label" in a);
    }, {
      dir: "parentNode",
      next: "legend"
    });

    try {
      G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
    } catch (fa) {
      G = {
        apply: D.length ? function (a, b) {
          F.apply(a, H.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function ga(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s = b && b.ownerDocument,
          w = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;

      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
          if (9 === w) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;
          if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
        }

        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;

            while (h--) {
              o[h] = "#" + k + " " + sa(o[h]);
            }

            r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
          }
          if (r) try {
            return G.apply(d, s.querySelectorAll(r)), d;
          } catch (x) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(P, "$1"), b, d, e);
    }

    function ha() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ia(a) {
      return a[u] = !0, a;
    }

    function ja(a) {
      var b = n.createElement("fieldset");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ka(a, b) {
      var c = a.split("|"),
          e = c.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function la(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function oa(a) {
      return function (b) {
        return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ea(b) === a : b.disabled === a : "label" in b && b.disabled === a;
      };
    }

    function pa(a) {
      return ia(function (b) {
        return b = +b, ia(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function qa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = ga.support = {}, f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName;
    }, m = ga.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.filter.ID = function (a) {
        var b = a.replace(_, aa);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }) : (d.filter.ID = function (a) {
        var b = a.replace(_, aa);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }, d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c,
              d,
              e,
              f = b.getElementById(a);

          if (f) {
            if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            e = b.getElementsByName(a), d = 0;

            while (f = e[d++]) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
            }
          }

          return [];
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if ("undefined" != typeof b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ja(function (a) {
        a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;
        if (e === f) return la(a, b);
        c = a;

        while (c = c.parentNode) {
          g.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        while (g[d] === h[d]) {
          d++;
        }

        return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ga.matches = function (a, b) {
      return ga(a, null, null, b);
    }, ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return ga(b, n, null, [a]).length > 0;
    }, ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ga.escape = function (a) {
      return (a + "").replace(ba, ca);
    }, ga.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ga.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = ga.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: V,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(_, aa).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);
            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;

            if (q) {
              if (f) {
                while (p) {
                  m = b;

                  while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];

                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }

              return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = I(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ia(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(P, "$1"));
          return d[u] ? ia(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0;
          };
        }),
        contains: ia(function (a) {
          return a = a.replace(_, aa), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ia(function (a) {
          return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: oa(!1),
        disabled: oa(!0),
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return X.test(a.nodeName);
        },
        input: function input(a) {
          return W.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: pa(function () {
          return [0];
        }),
        last: pa(function (a, b) {
          return [b - 1];
        }),
        eq: pa(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }),
        even: pa(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: pa(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: pa(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = ma(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = na(b);
    }

    function ra() {}

    ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(P, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
    };

    function sa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }

      return d;
    }

    function ta(a, b, c) {
      var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = x++;
      return b.first ? function (b, c, e) {
        while (b = b[d]) {
          if (1 === b.nodeType || g) return a(b, c, e);
        }

        return !1;
      } : function (b, c, i) {
        var j,
            k,
            l,
            m = [w, h];

        if (i) {
          while (b = b[d]) {
            if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
            if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];
            if (k[f] = m, m[2] = a(b, c, i)) return !0;
          }
        }

        return !1;
      };
    }

    function ua(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function va(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ga(a, b[d], c);
      }

      return c;
    }

    function wa(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }

      return g;
    }

    function xa(a, b, c, d, e, f) {
      return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || va(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : wa(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = wa(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
      });
    }

    function ya(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
        return a === b;
      }, h, !0), l = ta(function (a) {
        return I(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }

            return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(P, "$1"), c, i < e && ya(a.slice(i, e)), e < f && ya(a = a.slice(e)), e < f && sa(a));
          }

          m.push(c);
        }
      }

      return ua(m);
    }

    function za(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;

        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);

            while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = y);
          }

          c && ((l = !q && l) && r--, _f && t.push(l));
        }

        if (r += s, c && s !== r) {
          o = 0;

          while (q = b[o++]) {
            q(t, u, g, h);
          }

          if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = E.call(i));
            }
            u = wa(u);
          }

          G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
        }

        return k && (w = y, j = v), t;
      };

      return c ? ia(f) : f;
    }

    return h = ga.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, za(e, d)), f.selector = a;
      }

      return f;
    }, i = ga.select = function (a, b, c, e) {
      var f,
          i,
          j,
          k,
          l,
          m = "function" == typeof a && a,
          n = !e && g(a = m.selector || a);

      if (c = c || [], 1 === n.length) {
        if (i = n[0] = n[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && 9 === b.nodeType && p && d.relative[i[1].type]) {
          if (b = (d.find.ID(j.matches[0].replace(_, aa), b) || [])[0], !b) return c;
          m && (b = b.parentNode), a = a.slice(i.shift().value.length);
        }

        f = V.needsContext.test(a) ? 0 : i.length;

        while (f--) {
          if (j = i[f], d.relative[k = j.type]) break;

          if ((l = d.find[k]) && (e = l(j.matches[0].replace(_, aa), $.test(i[0].type) && qa(b.parentNode) || b))) {
            if (i.splice(f, 1), a = e.length && sa(i), !a) return G.apply(c, e), c;
            break;
          }
        }
      }

      return (m || h(a, n))(e, b, !p, c, !b || $.test(a) && qa(b.parentNode) || b), c;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
    }), ja(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ka("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ja(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ka("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ja(function (a) {
      return null == a.getAttribute("disabled");
    }) || ka(J, function (a, b, c) {
      var d;
      if (!c) return a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ga;
  }(a);

  r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;

  var y = function y(a, b, c) {
    var d = [],
        e = void 0 !== c;

    while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && r(a).is(c)) break;
        d.push(a);
      }
    }

    return d;
  },
      z = function z(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }

    return c;
  },
      A = r.expr.match.needsContext;

  function B(a, b) {
    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
  }

  var C = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      D = /^.[^:#\[\.,]*$/;

  function E(a, b, c) {
    return r.isFunction(b) ? r.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    }) : b.nodeType ? r.grep(a, function (a) {
      return a === b !== c;
    }) : "string" != typeof b ? r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c;
    }) : D.test(b) ? r.filter(b, a, c) : (b = r.filter(b, a), r.grep(a, function (a) {
      return i.call(b, a) > -1 !== c && 1 === a.nodeType;
    }));
  }

  r.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, r.fn.extend({
    find: function find(a) {
      var b,
          c,
          d = this.length,
          e = this;
      if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
        for (b = 0; b < d; b++) {
          if (r.contains(e[b], this)) return !0;
        }
      }));

      for (c = this.pushStack([]), b = 0; b < d; b++) {
        r.find(a, e[b], c);
      }

      return d > 1 ? r.uniqueSort(c) : c;
    },
    filter: function filter(a) {
      return this.pushStack(E(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(E(this, a || [], !0));
    },
    is: function is(a) {
      return !!E(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
    }
  });

  var F,
      G = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      H = r.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;

    if (c = c || F, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : G.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);

      if (e[1]) {
        if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), C.test(e[1]) && r.isPlainObject(b)) for (e in b) {
          r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }
        return this;
      }

      return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
    }

    return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
  };

  H.prototype = r.fn, F = r(d);
  var I = /^(?:parents|prev(?:Until|All))/,
      J = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  r.fn.extend({
    has: function has(a) {
      var b = r(a, this),
          c = b.length;
      return this.filter(function () {
        for (var a = 0; a < c; a++) {
          if (r.contains(this, b[a])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      var c,
          d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && r(a);
      if (!A.test(a)) for (; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }
      return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function K(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {
      ;
    }

    return a;
  }

  r.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return y(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return y(a, "parentNode", c);
    },
    next: function next(a) {
      return K(a, "nextSibling");
    },
    prev: function prev(a) {
      return K(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return y(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return y(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return y(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return y(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return z((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return z(a.firstChild);
    },
    contents: function contents(a) {
      return B(a, "iframe") ? a.contentDocument : (B(a, "template") && (a = a.content || a), r.merge([], a.childNodes));
    }
  }, function (a, b) {
    r.fn[a] = function (c, d) {
      var e = r.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (J[a] || r.uniqueSort(e), I.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var L = /[^\x20\t\r\n\f]+/g;

  function M(a) {
    var b = {};
    return r.each(a.match(L) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  r.Callbacks = function (a) {
    a = "string" == typeof a ? M(a) : r.extend({}, a);

    var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = e || a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();

        while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }

      a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = {
      add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          r.each(b, function (b, c) {
            r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      },
      remove: function remove() {
        return r.each(arguments, function (a, b) {
          var c;

          while ((c = r.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      },
      has: function has(a) {
        return a ? r.inArray(a, f) > -1 : f.length > 0;
      },
      empty: function empty() {
        return f && (f = []), this;
      },
      disable: function disable() {
        return e = g = [], f = c = "", this;
      },
      disabled: function disabled() {
        return !f;
      },
      lock: function lock() {
        return e = g = [], c || b || (f = c = ""), this;
      },
      locked: function locked() {
        return !!e;
      },
      fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      },
      fire: function fire() {
        return j.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return j;
  };

  function N(a) {
    return a;
  }

  function O(a) {
    throw a;
  }

  function P(a, b, c, d) {
    var e;

    try {
      a && r.isFunction(e = a.promise) ? e.call(a).done(b).fail(c) : a && r.isFunction(e = a.then) ? e.call(a, b, c) : b.apply(void 0, [a].slice(d));
    } catch (a) {
      c.apply(void 0, [a]);
    }
  }

  r.extend({
    Deferred: function Deferred(b) {
      var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
          d = "pending",
          e = {
        state: function state() {
          return d;
        },
        always: function always() {
          return f.done(arguments).fail(arguments), this;
        },
        "catch": function _catch(a) {
          return e.then(null, a);
        },
        pipe: function pipe() {
          var a = arguments;
          return r.Deferred(function (b) {
            r.each(c, function (c, d) {
              var e = r.isFunction(a[d[4]]) && a[d[4]];
              f[d[1]](function () {
                var a = e && e.apply(this, arguments);
                a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        then: function then(b, d, e) {
          var f = 0;

          function g(b, c, d, e) {
            return function () {
              var h = this,
                  i = arguments,
                  j = function j() {
                var a, j;

                if (!(b < f)) {
                  if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");
                  j = a && ("object" == _typeof(a) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, N, e), g(f, c, O, e)) : (f++, j.call(a, g(f, c, N, e), g(f, c, O, e), g(f, c, N, c.notifyWith))) : (d !== N && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                }
              },
                  k = e ? j : function () {
                try {
                  j();
                } catch (a) {
                  r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== O && (h = void 0, i = [a]), c.rejectWith(h, i));
                }
              };

              b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
            };
          }

          return r.Deferred(function (a) {
            c[0][3].add(g(0, a, r.isFunction(e) ? e : N, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : N)), c[2][3].add(g(0, a, r.isFunction(d) ? d : O));
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? r.extend(a, e) : e;
        }
      },
          f = {};
      return r.each(c, function (a, b) {
        var g = b[2],
            h = b[5];
        e[b[1]] = g.add, h && g.add(function () {
          d = h;
        }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
          return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
        }, f[b[0] + "With"] = g.fireWith;
      }), e.promise(f), b && b.call(f, f), f;
    },
    when: function when(a) {
      var b = arguments.length,
          c = b,
          d = Array(c),
          e = f.call(arguments),
          g = r.Deferred(),
          h = function h(a) {
        return function (c) {
          d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
        };
      };

      if (b <= 1 && (P(a, g.done(h(c)).resolve, g.reject, !b), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();

      while (c--) {
        P(e[c], h(c), g.reject);
      }

      return g.promise();
    }
  });
  var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  r.Deferred.exceptionHook = function (b, c) {
    a.console && a.console.warn && b && Q.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
  }, r.readyException = function (b) {
    a.setTimeout(function () {
      throw b;
    });
  };
  var R = r.Deferred();
  r.fn.ready = function (a) {
    return R.then(a)["catch"](function (a) {
      r.readyException(a);
    }), this;
  }, r.extend({
    isReady: !1,
    readyWait: 1,
    ready: function ready(a) {
      (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || R.resolveWith(d, [r]));
    }
  }), r.ready.then = R.then;

  function S() {
    d.removeEventListener("DOMContentLoaded", S), a.removeEventListener("load", S), r.ready();
  }

  "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", S), a.addEventListener("load", S));

  var T = function T(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === r.type(c)) {
      e = !0;

      for (h in c) {
        T(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(r(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      U = function U(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };

  function V() {
    this.expando = r.expando + V.uid++;
  }

  V.uid = 1, V.prototype = {
    cache: function cache(a) {
      var b = a[this.expando];
      return b || (b = {}, U(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b;
    },
    set: function set(a, b, c) {
      var d,
          e = this.cache(a);
      if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
        e[r.camelCase(d)] = b[d];
      }
      return e;
    },
    get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
    },
    access: function access(a, b, c) {
      return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function remove(a, b) {
      var c,
          d = a[this.expando];

      if (void 0 !== d) {
        if (void 0 !== b) {
          Array.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(L) || []), c = b.length;

          while (c--) {
            delete d[b[c]];
          }
        }

        (void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    },
    hasData: function hasData(a) {
      var b = a[this.expando];
      return void 0 !== b && !r.isEmptyObject(b);
    }
  };
  var W = new V(),
      X = new V(),
      Y = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Z = /[A-Z]/g;

  function $(a) {
    return "true" === a || "false" !== a && ("null" === a ? null : a === +a + "" ? +a : Y.test(a) ? JSON.parse(a) : a);
  }

  function _(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Z, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = $(c);
      } catch (e) {}

      X.set(a, b, c);
    } else c = void 0;
    return c;
  }

  r.extend({
    hasData: function hasData(a) {
      return X.hasData(a) || W.hasData(a);
    },
    data: function data(a, b, c) {
      return X.access(a, b, c);
    },
    removeData: function removeData(a, b) {
      X.remove(a, b);
    },
    _data: function _data(a, b, c) {
      return W.access(a, b, c);
    },
    _removeData: function _removeData(a, b) {
      W.remove(a, b);
    }
  }), r.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = X.get(f), 1 === f.nodeType && !W.get(f, "hasDataAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), _(f, d, e[d])));
          }

          W.set(f, "hasDataAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        X.set(this, a);
      }) : T(this, function (b) {
        var c;

        if (f && void 0 === b) {
          if (c = X.get(f, a), void 0 !== c) return c;
          if (c = _(f, a), void 0 !== c) return c;
        } else this.each(function () {
          X.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function removeData(a) {
      return this.each(function () {
        X.remove(this, a);
      });
    }
  }), r.extend({
    queue: function queue(a, b, c) {
      var d;
      if (a) return b = (b || "fx") + "queue", d = W.get(a, b), c && (!d || Array.isArray(c) ? d = W.access(a, b, r.makeArray(c)) : d.push(c)), d || [];
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = r.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = r._queueHooks(a, b),
          g = function g() {
        r.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return W.get(a, c) || W.access(a, c, {
        empty: r.Callbacks("once memory").add(function () {
          W.remove(a, [b + "queue", c]);
        })
      });
    }
  }), r.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = r.queue(this, a, b);
        r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        r.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = r.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = W.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  });

  var aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      ba = new RegExp("^(?:([+-])=|)(" + aa + ")([a-z%]*)$", "i"),
      ca = ["Top", "Right", "Bottom", "Left"],
      da = function da(a, b) {
    return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
  },
      ea = function ea(a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  };

  function fa(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return r.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
        k = (r.cssNumber[b] || "px" !== j && +i) && ba.exec(r.css(a, b));

    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;

      do {
        f = f || ".5", k /= f, r.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }

    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }

  var ga = {};

  function ha(a) {
    var b,
        c = a.ownerDocument,
        d = a.nodeName,
        e = ga[d];
    return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ga[d] = e, e);
  }

  function ia(a, b) {
    for (var c, d, e = [], f = 0, g = a.length; f < g; f++) {
      d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = W.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && da(d) && (e[f] = ha(d))) : "none" !== c && (e[f] = "none", W.set(d, "display", c)));
    }

    for (f = 0; f < g; f++) {
      null != e[f] && (a[f].style.display = e[f]);
    }

    return a;
  }

  r.fn.extend({
    show: function show() {
      return ia(this, !0);
    },
    hide: function hide() {
      return ia(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        da(this) ? r(this).show() : r(this).hide();
      });
    }
  });
  var ja = /^(?:checkbox|radio)$/i,
      ka = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      la = /^$|\/(?:java|ecma)script/i,
      ma = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  ma.optgroup = ma.option, ma.tbody = ma.tfoot = ma.colgroup = ma.caption = ma.thead, ma.th = ma.td;

  function na(a, b) {
    var c;
    return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && B(a, b) ? r.merge([a], c) : c;
  }

  function oa(a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      W.set(a[c], "globalEval", !b || W.get(b[c], "globalEval"));
    }
  }

  var pa = /<|&#?\w+;/;

  function qa(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; n < o; n++) {
      if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (pa.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (ka.exec(f) || ["", ""])[1].toLowerCase(), i = ma[h] || ma._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];

        while (k--) {
          g = g.lastChild;
        }

        r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }

    l.textContent = "", n = 0;

    while (f = m[n++]) {
      if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = na(l.appendChild(f), "script"), j && oa(g), c) {
        k = 0;

        while (f = g[k++]) {
          la.test(f.type || "") && c.push(f);
        }
      }
    }

    return l;
  }

  !function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var ra = d.documentElement,
      sa = /^key/,
      ta = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ua = /^([^.]*)(?:\.(.+)|)/;

  function va() {
    return !0;
  }

  function wa() {
    return !1;
  }

  function xa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }

  function ya(a, b, c, d, e, f) {
    var g, h;

    if ("object" == _typeof(b)) {
      "string" != typeof c && (d = d || c, c = void 0);

      for (h in b) {
        ya(a, h, c, d, b[h], f);
      }

      return a;
    }

    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = wa;else if (!e) return a;
    return 1 === f && (g = e, e = function e(a) {
      return r().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
      r.event.add(this, b, e, d, c);
    });
  }

  r.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.get(a);

      if (q) {
        c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(ra, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
          return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(L) || [""], j = b.length;

        while (j--) {
          h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({
            type: n,
            origType: p,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && r.expr.match.needsContext.test(e),
            namespace: o.join(".")
          }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
        }
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q = W.hasData(a) && W.get(a);

      if (q && (i = q.events)) {
        b = (b || "").match(L) || [""], j = b.length;

        while (j--) {
          if (h = ua.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;

            while (f--) {
              k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }

            g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
          } else for (n in i) {
            r.event.remove(a, n + b[j], c, d, !0);
          }
        }

        r.isEmptyObject(i) && W.remove(a, "handle events");
      }
    },
    dispatch: function dispatch(a) {
      var b = r.event.fix(a),
          c,
          d,
          e,
          f,
          g,
          h,
          i = new Array(arguments.length),
          j = (W.get(this, "events") || {})[b.type] || [],
          k = r.event.special[b.type] || {};

      for (i[0] = b, c = 1; c < arguments.length; c++) {
        i[c] = arguments[c];
      }

      if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
        h = r.event.handlers.call(this, b, j), c = 0;

        while ((f = h[c++]) && !b.isPropagationStopped()) {
          b.currentTarget = f.elem, d = 0;

          while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
            b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, b), b.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g,
          h = [],
          i = b.delegateCount,
          j = a.target;
      if (i && j.nodeType && !("click" === a.type && a.button >= 1)) for (; j !== this; j = j.parentNode || this) {
        if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
          for (f = [], g = {}, c = 0; c < i; c++) {
            d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? r(e, this).index(j) > -1 : r.find(e, this, null, [j]).length), g[e] && f.push(d);
          }

          f.length && h.push({
            elem: j,
            handlers: f
          });
        }
      }
      return j = this, i < b.length && h.push({
        elem: j,
        handlers: b.slice(i)
      }), h;
    },
    addProp: function addProp(a, b) {
      Object.defineProperty(r.Event.prototype, a, {
        enumerable: !0,
        configurable: !0,
        get: r.isFunction(b) ? function () {
          if (this.originalEvent) return b(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[a];
        },
        set: function set(b) {
          Object.defineProperty(this, a, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: b
          });
        }
      });
    },
    fix: function fix(a) {
      return a[r.expando] ? a : new r.Event(a);
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== xa() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === xa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if ("checkbox" === this.type && this.click && B(this, "input")) return this.click(), !1;
        },
        _default: function _default(a) {
          return B(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    }
  }, r.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, r.Event = function (a, b) {
    return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? va : wa, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
  }, r.Event.prototype = {
    constructor: r.Event,
    isDefaultPrevented: wa,
    isPropagationStopped: wa,
    isImmediatePropagationStopped: wa,
    isSimulated: !1,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = va, a && !this.isSimulated && a.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = va, a && !this.isSimulated && a.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = va, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, r.each({
    altKey: !0,
    bubbles: !0,
    cancelable: !0,
    changedTouches: !0,
    ctrlKey: !0,
    detail: !0,
    eventPhase: !0,
    metaKey: !0,
    pageX: !0,
    pageY: !0,
    shiftKey: !0,
    view: !0,
    "char": !0,
    charCode: !0,
    key: !0,
    keyCode: !0,
    button: !0,
    buttons: !0,
    clientX: !0,
    clientY: !0,
    offsetX: !0,
    offsetY: !0,
    pointerId: !0,
    pointerType: !0,
    screenX: !0,
    screenY: !0,
    targetTouches: !0,
    toElement: !0,
    touches: !0,
    which: function which(a) {
      var b = a.button;
      return null == a.which && sa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ta.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
    }
  }, r.event.addProp), r.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    r.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), r.fn.extend({
    on: function on(a, b, c, d) {
      return ya(this, a, b, c, d);
    },
    one: function one(a, b, c, d) {
      return ya(this, a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = wa), this.each(function () {
        r.event.remove(this, a, c, b);
      });
    }
  });
  var za = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      Aa = /<script|<style|<link/i,
      Ba = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Ca = /^true\/(.*)/,
      Da = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function Ea(a, b) {
    return B(a, "table") && B(11 !== b.nodeType ? b : b.firstChild, "tr") ? r(">tbody", a)[0] || a : a;
  }

  function Fa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }

  function Ga(a) {
    var b = Ca.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function Ha(a, b) {
    var c, d, e, f, g, h, i, j;

    if (1 === b.nodeType) {
      if (W.hasData(a) && (f = W.access(a), g = W.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};

        for (e in j) {
          for (c = 0, d = j[e].length; c < d; c++) {
            r.event.add(b, e, j[e][c]);
          }
        }
      }

      X.hasData(a) && (h = X.access(a), i = r.extend({}, h), X.set(b, i));
    }
  }

  function Ia(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && ja.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
  }

  function Ja(a, b, c, d) {
    b = g.apply([], b);
    var e,
        f,
        h,
        i,
        j,
        k,
        l = 0,
        m = a.length,
        n = m - 1,
        q = b[0],
        s = r.isFunction(q);
    if (s || m > 1 && "string" == typeof q && !o.checkClone && Ba.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      s && (b[0] = q.call(this, e, f.html())), Ja(f, b, c, d);
    });

    if (m && (e = qa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
      for (h = r.map(na(e, "script"), Fa), i = h.length; l < m; l++) {
        j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, na(j, "script"))), c.call(a[l], j, l);
      }

      if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ga), l = 0; l < i; l++) {
        j = h[l], la.test(j.type || "") && !W.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Da, ""), k));
      }
    }

    return a;
  }

  function Ka(a, b, c) {
    for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || r.cleanData(na(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && oa(na(d, "script")), d.parentNode.removeChild(d));
    }

    return a;
  }

  r.extend({
    htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(za, "<$1></$2>");
    },
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = r.contains(a.ownerDocument, a);
      if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = na(h), f = na(a), d = 0, e = f.length; d < e; d++) {
        Ia(f[d], g[d]);
      }
      if (b) if (c) for (f = f || na(a), g = g || na(h), d = 0, e = f.length; d < e; d++) {
        Ha(f[d], g[d]);
      } else Ha(a, h);
      return g = na(h, "script"), g.length > 0 && oa(g, !i && na(a, "script")), h;
    },
    cleanData: function cleanData(a) {
      for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (U(c)) {
          if (b = c[W.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
            }
            c[W.expando] = void 0;
          }

          c[X.expando] && (c[X.expando] = void 0);
        }
      }
    }
  }), r.fn.extend({
    detach: function detach(a) {
      return Ka(this, a, !0);
    },
    remove: function remove(a) {
      return Ka(this, a);
    },
    text: function text(a) {
      return T(this, function (a) {
        return void 0 === a ? r.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function append() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return Ja(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ea(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return Ja(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (r.cleanData(na(a, !1)), a.textContent = "");
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return r.clone(this, a, b);
      });
    },
    html: function html(a) {
      return T(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;

        if ("string" == typeof a && !Aa.test(a) && !ma[(ka.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = r.htmlPrefilter(a);

          try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (r.cleanData(na(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = [];
      return Ja(this, arguments, function (b) {
        var c = this.parentNode;
        r.inArray(this, a) < 0 && (r.cleanData(na(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), r.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    r.fn[a] = function (a) {
      for (var c, d = [], e = r(a), f = e.length - 1, g = 0; g <= f; g++) {
        c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
      }

      return this.pushStack(d);
    };
  });

  var La = /^margin/,
      Ma = new RegExp("^(" + aa + ")(?!px)[a-z%]+$", "i"),
      Na = function Na(b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b);
  };

  !function () {
    function b() {
      if (i) {
        i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", ra.appendChild(h);
        var b = a.getComputedStyle(i);
        c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, ra.removeChild(h), i = null;
      }
    }

    var c,
        e,
        f,
        g,
        h = d.createElement("div"),
        i = d.createElement("div");
    i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, {
      pixelPosition: function pixelPosition() {
        return b(), c;
      },
      boxSizingReliable: function boxSizingReliable() {
        return b(), e;
      },
      pixelMarginRight: function pixelMarginRight() {
        return b(), f;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return b(), g;
      }
    }));
  }();

  function Oa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Na(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ma.test(g) && La.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }

  function Pa(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  var Qa = /^(none|table(?!-c[ea]).+)/,
      Ra = /^--/,
      Sa = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ta = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ua = ["Webkit", "Moz", "ms"],
      Va = d.createElement("div").style;

  function Wa(a) {
    if (a in Va) return a;
    var b = a[0].toUpperCase() + a.slice(1),
        c = Ua.length;

    while (c--) {
      if (a = Ua[c] + b, a in Va) return a;
    }
  }

  function Xa(a) {
    var b = r.cssProps[a];
    return b || (b = r.cssProps[a] = Wa(a) || a), b;
  }

  function Ya(a, b, c) {
    var d = ba.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }

  function Za(a, b, c, d, e) {
    var f,
        g = 0;

    for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; f < 4; f += 2) {
      "margin" === c && (g += r.css(a, c + ca[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + ca[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + ca[f] + "Width", !0, e))) : (g += r.css(a, "padding" + ca[f], !0, e), "padding" !== c && (g += r.css(a, "border" + ca[f] + "Width", !0, e)));
    }

    return g;
  }

  function $a(a, b, c) {
    var d,
        e = Na(a),
        f = Oa(a, b, e),
        g = "border-box" === r.css(a, "boxSizing", !1, e);
    return Ma.test(f) ? f : (d = g && (o.boxSizingReliable() || f === a.style[b]), "auto" === f && (f = a["offset" + b[0].toUpperCase() + b.slice(1)]), f = parseFloat(f) || 0, f + Za(a, b, c || (g ? "border" : "content"), d, e) + "px");
  }

  r.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Oa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": "cssFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = r.camelCase(b),
            i = Ra.test(b),
            j = a.style;
        return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : j[b] : (f = _typeof(c), "string" === f && (e = ba.exec(c)) && e[1] && (c = fa(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (j[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i ? j.setProperty(b, c) : j[b] = c)), void 0);
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = r.camelCase(b),
          i = Ra.test(b);
      return i || (b = Xa(h)), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Oa(a, b, d)), "normal" === e && b in Ta && (e = Ta[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    }
  }), r.each(["height", "width"], function (a, b) {
    r.cssHooks[b] = {
      get: function get(a, c, d) {
        if (c) return !Qa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? $a(a, b, d) : ea(a, Sa, function () {
          return $a(a, b, d);
        });
      },
      set: function set(a, c, d) {
        var e,
            f = d && Na(a),
            g = d && Za(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);
        return g && (e = ba.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ya(a, c, g);
      }
    };
  }), r.cssHooks.marginLeft = Pa(o.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Oa(a, "marginLeft")) || a.getBoundingClientRect().left - ea(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    })) + "px";
  }), r.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    r.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + ca[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, La.test(a) || (r.cssHooks[a + b].set = Ya);
  }), r.fn.extend({
    css: function css(a, b) {
      return T(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (Array.isArray(b)) {
          for (d = Na(a), e = b.length; g < e; g++) {
            f[b[g]] = r.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
      }, a, b, arguments.length > 1);
    }
  });

  function _a(a, b, c, d, e) {
    return new _a.prototype.init(a, b, c, d, e);
  }

  r.Tween = _a, _a.prototype = {
    constructor: _a,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = _a.propHooks[this.prop];
      return a && a.get ? a.get(this) : _a.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = _a.propHooks[this.prop];
      return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : _a.propHooks._default.set(this), this;
    }
  }, _a.prototype.init.prototype = _a.prototype, _a.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function set(a) {
        r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, _a.propHooks.scrollTop = _a.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, r.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, r.fx = _a.prototype.init, r.fx.step = {};
  var ab,
      bb,
      cb = /^(?:toggle|show|hide)$/,
      db = /queueHooks$/;

  function eb() {
    bb && (d.hidden === !1 && a.requestAnimationFrame ? a.requestAnimationFrame(eb) : a.setTimeout(eb, r.fx.interval), r.fx.tick());
  }

  function fb() {
    return a.setTimeout(function () {
      ab = void 0;
    }), ab = r.now();
  }

  function gb(a, b) {
    var c,
        d = 0,
        e = {
      height: a
    };

    for (b = b ? 1 : 0; d < 4; d += 2 - b) {
      c = ca[d], e["margin" + c] = e["padding" + c] = a;
    }

    return b && (e.opacity = e.width = a), e;
  }

  function hb(a, b, c) {
    for (var d, e = (kb.tweeners[b] || []).concat(kb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function ib(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && da(a),
        q = W.get(a, "fxshow");
    c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
      g.unqueued || h();
    }), g.unqueued++, m.always(function () {
      m.always(function () {
        g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
      });
    }));

    for (d in b) {
      if (e = b[d], cb.test(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }

        n[d] = q && q[d] || r.style(a, d);
      }
    }

    if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
      l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = W.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ia([a], !0), j = a.style.display || j, k = r.css(a, "display"), ia([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
        o.display = j;
      }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
        o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
      })), i = !1;

      for (d in n) {
        i || (q ? "hidden" in q && (p = q.hidden) : q = W.access(a, "fxshow", {
          display: j
        }), f && (q.hidden = !p), p && ia([a], !0), m.done(function () {
          p || ia([a]), W.remove(a, "fxshow");

          for (d in n) {
            r.style(a, d, n[d]);
          }
        })), i = hb(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
      }
    }
  }

  function jb(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = r.camelCase(c), e = b[d], f = a[c], Array.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function kb(a, b, c) {
    var d,
        e,
        f = 0,
        g = kb.prefilters.length,
        h = r.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = ab || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (i || h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: r.extend({}, b),
      opts: r.extend(!0, {
        specialEasing: {},
        easing: r.easing._default
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: ab || fb(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }

        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (jb(k, j.opts.specialEasing); f < g; f++) {
      if (d = kb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
    }

    return r.map(k, hb, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always), r.fx.timer(r.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j;
  }

  r.Animation = r.extend(kb, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return fa(c.elem, a, ba.exec(b), c), c;
      }]
    },
    tweener: function tweener(a, b) {
      r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(L);

      for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], kb.tweeners[c] = kb.tweeners[c] || [], kb.tweeners[c].unshift(b);
      }
    },
    prefilters: [ib],
    prefilter: function prefilter(a, b) {
      b ? kb.prefilters.unshift(a) : kb.prefilters.push(a);
    }
  }), r.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? r.extend({}, a) : {
      complete: c || !c && b || r.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !r.isFunction(b) && b
    };
    return r.fx.off ? d.duration = 0 : "number" != typeof d.duration && (d.duration in r.fx.speeds ? d.duration = r.fx.speeds[d.duration] : d.duration = r.fx.speeds._default), null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      r.isFunction(d.old) && d.old.call(this), d.queue && r.dequeue(this, d.queue);
    }, d;
  }, r.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(da).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = r.isEmptyObject(a),
          f = r.speed(b, c, d),
          g = function g() {
        var b = kb(this, r.extend({}, a), f);
        (e || W.get(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = r.timers,
            g = W.get(this);
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && db.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        !b && c || r.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = W.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = r.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), r.each(["toggle", "show", "hide"], function (a, b) {
    var c = r.fn[b];

    r.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
    };
  }), r.each({
    slideDown: gb("show"),
    slideUp: gb("hide"),
    slideToggle: gb("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    r.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), r.timers = [], r.fx.tick = function () {
    var a,
        b = 0,
        c = r.timers;

    for (ab = r.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }

    c.length || r.fx.stop(), ab = void 0;
  }, r.fx.timer = function (a) {
    r.timers.push(a), r.fx.start();
  }, r.fx.interval = 13, r.fx.start = function () {
    bb || (bb = !0, eb());
  }, r.fx.stop = function () {
    bb = null;
  }, r.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, r.fn.delay = function (b, c) {
    return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);

      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
    a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
  }();
  var lb,
      mb = r.expr.attrHandle;
  r.fn.extend({
    attr: function attr(a, b) {
      return T(this, r.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        r.removeAttr(this, a);
      });
    }
  }), r.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? lb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!o.radioValue && "radio" === b && B(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d = 0,
          e = b && b.match(L);
      if (e && 1 === a.nodeType) while (c = e[d++]) {
        a.removeAttribute(c);
      }
    }
  }), lb = {
    set: function set(a, b, c) {
      return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = mb[b] || r.find.attr;

    mb[b] = function (a, b, d) {
      var e,
          f,
          g = b.toLowerCase();
      return d || (f = mb[g], mb[g] = e, e = null != c(a, b, d) ? g : null, mb[g] = f), e;
    };
  });
  var nb = /^(?:input|select|textarea|button)$/i,
      ob = /^(?:a|area)$/i;
  r.fn.extend({
    prop: function prop(a, b) {
      return T(this, r.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[r.propFix[a] || a];
      });
    }
  }), r.extend({
    prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = r.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : nb.test(a.nodeName) || ob.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), o.optSelected || (r.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    },
    set: function set(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    r.propFix[this.toLowerCase()] = this;
  });

  function pb(a) {
    var b = a.match(L) || [];
    return b.join(" ");
  }

  function qb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }

  r.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (r.isFunction(a)) return this.each(function (b) {
        r(this).addClass(a.call(this, b, qb(this)));
      });

      if ("string" == typeof a && a) {
        b = a.match(L) || [];

        while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;

            while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }

            h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (r.isFunction(a)) return this.each(function (b) {
        r(this).removeClass(a.call(this, b, qb(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof a && a) {
        b = a.match(L) || [];

        while (c = this[i++]) {
          if (e = qb(c), d = 1 === c.nodeType && " " + pb(e) + " ") {
            g = 0;

            while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }

            h = pb(d), e !== h && c.setAttribute("class", h);
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
        r(this).toggleClass(a.call(this, c, qb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;

        if ("string" === c) {
          d = 0, e = r(this), f = a.match(L) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = qb(this), b && W.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : W.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;
      b = " " + a + " ";

      while (c = this[d++]) {
        if (1 === c.nodeType && (" " + pb(qb(c)) + " ").indexOf(b) > -1) return !0;
      }

      return !1;
    }
  });
  var rb = /\r/g;
  r.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = r.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c);
      }
    }
  }), r.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = r.find.attr(a, "value");
          return null != b ? b : pb(r.text(a));
        }
      },
      select: {
        get: function get(a) {
          var b,
              c,
              d,
              e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;

          for (d = f < 0 ? i : g ? f : 0; d < i; d++) {
            if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !B(c.parentNode, "optgroup"))) {
              if (b = r(c).val(), g) return b;
              h.push(b);
            }
          }

          return h;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = r.makeArray(b),
              g = e.length;

          while (g--) {
            d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
          }

          return c || (a.selectedIndex = -1), f;
        }
      }
    }
  }), r.each(["radio", "checkbox"], function () {
    r.valHooks[this] = {
      set: function set(a, b) {
        if (Array.isArray(b)) return a.checked = r.inArray(r(a).val(), b) > -1;
      }
    }, o.checkOn || (r.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var sb = /^(?:focusinfocus|focusoutblur)$/;
  r.extend(r.event, {
    trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          k,
          m,
          n,
          o = [e || d],
          p = l.call(b, "type") ? b.type : b,
          q = l.call(b, "namespace") ? b.namespace.split(".") : [];

      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !sb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == _typeof(b) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
        if (!f && !n.noBubble && !r.isWindow(e)) {
          for (j = n.delegateType || p, sb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h), i = h;
          }

          i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
        }

        g = 0;

        while ((h = o[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : n.bindType || p, m = (W.get(h, "events") || {})[b.type] && W.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && U(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }

        return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !U(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
      }
    },
    simulate: function simulate(a, b, c) {
      var d = r.extend(new r.Event(), c, {
        type: a,
        isSimulated: !0
      });
      r.event.trigger(d, null, b);
    }
  }), r.fn.extend({
    trigger: function trigger(a, b) {
      return this.each(function () {
        r.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      if (c) return r.event.trigger(a, b, c, !0);
    }
  }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
    r.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), r.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  }), o.focusin = "onfocusin" in a, o.focusin || r.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      r.event.simulate(b, a.target, r.event.fix(a));
    };

    r.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = W.access(d, b);
        e || d.addEventListener(a, c, !0), W.access(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = W.access(d, b) - 1;
        e ? W.access(d, b, e) : (d.removeEventListener(a, c, !0), W.remove(d, b));
      }
    };
  });
  var tb = a.location,
      ub = r.now(),
      vb = /\?/;

  r.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;

    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }

    return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
  };

  var wb = /\[\]$/,
      xb = /\r?\n/g,
      yb = /^(?:submit|button|image|reset|file)$/i,
      zb = /^(?:input|select|textarea|keygen)/i;

  function Ab(a, b, c, d) {
    var e;
    if (Array.isArray(b)) r.each(b, function (b, e) {
      c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == _typeof(e) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
      Ab(a + "[" + e + "]", b[e], c, d);
    }
  }

  r.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      var c = r.isFunction(b) ? b() : b;
      d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
    };

    if (Array.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Ab(c, a[c], b, e);
    }
    return d.join("&");
  }, r.fn.extend({
    serialize: function serialize() {
      return r.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = r.prop(this, "elements");
        return a ? r.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !r(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !ja.test(a));
      }).map(function (a, b) {
        var c = r(this).val();
        return null == c ? null : Array.isArray(c) ? r.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(xb, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(xb, "\r\n")
        };
      }).get();
    }
  });
  var Bb = /%20/g,
      Cb = /#.*$/,
      Db = /([?&])_=[^&]*/,
      Eb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Fb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Gb = /^(?:GET|HEAD)$/,
      Hb = /^\/\//,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*"),
      Lb = d.createElement("a");
  Lb.href = tb.href;

  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(L) || [];
      if (r.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;

    function g(h) {
      var i;
      return e[h] = !0, r.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function Ob(a, b) {
    var c,
        d,
        e = r.ajaxSettings.flatOptions || {};

    for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }

    return d && r.extend(!0, a, d), a;
  }

  function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }

        g || (g = e);
      }

      f = f || g;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }

  function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  r.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: tb.href,
      type: "GET",
      isLocal: Fb.test(tb.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": JSON.parse,
        "text xml": r.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, r.ajaxSettings), b) : Ob(r.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function ajax(b, c) {
      "object" == _typeof(b) && (c = b, b = void 0), c = c || {};
      var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o = r.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
          s = r.Deferred(),
          t = r.Callbacks("once memory"),
          u = o.statusCode || {},
          v = {},
          w = {},
          x = "canceled",
          y = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (k) {
            if (!h) {
              h = {};

              while (b = Eb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }

            b = h[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return k ? g : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return null == k && (o.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (k) y.always(a[y.status]);else for (b in a) {
            u[b] = [u[b], a[b]];
          }
          return this;
        },
        abort: function abort(a) {
          var b = a || x;
          return e && e.abort(b), A(0, b), this;
        }
      };

      if (s.promise(y), o.url = ((b || o.url || tb.href) + "").replace(Hb, tb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(L) || [""], null == o.crossDomain) {
        j = d.createElement("a");

        try {
          j.href = o.url, j.href = j.href, o.crossDomain = Lb.protocol + "//" + Lb.host != j.protocol + "//" + j.host;
        } catch (z) {
          o.crossDomain = !0;
        }
      }

      if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Nb(Ib, o, c, y), k) return y;
      l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Gb.test(o.type), f = o.url.replace(Cb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Bb, "+")) : (n = o.url.slice(f.length), o.data && (f += (vb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Db, "$1"), n = (vb.test(f) ? "&" : "?") + "_=" + ub++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : o.accepts["*"]);

      for (m in o.headers) {
        y.setRequestHeader(m, o.headers[m]);
      }

      if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();

      if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Nb(Jb, o, c, y)) {
        if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;
        o.async && o.timeout > 0 && (i = a.setTimeout(function () {
          y.abort("timeout");
        }, o.timeout));

        try {
          k = !1, e.send(v, A);
        } catch (z) {
          if (k) throw z;
          A(-1, z);
        }
      } else A(-1, "No Transport");

      function A(b, c, d, h) {
        var j,
            m,
            n,
            v,
            w,
            x = c;
        k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && b < 300 || 304 === b, d && (v = Pb(o, y, d)), v = Qb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", b < 0 && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
      }

      return y;
    },
    getJSON: function getJSON(a, b, c) {
      return r.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return r.get(a, void 0, b, "script");
    }
  }), r.each(["get", "post"], function (a, b) {
    r[b] = function (a, c, d, e) {
      return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, r.isPlainObject(a) && a));
    };
  }), r._evalUrl = function (a) {
    return r.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, r.fn.extend({
    wrapAll: function wrapAll(a) {
      var b;
      return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;

        while (a.firstElementChild) {
          a = a.firstElementChild;
        }

        return a;
      }).append(this)), this;
    },
    wrapInner: function wrapInner(a) {
      return r.isFunction(a) ? this.each(function (b) {
        r(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = r(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = r.isFunction(a);
      return this.each(function (c) {
        r(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap(a) {
      return this.parent(a).not("body").each(function () {
        r(this).replaceWith(this.childNodes);
      }), this;
    }
  }), r.expr.pseudos.hidden = function (a) {
    return !r.expr.pseudos.visible(a);
  }, r.expr.pseudos.visible = function (a) {
    return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
  }, r.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };
  var Rb = {
    0: 200,
    1223: 204
  },
      Sb = r.ajaxSettings.xhr();
  o.cors = !!Sb && "withCredentials" in Sb, o.ajax = Sb = !!Sb, r.ajaxTransport(function (b) {
    var _c, d;

    if (o.cors || Sb && !b.crossDomain) return {
      send: function send(e, f) {
        var g,
            h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");

        for (g in e) {
          h.setRequestHeader(g, e[g]);
        }

        _c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Rb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");

        try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      },
      abort: function abort() {
        _c && _c();
      }
    };
  }), r.ajaxPrefilter(function (a) {
    a.crossDomain && (a.contents.script = !1);
  }), r.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(a) {
        return r.globalEval(a), a;
      }
    }
  }), r.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), r.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;

      return {
        send: function send(e, f) {
          b = r("<script>").prop({
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        },
        abort: function abort() {
          _c2 && _c2();
        }
      };
    }
  });
  var Tb = [],
      Ub = /(=)\?(?=&|$)|\?\?/;
  r.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = Tb.pop() || r.expando + "_" + ub++;
      return this[a] = !0, a;
    }
  }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Ub.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Ub.test(b.data) && "data");
    if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Ub, "$1" + e) : b.jsonp !== !1 && (b.url += (vb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || r.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Tb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), o.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), r.parseHTML = function (a, b, c) {
    if ("string" != typeof a) return [];
    "boolean" == typeof b && (c = b, b = !1);
    var e, f, g;
    return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = C.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = qa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
  }, r.fn.load = function (a, b, c) {
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h > -1 && (d = pb(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && r.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    r.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), r.expr.pseudos.animated = function (a) {
    return r.grep(r.timers, function (b) {
      return a === b.elem;
    }).length;
  }, r.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = r.css(a, "position"),
          l = r(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, r.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        r.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d,
          e,
          f = this[0];
      if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), b = f.ownerDocument, c = b.documentElement, e = b.defaultView, {
        top: d.top + e.pageYOffset - c.clientTop,
        left: d.left + e.pageXOffset - c.clientLeft
      }) : {
        top: 0,
        left: 0
      };
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = {
          top: 0,
          left: 0
        };
        return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), B(a[0], "html") || (d = a.offset()), d = {
          top: d.top + r.css(a[0], "borderTopWidth", !0),
          left: d.left + r.css(a[0], "borderLeftWidth", !0)
        }), {
          top: b.top - d.top - r.css(c, "marginTop", !0),
          left: b.left - d.left - r.css(c, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;

        while (a && "static" === r.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || ra;
      });
    }
  }), r.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = "pageYOffset" === b;

    r.fn[a] = function (d) {
      return T(this, function (a, d, e) {
        var f;
        return r.isWindow(a) ? f = a : 9 === a.nodeType && (f = a.defaultView), void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), r.each(["top", "left"], function (a, b) {
    r.cssHooks[b] = Pa(o.pixelPosition, function (a, c) {
      if (c) return c = Oa(a, b), Ma.test(c) ? r(a).position()[b] + "px" : c;
    });
  }), r.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    r.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      r.fn[d] = function (e, f) {
        var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");
        return T(this, function (b, c, e) {
          var f;
          return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
        }, b, g ? e : void 0, g);
      };
    });
  }), r.fn.extend({
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  }), r.holdReady = function (a) {
    a ? r.readyWait++ : r.ready(!0);
  }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = B,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = ((function () {
    return r;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)));
  var Vb = a.jQuery,
      Wb = a.$;
  return r.noConflict = function (b) {
    return a.$ === r && (a.$ = Wb), b && a.jQuery === r && (a.jQuery = Vb), r;
  }, b || (a.jQuery = a.$ = r), r;
});
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */

(function (e, t) {
  'object' == ( false ? undefined : _typeof(exports)) && 'undefined' != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function () {
  'use strict';

  function e(e) {
    return e && '[object Function]' === {}.toString.call(e);
  }

  function t(e, t) {
    if (1 !== e.nodeType) return [];
    var o = getComputedStyle(e, null);
    return t ? o[t] : o;
  }

  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host;
  }

  function n(e) {
    if (!e) return document.body;

    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body;

      case '#document':
        return e.body;
    }

    var i = t(e),
        r = i.overflow,
        p = i.overflowX,
        s = i.overflowY;
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e));
  }

  function r(e) {
    return 11 === e ? re : 10 === e ? pe : re || pe;
  }

  function p(e) {
    if (!e) return document.documentElement;

    for (var o = r(10) ? document.body : null, n = e.offsetParent; n === o && e.nextElementSibling;) {
      n = (e = e.nextElementSibling).offsetParent;
    }

    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement;
  }

  function s(e) {
    var t = e.nodeName;
    return 'BODY' !== t && ('HTML' === t || p(e.firstElementChild) === e);
  }

  function d(e) {
    return null === e.parentNode ? e : d(e.parentNode);
  }

  function a(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement;
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
        n = o ? e : t,
        i = o ? t : e,
        r = document.createRange();
    r.setStart(n, 0), r.setEnd(i, 0);
    var l = r.commonAncestorContainer;
    if (e !== l && t !== l || n.contains(i)) return s(l) ? l : p(l);
    var f = d(e);
    return f.host ? a(f.host, t) : a(e, d(t).host);
  }

  function l(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
        o = 'top' === t ? 'scrollTop' : 'scrollLeft',
        n = e.nodeName;

    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
          r = e.ownerDocument.scrollingElement || i;
      return r[o];
    }

    return e[o];
  }

  function f(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        n = l(t, 'top'),
        i = l(t, 'left'),
        r = o ? -1 : 1;
    return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e;
  }

  function m(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
        n = 'Left' == o ? 'Right' : 'Bottom';
    return parseFloat(e['border' + o + 'Width'], 10) + parseFloat(e['border' + n + 'Width'], 10);
  }

  function h(e, t, o, n) {
    return $(t['offset' + e], t['scroll' + e], o['client' + e], o['offset' + e], o['scroll' + e], r(10) ? o['offset' + e] + n['margin' + ('Height' === e ? 'Top' : 'Left')] + n['margin' + ('Height' === e ? 'Bottom' : 'Right')] : 0);
  }

  function c() {
    var e = document.body,
        t = document.documentElement,
        o = r(10) && getComputedStyle(t);
    return {
      height: h('Height', e, t, o),
      width: h('Width', e, t, o)
    };
  }

  function g(e) {
    return le({}, e, {
      right: e.left + e.width,
      bottom: e.top + e.height
    });
  }

  function u(e) {
    var o = {};

    try {
      if (r(10)) {
        o = e.getBoundingClientRect();
        var n = l(e, 'top'),
            i = l(e, 'left');
        o.top += n, o.left += i, o.bottom += n, o.right += i;
      } else o = e.getBoundingClientRect();
    } catch (t) {}

    var p = {
      left: o.left,
      top: o.top,
      width: o.right - o.left,
      height: o.bottom - o.top
    },
        s = 'HTML' === e.nodeName ? c() : {},
        d = s.width || e.clientWidth || p.right - p.left,
        a = s.height || e.clientHeight || p.bottom - p.top,
        f = e.offsetWidth - d,
        h = e.offsetHeight - a;

    if (f || h) {
      var u = t(e);
      f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h;
    }

    return g(p);
  }

  function b(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
        p = r(10),
        s = 'HTML' === o.nodeName,
        d = u(e),
        a = u(o),
        l = n(e),
        m = t(o),
        h = parseFloat(m.borderTopWidth, 10),
        c = parseFloat(m.borderLeftWidth, 10);
    i && 'HTML' === o.nodeName && (a.top = $(a.top, 0), a.left = $(a.left, 0));
    var b = g({
      top: d.top - a.top - h,
      left: d.left - a.left - c,
      width: d.width,
      height: d.height
    });

    if (b.marginTop = 0, b.marginLeft = 0, !p && s) {
      var y = parseFloat(m.marginTop, 10),
          w = parseFloat(m.marginLeft, 10);
      b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w;
    }

    return (p && !i ? o.contains(l) : o === l && 'BODY' !== l.nodeName) && (b = f(b, o)), b;
  }

  function y(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = e.ownerDocument.documentElement,
        n = b(e, o),
        i = $(o.clientWidth, window.innerWidth || 0),
        r = $(o.clientHeight, window.innerHeight || 0),
        p = t ? 0 : l(o),
        s = t ? 0 : l(o, 'left'),
        d = {
      top: p - n.top + n.marginTop,
      left: s - n.left + n.marginLeft,
      width: i,
      height: r
    };
    return g(d);
  }

  function w(e) {
    var n = e.nodeName;
    return 'BODY' === n || 'HTML' === n ? !1 : 'fixed' === t(e, 'position') || w(o(e));
  }

  function E(e) {
    if (!e || !e.parentElement || r()) return document.documentElement;

    for (var o = e.parentElement; o && 'none' === t(o, 'transform');) {
      o = o.parentElement;
    }

    return o || document.documentElement;
  }

  function v(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
        s = {
      top: 0,
      left: 0
    },
        d = p ? E(e) : a(e, t);
    if ('viewport' === r) s = y(d, p);else {
      var l;
      'scrollParent' === r ? (l = n(o(t)), 'BODY' === l.nodeName && (l = e.ownerDocument.documentElement)) : 'window' === r ? l = e.ownerDocument.documentElement : l = r;
      var f = b(l, d, p);

      if ('HTML' === l.nodeName && !w(d)) {
        var m = c(),
            h = m.height,
            g = m.width;
        s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left;
      } else s = f;
    }
    return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s;
  }

  function x(e) {
    var t = e.width,
        o = e.height;
    return t * o;
  }

  function O(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === e.indexOf('auto')) return e;
    var p = v(o, n, r, i),
        s = {
      top: {
        width: p.width,
        height: t.top - p.top
      },
      right: {
        width: p.right - t.right,
        height: p.height
      },
      bottom: {
        width: p.width,
        height: p.bottom - t.bottom
      },
      left: {
        width: t.left - p.left,
        height: p.height
      }
    },
        d = Object.keys(s).map(function (e) {
      return le({
        key: e
      }, s[e], {
        area: x(s[e])
      });
    }).sort(function (e, t) {
      return t.area - e.area;
    }),
        a = d.filter(function (e) {
      var t = e.width,
          n = e.height;
      return t >= o.clientWidth && n >= o.clientHeight;
    }),
        l = 0 < a.length ? a[0].key : d[0].key,
        f = e.split('-')[1];
    return l + (f ? '-' + f : '');
  }

  function L(e, t, o) {
    var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
        i = n ? E(t) : a(t, o);
    return b(o, i, n);
  }

  function S(e) {
    var t = getComputedStyle(e),
        o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
        n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
        i = {
      width: e.offsetWidth + n,
      height: e.offsetHeight + o
    };
    return i;
  }

  function T(e) {
    var t = {
      left: 'right',
      right: 'left',
      bottom: 'top',
      top: 'bottom'
    };
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e];
    });
  }

  function C(e, t, o) {
    o = o.split('-')[0];
    var n = S(e),
        i = {
      width: n.width,
      height: n.height
    },
        r = -1 !== ['right', 'left'].indexOf(o),
        p = r ? 'top' : 'left',
        s = r ? 'left' : 'top',
        d = r ? 'height' : 'width',
        a = r ? 'width' : 'height';
    return i[p] = t[p] + t[d] / 2 - n[d] / 2, i[s] = o === s ? t[s] - n[a] : t[T(s)], i;
  }

  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0];
  }

  function N(e, t, o) {
    if (Array.prototype.findIndex) return e.findIndex(function (e) {
      return e[t] === o;
    });
    var n = D(e, function (e) {
      return e[t] === o;
    });
    return e.indexOf(n);
  }

  function P(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, N(t, 'name', n));
    return i.forEach(function (t) {
      t['function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      var n = t['function'] || t.fn;
      t.enabled && e(n) && (o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t));
    }), o;
  }

  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {}
      };
      e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e));
    }
  }

  function W(e, t) {
    return e.some(function (e) {
      var o = e.name,
          n = e.enabled;
      return n && o === t;
    });
  }

  function B(e) {
    for (var t = [!1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
      var i = t[n],
          r = i ? '' + i + o : e;
      if ('undefined' != typeof document.body.style[r]) return r;
    }

    return null;
  }

  function H() {
    return this.state.isDestroyed = !0, W(this.modifiers, 'applyStyle') && (this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this;
  }

  function A(e) {
    var t = e.ownerDocument;
    return t ? t.defaultView : window;
  }

  function M(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
        p = r ? e.ownerDocument.defaultView : e;
    p.addEventListener(t, o, {
      passive: !0
    }), r || M(n(p.parentNode), t, o, i), i.push(p);
  }

  function I(e, t, o, i) {
    o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
      passive: !0
    });
    var r = n(e);
    return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = !0, o;
  }

  function F() {
    this.state.eventsEnabled || (this.state = I(this.reference, this.options, this.state, this.scheduleUpdate));
  }

  function R(e, t) {
    return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
      e.removeEventListener('scroll', t.updateBound);
    }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t;
  }

  function U() {
    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state));
  }

  function Y(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e);
  }

  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) && (n = 'px'), e.style[o] = t[o] + n;
    });
  }

  function K(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o];
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o]);
    });
  }

  function q(e, t, o) {
    var n = D(e, function (e) {
      var o = e.name;
      return o === t;
    }),
        i = !!n && e.some(function (e) {
      return e.name === o && e.enabled && e.order < n.order;
    });

    if (!i) {
      var r = '`' + t + '`';
      console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!');
    }

    return i;
  }

  function G(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e;
  }

  function z(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
        o = me.indexOf(e),
        n = me.slice(o + 1).concat(me.slice(0, o));
    return t ? n.reverse() : n;
  }

  function V(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
        r = +i[1],
        p = i[2];
    if (!r) return e;

    if (0 === p.indexOf('%')) {
      var s;

      switch (p) {
        case '%p':
          s = o;
          break;

        case '%':
        case '%r':
        default:
          s = n;
      }

      var d = g(s);
      return d[t] / 100 * r;
    }

    if ('vh' === p || 'vw' === p) {
      var a;
      return a = 'vh' === p ? $(document.documentElement.clientHeight, window.innerHeight || 0) : $(document.documentElement.clientWidth, window.innerWidth || 0), a / 100 * r;
    }

    return r;
  }

  function _(e, t, o, n) {
    var i = [0, 0],
        r = -1 !== ['right', 'left'].indexOf(n),
        p = e.split(/(\+|\-)/).map(function (e) {
      return e.trim();
    }),
        s = p.indexOf(D(p, function (e) {
      return -1 !== e.search(/,|\s/);
    }));
    p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
    var d = /\s*,\s*|\s+/,
        a = -1 === s ? [p] : [p.slice(0, s).concat([p[s].split(d)[0]]), [p[s].split(d)[1]].concat(p.slice(s + 1))];
    return a = a.map(function (e, n) {
      var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1;
      return e.reduce(function (e, t) {
        return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t) ? (e[e.length - 1] = t, p = !0, e) : p ? (e[e.length - 1] += t, p = !1, e) : e.concat(t);
      }, []).map(function (e) {
        return V(e, i, t, o);
      });
    }), a.forEach(function (e, t) {
      e.forEach(function (o, n) {
        Y(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1));
      });
    }), i;
  }

  function X(e, t) {
    var o,
        n = t.offset,
        i = e.placement,
        r = e.offsets,
        p = r.popper,
        s = r.reference,
        d = i.split('-')[0];
    return o = Y(+n) ? [+n, 0] : _(n, p, s, d), 'left' === d ? (p.top += o[0], p.left -= o[1]) : 'right' === d ? (p.top += o[0], p.left += o[1]) : 'top' === d ? (p.left += o[0], p.top -= o[1]) : 'bottom' === d && (p.left += o[0], p.top += o[1]), e.popper = p, e;
  }

  for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te = ['Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1) {
    if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
      oe = 1;
      break;
    }
  }

  var i = ee && window.Promise,
      ie = i ? function (e) {
    var t = !1;
    return function () {
      t || (t = !0, window.Promise.resolve().then(function () {
        t = !1, e();
      }));
    };
  } : function (e) {
    var t = !1;
    return function () {
      t || (t = !0, setTimeout(function () {
        t = !1, e();
      }, oe));
    };
  },
      re = ee && !!(window.MSInputMethodContext && document.documentMode),
      pe = ee && /MSIE 10/.test(navigator.userAgent),
      se = function se(e, t) {
    if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
  },
      de = function () {
    function e(e, t) {
      for (var o, n = 0; n < t.length; n++) {
        o = t[n], o.enumerable = o.enumerable || !1, o.configurable = !0, 'value' in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }

    return function (t, o, n) {
      return o && e(t.prototype, o), n && e(t, n), t;
    };
  }(),
      ae = function ae(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
      value: o,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = o, e;
  },
      le = Object.assign || function (e) {
    for (var t, o = 1; o < arguments.length; o++) {
      for (var n in t = arguments[o], t) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }

    return e;
  },
      fe = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'],
      me = fe.slice(3),
      he = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise'
  },
      ce = function () {
    function t(o, n) {
      var i = this,
          r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      se(this, t), this.scheduleUpdate = function () {
        return requestAnimationFrame(i.update);
      }, this.update = ie(this.update.bind(this)), this.options = le({}, t.Defaults, r), this.state = {
        isDestroyed: !1,
        isCreated: !1,
        scrollParents: []
      }, this.reference = o && o.jquery ? o[0] : o, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
        i.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, r.modifiers ? r.modifiers[e] : {});
      }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
        return le({
          name: e
        }, i.options.modifiers[e]);
      }).sort(function (e, t) {
        return e.order - t.order;
      }), this.modifiers.forEach(function (t) {
        t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state);
      }), this.update();
      var p = this.options.eventsEnabled;
      p && this.enableEventListeners(), this.state.eventsEnabled = p;
    }

    return de(t, [{
      key: 'update',
      value: function value() {
        return k.call(this);
      }
    }, {
      key: 'destroy',
      value: function value() {
        return H.call(this);
      }
    }, {
      key: 'enableEventListeners',
      value: function value() {
        return F.call(this);
      }
    }, {
      key: 'disableEventListeners',
      value: function value() {
        return U.call(this);
      }
    }]), t;
  }();

  return ce.Utils = ('undefined' == typeof window ? global : window).PopperUtils, ce.placements = fe, ce.Defaults = {
    placement: 'bottom',
    positionFixed: !1,
    eventsEnabled: !0,
    removeOnDestroy: !1,
    onCreate: function onCreate() {},
    onUpdate: function onUpdate() {},
    modifiers: {
      shift: {
        order: 100,
        enabled: !0,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1];

          if (n) {
            var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
              start: ae({}, d, r[d]),
              end: ae({}, d, r[d] + r[a] - p[a])
            };
            e.offsets.popper = le({}, p, l[n]);
          }

          return e;
        }
      },
      offset: {
        order: 200,
        enabled: !0,
        fn: X,
        offset: 0
      },
      preventOverflow: {
        order: 300,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.boundariesElement || p(e.instance.popper);
          e.instance.reference === o && (o = p(o));
          var n = B('transform'),
              i = e.instance.popper.style,
              r = i.top,
              s = i.left,
              d = i[n];
          i.top = '', i.left = '', i[n] = '';
          var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
          i.top = r, i.left = s, i[n] = d, t.boundaries = a;
          var l = t.priority,
              f = e.offsets.popper,
              m = {
            primary: function primary(e) {
              var o = f[e];
              return f[e] < a[e] && !t.escapeWithReference && (o = $(f[e], a[e])), ae({}, e, o);
            },
            secondary: function secondary(e) {
              var o = 'right' === e ? 'left' : 'top',
                  n = f[o];
              return f[e] > a[e] && !t.escapeWithReference && (n = J(f[o], a[e] - ('right' === e ? f.width : f.height))), ae({}, o, n);
            }
          };
          return l.forEach(function (e) {
            var t = -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary';
            f = le({}, f, m[t](e));
          }), e.offsets.popper = f, e;
        },
        priority: ['left', 'right', 'top', 'bottom'],
        padding: 5,
        boundariesElement: 'scrollParent'
      },
      keepTogether: {
        order: 400,
        enabled: !0,
        fn: function fn(e) {
          var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = Z,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height';
          return o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])), e;
        }
      },
      arrow: {
        order: 500,
        enabled: !0,
        fn: function fn(e, o) {
          var n;
          if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e;
          var i = o.element;

          if ('string' == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e;
          } else if (!e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e;

          var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              c = a ? 'bottom' : 'right',
              u = S(i)[l];
          d[c] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[c] - u)), d[m] + u > s[c] && (e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
          var b = d[m] + d[l] / 2 - u / 2,
              y = t(e.instance.popper),
              w = parseFloat(y['margin' + f], 10),
              E = parseFloat(y['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - w - E;
          return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, ae(n, m, Q(v)), ae(n, h, ''), n), e;
        },
        element: '[x-arrow]'
      },
      flip: {
        order: 600,
        enabled: !0,
        fn: function fn(e, t) {
          if (W(e.instance.modifiers, 'inner')) return e;
          if (e.flipped && e.placement === e.originalPlacement) return e;
          var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
              n = e.placement.split('-')[0],
              i = T(n),
              r = e.placement.split('-')[1] || '',
              p = [];

          switch (t.behavior) {
            case he.FLIP:
              p = [n, i];
              break;

            case he.CLOCKWISE:
              p = z(n);
              break;

            case he.COUNTERCLOCKWISE:
              p = z(n, !0);
              break;

            default:
              p = t.behavior;
          }

          return p.forEach(function (s, d) {
            if (n !== s || p.length === d + 1) return e;
            n = e.placement.split('-')[0], i = T(n);
            var a = e.offsets.popper,
                l = e.offsets.reference,
                f = Z,
                m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom),
                h = f(a.left) < f(o.left),
                c = f(a.right) > f(o.right),
                g = f(a.top) < f(o.top),
                u = f(a.bottom) > f(o.bottom),
                b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u,
                y = -1 !== ['top', 'bottom'].indexOf(n),
                w = !!t.flipVariations && (y && 'start' === r && h || y && 'end' === r && c || !y && 'start' === r && g || !y && 'end' === r && u);
            (m || b || w) && (e.flipped = !0, (m || b) && (n = p[d + 1]), w && (r = G(r)), e.placement = n + (r ? '-' + r : ''), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'));
          }), e;
        },
        behavior: 'flip',
        padding: 5,
        boundariesElement: 'viewport'
      },
      inner: {
        order: 700,
        enabled: !1,
        fn: function fn(e) {
          var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o);
          return i[p ? 'left' : 'top'] = r[o] - (s ? i[p ? 'width' : 'height'] : 0), e.placement = T(t), e.offsets.popper = g(i), e;
        }
      },
      hide: {
        order: 800,
        enabled: !0,
        fn: function fn(e) {
          if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e;
          var t = e.offsets.reference,
              o = D(e.instance.modifiers, function (e) {
            return 'preventOverflow' === e.name;
          }).boundaries;

          if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
            if (!0 === e.hide) return e;
            e.hide = !0, e.attributes['x-out-of-boundaries'] = '';
          } else {
            if (!1 === e.hide) return e;
            e.hide = !1, e.attributes['x-out-of-boundaries'] = !1;
          }

          return e;
        }
      },
      computeStyle: {
        order: 850,
        enabled: !0,
        fn: function fn(e, t) {
          var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              r = D(e.instance.modifiers, function (e) {
            return 'applyStyle' === e.name;
          }).gpuAcceleration;
          void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
          var s,
              d,
              a = void 0 === r ? t.gpuAcceleration : r,
              l = p(e.instance.popper),
              f = u(l),
              m = {
            position: i.position
          },
              h = {
            left: Z(i.left),
            top: Q(i.top),
            bottom: Q(i.bottom),
            right: Z(i.right)
          },
              c = 'bottom' === o ? 'top' : 'bottom',
              g = 'right' === n ? 'left' : 'right',
              b = B('transform');
          if (d = 'bottom' == c ? -f.height + h.bottom : h.top, s = 'right' == g ? -f.width + h.right : h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform';else {
            var y = 'bottom' == c ? -1 : 1,
                w = 'right' == g ? -1 : 1;
            m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g;
          }
          var E = {
            "x-placement": e.placement
          };
          return e.attributes = le({}, E, e.attributes), e.styles = le({}, m, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e;
        },
        gpuAcceleration: !0,
        x: 'bottom',
        y: 'right'
      },
      applyStyle: {
        order: 900,
        enabled: !0,
        fn: function fn(e) {
          return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e;
        },
        onLoad: function onLoad(e, t, o, n, i) {
          var r = L(i, t, e, o.positionFixed),
              p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
          return t.setAttribute('x-placement', p), j(t, {
            position: o.positionFixed ? 'fixed' : 'absolute'
          }), o;
        },
        gpuAcceleration: void 0
      }
    }
  }, ce;
});
/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */


!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? e(exports, __WEBPACK_LOCAL_MODULE_0__, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __WEBPACK_LOCAL_MODULE_0__, __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (t, e, c) {
  "use strict";

  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  }

  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
          e = Object.keys(s);
      "function" == typeof Object.getOwnPropertySymbols && (e = e.concat(Object.getOwnPropertySymbols(s).filter(function (t) {
        return Object.getOwnPropertyDescriptor(s, t).enumerable;
      }))), e.forEach(function (t) {
        var e, n, i;
        e = r, i = s[n = t], n in e ? Object.defineProperty(e, n, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[n] = i;
      });
    }

    return r;
  }

  e = e && e.hasOwnProperty("default") ? e.default : e, c = c && c.hasOwnProperty("default") ? c.default : c;

  var r,
      n,
      s,
      a,
      l,
      u,
      f,
      d,
      _,
      g,
      m,
      p,
      v,
      E,
      y,
      T,
      C,
      I,
      A,
      D,
      b,
      S,
      w,
      N,
      O,
      k,
      P,
      L,
      j,
      R,
      H,
      W,
      M,
      x,
      U,
      K,
      F,
      V,
      Q,
      B,
      Y,
      G,
      q,
      z,
      X,
      J,
      Z,
      $,
      tt,
      et,
      nt,
      it,
      rt,
      st,
      ot,
      at,
      lt,
      ht,
      ct,
      ut,
      ft,
      dt,
      _t,
      gt,
      mt,
      pt,
      vt,
      Et,
      yt,
      Tt,
      Ct,
      It,
      At,
      Dt,
      bt,
      St,
      wt,
      Nt,
      Ot,
      kt,
      Pt,
      Lt,
      jt,
      Rt,
      Ht,
      Wt,
      Mt,
      xt,
      Ut,
      Kt,
      Ft,
      Vt,
      Qt,
      Bt,
      Yt,
      Gt,
      qt,
      zt,
      Xt,
      Jt,
      Zt,
      $t,
      te,
      ee,
      ne,
      ie,
      re,
      se,
      oe,
      ae,
      le,
      he,
      ce,
      ue,
      fe,
      de,
      _e,
      ge,
      me,
      pe,
      ve,
      Ee,
      ye,
      Te,
      Ce,
      Ie,
      Ae,
      De,
      be,
      Se,
      we,
      Ne,
      Oe,
      ke,
      Pe,
      Le,
      je,
      Re,
      He,
      We,
      Me,
      xe,
      Ue,
      Ke,
      Fe,
      Ve,
      Qe,
      Be,
      Ye,
      Ge,
      qe,
      ze,
      Xe,
      Je,
      Ze,
      $e,
      tn,
      en,
      nn,
      rn,
      sn,
      on,
      an,
      ln,
      hn,
      cn,
      un,
      fn,
      dn,
      _n,
      gn,
      mn,
      pn,
      vn,
      En,
      yn,
      Tn,
      Cn = function (i) {
    var e = "transitionend";

    function t(t) {
      var e = this,
          n = !1;
      return i(this).one(l.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || l.triggerTransitionEnd(e);
      }, t), this;
    }

    var l = {
      TRANSITION_END: "bsTransitionEnd",
      getUID: function getUID(t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {
          ;
        }

        return t;
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");
        e && "#" !== e || (e = t.getAttribute("href") || "");

        try {
          return 0 < i(document).find(e).length ? e : null;
        } catch (t) {
          return null;
        }
      },
      getTransitionDurationFromElement: function getTransitionDurationFromElement(t) {
        if (!t) return 0;
        var e = i(t).css("transition-duration");
        return parseFloat(e) ? (e = e.split(",")[0], 1e3 * parseFloat(e)) : 0;
      },
      reflow: function reflow(t) {
        return t.offsetHeight;
      },
      triggerTransitionEnd: function triggerTransitionEnd(t) {
        i(t).trigger(e);
      },
      supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(e);
      },
      isElement: function isElement(t) {
        return (t[0] || t).nodeType;
      },
      typeCheckConfig: function typeCheckConfig(t, e, n) {
        for (var i in n) {
          if (Object.prototype.hasOwnProperty.call(n, i)) {
            var r = n[i],
                s = e[i],
                o = s && l.isElement(s) ? "element" : (a = s, {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
            if (!new RegExp(r).test(o)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + o + '" but expected type "' + r + '".');
          }
        }

        var a;
      }
    };
    return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
      bindType: e,
      delegateType: e,
      handle: function handle(t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      }
    }, l;
  }(e),
      In = (n = "alert", a = "." + (s = "bs.alert"), l = (r = e).fn[n], u = {
    CLOSE: "close" + a,
    CLOSED: "closed" + a,
    CLICK_DATA_API: "click" + a + ".data-api"
  }, f = "alert", d = "fade", _ = "show", g = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.close = function (t) {
      var e = this._element;
      t && (e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, t.dispose = function () {
      r.removeData(this._element, s), this._element = null;
    }, t._getRootElement = function (t) {
      var e = Cn.getSelectorFromElement(t),
          n = !1;
      return e && (n = r(e)[0]), n || (n = r(t).closest("." + f)[0]), n;
    }, t._triggerCloseEvent = function (t) {
      var e = r.Event(u.CLOSE);
      return r(t).trigger(e), e;
    }, t._removeElement = function (e) {
      var n = this;

      if (r(e).removeClass(_), r(e).hasClass(d)) {
        var t = Cn.getTransitionDurationFromElement(e);
        r(e).one(Cn.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(t);
      } else this._destroyElement(e);
    }, t._destroyElement = function (t) {
      r(t).detach().trigger(u.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = r(this),
            e = t.data(s);
        e || (e = new i(this), t.data(s, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), i;
  }(), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g())), r.fn[n] = g._jQueryInterface, r.fn[n].Constructor = g, r.fn[n].noConflict = function () {
    return r.fn[n] = l, g._jQueryInterface;
  }, g),
      An = (p = "button", E = "." + (v = "bs.button"), y = ".data-api", T = (m = e).fn[p], C = "active", I = "btn", D = '[data-toggle^="button"]', b = '[data-toggle="buttons"]', S = "input", w = ".active", N = ".btn", O = {
    CLICK_DATA_API: "click" + E + y,
    FOCUS_BLUR_DATA_API: (A = "focus") + E + y + " blur" + E + y
  }, k = function () {
    function n(t) {
      this._element = t;
    }

    var t = n.prototype;
    return t.toggle = function () {
      var t = !0,
          e = !0,
          n = m(this._element).closest(b)[0];

      if (n) {
        var i = m(this._element).find(S)[0];

        if (i) {
          if ("radio" === i.type) if (i.checked && m(this._element).hasClass(C)) t = !1;else {
            var r = m(n).find(w)[0];
            r && m(r).removeClass(C);
          }

          if (t) {
            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
            i.checked = !m(this._element).hasClass(C), m(i).trigger("change");
          }

          i.focus(), e = !1;
        }
      }

      e && this._element.setAttribute("aria-pressed", !m(this._element).hasClass(C)), t && m(this._element).toggleClass(C);
    }, t.dispose = function () {
      m.removeData(this._element, v), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = m(this).data(v);
        t || (t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]();
      });
    }, o(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), n;
  }(), m(document).on(O.CLICK_DATA_API, D, function (t) {
    t.preventDefault();
    var e = t.target;
    m(e).hasClass(I) || (e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle");
  }).on(O.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = m(t.target).closest(N)[0];
    m(e).toggleClass(A, /^focus(in)?$/.test(t.type));
  }), m.fn[p] = k._jQueryInterface, m.fn[p].Constructor = k, m.fn[p].noConflict = function () {
    return m.fn[p] = T, k._jQueryInterface;
  }, k),
      Dn = (L = "carousel", R = "." + (j = "bs.carousel"), H = ".data-api", W = (P = e).fn[L], M = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0
  }, x = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean"
  }, U = "next", K = "prev", F = "left", V = "right", Q = {
    SLIDE: "slide" + R,
    SLID: "slid" + R,
    KEYDOWN: "keydown" + R,
    MOUSEENTER: "mouseenter" + R,
    MOUSELEAVE: "mouseleave" + R,
    TOUCHEND: "touchend" + R,
    LOAD_DATA_API: "load" + R + H,
    CLICK_DATA_API: "click" + R + H
  }, B = "carousel", Y = "active", G = "slide", q = "carousel-item-right", z = "carousel-item-left", X = "carousel-item-next", J = "carousel-item-prev", Z = {
    ACTIVE: ".active",
    ACTIVE_ITEM: ".active.carousel-item",
    ITEM: ".carousel-item",
    NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
    INDICATORS: ".carousel-indicators",
    DATA_SLIDE: "[data-slide], [data-slide-to]",
    DATA_RIDE: '[data-ride="carousel"]'
  }, $ = function () {
    function s(t, e) {
      this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0], this._addEventListeners();
    }

    var t = s.prototype;
    return t.next = function () {
      this._isSliding || this._slide(U);
    }, t.nextWhenVisible = function () {
      !document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next();
    }, t.prev = function () {
      this._isSliding || this._slide(K);
    }, t.pause = function (t) {
      t || (this._isPaused = !0), P(this._element).find(Z.NEXT_PREV)[0] && (Cn.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, t.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, t.to = function (t) {
      var e = this;
      this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0];

      var n = this._getItemIndex(this._activeElement);

      if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();
        var i = n < t ? U : K;

        this._slide(i, this._items[t]);
      }
    }, t.dispose = function () {
      P(this._element).off(R), P.removeData(this._element, j), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, t._getConfig = function (t) {
      return t = h({}, M, t), Cn.typeCheckConfig(L, t, x), t;
    }, t._addEventListeners = function () {
      var e = this;
      this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" === this._config.pause && (P(this._element).on(Q.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(Q.MOUSELEAVE, function (t) {
        return e.cycle(t);
      }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
        e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
          return e.cycle(t);
        }, 500 + e._config.interval);
      }));
    }, t._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
        case 37:
          t.preventDefault(), this.prev();
          break;

        case 39:
          t.preventDefault(), this.next();
      }
    }, t._getItemIndex = function (t) {
      return this._items = P.makeArray(P(t).parent().find(Z.ITEM)), this._items.indexOf(t);
    }, t._getItemByDirection = function (t, e) {
      var n = t === U,
          i = t === K,
          r = this._getItemIndex(e),
          s = this._items.length - 1;

      if ((i && 0 === r || n && r === s) && !this._config.wrap) return e;
      var o = (r + (t === K ? -1 : 1)) % this._items.length;
      return -1 === o ? this._items[this._items.length - 1] : this._items[o];
    }, t._triggerSlideEvent = function (t, e) {
      var n = this._getItemIndex(t),
          i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
          r = P.Event(Q.SLIDE, {
        relatedTarget: t,
        direction: e,
        from: i,
        to: n
      });

      return P(this._element).trigger(r), r;
    }, t._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);

        var e = this._indicatorsElement.children[this._getItemIndex(t)];

        e && P(e).addClass(Y);
      }
    }, t._slide = function (t, e) {
      var n,
          i,
          r,
          s = this,
          o = P(this._element).find(Z.ACTIVE_ITEM)[0],
          a = this._getItemIndex(o),
          l = e || o && this._getItemByDirection(t, o),
          h = this._getItemIndex(l),
          c = Boolean(this._interval);

      if (t === U ? (n = z, i = X, r = F) : (n = q, i = J, r = V), l && P(l).hasClass(Y)) this._isSliding = !1;else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && o && l) {
        this._isSliding = !0, c && this.pause(), this._setActiveIndicatorElement(l);
        var u = P.Event(Q.SLID, {
          relatedTarget: l,
          direction: r,
          from: a,
          to: h
        });

        if (P(this._element).hasClass(G)) {
          P(l).addClass(i), Cn.reflow(l), P(o).addClass(n), P(l).addClass(n);
          var f = Cn.getTransitionDurationFromElement(o);
          P(o).one(Cn.TRANSITION_END, function () {
            P(l).removeClass(n + " " + i).addClass(Y), P(o).removeClass(Y + " " + i + " " + n), s._isSliding = !1, setTimeout(function () {
              return P(s._element).trigger(u);
            }, 0);
          }).emulateTransitionEnd(f);
        } else P(o).removeClass(Y), P(l).addClass(Y), this._isSliding = !1, P(this._element).trigger(u);

        c && this.cycle();
      }
    }, s._jQueryInterface = function (i) {
      return this.each(function () {
        var t = P(this).data(j),
            e = h({}, M, P(this).data());
        "object" == _typeof(i) && (e = h({}, e, i));
        var n = "string" == typeof i ? i : e.slide;
        if (t || (t = new s(this, e), P(this).data(j, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, s._dataApiClickHandler = function (t) {
      var e = Cn.getSelectorFromElement(this);

      if (e) {
        var n = P(e)[0];

        if (n && P(n).hasClass(B)) {
          var i = h({}, P(n).data(), P(this).data()),
              r = this.getAttribute("data-slide-to");
          r && (i.interval = !1), s._jQueryInterface.call(P(n), i), r && P(n).data(j).to(r), t.preventDefault();
        }
      }
    }, o(s, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return M;
      }
    }]), s;
  }(), P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
    P(Z.DATA_RIDE).each(function () {
      var t = P(this);

      $._jQueryInterface.call(t, t.data());
    });
  }), P.fn[L] = $._jQueryInterface, P.fn[L].Constructor = $, P.fn[L].noConflict = function () {
    return P.fn[L] = W, $._jQueryInterface;
  }, $),
      bn = (et = "collapse", it = "." + (nt = "bs.collapse"), rt = (tt = e).fn[et], st = {
    toggle: !0,
    parent: ""
  }, ot = {
    toggle: "boolean",
    parent: "(string|element)"
  }, at = {
    SHOW: "show" + it,
    SHOWN: "shown" + it,
    HIDE: "hide" + it,
    HIDDEN: "hidden" + it,
    CLICK_DATA_API: "click" + it + ".data-api"
  }, lt = "show", ht = "collapse", ct = "collapsing", ut = "collapsed", ft = "width", dt = "height", _t = {
    ACTIVES: ".show, .collapsing",
    DATA_TOGGLE: '[data-toggle="collapse"]'
  }, gt = function () {
    function a(t, e) {
      this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));

      for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
        var r = n[i],
            s = Cn.getSelectorFromElement(r);
        null !== s && 0 < tt(s).filter(t).length && (this._selector = s, this._triggerArray.push(r));
      }

      this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }

    var t = a.prototype;
    return t.toggle = function () {
      tt(this._element).hasClass(lt) ? this.hide() : this.show();
    }, t.show = function () {
      var t,
          e,
          n = this;

      if (!this._isTransitioning && !tt(this._element).hasClass(lt) && (this._parent && 0 === (t = tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null), !(t && (e = tt(t).not(this._selector).data(nt)) && e._isTransitioning))) {
        var i = tt.Event(at.SHOW);

        if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
          t && (a._jQueryInterface.call(tt(t).not(this._selector), "hide"), e || tt(t).data(nt, null));

          var r = this._getDimension();

          tt(this._element).removeClass(ht).addClass(ct), (this._element.style[r] = 0) < this._triggerArray.length && tt(this._triggerArray).removeClass(ut).attr("aria-expanded", !0), this.setTransitioning(!0);
          var s = "scroll" + (r[0].toUpperCase() + r.slice(1)),
              o = Cn.getTransitionDurationFromElement(this._element);
          tt(this._element).one(Cn.TRANSITION_END, function () {
            tt(n._element).removeClass(ct).addClass(ht).addClass(lt), n._element.style[r] = "", n.setTransitioning(!1), tt(n._element).trigger(at.SHOWN);
          }).emulateTransitionEnd(o), this._element.style[r] = this._element[s] + "px";
        }
      }
    }, t.hide = function () {
      var t = this;

      if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
        var e = tt.Event(at.HIDE);

        if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension();

          if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Cn.reflow(this._element), tt(this._element).addClass(ct).removeClass(ht).removeClass(lt), 0 < this._triggerArray.length) for (var i = 0; i < this._triggerArray.length; i++) {
            var r = this._triggerArray[i],
                s = Cn.getSelectorFromElement(r);
            if (null !== s) tt(s).hasClass(lt) || tt(r).addClass(ut).attr("aria-expanded", !1);
          }
          this.setTransitioning(!0);
          this._element.style[n] = "";
          var o = Cn.getTransitionDurationFromElement(this._element);
          tt(this._element).one(Cn.TRANSITION_END, function () {
            t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN);
          }).emulateTransitionEnd(o);
        }
      }
    }, t.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, t.dispose = function () {
      tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, t._getConfig = function (t) {
      return (t = h({}, st, t)).toggle = Boolean(t.toggle), Cn.typeCheckConfig(et, t, ot), t;
    }, t._getDimension = function () {
      return tt(this._element).hasClass(ft) ? ft : dt;
    }, t._getParent = function () {
      var n = this,
          t = null;
      Cn.isElement(this._config.parent) ? (t = this._config.parent, "undefined" != typeof this._config.parent.jquery && (t = this._config.parent[0])) : t = tt(this._config.parent)[0];
      var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
      return tt(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, t._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = tt(t).hasClass(lt);
        0 < e.length && tt(e).toggleClass(ut, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = Cn.getSelectorFromElement(t);
      return e ? tt(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = tt(this),
            e = t.data(nt),
            n = h({}, st, t.data(), "object" == _typeof(i) && i ? i : {});

        if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
          if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
          e[i]();
        }
      });
    }, o(a, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return st;
      }
    }]), a;
  }(), tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
    "A" === t.currentTarget.tagName && t.preventDefault();
    var n = tt(this),
        e = Cn.getSelectorFromElement(this);
    tt(e).each(function () {
      var t = tt(this),
          e = t.data(nt) ? "toggle" : n.data();

      gt._jQueryInterface.call(t, e);
    });
  }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
    return tt.fn[et] = rt, gt._jQueryInterface;
  }, gt),
      Sn = (pt = "dropdown", Et = "." + (vt = "bs.dropdown"), yt = ".data-api", Tt = (mt = e).fn[pt], Ct = new RegExp("38|40|27"), It = {
    HIDE: "hide" + Et,
    HIDDEN: "hidden" + Et,
    SHOW: "show" + Et,
    SHOWN: "shown" + Et,
    CLICK: "click" + Et,
    CLICK_DATA_API: "click" + Et + yt,
    KEYDOWN_DATA_API: "keydown" + Et + yt,
    KEYUP_DATA_API: "keyup" + Et + yt
  }, At = "disabled", Dt = "show", bt = "dropup", St = "dropright", wt = "dropleft", Nt = "dropdown-menu-right", Ot = "position-static", kt = '[data-toggle="dropdown"]', Pt = ".dropdown form", Lt = ".dropdown-menu", jt = ".navbar-nav", Rt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Ht = "top-start", Wt = "top-end", Mt = "bottom-start", xt = "bottom-end", Ut = "right-start", Kt = "left-start", Ft = {
    offset: 0,
    flip: !0,
    boundary: "scrollParent",
    reference: "toggle",
    display: "dynamic"
  }, Vt = {
    offset: "(number|string|function)",
    flip: "boolean",
    boundary: "(string|element)",
    reference: "(string|element)",
    display: "string"
  }, Qt = function () {
    function l(t, e) {
      this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners();
    }

    var t = l.prototype;
    return t.toggle = function () {
      if (!this._element.disabled && !mt(this._element).hasClass(At)) {
        var t = l._getParentFromElement(this._element),
            e = mt(this._menu).hasClass(Dt);

        if (l._clearMenus(), !e) {
          var n = {
            relatedTarget: this._element
          },
              i = mt.Event(It.SHOW, n);

          if (mt(t).trigger(i), !i.isDefaultPrevented()) {
            if (!this._inNavbar) {
              if ("undefined" == typeof c) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
              var r = this._element;
              "parent" === this._config.reference ? r = t : Cn.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0])), "scrollParent" !== this._config.boundary && mt(t).addClass(Ot), this._popper = new c(r, this._menu, this._getPopperConfig());
            }

            "ontouchstart" in document.documentElement && 0 === mt(t).closest(jt).length && mt(document.body).children().on("mouseover", null, mt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), mt(this._menu).toggleClass(Dt), mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n));
          }
        }
      }
    }, t.dispose = function () {
      mt.removeData(this._element, vt), mt(this._element).off(Et), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null);
    }, t.update = function () {
      this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate();
    }, t._addEventListeners = function () {
      var e = this;
      mt(this._element).on(It.CLICK, function (t) {
        t.preventDefault(), t.stopPropagation(), e.toggle();
      });
    }, t._getConfig = function (t) {
      return t = h({}, this.constructor.Default, mt(this._element).data(), t), Cn.typeCheckConfig(pt, t, this.constructor.DefaultType), t;
    }, t._getMenuElement = function () {
      if (!this._menu) {
        var t = l._getParentFromElement(this._element);

        this._menu = mt(t).find(Lt)[0];
      }

      return this._menu;
    }, t._getPlacement = function () {
      var t = mt(this._element).parent(),
          e = Mt;
      return t.hasClass(bt) ? (e = Ht, mt(this._menu).hasClass(Nt) && (e = Wt)) : t.hasClass(St) ? e = Ut : t.hasClass(wt) ? e = Kt : mt(this._menu).hasClass(Nt) && (e = xt), e;
    }, t._detectNavbar = function () {
      return 0 < mt(this._element).closest(".navbar").length;
    }, t._getPopperConfig = function () {
      var e = this,
          t = {};
      "function" == typeof this._config.offset ? t.fn = function (t) {
        return t.offsets = h({}, t.offsets, e._config.offset(t.offsets) || {}), t;
      } : t.offset = this._config.offset;
      var n = {
        placement: this._getPlacement(),
        modifiers: {
          offset: t,
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      };
      return "static" === this._config.display && (n.modifiers.applyStyle = {
        enabled: !1
      }), n;
    }, l._jQueryInterface = function (e) {
      return this.each(function () {
        var t = mt(this).data(vt);

        if (t || (t = new l(this, "object" == _typeof(e) ? e : null), mt(this).data(vt, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, l._clearMenus = function (t) {
      if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
        var i = l._getParentFromElement(e[n]),
            r = mt(e[n]).data(vt),
            s = {
          relatedTarget: e[n]
        };

        if (r) {
          var o = r._menu;

          if (mt(i).hasClass(Dt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && mt.contains(i, t.target))) {
            var a = mt.Event(It.HIDE, s);
            mt(i).trigger(a), a.isDefaultPrevented() || ("ontouchstart" in document.documentElement && mt(document.body).children().off("mouseover", null, mt.noop), e[n].setAttribute("aria-expanded", "false"), mt(o).removeClass(Dt), mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)));
          }
        }
      }
    }, l._getParentFromElement = function (t) {
      var e,
          n = Cn.getSelectorFromElement(t);
      return n && (e = mt(n)[0]), e || t.parentNode;
    }, l._dataApiKeydownHandler = function (t) {
      if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || mt(t.target).closest(Lt).length)) : Ct.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !mt(this).hasClass(At))) {
        var e = l._getParentFromElement(this),
            n = mt(e).hasClass(Dt);

        if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
          var i = mt(e).find(Rt).get();

          if (0 !== i.length) {
            var r = i.indexOf(t.target);
            38 === t.which && 0 < r && r--, 40 === t.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus();
          }
        } else {
          if (27 === t.which) {
            var s = mt(e).find(kt)[0];
            mt(s).trigger("focus");
          }

          mt(this).trigger("click");
        }
      }
    }, o(l, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Ft;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Vt;
      }
    }]), l;
  }(), mt(document).on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API + " " + It.KEYUP_DATA_API, Qt._clearMenus).on(It.CLICK_DATA_API, kt, function (t) {
    t.preventDefault(), t.stopPropagation(), Qt._jQueryInterface.call(mt(this), "toggle");
  }).on(It.CLICK_DATA_API, Pt, function (t) {
    t.stopPropagation();
  }), mt.fn[pt] = Qt._jQueryInterface, mt.fn[pt].Constructor = Qt, mt.fn[pt].noConflict = function () {
    return mt.fn[pt] = Tt, Qt._jQueryInterface;
  }, Qt),
      wn = (Yt = "modal", qt = "." + (Gt = "bs.modal"), zt = (Bt = e).fn[Yt], Xt = {
    backdrop: !0,
    keyboard: !0,
    focus: !0,
    show: !0
  }, Jt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean",
    show: "boolean"
  }, Zt = {
    HIDE: "hide" + qt,
    HIDDEN: "hidden" + qt,
    SHOW: "show" + qt,
    SHOWN: "shown" + qt,
    FOCUSIN: "focusin" + qt,
    RESIZE: "resize" + qt,
    CLICK_DISMISS: "click.dismiss" + qt,
    KEYDOWN_DISMISS: "keydown.dismiss" + qt,
    MOUSEUP_DISMISS: "mouseup.dismiss" + qt,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + qt,
    CLICK_DATA_API: "click" + qt + ".data-api"
  }, $t = "modal-scrollbar-measure", te = "modal-backdrop", ee = "modal-open", ne = "fade", ie = "show", re = {
    DIALOG: ".modal-dialog",
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    STICKY_CONTENT: ".sticky-top",
    NAVBAR_TOGGLER: ".navbar-toggler"
  }, se = function () {
    function r(t, e) {
      this._config = this._getConfig(e), this._element = t, this._dialog = Bt(t).find(re.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0;
    }

    var t = r.prototype;
    return t.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, t.show = function (t) {
      var e = this;

      if (!this._isTransitioning && !this._isShown) {
        Bt(this._element).hasClass(ne) && (this._isTransitioning = !0);
        var n = Bt.Event(Zt.SHOW, {
          relatedTarget: t
        });
        Bt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), Bt(document.body).addClass(ee), this._setEscapeEvent(), this._setResizeEvent(), Bt(this._element).on(Zt.CLICK_DISMISS, re.DATA_DISMISS, function (t) {
          return e.hide(t);
        }), Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
          Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
            Bt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return e._showElement(t);
        }));
      }
    }, t.hide = function (t) {
      var e = this;

      if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
        var n = Bt.Event(Zt.HIDE);

        if (Bt(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
          this._isShown = !1;
          var i = Bt(this._element).hasClass(ne);

          if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), Bt(document).off(Zt.FOCUSIN), Bt(this._element).removeClass(ie), Bt(this._element).off(Zt.CLICK_DISMISS), Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS), i) {
            var r = Cn.getTransitionDurationFromElement(this._element);
            Bt(this._element).one(Cn.TRANSITION_END, function (t) {
              return e._hideModal(t);
            }).emulateTransitionEnd(r);
          } else this._hideModal();
        }
      }
    }, t.dispose = function () {
      Bt.removeData(this._element, Gt), Bt(window, document, this._element, this._backdrop).off(qt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null;
    }, t.handleUpdate = function () {
      this._adjustDialog();
    }, t._getConfig = function (t) {
      return t = h({}, Xt, t), Cn.typeCheckConfig(Yt, t, Jt), t;
    }, t._showElement = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne);
      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Cn.reflow(this._element), Bt(this._element).addClass(ie), this._config.focus && this._enforceFocus();

      var i = Bt.Event(Zt.SHOWN, {
        relatedTarget: t
      }),
          r = function r() {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Bt(e._element).trigger(i);
      };

      if (n) {
        var s = Cn.getTransitionDurationFromElement(this._element);
        Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
      } else r();
    }, t._enforceFocus = function () {
      var e = this;
      Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
        document !== t.target && e._element !== t.target && 0 === Bt(e._element).has(t.target).length && e._element.focus();
      });
    }, t._setEscapeEvent = function () {
      var e = this;
      this._isShown && this._config.keyboard ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
        27 === t.which && (t.preventDefault(), e.hide());
      }) : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS);
    }, t._setResizeEvent = function () {
      var e = this;
      this._isShown ? Bt(window).on(Zt.RESIZE, function (t) {
        return e.handleUpdate(t);
      }) : Bt(window).off(Zt.RESIZE);
    }, t._hideModal = function () {
      var t = this;
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
        Bt(document.body).removeClass(ee), t._resetAdjustments(), t._resetScrollbar(), Bt(t._element).trigger(Zt.HIDDEN);
      });
    }, t._removeBackdrop = function () {
      this._backdrop && (Bt(this._backdrop).remove(), this._backdrop = null);
    }, t._showBackdrop = function (t) {
      var e = this,
          n = Bt(this._element).hasClass(ne) ? ne : "";

      if (this._isShown && this._config.backdrop) {
        if (this._backdrop = document.createElement("div"), this._backdrop.className = te, n && Bt(this._backdrop).addClass(n), Bt(this._backdrop).appendTo(document.body), Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), n && Cn.reflow(this._backdrop), Bt(this._backdrop).addClass(ie), !t) return;
        if (!n) return void t();
        var i = Cn.getTransitionDurationFromElement(this._backdrop);
        Bt(this._backdrop).one(Cn.TRANSITION_END, t).emulateTransitionEnd(i);
      } else if (!this._isShown && this._backdrop) {
        Bt(this._backdrop).removeClass(ie);

        var r = function r() {
          e._removeBackdrop(), t && t();
        };

        if (Bt(this._element).hasClass(ne)) {
          var s = Cn.getTransitionDurationFromElement(this._backdrop);
          Bt(this._backdrop).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();
      } else t && t();
    }, t._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;
      !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, t._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, t._checkScrollbar = function () {
      var t = document.body.getBoundingClientRect();
      this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, t._setScrollbar = function () {
      var r = this;

      if (this._isBodyOverflowing) {
        Bt(re.FIXED_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.paddingRight,
              i = Bt(e).css("padding-right");
          Bt(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px");
        }), Bt(re.STICKY_CONTENT).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
          Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px");
        }), Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
          var n = Bt(e)[0].style.marginRight,
              i = Bt(e).css("margin-right");
          Bt(e).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px");
        });
        var t = document.body.style.paddingRight,
            e = Bt(document.body).css("padding-right");
        Bt(document.body).data("padding-right", t).css("padding-right", parseFloat(e) + this._scrollbarWidth + "px");
      }
    }, t._resetScrollbar = function () {
      Bt(re.FIXED_CONTENT).each(function (t, e) {
        var n = Bt(e).data("padding-right");
        "undefined" != typeof n && Bt(e).css("padding-right", n).removeData("padding-right");
      }), Bt(re.STICKY_CONTENT + ", " + re.NAVBAR_TOGGLER).each(function (t, e) {
        var n = Bt(e).data("margin-right");
        "undefined" != typeof n && Bt(e).css("margin-right", n).removeData("margin-right");
      });
      var t = Bt(document.body).data("padding-right");
      "undefined" != typeof t && Bt(document.body).css("padding-right", t).removeData("padding-right");
    }, t._getScrollbarWidth = function () {
      var t = document.createElement("div");
      t.className = $t, document.body.appendChild(t);
      var e = t.getBoundingClientRect().width - t.clientWidth;
      return document.body.removeChild(t), e;
    }, r._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Bt(this).data(Gt),
            e = h({}, Xt, Bt(this).data(), "object" == _typeof(n) && n ? n : {});

        if (t || (t = new r(this, e), Bt(this).data(Gt, t)), "string" == typeof n) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n](i);
        } else e.show && t.show(i);
      });
    }, o(r, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Xt;
      }
    }]), r;
  }(), Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
    var e,
        n = this,
        i = Cn.getSelectorFromElement(this);
    i && (e = Bt(i)[0]);
    var r = Bt(e).data(Gt) ? "toggle" : h({}, Bt(e).data(), Bt(this).data());
    "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
    var s = Bt(e).one(Zt.SHOW, function (t) {
      t.isDefaultPrevented() || s.one(Zt.HIDDEN, function () {
        Bt(n).is(":visible") && n.focus();
      });
    });

    se._jQueryInterface.call(Bt(e), r, this);
  }), Bt.fn[Yt] = se._jQueryInterface, Bt.fn[Yt].Constructor = se, Bt.fn[Yt].noConflict = function () {
    return Bt.fn[Yt] = zt, se._jQueryInterface;
  }, se),
      Nn = (ae = "tooltip", he = "." + (le = "bs.tooltip"), ce = (oe = e).fn[ae], ue = "bs-tooltip", fe = new RegExp("(^|\\s)" + ue + "\\S+", "g"), ge = {
    animation: !0,
    template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !(_e = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: "right",
      BOTTOM: "bottom",
      LEFT: "left"
    }),
    selector: !(de = {
      animation: "boolean",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
      delay: "(number|object)",
      html: "boolean",
      selector: "(string|boolean)",
      placement: "(string|function)",
      offset: "(number|string)",
      container: "(string|element|boolean)",
      fallbackPlacement: "(string|array)",
      boundary: "(string|element)"
    }),
    placement: "top",
    offset: 0,
    container: !1,
    fallbackPlacement: "flip",
    boundary: "scrollParent"
  }, pe = "out", ve = {
    HIDE: "hide" + he,
    HIDDEN: "hidden" + he,
    SHOW: (me = "show") + he,
    SHOWN: "shown" + he,
    INSERTED: "inserted" + he,
    CLICK: "click" + he,
    FOCUSIN: "focusin" + he,
    FOCUSOUT: "focusout" + he,
    MOUSEENTER: "mouseenter" + he,
    MOUSELEAVE: "mouseleave" + he
  }, Ee = "fade", ye = "show", Te = ".tooltip-inner", Ce = ".arrow", Ie = "hover", Ae = "focus", De = "click", be = "manual", Se = function () {
    function i(t, e) {
      if ("undefined" == typeof c) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
      this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }

    var t = i.prototype;
    return t.enable = function () {
      this._isEnabled = !0;
    }, t.disable = function () {
      this._isEnabled = !1;
    }, t.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, t.toggle = function (t) {
      if (this._isEnabled) if (t) {
        var e = this.constructor.DATA_KEY,
            n = oe(t.currentTarget).data(e);
        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (oe(this.getTipElement()).hasClass(ye)) return void this._leave(null, this);

        this._enter(null, this);
      }
    }, t.dispose = function () {
      clearTimeout(this._timeout), oe.removeData(this.element, this.constructor.DATA_KEY), oe(this.element).off(this.constructor.EVENT_KEY), oe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && oe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null;
    }, t.show = function () {
      var e = this;
      if ("none" === oe(this.element).css("display")) throw new Error("Please use show on visible elements");
      var t = oe.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        oe(this.element).trigger(t);
        var n = oe.contains(this.element.ownerDocument.documentElement, this.element);
        if (t.isDefaultPrevented() || !n) return;
        var i = this.getTipElement(),
            r = Cn.getUID(this.constructor.NAME);
        i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && oe(i).addClass(Ee);

        var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            o = this._getAttachment(s);

        this.addAttachmentClass(o);
        var a = !1 === this.config.container ? document.body : oe(this.config.container);
        oe(i).data(this.constructor.DATA_KEY, this), oe.contains(this.element.ownerDocument.documentElement, this.tip) || oe(i).appendTo(a), oe(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new c(this.element, i, {
          placement: o,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Ce
            },
            preventOverflow: {
              boundariesElement: this.config.boundary
            }
          },
          onCreate: function onCreate(t) {
            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t);
          },
          onUpdate: function onUpdate(t) {
            e._handlePopperPlacementChange(t);
          }
        }), oe(i).addClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().on("mouseover", null, oe.noop);

        var l = function l() {
          e.config.animation && e._fixTransition();
          var t = e._hoverState;
          e._hoverState = null, oe(e.element).trigger(e.constructor.Event.SHOWN), t === pe && e._leave(null, e);
        };

        if (oe(this.tip).hasClass(Ee)) {
          var h = Cn.getTransitionDurationFromElement(this.tip);
          oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h);
        } else l();
      }
    }, t.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = oe.Event(this.constructor.Event.HIDE),
          r = function r() {
        e._hoverState !== me && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), oe(e.element).trigger(e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t();
      };

      if (oe(this.element).trigger(i), !i.isDefaultPrevented()) {
        if (oe(n).removeClass(ye), "ontouchstart" in document.documentElement && oe(document.body).children().off("mouseover", null, oe.noop), this._activeTrigger[De] = !1, this._activeTrigger[Ae] = !1, this._activeTrigger[Ie] = !1, oe(this.tip).hasClass(Ee)) {
          var s = Cn.getTransitionDurationFromElement(n);
          oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s);
        } else r();

        this._hoverState = "";
      }
    }, t.update = function () {
      null !== this._popper && this._popper.scheduleUpdate();
    }, t.isWithContent = function () {
      return Boolean(this.getTitle());
    }, t.addAttachmentClass = function (t) {
      oe(this.getTipElement()).addClass(ue + "-" + t);
    }, t.getTipElement = function () {
      return this.tip = this.tip || oe(this.config.template)[0], this.tip;
    }, t.setContent = function () {
      var t = oe(this.getTipElement());
      this.setElementContent(t.find(Te), this.getTitle()), t.removeClass(Ee + " " + ye);
    }, t.setElementContent = function (t, e) {
      var n = this.config.html;
      "object" == _typeof(e) && (e.nodeType || e.jquery) ? n ? oe(e).parent().is(t) || t.empty().append(e) : t.text(oe(e).text()) : t[n ? "html" : "text"](e);
    }, t.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");
      return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
    }, t._getAttachment = function (t) {
      return _e[t.toUpperCase()];
    }, t._setListeners = function () {
      var i = this;
      this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) oe(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== be) {
          var e = t === Ie ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === Ie ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
          oe(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }
        oe(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = h({}, this.config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }, t._fixTitle = function () {
      var t = _typeof(this.element.getAttribute("data-original-title"));

      (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, t._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? Ae : Ie] = !0), oe(e.getTipElement()).hasClass(ye) || e._hoverState === me ? e._hoverState = me : (clearTimeout(e._timeout), e._hoverState = me, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === me && e.show();
      }, e.config.delay.show) : e.show());
    }, t._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;
      (e = e || oe(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), oe(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? Ae : Ie] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = pe, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === pe && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, t._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }

      return !1;
    }, t._getConfig = function (t) {
      return "number" == typeof (t = h({}, this.constructor.Default, oe(this.element).data(), "object" == _typeof(t) && t ? t : {})).delay && (t.delay = {
        show: t.delay,
        hide: t.delay
      }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), Cn.typeCheckConfig(ae, t, this.constructor.DefaultType), t;
    }, t._getDelegateConfig = function () {
      var t = {};
      if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }
      return t;
    }, t._cleanTipClass = function () {
      var t = oe(this.getTipElement()),
          e = t.attr("class").match(fe);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, t._handlePopperPlacementChange = function (t) {
      this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement));
    }, t._fixTransition = function () {
      var t = this.getTipElement(),
          e = this.config.animation;
      null === t.getAttribute("x-placement") && (oe(t).removeClass(Ee), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = oe(this).data(le),
            e = "object" == _typeof(n) && n;

        if ((t || !/dispose|hide/.test(n)) && (t || (t = new i(this, e), oe(this).data(le, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return ge;
      }
    }, {
      key: "NAME",
      get: function get() {
        return ae;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return le;
      }
    }, {
      key: "Event",
      get: function get() {
        return ve;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return he;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return de;
      }
    }]), i;
  }(), oe.fn[ae] = Se._jQueryInterface, oe.fn[ae].Constructor = Se, oe.fn[ae].noConflict = function () {
    return oe.fn[ae] = ce, Se._jQueryInterface;
  }, Se),
      On = (Ne = "popover", ke = "." + (Oe = "bs.popover"), Pe = (we = e).fn[Ne], Le = "bs-popover", je = new RegExp("(^|\\s)" + Le + "\\S+", "g"), Re = h({}, Nn.Default, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }), He = h({}, Nn.DefaultType, {
    content: "(string|element|function)"
  }), We = "fade", xe = ".popover-header", Ue = ".popover-body", Ke = {
    HIDE: "hide" + ke,
    HIDDEN: "hidden" + ke,
    SHOW: (Me = "show") + ke,
    SHOWN: "shown" + ke,
    INSERTED: "inserted" + ke,
    CLICK: "click" + ke,
    FOCUSIN: "focusin" + ke,
    FOCUSOUT: "focusout" + ke,
    MOUSEENTER: "mouseenter" + ke,
    MOUSELEAVE: "mouseleave" + ke
  }, Fe = function (t) {
    var e, n;

    function i() {
      return t.apply(this, arguments) || this;
    }

    n = t, (e = i).prototype = Object.create(n.prototype), (e.prototype.constructor = e).__proto__ = n;
    var r = i.prototype;
    return r.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, r.addAttachmentClass = function (t) {
      we(this.getTipElement()).addClass(Le + "-" + t);
    }, r.getTipElement = function () {
      return this.tip = this.tip || we(this.config.template)[0], this.tip;
    }, r.setContent = function () {
      var t = we(this.getTipElement());
      this.setElementContent(t.find(xe), this.getTitle());

      var e = this._getContent();

      "function" == typeof e && (e = e.call(this.element)), this.setElementContent(t.find(Ue), e), t.removeClass(We + " " + Me);
    }, r._getContent = function () {
      return this.element.getAttribute("data-content") || this.config.content;
    }, r._cleanTipClass = function () {
      var t = we(this.getTipElement()),
          e = t.attr("class").match(je);
      null !== e && 0 < e.length && t.removeClass(e.join(""));
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = we(this).data(Oe),
            e = "object" == _typeof(n) ? n : null;

        if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), we(this).data(Oe, t)), "string" == typeof n)) {
          if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
          t[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return Re;
      }
    }, {
      key: "NAME",
      get: function get() {
        return Ne;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return Oe;
      }
    }, {
      key: "Event",
      get: function get() {
        return Ke;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ke;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return He;
      }
    }]), i;
  }(Nn), we.fn[Ne] = Fe._jQueryInterface, we.fn[Ne].Constructor = Fe, we.fn[Ne].noConflict = function () {
    return we.fn[Ne] = Pe, Fe._jQueryInterface;
  }, Fe),
      kn = (Qe = "scrollspy", Ye = "." + (Be = "bs.scrollspy"), Ge = (Ve = e).fn[Qe], qe = {
    offset: 10,
    method: "auto",
    target: ""
  }, ze = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  }, Xe = {
    ACTIVATE: "activate" + Ye,
    SCROLL: "scroll" + Ye,
    LOAD_DATA_API: "load" + Ye + ".data-api"
  }, Je = "dropdown-item", Ze = "active", $e = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: ".active",
    NAV_LIST_GROUP: ".nav, .list-group",
    NAV_LINKS: ".nav-link",
    NAV_ITEMS: ".nav-item",
    LIST_ITEMS: ".list-group-item",
    DROPDOWN: ".dropdown",
    DROPDOWN_ITEMS: ".dropdown-item",
    DROPDOWN_TOGGLE: ".dropdown-toggle"
  }, tn = "offset", en = "position", nn = function () {
    function n(t, e) {
      var n = this;
      this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + $e.NAV_LINKS + "," + this._config.target + " " + $e.LIST_ITEMS + "," + this._config.target + " " + $e.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }

    var t = n.prototype;
    return t.refresh = function () {
      var e = this,
          t = this._scrollElement === this._scrollElement.window ? tn : en,
          r = "auto" === this._config.method ? t : this._config.method,
          s = r === en ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Ve.makeArray(Ve(this._selector)).map(function (t) {
        var e,
            n = Cn.getSelectorFromElement(t);

        if (n && (e = Ve(n)[0]), e) {
          var i = e.getBoundingClientRect();
          if (i.width || i.height) return [Ve(e)[r]().top + s, n];
        }

        return null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, t.dispose = function () {
      Ve.removeData(this._element, Be), Ve(this._scrollElement).off(Ye), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, t._getConfig = function (t) {
      if ("string" != typeof (t = h({}, qe, "object" == _typeof(t) && t ? t : {})).target) {
        var e = Ve(t.target).attr("id");
        e || (e = Cn.getUID(Qe), Ve(t.target).attr("id", e)), t.target = "#" + e;
      }

      return Cn.typeCheckConfig(Qe, t, ze), t;
    }, t._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, t._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, t._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }, t._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();

      if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];
        this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();

        for (var r = this._offsets.length; r--;) {
          this._activeTarget !== this._targets[r] && t >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r]);
        }
      }
    }, t._activate = function (e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",");

      t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });
      var n = Ve(t.join(","));
      n.hasClass(Je) ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze), n.addClass(Ze)) : (n.addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS + ", " + $e.LIST_ITEMS).addClass(Ze), n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)), Ve(this._scrollElement).trigger(Xe.ACTIVATE, {
        relatedTarget: e
      });
    }, t._clear = function () {
      Ve(this._selector).filter($e.ACTIVE).removeClass(Ze);
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = Ve(this).data(Be);

        if (t || (t = new n(this, "object" == _typeof(e) && e), Ve(this).data(Be, t)), "string" == typeof e) {
          if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
          t[e]();
        }
      });
    }, o(n, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }, {
      key: "Default",
      get: function get() {
        return qe;
      }
    }]), n;
  }(), Ve(window).on(Xe.LOAD_DATA_API, function () {
    for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--;) {
      var n = Ve(t[e]);

      nn._jQueryInterface.call(n, n.data());
    }
  }), Ve.fn[Qe] = nn._jQueryInterface, Ve.fn[Qe].Constructor = nn, Ve.fn[Qe].noConflict = function () {
    return Ve.fn[Qe] = Ge, nn._jQueryInterface;
  }, nn),
      Pn = (on = "." + (sn = "bs.tab"), an = (rn = e).fn.tab, ln = {
    HIDE: "hide" + on,
    HIDDEN: "hidden" + on,
    SHOW: "show" + on,
    SHOWN: "shown" + on,
    CLICK_DATA_API: "click" + on + ".data-api"
  }, hn = "dropdown-menu", cn = "active", un = "disabled", fn = "fade", dn = "show", _n = ".dropdown", gn = ".nav, .list-group", mn = ".active", pn = "> li > .active", vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', En = ".dropdown-toggle", yn = "> .dropdown-menu .active", Tn = function () {
    function i(t) {
      this._element = t;
    }

    var t = i.prototype;
    return t.show = function () {
      var n = this;

      if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && rn(this._element).hasClass(cn) || rn(this._element).hasClass(un))) {
        var t,
            i,
            e = rn(this._element).closest(gn)[0],
            r = Cn.getSelectorFromElement(this._element);

        if (e) {
          var s = "UL" === e.nodeName ? pn : mn;
          i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1];
        }

        var o = rn.Event(ln.HIDE, {
          relatedTarget: this._element
        }),
            a = rn.Event(ln.SHOW, {
          relatedTarget: i
        });

        if (i && rn(i).trigger(o), rn(this._element).trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
          r && (t = rn(r)[0]), this._activate(this._element, e);

          var l = function l() {
            var t = rn.Event(ln.HIDDEN, {
              relatedTarget: n._element
            }),
                e = rn.Event(ln.SHOWN, {
              relatedTarget: i
            });
            rn(i).trigger(t), rn(n._element).trigger(e);
          };

          t ? this._activate(t, t.parentNode, l) : l();
        }
      }
    }, t.dispose = function () {
      rn.removeData(this._element, sn), this._element = null;
    }, t._activate = function (t, e, n) {
      var i = this,
          r = ("UL" === e.nodeName ? rn(e).find(pn) : rn(e).children(mn))[0],
          s = n && r && rn(r).hasClass(fn),
          o = function o() {
        return i._transitionComplete(t, r, n);
      };

      if (r && s) {
        var a = Cn.getTransitionDurationFromElement(r);
        rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a);
      } else o();
    }, t._transitionComplete = function (t, e, n) {
      if (e) {
        rn(e).removeClass(dn + " " + cn);
        var i = rn(e.parentNode).find(yn)[0];
        i && rn(i).removeClass(cn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
      }

      if (rn(t).addClass(cn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), Cn.reflow(t), rn(t).addClass(dn), t.parentNode && rn(t.parentNode).hasClass(hn)) {
        var r = rn(t).closest(_n)[0];
        r && rn(r).find(En).addClass(cn), t.setAttribute("aria-expanded", !0);
      }

      n && n();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = rn(this),
            e = t.data(sn);

        if (e || (e = new i(this), t.data(sn, e)), "string" == typeof n) {
          if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
          e[n]();
        }
      });
    }, o(i, null, [{
      key: "VERSION",
      get: function get() {
        return "4.1.1";
      }
    }]), i;
  }(), rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
    t.preventDefault(), Tn._jQueryInterface.call(rn(this), "show");
  }), rn.fn.tab = Tn._jQueryInterface, rn.fn.tab.Constructor = Tn, rn.fn.tab.noConflict = function () {
    return rn.fn.tab = an, Tn._jQueryInterface;
  }, Tn);

  !function (t) {
    if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
  }(e), t.Util = Cn, t.Alert = In, t.Button = An, t.Carousel = Dn, t.Collapse = bn, t.Dropdown = Sn, t.Modal = wn, t.Popover = On, t.Scrollspy = kn, t.Tab = Pn, t.Tooltip = Nn, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
/*!
 * perfect-scrollbar v1.3.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */

!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function t(t) {
    return getComputedStyle(t);
  }

  function e(t, e) {
    for (var i in e) {
      var r = e[i];
      "number" == typeof r && (r += "px"), t.style[i] = r;
    }

    return t;
  }

  function i(t) {
    var e = document.createElement("div");
    return e.className = t, e;
  }

  function r(t, e) {
    if (!v) throw new Error("No element matching method supported");
    return v.call(t, e);
  }

  function l(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }

  function n(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return r(t, e);
    });
  }

  function o(t, e) {
    var i = t.element.classList,
        r = m.state.scrolling(e);
    i.contains(r) ? clearTimeout(Y[e]) : i.add(r);
  }

  function s(t, e) {
    Y[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(m.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }

  function a(t, e) {
    o(t, e), s(t, e);
  }

  function c(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }

  function h(t, e, i, r, l) {
    var n = i[0],
        o = i[1],
        s = i[2],
        h = i[3],
        u = i[4],
        d = i[5];
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var f = t.element;
    t.reach[h] = null, f[s] < 1 && (t.reach[h] = "start"), f[s] > t[n] - t[o] - 1 && (t.reach[h] = "end"), e && (f.dispatchEvent(c("ps-scroll-" + h)), e < 0 ? f.dispatchEvent(c("ps-scroll-" + u)) : e > 0 && f.dispatchEvent(c("ps-scroll-" + d)), r && a(t, h)), t.reach[h] && (e || l) && f.dispatchEvent(c("ps-" + h + "-reach-" + t.reach[h]));
  }

  function u(t) {
    return parseInt(t, 10) || 0;
  }

  function d(t) {
    return r(t, "input,[contenteditable]") || r(t, "select,[contenteditable]") || r(t, "textarea,[contenteditable]") || r(t, "button,[contenteditable]");
  }

  function f(e) {
    var i = t(e);
    return u(i.width) + u(i.paddingLeft) + u(i.paddingRight) + u(i.borderLeftWidth) + u(i.borderRightWidth);
  }

  function p(t, e) {
    return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
  }

  function b(t, i) {
    var r = {
      width: i.railXWidth
    };
    i.isRtl ? r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth : r.left = t.scrollLeft, i.isScrollbarXUsingBottom ? r.bottom = i.scrollbarXBottom - t.scrollTop : r.top = i.scrollbarXTop + t.scrollTop, e(i.scrollbarXRail, r);
    var l = {
      top: t.scrollTop,
      height: i.railYHeight
    };
    i.isScrollbarYUsingRight ? i.isRtl ? l.right = i.contentWidth - (i.negativeScrollAdjustment + t.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth : l.right = i.scrollbarYRight - t.scrollLeft : i.isRtl ? l.left = i.negativeScrollAdjustment + t.scrollLeft + 2 * i.containerWidth - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth : l.left = i.scrollbarYLeft + t.scrollLeft, e(i.scrollbarYRail, l), e(i.scrollbarX, {
      left: i.scrollbarXLeft,
      width: i.scrollbarXWidth - i.railBorderXWidth
    }), e(i.scrollbarY, {
      top: i.scrollbarYTop,
      height: i.scrollbarYHeight - i.railBorderYWidth
    });
  }

  function g(t, e) {
    function i(e) {
      p[d] = b + v * (e[a] - g), o(t, f), T(t), e.stopPropagation(), e.preventDefault();
    }

    function r() {
      s(t, f), t.event.unbind(t.ownerDocument, "mousemove", i);
    }

    var l = e[0],
        n = e[1],
        a = e[2],
        c = e[3],
        h = e[4],
        u = e[5],
        d = e[6],
        f = e[7],
        p = t.element,
        b = null,
        g = null,
        v = null;
    t.event.bind(t[h], "mousedown", function (e) {
      b = p[d], g = e[a], v = (t[n] - t[l]) / (t[c] - t[u]), t.event.bind(t.ownerDocument, "mousemove", i), t.event.once(t.ownerDocument, "mouseup", r), e.stopPropagation(), e.preventDefault();
    });
  }

  var v = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector),
      m = {
    main: "ps",
    element: {
      thumb: function thumb(t) {
        return "ps__thumb-" + t;
      },
      rail: function rail(t) {
        return "ps__rail-" + t;
      },
      consuming: "ps__child--consume"
    },
    state: {
      focus: "ps--focus",
      active: function active(t) {
        return "ps--active-" + t;
      },
      scrolling: function scrolling(t) {
        return "ps--scrolling-" + t;
      }
    }
  },
      Y = {
    x: null,
    y: null
  },
      X = function X(t) {
    this.element = t, this.handlers = {};
  },
      w = {
    isEmpty: {
      configurable: !0
    }
  };

  X.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1);
  }, X.prototype.unbind = function (t, e) {
    var i = this;
    this.handlers[t] = this.handlers[t].filter(function (r) {
      return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1);
    });
  }, X.prototype.unbindAll = function () {
    var t = this;

    for (var e in t.handlers) {
      t.unbind(e);
    }
  }, w.isEmpty.get = function () {
    var t = this;
    return Object.keys(this.handlers).every(function (e) {
      return 0 === t.handlers[e].length;
    });
  }, Object.defineProperties(X.prototype, w);

  var y = function y() {
    this.eventElements = [];
  };

  y.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || (e = new X(t), this.eventElements.push(e)), e;
  }, y.prototype.bind = function (t, e, i) {
    this.eventElement(t).bind(e, i);
  }, y.prototype.unbind = function (t, e, i) {
    var r = this.eventElement(t);
    r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
  }, y.prototype.unbindAll = function () {
    this.eventElements.forEach(function (t) {
      return t.unbindAll();
    }), this.eventElements = [];
  }, y.prototype.once = function (t, e, i) {
    var r = this.eventElement(t),
        l = function l(t) {
      r.unbind(e, l), i(t);
    };

    r.bind(e, l);
  };

  var W = function W(t, e, i, r, l) {
    void 0 === r && (r = !0), void 0 === l && (l = !1);
    var n;
    if ("top" === e) n = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      n = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    }
    h(t, i, n, r, l);
  },
      L = {
    isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
    supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
    supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
    isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
  },
      T = function T(t) {
    var e = t.element;
    t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (n(e, m.element.rail("x")).forEach(function (t) {
      return l(t);
    }), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (n(e, m.element.rail("y")).forEach(function (t) {
      return l(t);
    }), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = p(t, u(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = u((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = p(t, u(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = u(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), b(e, t), t.scrollbarXActive ? e.classList.add(m.state.active("x")) : (e.classList.remove(m.state.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = 0), t.scrollbarYActive ? e.classList.add(m.state.active("y")) : (e.classList.remove(m.state.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0);
  },
      R = {
    "click-rail": function clickRail(t) {
      t.event.bind(t.scrollbarY, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
        var i = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
        t.element.scrollTop += i * t.containerHeight, T(t), e.stopPropagation();
      }), t.event.bind(t.scrollbarX, "mousedown", function (t) {
        return t.stopPropagation();
      }), t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
        var i = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
        t.element.scrollLeft += i * t.containerWidth, T(t), e.stopPropagation();
      });
    },
    "drag-thumb": function dragThumb(t) {
      g(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x"]), g(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y"]);
    },
    keyboard: function keyboard(t) {
      function e(e, r) {
        var l = i.scrollTop;

        if (0 === e) {
          if (!t.scrollbarYActive) return !1;
          if (0 === l && r > 0 || l >= t.contentHeight - t.containerHeight && r < 0) return !t.settings.wheelPropagation;
        }

        var n = i.scrollLeft;

        if (0 === r) {
          if (!t.scrollbarXActive) return !1;
          if (0 === n && e < 0 || n >= t.contentWidth - t.containerWidth && e > 0) return !t.settings.wheelPropagation;
        }

        return !0;
      }

      var i = t.element,
          l = function l() {
        return r(i, ":hover");
      },
          n = function n() {
        return r(t.scrollbarX, ":focus") || r(t.scrollbarY, ":focus");
      };

      t.event.bind(t.ownerDocument, "keydown", function (r) {
        if (!(r.isDefaultPrevented && r.isDefaultPrevented() || r.defaultPrevented) && (l() || n())) {
          var o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;

          if (o) {
            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;else for (; o.shadowRoot;) {
              o = o.shadowRoot.activeElement;
            }
            if (d(o)) return;
          }

          var s = 0,
              a = 0;

          switch (r.which) {
            case 37:
              s = r.metaKey ? -t.contentWidth : r.altKey ? -t.containerWidth : -30;
              break;

            case 38:
              a = r.metaKey ? t.contentHeight : r.altKey ? t.containerHeight : 30;
              break;

            case 39:
              s = r.metaKey ? t.contentWidth : r.altKey ? t.containerWidth : 30;
              break;

            case 40:
              a = r.metaKey ? -t.contentHeight : r.altKey ? -t.containerHeight : -30;
              break;

            case 32:
              a = r.shiftKey ? t.containerHeight : -t.containerHeight;
              break;

            case 33:
              a = t.containerHeight;
              break;

            case 34:
              a = -t.containerHeight;
              break;

            case 36:
              a = t.contentHeight;
              break;

            case 35:
              a = -t.contentHeight;
              break;

            default:
              return;
          }

          t.settings.suppressScrollX && 0 !== s || t.settings.suppressScrollY && 0 !== a || (i.scrollTop -= a, i.scrollLeft += s, T(t), e(s, a) && r.preventDefault());
        }
      });
    },
    wheel: function wheel(e) {
      function i(t, i) {
        var r = 0 === o.scrollTop,
            l = o.scrollTop + o.offsetHeight === o.scrollHeight,
            n = 0 === o.scrollLeft,
            s = o.scrollLeft + o.offsetWidth === o.offsetWidth;
        return !(Math.abs(i) > Math.abs(t) ? r || l : n || s) || !e.settings.wheelPropagation;
      }

      function r(t) {
        var e = t.deltaX,
            i = -1 * t.deltaY;
        return void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i];
      }

      function l(e, i, r) {
        if (!L.isWebKit && o.querySelector("select:focus")) return !0;
        if (!o.contains(e)) return !1;

        for (var l = e; l && l !== o;) {
          if (l.classList.contains(m.element.consuming)) return !0;
          var n = t(l);

          if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
            var s = l.scrollHeight - l.clientHeight;
            if (s > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === s && r < 0)) return !0;
            var a = l.scrollLeft - l.clientWidth;
            if (a > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === a && i > 0)) return !0;
          }

          l = l.parentNode;
        }

        return !1;
      }

      function n(t) {
        var n = r(t),
            s = n[0],
            a = n[1];

        if (!l(t.target, s, a)) {
          var c = !1;
          e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (a ? o.scrollTop -= a * e.settings.wheelSpeed : o.scrollTop += s * e.settings.wheelSpeed, c = !0) : e.scrollbarXActive && !e.scrollbarYActive && (s ? o.scrollLeft += s * e.settings.wheelSpeed : o.scrollLeft -= a * e.settings.wheelSpeed, c = !0) : (o.scrollTop -= a * e.settings.wheelSpeed, o.scrollLeft += s * e.settings.wheelSpeed), T(e), (c = c || i(s, a)) && !t.ctrlKey && (t.stopPropagation(), t.preventDefault());
        }
      }

      var o = e.element;
      void 0 !== window.onwheel ? e.event.bind(o, "wheel", n) : void 0 !== window.onmousewheel && e.event.bind(o, "mousewheel", n);
    },
    touch: function touch(e) {
      function i(t, i) {
        var r = h.scrollTop,
            l = h.scrollLeft,
            n = Math.abs(t),
            o = Math.abs(i);

        if (o > n) {
          if (i < 0 && r === e.contentHeight - e.containerHeight || i > 0 && 0 === r) return 0 === window.scrollY && i > 0 && L.isChrome;
        } else if (n > o && (t < 0 && l === e.contentWidth - e.containerWidth || t > 0 && 0 === l)) return !0;

        return !0;
      }

      function r(t, i) {
        h.scrollTop -= i, h.scrollLeft -= t, T(e);
      }

      function l(t) {
        return t.targetTouches ? t.targetTouches[0] : t;
      }

      function n(t) {
        return !(t.pointerType && "pen" === t.pointerType && 0 === t.buttons || (!t.targetTouches || 1 !== t.targetTouches.length) && (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE));
      }

      function o(t) {
        if (n(t)) {
          var e = l(t);
          u.pageX = e.pageX, u.pageY = e.pageY, d = new Date().getTime(), null !== p && clearInterval(p);
        }
      }

      function s(e, i, r) {
        if (!h.contains(e)) return !1;

        for (var l = e; l && l !== h;) {
          if (l.classList.contains(m.element.consuming)) return !0;
          var n = t(l);

          if ([n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) {
            var o = l.scrollHeight - l.clientHeight;
            if (o > 0 && !(0 === l.scrollTop && r > 0 || l.scrollTop === o && r < 0)) return !0;
            var s = l.scrollLeft - l.clientWidth;
            if (s > 0 && !(0 === l.scrollLeft && i < 0 || l.scrollLeft === s && i > 0)) return !0;
          }

          l = l.parentNode;
        }

        return !1;
      }

      function a(t) {
        if (n(t)) {
          var e = l(t),
              o = {
            pageX: e.pageX,
            pageY: e.pageY
          },
              a = o.pageX - u.pageX,
              c = o.pageY - u.pageY;
          if (s(t.target, a, c)) return;
          r(a, c), u = o;
          var h = new Date().getTime(),
              p = h - d;
          p > 0 && (f.x = a / p, f.y = c / p, d = h), i(a, c) && t.preventDefault();
        }
      }

      function c() {
        e.settings.swipeEasing && (clearInterval(p), p = setInterval(function () {
          e.isInitialized ? clearInterval(p) : f.x || f.y ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? clearInterval(p) : (r(30 * f.x, 30 * f.y), f.x *= .8, f.y *= .8) : clearInterval(p);
        }, 10));
      }

      if (L.supportsTouch || L.supportsIePointer) {
        var h = e.element,
            u = {},
            d = 0,
            f = {},
            p = null;
        L.supportsTouch ? (e.event.bind(h, "touchstart", o), e.event.bind(h, "touchmove", a), e.event.bind(h, "touchend", c)) : L.supportsIePointer && (window.PointerEvent ? (e.event.bind(h, "pointerdown", o), e.event.bind(h, "pointermove", a), e.event.bind(h, "pointerup", c)) : window.MSPointerEvent && (e.event.bind(h, "MSPointerDown", o), e.event.bind(h, "MSPointerMove", a), e.event.bind(h, "MSPointerUp", c)));
      }
    }
  },
      H = function H(r, l) {
    var n = this;
    if (void 0 === l && (l = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
    this.element = r, r.classList.add(m.main), this.settings = {
      handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
      maxScrollbarLength: null,
      minScrollbarLength: null,
      scrollingThreshold: 1e3,
      scrollXMarginOffset: 0,
      scrollYMarginOffset: 0,
      suppressScrollX: !1,
      suppressScrollY: !1,
      swipeEasing: !0,
      useBothWheelAxes: !1,
      wheelPropagation: !1,
      wheelSpeed: 1
    };

    for (var o in l) {
      n.settings[o] = l[o];
    }

    this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;

    var s = function s() {
      return r.classList.add(m.state.focus);
    },
        a = function a() {
      return r.classList.remove(m.state.focus);
    };

    this.isRtl = "rtl" === t(r).direction, this.isNegativeScroll = function () {
      var t = r.scrollLeft,
          e = null;
      return r.scrollLeft = -1, e = r.scrollLeft < 0, r.scrollLeft = t, e;
    }(), this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0, this.event = new y(), this.ownerDocument = r.ownerDocument || document, this.scrollbarXRail = i(m.element.rail("x")), r.appendChild(this.scrollbarXRail), this.scrollbarX = i(m.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
    var c = t(this.scrollbarXRail);
    this.scrollbarXBottom = parseInt(c.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = u(c.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = u(c.borderLeftWidth) + u(c.borderRightWidth), e(this.scrollbarXRail, {
      display: "block"
    }), this.railXMarginWidth = u(c.marginLeft) + u(c.marginRight), e(this.scrollbarXRail, {
      display: ""
    }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = i(m.element.rail("y")), r.appendChild(this.scrollbarYRail), this.scrollbarY = i(m.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
    var h = t(this.scrollbarYRail);
    this.scrollbarYRight = parseInt(h.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = u(h.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? f(this.scrollbarY) : null, this.railBorderYWidth = u(h.borderTopWidth) + u(h.borderBottomWidth), e(this.scrollbarYRail, {
      display: "block"
    }), this.railYMarginHeight = u(h.marginTop) + u(h.marginBottom), e(this.scrollbarYRail, {
      display: ""
    }), this.railYHeight = null, this.railYRatio = null, this.reach = {
      x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
      y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
    }, this.isAlive = !0, this.settings.handlers.forEach(function (t) {
      return R[t](n);
    }), this.lastScrollTop = r.scrollTop, this.lastScrollLeft = r.scrollLeft, this.event.bind(this.element, "scroll", function (t) {
      return n.onScroll(t);
    }), T(this);
  };

  return H.prototype.update = function () {
    this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, e(this.scrollbarXRail, {
      display: "block"
    }), e(this.scrollbarYRail, {
      display: "block"
    }), this.railXMarginWidth = u(t(this.scrollbarXRail).marginLeft) + u(t(this.scrollbarXRail).marginRight), this.railYMarginHeight = u(t(this.scrollbarYRail).marginTop) + u(t(this.scrollbarYRail).marginBottom), e(this.scrollbarXRail, {
      display: "none"
    }), e(this.scrollbarYRail, {
      display: "none"
    }), T(this), W(this, "top", 0, !1, !0), W(this, "left", 0, !1, !0), e(this.scrollbarXRail, {
      display: ""
    }), e(this.scrollbarYRail, {
      display: ""
    }));
  }, H.prototype.onScroll = function (t) {
    this.isAlive && (T(this), W(this, "top", this.element.scrollTop - this.lastScrollTop), W(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = this.element.scrollTop, this.lastScrollLeft = this.element.scrollLeft);
  }, H.prototype.destroy = function () {
    this.isAlive && (this.event.unbindAll(), l(this.scrollbarX), l(this.scrollbarY), l(this.scrollbarXRail), l(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1);
  }, H.prototype.removePsClasses = function () {
    this.element.className = this.element.className.split(" ").filter(function (t) {
      return !t.match(/^ps([-_].+|)$/);
    }).join(" ");
  }, H;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** multi ./resources/vendor/js/vendor.bundle.base.js ./resources/vendor/js/vendor.bundle.addons.js ./resources/vendor/js/off-canva.js ./resources/vendor/js/misc.js ./resources/vendor/js/dashboard.js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\NITRO 5\projects\realtime\resources\vendor\js\vendor.bundle.base.js */"./resources/vendor/js/vendor.bundle.base.js");
__webpack_require__(/*! C:\Users\NITRO 5\projects\realtime\resources\vendor\js\vendor.bundle.addons.js */"./resources/vendor/js/vendor.bundle.addons.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module 'C:\\Users\\NITRO 5\\projects\\realtime\\resources\\vendor\\js\\off-canva.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
__webpack_require__(/*! C:\Users\NITRO 5\projects\realtime\resources\vendor\js\misc.js */"./resources/vendor/js/misc.js");
module.exports = __webpack_require__(/*! C:\Users\NITRO 5\projects\realtime\resources\vendor\js\dashboard.js */"./resources/vendor/js/dashboard.js");


/***/ })

/******/ });