/* const isValid = (inputEl) => inputEl.validity.valid;

const checkInputValidity = (formEl, inputEl, settings) => {
    const errorEl = formEl.querySelector(`#${inputEl.id}-error`);

    if (!isValid(inputEl)) {
        // show the error message and add the error class
        inputEl.classList.add(settings.inputErrorClass);
        errorEl.innerText = inputEl.validationMessage;
        errorEl.classList.add(settings.errorClass);
    } else {
        // hide the error message and add the error class
        inputEl.classList.remove(settings.inputErrorClass);
        errorEl.innerText = '';
        errorEl.classList.remove(settings.errorClass);
    }
};

toggleButtonState = (inputList, buttonEl, {inactiveButtonClass}) => {
    const allValid = inputList.every((inputEl) => isValid(inputEl));
    if(allValid) {
        // button should unlock
        buttonEl.classList.remove(inactiveButtonClass)
        buttonEl.disabled = false;
    } else {
        // button should lock
        buttonEl.classList.add(inactiveButtonClass)
        buttonEl.disabled = true;
    }
};

const setupEventListeners = (formEl, {inputSelector, submitButtonSelector, ...otherSettings}) => {
    //select form elements
    const inputList = [...formEl.querySelectorAll(inputSelector)];
    const buttonEl = formEl.querySelector(submitButtonSelector);

    //setup listeners for the form elements
    inputList.forEach(inputEl => {
        inputEl.addEventListener('input', (evt) => {
            // check if the input is valid
            checkInputValidity(formEl, inputEl, otherSettings);
            toggleButtonState(inputList, buttonEl, otherSettings)
        });
    });
}

// enabling validation by calling enableValidation()
// pass all the settings on call

const enableValidation = ({formSelector, ...otherSettings}) => {
    //select all the forms
    const formList = [...document.querySelectorAll(formSelector)];

    formList.forEach((formEl) => {
        formEl.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        //setup event listeners for the form fields
        setupEventListeners(formEl, otherSettings);
    });
    //loop through forms and setup listeners
};

enableValidation({
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__save-button",
    inactiveButtonClass: "form__save-button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
  });

  