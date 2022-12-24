import { html } from '../lib/lit-html.js';


const homeTemplate = () => html`
<section class="home">

  <div class="content">
    <h3>Натурални продукти</h3>
    <span> Направени от нас </span>
    <p>Nature is what gives us life!</p>
    <a href="/catalog" class="btn">Вижте повече</a>
  </div>

  <div class="video-view">
    <video class="video" src="assets/lavender.mp4" loop autoplay muted></video>
  </div>

</section>`;

export function showHome(ctx) {
  ctx.render(homeTemplate());
}