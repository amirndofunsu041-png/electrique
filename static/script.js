/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("active");

    navbar.classList.toggle("active");

});


/* CLOSE MENU AFTER CLICKING A LINK */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menuBtn.classList.remove("active");

        navbar.classList.remove("active");

    });

});


/* =========================
   HEADER ON SCROLL
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================
   SERVICE CARD DELAY
========================= */

const serviceCards =
    document.querySelectorAll(".service-card");

serviceCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryImages =
    document.querySelectorAll(".gallery-item img");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const lightbox =
            document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML = `
            <span class="lightbox-close">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(lightbox);


        requestAnimationFrame(() => {

            lightbox.classList.add("active");

        });


        const close =
            lightbox.querySelector(".lightbox-close");


        close.addEventListener("click", () => {

            lightbox.classList.remove("active");

            setTimeout(() => {

                lightbox.remove();

            }, 300);

        });


        lightbox.addEventListener("click", (event) => {

            if (event.target === lightbox) {

                lightbox.classList.remove("active");

                setTimeout(() => {

                    lightbox.remove();

                }, 300);

            }

        });

    });

});


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}