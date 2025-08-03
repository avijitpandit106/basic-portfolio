const anchors: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (e: MouseEvent) => {
    e.preventDefault();

    const href = anchor.getAttribute('href');
    if (!href) return;

    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
