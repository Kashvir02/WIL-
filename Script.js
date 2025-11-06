// js/main.js
function goHome() {
  window.location.href = "index.html";
}

// Update the footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});