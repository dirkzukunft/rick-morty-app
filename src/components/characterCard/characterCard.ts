import { createElement } from '../../../utils/createElement';
import './characterCard.css';

export function createCharacterCard(character) {
  return createElement('article', {
    className: 'characterCard',
    childElements: [
      createElement('img', { src: character.image }),
      createElement('div', {
        childElements: [
          createElement('h3', { innerText: character.name }),
          createElement('p', {
            innerText: `${character.status} - ${character.species}`,
          }),
          createElement('p', {
            innerText: 'Last known location:',
            className: 'caption',
          }),
          createElement('p', { innerText: character.location.name }),
          createElement('p', {
            innerText: 'First seen in:',
            className: 'caption',
          }),
          createElement('p', { innerText: character.origin.name }),
        ],
      }),
    ],
  });
}
