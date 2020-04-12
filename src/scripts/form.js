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