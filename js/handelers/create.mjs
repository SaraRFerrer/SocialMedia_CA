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

