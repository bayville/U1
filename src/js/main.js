"use strict";

let openBtn = document.getElementById("open-menu"); //Get hamburger icon
let closeBtn = document.getElementById("close-menu"); //Get cross icon

openBtn.addEventListener('click', toggleMenu); //listen to click on hamburger
closeBtn.addEventListener('click', toggleMenu); //listen to click on hamburger

function toggleMenu() {
    let navMenu = document.getElementById("nav"); //Get nav element
    let style = window.getComputedStyle(navMenu); //Get syle option

    if(style.display === "none") { //If display is none
        navMenu.style.display = "block"; //Display block
    } else {
        navMenu.style.display = "none";  
    }
}

//Nav menu active states
let navLinkEls = document.querySelectorAll('.nav__link'); //Get all links by class
let windowPathname = window.location.pathname; //Get pathname from windows object

navLinkEls.forEach(navLinkEL => { //Loop through all links
    const navLinkPathname = new URL (navLinkEL.href).pathname; //Create link
    if ((windowPathname === navLinkPathname) || (windowPathname === '/' && navLinkPathname === '/index.html')) { //If link includes current pathname, or link  is /
    navLinkEL.classList.add('nav__link--active'); //Add class to 
    }
});
    