import getDateTime from "./script.js";

const dateEl = document.getElementById("date");
const timeEl = document.getElementById("time");
const btn = document.getElementById("toggleTheme");
const body = document.body;

function updateClock() {
  const { sana, vaqt } = getDateTime();
  dateEl.textContent = sana;
  timeEl.textContent = vaqt;
}

updateClock();
setInterval(updateClock, 1000);

btn.onclick = () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    btn.textContent = "🌙 Dark";
  } else {
    btn.textContent = "☀️ Light";
  }
};