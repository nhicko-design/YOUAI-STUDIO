export function initCommercialPlayer(){

  const mainVideo =
    document.getElementById(
      "commercial-main-video"
    );

  const mainSource =
    document.getElementById(
      "commercial-main-source"
    );

  const mainTitle =
    document.getElementById(
      "commercial-main-title"
    );

  const thumbs =
    document.querySelectorAll(
      ".commercial-thumb"
    );

  if(
    !mainVideo ||
    !mainSource ||
    !mainTitle
  ) return;

  thumbs.forEach(thumb => {

    thumb.addEventListener(
      "click",
      () => {

        // active state
        thumbs.forEach(t =>
          t.classList.remove("active")
        );

        thumb.classList.add("active");

        // change video
        const video =
          thumb.dataset.video;

        const title =
          thumb.dataset.title;

        mainSource.src = video;

        mainVideo.load();

        mainVideo.play();

        // title
        mainTitle.textContent =
          title;

      }
    );

  });

}