import './Spinner.css';

const Spinner = (color) => {
  const container = document.createElement('div');
  container.classList.add('spinner-container');
  container.innerHTML = `<svg class="spinner" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" viewBox="0 0 250 250"><style>.a{fill:none;stroke-width:8;stroke:${color};}</style><path d="M126.1 7.7c64.2 0 116.2 52 116.2 116.2 0 64.2-52 116.2-116.2 116.2-64.2 0-116.2-52-116.2-116.2" class="a"/><path d="M220 123.9c0 51.8-42 93.8-93.8 93.8-51.8 0-93.8-42-93.8-93.8 0-51.8 42-93.8 93.8-93.8" class="a"/></svg>`;
  return container;
};

export default Spinner;
