# Razan Almubarak – Personal Portfolio (Assignment 2)

## Project Description

A personal portfolio website built with HTML, CSS, and JavaScript for
**SWE 363 – Assignment 2**. It continues my Assignment 1 portfolio and makes
it more interactive.

The site has three sections:

- **About Me** – a short introduction.
- **Projects** – project cards with a live search.
- **Contact** – a contact form with validation.

### New in Assignment 2

| Feature | Description |
|---|---|
| **Live project search** | A search box filters the project cards while the user types. If nothing matches, the message *"No projects found. Try a different keyword."* appears. |
| **Contact form validation** | JavaScript checks that the name, email, and message are not empty and that the email has a valid format. Each invalid field gets a red border and an error message under it, and correct fields get a green border. When everything is valid, a green confirmation message appears and the form is cleared. |
| **Animations** | Error and success messages fade in and slide down slightly using a CSS `@keyframes` animation. |

Features kept from Assignment 1: the time-of-day greeting in the header and the
responsive layout using Flexbox.

> No backend is connected. The contact form does not send data anywhere; it only
> validates the input and shows a confirmation message.

## Setup Instructions (Run Locally)

This is a static site, so it needs no installation or server.

1. Clone the repository:
```bash
   git clone https://github.com/Razan8vi/202354910-RazanAlmubarak-assignment2.git
```
2. Open the project folder.
3. Open `index.html` in any modern browser (double-click it), **or** in VS Code
   use the **Live Server** extension ("Go Live") to reload the page automatically
   after each change.

## Project Structure
202354910-RazanAlmubarak-assignment2/
├── README.md
├── index.html
├── css/
│ └── styles.css
├── js/
│ └── script.js
├── assets/
│ └── images/
├── docs/
│ ├── ai-usage-report.md
│ └── technical-documentation.md
└── .gitignore

## AI Use Summary
I used Claude (Opus 5.5) and ChatGPT to understand the requirements, plan the features, learn a Git workflow with feature branches, get code suggestions for the live search and form validation, and draft the documentation. I placed the code in my own Assignment 1 structure, removed old code that the new features replaced, fixed a mistake I made when pasting, and tested every feature myself. AI-assisted commits include an Assisted-by: note naming the AI tool used. Full details, including the usage log and my declaration, are in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).GPT-5