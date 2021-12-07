const previewModal = document.querySelector('.modal_type_preview');
const previewModalImage = previewModal.querySelector('.modal__image');
const previewModalTitle = document.querySelector('.modal__title');

const closeModalEscapeHandler = (evt) => {
    if (evt.key === "Escape") {
      return closeModal(document.querySelector(".modal_is-open"));
    }
  };

const openModal = (modal) => {
    document.addEventListener("click", closeModalClickHandler);
    document.addEventListener("keydown", closeModalEscapeHandler);
    modal.classList.add("modal_is-open");
  };
  
const closeModal = (modal) => {
    document.removeEventListener("click", closeModalClickHandler);
    document.removeEventListener("keydown", closeModalEscapeHandler);
    modal.classList.remove("modal_is-open");
  };

class Card {
    constructor(data, cardSelector) {
        this._name = data.title;
        this._link = data.image;

        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
        return cardElement;
    };

    _handleLike() {
        this._element.querySelector(".card__like-button").classList.toggle("card__like-button_type_active");
    };

    _handleDelete() {
        this._element.remove();
    };

    _handlePreviewPicture() {
        openModal(previewModal); 
        previewModalImage.src = this._link;
        previewModalImage.alt = `Image of ${this._name}`;
      
        previewModalTitle.textContent = this._name;
    };

    _setEventListeners() {
        this._element.querySelector(".card__like-button").addEventListener('click', () => {this.handleLike()});
        this._element.querySelector(".card__delete-button").addEventListener('click', () => {this._handleDelete()});
      
        this._element.querySelector(".card__image").addEventListener('click', () => {this._handlePreview});
    };

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.card__image').style.backgroundImage = `url(${this._link})`;
        this._element.querySelector('.card__title').textContent = this._name;

        return this._element;
    }
};

export default Card;