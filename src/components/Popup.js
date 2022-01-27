class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    evt.preventDefault();
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("modal") ||
        evt.target.classList.contains("modal__close-button")
      ) {
        this.close();
      }
    });
  }

  open() {
    document.addEventListener("keyup", this._handleEscClose);
    this._popupElement.classList.add("modal_is-open");
  }

  close() {
    document.removeEventListener("keyup", this._handleEscClose);
    this._popupElement.classList.remove("modal_is-open");
  }
}

export default Popup;
