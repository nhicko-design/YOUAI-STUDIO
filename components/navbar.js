export function Navbar() {

  return `

    <nav class="navbar">

      <div class="navbar-container">

        <!-- LOGO -->
        <a href="#home" class="navbar-logo">

          <img
            src="./images/brand/Logo_YouAI_3.png"
            alt="YOUAI Studio"
          />

        </a>

        <!-- DESKTOP MENU -->
        <div class="navbar-links">

          <a href="#home">
            Home
          </a>

          <a href="#filmAI">
            Film AI
          </a>

          <a href="#commercial">
            Commercial
          </a>

          <a href="#imagery">
            Imagery
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        <!-- MOBILE BUTTON -->
        <button
          class="navbar-toggle"
          id="navbar-toggle"
        >
          ☰
        </button>

      </div>

      <!-- MOBILE MENU -->
      <div
        class="mobile-menu"
        id="mobile-menu"
      >

        <a href="#home">
          Home
        </a>

        <a href="#filmAI">
          Film AI
        </a>

        <a href="#commercial">
          Commercial
        </a>

        <a href="#imagery">
          Imagery
        </a>

        <a href="#contact">
          Contact
        </a>

      </div>

    </nav>

  `;
}

export function initNavbar(){

  const toggle =
    document.getElementById("navbar-toggle");

  const mobileMenu =
    document.getElementById("mobile-menu");

  if(toggle && mobileMenu){

    toggle.addEventListener("click", () => {

      mobileMenu.classList.toggle("active");

    });

    mobileMenu
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener("click", () => {

          mobileMenu.classList.remove("active");

        });

      });

  }

}
