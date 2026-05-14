console.log("APP LOADED");
import { renderRoute } from "./router.js";

import { Navbar }
from "./components/navbar.js";

import { VideoModal }
from "./components/video-modal.js";

import "./components/video-modal-handler.js";

/* =========================================================
   RENDER APP
========================================================= */

function render() {

  const app =
    document.getElementById("app");

  if (!app) {

    console.error(
      "Missing #app in index.html"
    );

    return;
  }

  app.innerHTML = `
    
    ${Navbar()}

    <div id="page"></div>

    ${VideoModal()}

  `;

  // render route sau khi DOM mount
  requestAnimationFrame(() => {
    renderRoute();

    // re-init effects
    setTimeout(() => {

      initAnimations();

    }, 50);

  });

}

/* =========================================================
   SHOWREEL SCROLL
========================================================= */

window.scrollFilmShowreel = function(direction){

  const slider =
    document.getElementById(
      "film-showreel-slider"
    );

  if(!slider) return;

  const amount = 600;

  slider.scrollBy({
    left: amount * direction,
    behavior: "smooth"
  });

};


/* =========================================================
   FADE ANIMATION
========================================================= */

function initAnimations() {

  const elements =
    document.querySelectorAll(".fade-in");

  const observer =
    new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    });

  elements.forEach(el =>
    observer.observe(el)
  );

}


/* =========================================================
   GLOW PARALLAX
========================================================= */

window.addEventListener("scroll", () => {

  const glow =
    document.querySelector(".glow");

  if (!glow) return;

  const scrollY = window.scrollY;

  glow.style.transform =
    `translateY(${scrollY * 0.3}px)`;

});

/* =========================================================
   EVENTS
========================================================= */

window.addEventListener(
  "hashchange",
  render
);

window.addEventListener(
  "load",
  render
);

/* =========================================================
   START
========================================================= */

render();