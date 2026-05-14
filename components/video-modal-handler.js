window.openVideoModal = function(videoUrl){

  const modal =
    document.getElementById("video-modal");

  const player =
    document.getElementById("video-modal-player");

  modal.classList.add("active");

  player.innerHTML = `
    <source
      src="${videoUrl}"
      type="video/mp4"
    >
  `;

  player.load();

};

window.closeVideoModal = function(){

  const modal =
    document.getElementById("video-modal");

  const player =
    document.getElementById("video-modal-player");

  modal.classList.remove("active");

  player.pause();

};