// JavaScript for Music Player

const audio = document.getElementById('audio');
const playpauseBtn = document.getElementById('playpause');
const stopBtn = document.getElementById('stop');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playlist = document.querySelectorAll('.playlist li');

let isPlaying = false;
let currentTrack = 0;

// Play/Pause button click event
playpauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playpauseBtn.innerText = 'Play';
    } else {
        audio.play();
        isPlaying = true;
        playpauseBtn.innerText = 'Pause';
    }
});

// Stop button click event
stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playpauseBtn.innerText = 'Play';
});

// Previous button click event
prevBtn.addEventListener('click', () => {
    if (currentTrack > 0) {
        currentTrack--;
        loadTrack(currentTrack);
    }
});

// Next button click event
nextBtn.addEventListener('click', () => {
    if (currentTrack < playlist.length - 1) {
        currentTrack++;
        loadTrack(currentTrack);
    }
});

// Load a track from the playlist
function loadTrack(trackIndex) {
    const track = playlist[trackIndex];
    const trackSrc = track.getAttribute('data-src');

    audio.src = trackSrc;
    audio.play();
    isPlaying = true;
    playpauseBtn.innerText = 'Pause';
}

// Add click event listeners to playlist items
playlist.forEach((track, index) => {
    track.addEventListener('click', () => {
        loadTrack(index);
        currentTrack = index;
    });
});

// Load the first track on page load
loadTrack(currentTrack);
