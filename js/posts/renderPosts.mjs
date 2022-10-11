import { fetchToken } from "../apiHandelings/fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";


const posts = document.querySelector("#posts-container");

const action ="/posts";


export async function renderPosts() {
    const renderUrl = `${API_PATH_URL}${action}` + "?_author=true&_comments=true&limit=1000";

   
    
 

    try{
        
    
        const response = await fetchToken(renderUrl)
        const json = await response.json();
       

        console.log(json);


        for (let i = 0; i < json.length; i++) {
            posts.innerHTML += `<a href="details.html?id=${json[i].id}" <div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
            bg-white border mt-2">
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <p class="d-flex justify-content-end socials">${json[i].author}</p></div>
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <h1 class="d-flex flex-row align-items-center feed-text px-2">${json[i].title}</h1></div>
            <div class="feed-image p-2 px-3">
            <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${json[i].media}"></img></div>
            <div class="p-2 px-3">
            <p class="d-flex justify-content-end socials">${json[i].body}</p></div>
            <div><p>${json[i].created}</p></div>
            <div><button>View Post</button></a>`
        
         }

      

    } catch (error) {
    console.log(error)
    }



}

 function searchFeed (posts) {
        const searchInput = document.querySelector("#search");
    
        searchInput.onkeyup = function (event) {
            const filterValue = event.target.value.trim().toLowerCase();
    
            const filteredFeed = posts.filter(function (post) {
                if (post.title.toLowerCase().includes(filterValue) || post.body.toLowerCase().includes(filterValue)) {
                    return true;
                }
            });
    
            createHTML(filteredFeed);
    
    
        };
    
       
    }

    searchFeed();


renderPosts()

export async function getPost(id) {
    if(!id) {
        throw new Error("Request requires ID");
    }

    const getPostApi = `${API_PATH_URL}${action}/${id}`;

    const response = await fetchToken(getPostApi)

    return await response.json();
}

