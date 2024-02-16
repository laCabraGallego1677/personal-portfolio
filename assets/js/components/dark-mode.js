const d = document;
const toggle = d.getElementById("darkmode-toggle");
const $selector = d.querySelectorAll("[data-dark]");
const $contact_form=document.querySelector("contact__form")

function darkMode(e) {
  if (e) {
    $selector.forEach((el) => el.classList.toggle("dark-mode"));
  }
  $contact_form.classList.add("light-mode");
}

toggle.addEventListener("click", darkMode);

export default darkMode;
