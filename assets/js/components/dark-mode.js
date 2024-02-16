const d = document;
const toggle = d.getElementById("darkmode-toggle");
const $selector = d.querySelectorAll("[data-dark]");

function darkMode(e) {
  if (e) {
    $selector.forEach((el) => el.classList.toggle("dark-mode"));
  }
}

toggle.addEventListener("click", darkMode);

export default darkMode;
