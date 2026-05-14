export function ImageryHero(images = []){

  const hero =
    images[0]?.imageUrl || "";

  return `

    <section class="imagery-hero">

      <!-- BG -->
      <div class="imagery-hero-bg">

        <img
          src="${hero}"
          alt="AI Visual"
        >

        <div class="imagery-hero-overlay"></div>

      </div>

      <!-- content -->
      <div class="imagery-hero-content">

        <div class="imagery-tag">
          VISUAL GALLERY
        </div>

        <h1>
          Where Imagination
          <span>Becomes</span>
          Visual Reality
        </h1>

        <p>
          A curated collection of AI-generated visuals —
          crafted to push boundaries,
          define aesthetics,
          and elevate brand storytelling.
        </p>

      </div>

    </section>

  `;
}