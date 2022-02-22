import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selector, handleFormSubmission }) {
    super(selector);

    this._handleFormSubmission = handleFormSubmission;
    this._form = this._popupElement.querySelector(".form");
    this._inputList = [...this._popupElement.querySelectorAll(".form__input")];
    this._submitButton = this._form.querySelector(".form__save-button");
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

  renderSaving(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = "Save";
    }
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (e) => {
      e.preventDefault();
      this.renderSaving(true);
      this._handleFormSubmission(this._getInputValues());
      this.close();
    });
  }
}
