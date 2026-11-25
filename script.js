
// =====================================
// SNEHAL CHINDHE - PORTFOLIO JAVASCRIPT
// =====================================


// 1. Mobile Navigation Menu

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});


// 2. Close Navigation After Clicking a Link

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Open navigation menu");

    });

});


// 3. Automatically Update Footer Year

const currentYear = document.getElementById("current-year");

currentYear.textContent = new Date().getFullYear();
