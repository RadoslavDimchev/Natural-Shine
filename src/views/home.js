import { html } from '../lib/lit-html.js';


const homeTemplate = () => html`
<section class="home">

  <div class="content">
    <h3>Натурални продукти</h3>
    <span> Направено от нас </span>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum dolore
      assumenda iste voluptate dolorem pariatur.</p>
    <a href="/catalog" class="btn">Вижте повече</a>
  </div>

  <div class="video-view">
    <video class="video" src="assets/lavender.mp4" loop autoplay muted></video>
  </div>

</section>`;

export function showHome(ctx) {
  ctx.render(homeTemplate());
}