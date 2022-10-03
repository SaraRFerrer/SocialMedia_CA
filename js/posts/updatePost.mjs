
import { BASE_URL_API } from "../api.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action ="/posts";
const method = "put"; 


export function updatePost(postData); {
    if (postData.id){
        throw new Error ("Update required id");
    }

    const updateUrl = `${BASE_URL_API}${action}/${postData.id}`;
    

    const response = await fetchToken (updateUrl, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json ();

}