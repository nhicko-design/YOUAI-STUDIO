import { getVideos } from "../api.js";

export function Home() {
  setTimeout(() => {
    loadVideos();
    initAnimations();
  }, 0);

  return `
    <!-- HERO -->
    <section class="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>

      <div class="glow absolute w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full top-[-100px]"></div>

      <div class="relative z-10 max-w-4xl px-6 fade-in">

        <img src="./images/logo.png" class="w-20 h-20 mx-auto mb-6 rounded-full"/>

        <h1 class="text-6xl font-extrabold mb-6 gradient-text">
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

    <section class="horizontal-section">

      <div class="sticky-wrapper">
        <div class="scroll-track" id="scroll-track">

          ${videoHorizontal()}
          ${videoHorizontal()}
          ${videoHorizontal()}
          ${videoHorizontal()}

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

  try {
    const data = await getVideos();
    grid.innerHTML = data.map(videoCard).join("");
  } catch {
    grid.innerHTML = "❌ Failed to load";
  }
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