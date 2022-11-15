import { initialize } from './router.js';
import { showAbout } from './views/about.js';
import { showBlog } from './views/blog.js';
import { showCatalog } from './views/catalog.js';
import { showContact } from './views/contact.js';
import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';


// console.log(articles);

const links = {
  '/': showHome,
  '/catalog': showCatalog,
  '/details': showDetails,
  '/blog': showBlog,
  '/about': showAbout,
  '/contact': showContact
};

const router = initialize(links);

// start the application in home view
router.goTo('/');