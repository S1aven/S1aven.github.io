const element = document.createElement('div');
document.body.appendChild(element);

element.textContent = 'Этот элемент создан при помощи DOM API';

// задание 2

const div = document.createElement('div');
document.body.appendChild(div);
div.className = 'inner';
const inner = document.querySelector('.inner');

inner.textContent = 'Этот элемент тоже создан при помощи DOM API';

element.appendChild(inner);

// задание 3

inner.style.color = 'red';

// задание 4

element.addEventListener('click', function() {
  console.log('Этот текст говорит о том, что я всё сделал правильно');
});

// задание 5

const link = document.createElement('a');
document.body.appendChild(link);
link.setAttribute('href', 'https://loftschool.com');

link.textContent = 'ссылка';

link.addEventListener('click', function (event) {
  event.preventDefault();

  console.log('Я кликнул на ссылку ' + link);
});

// задание 6

const input = document.createElement('input');
document.body.appendChild(input);
input.className = 'input';
input.setAttribute('type', 'text');

const button = document.createElement('button');
document.body.appendChild(button);
button.className = 'button';
button.textContent = 'вывести в консоль';

button.addEventListener('click', function() {
  console.log(input.value);
});

// задание 7

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");

const minRight = 0;
const maxRight = 600;
const step = 100;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function(e) {
  e.preventDefault();
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  }
});


