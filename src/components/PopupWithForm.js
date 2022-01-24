import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmission }) {
    super(selector);
    debugger;
    this._handleFormSubmission = handleFormSubmission;
    this._form = this._popupElement.querySelector(".form");
    this._inputList = [...this._popupElement.querySelectorAll(".form__input")];
  }

  close() {
    super.close();
    this._form.reset();
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmission(this._getInputValues());
      this.close();
    });
  }
}
