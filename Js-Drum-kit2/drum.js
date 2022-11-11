function playBeat(r) {
  const audio = document.querySelector(`audio[data-key="${r.keyCode}"]`);
  const num = document.querySelector(`.num[data-key="${r.keyCode}]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  num.classList.add("playing");
}
function removeTransistion(r) {
  if (r.propertyName !== "transform") return; //skip if it's not a transform
  this.classList.remove("playing");
}
const nums = document.querySelectorAll(".num");
nums.forEach((num) => num.addEventListener("transitionend", removeTransistion));
window.addEventListener("keydown", playBeat);
