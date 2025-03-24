const anchorEl = document.body.querySelector('#usage-anchor');
const menuEl = document.body.querySelector('#usage-menu');

anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });



const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() { // Korrigert fra 'clik' til 'click'
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

function setFontSize(size) {
    localStorage.setItem('fontSize', size);
    document.body.style.fontSize = size + 'px';
}



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
    const savedLineHeight = localStorage.getItem('lineHeight');

    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize;
    }
}