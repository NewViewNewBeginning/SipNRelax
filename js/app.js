window.addEventListener("scroll", function() {
    const nav = document.querySelector(".nav-container");
    const video = document.querySelector(".bg-video");
    const menuHam = document.querySelector('.main-nav')
    // Change navigation background on scroll
    if (window.scrollY > 50) {
        menuHam.classList.add("scrolled")
        nav.classList.add("scrolled");
    } else {
        menuHam.classList.remove("scrolled")
        nav.classList.remove("scrolled");
    }

    // Parallax effect on video
    let scrollPosition = window.scrollY;
    video.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});


// get the current year
const currentYear = new Date().getFullYear();

// update the footer with the current year
document.getElementById('currentYear').textContent = currentYear;

// Hamburger menu

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle-btn');
    
    toggleButton.addEventListener('click', toggleNavMenu);

    function toggleNavMenu() {
        const menu = document.querySelector('.main-nav');
        const menuIcon = document.querySelector('.menu-icon');
        const closeIcon = document.querySelector('.close-icon');
        const navContainer = document.querySelector('.nav-container')
        navContainer.style.backgroundColor = '';

        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            menu.style.display = 'flex';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            navContainer.style.backgroundColor = 'rgba(107, 66, 38, .9)'
        }
    }
});


  
  