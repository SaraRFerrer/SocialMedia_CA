
import {registrationSuccess} from "../js/validation.mjs";


const BASE_URL_API = "https://nf-api.onrender.com/";

const form = document.querySelector("form")
const username = document.querySelector("#username");
const email = document.querySelector("#emailAddress");
const password = document.querySelector("#password")

export async function registerUser (url, data) {

 const postData = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: username.value,
            email: email.value,
            password: password.value,
        }

        ),
      };

    try {
        
        const response = await fetch (`${BASE_URL_API}/api/v1/social/auth/register)`, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        return json;
      } catch (error) {
        console.log(error);
      }
    }

    form.addEventListener("submit", registrationSuccess);
    




