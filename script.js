// Adds or removes the class "dark-theme" on the body when the checkbox changes.
const toggle = document.getElementById("theme-toggle");

function applyTheme() {
  document.body.classList.toggle("dark-theme", toggle.checked);
}

toggle.addEventListener("change", applyTheme);
applyTheme();   // keep the page and the checkbox in sync when the page loads