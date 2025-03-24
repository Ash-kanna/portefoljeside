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

function applySavedPreferences() {
    const savedFontSize = localStorage.getItem('fontSize');
    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize + 'px';
    }
}
