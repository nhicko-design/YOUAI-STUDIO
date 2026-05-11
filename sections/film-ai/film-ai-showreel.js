export function FilmShowreel(projects = []) {

  return `
    <section class="film-showreel-section" id="showreel">

      <div class="film-container">

        <!-- heading -->
        <div class="film-section-heading">

          <div class="film-section-tag">
            SHOWREEL
          </div>

          <h2>
            AI Generated Cinematic Worlds
          </h2>

          <p>
            A curated showcase of emotionally powerful,
            visually stunning AI films.
          </p>

        </div>

        <!-- GRID -->
        <div class="film-showreel-grid">

          ${projects.map(project => `

            <div class="film-showreel-card">

              <!-- video -->
              <video
                src="${project.videoUrl}"
                muted
                loop
                playsinline
                onmouseenter="this.play()"
                onmouseleave="this.pause()"
              ></video>

              <!-- overlay -->
              <div class="film-showreel-overlay">

                <div class="film-showreel-genre">
                  ${project.genre}
                </div>

                <h3>
                  ${project.title}
                </h3>

                <p>
                  ${project.description}
                </p>

                <!-- buttons -->
                <div class="film-showreel-actions">

                  <button
                    class="film-watch-btn"
                    onclick="openFilmVideo('${project.videoUrl}')"
                  >
                    ▶ Watch Preview
                  </button>

                  <button class="film-detail-btn">
                    View Case Study
                  </button>

                </div>

              </div>

            </div>

          `).join("")}

        </div>

      </div>

      <!-- VIDEO MODAL -->
      <div
        class="film-video-modal"
        id="film-video-modal"
      >

        <div
          class="film-video-backdrop"
          onclick="closeFilmVideo()"
        ></div>

        <div class="film-video-content">

          <button
            class="film-video-close"
            onclick="closeFilmVideo()"
          >
            ✕
          </button>

          <video
            id="film-modal-video"
            controls
            autoplay
          ></video>

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   CARD
========================================================= */

function showreelCard(project){

  return `

    <div class="film-show-card">

      <video
        autoplay
        muted
        loop
        playsinline
      >
        <source
          src="${project.videoUrl}"
          type="video/mp4"
        >
      </video>

      <div class="film-show-overlay"></div>

      <div class="film-show-content">

        <div class="film-show-genre">
          ${project.genre}
        </div>

        <h3>
          ${project.title}
        </h3>

        <p>
          ${project.description}
        </p>

      </div>

    </div>

  `;
}