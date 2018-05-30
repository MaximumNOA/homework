//task 1
//C Использованием цикла
// (function (){
//   var n = +prompt('введите прогрессию N цикл', '');

// function sumTo(n) {
//   var i, sum;
//   sum = 0;

//   for (i = 1; i <= n; i += 1) {
//   sum =  i + sum;
//   }

//   return sum;
// }

// console.log( sumTo(n) ); 
// }());

//Через рекурсию не сделал

// function sumTo(n) {
//   var sum = 50;

//   if (n === 1) {
//     return sum = n + sumTo(n-1);
//   }
//   return 1;
// }

// console.log( sumTo(100) ); 

// Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему? 
// Нет т.к. есть ограничение на кол-во вызово call steck в интерпритаторе

// Какой вариант решения самый быстрый? Самый медленный? Почему?
// Вариант с циклом быстрее т.к. выполнит итераций n раз , а рекурсия выполнит n*2 раз.

//task 2
//Сделал циклом сложнее было чем потом рекурсией

// var n = +prompt('введите прогрессию N цикл', '');

// function factorial(n) {
//   var i, fact;
//   fact = 1;

//   for (i = 1; i <= n; i += 1 ) {
//    fact = i * (fact); 
// // сложно для понимания было, что на что нужно умножать :) 
//   }

//   return fact;  
// }
// console.log( factorial(n) );

//Рекурсией
// var n = +prompt('введите N', '');

//  function factorial(n) {
//   return n ? n * factorial(n - 1) : 1;
// }
// console.log( factorial(n) );

//task 3
// // Числа Фибоначчи

// var n = +prompt('введите N', '');

// function fib(n) {
//   var i, a, b;
//   a = 1;
//   b = 1;
//   i = 3; // самое сложное было вычислить 

//   for (; i <= n; i += 1) {
//     c =  a + b;
//     a = b;
//     b = c;
//   }

//   return b;
// }

// console.log( fib(n) );

// //логика присвоения как-то так выглядит, благоадря циклу новые переменные не нужны
// // a b c 
// // a+b=c 
// // b+c=d
// // с+d=l

//task 4
// Проверка на NFE

// Каков будет результат выполнения кода?

// function g() { return 1; }
// alert(g);
//вывод g, а именно строка кода

// А такого? Будет ли разница, если да – почему?

// (function g() { return 1; });
// alert(g)
//g is not defined т.к. g это имя функции внутри скобок то оно там и остается 

//task 5
var hello = "Привет";

console.log( hello.toUpperCase );