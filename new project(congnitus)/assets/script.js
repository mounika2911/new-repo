const fname = document.getElementById('fname').value;
const lname = document.getElementById('lname').value;
function sendContactDate(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mounikayen1@gmail.com",
        Password : "Mouni@123",
        To : 'mounikagnd@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
// input-error
const inputErrors = document.querySelectorAll('.input-error')

const requiredEmptyField = () => {
    "use strict";
    return function () {  
      if (this.value == "" && !(this.nextSibling.nodeType == 1) ) {
        this.insertAdjacentHTML("afterend", '<p id = "error-text" enable>Please complete this required field.</p>');
      } else if (!this.value == "" && this.nextSibling.nodeType == 1) {
        document.getElementById("error-text").remove();
      }
    };
}

inputErrors.forEach(inputError => {
    inputError.addEventListener("blur", requiredEmptyField());
})

// input number error
const numberError = document.getElementById('number');

const noText = () => {
    "use strict";
    return function () {
        const regNumber = /^[0-9]+$/;
        if(regNumber.test(this.value) == false && !(this.nextSibling.nodeType == 1)){
            this.insertAdjacentHTML("afterend", '<p id = "error-text">Must contain only numbers, +()-. and x.</p>'); 
        }else if(regNumber.test(this.value) == true && this.nextSibling.nodeType == 1){
            document.getElementById("error-text").remove();
        }
    }
}

numberError.addEventListener('blur', noText());



// pages js
function progressBarScroll() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
    progressBarScroll();
  };

const spanTransitions = document.querySelectorAll(".span-transitions")

function displayText() {
    spanTransitions.forEach(spanTransition =>{
        spanTransition.style.display = "block"
    })
}

const mobileMenu = document.querySelector("#mobile-menu");
const menuItems = document.querySelector("#menu-items")
mobileMenu.addEventListener('click', () => {
    console.log('Clicked')
    if(menuItems.className === 'hide-menu') {
        menuItems.className = 'show-menu'
    } else {
        menuItems.className = 'hide-menu'
    }
})

const aboutusMenu = document.querySelector("#aboutus-menu")
const aboutusMenuItems = document.querySelector('#aboutus-menu-items')
aboutusMenu.addEventListener('click', () =>{
    if(aboutusMenuItems.className === 'hide-menu') {
        aboutusMenuItems.className = 'show-menu'
    } else {
        aboutusMenuItems.className = 'hide-menu'
    }
})

const solutionMenu = document.querySelector("#solution-menu")
const solutionMenuItems = document.querySelector('#solution-menu-items')
solutionMenu.addEventListener('click', () =>{
    if(solutionMenuItems.className === 'hide-menu') {
        solutionMenuItems.className = 'show-menu'
    } else {
        solutionMenuItems.className = 'hide-menu'
    }
})

const productMenu = document.querySelector("#product-menu")
const productMenuItems = document.querySelector('#product-menu-items')
productMenu.addEventListener('click', () =>{
    if(productMenuItems.className === 'hide-menu') {
        productMenuItems.className = 'show-menu'
    } else {
        productMenuItems.className = 'hide-menu'
    }
})

const servicesMenu = document.querySelector("#services-menu")
const servicesMenuItems = document.querySelector('#services-menu-items')
servicesMenu.addEventListener('click', () =>{
    if(servicesMenuItems.className === 'hide-menu') {
        servicesMenuItems.className = 'show-menu'
    } else {
        servicesMenuItems.className = 'hide-menu'
    }
})

const industriesMenu = document.querySelector("#industries-menu")
const industriesMenuItems = document.querySelector('#industries-menu-items')
industriesMenu.addEventListener('click', () =>{
    if(industriesMenuItems.className === 'hide-menu') {
        industriesMenuItems.className = 'show-menu'
    } else {
        industriesMenuItems.className = 'hide-menu'
    }
})

const resourcesMenu = document.querySelector("#resources-menu")
const resourcesMenuItems = document.querySelector('#resources-menu-items')
resourcesMenu.addEventListener('click', () =>{
    if(resourcesMenuItems.className === 'hide-menu') {
        resourcesMenuItems.className = 'show-menu'
    } else {
        resourcesMenuItems.className = 'hide-menu'
    }
})


