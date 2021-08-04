import { createElement } from '../utils/createElement';
import { createCharacterCard } from './components/characterCard/characterCard';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const character1 = {
  name: 'Beebo',
  status: 'Dead',
  species: 'Alien',
  origin: "Morty's Mind Blowers",
  location: 'Venzenulon 7',
  image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
};

const character2 = {
  name: 'Evil Beth Clone',
  status: 'Dead',
  species: 'Human',
  origin: 'unknown',
  location: 'Earth (C-137)',
  image: 'https://rickandmortyapi.com/api/character/avatar/116.jpeg',
};

const character3 = {
  name: 'Rick Sanchez',
  status: 'Dead',
  species: 'Human',
  origin: 'Earth (Replacement Dimension)',
  location: 'Earth (Replacement Dimension)',
  image: 'https://rickandmortyapi.com/api/character/avatar/293.jpeg',
};

const character4 = {
  name: 'Riq IV',
  status: 'Dead',
  species: 'Human',
  origin: 'unknown',
  location: 'Citadel of Ricks',
  image: 'https://rickandmortyapi.com/api/character/avatar/295.jpeg',
};

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
        createCharacterCard(character1),
        createCharacterCard(character2),
        createCharacterCard(character3),
        createCharacterCard(character4),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(main);
}
