/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

//Get the url
let getUrl = new URL(window.location.href);

//Get the ID value from url
let getId = getUrl.searchParams.get('p');

//Function with DOM manipulation to show the post from index page

const postFromId = (postId) => { //Put a variable that we put when we call the function 
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`) //Put the variable that contains the url id which in turn is the number of the api post from which we take the information
    .then(response => response.json())
    .then(data => {
        //Select the id of the element that I want to modify with querrySelector and add the html code with .innerHTML
        document.querySelector('#post-title').innerHTML += `<h2>${data.title}</h2> 
</div>
<div id="project-subtitle">
<h2>${data.title}</h2>
<h3>Completed on </h3>
</div>
<div id="api-cards-container-full">
    <div class="api-card-solo" >
        <div class="api-post" >
            <img class="api-img-solo" src="./images/projects-section/${data.id}.jpg" alt="Project ${data.id} img">
            <p>${data.body}</p>
        </div>
    </div>`;
})
     .catch (error => console.log(error));
}

postFromId(getId); //function call with variable that contains the ID from "?p=x" from URL

//Create a function with DOM that generate a random post from API 

const getApiRandom = () => {
    let i99 = Math.floor(Math.random() * 99 + 1) //create a variable that generated a random number from 1 to 99 for randomize the post
    let img = Math.floor(Math.random() * 6 + 1) //create a variable that generated a random number from 1 to 6 for randomize the image
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
        .then((res) => { 
                document.querySelector('#api-cards-random').innerHTML += `<div class="api-cards">
                <img class="api-img" src="./images/projects-section/${img}.jpg" alt="Project ${res[i99].id} img">
                <h3>${res[i99].title}</h3>
                <p>${res[i99].body}</p>
                <p><a id="learn-more" href="#">Learn More</a></p>
                </div>`;
        })
        .catch((error) => console.log(error))
    }

    //Call function 3 times to generate 3 random post
getApiRandom();
getApiRandom();
getApiRandom();

//Funtion to generate random href link into html nav-link "porject - simple" 

const randomLink = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1); //Generate random number variable from 1 to 3 to get a random principal post from the "Recent projects" section
    let linkElement = document.getElementById("projectLink");
    
    linkElement.setAttribute('href', `./project.html?p=${randomNumber}`);
};

randomLink();

