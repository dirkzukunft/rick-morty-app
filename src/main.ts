import { createElement } from '../utils/createElement';
import { getCharacters } from '../utils/api';
import { Character } from './types';
import { createCharacterCard } from './components/characterCard/characterCard';
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
      oninput: loadCharacters,
    }),
    createElement('div', {
      className: 'cardGrid',
    }),
  ],
});

if (app !== null) {
  app.append(main);
  loadCharacters();
}

async function loadCharacters() {
  const searchElement = <HTMLInputElement>document.querySelector('.input');
  const cardGrid = <HTMLDivElement>document.querySelector('.cardGrid');

  const searchValue: string = searchElement.value;
  const characters: Character[] = await getCharacters(searchValue);
  const characterElements = characters.map((character) =>
    createCharacterCard(character)
  );

  cardGrid.innerHTML = '';
  cardGrid.append(...characterElements);
}
