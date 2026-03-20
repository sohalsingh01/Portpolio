document.addEventListener("DOMContentLoaded", function () {
    /* =========================
       Typed Animation
    ========================= */
    if (document.querySelector(".text")) {
        new Typed(".text", {
            strings: ["Frontend Developer", "Youtuber", "Web Developer"],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 1000,
            loop: true
        });
    }
    /* =========================
       NAVBAR TOGGLE
     ========================= */
   const toggle = document.getElementById("menuToggle");
        const nav = document.getElementById("nav");
        const header = document.querySelector(".header");

        // Toggle mobile menu
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("active");
            nav.classList.toggle("active");
        });

        // Add scroll effect
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
});
