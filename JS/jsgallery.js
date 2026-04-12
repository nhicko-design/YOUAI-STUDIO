const JSON_URL = "https://raw.githubusercontent.com/yourname/repo/main/data.json";

async function loadGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "⏳ Loading...";

  try {
    const res = await fetch(JSON_URL);
    const data = await res.json();

    gallery.innerHTML = data.map(v => `
      <div class="bg-gray-900 p-3 rounded-xl hover:scale-105 transition">
        <video controls src="${v.videoUrl}" class="w-full rounded-lg"></video>
        <p class="mt-2 text-sm text-gray-300">${v.prompt}</p>
      </div>
    `).join("");

  } catch {
    gallery.innerHTML = "❌ Failed to load data";
  }
}

loadGallery();