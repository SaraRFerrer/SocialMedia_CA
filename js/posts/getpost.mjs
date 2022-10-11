import { fetchToken } from "../apiHandelings/fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";

const action ="/posts";

export async function getPost(id) {
    if(!id) {
        throw new Error("Request requires ID");
    }

    const getPostApi = `${API_PATH_URL}${action}/${id}`;

    const response = await fetchToken(getPostApi)

    return await response.json();
}
