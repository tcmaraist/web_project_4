class Card {
  constructor(
    { data, handleCardClick, handleDeleteClick, handleLikes, userId },
    cardSelector
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._authUserId = data.owner._id;
    this._userId = userId;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikes = handleLikes;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    this._likeButton = this._element.querySelector(".card__like-button");
    this._likeButton.addEventListener("click", () => {
      this._handleLikes();
    });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleCardClick({ name: this._name, link: this._link });
      });
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick();
    });
  }

  _updateLikes(data) {
    this._likes = data.likes;
    this._handleLikeButtonClick();
  }

  _handleLikeButtonClick() {
    this._likeCounter.textContent = this._likes.length;

    if (this._likes.filter((user) => user._id === this._userId).length > 0) {
      this._likeButton.classList.add("card__like-button_type_active");
    } else {
      this._likeButton.classList.remove("card__like-button_type_active");
    }
  }

  _handleDeleteButtonVisibility() {
    if (this._userId === this._authUserId) {
      this._deleteButton.style.vilibility = "visible";
    } else {
      this._deleteButton.style.visibility = "hidden";
    }
  }
  _isLiked() {
    if (this._likeButton.classList.contains("card__like-button_type_active")) {
      return true;
    } else {
      return false;
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._likeCounter = this._element.querySelector(
      ".card__like-button-counter"
    );
    this._setEventListeners();
    this._handleLikeButtonClick();
    this._handleDeleteButtonVisibility();

    this._element.querySelector(
      ".card__image"
    ).style.backgroundImage = `url(${this._link})`;
    this._element.querySelector(".card__title").textContent = this._name;
    return this._element;
  }
}

export default Card;
