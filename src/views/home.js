import { html, render } from '../dom.js';


export function showHome(ctx) {
  render(homeTemplate(ctx), document.querySelector('main'));
}

const homeTemplate = (ctx) => html`
<section class="home">

<div class="content">
  <h3>Натурални продукти</h3>
  <span> Направено от нас </span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum dolore
    assumenda iste voluptate dolorem pariatur.</p>
  <button @click="${() => ctx.goTo('/catalog')}" href="/catalog" class="btn">Вижте повече</button>
</div>

<div class="video-view">
  <video class="video" src="assets/lavender.mp4" loop autoplay muted></video>
</div>

</section>`;