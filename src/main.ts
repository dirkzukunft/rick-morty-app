import { createElement } from '../utils/createElement';
import { getCharacters } from '../utils/api';
import { createCharacterCard } from './components/characterCard/characterCard';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

// getCharacters()
//   .then((data) => console.log(data))
//   .catch(() => console.log('Error'));
const characters = await getCharacters();

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
      childElements: characters.map((character) =>
        createCharacterCard(character)
      ),
    }),
  ],
});

if (app !== null) {
  app.append(main);
}
