import { html, render } from '../dom.js';


export function showAbout() {
  render(aboutTemplate(), document.querySelector('main'));
}

const aboutTemplate = () => html`<h1 class="about">Няма информация</h1>`;