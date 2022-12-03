import { html } from '../lib.js';


const blogTemplate = () => html`<h1 class="blog">Няма статии</h1>`;

export function showBlog(ctx) {
  ctx.render(blogTemplate());
}