
//----------- SCROLL BAR BUTTON -----------//

// get the element
let btnToUp = document.getElementById("scrollBtn");

//show the button function
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        btnToUp.style.display = "block";
        console.log("test unhide scrollbtn");
    }else {
        btnToUp.style.display = "none";
    }
};


//on click function

const toUpFunction = () => {          
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

//----------- SUBSCRIBE FORM AND LOGO FOOTER BUTTON -----------//

const subscribeBtn = () => {          
    window.scrollTo({
        top:0,
    })
}

//----------- LOADER SPINNER -----------//

// Function to loading effect
const loadSpinner = () => {
    const loading = document.getElementById('lds-ring');
    if (screen.width <= 990) {
        loading.style.display = 'none';
    }else {
        setTimeout(() => {
            loading.style.display = 'none';    
          }, 1200);
    }
  };

  //Add listener, when load the page call the function
  window.addEventListener("load", loadSpinner)

//----------- RANDOMIZE HREF LINK IN "PROJECT-SIMPLE" NAV LINK -----------//

  //Funtion to generate random href link

const randomLink = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1); //Generate random number variable from 1 to 3 to get a random principal post from the "Recent projects" section
    let linkElement = document.getElementById("projectLink");
    
    linkElement.setAttribute('href', `./project.html?p=${randomNumber}`);
};

//Call the function
randomLink()