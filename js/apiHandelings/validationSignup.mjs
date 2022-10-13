import {loginUser} from "./login.mjs";
import {
    emailValidation,
    passwordValidation
} from "./error.mjs";


const email = document.querySelector("#emailAddress")
const email_error = document.querySelector(".email-error-container");
const password = document.querySelector("#password");
const password_error = document.querySelector(".password-error-container");

export function validateSignup (event) {
    event.preventDefault();

    if (emailValidation(email.value)) {
        email_error.style.display ="none";
    } else {
        email_error.style.display ="block";
    }

    if (passwordValidation(password.value)) {
        password_error.style.display = "none";
    } else {
        password_error.style.display = "block";
    }
    loginUser();
}