//How To Test API response
// fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
//     .then(res => res.json())
//     .then(response =>
//         console.log(response)
//         );

//Function to get API content, DOM manipulation and onload event
const getApiContent = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
        .then((res) => {
            for (let i = 0; i < 3; i++) {
                document.querySelector('#api-cards-container').innerHTML += `<div class="api-cards line-limit">
                <img class="api-img" src="./images/projects-section/${res[i].id}.jpg" alt="Project ${res[i].id} img">
                <h3>${res[i].title}</h3>
                <p>${res[i].body}</p>
                <p><a id="learn-more" href="project.html?p=${res[i].id}">Learn More</a></p>
                </div>`;
            }
        })
        .catch((error) => console.log(error))
    }
    
    window.addEventListener("load", getApiContent);