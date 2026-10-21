/* =========================================================
   PROJECT SHOWCASE
========================================================= */

export function ProjectShowcase(projects = []) {
  const items = projects.filter(project => project?.videoUrl);
  const featured = items.find(isRecognized) || items[0];
  const supporting = items.filter(project => project !== featured);
  const recognizedCount = items.filter(isRecognized).length;

  return `
    <section class="film-showcase-section" id="project-showcase">
      <div class="container">
        <header class="film-showcase-heading">
          <span class="film-showcase-label">FEATURED CINEMATIC REEL &amp; CASE STUDIES</span>
          <h2>Featured AI Films &amp; <span>Project Showcase</span></h2>
          <p>Pioneering cinematic storytelling, original worlds, and emotionally resonant films created with AI.</p>
          <nav class="film-showcase-filters" aria-label="Filter film projects">
            <button type="button" class="active" data-project-filter="all" aria-pressed="true" onclick="filterFilmProjects('all')">All Projects <span>${items.length}</span></button>
            <button type="button" data-project-filter="recognized" aria-pressed="false" onclick="filterFilmProjects('recognized')">Award Recognized <span>${recognizedCount}</span></button>
          </nav>
        </header>

        ${featured ? `
          <article class="film-showcase-featured" data-project-card data-recognized="${isRecognized(featured)}">
            <div class="film-showcase-feature-poster">
              <img src="${escapeHTML(featured.poster || "")}" alt="${escapeHTML(featured.title || "Featured film poster")}" loading="lazy" />
              <div class="film-showcase-feature-shade"></div>
              ${isRecognized(featured) ? `<span class="film-showcase-award"><span class="material-symbols-outlined" aria-hidden="true">military_tech</span>${escapeHTML(featured.genre)}</span>` : ""}
              <span class="film-showcase-poster-caption">FEATURED FILM</span>
              <button class="film-showcase-feature-play" type="button" data-video="${escapeHTML(featured.videoUrl)}" data-title="${escapeHTML(featured.title || "")}" data-description="${escapeHTML(featured.description || "")}" aria-label="Watch ${escapeHTML(featured.title || "featured film")}" onclick="openVideoModal(this.dataset.video, encodeURIComponent(this.dataset.title), encodeURIComponent(this.dataset.description))">
                <span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>
              </button>
            </div>
            <div class="film-showcase-feature-info">
              <span class="film-showcase-feature-kicker">FEATURED AI FILM</span>
              <h3>${escapeHTML(featured.title || "Untitled film")}</h3>
              <p>${escapeHTML(excerpt(featured.description, 380))}</p>
              <div class="film-showcase-feature-meta">
                <span><small>GENRE / STORY</small><strong>${escapeHTML(isRecognized(featured) ? "Award recognized" : featured.genre || "AI original film")}</strong></span>
                <span><small>FORMAT</small><strong>AI cinematic film</strong></span>
              </div>
              <button class="film-showcase-watch" type="button" data-video="${escapeHTML(featured.videoUrl)}" data-title="${escapeHTML(featured.title || "")}" data-description="${escapeHTML(featured.description || "")}" onclick="openVideoModal(this.dataset.video, encodeURIComponent(this.dataset.title), encodeURIComponent(this.dataset.description))">
                <span class="material-symbols-outlined" aria-hidden="true">play_arrow</span> Watch Film
              </button>
            </div>
          </article>
        ` : `<p class="film-showcase-empty">Films will appear here soon.</p>`}

        <div class="film-showcase-grid">
          ${supporting.map(projectCard).join("")}
        </div>
      </div>
    </section>
  `;
}

function projectCard(project) {
  const recognized = isRecognized(project);

  return `
    <article class="film-showcase-card" data-project-card data-recognized="${recognized}">
      <div class="film-showcase-poster">
        <img src="${escapeHTML(project.poster || "")}" alt="${escapeHTML(project.title || "Film poster")}" loading="lazy" />
        <div class="film-showcase-overlay"></div>
        <span class="film-showcase-card-tag">${escapeHTML(recognized ? "AWARD RECOGNIZED" : project.genre || "AI ORIGINAL")}</span>
        <button class="film-showcase-play" type="button" data-video="${escapeHTML(project.videoUrl)}" data-title="${escapeHTML(project.title || "")}" data-description="${escapeHTML(project.description || "")}" aria-label="Watch ${escapeHTML(project.title || "film")}" onclick="openVideoModal(this.dataset.video, encodeURIComponent(this.dataset.title), encodeURIComponent(this.dataset.description))">
          <span class="material-symbols-outlined" aria-hidden="true">play_arrow</span>
        </button>
      </div>
      <div class="film-showcase-content">
        <h3>${escapeHTML(project.title || "Untitled film")}</h3>
        <p>${escapeHTML(excerpt(project.description, 165))}</p>
        <button class="film-showcase-card-watch" type="button" data-video="${escapeHTML(project.videoUrl)}" data-title="${escapeHTML(project.title || "")}" data-description="${escapeHTML(project.description || "")}" onclick="openVideoModal(this.dataset.video, encodeURIComponent(this.dataset.title), encodeURIComponent(this.dataset.description))">
          Watch Film <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </button>
      </div>
    </article>
  `;
}

function isRecognized(project) {
  return /top\s*10|award|selection/i.test(project?.genre || "");
}

function excerpt(text = "", limit = 180) {
  const normalized = String(text).replace(/\s+/g, " ").trim();
  if (normalized.length <= limit) return normalized;
  return `${normalized.slice(0, limit).trimEnd()}…`;
}

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

window.filterFilmProjects = function(filter) {
  const section = document.getElementById("project-showcase");
  if (!section) return;

  section.querySelectorAll("[data-project-filter]").forEach(button => {
    const active = button.dataset.projectFilter === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  section.querySelectorAll("[data-project-card]").forEach(card => {
    card.hidden = filter === "recognized" && card.dataset.recognized !== "true";
  });
};
