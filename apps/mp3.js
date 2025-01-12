// mp3.js

console.log("mp3 player script is laoded");

// Select the file input element
const fileInput = document.getElementById('fileInput');

// Add an event listener to handle the files when the user clicks the submit button
document.getElementById('submitButton').addEventListener('click', () => {
    // Get the selected files from the input
    const files = fileInput.files;

    if (files.length > 0) {
        console.log(`You have uploaded ${files.length} files.`);
        
        // Loop through the FileList and process each file
        Array.from(files).forEach((file, index) => {
            console.log(`File ${index + 1}:`, file);

        });
    } else {
        console.log('No files selected.');
    }
});
