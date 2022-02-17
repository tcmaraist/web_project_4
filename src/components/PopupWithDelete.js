import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor({ handleFormSubmission, selector }) {
    super(selector);

    this._handleFormSubmission = handleFormSubmission;
    this._formElement = this._popupElement.querySelector(".form");
  }

  open(cardId, cardEl) {
    super.open();
    this._cardId = cardId;
    this._cardEl = cardEl;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmission(this._cardId, this._cardEl);
    });
  }
}

/*constructor({ Selector }) {
    super(Selector);

    this._handleDelete = this._handleDelete;
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }

  setEventListeners() {
    super.setEventListeners();
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDelete();
      });
  }
  */
