import { fetchToken } from '../apiHandelings/fetchToken.mjs';
import { API_PATH_URL } from '../constants/url.mjs';
import { filterNewest, filterOldest } from './filter.mjs';

// Used for sorting the date, we are storing this as a global variable
let dateSortOrder = 'ascending';

// This function sets the dateSortOrder above and then renders the posts again
// Otherwise our posts will not update (we need to render new posts each time we
// change it)
function setDateSortOrder(order) {
  console.log('Posts sorting');
  dateSortOrder = order;
  renderPosts();
}

const oldest = document.getElementById('oldest');
const newest = document.getElementById('newest');


// Call the function and set the order
oldest.addEventListener('click', () => setDateSortOrder('descending'));
newest.addEventListener('click', () => setDateSortOrder('ascending'));


const posts = document.querySelector('#wrapper');

const action = '/posts';
const today = new Date().toISOString().split('T')[0];
const filterContainer = document.querySelector('#filter');

export async function renderPosts() {
  const renderUrl =
    `${API_PATH_URL}${action}` + '?_author=true&_comments=true&limit=100';

  const response = await fetchToken(renderUrl);
  const json = await response.json();
  //console.log(json);

  /**
   * User can search the array filtering the posts.
   * @param {string} posts
   */

  function searchFeed(json) {
    const searchInput = document.querySelector('#search');

    searchInput.onkeyup = function (event) {
      const filterValue = event.target.value.trim().toLowerCase();

      const filteredFeed = json.filter(function (post) {
        if (
          post.title.toLowerCase().includes(filterValue) ||
          post.body.toLowerCase().includes(filterValue)
        ) {
          return true;
        }
      });

      posts.innerHTML = '';

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
            <button class="btn btn-primary waves-effect waves-light">View Post</button></a>`;
      }
    };
  }
  searchFeed(json);
 
  // Create a new array which we will sort
  let postsList = [...json];
  // Checking if we need to sort asc/desc
  if (dateSortOrder === 'ascending') {
    postsList = postsList.sort(function (a, b) {
      return new Date(b.created) - new Date(a.created);
    });
  } else {
    postsList = postsList.sort(function (a, b) {
      return new Date(a.created) - new Date(b.created);
    });
  }

  try {
    posts.innerHTML = '';
    for (let i = 0; i < postsList.length; i++) {
      const date = new Date(postsList[i].created);
      const created = date.toDateString();
      posts.innerHTML += `<a href="details.html?id=${postsList[i].id}" <div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
            bg-white border mt-2">
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <p class="d-flex justify-content-end socials">${postsList[i].author.name}</p></div>
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <h1 class="d-flex flex-row align-items-center feed-text px-2">${postsList[i].title}</h1></div>
            <div class="feed-image p-2 px-3">
            </div>
            <div class="p-2 px-3">
            <p class="d-flex justify-content-end socials">${postsList[i].body}</p></div>
            <div><p>${created}</p></div>
            <button class="btn btn-primary waves-effect waves-light" >View Post</button></a>`;
    }
  } catch (error) {
    console.log(error);
  }
}

renderPosts();

