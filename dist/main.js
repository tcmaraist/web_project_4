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
/* harmony import */ var _PopupWithImages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopupWithImages.js */ "./src/components/PopupWithImages.js");
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
    this._handleCardClick = this._handleCardClick;
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
    key: "_handlePreviewPicture",
    value: function _handlePreviewPicture() {
      (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.openModal)(previewModal);
      previewModalImage.src = this._link;
      previewModalImage.alt = "Image of ".concat(this._name);
      previewModalTitle.textContent = this._name;
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
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _createClass(Popup, [{
    key: "_handleEscUp",
    value: function _handleEscUp(evt) {
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
      document.addEventListener("click", closeModalClickHandler);
      document.addEventListener("keydown", closeModalEscapeHandler);

      this._popupElement.classList.add("modal_is-open");
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener("click", closeModalClickHandler);
      document.removeEventListener("keydown", closeModalEscapeHandler);

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
      this._form.reset();

      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
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

/***/ "./src/components/PopupWithImages.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithImages.js ***!
  \*******************************************/
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

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
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
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._element = document.querySelector(selector);
  }

  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      // use this._renderer to create the element for rendering
      this.addItems.forEach(function (item) {
        var renderedItem = _this._renderer(item);

        _this.addItems(renderedItem);
      });
    }
  }, {
    key: "addItems",
    value: function addItems(items) {
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
  cardSections: "cards",
  cardTemplate: "#cardTemplate",
  previewPopup: "modal__type_preview" // maybe modal__body_type_preview //

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
/* harmony import */ var _components_PopupWithImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImages */ "./src/components/PopupWithImages.js");






var CardPreviewPopup = new _components_PopupWithImages__WEBPACK_IMPORTED_MODULE_5__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.previewPopup);
var CardSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  renderer: function renderer(data) {
    var cardEl = newCard({
      data: data,
      handleImageClick: function handleImageClick(imgData) {
        CardPreviewPopup.open(imgData);
      }
    }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.cardTemplate);
    CardSection.addItem(cardEl.generateCard());
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.selectors.cardSection);
CardSection.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.initialCards);
CardPreviewPopup.setEventListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJcEgsbUVBQUosQ0FBb0JnSCx1RUFBcEIsQ0FBekI7QUFDQSxJQUFNSyxXQUFXLEdBQUcsSUFBSWpCLDhEQUFKLENBQ2xCO0FBQ0VHLEVBQUFBLFFBQVEsRUFBRSxrQkFBQzlGLElBQUQsRUFBVTtBQUNsQixRQUFNNkcsTUFBTSxHQUFHQyxPQUFPLENBQ3BCO0FBQ0U5RyxNQUFBQSxJQUFJLEVBQUpBLElBREY7QUFFRStHLE1BQUFBLGdCQUFnQixFQUFFLDBCQUFDQyxPQUFELEVBQWE7QUFDN0JMLFFBQUFBLGdCQUFnQixDQUFDTSxJQUFqQixDQUFzQkQsT0FBdEI7QUFDRDtBQUpILEtBRG9CLEVBT3BCVCx1RUFQb0IsQ0FBdEI7QUFTQUssSUFBQUEsV0FBVyxDQUFDTSxPQUFaLENBQW9CTCxNQUFNLENBQUNNLFlBQVAsRUFBcEI7QUFDRDtBQVpILENBRGtCLEVBZWxCWixzRUFma0IsQ0FBcEI7QUFrQkFLLFdBQVcsQ0FBQ1MsV0FBWixDQUF3QmYsNkRBQXhCO0FBQ0FLLGdCQUFnQixDQUFDVyxpQkFBakIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlcy5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy91dGlscy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vdXRpbHMuanNcIjtcbmltcG9ydCB7IFBvcHVwV2l0aEltYWdlcyB9IGZyb20gXCIuL1BvcHVwV2l0aEltYWdlcy5qc1wiO1xuaW1wb3J0IHsgUG9wdXBXaXRoRm9ybSB9IGZyb20gXCIuL1BvcHVwV2l0aEZvcm0uanNcIjtcblxuZXhwb3J0IGNvbnN0IHByZXZpZXdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfdHlwZV9wcmV2aWV3XCIpO1xuY29uc3QgcHJldmlld01vZGFsSW1hZ2UgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBwcmV2aWV3TW9kYWxUaXRsZSA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX190aXRsZVwiKTtcbmNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3Rvcih7IGRhdGEsIGhhbmRsZUNhcmRDbGljayB9LCBjYXJkU2VsZWN0b3IpIHtcbiAgICB0aGlzLl9uYW1lID0gZGF0YS50aXRsZTtcbiAgICB0aGlzLl9saW5rID0gZGF0YS5pbWFnZTtcblxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRTZWxlY3RvcjtcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSB0aGlzLl9oYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKVxuICAgICAgLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpXG4gICAgICAuY2xvbmVOb2RlKHRydWUpO1xuICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgfVxuXG4gIF9oYW5kbGVMaWtlKCkge1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpXG4gICAgICAuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX3R5cGVfYWN0aXZlXCIpO1xuICB9XG5cbiAgX2hhbmRsZURlbGV0ZSgpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICB9XG5cbiAgX2hhbmRsZVByZXZpZXdQaWN0dXJlKCkge1xuICAgIG9wZW5Nb2RhbChwcmV2aWV3TW9kYWwpO1xuICAgIHByZXZpZXdNb2RhbEltYWdlLnNyYyA9IHRoaXMuX2xpbms7XG4gICAgcHJldmlld01vZGFsSW1hZ2UuYWx0ID0gYEltYWdlIG9mICR7dGhpcy5fbmFtZX1gO1xuXG4gICAgcHJldmlld01vZGFsVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLl9uYW1lO1xuICB9XG5cbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuX2VsZW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2xpa2UtYnV0dG9uXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgdGhpcy5faGFuZGxlTGlrZSgpO1xuICAgICAgfSk7XG4gICAgdGhpcy5fZWxlbWVudFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZURlbGV0ZSgpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5jYXJkX19pbWFnZVwiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh7IGxpbms6IHRoaXMuX2xpbmssIHRleHQ6IHRoaXMuX3RleHQgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2FyZCgpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIuY2FyZF9faW1hZ2VcIlxuICAgICkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3RoaXMuX2xpbmt9KWA7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHNldHRpbmdzLmlucHV0U2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gc2V0dGluZ3Muc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSBzZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xuICAgICAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSBzZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XG4gICAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBzZXR0aW5ncy5lcnJvckNsYXNzO1xuXG4gICAgICAgIHRoaXMuX2Zvcm0gPSBmb3JtRWxlbWVudDtcbiAgICB9O1xuXG5cbiAgICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbCkge1xuICAgICAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuXG4gICAgICAgIGlucHV0RWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvckVsLmlubmVyVGV4dCA9IGlucHV0RWwudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIGVycm9yRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbCkge1xuICAgICAgICBjb25zdCBlcnJvckVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsLmlkfS1lcnJvcmApO1xuXG4gICAgICAgIGlucHV0RWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgICBlcnJvckVsLmlubmVyVGV4dCA9ICcnO1xuICAgICAgICBlcnJvckVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZXJyb3JDbGFzcyk7XG4gICAgfVxuXG4gICAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsKSB7XG4gICAgICAgIGlmICghaW5wdXRFbC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWwpO1xuICAgICAgICAgICAgLy8gaWYgaW5wdXQgaXMgaW52YWxpZCwgc2hvdyBlcnJvciBtZXNzYWdlXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbCk7XG4gICAgICAgIC8vIGlmIGl0IGlzIHZhbGlkLCByZW1vdmUgYWxsIGVycm9yIG1lc3NhZ2VzLiBlbmFibGUgc3VibWl0IGJ1dHRvblxuICAgIH1cblxuXG4gICAgX2hhc0ludmFsaWRJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLl9pbnB1dExpc3QuZXZlcnkoaW5wdXRFbCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXRFbC52YWxpZGl0eS52YWxpZCA9PT0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBfdG9nZ2xlQnV0dG9uU3RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQodGhpcy5faW5wdXRMaXN0KSkge1xuICAgICAgICAgICAgLy8gYnV0dG9uIHNob3VsZCB1bmxvY2tcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcylcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGJ1dHRvbiBzaG91bGQgbG9ja1xuXG4gICAgICAgICAgICB0aGlzLl9idXR0b25FbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpXG4gICAgICAgICAgICB0aGlzLl9idXR0b25FbC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gWy4uLnRoaXMuX2Zvcm0ucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKV07XG4gICAgICAgIHRoaXMuX2J1dHRvbkVsID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcblxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dEVsID0+IHtcbiAgICAgICAgICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZ0KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGlucHV0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3RvZ2dsZUJ1dHRvblN0YXRlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBlbmFibGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldnQpID0+IHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG5cbiAgICByZXNldEZvcm0oKSB7XG4gICAgICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdG9yOyIsImNsYXNzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xuICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faGFuZGxlRXNjVXAgPSB0aGlzLl9oYW5kbGVFc2NVcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2hhbmRsZUVzY1VwKGV2dCkge1xuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChldnQua2V5ID09PSBFU0NfS0VZQ09ERSkge1xuICAgICAgdGhpcy5jbG9zZTtcbiAgICB9XG4gIH1cblxuICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbFwiKSB8fFxuICAgICAgICBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm1vZGFsX19jbG9zZS1idXR0b25cIilcbiAgICAgICkge1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsQ2xpY2tIYW5kbGVyKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1vZGFsRXNjYXBlSGFuZGxlcik7XG4gICAgdGhpcy5fcG9wdXBFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9pcy1vcGVuXCIpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWxDbGlja0hhbmRsZXIpO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGNsb3NlTW9kYWxFc2NhcGVIYW5kbGVyKTtcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX2lzLW9wZW5cIik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBoYW5kbGVGb3JtU3VibWlzc2lvbiB9LCBmb3JtU2VsZWN0b3IpIHtcbiAgICBzdXBlcihmb3JtU2VsZWN0b3IpO1xuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXNzaW9uID0gaGFuZGxlRm9ybVN1Ym1pc3Npb247XG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbiAgICB0aGlzLl9pbnB1dExpc3QgPSBbLi4udGhpcy5wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKFwiZm9ybV9faW5wdXRcIildO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgIHN1cGVyLmNsb3NlKCk7XG4gIH1cblxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgY29uc3QgaW5wdXRWYWx1ZXMgPSB7fTtcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0VmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgfSk7XG4gICAgcmV0dXJuIGlucHV0VmFsdWVzO1xuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWlzc2lvbih0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2ltYWdlXCIpO1xuICAgIHRoaXMuX2ltYWdlQ2FwdGlvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX190aXRsZVwiKTtcbiAgfVxuICBvcGVuKGRhdGEpIHtcbiAgICBzdXBlci5vcGVuKCk7XG4gICAgdGhpcy5faW1hZ2VFbGVtZW50LnNyYyA9IGRhdGEubGluaztcbiAgICB0aGlzLl9pbWFnZUVsZW1lbnQuYWx0ID0gYEltYWdlIG9mICR7ZGF0YS5saW5rfWA7XG4gICAgdGhpcy5faW1hZ2VDYXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS50ZXh0O1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgc2VsZWN0b3IpIHtcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgfVxuXG4gIHJlbmRlckl0ZW1zKGl0ZW1zKSB7XG4gICAgLy8gdXNlIHRoaXMuX3JlbmRlcmVyIHRvIGNyZWF0ZSB0aGUgZWxlbWVudCBmb3IgcmVuZGVyaW5nXG4gICAgdGhpcy5hZGRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCByZW5kZXJlZEl0ZW0gPSB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgICAgIHRoaXMuYWRkSXRlbXMocmVuZGVyZWRJdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEl0ZW1zKGl0ZW1zKSB7XG4gICAgLy8gdGFrZSB0aGUgaXRlbSBhbmQgcmVuZGVyIGl0IGludG8gdGhpcy5fZWxlbWVudFxuICAgIHRoaXMuX2VsZW1lbnQucHJlcGVuZChlbGVtZW50KTtcbiAgfVxufVxuIiwiY29uc3Qgb3Blbk1vZGFsID0gKG1vZGFsKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsQ2xpY2tIYW5kbGVyKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbEVzY2FwZUhhbmRsZXIpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwibW9kYWxfaXMtb3BlblwiKTtcbn07XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWxDbGlja0hhbmRsZXIpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBjbG9zZU1vZGFsRXNjYXBlSGFuZGxlcik7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9pcy1vcGVuXCIpO1xufTtcblxuY29uc3QgY2xvc2VNb2RhbEVzY2FwZUhhbmRsZXIgPSAoZXZ0KSA9PiB7XG4gIGlmIChldnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgcmV0dXJuIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9pcy1vcGVuXCIpKTtcbiAgfVxufTtcblxuY29uc3QgY2xvc2VNb2RhbENsaWNrSGFuZGxlciA9IChldnQpID0+IHtcbiAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfaXMtb3BlblwiKTtcbn07XG5cbmV4cG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9O1xuIiwiLy8gRGF0YVxuXG5leHBvcnQgY29uc3QgRVNDX0tFWUNPREUgPSAyNztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3lvc2VtaXRlLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGFrZSBMb3Vpc2VcIixcbiAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkJhbGQgTW91bnRhaW5zXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvYmFsZC1tb3VudGFpbnMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUvbGF0ZW1hci5qcGdcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlZhbm9pc2UgTmF0aW9uYWwgUGFya1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMYWdvIGRpIEJyYWllc1wiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2xhZ28uanBnXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xuICBjYXJkU2VjdGlvbnM6IFwiY2FyZHNcIixcbiAgY2FyZFRlbXBsYXRlOiBcIiNjYXJkVGVtcGxhdGVcIixcbiAgcHJldmlld1BvcHVwOiBcIm1vZGFsX190eXBlX3ByZXZpZXdcIiwgLy8gbWF5YmUgbW9kYWxfX2JvZHlfdHlwZV9wcmV2aWV3IC8vXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgaW5pdGlhbENhcmRzLCBzZWxlY3RvcnMgfSBmcm9tIFwiLi4vdXRpbHMvY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzXCI7XG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2VzIGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlc1wiO1xuXG5jb25zdCBDYXJkUHJldmlld1BvcHVwID0gbmV3IFBvcHVwV2l0aEltYWdlcyhzZWxlY3RvcnMucHJldmlld1BvcHVwKTtcbmNvbnN0IENhcmRTZWN0aW9uID0gbmV3IFNlY3Rpb24oXG4gIHtcbiAgICByZW5kZXJlcjogKGRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGNhcmRFbCA9IG5ld0NhcmQoXG4gICAgICAgIHtcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIGhhbmRsZUltYWdlQ2xpY2s6IChpbWdEYXRhKSA9PiB7XG4gICAgICAgICAgICBDYXJkUHJldmlld1BvcHVwLm9wZW4oaW1nRGF0YSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0b3JzLmNhcmRUZW1wbGF0ZVxuICAgICAgKTtcbiAgICAgIENhcmRTZWN0aW9uLmFkZEl0ZW0oY2FyZEVsLmdlbmVyYXRlQ2FyZCgpKTtcbiAgICB9LFxuICB9LFxuICBzZWxlY3RvcnMuY2FyZFNlY3Rpb25cbik7XG5cbkNhcmRTZWN0aW9uLnJlbmRlckl0ZW1zKGluaXRpYWxDYXJkcyk7XG5DYXJkUHJldmlld1BvcHVwLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOlsib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsIlBvcHVwV2l0aEltYWdlcyIsIlBvcHVwV2l0aEZvcm0iLCJwcmV2aWV3TW9kYWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2aWV3TW9kYWxJbWFnZSIsInByZXZpZXdNb2RhbFRpdGxlIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsImRhdGEiLCJoYW5kbGVDYXJkQ2xpY2siLCJfbmFtZSIsInRpdGxlIiwiX2xpbmsiLCJpbWFnZSIsIl9jYXJkU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiY2FyZEVsZW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2VsZW1lbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJyZW1vdmUiLCJzcmMiLCJhbHQiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfaGFuZGxlTGlrZSIsIl9oYW5kbGVEZWxldGUiLCJsaW5rIiwidGV4dCIsIl90ZXh0IiwiX2dldFRlbXBsYXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtIiwiaW5wdXRFbCIsImVycm9yRWwiLCJpZCIsImFkZCIsImlubmVyVGV4dCIsInZhbGlkYXRpb25NZXNzYWdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIl9pbnB1dExpc3QiLCJldmVyeSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZXZ0IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY1VwIiwiYmluZCIsImtleSIsIkVTQ19LRVlDT0RFIiwiY2xvc2UiLCJ0YXJnZXQiLCJjb250YWlucyIsImNsb3NlTW9kYWxDbGlja0hhbmRsZXIiLCJjbG9zZU1vZGFsRXNjYXBlSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmb3JtU2VsZWN0b3IiLCJoYW5kbGVGb3JtU3VibWlzc2lvbiIsIl9oYW5kbGVGb3JtU3VibWlzc2lvbiIsIl9wb3B1cCIsInBvcHVwIiwiaW5wdXRWYWx1ZXMiLCJpbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsImUiLCJfZ2V0SW5wdXRWYWx1ZXMiLCJQb3B1cFdpdGhJbWFnZSIsIl9pbWFnZUVsZW1lbnQiLCJfaW1hZ2VDYXB0aW9uIiwiU2VjdGlvbiIsInNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsImFkZEl0ZW1zIiwiaXRlbSIsInJlbmRlcmVkSXRlbSIsInByZXBlbmQiLCJlbGVtZW50IiwibW9kYWwiLCJpbml0aWFsQ2FyZHMiLCJzZWxlY3RvcnMiLCJjYXJkU2VjdGlvbnMiLCJjYXJkVGVtcGxhdGUiLCJwcmV2aWV3UG9wdXAiLCJDYXJkUHJldmlld1BvcHVwIiwiQ2FyZFNlY3Rpb24iLCJjYXJkRWwiLCJuZXdDYXJkIiwiaGFuZGxlSW1hZ2VDbGljayIsImltZ0RhdGEiLCJvcGVuIiwiYWRkSXRlbSIsImdlbmVyYXRlQ2FyZCIsImNhcmRTZWN0aW9uIiwicmVuZGVySXRlbXMiLCJzZXRFdmVudExpc3RlbmVycyJdLCJzb3VyY2VSb290IjoiIn0=