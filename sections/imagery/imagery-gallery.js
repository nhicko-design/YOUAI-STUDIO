export function ImageryGallery(
  title,
  desc,
  images = []
){

  return `

    <section class="imagery-gallery-section">

      <!-- glow -->
      <div class="imagery-bg-glow left"></div>
      <div class="imagery-bg-glow right"></div>

      <div class="film-container">

        <!-- heading -->
        <div class="imagery-gallery-heading">

          <div class="imagery-gallery-tag">
            ${title}
          </div>

          <h2>
            ${title}
          </h2>

          <p>
            ${desc}
          </p>

        </div>

        <!-- GRID -->
        <div class="imagery-grid">

          ${images.map((image, index) =>
            imageCard(image, index)
          ).join("")}

        </div>

      </div>

    </section>

  `;
}

/* =========================================================
   CARD
========================================================= */

function imageCard(image, index){

  let layout = "small";

  if(index === 0){
    layout = "hero";
  }

  return `

    <div class="imagery-card ${layout}">

      <img
        src="${image.imageUrl}"
        alt="${image.title}"
        loading="lazy"
      >

      <div class="imagery-overlay"></div>

      <div class="imagery-content">

        <div class="imagery-type">
          AI VISUAL
        </div>

        <div class="imagery-title">
          ${image.title}
        </div>

      </div>

    </div>

  `;
}