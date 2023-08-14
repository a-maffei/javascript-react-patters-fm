import observable from "./observable.js";
import "./analytics.js";

const pinkBtn = document.getElementById("pink-btn");
const blueBtn = document.getElementById("blue-btn");

pinkBtn.addEventListener("click", () => {
  const data = "🎀 Click on pink button! 🎀";
  observable.notify(data);
});

blueBtn.addEventListener("click", () => {
  const data = "🦋 Click on blue button! 🦋";
  observable.notify(data);
});
