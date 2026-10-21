export function CommercialShowcase(videos){

  return `

    <section
      id="commercialShowcase"
      class="commercial-showcase"
    >

      <!-- BG GLOW -->
      <div class="commercial-showcase-glow"></div>

      <div class="container">

        <!-- HEADER -->
        <div class="commercial-heading">

          <span>
            SHOWCASE
          </span>

          <h2>
            TVC Production
          </h2>

          <p>
            AI-generated TVCs, product campaigns,
            and social-first storytelling crafted
            for modern brands.
          </p>

        </div>

        <!-- PLAYER -->
        <div class="commercial-player-shell">

          <!-- MAIN VIDEO -->
          <div class="commercial-main-player">

            <video
              id="commercial-main-video"
              autoplay
              muted
              loop
              playsinline
            >
              <source
                id="commercial-main-source"
                src="${videos?.[0]?.videoUrl || ""}"
                type="video/mp4"
              >
            </video>

            <!-- overlay -->
            <div class="commercial-main-overlay"></div>

            <!-- content -->
            <div class="commercial-main-content">

              <span class="commercial-main-label">
                AI COMMERCIAL
              </span>

              <h3 id="commercial-main-title">
                ${videos?.[0]?.title || ""}
              </h3>

            </div>

            <!-- THUMBNAILS -->
            <div
              id="commercial-thumb-track"
              class="commercial-thumb-track"
            >

              ${videos
                .slice(0,5)
                .map((video, index) => `

                  <div
                    class="
                      commercial-thumb
                      ${index === 0 ? "active" : ""}
                    "
                    data-video="${video.videoUrl}"
                    data-title="${video.title}"
                  >

                    <video
                      muted
                      playsinline
                      preload="metadata"
                    >
                      <source
                        src="${video.videoUrl}"
                        type="video/mp4"
                      >
                    </video>

                  </div>

                `).join("")
              }

            </div>

          </div>

        </div>

      </div>

    </section>

  `;
}
