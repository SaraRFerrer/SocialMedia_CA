import {createPost} from "../posts/createPost.mjs";


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



