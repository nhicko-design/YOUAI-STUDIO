console.log("APP LOADED");

import { renderRoute } from "./router.js";
import { Navbar } from "./components/navbar.js";

function render() {
  const app = document.getElementById("app");

  if (!app) {
    console.error("Missing #app in index.html");
    return;
  }

  app.innerHTML = `
    ${Navbar()}
    <div id="page"></div>
  `;

  // đảm bảo DOM đã render xong
  requestAnimationFrame(() => {
    renderRoute();
  });
}

function initAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}

window.addEventListener("scroll", () => {
  const glow = document.querySelector(".glow");

  if (!glow) return;

  const scrollY = window.scrollY;
  glow.style.transform = `translateY(${scrollY * 0.3}px)`;
});


window.addEventListener("load", () => {
  setTimeout(initAnimations, 100);
});
window.addEventListener("hashchange", render);
window.addEventListener("load", render);

render();