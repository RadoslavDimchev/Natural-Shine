import { html } from '../lib/lit-html.js';
import { articles } from '../api/data.js';


const detailsTemplate = (a) => html`
<section class="details">
  <div class="wrapper">
    <div class="product-img">
      <img src="${a.img}" width="320">
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>${a.title}</h1>
        <p>${a.description}</p>
      </div>
      <div class="back-btn">
        <a class="btn" href="/blog" type="button">Назад</a>
      </div>
    </div>
  </div>
</section>`;

export function showBlogDetails(ctx) {
  const id = ctx.params.id;
  const a = articles.find(a => a.id === id);
  ctx.render(detailsTemplate(a));
}