import { createElement } from '../utils/createElement';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const main = createElement('main', {
  childElements: [
    createElement('h1', {
      innerHTML: 'Rick <span>and</span> Morty',
      className: 'headline',
    }),
    createElement('input', {
      className: 'input',
      placeholder: 'Search for a character...',
    }),
  ],
});

if (app !== null) {
  app.append(main);
}
