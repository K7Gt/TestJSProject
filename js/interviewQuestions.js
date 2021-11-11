"use strict";

// 1    let x = 5; alert(x++); - 5
let x = 5; alert(x++);
// 2    [] + false - null + true? - NaN
console.log(typeof([] + false)); // type String result - false
console.log([] + false - null + true);
// 3    let y = 1; let x = y = 2; alert(x); -2

// 4    Чему равна сумма [ ] + 1 + 2? - 12
console.log([ ] + 1 + 2);
// 5    Что выведет этот код: alert( "1"[0] )? - 1
alert( "1"[0] );
// 6    Чему равно 2 && 1 && null && 0 && undefined ? - null
console.log(2 && 1 && null && 0 && undefined);
// 7    Есть ли разница между выражениями? !!( a && b ) и (a && b)? - false
console.log(!!( 1 && 2 ) === (1 && 2));
// 8    Что выведет этот код: alert( null || 2 && 3 || 4 ); ? - 3
console.log( null || 2 && 3 || 4 );
// 9    a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? - false
let a = [1, 2, 3];
let b = [1, 2, 3];
console.log( a == b);
// 10   Что выведет этот код: alert( +"Infinity" ); ? - Infinity

// 11   Верно ли сравнение: "Ёжик" > "яблоко"? - false
console.log("Ёжик" > "яблоко");
// 12   Чему равно 0 || "" || 2 || undefined || true || falsе ? - 2

