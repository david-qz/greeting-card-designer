// grab DOM elements
const topTextInput = document.getElementById('top-text-input');
const topTextDisplay = document.getElementById('top-text');

const bottomTextInput = document.getElementById('bottom-text-input');
const bottomTextDisplay = document.getElementById('bottom-text');

const imageSelect = document.getElementById('image-select');
const imageDisplay = document.getElementById('card-image');

// Constants
// Grab values populated by html load so we don't duplicate definitions.
const topTextDefault = topTextDisplay.textContent;
const bottomTextDefault = bottomTextDisplay.textContent;

function setTextOrDefault(element, value, def) {
    if (value) {
        element.innerText = value;
        element.classList.remove('placeholder');
    } else {
        element.innerText = def;
        element.classList.add('placeholder');
    }
}

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
topTextInput.addEventListener('input', () => {
    setTextOrDefault(topTextDisplay, topTextInput.value, topTextDefault);
});

bottomTextInput.addEventListener('input', () => {
    setTextOrDefault(bottomTextDisplay, bottomTextInput.value, bottomTextDefault);
});

imageSelect.addEventListener('change', () => {
    const imagePath = 'assets/card-images/' + imageSelect.value;
    imageDisplay.src = imagePath;
});
