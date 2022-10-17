import { renderPosts } from "./renderPosts.mjs"; 

const filterContainer = document.querySelector("#filter");

/**
     * sort if posts in array was posted today
     * @param {array} array
     * @returns sorted array 
     */

 const today = new Date().toISOString().split("T")[0];
     
       
       function filterToday (array) {
            const filteredArray = array.filter((item) => {
                if (item.updated.startsWith(today)) {
                    return true;
                } else {
                    return false;
                }
            });
            return filteredArray;
        }
        
        filterContainer.addEventListener("click", () => {
            filteredData = filterToday(data);
            let sortedData = sortTimeAsc(filteredData);
            posts.innerHTML = "";
            filterContainer.innerText = "Todays posts";
            renderPosts(sortedData);
          });

  