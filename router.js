import { Home } from "./pages/home.js";
import { Gallery } from "./pages/gallery.js";
import { About } from "./pages/about.js";

export function renderRoute() {
  const page = document.getElementById("page");
  const hash = window.location.hash || "#home";

  if (hash === "#gallery") {
    page.innerHTML = Gallery();
  } else if (hash === "#about") {
    page.innerHTML = About();
  } else {
    page.innerHTML = Home();
  }
}