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
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
