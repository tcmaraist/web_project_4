class FormValidator {
    constructor(settings, formElement) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;

        this._form = formElement;
    };


_showInputError(inputEl, validationMessage) {
    const errorEl = this._element.querySelector(`#${inputEl.id}-error`);

    inputEl.classList.add(this._inputErrorClass);
    errorEl.innerText = validationMessage;
    errorEl.classList.add(this._errorClass);
}

_hideInputError(inputEl) {
    const errorEl = this._querySelector(`#${inputEl.id}-error`);

    inputEl.classList.remove(this._inputErrorClass);
    errorEl.innerText = '';
    errorEl.classList.remove(this._errorClass);
}

_hasInvalidInput(inputList) {
    return !inputList.every(inputEl => {
        return inputEl.validity.valid === true;
    })
}

_toggleButtonState(inputList, buttonEl) {
    if(this._hasInvalidInput(inputList)) {
        // button should unlock
        buttonEl.classList.remove(inactiveButtonClass)
        buttonEl.disabled = true;
    } else {
        // button should lock
        buttonEl.classList.add(inactiveButtonClass)
        buttonEl.disabled = false;
    }
};

_setEventListeners() {
    this._inputList = [...this._form.querySelectorAll(this._inputSelector)];
    this._buttonEl = this._form.querySelector(this._submitButtonSelector);

    inputList.forEach(inputEl => {
        inputEl.addEventListener('input', (evt) => {
            // check if the input is valid
            checkInputValidity(this._form, inputEl, otherSettings);
            toggleButtonState(inputList, buttonEl, otherSettings)
        });
    });
}

enableValidation() {
    this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    setupEventListeners(formEl, otherSettings);
}
};

export default FormValidator;