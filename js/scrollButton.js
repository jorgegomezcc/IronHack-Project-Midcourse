
//----------- SCROLL BAR BUTTON -----------//

// get the element
let btnToUp = document.getElementById("scrollBtn");

//show the button function
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        btnToUp.style.display = "block";
       //  console.log("test unhide scrollbtn");
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

//----------- RANDOMIZE HREF LINK IN "PROJECT-SIMPLE" NAV LINK -----------//

  //Funtion to generate random href link

const randomLink = () => {
    let randomNumber = Math.floor(Math.random() * 3 + 1); //Generate random number variable from 1 to 3 to get a random principal post from the "Recent projects" section
    let linkElement = document.getElementById("projectLink");
    
    linkElement.setAttribute('href', `./project.html?p=${randomNumber}`);
};

//Call the function
randomLink()