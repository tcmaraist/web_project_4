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
import PopupWithDelete from "../components/PopupWithDelete.js";
import Api from "../components/Api.js";
import { renderLoading } from "../utils/utils";

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
const editAvatarButton = document.querySelector(
  ".profile__edit-button_type-avatar"
);
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

const renderInitialCards = new Section(
  {
    renderer: (item) => {
      renderInitialCards.addItem(createCard(item));
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
      avatar: avatar,
    });
    renderInitialCards.renderedItems = initialCards;
    renderInitialCards.renderItems();
  })
  .catch((err) => console.error(`Error: ${err}`));

function createCard(item) {
  const card = new Card(
    {
      data: item,
      handleClick: (data) => cardPreviewPopup.open(data),
      userId: userInfo.getUserId(),
      handleDeletePopup: function handleDeletePopup() {
        deletePopup.open(item._id, cardElement);
      },
      handleLike: function handleLike() {
        if (card.isLiked()) {
          api
            .toggleLikeCardStatus(item._id)
            .then((data) => card.updateLikeCounter(data))
            .catch((err) => console.log(`Error: ${err}`));
        } else {
          api
            .addLike(item._id)
            .then((data) => card.updateLikeCounter(data))
            .catch((err) => console.log(`Error: ${err}`));
        }
      },
    },
    selectors.cardTemplate
  );
  return card.generateCard();
}
/*
const createCard = (data) => {
  const card = new Card(
    {
      data,
      handleCardClick: (data) => {
        cardPreviewPopup.open(data);
      },
      handleDeletePopup: () => {
        deletePopup.open();
      },
    },
    selectors.cardTemplate
  );
  return card.generateCard();
};
*/

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

const editPopup = new PopupWithForm({
  selector: selectors.profileModalSelector,
  handleFormSubmission: (data) => {
    userInfo.setUserInfo({ name: data.name, about: data.about });
  },
});
/*api
      .setUserInfo({
        name: data.name,
        about: data.about,
      })
      .then((info) => {
        userInfo.setUserInfo({
          name: info.name,
          about: info.about,
        });
        editPopup.close();
      })
      .catch((err) => console.log(`Error: ${err}`))
      .finally(() => {});
      */
const addPopup = new PopupWithForm({
  selector: selectors.addModalSelector,
  handleFormSubmission: (item) => {
    api
      .addCard(item)
      .then((item) => {
        renderInitialCards.prependItem(addCard(item));
      })
      .then(() => {
        addPopup.close();
      })
      .catch((err) => {
        console.log(`Error: ${err}`);
      })
      .finally(() => {});
  },
});
/*
const deletePopup = new PopupWithDelete({
  selector: selectors.deletePopupSelector,
  handleDelete: (data) => {
    renderLoading(popupId: popupConfig.cardFormModalWindow, isLoading: true);
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
        renderLoading(popupId: popupConfig.cardFormModalWindow);
      });
  },
});
*/
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
      .finally(() => {});
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
/*
api
  .getInitialCards()
  .then((cardData) => {
    cardData.forEach((data) => {
      cardSection.addItem(createCard(data));
    });
  })
  .catch((err) => {
    console.log(err);
  });
*/
// cardSection.renderItems(initialCards);
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
