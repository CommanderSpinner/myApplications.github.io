console.log("MP3 player script is loaded");

const fileInput = document.getElementById('files');
const audioPlayer = document.getElementById('audioPlayer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const skipButton = document.getElementById('skipButton');
let currentFileIndex = 0;
let audioFiles = [];

// Handle file upload
fileInput.addEventListener('change', () => {
    audioFiles = Array.from(fileInput.files);
    if (audioFiles.length > 0) {
        loadAudioFile(audioFiles[currentFileIndex]);
        startButton.disabled = false; // Enable the Start button
        stopButton.disabled = false;  // Enable the Stop button
        skipButton.disabled = false; // Enable the Skip button
    } else {
        console.error("No file selected");
    }
});

// Load and set audio file
function loadAudioFile(file) {
    const objectURL = URL.createObjectURL(file);
    audioPlayer.src = objectURL;
}

// Skip to the next track
skipButton.addEventListener('click', () => {
    if (audioFiles.length > 0) {
        currentFileIndex = (currentFileIndex + 1) % audioFiles.length; // Loop back to the first file if at the end
        loadAudioFile(audioFiles[currentFileIndex]);
        audioPlayer.play();
    }
});

// Toggle between files when they finish
audioPlayer.addEventListener('ended', () => {
    currentFileIndex = (currentFileIndex + 1) % audioFiles.length;
    loadAudioFile(audioFiles[currentFileIndex]);
    audioPlayer.play();
});
