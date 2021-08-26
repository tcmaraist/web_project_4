/*
** Query Selectors
*/

// header
const editProfileButton = document.querySelector('.profile__edit-button');
const listTitle = document.querySelector('.profile__title')
const listSubtitle = document.querySelector('.profile__subtitle')
// modal
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close-button');

//form
const form = document.querySelector('.form');
const titleInput = document.querySelector('#list-title');
const subtitleInput = document.querySelector('#list-subtitle');

/*
** Init
*/
titleInput.value = listTitle.textContent;
subtitleInput.value = listSubtitle.textContent;

/*
** Functions
*/

function toggleModal() {
    modal.classList.toggle('modal_is-open');
}

function updateProfile(event){
    event.preventDefault();
    listTitle.textContent = titleInput.value;
    listSubtitle.textContent = subtitleInput.value;

    toggleModal();
}
/*
**  Event Listeners
*/
form.addEventListener('submit', updateProfile, false)
editProfileButton.addEventListener('click', toggleModal, false);
closeButton.addEventListener('click', toggleModal, false);