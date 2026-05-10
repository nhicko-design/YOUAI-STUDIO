export function VideoCard(video) {

  return `
  
    <div class="showreel-card">

      <video
        class="hover-video"
        muted
        loop
        playsinline
      >

        <source
          src="${video.url}"
          type="video/mp4"
        >

      </video>

      <div class="showreel-dark"></div>

      <div class="video-info">

        <div class="video-label">
          AI FILM
        </div>

        <h3 class="video-title">
          ${video.title}
        </h3>

      </div>

    </div>

  `;
}