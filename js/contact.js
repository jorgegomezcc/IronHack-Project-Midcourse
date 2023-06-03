//Get the form

const formElement = document.querySelector("#contactUs-form");

// addEventListener to run the funtion and prevent the page "refresh" when send the form

formElement.addEventListener('submit', event => {
    event.preventDefault();

//Get data to post in fetch

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }

//fetch API post call 

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },               
            }
        )
        //if we want how to know the status number or if ok is true or false, just comment the other promises lines and just put this like that ".then(response => console.log(response))", that is how the console show you more information about, like methods state and more...
        .then((response) => {

            let name = document.forms["contactUsForm"]["fullName"].value;

            if (name == "ironhack" || name == "Ironhack" || name == "IronHack") {
                document.querySelector("#alert-ironhack").style.display = "block";//show the alert inserted on a html tag
                setTimeout(() => 
                    document.querySelector("#alert-ironhack").style.display = "none", 4000); //timeout of condition
                    document.getElementById("contactUs-form").reset();   //for clar the form    
            }else if (response.ok === true) {
                document.querySelector("#alert-done").style.display = "block";
                setTimeout(() =>
                    document.querySelector("#alert-done").style.display = "none", 4000); 
                document.getElementById("contactUs-form").reset();
            }else {
                document.querySelector("#alert-fail").style.display = "block";
                setTimeout(() => 
                    document.querySelector("#alert-fail").style.display = "none", 4000);
            } //return response.json()<----- that is to convert data on json 
        })
        //.then(data => console.log(data)) <---- that is for show the data on console
})

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