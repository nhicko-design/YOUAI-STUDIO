import { getVideos } from "../api.js";

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
          YOUAI
          <span>STUDIO</span>
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

    <section class="film-ai-section fade-in">

      <div class="film-shell">

        <!-- LEFT -->
        <div class="film-info">

          <span class="film-badge">
            AI CINEMA ENGINE
          </span>

          <h2 class="film-title-neo">
            FILM <span>AI</span>
          </h2>

          <div class="film-line"></div>

          <p class="film-desc">
            Generate cinematic experiences powered by advanced
            artificial intelligence — crafted with emotion,
            motion, and visual precision.
          </p>

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

          <div id="video-grid" class="video-grid-neo">
            ⏳ Loading...
          </div>

        </div>

      </div>

    </section>

    <!-- ================================================= -->
    <!-- COMMERCIAL -->
    <!-- ================================================= -->

    <sectio                                                                                                                                                                                     n class="commercial-section fade-in">

      <div class="commercial-shell">

        <div class="commercial-header">

          <div>

            <span class="commercial-tag">
              AI COMMERCIAL SYSTEM
            </span>

            <h2 class="commercial-title">
              COMMERCIAL
            </h2>

          </div>

          <p class="commercial-desc">
            High-impact AI commercials engineered for brands,
            products, campaigns, and next-generation storytelling.
          </p>

        </div>

        <!-- RIGHT -->
        <div class="commercial-actions">

          <a href="#commercial" class="commercial-btn">
            Explore Commercial →
          </a>

          <div class="commercial-nav">

            <button id="btn-left" class="nav-btn-commercial">
              ←
            </button>

            <button id="btn-right" class="nav-btn-commercial">
              →
            </button>

          </div>

        </div>

      </div>

      <!-- SLIDER -->
      <div class="commercial-slider-wrap">

        <div class="commercial-glow"></div>

        <section class="horizontal-section">

          <div class="sticky-wrapper">

            <div class="scroll-track commercial-track"
              id="scroll-track">

              ⏳ Loading...

            </div>

          </div>

        </section>

      </div>

    </section>

    <!-- ================================================= -->
    <!-- AI IMAGERY -->
    <!-- ================================================= -->

    <section class="ai-gallery-section fade-in">

      <div class="gallery-top">

        <div>

          <span class="gallery-label">
            VISUAL INTELLIGENCE
          </span>

          <h2 class="gallery-title">
            AI IMAGERY
          </h2>

        </div>

        <a href="#imagery" class="gallery-btn">
          View Gallery →
        </a>

      </div>

      <div class="gallery-stage">

        <div class="gallery-side-text">

          <p>
            AI-crafted imagery blending cinematic lighting,
            surreal compositions, futuristic aesthetics,
            and emotionally-driven storytelling.
          </p>

        </div>

        <div id="imagery-grid" class="gallery-grid">
          ⏳ Loading...
        </div>

      </div>

    </section>
    <!-- =========================================================
   HIGHLIGHT PROJECTS
========================================================= -->

<section class="highlight-section fade-in">

  <!-- glow -->
  <div class="highlight-glow"></div>

  <!-- HEADER -->
  <div class="highlight-header">

    <span class="highlight-tag">
      FEATURED AI PROJECTS
    </span>

    <h2 class="highlight-title">
      Highlight <span>Projects</span>
    </h2>

    <p class="highlight-desc">
      A curated selection of cinematic AI productions crafted
      with storytelling, emotion, and next-generation visuals.
    </p>

  </div>

  <!-- PROJECT GRID -->
  <div class="highlight-grid">

    <!-- CARD 1 -->
    <div class="highlight-card">

      <img
        src="./images/chim-se-keu-chieu.jpg"
        alt="Chim Se Keu Chieu"
      />

      <div class="highlight-overlay"></div>

      <div class="highlight-content">

        <span class="highlight-type">
          AI SHORT FILM
        </span>

        <h3>
          Chim Sẻ Kêu Chiều
        </h3>

        <p>
          Emotional cinematic storytelling powered by AI visuals.
        </p>

      </div>

    </div>

    <!-- CARD 2 -->
    <div class="highlight-card">

      <img
        src="./images/love-in-hatred.jpg"
        alt="Love In Hatred"
      />

      <div class="highlight-overlay"></div>

      <div class="highlight-content">

        <span class="highlight-type">
          AI DRAMA
        </span>

        <h3>
          Love In Hatred
        </h3>

        <p>
          A dark romantic narrative with surreal AI aesthetics.
        </p>

      </div>

    </div>

    <!-- CARD 3 -->
    <div class="highlight-card">

      <img
        src="./images/unspoken-goodbye.jpg"
        alt="Unspoken Goodbye"
      />

      <div class="highlight-overlay"></div>

      <div class="highlight-content">

        <span class="highlight-type">
          AI CINEMA
        </span>

        <h3>
          Unspoken Goodbye
        </h3>

        <p>
          A visual journey of silence, memory, and emotion.
        </p>

      </div>

    </div>

  </div>

</section>
    <!-- ABOUT -->
    <section class="px-6 md:px-10 py-24 fade-in">

      <div class="section-box overflow-hidden">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <!-- 🖼️ LEFT IMAGE -->
          <div class="relative">

            <img 
              src="https://res.cloudinary.com/djxgoqxh3/image/upload/v1777649014/samples/woman-on-a-football-field.jpg"
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
              For The Next Generation
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
                <h3>50+</h3>
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
        Work With Us
      </a>

      <a href="#projects" class="cta-btn-secondary">
        View Projects
      </a>

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

  initSlider();

  initGallery();

  initGalleryControls();

  initHoverVideos();

}

/* =========================================================
   LOAD ALL DATA
========================================================= */

async function loadAllData() {

  try {

    const data = await getVideos();

    renderHero(data.hero);

    renderVideoGrid(data.videos);

    renderCommercialSlider(data.videos);

    renderImagery(data.imageryHome);

  } catch (err) {

    console.error(err);

  }

}

/* =========================================================
   HERO VIDEO
========================================================= */

function renderHero(hero) {

  if (!hero?.backgroundVideos?.length)
    return;

  const bg = hero.backgroundVideos[0];

  const video =
    document.querySelector(".bg-video");

  if (!video)
    return;

  video.src = bg.videoUrl;

  video.load();

  video.play().catch(() => {});

}

/* =========================================================
   VIDEO GRID
========================================================= */

function renderVideoGrid(videos = []) {

  const grid =
    document.getElementById("video-grid");

  if (!grid)
    return;

  const isMobile =
    window.innerWidth < 768;

  const list = isMobile
    ? videos.slice(0, 1)
    : videos.slice(0, 6);

  grid.innerHTML =
    list.map(videoCard).join("");

}

/* =========================================================
   VIDEO CARD
========================================================= */

function videoCard(v) {

  return `
    <div class="card-hover video-card">

      <!-- VIDEO -->
      <video
        class="hover-video"
        data-src="${v.videoUrl}"
        muted
        loop
        playsinline
        preload="none"
      ></video>

      <!-- OVERLAY -->
      <div class="video-dark"></div>

      <!-- TITLE -->
      <div class="video-info">

        <span class="video-label">
          AI FILM
        </span>

        <h3 class="video-title">
          ${v.title}
        </h3>

      </div>

    </div>
  `;
}

/* =========================================================
   COMMERCIAL SLIDER
========================================================= */

function renderCommercialSlider(videos = []) {

  const track =
    document.getElementById("scroll-track");

  if (!track)
    return;

  track.innerHTML =
    videos.map(videoHorizontalCard).join("");

}

function videoHorizontalCard(v, index) {

  return `
    <div class="snap-card" data-index="${index}">

      <video
        class="snap-video"
        data-src="${v.videoUrl}"
        muted
        loop
        playsinline
        preload="none"
      ></video>

    </div>
  `;
}

/* =========================================================
   SLIDER
========================================================= */

function initSlider() {

  const track =
    document.getElementById("scroll-track");

  const cards =
    document.querySelectorAll(".snap-card");

  const next =
    document.getElementById("btn-right");

  const prev =
    document.getElementById("btn-left");

  if (!track || !cards.length)
    return;

  let current = 0;

  const gap = 24;

  const cardWidth =
    cards[0].offsetWidth + gap;

  function updateSlider() {

    track.style.transform =
      `translate3d(-${current * cardWidth}px,0,0)`;

    playActiveVideo(current);

  }

  next?.addEventListener("click", () => {

    current =
      Math.min(current + 1, cards.length - 1);

    updateSlider();

  });

  prev?.addEventListener("click", () => {

    current =
      Math.max(current - 1, 0);

    updateSlider();

  });

  updateSlider();

}

function initHoverVideos() {

  const cards =
    document.querySelectorAll(".video-card");

  cards.forEach(card => {

    const video =
      card.querySelector(".hover-video");

    // LOAD VIDEO 1 LẦN
    function loadVideo() {

      if (!video.src) {

        video.src =
          video.dataset.src;

        video.load();

      }

    }

    // HOVER IN
    card.addEventListener("mouseenter", () => {

      loadVideo();

      // pause tất cả video khác
      document
        .querySelectorAll(".hover-video")
        .forEach(v => {

          if (v !== video) {

            v.pause();
            v.currentTime = 0;

          }

        });

      video.play().catch(() => {});

    });

    // HOVER OUT
    card.addEventListener("mouseleave", () => {

      video.pause();

      video.currentTime = 0;

    });

  });

}

function playActiveVideo(index) {

  const videos =
    document.querySelectorAll(".snap-video");

  videos.forEach((video, i) => {

    if (!video.src) {

      video.src = video.dataset.src;

      video.load();

    }

    if (i === index) {

      video.play().catch(() => {});

    } else {

      video.pause();

    }

  });

}

/* =========================================================
   LAZY VIDEOS
========================================================= */

function initLazyVideos() {

  const videos =
    document.querySelectorAll(".lazy-video");

  if (!videos.length)
    return;

  const observer =
    new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        const video = entry.target;

        if (entry.isIntersecting) {

          if (!video.src) {

            video.src =
              video.dataset.src;

            video.load();

          }

          video.play().catch(() => {});

        } else {

          video.pause();

        }

      });

    }, {
      threshold: 0.35
    });

  videos.forEach(video =>
    observer.observe(video)
  );

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

function imageCard(img) {

  return `
    <div class="img-card">

      <img
        src="${img.imageUrl}"
        alt="${img.title}"
        loading="lazy"
      />

    </div>
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