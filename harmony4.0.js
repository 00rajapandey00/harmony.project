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
  const table = document.querySelector('.table');
  const detailsTextDiv = document.querySelector('.details_text');

  lyricsButton.addEventListener('click', () => {
    lyricsContainer.classList.toggle('visible');
    songLyrics.classList.toggle('hidden');
    table.classList.toggle('hidden');
    detailsTextDiv.classList.toggle('hidden');
  });

  fetch('Top30.json')
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

fetch('Featured.json')
  .then(response => response.json())
  .then(data => {
    const songListContainer = document.querySelector('.song-container-S1');
    const detailsTrackName = document.getElementById('details-track-name');
    const detailsAlbumName = document.getElementById('details-album-name');
    const detailsArtistName = document.getElementById('details-artist-name');
    const detailsReleaseYear = document.getElementById('details-release-year');
    const detailsTrackDuration = document.getElementById('details-track-duration');
    const albumArt = document.getElementById('album-art');

    data.forEach((song, index) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song1');
      const imageAnchor = document.createElement('a');
      imageAnchor.href = song.trackLink;
      const imageElement = document.createElement('img');
      imageElement.src = song['Album Image URL'];
      imageElement.alt = song.trackName;
      imageElement.setAttribute('data-track-index', index);
      imageAnchor.appendChild(imageElement);
      const imageContainer = document.createElement('div');
      imageContainer.classList.add('image-container');
      imageContainer.appendChild(imageAnchor);
      const textElement = document.createElement('div');
      textElement.classList.add('text1');
      textElement.textContent = song.trackName;
      songElement.appendChild(imageContainer);
      songElement.appendChild(textElement);
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
      songListContainer.appendChild(songElement);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

fetch('Recommended.json')
  .then(response => response.json())
  .then(data => {
    const songListContainer = document.querySelector('.song-container-S2');
    const detailsTrackName = document.getElementById('details-track-name');
    const detailsAlbumName = document.getElementById('details-album-name');
    const detailsArtistName = document.getElementById('details-artist-name');
    const detailsReleaseYear = document.getElementById('details-release-year');
    const detailsTrackDuration = document.getElementById('details-track-duration');
    const albumArt = document.getElementById('album-art');

    data.forEach((song, index) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song1');
      songElement.innerHTML = `
      <div class="image-container1">
        <img src="${song['Album Image URL']}" alt="${song.trackName}" data-track-index="${index}">
      </div>
      <div class="text1">${song.trackName}</div>
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

fetch('Recommended.json')
  .then(response => response.json())
  .then(data => {
    const songListContainer = document.querySelector('.song-container-S3');
    const detailsTrackName = document.getElementById('details-track-name');
    const detailsAlbumName = document.getElementById('details-album-name');
    const detailsArtistName = document.getElementById('details-artist-name');
    const detailsReleaseYear = document.getElementById('details-release-year');
    const detailsTrackDuration = document.getElementById('details-track-duration');
    const albumArt = document.getElementById('album-art');

    data.forEach((song, index) => {
      const songElement = document.createElement('div');
      songElement.classList.add('song1');
      songElement.innerHTML = `
      <div class="image-container1">
        <img src="${song['Album Image URL']}" alt="${song.trackName}" data-track-index="${index}">
      </div>
      <div class="text1">${song.trackName}</div>
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





