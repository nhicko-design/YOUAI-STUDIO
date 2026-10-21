import { Home } from "./pages/home.js";
import { FilmAI } from "./pages/filmAI.js";
import { Commercial } from "./pages/commercial.js";
import { Contact } from "./pages/contact.js";
import { Imagery } from "./pages/imagery.js";

export async function renderRoute() {

  const page =
    document.getElementById("page");

  const requestedHash =
    window.location.hash || "#home";

  const homeAnchors = {
    "#ai-imagery": "ai-imagery",
    "#highlight-projects": "highlight-projects",
    "#about-studio": "about-studio"
  };

  const hash = homeAnchors[requestedHash]
    ? "#home"
    : requestedHash;

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

  const anchorId = homeAnchors[requestedHash];

  if (anchorId) {
    requestAnimationFrame(() => {
      document.getElementById(anchorId)?.scrollIntoView();
    });
  }

}
