import { getVideos } from "../api.js";

export function Home() {
  setTimeout(() => {
      loadVideos();
      initAnimations();
      initButtonScroll();
      initVideoAutoPlay();
  }, 0);

  return `
    <!-- HERO -->
    <section class="hero">

      <video class="bg-video" autoplay muted loop playsinline>
        <source id="bg-source" src="" type="video/mp4" />
      </video>

      <div class="overlay_background"></div>

      <div class="hero-content">
        <img src="./images/logo.png" class="w-20 h-20 mx-auto mb-6 rounded-full"/>

        <h1 class="logo-title">
          YOU AI STUDIO
        </h1>

        <p class="text-gray-400 text-lg mb-8">
          Create Cinematic AI Videos for Brands & Businesses
        </p>

        <div class="flex justify-center gap-4">
          <a href="#gallery" class="btn px-8 py-4 rounded-xl bg-purple-600">
            View Works
          </a>

          <a href="#pricing" class="btn px-8 py-4 rounded-xl border border-gray-700">
            Pricing
          </a>
      </div>

    </section>


    <!-- ABOUT -->
    <section class="py-20 text-center max-w-4xl mx-auto fade-in">
      <h2 class="text-3xl mb-6">About Us</h2>

      <p class="text-gray-400">
        Top creator of CapCut AI Vietnam with nearly 2 years of experience in AI video production.
      </p>

      <p class="text-gray-400 mt-4">
        We specialize in AI films, commercials, TVCs, and cinematic visuals.
      </p>
    </section>

    <!-- VIDEO -->
    <section class="px-10 py-20 fade-in">
      <h2 class="text-3xl mb-10 text-center">🎬 Our Works</h2>

      <div id="video-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ⏳ Loading...
      </div>
    </section>

    <!-- FEATURE SHOWCASE -->
    <section class="px-10 py-20 fade-in">
      <h2 class="text-3xl text-center mb-12">Cinematic AI Power</h2>

      <div class="grid md:grid-cols-2 gap-10 items-center">
        <img src="./images/logo.png" class="w-full rounded-xl border border-purple-500/20"/>

        <div>
          <h3 class="text-2xl mb-4">Create Stunning AI Films</h3>
          <p class="text-gray-400">
            Generate cinematic visuals with realistic lighting, motion, and storytelling.
          </p>
        </div>
      </div>
    </section>

    <!-- USE CASE -->
    <section class="px-10 py-20 fade-in">
      <h2 class="text-3xl text-center mb-12">Use Cases</h2>

      <div class="grid md:grid-cols-3 gap-6">
        ${useCase("🎬", "AI Commercial")}
        ${useCase("📱", "Social Content")}
        ${useCase("🎥", "Short Films")}
      </div>
    </section>

    <!-- WORKFLOW -->
    <section class="px-10 py-20 fade-in">
      <h2 class="text-3xl text-center mb-12">How It Works</h2>

      <div class="grid md:grid-cols-3 gap-6 text-center">
        ${step("1️⃣", "Send your idea")}
        ${step("2️⃣", "We create AI video")}
        ${step("3️⃣", "Receive final video")}
      </div>
    </section>

    <section class="horizontal-section fade-in">

      <!-- BUTTON -->
      <button id="btn-left" class="nav-btn left">←</button>
      <button id="btn-right" class="nav-btn right">→</button>

      <div class="sticky-wrapper">
        <div class="scroll-track" id="scroll-track">
          ⏳ Loading...
        </div>
      </div>

    </section>

    <!-- VISUAL GRID -->
    <section class="px-10 py-20 fade-in">
      <h2 class="text-3xl text-center mb-12">Visual Showcase</h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        ${imageCard()}
        ${imageCard()}
        ${imageCard()}
        ${imageCard()}
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="px-10 py-20 fade-in">
      <h2 class="text-3xl text-center mb-12">Pricing</h2>

      <div class="grid md:grid-cols-3 gap-8">

        ${pricingCard("Basic 01", "650.000 VND", [
          "15-30s video",
          "No storyline",
          "1 feedback"
        ])}

        ${pricingCard("Basic 02", "1.000.000 VND", [
          "Story video",
          "30-40s",
          "2 feedback"
        ])}

        ${pricingCard("Premium", "7.500.000 VND", [
          "Cinematic film",
          "1-1.5 minutes",
          "High-end"
        ])}

      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-20 fade-in">
      <h2 class="text-4xl mb-6">Start Your AI Video Today</h2>

      <a class="btn px-10 py-4 bg-purple-600 rounded-xl">
        Contact Now
      </a>
    </section>
  `;
}

/* ========================= */

async function loadVideos() {
  const grid = document.getElementById("video-grid");
  const track = document.getElementById("scroll-track");
  
  try {
    const data = await getVideos();

    // grid bình thường
    if (grid) {
      grid.innerHTML = data.map(videoCard).join("");
    }

    if (track) {
      track.innerHTML = data.map(videoHorizontalCard).join("");

      setTimeout(() => {
        loadBackgroundVideo();
        initSnapSlider();     // 🔥 QUAN TRỌNG
        initVideoAutoPlay();
      }, 100);
}

  } catch {
    if (grid) grid.innerHTML = "❌ Failed";
    if (track) track.innerHTML = "❌ Failed";
  }
}

function videoHorizontalCard(v) {
  return `
    <div class="h-card">

      <video 
        src="${v.videoBackground}" 
        muted 
        loop 
        playsinline
        class="video-el">
      </video>

      <div class="overlay">
        ${v.title}
      </div>

    </div>
  `;
}

function videoCard(v) {
  return `
    <div class="card-hover relative bg-black border border-purple-500/20 
                rounded-xl overflow-hidden">

      <video src="${v.videoUrl}" muted loop playsinline
        onmouseover="this.play()" 
        onmouseout="this.pause()"
        class="w-full h-[220px] object-cover">
      </video>

      <div class="absolute bottom-3 left-3 text-sm">
        ${v.title}
      </div>
    </div>
  `;
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

function imageCard() {
  return `
    <div class="card-hover aspect-square overflow-hidden rounded-xl border border-purple-500/20">
      <img src="./images/logo.png" class="w-full h-full object-cover"/>
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

      <button class="btn w-full py-2 bg-purple-600 rounded-lg">
        Choose Plan
      </button>

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

function initHorizontalScroll() {
  const section = document.querySelector(".horizontal-section");
  const track = document.getElementById("scroll-track");

  if (!section || !track) return;

  let current = 0;
  let target = 0;

  function lerp(start, end, t) {
    return start * (1 - t) + end * t;
  }

  function animate() {
    current = lerp(current, target, 0.08);

    track.style.transform = `translate3d(-${current}px,0,0)`;

    updateCards();

    requestAnimationFrame(animate);
  }

  function updateCards() {
    const cards = document.querySelectorAll(".h-card");
    const center = window.innerWidth / 2;

    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;

      const dist = Math.abs(center - cardCenter);

      const scale = Math.max(0.85, 1 - dist / 1000);
      const blur = Math.min(6, dist / 200);

      card.style.transform = `scale(${scale})`;
      card.style.filter = `blur(${blur}px)`;
    });
  }

  function onScroll() {
    const rect = section.getBoundingClientRect();

    const progress = Math.min(
      Math.max(-rect.top / (section.offsetHeight - window.innerHeight), 0),
      1
    );

    const maxMove = track.scrollWidth - window.innerWidth;

    target = progress * maxMove;
  }

  window.addEventListener("scroll", onScroll);

  animate();
}

function initDragScroll() {
  const track = document.getElementById("scroll-track");
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  track.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = track.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDown = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDown) return;

    const x = e.pageX;
    const walk = (x - startX) * 2;

    track.scrollLeft = scrollLeft - walk;
  });
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

    track.style.transform = `translate3d(-${current}px,0,0)`;

    updateCards();
  }
}

function initSnapSlider() {
  const track = document.getElementById("scroll-track");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  if (!track) return;

  const cards = document.querySelectorAll(".h-card");

  let currentIndex = 0;

  function update() {
    const card = cards[0];
    if (!card) return;

    const cardWidth = card.offsetWidth + 40; // gap

    const offset = currentIndex * cardWidth;

    track.style.transform = `translate3d(-${offset}px,0,0)`;

    updateEffects();
    updateButtons();
  }

  function updateEffects() {
    cards.forEach((card, index) => {
      const dist = Math.abs(index - currentIndex);

      const scale = dist === 0 ? 1 : 0.85;
      const blur = dist === 0 ? 0 : 4;

      card.style.transform = `scale(${scale})`;
      card.style.filter = `blur(${blur}px)`;
      card.style.opacity = dist > 2 ? 0.3 : 1;
    });
  }

  function updateButtons() {
    btnLeft.style.opacity = currentIndex === 0 ? 0.3 : 1;
    btnRight.style.opacity = currentIndex === cards.length - 1 ? 0.3 : 1;
  }

  btnRight.onclick = () => {
    if (currentIndex < cards.length - 1) {
      currentIndex++;
      update();
    }
  };

  btnLeft.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      update();
    }
  };

  // 👉 init
  update();
}


async function loadBackgroundVideo() {
  try {
    const data = await getVideos();

    if (!data || data.length === 0) return;

    const video = document.querySelector(".bg-video");
    const source = document.getElementById("bg-source");

    // 👉 lấy video đầu tiên
    source.src = data[0].videoBackground;

    video.load();
    video.play();

  } catch (err) {
    console.error("Load video failed", err);
  }
}