// Functions
function openModal(modal) {
  document.addEventListener("click", closeModalClickHandler);
  document.addEventListener("keydown", closeModalEscapeHandler);
  modal.classList.add("modal_is-open");
}

function closeModal(modal) {
  document.removeEventListener("click", closeModalClickHandler);
  document.removeEventListener("keydown", closeModalEscapeHandler);
  modal.classList.remove("modal_is-open");
}

function closeModalClickHandler(evt) {
  evt.target.classList.remove("modal_is-open");
}

function closeModalEscapeHandler(evt) {
  if (evt.key === "Escape") {
    return closeModal(document.querySelector(".modal_is-open"));
  }
}

function prefillEditForm(modalWindow) {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
}

function editFormSubmitHandler(event){
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;

    closeModal(editModal);
}

function showPreview(card) {
  previewModalImage.src = card.image;
  previewModalImage.alt = `Image of ${cardEl.title}`;

  previewModalTitle.textContent = card.title;
  openModal(previewModal);
}

function toggleLikeButton(evt) {
  evt.target.classList.toggle('card__like-button_type_active');
}


function generateCard(card) {
  const cardEl = cardTemplate.cloneNode(true);
  const cardLikeButton = cardEl.querySelector('.card__like-button');
  const cardDeleteButton = cardEl.querySelector('.card__delete-button');
  const cardImage = cardEl.querySelector('.card__image');


  cardEl.querySelector('.card__title').textContent = card.title;
  cardLikeButton.addEventListener('click', toggleLikeButton);
  cardDeleteButton.addEventListener('click', function() {
    cardEl.remove();
  });
  cardImage.style.backgroundImage = `url(${card.image})`;

  cardImage.addEventListener('click', () => showPreview(card));

  return cardEl;
}

function addFormSubmitHandler(event) {
  event.preventDefault();
  const card = {
    title: addTitleValue.value,
    image: addImageUrlValue.value,
  };

  const cardEl = generateCard(card);
  cards.prepend(cardEl);
  closeModal(addModal);
}

// Event Listeners
editForm.addEventListener('submit', editFormSubmitHandler);
editProfileButton.addEventListener('click', () => {
  prefillEditForm(editModal);
  openModal(editModal);
});
editProfileCloseButton.addEventListener('click', () => closeModal(editModal));

addForm.addEventListener('submit', addFormSubmitHandler);
addCardButton.addEventListener('click', () => openModal(addModal));
addModalCloseButton.addEventListener('click', () => closeModal(addModal));

previewModalCloseButton.addEventListener('click', () => closeModal(previewModal));

// Actions
initialCards.forEach((card) => {
  cardEl = generateCard(card);

  cards.append(cardEl);
});