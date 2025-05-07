import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';
document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const anchorEl = document.body.querySelector('#usage-anchor');
const menuEl = document.body.querySelector('#usage-menu');

anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });
        
function changeFontSize(action) {
    const body = document.body;
    const currentSize = window.getComputedStyle(body).fontSize;
    let newSize = parseFloat(currentSize);

    if (action === 'increase') {
        newSize += 2; // Øk med 2 piksler
    } else if (action === 'decrease') {
        newSize -= 2; // Reduser med 2 piksler
    }

    // Begrens minimum og maksimum fontstørrelse
    if (newSize < 8) newSize = 8;
    if (newSize > 50) newSize = 50;

    body.style.fontSize = newSize + 'px';
    localStorage.setItem('fontSize', newSize + 'px'); // Lagre tekststørrelse
}

function applySavedPreferences() {
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize;
    }
}

function changeFontL(action) {
    const body = document.body;
    const currentLength = window.getComputedStyle(body).lineHeight;
    let newHeight = parseFloat(currentLength);

    if (action === 'increase') {
        newHeight += 5; // Increase by 5 pixels
    } else if (action === 'decrease') {
        newHeight -= 2; // Decrease by 5 pixels
    }

    // Limit minimum and maximum line height
    if (newHeight < 30) newHeight = 30;
    if (newHeight > 40) newHeight = 40;

    body.style.lineHeight = newHeight + 'px'; // Set the new line height
    localStorage.setItem('lineHeight', newHeight + 'px'); // Save line height
}

function applySavedPreferences() {
    const savedFontLength = localStorage.getItem('lineHeight');

    if (savedFontLength) {
        document.body.style.lineHeight = savedFontLength; // Apply saved line height
    }
}