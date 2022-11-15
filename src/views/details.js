import { html, render } from '../dom.js';


const detailsTemplate = (a) => html`
<section class="details">
  <div class="details-container">
  <div class="image">
      <img src=${a.img} alt="">
    </div>
    <div class="details-content">
      <h2>${a.title}</h2>
      <p>${a.description}</p>
    </div>
  </div>
</section>`;

export function showDetails(_, a) {
  render(detailsTemplate(a), document.querySelector('main'));
}