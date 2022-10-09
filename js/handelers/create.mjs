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


const action = "/posts";
const accessToken = load("accessToken")
const user = localStorage.getItem("profile");
const postContainer = document.querySelector("#profilePost");

export async function getPosts () {
    const response = await fetch (
        `${API_PATH_URL}${action}/?sort=created&sortOrder=desc&_author=true&_comments=true&_reactions=true`,
        {
            method: "get",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
        },
            body: JSON.stringify(),
      }
      );
      const json = await response.json();
      console.log(json);

      const filterUserData = json.filter((author) => author.name === user);
      const userPosts = filterUserData;


    userPosts.forEach((userPosts) => {



    postContainer.innerHTML = `<div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
    bg-white border mt-2">
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <p class="d-flex justify-content-end socials">${userPosts.author}</p></div>
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <h1 class="d-flex flex-row align-items-center feed-text px-2">${userPosts.title}</h1></div>
    <div class="feed-image p-2 px-3">
    <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${userPosts.media}"></img></div>
    <div class="p-2 px-3">
    <p class="d-flex justify-content-end socials">${userPosts.body}</p></div>
    <div><p>${userPosts.created}</p></div>`


});

if (!response.ok) {
    throw new Error ("Error/ Please try again");
}
console.log(userPosts);

console.log (postContainer);

}
  


 getPosts();

