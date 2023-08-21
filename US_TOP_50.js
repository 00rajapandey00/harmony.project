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

document.addEventListener('DOMContentLoaded', () => {
  const lyricsButton = document.querySelector('.lyrics button');
  const lyricsContainer = document.querySelector('.lyrics-container');
  const songLyrics = document.getElementById('song-lyrics');

  lyricsButton.addEventListener('click', () => {
    lyricsContainer.classList.toggle('visible');
    songLyrics.classList.toggle('hidden');
  });

  fetch('US_TOP_50.json')
    .then(response => response.json())
    .then(data => {
      const songListContainer = document.querySelector('.song-container');
      const detailsTrackName = document.getElementById('details-track-name');
      const detailsAlbumName = document.getElementById('details-album-name');
      const detailsArtistName = document.getElementById('details-artist-name');
      const detailsReleaseYear = document.getElementById('details-release-year');
      const detailsTrackDuration = document.getElementById('details-track-duration');
      const albumArt = document.getElementById('album-art');

      data.forEach((song, index) => {
        const songElement = document.createElement('div');
        songElement.classList.add('song');
        songElement.innerHTML = `
      <div class="image-container">
        <img src="${song['Album Image URL']}" alt="${song.trackName}" data-track-index="${index}">
      </div>
      <div class="text">${song.trackName}</div>
    `;
        songListContainer.appendChild(songElement);

        songElement.addEventListener('click', () => {
          const audioPlayer = document.getElementById('audio-player');
          audioPlayer.src = song.trackLink;
          audioPlayer.play();

          detailsTrackName.textContent = song.trackName;
          detailsAlbumName.textContent = song.albumName;
          detailsArtistName.textContent = song.artistName;
          detailsReleaseYear.textContent = song.releaseYear;
          const durationInSeconds = Math.floor(song.trackDuration / 1000);
          const minutes = Math.floor(durationInSeconds / 60);
          const seconds = durationInSeconds % 60;
          detailsTrackDuration.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

          albumArt.src = song['Album Image URL'];
          songLyrics.textContent = song.lyrics;
        });
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});