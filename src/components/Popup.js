class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.key === ESC_KEYCODE) {
      this.close;
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__close-button")
      ) {
        this.close();
      }
    });
  }

  open() {
    document.addEventListener("click", this._handleEscClose);
    this._popupElement.classList.add("modal_is-open");
  }

  close() {
    document.removeEventListener("click", this._handleEscClose);
    this._popupElement.classList.remove("modal_is-open");
  }
}

export default Popup;
