import { html } from '../lib/lit-html.js';
import { products } from '../api/data.js';


const detailsTemplate = (p) => html`
<section class="details">
  <div class="wrapper">
    <div class="product-img">
      <img src="${p.img}" width="320">
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>${p.title}</h1>
        <div class="price">${p.price}</div>
        <p>${p.description}</p>
      </div>
      <div class="back-btn">
        <a class="btn" href="/catalog" type="button">Назад</a>
      </div>
    </div>
  </div>
</section>`;

export function showDetails(ctx) {
  const id = ctx.params.id;
  const a = products.find(p => p.id === id);
  ctx.render(detailsTemplate(a));
}