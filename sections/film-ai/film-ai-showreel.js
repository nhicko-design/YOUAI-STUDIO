export function FilmShowreel(projects = []) {

  return `

    <section
      class="film-showreel-section"
      id="showreel"
    >

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

          ${projects.map(showreelCard).join("")}

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

    <div class="film-showreel-card">

      <!-- VIDEO -->
      <video
        poster="${project.poster}"
        muted
        loop
        playsinline
        preload="metadata"
        onmouseenter="this.play()"
        onmouseleave="this.pause()"
      >

        <source
          src="${project.videoUrl}"
          type="video/mp4"
        >

      </video>

      <!-- OVERLAY -->
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

        <!-- ACTIONS -->
        <div class="film-showreel-actions">

          <button
            class="film-watch-btn"
            onclick="openVideoModal('${project.videoUrl}')"
          >
            Watch Preview
          </button>

        </div>

      </div>

    </div>

  `;
}