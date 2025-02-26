// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the target element with smooth animation
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Navbar toggle for mobile view
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

// Toggle navigation menu on mobile
menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close the menu if a link is clicked on mobile (optional feature)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function () {
        navLinks.classList.remove("active");
    });
});
