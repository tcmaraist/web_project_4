import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor({ handleFormSubmission, selector }) {
    super(selector);

    this._handleFormSubmission = handleFormSubmission;
    this._formElement = this._popupElement.querySelector(".form");
  }

  open(cardID, card) {
    super.open();
    this._cardId = cardID;
    this._cardEl = card;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmission(this._cardId, this._cardEl);
    });
  }
}
