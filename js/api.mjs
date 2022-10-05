
import {registrationSuccess} from "./validation.mjs";
import { validateSignup } from "./validationSignup.mjs";
import * as stored from "./constants/stored.mjs";


const BASE_URL_API = "https://nf-api.onrender.com";

const form = document.querySelector("form")
const username = document.querySelector("#username");
const email = document.querySelector("#emailAddress");
const password = document.querySelector("#password");
const loginForm = document.querySelector(".login-form");

export async function registerUser (url, data) {

 const postData = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            name: username.value,
            email: email.value,
            password: password.value,
        }

        ),
      };

    try {
        
        const response = await fetch (`${BASE_URL_API}/api/v1/social/auth/register`, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        window.location.assign("login.html");
        return json;
      } catch (error) {
        console.log(error);
      }
    }

    form.addEventListener("submit", registrationSuccess);

    // calling API to get token authorisation and saving them in local storage

    export async function loginUser () {
        
        const postData = {
            method: 'POST',
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }
    
            ),
          };

          try {
            const response = await fetch(`${BASE_URL_API}/api/v1/social/auth/login`, postData);
            const json = await response.json();
            stored.saved("accessToken", json.accessToken);
            stored.saved("profile", json);
            console.log(json);
            window.location.assign("index.html");

           

            return json;

          } catch (error) {
            console.log(error);
          }
           
            
    } 
    

    loginForm.addEventListener ("submit", validateSignup);

     




    




