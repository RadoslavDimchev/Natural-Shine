import page from './lib/page.mjs';
import { render } from './lib/lit-html.js';

import { showAbout } from './views/about.js';
import { showBlog } from './views/blog.js';
import { showCatalog } from './views/catalog.js';
import { showContact } from './views/contact.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showBlogDetails } from './views/blogDetails.js';


page(decorateContext);
page('/', showHome);
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/blog', showBlog);
page('/blog/:id', showBlogDetails);
page('/about', showAbout);
page('/contact', showContact);

// Start Application
page.start();

function decorateContext(ctx, next) {
  ctx.render = (content) => render(content, document.querySelector('main'));
  next();
} 