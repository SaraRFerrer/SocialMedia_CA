
import { validateSignup } from "./validationSignup.mjs";
import * as stored from "../constants/stored.mjs";

const loginForm = document.querySelector(".login-form");

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
            

            if (response.ok) {
              window.location.assign("feed.html");
              
              
          } else {
            throw new Error('Error/ Please try again');
          }

           

            return json;

          } catch (error) {
            console.log(error);
          }
           
            
    } 
    

    loginForm.addEventListener ("submit", validateSignup);

     




    




