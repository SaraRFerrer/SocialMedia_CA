

export async function filterPosts(postData) {
    const filter = document.querySelector("#filter");

    let filtered = [];


switch (filter.value){
    case "MostRecent":
        filtered;
    break;
    case "Oldest":
        filtered.sort((a,b) => new Date(a.created) - new Date(b.created));
    break;
    case "MostPopular":
        filtered.sort((a,b) => (b._count.reactions) - (a._count.reactions));

    console.log(filtered);

}

    return filtered

}

const filteredData = await filterPosts(dataPosts);
renderPosts(filteredData, posts, false);


async function filteredRender() {
    const filteredData = await filterPosts(dataPosts);
    renderPosts(filteredData, posts, false);
}