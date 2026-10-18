
function getGreetingMessage() {
    const now = new Date();
    const currentHour = now.getHours(); 

    let message; 

    // Conditional logic to decide which greeting to show
    if (currentHour < 12) {
        message = "Good morning! Thanks for visiting my portfolio.";
    } else if (currentHour < 18) {
        message = "Good afternoon! Thanks for visiting my portfolio.";
    } else {
        message = "Good evening! Thanks for visiting my portfolio.";
    }

    return message;
}

const greetingElement = document.getElementById("greeting");
greetingElement.textContent = getGreetingMessage();
function showFormMessage() {
    const formMessage = document.getElementById("form-message");
    const contactForm = document.getElementById("contact-form");

    formMessage.textContent = "Thank you! Your message has been received.";
    contactForm.reset();
}

// ===== Project live search =====
const searchInput = document.getElementById("project-search");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMessage = document.getElementById("no-projects");

searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    projectCards.forEach(function (card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "";
            visibleCount++;
        } else {
            card.style.display = "none";
        }
    });

    // Show the empty message only when no project matches
    noProjectsMessage.hidden = visibleCount > 0;
});
