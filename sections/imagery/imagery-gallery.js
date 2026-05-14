export function ImageryGallery(
  title,
  desc,
  images = []
){

  return `

    <section class="imagery-gallery-section">

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

        <!-- masonry -->
        <div class="imagery-grid">

          ${images.map(imageCard).join("")}

        </div>

      </div>

    </section>

  `;
}

/* =========================================================
   CARD
========================================================= */

function imageCard(image){

  return `

    <div class="imagery-card">

      <img
        src="${image.imageUrl}"
        alt="${image.title}"
      >

      <div class="imagery-overlay">

        <div class="imagery-title">
          ${image.title}
        </div>

      </div>

    </div>

  `;
}