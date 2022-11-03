
//ДЗ №2

// Задача №1 /////

let x1 = 5;
let x2 = 5;

let y1 = 8;
let y2 = 5;

let side1 = Math.abs(x1-x2);
let side2 = Math.abs(y1-y2);

console.log('Площадь прямоугольника равна  = ',side1*side2,' см.кв .');

// Задача №2////

let a = 13.123456789;
let b = 2.123;
let n = 5;


let a1 = Math.floor(a % 1 * Math.pow(10,n));
let b1 = Math.floor(b % 1 * Math.pow(10,n));

console.log(a1);
console.log(b1);

console.log(a<b);
console.log(a>b);
console.log(a!=b);
console.log(a===b);
console.log(a>=b);
console.log(a<=b);


// Задача №3

let c = -30;
let d = 100;

let range = Math.abs(c-d);
let numberInRange1 = Math.round(Math.random()*range);
let numberInRange2 = Math.round(Math.random()*range);

console.log('Число 1 - ',numberInRange1,' Число 2 - ',numberInRange2)

console.log(numberInRange1<numberInRange2);
console.log(numberInRange1>numberInRange2);
console.log(numberInRange1!=numberInRange2);
console.log(numberInRange1===numberInRange2);
console.log(numberInRange1>=numberInRange2);
console.log(numberInRange1<=numberInRange2);








