// grab DOM elements
const topTextInput = document.getElementById('top-text-input');
const topTextDisplay = document.getElementById('top-text');

// Constants
// Grab values populated by html load so we don't duplicate definitions.
const topTextDefault = topTextDisplay.textContent;

// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
topTextInput.addEventListener('input', () => {
    if (topTextInput.value) {
        topTextDisplay.textContent = topTextInput.value;
        topTextDisplay.classList.remove('placeholder');
    } else {
        topTextDisplay.textContent = topTextDefault;
        topTextDisplay.classList.add('placeholder');
    }
});
