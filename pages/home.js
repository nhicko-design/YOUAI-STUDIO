import {
  getContent,
  pickByIds,
  resolveHighlights,
} from "../api.js";

/* =========================================================
   HOME
========================================================= */

export function Home() {

  requestAnimationFrame(() => {
    initPage();
  });

  return `
  
    <!-- HERO -->
    <section class="hero">

      <video 
        class="bg-video"
        autoplay
        muted
        loop
        playsinline
        preload="metadata">
      </video>

      <div class="overlay_background"></div>

      <div class="hero-glow"></div>

      <div class="hero-content">

        <span class="hero-tag">
          We create cinematic AI experiences
        </span>

        <h1 class="hero-title">
          <img src="./images/brand/Logo_YouAI_1.png" alt="YOUAI Studio" />
        </h1>

        <p class="hero-desc">
          YOU AI - BRING IDEAS TO LIFE WITH AI

        </p>

        <div class="hero-scroll">
          <span></span>
        </div>

      </div>

    </section>

    <!-- ================================================= -->
    <!-- FILM AI -->
    <!-- ================================================= -->

    <section id="filmAI" class="film-ai-section fade-in">

      <div class="film-shell">

        <!-- LEFT -->
        <div class="film-info">

          <span class="film-badge">
            <span class="material-symbols-outlined" aria-hidden="true">movie</span>
            AI FILM STUDIO
          </span>

          <h2 class="film-title-neo">
            FILM <span>AI</span>
          </h2>

          <p class="film-desc">
            From the first frame to the final cut, turn bold ideas into
            cinematic stories with AI-assisted filmmaking.
          </p>

          <div class="film-workflow" aria-label="Film production workflow">
            <span>Concept</span><i aria-hidden="true"></i>
            <span>Story</span><i aria-hidden="true"></i>
            <span>Film</span>
          </div>

          <div class="film-stats">

            <div class="film-stat-card">
              <h3>250+</h3>
              <span>Projects</span>
            </div>

            <div class="film-stat-card">
              <h3>4K</h3>
              <span>Output</span>
            </div>

            <div class="film-stat-card">
              <h3>AI+</h3>
              <span>Visual FX</span>
            </div>

          </div>

          <a href="#filmAI" class="film-btn-neo">
            Explore Film AI
          </a>

        </div>

        <!-- RIGHT -->
        <div class="film-showcase">

          <div class="film-grid-glow"></div>

          <!-- MAIN VIDEO -->
<div class="film-main-player">

  <div class="film-player-topline">
    <span><i aria-hidden="true"></i> YOUAI ORIGINALS</span>
    <span class="film-player-format">CINEMATIC SHOWREEL</span>
  </div>

  <video
    id="film-main-video"
    autoplay
    muted
    loop
    playsinline
  >
    <source
      id="film-main-source"
      src=""
      type="video/mp4"
    >
  </video>

  <!-- overlay -->
  <div class="film-main-overlay"></div>

  <!-- LEARN MORE -->
  <a
    href="#filmAI"
    class="film-learn-btn"
  >
    Learn More
  </a>

  <!-- thumbnails -->
    <div
    id="film-thumb-track"
    class="film-thumb-track"
  >
    <span class="film-thumb-loading">Preparing the film collection…</span>
  </div>

</div>

        </div>

      </div>

    </section>

    <!-- ================================================= -->
<!-- COMMERCIAL SHOWCASE -->
<!-- ================================================= -->

<section id="commercial" class="commercial-section fade-in">

  <div class="commercial-glow"></div>

  <div class="commercial-home-shell">
    <div class="commercial-header">
      <div class="commercial-headline">
        <span class="commercial-tag">
          <span class="material-symbols-outlined" aria-hidden="true">campaign</span>
          AI COMMERCIAL STUDIO
        </span>
        <h2 class="commercial-title"><span>COMMERCIAL</span></h2>
      </div>
      <div class="commercial-intro">
        <p class="commercial-desc">
          Brand stories built to stop the scroll. Explore AI-powered product films
          shaped around your campaign, audience, and visual identity.
        </p>
        <div class="commercial-workflow" aria-label="Commercial production capabilities">
          <span>Product films</span><span>Campaigns</span><span>Brand stories</span>
        </div>
        <a href="#contact" class="commercial-cta">Create a campaign <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
      </div>
    </div>

    <div class="commercial-player-wrap">
      <div class="commercial-main-video">
        <div class="commercial-player-topline">
          <span><i aria-hidden="true"></i> CAMPAIGN REEL <b>01</b></span>
          <span class="commercial-player-format">PRODUCT · STORY · IMPACT</span>
        </div>

        <video
          id="main-commercial-video"
          autoplay
          muted
          loop
          playsinline
        >
          <source
            id="main-commercial-source"
            src=""
            type="video/mp4"
          >
        </video>

        <!-- DARK OVERLAY -->
        <div class="commercial-main-overlay"></div>

        <a href="#contact" class="commercial-learn-btn">Discuss a campaign <span class="material-symbols-outlined" aria-hidden="true">arrow_outward</span></a>

      </div>

      <div class="commercial-film-nav">
        <div class="commercial-film-nav-heading">
          <span>SELECT A CAMPAIGN</span>
          <small>Choose a film to preview</small>
        </div>
        <div
          class="commercial-thumb-track"
          id="commercial-thumb-track"
        >
          ⏳ Loading...
        </div>
      </div>

    </div>

  </div>

</section>

    <!-- ================================================= -->
    <!-- AI IMAGERY -->
    <!-- ================================================= -->

<section id="ai-imagery" class="home-imagery-section fade-in">
  <div class="home-showcase-container">
    <div class="home-showcase-heading home-imagery-heading">
      <div>
        <span class="home-showcase-kicker"><span class="material-symbols-outlined" aria-hidden="true">auto_awesome</span> Visual Intelligence</span>
        <h2>AI <span>IMAGERY</span></h2>
        <p>AI-crafted imagery blending cinematic lighting, surreal compositions, and emotionally driven storytelling.</p>
      </div>
      <a class="home-showcase-link" href="#imagery">View Gallery <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>
    </div>

    <div id="imagery-grid" class="home-imagery-grid">
      <div class="home-imagery-loading">Loading visual gallery…</div>
    </div>
  </div>
</section>
    <!-- =========================================================
   HIGHLIGHT PROJECTS
========================================================= -->

<section id="highlight-projects" class="home-highlight-section fade-in">
  <div class="home-showcase-container">
    <div class="home-showcase-heading home-highlight-heading">
      <span class="home-showcase-kicker"><span class="material-symbols-outlined" aria-hidden="true">military_tech</span> Featured AI Projects</span>
      <h2>Highlight <span>Projects</span></h2>
      <p>A curated selection of cinematic AI productions crafted with storytelling, emotion, and next-generation visuals.</p>
    </div>

    <div id="highlight-grid" class="home-highlight-grid">
      <div class="home-highlight-loading">Loading featured projects…</div>
    </div>
  </div>
</section>
    <!-- ABOUT -->
    <section id="about-studio" class="px-6 md:px-10 py-24 fade-in">

      <div class="section-box overflow-hidden">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <!-- 🖼️ LEFT IMAGE -->
          <div class="relative">

            <img 
              id="about-studio-image"
              src=""
              alt="YOUAI Studio"
              class="about-image"
            />
            <!-- overlay -->
            <div class="about-overlay"></div>

            <!-- floating badge -->
            <div class="about-badge">
              AI FILMMAKING
            </div>

          </div>

          <!-- ✨ RIGHT CONTENT -->
          <div class="flex flex-col justify-center">

            <span class="about-tag">
              ABOUT YOUAI
            </span>

            <h2 class="about-title mt-4">
              Cinematic AI Production <br />
              <span>For The Next Generation</span>
            </h2>

            <p class="about-text mt-6">
              YOUAI Studio is a creative studio specializing in AI Films,
              AI Commercial Videos, AI TVCs, and AI-generated imagery.
              With nearly two years of experience in AI-driven production,
              the studio has collaborated with major brands to deliver
              visually striking and emotionally engaging content.
            </p>

            <p class="about-text mt-4">
              By combining storytelling, cinematic thinking, and cutting-edge AI tools,
              YOUAI Studio creates premium-quality productions efficiently and creatively.
              The studio is proud to have received awards such as
              <span class="text-purple-300">
                “AI POP CULTURE IMPACT 2025”
              </span>
              and
              <span class="text-purple-300">
                4th Place in Film Bootcamp Micro Drama
              </span>.
            </p>

            <!-- STATS -->
            <div class="grid grid-cols-3 gap-4 mt-10">

              <div class="about-stat">
                <h3>2+</h3>
                <p>Years AI Experience</p>
              </div>

              <div class="about-stat">
                <h3>300+</h3>
                <p>Creative Projects</p>
              </div>

              <div class="about-stat">
                <h3>100%</h3>
                <p>Cinematic Quality</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
    
<section class="cta-section fade-in">

  <div class="cta-shell">

    <!-- glow -->
    <div class="cta-glow"></div>

    <span class="cta-tag">
      START YOUR AI JOURNEY
    </span>

    <h2 class="cta-title">
      Build Stunning AI Videos <br />
      For Your Brand
    </h2>

    <p class="cta-desc">
      From cinematic storytelling to high-impact commercials,
      YOUAI Studio transforms ideas into next-generation visuals.
    </p>

    <div class="cta-actions">

      <a href="#contact" class="cta-btn-primary">
        Contact Us
      </a>

    </div>

    <div class="cta-proof" aria-label="Our services">
      <span>AI-Powered Production</span>
      <span>Brand Storytelling</span>
      <span>Campaign-Ready Visuals</span>
    </div>

  </div>

</section>

    <!-- ================================================= -->
    <!-- GALLERY MODAL -->
    <!-- ================================================= -->

    <div id="gallery" class="gallery hidden">

      <div class="gallery-overlay"></div>

      <div class="gallery-content">

        <button id="gallery-close"
          class="gallery-btn close">
          ✕
        </button>

        <button id="gallery-prev"
          class="gallery-btn prev">
          ←
        </button>

        <img id="gallery-image" src="" />

        <button id="gallery-next"
          class="gallery-btn next">
          →
        </button>

      </div>
      

    </div>

  `;
}

/* =========================================================
   INIT
========================================================= */

async function initPage() {

  await loadAllData();

  initAnimations();

  initGallery();

  initGalleryControls();

}

/* =========================================================
   LOAD ALL DATA
========================================================= */

async function loadAllData() {

  try {

    const data = await getContent();

    renderHero(data.home?.hero);

    renderAboutImage(data.home?.about?.image);

    renderFilmShowcase(
      pickByIds(data.filmAI.projects, data.home.filmPreviewIds)
    );

    renderCommercialSlider(
      pickByIds(data.commercial.campaigns, data.home.commercialPreviewIds)
    );

    renderHighlights(
      resolveHighlights(data.home.highlights, data.filmAI.projects)
    );

    renderImagery(
      pickByIds(data.imagery.images, data.home.imageryPreviewIds)
    );

  } catch (err) {

    console.error(err);

  }

}

/* =========================================================
   HERO VIDEO
========================================================= */

function renderHero(hero) {

  const src = hero?.backgroundVideo;

  if (!src)
    return;

  const video =
    document.querySelector(".bg-video");

  if (!video)
    return;

  video.src = src;

  video.load();

  video.play().catch(() => {});

}

function renderAboutImage(imageUrl) {

  if (!imageUrl)
    return;

  const img =
    document.getElementById("about-studio-image");

  if (img)
    img.src = imageUrl;

}

/* =========================================================
   COMMERCIAL VIDEO SWITCHER
========================================================= */

function renderCommercialSlider(videos = []) {

  const thumbTrack =
    document.getElementById(
      "commercial-thumb-track"
    );

  const mainVideo =
    document.getElementById(
      "main-commercial-video"
    );

  const mainSource =
    document.getElementById(
      "main-commercial-source"
    );

  if(
    !thumbTrack ||
    !mainVideo ||
    !mainSource
  ) return;

  const availableVideos = videos.filter(video => video?.videoUrl).slice(0, 5);

  if (!availableVideos.length) {
    thumbTrack.innerHTML = '<span class="commercial-thumb-loading">Commercial films are being prepared. Please check back soon.</span>';
    return;
  }

  /* DEFAULT VIDEO */

  mainSource.src = availableVideos[0].videoUrl;
  mainVideo.load();
  mainVideo.play().catch(() => {});

  /* RENDER THUMB */

  thumbTrack.innerHTML =
    availableVideos
      .map((v, index) => `

        <button
          type="button"
          class="commercial-thumb ${index === 0 ? "active" : ""}"
          data-video="${v.videoUrl}"
          aria-pressed="${index === 0}"
          aria-label="Play ${v.title || `commercial ${index + 1}`}"
        >
          <img src="${v.thumbnail || ""}" alt="" loading="lazy" />
          <span class="commercial-thumb-copy">
            <strong>${v.title || `Campaign ${index + 1}`}</strong>
            <small>BRAND FILM</small>
          </span>
          <span class="commercial-thumb-play material-symbols-outlined" aria-hidden="true">play_arrow</span>
        </button>

      `)
      .join("");

  /* CLICK CHANGE VIDEO */

  const thumbs =
    thumbTrack.querySelectorAll(
      ".commercial-thumb"
    );

  thumbs.forEach(thumb => {

    thumb.addEventListener(
      "click",
      () => {

        thumbs.forEach(t => {
          t.classList.remove("active");
          t.setAttribute("aria-pressed", "false");
        });

        thumb.classList.add("active");
        thumb.setAttribute("aria-pressed", "true");

        const src =
          thumb.dataset.video;

        mainSource.src = src;

        mainVideo.load();

        mainVideo.play().catch(() => {});

      }
    );

  });

}

/* =========================================================
   IMAGERY
========================================================= */

function renderImagery(images = []) {

  const grid =
    document.getElementById("imagery-grid");

  if (!grid)
    return;

  grid.innerHTML =
    images.map(imageCard).join("");

}

function imageCard(img, index) {
  const captions = [
    ["Product Visual Study", "Sculpted studio light, rich materials, and reflective surfaces."],
    ["Material & Refraction", "A close-up study of form, texture, and light."],
    ["Spatial Composition", "A surreal product scene shaped by color and geometry."],
    ["Campaign Art Direction", "A cohesive visual built for modern brand storytelling."]
  ];
  const [title, description] = captions[index] || [img.title, "AI-generated visual concept by YOUAI Studio."];

  return `
    <article class="home-image-card img-card">
      <img src="${img.imageUrl}" alt="${img.title || title}" loading="lazy" />
      <div class="home-image-shade"></div>
      <div class="home-image-copy">
        <span class="home-image-label">${img.title || img.type || "AI Visual"}</span>
        <h3>${title}</h3>
        <p>${description}</p>
      </div>
      ${index === 3 ? '<span class="home-image-quality">AI VISUAL SERIES</span>' : ""}
    </article>
  `;
}

/* =========================================================
   GALLERY
========================================================= */

let currentIndex = 0;

let galleryImages = [];

function initGallery() {

  const cards =
    document.querySelectorAll(".img-card img");

  galleryImages =
    Array.from(cards).map(img => img.src);

  cards.forEach((img, index) => {

    img.addEventListener("click", () => {

      openGallery(index);

    });

  });

}

function openGallery(index) {

  currentIndex = index;

  const gallery =
    document.getElementById("gallery");

  const image =
    document.getElementById("gallery-image");

  image.src =
    galleryImages[index];

  gallery.classList.remove("hidden");

}

function closeGallery() {

  document.getElementById("gallery")
    .classList.add("hidden");

}

function nextImage() {

  currentIndex =
    (currentIndex + 1) % galleryImages.length;

  updateImage();

}

function prevImage() {

  currentIndex =
    (currentIndex - 1 + galleryImages.length)
    % galleryImages.length;

  updateImage();

}

function updateImage() {

  document.getElementById("gallery-image")
    .src = galleryImages[currentIndex];

}

function initGalleryControls() {

  document.getElementById("gallery-close")
    ?.addEventListener("click", closeGallery);

  document.getElementById("gallery-next")
    ?.addEventListener("click", nextImage);

  document.getElementById("gallery-prev")
    ?.addEventListener("click", prevImage);

  document.querySelector(".gallery-overlay")
    ?.addEventListener("click", closeGallery);

  document.addEventListener("keydown", (e) => {

    if (e.key === "Escape")
      closeGallery();

    if (e.key === "ArrowRight")
      nextImage();

    if (e.key === "ArrowLeft")
      prevImage();

  });

}

/* =========================================================
   ANIMATION
========================================================= */

function initAnimations() {

  const elements =
    document.querySelectorAll(".fade-in");

  const observer =
    new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

        }

      });

    }, {
      threshold: 0.15
    });

  elements.forEach(el =>
    observer.observe(el)
  );

}

function renderHighlights(highlights = []) {

  const grid =
    document.getElementById("highlight-grid");

  if (!grid)
    return;

  grid.innerHTML =
    highlights
      .map((card, index) => highlightCard(card, index, highlights))
      .join("");

}

/* =========================================================
   CARD
========================================================= */

function highlightCard(card, index, projects) {
  const hasAward = /top 10|award/i.test(card.description || "");
  const number = String(index + 1).padStart(2, "0");

  return `
    <article class="home-highlight-card">
      <div class="home-highlight-poster">
        <img src="${card.image}" alt="${card.title}" loading="lazy" />
        <div class="home-highlight-badges">
          <span>${card.type || "AI FILM"}</span>
          ${hasAward ? "<strong>TOP 10 BEST</strong>" : ""}
        </div>
        <a class="home-highlight-play" href="#filmAI" aria-label="Explore ${card.title} in Film AI"><span class="material-symbols-outlined" aria-hidden="true">play_arrow</span></a>
      </div>
      <div class="home-highlight-copy">
        <h3>${card.title}</h3>
        <p>${card.description}</p>
        <div class="home-highlight-meta">
          <span>FEATURED PROJECT ${number} / ${String(projects.length).padStart(2, "0")}</span>
          <span>AI CINEMA</span>
        </div>
      </div>
    </article>
  `;
}

/* =========================================================
   FILM AI VIDEO PLAYER
========================================================= */

function renderFilmShowcase(videos = []) {

  const thumbTrack =
    document.getElementById(
      "film-thumb-track"
    );

  const mainVideo =
    document.getElementById(
      "film-main-video"
    );

  const mainSource =
    document.getElementById(
      "film-main-source"
    );

  if(
    !thumbTrack ||
    !mainVideo ||
    !mainSource
  ) return;

  const availableVideos = videos.filter(video => video?.videoUrl).slice(0, 4);

  if (!availableVideos.length) {
    thumbTrack.innerHTML = '<p class="film-thumb-loading">Films are being prepared. Please check back soon.</p>';
    return;
  }

  /* DEFAULT VIDEO */

  mainSource.src = availableVideos[0].videoUrl;
  const defaultPoster = availableVideos[0].poster || "";
  if (/\.(jpe?g|png|webp|avif)(\?|$)/i.test(defaultPoster)) mainVideo.poster = defaultPoster;
  mainVideo.load();
  mainVideo.play().catch(() => {});

  /* FILM THUMBNAILS */

  thumbTrack.innerHTML =
    availableVideos
      .map((v, index) => {
        const poster = /\.(jpe?g|png|webp|avif)(\?|$)/i.test(v.poster || "") ? v.poster : "";
        return `

        <button
          type="button"
          class="film-thumb ${index === 0 ? "active" : ""}"
          data-video="${v.videoUrl}"
          data-poster="${poster}"
          aria-pressed="${index === 0}"
          aria-label="Play ${v.title || `film ${index + 1}`}"
        >
          ${poster ? `<img src="${poster}" alt="" loading="lazy" />` : `<video muted playsinline preload="metadata"><source src="${v.videoUrl}" type="video/mp4"></video>`}
          <span class="film-thumb-copy">
            <strong>${v.title || `Film ${index + 1}`}</strong>
            <small>${v.genre || "AI FILM"}</small>
          </span>
          <span class="film-thumb-play material-symbols-outlined" aria-hidden="true">play_arrow</span>
        </button>

      `;
      })
      .join("");

  /* CHANGE VIDEO */

  const thumbs =
    thumbTrack.querySelectorAll(
      ".film-thumb"
    );

  thumbs.forEach(thumb => {

    thumb.addEventListener(
      "click",
      () => {

        thumbs.forEach(t => {
          t.classList.remove("active");
          t.setAttribute("aria-pressed", "false");
        });

        thumb.classList.add("active");
        thumb.setAttribute("aria-pressed", "true");

        const src =
          thumb.dataset.video;

        mainSource.src = src;
        if (thumb.dataset.poster) mainVideo.poster = thumb.dataset.poster;

        mainVideo.load();

        mainVideo.play().catch(() => {});

      }
    );

  });

}
