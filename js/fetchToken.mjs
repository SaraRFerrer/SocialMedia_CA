import { saved } from "./constants/stored.mjs";

export function headers(){
    const accessToken = saved("accessToken");
   
    
    return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
    }
}


export async function fetchToken (url, options) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
    console.log(accessToken);
    
}





