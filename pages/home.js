import { getVideos } from "../api.js";

export function Home() {
  setTimeout(() => {
      loadDatas();
      initAnimations();
      initButtonScroll();
      initVideoAutoPlay();
      lazyLoadVideoSection();
  }, 0);

  return `
    <!-- HERO -->
      <section class="hero">

        <!-- 🎬 BACKGROUND VIDEO -->
        <video class="bg-video" autoplay muted loop playsinline preload="metadata">
          <source id="bg-source" src="" type="video/mp4" />
        </video>

        <!-- 🌑 DARK OVERLAY -->
        <div class="overlay_background"></div>

        <!-- ✨ FLOATING GLOW -->
        <div class="hero-glow"></div>

        <!-- HERO CONTENT -->
        <div class="hero-content">

          

          <!-- MINI LABEL -->
          <span class="hero-tag">
            AI FILMS • AI COMMERCIAL • AI IMAGERY
          </span>

          <!-- TITLE -->
          <h1 class="hero-title">
            YOUAI
            <span>STUDIO</span>
          </h1>

          <!-- DESCRIPTION -->
          <p class="hero-desc">
            We create cinematic AI experiences
          </p>

          <!-- SCROLL -->
          <div class="hero-scroll">
            <span></span>
          </div>

        </div>

      </section>

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
        Generate cinematic experiences powered by advanced artificial
        intelligence — crafted with emotion, motion, and visual precision.
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

      <section class="commercial-section fade-in">

  <div class="commercial-shell">

    <!-- ===================================== -->
    <!-- LEFT CONTENT -->
    <!-- ===================================== -->

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
        High-impact AI commercials engineered for brands, products,
        campaigns, and next-generation storytelling.
      </p>

    </div>

    <!-- ===================================== -->
    <!-- TOP RIGHT -->
    <!-- ===================================== -->

    <div class="commercial-actions">

      <a href="#filmAI" class="commercial-btn">
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

  <!-- ===================================== -->
  <!-- SLIDER -->
  <!-- ===================================== -->

  <div class="commercial-slider-wrap">

    <!-- glow -->
    <div class="commercial-glow"></div>

    <section class="horizontal-section">

      <div class="sticky-wrapper">

        <div class="scroll-track commercial-track" id="scroll-track">
          ⏳ Loading...
        </div>

      </div>

    </section>

  </div>

</section>
<section class="ai-gallery-section fade-in">

  <!-- ================================= -->
  <!-- TOP -->
  <!-- ================================= -->

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

  <!-- ================================= -->
  <!-- CENTER SHOWCASE -->
  <!-- ================================= -->

  <div class="gallery-stage">

    <!-- LEFT -->
    <div class="gallery-side-text">

      <p>
        AI-crafted imagery blending cinematic lighting,
        surreal compositions, futuristic aesthetics,
        and emotionally-driven storytelling.
      </p>

    </div>

    <!-- GRID -->
    <div id="imagery-grid" class="gallery-grid">
      ⏳ Loading...
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
    
    <!-- CTA -->
    <section class="text-center py-16 md:py-20 fade-in">

      <h2 class="text-2xl md:text-4xl mb-6">
        Start Your AI Video Today
      </h2>

      <div class="flex flex-col sm:flex-row justify-center gap-4">

        <a class="btn w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 
                  bg-purple-600 rounded-xl text-center">
          Work with us
        </a>

        <a class="btn w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 
                  bg-purple-600 rounded-xl text-center">
          View projects
        </a>

      </div>

    </section>
    <div id="gallery" class="gallery hidden">

  <!-- overlay -->
  <div class="gallery-overlay"></div>

  <!-- content -->
  <div class="gallery-content">

    <button id="gallery-close" class="gallery-btn close">✕</button>

    <button id="gallery-prev" class="gallery-btn prev">←</button>

    <img id="gallery-image" src="" />

    <button id="gallery-next" class="gallery-btn next">→</button>

  </div>

</div>
  `;
}

/* ========================= */
async function loadDatas() {
  const grid = document.getElementById("video-grid");
  const track = document.getElementById("scroll-track");
  const imagery = document.getElementById("imagery-grid"); // 🔥 thêm

  try {
    const data = await getVideos();

    // =========================
    // 🎬 VIDEO GRID
    // =========================
    if (grid) {
      let list = data?.videos || [];

      const isMobile = window.innerWidth < 768;

      if (isMobile) {
        list = list.slice(0, 1);
      } else {
        list = list.slice(0, 6);
      }

      grid.innerHTML = list.map(videoCard).join("");
    }

    // =========================
    // 🎬 SCROLL TRACK
    // =========================
    if (track) {
      track.innerHTML = (data?.videos || [])
        .map(videoHorizontalCard)
        .join("");
    }

    // =========================
    // 🎨 IMAGERY GRID (🔥 NEW)
    // =========================
    if (imagery && data?.imagery) {
      imagery.innerHTML = data.imagery
        .map(imageCard)
        .join("");
    }

    // =========================
    // ⚡ INIT SAU KHI RENDER
    // =========================
    setTimeout(() => {
      loadBackgroundVideo?.();
      initSnapSlider?.();
      initVideoAutoPlay?.();
      initAutoPlayOnScroll?.();
      autoGridLayout();
      showImagery();
      initGallery();
      initGalleryControls();
      initLazyVideos();
    }, 100);

  } catch (err) {
    console.error(err);

    if (grid) grid.innerHTML = "❌ GRID Failed";
    if (track) track.innerHTML = "❌ TRACK Failed";
    if (imagery) imagery.innerHTML = "❌ IMAGERY Failed";
  }
}

function videoHorizontalCard(v, index) {
  return `
    <div class="snap-card" data-index="${index}">

      <video
        class="snap-video"
        src="${v.videoUrl}"
        muted
        loop
        playsinline
        preload="metadata"
      ></video>

    </div>
  `;
}

function playActiveVideo(index) {
  const videos = document.querySelectorAll(".snap-video");

  videos.forEach((video, i) => {

    if (i === index) {
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }

  });
}

function videoCard(v) {
  return `
    <div class="card-hover video-card">

      <video
        class="lazy-video"
        data-src="${v.videoUrl}"
        muted
        loop
        playsinline
        preload="none"
      ></video>

      <div class="absolute bottom-3 left-3 text-sm z-10">
        ${v.title}
      </div>

    </div>
  `;
}

function initLazyVideos() {

  const videos = document.querySelectorAll(".lazy-video");

  const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      const video = entry.target;

      if (entry.isIntersecting) {

        // load source lần đầu
        if (!video.src) {
          video.src = video.dataset.src;
        }

        video.play().catch(() => {});

      } else {

        video.pause();

      }

    });

  }, {
    threshold: 0.6
  });

  videos.forEach(video => observer.observe(video));
}

function useCase(icon, text) {
  return `
    <div class="card-hover p-6 border border-gray-800 rounded-xl text-center">
      <div class="text-3xl mb-4">${icon}</div>
      <p class="text-gray-300">${text}</p>
    </div>
  `;
}

function step(icon, text) {
  return `
    <div class="card-hover p-6 border border-purple-500/20 rounded-xl">
      <div class="text-2xl mb-4">${icon}</div>
      <p class="text-gray-300">${text}</p>
    </div>
  `;
}


function pricingCard(title, price, features) {
  return `
    <div class="card-hover border border-purple-500/20 p-6 rounded-xl">

      <h3 class="text-xl mb-2">${title}</h3>
      <p class="text-2xl text-purple-400 mb-4">${price}</p>

      <ul class="text-gray-400 mb-6">
        ${features.map(f => `<li>✔ ${f}</li>`).join("")}
      </ul>


    </div>
  `;
}

/* ========================= */

function initAnimations() {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}

function initVideoAutoPlay() {
  const videos = document.querySelectorAll(".video-el");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play();
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.5 });

  videos.forEach(v => observer.observe(v));
}

function videoHorizontal() {
  return `
    <div class="h-card">
      <video 
        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
        muted loop playsinline
        class="w-full h-full object-cover rounded-xl">
      </video>
    </div>
  `;
}



function initButtonScroll() {
  const track = document.getElementById("scroll-track");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  if (!track || !btnLeft || !btnRight) return;

  let current = 0;

  const step = window.innerWidth * 0.6;

  btnRight.onclick = () => {
    current += step;
    move();
  };

  btnLeft.onclick = () => {
    current -= step;
    move();
  };

  function move() {
    const max = track.scrollWidth - window.innerWidth;

    current = Math.max(0, Math.min(current, max));

    track.style.transform = `translate3d(${x}px,0,0)`;

    updateCards();
  }
}


let current = 0;

function initSnapSlider() {

  const track = document.getElementById("scroll-track");

  const cards = document.querySelectorAll(".snap-card");

  const next = document.getElementById("btn-right");
  const prev = document.getElementById("btn-left");

  if (!track || !cards.length) return;

  const cardWidth = cards[0].offsetWidth + 24;

  function updateSlider() {

    track.style.transform =
      `translate3d(-${current * cardWidth}px,0,0)`;

    playActiveVideo(current);
  }

  next.onclick = () => {

    current++;

    if (current >= cards.length)
      current = cards.length - 1;

    updateSlider();
  };

  prev.onclick = () => {

    current--;

    if (current < 0)
      current = 0;

    updateSlider();
  };

  updateSlider();
}


async function loadBackgroundVideo() {
  try {
    const data = await getVideos();

    // 👉 check đúng structure mới
    if (!data || !data.hero || !data.hero.backgroundVideos?.length) 
      {
        console.error('Loi')
        return;
      }
    console.log("OK");  

    const bg = data.hero.backgroundVideos[0];

    const video = document.querySelector(".bg-video");
    const source = document.getElementById("bg-source");

    // 👉 set video background
    source.src = bg.videoUrl;

    video.load();

    // 👉 đảm bảo autoplay không lỗi
    video.muted = true;
    video.play().catch(() => {});

  } catch (err) {
    console.error("Load video failed", err);
  }
}

function initAutoPlayOnScroll() {
  const videos = document.querySelectorAll(".video-auto");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;

      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.5 // 👉 50% mới play (đẹp hơn)
  });

  videos.forEach(video => observer.observe(video));
}

function imageCard(img) {
  return `
    <div class="img-card ${img.type || ""}">
      <img src="${img.imageUrl}" alt="${img.title}" />
    </div>
  `;
}

function showImagery() {
  const cards = document.querySelectorAll(".img-card");

  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("show");
    }, i * 100);
  });
}

function autoGridLayout() {
  const grid = document.querySelector(".imagery-grid");
  const cards = document.querySelectorAll(".img-card");

  cards.forEach(card => {
    const img = card.querySelector("img");

    function resize() {
      const rowHeight = 10;
      const rowSpan = Math.ceil(img.clientHeight / rowHeight);
      card.style.gridRowEnd = `span ${rowSpan}`;
    }

    if (img.complete) {
      resize();
    } else {
      img.onload = resize;
    }
  });
}

function applyRatio(img) {
  const card = img.closest(".img-card");

  const w = img.naturalWidth;
  const h = img.naturalHeight;

  if (!w || !h) return;

  const ratio = w / h;

  if (ratio < 0.8) {
    card.classList.add("portrait");
  } else if (ratio > 1.2) {
    card.classList.add("landscape");
  } else {
    card.classList.add("square");
  }
}

let currentIndex = 0;
let galleryImages = [];

function initGallery() {
  const cards = document.querySelectorAll(".img-card img");

  galleryImages = Array.from(cards).map(img => img.src);

  cards.forEach((img, index) => {
    img.addEventListener("click", () => {
      openGallery(index);
    });
  });
}

function openGallery(index) {
  currentIndex = index;

  const gallery = document.getElementById("gallery");
  const image = document.getElementById("gallery-image");

  image.src = galleryImages[index];
  gallery.classList.remove("hidden");
}

function closeGallery() {
  document.getElementById("gallery").classList.add("hidden");
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  updateImage();
}

function updateImage() {
  document.getElementById("gallery-image").src = galleryImages[currentIndex];
}

/* controls */
function initGalleryControls() {
  document.getElementById("gallery-close").onclick = closeGallery;
  document.getElementById("gallery-next").onclick = nextImage;
  document.getElementById("gallery-prev").onclick = prevImage;

  document.querySelector(".gallery-overlay").onclick = closeGallery;

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeGallery();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });
}

function lazyLoadVideoSection() {
  const section = document.querySelector("#video-grid");

  if (!section) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        loadVideos(); // 🔥 chỉ load khi thấy

        observer.unobserve(section);
      }
    });
  }, {
    threshold: 0.2
  });

  observer.observe(section);
}

async function loadVideos() {
  const data = await getVideos();

  allVideos = data.videos || [];

  renderVirtualVideos();
}
let allVideos = [];

function renderVirtualVideos() {
  const grid = document.getElementById("video-grid");

  if (!grid) return;

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  const itemHeight = 280; // chiều cao card
  const columns = window.innerWidth < 768 ? 1 : 3;

  const startIndex =
    Math.floor(scrollTop / itemHeight) * columns;

  const visibleCount = columns * 6;

  const endIndex = startIndex + visibleCount;

  const visibleVideos = allVideos.slice(startIndex, endIndex);

  grid.innerHTML = visibleVideos
    .map(videoCard)
    .join("");

  initAutoPlayOnScroll?.();
}

function initFadeIn() {
  const els = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.1 });

  els.forEach(el => observer.observe(el));
}


