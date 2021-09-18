// Wrappers
const editModal = document.querySelector('.modal_type_edit');
const editForm = editModal.querySelector('.form');
const addModal = document.querySelector('.modal_type_add');
const addForm = addModal.querySelector('.form');
const previewModal = document.querySelector('.modal_type_preview');

const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');
const previewModalTitle = document.querySelector('.modal__title');


// Buttons
const editProfileButton = document.querySelector('.profile__edit-button');
const editProfileCloseButton = editModal.querySelector('.modal__close-button');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const addCardButton = document.querySelector('.profile__add-button');
const addModalCloseButton = addModal.querySelector('.modal__close-button');

const previewModalCloseButton = previewModal.querySelector('.modal__close-button');
const previewModalImage = previewModal.querySelector('.modal__image');

const cardDeleteButton = document.querySelector('.card__delete-button');

// Form data
const nameInput = editForm.querySelector('.form__input_type_name');
const aboutInput = editForm.querySelector('.form__input_type_about');
const addTitleValue = document.querySelector('.form__input_type_title');
const addImageUrlValue = addForm.querySelector('.form__input_type_image-url');

// Functions
function prefillEditForm(modalWindow) {
  if (!modalWindow.classList.contains('modal_is-open')) {
    nameInput.value = profileName.textContent;
    aboutInput.value = profileAbout.textContent;
  }
}

function toggleModalWindow(modalWindow) {
  modalWindow.classList.toggle('modal_is-open');
}

function editFormSubmitHandler(event){
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;

    toggleModalWindow(editModal);
}

function showPreview(card) {
  previewModalImage.src = card.image;
  previewModalImage.alt = `Image of ${cardEl.title}`;

  previewModalTitle.textContent = card.title;
  toggleModalWindow(previewModal);
}

function toggleLikeButton(evt) {
  evt.target.classList.toggle('card__like-button_type_active');
}


function generateCards(card) {
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

  const cardEl = generateCards(card);
  cards.prepend(cardEl);
  toggleModalWindow(addModal);
}

// Event Listeners

editForm.addEventListener('submit', editFormSubmitHandler);
editProfileButton.addEventListener('click', () => {
  prefillEditForm(editModal);
  toggleModalWindow(editModal);
});
editProfileCloseButton.addEventListener('click', () => toggleModalWindow(editModal));

addForm.addEventListener('submit', addFormSubmitHandler);
addCardButton.addEventListener('click', () => toggleModalWindow(addModal));
addModalCloseButton.addEventListener('click', () => toggleModalWindow(addModal));

previewModalCloseButton.addEventListener('click', () => toggleModalWindow(previewModal));

// Actions
initialCards.forEach((card) => {
  cardEl = generateCards(card);

  cards.append(cardEl);
});