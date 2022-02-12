import "./index.css";
import {
  initialCards,
  selectors,
  validationSettings,
} from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
// import PopupWithDelete from "../components/PopupWithDelete.js";
// import Api from "../components/Api.js";
//constants
const addModal = document.querySelector(".modal_type_add");
const editModal = document.querySelector(".modal_type_edit");

const editForm = editModal.querySelector(".form");

// const avatarInput = document.querySelector(".profile__image");

// Validation
const addFormEl = addModal.querySelector(".form");
const editFormEl = editModal.querySelector(".form");

// Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileCloseButton = editModal.querySelector(".modal__close-button");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const addCardButton = document.querySelector(".profile__add-button");
const addModalCloseButton = addModal.querySelector(".modal__close-button");
const previewModalCloseButton = document.querySelector(".modal__close-button");

//Functions
function prefillEditForm(modalWindow) {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

// Form data
const nameInput = editForm.querySelector(".form__input_type_name");
const aboutInput = editForm.querySelector(".form__input_type_about");

// Create instances of the classes
/* const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "4921d172-e47d-477d-bceb-cfdae220d52e",
    "Content-Type": "application/json",
  },
});
*/
const createCard = (item) =>
  new Card(
    {
      data: item,
      handleCardClick: (imgData) => {
        cardPreviewPopup.open(imgData);
      },
    },
    selectors.cardTemplate
  );

const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);
const cardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = createCard(item);
      cardSection.addItem(cardEl.generateCard());
    },
  },
  selectors.cardSection
);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
});

const editPopup = new PopupWithForm({
  selector: selectors.profileModalSelector,
  handleFormSubmission: (data) => {
    userInfo.setUserInfo(data);
  },
});

const addPopup = new PopupWithForm({
  selector: selectors.addModalSelector,
  handleFormSubmission: (card) => {
    const cardEl = createCard(card);
    cardSection.addItem(cardEl.generateCard());
  },
});

/*
const deletePopup = new PopupWithDelete({
  selector: selectors.deletePopupSelector,
  handleDelete: () => {
    const imgEl = document.querySelector("element__image");
    api
      .removeCard({
        _id: imgEl.scroll,
      })
      .then(() => {
        deletePopup._handleDelete();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        //console.log ...loading
      });
  },
});

const avatarPopup = new PopupWithForm({
  selector: selectors.avatarSelector,
  handleFormSubmission: () => {
    const avatar = document.querySelector(".profile__image");
    api
      .updateProfilePicture({
        avatar: avatar,
      })
      .then(() => {
        avatar.src = avatarInput.value;
        avatarPopup.resetForm();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {
        //console.log ...loading
      });
  },
});
*/
const addFormValidator = new FormValidator(validationSettings, addFormEl);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationSettings, editFormEl);
editFormValidator.enableValidation();

// initialize instances of the classes
/*
api
  .getInitialCards()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });
*/
cardSection.renderItems(initialCards);
cardPreviewPopup.setEventListeners();

editPopup.setEventListeners();
addPopup.setEventListeners();

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// all the rest
editProfileButton.addEventListener("click", () => {
  prefillEditForm(editModal);
  editPopup.open();
});

editProfileCloseButton.addEventListener("click", () => editPopup.close());

addCardButton.addEventListener("click", () => {
  addFormValidator.resetForm();
  addPopup.open();
});
addModalCloseButton.addEventListener("click", () => addPopup.close());

previewModalCloseButton.addEventListener("click", () =>
  cardPreviewPopup.close()
);
