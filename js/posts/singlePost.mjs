import { fetchToken } from "../apiHandelings/fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const postContainer = document.querySelector("#details-container");

const action = "/posts"


async function singlePost() {
    if (!id){
        throw new Error ("Get required id");
    }

    const allPostsUrl = `${API_PATH_URL}${action}/${id}`;
    

    const response = await fetchToken (allPostsUrl)

    const json = await response.json();

    console.log(json);
    document.title = json.title;
    createHTML(json);

    if (createHtml) {

    }
}

singlePost();

function createHTML(json) {
    postContainer.innerHTML +=  `<div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
    bg-white border mt-2">
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <p class="d-flex justify-content-end socials">${userPost.author}</p></div>
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <h1 class="d-flex flex-row align-items-center feed-text px-2">${userPost.title}</h1></div>
    <div class="feed-image p-2 px-3">
    <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${userPost.media}"></img></div>
    <div class="p-2 px-3">
    <p class="d-flex justify-content-end socials">${userPost.body}</p></div>
    <div><p>${userPost.created}</p></div>`;
};