import Popup from "./Popup";

export default class PopupWithDelete extends Popup {
  constructor({ Selector }) {
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
}
