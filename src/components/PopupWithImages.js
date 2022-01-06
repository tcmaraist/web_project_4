import Popup from "./Popup";

export default class PopupWithImages extends Popup {
  constructor(popupSelector); {
      super(popupSelector);
      this._imageElement = this._popupElement.querySelector('.modal__image');
      this._imageCaption = this._popupElement.querySelector('.modal__title');

      open(data) {
          this._imageElement.src = data.link;
          this._imageElement.alt = `Image of ${data.link}`;
          this._imageCaption.textContent = data.text;
            super.open();
      }
  }
  
}
