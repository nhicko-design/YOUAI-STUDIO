export function ImageryGallery(title, desc, images = [], sectionId = "") {
  const id = sectionId || `imagery-${String(title).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return `
    <section class="imagery-gallery-section" id="${id}" aria-labelledby="${id}-title">
      <div class="imagery-bg-glow left" aria-hidden="true"></div>
      <div class="imagery-bg-glow right" aria-hidden="true"></div>
      <div class="film-container">
        <header class="imagery-gallery-heading">
          <div class="imagery-gallery-tag">AI IMAGERY / ${title}</div>
          <h2 id="${id}-title"><span>${title}</span> imagery</h2>
          <p>${desc}</p>
        </header>
        <div class="imagery-grid">
          ${images.map((image, index) => imageCard(image, index, title)).join("")}
        </div>
      </div>
    </section>
  `;
}

function imageCard(image, index, category) {
  const layout = index === 0 ? "hero" : "small";
  const title = image.title && image.title !== category ? image.title : `${category} visual`;

  return `
    <article class="imagery-card ${layout}">
      <img src="${image.imageUrl}" alt="${title} — ${category} AI imagery" loading="lazy">
      <div class="imagery-overlay" aria-hidden="true"></div>
      <div class="imagery-content">
        <div class="imagery-type">${image.type || category}</div>
        <div class="imagery-title">${title}</div>
      </div>
    </article>
  `;
}
