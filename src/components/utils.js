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
  evt.target.classList.remove("modal_is-open");
};

export { openModal, closeModal };
