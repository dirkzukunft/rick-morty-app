import { createElement } from '../../../utils/createElement';
import { Character } from '../../types';
import './characterCard.css';

export function createCharacterCard({
  name,
  status,
  species,
  origin,
  location,
  image,
}: Character): HTMLElement {
  return createElement('article', {
    className: 'characterCard',
    childElements: [
      createElement('img', { src: image }),
      createElement('div', {
        childElements: [
          createElement('h3', { innerText: name }),
          createElement('p', {
            innerText: `${status} - ${species}`,
          }),
          createElement('h6', {
            innerText: 'Last known location:',
          }),
          createElement('p', { innerText: location }),
          createElement('h6', {
            innerText: 'First seen in:',
          }),
          createElement('p', { innerText: origin }),
        ],
      }),
    ],
  });
}
