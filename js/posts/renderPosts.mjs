export async function renderPosts ();

export async function render(id){};


import { BASE_URL_API } from "../api.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action ="/posts";


export function renderPosts(); {
    const renderUrl = `${BASE_URL_API}${action}`;
    

    const response = await fetchToken (renderUrl)

    return await response.json ();

}

export function render(id); {
    if (!id){
        throw new Error ("Get required id");
    }

    const renderUrl = `${BASE_URL_API}${action}${id}`;
    

    const response = await fetchToken (renderUrl)

    return await response.json ();

}
