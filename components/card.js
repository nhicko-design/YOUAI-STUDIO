export function VideoCard(v) {
  return `
    <div class="bg-gray-900 p-3 rounded-xl hover:scale-105 transition">
      <video muted autoplay loop src="${v.videoUrl}" class="w-full rounded-lg"></video>
      <p class="mt-2 text-sm text-gray-300">${v.prompt}</p>
    </div>
  `;
}