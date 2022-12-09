import { html } from '../lib/lit-html.js';
import { collections } from '../api/data.js';


const cardTemplate = (a, id) => html`
<div class="box">
    <div class="image">
        <img src=${a.img} alt="">
        <div class="icons">
            <a href=${`/catalog/${id}/${a.id}`} class="cart-btn">Детайли</a>
        </div>
    </div>
    <div class="content">
        <h3>${a.title}</h3>
        <div class="price">${a.price}</div>
    </div>
</div>`;

const catalogTemplate = (c) => html`
<section class="products" id="products">
    <h1 class="heading"> ${c[0].firstT} <span>${c[0].secondT}</span> </h1>
    <div class="box-container">${c[0].article.map(a => cardTemplate(a, c[0].id))}</div>
</section>
<section class="products" id="products">
    <h1 class="heading"> ${c[1].firstT} <span>${c[1].secondT}</span> </h1>
    <div class="box-container">${c[1].article.map(a => cardTemplate(a, c[1].id))}</div>
</section>`;

export function showCatalog(ctx) {
    ctx.render(catalogTemplate(collections));
}