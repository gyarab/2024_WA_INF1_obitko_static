document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".offers__card");
    const headerHamburgerButton = document.querySelector(".header__hamburger-button")
    const mobileNav = document.querySelector(".mobile-menu__wrapper")

    const observerOptions = {
        threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.2) { 
                entry.target.classList.add("visible"); 
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card); 
    });

    headerHamburgerButton.addEventListener("click", () => {
        mobileNav.classList.toggle("mobile-menu-active")
        headerHamburgerButton.classList.toggle("hamburger-button-active")
    }); 
});


