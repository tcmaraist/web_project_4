import "./index.css";
import { initialCards, selectors } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImages from "../components/PopupWithImages";

const CardPreviewPopup = new PopupWithImages(selectors.previewPopup);
const CardSection = new Section(
  {
    renderer: (data) => {
      const cardEl = newCard(
        {
          data,
          handleImageClick: (imgData) => {
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

CardSection.renderItems(initialCards);
CardPreviewPopup.setEventListeners();
