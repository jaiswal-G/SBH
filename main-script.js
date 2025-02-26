// Smooth Scrolling for Internal Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button Click Animations
document.addEventListener("DOMContentLoaded", function () {
    const ctaButtons = document.querySelectorAll(".cta-button");

    ctaButtons.forEach(button => {
        button.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.2s ease-in-out";
        });

        button.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });

        button.addEventListener("click", function () {
            this.style.backgroundColor = "#0f58a2";
            this.style.color = "white";
            setTimeout(() => {
                this.style.backgroundColor = "";
                this.style.color = "";
            }, 300);
        });
    });
});

// Feature Card Hover Effect
document.addEventListener("DOMContentLoaded", function () {
    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
        });

        card.addEventListener("mouseleave", function () {
            this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
        });
    });
});

// Redirect to Asset Details Page on Button Click
document.addEventListener("DOMContentLoaded", function () {
    const showDetailsButton = document.querySelector(".cta-button");
    
    if (showDetailsButton) {
        showDetailsButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "asset-details.html";
        });
    }
});
