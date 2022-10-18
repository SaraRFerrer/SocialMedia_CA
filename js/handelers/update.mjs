import {updatePost} from "../posts/updatePost.mjs";
import { getPost } from "../posts/getpost.mjs";
import { removePost } from "../posts/deletePost.mjs";

export async function createListener () {
    const form = document.querySelector(".updateForm");
    const update = document.querySelector("#update")
    const remove = document.querySelector("#delete")

    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    if (form) {

       
       

        const post = await getPost(id);

        form.title.value = post.title;
        form.body.value = post.body;
        form.tags.value = post.tags;
        //form.media.value = post.media;

       


        update.addEventListener("click", (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries())
            post.id = id;

            updatePost(post);
        });

        remove.addEventListener("click", (event) => {
            event.preventDefault()
            removePost(id);
        });


        
    }
}

const path = location.pathname;

if (path === '/update.html') {
    createListener();
}