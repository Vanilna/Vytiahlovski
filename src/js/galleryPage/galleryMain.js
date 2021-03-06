import Gallery from './Gallery';
import '../../css/main.css';
import '../../css/gallery.css';

const getInitMenu = () => import('../commonComponents/Menu');
const getSimpleScrollbar = () => import('simple-scrollbar');
const getEmailForm = () => import('../commonComponents/EmailForm');

const location = window.location.href;
const personStartIndex = location.indexOf('#') + 1;
const person = location.slice(personStartIndex);

const personGallery = new Gallery(person);
personGallery.init();

// load Menu.js on click
const menuToggler = document.querySelector('.menu-toggler');
menuToggler.addEventListener(
  'click',
  () => {
    getInitMenu().then((module) => {
      module.default(); /* init menu */
      menuToggler.click();
    });
  },
  { once: true },
);

// lazy load rest of the code
const lazyLoadScrollBar = () => {
  import('simple-scrollbar/simple-scrollbar.css');
  const scrollbarContainer = document.querySelector('.l-content');
  getSimpleScrollbar().then((scrollBar) => scrollBar.default.initEl(scrollbarContainer));
};

// lazy load rest of the code
window.onload = () => {
  lazyLoadScrollBar();

  if (window.innerWidth <= 600) {
    getEmailForm().then((module) => {
      const EmailConstructor = module.default;
      const emailForm = new EmailConstructor('.section--contact');
      emailForm.init();
    });
  }
};
