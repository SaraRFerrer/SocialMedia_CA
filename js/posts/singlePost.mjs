import { fetchToken } from "../apiHandelings/fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const postContainer = document.querySelector("#details-container");

const action = "/posts"


export async function singlePost() {
   

    const allPostsUrl = "https://nf-api.onrender.com/api/v1/social/posts/" + id;
    

    const response = await fetchToken (allPostsUrl)

    const json = await response.json();

    console.log(json);
    document.title = json.title;
    createHTML(json);

    if (createHTML) {

    }
}

singlePost();

function createHTML(json) {
    postContainer.innerHTML +=  `<div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
    bg-white border mt-2">
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <p class="d-flex justify-content-end socials">${json.author}</p></div>
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <h1 class="d-flex flex-row align-items-center feed-text px-2">${json.title}</h1></div>
    <div class="feed-image p-2 px-3">
    <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${json.media}"></img></div>
    <div class="p-2 px-3">
    <p class="d-flex justify-content-end socials">${json.body}</p></div>
    <div><p>${json.created}</p></div>`;
};



