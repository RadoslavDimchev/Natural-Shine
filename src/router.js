export function initialize(links) {
  const header = document.querySelector('header');
  header.addEventListener('click', onNavigate);

  const context = {
    goTo
  };

  return context;

  function onNavigate(ev) {
    let target = ev.target;
    if (target.tagName === 'A') {
      ev.preventDefault();
      const url = new URL(target.href);
      goTo(url.pathname);
    }
  }

  function goTo(name, ...params) {
    const handler = links[name];
    if (typeof handler === 'function') {
      handler(context, ...params);
    }
  }
}