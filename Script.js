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
       EMAILJS INIT
   ========================= */
    emailjs.init("9PWb0RvNb8n3DkdU9");
    /* =========================
       FORM VARIABLES
    ========================= */
    const form = document.getElementById("contactForm");
    const loadingPopup = document.getElementById("loadingPopup");
    const successPopup = document.getElementById("successPopup");
    const errorPopup = document.getElementById("errorPopup");
    const successBtn = document.getElementById("successBtn");
    const errorBtn = document.getElementById("errorBtn");
    /* =========================
       POPUP FUNCTIONS
   ========================= */
    function showLoading() {
        loadingPopup.classList.add("active");
    }
    function hideLoading() {
        loadingPopup.classList.remove("active");
    }
    function showSuccess() {
        successPopup.classList.add("active");
    }
    function showError() {
        errorPopup.classList.add("active");
    }
    /* =========================
       FORM SUBMIT
    ========================= */
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            showLoading();
            emailjs.send("service_mcqm5hq", "template_6arp5vq", {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                title: document.getElementById("title").value,
                message: document.getElementById("message").value
            })
                .then(function () {
                    hideLoading();
                    showSuccess();
                    form.reset();
                })
                .catch(function () {
                    hideLoading();
                    showError();
                });
        });
    }

    /* =========================
        POPUP BUTTONS
     ========================= */
    if (successBtn) {
        successBtn.addEventListener("click", function () {
            successPopup.classList.remove("active");
        });
    }
    if (errorBtn) {
        errorBtn.addEventListener("click", function () {
            errorPopup.classList.remove("active");
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