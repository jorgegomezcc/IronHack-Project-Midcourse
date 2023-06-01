//How To Test API response
// fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
//     .then(res => res.json())
//     .then(response =>
//         console.log(response)
//         );

//Funtion to generate random href link into html nav-link "porject - simple" 

const randomLink = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1); //Generate random number variable from 1 to 3 to get a random principal post from the "Recent projects" section
    let linkElement = document.getElementById("projectLink");
    
    linkElement.setAttribute('href', `./project.html?p=${randomNumber}`);
};


//Function to get API content, DOM manipulation and onload event
const getApiContent = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
        .then((res) => {
            for (let i = 0; i < 3; i++) {
                document.querySelector('#api-cards-container').innerHTML += `<div class="api-cards">
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
    randomLink();
