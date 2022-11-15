import { html, render } from '../dom.js';
import { collections } from '../api/data.js';
import { repeat } from '../../node_modules/lit-html/directives/repeat.js';


let ctx = null;

const cardTemplate = (a) => html`
<div class="box">
    <div class="image">
        <img src=${a.img} alt="">
        <div class="icons">
            <button @click=${() => ctx.goTo('/details', a)} class="cart-btn">Детайли</button>
        </div>
</div>
<div class="content">
    <h3>${a.title}</h3>
</div>
</div>`;

const catalogTemplate = (c) => html`
<section class="products" id="products">
    <h1 class="heading"> ${c.firstT} <span>${c.secondT}</span> </h1>
    <div class="box-container">${repeat(c.article, (i) => i.id , cardTemplate)}</div>
</section>`;

export function showCatalog(context) {
    ctx = context;
    render(collections.map(catalogTemplate), document.querySelector('main'));
}