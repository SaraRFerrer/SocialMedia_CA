//export async function renderPosts () {}

//export async function render(id){}



import { fetchToken } from "../fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";


const action ="/posts";


export async function renderPosts() {
    const renderUrl = `${API_PATH_URL}${action}`;
    
    const response = await fetchToken(renderUrl)

    return await response.json ();

}

renderPosts()


export async function render(id) {
    if (!id){
        throw new Error ("Get required id");
    }

    const allPostsUrl = `${API_PATH_URL}${action}/${id}`;
    

    const response = await fetchToken (allPostsUrl)

    return await response.json ();

}

;
