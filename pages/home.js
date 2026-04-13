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
            Create Cinematic AI Videos
          </span>
        </h1>

        <p class="text-gray-400 text-lg mb-8">
          Generate Hollywood-quality videos with AI in seconds
        </p>

        <div class="flex justify-center gap-4">
          <a href="#gallery" class="px-8 py-4 rounded-xl bg-purple-600 hover:scale-105 transition">
            Start Creating
          </a>

          <a href="#gallery" class="px-8 py-4 rounded-xl border border-gray-700 hover:border-purple-400 transition">
            Explore Gallery
          </a>
        </div>

      </div>

    </section>

    <!-- SOCIAL PROOF -->
    <section class="py-10 text-center text-gray-500">
      <p class="mb-4">Trusted by creators worldwide</p>

      <div class="flex justify-center gap-10 opacity-60 text-sm">
        <span>Netflix</span>
        <span>Adobe</span>
        <span>TikTok</span>
        <span>YouTube</span>
      </div>
    </section>

    <!-- VIDEO PREVIEW -->
    <section class="px-10 py-20">

      <h2 class="text-3xl mb-10 text-center font-semibold">
        🎬 Trending Cinematic Videos
      </h2>

      <div id="video-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ⏳ Loading...
      </div>

    </section>

    <!-- FEATURES -->
    <section class="px-10 py-20">

      <h2 class="text-3xl mb-12 text-center">
        Powerful AI Video Tools
      </h2>

      <div class="grid md:grid-cols-3 gap-8">

        ${featureCard("⚡ Fast Generation", "Create videos in seconds")}
        ${featureCard("🎬 Cinematic Quality", "Hollywood-style visuals")}
        ${featureCard("🎨 Style Control", "Customize mood and lighting")}

      </div>

    </section>

    <!-- CTA -->
    <section class="text-center py-20">

      <h2 class="text-4xl mb-6 font-bold">
        Start Creating Today
      </h2>

      <p class="text-gray-400 mb-8">
        Join thousands of creators using AI to produce cinematic videos
      </p>

      <a href="#gallery" class="px-10 py-4 rounded-xl bg-purple-600 hover:scale-105 transition">
        Get Started
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