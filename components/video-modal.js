export function VideoModal(){

  return `

    <div
      id="video-modal"
      class="video-modal"
    >

      <!-- overlay -->
      <div
        class="video-modal-overlay"
        onclick="closeVideoModal()"
      ></div>

      <!-- content -->
      <div class="video-modal-content">

        <button
          class="video-modal-close"
          onclick="closeVideoModal()"
        >
          ✕
        </button>

        <video
          id="video-modal-player"
          controls
          autoplay
          playsinline
        >
        </video>

      </div>

    </div>

  `;
}