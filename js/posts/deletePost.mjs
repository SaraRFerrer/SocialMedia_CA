
import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../apiHandelings/fetchToken.mjs";

const action ="/posts";
const method = "delete"; 


export async function removePost(id) {
    if (!id){
        throw new Error ("Delete required id");
    }

    const deleteUrl = `${API_PATH_URL}${action}/${id}`;
    

    const response = await fetchToken (deleteUrl, {
        method,
    })

   const json = response.json ();
   console.log(json);

};




