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
