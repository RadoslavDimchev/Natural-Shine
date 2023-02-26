import { html } from '../lib/lit-html.js';
import { products } from '../api/data.js';


const firstHeading = ['Baby shine - ', 'продукти за бебета'];
const secondHeading = ['Natural shine - ', 'продукти за възрастни'];
const thirdHeading = ['Natural shine - ', 'ваучери за подарък'];

const cardTemplate = (p) => html`
<div class="box">
    <div class="image">
        <img src=${p.img} alt="">
        <div class="icons">
            <a href=${`/catalog/${p.id}`} class="cart-btn">Детайли</a>
        </div>
    </div>
    <div class="content">
        <h3>${p.title}</h3>
        <div class="price">${p.price}</div>
    </div>
</div>`;

const catalogTemplate = (products) => html`
<section class="products" id="products">
    <h1 class="heading"> ${firstHeading[0]} <span>${firstHeading[1]}</span> </h1>
    <div class="box-container">${products.filter(p => p.serie === 'babyshine').map(cardTemplate)}</div>
    <h1 class="heading"> ${secondHeading[0]} <span>${secondHeading[1]}</span> </h1>
    <div class="box-container">${products.filter(p => p.serie === 'naturalshine').map(cardTemplate)}</div>
    <h1 class="heading"> ${thirdHeading[0]} <span>${thirdHeading[1]}</span> </h1>
    <div class="box-container">${products.filter(p => p.serie === 'voucher').map(cardTemplate)}</div>
</section>`;

export function showCatalog(ctx) {
    ctx.render(catalogTemplate(products));
}