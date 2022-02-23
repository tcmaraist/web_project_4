import "./index.css";
import { selectors, validationSettings } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import Api from "../utils/Api.js";

//constants
const addModal = document.querySelector(".modal_type_add");
const editModal = document.querySelector(".modal_type_edit");
const editAvatarModal = document.querySelector(".modal_type_avatar-edit");

const editForm = editModal.querySelector(".form");

// Validation
const addFormEl = addModal.querySelector(".form");
const editFormEl = editModal.querySelector(".form");
const editAvatarFormEl = editAvatarModal.querySelector(".form");

// Buttons
const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileCloseButton = editModal.querySelector(".modal__close-button");
const editAvatarButton = document.querySelector(".profile__avatar-button");
const editAvatarCloseButton = editAvatarModal.querySelector(
  ".modal__close-button"
);
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
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "4921d172-e47d-477d-bceb-cfdae220d52e",
    "Content-Type": "application/json",
  },
});

const userData = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
  avatarSelector: ".profile__image",
});

const cardSection = new Section(
  {
    renderer: (item) => {
      cardSection.addItem(createCard(item));
    },
  },
  selectors.cardSection
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userInfo, initialCards]) => {
    const { name, about, avatar, _id } = userInfo;
    userData.setUserInfo({
      name: name,
      about: about,
      _id: _id,
    });
    userData.setUserAvatar({
      avatar: avatar,
    });
    cardSection.renderItems(initialCards);
  })
  .catch((err) => console.error(`${err}`));

function createCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: (data) => cardPreviewPopup.open(data),
      userId: userData.getUserId(),
      handleDeleteClick: function handleDeleteClick() {
        deletePopup.open(item._id, card);
      },
      handleLike: function handleLike() {
        if (card._isLiked()) {
          api
            .removeLike(item._id)
            .then((data) => card._updateLikes(data))
            .catch((err) => console.error(`${err}`));
        } else {
          api
            .addLike(item._id)
            .then((data) => card._updateLikes(data))
            .catch((err) => console.error(`${err}`));
        }
      },
    },
    selectors.cardTemplate
  );
  return card.generateCard();
}

const cardPreviewPopup = new PopupWithImage(selectors.previewPopup);

const editPopup = new PopupWithForm({
  selector: selectors.profileModalSelector,
  handleFormSubmission: (data) => {
    api
      .setUserInfo(data)
      .then((data) => {
        userData.setUserInfo({
          name: data.name,
          about: data.about,
          id: data._id,
        });
        editPopup.close();
      })
      .catch((err) => {
        console.error(`${err}`);
      })
      .finally(() => {
        editPopup.renderSaving(false);
      });
  },
});

const addPopup = new PopupWithForm({
  selector: selectors.addModalSelector,
  handleFormSubmission: (item) => {
    api
      .addCard(item)
      .then((item) => {
        cardSection.addItem(createCard(item));
      })
      .then(() => {
        addPopup.close();
      })
      .catch((err) => {
        console.error(`${err}`);
      })
      .finally(() => {
        addPopup.renderSaving(false);
      });
  },
});

const deletePopup = new PopupWithDelete({
  selector: selectors.deletePopupSelector,
  handleFormSubmission: (cardID, card) => {
    api
      .removeCard(cardID)
      .then(() => {
        card._remove();
        deletePopup.close();
      })
      .catch((err) => console.error(`${err}`))
      .finally(() => {
        // deletePopup.renderSaving(false);
      });
  },
});

const avatarPopup = new PopupWithForm({
  selector: selectors.avatarSelector,
  handleFormSubmission: (data) => {
    api
      .updateProfilePicture(data)
      .then((data) => {
        userData.setUserAvatar({
          avatar: data.avatar,
        });
        avatarPopup.close();
      })

      .catch((err) => {
        console.error(`${err}`);
      })
      .finally(() => {
        avatarPopup.renderSaving(false);
      });
  },
});

const addFormValidator = new FormValidator(validationSettings, addFormEl);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationSettings, editFormEl);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(
  validationSettings,
  editAvatarFormEl
);
avatarFormValidator.enableValidation();

// initialize instances of the classes
cardPreviewPopup.setEventListeners();

editPopup.setEventListeners();
addPopup.setEventListeners();
avatarPopup.setEventListeners();
deletePopup.setEventListeners();

// all the rest
editProfileButton.addEventListener("click", () => {
  prefillEditForm(editModal);
  editPopup.open();
});
editProfileCloseButton.addEventListener("click", () => editPopup.close());

editAvatarButton.addEventListener("click", () => {
  avatarFormValidator.resetForm();
  avatarPopup.open();
});
editAvatarCloseButton.addEventListener("click", () => {
  avatarPopup.close();
});

addCardButton.addEventListener("click", () => {
  addFormValidator.resetForm();
  addPopup.open();
});
addModalCloseButton.addEventListener("click", () => addPopup.close());

previewModalCloseButton.addEventListener("click", () =>
  cardPreviewPopup.close()
);
