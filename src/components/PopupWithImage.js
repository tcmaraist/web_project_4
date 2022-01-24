import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._imageElement = this._popupElement.querySelector(".modal__image");
    this._imageCaption = this._popupElement.querySelector(".modal__title");
  }
  open(data) {
    super.open();
    this._imageElement.src = data.link;
    this._imageElement.alt = `Image of ${data.link}`;
    this._imageCaption.textContent = data.name;
  }
}
