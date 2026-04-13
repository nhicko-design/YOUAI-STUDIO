import { getVideos } from "../api.js";

export function Home() {
  setTimeout(loadVideos, 0);

  return `
    <section class="px-10 py-20 text-center">
      <h1 class="text-5xl mb-10">🎬 AI Cinematic</h1>

      <div id="video-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ⏳ Loading videos...
      </div>
    </section>
  `;
}

async function loadVideos() {
  const grid = document.getElementById("video-grid");

  try {
    const data = await getVideos();

    grid.innerHTML = data.map(v => videoCard(v)).join("");
  } catch (err) {
    grid.innerHTML = "❌ Failed to load videos";
    console.error(err);
  }
}

function videoCard(v) {
  return `
    <div class="group relative bg-black border border-purple-500/20 
                rounded-xl overflow-hidden hover:scale-105 transition duration-300">

      <video 
        src="${v.videoUrl}" 
        muted 
        autoplay 
        loop 
        playsinline
        class="w-full h-[220px] object-cover">
      </video>

      <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      <div class="absolute bottom-3 left-3 text-sm text-white">
        ${v.title}
      </div>

    </div>
  `;
}