// //Alert in case user's name "ironhack"

const validationForm = () => {
    let name = document.forms["contactUsForm"]["fullName"].value;
    if (name == "ironhack" || name == "Ironhack" || name == "IronHack") {
        return alert("Usted no puede ser Ironhack, porque yo soy Ironhack");
    }
};

//form function

const formElement = document.querySelector("#contactUs-form");

// addEventListener and prevent the page "refresh" when send the form

formElement.addEventListener('submit', event => {
    event.preventDefault();

//fetch API post call in form

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }
    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },               
            }
        )
        //if we want how to know the status number or if ok is true or false, just comment the other promises lines and just put this like that ".then(response => console.log(response))", tha is how the console show you more information about, like methods state and more...
        .then((response) => {
            if (response.ok === true) {
                document.querySelector("#alert-done").style.display = "block"; //show the alert inserted on a html tag
                setTimeout(() => {
                    document.querySelector("#alert-done").style.display = "none"}, 4000); //timeout of condition
                document.getElementById("contactUs-form").reset();   //for clar the form
            }else {
                document.querySelector("#alert-fail").style.display = "block";
                setTimeout(() => {
                    document.querySelector("#alert-fail").style.display = "none"}
                    ), 4000
            } return response.json(); //convert data on json 
        })
        .then(data => console.log(data)) //show the data on console
})

