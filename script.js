// script.js
// terminal commands with newlines for each line
const markdownContent = `
    // Five Year Anniversary
    You are the best
        at being my friend,
       at being my partner,
       at being my roommate

     const Jocelyn = true;
     const result = Jocelyn
        ? 'Ride'
        : 'Die'

     const message = 
        'You are so patient and
        so kind and everything that
        I could ask for in this
        ridiculous construct that
        is a legally binding life-long
        commitment that is marriage.'
`;


// Get the terminal content element
const terminalContent = document.getElementById('terminal-content');

// Split the content into lines and characters
const contentArray = markdownContent.split('');
let index = 0;

// Function to simulate typing effect
function typeEffect() {
    if (index < contentArray.length) {
        // Append the next character to the terminal content
        terminalContent.innerHTML += contentArray[index] === '\n' ? '<br>' : contentArray[index];
        index++;
        // Continue typing after a short delay
        setTimeout(typeEffect, 50);
    }
}

// Start the typing effect
typeEffect();
