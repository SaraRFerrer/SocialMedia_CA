
import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../fetchToken.mjs";

const action ="/posts";
const method = "post";



export async function createPost(postData) {
    const createUrl = API_PATH_URL + action;
    

    const response = await fetchToken (createUrl, {
        method,
        body: JSON.stringify(postData)
    })

    const newPost = await response.json()
    console.log(newPost)

}

createPost ( {
    title: "this is not working",
    body: "please work"
})