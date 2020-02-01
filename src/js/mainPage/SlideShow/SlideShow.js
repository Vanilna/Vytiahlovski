import fetchFullImage from '../../UI/fetchFullImage';

const resizeSlideShowFrame = () => {
  const slideFame = document.querySelector('.slideshow__frame');
  slideFame.style.height = `${window.innerHeight * 0.925}px`;
};

const getSlideDimensions = () => {
  const isPortrait = window.matchMedia('(orientation: portrait)').matches;
  let height = '';
  let width = '';
  if (isPortrait) {
    height = window.innerHeight;
  } else {
    width = window.innerWidth;
  }
  return { width, height };
};

const prepareFirstSlideImage = () => {
  const { width, height } = getSlideDimensions();

  fetchFullImage({
    placeholderSelector: '.slideshow__slide.placeholder',
    containerSelector: 'slideshow__slide--container',
    width,
    height,
    name: 'tetiana/53.jpg',
    attributeArray: [['alt', ' '], ['data-index', 0]],
  });
};

export const lazyLoadSlides = () => {
  const { width, height } = getSlideDimensions();
  for (let i = 1; i < 7; i++) {
    fetchFullImage({
      placeholderSelector: `.slideshow__slide.download[data-index="${i}"]`,
      width,
      height,
    });
  }
};

let nextSectionIndex = 1;
const arrow = document.querySelector('.slideshow__down-arrow');
const sections = document.querySelectorAll('section');

const handleDownArrow = () => {
  arrow.addEventListener('click', () => {
    sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' });
    if (nextSectionIndex === sections.length - 1) {
      nextSectionIndex = 0;
      arrow.classList.add('slideshow__down-arrow--backwards');
    } else {
      nextSectionIndex += 1;
      arrow.classList.remove('slideshow__down-arrow--backwards');
    }
    if (nextSectionIndex === 2) {
      arrow.classList.add('slideshow__down-arrow--mobile');
    } else if (nextSectionIndex === 0) {
      arrow.classList.remove('slideshow__down-arrow--mobile');
    }
  });
};

const initSlideshow = () => {
  resizeSlideShowFrame();
  window.addEventListener('resize', resizeSlideShowFrame);
  prepareFirstSlideImage();
  handleDownArrow();
};

export default initSlideshow;
