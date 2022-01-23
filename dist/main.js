/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "previewModal": () => (/* binding */ previewModal),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
/* harmony import */ var _PopupWithImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _PopupWithForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PopupWithForm.js */ "./src/components/PopupWithForm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var previewModal = document.querySelector(".modal_type_preview");
var previewModalImage = previewModal.querySelector(".modal__image");
var previewModalTitle = previewModal.querySelector(".modal__title");

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector) {
    var data = _ref.data,
        handleCardClick = _ref.handleCardClick;

    _classCallCheck(this, Card);

    this._name = data.title;
    this._link = data.image;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
      return cardElement;
    }
  }, {
    key: "_handleLike",
    value: function _handleLike() {
      this._element.querySelector(".card__like-button").classList.toggle("card__like-button_type_active");
    }
  }, {
    key: "_handleDelete",
    value: function _handleDelete() {
      this._element.remove();
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._element.querySelector(".card__like-button").addEventListener("click", function () {
        _this._handleLike();
      });

      this._element.querySelector(".card__delete-button").addEventListener("click", function () {
        _this._handleDelete();
      });

      this._element.querySelector(".card__image").addEventListener("click", function () {
        _this._handleCardClick({
          link: _this._link,
          text: _this._text
        });
      });
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();

      this._setEventListeners();

      this._element.querySelector(".card__image").style.backgroundImage = "url(".concat(this._link, ")");
      this._element.querySelector(".card__title").textContent = this._name;
      return this._element;
    }
  }]);

  return Card;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(settings, formElement) {
    _classCallCheck(this, FormValidator);

    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputEl) {
      var errorEl = this._form.querySelector("#".concat(inputEl.id, "-error"));

      inputEl.classList.add(this._inputErrorClass);
      errorEl.innerText = inputEl.validationMessage;
      errorEl.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputEl) {
      var errorEl = this._form.querySelector("#".concat(inputEl.id, "-error"));

      inputEl.classList.remove(this._inputErrorClass);
      errorEl.innerText = '';
      errorEl.classList.remove(this._errorClass);
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(inputEl) {
      if (!inputEl.validity.valid) {
        return this._showInputError(inputEl); // if input is invalid, show error message
      }

      this._hideInputError(inputEl); // if it is valid, remove all error messages. enable submit button

    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput() {
      return !this._inputList.every(function (inputEl) {
        return inputEl.validity.valid === true;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList)) {
        // button should unlock
        this._buttonEl.classList.add(this._inactiveButtonClass);

        this._buttonEl.disabled = true;
      } else {
        // button should lock
        this._buttonEl.classList.remove(this._inactiveButtonClass);

        this._buttonEl.disabled = false;
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;

      this._inputList = _toConsumableArray(this._form.querySelectorAll(this._inputSelector));
      this._buttonEl = this._form.querySelector(this._submitButtonSelector);

      this._inputList.forEach(function (inputEl) {
        inputEl.addEventListener('input', function (evt) {
          // check if the input is valid
          _this._checkInputValidity(inputEl);

          _this._toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

      this._setEventListeners();
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      this._form.reset();
    }
  }]);

  return FormValidator;
}();

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidator);

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(selector) {
    _classCallCheck(this, Popup);

    this._popupElement = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      evt.preventDefault();

      if (evt.key === ESC_KEYCODE) {
        this.close;
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popupElement.addEventListener("click", function (evt) {
        if (evt.target.classList.contains("modal") || evt.target.classList.contains("modal__close-button")) {
          _this.close();
        }
      });
    }
  }, {
    key: "open",
    value: function open() {
      document.addEventListener("click", this._handleEscClose);

      this._popupElement.classList.add("modal_is-open");
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener("click", this._handleEscClose);

      this._popupElement.classList.remove("modal_is-open");
    }
  }]);

  return Popup;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var selector = _ref.selector,
        handleFormSubmission = _ref.handleFormSubmission;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, selector);
    _this._handleFormSubmission = handleFormSubmission;
    _this._form = _this._popupElement.querySelector(".form");
    _this._inputList = _toConsumableArray(_this._popupElement.querySelectorAll(".form__input"));
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._form.reset();
    }
  }, {
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};

      this._inputList.forEach(function (input) {
        inputValues[input.name] = input.value;
      });

      return inputValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._popupElement.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2._handleFormSubmission(_this2._getInputValues());

        _this2.close();
      });
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(selector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, selector);
    _this._imageElement = _this._popupElement.querySelector(".modal__image");
    _this._imageCaption = _this._popupElement.querySelector(".modal__title");
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(data) {
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);

      this._imageElement.src = data.link;
      this._imageElement.alt = "Image of ".concat(data.link);
      this._imageCaption.textContent = data.text;
    }
  }]);

  return PopupWithImage;
}(_Popup__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, selector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      // take the item and render it into this._element
      this._element.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      // use this._renderer to create the element for rendering
      items.forEach(function (item) {
        var renderedItem = _this._renderer(item);

        _this.addItem(renderedItem);
      });
    }
  }]);

  return Section;
}();



/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
        aboutSelector = _ref.aboutSelector;

    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name.textContent,
        about: this._about.textContent
      };
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(userData) {
      this._name.textContent = userData.name;
      this._about.textContent = userData.about;
    }
  }]);

  return UserInfo;
}();



/***/ }),

/***/ "./src/components/utils.js":
/*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "closeModal": () => (/* binding */ closeModal)
/* harmony export */ });
var openModal = function openModal(modal) {
  document.addEventListener("click", closeModalClickHandler);
  document.addEventListener("keydown", closeModalEscapeHandler);
  modal.classList.add("modal_is-open");
};

var closeModal = function closeModal(modal) {
  document.removeEventListener("click", closeModalClickHandler);
  document.removeEventListener("keydown", closeModalEscapeHandler);
  modal.classList.remove("modal_is-open");
};

var closeModalEscapeHandler = function closeModalEscapeHandler(evt) {
  if (evt.key === "Escape") {
    return closeModal(document.querySelector(".modal_is-open"));
  }
};

var closeModalClickHandler = function closeModalClickHandler(evt) {
  evt.target.classList.remove("modal_is-open");
};



/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ESC_KEYCODE": () => (/* binding */ ESC_KEYCODE),
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "selectors": () => (/* binding */ selectors),
/* harmony export */   "profileConstants": () => (/* binding */ profileConstants)
/* harmony export */ });
// Data
var ESC_KEYCODE = 27;
var initialCards = [{
  title: "Yosemite Valley",
  image: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}, {
  title: "Lake Louise",
  image: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
}, {
  title: "Bald Mountains",
  image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
}, {
  title: "Latemar",
  image: "https://code.s3.yandex.net/web-code/latemar.jpg"
}, {
  title: "Vanoise National Park",
  image: "https://code.s3.yandex.net/web-code/vanoise.jpg"
}, {
  title: "Lago di Braies",
  image: "https://code.s3.yandex.net/web-code/lago.jpg"
}];
var selectors = {
  cardSection: ".cards",
  cardTemplate: "#cardTemplate",
  previewPopup: ".modal_type_preview"
};
var profileConstants = {
  profileModalSelector: ".profile__info"
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/utils.js */ "./src/components/utils.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");









 //constants

var editModal = document.querySelector(".modal_type_edit");
var editForm = editModal.querySelector(".form");
var addModal = document.querySelector(".modal_type_add");
var addForm = addModal.querySelector(".form");
var modal = document.querySelector(".modal");
var cards = document.querySelector(".cards"); // Buttons

var editProfileButton = document.querySelector(".profile__edit-button");
var editProfileCloseButton = editModal.querySelector(".modal__close-button");
var profileName = document.querySelector(".profile__name");
var profileAbout = document.querySelector(".profile__about");
var addCardButton = document.querySelector(".profile__add-button");
var addModalCloseButton = addModal.querySelector(".modal__close-button");
var previewModalCloseButton = _components_Card_js__WEBPACK_IMPORTED_MODULE_4__.previewModal.querySelector(".modal__close-button"); //Functions

function prefillEditForm(modalWindow) {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
} // Form data


var nameInput = editForm.querySelector(".form__input_type_name");
var aboutInput = editForm.querySelector(".form__input_type_about");
var addTitleValue = document.querySelector(".form__input_type_title");
var addImageUrlValue = addForm.querySelector(".form__input_type_image-url"); // Create instances of the classes

var CardPreviewPopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.previewPopup);
var CardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  renderer: function renderer(item) {
    var cardEl = new _components_Card_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
      data: item,
      handleCardClick: function handleCardClick(imgData) {
        CardPreviewPopup.open(imgData);
      }
    }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.cardTemplate);
    CardSection.addItem(cardEl.generateCard());
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.cardSection);
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about"
});
var editPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  selector: _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.profileConstants.profileModalSelector,
  handleFormSubmission: function handleFormSubmission(data) {
    userInfo.setUserInfo(data);
  }
});
var addPopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__["default"]({}); // initialize instances of the classes

CardSection.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.initialCards);
CardPreviewPopup.setEventListeners(); // all the rest

editProfileButton.addEventListener("click", function () {
  prefillEditForm(editModal);
  (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(editModal);
});
editProfileCloseButton.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(editModal);
});
addCardButton.addEventListener("click", function () {
  return (0,_components_utils_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(addModal);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFTLGFBQWEsQ0FBQ3hHLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDO0FBQUEsU0FBTTFCLCtEQUFTLENBQUMySCxRQUFELENBQWY7QUFBQSxDQUF4QyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gXCIuL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4vUG9wdXBXaXRoRm9ybS5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF90eXBlX3ByZXZpZXdcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxJbWFnZSA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZVwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbFRpdGxlID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3RpdGxlXCIpO1xuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgaGFuZGxlQ2FyZENsaWNrIH0sIGNhcmRTZWxlY3Rvcikge1xuICAgIHRoaXMuX25hbWUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmltYWdlO1xuXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgX2hhbmRsZUxpa2UoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fdHlwZV9hY3RpdmVcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHsgbGluazogdGhpcy5fbGluaywgdGV4dDogdGhpcy5fdGV4dCB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jYXJkX19pbWFnZVwiXG4gICAgKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fbGlua30pYDtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG5cbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm1FbGVtZW50O1xuICAgIH07XG5cblxuICAgIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG5cbiAgICAgICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yRWwuaW5uZXJUZXh0ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG5cbiAgICAgICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yRWwuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICAgICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbCk7XG4gICAgICAgICAgICAvLyBpZiBpbnB1dCBpcyBpbnZhbGlkLCBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKTtcbiAgICAgICAgLy8gaWYgaXQgaXMgdmFsaWQsIHJlbW92ZSBhbGwgZXJyb3IgbWVzc2FnZXMuIGVuYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgfVxuXG5cbiAgICBfaGFzSW52YWxpZElucHV0KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2lucHV0TGlzdC5ldmVyeShpbnB1dEVsID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dEVsLnZhbGlkaXR5LnZhbGlkID09PSB0cnVlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dExpc3QpKSB7XG4gICAgICAgICAgICAvLyBidXR0b24gc2hvdWxkIHVubG9ja1xuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYnV0dG9uIHNob3VsZCBsb2NrXG5cbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcylcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBbLi4udGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcbiAgICAgICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0RWwgPT4ge1xuICAgICAgICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgaW5wdXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZ0LmtleSA9PT0gRVNDX0tFWUNPREUpIHtcbiAgICAgIHRoaXMuY2xvc2U7XG4gICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikgfHxcbiAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2UtYnV0dG9uXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfaXMtb3BlblwiKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9pcy1vcGVuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgc2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXNzaW9uIH0pIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG5cbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWlzc2lvbiA9IGhhbmRsZUZvcm1TdWJtaXNzaW9uO1xuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuICAgIHRoaXMuX2lucHV0TGlzdCA9IFsuLi50aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mb3JtX19pbnB1dFwiKV07XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgfVxuXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcbiAgICBjb25zdCBpbnB1dFZhbHVlcyA9IHt9O1xuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgaW5wdXRWYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gaW5wdXRWYWx1ZXM7XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWlzc2lvbih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHN1cGVyKHNlbGVjdG9yKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG4gICAgdGhpcy5faW1hZ2VDYXB0aW9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3RpdGxlXCIpO1xuICB9XG4gIG9wZW4oZGF0YSkge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuc3JjID0gZGF0YS5saW5rO1xuICAgIHRoaXMuX2ltYWdlRWxlbWVudC5hbHQgPSBgSW1hZ2Ugb2YgJHtkYXRhLmxpbmt9YDtcbiAgICB0aGlzLl9pbWFnZUNhcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnRleHQ7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIHNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cblxuICBhZGRJdGVtKGVsZW1lbnQpIHtcbiAgICAvLyB0YWtlIHRoZSBpdGVtIGFuZCByZW5kZXIgaXQgaW50byB0aGlzLl9lbGVtZW50XG4gICAgdGhpcy5fZWxlbWVudC5wcmVwZW5kKGVsZW1lbnQpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICAvLyB1c2UgdGhpcy5fcmVuZGVyZXIgdG8gY3JlYXRlIHRoZSBlbGVtZW50IGZvciByZW5kZXJpbmdcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCByZW5kZXJlZEl0ZW0gPSB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICAgIHRoaXMuYWRkSXRlbShyZW5kZXJlZEl0ZW0pO1xuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBhYm91dFNlbGVjdG9yIH0pIHtcbiAgICB0aGlzLl9uYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX2Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhYm91dFNlbGVjdG9yKTtcbiAgfVxuXG4gIGdldFVzZXJJbmZvKCkge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxuICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0LnRleHRDb250ZW50LFxuICAgIH07XG4gIH1cblxuICBzZXRVc2VySW5mbyh1c2VyRGF0YSkge1xuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSB1c2VyRGF0YS5uYW1lO1xuICAgIHRoaXMuX2Fib3V0LnRleHRDb250ZW50ID0gdXNlckRhdGEuYWJvdXQ7XG4gIH1cbn1cbiIsImNvbnN0IG9wZW5Nb2RhbCA9IChtb2RhbCkgPT4ge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbENsaWNrSGFuZGxlcik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTW9kYWxFc2NhcGVIYW5kbGVyKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsX2lzLW9wZW5cIik7XG59O1xuXG5jb25zdCBjbG9zZU1vZGFsID0gKG1vZGFsKSA9PiB7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsQ2xpY2tIYW5kbGVyKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbEVzY2FwZUhhbmRsZXIpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfaXMtb3BlblwiKTtcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWxFc2NhcGVIYW5kbGVyID0gKGV2dCkgPT4ge1xuICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgIHJldHVybiBjbG9zZU1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfaXMtb3BlblwiKSk7XG4gIH1cbn07XG5cbmNvbnN0IGNsb3NlTW9kYWxDbGlja0hhbmRsZXIgPSAoZXZ0KSA9PiB7XG4gIGV2dC50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX2lzLW9wZW5cIik7XG59O1xuXG5leHBvcnQgeyBvcGVuTW9kYWwsIGNsb3NlTW9kYWwgfTtcbiIsIi8vIERhdGFcblxuZXhwb3J0IGNvbnN0IEVTQ19LRVlDT0RFID0gMjc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJZb3NlbWl0ZSBWYWxsZXlcIixcbiAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS95b3NlbWl0ZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGFrZS1sb3Vpc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJCYWxkIE1vdW50YWluc1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF0ZW1hclwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhdGVtYXIuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS92YW5vaXNlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFnbyBkaSBCcmFpZXNcIixcbiAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IHNlbGVjdG9ycyA9IHtcbiAgY2FyZFNlY3Rpb246IFwiLmNhcmRzXCIsXG4gIGNhcmRUZW1wbGF0ZTogXCIjY2FyZFRlbXBsYXRlXCIsXG4gIHByZXZpZXdQb3B1cDogXCIubW9kYWxfdHlwZV9wcmV2aWV3XCIsXG59O1xuXG5leHBvcnQgY29uc3QgcHJvZmlsZUNvbnN0YW50cyA9IHtcbiAgcHJvZmlsZU1vZGFsU2VsZWN0b3I6IFwiLnByb2ZpbGVfX2luZm9cIixcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQge1xuICBpbml0aWFsQ2FyZHMsXG4gIHByb2ZpbGVDb25zdGFudHMsXG4gIHNlbGVjdG9ycyxcbn0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvdXRpbHMuanNcIjtcbmltcG9ydCBGb3JtVmFsaWRhdG9yIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanNcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCB7IHByZXZpZXdNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmQuanNcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL1NlY3Rpb24uanNcIjtcbmltcG9ydCBQb3B1cFdpdGhJbWFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qc1wiO1xuaW1wb3J0IFVzZXJJbmZvIGZyb20gXCIuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzXCI7XG5cbi8vY29uc3RhbnRzXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX3R5cGVfZWRpdFwiKTtcbmNvbnN0IGVkaXRGb3JtID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbmNvbnN0IGFkZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF90eXBlX2FkZFwiKTtcbmNvbnN0IGFkZEZvcm0gPSBhZGRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpO1xuXG4vLyBCdXR0b25zXG5jb25zdCBlZGl0UHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBlZGl0UHJvZmlsZUNsb3NlQnV0dG9uID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZUFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hYm91dFwiKTtcblxuY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcbmNvbnN0IGFkZE1vZGFsQ2xvc2VCdXR0b24gPSBhZGRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idXR0b25cIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDbG9zZUJ1dHRvbiA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCJcbik7XG5cbi8vRnVuY3Rpb25zXG5mdW5jdGlvbiBwcmVmaWxsRWRpdEZvcm0obW9kYWxXaW5kb3cpIHtcbiAgbmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gIGFib3V0SW5wdXQudmFsdWUgPSBwcm9maWxlQWJvdXQudGV4dENvbnRlbnQ7XG59XG5cbi8vIEZvcm0gZGF0YVxuY29uc3QgbmFtZUlucHV0ID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dF90eXBlX25hbWVcIik7XG5jb25zdCBhYm91dElucHV0ID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dF90eXBlX2Fib3V0XCIpO1xuY29uc3QgYWRkVGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV90aXRsZVwiKTtcbmNvbnN0IGFkZEltYWdlVXJsVmFsdWUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV9pbWFnZS11cmxcIik7XG5cbi8vIENyZWF0ZSBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXNcbmNvbnN0IENhcmRQcmV2aWV3UG9wdXAgPSBuZXcgUG9wdXBXaXRoSW1hZ2Uoc2VsZWN0b3JzLnByZXZpZXdQb3B1cCk7XG5jb25zdCBDYXJkU2VjdGlvbiA9IG5ldyBTZWN0aW9uKFxuICB7XG4gICAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChcbiAgICAgICAge1xuICAgICAgICAgIGRhdGE6IGl0ZW0sXG4gICAgICAgICAgaGFuZGxlQ2FyZENsaWNrOiAoaW1nRGF0YSkgPT4ge1xuICAgICAgICAgICAgQ2FyZFByZXZpZXdQb3B1cC5vcGVuKGltZ0RhdGEpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdG9ycy5jYXJkVGVtcGxhdGVcbiAgICAgICk7XG4gICAgICBDYXJkU2VjdGlvbi5hZGRJdGVtKGNhcmRFbC5nZW5lcmF0ZUNhcmQoKSk7XG4gICAgfSxcbiAgfSxcbiAgc2VsZWN0b3JzLmNhcmRTZWN0aW9uXG4pO1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XG4gIG5hbWVTZWxlY3RvcjogXCIucHJvZmlsZV9fbmFtZVwiLFxuICBhYm91dFNlbGVjdG9yOiBcIi5wcm9maWxlX19hYm91dFwiLFxufSk7XG5cbmNvbnN0IGVkaXRQb3B1cCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcbiAgc2VsZWN0b3I6IHByb2ZpbGVDb25zdGFudHMucHJvZmlsZU1vZGFsU2VsZWN0b3IsXG4gIGhhbmRsZUZvcm1TdWJtaXNzaW9uOiAoZGF0YSkgPT4ge1xuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKGRhdGEpO1xuICB9LFxufSk7XG5cbmNvbnN0IGFkZFBvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKHt9KTtcblxuLy8gaW5pdGlhbGl6ZSBpbnN0YW5jZXMgb2YgdGhlIGNsYXNzZXNcbkNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5DYXJkUHJldmlld1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbi8vIGFsbCB0aGUgcmVzdFxuZWRpdFByb2ZpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJlZmlsbEVkaXRGb3JtKGVkaXRNb2RhbCk7XG4gIG9wZW5Nb2RhbChlZGl0TW9kYWwpO1xufSk7XG5cbmVkaXRQcm9maWxlQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlTW9kYWwoZWRpdE1vZGFsKSk7XG5cbmFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG9wZW5Nb2RhbChhZGRNb2RhbCkpO1xuIl0sIm5hbWVzIjpbIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJQb3B1cFdpdGhJbWFnZSIsIlBvcHVwV2l0aEZvcm0iLCJwcmV2aWV3TW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aWV3TW9kYWxJbWFnZSIsInByZXZpZXdNb2RhbFRpdGxlIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkQ2xpY2siLCJfbmFtZSIsInRpdGxlIiwiX2xpbmsiLCJpbWFnZSIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2UiLCJfaGFuZGxlRGVsZXRlIiwibGluayIsInRleHQiLCJfdGV4dCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwidGV4dENvbnRlbnQiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtIiwiaW5wdXRFbCIsImVycm9yRWwiLCJpZCIsImFkZCIsImlubmVyVGV4dCIsInZhbGlkYXRpb25NZXNzYWdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIl9pbnB1dExpc3QiLCJldmVyeSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZXZ0IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJQb3B1cCIsInNlbGVjdG9yIiwiX3BvcHVwRWxlbWVudCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJrZXkiLCJFU0NfS0VZQ09ERSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlRm9ybVN1Ym1pc3Npb24iLCJfaGFuZGxlRm9ybVN1Ym1pc3Npb24iLCJpbnB1dFZhbHVlcyIsImlucHV0IiwibmFtZSIsInZhbHVlIiwiZSIsIl9nZXRJbnB1dFZhbHVlcyIsIl9pbWFnZUVsZW1lbnQiLCJfaW1hZ2VDYXB0aW9uIiwic3JjIiwiYWx0IiwiU2VjdGlvbiIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtcyIsIml0ZW0iLCJyZW5kZXJlZEl0ZW0iLCJhZGRJdGVtIiwiVXNlckluZm8iLCJuYW1lU2VsZWN0b3IiLCJhYm91dFNlbGVjdG9yIiwiX2Fib3V0IiwiYWJvdXQiLCJ1c2VyRGF0YSIsIm1vZGFsIiwiY2xvc2VNb2RhbENsaWNrSGFuZGxlciIsImNsb3NlTW9kYWxFc2NhcGVIYW5kbGVyIiwiaW5pdGlhbENhcmRzIiwic2VsZWN0b3JzIiwiY2FyZFNlY3Rpb24iLCJjYXJkVGVtcGxhdGUiLCJwcmV2aWV3UG9wdXAiLCJwcm9maWxlQ29uc3RhbnRzIiwicHJvZmlsZU1vZGFsU2VsZWN0b3IiLCJlZGl0TW9kYWwiLCJlZGl0Rm9ybSIsImFkZE1vZGFsIiwiYWRkRm9ybSIsImNhcmRzIiwiZWRpdFByb2ZpbGVCdXR0b24iLCJlZGl0UHJvZmlsZUNsb3NlQnV0dG9uIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlQWJvdXQiLCJhZGRDYXJkQnV0dG9uIiwiYWRkTW9kYWxDbG9zZUJ1dHRvbiIsInByZXZpZXdNb2RhbENsb3NlQnV0dG9uIiwicHJlZmlsbEVkaXRGb3JtIiwibW9kYWxXaW5kb3ciLCJuYW1lSW5wdXQiLCJhYm91dElucHV0IiwiYWRkVGl0bGVWYWx1ZSIsImFkZEltYWdlVXJsVmFsdWUiLCJDYXJkUHJldmlld1BvcHVwIiwiQ2FyZFNlY3Rpb24iLCJjYXJkRWwiLCJpbWdEYXRhIiwib3BlbiIsImdlbmVyYXRlQ2FyZCIsInVzZXJJbmZvIiwiZWRpdFBvcHVwIiwic2V0VXNlckluZm8iLCJhZGRQb3B1cCIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9