import { html } from '../lib/lit-html.js';
import { articles } from '../api/data.js';


const cardTemplate = (a) => html`
<div class="box">
    <div class="image">
        <img src=${a.img} alt="">
        <div class="icons">
            <a href=${`/blog/${a.id}`} class="cart-btn">Детайли</a>
        </div>
    </div>
    <div class="content">
        <h3>${a.title}</h3>
    </div>
</div>`;

const blogTemplate = (articles) => html`
<section class="products" id="products">
    <h1 class="heading"> NaturalShine <span>Blog</span> </h1>
    <div class="box-container">${articles.map(cardTemplate)}</div>
</section>`;

export function showBlog(ctx) {
    ctx.render(blogTemplate(articles));
}