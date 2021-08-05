import { createElement } from '../../../utils/createElement';
import { Character } from '../../types';
import styles from './characterCard.module.css';

export function createCharacterCard({
  name,
  status,
  species,
  origin,
  location,
  image,
}: Character): HTMLElement {
  return createElement('article', {
    className: styles.card,
    childElements: [
      createElement('img', { src: image, className: styles.image }),
      createElement('div', {
        childElements: [
          createElement('h3', { innerText: name, className: styles.title }),
          createElement('p', {
            innerText: `${status} - ${species}`,
            className: styles.text,
          }),
          createElement('h6', {
            innerText: 'Last known location:',
            className: styles.caption,
          }),
          createElement('p', { innerText: location, className: styles.text }),
          createElement('h6', {
            innerText: 'First seen in:',
            className: styles.caption,
          }),
          createElement('p', { innerText: origin, className: styles.text }),
        ],
      }),
    ],
  });
}
