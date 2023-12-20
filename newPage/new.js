const audio = document.getElementById('audioControl');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});