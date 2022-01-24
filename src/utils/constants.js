// Data
export const initialCards = [
  {
    title: "Yosemite Valley",
    image: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    title: "Lake Louise",
    image: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    title: "Bald Mountains",
    image: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    image: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    title: "Vanoise National Park",
    image: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    image: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

// Constants
export const validationSettings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};

export const addModal = document.querySelector(".modal_type_add");
export const editModal = document.querySelector(".modal_type_edit");

// Validation
export const addFormEl = addModal.querySelector(".form");
export const editFormEl = editModal.querySelector(".form");

// Selectors
export const selectors = {
  cardSection: ".cards",
  cardTemplate: "#cardTemplate",
  previewPopup: ".modal_type_preview",
  profileModalSelector: ".modal_type_edit",
  addModalSelector: ".modal_type_add",
};
