import { getVideos } from "../api.js";
import { FilmCard } from "../components/film-card.js";

export function FilmAI() {
  setTimeout(loadFilmAI, 0);

  return `
    <section id="film-ai-page">

      <div id="film-ai-hero"></div>

      <section class="film-projects-section">

        <div class="film-projects-header">

          <span class="film-label">
            AI STORYTELLING
          </span>

          <h2 class="film-heading">
            Featured Projects
          </h2>

        </div>

        <div
          id="film-project-grid"
          class="film-project-grid"
        >
          Loading...
        </div>

      </section>

    </section>
  `;
}

async function loadFilmAI() {

  const data = await getVideos();

  renderHero(data.filmAI.hero);

  renderProjects(data.filmAI.projects);
}

function renderHero(hero) {

  const el = document.getElementById("film-ai-hero");

  el.innerHTML = `
    <section class="film-hero">

      <video
        class="film-hero-video"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="${hero.backgroundVideo}" type="video/mp4">
      </video>

      <div class="film-hero-overlay"></div>

      <div class="film-hero-content">

        <span class="film-hero-tag">
          YOUAI FILM DIVISION
        </span>

        <h1 class="film-hero-title">
          ${hero.title}
        </h1>

        <h2 class="film-hero-subtitle">
          ${hero.subtitle}
        </h2>

        <p class="film-hero-desc">
          ${hero.description}
        </p>

      </div>

    </section>
  `;
}

function renderProjects(projects) {

  const grid = document.getElementById("film-project-grid");

  grid.innerHTML = projects
    .map(FilmCard)
    .join("");
}