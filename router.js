import { Home } from "./pages/home.js";
import { FilmAI } from "./pages/filmAI.js";
import { Commercial } from "./pages/commercial.js";
import { About } from "./pages/about.js";

export function renderRoute() {
  const page = document.getElementById("page");
  const hash = window.location.hash || "#home";

  if (hash === "#filmAI") {
    page.innerHTML = FilmAI();
  } else if (hash === "#about") {
    page.innerHTML = About();
  } else {
    page.innerHTML = Home();
  }
}