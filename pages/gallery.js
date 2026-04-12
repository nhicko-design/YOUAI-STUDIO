import { getVideos } from "../api.js";
import { VideoCard } from "../components/card.js";

export function Gallery() {
  setTimeout(loadVideos, 0);

  return `
    <div class="p-6">
      <h1 class="text-3xl mb-6">Gallery</h1>
      <div id="grid" class="grid grid-cols-3 gap-6">
        ⏳ Loading...
      </div>
    </div>
  `;
}

async function loadVideos() {
  const grid = document.getElementById("grid");

  try {
    const data = await getVideos();

    grid.innerHTML = data.map(VideoCard).join("");
  } catch {
    grid.innerHTML = "❌ Failed to load";
  }
}