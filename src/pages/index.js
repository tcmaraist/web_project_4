import "./index.css";
import {
  initialCards,
  profileConstants,
  selectors,
} from "../utils/constants.js";
import { openModal, closeModal } from "../components/utils.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import { previewModal } from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

//constants
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

//Functions
function prefillEditForm(modalWindow) {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

// Form data
const nameInput = editForm.querySelector(".form__input_type_name");
const aboutInput = editForm.querySelector(".form__input_type_about");
const addTitleValue = document.querySelector(".form__input_type_title");
const addImageUrlValue = addForm.querySelector(".form__input_type_image-url");

// Create instances of the classes
const CardPreviewPopup = new PopupWithImage(selectors.previewPopup);
const CardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = new Card(
        {
          data: item,
          handleCardClick: (imgData) => {
            CardPreviewPopup.open(imgData);
          },
        },
        selectors.cardTemplate
      );
      CardSection.addItem(cardEl.generateCard());
    },
  },
  selectors.cardSection
);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
});

const editPopup = new PopupWithForm({
  selector: profileConstants.profileModalSelector,
  handleFormSubmission: (data) => {
    userInfo.setUserInfo(data);
  },
});

const addPopup = new PopupWithImage({});

// initialize instances of the classes
CardSection.renderItems(initialCards);
CardPreviewPopup.setEventListeners();

// all the rest
editProfileButton.addEventListener("click", () => {
  prefillEditForm(editModal);
  openModal(editModal);
});

editProfileCloseButton.addEventListener("click", () => closeModal(editModal));

addCardButton.addEventListener("click", () => openModal(addModal));
