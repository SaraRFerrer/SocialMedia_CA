
    /**
    * GET request so user can view all posts from API 
    * @param {string} accessToken
    * @returns
    */

     export async function viewPosts (accessToken) {
        const postData = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
  
        try {
          const response = await fetch (`${BASE_URL_API}//api/v1/social/posts?_author=true&_comments=true&_reactions=true`,
          postData );
  
          const json = await response.json();
          return json;
  
        } catch (error) {
          console.log(error);
        }
      }
  
      export async function writePost ( accessToken, text, mediaUrl) {
        const postData = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            title: " ",
            body: text,
            tags: [" "],
            media: mediaUrl,
          }),
        };
  
        try {
          const response = await fetch(`${BASE_URL}/api/v1/social/posts/`, postData);
          const json = await response.json();
          console.log(json);
          location.reload();
  
        } catch (error) {
          console.log(error);
        }
  
      }
  
      /**
       * Making a DELETE request
       * Removing a post from the API
       */
  
      export async function deletePost(accessToken, id) {
        const postData = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
  
         };
  
         try {
          const response = await fetch (`${BASE_URL_API}//api/v1/social/posts/${id}`,
          postData);
  
          const json = await response.json();
          location.reload();
  
         } catch(error) {
          console.log(error);
  
         }
      }