export function ImageryHero(images = []) {
  const hero = images[0]?.imageUrl || "";

  return `
    <section class="imagery-hero" aria-labelledby="imagery-hero-title">
      <div class="imagery-hero-bg" aria-hidden="true">
        <img src="${hero}" alt="" fetchpriority="high">
        <div class="imagery-hero-overlay"></div>
      </div>
      <div class="imagery-hero-content">
        <div class="imagery-tag">AI IMAGERY · VISUAL WORLDS</div>
        <h1 id="imagery-hero-title">Ideas take shape.<br><span>Worlds come alive.</span></h1>
        <p>From fashion editorials to product campaigns and imaginative concept art, explore visual stories made for brands with a point of view.</p>
        <div class="imagery-hero-actions">
          <a class="imagery-hero-btn" href="#imagery-fashion">Explore the gallery <span aria-hidden="true">↘</span></a>
          <span class="imagery-hero-note">Fashion · Product · Concept art</span>
        </div>
      </div>
    </section>
  `;
}
