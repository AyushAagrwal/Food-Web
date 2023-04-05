const toggleBtn = document.querySelector(".toggle-theme");
const Allelements = Array.from(
  document.querySelectorAll(
    ".navbar,.about,.food,.food-menu,.review,.contact,.footer"
  )
);
console.log(Allelements);

function toggleTheme() {
  for (var i = 0; i < Allelements.length; i++) {
    if (Allelements[i].classList.contains("dark-mode")) {
      Allelements[i].classList.remove("dark-mode");
      // toggleBtn.textContent = "Dark Mode";
    } else {
      Allelements[i].classList.add("dark-mode");
      // toggleBtn.textContent = "Light Mode";
    }
  }
}

toggleBtn.addEventListener("click", toggleTheme);
