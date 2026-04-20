# Will You Be My Valentine?

A small, static “Will you be my valentine?” page: **Yes** opens a celebration dialog; **No** is intentionally hard to click (it moves when you try).

**Open the page online:** [https://aryanpatke.github.io/valentine/](https://aryanpatke.github.io/valentine/) — you can use that link to open it directly in your browser (no local setup required).

## Features

- Single-page experience: `index.html`, `styles.css`, and `script.js`—no build step
- “No” button jumps to a random position inside the button area on hover, touch, or click
- “Yes” opens a modal with a short celebration and an embedded GIF
- Light pink gradient background and a simple cat face illustration (inline SVG)
- Basic accessibility: landmark regions, dialog semantics, and polite live region for the buttons

## How to run

Open the project in a browser:

- **Easiest:** double-click `index.html`, or from the project folder run  
  `xdg-open index.html` (Linux), `open index.html` (macOS), or `start index.html` (Windows)
- **Optional local server** (if you prefer `http://` for testing): e.g. `python3 -m http.server 8080` then visit `http://localhost:8080`

## Project layout

| File        | Role                                      |
| ----------- | ----------------------------------------- |
| `index.html` | Markup, SVG avatar, button and overlay  |
| `styles.css` | Layout, theme, and “moving No” styles     |
| `script.js`  | No-button movement, Yes modal, close UX   |

## Customizing

- Replace the celebration GIF: edit the `img` `src` in `index.html` (modal section).
- Change copy: the `<h1>`, helper text, and modal title in `index.html`.

---

Repository: [github.com/AryanPatke/valentine](https://github.com/AryanPatke/valentine)
