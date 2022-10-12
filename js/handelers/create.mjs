import { createPost } from '../posts/createPost.mjs';
import { load } from '../constants/stored.mjs';
import { fetchToken } from '../apiHandelings/fetchToken.mjs';
import { API_PATH_URL } from '../constants/url.mjs';



let postModel = [
    {
        id: '',
        author: {
            name: '',
            email: '',
            avatar: '',
        },
        title: '',
        body: '',
        tags: [],
        media: '',
        created: '',
        updated: '',
    },
];

export function createListener() {
    const form = document.querySelector('.createForm');

    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());

            createPost(post);
        });
    }
}

const path = location.pathname;

if (path === '/profile.html') {
    createListener();
}

const action = '/posts';
const accessToken = load('accessToken');
const user = JSON.parse(localStorage.getItem('profile'));
const postContainer = document.querySelector('#profilePost');

export async function getPosts() {
    const response = await fetch(`${API_PATH_URL}${action}/?_author=true`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(),
    });
    const json = await response.json();

    postModel = json.filter(({ author }) => author.name === user.name);

    postModel.forEach(userPost => {
        postContainer.innerHTML = `<div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
    bg-white border mt-2">
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <p class="d-flex justify-content-end socials">${userPost.author}</p></div>
    <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
    <h1 class="d-flex flex-row align-items-center feed-text px-2">${userPost.title}</h1></div>
    <div class="feed-image p-2 px-3">
    <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${userPost.media}"></img></div>
    <div class="p-2 px-3">
    <p class="d-flex justify-content-end socials">${userPost.body}</p></div>
    <div><p>${userPost.created}</p></div>
    <a href="update.html?id=${userPost.id}" <div><button type="submit" class="btn btn-primary waves-effect waves-light">Update Post</button></div></a>
    `;

    });

    if (!response.ok) {
        throw new Error('Error/ Please try again');
    }
    
}

getPosts();

