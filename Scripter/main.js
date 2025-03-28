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
    } else {
        newSize -= 2; // Reduser med 2 piksler
    }

    body.style.fontSize = newSize + 'px';
    localStorage.setItem('fontSize', newSize + 'px'); // Lagre tekststørrelse
}


function applySavedPreferences() {
    const savedFontSize = localStorage.getItem('fontSize');

    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize;
    }
}