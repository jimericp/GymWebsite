const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

let navOpen = false;

navToggle.addEventListener('click', () => {
  if (!navOpen) {
    navToggle.classList.add('active');
    nav.classList.add('active');
    body.classList.add('overflow');

    navOpen = true;
  } else {
    navToggle.classList.remove('active');
    nav.classList.remove('active');
    body.classList.remove('overflow');

    navOpen = false;
  }
});
