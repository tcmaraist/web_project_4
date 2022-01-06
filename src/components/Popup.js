class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscUp = this._handleEscUp.bind(this);
  }

  _handleEscUp(evt) {
    evt.preventDefault();
    if (evt.which === ESC_KEYCODE) {
      this.close;
    }
  }

  setEventListeners() {
    this._popupElement.addEventListener("click", (evt) => {
      if (
        evt.target.classList.contains("popup") ||
        evt.target.classList.contains("popup_close")
      ) {
        this.close();
      }
    });
  }

  open() {
    document.addEventListener("click", closeModalClickHandler);
    document.addEventListener("keydown", closeModalEscapeHandler);
    this._popupElement.classList.add("modal_is-open");
  }

  close() {
    document.removeEventListener("click", closeModalClickHandler);
    document.removeEventListener("keydown", closeModalEscapeHandler);
    this._popupElement.classList.remove("modal_is-open");
  }
}

export default Popup;
