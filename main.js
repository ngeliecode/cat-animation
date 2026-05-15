const firstBtn = document.querySelector(".btn");
const secondBtn = document.querySelector(".second-btn");
const thirdBtn = document.querySelector(".third-btn");
const spritesheet = document.querySelector(".cat--sprite");
const drawing = document.querySelector(".cat--vector");
const text = document.querySelector(".text--vector");

firstBtn.addEventListener("click", () => {
  spritesheet.classList.remove("hidden");
  text.classList.add("hidden");
});

secondBtn.addEventListener("click", () => {
  spritesheet.classList.add("hidden");
  drawing.classList.remove("hidden");
});

thirdBtn.addEventListener("click", () => {
  text.classList.remove("hidden");
  drawing.classList.add("hidden");
});

gsap.to(".text--vector path", {
  x: 0,
  opacity: 1,
  stagger: 0.2,
});

gsap.to("#e", {
  scale: 0.5,
  rotation: 360,
  duration: 4,
  transformOrigin: "center center",
  repeat: -1,
  yoyo: true,
});

gsap.to("#cat", {
  stroke: "#ff00ff",
  duration: 1,
  repeat: -1,
  yoyo: true,
});
