import { openModal, closeModal } from "./utils.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";

export const previewModal = document.querySelector(".modal_type_preview");
const previewModalImage = previewModal.querySelector(".modal__image");
const previewModalTitle = previewModal.querySelector(".modal__title");
class Card {
  constructor({ data, handleImageClick }, cardSelector) {
    this._name = data.title;
    this._link = data.image;

    this._cardSelector = cardSelector;
    this._handleImageClick = this._handleImageClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _handleLike() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_type_active");
  }

  _handleDelete() {
    this._element.remove();
  }

  _handlePreviewPicture() {
    openModal(previewModal);
    previewModalImage.src = this._link;
    previewModalImage.alt = `Image of ${this._name}`;

    previewModalTitle.textContent = this._name;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDelete();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImageClick({ link: this._link, text: this._text });
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;

    return this._element;
  }
}

export default Card;
