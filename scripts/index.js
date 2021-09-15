//Wrappers
const cardTemplate = document.querySelector('#cardTemplate').content.querySelector('.card');
const cards = document.querySelector('.cards');
/*
** Query Selectors
*/

// profile
const editProfileButton = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name')
const profileAbout = document.querySelector('.profile__about')

// modal
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close-button');

//form
const form = document.querySelector('.form');
const nameInput = document.querySelector('#form-name');
const aboutInput = document.querySelector('#form-about');

/*
** Functions
*/
function openModal() {
  modal.classList.add('modal_is-open');
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
}

function closeModal() {
    modal.classList.remove('modal_is-open');
}

function updateProfile(event){
    event.preventDefault();
    profileName.textContent = nameInput.value;
    profileAbout.textContent = aboutInput.value;

    closeModal();
}

/*
**  Event Listeners
*/

form.addEventListener('submit', updateProfile, false);
editProfileButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);

// Actions
initialCards.forEach((card) => {
  // use template
  const cardEl = cardTemplate.cloneNode(true);
  //set the title
  cardEl.querySelector('.card__title').textContent = card.title;
  //set the image
  cardEl.querySelector('.card__image').style.backgroundImage = `url(${card.image})`;
  //append it to the list
  cards.append(cardEl);
});