/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/components/Card.js":
      /*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ previewModal: () => /* binding */ previewModal,
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./utils.js */ "./src/components/utils.js");
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }

        var previewModal = document.querySelector(".modal_type_preview");
        var previewModalImage = previewModal.querySelector(".modal__image");
        var previewModalTitle = previewModal.querySelector(".modal__title");

        var Card = /*#__PURE__*/ (function () {
          function Card(data, cardSelector) {
            _classCallCheck(this, Card);

            this._name = data.title;
            this._link = data.image;
            this._cardSelector = cardSelector;
          }

          _createClass(Card, [
            {
              key: "_getTemplate",
              value: function _getTemplate() {
                var cardElement = document
                  .querySelector(this._cardSelector)
                  .content.querySelector(".card")
                  .cloneNode(true);
                return cardElement;
              },
            },
            {
              key: "_handleLike",
              value: function _handleLike() {
                this._element
                  .querySelector(".card__like-button")
                  .classList.toggle("card__like-button_type_active");
              },
            },
            {
              key: "_handleDelete",
              value: function _handleDelete() {
                this._element.remove();
              },
            },
            {
              key: "_handlePreviewPicture",
              value: function _handlePreviewPicture() {
                (0, _utils_js__WEBPACK_IMPORTED_MODULE_0__.openModal)(
                  previewModal
                );
                previewModalImage.src = this._link;
                previewModalImage.alt = "Image of ".concat(this._name);
                previewModalTitle.textContent = this._name;
              },
            },
            {
              key: "_setEventListeners",
              value: function _setEventListeners() {
                var _this = this;

                this._element
                  .querySelector(".card__like-button")
                  .addEventListener("click", function () {
                    _this._handleLike();
                  });

                this._element
                  .querySelector(".card__delete-button")
                  .addEventListener("click", function () {
                    _this._handleDelete();
                  });

                this._element
                  .querySelector(".card__image")
                  .addEventListener("click", function () {
                    _this._handlePreviewPicture();
                  });
              },
            },
            {
              key: "generateCard",
              value: function generateCard() {
                this._element = this._getTemplate();

                this._setEventListeners();

                this._element.querySelector(
                  ".card__image"
                ).style.backgroundImage = "url(".concat(this._link, ")");
                this._element.querySelector(".card__title").textContent =
                  this._name;
                return this._element;
              },
            },
          ]);

          return Card;
        })();

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Card;

        /***/
      },

    /***/ "./src/components/FormValidator.js":
      /*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        function _toConsumableArray(arr) {
          return (
            _arrayWithoutHoles(arr) ||
            _iterableToArray(arr) ||
            _unsupportedIterableToArray(arr) ||
            _nonIterableSpread()
          );
        }

        function _nonIterableSpread() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }

        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (
            n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          )
            return _arrayLikeToArray(o, minLen);
        }

        function _iterableToArray(iter) {
          if (
            (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null) ||
            iter["@@iterator"] != null
          )
            return Array.from(iter);
        }

        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }

        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

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
          Object.defineProperty(Constructor, "prototype", { writable: false });
          return Constructor;
        }

        var FormValidator = /*#__PURE__*/ (function () {
          function FormValidator(settings, formElement) {
            _classCallCheck(this, FormValidator);

            this._inputSelector = settings.inputSelector;
            this._submitButtonSelector = settings.submitButtonSelector;
            this._inactiveButtonClass = settings.inactiveButtonClass;
            this._inputErrorClass = settings.inputErrorClass;
            this._errorClass = settings.errorClass;
            this._form = formElement;
          }

          _createClass(FormValidator, [
            {
              key: "_showInputError",
              value: function _showInputError(inputEl) {
                var errorEl = this._form.querySelector(
                  "#".concat(inputEl.id, "-error")
                );

                inputEl.classList.add(this._inputErrorClass);
                errorEl.innerText = inputEl.validationMessage;
                errorEl.classList.add(this._errorClass);
              },
            },
            {
              key: "_hideInputError",
              value: function _hideInputError(inputEl) {
                var errorEl = this._form.querySelector(
                  "#".concat(inputEl.id, "-error")
                );

                inputEl.classList.remove(this._inputErrorClass);
                errorEl.innerText = "";
                errorEl.classList.remove(this._errorClass);
              },
            },
            {
              key: "_checkInputValidity",
              value: function _checkInputValidity(inputEl) {
                if (!inputEl.validity.valid) {
                  return this._showInputError(inputEl); // if input is invalid, show error message
                }

                this._hideInputError(inputEl); // if it is valid, remove all error messages. enable submit button
              },
            },
            {
              key: "_hasInvalidInput",
              value: function _hasInvalidInput() {
                return !this._inputList.every(function (inputEl) {
                  return inputEl.validity.valid === true;
                });
              },
            },
            {
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
              },
            },
            {
              key: "_setEventListeners",
              value: function _setEventListeners() {
                var _this = this;

                this._inputList = _toConsumableArray(
                  this._form.querySelectorAll(this._inputSelector)
                );
                this._buttonEl = this._form.querySelector(
                  this._submitButtonSelector
                );

                this._inputList.forEach(function (inputEl) {
                  inputEl.addEventListener("input", function (evt) {
                    // check if the input is valid
                    _this._checkInputValidity(inputEl);

                    _this._toggleButtonState();
                  });
                });
              },
            },
            {
              key: "enableValidation",
              value: function enableValidation() {
                this._form.addEventListener("submit", function (evt) {
                  evt.preventDefault();
                });

                this._setEventListeners();
              },
            },
            {
              key: "resetForm",
              value: function resetForm() {
                this._form.reset();
              },
            },
          ]);

          return FormValidator;
        })();

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          FormValidator;

        /***/
      },

    /***/ "./src/components/data.js":
      /*!********************************!*\
  !*** ./src/components/data.js ***!
  \********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        // Data
        var initialCards = [
          {
            title: "Yosemite Valley",
            image: "https://code.s3.yandex.net/web-code/yosemite.jpg",
          },
          {
            title: "Lake Louise",
            image: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
          },
          {
            title: "Bald Mountains",
            image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
          },
          {
            title: "Latemar",
            image: "https://code.s3.yandex.net/web-code/latemar.jpg",
          },
          {
            title: "Vanoise National Park",
            image: "https://code.s3.yandex.net/web-code/vanoise.jpg",
          },
          {
            title: "Lago di Braies",
            image: "https://code.s3.yandex.net/web-code/lago.jpg",
          },
        ];
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          initialCards;

        /***/
      },

    /***/ "./src/components/utils.js":
      /*!*********************************!*\
  !*** ./src/components/utils.js ***!
  \*********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ openModal: () => /* binding */ openModal,
          /* harmony export */ closeModal: () => /* binding */ closeModal,
          /* harmony export */
        });
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

        /***/
      },

    /***/ "./src/pages/index.css":
      /*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        // extracted by mini-css-extract-plugin

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
    /* harmony import */ var _components_data_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(
        /*! ../components/data.js */ "./src/components/data.js"
      );
    /* harmony import */ var _components_utils_js__WEBPACK_IMPORTED_MODULE_2__ =
      __webpack_require__(
        /*! ../components/utils.js */ "./src/components/utils.js"
      );
    /* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ =
      __webpack_require__(
        /*! ../components/Card.js */ "./src/components/Card.js"
      );
    /* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ =
      __webpack_require__(
        /*! ../components/FormValidator.js */ "./src/components/FormValidator.js"
      );

    // Wrappers

    var editModal = document.querySelector(".modal_type_edit");
    var editForm = editModal.querySelector(".form");
    var addModal = document.querySelector(".modal_type_add");
    var addForm = addModal.querySelector(".form");
    var modal = document.querySelector(".modal");
    var cards = document.querySelector(".cards"); // Buttons

    var editProfileButton = document.querySelector(".profile__edit-button");
    var editProfileCloseButton = editModal.querySelector(
      ".modal__close-button"
    );
    var profileName = document.querySelector(".profile__name");
    var profileAbout = document.querySelector(".profile__about");
    var addCardButton = document.querySelector(".profile__add-button");
    var addModalCloseButton = addModal.querySelector(".modal__close-button");
    var previewModalCloseButton =
      _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.previewModal.querySelector(
        ".modal__close-button"
      ); // Form data

    var nameInput = editForm.querySelector(".form__input_type_name");
    var aboutInput = editForm.querySelector(".form__input_type_about");
    var addTitleValue = document.querySelector(".form__input_type_title");
    var addImageUrlValue = addForm.querySelector(".form__input_type_image-url"); // Functions

    function prefillEditForm(modalWindow) {
      nameInput.value = profileName.textContent;
      aboutInput.value = profileAbout.textContent;
    }

    function editFormSubmitHandler(event) {
      event.preventDefault();
      profileName.textContent = nameInput.value;
      profileAbout.textContent = aboutInput.value;
      (0, _components_utils_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(
        editModal
      );
      editFormValidator.resetForm();
    }

    function addFormSubmitHandler(event) {
      event.preventDefault();
      var card = {
        title: addTitleValue.value,
        image: addImageUrlValue.value,
      };
      var cardEl = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__[
        "default"
      ](card, "#cardTemplate").generateCard();
      cards.prepend(cardEl);
      (0, _components_utils_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(
        addModal
      );
      addFormValidator.resetForm();
    } // Event Listeners

    editForm.addEventListener("submit", editFormSubmitHandler);
    editProfileButton.addEventListener("click", function () {
      prefillEditForm(editModal);
      (0,
      _components_utils_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(editModal);
    });
    editProfileCloseButton.addEventListener("click", function () {
      return (0,
      _components_utils_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(editModal);
    });
    addForm.addEventListener("submit", addFormSubmitHandler);
    addCardButton.addEventListener("click", function () {
      return (0,
      _components_utils_js__WEBPACK_IMPORTED_MODULE_2__.openModal)(addModal);
    });
    addModalCloseButton.addEventListener("click", function () {
      return (0,
      _components_utils_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(addModal);
    });
    previewModalCloseButton.addEventListener("click", function () {
      return (0,
      _components_utils_js__WEBPACK_IMPORTED_MODULE_2__.closeModal)(_components_Card_js__WEBPACK_IMPORTED_MODULE_3__.previewModal);
    }); // Actions

    _components_data_js__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(
      function (card) {
        var cardEl = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__[
          "default"
        ](card, "#cardTemplate").generateCard();
        cards.append(cardEl);
      }
    ); // Validation

    var addFormEl = addModal.querySelector(".form");
    var editFormEl = editModal.querySelector(".form");
    var validationSettings = {
      inputSelector: ".form__input",
      submitButtonSelector: ".form__save-button",
      inactiveButtonClass: "form__save-button_disabled",
      inputErrorClass: "form__input_type_error",
      errorClass: "form__error_visible",
    };
    var addFormValidator =
      new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](
        validationSettings,
        addFormEl
      );
    addFormValidator.enableValidation();
    var editFormValidator =
      new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](
        validationSettings,
        editFormEl
      );
    editFormValidator.enableValidation();
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQixHQUFHLElBQUl2RSxvRUFBSixDQUFrQjJFLGtCQUFsQixFQUFzQ0YsU0FBdEMsQ0FBekI7QUFDQUYsZ0JBQWdCLENBQUNLLGdCQUFqQjtBQUVBLElBQU1aLGlCQUFpQixHQUFHLElBQUloRSxvRUFBSixDQUFrQjJFLGtCQUFsQixFQUFzQ0QsVUFBdEMsQ0FBMUI7QUFDQVYsaUJBQWlCLENBQUNZLGdCQUFsQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL3Byb2plY3QtOC8uL3NyYy9jb21wb25lbnRzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL2NvbXBvbmVudHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC04Ly4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC04L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LTgvLi9zcmMvcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb3Blbk1vZGFsLCBjbG9zZU1vZGFsIH0gZnJvbSBcIi4vdXRpbHMuanNcIlxuXG5leHBvcnQgY29uc3QgcHJldmlld01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX3R5cGVfcHJldmlldycpO1xuY29uc3QgcHJldmlld01vZGFsSW1hZ2UgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZScpO1xuY29uc3QgcHJldmlld01vZGFsVGl0bGUgPSBwcmV2aWV3TW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpO1xuY2xhc3MgQ2FyZCB7XG4gICAgY29uc3RydWN0b3IoZGF0YSwgY2FyZFNlbGVjdG9yKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBkYXRhLnRpdGxlO1xuICAgICAgICB0aGlzLl9saW5rID0gZGF0YS5pbWFnZTtcblxuICAgICAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgX2dldFRlbXBsYXRlKCkge1xuICAgICAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5fY2FyZFNlbGVjdG9yKS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkJykuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICByZXR1cm4gY2FyZEVsZW1lbnQ7XG4gICAgfTtcblxuICAgIF9oYW5kbGVMaWtlKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIikuY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX3R5cGVfYWN0aXZlXCIpO1xuICAgIH07XG5cbiAgICBfaGFuZGxlRGVsZXRlKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xuICAgIH07XG5cbiAgICBfaGFuZGxlUHJldmlld1BpY3R1cmUoKSB7XG4gICAgICAgIG9wZW5Nb2RhbChwcmV2aWV3TW9kYWwpOyBcbiAgICAgICAgcHJldmlld01vZGFsSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcbiAgICAgICAgcHJldmlld01vZGFsSW1hZ2UuYWx0ID0gYEltYWdlIG9mICR7dGhpcy5fbmFtZX1gO1xuICAgICAgXG4gICAgICAgIHByZXZpZXdNb2RhbFRpdGxlLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcbiAgICB9O1xuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fbGlrZS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7dGhpcy5faGFuZGxlTGlrZSgpfSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19kZWxldGUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3RoaXMuX2hhbmRsZURlbGV0ZSgpfSk7XG4gICAgICBcbiAgICAgICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2ltYWdlXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3RoaXMuX2hhbmRsZVByZXZpZXdQaWN0dXJlKCl9KTtcbiAgICB9O1xuXG4gICAgZ2VuZXJhdGVDYXJkKCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19pbWFnZScpLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0aGlzLl9saW5rfSlgO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX190aXRsZScpLnRleHRDb250ZW50ID0gdGhpcy5fbmFtZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkOyIsImNsYXNzIEZvcm1WYWxpZGF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzLCBmb3JtRWxlbWVudCkge1xuICAgICAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gc2V0dGluZ3MuaW5wdXRTZWxlY3RvcjtcbiAgICAgICAgdGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IgPSBzZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcbiAgICAgICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHNldHRpbmdzLmluYWN0aXZlQnV0dG9uQ2xhc3M7XG4gICAgICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHNldHRpbmdzLmlucHV0RXJyb3JDbGFzcztcbiAgICAgICAgdGhpcy5fZXJyb3JDbGFzcyA9IHNldHRpbmdzLmVycm9yQ2xhc3M7XG5cbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm1FbGVtZW50O1xuICAgIH07XG5cblxuICAgIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG5cbiAgICAgICAgaW5wdXRFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yRWwuaW5uZXJUZXh0ID0gaW5wdXRFbC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgZXJyb3JFbC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xuICAgIH1cblxuICAgIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWwuaWR9LWVycm9yYCk7XG5cbiAgICAgICAgaW5wdXRFbC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XG4gICAgICAgIGVycm9yRWwuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGVycm9yRWwuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgICB9XG5cbiAgICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWwpIHtcbiAgICAgICAgaWYgKCFpbnB1dEVsLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbCk7XG4gICAgICAgICAgICAvLyBpZiBpbnB1dCBpcyBpbnZhbGlkLCBzaG93IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsKTtcbiAgICAgICAgLy8gaWYgaXQgaXMgdmFsaWQsIHJlbW92ZSBhbGwgZXJyb3IgbWVzc2FnZXMuIGVuYWJsZSBzdWJtaXQgYnV0dG9uXG4gICAgfVxuXG5cbiAgICBfaGFzSW52YWxpZElucHV0KCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuX2lucHV0TGlzdC5ldmVyeShpbnB1dEVsID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dEVsLnZhbGlkaXR5LnZhbGlkID09PSB0cnVlO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIF90b2dnbGVCdXR0b25TdGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCh0aGlzLl9pbnB1dExpc3QpKSB7XG4gICAgICAgICAgICAvLyBidXR0b24gc2hvdWxkIHVubG9ja1xuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWwuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKVxuICAgICAgICAgICAgdGhpcy5fYnV0dG9uRWwuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gYnV0dG9uIHNob3VsZCBsb2NrXG5cbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcylcbiAgICAgICAgICAgIHRoaXMuX2J1dHRvbkVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLl9pbnB1dExpc3QgPSBbLi4udGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpXTtcbiAgICAgICAgdGhpcy5fYnV0dG9uRWwgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IodGhpcy5fc3VibWl0QnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0RWwgPT4ge1xuICAgICAgICAgICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgaW5wdXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVuYWJsZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZGF0b3I7IiwiLy8gRGF0YVxuY29uc3QgaW5pdGlhbENhcmRzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIllvc2VtaXRlIFZhbGxleVwiLFxuICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9jb2RlLnMzLnlhbmRleC5uZXQvd2ViLWNvZGUveW9zZW1pdGUuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkxha2UgTG91aXNlXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWtlLWxvdWlzZS5qcGdcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQmFsZCBNb3VudGFpbnNcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL2JhbGQtbW91bnRhaW5zLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJMYXRlbWFyXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYXRlbWFyLmpwZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJWYW5vaXNlIE5hdGlvbmFsIFBhcmtcIixcbiAgICAgIGltYWdlOiBcImh0dHBzOi8vY29kZS5zMy55YW5kZXgubmV0L3dlYi1jb2RlL3Zhbm9pc2UuanBnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkxhZ28gZGkgQnJhaWVzXCIsXG4gICAgICBpbWFnZTogXCJodHRwczovL2NvZGUuczMueWFuZGV4Lm5ldC93ZWItY29kZS9sYWdvLmpwZ1wiXG4gICAgfVxuICBdO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGluaXRpYWxDYXJkczsiLCJjb25zdCBvcGVuTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbENsaWNrSGFuZGxlcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbEVzY2FwZUhhbmRsZXIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9pcy1vcGVuXCIpO1xuICB9O1xuICBcbmNvbnN0IGNsb3NlTW9kYWwgPSAobW9kYWwpID0+IHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbENsaWNrSGFuZGxlcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgY2xvc2VNb2RhbEVzY2FwZUhhbmRsZXIpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJtb2RhbF9pcy1vcGVuXCIpO1xuICB9O1xuXG5jb25zdCBjbG9zZU1vZGFsRXNjYXBlSGFuZGxlciA9IChldnQpID0+IHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgcmV0dXJuIGNsb3NlTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9pcy1vcGVuXCIpKTtcbiAgICB9XG4gIH07XG5cbmNvbnN0IGNsb3NlTW9kYWxDbGlja0hhbmRsZXIgPSAoZXZ0KSA9PiB7XG4gICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWxfaXMtb3BlblwiKTtcbiAgfVxuXG5cbmV4cG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xuXG5pbXBvcnQgaW5pdGlhbENhcmRzIGZyb20gXCIuLi9jb21wb25lbnRzL2RhdGEuanNcIjtcbmltcG9ydCB7IG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3V0aWxzLmpzXCI7XG5pbXBvcnQgeyBwcmV2aWV3TW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkLmpzXCI7XG5cbi8vIFdyYXBwZXJzXG5jb25zdCBlZGl0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX3R5cGVfZWRpdFwiKTtcbmNvbnN0IGVkaXRGb3JtID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbmNvbnN0IGFkZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF90eXBlX2FkZFwiKTtcbmNvbnN0IGFkZEZvcm0gPSBhZGRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1cIik7XG5cbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbFwiKTtcblxuY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpO1xuXG4vLyBCdXR0b25zXG5jb25zdCBlZGl0UHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XG5jb25zdCBlZGl0UHJvZmlsZUNsb3NlQnV0dG9uID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2Nsb3NlLWJ1dHRvblwiKTtcbmNvbnN0IHByb2ZpbGVOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19uYW1lXCIpO1xuY29uc3QgcHJvZmlsZUFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hYm91dFwiKTtcblxuY29uc3QgYWRkQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYWRkLWJ1dHRvblwiKTtcbmNvbnN0IGFkZE1vZGFsQ2xvc2VCdXR0b24gPSBhZGRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idXR0b25cIik7XG5jb25zdCBwcmV2aWV3TW9kYWxDbG9zZUJ1dHRvbiA9IHByZXZpZXdNb2RhbC5xdWVyeVNlbGVjdG9yKFxuICBcIi5tb2RhbF9fY2xvc2UtYnV0dG9uXCJcbik7XG5cbi8vIEZvcm0gZGF0YVxuY29uc3QgbmFtZUlucHV0ID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dF90eXBlX25hbWVcIik7XG5jb25zdCBhYm91dElucHV0ID0gZWRpdEZvcm0ucXVlcnlTZWxlY3RvcihcIi5mb3JtX19pbnB1dF90eXBlX2Fib3V0XCIpO1xuY29uc3QgYWRkVGl0bGVWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV90aXRsZVwiKTtcbmNvbnN0IGFkZEltYWdlVXJsVmFsdWUgPSBhZGRGb3JtLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9faW5wdXRfdHlwZV9pbWFnZS11cmxcIik7XG5cbi8vIEZ1bmN0aW9uc1xuZnVuY3Rpb24gcHJlZmlsbEVkaXRGb3JtKG1vZGFsV2luZG93KSB7XG4gIG5hbWVJbnB1dC52YWx1ZSA9IHByb2ZpbGVOYW1lLnRleHRDb250ZW50O1xuICBhYm91dElucHV0LnZhbHVlID0gcHJvZmlsZUFib3V0LnRleHRDb250ZW50O1xufVxuXG5mdW5jdGlvbiBlZGl0Rm9ybVN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcHJvZmlsZU5hbWUudGV4dENvbnRlbnQgPSBuYW1lSW5wdXQudmFsdWU7XG4gIHByb2ZpbGVBYm91dC50ZXh0Q29udGVudCA9IGFib3V0SW5wdXQudmFsdWU7XG5cbiAgY2xvc2VNb2RhbChlZGl0TW9kYWwpO1xuICBlZGl0Rm9ybVZhbGlkYXRvci5yZXNldEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gYWRkRm9ybVN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgY2FyZCA9IHtcbiAgICB0aXRsZTogYWRkVGl0bGVWYWx1ZS52YWx1ZSxcbiAgICBpbWFnZTogYWRkSW1hZ2VVcmxWYWx1ZS52YWx1ZSxcbiAgfTtcblxuICBjb25zdCBjYXJkRWwgPSBuZXcgQ2FyZChjYXJkLCBcIiNjYXJkVGVtcGxhdGVcIikuZ2VuZXJhdGVDYXJkKCk7XG4gIGNhcmRzLnByZXBlbmQoY2FyZEVsKTtcbiAgY2xvc2VNb2RhbChhZGRNb2RhbCk7XG4gIGFkZEZvcm1WYWxpZGF0b3IucmVzZXRGb3JtKCk7XG59XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuZWRpdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlZGl0Rm9ybVN1Ym1pdEhhbmRsZXIpO1xuXG5lZGl0UHJvZmlsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcmVmaWxsRWRpdEZvcm0oZWRpdE1vZGFsKTtcbiAgb3Blbk1vZGFsKGVkaXRNb2RhbCk7XG59KTtcblxuZWRpdFByb2ZpbGVDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VNb2RhbChlZGl0TW9kYWwpKTtcblxuYWRkRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFkZEZvcm1TdWJtaXRIYW5kbGVyKTtcblxuYWRkQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb3Blbk1vZGFsKGFkZE1vZGFsKSk7XG5cbmFkZE1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlTW9kYWwoYWRkTW9kYWwpKTtcblxucHJldmlld01vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+XG4gIGNsb3NlTW9kYWwocHJldmlld01vZGFsKVxuKTtcblxuLy8gQWN0aW9uc1xuaW5pdGlhbENhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgY29uc3QgY2FyZEVsID0gbmV3IENhcmQoY2FyZCwgXCIjY2FyZFRlbXBsYXRlXCIpLmdlbmVyYXRlQ2FyZCgpO1xuXG4gIGNhcmRzLmFwcGVuZChjYXJkRWwpO1xufSk7XG5cbi8vIFZhbGlkYXRpb25cbmNvbnN0IGFkZEZvcm1FbCA9IGFkZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbmNvbnN0IGVkaXRGb3JtRWwgPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuXG5jb25zdCB2YWxpZGF0aW9uU2V0dGluZ3MgPSB7XG4gIGlucHV0U2VsZWN0b3I6IFwiLmZvcm1fX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5mb3JtX19zYXZlLWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcImZvcm1fX3NhdmUtYnV0dG9uX2Rpc2FibGVkXCIsXG4gIGlucHV0RXJyb3JDbGFzczogXCJmb3JtX19pbnB1dF90eXBlX2Vycm9yXCIsXG4gIGVycm9yQ2xhc3M6IFwiZm9ybV9fZXJyb3JfdmlzaWJsZVwiLFxufTtcblxuY29uc3QgYWRkRm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgYWRkRm9ybUVsKTtcbmFkZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuXG5jb25zdCBlZGl0Rm9ybVZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgZWRpdEZvcm1FbCk7XG5lZGl0Rm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG4iXSwibmFtZXMiOlsib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsInByZXZpZXdNb2RhbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInByZXZpZXdNb2RhbEltYWdlIiwicHJldmlld01vZGFsVGl0bGUiLCJDYXJkIiwiZGF0YSIsImNhcmRTZWxlY3RvciIsIl9uYW1lIiwidGl0bGUiLCJfbGluayIsImltYWdlIiwiX2NhcmRTZWxlY3RvciIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9lbGVtZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicmVtb3ZlIiwic3JjIiwiYWx0IiwidGV4dENvbnRlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiX2hhbmRsZUxpa2UiLCJfaGFuZGxlRGVsZXRlIiwiX2hhbmRsZVByZXZpZXdQaWN0dXJlIiwiX2dldFRlbXBsYXRlIiwiX3NldEV2ZW50TGlzdGVuZXJzIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJGb3JtVmFsaWRhdG9yIiwic2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtIiwiaW5wdXRFbCIsImVycm9yRWwiLCJpZCIsImFkZCIsImlubmVyVGV4dCIsInZhbGlkYXRpb25NZXNzYWdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsIl9oaWRlSW5wdXRFcnJvciIsIl9pbnB1dExpc3QiLCJldmVyeSIsIl9oYXNJbnZhbGlkSW5wdXQiLCJfYnV0dG9uRWwiLCJkaXNhYmxlZCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZXZ0IiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIl90b2dnbGVCdXR0b25TdGF0ZSIsInByZXZlbnREZWZhdWx0IiwicmVzZXQiLCJpbml0aWFsQ2FyZHMiLCJtb2RhbCIsImNsb3NlTW9kYWxDbGlja0hhbmRsZXIiLCJjbG9zZU1vZGFsRXNjYXBlSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJrZXkiLCJ0YXJnZXQiLCJlZGl0TW9kYWwiLCJlZGl0Rm9ybSIsImFkZE1vZGFsIiwiYWRkRm9ybSIsImNhcmRzIiwiZWRpdFByb2ZpbGVCdXR0b24iLCJlZGl0UHJvZmlsZUNsb3NlQnV0dG9uIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlQWJvdXQiLCJhZGRDYXJkQnV0dG9uIiwiYWRkTW9kYWxDbG9zZUJ1dHRvbiIsInByZXZpZXdNb2RhbENsb3NlQnV0dG9uIiwibmFtZUlucHV0IiwiYWJvdXRJbnB1dCIsImFkZFRpdGxlVmFsdWUiLCJhZGRJbWFnZVVybFZhbHVlIiwicHJlZmlsbEVkaXRGb3JtIiwibW9kYWxXaW5kb3ciLCJ2YWx1ZSIsImVkaXRGb3JtU3VibWl0SGFuZGxlciIsImV2ZW50IiwiZWRpdEZvcm1WYWxpZGF0b3IiLCJyZXNldEZvcm0iLCJhZGRGb3JtU3VibWl0SGFuZGxlciIsImNhcmQiLCJjYXJkRWwiLCJnZW5lcmF0ZUNhcmQiLCJwcmVwZW5kIiwiYWRkRm9ybVZhbGlkYXRvciIsImFwcGVuZCIsImFkZEZvcm1FbCIsImVkaXRGb3JtRWwiLCJ2YWxpZGF0aW9uU2V0dGluZ3MiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==
