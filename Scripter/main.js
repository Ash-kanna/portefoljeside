import {styles as typescaleStyles} from '@material/web/typography/md-typescale-styles.js';
document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

const anchorEl = document.body.querySelector('#usage-anchor');
const menuEl = document.body.querySelector('#usage-menu');

anchorEl.addEventListener('click', () => { menuEl.open = !menuEl.open; });