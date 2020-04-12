const playBtn = document.querySelector('#playBtn');
const volumeBtn = document.querySelector('#volumeBtn');
const volume = document.querySelector('#volume');
const player = document.querySelector('#player');
const track = document.querySelector('#track');
const screenPlay = document.querySelector('.screen-play');

player.ontimeupdate = trackUpdate;
track.onclick = videoRewind;

function trackUpdate() {
  let d = player.duration;
  let c = player.currentTime;
  track.value = 100*c/d;
}

function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
  this.value = 100*o/w;
  player.pause();
  player.currentTime = player.duration * (o / w);
  player.play();
}

playBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (player.paused) {
    player.play();
    screenPlay.style.display = 'none';

  } else {
    player.pause();
    screenPlay.style.display = 'inherit';
  }
})

screenPlay.addEventListener('click', function (e) {
  e.preventDefault();

  player.play();
  screenPlay.style.display = 'none';
})

volumeBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (player.muted === true) {
    player.muted = false;

  } else {
    player.muted = true;
  }
})

volume.addEventListener('input', function () {      
  player.volume = volume.value;
})