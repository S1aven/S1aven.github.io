const HamburgerMenuLink = document.querySelector('.hamburger-menu-link');
const HamburgerMenu = document.querySelector('#hamburger-menu');
const HamburgerMenuClose = document.querySelector('.hamburger-menu__close');

HamburgerMenuLink.addEventListener('click', function (e) {
  e.preventDefault();

  HamburgerMenu.style.display = 'block';
  body.style.overflow = 'hidden';
});

HamburgerMenuClose.addEventListener('click', function (e) {
  e.preventDefault();

  HamburgerMenu.style.display = 'none';
  body.style.overflow = 'visible';
});