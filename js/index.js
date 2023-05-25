//Test API response
// fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
//     .then(res => res.json())
//     .then(response =>
//         console.log(response)
//         );

//Function to get API content, DOM manipulation and onload event
const getApiContent = () => {
    fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
    .then((response) => response.json())
        .then((res) => {
            for (let i = 1; i < 4; i++) {
                document.querySelector('#api-cards-container').innerHTML += `<div class="api-cards">
                <img src="./images/projects-section/${res[i].uuid}.jpg" alt="Project ${res[i].uuid} img">
                <h3>${res[i].name}</h3>
                <h4>${res[i].description}</h4>
                <p>${res[i].content}</p>
                <p>${res[i].completed_on}</p>
                <a href="project.html?p=${res[i].uuid}">Learn More</a>
                </div>`;
            }
        })
        .catch((error) => console.log(error))
    }
    
    window.addEventListener("load", getApiContent);