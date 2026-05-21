export function VideoModal(){

  return `

    <!-- ================================================= -->
<!-- VIDEO MODAL -->
<!-- ================================================= -->

<div id="video-modal" class="video-modal hidden">

  <!-- overlay -->
  <div
    class="video-modal-overlay"
    onclick="closeVideoModal()"
  ></div>

  <!-- modal -->
  <div class="video-modal-shell">

    <!-- close -->
    <button
      class="video-modal-close"
      onclick="closeVideoModal()"
    >
      ✕
    </button>

    <!-- LEFT -->
    <div class="video-modal-left">

      <video
        id="modal-video"
        controls
        autoplay
        playsinline
      ></video>

    </div>

    <!-- RIGHT -->
    <div class="video-modal-right">

      <span class="video-modal-tag">
        AI CINEMA
      </span>

      <h2 id="modal-title">
        Video Title
      </h2>

      <p id="modal-description">
        Video description...
      </p>

      <!-- extra info -->
      <div class="video-modal-meta">

        <div class="video-meta-item">

          <span>Category</span>

          <h4>
            AI Film
          </h4>

        </div>

        <div class="video-meta-item">

          <span>Quality</span>

          <h4>
            4K Cinematic
          </h4>

        </div>

        <div class="video-meta-item">

          <span>Production</span>

          <h4>
            YOU AI Studio
          </h4>

        </div>

      </div>

    </div>

  </div>

</div>

  `;
}