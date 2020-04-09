const MenuAccoItem = document.querySelectorAll('.menu-acco__item');

for (i = 0; i < MenuAccoItem.length; i++) {
  MenuAccoItem[i].addEventListener('click', function (e) {
    e.preventDefault();

    if (!(this.classList.contains('menu-acco__item--active'))) {

      for (i = 0; i < MenuAccoItem.length; i++) {
        MenuAccoItem[i].classList.remove('menu-acco__item--active');
      }

      this.classList.add('menu-acco__item--active');

    } else {
      this.classList.remove('menu-acco__item--active');
    }

  });
};