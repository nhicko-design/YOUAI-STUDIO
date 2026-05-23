window.openVideoModal = function(
  videoUrl,
  title,
  description
){

  const modal =
    document.getElementById(
      "video-modal"
    );

  const video =
    document.getElementById(
      "modal-video"
    );

  const modalTitle =
    document.getElementById(
      "modal-title"
    );

  const modalDescription =
    document.getElementById(
      "modal-description"
    );

  if(!modal || !video)
    return;

  // decode
  title =
    decodeURIComponent(title);

  description =
    decodeURIComponent(description);

  // video
  video.src = videoUrl;

  // title
  modalTitle.textContent =
    title || "Untitled";

  // description
  modalDescription.textContent =
    description ||
    "No description available.";

  // show
  modal.classList.remove("hidden");

  // play
  video.play();

  // lock scroll
  document.body.style.overflow =
    "hidden";

};

window.closeVideoModal = function(){

  const modal =
    document.getElementById("video-modal");

  const video =
    document.getElementById("modal-video");

  if(!modal || !video)
    return;

  modal.classList.add("hidden");

  video.pause();

  video.src = "";

  document.body.style.overflow = "";

};