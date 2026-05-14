import { Home } from "./pages/home.js";
import { FilmAI } from "./pages/filmAI.js";
import { Commercial } from "./pages/commercial.js";
import { Contact } from "./pages/contact.js";
import { Imagery } from "./pages/imagery.js";

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

  else if (hash === "#imagery") {
    page.innerHTML = await Imagery();
  }

  else if (hash === "#contact") {

    page.innerHTML =
      await Contact();

  }
  else {

    page.innerHTML =
      await Home();

  }

}