const btn = document.querySelector(".btn");
const animation = document.querySelector(".animation");
const svg = document.querySelector(".svg");

btn.addEventListener("click", () => {
  animation.classList.add("hidden");
  svg.classList.remove("hidden");
});
