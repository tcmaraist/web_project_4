class Card {
  constructor(
    { data, handleCardClick, handleDeletePopup, likeHandler, userId },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._authUserId = data.owner._id;
    this._userId = userId;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeletePopup = handleDeletePopup;
    this._likeHandler = likeHandler;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _handleDelete() {
    this._element.remove();
    this._element = null;
  }
  /*
  _handleLike() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_type_active");
  }
*/
  _updateLikeCounter(data) {
    this._likes = data.likes;
    this._likeHandler();
  }

  _likeHandler() {
    this._likeCounter.textContent = this._likes.length;

    if (this._likes.filter((user) => user._id === this._userId).length > 0) {
      this._likeButton.classList.add("card__like-button_type_active");
    } else {
      this._likeButton.classList.remove("card__like-button_type_active");
    }
  }

  _isLiked() {
    if (this._likeButton.classList.contains("card__like-button_type_active")) {
      return true;
    } else {
      return false;
    }
  }

  _handleDeletePopup() {
    if (this._userId === this._authUserId) {
      this._deleteButton.classList.add("card__delete-button_visible");
    } else {
      this._deleteButton.classList.remove("card__delete-button_visible");
    }
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        console.log(evt);
        this._likeHandler();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick({ name: this._name, link: this._link });
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", (evt) => {
        console.log(evt);
        this._handleDeletePopup;
      });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeCounter = this._element.querySelector(
      ".card__like-button-counter"
    );
    this._deleteButton = this._element.querySelector(".card__delete-button");
    return this._element;
  }
}

export default Card;
