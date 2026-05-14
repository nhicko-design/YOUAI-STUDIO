export function CommercialShowcase(videos){

  return `
  
    <section
      id="commercialShowcase"
      class="commercial-showcase"
    >

      <div class="container">

        <div class="commercial-heading">

          <span>SHOWCASE</span>

          <h2>
            TVC Production
          </h2>

          <p>
            AI-generated TVCs, product campaigns,
            and social-first storytelling crafted
            for modern brands.
          </p>

        </div>

        <div class="commercial-grid">

          ${videos.map(video => `

            <div class="commercial-card">

              <video
                autoplay
                muted
                loop
                playsinline
              >
                <source
                  src="${video.videoUrl}"
                  type="video/mp4"
                >
              </video>

              <div class="commercial-card-overlay">

                <h3>
                  ${video.title}
                </h3>

              </div>

            </div>

          `).join("")}

        </div>

      </div>

    </section>

  `;
}