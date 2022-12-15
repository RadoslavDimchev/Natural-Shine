import { html } from '../lib/lit-html.js';


const aboutTemplate = () => html`
<div class="about">
  <p>Ние сме УТФ "Естествен блясък" ООД от град Сандански</p>
</div>`;

export function showAbout(ctx) {
  ctx.render(aboutTemplate());
}