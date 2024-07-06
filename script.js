// Sample terminal commands with newlines for each line
const markdownContent = `
    // Five Year's Strong
    import { memories } from 'life';
    import { love } from 'heart';

    function fiveYearAnniversary() {

    You are the best() => 
    {
        at being my friend,
       at being my partner,
       at being my roommate
}

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
            <img src="assets/SDPhoto.jpeg" class="thumbnail" alt="San Diego Thumbnail"></span>,
            <span id="cozumel" class="interactive-button">Cozumel Photo
            <img src="assets/mexicoPhoto.jpeg" class="thumbnail" alt="Cozumel Thumbnail"></span>,
            or <span id="cleveland" class="interactive-button">Cleveland Photo
            <img src="assets/ClevePhoto.jpeg" class="thumbnail" alt="Cleveland Thumbnail"></span>?</p>
    `;
    terminalContent.appendChild(interactivePart);

    // Add event listeners to the buttons
    document.getElementById('sanDiego').addEventListener('click', () => showMedia("assets/SDPhoto.jpeg"));
    document.getElementById('cozumel').addEventListener('click', () => showMedia("assets/mexicoPhoto.jpeg"));
    document.getElementById('cleveland').addEventListener('click', () => showMedia("assets/ClevePhoto.jpeg"));
}

// Function to show media
function showMedia(src) {
    // Check if there's already an image displayed
    let mediaContent = document.querySelector('.media-content');
    if (!mediaContent) {
        // Create a new media content element if it doesn't exist
        mediaContent = document.createElement('div');
        mediaContent.className = 'media-content';
        terminalContent.appendChild(mediaContent);
    }
    // Update the image source
    mediaContent.innerHTML = `<img src="${src}" alt="Selected Photo">`;

    // Add the "Do you wish to continue? Yes or No" prompt after the media
    addContinuePrompt();
}

// Function to add the "Do you wish to continue?" prompt
function addContinuePrompt() {
    // Check if there's already a continue prompt displayed
    let continuePrompt = document.querySelector('.continue-prompt');
    if (!continuePrompt) {
        // Create a new continue prompt element if it doesn't exist
        continuePrompt = document.createElement('div');
        continuePrompt.className = 'continue-prompt';
        continuePrompt.innerHTML = `
            <p>Do you wish to continue? <span id="yes" class="interactive-button">Yes</span> or <span id="no" class="interactive-button">No</span>?</p>
        `;
        terminalContent.appendChild(continuePrompt);

        // Add event listeners to the Yes and No buttons
        document.getElementById('yes').addEventListener('click', continueYes);
        document.getElementById('no').addEventListener('click', continueNo);
    }
}

// Function to handle "Yes" click
function continueYes() {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
        <div class="scene">
            <div class="ring"></div>
            <div class="comic">🥑 tl;dr Ur my PiC 🥑</div>
        </div>
    `;
    document.body.appendChild(overlay);
    document.body.classList.add('overlay-active');

    // Add ring items
    const ring = document.querySelector('.ring'); // Get the ring element
    const duration = 24; // Animation duration in seconds
    const numItems = 32; // Number of items in the ring

    // Loop to create and style each item in the ring
    for (let i = 0; i < numItems; i++) {
        const item = document.createElement('i'); // Create a new <i> element for the ring item
        const hue = i * 98; // Calculate hue for color based on the item index
        const delay = (duration / numItems) * i; // Calculate animation delay based on the item index
        const rx = Math.random() * 360; // Random rotation on X-axis
        const ry = Math.random() * 360; // Random rotation on Y-axis
        const rz = Math.random() * 360; // Random rotation on Z-axis

        // Set CSS custom properties for animation
        item.style.setProperty('--delay', `${delay}s`); // Set delay property
        item.style.setProperty('--hue', hue); // Set hue property
        item.style.setProperty('--rx', `${rx}deg`); // Set rotation X property
        item.style.setProperty('--ry', `${ry}deg`); // Set rotation Y property
        item.style.setProperty('--rz', `${rz}deg`); // Set rotation Z property

        // Set border color and box-shadow using calculated hue
        item.style.borderColor = `hsl(${hue}, 100%, 75%)`; // Set border color
        item.style.boxShadow = `0 0 1em hsl(${hue}, 100%, 75%) inset, 0 0 1em hsl(${hue}, 100%, 75%)`; // Set box-shadow
        item.style.animationDelay = `${delay}s`; // Set animation delay

        // Append item to the ring
        ring.appendChild(item); // Add the item to the ring container
    }
}

// Function to handle "No" click
function continueNo() {
    const message = document.createElement('div');
    message.className = 'message';
    message.innerHTML = `<p>Goodbye!</p>`;
    terminalContent.appendChild(message);
}

// Start the typing effect
typeEffect();
