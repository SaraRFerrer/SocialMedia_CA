
import {registrationSuccess} from "./validation.mjs";
import { validateSignup } from "./validationSignup.mjs";


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
            const accessToken = json.accessToken;
            localStorage.setItem("accessToken", accessToken);
            console.log(json);
           // window.location.assign("profile.html");

            return json;

          } catch (error) {
            console.log(error);
          }
            
    } 

    loginForm.addEventListener ("submit", validateSignup);

     /**
    * GET request so user can view all posts from API 
    * @param {string} accessToken
    * @returns
    */

      export async function viewPosts (accessToken) {
        const postData = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
  
        try {
          const response = await fetch (`${BASE_URL_API}//api/v1/social/posts?_author=true&_comments=true&_reactions=true`,
          postData );
  
          const json = await response.json();
          return json;
  
        } catch (error) {
          console.log(error);
        }
      }
  
      export async function writePost ( accessToken, text, mediaUrl) {
        const postData = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            title: " ",
            body: text,
            tags: [" "],
            media: mediaUrl,
          }),
        };
  
        try {
          const response = await fetch(`${BASE_URL}/api/v1/social/posts/`, postData);
          const json = await response.json();
          console.log(json);
          location.reload();
  
        } catch (error) {
          console.log(error);
        }
  
      }
  
      /**
       * Making a DELETE request
       * Removing a post from the API
       */
  
      export async function deletePost(accessToken, id) {
        const postData = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
  
         };
  
         try {
          const response = await fetch (`${BASE_URL_API}//api/v1/social/posts/${id}`,
          postData);
  
          const json = await response.json();
          console.log(json);
          location.reload();
  
         } catch(error) {
          console.log(error);
  
         }
      }

      /**
       * Request to edit exixsting post
       * 
       */

      export async function updatePost(accessToken, editContent, editMedia, id) {
        const postData = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },

          body: JSON.stringify({
            title: " ",
            body: `${editContent}`,
            tags: [" "],
            media: `${editMedia}`,
          }),
         };

         try {
          const response = await fetch (`${BASE_URL_API}//api/v1/social/posts/${id}`,
          postData);
  
          const json = await response.json();
          console.log(json);
          location.reload();
  
         } catch(error) {
          console.log(error);
  
         }
        
      }

      /**
       * Fetching sigle post by ID
       */

      export async function postById (accessToken, id) {
        const postData = {
          method: "GET",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },

      };

      try {
        const response = await fetch (`${BASE_URL_API}//api/v1/social/posts/${id}?_author=true&_comments=true&_reactions=true`,
        postData);

        const json = await response.json();
        console.log(json);
        location.reload();

       } catch(error) {
        console.log(error);

       }

    }




    




