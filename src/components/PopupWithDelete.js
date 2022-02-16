import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor({ handleFormSubmission, popupElement }) {
    super(popupElement);

    this._handleFormSubmission = handleFormSubmission;
    this._formElement = this._popupElement.querySelector(".form");
  }

  open(cardId, cardElement) {
    super.open();
    this._cardId = cardId;
    this._cardElement = cardElement;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmission(this._cardId, this._cardElement);
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
