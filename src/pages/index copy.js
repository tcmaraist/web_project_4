import "./index.css";

import initialCards from "../utils/constants.js";
import { openModal, closeModal } from "../components/utils.js";
import { previewModal } from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";

// Wrappers
const editModal = document.querySelector(".modal_type_edit");
const editForm = editModal.querySelector(".form");
const addModal = document.querySelector(".modal_type_add");
const addForm = addModal.querySelector(".form");

const modal = document.querySelector(".modal");

const cards = document.querySelector(".cards");

// Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileCloseButton = editModal.querySelector(".modal__close-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const addCardButton = document.querySelector(".profile__add-button");
const addModalCloseButton = addModal.querySelector(".modal__close-button");
const previewModalCloseButton = previewModal.querySelector(
  ".modal__close-button"
);

// Form data
const nameInput = editForm.querySelector(".form__input_type_name");
const aboutInput = editForm.querySelector(".form__input_type_about");
const addTitleValue = document.querySelector(".form__input_type_title");
const addImageUrlValue = addForm.querySelector(".form__input_type_image-url");

// Functions
function prefillEditForm(modalWindow) {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function editFormSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closeModal(editModal);
  editFormValidator.resetForm();
}

function addFormSubmitHandler(event) {
  event.preventDefault();
  const card = {
    title: addTitleValue.value,
    image: addImageUrlValue.value,
  };

  const cardEl = new Card(card, "#cardTemplate").generateCard();
  cards.prepend(cardEl);
  closeModal(addModal);
  addFormValidator.resetForm();
}

// Event Listeners
editForm.addEventListener("submit", editFormSubmitHandler);

editProfileButton.addEventListener("click", () => {
  prefillEditForm(editModal);
  openModal(editModal);
});

editProfileCloseButton.addEventListener("click", () => closeModal(editModal));

addForm.addEventListener("submit", addFormSubmitHandler);

addCardButton.addEventListener("click", () => openModal(addModal));

addModalCloseButton.addEventListener("click", () => closeModal(addModal));

previewModalCloseButton.addEventListener("click", () =>
  closeModal(previewModal)
);

// Actions
initialCards.forEach((card) => {
  const cardEl = new Card(card, "#cardTemplate").generateCard();

  cards.append(cardEl);
});

// Validation
const addFormEl = addModal.querySelector(".form");
const editFormEl = editModal.querySelector(".form");

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
