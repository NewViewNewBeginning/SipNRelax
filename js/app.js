window.addEventListener("scroll", function() {
    const nav = document.querySelector(".nav-container");
    const video = document.querySelector(".bg-video");

    // Change navigation background on scroll
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
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

function toggleNavMenu() {
    var menu = document.querySelector('.main-nav');
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menu.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

  
  