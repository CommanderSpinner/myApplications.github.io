// mp3.js

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

            // Example: Read each file content if needed
            const reader = new FileReader();

            reader.onload = (event) => {
                console.log(`Content of file ${index + 1}:`, event.target.result); // File content as string
            };

            reader.readAsText(file); // Adjust to readAsDataURL for binary or image files
        });
    } else {
        console.log('No files selected.');
    }
});
