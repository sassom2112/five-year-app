// terminal commands with newlines for each line
const markdownContent = `
    // Five Year Anniversary
    import { memories } from 'life';
    import { love } from 'heart';

    function fiveYearAnniversary() {

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
};

export default fiveYearAnniversary;
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
    } else {
        // Add interactive part after the typing effect is done
        addInteractivePart();
    }
}

// Function to add interactive part
function addInteractivePart() {
    const interactivePart = document.createElement('div');
    interactivePart.className = 'interactive';
    interactivePart.innerHTML = `
        <p>Do you want to see a <span id="sanDiego" class="interactive-button">San Diego Photo
            <img src="/assets/SDPhoto.jpeg" class="thumbnail" alt="San Diego Thumbnail"></span>,
            <span id="cozumel" class="interactive-button">Cozumel Photo
            <img src="/assets/mexicoPhoto.jpeg" class="thumbnail" alt="Cozumel Thumbnail"></span>,
            or <span id="cleveland" class="interactive-button">Cleveland Photo
            <img src="/assets/ClevePhoto.jpeg" class="thumbnail" alt="Cleveland Thumbnail"></span>?</p>
    `;
    terminalContent.appendChild(interactivePart);

    // Add event listeners to the buttons
    document.getElementById('sanDiego').addEventListener('click', () => showMedia('/assets/SDPhoto.jpeg'));
    document.getElementById('cozumel').addEventListener('click', () => showMedia('/assets/mexicoPhoto.jpeg'));
    document.getElementById('cleveland').addEventListener('click', () => showMedia('/assets/ClevePhoto.jpeg'));
}

// Function to show media
function showMedia(src) {
    const mediaContent = document.createElement('div');
    mediaContent.className = 'media-content';
    mediaContent.innerHTML = `<img src="${src}" alt="Selected Photo">`;
    terminalContent.appendChild(mediaContent);
}

// Start the typing effect
typeEffect();
