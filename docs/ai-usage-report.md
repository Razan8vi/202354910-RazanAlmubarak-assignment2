 

# AI Usage Report – Assignment 2

## 1. Tools Used

| Tool | How I used it |
|---|---|
| **Claude (Opus 5.5)** – claude.ai | Understanding the Assignment 2 requirements, planning the features, step-by-step guidance for Git (branches, commits, merging), suggesting code for the live project search and contact form validation, CSS for messages and animation, testing advice, and help drafting documentation. |
| **ChatGPT ([ChatGPT GPT-5])** | Clarifying the assignment requirements and steps to get started; explaining project search and contact form validation step by step; explaining the difference between the AI usage report and evidence ZIP; and helping draft and revise this report. |

## 2. Usage Log

The Claude rows below describe artifacts from one Claude conversation. ChatGPT was used in a separate conversation on 2026-10-19.

| # | Tool | Date | Purpose | Files affected | What I changed and how I verified it |
|---|---|---|---|---|---|
| 1 | Claude (Opus 5.5) | 2026-10-18 | Break the assignment into requirements and pick features (live search + form validation) | None (planning only) | I chose which options to implement and followed the plan one step at a time. |
| 2 | Claude (Opus 5.5) | 2026-10-18 | Git commands to start Assignment 2 from my Assignment 1 repo, and to use feature branches | Whole repository | I created the new public repo on GitHub myself, ran the commands in the VS Code terminal, and checked the result on GitHub. |
| 3 | Claude (Opus 5.5) | 2026-10-18 | Live search: search input + “No projects found” message (HTML), search box style (CSS), filtering logic (JS) | `index.html`, `css/styles.css`, `js/script.js` | I placed the code inside my own Projects section. My first paste went inside the `<h2>` tag, so I moved `</h2>` back to the right place. I tested with “tuwaiq”, “xyz” and an empty search. |
| 4 | Claude (Opus 5.5) | 2026-10-18 | Contact form validation: `novalidate`, an error `<p>` under each field (HTML), and the validation JS | `index.html`, `js/script.js` | I removed my old `showFormMessage()` function and the `onsubmit` attribute from Assignment 1 and replaced them with the new code. I tested an empty form, an invalid email (“abc”), and a valid form with a test name. |
| 5 | Claude (Opus 5.5) | 2026-10-18 | Colors for error/success messages and the fade-in animation | `css/styles.css` | I kept the colors consistent with my existing dark plum and pink theme and checked the result in Safari. |
| 6 | Claude (Opus 5.5) | 2026-10-18 | Pointed out typos and the old “Assignment 1” footer | `index.html` | I fixed the typos (“usefu”, “mpre”, “with and”) and updated the footer myself. |
| 7 | Claude (Opus 5.5) | 2026-10-19 | First drafts of the README, this report, and the technical documentation | `README.md`, `docs/ai-usage-report.md`, `docs/technical-documentation.md` | I reviewed the drafts, checked that they match what I actually built, and edited the wording. |
| 8 | Claude (Opus 5.5) | 2026-10-19 | Asked how to test that my site works well on mobile | None (testing advice only) | I tested the site myself using Safari Responsive Design Mode and checked the layout on a phone screen size. |
| 9 | Claude (Opus 5.5) | 2026-10-19 | Make correct form fields show a green border, using my existing validation code | `js/script.js`, `css/styles.css` | I added the `input-valid` class to my existing `showError()` / `clearError()` functions, removed the green borders after a successful submit, and used the same green as my success message (`#4ADE80`). I tested a correct name with a wrong email and an empty message. |
| 10 | ChatGPT ([ChatGPT model]) | 2026-10-17| Understand the assignment requirements and starting steps; learn how to add a search button and validate name, email, and message fields; understand the report versus evidence ZIP; revise the AI usage report | Draft text for `docs/ai-usage-report.md`; no project files were edited in this conversation | I used ChatGPT’s explanations to draft and revise this report. ChatGPT also created informal, step-by-step examples based on my supplied HTML. I checked the explanations against that HTML;| 

**AI-assisted commits** (made before I added the `Assisted-by` line to my commit messages):

- `5bdbb76` – Add live search to filter projects
- `5283e39` – Add contact form validation with animated error and success messages
- `09f2758` – Fix typos and update footer to Assignment 2

The commits listed above were assisted by Claude (Opus 5.5). Later commits containing Claude-assisted code include `Assisted-by: Claude (Opus 5.5)` in the commit message. If I use ChatGPT-generated code in a commit, I will credit ChatGPT in that commit message too.

## 3. Benefits & Challenges

**Benefits:** Working step by step with AI helped me understand how each part connects: the HTML element, the CSS class, and the JavaScript that reads it by its `id`. It also helped me learn a cleaner Git workflow with feature branches and merging.

**Challenges:** Pasting code in the wrong place broke the HTML structure once (inside the `<h2>`). I learned to check where an element opens and closes before pasting. I also had to understand why the old `onsubmit` code had to be removed, and not just add new code on top of it.

## 4. Learning Outcomes

- Using `addEventListener` for the `input` and `submit` events
- Filtering elements with `querySelectorAll`, `forEach` and `includes`
- Validating form input with `trim()`, `if / else` and a simple email pattern
- Using `event.preventDefault()` to stop the page from reloading
- Showing and hiding messages with the `hidden` attribute and the `:empty` selector
- Simple CSS animation with `@keyframes`
- Git branches: `checkout -b`, `merge`, `push`

## 5. Responsible Use & Modifications

I did not copy code without understanding it. Before adding each part, I made sure I could explain what every line does. I placed the code inside my existing Assignment 1 structure, kept my own design and colors, removed old code that the new features replaced, and tested every feature myself in the browser.

I have included the complete, unedited conversations with Claude and ChatGPT, along with the relevant original AI outputs before my edits, in the AI Evidence ZIP submitted on Blackboard, as required.
## 6. Declaration

> I, RAZAN ALMUBARAK ,ID [202354910], declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

````