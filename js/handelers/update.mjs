import {updatePost} from "../posts/updatePost.mjs";
import { singlePost } from "../posts/singlePost.mjs";

export async function createListener () {
    const form = document.querySelector(".updateForm");

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {

        const button = form.querySelector("button");
        button.disabled = true;

        const post = "https://nf-api.onrender.com/api/v1/social/posts/" + id

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags;
        form.media.value = post.media;

        button.disabled = false;


        form.addEventListener("submit", (event) => {
            event.preventDefault()
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;

            updatePost(post)
        })
    }
}

const path = location.pathname;

if (path === '/update.html') {
    createListener();
}