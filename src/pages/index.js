import "./index.css";
import { initialCards, selectors } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";

// Create instances of the classes

const CardPreviewPopup = new PopupWithImage(selectors.previewPopup);
const CardSection = new Section(
  {
    renderer: (item) => {
      const cardEl = new Card(
        {
          data,
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

/* const userInfo = new UserInfo({
  nameSelector: ,
  aboutSelector: ,
});
*/

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
