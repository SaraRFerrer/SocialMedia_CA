import {createPost} from "../posts/createPost.mjs";
import { load } from "../constants/stored.mjs";
import { fetchToken } from "../apiHandelings/fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";






export function createListener () {
    const form = document.querySelector(".createForm");

    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())

            createPost(post)
        })
    }


}

const path = location.pathname;

if (path === "/profile.html") {
    createListener()
}

function getToken() {
    const accessToken = localStorage.getItem("token");
    if (accessToken === null) {
      return [];
    } else {
      return JSON.parse(accessToken);
    }
  }
  
  const token = getToken();
  
  console.log(token);
  
  const options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

const queryName = document.location.search;
const param = new URLSearchParams(queryName);
const name = parameters.get("name");

const profileFeed = document.querySelector("#profilePost");
const test = document.querySelector(".test")

const API = API_PATH_URL + action + name + "?_posts=true&sortOrder=desc";

async function getFeed () {
    const response = await fetchToken(renderUrl)
    const json = await response.json();
       

    console.log(json);
    console.log(posts);

    profileFeed.innerHTML = `<div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
    bg-white border mt-2">
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <p class="d-flex justify-content-end socials">${json[i].author}</p></div>
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <h1 class="d-flex flex-row align-items-center feed-text px-2">${json[i].title}</h1></div>
    <div class="feed-image p-2 px-3">
    <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${json[i].media}"></img></div>
    <div class="p-2 px-3">
    <p class="d-flex justify-content-end socials">${json[i].body}</p></div>
    <div><p>${json[i].created}</p></div>`

  
}

 getFeed();

