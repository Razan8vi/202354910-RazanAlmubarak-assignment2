# Technical Documentation – Assignment 2

## 1. Overview

This document explains the structure of my portfolio website and the technical
changes I made in Assignment 2. The site uses plain HTML, CSS, and JavaScript,
with no frameworks or libraries. Assignment 2 builds on Assignment 1 and adds a
live project search, contact form validation, and animated feedback messages.

## 2. File Structure

| File | Purpose |
|---|---|
| `index.html` | Page structure: header, About, Projects, Contact, footer |
| `css/styles.css` | All styling, including the new search box, messages, and animation |
| `js/script.js` | Greeting, form validation, and live search |
| `assets/images/` | Project images |
| `docs/` | AI usage report and this document |

## 3. HTML Structure

The page uses semantic elements (`header`, `nav`, `main`, `section`, `footer`).
Each section has an `id` (`about`, `projects`, `contact`) that the navigation
links use.

Elements added in Assignment 2:

- **Projects section:** an `<input type="search" id="project-search">` above the
  project list, and a `<p id="no-projects" class="empty-message" hidden>` below it.
  The `hidden` attribute keeps the message invisible until JavaScript shows it.
- **Contact form:**
  - The old `onsubmit="showFormMessage(); return false;"` was replaced with
    `novalidate`, which turns off the browser's default popups so that the
    page can show its own messages.
  - An empty `<p class="error-message">` was added under each field
    (`name-error`, `email-error`, `message-error`). JavaScript writes the error
    text into them.

## 4. JavaScript Features

### 4.1 Time-of-day greeting (from Assignment 1)

`getGreetingMessage()` reads the current hour with `new Date().getHours()` and
uses `if / else if / else` to choose a morning, afternoon, or evening greeting.

### 4.2 Live project search (Dynamic Content)

- An `input` event listener on the search box runs on every keystroke.
- The search text is converted with `toLowerCase()` and `trim()`, so the search is
  not case-sensitive and ignores extra spaces.
- `querySelectorAll(".project-card")` gets all cards, and `forEach` checks whether
  each card's `textContent` `includes()` the search text.
- Matching cards are shown (`display = ""`) and the others are hidden
  (`display = "none"`).
- A counter (`visibleCount`) tracks the visible cards. If it is `0`, the
  "No projects found" message is shown by setting `hidden = false`.

### 4.3 Contact form validation (Data Handling)

- A `submit` event listener calls `event.preventDefault()` so the page does not
  reload.
- The values are read with `.value.trim()`.
- Rules:
  - **Name:** must not be empty.
  - **Email:** must not be empty and must match the pattern
    `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` (text, then `@`, then text, a dot, and text).
  - **Message:** must not be empty.
- Two helper functions keep the code short:
  - `showError()` writes the error text, adds the `input-error` class (red
    border), and removes `input-valid`.
  - `clearError()` clears the error text, removes `input-error`, and adds
    `input-valid` (green border).
- A boolean `isValid` becomes `false` when any rule fails. Only when it stays
  `true` does the form show *"Thank you, [name]! Your message has been received."*,
  reset the fields, and remove the green borders.

## 5. CSS

### 5.1 New styles

- `.project-search` – full-width search box with the same dark background and
  pink focus border as the form inputs.
- `.empty-message` – centered, muted text for the "No projects found" message.
- `.error-message` – red error text (`#FF6B8A`). `.error-message:empty` hides it
  when it has no text, so it does not leave gaps between fields.
- `.input-error` / `.input-valid` – red or green border on a field.
- `.form-message.success` – green confirmation text (`#4ADE80`).

### 5.2 Animation

```css
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
}
```

It is applied to `.error-message` (0.3s) and `.form-message.success` (0.4s), so the
messages fade in and slide down slightly instead of appearing suddenly. The effect
is short and subtle, so it does not distract the user.

### 5.3 Responsive design (from Assignment 1)

The layout uses Flexbox with `flex-wrap`, `min-width`, `max-width`, and percentage
widths. The project cards change from two columns to one on narrow screens, and
the new search box uses `width: 100%`.

## 6. User Feedback & Error Handling

| Situation | What the user sees |
|---|---|
| Search has no matches | "No projects found. Try a different keyword." |
| Empty name / email / message | A red message under the field and a red border |
| Invalid email format | "Please enter a valid email, like name@example.com." |
| Correct field | Green border |
| All fields valid | Green "Thank you, [name]! Your message has been received." |

Each message tells the user what happened and what to do next.

## 7. Development Workflow

Each feature was developed on its own Git branch and then merged into `main`:

- `feature/project-search`
- `feature/form-validation`
- `feature/valid-field-style`

## 8. Testing

| Test | Expected result |
|---|---|
| Search "tuwaiq" | Only the Tuwaiq project is shown |
| Search "xyz" | No cards; the empty message appears |
| Clear the search | Both projects return |
| Submit an empty form | Three error messages and red borders |
| Email "abc" | Invalid email message |
| All fields valid | Green confirmation message; the form is cleared |
| Narrow screen / phone size | Cards stack in one column and the search box fits the screen |

## 9. Limitations

- The contact form has no backend, so messages are not actually sent.
- The search only matches text inside the project cards.