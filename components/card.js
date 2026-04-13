export function VideoCard(v) {
  return `
    <div class="bg-black border border-purple-500/20 p-3 rounded-xl 
                hover:scale-105 hover:border-purple-400 transition">

      <video muted autoplay loop 
             src="${v.videoUrl}" 
             class="w-full rounded-lg"></video>

      <p class="mt-2 text-sm text-gray-300">${v.prompt}</p>
    </div>
  `;
}