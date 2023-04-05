// const toggleBtn = document.querySelector(".toggle-theme");
// const Allelements = Array.from(
//   document.querySelectorAll(
//     ".navbar,.about,.food,.food-menu,.review,.contact,.footer"
//   )
// );
// console.log(Allelements);

// function toggleTheme() {
//   for (var i = 0; i < Allelements.length; i++) {
//     if (Allelements[i].classList.contains("dark-mode")) {
//       Allelements[i].classList.remove("dark-mode");
//       // toggleBtn.textContent = "Dark Mode";
//     } else {
//       Allelements[i].classList.add("dark-mode");
//       // toggleBtn.textContent = "Light Mode";
//     }
//   }
// }

// toggleBtn.addEventListener("click", toggleTheme);

const toggleBtn = document.querySelector(".toggle-theme");
const body = document.querySelector(".navbar");

function toggleTheme() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "Dark Mode";
  } else {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Light Mode";
  }
}

toggleBtn.addEventListener("click", toggleTheme);
