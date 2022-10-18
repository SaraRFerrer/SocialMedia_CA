import { renderPosts } from "./renderPosts.mjs";
import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../apiHandelings/fetchToken.mjs";



export async function filterNewest() {
    const container = document.querySelector(".filternewest");
    const newest = document.querySelector("#newest");

    const newestUrl = API_PATH_URL + "/posts?_author=true&sort=updated&sortOrder=desc";
    const response = await fetchToken(newestUrl);
    const post = await response.json();

    newest.addEventListener("click", () => {
        container.innerHTML = "";
        renderPosts(post, container);
    });

}
export async function filterOldest() {
    const container = document.querySelector(".filteroldest");
    const oldest = document.querySelector("#oldest");

    const oldestUrl = API_PATH_URL + "/posts?_author=true&sort=updated&sortOrder=asc";
    const response = await fetchToken(oldestUrl);
    const post = await response.json();

    oldest.addEventListener("click", () => {
        container.innerHTML = "";
        renderPosts(post, container);
    });

}



       

           
    
    
        


   