'use strict';

let a = 5,
    b = a;

b = b + 5;

const obj = {
    a: 5,
    b: 1
};

// const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 1
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers)

const add = {
    d: 11,
    i: 20
};

console.log(Object.assign(numbers, add));


const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = "qwerty";
console.log(oldArray);
console.log(newArray);

const video = ['yuotube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'bloger'],
      internet = [...video, ... blogs, 'vk', 'facebook'];

console.log(internet);


function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}


const num = [2, 4, 7];

log(...num);

const array2 = ['a', 'b']; 

const newArray2 = [...array2];