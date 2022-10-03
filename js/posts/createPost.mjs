
import { BASE_URL_API } from "../api.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action ="/posts";
const method = "post"; 


export function createPost(postData); {
    const createUrl = BASE_URL_API + action;
    const accessToken = saved("accessToken");

    const response = await fetchToken (createUrl, {
        method,
        body: JSON.stringify(postData)
    })

    return await response.json ();

}