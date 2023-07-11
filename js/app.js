window.addEventListener("scroll", function() {
    const nav = document.querySelector(".nav-container");
    const video = document.querySelector(".bg-video");
    const headerImage = document.querySelector(".page-header");
    const menuHam = document.querySelector('.main-nav');
    
    // Change navigation background on scroll
    if (window.scrollY > 50) {
        menuHam.classList.add("scrolled");
        nav.classList.add("scrolled");
    } else {
        menuHam.classList.remove("scrolled");
        nav.classList.remove("scrolled");
    }

    // Parallax effect on video
    let scrollPosition = window.scrollY;
    if (video) {
        video.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    }
    if (headerImage) {
        headerImage.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    }
});

// get the current year
const currentYear = new Date().getFullYear();

// update the footer with the current year
document.getElementById('currentYear').textContent = currentYear;

// Hamburger menu
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.toggle-btn');
    const menu = document.querySelector('.main-nav');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navContainer = document.querySelector('.nav-container');

    toggleButton.addEventListener('click', toggleNavMenu);

    function toggleNavMenu() {
        navContainer.style.backgroundColor = '';

        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            menu.style.display = 'flex';
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
            navContainer.style.backgroundColor = 'rgba(107, 66, 38, .9)';
        }
    }

    // Listen for window resize event
    window.addEventListener('resize', function() {
        // If the screen size is larger than 768px, reset menu to default state
        if (window.innerWidth > 1024) {
            menu.style.display = ''; // Reset to default
            menuIcon.style.display = 'none'; // Hide menu icon
            closeIcon.style.display = 'none'; // Hide close icon
            navContainer.style.backgroundColor = ''; // Reset to default
        } else {
            menu.style.display = 'none'; // Hide the menu
            menuIcon.style.display = 'block'; // Show menu icon
            closeIcon.style.display = 'none'; // Hide close icon
        }
    });

});
