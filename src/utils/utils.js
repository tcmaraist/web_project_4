const openModal = (modal) => {
  document.addEventListener("click", closeModalClickHandler);
  document.addEventListener("keydown", closeModalEscapeHandler);
  modal.classList.add("modal_is-open");
};

const closeModal = (modal) => {
  document.removeEventListener("click", closeModalClickHandler);
  document.removeEventListener("keydown", closeModalEscapeHandler);
  modal.classList.remove("modal_is-open");
};

const closeModalEscapeHandler = (evt) => {
  if (evt.key === "Escape") {
    return closeModal(document.querySelector(".modal_is-open"));
  }
};

const closeModalClickHandler = (evt) => {
  closeModal(evt.target);
};
/*
export const renderLoading = (popupId, isLoading = false) => {
  const currentActiveButton = document.querySelector(
    selectors: `#{popupId} .popup__button`
  );
  if(isLoading) {
    currentActiveButton.textContent = "Saving...";
  } else {
    currentActiveButton.textContent = "Save";
  }
}
*/
export { openModal, closeModal };
