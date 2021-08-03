import { createElement } from '../utils/createElement';
import { characterCard } from './components/characterCard/characterCard';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const main = createElement('main', {
  childElements: [
    createElement('h1', {
      innerHTML: 'Rick <span>and</span> Morty',
    }),
    createElement('input', {
      className: 'input',
      placeholder: 'Search for a character...',
    }),
    createElement('div', {
      className: 'cardGrid',
      childElements: [
        characterCard(),
        characterCard(),
        characterCard(),
        characterCard(),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(main);
}
