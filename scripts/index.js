import FormValidator from "./FormValidator.js";
import Card from "./Card.js";

// Data
const initialCards = [
  {
    title: "Yosemite Valley",
    image: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    title: "Lake Louise",
    image: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    title: "Bald Mountains",
    image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    title: "Latemar",
    image: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    title: "Vanoise National Park",
    image: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    title: "Lago di Braies",
    image: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

// Wrappers
const editModal = document.querySelector('.modal_type_edit');
const editForm = editModal.querySelector('.form');
const addModal = document.querySelector('.modal_type_add');
const addForm = addModal.querySelector('.form');
const previewModal = document.querySelector('.modal_type_preview');
const modal = document.querySelector('.modal');

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
function closeModalClickHandler(evt) {
  evt.target.classList.remove("modal_is-open");
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
    editFormValidator.resetForm();
}

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

const toggleLikeButton = (evt) => { 

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
  addFormValidator.resetForm();
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
  const cardEl = new Card(card, '#cardTemplate').generateCard();

  cards.append(cardEl);
});

const addFormEl = addModal.querySelector('.form');
const editFormEl = editModal.querySelector('.form');

const validationSettings = {
  inputSelector: ".form__input",
    submitButtonSelector: ".form__save-button",
    inactiveButtonClass: "form__save-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
};

const addFormValidator = new FormValidator(validationSettings, addFormEl);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationSettings, editFormEl);
editFormValidator.enableValidation();