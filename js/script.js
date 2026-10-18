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

// ===== Contact form validation =====
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formMessage = document.getElementById("form-message");

// Simple pattern: text@text.text
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, errorId, message) {
    document.getElementById(errorId).textContent = message;
    input.classList.add("input-error");
}

function clearError(input, errorId) {
    document.getElementById(errorId).textContent = "";
    input.classList.remove("input-error");
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
    let isValid = true;

    formMessage.textContent = "";
    formMessage.classList.remove("success");

    if (name === "") {
        showError(nameInput, "name-error", "Please enter your name.");
        isValid = false;
    } else {
        clearError(nameInput, "name-error");
    }

    if (email === "") {
        showError(emailInput, "email-error", "Please enter your email.");
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError(emailInput, "email-error", "Please enter a valid email, like name@example.com.");
        isValid = false;
    } else {
        clearError(emailInput, "email-error");
    }

    if (message === "") {
        showError(messageInput, "message-error", "Please write a message before sending.");
        isValid = false;
    } else {
        clearError(messageInput, "message-error");
    }

    if (isValid) {
        formMessage.textContent = "Thank you, " + name + "! Your message has been received.";
        formMessage.classList.add("success");
        contactForm.reset();
    }
});

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