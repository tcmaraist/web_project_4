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