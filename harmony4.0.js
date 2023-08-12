function playSong(songSrc) {
  var audioPlayer = document.getElementById("audio-player");
  audioPlayer.src = songSrc;
  audioPlayer.play();
}
function displayAlbumArt(albumArtSrc) {
  var turntableImg = document.querySelector('.albumart');
  turntableImg.src = albumArtSrc;
}

document.addEventListener("DOMContentLoaded", function () {
  var firstSongImage = document.querySelector(".song img");
  var vinylImg = document.querySelector(".albumart");
  vinylImg.src = firstSongImage.src;
  updateTrackDetails(trackInfoAloneAgain);
});

function playSong(songSrc, trackInfo) {
  var audioPlayer = document.getElementById("audio-player");
  audioPlayer.src = songSrc;
  audioPlayer.play();

  updateTrackDetails(trackInfo);
}

function updateTrackDetails(trackInfo) {
  document.getElementById("track-name").textContent = "" + trackInfo.trackName;
  document.getElementById("album-name").textContent = "" + trackInfo.albumName;
  document.getElementById("artist-name").textContent = "" + trackInfo.artistName;
  document.getElementById("release-year").textContent = "" + trackInfo.releaseYear;
  document.getElementById("track-duration").textContent = "" + trackInfo.trackDuration;
}

var trackInfoAloneAgain = {
  trackName: "Alone Again",
  albumName: "After Hours",
  artistName: "The Weeknd",
  releaseYear: "2020",
  trackDuration: "4:10",
};

var trackInfoAntihero = {
  trackName: "Anti-hero",
  albumName: "Midnights",
  artistName: "Taylor Swift",
  releaseYear: "2022",
  trackDuration: "3:20",
};

var trackInfoAttention = {
  trackName: "Attention",
  albumName: "Voicenotes",
  artistName: "Charlie Puth",
  releaseYear: "2018",
  trackDuration: "3:28",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBetter_Now = {
  trackName: "Better Now",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

var trackInfoBad_Habits = {
  trackName: "Bad Habits",
  albumName: "=",
  artistName: "Ed Sheeran",
  releaseYear: "2021",
  trackDuration: "3:51",
};

const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
let menuOpen = false;

function openSidebar() {
  menuBtn.classList.add('open');
  sidebar.style.right = '0';
  menuOpen = true;
}

function closeSidebar() {
  menuBtn.classList.remove('open');
  sidebar.style.right = '-250px';
  menuOpen = false;
}

function toggleSidebarVisibility() {
  if (window.innerWidth <= 686) {
    sidebar.classList.add('show-sidebar');
  } else {
    sidebar.classList.remove('show-sidebar');
    closeSidebar();
  }
}

toggleSidebarVisibility();

window.addEventListener('resize', () => {
  toggleSidebarVisibility();

  if (window.innerWidth > 668) {
    closeSidebar();
  }
});

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    openSidebar();
  } else {
    closeSidebar();
  }
});

document.addEventListener('click', (event) => {
  if (menuOpen && !sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
    closeSidebar();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
    const img = container.querySelector('img');
    img.onload = function () {
      container.classList.add('loaded');
    };
  });
});




