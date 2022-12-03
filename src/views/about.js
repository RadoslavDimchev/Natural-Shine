import { html } from '../lib.js';


const aboutTemplate = () => html`<h1 class="about">Няма информация</h1>`;

export function showAbout(ctx) {
  ctx.render(aboutTemplate());
}