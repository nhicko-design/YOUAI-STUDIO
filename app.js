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

window.addEventListener("hashchange", render);
window.addEventListener("load", render);

render();