"use strict";
// 1
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2
console.log(typeof(String(5 + '')));

const num = 5;

console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number
// 1
console.log(typeof(Number('7')));
// 2
console.log(typeof(+'7'));
// 3
console.log(typeof(parseInt("15px",10)));

// To boolean
// 0, '', null, undefined, NaN;  All is false

let switcher = null;

if (switcher) {
    console.log('Working...');
}
// 2
console.log(typeof(Boolean('4')));

// 3
console.log(typeof(!!"4444"));

