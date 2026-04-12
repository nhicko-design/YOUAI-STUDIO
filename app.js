import { renderRoute } from "./router.js";
import { Navbar } from "./components/navbar.js";

const app = document.getElementById("app");

function render() {
  app.innerHTML = `
    ${Navbar()}
    <div id="page"></div>
  `;
  renderRoute();
}

window.addEventListener("hashchange", render);

render();