const firstBtn = document.querySelector(".btn");
const secondBtn = document.querySelector(".second-btn");
const thirdBtn = document.querySelector(".third-btn");
const fourthBtn = document.querySelector(".fourth-btn");
const spritesheet = document.querySelector(".cat--sprite");
const drawing = document.querySelector(".cat--vector");
const text = document.querySelector(".text--vector");

firstBtn.addEventListener("click", () => {
  spritesheet.classList.remove("hidden");
  text.classList.add("hidden");
});

secondBtn.addEventListener("click", () => {
  drawing.classList.remove("hidden");
  text.classList.add("hidden");
});

thirdBtn.addEventListener("click", () => {
  text.classList.remove("hidden");
  drawing.classList.add("hidden");
});

fourthBtn.addEventListener("click", () => {
  spritesheet.classList.add("hidden");
  text.classList.remove("hidden");
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
gsap.to("#o", {
  scale: 0.5,
  transformOrigin: "left center",
  duration: 5,
  repeat: -1,
  yoyo: true,
});

gsap.to("#cat", {
  stroke: "#ff00ff",
  duration: 1,
  repeat: -1,
  yoyo: true,
});
