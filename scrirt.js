// HamburgerMenu

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

// AccordeonTeam

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

// AccordeonMenu

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

// Slider

// const ScrollLeft = document.querySelector('.scroll-left');
// const ScrollRight = document.querySelector('.scroll-right');
// const SliderContent = document.querySelector('.slider__content');

// ScrollRight.addEventListener('click', function(e) {
//   loop('right', e);
// });

// ScrollLeft.addEventListener('click', function(e) {
//   loop('left', e);
// });

// function loop(direction, e) {
//   e.preventDefault();

//   if (direction === 'right') {
//     SliderContent.appendChild(SliderContent.firstElementChild);

//   } else {
//     SliderContent.insertBefore(SliderContent.lastElementChild, SliderContent.firstElementChild);
//   }
// };

$(document).ready(function () {
  $('.your-class').slick({
    prevArrow: '.scroll-left',
    nextArrow: '.scroll-right'
  });
});

// one page scroll

$(".main").onepage_scroll({
  loop: true
});

// full-review popup

const ReviewsBtn = document.querySelectorAll('.reviews-btn');
const FullReview = document.querySelector('.full-review');
const FullReviewCloseBtn = document.querySelector('.full-review__close-btn');

for (i = 0; i < ReviewsBtn.length; i++) {

  ReviewsBtn[i].addEventListener('click', function (e) {
    e.preventDefault();

    FullReview.style.display = 'block';
    body.style.overflow = 'hidden';
  });
};

FullReviewCloseBtn.addEventListener('click', function (e) {
  e.preventDefault();

  FullReview.style.display = 'none';
  body.style.overflow = 'visible';
});

// Form

const Form = document.querySelector('.order');
const btnOrder = document.querySelector('.btn-order');
const btnReset = document.querySelector('.btn-reset');
const success = document.querySelector('#success');
const error = document.querySelector('#error');
const StatusPopupClose = document.querySelectorAll('.status-popup__close');
const body = document.querySelector('body');

for (i = 0; i < StatusPopupClose.length; i++) {

  StatusPopupClose[i].addEventListener('click', function (e) {
    e.preventDefault();

    body.style.overflow = 'visible';
    success.style.display = 'none';
    error.style.display = 'none';

  });
};

btnOrder.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(Form)) {

    var formData = new FormData();
    formData.append('to', 'qwerty@mail.tu');
    formData.append('name', Form.elements.name.value);
    formData.append('phone', Form.elements.phone.value);
    formData.append('comment', Form.elements.comment.value);
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
  xhr.send(formData);
  console.log(formData);
  xhr.onload = function () {

    if (xhr.status) {
      console.log(xhr.response);
      success.style.display = 'block';
      body.style.overflow = 'hidden';

    } else {
      error.style.display = 'block';
      body.style.overflow = 'hidden';
    }
  }

});


function validateForm(form) {
  let valid = true;

  if (!validateField(form.elements.name)) {
    valid = false;
  }

  if (!validateField(form.elements.phone)) {
    valid = false;
  }

  // if (!validateField(form.elements.street)) {
  //     valid = false;
  // }

  // if (!validateField(form.elements.house)) {
  //     valid = false;
  // }

  // if (!validateField(form.elements.corpus)) {
  //     valid = false;
  // }

  // if (!validateField(form.elements.flat)) {
  //     valid = false;
  // }

  // if (!validateField(form.elements.floor)) {
  //     valid = false;
  // }

  if (!validateField(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}

// player

const playBtn = document.querySelector('#playBtn');
const volumeBtn = document.querySelector('#volumeBtn');
const volume = document.querySelector('#volume');
const player = document.querySelector('#player');
const track = document.querySelector('#track');
const screenPlay = document.querySelector('.screen-play');

player.ontimeupdate = trackUpdate;
track.onclick = videoRewind;

function trackUpdate() {
  let d = player.duration;
  let c = player.currentTime;
  track.value = 100*c/d;
}

function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
  this.value = 100*o/w;
  player.pause();
  player.currentTime = player.duration * (o / w);
  player.play();
}

playBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (player.paused) {
    player.play();
    screenPlay.style.display = 'none';

  } else {
    player.pause();
    screenPlay.style.display = 'inherit';
  }
})

screenPlay.addEventListener('click', function (e) {
  e.preventDefault();

  player.play();
  screenPlay.style.display = 'none';
})

volumeBtn.addEventListener('click', function (e) {
  e.preventDefault();

  if (player.muted === true) {
    player.muted = false;

  } else {
    player.muted = true;
  }
})

volume.addEventListener('input', function () {      
  player.volume = volume.value;
})

// map

let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.935274, 30.312388],
    zoom: 11,
    controls: []
  })

  const coords = [
    [59.94554327989287, 30.38932562114668],
    [59.91142323563909, 30.50024587065841],
    [59.88693161784606, 30.319658102103713],
    [59.97033574821672, 30.315194906302924]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "./img/svg/map-marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);

// !!!
