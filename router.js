import { Home } from "./pages/home.js";
import { FilmAI } from "./pages/filmAI.js";
import { Commercial } from "./pages/commercial.js";
import { About } from "./pages/about.js";

export async function renderRoute() {

  const page =
    document.getElementById("page");

  const hash =
    window.location.hash || "#home";

  if (hash === "#filmAI") {

    page.innerHTML =
      await FilmAI();

  }

  else if (hash === "#commercial") {

    page.innerHTML =
      await Commercial();

  }

  else if (hash === "#about") {

    page.innerHTML =
      await About();

  }

  else {

    page.innerHTML =
      await Home();

  }

}