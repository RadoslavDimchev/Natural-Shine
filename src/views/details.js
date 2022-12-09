import { html } from '../lib/lit-html.js';
import { collections } from '../api/data.js';


const detailsTemplate = (a) => html`
<section class="details">
  <div class="wrapper">
    <div class="product-img">
      <img src="${a.img}" height="420" width="327">
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>${a.title}</h1>
        <div class="price">${a.price}</div>
        <p>${a.description}</p>
      </div>
      <div class="back-btn">
        <a class="btn" href="/catalog" type="button">Назад</a>
      </div>
    </div>
  </div>
</section>`;

export function showDetails(ctx) {
  const colId = Number(ctx.params.colId);
  const id = ctx.params.id;
  const a = collections[colId].article.find(o => o.id === id);
  ctx.render(detailsTemplate(a));
}