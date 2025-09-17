document.addEventListener("DOMContentLoaded", () => {
  let audio = new Audio("audio/hbd.mp3");
  audio.loop = true;

  const playBtn = document.getElementById("play-music");

  // kalau sebelumnya sudah di-play, lanjutkan
  if (localStorage.getItem("music") === "play") {
    audio.play();
    if (playBtn) playBtn.textContent = "Pause 🎶";
  }

  // tombol play/pause
  if (playBtn) {
    playBtn.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        localStorage.setItem("music", "play");
        playBtn.textContent = "Pause 🎶";
      } else {
        audio.pause();
        localStorage.setItem("music", "pause");
        playBtn.textContent = "ada musiknya cuy 😜 🎶";
      }
    });
  }
});
