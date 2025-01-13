// mp3.js

console.log("mp3 player script is laoded");

const fileInput = document.getElementById('files');
const audioPlayer = document.getElementById('audioPlayer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Handle file upload
fileInput.addEventListener('change', () => {
    for (const file of fileInput.files){
        if (file) {
        const objectURL = URL.createObjectURL(file);
        audioPlayer.src = objectURL;
        startButton.disabled = false; // Enable the Start button
        stopButton.disabled = false;  // Enable the Stop button
        } else {
        console.error("No file selected");
        }
    } 
  });

// Start playback
startButton.addEventListener('click', () => {
    if (audioPlayer.src) {
      audioPlayer.play();
    }
  });

  // Stop playback
  stopButton.addEventListener('click', () => {
    if (audioPlayer.src) {
      audioPlayer.pause();
      audioPlayer.currentTime = 0; // Reset playback to the beginning
    }
});
