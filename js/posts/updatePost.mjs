
import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../apiHandelings/fetchToken.mjs";

const action ="/posts";
const method = "put"; 


export async function updatePost(postData) {
    if (!postData.id){
        throw new Error ("Update required id");
    }

    const updateUrl = `${API_PATH_URL}${action}/${postData.id}`;
    

    const response = await fetchToken (updateUrl, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json ();

}

