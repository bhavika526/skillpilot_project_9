# SkillPilot Project - Light / Dark Theme Switcher

A simple theme switcher built as part of my SkillPilots program. A hidden checkbox changes a class on the `<body>`, and that class switches the CSS variable values to change the whole page between a light and a dark theme.

## Features

- Light and dark color sets stored as CSS variables
- Hidden checkbox, shown as a switch, that controls the theme
- Class `dark-theme` added to or removed from the `<body>` when the checkbox changes
- Every color on the page comes from a CSS variable, so one class changes the whole theme
- Label next to the switch changes between "Light mode" and "Dark mode"
- Smooth color transition when the theme changes
- Works with the keyboard (focus the switch and press Space)
- The theme also switches without JavaScript, because of a CSS backup rule
- Responsive layout for desktop and mobile screens

## Task Steps

| Step | Where it is done |

1. Define light and dark color sets as CSS variables | `style.css`: the light set is in `:root` and the dark set is in `body.dark-theme` |
2. Add a hidden checkbox that toggles a class on the body | `index.html` has the hidden checkbox `#theme-toggle`, and `script.js` toggles the class `dark-theme` on the body |
3. Use the class to switch variable values, updating the page theme | `body.dark-theme` in `style.css` replaces the variable values, and the page styles use `var(--...)` |

## How It Works

1. The light colors are defined as variables in `:root`, for example `--bg`, `--surface`, `--text`, and `--primary`.
2. The dark theme uses the same variable names with different values inside `body.dark-theme`.
3. The checkbox is visually hidden, and its label is styled as a switch.
4. When the checkbox is clicked, `script.js` adds or removes the class `dark-theme` on the `<body>`.
5. The page styles only use `var(--...)`, so the whole page changes colors at once.
6. As a backup, `body:has(#theme-toggle:checked)` applies the same dark values in CSS, so the switch still works if JavaScript is turned off.

## Technologies Used

- HTML5
- CSS3 (CSS variables, `:has()` selector, transitions, media queries)
- JavaScript (5 lines, only to toggle the body class)

## How to Run

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in any web browser.
4. Click the switch in the top right corner to change the theme.

## Project Structure

```
theme-switcher/
├── index.html
├── style.css
├── script.js
└── README.md
```

