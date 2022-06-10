const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name = "email"]');
const messageInput = document.querySelector('[name = "message"]');

const KEY = "feedback-form-state";

form.addEventListener(`emailInput`, throttle(inputHandler, 500));
form.addEventListener(`messageInput`, submitHandler);

firstPageLoading();

function firstPageLoading() {
    const parseValue = JSON.parse(localStorage.getItem(KEY));
    if (parseValue) {
        emailInput.value = parseValue.email;
        messageInput.value = parseValue.message;
    }
    else {
        emailInput.value = '';
        messageInput.value = '';
    }
}

function inputHandler() {
    const valueObj = {
        email: emailInput.value,
        message: messageInput.value,
    };
          console.log(`email: ${valueObj.email}`);
    console.log(`message: ${valueObj.message}`);
    localStorage.setItem(KEY, JSON.stringify(valueObj));
}

function submitHandler(event) {
    event.preventDefault();
    form.reset();
    console.log(localStorage.getItem(KEY));
    localStorage.removeItem(KEY);
}