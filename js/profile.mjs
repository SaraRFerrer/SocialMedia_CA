export async function getProfileFeed () {
    const { avatar, name } = load("user");
    try {
        const response = await fetchToken (
            API + `/${name}`+ "?_posts=true&_following=true&_followers=true"
        );

        const json = await response.json();

        console.log(json);
        myProfile(json.posts);
    } catch (error) {
        console.log(error);

    }

    function myProfile (results) {
        if (results) {

            results.map((results) => {
                let data = new Data (`${results.created}`);

                posts.innerHTML += `<a href="index.html?id${post.id}" <div class=" container mt-4 mb-5 posts-card d-flex justify-content-center row col-md-8 feed p-2
            bg-white border mt-2">
            <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
            <h1 class="d-flex flex-row align-items-center feed-text px-2">${json[i].title}</h1></div>
            <div class="feed-image p-2 px-3">
            <img class="img-fluid img-responsive d-flex justify-content-end socials" src ="${json[i].media}"></img></div>
            <div class="p-2 px-3">
            <p class="d-flex justify-content-end socials">${json[i].body}</p></div>
            <div><p>${json[i].created}</p></div> </a>`;

            });
        }
    }
}

getProfileFeed();

