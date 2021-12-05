import FormValidator from "./FormValidator.js";
import Card from "./Card.js";


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

/*  NEEDS renderCard const?
const renderCard = (data, wrap) => {
    const card = new Card(data, '#cardTemplate').generateCard();
    wrap.prepend(card);
};
*/

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
  const cardEl = generateCard(card);

  cards.append(cardEl);
});

const addFormEl = addForm.querySelector('.form');
const editFormEl = editForm.querySelector('.form');

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