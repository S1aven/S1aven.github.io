const TeamAccoItem = document.querySelectorAll('.team-acco__item');
var i;

for (i = 0; i < TeamAccoItem.length; i++) {
  TeamAccoItem[i].addEventListener('click', function (e) {
    e.preventDefault();

    if (!(this.classList.contains('team-acco__item--active'))) {

      for (i = 0; i < TeamAccoItem.length; i++) {
        TeamAccoItem[i].classList.remove('team-acco__item--active');
      }

      this.classList.add('team-acco__item--active');

    } else {
      this.classList.remove('team-acco__item--active');
    }

  });
};