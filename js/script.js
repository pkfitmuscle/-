// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when clicking links

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});

// =========================
// HEADER SCROLL EFFECT
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(`
    .section-title,
    .service-card,
    .feature-card,
    .portfolio-card,
    .map-card,
    .cta-section,
    .footer-column
`);

const revealOnScroll = () => {

    const windowHeight = window.innerHeight;

    revealElements.forEach((element, index) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            setTimeout(() => {
                element.classList.add("active");
            }, index * 60);

        }

    });

};

revealElements.forEach((element, index) => {

    if (
        element.classList.contains("service-card")
    ) {
        element.classList.add("reveal");
    }

    else if (
        element.classList.contains("feature-card")
    ) {
        element.classList.add("reveal-left");
    }

    else if (
        element.classList.contains("portfolio-card")
    ) {
        element.classList.add("reveal-zoom");
    }

    else {
        element.classList.add("reveal");
    }

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// ACTIVE NAVBAR LINKS
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});

// =========================
// PARALLAX HERO
// =========================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

    let scrollPosition = window.pageYOffset;

    hero.style.backgroundPositionY =
        scrollPosition * 0.5 + "px";

});

// =========================
// BUTTON RIPPLE EFFECT
// =========================

const buttons = document.querySelectorAll(`
    .btn,
    .cta-btn,
    .cta-main-btn,
    .header-btn
`);

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-5px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const updateCounter = () => {

            const increment = target / 60;

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count) + "+";

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

// Start once

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
        document.querySelector(".stats");

    const top =
        statsSection.getBoundingClientRect().top;

    if (
        top < window.innerHeight - 100 &&
        !counterStarted
    ) {

        startCounter();

        counterStarted = true;

    }

});