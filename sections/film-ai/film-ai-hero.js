/* =========================================================
   🎬 FILM AI HERO
========================================================= */

export function FilmAIHero(heroVideo, videos = []) {

  return `
    <section class="film-ai-hero">

      <!-- background -->
      <div class="film-ai-bg-wrap">

        <video
          class="film-ai-bg-video"
          autoplay
          muted
          loop
          playsinline
        >
          <source
            src="${heroVideo?.backgroundVideo || ""}"
            type="video/mp4"
          >
        </video>

        <div class="film-ai-bg-overlay"></div>

      </div>

      <!-- glow -->
      <div class="film-ai-glow purple"></div>
      <div class="film-ai-glow pink"></div>

      <!-- content -->
      <div class="film-ai-hero-shell">

        <!-- LEFT -->
        <div class="film-ai-left">

          <div class="film-ai-badge">
            AI FILM PRODUCTION STUDIO
          </div>

          <h1 class="film-ai-main-title">
            Where
            <span>
              Storytelling
            </span>
            Meets AI
          </h1>

          <p class="film-ai-main-desc">
            We craft emotionally powerful,
            visually stunning films using
            cutting-edge AI technology —
            transforming ideas into cinematic
            experiences faster, smarter,
            and without limits.
          </p>


        </div>

        <!-- RIGHT -->
        <div class="film-ai-right">

          <div class="film-ai-floating">

            ${floatingCard(videos[0], "Love In Hatred", "one")}

            ${floatingCard(videos[1], "Fix Bug", "two")}

            ${floatingCard(videos[2], "Unspoken Goodbyes", "three")}

          </div>

        </div>

      </div>

      <!-- scroll -->
      <div class="film-ai-scroll">

        <span>
          SCROLL
        </span>

        <div class="film-ai-scroll-line"></div>

      </div>

    </section>
  `;
}

/* =========================================================
   FLOATING IMAGE CARD
========================================================= */

function floatingCard(video, title, className){

  return `
    <div class="film-float-card ${className}">

      <!-- IMAGE -->
      <img
        src="${video?.poster || video?.thumbnail || ""}"
        alt="${title}"
      >

      <!-- overlay -->
      <div class="film-float-overlay"></div>

      <!-- title -->
      <div class="film-ai-float-label">
        ${title}
      </div>

    </div>
  `;
}