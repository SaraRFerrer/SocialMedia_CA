
export function PostTemplate(postData) {
    const post = document.createElement("h1");
    const date = document.createElement("span")
    post.classList.add("post");
    post.innerText= postData.title;
    return post;
   

    
}


export function generalPostTemplate (postDataRender, parent) {
    parent.append (...postDataRender.map(PostTemplate))
}
    