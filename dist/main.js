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

  function PopupWithForm(_ref, formSelector) {
    var _this;

    var handleFormSubmission = _ref.handleFormSubmission;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, formSelector);
    _this._handleFormSubmission = handleFormSubmission;
    _this._form = _this._popup.querySelector(".form");
    _this._inputList = _toConsumableArray(_this.popup.querySelectorAll("form__input"));
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

      this._popup.addEventListener("submit", function (e) {
        e.preventDefault();

        _this2._handleFormSubmission(_this2._getInputValues());
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
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      // use this._renderer to create the element for rendering
      items.forEach(function (item) {
        var renderedItem = _this._renderer(item);

        _this.addItem(renderedItem);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      // take the item and render it into this._element
      this._element.prepend(element);
    }
  }]);

  return Section;
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
/* harmony export */   "selectors": () => (/* binding */ selectors)
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
  cardSection: "cards",
  cardTemplate: "#cardTemplate",
  previewPopup: "modal_type_preview"
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
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");





 // Create instances of the classes

var CardPreviewPopup = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.previewPopup);
var CardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  renderer: function renderer(item) {
    var cardEl = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
      data: data,
      handleCardClick: function handleCardClick(imgData) {
        CardPreviewPopup.open(imgData);
      }
    }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.cardTemplate);
    CardSection.addItem(cardEl.generateCard());
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.cardSection);
/* const userInfo = new UserInfo({
  nameSelector: ,
  aboutSelector: ,
});
*/
// initialize instances of the classes

CardSection.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.initialCards);
CardPreviewPopup.setEventListeners(); // all the rest

editProfileButton.addEventListener("click", function () {
  prefillEditForm(editModal);
  openModal(editModal);
});
editProfileCloseButton.addEventListener("click", function () {
  return closeModal(editModal);
});
addCardButton.addEventListener("click", function () {
  return openModal(addModal);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0VFLE1BQUFBLElBQUksRUFBSkEsSUFERjtBQUVFQyxNQUFBQSxlQUFlLEVBQUUseUJBQUMyRyxPQUFELEVBQWE7QUFDNUJILFFBQUFBLGdCQUFnQixDQUFDSSxJQUFqQixDQUFzQkQsT0FBdEI7QUFDRDtBQUpILEtBRGEsRUFPYlAsdUVBUGEsQ0FBZjtBQVNBSyxJQUFBQSxXQUFXLENBQUNaLE9BQVosQ0FBb0JhLE1BQU0sQ0FBQ0csWUFBUCxFQUFwQjtBQUNEO0FBWkgsQ0FEa0IsRUFlbEJULHNFQWZrQixDQUFwQjtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0FLLFdBQVcsQ0FBQ0ssV0FBWixDQUF3QlgsNkRBQXhCO0FBQ0FLLGdCQUFnQixDQUFDTyxpQkFBakIsSUFFQTs7QUFDQUMsaUJBQWlCLENBQUNsRyxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsWUFBTTtBQUNoRG1HLEVBQUFBLGVBQWUsQ0FBQ0MsU0FBRCxDQUFmO0FBQ0E5SCxFQUFBQSxTQUFTLENBQUM4SCxTQUFELENBQVQ7QUFDRCxDQUhEO0FBS0FDLHNCQUFzQixDQUFDckcsZ0JBQXZCLENBQXdDLE9BQXhDLEVBQWlEO0FBQUEsU0FBTXpCLFVBQVUsQ0FBQzZILFNBQUQsQ0FBaEI7QUFBQSxDQUFqRDtBQUVBRSxhQUFhLENBQUN0RyxnQkFBZCxDQUErQixPQUEvQixFQUF3QztBQUFBLFNBQU0xQixTQUFTLENBQUNpSSxRQUFELENBQWY7QUFBQSxDQUF4QyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy91dGlscy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtOC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gXCIuL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gXCIuL1BvcHVwV2l0aEltYWdlLmpzXCI7XG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSBcIi4vUG9wdXBXaXRoRm9ybS5qc1wiO1xuXG5leHBvcnQgY29uc3QgcHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF90eXBlX3ByZXZpZXdcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxJbWFnZSA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19pbWFnZVwiKTtcbmNvbnN0IHByZXZpZXdNb2RhbFRpdGxlID0gcHJldmlld01vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3RpdGxlXCIpO1xuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgaGFuZGxlQ2FyZENsaWNrIH0sIGNhcmRTZWxlY3Rvcikge1xuICAgIHRoaXMuX25hbWUgPSBkYXRhLnRpdGxlO1xuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmltYWdlO1xuXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXG4gICAgICAuY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgX2hhbmRsZUxpa2UoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcbiAgICAgIC5jbGFzc0xpc3QudG9nZ2xlKFwiY2FyZF9fbGlrZS1idXR0b25fdHlwZV9hY3RpdmVcIik7XG4gIH1cblxuICBfaGFuZGxlRGVsZXRlKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKCk7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9oYW5kbGVMaWtlKCk7XG4gICAgICB9KTtcbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlRGVsZXRlKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKHsgbGluazogdGhpcy5fbGluaywgdGV4dDogdGhpcy5fdGV4dCB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5jYXJkX19pbWFnZVwiXG4gICAgKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dGhpcy5fbGlua30pYDtcbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuXG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG5cbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm1FbGVtZW50O1xuICAgIH07XG5cblxuICAgIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG5cbiAgICAgICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yRWwuaW5uZXJUZXh0ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG5cbiAgICAgICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yRWwuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICAgICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbCk7XG4gICAgICAgICAgICAvLyBpZiBpbnB1dCBpcyBpbnZhbGlkLCBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKTtcbiAgICAgICAgLy8gaWYgaXQgaXMgdmFsaWQsIHJlbW92ZSBhbGwgZXJyb3IgbWVzc2FnZXMuIGVuYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgfVxuXG5cbiAgICBfaGFzSW52YWxpZElucHV0KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2lucHV0TGlzdC5ldmVyeShpbnB1dEVsID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dEVsLnZhbGlkaXR5LnZhbGlkID09PSB0cnVlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dExpc3QpKSB7XG4gICAgICAgICAgICAvLyBidXR0b24gc2hvdWxkIHVubG9ja1xuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYnV0dG9uIHNob3VsZCBsb2NrXG5cbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcylcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBbLi4udGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcbiAgICAgICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0RWwgPT4ge1xuICAgICAgICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgaW5wdXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiY2xhc3MgUG9wdXAge1xuICBjb25zdHJ1Y3RvcihzZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZXZ0LmtleSA9PT0gRVNDX0tFWUNPREUpIHtcbiAgICAgIHRoaXMuY2xvc2U7XG4gICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibW9kYWxcIikgfHxcbiAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2UtYnV0dG9uXCIpXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfaXMtb3BlblwiKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9pcy1vcGVuXCIpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHsgaGFuZGxlRm9ybVN1Ym1pc3Npb24gfSwgZm9ybVNlbGVjdG9yKSB7XG4gICAgc3VwZXIoZm9ybVNlbGVjdG9yKTtcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWlzc2lvbiA9IGhhbmRsZUZvcm1TdWJtaXNzaW9uO1xuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG4gICAgdGhpcy5faW5wdXRMaXN0ID0gWy4uLnRoaXMucG9wdXAucXVlcnlTZWxlY3RvckFsbChcImZvcm1fX2lucHV0XCIpXTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICB9XG5cbiAgX2dldElucHV0VmFsdWVzKCkge1xuICAgIGNvbnN0IGlucHV0VmFsdWVzID0ge307XG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dFZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgIH0pO1xuICAgIHJldHVybiBpbnB1dFZhbHVlcztcbiAgfVxuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pc3Npb24odGhpcy5fZ2V0SW5wdXRWYWx1ZXMoKSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBzdXBlcihzZWxlY3Rvcik7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xuICAgIHRoaXMuX2ltYWdlQ2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX190aXRsZVwiKTtcbiAgfVxuICBvcGVuKGRhdGEpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGluaztcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gYEltYWdlIG9mICR7ZGF0YS5saW5rfWA7XG4gICAgdGhpcy5faW1hZ2VDYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBzZWxlY3Rvcikge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XG4gICAgdGhpcy5fZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXMpIHtcbiAgICAvLyB1c2UgdGhpcy5fcmVuZGVyZXIgdG8gY3JlYXRlIHRoZSBlbGVtZW50IGZvciByZW5kZXJpbmdcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCByZW5kZXJlZEl0ZW0gPSB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICAgIHRoaXMuYWRkSXRlbShyZW5kZXJlZEl0ZW0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgLy8gdGFrZSB0aGUgaXRlbSBhbmQgcmVuZGVyIGl0IGludG8gdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2VsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsQ2xpY2tIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbEVzY2FwZUhhbmRsZXIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfaXMtb3BlblwiKTtcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWxDbGlja0hhbmRsZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1vZGFsRXNjYXBlSGFuZGxlcik7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9pcy1vcGVuXCIpO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbEVzY2FwZUhhbmRsZXIgPSAoZXZ0KSA9PiB7XG4gIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgcmV0dXJuIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9pcy1vcGVuXCIpKTtcbiAgfVxufTtcblxuY29uc3QgY2xvc2VNb2RhbENsaWNrSGFuZGxlciA9IChldnQpID0+IHtcbiAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfaXMtb3BlblwiKTtcbn07XG5cbmV4cG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9O1xuIiwiLy8gRGF0YVxuXG5leHBvcnQgY29uc3QgRVNDX0tFWUNPREUgPSAyNztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkU2VjdGlvbjogXCJjYXJkc1wiLFxuICBjYXJkVGVtcGxhdGU6IFwiI2NhcmRUZW1wbGF0ZVwiLFxuICBwcmV2aWV3UG9wdXA6IFwibW9kYWxfdHlwZV9wcmV2aWV3XCIsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgaW5pdGlhbENhcmRzLCBzZWxlY3RvcnMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanNcIjtcblxuLy8gQ3JlYXRlIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlc1xuXG5jb25zdCBDYXJkUHJldmlld1BvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlKHNlbGVjdG9ycy5wcmV2aWV3UG9wdXApO1xuY29uc3QgQ2FyZFNlY3Rpb24gPSBuZXcgU2VjdGlvbihcbiAge1xuICAgIHJlbmRlcmVyOiAoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGhhbmRsZUNhcmRDbGljazogKGltZ0RhdGEpID0+IHtcbiAgICAgICAgICAgIENhcmRQcmV2aWV3UG9wdXAub3BlbihpbWdEYXRhKTtcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3RvcnMuY2FyZFRlbXBsYXRlXG4gICAgICApO1xuICAgICAgQ2FyZFNlY3Rpb24uYWRkSXRlbShjYXJkRWwuZ2VuZXJhdGVDYXJkKCkpO1xuICAgIH0sXG4gIH0sXG4gIHNlbGVjdG9ycy5jYXJkU2VjdGlvblxuKTtcblxuLyogY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xuICBuYW1lU2VsZWN0b3I6ICxcbiAgYWJvdXRTZWxlY3RvcjogLFxufSk7XG4qL1xuXG4vLyBpbml0aWFsaXplIGluc3RhbmNlcyBvZiB0aGUgY2xhc3Nlc1xuQ2FyZFNlY3Rpb24ucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcbkNhcmRQcmV2aWV3UG9wdXAuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuLy8gYWxsIHRoZSByZXN0XG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcmVmaWxsRWRpdEZvcm0oZWRpdE1vZGFsKTtcbiAgb3Blbk1vZGFsKGVkaXRNb2RhbCk7XG59KTtcblxuZWRpdFByb2ZpbGVDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChlZGl0TW9kYWwpKTtcblxuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb3Blbk1vZGFsKGFkZE1vZGFsKSk7XG4iXSwibmFtZXMiOlsib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsIlBvcHVwV2l0aEltYWdlIiwiUG9wdXBXaXRoRm9ybSIsInByZXZpZXdNb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByZXZpZXdNb2RhbEltYWdlIiwicHJldmlld01vZGFsVGl0bGUiLCJDYXJkIiwiY2FyZFNlbGVjdG9yIiwiZGF0YSIsImhhbmRsZUNhcmRDbGljayIsIl9uYW1lIiwidGl0bGUiLCJfbGluayIsImltYWdlIiwiX2NhcmRTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkRWxlbWVudCIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTGlrZSIsIl9oYW5kbGVEZWxldGUiLCJsaW5rIiwidGV4dCIsIl90ZXh0IiwiX2dldFRlbXBsYXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0ZXh0Q29udGVudCIsIkZvcm1WYWxpZGF0b3IiLCJzZXR0aW5ncyIsImZvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm0iLCJpbnB1dEVsIiwiZXJyb3JFbCIsImlkIiwiYWRkIiwiaW5uZXJUZXh0IiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwiX2hpZGVJbnB1dEVycm9yIiwiX2lucHV0TGlzdCIsImV2ZXJ5IiwiX2hhc0ludmFsaWRJbnB1dCIsIl9idXR0b25FbCIsImRpc2FibGVkIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJldnQiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiX3RvZ2dsZUJ1dHRvblN0YXRlIiwicHJldmVudERlZmF1bHQiLCJyZXNldCIsIlBvcHVwIiwic2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsImtleSIsIkVTQ19LRVlDT0RFIiwiY2xvc2UiLCJ0YXJnZXQiLCJjb250YWlucyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmb3JtU2VsZWN0b3IiLCJoYW5kbGVGb3JtU3VibWlzc2lvbiIsIl9oYW5kbGVGb3JtU3VibWlzc2lvbiIsIl9wb3B1cCIsInBvcHVwIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsImUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJfaW1hZ2VFbGVtZW50IiwiX2ltYWdlQ2FwdGlvbiIsInNyYyIsImFsdCIsIlNlY3Rpb24iLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIml0ZW1zIiwiaXRlbSIsInJlbmRlcmVkSXRlbSIsImFkZEl0ZW0iLCJlbGVtZW50IiwicHJlcGVuZCIsIm1vZGFsIiwiY2xvc2VNb2RhbENsaWNrSGFuZGxlciIsImNsb3NlTW9kYWxFc2NhcGVIYW5kbGVyIiwiaW5pdGlhbENhcmRzIiwic2VsZWN0b3JzIiwiY2FyZFNlY3Rpb24iLCJjYXJkVGVtcGxhdGUiLCJwcmV2aWV3UG9wdXAiLCJDYXJkUHJldmlld1BvcHVwIiwiQ2FyZFNlY3Rpb24iLCJjYXJkRWwiLCJpbWdEYXRhIiwib3BlbiIsImdlbmVyYXRlQ2FyZCIsInJlbmRlckl0ZW1zIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJlZGl0UHJvZmlsZUJ1dHRvbiIsInByZWZpbGxFZGl0Rm9ybSIsImVkaXRNb2RhbCIsImVkaXRQcm9maWxlQ2xvc2VCdXR0b24iLCJhZGRDYXJkQnV0dG9uIiwiYWRkTW9kYWwiXSwic291cmNlUm9vdCI6IiJ9