// Sample terminal commands as a string
const markdownContent = `
// Five Year Anniversary
$ echo "You are the best"
Hello, World!

$ ls -la
total 8
drwxr-xr-x  3 user  staff  96 Jul  5 12:00 .
drwxr-xr-x  3 user  staff  96 Jul  5 12:00 ..
-rw-r--r--  1 user  staff   0 Jul  5 12:00 file.txt
`;

// Get the terminal content element
const terminalContent = document.getElementById('terminal-content');

// Convert the content string into an array of characters
const contentArray = markdownContent.split('');
let index = 0;

// Function to simulate typing effect
function typeEffect() {
    if (index < contentArray.length) {
        // Append the next character to the terminal content
        terminalContent.innerHTML += contentArray[index++];
        // Continue typing after a short delay
        setTimeout(typeEffect, 50);
    }
}

// Start the typing effect
typeEffect();
