import { html } from '../lib/lit-html.js';


const blogTemplate = () => html`<h1 class="blog">Няма статии</h1>`;

export function showBlog(ctx) {
  ctx.render(blogTemplate());
}