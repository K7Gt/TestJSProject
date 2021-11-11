"use strict";

const arr = [1, 12, 31, 4, 5];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}


console.log(arr);
arr.pop();
console.log(arr);

arr.push(10);
console.log(arr);

arr.forEach(element => {
    console.log(element);
});