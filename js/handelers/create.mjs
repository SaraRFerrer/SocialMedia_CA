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
    const response = await fetch(url, options);
    console.log(response);
    const profiles = await response.json();
    const { name, avatar, posts } = json;
    const { followers, following } = profiles._count;
    console.log(json);
    console.log(posts);

    profileFeed.innerHTML = `<div class="card d-flex align-items-center my-4">
    <div class="rounded-circle border border-dark mt-2">
      <img
        class="rounded-circle post-avatar"
        src="${avatar}"
        alt=""
      />
    </div>
    <div class="name ms-2">
      <h1>${name}</h1>
    </div>
    <div class="followers-tab d-flex my-3">
      <div class="posts mx-3">
        <h5>Posts</h5>
        <p>${profiles._count.posts}</p>
      </div>
      <div class="followers mx-3">
        <h5>Followers</h5>
        <p>${followers}</p>        
      </div>
      <div class="following mx-3">
        <h5>Following</h5>
        <p>${following}</p>
      </div>
    </div>
  </div>`;

  
}

 getFeed();

