
import { accessToken } from "./components/stored.mjs";

const BASE_URL_API = "https://nf-api.onrender.com";

const allPosts = await viewPosts(accessToken);
const postContainer = document.querySelector("#posts-container");

async function renderPosts (url, data) {

    const postData = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${accessToken}`,
    },

};

try {
    const response = await fetch(`${BASE_URL_API}/api/v1/social/posts/)`, postData );
    const json = await response.json();
    return json;
} catch (error) {
    console.log(error);
}

}
 renderPosts();



