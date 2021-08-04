import { createElement } from '../../../utils/createElement';
import './characterCard.css';

export function createCharacterCard(character): HTMLElement {
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
          createElement('h6', {
            innerText: 'Last known location:',
          }),
          createElement('p', { innerText: character.location.name }),
          createElement('h6', {
            innerText: 'First seen in:',
          }),
          createElement('p', { innerText: character.origin.name }),
        ],
      }),
    ],
  });
}
