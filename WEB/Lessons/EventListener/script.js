const btn = document.querySelector('button'),
    overlay = document.querySelector(".overlay"),
    allBtns = document.querySelectorAll('button');

// Old 
// btn.onclick = function() {
//     alert('Click');
// };

// let i = 0;
// const deleteElement = (event) => {
//     console.log(event.currentTarget);
//     console.log(event.type);


//     // i++;
//     // event.target.remove();
//     // console.log('Hover');
//     // if (i == 1){
//     //     btn.removeEventListener('click', deleteElement);
//     // }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector("a");
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(event.target);
// }, {once: true});

// allBtns.forEach(el => {
//     el.addEventListener('click', event =>{
//         console.log(event.target);
//     },  {once: true});
// });

// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel


// window.addEventListener
document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    box.addEventListener('touchstart', (e) => {
        
    });

});
