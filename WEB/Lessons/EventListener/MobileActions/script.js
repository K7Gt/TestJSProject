"use strict";

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('Start');
        console.log(e.touches);
        console.log(e.targetTouches);
        console.log(e.changedTouches);

    });

});

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('Move');
    });

});


document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('End');
    });

});