"use strict";

console.dir([1, 2, 3]);

const soldier = {
    health: 700,
    armor: 200,
    sayHello: function() {
        console.log("Hello");
    }
};

const jhon = Object.create(soldier)

// const jhon = {
//     health: 100
// };

// // Old format 
// // jhon.__proto__ = soldier;
// // New format
// Object.setPrototypeOf(jhon, soldier);
// // console.log(jhon.armor);
jhon.sayHello();



