// 1

var name = 'sergey';

console.log(name);

name = 'romka';

console.log(name);

if (4 > 9) {
  console.log('yes');

} else {
  console.log('no');
}

for (var a = 0; a < 10; a++) {
  console.log('a');
}

function sum(p1, p2, p3) {
  var e = p1 + p2 + p3;
  return e;
}

var d = sum(10, 20, 30);  

console.log(d);

var f = sum(3, 5, 16);

console.log(f);

// задание 1

var array = ['привет', 'loftcshool']

array.push('я изучаю');

array.push('lavascript');

console.log(array.length);

for (let a = 0; a < array.length; a++) {
  console.log(array[a]);
}

// задание 2
var w = [5, 107, 67, 45, 138, 11, 94, 115, 34, 7, 190];

for (let f = 0; f < w.length; f++) {
  if (w[f] > 100) {
    console.log(w[f]);
  }   
}

// задание 3

var obj = {name: 'Сергей', LastName: 'Руднев', age: '30'};

console.log(obj.name);
console.log(obj.LastName);
console.log(obj.age);

obj.work = 'WebDeveloper';

console.log(obj.work);

// задание 4

function hello(human) {
  var k = 'Привет, меня зовут ' + obj.name + ' ' + obj.LastName + ' и мне ' + obj.age + ' лет!';

  return k;
}

var g = hello(obj);

console.log(g);
