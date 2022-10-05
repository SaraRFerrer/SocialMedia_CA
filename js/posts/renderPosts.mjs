import { fetchToken } from "../fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";

const posts = document.querySelector("#posts-container");

const action ="/posts";


export async function renderPosts() {
    const renderUrl = `${API_PATH_URL}${action}`;

    try{
        
    
        const response = await fetchToken(renderUrl)
        const json = await response.json();

        console.log(json);

        for (let i = 0; i < json.length; i++) {
            const post = json[i];
            posts.innerHTML += `<a href="index.html?id${post.id}" <div class="posts-card">
            <div><h1>${json[i].title}</h1></div>
            <div><img src ="${json[i].media}"></img></div>
            <div><p>${json[i].body}</p></div>
            <div><p>${json[i].created}</p></div>`
        
         }

    } catch (error) {
    console.log(error)
    }

}

renderPosts().then(console.log)


export async function render(id) {
    if (!id){
        throw new Error ("Get required id");
    }

    const allPostsUrl = `${API_PATH_URL}${action}/${id}`;
    

    const response = await fetchToken (allPostsUrl)

    return await response.json ();

}

render().then(console.log)
