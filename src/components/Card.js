class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._name = data.title;
    this._link = data.image;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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

  _updateLikeCounter() {
    this._liked = this._element.querySelector(".like-button__counter");
    this._liked.textContent = this._liked.length;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLike();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick({ name: this._name, link: this._link });
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
