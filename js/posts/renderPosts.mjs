import { fetchToken } from "../apiHandelings/fetchToken.mjs";
import { API_PATH_URL } from "../constants/url.mjs";


const posts = document.querySelector("#wrapper");


const action ="/posts";
const today = new Date().toISOString().split("T")[0];
const filterContainer = document.querySelector("#filter");




export async function renderPosts() {
    const renderUrl = `${API_PATH_URL}${action}` + "?_author=true&_comments=true&limit=100";

    const response = await fetchToken(renderUrl)
    const json = await response.json();
    //console.log(json);

   


    /**
     * User can search the array filtering the posts.
     * @param {string} posts 
     */

    function searchFeed (json) {
        const searchInput = document.querySelector("#search");
    
        searchInput.onkeyup = function (event) {
            
            const filterValue = event.target.value.trim().toLowerCase();

           
            const filteredFeed = json.filter(function (post) {
                if (post.title.toLowerCase().includes(filterValue) || post.body.toLowerCase().includes(filterValue)) {
                    return true;
                }
            });

            posts.innerHTML = "";

           console.log(filteredFeed);
           for (let i = 0; i < filteredFeed.length; i++) {
            posts.innerHTML += `<a href="details.html?id=${filteredFeed[i].id}" <div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
            bg-white border mt-2">
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <p class="d-flex justify-content-end socials">${filteredFeed[i].author.name}</p></div>
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <h1 class="d-flex flex-row align-items-center feed-text px-2">${filteredFeed[i].title}</h1></div>
            <div class="feed-image p-2 px-3">
            <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${filteredFeed[i].media}"></img></div>
            <div class="p-2 px-3">
            <p class="d-flex justify-content-end socials">${filteredFeed[i].body}</p></div>
            <div><p>${filteredFeed[i].created}</p></div>
            <button class="btn btn-primary waves-effect waves-light">View Post</button></a>`
        
         } 
    
           
    
    
        };

       
    }
    searchFeed(json);

   
    
 

    try{

        
        for (let i = 0; i < json.length; i++) {
            const date = new Date (json[i].created);
            const created = date.toDateString(); 
            posts.innerHTML += `<a href="details.html?id=${json[i].id}" <div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
            bg-white border mt-2">
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <p class="d-flex justify-content-end socials">${json[i].author.name}</p></div>
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <h1 class="d-flex flex-row align-items-center feed-text px-2">${json[i].title}</h1></div>
            <div class="feed-image p-2 px-3">
            <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${json[i].media}"></img></div>
            <div class="p-2 px-3">
            <p class="d-flex justify-content-end socials">${json[i].body}</p></div>
            <div><p>${created}</p></div>
            <button class="btn btn-primary waves-effect waves-light" >View Post</button></a>`
        
         }

      

    } catch (error) {
    console.log(error)
    }



}

renderPosts();

 


