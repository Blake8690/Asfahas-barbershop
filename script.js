const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

const bookingLinks = document.querySelectorAll(".booking-link");

bookingLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        window.location.href = "./booking.html";
    });
});

console.log("Asfahas Barbershop website loaded.");