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