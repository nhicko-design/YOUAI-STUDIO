export function CommercialHero(hero){

  return `
  
    <section class="commercial-hero">

      <video
        class="commercial-bg-video"
        autoplay
        muted
        loop
        playsinline
      >
        <source
          src="${hero.backgroundVideo}"
          type="video/mp4"
        >
      </video>

      <div class="commercial-overlay"></div>

      <div class="container">

        <div class="commercial-hero-content">

          <div class="commercial-badge">
            AI COMMERCIAL STUDIO
          </div>

          <h1>
            ${hero.title}
          </h1>

          <h2>
            ${hero.subtitle}
          </h2>

          <p>
            ${hero.description}
          </p>

          <div class="commercial-action">


            <a href="#commercialCta"
               class="commercial-btn-secondary">
              Start Your Campaign
            </a>

          </div>

        </div>

      </div>

    </section>

  `;
}