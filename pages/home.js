import { getVideos } from "../api.js";

export function Home() {
  setTimeout(loadVideos, 0);

  return `
    <!-- HERO -->
    <section class="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">

      <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black"></div>
      <div class="absolute w-[600px] h-[600px] bg-purple-500/20 blur-3xl rounded-full top-[-100px]"></div>

      <div class="relative z-10 max-w-4xl px-6">

        <img src="./images/logo.png" class="w-20 h-20 mx-auto mb-6 rounded-full"/>

        <h1 class="text-6xl font-extrabold mb-6">
          <span class="bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text text-transparent">
            YOU AI STUDIO
          </span>
        </h1>

        <p class="text-gray-400 text-lg mb-8">
          Create Cinematic AI Videos for Brands & Businesses
        </p>

        <div class="flex justify-center gap-4">
          <a href="#gallery" class="px-8 py-4 rounded-xl bg-purple-600 hover:scale-105 transition">
            View Works
          </a>

          <a href="#pricing" class="px-8 py-4 rounded-xl border border-gray-700 hover:border-purple-400 transition">
            Pricing
          </a>
        </div>

      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-20 text-center max-w-4xl mx-auto">
      <h2 class="text-3xl mb-6">About Us</h2>

      <p class="text-gray-400">
        Top creator of CapCut AI Vietnam with nearly 2 years of experience in AI video production.
      </p>

      <p class="text-gray-400 mt-4">
        We specialize in AI films, commercials, TVCs, and cinematic AI visuals.
      </p>
    </section>

    <!-- VIDEO PREVIEW -->
    <section class="px-10 py-20">
      <h2 class="text-3xl mb-10 text-center font-semibold">
        🎬 Our Works
      </h2>

      <div id="video-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ⏳ Loading...
      </div>
    </section>

    <!-- SERVICES -->
    <section class="px-10 py-20">
      <h2 class="text-3xl mb-12 text-center">
        Our Services
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        ${featureCard("⚡ Basic Video", "Simple commercial AI video")}
        ${featureCard("🎬 Story Video", "Video with storytelling")}
        ${featureCard("🎨 Premium Film", "Cinematic AI production")}
      </div>
    </section>

    <!-- PRICING -->
    <section id="pricing" class="px-10 py-20">
      <h2 class="text-3xl text-center mb-12">Pricing Plans</h2>

      <div class="grid md:grid-cols-3 gap-8">

        ${pricingCard("Basic 01", "650.000 VND", [
          "No storyline",
          "15-30 seconds",
          "Simple commercial video",
          "1 feedback round"
        ])}

        ${pricingCard("Basic 02", "1.000.000 VND", [
          "Story-based video",
          "30-40 seconds",
          "High quality",
          "2 feedback rounds"
        ])}

        ${pricingCard("Premium", "7.500.000 VND", [
          "Cinematic short film",
          "1 - 1.5 minutes",
          "High-end production",
          "2 feedback rounds"
        ])}

      </div>
    </section>

    <!-- CTA -->
    <section class="text-center py-20">
      <h2 class="text-4xl mb-6">
        Ready to Create Your AI Video?
      </h2>

      <p class="text-gray-400 mb-8">
        Contact us today and bring your ideas to life
      </p>

      <a class="px-10 py-4 bg-purple-600 rounded-xl hover:scale-105 transition">
        Contact Now
      </a>
    </section>
  `;
}

async function loadVideos() {
  const grid = document.getElementById("video-grid");

  try {
    const data = await getVideos();
    grid.innerHTML = data.map(v => videoCard(v)).join("");
  } catch {
    grid.innerHTML = "❌ Failed to load";
  }
}

function videoCard(v) {
  return `
    <div class="group relative bg-black border border-purple-500/20 
                rounded-xl overflow-hidden hover:scale-105 transition">

      <video src="${v.videoUrl}" muted autoplay loop playsinline
             class="w-full h-[220px] object-cover"></video>

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div class="absolute bottom-3 left-3 text-sm">
        ${v.title}
      </div>

    </div>
  `;
}

function featureCard(icon, text) {
  return `
    <div class="p-6 border border-gray-800 rounded-xl text-center 
                hover:border-purple-500 transition">

      <div class="text-3xl mb-4">${icon}</div>
      <p class="text-gray-300">${text}</p>

    </div>
  `;
}

function pricingCard(title, price, features) {
  return `
    <div class="border border-purple-500/20 p-6 rounded-xl">

      <h3 class="text-xl mb-2">${title}</h3>
      <p class="text-2xl text-purple-400 mb-4">${price}</p>

      <ul class="text-gray-400 mb-6">
        ${features.map(f => `<li>✔ ${f}</li>`).join("")}
      </ul>

      <button class="w-full py-2 bg-purple-600 rounded-lg">
        Choose Plan
      </button>

    </div>
  `;
}