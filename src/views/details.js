import { html, render } from '../dom.js';


let ctx = null;

const detailsTemplate = (a) => html`
<section class="details">
<div class="wrapper">
    <div class="product-img">
      <img src="${a.img}" height="420" width="327">
    </div>
    <div class="product-info">
      <div class="product-text">
        <h1>${a.title}</h1>
        <p>${a.description}</p>
      </div>
      <div class="back-btn">
        <button @click=${() => ctx.goTo('/catalog')} type="button">Назад</button>
      </div>
    </div>
  </div>
</section>`;

export function showDetails(context, a) {
  ctx = context;
  render(detailsTemplate(a), document.querySelector('main'));
}