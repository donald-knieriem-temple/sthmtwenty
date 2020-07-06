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
/******/ 	__webpack_require__.p = "/wp-content/themes/sthmtwenty/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scss.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v4.5.0 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function (exports, $, Popper) {
  'use strict';

  $ = $ && Object.prototype.hasOwnProperty.call($, 'default') ? $['default'] : $;
  Popper = Popper && Object.prototype.hasOwnProperty.call(Popper, 'default') ? Popper['default'] : Popper;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
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
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): util.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */

  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */


  var TRANSITION_END = 'transitionend';
  var MAX_UID = 1000000;
  var MILLISECONDS_MULTIPLIER = 1000; // Shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    if (obj === null || typeof obj === 'undefined') {
      return "" + obj;
    }

    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined;
      }
    };
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator;
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        var hrefAttr = element.getAttribute('href');
        selector = hrefAttr && hrefAttr !== '#' ? hrefAttr.trim() : '';
      }

      try {
        return document.querySelector(selector) ? selector : null;
      } catch (err) {
        return null;
      }
    },
    getTransitionDurationFromElement: function getTransitionDurationFromElement(element) {
      if (!element) {
        return 0;
      } // Get transition-duration of the element


      var transitionDuration = $(element).css('transition-duration');
      var transitionDelay = $(element).css('transition-delay');
      var floatTransitionDuration = parseFloat(transitionDuration);
      var floatTransitionDelay = parseFloat(transitionDelay); // Return 0 if element or transition duration is not found

      if (!floatTransitionDuration && !floatTransitionDelay) {
        return 0;
      } // If multiple durations are defined, take the first


      transitionDuration = transitionDuration.split(',')[0];
      transitionDelay = transitionDelay.split(',')[0];
      return (parseFloat(transitionDuration) + parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END);
    },
    // TODO: Remove in v5
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(TRANSITION_END);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    },
    findShadowRoot: function findShadowRoot(element) {
      if (!document.documentElement.attachShadow) {
        return null;
      } // Can find the shadow root otherwise it'll return the document


      if (typeof element.getRootNode === 'function') {
        var root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
      }

      if (element instanceof ShadowRoot) {
        return element;
      } // when we don't find a shadow root


      if (!element.parentNode) {
        return null;
      }

      return Util.findShadowRoot(element.parentNode);
    },
    jQueryDetection: function jQueryDetection() {
      if (typeof $ === 'undefined') {
        throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
      }

      var version = $.fn.jquery.split(' ')[0].split('.');
      var minMajor = 1;
      var ltMajor = 2;
      var minMinor = 9;
      var minPatch = 1;
      var maxMajor = 4;

      if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
        throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
      }
    }
  };
  Util.jQueryDetection();
  setTransitionEndSupport();
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  var NAME = 'alert';
  var VERSION = '4.5.0';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var SELECTOR_DISMISS = '[data-dismiss="alert"]';
  var EVENT_CLOSE = "close" + EVENT_KEY;
  var EVENT_CLOSED = "closed" + EVENT_KEY;
  var EVENT_CLICK_DATA_API = "click" + EVENT_KEY + DATA_API_KEY;
  var CLASS_NAME_ALERT = 'alert';
  var CLASS_NAME_FADE = 'fade';
  var CLASS_NAME_SHOW = 'show';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Alert = /*#__PURE__*/function () {
    function Alert(element) {
      this._element = element;
    } // Getters


    var _proto = Alert.prototype; // Public

    _proto.close = function close(element) {
      var rootElement = this._element;

      if (element) {
        rootElement = this._getRootElement(element);
      }

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    } // Private
    ;

    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = document.querySelector(selector);
      }

      if (!parent) {
        parent = $(element).closest("." + CLASS_NAME_ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(EVENT_CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(CLASS_NAME_SHOW);

      if (!$(element).hasClass(CLASS_NAME_FADE)) {
        this._destroyElement(element);

        return;
      }

      var transitionDuration = Util.getTransitionDurationFromElement(element);
      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(transitionDuration);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(EVENT_CLOSED).remove();
    } // Static
    ;

    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    _createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);

    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API, SELECTOR_DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$1 = 'button';
  var VERSION$1 = '4.5.0';
  var DATA_KEY$1 = 'bs.button';
  var EVENT_KEY$1 = "." + DATA_KEY$1;
  var DATA_API_KEY$1 = '.data-api';
  var JQUERY_NO_CONFLICT$1 = $.fn[NAME$1];
  var CLASS_NAME_ACTIVE = 'active';
  var CLASS_NAME_BUTTON = 'btn';
  var CLASS_NAME_FOCUS = 'focus';
  var SELECTOR_DATA_TOGGLE_CARROT = '[data-toggle^="button"]';
  var SELECTOR_DATA_TOGGLES = '[data-toggle="buttons"]';
  var SELECTOR_DATA_TOGGLE = '[data-toggle="button"]';
  var SELECTOR_DATA_TOGGLES_BUTTONS = '[data-toggle="buttons"] .btn';
  var SELECTOR_INPUT = 'input:not([type="hidden"])';
  var SELECTOR_ACTIVE = '.active';
  var SELECTOR_BUTTON = '.btn';
  var EVENT_CLICK_DATA_API$1 = "click" + EVENT_KEY$1 + DATA_API_KEY$1;
  var EVENT_FOCUS_BLUR_DATA_API = "focus" + EVENT_KEY$1 + DATA_API_KEY$1 + " " + ("blur" + EVENT_KEY$1 + DATA_API_KEY$1);
  var EVENT_LOAD_DATA_API = "load" + EVENT_KEY$1 + DATA_API_KEY$1;
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Button = /*#__PURE__*/function () {
    function Button(element) {
      this._element = element;
    } // Getters


    var _proto = Button.prototype; // Public

    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(SELECTOR_DATA_TOGGLES)[0];

      if (rootElement) {
        var input = this._element.querySelector(SELECTOR_INPUT);

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && this._element.classList.contains(CLASS_NAME_ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = rootElement.querySelector(SELECTOR_ACTIVE);

              if (activeElement) {
                $(activeElement).removeClass(CLASS_NAME_ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            // if it's not a radio button or checkbox don't add a pointless/invalid checked property to the input
            if (input.type === 'checkbox' || input.type === 'radio') {
              input.checked = !this._element.classList.contains(CLASS_NAME_ACTIVE);
            }

            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (!(this._element.hasAttribute('disabled') || this._element.classList.contains('disabled'))) {
        if (addAriaPressed) {
          this._element.setAttribute('aria-pressed', !this._element.classList.contains(CLASS_NAME_ACTIVE));
        }

        if (triggerChangeEvent) {
          $(this._element).toggleClass(CLASS_NAME_ACTIVE);
        }
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$1);
      this._element = null;
    } // Static
    ;

    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$1);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY$1, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    _createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$1;
      }
    }]);

    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = event.target;
    var initialButton = button;

    if (!$(button).hasClass(CLASS_NAME_BUTTON)) {
      button = $(button).closest(SELECTOR_BUTTON)[0];
    }

    if (!button || button.hasAttribute('disabled') || button.classList.contains('disabled')) {
      event.preventDefault(); // work around Firefox bug #1540995
    } else {
      var inputBtn = button.querySelector(SELECTOR_INPUT);

      if (inputBtn && (inputBtn.hasAttribute('disabled') || inputBtn.classList.contains('disabled'))) {
        event.preventDefault(); // work around Firefox bug #1540995

        return;
      }

      if (initialButton.tagName === 'LABEL' && inputBtn && inputBtn.type === 'checkbox') {
        event.preventDefault(); // work around event sent to label and input
      }

      Button._jQueryInterface.call($(button), 'toggle');
    }
  }).on(EVENT_FOCUS_BLUR_DATA_API, SELECTOR_DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(SELECTOR_BUTTON)[0];
    $(button).toggleClass(CLASS_NAME_FOCUS, /^focus(in)?$/.test(event.type));
  });
  $(window).on(EVENT_LOAD_DATA_API, function () {
    // ensure correct active class is set to match the controls' actual values/states
    // find all checkboxes/readio buttons inside data-toggle groups
    var buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));

    for (var i = 0, len = buttons.length; i < len; i++) {
      var button = buttons[i];
      var input = button.querySelector(SELECTOR_INPUT);

      if (input.checked || input.hasAttribute('checked')) {
        button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        button.classList.remove(CLASS_NAME_ACTIVE);
      }
    } // find all button toggles


    buttons = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));

    for (var _i = 0, _len = buttons.length; _i < _len; _i++) {
      var _button = buttons[_i];

      if (_button.getAttribute('aria-pressed') === 'true') {
        _button.classList.add(CLASS_NAME_ACTIVE);
      } else {
        _button.classList.remove(CLASS_NAME_ACTIVE);
      }
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$1] = Button._jQueryInterface;
  $.fn[NAME$1].Constructor = Button;

  $.fn[NAME$1].noConflict = function () {
    $.fn[NAME$1] = JQUERY_NO_CONFLICT$1;
    return Button._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$2 = 'carousel';
  var VERSION$2 = '4.5.0';
  var DATA_KEY$2 = 'bs.carousel';
  var EVENT_KEY$2 = "." + DATA_KEY$2;
  var DATA_API_KEY$2 = '.data-api';
  var JQUERY_NO_CONFLICT$2 = $.fn[NAME$2];
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var SWIPE_THRESHOLD = 40;
  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true,
    touch: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean',
    touch: 'boolean'
  };
  var DIRECTION_NEXT = 'next';
  var DIRECTION_PREV = 'prev';
  var DIRECTION_LEFT = 'left';
  var DIRECTION_RIGHT = 'right';
  var EVENT_SLIDE = "slide" + EVENT_KEY$2;
  var EVENT_SLID = "slid" + EVENT_KEY$2;
  var EVENT_KEYDOWN = "keydown" + EVENT_KEY$2;
  var EVENT_MOUSEENTER = "mouseenter" + EVENT_KEY$2;
  var EVENT_MOUSELEAVE = "mouseleave" + EVENT_KEY$2;
  var EVENT_TOUCHSTART = "touchstart" + EVENT_KEY$2;
  var EVENT_TOUCHMOVE = "touchmove" + EVENT_KEY$2;
  var EVENT_TOUCHEND = "touchend" + EVENT_KEY$2;
  var EVENT_POINTERDOWN = "pointerdown" + EVENT_KEY$2;
  var EVENT_POINTERUP = "pointerup" + EVENT_KEY$2;
  var EVENT_DRAG_START = "dragstart" + EVENT_KEY$2;
  var EVENT_LOAD_DATA_API$1 = "load" + EVENT_KEY$2 + DATA_API_KEY$2;
  var EVENT_CLICK_DATA_API$2 = "click" + EVENT_KEY$2 + DATA_API_KEY$2;
  var CLASS_NAME_CAROUSEL = 'carousel';
  var CLASS_NAME_ACTIVE$1 = 'active';
  var CLASS_NAME_SLIDE = 'slide';
  var CLASS_NAME_RIGHT = 'carousel-item-right';
  var CLASS_NAME_LEFT = 'carousel-item-left';
  var CLASS_NAME_NEXT = 'carousel-item-next';
  var CLASS_NAME_PREV = 'carousel-item-prev';
  var CLASS_NAME_POINTER_EVENT = 'pointer-event';
  var SELECTOR_ACTIVE$1 = '.active';
  var SELECTOR_ACTIVE_ITEM = '.active.carousel-item';
  var SELECTOR_ITEM = '.carousel-item';
  var SELECTOR_ITEM_IMG = '.carousel-item img';
  var SELECTOR_NEXT_PREV = '.carousel-item-next, .carousel-item-prev';
  var SELECTOR_INDICATORS = '.carousel-indicators';
  var SELECTOR_DATA_SLIDE = '[data-slide], [data-slide-to]';
  var SELECTOR_DATA_RIDE = '[data-ride="carousel"]';
  var PointerType = {
    TOUCH: 'touch',
    PEN: 'pen'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this.touchStartX = 0;
      this.touchDeltaX = 0;
      this._config = this._getConfig(config);
      this._element = element;
      this._indicatorsElement = this._element.querySelector(SELECTOR_INDICATORS);
      this._touchSupported = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
      this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);

      this._addEventListeners();
    } // Getters


    var _proto = Carousel.prototype; // Public

    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(DIRECTION_NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(DIRECTION_PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if (this._element.querySelector(SELECTOR_NEXT_PREV)) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(EVENT_SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? DIRECTION_NEXT : DIRECTION_PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY$2);
      $.removeData(this._element, DATA_KEY$2);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default), config);
      Util.typeCheckConfig(NAME$2, config, DefaultType);
      return config;
    };

    _proto._handleSwipe = function _handleSwipe() {
      var absDeltax = Math.abs(this.touchDeltaX);

      if (absDeltax <= SWIPE_THRESHOLD) {
        return;
      }

      var direction = absDeltax / this.touchDeltaX;
      this.touchDeltaX = 0; // swipe left

      if (direction > 0) {
        this.prev();
      } // swipe right


      if (direction < 0) {
        this.next();
      }
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(EVENT_KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(EVENT_MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(EVENT_MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });
      }

      if (this._config.touch) {
        this._addTouchEventListeners();
      }
    };

    _proto._addTouchEventListeners = function _addTouchEventListeners() {
      var _this3 = this;

      if (!this._touchSupported) {
        return;
      }

      var start = function start(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchStartX = event.originalEvent.clientX;
        } else if (!_this3._pointerEvent) {
          _this3.touchStartX = event.originalEvent.touches[0].clientX;
        }
      };

      var move = function move(event) {
        // ensure swiping with one touch and not pinching
        if (event.originalEvent.touches && event.originalEvent.touches.length > 1) {
          _this3.touchDeltaX = 0;
        } else {
          _this3.touchDeltaX = event.originalEvent.touches[0].clientX - _this3.touchStartX;
        }
      };

      var end = function end(event) {
        if (_this3._pointerEvent && PointerType[event.originalEvent.pointerType.toUpperCase()]) {
          _this3.touchDeltaX = event.originalEvent.clientX - _this3.touchStartX;
        }

        _this3._handleSwipe();

        if (_this3._config.pause === 'hover') {
          // If it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          _this3.pause();

          if (_this3.touchTimeout) {
            clearTimeout(_this3.touchTimeout);
          }

          _this3.touchTimeout = setTimeout(function (event) {
            return _this3.cycle(event);
          }, TOUCHEVENT_COMPAT_WAIT + _this3._config.interval);
        }
      };

      $(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START, function (e) {
        return e.preventDefault();
      });

      if (this._pointerEvent) {
        $(this._element).on(EVENT_POINTERDOWN, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_POINTERUP, function (event) {
          return end(event);
        });

        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        $(this._element).on(EVENT_TOUCHSTART, function (event) {
          return start(event);
        });
        $(this._element).on(EVENT_TOUCHMOVE, function (event) {
          return move(event);
        });
        $(this._element).on(EVENT_TOUCHEND, function (event) {
          return end(event);
        });
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = element && element.parentNode ? [].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)) : [];
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === DIRECTION_NEXT;
      var isPrevDirection = direction === DIRECTION_PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === DIRECTION_PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));

      var slideEvent = $.Event(EVENT_SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        var indicators = [].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));
        $(indicators).removeClass(CLASS_NAME_ACTIVE$1);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this4 = this;

      var activeElement = this._element.querySelector(SELECTOR_ACTIVE_ITEM);

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === DIRECTION_NEXT) {
        directionalClassName = CLASS_NAME_LEFT;
        orderClassName = CLASS_NAME_NEXT;
        eventDirectionName = DIRECTION_LEFT;
      } else {
        directionalClassName = CLASS_NAME_RIGHT;
        orderClassName = CLASS_NAME_PREV;
        eventDirectionName = DIRECTION_RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(CLASS_NAME_ACTIVE$1)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // Some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(EVENT_SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if ($(this._element).hasClass(CLASS_NAME_SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        var nextElementInterval = parseInt(nextElement.getAttribute('data-interval'), 10);

        if (nextElementInterval) {
          this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
          this._config.interval = nextElementInterval;
        } else {
          this._config.interval = this._config.defaultInterval || this._config.interval;
        }

        var transitionDuration = Util.getTransitionDurationFromElement(activeElement);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(CLASS_NAME_ACTIVE$1);
          $(activeElement).removeClass(CLASS_NAME_ACTIVE$1 + " " + orderClassName + " " + directionalClassName);
          _this4._isSliding = false;
          setTimeout(function () {
            return $(_this4._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        $(activeElement).removeClass(CLASS_NAME_ACTIVE$1);
        $(nextElement).addClass(CLASS_NAME_ACTIVE$1);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    } // Static
    ;

    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$2);

        var _config = _objectSpread2(_objectSpread2({}, Default), $(this).data());

        if (_typeof(config) === 'object') {
          _config = _objectSpread2(_objectSpread2({}, _config), config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY$2, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new TypeError("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval && _config.ride) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(CLASS_NAME_CAROUSEL)) {
        return;
      }

      var config = _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY$2).to(slideIndex);
      }

      event.preventDefault();
    };

    _createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$2;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);

    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$2, SELECTOR_DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(EVENT_LOAD_DATA_API$1, function () {
    var carousels = [].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));

    for (var i = 0, len = carousels.length; i < len; i++) {
      var $carousel = $(carousels[i]);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$2] = Carousel._jQueryInterface;
  $.fn[NAME$2].Constructor = Carousel;

  $.fn[NAME$2].noConflict = function () {
    $.fn[NAME$2] = JQUERY_NO_CONFLICT$2;
    return Carousel._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$3 = 'collapse';
  var VERSION$3 = '4.5.0';
  var DATA_KEY$3 = 'bs.collapse';
  var EVENT_KEY$3 = "." + DATA_KEY$3;
  var DATA_API_KEY$3 = '.data-api';
  var JQUERY_NO_CONFLICT$3 = $.fn[NAME$3];
  var Default$1 = {
    toggle: true,
    parent: ''
  };
  var DefaultType$1 = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var EVENT_SHOW = "show" + EVENT_KEY$3;
  var EVENT_SHOWN = "shown" + EVENT_KEY$3;
  var EVENT_HIDE = "hide" + EVENT_KEY$3;
  var EVENT_HIDDEN = "hidden" + EVENT_KEY$3;
  var EVENT_CLICK_DATA_API$3 = "click" + EVENT_KEY$3 + DATA_API_KEY$3;
  var CLASS_NAME_SHOW$1 = 'show';
  var CLASS_NAME_COLLAPSE = 'collapse';
  var CLASS_NAME_COLLAPSING = 'collapsing';
  var CLASS_NAME_COLLAPSED = 'collapsed';
  var DIMENSION_WIDTH = 'width';
  var DIMENSION_HEIGHT = 'height';
  var SELECTOR_ACTIVES = '.show, .collapsing';
  var SELECTOR_DATA_TOGGLE$1 = '[data-toggle="collapse"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Collapse = /*#__PURE__*/function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = [].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var toggleList = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));

      for (var i = 0, len = toggleList.length; i < len; i++) {
        var elem = toggleList[i];
        var selector = Util.getSelectorFromElement(elem);
        var filterElement = [].slice.call(document.querySelectorAll(selector)).filter(function (foundElem) {
          return foundElem === element;
        });

        if (selector !== null && filterElement.length > 0) {
          this._selector = selector;

          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // Getters


    var _proto = Collapse.prototype; // Public

    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = [].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function (elem) {
          if (typeof _this._config.parent === 'string') {
            return elem.getAttribute('data-parent') === _this._config.parent;
          }

          return elem.classList.contains(CLASS_NAME_COLLAPSE);
        });

        if (actives.length === 0) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).not(this._selector).data(DATA_KEY$3);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(EVENT_SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives).not(this._selector), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY$3, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(EVENT_SHOWN);
      };

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(CLASS_NAME_SHOW$1)) {
        return;
      }

      var startEvent = $.Event(EVENT_HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE + " " + CLASS_NAME_SHOW$1);
      var triggerArrayLength = this._triggerArray.length;

      if (triggerArrayLength > 0) {
        for (var i = 0; i < triggerArrayLength; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $([].slice.call(document.querySelectorAll(selector)));

            if (!$elem.hasClass(CLASS_NAME_SHOW$1)) {
              $(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);
      };

      this._element.style[dimension] = '';
      var transitionDuration = Util.getTransitionDurationFromElement(this._element);
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$3);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$1), config);
      config.toggle = Boolean(config.toggle); // Coerce string values

      Util.typeCheckConfig(NAME$3, config, DefaultType$1);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(DIMENSION_WIDTH);
      return hasWidth ? DIMENSION_WIDTH : DIMENSION_HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // It's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = document.querySelector(this._config.parent);
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      var children = [].slice.call(parent.querySelectorAll(selector));
      $(children).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      var isOpen = $(element).hasClass(CLASS_NAME_SHOW$1);

      if (triggerArray.length) {
        $(triggerArray).toggleClass(CLASS_NAME_COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
      }
    } // Static
    ;

    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? document.querySelector(selector) : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$3);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$1), $this.data()), _typeof(config) === 'object' && config ? config : {});

        if (!data && _config.toggle && typeof config === 'string' && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY$3, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$3;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$1;
      }
    }]);

    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$1, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    var selectors = [].slice.call(document.querySelectorAll(selector));
    $(selectors).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY$3);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$3] = Collapse._jQueryInterface;
  $.fn[NAME$3].Constructor = Collapse;

  $.fn[NAME$3].noConflict = function () {
    $.fn[NAME$3] = JQUERY_NO_CONFLICT$3;
    return Collapse._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$4 = 'dropdown';
  var VERSION$4 = '4.5.0';
  var DATA_KEY$4 = 'bs.dropdown';
  var EVENT_KEY$4 = "." + DATA_KEY$4;
  var DATA_API_KEY$4 = '.data-api';
  var JQUERY_NO_CONFLICT$4 = $.fn[NAME$4];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var EVENT_HIDE$1 = "hide" + EVENT_KEY$4;
  var EVENT_HIDDEN$1 = "hidden" + EVENT_KEY$4;
  var EVENT_SHOW$1 = "show" + EVENT_KEY$4;
  var EVENT_SHOWN$1 = "shown" + EVENT_KEY$4;
  var EVENT_CLICK = "click" + EVENT_KEY$4;
  var EVENT_CLICK_DATA_API$4 = "click" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYDOWN_DATA_API = "keydown" + EVENT_KEY$4 + DATA_API_KEY$4;
  var EVENT_KEYUP_DATA_API = "keyup" + EVENT_KEY$4 + DATA_API_KEY$4;
  var CLASS_NAME_DISABLED = 'disabled';
  var CLASS_NAME_SHOW$2 = 'show';
  var CLASS_NAME_DROPUP = 'dropup';
  var CLASS_NAME_DROPRIGHT = 'dropright';
  var CLASS_NAME_DROPLEFT = 'dropleft';
  var CLASS_NAME_MENURIGHT = 'dropdown-menu-right';
  var CLASS_NAME_POSITION_STATIC = 'position-static';
  var SELECTOR_DATA_TOGGLE$2 = '[data-toggle="dropdown"]';
  var SELECTOR_FORM_CHILD = '.dropdown form';
  var SELECTOR_MENU = '.dropdown-menu';
  var SELECTOR_NAVBAR_NAV = '.navbar-nav';
  var SELECTOR_VISIBLE_ITEMS = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';
  var PLACEMENT_TOP = 'top-start';
  var PLACEMENT_TOPEND = 'top-end';
  var PLACEMENT_BOTTOM = 'bottom-start';
  var PLACEMENT_BOTTOMEND = 'bottom-end';
  var PLACEMENT_RIGHT = 'right-start';
  var PLACEMENT_LEFT = 'left-start';
  var Default$2 = {
    offset: 0,
    flip: true,
    boundary: 'scrollParent',
    reference: 'toggle',
    display: 'dynamic',
    popperConfig: null
  };
  var DefaultType$2 = {
    offset: '(number|string|function)',
    flip: 'boolean',
    boundary: '(string|element)',
    reference: '(string|element)',
    display: 'string',
    popperConfig: '(null|object)'
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Dropdown = /*#__PURE__*/function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // Getters


    var _proto = Dropdown.prototype; // Public

    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var isActive = $(this._menu).hasClass(CLASS_NAME_SHOW$2);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      this.show(true);
    };

    _proto.show = function show(usePopper) {
      if (usePopper === void 0) {
        usePopper = false;
      }

      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || $(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(EVENT_SHOW$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      } // Disable totally Popper.js for Dropdown in Navbar


      if (!this._inNavbar && usePopper) {
        /**
         * Check for Popper dependency
         * Popper - https://popper.js.org
         */
        if (typeof Popper === 'undefined') {
          throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');
        }

        var referenceElement = this._element;

        if (this._config.reference === 'parent') {
          referenceElement = parent;
        } else if (Util.isElement(this._config.reference)) {
          referenceElement = this._config.reference; // Check if it's jQuery element

          if (typeof this._config.reference.jquery !== 'undefined') {
            referenceElement = this._config.reference[0];
          }
        } // If boundary is not `scrollParent`, then set position to `static`
        // to allow the menu to "escape" the scroll parent's boundaries
        // https://github.com/twbs/bootstrap/issues/24251


        if (this._config.boundary !== 'scrollParent') {
          $(parent).addClass(CLASS_NAME_POSITION_STATIC);
        }

        this._popper = new Popper(referenceElement, this._menu, this._getPopperConfig());
      } // If this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html


      if ('ontouchstart' in document.documentElement && $(parent).closest(SELECTOR_NAVBAR_NAV).length === 0) {
        $(document.body).children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1, relatedTarget));
    };

    _proto.hide = function hide() {
      if (this._element.disabled || $(this._element).hasClass(CLASS_NAME_DISABLED) || !$(this._menu).hasClass(CLASS_NAME_SHOW$2)) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);

      var parent = Dropdown._getParentFromElement(this._element);

      $(parent).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      if (this._popper) {
        this._popper.destroy();
      }

      $(this._menu).toggleClass(CLASS_NAME_SHOW$2);
      $(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$4);
      $(this._element).off(EVENT_KEY$4);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();

        this._popper = null;
      }
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Private
    ;

    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(EVENT_CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), $(this._element).data()), config);
      Util.typeCheckConfig(NAME$4, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        if (parent) {
          this._menu = parent.querySelector(SELECTOR_MENU);
        }
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element.parentNode);
      var placement = PLACEMENT_BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(CLASS_NAME_DROPUP)) {
        placement = $(this._menu).hasClass(CLASS_NAME_MENURIGHT) ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)) {
        placement = PLACEMENT_RIGHT;
      } else if ($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)) {
        placement = PLACEMENT_LEFT;
      } else if ($(this._menu).hasClass(CLASS_NAME_MENURIGHT)) {
        placement = PLACEMENT_BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getOffset = function _getOffset() {
      var _this2 = this;

      var offset = {};

      if (typeof this._config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this2._config.offset(data.offsets, _this2._element) || {});
          return data;
        };
      } else {
        offset.offset = this._config.offset;
      }

      return offset;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: this._getOffset(),
          flip: {
            enabled: this._config.flip
          },
          preventOverflow: {
            boundariesElement: this._config.boundary
          }
        }
      }; // Disable Popper.js if we have a static display

      if (this._config.display === 'static') {
        popperConfig.modifiers.applyStyle = {
          enabled: false
        };
      }

      return _objectSpread2(_objectSpread2({}, popperConfig), this._config.popperConfig);
    } // Static
    ;

    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$4);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY$4, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = [].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));

      for (var i = 0, len = toggles.length; i < len; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY$4);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (event && event.type === 'click') {
          relatedTarget.clickEvent = event;
        }

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(CLASS_NAME_SHOW$2)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(EVENT_HIDE$1, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');

        if (context._popper) {
          context._popper.destroy();
        }

        $(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);
        $(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = document.querySelector(selector);
      }

      return parent || element.parentNode;
    } // eslint-disable-next-line complexity
    ;

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      // If not input/textarea:
      //  - And not a key in REGEXP_KEYDOWN => not a dropdown command
      // If input/textarea:
      //  - If space key => not a dropdown command
      //  - If key is other than escape
      //    - If key is not up or down => not a dropdown command
      //    - If trigger inside the menu => not a dropdown command
      if (/input|textarea/i.test(event.target.tagName) ? event.which === SPACE_KEYCODE || event.which !== ESCAPE_KEYCODE && (event.which !== ARROW_DOWN_KEYCODE && event.which !== ARROW_UP_KEYCODE || $(event.target).closest(SELECTOR_MENU).length) : !REGEXP_KEYDOWN.test(event.which)) {
        return;
      }

      if (this.disabled || $(this).hasClass(CLASS_NAME_DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(CLASS_NAME_SHOW$2);

      if (!isActive && event.which === ESCAPE_KEYCODE) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (!isActive || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          $(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = [].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function (item) {
        return $(item).is(':visible');
      });

      if (items.length === 0) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // Up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // Down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    _createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$4;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$2;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$2;
      }
    }]);

    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$2, Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4 + " " + EVENT_KEYUP_DATA_API, Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$2, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(EVENT_CLICK_DATA_API$4, SELECTOR_FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$4] = Dropdown._jQueryInterface;
  $.fn[NAME$4].Constructor = Dropdown;

  $.fn[NAME$4].noConflict = function () {
    $.fn[NAME$4] = JQUERY_NO_CONFLICT$4;
    return Dropdown._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$5 = 'modal';
  var VERSION$5 = '4.5.0';
  var DATA_KEY$5 = 'bs.modal';
  var EVENT_KEY$5 = "." + DATA_KEY$5;
  var DATA_API_KEY$5 = '.data-api';
  var JQUERY_NO_CONFLICT$5 = $.fn[NAME$5];
  var ESCAPE_KEYCODE$1 = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default$3 = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType$3 = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var EVENT_HIDE$2 = "hide" + EVENT_KEY$5;
  var EVENT_HIDE_PREVENTED = "hidePrevented" + EVENT_KEY$5;
  var EVENT_HIDDEN$2 = "hidden" + EVENT_KEY$5;
  var EVENT_SHOW$2 = "show" + EVENT_KEY$5;
  var EVENT_SHOWN$2 = "shown" + EVENT_KEY$5;
  var EVENT_FOCUSIN = "focusin" + EVENT_KEY$5;
  var EVENT_RESIZE = "resize" + EVENT_KEY$5;
  var EVENT_CLICK_DISMISS = "click.dismiss" + EVENT_KEY$5;
  var EVENT_KEYDOWN_DISMISS = "keydown.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEUP_DISMISS = "mouseup.dismiss" + EVENT_KEY$5;
  var EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss" + EVENT_KEY$5;
  var EVENT_CLICK_DATA_API$5 = "click" + EVENT_KEY$5 + DATA_API_KEY$5;
  var CLASS_NAME_SCROLLABLE = 'modal-dialog-scrollable';
  var CLASS_NAME_SCROLLBAR_MEASURER = 'modal-scrollbar-measure';
  var CLASS_NAME_BACKDROP = 'modal-backdrop';
  var CLASS_NAME_OPEN = 'modal-open';
  var CLASS_NAME_FADE$1 = 'fade';
  var CLASS_NAME_SHOW$3 = 'show';
  var CLASS_NAME_STATIC = 'modal-static';
  var SELECTOR_DIALOG = '.modal-dialog';
  var SELECTOR_MODAL_BODY = '.modal-body';
  var SELECTOR_DATA_TOGGLE$3 = '[data-toggle="modal"]';
  var SELECTOR_DATA_DISMISS = '[data-dismiss="modal"]';
  var SELECTOR_FIXED_CONTENT = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';
  var SELECTOR_STICKY_CONTENT = '.sticky-top';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Modal = /*#__PURE__*/function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = element.querySelector(SELECTOR_DIALOG);
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._isTransitioning = false;
      this._scrollbarWidth = 0;
    } // Getters


    var _proto = Modal.prototype; // Public

    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isShown || this._isTransitioning) {
        return;
      }

      if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(EVENT_SHOW$2, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(EVENT_MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(EVENT_MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (!this._isShown || this._isTransitioning) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$2);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(EVENT_FOCUSIN);
      $(this._element).removeClass(CLASS_NAME_SHOW$3);
      $(this._element).off(EVENT_CLICK_DISMISS);
      $(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(transitionDuration);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      [window, this._element, this._dialog].forEach(function (htmlElement) {
        return $(htmlElement).off(EVENT_KEY$5);
      });
      /**
       * `document` has 2 events `EVENT_FOCUSIN` and `EVENT_CLICK_DATA_API`
       * Do not move `document` in `htmlElements` array
       * It will remove `EVENT_CLICK_DATA_API` event that should remain
       */

      $(document).off(EVENT_FOCUSIN);
      $.removeData(this._element, DATA_KEY$5);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._isTransitioning = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$3), config);
      Util.typeCheckConfig(NAME$5, config, DefaultType$3);
      return config;
    };

    _proto._triggerBackdropTransition = function _triggerBackdropTransition() {
      var _this3 = this;

      if (this._config.backdrop === 'static') {
        var hideEventPrevented = $.Event(EVENT_HIDE_PREVENTED);
        $(this._element).trigger(hideEventPrevented);

        if (hideEventPrevented.defaultPrevented) {
          return;
        }

        this._element.classList.add(CLASS_NAME_STATIC);

        var modalTransitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, function () {
          _this3._element.classList.remove(CLASS_NAME_STATIC);
        }).emulateTransitionEnd(modalTransitionDuration);

        this._element.focus();
      } else {
        this.hide();
      }
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this4 = this;

      var transition = $(this._element).hasClass(CLASS_NAME_FADE$1);
      var modalBody = this._dialog ? this._dialog.querySelector(SELECTOR_MODAL_BODY) : null;

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // Don't move modal's DOM position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.setAttribute('aria-modal', true);

      if ($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE) && modalBody) {
        modalBody.scrollTop = 0;
      } else {
        this._element.scrollTop = 0;
      }

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(CLASS_NAME_SHOW$3);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(EVENT_SHOWN$2, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this4._config.focus) {
          _this4._element.focus();
        }

        _this4._isTransitioning = false;
        $(_this4._element).trigger(shownEvent);
      };

      if (transition) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._dialog);
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(transitionDuration);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this5 = this;

      $(document).off(EVENT_FOCUSIN) // Guard against infinite focus loop
      .on(EVENT_FOCUSIN, function (event) {
        if (document !== event.target && _this5._element !== event.target && $(_this5._element).has(event.target).length === 0) {
          _this5._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(this._element).on(EVENT_KEYDOWN_DISMISS, function (event) {
          if (_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            event.preventDefault();

            _this6.hide();
          } else if (!_this6._config.keyboard && event.which === ESCAPE_KEYCODE$1) {
            _this6._triggerBackdropTransition();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(EVENT_KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this7 = this;

      if (this._isShown) {
        $(window).on(EVENT_RESIZE, function (event) {
          return _this7.handleUpdate(event);
        });
      } else {
        $(window).off(EVENT_RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this8 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._element.removeAttribute('aria-modal');

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(CLASS_NAME_OPEN);

        _this8._resetAdjustments();

        _this8._resetScrollbar();

        $(_this8._element).trigger(EVENT_HIDDEN$2);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this9 = this;

      var animate = $(this._element).hasClass(CLASS_NAME_FADE$1) ? CLASS_NAME_FADE$1 : '';

      if (this._isShown && this._config.backdrop) {
        this._backdrop = document.createElement('div');
        this._backdrop.className = CLASS_NAME_BACKDROP;

        if (animate) {
          this._backdrop.classList.add(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(EVENT_CLICK_DISMISS, function (event) {
          if (_this9._ignoreBackdropClick) {
            _this9._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          _this9._triggerBackdropTransition();
        });

        if (animate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(CLASS_NAME_SHOW$3);

        if (!callback) {
          return;
        }

        if (!animate) {
          callback();
          return;
        }

        var backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);
        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(backdropTransitionDuration);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(CLASS_NAME_SHOW$3);

        var callbackRemove = function callbackRemove() {
          _this9._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if ($(this._element).hasClass(CLASS_NAME_FADE$1)) {
          var _backdropTransitionDuration = Util.getTransitionDurationFromElement(this._backdrop);

          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    } // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------
    ;

    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this10 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
        var stickyContent = [].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT)); // Adjust fixed content padding

        $(fixedContent).each(function (index, element) {
          var actualPadding = element.style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this10._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(stickyContent).each(function (index, element) {
          var actualMargin = element.style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this10._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $(document.body).css('padding-right');
        $(document.body).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }

      $(document.body).addClass(CLASS_NAME_OPEN);
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      var fixedContent = [].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));
      $(fixedContent).each(function (index, element) {
        var padding = $(element).data('padding-right');
        $(element).removeData('padding-right');
        element.style.paddingRight = padding ? padding : '';
      }); // Restore sticky content

      var elements = [].slice.call(document.querySelectorAll("" + SELECTOR_STICKY_CONTENT));
      $(elements).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $(document.body).data('padding-right');
      $(document.body).removeData('padding-right');
      document.body.style.paddingRight = padding ? padding : '';
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = CLASS_NAME_SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    } // Static
    ;

    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$5);

        var _config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$3), $(this).data()), _typeof(config) === 'object' && config ? config : {});

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY$5, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    _createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$5;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$3;
      }
    }]);

    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$5, SELECTOR_DATA_TOGGLE$3, function (event) {
    var _this11 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = document.querySelector(selector);
    }

    var config = $(target).data(DATA_KEY$5) ? 'toggle' : _objectSpread2(_objectSpread2({}, $(target).data()), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(EVENT_SHOW$2, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // Only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(EVENT_HIDDEN$2, function () {
        if ($(_this11).is(':visible')) {
          _this11.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$5] = Modal._jQueryInterface;
  $.fn[NAME$5].Constructor = Modal;

  $.fn[NAME$5].noConflict = function () {
    $.fn[NAME$5] = JQUERY_NO_CONFLICT$5;
    return Modal._jQueryInterface;
  };
  /**
   * --------------------------------------------------------------------------
   * Bootstrap (v4.5.0): tools/sanitizer.js
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */


  var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultWhitelist = {
    // Global attributes allowed on any supplied element below.
    '*': ['class', 'dir', 'id', 'lang', 'role', ARIA_ATTRIBUTE_PATTERN],
    a: ['target', 'href', 'title', 'rel'],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  /**
   * A pattern that recognizes a commonly useful subset of URLs that are safe.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;
  /**
   * A pattern that matches safe data URLs. Only matches image, video and audio types.
   *
   * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
   */

  var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

  function allowedAttribute(attr, allowedAttributeList) {
    var attrName = attr.nodeName.toLowerCase();

    if (allowedAttributeList.indexOf(attrName) !== -1) {
      if (uriAttrs.indexOf(attrName) !== -1) {
        return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
      }

      return true;
    }

    var regExp = allowedAttributeList.filter(function (attrRegex) {
      return attrRegex instanceof RegExp;
    }); // Check if a regular expression validates the attribute.

    for (var i = 0, len = regExp.length; i < len; i++) {
      if (attrName.match(regExp[i])) {
        return true;
      }
    }

    return false;
  }

  function sanitizeHtml(unsafeHtml, whiteList, sanitizeFn) {
    if (unsafeHtml.length === 0) {
      return unsafeHtml;
    }

    if (sanitizeFn && typeof sanitizeFn === 'function') {
      return sanitizeFn(unsafeHtml);
    }

    var domParser = new window.DOMParser();
    var createdDocument = domParser.parseFromString(unsafeHtml, 'text/html');
    var whitelistKeys = Object.keys(whiteList);
    var elements = [].slice.call(createdDocument.body.querySelectorAll('*'));

    var _loop = function _loop(i, len) {
      var el = elements[i];
      var elName = el.nodeName.toLowerCase();

      if (whitelistKeys.indexOf(el.nodeName.toLowerCase()) === -1) {
        el.parentNode.removeChild(el);
        return "continue";
      }

      var attributeList = [].slice.call(el.attributes);
      var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);
      attributeList.forEach(function (attr) {
        if (!allowedAttribute(attr, whitelistedAttributes)) {
          el.removeAttribute(attr.nodeName);
        }
      });
    };

    for (var i = 0, len = elements.length; i < len; i++) {
      var _ret = _loop(i);

      if (_ret === "continue") continue;
    }

    return createdDocument.body.innerHTML;
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$6 = 'tooltip';
  var VERSION$6 = '4.5.0';
  var DATA_KEY$6 = 'bs.tooltip';
  var EVENT_KEY$6 = "." + DATA_KEY$6;
  var JQUERY_NO_CONFLICT$6 = $.fn[NAME$6];
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
  var DefaultType$4 = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string|function)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)',
    boundary: '(string|element)',
    sanitize: 'boolean',
    sanitizeFn: '(null|function)',
    whiteList: 'object',
    popperConfig: '(null|object)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default$4 = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip',
    boundary: 'scrollParent',
    sanitize: true,
    sanitizeFn: null,
    whiteList: DefaultWhitelist,
    popperConfig: null
  };
  var HOVER_STATE_SHOW = 'show';
  var HOVER_STATE_OUT = 'out';
  var Event = {
    HIDE: "hide" + EVENT_KEY$6,
    HIDDEN: "hidden" + EVENT_KEY$6,
    SHOW: "show" + EVENT_KEY$6,
    SHOWN: "shown" + EVENT_KEY$6,
    INSERTED: "inserted" + EVENT_KEY$6,
    CLICK: "click" + EVENT_KEY$6,
    FOCUSIN: "focusin" + EVENT_KEY$6,
    FOCUSOUT: "focusout" + EVENT_KEY$6,
    MOUSEENTER: "mouseenter" + EVENT_KEY$6,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$6
  };
  var CLASS_NAME_FADE$2 = 'fade';
  var CLASS_NAME_SHOW$4 = 'show';
  var SELECTOR_TOOLTIP_INNER = '.tooltip-inner';
  var SELECTOR_ARROW = '.arrow';
  var TRIGGER_HOVER = 'hover';
  var TRIGGER_FOCUS = 'focus';
  var TRIGGER_CLICK = 'click';
  var TRIGGER_MANUAL = 'manual';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tooltip = /*#__PURE__*/function () {
    function Tooltip(element, config) {
      if (typeof Popper === 'undefined') {
        throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');
      } // private


      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // Protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // Getters


    var _proto = Tooltip.prototype; // Public

    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal', this._hideModalHandler);

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var shadowRoot = Util.findShadowRoot(this.element);
        var isInTheDom = $.contains(shadowRoot !== null ? shadowRoot : this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(CLASS_NAME_FADE$2);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);

        var container = this._getContainer();

        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, this._getPopperConfig(attachment));
        $(tip).addClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $(document.body).children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HOVER_STATE_OUT) {
            _this._leave(null, _this);
          }
        };

        if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
          var transitionDuration = Util.getTransitionDurationFromElement(this.tip);
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HOVER_STATE_SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_SHOW$4); // If this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $(document.body).children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;

      if ($(this.tip).hasClass(CLASS_NAME_FADE$2)) {
        var transitionDuration = Util.getTransitionDurationFromElement(tip);
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    } // Protected
    ;

    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var tip = this.getTipElement();
      this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)), this.getTitle());
      $(tip).removeClass(CLASS_NAME_FADE$2 + " " + CLASS_NAME_SHOW$4);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      if (_typeof(content) === 'object' && (content.nodeType || content.jquery)) {
        // Content is a DOM node or a jQuery
        if (this.config.html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }

        return;
      }

      if (this.config.html) {
        if (this.config.sanitize) {
          content = sanitizeHtml(content, this.config.whiteList, this.config.sanitizeFn);
        }

        $element.html(content);
      } else {
        $element.text(content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    } // Private
    ;

    _proto._getPopperConfig = function _getPopperConfig(attachment) {
      var _this3 = this;

      var defaultBsConfig = {
        placement: attachment,
        modifiers: {
          offset: this._getOffset(),
          flip: {
            behavior: this.config.fallbackPlacement
          },
          arrow: {
            element: SELECTOR_ARROW
          },
          preventOverflow: {
            boundariesElement: this.config.boundary
          }
        },
        onCreate: function onCreate(data) {
          if (data.originalPlacement !== data.placement) {
            _this3._handlePopperPlacementChange(data);
          }
        },
        onUpdate: function onUpdate(data) {
          return _this3._handlePopperPlacementChange(data);
        }
      };
      return _objectSpread2(_objectSpread2({}, defaultBsConfig), this.config.popperConfig);
    };

    _proto._getOffset = function _getOffset() {
      var _this4 = this;

      var offset = {};

      if (typeof this.config.offset === 'function') {
        offset.fn = function (data) {
          data.offsets = _objectSpread2(_objectSpread2({}, data.offsets), _this4.config.offset(data.offsets, _this4.element) || {});
          return data;
        };
      } else {
        offset.offset = this.config.offset;
      }

      return offset;
    };

    _proto._getContainer = function _getContainer() {
      if (this.config.container === false) {
        return document.body;
      }

      if (Util.isElement(this.config.container)) {
        return $(this.config.container);
      }

      return $(document).find(this.config.container);
    };

    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this5 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this5.element).on(_this5.constructor.Event.CLICK, _this5.config.selector, function (event) {
            return _this5.toggle(event);
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          var eventIn = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSEENTER : _this5.constructor.Event.FOCUSIN;
          var eventOut = trigger === TRIGGER_HOVER ? _this5.constructor.Event.MOUSELEAVE : _this5.constructor.Event.FOCUSOUT;
          $(_this5.element).on(eventIn, _this5.config.selector, function (event) {
            return _this5._enter(event);
          }).on(eventOut, _this5.config.selector, function (event) {
            return _this5._leave(event);
          });
        }
      });

      this._hideModalHandler = function () {
        if (_this5.element) {
          _this5.hide();
        }
      };

      $(this.element).closest('.modal').on('hide.bs.modal', this._hideModalHandler);

      if (this.config.selector) {
        this.config = _objectSpread2(_objectSpread2({}, this.config), {}, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = _typeof(this.element.getAttribute('data-original-title'));

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4) || context._hoverState === HOVER_STATE_SHOW) {
        context._hoverState = HOVER_STATE_SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? TRIGGER_FOCUS : TRIGGER_HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HOVER_STATE_OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HOVER_STATE_OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      var dataAttributes = $(this.element).data();
      Object.keys(dataAttributes).forEach(function (dataAttr) {
        if (DISALLOWED_ATTRIBUTES.indexOf(dataAttr) !== -1) {
          delete dataAttributes[dataAttr];
        }
      });
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, this.constructor.Default), dataAttributes), _typeof(config) === 'object' && config ? config : {});

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME$6, config, this.constructor.DefaultType);

      if (config.sanitize) {
        config.template = sanitizeHtml(config.template, config.whiteList, config.sanitizeFn);
      }

      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(popperData) {
      this.tip = popperData.instance.popper;

      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(popperData.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(CLASS_NAME_FADE$2);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    } // Static
    ;

    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$6);

        var _config = _typeof(config) === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY$6, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$6;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$4;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$6;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$6;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$6;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$4;
      }
    }]);

    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$6] = Tooltip._jQueryInterface;
  $.fn[NAME$6].Constructor = Tooltip;

  $.fn[NAME$6].noConflict = function () {
    $.fn[NAME$6] = JQUERY_NO_CONFLICT$6;
    return Tooltip._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$7 = 'popover';
  var VERSION$7 = '4.5.0';
  var DATA_KEY$7 = 'bs.popover';
  var EVENT_KEY$7 = "." + DATA_KEY$7;
  var JQUERY_NO_CONFLICT$7 = $.fn[NAME$7];
  var CLASS_PREFIX$1 = 'bs-popover';
  var BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)" + CLASS_PREFIX$1 + "\\S+", 'g');

  var Default$5 = _objectSpread2(_objectSpread2({}, Tooltip.Default), {}, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });

  var DefaultType$5 = _objectSpread2(_objectSpread2({}, Tooltip.DefaultType), {}, {
    content: '(string|element|function)'
  });

  var CLASS_NAME_FADE$3 = 'fade';
  var CLASS_NAME_SHOW$5 = 'show';
  var SELECTOR_TITLE = '.popover-header';
  var SELECTOR_CONTENT = '.popover-body';
  var Event$1 = {
    HIDE: "hide" + EVENT_KEY$7,
    HIDDEN: "hidden" + EVENT_KEY$7,
    SHOW: "show" + EVENT_KEY$7,
    SHOWN: "shown" + EVENT_KEY$7,
    INSERTED: "inserted" + EVENT_KEY$7,
    CLICK: "click" + EVENT_KEY$7,
    FOCUSIN: "focusin" + EVENT_KEY$7,
    FOCUSOUT: "focusout" + EVENT_KEY$7,
    MOUSEENTER: "mouseenter" + EVENT_KEY$7,
    MOUSELEAVE: "mouseleave" + EVENT_KEY$7
  };
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Popover = /*#__PURE__*/function (_Tooltip) {
    _inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype; // Overrides

    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX$1 + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // We use append for html objects to maintain js events

      this.setElementContent($tip.find(SELECTOR_TITLE), this.getTitle());

      var content = this._getContent();

      if (typeof content === 'function') {
        content = content.call(this.element);
      }

      this.setElementContent($tip.find(SELECTOR_CONTENT), content);
      $tip.removeClass(CLASS_NAME_FADE$3 + " " + CLASS_NAME_SHOW$5);
    } // Private
    ;

    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || this.config.content;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX$1);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    } // Static
    ;

    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$7);

        var _config = _typeof(config) === 'object' ? config : null;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY$7, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Popover, null, [{
      key: "VERSION",
      // Getters
      get: function get() {
        return VERSION$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$5;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME$7;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY$7;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event$1;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY$7;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$5;
      }
    }]);

    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$7] = Popover._jQueryInterface;
  $.fn[NAME$7].Constructor = Popover;

  $.fn[NAME$7].noConflict = function () {
    $.fn[NAME$7] = JQUERY_NO_CONFLICT$7;
    return Popover._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$8 = 'scrollspy';
  var VERSION$8 = '4.5.0';
  var DATA_KEY$8 = 'bs.scrollspy';
  var EVENT_KEY$8 = "." + DATA_KEY$8;
  var DATA_API_KEY$6 = '.data-api';
  var JQUERY_NO_CONFLICT$8 = $.fn[NAME$8];
  var Default$6 = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType$6 = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var EVENT_ACTIVATE = "activate" + EVENT_KEY$8;
  var EVENT_SCROLL = "scroll" + EVENT_KEY$8;
  var EVENT_LOAD_DATA_API$2 = "load" + EVENT_KEY$8 + DATA_API_KEY$6;
  var CLASS_NAME_DROPDOWN_ITEM = 'dropdown-item';
  var CLASS_NAME_ACTIVE$2 = 'active';
  var SELECTOR_DATA_SPY = '[data-spy="scroll"]';
  var SELECTOR_NAV_LIST_GROUP = '.nav, .list-group';
  var SELECTOR_NAV_LINKS = '.nav-link';
  var SELECTOR_NAV_ITEMS = '.nav-item';
  var SELECTOR_LIST_ITEMS = '.list-group-item';
  var SELECTOR_DROPDOWN = '.dropdown';
  var SELECTOR_DROPDOWN_ITEMS = '.dropdown-item';
  var SELECTOR_DROPDOWN_TOGGLE = '.dropdown-toggle';
  var METHOD_OFFSET = 'offset';
  var METHOD_POSITION = 'position';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + SELECTOR_NAV_LINKS + "," + (this._config.target + " " + SELECTOR_LIST_ITEMS + ",") + (this._config.target + " " + SELECTOR_DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(EVENT_SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // Getters


    var _proto = ScrollSpy.prototype; // Public

    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement === this._scrollElement.window ? METHOD_OFFSET : METHOD_POSITION;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === METHOD_POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = [].slice.call(document.querySelectorAll(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = document.querySelector(targetSelector);
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // TODO (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$8);
      $(this._scrollElement).off(EVENT_KEY$8);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2({}, Default$6), _typeof(config) === 'object' && config ? config : {});

      if (typeof config.target !== 'string' && Util.isElement(config.target)) {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME$8);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME$8, config, DefaultType$6);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(',').map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + selector + "[href=\"" + target + "\"]";
      });

      var $link = $([].slice.call(document.querySelectorAll(queries.join(','))));

      if ($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)) {
        $link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);
        $link.addClass(CLASS_NAME_ACTIVE$2);
      } else {
        // Set triggered link as active
        $link.addClass(CLASS_NAME_ACTIVE$2); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS + ", " + SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2); // Handle special case when .nav-link is inside .nav-item

        $link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);
      }

      $(this._scrollElement).trigger(EVENT_ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      [].slice.call(document.querySelectorAll(this._selector)).filter(function (node) {
        return node.classList.contains(CLASS_NAME_ACTIVE$2);
      }).forEach(function (node) {
        return node.classList.remove(CLASS_NAME_ACTIVE$2);
      });
    } // Static
    ;

    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY$8);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY$8, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$8;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$6;
      }
    }]);

    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(EVENT_LOAD_DATA_API$2, function () {
    var scrollSpys = [].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));
    var scrollSpysLength = scrollSpys.length;

    for (var i = scrollSpysLength; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$8] = ScrollSpy._jQueryInterface;
  $.fn[NAME$8].Constructor = ScrollSpy;

  $.fn[NAME$8].noConflict = function () {
    $.fn[NAME$8] = JQUERY_NO_CONFLICT$8;
    return ScrollSpy._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$9 = 'tab';
  var VERSION$9 = '4.5.0';
  var DATA_KEY$9 = 'bs.tab';
  var EVENT_KEY$9 = "." + DATA_KEY$9;
  var DATA_API_KEY$7 = '.data-api';
  var JQUERY_NO_CONFLICT$9 = $.fn[NAME$9];
  var EVENT_HIDE$3 = "hide" + EVENT_KEY$9;
  var EVENT_HIDDEN$3 = "hidden" + EVENT_KEY$9;
  var EVENT_SHOW$3 = "show" + EVENT_KEY$9;
  var EVENT_SHOWN$3 = "shown" + EVENT_KEY$9;
  var EVENT_CLICK_DATA_API$6 = "click" + EVENT_KEY$9 + DATA_API_KEY$7;
  var CLASS_NAME_DROPDOWN_MENU = 'dropdown-menu';
  var CLASS_NAME_ACTIVE$3 = 'active';
  var CLASS_NAME_DISABLED$1 = 'disabled';
  var CLASS_NAME_FADE$4 = 'fade';
  var CLASS_NAME_SHOW$6 = 'show';
  var SELECTOR_DROPDOWN$1 = '.dropdown';
  var SELECTOR_NAV_LIST_GROUP$1 = '.nav, .list-group';
  var SELECTOR_ACTIVE$2 = '.active';
  var SELECTOR_ACTIVE_UL = '> li > .active';
  var SELECTOR_DATA_TOGGLE$4 = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';
  var SELECTOR_DROPDOWN_TOGGLE$1 = '.dropdown-toggle';
  var SELECTOR_DROPDOWN_ACTIVE_CHILD = '> .dropdown-menu .active';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Tab = /*#__PURE__*/function () {
    function Tab(element) {
      this._element = element;
    } // Getters


    var _proto = Tab.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(CLASS_NAME_ACTIVE$3) || $(this._element).hasClass(CLASS_NAME_DISABLED$1)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' || listElement.nodeName === 'OL' ? SELECTOR_ACTIVE_UL : SELECTOR_ACTIVE$2;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(EVENT_HIDE$3, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(EVENT_SHOW$3, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = document.querySelector(selector);
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(EVENT_HIDDEN$3, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(EVENT_SHOWN$3, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY$9);
      this._element = null;
    } // Private
    ;

    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements = container && (container.nodeName === 'UL' || container.nodeName === 'OL') ? $(container).find(SELECTOR_ACTIVE_UL) : $(container).children(SELECTOR_ACTIVE$2);
      var active = activeElements[0];
      var isTransitioning = callback && active && $(active).hasClass(CLASS_NAME_FADE$4);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, callback);
      };

      if (active && isTransitioning) {
        var transitionDuration = Util.getTransitionDurationFromElement(active);
        $(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, callback) {
      if (active) {
        $(active).removeClass(CLASS_NAME_ACTIVE$3);
        var dropdownChild = $(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(CLASS_NAME_ACTIVE$3);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      Util.reflow(element);

      if (element.classList.contains(CLASS_NAME_FADE$4)) {
        element.classList.add(CLASS_NAME_SHOW$6);
      }

      if (element.parentNode && $(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(SELECTOR_DROPDOWN$1)[0];

        if (dropdownElement) {
          var dropdownToggleList = [].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));
          $(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    } // Static
    ;

    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY$9);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY$9, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    _createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$9;
      }
    }]);

    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$4, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME$9] = Tab._jQueryInterface;
  $.fn[NAME$9].Constructor = Tab;

  $.fn[NAME$9].noConflict = function () {
    $.fn[NAME$9] = JQUERY_NO_CONFLICT$9;
    return Tab._jQueryInterface;
  };
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME$a = 'toast';
  var VERSION$a = '4.5.0';
  var DATA_KEY$a = 'bs.toast';
  var EVENT_KEY$a = "." + DATA_KEY$a;
  var JQUERY_NO_CONFLICT$a = $.fn[NAME$a];
  var EVENT_CLICK_DISMISS$1 = "click.dismiss" + EVENT_KEY$a;
  var EVENT_HIDE$4 = "hide" + EVENT_KEY$a;
  var EVENT_HIDDEN$4 = "hidden" + EVENT_KEY$a;
  var EVENT_SHOW$4 = "show" + EVENT_KEY$a;
  var EVENT_SHOWN$4 = "shown" + EVENT_KEY$a;
  var CLASS_NAME_FADE$5 = 'fade';
  var CLASS_NAME_HIDE = 'hide';
  var CLASS_NAME_SHOW$7 = 'show';
  var CLASS_NAME_SHOWING = 'showing';
  var DefaultType$7 = {
    animation: 'boolean',
    autohide: 'boolean',
    delay: 'number'
  };
  var Default$7 = {
    animation: true,
    autohide: true,
    delay: 500
  };
  var SELECTOR_DATA_DISMISS$1 = '[data-dismiss="toast"]';
  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  var Toast = /*#__PURE__*/function () {
    function Toast(element, config) {
      this._element = element;
      this._config = this._getConfig(config);
      this._timeout = null;

      this._setListeners();
    } // Getters


    var _proto = Toast.prototype; // Public

    _proto.show = function show() {
      var _this = this;

      var showEvent = $.Event(EVENT_SHOW$4);
      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      if (this._config.animation) {
        this._element.classList.add(CLASS_NAME_FADE$5);
      }

      var complete = function complete() {
        _this._element.classList.remove(CLASS_NAME_SHOWING);

        _this._element.classList.add(CLASS_NAME_SHOW$7);

        $(_this._element).trigger(EVENT_SHOWN$4);

        if (_this._config.autohide) {
          _this._timeout = setTimeout(function () {
            _this.hide();
          }, _this._config.delay);
        }
      };

      this._element.classList.remove(CLASS_NAME_HIDE);

      Util.reflow(this._element);

      this._element.classList.add(CLASS_NAME_SHOWING);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    };

    _proto.hide = function hide() {
      if (!this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        return;
      }

      var hideEvent = $.Event(EVENT_HIDE$4);
      $(this._element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      this._close();
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      this._timeout = null;

      if (this._element.classList.contains(CLASS_NAME_SHOW$7)) {
        this._element.classList.remove(CLASS_NAME_SHOW$7);
      }

      $(this._element).off(EVENT_CLICK_DISMISS$1);
      $.removeData(this._element, DATA_KEY$a);
      this._element = null;
      this._config = null;
    } // Private
    ;

    _proto._getConfig = function _getConfig(config) {
      config = _objectSpread2(_objectSpread2(_objectSpread2({}, Default$7), $(this._element).data()), _typeof(config) === 'object' && config ? config : {});
      Util.typeCheckConfig(NAME$a, config, this.constructor.DefaultType);
      return config;
    };

    _proto._setListeners = function _setListeners() {
      var _this2 = this;

      $(this._element).on(EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this2.hide();
      });
    };

    _proto._close = function _close() {
      var _this3 = this;

      var complete = function complete() {
        _this3._element.classList.add(CLASS_NAME_HIDE);

        $(_this3._element).trigger(EVENT_HIDDEN$4);
      };

      this._element.classList.remove(CLASS_NAME_SHOW$7);

      if (this._config.animation) {
        var transitionDuration = Util.getTransitionDurationFromElement(this._element);
        $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(transitionDuration);
      } else {
        complete();
      }
    } // Static
    ;

    Toast._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY$a);

        var _config = _typeof(config) === 'object' && config;

        if (!data) {
          data = new Toast(this, _config);
          $element.data(DATA_KEY$a, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError("No method named \"" + config + "\"");
          }

          data[config](this);
        }
      });
    };

    _createClass(Toast, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION$a;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType$7;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default$7;
      }
    }]);

    return Toast;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME$a] = Toast._jQueryInterface;
  $.fn[NAME$a].Constructor = Toast;

  $.fn[NAME$a].noConflict = function () {
    $.fn[NAME$a] = JQUERY_NO_CONFLICT$a;
    return Toast._jQueryInterface;
  };

  exports.Alert = Alert;
  exports.Button = Button;
  exports.Carousel = Carousel;
  exports.Collapse = Collapse;
  exports.Dropdown = Dropdown;
  exports.Modal = Modal;
  exports.Popover = Popover;
  exports.Scrollspy = ScrollSpy;
  exports.Tab = Tab;
  exports.Toast = Toast;
  exports.Tooltip = Tooltip;
  exports.Util = Util;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery JavaScript Library v3.5.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-05-04T22:49Z
 */
(function (global, factory) {
  "use strict";

  if (( false ? undefined : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var getProto = Object.getPrototypeOf;
  var _slice = arr.slice;
  var flat = arr.flat ? function (array) {
    return arr.flat.call(array);
  } : function (array) {
    return arr.concat.apply([], array);
  };
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var document = window.document;
  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return _typeof(obj) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : _typeof(obj);
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.5.1",
      // Define a local copy of jQuery
  jQuery = function jQuery(selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function toArray() {
      return _slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function get(num) {
      // Return all the elements in a clean array
      if (num == null) {
        return _slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function pushStack(elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function each(callback) {
      return jQuery.each(this, callback);
    },
    map: function map(callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function slice() {
      return this.pushStack(_slice.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    even: function even() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return (i + 1) % 2;
      }));
    },
    odd: function odd() {
      return this.pushStack(jQuery.grep(this, function (_elem, i) {
        return i % 2;
      }));
    },
    eq: function eq(i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (_typeof(target) !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function error(msg) {
      throw new Error(msg);
    },
    noop: function noop() {},
    isPlainObject: function isPlainObject(obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function isEmptyObject(obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a provided context; falls back to the global one
    // if not specified.
    globalEval: function globalEval(code, options, doc) {
      DOMEval(code, {
        nonce: options && options.nonce
      }, doc);
    },
    each: function each(obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // results is for internal usage only
    makeArray: function makeArray(arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function inArray(elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function merge(first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function grep(elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function map(elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return flat(ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (_i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.5
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2020-03-14
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function sortOrder(a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        pushNative = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function indexOf(list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
    identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
    // or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"),
        funescape = function funescape(escape, nonHex) {
      var high = "0x" + escape.slice(1) - 0x10000;
      return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
      nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
      // Support: IE <=11+
      // For values outside the Basic Multilingual Plane (BMP), manually construct a
      // surrogate pair
      high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function unloadHandler() {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply
      // eslint-disable-next-line no-unused-expressions

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          pushNative.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        setDocument(context);
        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // The technique has to be used as well when a leading combinator is used
            // as such selectors are not recognized by querySelectorAll.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
              // Expand context for sibling selectors
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context; // We can use :scope instead of the ID hack if the browser
              // supports it & if we're not changing the context.

              if (newContext !== context || !support.scope) {
                // Capture the context ID, setting it first if necessary
                if (nid = context.getAttribute("id")) {
                  nid = nid.replace(rcssescape, fcssescape);
                } else {
                  context.setAttribute("id", nid = expando);
                }
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(",");
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (doc == document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9 - 11+, Edge 12 - 18+
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq

      if (preferredDoc != document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      } // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
      // Safari 4 - 5 only, Opera <=11.6 - 12.x only
      // IE/Edge & older browsers don't support the :scope pseudo-class.
      // Support: Safari 6.0 only
      // Safari 6.0 supports :scope but it's an alias of :root there.


      support.scope = assert(function (el) {
        docElem.appendChild(el).appendChild(document.createElement("div"));
        return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
      });
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)

      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          var input; // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359

          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Support: IE 11+, Edge 15 - 18+
          // IE 11/Edge don't find elements on a `[name='']` query in some cases.
          // Adding a temporary attribute to the document before the selection works
          // around the issue.
          // Interestingly, IE 10 & older don't seem to have the issue.


          input = document.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);

          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          } // Support: Firefox <=3.6 - 5 only
          // Old Firefox doesn't throw on a badly-escaped identifier.


          el.querySelectorAll("\\\f");
          rbuggyQSA.push("[\\r\\n\\f]");
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: Opera 10 - 11 only
          // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq


        compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          if (a == document || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) {
            return -1;
          } // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq


          if (b == document || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.

          /* eslint-disable eqeqeq */
          return a == document ? -1 : b == document ? 1 :
          /* eslint-enable eqeqeq */
          aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.

        /* eslint-disable eqeqeq */
        ap[i] == preferredDoc ? -1 : bp[i] == preferredDoc ? 1 :
        /* eslint-enable eqeqeq */
        0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      setDocument(elem);

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((context.ownerDocument || context) != document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      // Support: IE 11+, Edge 17 - 18+
      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
      // two documents; shallow comparisons work.
      // eslint-disable-next-line eqeqeq
      if ((elem.ownerDocument || elem) != document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function ATTR(match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function CHILD(match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function PSEUDO(match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function TAG(nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function CLASS(className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function ATTR(name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            /* eslint-disable max-len */

            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
            /* eslint-enable max-len */
          };
        },
        "CHILD": function CHILD(type, what, _argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, _context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function PSEUDO(pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, _context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, _context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function target(elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function root(elem) {
          return elem === docElem;
        },
        "focus": function focus(elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function checked(elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function selected(elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            // eslint-disable-next-line no-unused-expressions
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function empty(elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function parent(elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function header(elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function input(elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function button(elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function text(elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (_matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (_matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function superMatcher(seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          outermostContext = context == document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0; // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq

            if (!context && elem.ownerDocument != document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, _name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function dir(elem, _dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[_dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var _siblings = function siblings(n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function find(selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function filter(selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function not(selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function is(selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function has(target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function closest(selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function index(elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function add(selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function addBack(selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function parent(elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function parents(elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function parentsUntil(elem, _i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function next(elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function prev(elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function nextAll(elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function prevAll(elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function nextUntil(elem, _i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function prevUntil(elem, _i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function siblings(elem) {
      return _siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function children(elem) {
      return _siblings(elem.firstChild);
    },
    contents: function contents(elem) {
      if (elem.contentDocument != null && // Support: IE 11+
      // <object> elements with no `data` attribute has an object
      // `contentDocument` with a `null` prototype.
      getProto(elem.contentDocument)) {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    _fired,
        // Flag to prevent firing
    _locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function fire() {
      // Enforce single-firing
      _locked = _locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      _fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (_locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function add() {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function remove() {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function has(fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function empty() {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function disable() {
        _locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function disabled() {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function lock() {
        _locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function locked() {
        return !!_locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function fireWith(context, args) {
        if (!_locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function fire() {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function fired() {
        return !!_fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function Deferred(func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          _state = "pending",
          _promise = {
        state: function state() {
          return _state;
        },
        always: function always() {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function _catch(fn) {
          return _promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function pipe()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (_i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function then(onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function mightThrow() {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                _typeof(returned) === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function promise(obj) {
          return obj != null ? jQuery.extend(obj, _promise) : _promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        _promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            _state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      _promise.promise(deferred); // Call given func if any


      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function when(singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = _slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function updateFunc(i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    ["catch"](function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function ready(wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function fn(elem, _key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(_all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function acceptData(owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function cache(owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function set(owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function get(owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function access(owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function remove(owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function hasData(owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function hasData(elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function data(elem, name, _data) {
      return dataUser.access(elem, name, _data);
    },
    removeData: function removeData(elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function _data(elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function _removeData(elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function data(key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (_typeof(key) === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function removeData(key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function queue(elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function dequeue(elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function next() {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function _queueHooks(elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function queue(type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function dequeue(type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function clearQueue(type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function promise(type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function resolve() {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function isAttached(elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function isAttached(elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function show() {
      return showHide(this, true);
    },
    hide: function hide() {
      return showHide(this);
    },
    toggle: function toggle(state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue; // Support: IE <=9 only
    // IE <=9 replaces <option> tags with their contents when inserted outside of
    // the select element.

    div.innerHTML = "<option></option>";
    support.option = !!div.lastChild;
  })(); // We have to close these tags to support XHTML (#13200)


  var wrapMap = {
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td; // Support: IE <=9 only

  if (!support.option) {
    wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
  }

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function _on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (_typeof(types) === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        _on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function fn(event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function add(elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Only attach events to objects that accept data

      if (!acceptData(elem)) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = Object.create(null);
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function remove(elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function dispatch(nativeEvent) {
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(nativeEvent),
          handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function handlers(event, _handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = _handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = _handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < _handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: _handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function addProp(name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function set(value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function fix(originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function setup(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function trigger(data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function _default(event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function handler(event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = _slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function preventDefault() {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function stopPropagation() {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function which(event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function setup() {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function trigger() {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function handle(event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function on(types, selector, data, fn) {
      return _on(this, types, selector, data, fn);
    },
    one: function one(types, selector, data, fn) {
      return _on(this, types, selector, data, fn, 1);
    },
    off: function off(types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (_typeof(types) === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.get(src);
      events = pdataOld.events;

      if (events) {
        dataPriv.remove(dest, "handle events");

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = flat(args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  }, doc);
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function _remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function htmlPrefilter(html) {
      return html;
    },
    clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function cleanData(elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function detach(selector) {
      return _remove(this, selector, true);
    },
    remove: function remove(selector) {
      return _remove(this, selector);
    },
    text: function text(value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function append() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function prepend() {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function before() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function after() {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function empty() {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function clone(dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function html(value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function replaceWith() {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function getStyles(elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var swap = function swap(elem, options, callback) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.call(elem); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableTrDimensionsVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function boxSizingReliable() {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function pixelBoxStyles() {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function pixelPosition() {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function scrollboxSize() {
        computeStyleTests();
        return scrollboxSizeVal;
      },
      // Support: IE 9 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Behavior in IE 9 is more subtle than in newer versions & it passes
      // some versions of this test; make sure not to make it pass there!
      reliableTrDimensions: function reliableTrDimensions() {
        var table, tr, trChild, trStyle;

        if (reliableTrDimensionsVal == null) {
          table = document.createElement("table");
          tr = document.createElement("tr");
          trChild = document.createElement("div");
          table.style.cssText = "position:absolute;left:-11111px";
          tr.style.height = "1px";
          trChild.style.height = "9px";
          documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
          trStyle = window.getComputedStyle(tr);
          reliableTrDimensionsVal = parseInt(trStyle.height) > 3;
          documentElement.removeChild(table);
        }

        return reliableTrDimensionsVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function get() {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var _final = jQuery.cssProps[name] || vendorProps[name];

    if (_final) {
      return _final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(_elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Support: IE 9 - 11 only
    // Use offsetWidth/offsetHeight for when box sizing is unreliable.
    // In those cases, the computed value can be trusted to be border-box.


    if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
    // IE/Edge misreport `getComputedStyle` of table rows with width/height
    // set in CSS while `offset*` properties report correct values.
    // Interestingly, in some cases IE 9 doesn't suffer from this issue.
    !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    val === "auto" || // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
    elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function get(elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function style(elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = _typeof(value); // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function css(elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (_i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function get(elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function set(elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function expand(value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function css(name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function init(elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function cur() {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function run(percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function get(tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function set(tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function set(tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function linear(p) {
      return p;
    },
    swing: function swing(p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function tick() {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function createTween(prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function stop(gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function tweener(props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function prefilter(callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && _typeof(speed) === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function fadeTo(speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function animate(prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function doAnimation() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function stop(type, clearQueue, gotoEnd) {
      var stopQueue = function stopQueue(hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function finish(type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (_i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function attr(name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function removeAttr(name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function attr(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function set(elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function removeAttr(elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function set(elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (_i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function prop(name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function removeProp(name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function prop(elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function get(elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function get(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function set(elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function addClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(value, stateVal) {
      var type = _typeof(value),
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function hasClass(selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function val(value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function get(elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function get(elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function set(elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function set(elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function stopPropagationCallback(e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function trigger(event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, _typeof(event) === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function simulate(type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function trigger(type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function triggerHandler(type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function handler(event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function setup() {
          // Handle: regular nodes (via `this.ownerDocument`), window
          // (via `this.document`) & document (via `this`).
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function teardown() {
          var doc = this.ownerDocument || this.document || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = {
    guid: Date.now()
  };
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (_typeof(v) === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function add(key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function serialize() {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (_i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
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
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function ajaxSetup(target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function ajax(url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (_typeof(url) === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};

      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      _statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function getResponseHeader(key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function getAllResponseHeaders() {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function setRequestHeader(name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function overrideMimeType(type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function statusCode(map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                _statusCode[code] = [_statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function abort(statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds


      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Use a noop converter for missing script


        if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1) {
          s.converters["text script"] = function () {};
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(_statusCode);
        _statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function getJSON(url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function getScript(url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (_i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });
  jQuery.ajaxPrefilter(function (s) {
    var i;

    for (i in s.headers) {
      if (i.toLowerCase() === "content-type") {
        s.contentType = s.headers[i] || "";
      }
    }
  });

  jQuery._evalUrl = function (url, options, doc) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function textScript() {}
      },
      dataFilter: function dataFilter(response) {
        jQuery.globalEval(response, options, doc);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function wrapAll(html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function wrap(html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function unwrap(selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var _callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest


    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function send(headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          _callback = function callback(type) {
            return function () {
              if (_callback) {
                _callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = _callback();
          errorCallback = xhr.onerror = xhr.ontimeout = _callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (_callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          _callback = _callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (_callback) {
              throw e;
            }
          }
        },
        abort: function abort() {
          if (_callback) {
            _callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, _callback2;

      return {
        send: function send(_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", _callback2 = function callback(evt) {
            script.remove();
            _callback2 = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function abort() {
          if (_callback2) {
            _callback2();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && _typeof(params) === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  };

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function setOffset(elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        if (typeof props.top === "number") {
          props.top += "px";
        }

        if (typeof props.left === "number") {
          props.left += "px";
        }

        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function offset(options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function position() {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function offsetParent() {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (_i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (_i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.fn.extend({
    bind: function bind(types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function unbind(types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function delegate(selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function undelegate(selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    },
    hover: function hover(fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (_i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  }); // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP

  var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g; // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = _slice.call(arguments, 2);

    proxy = function proxy() {
      return fn.apply(context || this, args.concat(_slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  };

  jQuery.trim = function (text) {
    return text == null ? "" : (text + "").replace(rtrim, "");
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (typeof noGlobal === "undefined") {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

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
 * @version 1.16.1
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
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

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
  } // NOTE: 1 DOM access here


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
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
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

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
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
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


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
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
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

var classCallCheck = function classCallCheck(instance, Constructor) {
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

var defineProperty = function defineProperty(obj, key, value) {
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
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
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
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
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
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

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
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

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

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
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
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

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

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

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
  } // Add paddings


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
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
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
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
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
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

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
  } // use `filter` to obtain the same behavior of `find`


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
  } // use `find` + `indexOf` if `findIndex` isn't supported


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
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
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
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

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

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
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
  target.addEventListener(event, callback, {
    passive: true
  });

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
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

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
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

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
    var unit = ''; // add unit if the value is numeric and is one of the following

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
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

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
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
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
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
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
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
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
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

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
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

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
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

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


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

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
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
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
  var unit = split[2]; // If it's not a number it's an operator, I guess

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
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
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
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

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
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
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
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
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
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

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
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
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
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uikit/dist/js/uikit.js":
/*!*********************************************!*\
  !*** ./node_modules/uikit/dist/js/uikit.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! UIkit 3.5.3 | https://www.getuikit.com | (c) 2014 - 2020 YOOtheme | MIT License */
(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})(this, function () {
  'use strict';

  var objPrototype = Object.prototype;
  var hasOwnProperty = objPrototype.hasOwnProperty;

  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }

  var hyphenateCache = {};
  var hyphenateRe = /([a-z\d])([A-Z])/g;

  function hyphenate(str) {
    if (!(str in hyphenateCache)) {
      hyphenateCache[str] = str.replace(hyphenateRe, '$1-$2').toLowerCase();
    }

    return hyphenateCache[str];
  }

  var camelizeRe = /-(\w)/g;

  function camelize(str) {
    return str.replace(camelizeRe, toUpper);
  }

  function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
  }

  function ucfirst(str) {
    return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
  }

  var strPrototype = String.prototype;

  var startsWithFn = strPrototype.startsWith || function (search) {
    return this.lastIndexOf(search, 0) === 0;
  };

  function startsWith(str, search) {
    return startsWithFn.call(str, search);
  }

  var endsWithFn = strPrototype.endsWith || function (search) {
    return this.substr(-search.length) === search;
  };

  function endsWith(str, search) {
    return endsWithFn.call(str, search);
  }

  var arrPrototype = Array.prototype;

  var includesFn = function includesFn(search, i) {
    return !!~this.indexOf(search, i);
  };

  var includesStr = strPrototype.includes || includesFn;
  var includesArray = arrPrototype.includes || includesFn;

  function includes(obj, search) {
    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
  }

  var findIndexFn = arrPrototype.findIndex || function (predicate) {
    var arguments$1 = arguments;

    for (var i = 0; i < this.length; i++) {
      if (predicate.call(arguments$1[1], this[i], i, this)) {
        return i;
      }
    }

    return -1;
  };

  function findIndex(array, predicate) {
    return findIndexFn.call(array, predicate);
  }

  var isArray = Array.isArray;

  function isFunction(obj) {
    return typeof obj === 'function';
  }

  function isObject(obj) {
    return obj !== null && _typeof(obj) === 'object';
  }

  var toString = objPrototype.toString;

  function isPlainObject(obj) {
    return toString.call(obj) === '[object Object]';
  }

  function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
  }

  function isDocument(obj) {
    return isObject(obj) && obj.nodeType === 9;
  }

  function isJQuery(obj) {
    return isObject(obj) && !!obj.jquery;
  }

  function isNode(obj) {
    return isObject(obj) && obj.nodeType >= 1;
  }

  function isElement(obj) {
    return isObject(obj) && obj.nodeType === 1;
  }

  function isNodeCollection(obj) {
    return toString.call(obj).match(/^\[object (NodeList|HTMLCollection)\]$/);
  }

  function isBoolean(value) {
    return typeof value === 'boolean';
  }

  function isString(value) {
    return typeof value === 'string';
  }

  function isNumber(value) {
    return typeof value === 'number';
  }

  function isNumeric(value) {
    return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
  }

  function isEmpty(obj) {
    return !(isArray(obj) ? obj.length : isObject(obj) ? Object.keys(obj).length : false);
  }

  function isUndefined(value) {
    return value === void 0;
  }

  function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true' || value === '1' || value === '' ? true : value === 'false' || value === '0' ? false : value;
  }

  function toNumber(value) {
    var number = Number(value);
    return !isNaN(number) ? number : false;
  }

  function toFloat(value) {
    return parseFloat(value) || 0;
  }

  function toNode(element) {
    return isNode(element) ? element : isNodeCollection(element) || isJQuery(element) ? element[0] : isArray(element) ? toNode(element[0]) : null;
  }

  function toNodes(element) {
    return isNode(element) ? [element] : isNodeCollection(element) ? arrPrototype.slice.call(element) : isArray(element) ? element.map(toNode).filter(Boolean) : isJQuery(element) ? element.toArray() : [];
  }

  function toWindow(element) {
    if (isWindow(element)) {
      return element;
    }

    element = toNode(element);
    return element ? (isDocument(element) ? element : element.ownerDocument).defaultView : window;
  }

  function toList(value) {
    return isArray(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map(function (value) {
      return isNumeric(value) ? toNumber(value) : toBoolean(value.trim());
    }) : [value];
  }

  function toMs(time) {
    return !time ? 0 : endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000;
  }

  function isEqual(value, other) {
    return value === other || isObject(value) && isObject(other) && Object.keys(value).length === Object.keys(other).length && each(value, function (val, key) {
      return val === other[key];
    });
  }

  function swap(value, a, b) {
    return value.replace(new RegExp(a + "|" + b, 'g'), function (match) {
      return match === a ? b : a;
    });
  }

  var assign = Object.assign || function (target) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    target = Object(target);

    for (var i = 0; i < args.length; i++) {
      var source = args[i];

      if (source !== null) {
        for (var key in source) {
          if (hasOwn(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }

    return target;
  };

  function last(array) {
    return array[array.length - 1];
  }

  function each(obj, cb) {
    for (var key in obj) {
      if (false === cb(obj[key], key)) {
        return false;
      }
    }

    return true;
  }

  function sortBy(array, prop) {
    return array.sort(function (ref, ref$1) {
      var propA = ref[prop];
      if (propA === void 0) propA = 0;
      var propB = ref$1[prop];
      if (propB === void 0) propB = 0;
      return propA > propB ? 1 : propB > propA ? -1 : 0;
    });
  }

  function uniqueBy(array, prop) {
    var seen = new Set();
    return array.filter(function (ref) {
      var check = ref[prop];
      return seen.has(check) ? false : seen.add(check) || true;
    } // IE 11 does not return the Set object
    );
  }

  function clamp(number, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return Math.min(Math.max(toNumber(number) || 0, min), max);
  }

  function noop() {}

  function intersectRect(r1, r2) {
    return r1.left < r2.right && r1.right > r2.left && r1.top < r2.bottom && r1.bottom > r2.top;
  }

  function pointInRect(point, rect) {
    return point.x <= rect.right && point.x >= rect.left && point.y <= rect.bottom && point.y >= rect.top;
  }

  var Dimensions = {
    ratio: function ratio(dimensions, prop, value) {
      var obj;
      var aProp = prop === 'width' ? 'height' : 'width';
      return obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj;
    },
    contain: function contain(dimensions, maxDimensions) {
      var this$1 = this;
      dimensions = assign({}, dimensions);
      each(dimensions, function (_, prop) {
        return dimensions = dimensions[prop] > maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      });
      return dimensions;
    },
    cover: function cover(dimensions, maxDimensions) {
      var this$1 = this;
      dimensions = this.contain(dimensions, maxDimensions);
      each(dimensions, function (_, prop) {
        return dimensions = dimensions[prop] < maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
      });
      return dimensions;
    }
  };

  function attr(element, name, value) {
    if (isObject(name)) {
      for (var key in name) {
        attr(element, key, name[key]);
      }

      return;
    }

    if (isUndefined(value)) {
      element = toNode(element);
      return element && element.getAttribute(name);
    } else {
      toNodes(element).forEach(function (element) {
        if (isFunction(value)) {
          value = value.call(element, attr(element, name));
        }

        if (value === null) {
          removeAttr(element, name);
        } else {
          element.setAttribute(name, value);
        }
      });
    }
  }

  function hasAttr(element, name) {
    return toNodes(element).some(function (element) {
      return element.hasAttribute(name);
    });
  }

  function removeAttr(element, name) {
    element = toNodes(element);
    name.split(' ').forEach(function (name) {
      return element.forEach(function (element) {
        return element.hasAttribute(name) && element.removeAttribute(name);
      });
    });
  }

  function data(element, attribute) {
    for (var i = 0, attrs = [attribute, "data-" + attribute]; i < attrs.length; i++) {
      if (hasAttr(element, attrs[i])) {
        return attr(element, attrs[i]);
      }
    }
  }
  /* global DocumentTouch */


  var inBrowser = typeof window !== 'undefined';
  var isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
  var isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';
  var hasTouchEvents = inBrowser && 'ontouchstart' in window;
  var hasPointerEvents = inBrowser && window.PointerEvent;
  var hasTouch = inBrowser && (hasTouchEvents || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints); // IE >=11

  var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
  var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
  var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
  var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
  var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
  var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

  function query(selector, context) {
    return toNode(selector) || find(selector, getContext(selector, context));
  }

  function queryAll(selector, context) {
    var nodes = toNodes(selector);
    return nodes.length && nodes || findAll(selector, getContext(selector, context));
  }

  function getContext(selector, context) {
    if (context === void 0) context = document;
    return isContextSelector(selector) || isDocument(context) ? context : context.ownerDocument;
  }

  function find(selector, context) {
    return toNode(_query(selector, context, 'querySelector'));
  }

  function findAll(selector, context) {
    return toNodes(_query(selector, context, 'querySelectorAll'));
  }

  function _query(selector, context, queryFn) {
    if (context === void 0) context = document;

    if (!selector || !isString(selector)) {
      return null;
    }

    selector = selector.replace(contextSanitizeRe, '$1 *');
    var removes;

    if (isContextSelector(selector)) {
      removes = [];
      selector = splitSelector(selector).map(function (selector, i) {
        var ctx = context;

        if (selector[0] === '!') {
          var selectors = selector.substr(1).trim().split(' ');
          ctx = closest(parent(context), selectors[0]);
          selector = selectors.slice(1).join(' ').trim();
        }

        if (selector[0] === '-') {
          var selectors$1 = selector.substr(1).trim().split(' ');
          var prev = (ctx || context).previousElementSibling;
          ctx = matches(prev, selector.substr(1)) ? prev : null;
          selector = selectors$1.slice(1).join(' ');
        }

        if (!ctx) {
          return null;
        }

        if (!ctx.id) {
          ctx.id = "uk-" + Date.now() + i;
          removes.push(function () {
            return removeAttr(ctx, 'id');
          });
        }

        return "#" + escape(ctx.id) + " " + selector;
      }).filter(Boolean).join(',');
      context = document;
    }

    try {
      return context[queryFn](selector);
    } catch (e) {
      return null;
    } finally {
      removes && removes.forEach(function (remove) {
        return remove();
      });
    }
  }

  var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
  var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

  function isContextSelector(selector) {
    return isString(selector) && selector.match(contextSelectorRe);
  }

  var selectorRe = /.*?[^\\](?:,|$)/g;

  function splitSelector(selector) {
    return selector.match(selectorRe).map(function (selector) {
      return selector.replace(/,$/, '').trim();
    });
  }

  var elProto = inBrowser ? Element.prototype : {};
  var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || noop;

  function matches(element, selector) {
    return toNodes(element).some(function (element) {
      return matchesFn.call(element, selector);
    });
  }

  var closestFn = elProto.closest || function (selector) {
    var ancestor = this;

    do {
      if (matches(ancestor, selector)) {
        return ancestor;
      }
    } while (ancestor = parent(ancestor));
  };

  function closest(element, selector) {
    if (startsWith(selector, '>')) {
      selector = selector.slice(1);
    }

    return isElement(element) ? closestFn.call(element, selector) : toNodes(element).map(function (element) {
      return closest(element, selector);
    }).filter(Boolean);
  }

  function parent(element) {
    element = toNode(element);
    return element && isElement(element.parentNode) && element.parentNode;
  }

  var escapeFn = inBrowser && window.CSS && CSS.escape || function (css) {
    return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) {
      return "\\" + match;
    });
  };

  function escape(css) {
    return isString(css) ? escapeFn.call(null, css) : '';
  }

  var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };

  function isVoidElement(element) {
    return toNodes(element).some(function (element) {
      return voidElements[element.tagName.toLowerCase()];
    });
  }

  function isVisible(element) {
    return toNodes(element).some(function (element) {
      return element.offsetWidth || element.offsetHeight || element.getClientRects().length;
    });
  }

  var selInput = 'input,select,textarea,button';

  function isInput(element) {
    return toNodes(element).some(function (element) {
      return matches(element, selInput);
    });
  }

  function filter(element, selector) {
    return toNodes(element).filter(function (element) {
      return matches(element, selector);
    });
  }

  function within(element, selector) {
    return !isString(selector) ? element === selector || (isDocument(selector) ? selector.documentElement : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
    : matches(element, selector) || !!closest(element, selector);
  }

  function parents(element, selector) {
    var elements = [];

    while (element = parent(element)) {
      if (!selector || matches(element, selector)) {
        elements.push(element);
      }
    }

    return elements;
  }

  function _children(element, selector) {
    element = toNode(element);
    var children = element ? toNodes(element.children) : [];
    return selector ? filter(children, selector) : children;
  }

  function on() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var ref = getArgs(args);
    var targets = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];
    targets = toEventTargets(targets);

    if (listener.length > 1) {
      listener = detail(listener);
    }

    if (useCapture && useCapture.self) {
      listener = selfFilter(listener);
    }

    if (selector) {
      listener = delegate(targets, selector, listener);
    }

    useCapture = useCaptureFilter(useCapture);
    type.split(' ').forEach(function (type) {
      return targets.forEach(function (target) {
        return target.addEventListener(type, listener, useCapture);
      });
    });
    return function () {
      return off(targets, type, listener, useCapture);
    };
  }

  function off(targets, type, listener, useCapture) {
    if (useCapture === void 0) useCapture = false;
    useCapture = useCaptureFilter(useCapture);
    targets = toEventTargets(targets);
    type.split(' ').forEach(function (type) {
      return targets.forEach(function (target) {
        return target.removeEventListener(type, listener, useCapture);
      });
    });
  }

  function once() {
    var args = [],
        len = arguments.length;

    while (len--) {
      args[len] = arguments[len];
    }

    var ref = getArgs(args);
    var element = ref[0];
    var type = ref[1];
    var selector = ref[2];
    var listener = ref[3];
    var useCapture = ref[4];
    var condition = ref[5];
    var off = on(element, type, selector, function (e) {
      var result = !condition || condition(e);

      if (result) {
        off();
        listener(e, result);
      }
    }, useCapture);
    return off;
  }

  function trigger(targets, event, detail) {
    return toEventTargets(targets).reduce(function (notCanceled, target) {
      return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail));
    }, true);
  }

  function createEvent(e, bubbles, cancelable, detail) {
    if (bubbles === void 0) bubbles = true;
    if (cancelable === void 0) cancelable = false;

    if (isString(e)) {
      var event = document.createEvent('CustomEvent'); // IE 11

      event.initCustomEvent(e, bubbles, cancelable, detail);
      e = event;
    }

    return e;
  }

  function getArgs(args) {
    if (isFunction(args[2])) {
      args.splice(2, 0, false);
    }

    return args;
  }

  function delegate(delegates, selector, listener) {
    var this$1 = this;
    return function (e) {
      delegates.forEach(function (delegate) {
        var current = selector[0] === '>' ? findAll(selector, delegate).reverse().filter(function (element) {
          return within(e.target, element);
        })[0] : closest(e.target, selector);

        if (current) {
          e.delegate = delegate;
          e.current = current;
          listener.call(this$1, e);
        }
      });
    };
  }

  function detail(listener) {
    return function (e) {
      return isArray(e.detail) ? listener.apply(void 0, [e].concat(e.detail)) : listener(e);
    };
  }

  function selfFilter(listener) {
    return function (e) {
      if (e.target === e.currentTarget || e.target === e.current) {
        return listener.call(null, e);
      }
    };
  }

  function useCaptureFilter(options) {
    return options && isIE && !isBoolean(options) ? !!options.capture : options;
  }

  function isEventTarget(target) {
    return target && 'addEventListener' in target;
  }

  function toEventTarget(target) {
    return isEventTarget(target) ? target : toNode(target);
  }

  function toEventTargets(target) {
    return isArray(target) ? target.map(toEventTarget).filter(Boolean) : isString(target) ? findAll(target) : isEventTarget(target) ? [target] : toNodes(target);
  }

  function isTouch(e) {
    return e.pointerType === 'touch' || !!e.touches;
  }

  function getEventPos(e) {
    var touches = e.touches;
    var changedTouches = e.changedTouches;
    var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
    var x = ref.clientX;
    var y = ref.clientY;
    return {
      x: x,
      y: y
    };
  }
  /* global setImmediate */


  var Promise = inBrowser && window.Promise || PromiseFn;

  var Deferred = function Deferred() {
    var this$1 = this;
    this.promise = new Promise(function (resolve, reject) {
      this$1.reject = reject;
      this$1.resolve = resolve;
    });
  };
  /**
   * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
   */


  var RESOLVED = 0;
  var REJECTED = 1;
  var PENDING = 2;
  var async = inBrowser && window.setImmediate || setTimeout;

  function PromiseFn(executor) {
    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];
    var promise = this;

    try {
      executor(function (x) {
        promise.resolve(x);
      }, function (r) {
        promise.reject(r);
      });
    } catch (e) {
      promise.reject(e);
    }
  }

  PromiseFn.reject = function (r) {
    return new PromiseFn(function (resolve, reject) {
      reject(r);
    });
  };

  PromiseFn.resolve = function (x) {
    return new PromiseFn(function (resolve, reject) {
      resolve(x);
    });
  };

  PromiseFn.all = function all(iterable) {
    return new PromiseFn(function (resolve, reject) {
      var result = [];
      var count = 0;

      if (iterable.length === 0) {
        resolve(result);
      }

      function resolver(i) {
        return function (x) {
          result[i] = x;
          count += 1;

          if (count === iterable.length) {
            resolve(result);
          }
        };
      }

      for (var i = 0; i < iterable.length; i += 1) {
        PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
      }
    });
  };

  PromiseFn.race = function race(iterable) {
    return new PromiseFn(function (resolve, reject) {
      for (var i = 0; i < iterable.length; i += 1) {
        PromiseFn.resolve(iterable[i]).then(resolve, reject);
      }
    });
  };

  var p = PromiseFn.prototype;

  p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
      if (x === promise) {
        throw new TypeError('Promise settled with itself.');
      }

      var called = false;

      try {
        var then = x && x.then;

        if (x !== null && isObject(x) && isFunction(then)) {
          then.call(x, function (x) {
            if (!called) {
              promise.resolve(x);
            }

            called = true;
          }, function (r) {
            if (!called) {
              promise.reject(r);
            }

            called = true;
          });
          return;
        }
      } catch (e) {
        if (!called) {
          promise.reject(e);
        }

        return;
      }

      promise.state = RESOLVED;
      promise.value = x;
      promise.notify();
    }
  };

  p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
      if (reason === promise) {
        throw new TypeError('Promise settled with itself.');
      }

      promise.state = REJECTED;
      promise.value = reason;
      promise.notify();
    }
  };

  p.notify = function notify() {
    var this$1 = this;
    async(function () {
      if (this$1.state !== PENDING) {
        while (this$1.deferred.length) {
          var ref = this$1.deferred.shift();
          var onResolved = ref[0];
          var onRejected = ref[1];
          var resolve = ref[2];
          var reject = ref[3];

          try {
            if (this$1.state === RESOLVED) {
              if (isFunction(onResolved)) {
                resolve(onResolved.call(undefined, this$1.value));
              } else {
                resolve(this$1.value);
              }
            } else if (this$1.state === REJECTED) {
              if (isFunction(onRejected)) {
                resolve(onRejected.call(undefined, this$1.value));
              } else {
                reject(this$1.value);
              }
            }
          } catch (e) {
            reject(e);
          }
        }
      }
    });
  };

  p.then = function then(onResolved, onRejected) {
    var this$1 = this;
    return new PromiseFn(function (resolve, reject) {
      this$1.deferred.push([onResolved, onRejected, resolve, reject]);
      this$1.notify();
    });
  };

  p["catch"] = function (onRejected) {
    return this.then(undefined, onRejected);
  };

  function ajax(url, options) {
    return new Promise(function (resolve, reject) {
      var env = assign({
        data: null,
        method: 'GET',
        headers: {},
        xhr: new XMLHttpRequest(),
        beforeSend: noop,
        responseType: ''
      }, options);
      env.beforeSend(env);
      var xhr = env.xhr;

      for (var prop in env) {
        if (prop in xhr) {
          try {
            xhr[prop] = env[prop];
          } catch (e) {}
        }
      }

      xhr.open(env.method.toUpperCase(), url);

      for (var header in env.headers) {
        xhr.setRequestHeader(header, env.headers[header]);
      }

      on(xhr, 'load', function () {
        if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          resolve(xhr);
        } else {
          reject(assign(Error(xhr.statusText), {
            xhr: xhr,
            status: xhr.status
          }));
        }
      });
      on(xhr, 'error', function () {
        return reject(assign(Error('Network Error'), {
          xhr: xhr
        }));
      });
      on(xhr, 'timeout', function () {
        return reject(assign(Error('Network Timeout'), {
          xhr: xhr
        }));
      });
      xhr.send(env.data);
    });
  }

  function getImage(src, srcset, sizes) {
    return new Promise(function (resolve, reject) {
      var img = new Image();
      img.onerror = reject;

      img.onload = function () {
        return resolve(img);
      };

      sizes && (img.sizes = sizes);
      srcset && (img.srcset = srcset);
      img.src = src;
    });
  }

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
      return;
    }

    var unbind = on(document, 'DOMContentLoaded', function () {
      unbind();
      fn();
    });
  }

  function index(element, ref) {
    return ref ? toNodes(element).indexOf(toNode(ref)) : _children(parent(element)).indexOf(element);
  }

  function _getIndex(i, elements, current, finite) {
    if (current === void 0) current = 0;
    if (finite === void 0) finite = false;
    elements = toNodes(elements);
    var length = elements.length;
    i = isNumeric(i) ? toNumber(i) : i === 'next' ? current + 1 : i === 'previous' ? current - 1 : index(elements, i);

    if (finite) {
      return clamp(i, 0, length - 1);
    }

    i %= length;
    return i < 0 ? i + length : i;
  }

  function empty(element) {
    element = $(element);
    element.innerHTML = '';
    return element;
  }

  function html(parent, html) {
    parent = $(parent);
    return isUndefined(html) ? parent.innerHTML : append(parent.hasChildNodes() ? empty(parent) : parent, html);
  }

  function prepend(parent, element) {
    parent = $(parent);

    if (!parent.hasChildNodes()) {
      return append(parent, element);
    } else {
      return insertNodes(element, function (element) {
        return parent.insertBefore(element, parent.firstChild);
      });
    }
  }

  function append(parent, element) {
    parent = $(parent);
    return insertNodes(element, function (element) {
      return parent.appendChild(element);
    });
  }

  function before(ref, element) {
    ref = $(ref);
    return insertNodes(element, function (element) {
      return ref.parentNode.insertBefore(element, ref);
    });
  }

  function after(ref, element) {
    ref = $(ref);
    return insertNodes(element, function (element) {
      return ref.nextSibling ? before(ref.nextSibling, element) : append(ref.parentNode, element);
    });
  }

  function insertNodes(element, fn) {
    element = isString(element) ? fragment(element) : element;
    return element ? 'length' in element ? toNodes(element).map(fn) : fn(element) : null;
  }

  function _remove(element) {
    toNodes(element).map(function (element) {
      return element.parentNode && element.parentNode.removeChild(element);
    });
  }

  function wrapAll(element, structure) {
    structure = toNode(before(element, structure));

    while (structure.firstChild) {
      structure = structure.firstChild;
    }

    append(structure, element);
    return structure;
  }

  function wrapInner(element, structure) {
    return toNodes(toNodes(element).map(function (element) {
      return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure);
    }));
  }

  function unwrap(element) {
    toNodes(element).map(parent).filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (parent) {
      before(parent, parent.childNodes);

      _remove(parent);
    });
  }

  var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
  var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

  function fragment(html) {
    var matches = singleTagRe.exec(html);

    if (matches) {
      return document.createElement(matches[1]);
    }

    var container = document.createElement('div');

    if (fragmentRe.test(html)) {
      container.insertAdjacentHTML('beforeend', html.trim());
    } else {
      container.textContent = html;
    }

    return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;
  }

  function apply(node, fn) {
    if (!isElement(node)) {
      return;
    }

    fn(node);
    node = node.firstElementChild;

    while (node) {
      var next = node.nextElementSibling;
      apply(node, fn);
      node = next;
    }
  }

  function $(selector, context) {
    return !isString(selector) ? toNode(selector) : isHtml(selector) ? toNode(fragment(selector)) : find(selector, context);
  }

  function $$(selector, context) {
    return !isString(selector) ? toNodes(selector) : isHtml(selector) ? toNodes(fragment(selector)) : findAll(selector, context);
  }

  function isHtml(str) {
    return str[0] === '<' || str.match(/^\s*</);
  }

  function addClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    apply$1(element, args, 'add');
  }

  function removeClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    apply$1(element, args, 'remove');
  }

  function removeClasses(element, cls) {
    attr(element, 'class', function (value) {
      return (value || '').replace(new RegExp("\\b" + cls + "\\b", 'g'), '');
    });
  }

  function replaceClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    args[0] && removeClass(element, args[0]);
    args[1] && addClass(element, args[1]);
  }

  function hasClass(element, cls) {
    return cls && toNodes(element).some(function (element) {
      return element.classList.contains(cls.split(' ')[0]);
    });
  }

  function toggleClass(element) {
    var args = [],
        len = arguments.length - 1;

    while (len-- > 0) {
      args[len] = arguments[len + 1];
    }

    if (!args.length) {
      return;
    }

    args = getArgs$1(args);
    var force = !isString(last(args)) ? args.pop() : []; // in iOS 9.3 force === undefined evaluates to false

    args = args.filter(Boolean);
    toNodes(element).forEach(function (ref) {
      var classList = ref.classList;

      for (var i = 0; i < args.length; i++) {
        supports.Force ? classList.toggle.apply(classList, [args[i]].concat(force)) : classList[(!isUndefined(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]);
      }
    });
  }

  function apply$1(element, args, fn) {
    args = getArgs$1(args).filter(Boolean);
    args.length && toNodes(element).forEach(function (ref) {
      var classList = ref.classList;
      supports.Multiple ? classList[fn].apply(classList, args) : args.forEach(function (cls) {
        return classList[fn](cls);
      });
    });
  }

  function getArgs$1(args) {
    return args.reduce(function (args, arg) {
      return args.concat.call(args, isString(arg) && includes(arg, ' ') ? arg.trim().split(' ') : arg);
    }, []);
  } // IE 11


  var supports = {
    get Multiple() {
      return this.get('_multiple');
    },

    get Force() {
      return this.get('_force');
    },

    get: function get(key) {
      if (!hasOwn(this, key)) {
        var ref = document.createElement('_');
        var classList = ref.classList;
        classList.add('a', 'b');
        classList.toggle('c', false);
        this._multiple = classList.contains('b');
        this._force = !classList.contains('c');
      }

      return this[key];
    }
  };
  var cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'stroke-dasharray': true,
    'stroke-dashoffset': true,
    'widows': true,
    'z-index': true,
    'zoom': true
  };

  function css(element, property, value) {
    return toNodes(element).map(function (element) {
      if (isString(property)) {
        property = propName(property);

        if (isUndefined(value)) {
          return getStyle(element, property);
        } else if (!value && !isNumber(value)) {
          element.style.removeProperty(property);
        } else {
          element.style[property] = isNumeric(value) && !cssNumber[property] ? value + "px" : value;
        }
      } else if (isArray(property)) {
        var styles = getStyles(element);
        return property.reduce(function (props, property) {
          props[property] = styles[propName(property)];
          return props;
        }, {});
      } else if (isObject(property)) {
        each(property, function (value, property) {
          return css(element, property, value);
        });
      }

      return element;
    })[0];
  }

  function getStyles(element, pseudoElt) {
    element = toNode(element);
    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
  }

  function getStyle(element, property, pseudoElt) {
    return getStyles(element, pseudoElt)[property];
  }

  var vars = {};

  function getCssVar(name) {
    var docEl = document.documentElement;

    if (!isIE) {
      return getStyles(docEl).getPropertyValue("--uk-" + name);
    }

    if (!(name in vars)) {
      /* usage in css: .uk-name:before { content:"xyz" } */
      var element = append(docEl, document.createElement('div'));
      addClass(element, "uk-" + name);
      vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');

      _remove(element);
    }

    return vars[name];
  }

  var cssProps = {};

  function propName(name) {
    var ret = cssProps[name];

    if (!ret) {
      ret = cssProps[name] = vendorPropName(name) || name;
    }

    return ret;
  }

  var cssPrefixes = ['webkit', 'moz', 'ms'];

  function vendorPropName(name) {
    name = hyphenate(name);
    var ref = document.documentElement;
    var style = ref.style;

    if (name in style) {
      return name;
    }

    var i = cssPrefixes.length,
        prefixedName;

    while (i--) {
      prefixedName = "-" + cssPrefixes[i] + "-" + name;

      if (prefixedName in style) {
        return prefixedName;
      }
    }
  }

  function transition(element, props, duration, timing) {
    if (duration === void 0) duration = 400;
    if (timing === void 0) timing = 'linear';
    return Promise.all(toNodes(element).map(function (element) {
      return new Promise(function (resolve, reject) {
        for (var name in props) {
          var value = css(element, name);

          if (value === '') {
            css(element, name, value);
          }
        }

        var timer = setTimeout(function () {
          return trigger(element, 'transitionend');
        }, duration);
        once(element, 'transitionend transitioncanceled', function (ref) {
          var type = ref.type;
          clearTimeout(timer);
          removeClass(element, 'uk-transition');
          css(element, {
            transitionProperty: '',
            transitionDuration: '',
            transitionTimingFunction: ''
          });
          type === 'transitioncanceled' ? reject() : resolve();
        }, {
          self: true
        });
        addClass(element, 'uk-transition');
        css(element, assign({
          transitionProperty: Object.keys(props).map(propName).join(','),
          transitionDuration: duration + "ms",
          transitionTimingFunction: timing
        }, props));
      });
    }));
  }

  var Transition = {
    start: transition,
    stop: function stop(element) {
      trigger(element, 'transitionend');
      return Promise.resolve();
    },
    cancel: function cancel(element) {
      trigger(element, 'transitioncanceled');
    },
    inProgress: function inProgress(element) {
      return hasClass(element, 'uk-transition');
    }
  };
  var animationPrefix = 'uk-animation-';

  function animate(element, animation, duration, origin, out) {
    if (duration === void 0) duration = 200;
    return Promise.all(toNodes(element).map(function (element) {
      return new Promise(function (resolve, reject) {
        trigger(element, 'animationcancel');
        var timer = setTimeout(function () {
          return trigger(element, 'animationend');
        }, duration);
        once(element, 'animationend animationcancel', function (ref) {
          var type = ref.type;
          clearTimeout(timer);
          type === 'animationcancel' ? reject() : resolve();
          css(element, 'animationDuration', '');
          removeClasses(element, animationPrefix + "\\S*");
        }, {
          self: true
        });
        css(element, 'animationDuration', duration + "ms");
        addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

        if (startsWith(animation, animationPrefix)) {
          addClass(element, origin && "uk-transform-origin-" + origin, out && animationPrefix + "reverse");
        }
      });
    }));
  }

  var _inProgress = new RegExp(animationPrefix + "(enter|leave)");

  var Animation = {
    "in": animate,
    out: function out(element, animation, duration, origin) {
      return animate(element, animation, duration, origin, true);
    },
    inProgress: function inProgress(element) {
      return _inProgress.test(attr(element, 'class'));
    },
    cancel: function cancel(element) {
      trigger(element, 'animationcancel');
    }
  };
  var dirs = {
    width: ['x', 'left', 'right'],
    height: ['y', 'top', 'bottom']
  };

  function _positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {
    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);
    var flipped = {
      element: elAttach,
      target: targetAttach
    };

    if (!element || !target) {
      return flipped;
    }

    var dim = getDimensions(element);
    var targetDim = getDimensions(target);
    var position = targetDim;
    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);
    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);
    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];
    position.left += elOffset['x'];
    position.top += elOffset['y'];

    if (flip) {
      var boundaries = [getDimensions(toWindow(element))];

      if (boundary) {
        boundaries.unshift(getDimensions(boundary));
      }

      each(dirs, function (ref, prop) {
        var dir = ref[0];
        var align = ref[1];
        var alignFlip = ref[2];

        if (!(flip === true || includes(flip, dir))) {
          return;
        }

        boundaries.some(function (boundary) {
          var elemOffset = elAttach[dir] === align ? -dim[prop] : elAttach[dir] === alignFlip ? dim[prop] : 0;
          var targetOffset = targetAttach[dir] === align ? targetDim[prop] : targetAttach[dir] === alignFlip ? -targetDim[prop] : 0;

          if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {
            var centerOffset = dim[prop] / 2;
            var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;
            return elAttach[dir] === 'center' && (apply(centerOffset, centerTargetOffset) || apply(-centerOffset, -centerTargetOffset)) || apply(elemOffset, targetOffset);
          }

          function apply(elemOffset, targetOffset) {
            var newVal = (position[align] + elemOffset + targetOffset - elOffset[dir] * 2).toFixed(4);

            if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
              position[align] = newVal;
              ['element', 'target'].forEach(function (el) {
                flipped[el][dir] = !elemOffset ? flipped[el][dir] : flipped[el][dir] === dirs[prop][1] ? dirs[prop][2] : dirs[prop][1];
              });
              return true;
            }
          }
        });
      });
    }

    offset(element, position);
    return flipped;
  }

  function offset(element, coordinates) {
    if (!coordinates) {
      return getDimensions(element);
    }

    var currentOffset = offset(element);
    var pos = css(element, 'position');
    ['left', 'top'].forEach(function (prop) {
      if (prop in coordinates) {
        var value = css(element, prop);
        css(element, prop, coordinates[prop] - currentOffset[prop] + toFloat(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value));
      }
    });
  }

  function getDimensions(element) {
    if (!element) {
      return {};
    }

    var ref = toWindow(element);
    var top = ref.pageYOffset;
    var left = ref.pageXOffset;

    if (isWindow(element)) {
      var height = element.innerHeight;
      var width = element.innerWidth;
      return {
        top: top,
        left: left,
        height: height,
        width: width,
        bottom: top + height,
        right: left + width
      };
    }

    var style, hidden;

    if (!isVisible(element) && css(element, 'display') === 'none') {
      style = attr(element, 'style');
      hidden = attr(element, 'hidden');
      attr(element, {
        style: (style || '') + ";display:block !important;",
        hidden: null
      });
    }

    element = toNode(element);
    var rect = element.getBoundingClientRect();

    if (!isUndefined(style)) {
      attr(element, {
        style: style,
        hidden: hidden
      });
    }

    return {
      height: rect.height,
      width: rect.width,
      top: rect.top + top,
      left: rect.left + left,
      bottom: rect.bottom + top,
      right: rect.right + left
    };
  }

  function position(element, parent) {
    parent = parent || toNode(element).offsetParent || toWindow(element).document.documentElement;
    var elementOffset = offset(element);
    var parentOffset = offset(parent);
    return {
      top: elementOffset.top - parentOffset.top - toFloat(css(parent, 'borderTopWidth')),
      left: elementOffset.left - parentOffset.left - toFloat(css(parent, 'borderLeftWidth'))
    };
  }

  function offsetPosition(element) {
    var offset = [0, 0];
    element = toNode(element);

    do {
      offset[0] += element.offsetTop;
      offset[1] += element.offsetLeft;

      if (css(element, 'position') === 'fixed') {
        var win = toWindow(element);
        offset[0] += win.pageYOffset;
        offset[1] += win.pageXOffset;
        return offset;
      }
    } while (element = element.offsetParent);

    return offset;
  }

  var height = dimension('height');
  var width = dimension('width');

  function dimension(prop) {
    var propName = ucfirst(prop);
    return function (element, value) {
      if (isUndefined(value)) {
        if (isWindow(element)) {
          return element["inner" + propName];
        }

        if (isDocument(element)) {
          var doc = element.documentElement;
          return Math.max(doc["offset" + propName], doc["scroll" + propName]);
        }

        element = toNode(element);
        value = css(element, prop);
        value = value === 'auto' ? element["offset" + propName] : toFloat(value) || 0;
        return value - boxModelAdjust(element, prop);
      } else {
        css(element, prop, !value && value !== 0 ? '' : +value + boxModelAdjust(element, prop) + 'px');
      }
    };
  }

  function boxModelAdjust(element, prop, sizing) {
    if (sizing === void 0) sizing = 'border-box';
    return css(element, 'boxSizing') === sizing ? dirs[prop].slice(1).map(ucfirst).reduce(function (value, prop) {
      return value + toFloat(css(element, "padding" + prop)) + toFloat(css(element, "border" + prop + "Width"));
    }, 0) : 0;
  }

  function moveTo(position, attach, dim, factor) {
    each(dirs, function (ref, prop) {
      var dir = ref[0];
      var align = ref[1];
      var alignFlip = ref[2];

      if (attach[dir] === alignFlip) {
        position[align] += dim[prop] * factor;
      } else if (attach[dir] === 'center') {
        position[align] += dim[prop] * factor / 2;
      }
    });
  }

  function getPos(pos) {
    var x = /left|center|right/;
    var y = /top|center|bottom/;
    pos = (pos || '').split(' ');

    if (pos.length === 1) {
      pos = x.test(pos[0]) ? pos.concat('center') : y.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
    }

    return {
      x: x.test(pos[0]) ? pos[0] : 'center',
      y: y.test(pos[1]) ? pos[1] : 'center'
    };
  }

  function getOffsets(offsets, width, height) {
    var ref = (offsets || '').split(' ');
    var x = ref[0];
    var y = ref[1];
    return {
      x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
      y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
    };
  }

  function flipPosition(pos) {
    switch (pos) {
      case 'left':
        return 'right';

      case 'right':
        return 'left';

      case 'top':
        return 'bottom';

      case 'bottom':
        return 'top';

      default:
        return pos;
    }
  }

  function toPx(value, property, element) {
    if (property === void 0) property = 'width';
    if (element === void 0) element = window;
    return isNumeric(value) ? +value : endsWith(value, 'vh') ? percent(height(toWindow(element)), value) : endsWith(value, 'vw') ? percent(width(toWindow(element)), value) : endsWith(value, '%') ? percent(getDimensions(element)[property], value) : toFloat(value);
  }

  function percent(base, value) {
    return base * toFloat(value) / 100;
  }
  /*
      Based on:
      Copyright (c) 2016 Wilson Page wilsonpage@me.com
      https://github.com/wilsonpage/fastdom
  */


  var fastdom = {
    reads: [],
    writes: [],
    read: function read(task) {
      this.reads.push(task);
      scheduleFlush();
      return task;
    },
    write: function write(task) {
      this.writes.push(task);
      scheduleFlush();
      return task;
    },
    clear: function clear(task) {
      return remove$1(this.reads, task) || remove$1(this.writes, task);
    },
    flush: flush
  };

  function flush(recursion) {
    if (recursion === void 0) recursion = 1;
    runTasks(fastdom.reads);
    runTasks(fastdom.writes.splice(0, fastdom.writes.length));
    fastdom.scheduled = false;

    if (fastdom.reads.length || fastdom.writes.length) {
      scheduleFlush(recursion + 1);
    }
  }

  var RECURSION_LIMIT = 5;

  function scheduleFlush(recursion) {
    if (!fastdom.scheduled) {
      fastdom.scheduled = true;

      if (recursion > RECURSION_LIMIT) {
        throw new Error('Maximum recursion limit reached.');
      } else if (recursion) {
        Promise.resolve().then(function () {
          return flush(recursion);
        });
      } else {
        requestAnimationFrame(function () {
          return flush();
        });
      }
    }
  }

  function runTasks(tasks) {
    var task;

    while (task = tasks.shift()) {
      task();
    }
  }

  function remove$1(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
  }

  function MouseTracker() {}

  MouseTracker.prototype = {
    positions: [],
    init: function init() {
      var this$1 = this;
      this.positions = [];
      var position;
      this.unbind = on(document, 'mousemove', function (e) {
        return position = getEventPos(e);
      });
      this.interval = setInterval(function () {
        if (!position) {
          return;
        }

        this$1.positions.push(position);

        if (this$1.positions.length > 5) {
          this$1.positions.shift();
        }
      }, 50);
    },
    cancel: function cancel() {
      this.unbind && this.unbind();
      this.interval && clearInterval(this.interval);
    },
    movesTo: function movesTo(target) {
      if (this.positions.length < 2) {
        return false;
      }

      var p = target.getBoundingClientRect();
      var left = p.left;
      var right = p.right;
      var top = p.top;
      var bottom = p.bottom;
      var ref = this.positions;
      var prevPosition = ref[0];
      var position = last(this.positions);
      var path = [prevPosition, position];

      if (pointInRect(position, p)) {
        return false;
      }

      var diagonals = [[{
        x: left,
        y: top
      }, {
        x: right,
        y: bottom
      }], [{
        x: left,
        y: bottom
      }, {
        x: right,
        y: top
      }]];
      return diagonals.some(function (diagonal) {
        var intersection = intersect(path, diagonal);
        return intersection && pointInRect(intersection, p);
      });
    }
  }; // Inspired by http://paulbourke.net/geometry/pointlineplane/

  function intersect(ref, ref$1) {
    var ref_0 = ref[0];
    var x1 = ref_0.x;
    var y1 = ref_0.y;
    var ref_1 = ref[1];
    var x2 = ref_1.x;
    var y2 = ref_1.y;
    var ref$1_0 = ref$1[0];
    var x3 = ref$1_0.x;
    var y3 = ref$1_0.y;
    var ref$1_1 = ref$1[1];
    var x4 = ref$1_1.x;
    var y4 = ref$1_1.y;
    var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1); // Lines are parallel

    if (denominator === 0) {
      return false;
    }

    var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

    if (ua < 0) {
      return false;
    } // Return an object with the x and y coordinates of the intersection


    return {
      x: x1 + ua * (x2 - x1),
      y: y1 + ua * (y2 - y1)
    };
  }

  var strats = {};
  strats.events = strats.created = strats.beforeConnect = strats.connected = strats.beforeDisconnect = strats.disconnected = strats.destroy = concatStrat; // args strategy

  strats.args = function (parentVal, childVal) {
    return childVal !== false && concatStrat(childVal || parentVal);
  }; // update strategy


  strats.update = function (parentVal, childVal) {
    return sortBy(concatStrat(parentVal, isFunction(childVal) ? {
      read: childVal
    } : childVal), 'order');
  }; // property strategy


  strats.props = function (parentVal, childVal) {
    if (isArray(childVal)) {
      childVal = childVal.reduce(function (value, key) {
        value[key] = String;
        return value;
      }, {});
    }

    return strats.methods(parentVal, childVal);
  }; // extend strategy


  strats.computed = strats.methods = function (parentVal, childVal) {
    return childVal ? parentVal ? assign({}, parentVal, childVal) : childVal : parentVal;
  }; // data strategy


  strats.data = function (parentVal, childVal, vm) {
    if (!vm) {
      if (!childVal) {
        return parentVal;
      }

      if (!parentVal) {
        return childVal;
      }

      return function (vm) {
        return mergeFnData(parentVal, childVal, vm);
      };
    }

    return mergeFnData(parentVal, childVal, vm);
  };

  function mergeFnData(parentVal, childVal, vm) {
    return strats.computed(isFunction(parentVal) ? parentVal.call(vm, vm) : parentVal, isFunction(childVal) ? childVal.call(vm, vm) : childVal);
  } // concat strategy


  function concatStrat(parentVal, childVal) {
    parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;
    return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
  } // default strategy


  function defaultStrat(parentVal, childVal) {
    return isUndefined(childVal) ? parentVal : childVal;
  }

  function mergeOptions(parent, child, vm) {
    var options = {};

    if (isFunction(child)) {
      child = child.options;
    }

    if (child["extends"]) {
      parent = mergeOptions(parent, child["extends"], vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }

    for (var key in parent) {
      mergeKey(key);
    }

    for (var key$1 in child) {
      if (!hasOwn(parent, key$1)) {
        mergeKey(key$1);
      }
    }

    function mergeKey(key) {
      options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
    }

    return options;
  }

  function parseOptions(options, args) {
    var obj;
    if (args === void 0) args = [];

    try {
      return !options ? {} : startsWith(options, '{') ? JSON.parse(options) : args.length && !includes(options, ':') ? (obj = {}, obj[args[0]] = options, obj) : options.split(';').reduce(function (options, option) {
        var ref = option.split(/:(.*)/);
        var key = ref[0];
        var value = ref[1];

        if (key && !isUndefined(value)) {
          options[key.trim()] = value.trim();
        }

        return options;
      }, {});
    } catch (e) {
      return {};
    }
  }

  var id = 0;

  var Player = function Player(el) {
    this.id = ++id;
    this.el = toNode(el);
  };

  Player.prototype.isVideo = function () {
    return this.isYoutube() || this.isVimeo() || this.isHTML5();
  };

  Player.prototype.isHTML5 = function () {
    return this.el.tagName === 'VIDEO';
  };

  Player.prototype.isIFrame = function () {
    return this.el.tagName === 'IFRAME';
  };

  Player.prototype.isYoutube = function () {
    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
  };

  Player.prototype.isVimeo = function () {
    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
  };

  Player.prototype.enableApi = function () {
    var this$1 = this;

    if (this.ready) {
      return this.ready;
    }

    var youtube = this.isYoutube();
    var vimeo = this.isVimeo();
    var poller;

    if (youtube || vimeo) {
      return this.ready = new Promise(function (resolve) {
        once(this$1.el, 'load', function () {
          if (youtube) {
            var listener = function listener() {
              return post(this$1.el, {
                event: 'listening',
                id: this$1.id
              });
            };

            poller = setInterval(listener, 100);
            listener();
          }
        });
        listen(function (data) {
          return youtube && data.id === this$1.id && data.event === 'onReady' || vimeo && Number(data.player_id) === this$1.id;
        }).then(function () {
          resolve();
          poller && clearInterval(poller);
        });
        attr(this$1.el, 'src', "" + this$1.el.src + (includes(this$1.el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : "api=1&player_id=" + this$1.id));
      });
    }

    return Promise.resolve();
  };

  Player.prototype.play = function () {
    var this$1 = this;

    if (!this.isVideo()) {
      return;
    }

    if (this.isIFrame()) {
      this.enableApi().then(function () {
        return post(this$1.el, {
          func: 'playVideo',
          method: 'play'
        });
      });
    } else if (this.isHTML5()) {
      try {
        var promise = this.el.play();

        if (promise) {
          promise["catch"](noop);
        }
      } catch (e) {}
    }
  };

  Player.prototype.pause = function () {
    var this$1 = this;

    if (!this.isVideo()) {
      return;
    }

    if (this.isIFrame()) {
      this.enableApi().then(function () {
        return post(this$1.el, {
          func: 'pauseVideo',
          method: 'pause'
        });
      });
    } else if (this.isHTML5()) {
      this.el.pause();
    }
  };

  Player.prototype.mute = function () {
    var this$1 = this;

    if (!this.isVideo()) {
      return;
    }

    if (this.isIFrame()) {
      this.enableApi().then(function () {
        return post(this$1.el, {
          func: 'mute',
          method: 'setVolume',
          value: 0
        });
      });
    } else if (this.isHTML5()) {
      this.el.muted = true;
      attr(this.el, 'muted', '');
    }
  };

  function post(el, cmd) {
    try {
      el.contentWindow.postMessage(JSON.stringify(assign({
        event: 'command'
      }, cmd)), '*');
    } catch (e) {}
  }

  function listen(cb) {
    return new Promise(function (resolve) {
      return once(window, 'message', function (_, data) {
        return resolve(data);
      }, false, function (ref) {
        var data = ref.data;

        if (!data || !isString(data)) {
          return;
        }

        try {
          data = JSON.parse(data);
        } catch (e) {
          return;
        }

        return data && cb(data);
      });
    });
  }

  function isInView(element, offsetTop, offsetLeft) {
    if (offsetTop === void 0) offsetTop = 0;
    if (offsetLeft === void 0) offsetLeft = 0;

    if (!isVisible(element)) {
      return false;
    }

    var parents = overflowParents(element);
    return parents.every(function (parent, i) {
      var client = offset(parents[i + 1] || element);
      var ref = offset(getViewport(parent));
      var top = ref.top;
      var left = ref.left;
      var bottom = ref.bottom;
      var right = ref.right;
      return intersectRect(client, {
        top: top - offsetTop,
        left: left - offsetLeft,
        bottom: bottom + offsetTop,
        right: right + offsetLeft
      });
    });
  }

  function scrollTop(element, top) {
    if (isWindow(element) || isDocument(element)) {
      element = getScrollingElement(element);
    } else {
      element = toNode(element);
    }

    element.scrollTop = top;
  }

  function scrollIntoView(element, ref) {
    if (ref === void 0) ref = {};
    var offsetBy = ref.offset;
    if (offsetBy === void 0) offsetBy = 0;

    if (!isVisible(element)) {
      return;
    }

    var parents = overflowParents(element).concat(element);
    var promise = Promise.resolve();

    var loop = function loop(i) {
      promise = promise.then(function () {
        return new Promise(function (resolve) {
          var scrollElement = parents[i];
          var element = parents[i + 1];
          var scroll = scrollElement.scrollTop;
          var top = Math.ceil(position(element, getViewport(scrollElement)).top - offsetBy);
          var duration = getDuration(Math.abs(top));
          var start = Date.now();

          var step = function step() {
            var percent = ease(clamp((Date.now() - start) / duration));
            scrollTop(scrollElement, scroll + top * percent); // scroll more if we have not reached our destination

            if (percent !== 1) {
              requestAnimationFrame(step);
            } else {
              resolve();
            }
          };

          step();
        });
      });
    };

    for (var i = 0; i < parents.length - 1; i++) {
      loop(i);
    }

    return promise;

    function getDuration(dist) {
      return 40 * Math.pow(dist, .375);
    }

    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }
  }

  function scrolledOver(element, heightOffset) {
    if (heightOffset === void 0) heightOffset = 0;

    if (!isVisible(element)) {
      return 0;
    }

    var scrollElement = last(scrollParents(element));
    var scrollHeight = scrollElement.scrollHeight;
    var scrollTop = scrollElement.scrollTop;
    var viewport = getViewport(scrollElement);
    var viewportHeight = offset(viewport).height;
    var viewportTop = offsetPosition(element)[0] - scrollTop - offsetPosition(scrollElement)[0];
    var viewportDist = Math.min(viewportHeight, viewportTop + scrollTop);
    var top = viewportTop - viewportDist;
    var dist = Math.min(offset(element).height + heightOffset + viewportDist, scrollHeight - (viewportTop + scrollTop), scrollHeight - viewportHeight);
    return clamp(-1 * top / dist);
  }

  function scrollParents(element, overflowRe) {
    if (overflowRe === void 0) overflowRe = /auto|scroll/;
    var scrollEl = getScrollingElement(element);
    var scrollParents = parents(element).filter(function (parent) {
      return parent === scrollEl || overflowRe.test(css(parent, 'overflow')) && parent.scrollHeight > Math.round(offset(parent).height);
    }).reverse();
    return scrollParents.length ? scrollParents : [scrollEl];
  }

  function getViewport(scrollElement) {
    return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
  }

  function overflowParents(element) {
    return scrollParents(element, /auto|scroll|hidden/);
  }

  function getScrollingElement(element) {
    var ref = toWindow(element);
    var document = ref.document;
    return document.scrollingElement || document.documentElement;
  }

  var IntersectionObserver = inBrowser && window.IntersectionObserver || /*@__PURE__*/function () {
    function IntersectionObserverClass(callback, ref) {
      var this$1 = this;
      if (ref === void 0) ref = {};
      var rootMargin = ref.rootMargin;
      if (rootMargin === void 0) rootMargin = '0 0';
      this.targets = [];
      var ref$1 = (rootMargin || '0 0').split(' ').map(toFloat);
      var offsetTop = ref$1[0];
      var offsetLeft = ref$1[1];
      this.offsetTop = offsetTop;
      this.offsetLeft = offsetLeft;
      var pending;

      this.apply = function () {
        if (pending) {
          return;
        }

        pending = requestAnimationFrame(function () {
          return setTimeout(function () {
            var records = this$1.takeRecords();

            if (records.length) {
              callback(records, this$1);
            }

            pending = false;
          });
        });
      };

      this.off = on(window, 'scroll resize load', this.apply, {
        passive: true,
        capture: true
      });
    }

    IntersectionObserverClass.prototype.takeRecords = function () {
      var this$1 = this;
      return this.targets.filter(function (entry) {
        var inView = isInView(entry.target, this$1.offsetTop, this$1.offsetLeft);

        if (entry.isIntersecting === null || inView ^ entry.isIntersecting) {
          entry.isIntersecting = inView;
          return true;
        }
      });
    };

    IntersectionObserverClass.prototype.observe = function (target) {
      this.targets.push({
        target: target,
        isIntersecting: null
      });
      this.apply();
    };

    IntersectionObserverClass.prototype.disconnect = function () {
      this.targets = [];
      this.off();
    };

    return IntersectionObserverClass;
  }();

  var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    ajax: ajax,
    getImage: getImage,
    transition: transition,
    Transition: Transition,
    animate: animate,
    Animation: Animation,
    attr: attr,
    hasAttr: hasAttr,
    removeAttr: removeAttr,
    data: data,
    addClass: addClass,
    removeClass: removeClass,
    removeClasses: removeClasses,
    replaceClass: replaceClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    positionAt: _positionAt,
    offset: offset,
    position: position,
    offsetPosition: offsetPosition,
    height: height,
    width: width,
    boxModelAdjust: boxModelAdjust,
    flipPosition: flipPosition,
    toPx: toPx,
    ready: ready,
    index: index,
    getIndex: _getIndex,
    empty: empty,
    html: html,
    prepend: prepend,
    append: append,
    before: before,
    after: after,
    remove: _remove,
    wrapAll: wrapAll,
    wrapInner: wrapInner,
    unwrap: unwrap,
    fragment: fragment,
    apply: apply,
    $: $,
    $$: $$,
    inBrowser: inBrowser,
    isIE: isIE,
    isRtl: isRtl,
    hasTouch: hasTouch,
    pointerDown: pointerDown,
    pointerMove: pointerMove,
    pointerUp: pointerUp,
    pointerEnter: pointerEnter,
    pointerLeave: pointerLeave,
    pointerCancel: pointerCancel,
    on: on,
    off: off,
    once: once,
    trigger: trigger,
    createEvent: createEvent,
    toEventTargets: toEventTargets,
    isTouch: isTouch,
    getEventPos: getEventPos,
    fastdom: fastdom,
    isVoidElement: isVoidElement,
    isVisible: isVisible,
    selInput: selInput,
    isInput: isInput,
    filter: filter,
    within: within,
    parents: parents,
    children: _children,
    hasOwn: hasOwn,
    hyphenate: hyphenate,
    camelize: camelize,
    ucfirst: ucfirst,
    startsWith: startsWith,
    endsWith: endsWith,
    includes: includes,
    findIndex: findIndex,
    isArray: isArray,
    isFunction: isFunction,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isWindow: isWindow,
    isDocument: isDocument,
    isJQuery: isJQuery,
    isNode: isNode,
    isElement: isElement,
    isNodeCollection: isNodeCollection,
    isBoolean: isBoolean,
    isString: isString,
    isNumber: isNumber,
    isNumeric: isNumeric,
    isEmpty: isEmpty,
    isUndefined: isUndefined,
    toBoolean: toBoolean,
    toNumber: toNumber,
    toFloat: toFloat,
    toNode: toNode,
    toNodes: toNodes,
    toWindow: toWindow,
    toList: toList,
    toMs: toMs,
    isEqual: isEqual,
    swap: swap,
    assign: assign,
    last: last,
    each: each,
    sortBy: sortBy,
    uniqueBy: uniqueBy,
    clamp: clamp,
    noop: noop,
    intersectRect: intersectRect,
    pointInRect: pointInRect,
    Dimensions: Dimensions,
    MouseTracker: MouseTracker,
    mergeOptions: mergeOptions,
    parseOptions: parseOptions,
    Player: Player,
    Promise: Promise,
    Deferred: Deferred,
    IntersectionObserver: IntersectionObserver,
    query: query,
    queryAll: queryAll,
    find: find,
    findAll: findAll,
    matches: matches,
    closest: closest,
    parent: parent,
    escape: escape,
    css: css,
    getStyles: getStyles,
    getStyle: getStyle,
    getCssVar: getCssVar,
    propName: propName,
    isInView: isInView,
    scrollTop: scrollTop,
    scrollIntoView: scrollIntoView,
    scrolledOver: scrolledOver,
    scrollParents: scrollParents,
    getViewport: getViewport
  });

  function globalAPI(UIkit) {
    var DATA = UIkit.data;

    UIkit.use = function (plugin) {
      if (plugin.installed) {
        return;
      }

      plugin.call(null, this);
      plugin.installed = true;
      return this;
    };

    UIkit.mixin = function (mixin, component) {
      component = (isString(component) ? UIkit.component(component) : component) || this;
      component.options = mergeOptions(component.options, mixin);
    };

    UIkit.extend = function (options) {
      options = options || {};
      var Super = this;

      var Sub = function UIkitComponent(options) {
        this._init(options);
      };

      Sub.prototype = Object.create(Super.prototype);
      Sub.prototype.constructor = Sub;
      Sub.options = mergeOptions(Super.options, options);
      Sub["super"] = Super;
      Sub.extend = Super.extend;
      return Sub;
    };

    UIkit.update = function (element, e) {
      element = element ? toNode(element) : document.body;
      parents(element).reverse().forEach(function (element) {
        return update(element[DATA], e);
      });
      apply(element, function (element) {
        return update(element[DATA], e);
      });
    };

    var container;
    Object.defineProperty(UIkit, 'container', {
      get: function get() {
        return container || document.body;
      },
      set: function set(element) {
        container = $(element);
      }
    });

    function update(data, e) {
      if (!data) {
        return;
      }

      for (var name in data) {
        if (data[name]._connected) {
          data[name]._callUpdate(e);
        }
      }
    }
  }

  function hooksAPI(UIkit) {
    UIkit.prototype._callHook = function (hook) {
      var this$1 = this;
      var handlers = this.$options[hook];

      if (handlers) {
        handlers.forEach(function (handler) {
          return handler.call(this$1);
        });
      }
    };

    UIkit.prototype._callConnected = function () {
      if (this._connected) {
        return;
      }

      this._data = {};
      this._computeds = {};
      this._frames = {
        reads: {},
        writes: {}
      };

      this._initProps();

      this._callHook('beforeConnect');

      this._connected = true;

      this._initEvents();

      this._initObserver();

      this._callHook('connected');

      this._callUpdate();
    };

    UIkit.prototype._callDisconnected = function () {
      if (!this._connected) {
        return;
      }

      this._callHook('beforeDisconnect');

      if (this._observer) {
        this._observer.disconnect();

        this._observer = null;
      }

      this._unbindEvents();

      this._callHook('disconnected');

      this._connected = false;
    };

    UIkit.prototype._callUpdate = function (e) {
      var this$1 = this;
      if (e === void 0) e = 'update';
      var type = e.type || e;

      if (includes(['update', 'resize'], type)) {
        this._callWatches();
      }

      var updates = this.$options.update;
      var ref = this._frames;
      var reads = ref.reads;
      var writes = ref.writes;

      if (!updates) {
        return;
      }

      updates.forEach(function (ref, i) {
        var read = ref.read;
        var write = ref.write;
        var events = ref.events;

        if (type !== 'update' && !includes(events, type)) {
          return;
        }

        if (read && !includes(fastdom.reads, reads[i])) {
          reads[i] = fastdom.read(function () {
            var result = this$1._connected && read.call(this$1, this$1._data, type);

            if (result === false && write) {
              fastdom.clear(writes[i]);
            } else if (isPlainObject(result)) {
              assign(this$1._data, result);
            }
          });
        }

        if (write && !includes(fastdom.writes, writes[i])) {
          writes[i] = fastdom.write(function () {
            return this$1._connected && write.call(this$1, this$1._data, type);
          });
        }
      });
    };

    UIkit.prototype._callWatches = function () {
      var this$1 = this;
      var ref = this;
      var _frames = ref._frames;

      if (_frames._watch) {
        return;
      }

      var initital = !hasOwn(_frames, '_watch');
      _frames._watch = fastdom.read(function () {
        if (!this$1._connected) {
          return;
        }

        var ref = this$1;
        var computed = ref.$options.computed;
        var _computeds = ref._computeds;

        for (var key in computed) {
          var hasPrev = hasOwn(_computeds, key);
          var prev = _computeds[key];
          delete _computeds[key];
          var ref$1 = computed[key];
          var watch = ref$1.watch;
          var immediate = ref$1.immediate;

          if (watch && (initital && immediate || hasPrev && !isEqual(prev, this$1[key]))) {
            watch.call(this$1, this$1[key], prev);
          }
        }

        _frames._watch = null;
      });
    };
  }

  function stateAPI(UIkit) {
    var uid = 0;

    UIkit.prototype._init = function (options) {
      options = options || {};
      options.data = normalizeData(options, this.constructor.options);
      this.$options = mergeOptions(this.constructor.options, options, this);
      this.$el = null;
      this.$props = {};
      this._uid = uid++;

      this._initData();

      this._initMethods();

      this._initComputeds();

      this._callHook('created');

      if (options.el) {
        this.$mount(options.el);
      }
    };

    UIkit.prototype._initData = function () {
      var ref = this.$options;
      var data = ref.data;
      if (data === void 0) data = {};

      for (var key in data) {
        this.$props[key] = this[key] = data[key];
      }
    };

    UIkit.prototype._initMethods = function () {
      var ref = this.$options;
      var methods = ref.methods;

      if (methods) {
        for (var key in methods) {
          this[key] = methods[key].bind(this);
        }
      }
    };

    UIkit.prototype._initComputeds = function () {
      var ref = this.$options;
      var computed = ref.computed;
      this._computeds = {};

      if (computed) {
        for (var key in computed) {
          registerComputed(this, key, computed[key]);
        }
      }
    };

    UIkit.prototype._initProps = function (props) {
      var key;
      props = props || getProps(this.$options, this.$name);

      for (key in props) {
        if (!isUndefined(props[key])) {
          this.$props[key] = props[key];
        }
      }

      var exclude = [this.$options.computed, this.$options.methods];

      for (key in this.$props) {
        if (key in props && notIn(exclude, key)) {
          this[key] = this.$props[key];
        }
      }
    };

    UIkit.prototype._initEvents = function () {
      var this$1 = this;
      this._events = [];
      var ref = this.$options;
      var events = ref.events;

      if (events) {
        events.forEach(function (event) {
          if (!hasOwn(event, 'handler')) {
            for (var key in event) {
              registerEvent(this$1, event[key], key);
            }
          } else {
            registerEvent(this$1, event);
          }
        });
      }
    };

    UIkit.prototype._unbindEvents = function () {
      this._events.forEach(function (unbind) {
        return unbind();
      });

      delete this._events;
    };

    UIkit.prototype._initObserver = function () {
      var this$1 = this;
      var ref = this.$options;
      var attrs = ref.attrs;
      var props = ref.props;
      var el = ref.el;

      if (this._observer || !props || attrs === false) {
        return;
      }

      attrs = isArray(attrs) ? attrs : Object.keys(props);
      this._observer = new MutationObserver(function (records) {
        var data = getProps(this$1.$options, this$1.$name);

        if (records.some(function (ref) {
          var attributeName = ref.attributeName;
          var prop = attributeName.replace('data-', '');
          return (prop === this$1.$name ? attrs : [camelize(prop)]).some(function (prop) {
            return !isUndefined(data[prop]) && data[prop] !== this$1.$props[prop];
          });
        })) {
          this$1.$reset();
        }
      });
      var filter = attrs.map(function (key) {
        return hyphenate(key);
      }).concat(this.$name);

      this._observer.observe(el, {
        attributes: true,
        attributeFilter: filter.concat(filter.map(function (key) {
          return "data-" + key;
        }))
      });
    };

    function getProps(opts, name) {
      var data$1 = {};
      var args = opts.args;
      if (args === void 0) args = [];
      var props = opts.props;
      if (props === void 0) props = {};
      var el = opts.el;

      if (!props) {
        return data$1;
      }

      for (var key in props) {
        var prop = hyphenate(key);
        var value = data(el, prop);

        if (isUndefined(value)) {
          continue;
        }

        value = props[key] === Boolean && value === '' ? true : coerce(props[key], value);

        if (prop === 'target' && (!value || startsWith(value, '_'))) {
          continue;
        }

        data$1[key] = value;
      }

      var options = parseOptions(data(el, name), args);

      for (var key$1 in options) {
        var prop$1 = camelize(key$1);

        if (props[prop$1] !== undefined) {
          data$1[prop$1] = coerce(props[prop$1], options[key$1]);
        }
      }

      return data$1;
    }

    function registerComputed(component, key, cb) {
      Object.defineProperty(component, key, {
        enumerable: true,
        get: function get() {
          var _computeds = component._computeds;
          var $props = component.$props;
          var $el = component.$el;

          if (!hasOwn(_computeds, key)) {
            _computeds[key] = (cb.get || cb).call(component, $props, $el);
          }

          return _computeds[key];
        },
        set: function set(value) {
          var _computeds = component._computeds;
          _computeds[key] = cb.set ? cb.set.call(component, value) : value;

          if (isUndefined(_computeds[key])) {
            delete _computeds[key];
          }
        }
      });
    }

    function registerEvent(component, event, key) {
      if (!isPlainObject(event)) {
        event = {
          name: key,
          handler: event
        };
      }

      var name = event.name;
      var el = event.el;
      var handler = event.handler;
      var capture = event.capture;
      var passive = event.passive;
      var delegate = event.delegate;
      var filter = event.filter;
      var self = event.self;
      el = isFunction(el) ? el.call(component) : el || component.$el;

      if (isArray(el)) {
        el.forEach(function (el) {
          return registerEvent(component, assign({}, event, {
            el: el
          }), key);
        });
        return;
      }

      if (!el || filter && !filter.call(component)) {
        return;
      }

      component._events.push(on(el, name, !delegate ? null : isString(delegate) ? delegate : delegate.call(component), isString(handler) ? component[handler] : handler.bind(component), {
        passive: passive,
        capture: capture,
        self: self
      }));
    }

    function notIn(options, key) {
      return options.every(function (arr) {
        return !arr || !hasOwn(arr, key);
      });
    }

    function coerce(type, value) {
      if (type === Boolean) {
        return toBoolean(value);
      } else if (type === Number) {
        return toNumber(value);
      } else if (type === 'list') {
        return toList(value);
      }

      return type ? type(value) : value;
    }

    function normalizeData(ref, ref$1) {
      var data = ref.data;
      var el = ref.el;
      var args = ref$1.args;
      var props = ref$1.props;
      if (props === void 0) props = {};
      data = isArray(data) ? !isEmpty(args) ? data.slice(0, args.length).reduce(function (data, value, index) {
        if (isPlainObject(value)) {
          assign(data, value);
        } else {
          data[args[index]] = value;
        }

        return data;
      }, {}) : undefined : data;

      if (data) {
        for (var key in data) {
          if (isUndefined(data[key])) {
            delete data[key];
          } else {
            data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
          }
        }
      }

      return data;
    }
  }

  function instanceAPI(UIkit) {
    var DATA = UIkit.data;

    UIkit.prototype.$create = function (component, element, data) {
      return UIkit[component](element, data);
    };

    UIkit.prototype.$mount = function (el) {
      var ref = this.$options;
      var name = ref.name;

      if (!el[DATA]) {
        el[DATA] = {};
      }

      if (el[DATA][name]) {
        return;
      }

      el[DATA][name] = this;
      this.$el = this.$options.el = this.$options.el || el;

      if (within(el, document)) {
        this._callConnected();
      }
    };

    UIkit.prototype.$reset = function () {
      this._callDisconnected();

      this._callConnected();
    };

    UIkit.prototype.$destroy = function (removeEl) {
      if (removeEl === void 0) removeEl = false;
      var ref = this.$options;
      var el = ref.el;
      var name = ref.name;

      if (el) {
        this._callDisconnected();
      }

      this._callHook('destroy');

      if (!el || !el[DATA]) {
        return;
      }

      delete el[DATA][name];

      if (!isEmpty(el[DATA])) {
        delete el[DATA];
      }

      if (removeEl) {
        _remove(this.$el);
      }
    };

    UIkit.prototype.$emit = function (e) {
      this._callUpdate(e);
    };

    UIkit.prototype.$update = function (element, e) {
      if (element === void 0) element = this.$el;
      UIkit.update(element, e);
    };

    UIkit.prototype.$getComponent = UIkit.getComponent;
    var names = {};
    Object.defineProperties(UIkit.prototype, {
      $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),
      $name: {
        get: function get() {
          var ref = this.$options;
          var name = ref.name;

          if (!names[name]) {
            names[name] = UIkit.prefix + hyphenate(name);
          }

          return names[name];
        }
      }
    });
  }

  function componentAPI(UIkit) {
    var DATA = UIkit.data;
    var components = {};

    UIkit.component = function (name, options) {
      var id = hyphenate(name);
      name = camelize(id);

      if (!options) {
        if (isPlainObject(components[name])) {
          components[name] = UIkit.extend(components[name]);
        }

        return components[name];
      }

      UIkit[name] = function (element, data) {
        var i = arguments.length,
            argsArray = Array(i);

        while (i--) {
          argsArray[i] = arguments[i];
        }

        var component = UIkit.component(name);
        return component.options.functional ? new component({
          data: isPlainObject(element) ? element : [].concat(argsArray)
        }) : !element ? init(element) : $$(element).map(init)[0];

        function init(element) {
          var instance = UIkit.getComponent(element, name);

          if (instance) {
            if (!data) {
              return instance;
            } else {
              instance.$destroy();
            }
          }

          return new component({
            el: element,
            data: data
          });
        }
      };

      var opt = isPlainObject(options) ? assign({}, options) : options.options;
      opt.name = name;

      if (opt.install) {
        opt.install(UIkit, opt, name);
      }

      if (UIkit._initialized && !opt.functional) {
        fastdom.read(function () {
          return UIkit[name]("[uk-" + id + "],[data-uk-" + id + "]");
        });
      }

      return components[name] = isPlainObject(options) ? opt : options;
    };

    UIkit.getComponents = function (element) {
      return element && element[DATA] || {};
    };

    UIkit.getComponent = function (element, name) {
      return UIkit.getComponents(element)[name];
    };

    UIkit.connect = function (node) {
      if (node[DATA]) {
        for (var name in node[DATA]) {
          node[DATA][name]._callConnected();
        }
      }

      for (var i = 0; i < node.attributes.length; i++) {
        var name$1 = getComponentName(node.attributes[i].name);

        if (name$1 && name$1 in components) {
          UIkit[name$1](node);
        }
      }
    };

    UIkit.disconnect = function (node) {
      for (var name in node[DATA]) {
        node[DATA][name]._callDisconnected();
      }
    };
  }

  function getComponentName(attribute) {
    return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-') ? camelize(attribute.replace('data-uk-', '').replace('uk-', '')) : false;
  }

  var UIkit = function UIkit(options) {
    this._init(options);
  };

  UIkit.util = util;
  UIkit.data = '__uikit__';
  UIkit.prefix = 'uk-';
  UIkit.options = {};
  UIkit.version = '3.5.3';
  globalAPI(UIkit);
  hooksAPI(UIkit);
  stateAPI(UIkit);
  componentAPI(UIkit);
  instanceAPI(UIkit);

  function Core(UIkit) {
    inBrowser && ready(function () {
      UIkit.update();
      on(window, 'load resize', function () {
        return UIkit.update(null, 'resize');
      });
      on(document, 'loadedmetadata load', function (ref) {
        var target = ref.target;
        return UIkit.update(target, 'resize');
      }, true); // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)

      var pending;
      on(window, 'scroll', function (e) {
        if (pending) {
          return;
        }

        pending = true;
        fastdom.write(function () {
          return pending = false;
        });
        UIkit.update(null, e.type);
      }, {
        passive: true,
        capture: true
      });
      var started = 0;
      on(document, 'animationstart', function (ref) {
        var target = ref.target;

        if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
          started++;
          css(document.body, 'overflowX', 'hidden');
          setTimeout(function () {
            if (! --started) {
              css(document.body, 'overflowX', '');
            }
          }, toMs(css(target, 'animationDuration')) + 100);
        }
      }, true);
      var off;
      on(document, pointerDown, function (e) {
        off && off();

        if (!isTouch(e)) {
          return;
        } // Handle Swipe Gesture


        var pos = getEventPos(e);
        var target = 'tagName' in e.target ? e.target : e.target.parentNode;
        off = once(document, pointerUp + " " + pointerCancel, function (e) {
          var ref = getEventPos(e);
          var x = ref.x;
          var y = ref.y; // swipe

          if (target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {
            setTimeout(function () {
              trigger(target, 'swipe');
              trigger(target, "swipe" + swipeDirection(pos.x, pos.y, x, y));
            });
          }
        });
      }, {
        passive: true
      });
    });
  }

  function swipeDirection(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
  }

  function boot(UIkit) {
    var connect = UIkit.connect;
    var disconnect = UIkit.disconnect;

    if (!inBrowser || !window.MutationObserver) {
      return;
    }

    fastdom.read(init);

    function init() {
      if (document.body) {
        apply(document.body, connect);
      }

      new MutationObserver(function (mutations) {
        var updates = [];
        mutations.forEach(function (mutation) {
          return applyMutation(mutation, updates);
        });
        updates.forEach(function (el) {
          return UIkit.update(el);
        });
      }).observe(document, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true
      });
      UIkit._initialized = true;
    }

    function applyMutation(mutation, updates) {
      var target = mutation.target;
      var type = mutation.type;
      var update = type !== 'attributes' ? applyChildList(mutation) : applyAttribute(mutation);

      if (update && !updates.some(function (element) {
        return element.contains(target);
      })) {
        updates.push(target.contains ? target : target.parentNode); // IE 11 text node does not implement contains
      }
    }

    function applyAttribute(ref) {
      var target = ref.target;
      var attributeName = ref.attributeName;

      if (attributeName === 'href') {
        return true;
      }

      var name = getComponentName(attributeName);

      if (!name || !(name in UIkit)) {
        return;
      }

      if (hasAttr(target, attributeName)) {
        UIkit[name](target);
        return true;
      }

      var component = UIkit.getComponent(target, name);

      if (component) {
        component.$destroy();
        return true;
      }
    }

    function applyChildList(ref) {
      var addedNodes = ref.addedNodes;
      var removedNodes = ref.removedNodes;

      for (var i = 0; i < addedNodes.length; i++) {
        apply(addedNodes[i], connect);
      }

      for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
        apply(removedNodes[i$1], disconnect);
      }

      return true;
    }
  }

  var Class = {
    connected: function connected() {
      !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
    }
  };
  var Togglable = {
    props: {
      cls: Boolean,
      animation: 'list',
      duration: Number,
      origin: String,
      transition: String
    },
    data: {
      cls: false,
      animation: [false],
      duration: 200,
      origin: false,
      transition: 'linear',
      initProps: {
        overflow: '',
        height: '',
        paddingTop: '',
        paddingBottom: '',
        marginTop: '',
        marginBottom: ''
      },
      hideProps: {
        overflow: 'hidden',
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    computed: {
      hasAnimation: function hasAnimation(ref) {
        var animation = ref.animation;
        return !!animation[0];
      },
      hasTransition: function hasTransition(ref) {
        var animation = ref.animation;
        return this.hasAnimation && animation[0] === true;
      }
    },
    methods: {
      toggleElement: function toggleElement(targets, show, animate) {
        var this$1 = this;
        return Promise.all(toNodes(targets).map(function (el) {
          return new Promise(function (resolve) {
            return this$1._toggleElement(el, show, animate).then(resolve, noop);
          });
        }));
      },
      isToggled: function isToggled(el) {
        var nodes = toNodes(el || this.$el);
        return this.cls ? hasClass(nodes, this.cls.split(' ')[0]) : !hasAttr(nodes, 'hidden');
      },
      updateAria: function updateAria(el) {
        if (this.cls === false) {
          attr(el, 'aria-hidden', !this.isToggled(el));
        }
      },
      _toggleElement: function _toggleElement(el, show, animate) {
        var this$1 = this;
        show = isBoolean(show) ? show : Animation.inProgress(el) ? hasClass(el, 'uk-animation-leave') : Transition.inProgress(el) ? el.style.height === '0px' : !this.isToggled(el);

        if (!trigger(el, "before" + (show ? 'show' : 'hide'), [this])) {
          return Promise.reject();
        }

        var promise = (isFunction(animate) ? animate : animate === false || !this.hasAnimation ? this._toggle : this.hasTransition ? toggleHeight(this) : toggleAnimation(this))(el, show);
        trigger(el, show ? 'show' : 'hide', [this]);

        var _final = function _final() {
          trigger(el, show ? 'shown' : 'hidden', [this$1]);
          this$1.$update(el);
        };

        return (promise || Promise.resolve()).then(_final);
      },
      _toggle: function _toggle(el, toggled) {
        if (!el) {
          return;
        }

        toggled = Boolean(toggled);
        var changed;

        if (this.cls) {
          changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
          changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
        } else {
          changed = toggled === hasAttr(el, 'hidden');
          changed && attr(el, 'hidden', !toggled ? '' : null);
        }

        $$('[autofocus]', el).some(function (el) {
          return isVisible(el) ? el.focus() || true : el.blur();
        });
        this.updateAria(el);

        if (changed) {
          trigger(el, 'toggled', [this]);
          this.$update(el);
        }
      }
    }
  };

  function toggleHeight(ref) {
    var isToggled = ref.isToggled;
    var duration = ref.duration;
    var initProps = ref.initProps;
    var hideProps = ref.hideProps;
    var transition = ref.transition;
    var _toggle = ref._toggle;
    return function (el, show) {
      var inProgress = Transition.inProgress(el);
      var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
      var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;
      Transition.cancel(el);

      if (!isToggled(el)) {
        _toggle(el, true);
      }

      height(el, ''); // Update child components first

      fastdom.flush();
      var endHeight = height(el) + (inProgress ? 0 : inner);
      height(el, currentHeight);
      return (show ? Transition.start(el, assign({}, initProps, {
        overflow: 'hidden',
        height: endHeight
      }), Math.round(duration * (1 - currentHeight / endHeight)), transition) : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () {
        return _toggle(el, false);
      })).then(function () {
        return css(el, initProps);
      });
    };
  }

  function toggleAnimation(cmp) {
    return function (el, show) {
      Animation.cancel(el);
      var animation = cmp.animation;
      var duration = cmp.duration;
      var _toggle = cmp._toggle;

      if (show) {
        _toggle(el, true);

        return Animation["in"](el, animation[0], duration, cmp.origin);
      }

      return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function () {
        return _toggle(el, false);
      });
    };
  }

  var Accordion = {
    mixins: [Class, Togglable],
    props: {
      targets: String,
      active: null,
      collapsible: Boolean,
      multiple: Boolean,
      toggle: String,
      content: String,
      transition: String,
      offset: Number
    },
    data: {
      targets: '> *',
      active: false,
      animation: [true],
      collapsible: true,
      multiple: false,
      clsOpen: 'uk-open',
      toggle: '> .uk-accordion-title',
      content: '> .uk-accordion-content',
      transition: 'ease',
      offset: 0
    },
    computed: {
      items: {
        get: function get(ref, $el) {
          var targets = ref.targets;
          return $$(targets, $el);
        },
        watch: function watch(items, prev) {
          var this$1 = this;
          items.forEach(function (el) {
            return hide($(this$1.content, el), !hasClass(el, this$1.clsOpen));
          });

          if (prev || hasClass(items, this.clsOpen)) {
            return;
          }

          var active = this.active !== false && items[Number(this.active)] || !this.collapsible && items[0];

          if (active) {
            this.toggle(active, false);
          }
        },
        immediate: true
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.targets + " " + this.$props.toggle;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.toggle(index($$(this.targets + " " + this.$props.toggle, this.$el), e.current));
      }
    }],
    methods: {
      toggle: function toggle(item, animate) {
        var this$1 = this;
        var items = [this.items[_getIndex(item, this.items)]];
        var activeItems = filter(this.items, "." + this.clsOpen);

        if (!this.multiple && !includes(activeItems, items[0])) {
          items = items.concat(activeItems);
        }

        if (!this.collapsible && !filter(items, ":not(." + this.clsOpen + ")").length) {
          return;
        }

        items.forEach(function (el) {
          return this$1.toggleElement(el, !hasClass(el, this$1.clsOpen), function (el, show) {
            toggleClass(el, this$1.clsOpen, show);
            var content = $("" + (el._wrapper ? '> * ' : '') + this$1.content, el);

            if (animate === false || !this$1.hasTransition) {
              hide(content, !show);
              return;
            }

            if (!el._wrapper) {
              el._wrapper = wrapAll(content, "<div" + (show ? ' hidden' : '') + ">");
            }

            hide(content, false);
            return toggleHeight(this$1)(el._wrapper, show).then(function () {
              hide(content, !show);
              delete el._wrapper;
              unwrap(content);

              if (show) {
                var toggle = $(this$1.$props.toggle, el);

                if (!isInView(toggle)) {
                  scrollIntoView(toggle, {
                    offset: this$1.offset
                  });
                }
              }
            });
          });
        });
      }
    }
  };

  function hide(el, hide) {
    attr(el, 'hidden', hide ? '' : null);
  }

  var alert = {
    mixins: [Class, Togglable],
    args: 'animation',
    props: {
      close: String
    },
    data: {
      animation: [true],
      selClose: '.uk-alert-close',
      duration: 150,
      hideProps: assign({
        opacity: 0
      }, Togglable.data.hideProps)
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.close();
      }
    }],
    methods: {
      close: function close() {
        var this$1 = this;
        this.toggleElement(this.$el).then(function () {
          return this$1.$destroy(true);
        });
      }
    }
  };
  var Video = {
    args: 'autoplay',
    props: {
      automute: Boolean,
      autoplay: Boolean
    },
    data: {
      automute: false,
      autoplay: true
    },
    computed: {
      inView: function inView(ref) {
        var autoplay = ref.autoplay;
        return autoplay === 'inview';
      }
    },
    connected: function connected() {
      if (this.inView && !hasAttr(this.$el, 'preload')) {
        this.$el.preload = 'none';
      }

      this.player = new Player(this.$el);

      if (this.automute) {
        this.player.mute();
      }
    },
    update: {
      read: function read() {
        return !this.player ? false : {
          visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
          inView: this.inView && isInView(this.$el)
        };
      },
      write: function write(ref) {
        var visible = ref.visible;
        var inView = ref.inView;

        if (!visible || this.inView && !inView) {
          this.player.pause();
        } else if (this.autoplay === true || this.inView && inView) {
          this.player.play();
        }
      },
      events: ['resize', 'scroll']
    }
  };
  var cover = {
    mixins: [Class, Video],
    props: {
      width: Number,
      height: Number
    },
    data: {
      automute: true
    },
    update: {
      read: function read() {
        var el = this.$el;
        var ref = getPositionedParent(el) || el.parentNode;
        var height = ref.offsetHeight;
        var width = ref.offsetWidth;
        var dim = Dimensions.cover({
          width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
          height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
        }, {
          width: width + (width % 2 ? 1 : 0),
          height: height + (height % 2 ? 1 : 0)
        });

        if (!dim.width || !dim.height) {
          return false;
        }

        return dim;
      },
      write: function write(ref) {
        var height = ref.height;
        var width = ref.width;
        css(this.$el, {
          height: height,
          width: width
        });
      },
      events: ['resize']
    }
  };

  function getPositionedParent(el) {
    while (el = parent(el)) {
      if (css(el, 'position') !== 'static') {
        return el;
      }
    }
  }

  var Position = {
    props: {
      pos: String,
      offset: null,
      flip: Boolean,
      clsPos: String
    },
    data: {
      pos: "bottom-" + (!isRtl ? 'left' : 'right'),
      flip: true,
      offset: false,
      clsPos: ''
    },
    computed: {
      pos: function pos(ref) {
        var pos = ref.pos;
        return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
      },
      dir: function dir() {
        return this.pos[0];
      },
      align: function align() {
        return this.pos[1];
      }
    },
    methods: {
      positionAt: function positionAt(element, target, boundary) {
        removeClasses(element, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?");
        var node;
        var ref = this;
        var offset$1 = ref.offset;
        var axis = this.getAxis();

        if (!isNumeric(offset$1)) {
          node = $(offset$1);
          offset$1 = node ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom'] : 0;
        }

        var ref$1 = _positionAt(element, target, axis === 'x' ? flipPosition(this.dir) + " " + this.align : this.align + " " + flipPosition(this.dir), axis === 'x' ? this.dir + " " + this.align : this.align + " " + this.dir, axis === 'x' ? "" + (this.dir === 'left' ? -offset$1 : offset$1) : " " + (this.dir === 'top' ? -offset$1 : offset$1), null, this.flip, boundary).target;

        var x = ref$1.x;
        var y = ref$1.y;
        this.dir = axis === 'x' ? x : y;
        this.align = axis === 'x' ? y : x;
        toggleClass(element, this.clsPos + "-" + this.dir + "-" + this.align, this.offset === false);
      },
      getAxis: function getAxis() {
        return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
      }
    }
  };
  var active;
  var drop = {
    mixins: [Position, Togglable],
    args: 'pos',
    props: {
      mode: 'list',
      toggle: Boolean,
      boundary: Boolean,
      boundaryAlign: Boolean,
      delayShow: Number,
      delayHide: Number,
      clsDrop: String
    },
    data: {
      mode: ['click', 'hover'],
      toggle: '- *',
      boundary: inBrowser && window,
      boundaryAlign: false,
      delayShow: 0,
      delayHide: 800,
      clsDrop: false,
      animation: ['uk-animation-fade'],
      cls: 'uk-open'
    },
    computed: {
      boundary: function boundary(ref, $el) {
        var boundary = ref.boundary;
        return query(boundary, $el);
      },
      clsDrop: function clsDrop(ref) {
        var clsDrop = ref.clsDrop;
        return clsDrop || "uk-" + this.$options.name;
      },
      clsPos: function clsPos() {
        return this.clsDrop;
      }
    },
    created: function created() {
      this.tracker = new MouseTracker();
    },
    connected: function connected() {
      addClass(this.$el, this.clsDrop);
      var ref = this.$props;
      var toggle = ref.toggle;
      this.toggle = toggle && this.$create('toggle', query(toggle, this.$el), {
        target: this.$el,
        mode: this.mode
      });
      !this.toggle && trigger(this.$el, 'updatearia');
    },
    disconnected: function disconnected() {
      if (this.isActive()) {
        active = null;
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return "." + this.clsDrop + "-close";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.hide(false);
      }
    }, {
      name: 'click',
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(ref) {
        var defaultPrevented = ref.defaultPrevented;
        var hash = ref.current.hash;

        if (!defaultPrevented && hash && !within(hash, this.$el)) {
          this.hide(false);
        }
      }
    }, {
      name: 'beforescroll',
      handler: function handler() {
        this.hide(false);
      }
    }, {
      name: 'toggle',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();

        if (this.isToggled()) {
          this.hide(false);
        } else {
          this.show(toggle, false);
        }
      }
    }, {
      name: 'toggleshow',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();
        this.show(toggle);
      }
    }, {
      name: 'togglehide',
      self: true,
      handler: function handler(e) {
        e.preventDefault();
        this.hide();
      }
    }, {
      name: pointerEnter,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e)) {
          this.clearTimers();
        }
      }
    }, {
      name: pointerLeave,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e)) {
          this.hide();
        }
      }
    }, {
      name: 'toggled',
      self: true,
      handler: function handler() {
        if (!this.isToggled()) {
          return;
        }

        this.clearTimers();
        this.position();
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        var this$1 = this;
        active = this;
        this.tracker.init();
        trigger(this.$el, 'updatearia');
        once(this.$el, 'hide', on(document, pointerDown, function (ref) {
          var target = ref.target;
          return !within(target, this$1.$el) && once(document, pointerUp + " " + pointerCancel + " scroll", function (ref) {
            var defaultPrevented = ref.defaultPrevented;
            var type = ref.type;
            var newTarget = ref.target;

            if (!defaultPrevented && type === pointerUp && target === newTarget && !(this$1.toggle && within(target, this$1.toggle.$el))) {
              this$1.hide(false);
            }
          }, true);
        }), {
          self: true
        });
        once(this.$el, 'hide', on(document, 'keydown', function (e) {
          if (e.keyCode === 27) {
            e.preventDefault();
            this$1.hide(false);
          }
        }), {
          self: true
        });
      }
    }, {
      name: 'beforehide',
      self: true,
      handler: function handler() {
        this.clearTimers();
      }
    }, {
      name: 'hide',
      handler: function handler(ref) {
        var target = ref.target;

        if (this.$el !== target) {
          active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
          return;
        }

        active = this.isActive() ? null : active;
        trigger(this.$el, 'updatearia');
        this.tracker.cancel();
      }
    }, {
      name: 'updatearia',
      self: true,
      handler: function handler(e, toggle) {
        e.preventDefault();
        this.updateAria(this.$el);

        if (toggle || this.toggle) {
          attr((toggle || this.toggle).$el, 'aria-expanded', this.isToggled());
          toggleClass(this.toggle.$el, this.cls, this.isToggled());
        }
      }
    }],
    update: {
      write: function write() {
        if (this.isToggled() && !Animation.inProgress(this.$el)) {
          this.position();
        }
      },
      events: ['resize']
    },
    methods: {
      show: function show(toggle, delay) {
        var this$1 = this;
        if (toggle === void 0) toggle = this.toggle;
        if (delay === void 0) delay = true;

        if (this.isToggled() && toggle && this.toggle && toggle.$el !== this.toggle.$el) {
          this.hide(false);
        }

        this.toggle = toggle;
        this.clearTimers();

        if (this.isActive()) {
          return;
        }

        if (active) {
          if (delay && active.isDelaying) {
            this.showTimer = setTimeout(this.show, 10);
            return;
          }

          var prev;

          while (active && prev !== active && !within(this.$el, active.$el)) {
            prev = active;
            active.hide(false);
          }
        }

        this.showTimer = setTimeout(function () {
          return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true);
        }, delay && this.delayShow || 0);
      },
      hide: function hide(delay) {
        var this$1 = this;
        if (delay === void 0) delay = true;

        var hide = function hide() {
          return this$1.toggleElement(this$1.$el, false, false);
        };

        this.clearTimers();
        this.isDelaying = getPositionedElements(this.$el).some(function (el) {
          return this$1.tracker.movesTo(el);
        });

        if (delay && this.isDelaying) {
          this.hideTimer = setTimeout(this.hide, 50);
        } else if (delay && this.delayHide) {
          this.hideTimer = setTimeout(hide, this.delayHide);
        } else {
          hide();
        }
      },
      clearTimers: function clearTimers() {
        clearTimeout(this.showTimer);
        clearTimeout(this.hideTimer);
        this.showTimer = null;
        this.hideTimer = null;
        this.isDelaying = false;
      },
      isActive: function isActive() {
        return active === this;
      },
      position: function position() {
        removeClass(this.$el, this.clsDrop + "-stack");
        toggleClass(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
        var boundary = offset(this.boundary);
        var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

        if (this.align === 'justify') {
          var prop = this.getAxis() === 'y' ? 'width' : 'height';
          css(this.$el, prop, alignTo[prop]);
        } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
          addClass(this.$el, this.clsDrop + "-stack");
        }

        this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);
      }
    }
  };

  function getPositionedElements(el) {
    var result = [];
    apply(el, function (el) {
      return css(el, 'position') !== 'static' && result.push(el);
    });
    return result;
  }

  var formCustom = {
    mixins: [Class],
    args: 'target',
    props: {
      target: Boolean
    },
    data: {
      target: false
    },
    computed: {
      input: function input(_, $el) {
        return $(selInput, $el);
      },
      state: function state() {
        return this.input.nextElementSibling;
      },
      target: function target(ref, $el) {
        var target = ref.target;
        return target && (target === true && this.input.parentNode === $el && this.input.nextElementSibling || query(target, $el));
      }
    },
    update: function update() {
      var ref = this;
      var target = ref.target;
      var input = ref.input;

      if (!target) {
        return;
      }

      var option;
      var prop = isInput(target) ? 'value' : 'textContent';
      var prev = target[prop];
      var value = input.files && input.files[0] ? input.files[0].name : matches(input, 'select') && (option = $$('option', input).filter(function (el) {
        return el.selected;
      })[0]) // eslint-disable-line prefer-destructuring
      ? option.textContent : input.value;

      if (prev !== value) {
        target[prop] = value;
      }
    },
    events: [{
      name: 'change',
      handler: function handler() {
        this.$update();
      }
    }, {
      name: 'reset',
      el: function el() {
        return closest(this.$el, 'form');
      },
      handler: function handler() {
        this.$update();
      }
    }]
  }; // Deprecated

  var gif = {
    update: {
      read: function read(data) {
        var inview = isInView(this.$el);

        if (!inview || data.isInView === inview) {
          return false;
        }

        data.isInView = inview;
      },
      write: function write() {
        this.$el.src = '' + this.$el.src; // force self-assign
      },
      events: ['scroll', 'resize']
    }
  };
  var Margin = {
    props: {
      margin: String,
      firstColumn: Boolean
    },
    data: {
      margin: 'uk-margin-small-top',
      firstColumn: 'uk-first-column'
    },
    update: {
      read: function read() {
        return {
          columns: getColumns(this.$el.children),
          rows: getRows(this.$el.children)
        };
      },
      write: function write(ref) {
        var this$1 = this;
        var columns = ref.columns;
        var rows = ref.rows;
        rows.forEach(function (row, i) {
          return row.forEach(function (el) {
            toggleClass(el, this$1.margin, i !== 0);
            toggleClass(el, this$1.firstColumn, includes(columns[0], el));
          });
        });
      },
      events: ['resize']
    }
  };

  function getRows(items) {
    return sortBy$1(items, 'top', 'bottom');
  }

  function getColumns(items) {
    var columns = sortBy$1(items, 'left', 'right');
    return isRtl ? columns.reverse() : columns;
  }

  function sortBy$1(items, startProp, endProp) {
    var sorted = [[]];

    for (var i = 0; i < items.length; i++) {
      var el = items[i];

      if (!isVisible(el)) {
        continue;
      }

      var dim = getOffset(el);

      for (var j = sorted.length - 1; j >= 0; j--) {
        var current = sorted[j];

        if (!current[0]) {
          current.push(el);
          break;
        }

        var startDim = void 0;

        if (current[0].offsetParent === el.offsetParent) {
          startDim = getOffset(current[0]);
        } else {
          dim = getOffset(el, true);
          startDim = getOffset(current[0], true);
        }

        if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
          sorted.push([el]);
          break;
        }

        if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
          current.push(el);
          break;
        }

        if (j === 0) {
          sorted.unshift([el]);
          break;
        }
      }
    }

    return sorted;
  }

  function getOffset(element, offset) {
    var assign;
    if (offset === void 0) offset = false;
    var offsetTop = element.offsetTop;
    var offsetLeft = element.offsetLeft;
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth;

    if (offset) {
      assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1];
    }

    return {
      top: offsetTop,
      left: offsetLeft,
      bottom: offsetTop + offsetHeight,
      right: offsetLeft + offsetWidth
    };
  }

  var grid = {
    "extends": Margin,
    mixins: [Class],
    name: 'grid',
    props: {
      masonry: Boolean,
      parallax: Number
    },
    data: {
      margin: 'uk-grid-margin',
      clsStack: 'uk-grid-stack',
      masonry: false,
      parallax: 0
    },
    connected: function connected() {
      this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
    },
    update: [{
      write: function write(ref) {
        var columns = ref.columns;
        toggleClass(this.$el, this.clsStack, columns.length < 2);
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var columns = ref.columns;
        var rows = ref.rows;

        var nodes = _children(this.$el);

        if (!nodes.length || !this.masonry && !this.parallax) {
          return false;
        }

        var transitionInProgress = nodes.some(Transition.inProgress);
        var translates = false;
        var columnHeights = getColumnHeights(columns);
        var margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
        var elHeight = Math.max.apply(Math, columnHeights) + margin;

        if (this.masonry) {
          columns = columns.map(function (column) {
            return sortBy(column, 'offsetTop');
          });
          translates = getTranslates(rows, columns);
        }

        var padding = Math.abs(this.parallax);

        if (padding) {
          padding = columnHeights.reduce(function (newPadding, hgt, i) {
            return Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight);
          }, 0);
        }

        return {
          padding: padding,
          columns: columns,
          translates: translates,
          height: transitionInProgress ? false : this.masonry ? elHeight : ''
        };
      },
      write: function write(ref) {
        var height = ref.height;
        var padding = ref.padding;
        css(this.$el, 'paddingBottom', padding || '');
        height !== false && css(this.$el, 'height', height);
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var height$1 = ref.height;
        return {
          scrolled: this.parallax ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * Math.abs(this.parallax) : false
        };
      },
      write: function write(ref) {
        var columns = ref.columns;
        var scrolled = ref.scrolled;
        var translates = ref.translates;

        if (scrolled === false && !translates) {
          return;
        }

        columns.forEach(function (column, i) {
          return column.forEach(function (el, j) {
            return css(el, 'transform', !scrolled && !translates ? '' : "translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)");
          });
        });
      },
      events: ['scroll', 'resize']
    }]
  };

  function getTranslates(rows, columns) {
    var rowHeights = rows.map(function (row) {
      return Math.max.apply(Math, row.map(function (el) {
        return el.offsetHeight;
      }));
    });
    return columns.map(function (elements) {
      var prev = 0;
      return elements.map(function (element, row) {
        return prev += row ? rowHeights[row - 1] - elements[row - 1].offsetHeight : 0;
      });
    });
  }

  function getMarginTop(nodes, cls) {
    var ref = nodes.filter(function (el) {
      return hasClass(el, cls);
    });
    var node = ref[0];
    return toFloat(node ? css(node, 'marginTop') : css(nodes[0], 'paddingLeft'));
  }

  function getColumnHeights(columns) {
    return columns.map(function (column) {
      return column.reduce(function (sum, el) {
        return sum + el.offsetHeight;
      }, 0);
    });
  } // IE 11 fix (min-height on a flex container won't apply to its flex items)


  var FlexBug = isIE ? {
    props: {
      selMinHeight: String
    },
    data: {
      selMinHeight: false,
      forceHeight: false
    },
    computed: {
      elements: function elements(ref, $el) {
        var selMinHeight = ref.selMinHeight;
        return selMinHeight ? $$(selMinHeight, $el) : [$el];
      }
    },
    update: [{
      read: function read() {
        css(this.elements, 'height', '');
      },
      order: -5,
      events: ['resize']
    }, {
      write: function write() {
        var this$1 = this;
        this.elements.forEach(function (el) {
          var height = toFloat(css(el, 'minHeight'));

          if (height && (this$1.forceHeight || Math.round(height + boxModelAdjust(el, 'height', 'content-box')) >= el.offsetHeight)) {
            css(el, 'height', height);
          }
        });
      },
      order: 5,
      events: ['resize']
    }]
  } : {};
  var heightMatch = {
    mixins: [FlexBug],
    args: 'target',
    props: {
      target: String,
      row: Boolean
    },
    data: {
      target: '> *',
      row: true,
      forceHeight: true
    },
    computed: {
      elements: function elements(ref, $el) {
        var target = ref.target;
        return $$(target, $el);
      }
    },
    update: {
      read: function read() {
        return {
          rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
        };
      },
      write: function write(ref) {
        var rows = ref.rows;
        rows.forEach(function (ref) {
          var heights = ref.heights;
          var elements = ref.elements;
          return elements.forEach(function (el, i) {
            return css(el, 'minHeight', heights[i]);
          });
        });
      },
      events: ['resize']
    }
  };

  function match(elements) {
    var assign;

    if (elements.length < 2) {
      return {
        heights: [''],
        elements: elements
      };
    }

    var ref = getHeights(elements);
    var heights = ref.heights;
    var max = ref.max;
    var hasMinHeight = elements.some(function (el) {
      return el.style.minHeight;
    });
    var hasShrunk = elements.some(function (el, i) {
      return !el.style.minHeight && heights[i] < max;
    });

    if (hasMinHeight && hasShrunk) {
      css(elements, 'minHeight', '');
      assign = getHeights(elements), heights = assign.heights, max = assign.max;
    }

    heights = elements.map(function (el, i) {
      return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max;
    });
    return {
      heights: heights,
      elements: elements
    };
  }

  function getHeights(elements) {
    var heights = elements.map(function (el) {
      return offset(el).height - boxModelAdjust(el, 'height', 'content-box');
    });
    var max = Math.max.apply(null, heights);
    return {
      heights: heights,
      max: max
    };
  }

  var heightViewport = {
    mixins: [FlexBug],
    props: {
      expand: Boolean,
      offsetTop: Boolean,
      offsetBottom: Boolean,
      minHeight: Number
    },
    data: {
      expand: false,
      offsetTop: false,
      offsetBottom: false,
      minHeight: 0
    },
    update: {
      read: function read(ref) {
        var prev = ref.minHeight;

        if (!isVisible(this.$el)) {
          return false;
        }

        var minHeight = '';
        var box = boxModelAdjust(this.$el, 'height', 'content-box');

        if (this.expand) {
          this.$el.dataset.heightExpand = '';

          if ($('[data-height-expand]') !== this.$el) {
            return false;
          }

          minHeight = height(window) - (offsetHeight(document.documentElement) - offsetHeight(this.$el)) - box || '';
        } else {
          // on mobile devices (iOS and Android) window.innerHeight !== 100vh
          minHeight = 'calc(100vh';

          if (this.offsetTop) {
            var ref$1 = offset(this.$el);
            var top = ref$1.top;
            minHeight += top > 0 && top < height(window) / 2 ? " - " + top + "px" : '';
          }

          if (this.offsetBottom === true) {
            minHeight += " - " + offsetHeight(this.$el.nextElementSibling) + "px";
          } else if (isNumeric(this.offsetBottom)) {
            minHeight += " - " + this.offsetBottom + "vh";
          } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {
            minHeight += " - " + toFloat(this.offsetBottom) + "px";
          } else if (isString(this.offsetBottom)) {
            minHeight += " - " + offsetHeight(query(this.offsetBottom, this.$el)) + "px";
          }

          minHeight += (box ? " - " + box + "px" : '') + ")";
        }

        return {
          minHeight: minHeight,
          prev: prev
        };
      },
      write: function write(ref) {
        var minHeight = ref.minHeight;
        var prev = ref.prev;
        css(this.$el, {
          minHeight: minHeight
        });

        if (minHeight !== prev) {
          this.$update(this.$el, 'resize');
        }

        if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
          css(this.$el, 'minHeight', this.minHeight);
        }
      },
      events: ['resize']
    }
  };

  function offsetHeight(el) {
    return el && offset(el).height || 0;
  }

  var SVG = {
    args: 'src',
    props: {
      id: Boolean,
      icon: String,
      src: String,
      style: String,
      width: Number,
      height: Number,
      ratio: Number,
      "class": String,
      strokeAnimation: Boolean,
      focusable: Boolean,
      // IE 11
      attributes: 'list'
    },
    data: {
      ratio: 1,
      include: ['style', 'class', 'focusable'],
      "class": '',
      strokeAnimation: false
    },
    beforeConnect: function beforeConnect() {
      this["class"] += ' uk-svg';
    },
    connected: function connected() {
      var this$1 = this;
      var assign;

      if (!this.icon && includes(this.src, '#')) {
        assign = this.src.split('#'), this.src = assign[0], this.icon = assign[1];
      }

      this.svg = this.getSvg().then(function (el) {
        this$1.applyAttributes(el);
        return this$1.svgEl = insertSVG(el, this$1.$el);
      }, noop);
    },
    disconnected: function disconnected() {
      var this$1 = this;

      if (isVoidElement(this.$el)) {
        attr(this.$el, 'hidden', null);
      }

      if (this.svg) {
        this.svg.then(function (svg) {
          return (!this$1._connected || svg !== this$1.svgEl) && _remove(svg);
        }, noop);
      }

      this.svg = this.svgEl = null;
    },
    update: {
      read: function read() {
        return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
      },
      write: function write() {
        applyAnimation(this.svgEl);
      },
      type: ['resize']
    },
    methods: {
      getSvg: function getSvg() {
        var this$1 = this;
        return loadSVG(this.src).then(function (svg) {
          return parseSVG(svg, this$1.icon) || Promise.reject('SVG not found.');
        });
      },
      applyAttributes: function applyAttributes(el) {
        var this$1 = this;

        for (var prop in this.$options.props) {
          if (this[prop] && includes(this.include, prop)) {
            attr(el, prop, this[prop]);
          }
        }

        for (var attribute in this.attributes) {
          var ref = this.attributes[attribute].split(':', 2);
          var prop$1 = ref[0];
          var value = ref[1];
          attr(el, prop$1, value);
        }

        if (!this.id) {
          removeAttr(el, 'id');
        }

        var props = ['width', 'height'];
        var dimensions = [this.width, this.height];

        if (!dimensions.some(function (val) {
          return val;
        })) {
          dimensions = props.map(function (prop) {
            return attr(el, prop);
          });
        }

        var viewBox = attr(el, 'viewBox');

        if (viewBox && !dimensions.some(function (val) {
          return val;
        })) {
          dimensions = viewBox.split(' ').slice(2);
        }

        dimensions.forEach(function (val, i) {
          val = (val | 0) * this$1.ratio;
          val && attr(el, props[i], val);

          if (val && !dimensions[i ^ 1]) {
            removeAttr(el, props[i ^ 1]);
          }
        });
        attr(el, 'data-svg', this.icon || this.src);
      }
    }
  };
  var svgs = {};

  function loadSVG(src) {
    if (svgs[src]) {
      return svgs[src];
    }

    return svgs[src] = new Promise(function (resolve, reject) {
      if (!src) {
        reject();
        return;
      }

      if (startsWith(src, 'data:')) {
        resolve(decodeURIComponent(src.split(',')[1]));
      } else {
        ajax(src).then(function (xhr) {
          return resolve(xhr.response);
        }, function () {
          return reject('SVG not found.');
        });
      }
    });
  }

  function parseSVG(svg, icon) {
    if (icon && includes(svg, '<symbol')) {
      svg = parseSymbols(svg, icon) || svg;
    }

    svg = $(svg.substr(svg.indexOf('<svg')));
    return svg && svg.hasChildNodes() && svg;
  }

  var symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
  var symbols = {};

  function parseSymbols(svg, icon) {
    if (!symbols[svg]) {
      symbols[svg] = {};
      symbolRe.lastIndex = 0;
      var match;

      while (match = symbolRe.exec(svg)) {
        symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + match[1] + "svg>";
      }
    }

    return symbols[svg][icon];
  }

  function applyAnimation(el) {
    var length = getMaxPathLength(el);

    if (length) {
      el.style.setProperty('--uk-animation-stroke', length);
    }
  }

  function getMaxPathLength(el) {
    return Math.ceil(Math.max.apply(Math, [0].concat($$('[stroke]', el).map(function (stroke) {
      try {
        return stroke.getTotalLength();
      } catch (e) {
        return 0;
      }
    }))));
  }

  function insertSVG(el, root) {
    if (isVoidElement(root) || root.tagName === 'CANVAS') {
      attr(root, 'hidden', true);
      var next = root.nextElementSibling;
      return equals(el, next) ? next : after(root, el);
    }

    var last = root.lastElementChild;
    return equals(el, last) ? last : append(root, el);
  }

  function equals(el, other) {
    return attr(el, 'data-svg') === attr(other, 'data-svg');
  }

  var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";
  var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";
  var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";
  var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";
  var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";
  var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";
  var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";
  var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";
  var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";
  var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";
  var slidenavNext = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";
  var slidenavNextLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";
  var slidenavPrevious = "<svg width=\"14px\" height=\"24px\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";
  var slidenavPreviousLarge = "<svg width=\"25px\" height=\"40px\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";
  var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";
  var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";
  var icons = {
    spinner: spinner,
    totop: totop,
    marker: marker,
    'close-icon': closeIcon,
    'close-large': closeLarge,
    'navbar-toggle-icon': navbarToggleIcon,
    'overlay-icon': overlayIcon,
    'pagination-next': paginationNext,
    'pagination-previous': paginationPrevious,
    'search-icon': searchIcon,
    'search-large': searchLarge,
    'search-navbar': searchNavbar,
    'slidenav-next': slidenavNext,
    'slidenav-next-large': slidenavNextLarge,
    'slidenav-previous': slidenavPrevious,
    'slidenav-previous-large': slidenavPreviousLarge
  };
  var Icon = {
    install: install,
    "extends": SVG,
    args: 'icon',
    props: ['icon'],
    data: {
      include: ['focusable']
    },
    isIcon: true,
    beforeConnect: function beforeConnect() {
      addClass(this.$el, 'uk-icon');
    },
    methods: {
      getSvg: function getSvg() {
        var icon = getIcon(this.icon);

        if (!icon) {
          return Promise.reject('Icon not found.');
        }

        return Promise.resolve(icon);
      }
    }
  };
  var IconComponent = {
    args: false,
    "extends": Icon,
    data: function data(vm) {
      return {
        icon: hyphenate(vm.constructor.options.name)
      };
    },
    beforeConnect: function beforeConnect() {
      addClass(this.$el, this.$name);
    }
  };
  var Slidenav = {
    "extends": IconComponent,
    beforeConnect: function beforeConnect() {
      addClass(this.$el, 'uk-slidenav');
    },
    computed: {
      icon: function icon(ref, $el) {
        var icon = ref.icon;
        return hasClass($el, 'uk-slidenav-large') ? icon + "-large" : icon;
      }
    }
  };
  var Search = {
    "extends": IconComponent,
    computed: {
      icon: function icon(ref, $el) {
        var icon = ref.icon;
        return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length ? 'search-large' : parents($el, '.uk-search-navbar').length ? 'search-navbar' : icon;
      }
    }
  };
  var Close = {
    "extends": IconComponent,
    computed: {
      icon: function icon() {
        return "close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon');
      }
    }
  };
  var Spinner = {
    "extends": IconComponent,
    connected: function connected() {
      var this$1 = this;
      this.svg.then(function (svg) {
        return this$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1.ratio);
      }, noop);
    }
  };
  var parsed = {};

  function install(UIkit) {
    UIkit.icon.add = function (name, svg) {
      var obj;
      var added = isString(name) ? (obj = {}, obj[name] = svg, obj) : name;
      each(added, function (svg, name) {
        icons[name] = svg;
        delete parsed[name];
      });

      if (UIkit._initialized) {
        apply(document.body, function (el) {
          return each(UIkit.getComponents(el), function (cmp) {
            cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
          });
        });
      }
    };
  }

  function getIcon(icon) {
    if (!icons[icon]) {
      return null;
    }

    if (!parsed[icon]) {
      parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
    }

    return parsed[icon].cloneNode(true);
  }

  function applyRtl(icon) {
    return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
  }

  var img = {
    args: 'dataSrc',
    props: {
      dataSrc: String,
      dataSrcset: Boolean,
      sizes: String,
      width: Number,
      height: Number,
      offsetTop: String,
      offsetLeft: String,
      target: String
    },
    data: {
      dataSrc: '',
      dataSrcset: false,
      sizes: false,
      width: false,
      height: false,
      offsetTop: '50vh',
      offsetLeft: 0,
      target: false
    },
    computed: {
      cacheKey: function cacheKey(ref) {
        var dataSrc = ref.dataSrc;
        return this.$name + "." + dataSrc;
      },
      width: function width(ref) {
        var width = ref.width;
        var dataWidth = ref.dataWidth;
        return width || dataWidth;
      },
      height: function height(ref) {
        var height = ref.height;
        var dataHeight = ref.dataHeight;
        return height || dataHeight;
      },
      sizes: function sizes(ref) {
        var sizes = ref.sizes;
        var dataSizes = ref.dataSizes;
        return sizes || dataSizes;
      },
      isImg: function isImg(_, $el) {
        return _isImg($el);
      },
      target: {
        get: function get(ref) {
          var target = ref.target;
          return [this.$el].concat(queryAll(target, this.$el));
        },
        watch: function watch() {
          this.observe();
        }
      },
      offsetTop: function offsetTop(ref) {
        var offsetTop = ref.offsetTop;
        return toPx(offsetTop, 'height');
      },
      offsetLeft: function offsetLeft(ref) {
        var offsetLeft = ref.offsetLeft;
        return toPx(offsetLeft, 'width');
      }
    },
    connected: function connected() {
      if (storage[this.cacheKey]) {
        setSrcAttrs(this.$el, storage[this.cacheKey] || this.dataSrc, this.dataSrcset, this.sizes);
      } else if (this.isImg && this.width && this.height) {
        setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
      }

      this.observer = new IntersectionObserver(this.load, {
        rootMargin: this.offsetTop + "px " + this.offsetLeft + "px"
      });
      requestAnimationFrame(this.observe);
    },
    disconnected: function disconnected() {
      this.observer.disconnect();
    },
    update: {
      read: function read(ref) {
        var this$1 = this;
        var image = ref.image;

        if (!image && document.readyState === 'complete') {
          this.load(this.observer.takeRecords());
        }

        if (this.isImg) {
          return false;
        }

        image && image.then(function (img) {
          return img && img.currentSrc !== '' && setSrcAttrs(this$1.$el, currentSrc(img));
        });
      },
      write: function write(data) {
        if (this.dataSrcset && window.devicePixelRatio !== 1) {
          var bgSize = css(this.$el, 'backgroundSize');

          if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
            data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
            css(this.$el, 'backgroundSize', data.bgSize + "px");
          }
        }
      },
      events: ['resize']
    },
    methods: {
      load: function load(entries) {
        var this$1 = this; // Old chromium based browsers (UC Browser) did not implement `isIntersecting`

        if (!entries.some(function (entry) {
          return isUndefined(entry.isIntersecting) || entry.isIntersecting;
        })) {
          return;
        }

        this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {
          setSrcAttrs(this$1.$el, currentSrc(img), img.srcset, img.sizes);
          storage[this$1.cacheKey] = currentSrc(img);
          return img;
        }, noop);
        this.observer.disconnect();
      },
      observe: function observe() {
        var this$1 = this;

        if (this._connected && !this._data.image) {
          this.target.forEach(function (el) {
            return this$1.observer.observe(el);
          });
        }
      }
    }
  };

  function setSrcAttrs(el, src, srcset, sizes) {
    if (_isImg(el)) {
      sizes && (el.sizes = sizes);
      srcset && (el.srcset = srcset);
      src && (el.src = src);
    } else if (src) {
      var change = !includes(el.style.backgroundImage, src);

      if (change) {
        css(el, 'backgroundImage', "url(" + escape(src) + ")");
        trigger(el, createEvent('load', false));
      }
    }
  }

  function getPlaceholderImage(width, height, sizes) {
    var assign;

    if (sizes) {
      assign = Dimensions.ratio({
        width: width,
        height: height
      }, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height;
    }

    return "data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>";
  }

  var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;

  function sizesToPixel(sizes) {
    var matches;
    sizesRe.lastIndex = 0;

    while (matches = sizesRe.exec(sizes)) {
      if (!matches[1] || window.matchMedia(matches[1]).matches) {
        matches = evaluateSize(matches[2]);
        break;
      }
    }

    return matches || '100vw';
  }

  var sizeRe = /\d+(?:\w+|%)/g;
  var additionRe = /[+-]?(\d+)/g;

  function evaluateSize(size) {
    return startsWith(size, 'calc') ? size.substring(5, size.length - 1).replace(sizeRe, function (size) {
      return toPx(size);
    }).replace(/ /g, '').match(additionRe).reduce(function (a, b) {
      return a + +b;
    }, 0) : size;
  }

  var srcSetRe = /\s+\d+w\s*(?:,|$)/g;

  function getSourceSize(srcset, sizes) {
    var srcSize = toPx(sizesToPixel(sizes));
    var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) {
      return a - b;
    });
    return descriptors.filter(function (size) {
      return size >= srcSize;
    })[0] || descriptors.pop() || '';
  }

  function _isImg(el) {
    return el.tagName === 'IMG';
  }

  function currentSrc(el) {
    return el.currentSrc || el.src;
  }

  var key = '__test__';
  var storage; // workaround for Safari's private browsing mode and accessing sessionStorage in Blink

  try {
    storage = window.sessionStorage || {};
    storage[key] = 1;
    delete storage[key];
  } catch (e) {
    storage = {};
  }

  var Media = {
    props: {
      media: Boolean
    },
    data: {
      media: false
    },
    computed: {
      matchMedia: function matchMedia() {
        var media = toMedia(this.media);
        return !media || window.matchMedia(media).matches;
      }
    }
  };

  function toMedia(value) {
    if (isString(value)) {
      if (value[0] === '@') {
        var name = "breakpoint-" + value.substr(1);
        value = toFloat(getCssVar(name));
      } else if (isNaN(value)) {
        return value;
      }
    }

    return value && !isNaN(value) ? "(min-width: " + value + "px)" : false;
  }

  var leader = {
    mixins: [Class, Media],
    props: {
      fill: String
    },
    data: {
      fill: '',
      clsWrapper: 'uk-leader-fill',
      clsHide: 'uk-leader-hide',
      attrFill: 'data-fill'
    },
    computed: {
      fill: function fill(ref) {
        var fill = ref.fill;
        return fill || getCssVar('leader-fill-content');
      }
    },
    connected: function connected() {
      var assign;
      assign = wrapInner(this.$el, "<span class=\"" + this.clsWrapper + "\">"), this.wrapper = assign[0];
    },
    disconnected: function disconnected() {
      unwrap(this.wrapper.childNodes);
    },
    update: {
      read: function read(ref) {
        var changed = ref.changed;
        var width = ref.width;
        var prev = width;
        width = Math.floor(this.$el.offsetWidth / 2);
        return {
          width: width,
          fill: this.fill,
          changed: changed || prev !== width,
          hide: !this.matchMedia
        };
      },
      write: function write(data) {
        toggleClass(this.wrapper, this.clsHide, data.hide);

        if (data.changed) {
          data.changed = false;
          attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
        }
      },
      events: ['resize']
    }
  };
  var Container = {
    props: {
      container: Boolean
    },
    data: {
      container: true
    },
    computed: {
      container: function container(ref) {
        var container = ref.container;
        return container === true && this.$container || container && $(container);
      }
    }
  };
  var active$1 = [];
  var Modal = {
    mixins: [Class, Container, Togglable],
    props: {
      selPanel: String,
      selClose: String,
      escClose: Boolean,
      bgClose: Boolean,
      stack: Boolean
    },
    data: {
      cls: 'uk-open',
      escClose: true,
      bgClose: true,
      overlay: true,
      stack: false
    },
    computed: {
      panel: function panel(ref, $el) {
        var selPanel = ref.selPanel;
        return $(selPanel, $el);
      },
      transitionElement: function transitionElement() {
        return this.panel;
      },
      bgClose: function bgClose(ref) {
        var bgClose = ref.bgClose;
        return bgClose && this.panel;
      }
    },
    beforeDisconnect: function beforeDisconnect() {
      if (this.isToggled()) {
        this.toggleElement(this.$el, false, false);
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selClose;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.hide();
      }
    }, {
      name: 'toggle',
      self: true,
      handler: function handler(e) {
        if (e.defaultPrevented) {
          return;
        }

        e.preventDefault();

        if (this.isToggled() === includes(active$1, this)) {
          this.toggle();
        }
      }
    }, {
      name: 'beforeshow',
      self: true,
      handler: function handler(e) {
        if (includes(active$1, this)) {
          return false;
        }

        if (!this.stack && active$1.length) {
          Promise.all(active$1.map(function (modal) {
            return modal.hide();
          })).then(this.show);
          e.preventDefault();
        } else {
          active$1.push(this);
        }
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        var this$1 = this;

        if (width(window) - width(document) && this.overlay) {
          css(document.body, 'overflowY', 'scroll');
        }

        this.stack && css(this.$el, 'zIndex', css(this.$el, 'zIndex') + active$1.length);
        addClass(document.documentElement, this.clsPage);

        if (this.bgClose) {
          once(this.$el, 'hide', on(document, pointerDown, function (ref) {
            var target = ref.target;

            if (last(active$1) !== this$1 || this$1.overlay && !within(target, this$1.$el) || within(target, this$1.panel)) {
              return;
            }

            once(document, pointerUp + " " + pointerCancel + " scroll", function (ref) {
              var defaultPrevented = ref.defaultPrevented;
              var type = ref.type;
              var newTarget = ref.target;

              if (!defaultPrevented && type === pointerUp && target === newTarget) {
                this$1.hide();
              }
            }, true);
          }), {
            self: true
          });
        }

        if (this.escClose) {
          once(this.$el, 'hide', on(document, 'keydown', function (e) {
            if (e.keyCode === 27 && last(active$1) === this$1) {
              e.preventDefault();
              this$1.hide();
            }
          }), {
            self: true
          });
        }
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        var this$1 = this;
        active$1.splice(active$1.indexOf(this), 1);

        if (!active$1.length) {
          css(document.body, 'overflowY', '');
        }

        css(this.$el, 'zIndex', '');

        if (!active$1.some(function (modal) {
          return modal.clsPage === this$1.clsPage;
        })) {
          removeClass(document.documentElement, this.clsPage);
        }
      }
    }],
    methods: {
      toggle: function toggle() {
        return this.isToggled() ? this.hide() : this.show();
      },
      show: function show() {
        var this$1 = this;

        if (this.container && this.$el.parentNode !== this.container) {
          append(this.container, this.$el);
          return new Promise(function (resolve) {
            return requestAnimationFrame(function () {
              return this$1.show().then(resolve);
            });
          });
        }

        return this.toggleElement(this.$el, true, animate$1(this));
      },
      hide: function hide() {
        return this.toggleElement(this.$el, false, animate$1(this));
      }
    }
  };

  function animate$1(ref) {
    var transitionElement = ref.transitionElement;
    var _toggle = ref._toggle;
    return function (el, show) {
      return new Promise(function (resolve, reject) {
        return once(el, 'show hide', function () {
          el._reject && el._reject();
          el._reject = reject;

          _toggle(el, show);

          var off = once(transitionElement, 'transitionstart', function () {
            once(transitionElement, 'transitionend transitioncancel', resolve, {
              self: true
            });
            clearTimeout(timer);
          }, {
            self: true
          });
          var timer = setTimeout(function () {
            off();
            resolve();
          }, toMs(css(transitionElement, 'transitionDuration')));
        });
      });
    };
  }

  var modal = {
    install: install$1,
    mixins: [Modal],
    data: {
      clsPage: 'uk-modal-page',
      selPanel: '.uk-modal-dialog',
      selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
    },
    events: [{
      name: 'show',
      self: true,
      handler: function handler() {
        if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
          addClass(this.$el, 'uk-flex');
        } else {
          css(this.$el, 'display', 'block');
        }

        height(this.$el); // force reflow
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        css(this.$el, 'display', '');
        removeClass(this.$el, 'uk-flex');
      }
    }]
  };

  function install$1(ref) {
    var modal = ref.modal;

    modal.dialog = function (content, options) {
      var dialog = modal("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div>", options);
      dialog.show();
      on(dialog.$el, 'hidden', function () {
        return Promise.resolve().then(function () {
          return dialog.$destroy(true);
        });
      }, {
        self: true
      });
      return dialog;
    };

    modal.alert = function (message, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + labels.ok + "</button> </div>";
      }, options, function (deferred) {
        return deferred.resolve();
      });
    };

    modal.confirm = function (message, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + labels.cancel + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + labels.ok + "</button> </div> </form>";
      }, options, function (deferred) {
        return deferred.reject();
      });
    };

    modal.prompt = function (message, value, options) {
      return openDialog(function (ref) {
        var labels = ref.labels;
        return "<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + labels.cancel + "</button> <button class=\"uk-button uk-button-primary\">" + labels.ok + "</button> </div> </form>";
      }, options, function (deferred) {
        return deferred.resolve(null);
      }, function (dialog) {
        return $('input', dialog.$el).value;
      });
    };

    modal.labels = {
      ok: 'Ok',
      cancel: 'Cancel'
    };

    function openDialog(tmpl, options, hideFn, submitFn) {
      options = assign({
        bgClose: false,
        escClose: true,
        labels: modal.labels
      }, options);
      var dialog = modal.dialog(tmpl(options), options);
      var deferred = new Deferred();
      var resolved = false;
      on(dialog.$el, 'submit', 'form', function (e) {
        e.preventDefault();
        deferred.resolve(submitFn && submitFn(dialog));
        resolved = true;
        dialog.hide();
      });
      on(dialog.$el, 'hide', function () {
        return !resolved && hideFn(deferred);
      });
      deferred.promise.dialog = dialog;
      return deferred.promise;
    }
  }

  var nav = {
    "extends": Accordion,
    data: {
      targets: '> .uk-parent',
      toggle: '> a',
      content: '> ul'
    }
  };
  var navbar = {
    mixins: [Class, FlexBug],
    props: {
      dropdown: String,
      mode: 'list',
      align: String,
      offset: Number,
      boundary: Boolean,
      boundaryAlign: Boolean,
      clsDrop: String,
      delayShow: Number,
      delayHide: Number,
      dropbar: Boolean,
      dropbarMode: String,
      dropbarAnchor: Boolean,
      duration: Number
    },
    data: {
      dropdown: '.uk-navbar-nav > li',
      align: !isRtl ? 'left' : 'right',
      clsDrop: 'uk-navbar-dropdown',
      mode: undefined,
      offset: undefined,
      delayShow: undefined,
      delayHide: undefined,
      boundaryAlign: undefined,
      flip: 'x',
      boundary: true,
      dropbar: false,
      dropbarMode: 'slide',
      dropbarAnchor: false,
      duration: 200,
      forceHeight: true,
      selMinHeight: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle'
    },
    computed: {
      boundary: function boundary(ref, $el) {
        var boundary = ref.boundary;
        var boundaryAlign = ref.boundaryAlign;
        return boundary === true || boundaryAlign ? $el : boundary;
      },
      dropbarAnchor: function dropbarAnchor(ref, $el) {
        var dropbarAnchor = ref.dropbarAnchor;
        return query(dropbarAnchor, $el);
      },
      pos: function pos(ref) {
        var align = ref.align;
        return "bottom-" + align;
      },
      dropbar: {
        get: function get(ref) {
          var dropbar = ref.dropbar;

          if (!dropbar) {
            return null;
          }

          dropbar = this._dropbar || query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el);
          return dropbar ? dropbar : this._dropbar = $('<div></div>');
        },
        watch: function watch(dropbar) {
          addClass(dropbar, 'uk-navbar-dropbar');
        },
        immediate: true
      },
      dropdowns: {
        get: function get(ref, $el) {
          var dropdown = ref.dropdown;
          var clsDrop = ref.clsDrop;
          return $$(dropdown + " ." + clsDrop, $el);
        },
        watch: function watch(dropdowns) {
          var this$1 = this;
          this.$create('drop', dropdowns.filter(function (el) {
            return !this$1.getDropdown(el);
          }), assign({}, this.$props, {
            boundary: this.boundary,
            pos: this.pos,
            offset: this.dropbar || this.offset
          }));
        },
        immediate: true
      }
    },
    disconnected: function disconnected() {
      this.dropbar && _remove(this.dropbar);
      delete this._dropbar;
    },
    events: [{
      name: 'mouseover',
      delegate: function delegate() {
        return this.dropdown;
      },
      handler: function handler(ref) {
        var current = ref.current;
        var active = this.getActive();

        if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
          active.hide(false);
        }
      }
    }, {
      name: 'mouseleave',
      el: function el() {
        return this.dropbar;
      },
      handler: function handler() {
        var active = this.getActive();

        if (active && !this.dropdowns.some(function (el) {
          return matches(el, ':hover');
        })) {
          active.hide();
        }
      }
    }, {
      name: 'beforeshow',
      capture: true,
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler() {
        if (!this.dropbar.parentNode) {
          after(this.dropbarAnchor || this.$el, this.dropbar);
        }
      }
    }, {
      name: 'show',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(_, ref) {
        var $el = ref.$el;
        var dir = ref.dir;
        toggleClass(this.dropbar, 'uk-navbar-dropbar-slide', this.dropbarMode === 'slide' || parents(this.$el).some(function (el) {
          return css(el, 'position') !== 'static';
        }));
        this.clsDrop && addClass($el, this.clsDrop + "-dropbar");

        if (dir === 'bottom') {
          this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
        }
      }
    }, {
      name: 'beforehide',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(e, ref) {
        var $el = ref.$el;
        var active = this.getActive();

        if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
          e.preventDefault();
        }
      }
    }, {
      name: 'hide',
      filter: function filter() {
        return this.dropbar;
      },
      handler: function handler(_, ref) {
        var $el = ref.$el;
        var active = this.getActive();

        if (!active || active && active.$el === $el) {
          this.transitionTo(0);
        }
      }
    }],
    methods: {
      getActive: function getActive() {
        var ref = this.dropdowns.map(this.getDropdown).filter(function (drop) {
          return drop && drop.isActive();
        });
        var active = ref[0];
        return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
      },
      transitionTo: function transitionTo(newHeight, el) {
        var this$1 = this;
        var ref = this;
        var dropbar = ref.dropbar;
        var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;
        el = oldHeight < newHeight && el;
        css(el, 'clip', "rect(0," + el.offsetWidth + "px," + oldHeight + "px,0)");
        height(dropbar, oldHeight);
        Transition.cancel([el, dropbar]);
        return Promise.all([Transition.start(dropbar, {
          height: newHeight
        }, this.duration), Transition.start(el, {
          clip: "rect(0," + el.offsetWidth + "px," + newHeight + "px,0)"
        }, this.duration)])["catch"](noop).then(function () {
          css(el, {
            clip: ''
          });
          this$1.$update(dropbar);
        });
      },
      getDropdown: function getDropdown(el) {
        return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
      }
    }
  };
  var offcanvas = {
    mixins: [Modal],
    args: 'mode',
    props: {
      mode: String,
      flip: Boolean,
      overlay: Boolean
    },
    data: {
      mode: 'slide',
      flip: false,
      overlay: false,
      clsPage: 'uk-offcanvas-page',
      clsContainer: 'uk-offcanvas-container',
      selPanel: '.uk-offcanvas-bar',
      clsFlip: 'uk-offcanvas-flip',
      clsContainerAnimation: 'uk-offcanvas-container-animation',
      clsSidebarAnimation: 'uk-offcanvas-bar-animation',
      clsMode: 'uk-offcanvas',
      clsOverlay: 'uk-offcanvas-overlay',
      selClose: '.uk-offcanvas-close',
      container: false
    },
    computed: {
      clsFlip: function clsFlip(ref) {
        var flip = ref.flip;
        var clsFlip = ref.clsFlip;
        return flip ? clsFlip : '';
      },
      clsOverlay: function clsOverlay(ref) {
        var overlay = ref.overlay;
        var clsOverlay = ref.clsOverlay;
        return overlay ? clsOverlay : '';
      },
      clsMode: function clsMode(ref) {
        var mode = ref.mode;
        var clsMode = ref.clsMode;
        return clsMode + "-" + mode;
      },
      clsSidebarAnimation: function clsSidebarAnimation(ref) {
        var mode = ref.mode;
        var clsSidebarAnimation = ref.clsSidebarAnimation;
        return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
      },
      clsContainerAnimation: function clsContainerAnimation(ref) {
        var mode = ref.mode;
        var clsContainerAnimation = ref.clsContainerAnimation;
        return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
      },
      transitionElement: function transitionElement(ref) {
        var mode = ref.mode;
        return mode === 'reveal' ? this.panel.parentNode : this.panel;
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return 'a[href^="#"]';
      },
      handler: function handler(ref) {
        var hash = ref.current.hash;
        var defaultPrevented = ref.defaultPrevented;

        if (!defaultPrevented && hash && $(hash, document.body)) {
          this.hide();
        }
      }
    }, {
      name: 'touchstart',
      passive: true,
      el: function el() {
        return this.panel;
      },
      handler: function handler(ref) {
        var targetTouches = ref.targetTouches;

        if (targetTouches.length === 1) {
          this.clientY = targetTouches[0].clientY;
        }
      }
    }, {
      name: 'touchmove',
      self: true,
      passive: false,
      filter: function filter() {
        return this.overlay;
      },
      handler: function handler(e) {
        e.cancelable && e.preventDefault();
      }
    }, {
      name: 'touchmove',
      passive: false,
      el: function el() {
        return this.panel;
      },
      handler: function handler(e) {
        if (e.targetTouches.length !== 1) {
          return;
        }

        var clientY = event.targetTouches[0].clientY - this.clientY;
        var ref = this.panel;
        var scrollTop = ref.scrollTop;
        var scrollHeight = ref.scrollHeight;
        var clientHeight = ref.clientHeight;

        if (clientHeight >= scrollHeight || scrollTop === 0 && clientY > 0 || scrollHeight - scrollTop <= clientHeight && clientY < 0) {
          e.cancelable && e.preventDefault();
        }
      }
    }, {
      name: 'show',
      self: true,
      handler: function handler() {
        if (this.mode === 'reveal' && !hasClass(this.panel.parentNode, this.clsMode)) {
          wrapAll(this.panel, '<div>');
          addClass(this.panel.parentNode, this.clsMode);
        }

        css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
        addClass(document.body, this.clsContainer, this.clsFlip);
        css(document.body, 'touch-action', 'pan-y pinch-zoom');
        css(this.$el, 'display', 'block');
        addClass(this.$el, this.clsOverlay);
        addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');
        height(document.body); // force reflow

        addClass(document.body, this.clsContainerAnimation);
        this.clsContainerAnimation && suppressUserScale();
      }
    }, {
      name: 'hide',
      self: true,
      handler: function handler() {
        removeClass(document.body, this.clsContainerAnimation);
        css(document.body, 'touch-action', '');
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        this.clsContainerAnimation && resumeUserScale();

        if (this.mode === 'reveal') {
          unwrap(this.panel);
        }

        removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
        removeClass(this.$el, this.clsOverlay);
        css(this.$el, 'display', '');
        removeClass(document.body, this.clsContainer, this.clsFlip);
        css(document.documentElement, 'overflowY', '');
      }
    }, {
      name: 'swipeLeft swipeRight',
      handler: function handler(e) {
        if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
          this.hide();
        }
      }
    }]
  }; // Chrome in responsive mode zooms page upon opening offcanvas

  function suppressUserScale() {
    getViewport$1().content += ',user-scalable=0';
  }

  function resumeUserScale() {
    var viewport = getViewport$1();
    viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
  }

  function getViewport$1() {
    return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
  }

  var overflowAuto = {
    mixins: [Class],
    props: {
      selContainer: String,
      selContent: String
    },
    data: {
      selContainer: '.uk-modal',
      selContent: '.uk-modal-dialog'
    },
    computed: {
      container: function container(ref, $el) {
        var selContainer = ref.selContainer;
        return closest($el, selContainer);
      },
      content: function content(ref, $el) {
        var selContent = ref.selContent;
        return closest($el, selContent);
      }
    },
    connected: function connected() {
      css(this.$el, 'minHeight', 150);
    },
    update: {
      read: function read() {
        if (!this.content || !this.container) {
          return false;
        }

        return {
          current: toFloat(css(this.$el, 'maxHeight')),
          max: Math.max(150, height(this.container) - (offset(this.content).height - height(this.$el)))
        };
      },
      write: function write(ref) {
        var current = ref.current;
        var max = ref.max;
        css(this.$el, 'maxHeight', max);

        if (Math.round(current) !== Math.round(max)) {
          trigger(this.$el, 'resize');
        }
      },
      events: ['resize']
    }
  };
  var responsive = {
    props: ['width', 'height'],
    connected: function connected() {
      addClass(this.$el, 'uk-responsive-width');
    },
    update: {
      read: function read() {
        return isVisible(this.$el) && this.width && this.height ? {
          width: width(this.$el.parentNode),
          height: this.height
        } : false;
      },
      write: function write(dim) {
        height(this.$el, Dimensions.contain({
          height: this.height,
          width: this.width
        }, dim).height);
      },
      events: ['resize']
    }
  };
  var scroll = {
    props: {
      offset: Number
    },
    data: {
      offset: 0
    },
    methods: {
      scrollTo: function scrollTo(el) {
        var this$1 = this;
        el = el && $(el) || document.body;

        if (trigger(this.$el, 'beforescroll', [this, el])) {
          scrollIntoView(el, {
            offset: this.offset
          }).then(function () {
            return trigger(this$1.$el, 'scrolled', [this$1, el]);
          });
        }
      }
    },
    events: {
      click: function click(e) {
        if (e.defaultPrevented) {
          return;
        }

        e.preventDefault();
        this.scrollTo(escape(decodeURIComponent(this.$el.hash)).substr(1));
      }
    }
  };
  var scrollspy = {
    args: 'cls',
    props: {
      cls: String,
      target: String,
      hidden: Boolean,
      offsetTop: Number,
      offsetLeft: Number,
      repeat: Boolean,
      delay: Number
    },
    data: function data() {
      return {
        cls: false,
        target: false,
        hidden: true,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: false,
        delay: 0,
        inViewClass: 'uk-scrollspy-inview'
      };
    },
    computed: {
      elements: {
        get: function get(ref, $el) {
          var target = ref.target;
          return target ? $$(target, $el) : [$el];
        },
        watch: function watch(elements) {
          if (this.hidden) {
            css(filter(elements, ":not(." + this.inViewClass + ")"), 'visibility', 'hidden');
          }
        },
        immediate: true
      }
    },
    update: [{
      read: function read(ref) {
        var this$1 = this;
        var update = ref.update;

        if (!update) {
          return;
        }

        this.elements.forEach(function (el) {
          var state = el._ukScrollspyState;

          if (!state) {
            state = {
              cls: data(el, 'uk-scrollspy-class') || this$1.cls
            };
          }

          state.show = isInView(el, this$1.offsetTop, this$1.offsetLeft);
          el._ukScrollspyState = state;
        });
      },
      write: function write(data) {
        var this$1 = this; // Let child components be applied at least once first

        if (!data.update) {
          this.$emit();
          return data.update = true;
        }

        this.elements.forEach(function (el) {
          var state = el._ukScrollspyState;

          var toggle = function toggle(inview) {
            css(el, 'visibility', !inview && this$1.hidden ? 'hidden' : '');
            toggleClass(el, this$1.inViewClass, inview);
            toggleClass(el, state.cls);
            trigger(el, inview ? 'inview' : 'outview');
            state.inview = inview;
            this$1.$update(el);
          };

          if (state.show && !state.inview && !state.queued) {
            state.queued = true;
            data.promise = (data.promise || Promise.resolve()).then(function () {
              return new Promise(function (resolve) {
                return setTimeout(resolve, this$1.delay);
              });
            }).then(function () {
              toggle(true);
              setTimeout(function () {
                state.queued = false;
                this$1.$emit();
              }, 300);
            });
          } else if (!state.show && state.inview && !state.queued && this$1.repeat) {
            toggle(false);
          }
        });
      },
      events: ['scroll', 'resize']
    }]
  };
  var scrollspyNav = {
    props: {
      cls: String,
      closest: String,
      scroll: Boolean,
      overflow: Boolean,
      offset: Number
    },
    data: {
      cls: 'uk-active',
      closest: false,
      scroll: false,
      overflow: true,
      offset: 0
    },
    computed: {
      links: {
        get: function get(_, $el) {
          return $$('a[href^="#"]', $el).filter(function (el) {
            return el.hash;
          });
        },
        watch: function watch(links) {
          if (this.scroll) {
            this.$create('scroll', links, {
              offset: this.offset || 0
            });
          }
        },
        immediate: true
      },
      targets: function targets() {
        return $$(this.links.map(function (el) {
          return escape(el.hash).substr(1);
        }).join(','));
      },
      elements: function elements(ref) {
        var selector = ref.closest;
        return closest(this.links, selector || '*');
      }
    },
    update: [{
      read: function read() {
        var this$1 = this;
        var ref = this.targets;
        var length = ref.length;

        if (!length || !isVisible(this.$el)) {
          return false;
        }

        var scrollElement = last(scrollParents(this.targets[0]));
        var scrollTop = scrollElement.scrollTop;
        var scrollHeight = scrollElement.scrollHeight;
        var viewport = getViewport(scrollElement);
        var max = scrollHeight - offset(viewport).height;
        var active = false;

        if (scrollTop === max) {
          active = length - 1;
        } else {
          this.targets.every(function (el, i) {
            if (position(el, viewport).top - this$1.offset <= 0) {
              active = i;
              return true;
            }
          });

          if (active === false && this.overflow) {
            active = 0;
          }
        }

        return {
          active: active
        };
      },
      write: function write(ref) {
        var active = ref.active;
        this.links.forEach(function (el) {
          return el.blur();
        });
        removeClass(this.elements, this.cls);

        if (active !== false) {
          trigger(this.$el, 'active', [active, addClass(this.elements[active], this.cls)]);
        }
      },
      events: ['scroll', 'resize']
    }]
  };
  var sticky = {
    mixins: [Class, Media],
    props: {
      top: null,
      bottom: Boolean,
      offset: String,
      animation: String,
      clsActive: String,
      clsInactive: String,
      clsFixed: String,
      clsBelow: String,
      selTarget: String,
      widthElement: Boolean,
      showOnUp: Boolean,
      targetOffset: Number
    },
    data: {
      top: 0,
      bottom: false,
      offset: 0,
      animation: '',
      clsActive: 'uk-active',
      clsInactive: '',
      clsFixed: 'uk-sticky-fixed',
      clsBelow: 'uk-sticky-below',
      selTarget: '',
      widthElement: false,
      showOnUp: false,
      targetOffset: false
    },
    computed: {
      offset: function offset(ref) {
        var offset = ref.offset;
        return toPx(offset);
      },
      selTarget: function selTarget(ref, $el) {
        var selTarget = ref.selTarget;
        return selTarget && $(selTarget, $el) || $el;
      },
      widthElement: function widthElement(ref, $el) {
        var widthElement = ref.widthElement;
        return query(widthElement, $el) || this.placeholder;
      },
      isActive: {
        get: function get() {
          return hasClass(this.selTarget, this.clsActive);
        },
        set: function set(value) {
          if (value && !this.isActive) {
            replaceClass(this.selTarget, this.clsInactive, this.clsActive);
            trigger(this.$el, 'active');
          } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
            replaceClass(this.selTarget, this.clsActive, this.clsInactive);
            trigger(this.$el, 'inactive');
          }
        }
      }
    },
    connected: function connected() {
      this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
      this.isFixed = false;
      this.isActive = false;
    },
    disconnected: function disconnected() {
      if (this.isFixed) {
        this.hide();
        removeClass(this.selTarget, this.clsInactive);
      }

      _remove(this.placeholder);

      this.placeholder = null;
      this.widthElement = null;
    },
    events: [{
      name: 'load hashchange popstate',
      el: inBrowser && window,
      handler: function handler() {
        var this$1 = this;

        if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
          return;
        }

        var target = $(location.hash);

        if (target) {
          fastdom.read(function () {
            var ref = offset(target);
            var top = ref.top;
            var elTop = offset(this$1.$el).top;
            var elHeight = this$1.$el.offsetHeight;

            if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
              scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
            }
          });
        }
      }
    }],
    update: [{
      read: function read(ref, type) {
        var height = ref.height;

        if (this.isActive && type !== 'update') {
          this.hide();
          height = this.$el.offsetHeight;
          this.show();
        }

        height = !this.isActive ? this.$el.offsetHeight : height;
        this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
        this.bottomOffset = this.topOffset + height;
        var bottom = parseProp('bottom', this);
        this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
        this.bottom = bottom && bottom - this.$el.offsetHeight;
        this.inactive = !this.matchMedia;
        return {
          lastScroll: false,
          height: height,
          margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
        };
      },
      write: function write(ref) {
        var height = ref.height;
        var margins = ref.margins;
        var ref$1 = this;
        var placeholder = ref$1.placeholder;
        css(placeholder, assign({
          height: height
        }, margins));

        if (!within(placeholder, document)) {
          after(this.$el, placeholder);
          attr(placeholder, 'hidden', '');
        }

        this.isActive = !!this.isActive; // force self-assign
      },
      events: ['resize']
    }, {
      read: function read(ref) {
        var scroll = ref.scroll;
        if (scroll === void 0) scroll = 0;
        this.width = offset(isVisible(this.widthElement) ? this.widthElement : this.$el).width;
        this.scroll = window.pageYOffset;
        return {
          dir: scroll <= this.scroll ? 'down' : 'up',
          scroll: this.scroll,
          visible: isVisible(this.$el),
          top: offsetPosition(this.placeholder)[0]
        };
      },
      write: function write(data, type) {
        var this$1 = this;
        var initTimestamp = data.initTimestamp;
        if (initTimestamp === void 0) initTimestamp = 0;
        var dir = data.dir;
        var lastDir = data.lastDir;
        var lastScroll = data.lastScroll;
        var scroll = data.scroll;
        var top = data.top;
        var visible = data.visible;
        var now = performance.now();
        data.lastScroll = scroll;

        if (scroll < 0 || scroll === lastScroll || !visible || this.disabled || this.showOnUp && type !== 'scroll') {
          return;
        }

        if (now - initTimestamp > 300 || dir !== lastDir) {
          data.initScroll = scroll;
          data.initTimestamp = now;
        }

        data.lastDir = dir;

        if (this.showOnUp && !this.isFixed && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
          return;
        }

        if (this.inactive || scroll < this.top || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)) {
          if (!this.isFixed) {
            if (Animation.inProgress(this.$el) && top > scroll) {
              Animation.cancel(this.$el);
              this.hide();
            }

            return;
          }

          this.isFixed = false;

          if (this.animation && scroll > this.topOffset) {
            Animation.cancel(this.$el);
            Animation.out(this.$el, this.animation).then(function () {
              return this$1.hide();
            }, noop);
          } else {
            this.hide();
          }
        } else if (this.isFixed) {
          this.update();
        } else if (this.animation) {
          Animation.cancel(this.$el);
          this.show();
          Animation["in"](this.$el, this.animation)["catch"](noop);
        } else {
          this.show();
        }
      },
      events: ['resize', 'scroll']
    }],
    methods: {
      show: function show() {
        this.isFixed = true;
        this.update();
        attr(this.placeholder, 'hidden', null);
      },
      hide: function hide() {
        this.isActive = false;
        removeClass(this.$el, this.clsFixed, this.clsBelow);
        css(this.$el, {
          position: '',
          top: '',
          width: ''
        });
        attr(this.placeholder, 'hidden', '');
      },
      update: function update() {
        var active = this.top !== 0 || this.scroll > this.top;
        var top = Math.max(0, this.offset);

        if (isNumeric(this.bottom) && this.scroll > this.bottom - this.offset) {
          top = this.bottom - this.scroll;
        }

        css(this.$el, {
          position: 'fixed',
          top: top + "px",
          width: this.width
        });
        this.isActive = active;
        toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
        addClass(this.$el, this.clsFixed);
      }
    }
  };

  function parseProp(prop, ref) {
    var $props = ref.$props;
    var $el = ref.$el;
    var propOffset = ref[prop + "Offset"];
    var value = $props[prop];

    if (!value) {
      return;
    }

    if (isString(value) && value.match(/^-?\d/)) {
      return propOffset + toPx(value);
    } else {
      return offset(value === true ? $el.parentNode : query(value, $el)).bottom;
    }
  }

  var Switcher = {
    mixins: [Togglable],
    args: 'connect',
    props: {
      connect: String,
      toggle: String,
      active: Number,
      swiping: Boolean
    },
    data: {
      connect: '~.uk-switcher',
      toggle: '> * > :first-child',
      active: 0,
      swiping: true,
      cls: 'uk-active',
      clsContainer: 'uk-switcher',
      attrItem: 'uk-switcher-item'
    },
    computed: {
      connects: {
        get: function get(ref, $el) {
          var connect = ref.connect;
          return queryAll(connect, $el);
        },
        watch: function watch(connects) {
          var this$1 = this;
          connects.forEach(function (list) {
            return this$1.updateAria(list.children);
          });

          if (this.swiping) {
            css(connects, 'touch-action', 'pan-y pinch-zoom');
          }
        },
        immediate: true
      },
      toggles: {
        get: function get(ref, $el) {
          var toggle = ref.toggle;
          return $$(toggle, $el).filter(function (el) {
            return !matches(el, '.uk-disabled *, .uk-disabled, [disabled]');
          });
        },
        watch: function watch(toggles) {
          var active = this.index();
          this.show(~active && active || toggles[this.active] || toggles[0]);
        },
        immediate: true
      },
      children: function children() {
        var this$1 = this;
        return _children(this.$el).filter(function (child) {
          return this$1.toggles.some(function (toggle) {
            return within(toggle, child);
          });
        });
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.toggle;
      },
      handler: function handler(e) {
        if (!includes(this.toggles, e.current)) {
          return;
        }

        e.preventDefault();
        this.show(e.current);
      }
    }, {
      name: 'click',
      el: function el() {
        return this.connects;
      },
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(data(e.current, this.attrItem));
      }
    }, {
      name: 'swipeRight swipeLeft',
      filter: function filter() {
        return this.swiping;
      },
      el: function el() {
        return this.connects;
      },
      handler: function handler(ref) {
        var type = ref.type;
        this.show(endsWith(type, 'Left') ? 'next' : 'previous');
      }
    }],
    methods: {
      index: function index() {
        var this$1 = this;
        return findIndex(this.children, function (el) {
          return hasClass(el, this$1.cls);
        });
      },
      show: function show(item) {
        var this$1 = this;
        var prev = this.index();

        var next = _getIndex(item, this.toggles, prev);

        this.children.forEach(function (child, i) {
          toggleClass(child, this$1.cls, next === i);
          attr(this$1.toggles[i], 'aria-expanded', next === i);
        });
        this.connects.forEach(function (ref) {
          var children = ref.children;
          return this$1.toggleElement(toNodes(children).filter(function (child, i) {
            return i !== next && this$1.isToggled(child);
          }), false, prev >= 0).then(function () {
            return this$1.toggleElement(children[next], true, prev >= 0);
          });
        });
      }
    }
  };
  var tab = {
    mixins: [Class],
    "extends": Switcher,
    props: {
      media: Boolean
    },
    data: {
      media: 960,
      attrItem: 'uk-tab-item'
    },
    connected: function connected() {
      var cls = hasClass(this.$el, 'uk-tab-left') ? 'uk-tab-left' : hasClass(this.$el, 'uk-tab-right') ? 'uk-tab-right' : false;

      if (cls) {
        this.$create('toggle', this.$el, {
          cls: cls,
          mode: 'media',
          media: this.media
        });
      }
    }
  };
  var toggle = {
    mixins: [Media, Togglable],
    args: 'target',
    props: {
      href: String,
      target: null,
      mode: 'list',
      queued: Boolean
    },
    data: {
      href: false,
      target: false,
      mode: 'click',
      queued: true
    },
    computed: {
      target: {
        get: function get(ref, $el) {
          var href = ref.href;
          var target = ref.target;
          target = queryAll(target || href, $el);
          return target.length && target || [$el];
        },
        watch: function watch() {
          trigger(this.target, 'updatearia', [this]);
        },
        immediate: true
      }
    },
    events: [{
      name: pointerEnter + " " + pointerLeave,
      filter: function filter() {
        return includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        if (!isTouch(e)) {
          this.toggle("toggle" + (e.type === pointerEnter ? 'show' : 'hide'));
        }
      }
    }, {
      name: 'click',
      filter: function filter() {
        return includes(this.mode, 'click') || hasTouch && includes(this.mode, 'hover');
      },
      handler: function handler(e) {
        // TODO better isToggled handling
        var link;

        if (closest(e.target, 'a[href="#"], a[href=""]') || (link = closest(e.target, 'a[href]')) && (this.cls && !hasClass(this.target, this.cls.split(' ')[0]) || !isVisible(this.target) || link.hash && matches(this.target, link.hash))) {
          e.preventDefault();
        }

        this.toggle();
      }
    }],
    update: {
      read: function read() {
        return includes(this.mode, 'media') && this.media ? {
          match: this.matchMedia
        } : false;
      },
      write: function write(ref) {
        var match = ref.match;
        var toggled = this.isToggled(this.target);

        if (match ? !toggled : toggled) {
          this.toggle();
        }
      },
      events: ['resize']
    },
    methods: {
      toggle: function toggle(type) {
        var this$1 = this;

        if (!trigger(this.target, type || 'toggle', [this])) {
          return;
        }

        if (this.queued) {
          var toggled = this.target.filter(this.isToggled);
          this.toggleElement(toggled, false).then(function () {
            return this$1.toggleElement(this$1.target.filter(function (el) {
              return !includes(toggled, el);
            }), true);
          });
        } else {
          this.toggleElement(this.target);
        }
      }
    }
  };
  var components = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Accordion: Accordion,
    Alert: alert,
    Cover: cover,
    Drop: drop,
    Dropdown: drop,
    FormCustom: formCustom,
    Gif: gif,
    Grid: grid,
    HeightMatch: heightMatch,
    HeightViewport: heightViewport,
    Icon: Icon,
    Img: img,
    Leader: leader,
    Margin: Margin,
    Modal: modal,
    Nav: nav,
    Navbar: navbar,
    Offcanvas: offcanvas,
    OverflowAuto: overflowAuto,
    Responsive: responsive,
    Scroll: scroll,
    Scrollspy: scrollspy,
    ScrollspyNav: scrollspyNav,
    Sticky: sticky,
    Svg: SVG,
    Switcher: Switcher,
    Tab: tab,
    Toggle: toggle,
    Video: Video,
    Close: Close,
    Spinner: Spinner,
    SlidenavNext: Slidenav,
    SlidenavPrevious: Slidenav,
    SearchIcon: Search,
    Marker: IconComponent,
    NavbarToggleIcon: IconComponent,
    OverlayIcon: IconComponent,
    PaginationNext: IconComponent,
    PaginationPrevious: IconComponent,
    Totop: IconComponent
  }); // register components

  each(components, function (component, name) {
    return UIkit.component(name, component);
  }); // core functionality

  UIkit.use(Core);
  boot(UIkit);
  var countdown = {
    mixins: [Class],
    props: {
      date: String,
      clsWrapper: String
    },
    data: {
      date: '',
      clsWrapper: '.uk-countdown-%unit%'
    },
    computed: {
      date: function date(ref) {
        var date = ref.date;
        return Date.parse(date);
      },
      days: function days(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'days'), $el);
      },
      hours: function hours(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'hours'), $el);
      },
      minutes: function minutes(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'minutes'), $el);
      },
      seconds: function seconds(ref, $el) {
        var clsWrapper = ref.clsWrapper;
        return $(clsWrapper.replace('%unit%', 'seconds'), $el);
      },
      units: function units() {
        var this$1 = this;
        return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) {
          return this$1[unit];
        });
      }
    },
    connected: function connected() {
      this.start();
    },
    disconnected: function disconnected() {
      var this$1 = this;
      this.stop();
      this.units.forEach(function (unit) {
        return empty(this$1[unit]);
      });
    },
    events: [{
      name: 'visibilitychange',
      el: inBrowser && document,
      handler: function handler() {
        if (document.hidden) {
          this.stop();
        } else {
          this.start();
        }
      }
    }],
    update: {
      write: function write() {
        var this$1 = this;
        var timespan = getTimeSpan(this.date);

        if (timespan.total <= 0) {
          this.stop();
          timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
        }

        this.units.forEach(function (unit) {
          var digits = String(Math.floor(timespan[unit]));
          digits = digits.length < 2 ? "0" + digits : digits;
          var el = this$1[unit];

          if (el.textContent !== digits) {
            digits = digits.split('');

            if (digits.length !== el.children.length) {
              html(el, digits.map(function () {
                return '<span></span>';
              }).join(''));
            }

            digits.forEach(function (digit, i) {
              return el.children[i].textContent = digit;
            });
          }
        });
      }
    },
    methods: {
      start: function start() {
        this.stop();

        if (this.date && this.units.length) {
          this.$update();
          this.timer = setInterval(this.$update, 1000);
        }
      },
      stop: function stop() {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      }
    }
  };

  function getTimeSpan(date) {
    var total = date - Date.now();
    return {
      total: total,
      seconds: total / 1000 % 60,
      minutes: total / 1000 / 60 % 60,
      hours: total / 1000 / 60 / 60 % 24,
      days: total / 1000 / 60 / 60 / 24
    };
  }

  var targetClass = 'uk-animation-target';
  var Animate = {
    props: {
      animation: Number
    },
    data: {
      animation: 150
    },
    computed: {
      target: function target() {
        return this.$el;
      }
    },
    methods: {
      animate: function animate(action) {
        var this$1 = this;
        addStyle();

        var children$1 = _children(this.target);

        var propsFrom = children$1.map(function (el) {
          return getProps(el, true);
        });
        var oldHeight = height(this.target);
        var oldScrollY = window.pageYOffset;
        action();
        Transition.cancel(this.target);
        children$1.forEach(Transition.cancel);
        reset(this.target);
        this.$update(this.target, 'resize');
        fastdom.flush();
        var newHeight = height(this.target);
        children$1 = children$1.concat(_children(this.target).filter(function (el) {
          return !includes(children$1, el);
        }));
        var propsTo = children$1.map(function (el, i) {
          return el.parentNode && i in propsFrom ? propsFrom[i] ? isVisible(el) ? getPositionWithMargin(el) : {
            opacity: 0
          } : {
            opacity: isVisible(el) ? 1 : 0
          } : false;
        });
        propsFrom = propsTo.map(function (props, i) {
          var from = children$1[i].parentNode === this$1.target ? propsFrom[i] || getProps(children$1[i]) : false;

          if (from) {
            if (!props) {
              delete from.opacity;
            } else if (!('opacity' in props)) {
              var opacity = from.opacity;

              if (opacity % 1) {
                props.opacity = 1;
              } else {
                delete from.opacity;
              }
            }
          }

          return from;
        });
        addClass(this.target, targetClass);
        children$1.forEach(function (el, i) {
          return propsFrom[i] && css(el, propsFrom[i]);
        });
        css(this.target, {
          height: oldHeight,
          display: 'block'
        });
        scrollTop(window, oldScrollY);
        return Promise.all(children$1.map(function (el, i) {
          return ['top', 'left', 'height', 'width'].some(function (prop) {
            return propsFrom[i][prop] !== propsTo[i][prop];
          }) && Transition.start(el, propsTo[i], this$1.animation, 'ease');
        }).concat(oldHeight !== newHeight && Transition.start(this.target, {
          height: newHeight
        }, this.animation, 'ease'))).then(function () {
          children$1.forEach(function (el, i) {
            return css(el, {
              display: propsTo[i].opacity === 0 ? 'none' : '',
              zIndex: ''
            });
          });
          reset(this$1.target);
          this$1.$update(this$1.target, 'resize');
          fastdom.flush(); // needed for IE11
        }, noop);
      }
    }
  };

  function getProps(el, opacity) {
    var zIndex = css(el, 'zIndex');
    return isVisible(el) ? assign({
      display: '',
      opacity: opacity ? css(el, 'opacity') : '0',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: zIndex === 'auto' ? index(el) : zIndex
    }, getPositionWithMargin(el)) : false;
  }

  function reset(el) {
    css(el.children, {
      height: '',
      left: '',
      opacity: '',
      pointerEvents: '',
      position: '',
      top: '',
      width: ''
    });
    removeClass(el, targetClass);
    css(el, {
      height: '',
      display: ''
    });
  }

  function getPositionWithMargin(el) {
    var ref = offset(el);
    var height = ref.height;
    var width = ref.width;
    var ref$1 = position(el);
    var top = ref$1.top;
    var left = ref$1.left;
    return {
      top: top,
      left: left,
      height: height,
      width: width
    };
  }

  var style;

  function addStyle() {
    if (style) {
      return;
    }

    style = append(document.head, '<style>').sheet;
    style.insertRule("." + targetClass + " > * {\n            margin-top: 0 !important;\n            transform: none !important;\n        }", 0);
  }

  var filter$1 = {
    mixins: [Animate],
    args: 'target',
    props: {
      target: Boolean,
      selActive: Boolean
    },
    data: {
      target: null,
      selActive: false,
      attrItem: 'uk-filter-control',
      cls: 'uk-active',
      animation: 250
    },
    computed: {
      toggles: {
        get: function get(ref, $el) {
          var attrItem = ref.attrItem;
          return $$("[" + this.attrItem + "],[data-" + this.attrItem + "]", $el);
        },
        watch: function watch() {
          var this$1 = this;
          this.updateState();

          if (this.selActive !== false) {
            var actives = $$(this.selActive, this.$el);
            this.toggles.forEach(function (el) {
              return toggleClass(el, this$1.cls, includes(actives, el));
            });
          }
        },
        immediate: true
      },
      target: function target(ref, $el) {
        var target = ref.target;
        return $(target, $el);
      },
      children: {
        get: function get() {
          return _children(this.target);
        },
        watch: function watch(list, old) {
          if (!isEqualList(list, old)) {
            this.updateState();
          }
        }
      }
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.apply(e.current);
      }
    }],
    methods: {
      apply: function apply(el) {
        this.setState(mergeState(el, this.attrItem, this.getState()));
      },
      getState: function getState() {
        var this$1 = this;
        return this.toggles.filter(function (item) {
          return hasClass(item, this$1.cls);
        }).reduce(function (state, el) {
          return mergeState(el, this$1.attrItem, state);
        }, {
          filter: {
            '': ''
          },
          sort: []
        });
      },
      setState: function setState(state, animate) {
        var this$1 = this;
        if (animate === void 0) animate = true;
        state = assign({
          filter: {
            '': ''
          },
          sort: []
        }, state);
        trigger(this.$el, 'beforeFilter', [this, state]);
        var ref = this;
        var children = ref.children;
        this.toggles.forEach(function (el) {
          return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state));
        });

        var apply = function apply() {
          var selector = getSelector(state);
          children.forEach(function (el) {
            return css(el, 'display', selector && !matches(el, selector) ? 'none' : '');
          });
          var ref = state.sort;
          var sort = ref[0];
          var order = ref[1];

          if (sort) {
            var sorted = sortItems(children, sort, order);

            if (!isEqual(sorted, children)) {
              sorted.forEach(function (el) {
                return append(this$1.target, el);
              });
            }
          }
        };

        if (animate) {
          this.animate(apply).then(function () {
            return trigger(this$1.$el, 'afterFilter', [this$1]);
          });
        } else {
          apply();
          trigger(this.$el, 'afterFilter', [this]);
        }
      },
      updateState: function updateState() {
        var this$1 = this;
        fastdom.write(function () {
          return this$1.setState(this$1.getState(), false);
        });
      }
    }
  };

  function getFilter(el, attr) {
    return parseOptions(data(el, attr), ['filter']);
  }

  function mergeState(el, attr, state) {
    var filterBy = getFilter(el, attr);
    var filter = filterBy.filter;
    var group = filterBy.group;
    var sort = filterBy.sort;
    var order = filterBy.order;
    if (order === void 0) order = 'asc';

    if (filter || isUndefined(sort)) {
      if (group) {
        if (filter) {
          delete state.filter[''];
          state.filter[group] = filter;
        } else {
          delete state.filter[group];

          if (isEmpty(state.filter) || '' in state.filter) {
            state.filter = {
              '': filter || ''
            };
          }
        }
      } else {
        state.filter = {
          '': filter || ''
        };
      }
    }

    if (!isUndefined(sort)) {
      state.sort = [sort, order];
    }

    return state;
  }

  function matchFilter(el, attr, ref) {
    var stateFilter = ref.filter;
    if (stateFilter === void 0) stateFilter = {
      '': ''
    };
    var ref_sort = ref.sort;
    var stateSort = ref_sort[0];
    var stateOrder = ref_sort[1];
    var ref$1 = getFilter(el, attr);
    var filter = ref$1.filter;
    if (filter === void 0) filter = '';
    var group = ref$1.group;
    if (group === void 0) group = '';
    var sort = ref$1.sort;
    var order = ref$1.order;
    if (order === void 0) order = 'asc';
    return isUndefined(sort) ? group in stateFilter && filter === stateFilter[group] || !filter && group && !(group in stateFilter) && !stateFilter[''] : stateSort === sort && stateOrder === order;
  }

  function isEqualList(listA, listB) {
    return listA.length === listB.length && listA.every(function (el) {
      return ~listB.indexOf(el);
    });
  }

  function getSelector(ref) {
    var filter = ref.filter;
    var selector = '';
    each(filter, function (value) {
      return selector += value || '';
    });
    return selector;
  }

  function sortItems(nodes, sort, order) {
    return assign([], nodes).sort(function (a, b) {
      return data(a, sort).localeCompare(data(b, sort), undefined, {
        numeric: true
      }) * (order === 'asc' || -1);
    });
  }

  var Animations = {
    slide: {
      show: function show(dir) {
        return [{
          transform: _translate(dir * -100)
        }, {
          transform: _translate()
        }];
      },
      percent: function percent(current) {
        return translated(current);
      },
      translate: function translate(percent, dir) {
        return [{
          transform: _translate(dir * -100 * percent)
        }, {
          transform: _translate(dir * 100 * (1 - percent))
        }];
      }
    }
  };

  function translated(el) {
    return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
  }

  function _translate(value, unit) {
    if (value === void 0) value = 0;
    if (unit === void 0) unit = '%';
    value += value ? unit : '';
    return isIE ? "translateX(" + value + ")" : "translate3d(" + value + ", 0, 0)"; // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
  }

  function scale3d(value) {
    return "scale3d(" + value + ", " + value + ", 1)";
  }

  var Animations$1 = assign({}, Animations, {
    fade: {
      show: function show() {
        return [{
          opacity: 0
        }, {
          opacity: 1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent
        }, {
          opacity: percent
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: scale3d(1 - .2)
        }, {
          opacity: 1,
          transform: scale3d(1)
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          transform: scale3d(1 - .2 * percent)
        }, {
          opacity: percent,
          transform: scale3d(1 - .2 + .2 * percent)
        }];
      }
    }
  });

  function Transitioner(prev, next, dir, ref) {
    var animation = ref.animation;
    var easing = ref.easing;
    var _percent = animation.percent;
    var _translate2 = animation.translate;
    var show = animation.show;
    if (show === void 0) show = noop;
    var props = show(dir);
    var deferred = new Deferred();
    return {
      dir: dir,
      show: function show(duration, percent, linear) {
        var this$1 = this;
        if (percent === void 0) percent = 0;
        var timing = linear ? 'linear' : easing;
        duration -= Math.round(duration * clamp(percent, -1, 1));
        this.translate(percent);
        triggerUpdate(next, 'itemin', {
          percent: percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        triggerUpdate(prev, 'itemout', {
          percent: 1 - percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        Promise.all([Transition.start(next, props[1], duration, timing), Transition.start(prev, props[0], duration, timing)]).then(function () {
          this$1.reset();
          deferred.resolve();
        }, noop);
        return deferred.promise;
      },
      stop: function stop() {
        return Transition.stop([next, prev]);
      },
      cancel: function cancel() {
        Transition.cancel([next, prev]);
      },
      reset: function reset() {
        for (var prop in props[0]) {
          css([next, prev], prop, '');
        }
      },
      forward: function forward(duration, percent) {
        if (percent === void 0) percent = this.percent();
        Transition.cancel([next, prev]);
        return this.show(duration, percent, true);
      },
      translate: function translate(percent) {
        this.reset();

        var props = _translate2(percent, dir);

        css(next, props[1]);
        css(prev, props[0]);
        triggerUpdate(next, 'itemtranslatein', {
          percent: percent,
          dir: dir
        });
        triggerUpdate(prev, 'itemtranslateout', {
          percent: 1 - percent,
          dir: dir
        });
      },
      percent: function percent() {
        return _percent(prev || next, next, dir);
      },
      getDistance: function getDistance() {
        return prev && prev.offsetWidth;
      }
    };
  }

  function triggerUpdate(el, type, data) {
    trigger(el, createEvent(type, false, false, data));
  }

  var SliderAutoplay = {
    props: {
      autoplay: Boolean,
      autoplayInterval: Number,
      pauseOnHover: Boolean
    },
    data: {
      autoplay: false,
      autoplayInterval: 7000,
      pauseOnHover: true
    },
    connected: function connected() {
      this.autoplay && this.startAutoplay();
    },
    disconnected: function disconnected() {
      this.stopAutoplay();
    },
    update: function update() {
      attr(this.slides, 'tabindex', '-1');
    },
    events: [{
      name: 'visibilitychange',
      el: inBrowser && document,
      filter: function filter() {
        return this.autoplay;
      },
      handler: function handler() {
        if (document.hidden) {
          this.stopAutoplay();
        } else {
          this.startAutoplay();
        }
      }
    }],
    methods: {
      startAutoplay: function startAutoplay() {
        var this$1 = this;
        this.stopAutoplay();
        this.interval = setInterval(function () {
          return (!this$1.draggable || !$(':focus', this$1.$el)) && (!this$1.pauseOnHover || !matches(this$1.$el, ':hover')) && !this$1.stack.length && this$1.show('next');
        }, this.autoplayInterval);
      },
      stopAutoplay: function stopAutoplay() {
        this.interval && clearInterval(this.interval);
      }
    }
  };
  var SliderDrag = {
    props: {
      draggable: Boolean
    },
    data: {
      draggable: true,
      threshold: 10
    },
    created: function created() {
      var this$1 = this;
      ['start', 'move', 'end'].forEach(function (key) {
        var fn = this$1[key];

        this$1[key] = function (e) {
          var pos = getEventPos(e).x * (isRtl ? -1 : 1);
          this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
          this$1.pos = pos;
          fn(e);
        };
      });
    },
    events: [{
      name: pointerDown,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(e) {
        if (!this.draggable || !isTouch(e) && hasTextNodesOnly(e.target) || closest(e.target, selInput) || e.button > 0 || this.length < 2) {
          return;
        }

        this.start(e);
      }
    }, {
      // Workaround for iOS 11 bug: https://bugs.webkit.org/show_bug.cgi?id=184250
      name: 'touchmove',
      passive: false,
      handler: 'move',
      filter: function filter() {
        return pointerMove === 'touchmove';
      },
      delegate: function delegate() {
        return this.selSlides;
      }
    }, {
      name: 'dragstart',
      handler: function handler(e) {
        e.preventDefault();
      }
    }],
    methods: {
      start: function start() {
        var this$1 = this;
        this.drag = this.pos;

        if (this._transitioner) {
          this.percent = this._transitioner.percent();
          this.drag += this._transitioner.getDistance() * this.percent * this.dir;

          this._transitioner.cancel();

          this._transitioner.translate(this.percent);

          this.dragging = true;
          this.stack = [];
        } else {
          this.prevIndex = this.index;
        } // See above workaround notice


        var off = pointerMove !== 'touchmove' ? on(document, pointerMove, this.move, {
          passive: false
        }) : noop;

        this.unbindMove = function () {
          off();
          this$1.unbindMove = null;
        };

        on(window, 'scroll', this.unbindMove);
        on(window.visualViewport, 'resize', this.unbindMove);
        on(document, pointerUp + " " + pointerCancel, this.end, true);
        css(this.list, 'userSelect', 'none');
      },
      move: function move(e) {
        var this$1 = this; // See above workaround notice

        if (!this.unbindMove) {
          return;
        }

        var distance = this.pos - this.drag;

        if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
          return;
        }

        css(this.list, 'pointerEvents', 'none');
        e.cancelable && e.preventDefault();
        this.dragging = true;
        this.dir = distance < 0 ? 1 : -1;
        var ref = this;
        var slides = ref.slides;
        var ref$1 = this;
        var prevIndex = ref$1.prevIndex;
        var dis = Math.abs(distance);
        var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
        var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

        while (nextIndex !== prevIndex && dis > width) {
          this.drag -= width * this.dir;
          prevIndex = nextIndex;
          dis -= width;
          nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
          width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
        }

        this.percent = dis / width;
        var prev = slides[prevIndex];
        var next = slides[nextIndex];
        var changed = this.index !== nextIndex;
        var edge = prevIndex === nextIndex;
        var itemShown;
        [this.index, this.prevIndex].filter(function (i) {
          return !includes([nextIndex, prevIndex], i);
        }).forEach(function (i) {
          trigger(slides[i], 'itemhidden', [this$1]);

          if (edge) {
            itemShown = true;
            this$1.prevIndex = prevIndex;
          }
        });

        if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
          trigger(slides[this.index], 'itemshown', [this]);
        }

        if (changed) {
          this.prevIndex = prevIndex;
          this.index = nextIndex;
          !edge && trigger(prev, 'beforeitemhide', [this]);
          trigger(next, 'beforeitemshow', [this]);
        }

        this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

        if (changed) {
          !edge && trigger(prev, 'itemhide', [this]);
          trigger(next, 'itemshow', [this]);
        }
      },
      end: function end() {
        off(window, 'scroll', this.unbindMove);
        off(window.visualViewport, 'resize', this.unbindMove);
        this.unbindMove && this.unbindMove();
        off(document, pointerUp, this.end, true);

        if (this.dragging) {
          this.dragging = null;

          if (this.index === this.prevIndex) {
            this.percent = 1 - this.percent;
            this.dir *= -1;

            this._show(false, this.index, true);

            this._transitioner = null;
          } else {
            var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
            this.index = dirChange ? this.index : this.prevIndex;

            if (dirChange) {
              this.percent = 1 - this.percent;
            }

            this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
          }
        }

        css(this.list, {
          userSelect: '',
          pointerEvents: ''
        });
        this.drag = this.percent = null;
      }
    }
  };

  function hasTextNodesOnly(el) {
    return !el.children.length && el.childNodes.length;
  }

  var SliderNav = {
    data: {
      selNav: false
    },
    computed: {
      nav: function nav(ref, $el) {
        var selNav = ref.selNav;
        return $(selNav, $el);
      },
      selNavItem: function selNavItem(ref) {
        var attrItem = ref.attrItem;
        return "[" + attrItem + "],[data-" + attrItem + "]";
      },
      navItems: function navItems(_, $el) {
        return $$(this.selNavItem, $el);
      }
    },
    update: {
      write: function write() {
        var this$1 = this;

        if (this.nav && this.length !== this.nav.children.length) {
          html(this.nav, this.slides.map(function (_, i) {
            return "<li " + this$1.attrItem + "=\"" + i + "\"><a href></a></li>";
          }).join(''));
        }

        toggleClass($$(this.selNavItem, this.$el).concat(this.nav), 'uk-hidden', !this.maxIndex);
        this.updateNav();
      },
      events: ['resize']
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.selNavItem;
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(data(e.current, this.attrItem));
      }
    }, {
      name: 'itemshow',
      handler: 'updateNav'
    }],
    methods: {
      updateNav: function updateNav() {
        var this$1 = this;
        var i = this.getValidIndex();
        this.navItems.forEach(function (el) {
          var cmd = data(el, this$1.attrItem);
          toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
          toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
        });
      }
    }
  };
  var Slider = {
    mixins: [SliderAutoplay, SliderDrag, SliderNav],
    props: {
      clsActivated: Boolean,
      easing: String,
      index: Number,
      finite: Boolean,
      velocity: Number,
      selSlides: String
    },
    data: function data() {
      return {
        easing: 'ease',
        finite: false,
        velocity: 1,
        index: 0,
        prevIndex: -1,
        stack: [],
        percent: 0,
        clsActive: 'uk-active',
        clsActivated: false,
        Transitioner: false,
        transitionOptions: {}
      };
    },
    connected: function connected() {
      this.prevIndex = -1;
      this.index = this.getValidIndex(this.index);
      this.stack = [];
    },
    disconnected: function disconnected() {
      removeClass(this.slides, this.clsActive);
    },
    computed: {
      duration: function duration(ref, $el) {
        var velocity = ref.velocity;
        return speedUp($el.offsetWidth / velocity);
      },
      list: function list(ref, $el) {
        var selList = ref.selList;
        return $(selList, $el);
      },
      maxIndex: function maxIndex() {
        return this.length - 1;
      },
      selSlides: function selSlides(ref) {
        var selList = ref.selList;
        var selSlides = ref.selSlides;
        return selList + " " + (selSlides || '> *');
      },
      slides: {
        get: function get() {
          return $$(this.selSlides, this.$el);
        },
        watch: function watch() {
          this.$reset();
        }
      },
      length: function length() {
        return this.slides.length;
      }
    },
    events: {
      itemshown: function itemshown() {
        this.$update(this.list);
      }
    },
    methods: {
      show: function show(index, force) {
        var this$1 = this;
        if (force === void 0) force = false;

        if (this.dragging || !this.length) {
          return;
        }

        var ref = this;
        var stack = ref.stack;
        var queueIndex = force ? 0 : stack.length;

        var reset = function reset() {
          stack.splice(queueIndex, 1);

          if (stack.length) {
            this$1.show(stack.shift(), true);
          }
        };

        stack[force ? 'unshift' : 'push'](index);

        if (!force && stack.length > 1) {
          if (stack.length === 2) {
            this._transitioner.forward(Math.min(this.duration, 200));
          }

          return;
        }

        var prevIndex = this.getIndex(this.index);
        var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
        var nextIndex = this.getIndex(index, this.index);
        var next = this.slides[nextIndex];

        if (prev === next) {
          reset();
          return;
        }

        this.dir = getDirection(index, prevIndex);
        this.prevIndex = prevIndex;
        this.index = nextIndex;

        if (prev && !trigger(prev, 'beforeitemhide', [this]) || !trigger(next, 'beforeitemshow', [this, prev])) {
          this.index = this.prevIndex;
          reset();
          return;
        }

        var promise = this._show(prev, next, force).then(function () {
          prev && trigger(prev, 'itemhidden', [this$1]);
          trigger(next, 'itemshown', [this$1]);
          return new Promise(function (resolve) {
            fastdom.write(function () {
              stack.shift();

              if (stack.length) {
                this$1.show(stack.shift(), true);
              } else {
                this$1._transitioner = null;
              }

              resolve();
            });
          });
        });

        prev && trigger(prev, 'itemhide', [this]);
        trigger(next, 'itemshow', [this]);
        return promise;
      },
      getIndex: function getIndex(index, prev) {
        if (index === void 0) index = this.index;
        if (prev === void 0) prev = this.index;
        return clamp(_getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
      },
      getValidIndex: function getValidIndex(index, prevIndex) {
        if (index === void 0) index = this.index;
        if (prevIndex === void 0) prevIndex = this.prevIndex;
        return this.getIndex(index, prevIndex);
      },
      _show: function _show(prev, next, force) {
        this._transitioner = this._getTransitioner(prev, next, this.dir, assign({
          easing: force ? next.offsetWidth < 600 ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          /* easeOutQuad */
          : 'cubic-bezier(0.165, 0.84, 0.44, 1)'
          /* easeOutQuart */
          : this.easing
        }, this.transitionOptions));

        if (!force && !prev) {
          this._translate(1);

          return Promise.resolve();
        }

        var ref = this.stack;
        var length = ref.length;
        return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);
      },
      _getDistance: function _getDistance(prev, next) {
        return this._getTransitioner(prev, prev !== next && next).getDistance();
      },
      _translate: function _translate(percent, prev, next) {
        if (prev === void 0) prev = this.prevIndex;
        if (next === void 0) next = this.index;

        var transitioner = this._getTransitioner(prev !== next ? prev : false, next);

        transitioner.translate(percent);
        return transitioner;
      },
      _getTransitioner: function _getTransitioner(prev, next, dir, options) {
        if (prev === void 0) prev = this.prevIndex;
        if (next === void 0) next = this.index;
        if (dir === void 0) dir = this.dir || 1;
        if (options === void 0) options = this.transitionOptions;
        return new this.Transitioner(isNumber(prev) ? this.slides[prev] : prev, isNumber(next) ? this.slides[next] : next, dir * (isRtl ? -1 : 1), options);
      }
    }
  };

  function getDirection(index, prevIndex) {
    return index === 'next' ? 1 : index === 'previous' ? -1 : index < prevIndex ? -1 : 1;
  }

  function speedUp(x) {
    return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
  }

  var Slideshow = {
    mixins: [Slider],
    props: {
      animation: String
    },
    data: {
      animation: 'slide',
      clsActivated: 'uk-transition-active',
      Animations: Animations,
      Transitioner: Transitioner
    },
    computed: {
      animation: function animation(ref) {
        var animation = ref.animation;
        var Animations = ref.Animations;
        return assign(Animations[animation] || Animations.slide, {
          name: animation
        });
      },
      transitionOptions: function transitionOptions() {
        return {
          animation: this.animation
        };
      }
    },
    events: {
      'itemshow itemhide itemshown itemhidden': function itemshowItemhideItemshownItemhidden(ref) {
        var target = ref.target;
        this.$update(target);
      },
      beforeitemshow: function beforeitemshow(ref) {
        var target = ref.target;
        addClass(target, this.clsActive);
      },
      itemshown: function itemshown(ref) {
        var target = ref.target;
        addClass(target, this.clsActivated);
      },
      itemhidden: function itemhidden(ref) {
        var target = ref.target;
        removeClass(target, this.clsActive, this.clsActivated);
      }
    }
  };
  var LightboxPanel = {
    mixins: [Container, Modal, Togglable, Slideshow],
    functional: true,
    props: {
      delayControls: Number,
      preload: Number,
      videoAutoplay: Boolean,
      template: String
    },
    data: function data() {
      return {
        preload: 1,
        videoAutoplay: false,
        delayControls: 3000,
        items: [],
        cls: 'uk-open',
        clsPage: 'uk-lightbox-page',
        selList: '.uk-lightbox-items',
        attrItem: 'uk-lightbox-item',
        selClose: '.uk-close-large',
        selCaption: '.uk-lightbox-caption',
        pauseOnHover: false,
        velocity: 2,
        Animations: Animations$1,
        template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
      };
    },
    created: function created() {
      var $el = $(this.template);
      var list = $(this.selList, $el);
      this.items.forEach(function () {
        return append(list, '<li>');
      });
      this.$mount(append(this.container, $el));
    },
    computed: {
      caption: function caption(ref, $el) {
        var selCaption = ref.selCaption;
        return $('.uk-lightbox-caption', $el);
      }
    },
    events: [{
      name: pointerMove + " " + pointerDown + " keydown",
      handler: 'showControls'
    }, {
      name: 'click',
      self: true,
      delegate: function delegate() {
        return this.selSlides;
      },
      handler: function handler(e) {
        if (e.defaultPrevented) {
          return;
        }

        this.hide();
      }
    }, {
      name: 'shown',
      self: true,
      handler: function handler() {
        this.showControls();
      }
    }, {
      name: 'hide',
      self: true,
      handler: function handler() {
        this.hideControls();
        removeClass(this.slides, this.clsActive);
        Transition.stop(this.slides);
      }
    }, {
      name: 'hidden',
      self: true,
      handler: function handler() {
        this.$destroy(true);
      }
    }, {
      name: 'keyup',
      el: inBrowser && document,
      handler: function handler(e) {
        if (!this.isToggled(this.$el) || !this.draggable) {
          return;
        }

        switch (e.keyCode) {
          case 37:
            this.show('previous');
            break;

          case 39:
            this.show('next');
            break;
        }
      }
    }, {
      name: 'beforeitemshow',
      handler: function handler(e) {
        if (this.isToggled()) {
          return;
        }

        this.draggable = false;
        e.preventDefault();
        this.toggleElement(this.$el, true, false);
        this.animation = Animations$1['scale'];
        removeClass(e.target, this.clsActive);
        this.stack.splice(1, 0, this.index);
      }
    }, {
      name: 'itemshow',
      handler: function handler() {
        html(this.caption, this.getItem().caption || '');

        for (var j = -this.preload; j <= this.preload; j++) {
          this.loadItem(this.index + j);
        }
      }
    }, {
      name: 'itemshown',
      handler: function handler() {
        this.draggable = this.$props.draggable;
      }
    }, {
      name: 'itemload',
      handler: function handler(_, item) {
        var this$1 = this;
        var src = item.source;
        var type = item.type;
        var alt = item.alt;
        if (alt === void 0) alt = '';
        var poster = item.poster;
        var attrs = item.attrs;
        if (attrs === void 0) attrs = {};
        this.setItem(item, '<span uk-spinner></span>');

        if (!src) {
          return;
        }

        var matches;
        var iframeAttrs = {
          frameborder: '0',
          allow: 'autoplay',
          allowfullscreen: '',
          style: 'max-width: 100%; box-sizing: border-box;',
          'uk-responsive': '',
          'uk-video': "" + this.videoAutoplay
        }; // Image

        if (type === 'image' || src.match(/\.(jpe?g|png|gif|svg|webp)($|\?)/i)) {
          getImage(src, attrs.srcset, attrs.size).then(function (ref) {
            var width = ref.width;
            var height = ref.height;
            return this$1.setItem(item, createEl('img', assign({
              src: src,
              width: width,
              height: height,
              alt: alt
            }, attrs)));
          }, function () {
            return this$1.setError(item);
          }); // Video
        } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {
          var video = createEl('video', assign({
            src: src,
            poster: poster,
            controls: '',
            playsinline: '',
            'uk-video': "" + this.videoAutoplay
          }, attrs));
          on(video, 'loadedmetadata', function () {
            attr(video, {
              width: video.videoWidth,
              height: video.videoHeight
            });
            this$1.setItem(item, video);
          });
          on(video, 'error', function () {
            return this$1.setError(item);
          }); // Iframe
        } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {
          this.setItem(item, createEl('iframe', assign({
            src: src,
            frameborder: '0',
            allowfullscreen: '',
            "class": 'uk-lightbox-iframe'
          }, attrs))); // YouTube
        } else if (matches = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) {
          this.setItem(item, createEl('iframe', assign({
            src: "https://www.youtube" + (matches[1] || '') + ".com/embed/" + matches[2] + (matches[3] ? "?" + matches[3] : ''),
            width: 1920,
            height: 1080
          }, iframeAttrs, attrs))); // Vimeo
        } else if (matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) {
          ajax("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(src), {
            responseType: 'json',
            withCredentials: false
          }).then(function (ref) {
            var ref_response = ref.response;
            var height = ref_response.height;
            var width = ref_response.width;
            return this$1.setItem(item, createEl('iframe', assign({
              src: "https://player.vimeo.com/video/" + matches[1] + (matches[2] ? "?" + matches[2] : ''),
              width: width,
              height: height
            }, iframeAttrs, attrs)));
          }, function () {
            return this$1.setError(item);
          });
        }
      }
    }],
    methods: {
      loadItem: function loadItem(index) {
        if (index === void 0) index = this.index;
        var item = this.getItem(index);

        if (!this.getSlide(item).childElementCount) {
          trigger(this.$el, 'itemload', [item]);
        }
      },
      getItem: function getItem(index) {
        if (index === void 0) index = this.index;
        return this.items[_getIndex(index, this.slides)];
      },
      setItem: function setItem(item, content) {
        trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content)]);
      },
      getSlide: function getSlide(item) {
        return this.slides[this.items.indexOf(item)];
      },
      setError: function setError(item) {
        this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
      },
      showControls: function showControls() {
        clearTimeout(this.controlsTimer);
        this.controlsTimer = setTimeout(this.hideControls, this.delayControls);
        addClass(this.$el, 'uk-active', 'uk-transition-active');
      },
      hideControls: function hideControls() {
        removeClass(this.$el, 'uk-active', 'uk-transition-active');
      }
    }
  };

  function createEl(tag, attrs) {
    var el = fragment("<" + tag + ">");
    attr(el, attrs);
    return el;
  }

  var lightbox = {
    install: install$2,
    props: {
      toggle: String
    },
    data: {
      toggle: 'a'
    },
    computed: {
      toggles: {
        get: function get(ref, $el) {
          var toggle = ref.toggle;
          return $$(toggle, $el);
        },
        watch: function watch() {
          this.hide();
        }
      }
    },
    disconnected: function disconnected() {
      this.hide();
    },
    events: [{
      name: 'click',
      delegate: function delegate() {
        return this.toggle + ":not(.uk-disabled)";
      },
      handler: function handler(e) {
        e.preventDefault();
        this.show(e.current);
      }
    }],
    methods: {
      show: function show(index) {
        var this$1 = this;
        var items = uniqueBy(this.toggles.map(toItem), 'source');

        if (isElement(index)) {
          var ref = toItem(index);
          var source = ref.source;
          index = findIndex(items, function (ref) {
            var src = ref.source;
            return source === src;
          });
        }

        this.panel = this.panel || this.$create('lightboxPanel', assign({}, this.$props, {
          items: items
        }));
        on(this.panel.$el, 'hidden', function () {
          return this$1.panel = false;
        });
        return this.panel.show(index);
      },
      hide: function hide() {
        return this.panel && this.panel.hide();
      }
    }
  };

  function install$2(UIkit, Lightbox) {
    if (!UIkit.lightboxPanel) {
      UIkit.component('lightboxPanel', LightboxPanel);
    }

    assign(Lightbox.props, UIkit.component('lightboxPanel').options.props);
  }

  function toItem(el) {
    var item = {};
    ['href', 'caption', 'type', 'poster', 'alt', 'attrs'].forEach(function (attr) {
      item[attr === 'href' ? 'source' : attr] = data(el, attr);
    });
    item.attrs = parseOptions(item.attrs);
    return item;
  }

  var obj;
  var notification = {
    functional: true,
    args: ['message', 'status'],
    data: {
      message: '',
      status: '',
      timeout: 5000,
      group: null,
      pos: 'top-center',
      clsContainer: 'uk-notification',
      clsClose: 'uk-notification-close',
      clsMsg: 'uk-notification-message'
    },
    install: install$3,
    computed: {
      marginProp: function marginProp(ref) {
        var pos = ref.pos;
        return "margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom');
      },
      startProps: function startProps() {
        var obj;
        return obj = {
          opacity: 0
        }, obj[this.marginProp] = -this.$el.offsetHeight, obj;
      }
    },
    created: function created() {
      var container = $("." + this.clsContainer + "-" + this.pos, this.$container) || append(this.$container, "<div class=\"" + this.clsContainer + " " + this.clsContainer + "-" + this.pos + "\" style=\"display: block\"></div>");
      this.$mount(append(container, "<div class=\"" + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : '') + "\"> <a href class=\"" + this.clsClose + "\" data-uk-close></a> <div>" + this.message + "</div> </div>"));
    },
    connected: function connected() {
      var this$1 = this;
      var obj;
      var margin = toFloat(css(this.$el, this.marginProp));
      Transition.start(css(this.$el, this.startProps), (obj = {
        opacity: 1
      }, obj[this.marginProp] = margin, obj)).then(function () {
        if (this$1.timeout) {
          this$1.timer = setTimeout(this$1.close, this$1.timeout);
        }
      });
    },
    events: (obj = {
      click: function click(e) {
        if (closest(e.target, 'a[href="#"],a[href=""]')) {
          e.preventDefault();
        }

        this.close();
      }
    }, obj[pointerEnter] = function () {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }, obj[pointerLeave] = function () {
      if (this.timeout) {
        this.timer = setTimeout(this.close, this.timeout);
      }
    }, obj),
    methods: {
      close: function close(immediate) {
        var this$1 = this;

        var removeFn = function removeFn() {
          var container = this$1.$el.parentNode;
          trigger(this$1.$el, 'close', [this$1]);

          _remove(this$1.$el);

          if (container && !container.hasChildNodes()) {
            _remove(container);
          }
        };

        if (this.timer) {
          clearTimeout(this.timer);
        }

        if (immediate) {
          removeFn();
        } else {
          Transition.start(this.$el, this.startProps).then(removeFn);
        }
      }
    }
  };

  function install$3(UIkit) {
    UIkit.notification.closeAll = function (group, immediate) {
      apply(document.body, function (el) {
        var notification = UIkit.getComponent(el, 'notification');

        if (notification && (!group || group === notification.group)) {
          notification.close(immediate);
        }
      });
    };
  }

  var _props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity', 'stroke'];
  var Parallax = {
    mixins: [Media],
    props: _props.reduce(function (props, prop) {
      props[prop] = 'list';
      return props;
    }, {}),
    data: _props.reduce(function (data, prop) {
      data[prop] = undefined;
      return data;
    }, {}),
    computed: {
      props: function props(properties, $el) {
        var this$1 = this;
        return _props.reduce(function (props, prop) {
          if (isUndefined(properties[prop])) {
            return props;
          }

          var isColor = prop.match(/color/i);
          var isCssProp = isColor || prop === 'opacity';
          var pos, bgPos, diff;
          var steps = properties[prop].slice(0);

          if (isCssProp) {
            css($el, prop, '');
          }

          if (steps.length < 2) {
            steps.unshift((prop === 'scale' ? 1 : isCssProp ? css($el, prop) : 0) || 0);
          }

          var unit = getUnit(steps);

          if (isColor) {
            var ref = $el.style;
            var color = ref.color;
            steps = steps.map(function (step) {
              return parseColor($el, step);
            });
            $el.style.color = color;
          } else if (startsWith(prop, 'bg')) {
            var attr = prop === 'bgy' ? 'height' : 'width';
            steps = steps.map(function (step) {
              return toPx(step, attr, this$1.$el);
            });
            css($el, "background-position-" + prop[2], '');
            bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

            if (this$1.covers) {
              var min = Math.min.apply(Math, steps);
              var max = Math.max.apply(Math, steps);
              var down = steps.indexOf(min) < steps.indexOf(max);
              diff = max - min;
              steps = steps.map(function (step) {
                return step - (down ? min : max);
              });
              pos = (down ? -diff : 0) + "px";
            } else {
              pos = bgPos;
            }
          } else {
            steps = steps.map(toFloat);
          }

          if (prop === 'stroke') {
            if (!steps.some(function (step) {
              return step;
            })) {
              return props;
            }

            var length = getMaxPathLength(this$1.$el);
            css($el, 'strokeDasharray', length);

            if (unit === '%') {
              steps = steps.map(function (step) {
                return step * length / 100;
              });
            }

            steps = steps.reverse();
            prop = 'strokeDashoffset';
          }

          props[prop] = {
            steps: steps,
            unit: unit,
            pos: pos,
            bgPos: bgPos,
            diff: diff
          };
          return props;
        }, {});
      },
      bgProps: function bgProps() {
        var this$1 = this;
        return ['bgx', 'bgy'].filter(function (bg) {
          return bg in this$1.props;
        });
      },
      covers: function covers(_, $el) {
        return _covers($el);
      }
    },
    disconnected: function disconnected() {
      delete this._image;
    },
    update: {
      read: function read(data) {
        var this$1 = this;
        data.active = this.matchMedia;

        if (!data.active) {
          return;
        }

        if (!data.image && this.covers && this.bgProps.length) {
          var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

          if (src) {
            var img = new Image();
            img.src = src;
            data.image = img;

            if (!img.naturalWidth) {
              img.onload = function () {
                return this$1.$update();
              };
            }
          }
        }

        var image = data.image;

        if (!image || !image.naturalWidth) {
          return;
        }

        var dimEl = {
          width: this.$el.offsetWidth,
          height: this.$el.offsetHeight
        };
        var dimImage = {
          width: image.naturalWidth,
          height: image.naturalHeight
        };
        var dim = Dimensions.cover(dimImage, dimEl);
        this.bgProps.forEach(function (prop) {
          var ref = this$1.props[prop];
          var diff = ref.diff;
          var bgPos = ref.bgPos;
          var steps = ref.steps;
          var attr = prop === 'bgy' ? 'height' : 'width';
          var span = dim[attr] - dimEl[attr];

          if (span < diff) {
            dimEl[attr] = dim[attr] + diff - span;
          } else if (span > diff) {
            var posPercentage = dimEl[attr] / toPx(bgPos, attr, this$1.$el);

            if (posPercentage) {
              this$1.props[prop].steps = steps.map(function (step) {
                return step - (span - diff) / posPercentage;
              });
            }
          }

          dim = Dimensions.cover(dimImage, dimEl);
        });
        data.dim = dim;
      },
      write: function write(ref) {
        var dim = ref.dim;
        var active = ref.active;

        if (!active) {
          css(this.$el, {
            backgroundSize: '',
            backgroundRepeat: ''
          });
          return;
        }

        dim && css(this.$el, {
          backgroundSize: dim.width + "px " + dim.height + "px",
          backgroundRepeat: 'no-repeat'
        });
      },
      events: ['resize']
    },
    methods: {
      reset: function reset() {
        var this$1 = this;
        each(this.getCss(0), function (_, prop) {
          return css(this$1.$el, prop, '');
        });
      },
      getCss: function getCss(percent) {
        var ref = this;
        var props = ref.props;
        return Object.keys(props).reduce(function (css, prop) {
          var ref = props[prop];
          var steps = ref.steps;
          var unit = ref.unit;
          var pos = ref.pos;
          var value = getValue(steps, percent);

          switch (prop) {
            // transforms
            case 'x':
            case 'y':
              {
                unit = unit || 'px';
                css.transform += " translate" + ucfirst(prop) + "(" + toFloat(value).toFixed(unit === 'px' ? 0 : 2) + unit + ")";
                break;
              }

            case 'rotate':
              unit = unit || 'deg';
              css.transform += " rotate(" + (value + unit) + ")";
              break;

            case 'scale':
              css.transform += " scale(" + value + ")";
              break;
            // bg image

            case 'bgy':
            case 'bgx':
              css["background-position-" + prop[2]] = "calc(" + pos + " + " + value + "px)";
              break;
            // color

            case 'color':
            case 'backgroundColor':
            case 'borderColor':
              {
                var ref$1 = getStep(steps, percent);
                var start = ref$1[0];
                var end = ref$1[1];
                var p = ref$1[2];
                css[prop] = "rgba(" + start.map(function (value, i) {
                  value = value + p * (end[i] - value);
                  return i === 3 ? toFloat(value) : parseInt(value, 10);
                }).join(',') + ")";
                break;
              }
            // CSS Filter

            case 'blur':
              unit = unit || 'px';
              css.filter += " blur(" + (value + unit) + ")";
              break;

            case 'hue':
              unit = unit || 'deg';
              css.filter += " hue-rotate(" + (value + unit) + ")";
              break;

            case 'fopacity':
              unit = unit || '%';
              css.filter += " opacity(" + (value + unit) + ")";
              break;

            case 'grayscale':
            case 'invert':
            case 'saturate':
            case 'sepia':
              unit = unit || '%';
              css.filter += " " + prop + "(" + (value + unit) + ")";
              break;

            default:
              css[prop] = value;
          }

          return css;
        }, {
          transform: '',
          filter: ''
        });
      }
    }
  };

  function parseColor(el, color) {
    return css(css(el, 'color', color), 'color').split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(toFloat);
  }

  function getStep(steps, percent) {
    var count = steps.length - 1;
    var index = Math.min(Math.floor(count * percent), count - 1);
    var step = steps.slice(index, index + 2);
    step.push(percent === 1 ? 1 : percent % (1 / count) * count);
    return step;
  }

  function getValue(steps, percent, digits) {
    if (digits === void 0) digits = 2;
    var ref = getStep(steps, percent);
    var start = ref[0];
    var end = ref[1];
    var p = ref[2];
    return (isNumber(start) ? start + Math.abs(start - end) * p * (start < end ? 1 : -1) : +end).toFixed(digits);
  }

  function getUnit(steps) {
    return steps.reduce(function (unit, step) {
      return isString(step) && step.replace(/-|\d/g, '').trim() || unit;
    }, '');
  }

  function _covers(el) {
    var ref = el.style;
    var backgroundSize = ref.backgroundSize;
    var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
    el.style.backgroundSize = backgroundSize;
    return covers;
  }

  var parallax = {
    mixins: [Parallax],
    props: {
      target: String,
      viewport: Number,
      easing: Number
    },
    data: {
      target: false,
      viewport: 1,
      easing: 1
    },
    computed: {
      target: function target(ref, $el) {
        var target = ref.target;
        return getOffsetElement(target && query(target, $el) || $el);
      }
    },
    update: {
      read: function read(ref, type) {
        var percent = ref.percent;
        var active = ref.active;

        if (type !== 'scroll') {
          percent = false;
        }

        if (!active) {
          return;
        }

        var prev = percent;
        percent = ease(scrolledOver(this.target) / (this.viewport || 1), this.easing);
        return {
          percent: percent,
          style: prev !== percent ? this.getCss(percent) : false
        };
      },
      write: function write(ref) {
        var style = ref.style;
        var active = ref.active;

        if (!active) {
          this.reset();
          return;
        }

        style && css(this.$el, style);
      },
      events: ['scroll', 'resize']
    }
  };

  function ease(percent, easing) {
    return clamp(percent * (1 - (easing - easing * percent)));
  } // SVG elements do not inherit from HTMLElement


  function getOffsetElement(el) {
    return el ? 'offsetTop' in el ? el : getOffsetElement(el.parentNode) : document.body;
  }

  var SliderReactive = {
    update: {
      write: function write() {
        if (this.stack.length || this.dragging) {
          return;
        }

        var index = this.getValidIndex(this.index);

        if (!~this.prevIndex || this.index !== index) {
          this.show(index);
        }
      },
      events: ['resize']
    }
  };

  function Transitioner$1(prev, next, dir, ref) {
    var center = ref.center;
    var easing = ref.easing;
    var list = ref.list;
    var deferred = new Deferred();
    var from = prev ? getLeft(prev, list, center) : getLeft(next, list, center) + offset(next).width * dir;
    var to = next ? getLeft(next, list, center) : from + offset(prev).width * dir * (isRtl ? -1 : 1);
    return {
      dir: dir,
      show: function show(duration, percent, linear) {
        if (percent === void 0) percent = 0;
        var timing = linear ? 'linear' : easing;
        duration -= Math.round(duration * clamp(percent, -1, 1));
        this.translate(percent);
        prev && this.updateTranslates();
        percent = prev ? percent : clamp(percent, 0, 1);
        triggerUpdate$1(this.getItemIn(), 'itemin', {
          percent: percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        prev && triggerUpdate$1(this.getItemIn(true), 'itemout', {
          percent: 1 - percent,
          duration: duration,
          timing: timing,
          dir: dir
        });
        Transition.start(list, {
          transform: _translate(-to * (isRtl ? -1 : 1), 'px')
        }, duration, timing).then(deferred.resolve, noop);
        return deferred.promise;
      },
      stop: function stop() {
        return Transition.stop(list);
      },
      cancel: function cancel() {
        Transition.cancel(list);
      },
      reset: function reset() {
        css(list, 'transform', '');
      },
      forward: function forward(duration, percent) {
        if (percent === void 0) percent = this.percent();
        Transition.cancel(list);
        return this.show(duration, percent, true);
      },
      translate: function translate(percent) {
        var distance = this.getDistance() * dir * (isRtl ? -1 : 1);
        css(list, 'transform', _translate(clamp(-to + (distance - distance * percent), -getWidth(list), offset(list).width) * (isRtl ? -1 : 1), 'px'));
        this.updateTranslates();

        if (prev) {
          percent = clamp(percent, -1, 1);
          triggerUpdate$1(this.getItemIn(), 'itemtranslatein', {
            percent: percent,
            dir: dir
          });
          triggerUpdate$1(this.getItemIn(true), 'itemtranslateout', {
            percent: 1 - percent,
            dir: dir
          });
        }
      },
      percent: function percent() {
        return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
      },
      getDistance: function getDistance() {
        return Math.abs(to - from);
      },
      getItemIn: function getItemIn(out) {
        if (out === void 0) out = false;
        var actives = this.getActives();
        var all = sortBy(slides(list), 'offsetLeft');
        var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);
        return ~i && all[i + (prev && !out ? dir : 0)];
      },
      getActives: function getActives() {
        var left = getLeft(prev || next, list, center);
        return sortBy(slides(list).filter(function (slide) {
          var slideLeft = getElLeft(slide, list);
          return slideLeft >= left && slideLeft + offset(slide).width <= offset(list).width + left;
        }), 'offsetLeft');
      },
      updateTranslates: function updateTranslates() {
        var actives = this.getActives();
        slides(list).forEach(function (slide) {
          var isActive = includes(actives, slide);
          triggerUpdate$1(slide, "itemtranslate" + (isActive ? 'in' : 'out'), {
            percent: isActive ? 1 : 0,
            dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
          });
        });
      }
    };
  }

  function getLeft(el, list, center) {
    var left = getElLeft(el, list);
    return center ? left - centerEl(el, list) : Math.min(left, getMax(list));
  }

  function getMax(list) {
    return Math.max(0, getWidth(list) - offset(list).width);
  }

  function getWidth(list) {
    return slides(list).reduce(function (right, el) {
      return offset(el).width + right;
    }, 0);
  }

  function getMaxWidth(list) {
    return slides(list).reduce(function (right, el) {
      return Math.max(right, offset(el).width);
    }, 0);
  }

  function centerEl(el, list) {
    return offset(list).width / 2 - offset(el).width / 2;
  }

  function getElLeft(el, list) {
    return (position(el).left + (isRtl ? offset(el).width - offset(list).width : 0)) * (isRtl ? -1 : 1);
  }

  function triggerUpdate$1(el, type, data) {
    trigger(el, createEvent(type, false, false, data));
  }

  function slides(list) {
    return _children(list);
  }

  var slider = {
    mixins: [Class, Slider, SliderReactive],
    props: {
      center: Boolean,
      sets: Boolean
    },
    data: {
      center: false,
      sets: false,
      attrItem: 'uk-slider-item',
      selList: '.uk-slider-items',
      selNav: '.uk-slider-nav',
      clsContainer: 'uk-slider-container',
      Transitioner: Transitioner$1
    },
    computed: {
      avgWidth: function avgWidth() {
        return getWidth(this.list) / this.length;
      },
      finite: function finite(ref) {
        var finite = ref.finite;
        return finite || Math.ceil(getWidth(this.list)) < offset(this.list).width + getMaxWidth(this.list) + this.center;
      },
      maxIndex: function maxIndex() {
        if (!this.finite || this.center && !this.sets) {
          return this.length - 1;
        }

        if (this.center) {
          return last(this.sets);
        }

        css(this.slides, 'order', '');
        var max = getMax(this.list);
        var i = this.length;

        while (i--) {
          if (getElLeft(this.list.children[i], this.list) < max) {
            return Math.min(i + 1, this.length - 1);
          }
        }

        return 0;
      },
      sets: function sets(ref) {
        var this$1 = this;
        var sets = ref.sets;
        var width = offset(this.list).width / (this.center ? 2 : 1);
        var left = 0;
        var leftCenter = width;
        var slideLeft = 0;
        sets = sets && this.slides.reduce(function (sets, slide, i) {
          var ref = offset(slide);
          var slideWidth = ref.width;
          var slideRight = slideLeft + slideWidth;

          if (slideRight > left) {
            if (!this$1.center && i > this$1.maxIndex) {
              i = this$1.maxIndex;
            }

            if (!includes(sets, i)) {
              var cmp = this$1.slides[i + 1];

              if (this$1.center && cmp && slideWidth < leftCenter - offset(cmp).width / 2) {
                leftCenter -= slideWidth;
              } else {
                leftCenter = width;
                sets.push(i);
                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
              }
            }
          }

          slideLeft += slideWidth;
          return sets;
        }, []);
        return !isEmpty(sets) && sets;
      },
      transitionOptions: function transitionOptions() {
        return {
          center: this.center,
          list: this.list
        };
      }
    },
    connected: function connected() {
      toggleClass(this.$el, this.clsContainer, !$("." + this.clsContainer, this.$el));
    },
    update: {
      write: function write() {
        var this$1 = this;
        $$("[" + this.attrItem + "],[data-" + this.attrItem + "]", this.$el).forEach(function (el) {
          var index = data(el, this$1.attrItem);
          this$1.maxIndex && toggleClass(el, 'uk-hidden', isNumeric(index) && (this$1.sets && !includes(this$1.sets, toFloat(index)) || index > this$1.maxIndex));
        });

        if (this.length && !this.dragging && !this.stack.length) {
          this.reorder();

          this._translate(1);
        }

        var actives = this._getTransitioner(this.index).getActives();

        this.slides.forEach(function (slide) {
          return toggleClass(slide, this$1.clsActive, includes(actives, slide));
        });
        (!this.sets || includes(this.sets, toFloat(this.index))) && this.slides.forEach(function (slide) {
          return toggleClass(slide, this$1.clsActivated, includes(actives, slide));
        });
      },
      events: ['resize']
    },
    events: {
      beforeitemshow: function beforeitemshow(e) {
        if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
          this.index = this.getValidIndex();
        }

        var diff = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));

        if (!this.dragging && diff > 1) {
          for (var i = 0; i < diff; i++) {
            this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
          }

          e.preventDefault();
          return;
        }

        this.duration = speedUp(this.avgWidth / this.velocity) * (offset(this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).width / this.avgWidth);
        this.reorder();
      },
      itemshow: function itemshow() {
        ~this.prevIndex && addClass(this._getTransitioner().getItemIn(), this.clsActive);
      }
    },
    methods: {
      reorder: function reorder() {
        var this$1 = this;

        if (this.finite) {
          css(this.slides, 'order', '');
          return;
        }

        var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
        this.slides.forEach(function (slide, i) {
          return css(slide, 'order', this$1.dir > 0 && i < index ? 1 : this$1.dir < 0 && i >= this$1.index ? -1 : '');
        });

        if (!this.center) {
          return;
        }

        var next = this.slides[index];
        var width = offset(this.list).width / 2 - offset(next).width / 2;
        var j = 0;

        while (width > 0) {
          var slideIndex = this.getIndex(--j + index, index);
          var slide = this.slides[slideIndex];
          css(slide, 'order', slideIndex > index ? -2 : -1);
          width -= offset(slide).width;
        }
      },
      getValidIndex: function getValidIndex(index, prevIndex) {
        if (index === void 0) index = this.index;
        if (prevIndex === void 0) prevIndex = this.prevIndex;
        index = this.getIndex(index, prevIndex);

        if (!this.sets) {
          return index;
        }

        var prev;

        do {
          if (includes(this.sets, index)) {
            return index;
          }

          prev = index;
          index = this.getIndex(index + this.dir, prevIndex);
        } while (index !== prev);

        return index;
      }
    }
  };
  var sliderParallax = {
    mixins: [Parallax],
    data: {
      selItem: '!li'
    },
    computed: {
      item: function item(ref, $el) {
        var selItem = ref.selItem;
        return query(selItem, $el);
      }
    },
    events: [{
      name: 'itemshown',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        css(this.$el, this.getCss(.5));
      }
    }, {
      name: 'itemin itemout',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler(ref) {
        var type = ref.type;
        var ref_detail = ref.detail;
        var percent = ref_detail.percent;
        var duration = ref_detail.duration;
        var timing = ref_detail.timing;
        var dir = ref_detail.dir;
        Transition.cancel(this.$el);
        css(this.$el, this.getCss(getCurrent(type, dir, percent)));
        Transition.start(this.$el, this.getCss(isIn(type) ? .5 : dir > 0 ? 1 : 0), duration, timing)["catch"](noop);
      }
    }, {
      name: 'transitioncanceled transitionend',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler() {
        Transition.cancel(this.$el);
      }
    }, {
      name: 'itemtranslatein itemtranslateout',
      self: true,
      el: function el() {
        return this.item;
      },
      handler: function handler(ref) {
        var type = ref.type;
        var ref_detail = ref.detail;
        var percent = ref_detail.percent;
        var dir = ref_detail.dir;
        Transition.cancel(this.$el);
        css(this.$el, this.getCss(getCurrent(type, dir, percent)));
      }
    }]
  };

  function isIn(type) {
    return endsWith(type, 'in');
  }

  function getCurrent(type, dir, percent) {
    percent /= 2;
    return !isIn(type) ? dir < 0 ? percent : 1 - percent : dir < 0 ? 1 - percent : percent;
  }

  var Animations$2 = assign({}, Animations, {
    fade: {
      show: function show() {
        return [{
          opacity: 0,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    scale: {
      show: function show() {
        return [{
          opacity: 0,
          transform: scale3d(1 + .5),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      },
      percent: function percent(current) {
        return 1 - css(current, 'opacity');
      },
      translate: function translate(percent) {
        return [{
          opacity: 1 - percent,
          transform: scale3d(1 + .5 * percent),
          zIndex: 0
        }, {
          zIndex: -1
        }];
      }
    },
    pull: {
      show: function show(dir) {
        return dir < 0 ? [{
          transform: _translate(30),
          zIndex: -1
        }, {
          transform: _translate(),
          zIndex: 0
        }] : [{
          transform: _translate(-100),
          zIndex: 0
        }, {
          transform: _translate(),
          zIndex: -1
        }];
      },
      percent: function percent(current, next, dir) {
        return dir < 0 ? 1 - translated(next) : translated(current);
      },
      translate: function translate(percent, dir) {
        return dir < 0 ? [{
          transform: _translate(30 * percent),
          zIndex: -1
        }, {
          transform: _translate(-100 * (1 - percent)),
          zIndex: 0
        }] : [{
          transform: _translate(-percent * 100),
          zIndex: 0
        }, {
          transform: _translate(30 * (1 - percent)),
          zIndex: -1
        }];
      }
    },
    push: {
      show: function show(dir) {
        return dir < 0 ? [{
          transform: _translate(100),
          zIndex: 0
        }, {
          transform: _translate(),
          zIndex: -1
        }] : [{
          transform: _translate(-30),
          zIndex: -1
        }, {
          transform: _translate(),
          zIndex: 0
        }];
      },
      percent: function percent(current, next, dir) {
        return dir > 0 ? 1 - translated(next) : translated(current);
      },
      translate: function translate(percent, dir) {
        return dir < 0 ? [{
          transform: _translate(percent * 100),
          zIndex: 0
        }, {
          transform: _translate(-30 * (1 - percent)),
          zIndex: -1
        }] : [{
          transform: _translate(-30 * percent),
          zIndex: -1
        }, {
          transform: _translate(100 * (1 - percent)),
          zIndex: 0
        }];
      }
    }
  });
  var slideshow = {
    mixins: [Class, Slideshow, SliderReactive],
    props: {
      ratio: String,
      minHeight: Number,
      maxHeight: Number
    },
    data: {
      ratio: '16:9',
      minHeight: false,
      maxHeight: false,
      selList: '.uk-slideshow-items',
      attrItem: 'uk-slideshow-item',
      selNav: '.uk-slideshow-nav',
      Animations: Animations$2
    },
    update: {
      read: function read() {
        var ref = this.ratio.split(':').map(Number);
        var width = ref[0];
        var height = ref[1];
        height = height * this.list.offsetWidth / width || 0;

        if (this.minHeight) {
          height = Math.max(this.minHeight, height);
        }

        if (this.maxHeight) {
          height = Math.min(this.maxHeight, height);
        }

        return {
          height: height - boxModelAdjust(this.list, 'height', 'content-box')
        };
      },
      write: function write(ref) {
        var height = ref.height;
        height > 0 && css(this.list, 'minHeight', height);
      },
      events: ['resize']
    }
  };
  var sortable = {
    mixins: [Class, Animate],
    props: {
      group: String,
      threshold: Number,
      clsItem: String,
      clsPlaceholder: String,
      clsDrag: String,
      clsDragState: String,
      clsBase: String,
      clsNoDrag: String,
      clsEmpty: String,
      clsCustom: String,
      handle: String
    },
    data: {
      group: false,
      threshold: 5,
      clsItem: 'uk-sortable-item',
      clsPlaceholder: 'uk-sortable-placeholder',
      clsDrag: 'uk-sortable-drag',
      clsDragState: 'uk-drag',
      clsBase: 'uk-sortable',
      clsNoDrag: 'uk-sortable-nodrag',
      clsEmpty: 'uk-sortable-empty',
      clsCustom: '',
      handle: false,
      pos: {}
    },
    created: function created() {
      var this$1 = this;
      ['init', 'start', 'move', 'end'].forEach(function (key) {
        var fn = this$1[key];

        this$1[key] = function (e) {
          assign(this$1.pos, getEventPos(e));
          fn(e);
        };
      });
    },
    events: {
      name: pointerDown,
      passive: false,
      handler: 'init'
    },
    computed: {
      target: function target() {
        return (this.$el.tBodies || [this.$el])[0];
      },
      items: function items() {
        return _children(this.target);
      },
      isEmpty: {
        get: function get() {
          return isEmpty(this.items);
        },
        watch: function watch(empty) {
          toggleClass(this.target, this.clsEmpty, empty);
        },
        immediate: true
      },
      handles: {
        get: function get(ref, el) {
          var handle = ref.handle;
          return handle ? $$(handle, el) : this.items;
        },
        watch: function watch(handles, prev) {
          css(prev, {
            touchAction: '',
            userSelect: ''
          });
          css(handles, {
            touchAction: hasTouch ? 'none' : '',
            userSelect: 'none'
          }); // touchAction set to 'none' causes a performance drop in Chrome 80
        },
        immediate: true
      }
    },
    update: {
      write: function write() {
        if (!this.drag || !parent(this.placeholder)) {
          return;
        } // clamp to viewport


        var ref = this.pos;
        var x = ref.x;
        var y = ref.y;
        var ref$1 = this.origin;
        var offsetTop = ref$1.offsetTop;
        var offsetLeft = ref$1.offsetLeft;
        var ref$2 = this.drag;
        var offsetHeight = ref$2.offsetHeight;
        var offsetWidth = ref$2.offsetWidth;
        var ref$3 = offset(window);
        var right = ref$3.right;
        var bottom = ref$3.bottom;
        var target = document.elementFromPoint(x, y);
        css(this.drag, {
          top: clamp(y - offsetTop, 0, bottom - offsetHeight),
          left: clamp(x - offsetLeft, 0, right - offsetWidth)
        });
        var sortable = this.getSortable(target);
        var previous = this.getSortable(this.placeholder);
        var move = sortable !== previous;

        if (!sortable || within(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
          return;
        }

        target = sortable.target === target.parentNode && target || sortable.items.filter(function (element) {
          return within(target, element);
        })[0];

        if (move) {
          previous.remove(this.placeholder);
        } else if (!target) {
          return;
        }

        sortable.insert(this.placeholder, target);

        if (!includes(this.touched, sortable)) {
          this.touched.push(sortable);
        }
      },
      events: ['move']
    },
    methods: {
      init: function init(e) {
        var target = e.target;
        var button = e.button;
        var defaultPrevented = e.defaultPrevented;
        var ref = this.items.filter(function (el) {
          return within(target, el);
        });
        var placeholder = ref[0];

        if (!placeholder || defaultPrevented || button > 0 || isInput(target) || within(target, "." + this.clsNoDrag) || this.handle && !within(target, this.handle)) {
          return;
        }

        e.preventDefault();
        this.touched = [this];
        this.placeholder = placeholder;
        this.origin = assign({
          target: target,
          index: index(placeholder)
        }, this.pos);
        on(document, pointerMove, this.move);
        on(document, pointerUp, this.end);

        if (!this.threshold) {
          this.start(e);
        }
      },
      start: function start(e) {
        this.drag = appendDrag(this.$container, this.placeholder);
        var ref = this.placeholder.getBoundingClientRect();
        var left = ref.left;
        var top = ref.top;
        assign(this.origin, {
          offsetLeft: this.pos.x - left,
          offsetTop: this.pos.y - top
        });
        addClass(this.drag, this.clsDrag, this.clsCustom);
        addClass(this.placeholder, this.clsPlaceholder);
        addClass(this.items, this.clsItem);
        addClass(document.documentElement, this.clsDragState);
        trigger(this.$el, 'start', [this, this.placeholder]);
        trackScroll(this.pos);
        this.move(e);
      },
      move: function move(e) {
        if (this.drag) {
          this.$emit('move');
        } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
          this.start(e);
        }
      },
      end: function end(e) {
        off(document, pointerMove, this.move);
        off(document, pointerUp, this.end);
        off(window, 'scroll', this.scroll);

        if (!this.drag) {
          if (e.type === 'touchend') {
            e.target.click();
          }

          return;
        }

        untrackScroll();
        var sortable = this.getSortable(this.placeholder);

        if (this === sortable) {
          if (this.origin.index !== index(this.placeholder)) {
            trigger(this.$el, 'moved', [this, this.placeholder]);
          }
        } else {
          trigger(sortable.$el, 'added', [sortable, this.placeholder]);
          trigger(this.$el, 'removed', [this, this.placeholder]);
        }

        trigger(this.$el, 'stop', [this, this.placeholder]);

        _remove(this.drag);

        this.drag = null;
        var classes = this.touched.map(function (sortable) {
          return sortable.clsPlaceholder + " " + sortable.clsItem;
        }).join(' ');
        this.touched.forEach(function (sortable) {
          return removeClass(sortable.items, classes);
        });
        removeClass(document.documentElement, this.clsDragState);
      },
      insert: function insert(element, target) {
        var this$1 = this;
        addClass(this.items, this.clsItem);

        var insert = function insert() {
          if (target) {
            if (!within(element, this$1.target) || isPredecessor(element, target)) {
              before(target, element);
            } else {
              after(target, element);
            }
          } else {
            append(this$1.target, element);
          }
        };

        if (this.animation) {
          this.animate(insert);
        } else {
          insert();
        }
      },
      remove: function remove(element) {
        if (!within(element, this.target)) {
          return;
        }

        if (this.animation) {
          this.animate(function () {
            return _remove(element);
          });
        } else {
          _remove(element);
        }
      },
      getSortable: function getSortable(element) {
        return element && (this.$getComponent(element, 'sortable') || this.getSortable(element.parentNode));
      }
    }
  };

  function isPredecessor(element, target) {
    return element.parentNode === target.parentNode && index(element) > index(target);
  }

  var trackTimer;

  function trackScroll(pos) {
    var last = Date.now();
    trackTimer = setInterval(function () {
      var x = pos.x;
      var y = pos.y;
      y += window.pageYOffset;
      var dist = (Date.now() - last) * .3;
      last = Date.now();
      scrollParents(document.elementFromPoint(x, pos.y)).some(function (scrollEl) {
        var scroll = scrollEl.scrollTop;
        var scrollHeight = scrollEl.scrollHeight;
        var ref = offset(getViewport(scrollEl));
        var top = ref.top;
        var bottom = ref.bottom;
        var height = ref.height;

        if (top < y && top + 30 > y) {
          scroll -= dist;
        } else if (bottom > y && bottom - 30 < y) {
          scroll += dist;
        } else {
          return;
        }

        if (scroll > 0 && scroll < scrollHeight - height) {
          scrollTop(scrollEl, scroll);
          return true;
        }
      });
    }, 15);
  }

  function untrackScroll() {
    clearInterval(trackTimer);
  }

  function appendDrag(container, element) {
    var clone = append(container, element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, '$1div$2'));
    attr(clone, 'style', attr(clone, 'style') + ";margin:0!important");
    css(clone, assign({
      boxSizing: 'border-box',
      width: element.offsetWidth,
      height: element.offsetHeight,
      overflow: 'hidden'
    }, css(element, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
    height(clone.firstElementChild, height(element.firstElementChild));
    return clone;
  }

  var obj$1;
  var actives = [];
  var tooltip = {
    mixins: [Container, Togglable, Position],
    args: 'title',
    props: {
      delay: Number,
      title: String
    },
    data: {
      pos: 'top',
      title: '',
      delay: 0,
      animation: ['uk-animation-scale-up'],
      duration: 100,
      cls: 'uk-active',
      clsPos: 'uk-tooltip'
    },
    beforeConnect: function beforeConnect() {
      this._hasTitle = hasAttr(this.$el, 'title');
      attr(this.$el, {
        title: '',
        'aria-expanded': false
      });
    },
    disconnected: function disconnected() {
      this.hide();
      attr(this.$el, {
        title: this._hasTitle ? this.title : null,
        'aria-expanded': null
      });
    },
    methods: {
      show: function show() {
        var this$1 = this;

        if (this.isActive() || !this.title) {
          return;
        }

        actives.forEach(function (active) {
          return active.hide();
        });
        actives.push(this);
        this._unbind = on(document, pointerUp, function (e) {
          return !within(e.target, this$1.$el) && this$1.hide();
        });
        clearTimeout(this.showTimer);
        this.showTimer = setTimeout(this._show, this.delay);
      },
      hide: function hide() {
        var this$1 = this;

        if (!this.isActive() || matches(this.$el, 'input:focus')) {
          return;
        }

        this.toggleElement(this.tooltip, false, false).then(function () {
          actives.splice(actives.indexOf(this$1), 1);
          clearTimeout(this$1.showTimer);
          this$1.tooltip = _remove(this$1.tooltip);

          this$1._unbind();
        });
      },
      _show: function _show() {
        var this$1 = this;
        this.tooltip = append(this.container, "<div class=\"" + this.clsPos + "\"> <div class=\"" + this.clsPos + "-inner\">" + this.title + "</div> </div>");
        on(this.tooltip, 'toggled', function () {
          var toggled = this$1.isToggled(this$1.tooltip);
          attr(this$1.$el, 'aria-expanded', toggled);

          if (!toggled) {
            return;
          }

          this$1.positionAt(this$1.tooltip, this$1.$el);
          this$1.origin = this$1.getAxis() === 'y' ? flipPosition(this$1.dir) + "-" + this$1.align : this$1.align + "-" + flipPosition(this$1.dir);
        });
        this.toggleElement(this.tooltip, true);
      },
      isActive: function isActive() {
        return includes(actives, this);
      }
    },
    events: (obj$1 = {
      focus: 'show',
      blur: 'hide'
    }, obj$1[pointerEnter + " " + pointerLeave] = function (e) {
      if (isTouch(e)) {
        return;
      }

      e.type === pointerEnter ? this.show() : this.hide();
    }, obj$1[pointerDown] = function (e) {
      if (!isTouch(e)) {
        return;
      }

      this.isActive() ? this.hide() : this.show();
    }, obj$1)
  };
  var upload = {
    props: {
      allow: String,
      clsDragover: String,
      concurrent: Number,
      maxSize: Number,
      method: String,
      mime: String,
      msgInvalidMime: String,
      msgInvalidName: String,
      msgInvalidSize: String,
      multiple: Boolean,
      name: String,
      params: Object,
      type: String,
      url: String
    },
    data: {
      allow: false,
      clsDragover: 'uk-dragover',
      concurrent: 1,
      maxSize: 0,
      method: 'POST',
      mime: false,
      msgInvalidMime: 'Invalid File Type: %s',
      msgInvalidName: 'Invalid File Name: %s',
      msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
      multiple: false,
      name: 'files[]',
      params: {},
      type: '',
      url: '',
      abort: noop,
      beforeAll: noop,
      beforeSend: noop,
      complete: noop,
      completeAll: noop,
      error: noop,
      fail: noop,
      load: noop,
      loadEnd: noop,
      loadStart: noop,
      progress: noop
    },
    events: {
      change: function change(e) {
        if (!matches(e.target, 'input[type="file"]')) {
          return;
        }

        e.preventDefault();

        if (e.target.files) {
          this.upload(e.target.files);
        }

        e.target.value = '';
      },
      drop: function drop(e) {
        stop(e);
        var transfer = e.dataTransfer;

        if (!transfer || !transfer.files) {
          return;
        }

        removeClass(this.$el, this.clsDragover);
        this.upload(transfer.files);
      },
      dragenter: function dragenter(e) {
        stop(e);
      },
      dragover: function dragover(e) {
        stop(e);
        addClass(this.$el, this.clsDragover);
      },
      dragleave: function dragleave(e) {
        stop(e);
        removeClass(this.$el, this.clsDragover);
      }
    },
    methods: {
      upload: function upload(files) {
        var this$1 = this;

        if (!files.length) {
          return;
        }

        trigger(this.$el, 'upload', [files]);

        for (var i = 0; i < files.length; i++) {
          if (this.maxSize && this.maxSize * 1000 < files[i].size) {
            this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
            return;
          }

          if (this.allow && !match$1(this.allow, files[i].name)) {
            this.fail(this.msgInvalidName.replace('%s', this.allow));
            return;
          }

          if (this.mime && !match$1(this.mime, files[i].type)) {
            this.fail(this.msgInvalidMime.replace('%s', this.mime));
            return;
          }
        }

        if (!this.multiple) {
          files = [files[0]];
        }

        this.beforeAll(this, files);
        var chunks = chunk(files, this.concurrent);

        var upload = function upload(files) {
          var data = new FormData();
          files.forEach(function (file) {
            return data.append(this$1.name, file);
          });

          for (var key in this$1.params) {
            data.append(key, this$1.params[key]);
          }

          ajax(this$1.url, {
            data: data,
            method: this$1.method,
            responseType: this$1.type,
            beforeSend: function beforeSend(env) {
              var xhr = env.xhr;
              xhr.upload && on(xhr.upload, 'progress', this$1.progress);
              ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) {
                return on(xhr, type.toLowerCase(), this$1[type]);
              });
              this$1.beforeSend(env);
            }
          }).then(function (xhr) {
            this$1.complete(xhr);

            if (chunks.length) {
              upload(chunks.shift());
            } else {
              this$1.completeAll(xhr);
            }
          }, function (e) {
            return this$1.error(e);
          });
        };

        upload(chunks.shift());
      }
    }
  };

  function match$1(pattern, path) {
    return path.match(new RegExp("^" + pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.') + "$", 'i'));
  }

  function chunk(files, size) {
    var chunks = [];

    for (var i = 0; i < files.length; i += size) {
      var chunk = [];

      for (var j = 0; j < size; j++) {
        chunk.push(files[i + j]);
      }

      chunks.push(chunk);
    }

    return chunks;
  }

  function stop(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  var components$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    Countdown: countdown,
    Filter: filter$1,
    Lightbox: lightbox,
    LightboxPanel: LightboxPanel,
    Notification: notification,
    Parallax: parallax,
    Slider: slider,
    SliderParallax: sliderParallax,
    Slideshow: slideshow,
    SlideshowParallax: sliderParallax,
    Sortable: sortable,
    Tooltip: tooltip,
    Upload: upload
  });
  each(components$1, function (component, name) {
    return UIkit.component(name, component);
  });
  return UIkit;
});

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
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

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/scss.js":
/*!*********************!*\
  !*** ./src/scss.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uikit */ "./node_modules/uikit/dist/js/uikit.js");
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=style.js.map