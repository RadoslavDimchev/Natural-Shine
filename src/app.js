import page from './lib/page.mjs';
import { render } from './lib/lit-html.js';

import { showAbout } from './views/about.js';
import { showBlog } from './views/blog.js';
import { showCatalog } from './views/catalog.js';
import { showContact } from './views/contact.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';


const main = document.querySelector('main');

page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:colId/:id', showDetails);
page('/blog', showBlog);
page('/about', showAbout);
page('/contact', showContact);

// Start Application
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, main);

  next();
} 