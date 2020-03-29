// HamburgerMenu

const HamburgerMenuLink = document.querySelector('.hamburger-menu-link');
const HamburgerMenu = document.querySelector('#hamburger-menu');
const HamburgerMenuClose = document.querySelector('.hamburger-menu__close');

HamburgerMenuLink.addEventListener('click', function(e) {
  e.preventDefault();

  HamburgerMenu.style.display = 'block';
});

HamburgerMenuClose.addEventListener('click', function(e) {
  e.preventDefault();

  HamburgerMenu.style.display = 'none';
});

// AccordeonItem

const TeamAccoItem = document.querySelectorAll('.team-acco__item');
var i;

for (i = 0; i < TeamAccoItem.length; i++) {
  TeamAccoItem[i].addEventListener('click', function(e) {
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
  MenuAccoItem[i].addEventListener('click', function(e) {
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

const ScrollLeft = document.querySelector('.scroll-left');
const ScrollRight = document.querySelector('.scroll-right');
const SliderContent = document.querySelector('.slider__content');

ScrollRight.addEventListener('click', function(e) {
  loop('right', e);
});

ScrollLeft.addEventListener('click', function(e) {
  loop('left', e);
});

function loop(direction, e) {
  e.preventDefault();

  if (direction === 'right') {
    SliderContent.appendChild(SliderContent.firstElementChild);
  
  } else {
    SliderContent.insertBefore(SliderContent.lastElementChild, SliderContent.firstElementChild);
  }
};


// Form

const Form = document.querySelector('.order');
const btnOrder = document.querySelector('.btn-order');
const btnReset = document.querySelector('.btn-reset');


btnOrder.addEventListener('click', event => {
  event.preventDefault();

  if (validateForm(Form)) {
    const data = {
      name: Form.elements.name.value,
      phone: Form.elements.phone.value,
      street: Form.elements.street.value,
      house: Form.elements.house.value,
      corpus: Form.elements.corpus.value,
      flat: Form.elements.flat.value,
      floor: Form.elements.floor.value,
      comment: Form.elements.comment.value
    }
    // var formData = new FormData(Form);

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.send(JSON.stringify(data));
    console.log(data);
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

  if (!validateField(form.elements.street)) {
      valid = false;
  }

  if (!validateField(form.elements.house)) {
      valid = false;
  }

  if (!validateField(form.elements.corpus)) {
      valid = false;
  }

  if (!validateField(form.elements.flat)) {
      valid = false;
  }

  if (!validateField(form.elements.floor)) {
      valid = false;
  }

  if (!validateField(form.elements.comment)) {
      valid = false;
  }

  return valid;
}

function validateField(field) {
  field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
}