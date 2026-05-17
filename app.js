console.log("APP LOADED");

import { renderRoute }
from "./router.js";

import {
  Navbar,
  initNavbar
}
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

  /* =========================================
     RENDER LAYOUT
  ========================================= */

  app.innerHTML = `

    ${Navbar()}

    <main id="page"></main>

    ${VideoModal()}

  `;

  /* =========================================
     INIT NAVBAR
  ========================================= */

  initNavbar();

  /* =========================================
     RENDER PAGE
  ========================================= */

  requestAnimationFrame(() => {

    renderRoute();

    setTimeout(() => {

      initAnimations();

    }, 50);

  });

}

/* =========================================================
   SHOWREEL SCROLL
========================================================= */

window.scrollFilmShowreel =
function(direction){

  const slider =
    document.getElementById(
      "film-showreel-slider"
    );

  if(!slider)
    return;

  const amount = 600;

  slider.scrollBy({

    left:
      amount * direction,

    behavior:
      "smooth"

  });

};

/* =========================================================
   FADE ANIMATION
========================================================= */

function initAnimations() {

  const elements =
    document.querySelectorAll(".fade-in");

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(entry => {

          if(entry.isIntersecting){

            entry.target
              .classList
              .add("show");

          }

        });

      },

      {
        threshold: 0.12
      }

    );

  elements.forEach(el =>
    observer.observe(el)
  );

}

/* =========================================================
   GLOW PARALLAX
========================================================= */

window.addEventListener(
  "scroll",
  () => {

    const glow =
      document.querySelector(".glow");

    if(!glow)
      return;

    const scrollY =
      window.scrollY;

    glow.style.transform =
      `translateY(${scrollY * 0.3}px)`;

  }
);

/* =========================================================
   HASH ROUTING
========================================================= */

window.addEventListener(
  "hashchange",
  render
);

/* =========================================================
   START APP
========================================================= */

window.addEventListener(
  "load",
  () => {

    render();

  }
);