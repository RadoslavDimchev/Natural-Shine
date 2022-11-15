import { html, render } from '../dom.js';


export function showBlog() {
  render(blogTemplate(), document.querySelector('main'));
}

const blogTemplate = () => html`<h1 class="blog">Няма статии</h1>`;