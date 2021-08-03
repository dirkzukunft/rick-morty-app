import { createElement } from '../utils/createElement';
import { characterCard } from './components/characterCard/characterCard';
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const character1 = {
  id: 33,
  name: 'Beebo',
  status: 'Dead',
  species: 'Alien',
  type: '',
  gender: 'Male',
  origin: {
    name: "Morty's Mind Blowers",
    url: 'https://rickandmortyapi.com/api/location/10',
  },
  location: {
    name: 'Venzenulon 7',
    url: 'https://rickandmortyapi.com/api/location/10',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/33.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/29'],
  url: 'https://rickandmortyapi.com/api/character/33',
  created: '2017-11-05T09:21:55.595Z',
};

const character2 = {
  id: 116,
  name: 'Evil Beth Clone',
  status: 'Dead',
  species: 'Human',
  type: 'Clone',
  gender: 'Female',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/116.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/5'],
  url: 'https://rickandmortyapi.com/api/character/116',
  created: '2017-12-26T16:10:47.781Z',
};

const character3 = {
  id: 293,
  name: 'Rick Sanchez',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  location: {
    name: 'Earth (Replacement Dimension)',
    url: 'https://rickandmortyapi.com/api/location/20',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/293.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/6'],
  url: 'https://rickandmortyapi.com/api/character/293',
  created: '2017-12-31T20:22:29.032Z',
};

const character4 = {
  id: 295,
  name: 'Riq IV',
  status: 'Dead',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'unknown',
    url: '',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/295.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/11',
    'https://rickandmortyapi.com/api/episode/22',
  ],
  url: 'https://rickandmortyapi.com/api/character/295',
  created: '2017-12-31T20:25:28.554Z',
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
        characterCard(character1),
        characterCard(character2),
        characterCard(character3),
        characterCard(character4),
      ],
    }),
  ],
});

if (app !== null) {
  app.append(main);
}
