const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition((data) => {
  console.table(data);
  speed.textContent = Math.round(data.coords.speed);
  Array.style.transform;
});
