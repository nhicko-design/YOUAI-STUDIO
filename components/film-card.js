export function FilmCard(project) {
  return `
    <div class="film-project-card">

      <video
        class="film-project-video"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="${project.videoUrl}" type="video/mp4">
      </video>

      <div class="film-project-overlay"></div>

      <div class="film-project-content">

        <span class="film-project-genre">
          ${project.genre}
        </span>

        <h3 class="film-project-title">
          ${project.title}
        </h3>

        <p class="film-project-desc">
          ${project.description}
        </p>

      </div>

    </div>
  `;
}