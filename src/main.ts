import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const main = document.createElement('main');

const headline = document.createElement('h1');
headline.innerHTML = `Rick <span>and</span> Morty`;
headline.className = 'headline';

const input = document.createElement('input');
input.className = 'input';
input.placeholder = 'Search for a character...';

main.append(headline, input);

if (app !== null) {
  app.append(main);
}
