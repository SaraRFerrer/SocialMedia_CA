
import { BASE_URL_API } from "../api.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action ="/posts";
const method = "delete"; 


export function removePost(id); {
    if (!id){
        throw new Error ("Update required id");
    }

    const deleteUrl = `${BASE_URL_API}${action}/${id}`;
    

    const response = await fetchToken (deleteUrl, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json ();

}