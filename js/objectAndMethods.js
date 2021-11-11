"use strict";

// Rare case of init.
const obj = new Object(); 

const options = {
     name: 'test',
     width: 1024,
     heigh: 1024,
     colors: {
        border: 'black',
        bg: 'red'
     },
     makeTest: function() {
        console.log("Test");
     }
};
options.makeTest();

const {border, bg} = options.colors;
console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);
let counter = 0;
for (const key in options) {
    if (typeof(options[key]) === 'object') {
        for (const i in options[key]) {
            console.log(`Property ${i} has next value ${options[key][i]}`);
            counter++;
        }
    }else {
        console.log(`Property ${key} has next value ${options[key]}`);
        counter++;
    }
    
}

console.log(Object.keys(options).length);


