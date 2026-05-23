/* =========================================================
   PROJECT SHOWCASE
========================================================= */

export function ProjectShowcase(projects = []) {

  return `
    <section class="film-showcase-section">

      <div class="container">

        <!-- heading -->
        <div class="film-showcase-heading">

          <span>
            PROJECT SHOWCASE
          </span>

          <h2>
            Cinematic Worlds
            Crafted With AI
          </h2>

          <p>
            Every project is designed as a complete visual universe —
            blending storytelling, cinematic direction,
            AI-generated performances, and emotional depth.
          </p>

        </div>

        <!-- grid -->
        <div class="film-showcase-grid">

          ${projects.map(card).join("")}

        </div>

      </div>

    </section>
  `;
}

/* =========================================================
   CARD
========================================================= */

function card(project){

  return `
    <article class="film-showcase-card">

      <!-- poster -->
      <div class="film-showcase-poster">

        <img
          src="${project.poster}"
          alt="${project.title}"
        >

        <div class="film-showcase-overlay"></div>

        <div class="film-showcase-play">
          ▶
        </div>

      </div>

      <!-- content -->
      <div class="film-showcase-content">

        <span class="film-showcase-genre">
          ${project.genre}
        </span>

        <h3>
          ${project.title}
        </h3>

        <p>
          ${project.description}
        </p>


      </div>

    </article>
  `;
}