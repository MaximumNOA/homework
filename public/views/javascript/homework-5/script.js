'use strict';
//task 1
//C Использованием цикла
// (function () {
//   var n = +prompt('введите прогрессию N цикл', '');

// function sumTo (n) {
//   var i, sum;
//   sum = 0;

//   for (i = 1; i <= n; i += 1) {
//   sum =  i + sum;
//   }

//   return sum;
// }
// console.log( sumTo(n) ); 
// }());

//Через рекурсию

// function sumTo (n) {
//   if (n > 1) {
//     return n + sumTo(n - 1);
//   }
//   else {
//     return 1;
//   }
// }

// console.log( sumTo(1) ); 
// console.log( sumTo(100) ); 

// Можно ли при помощи рекурсии посчитать sumTo(100000)? Если нет, то почему? 
// Нет т.к. есть ограничение на кол-во вызово call steck в интерпритаторе

// Какой вариант решения самый быстрый? Самый медленный? Почему?
// Вариант с циклом быстрее т.к. выполнит итераций n раз , а рекурсия выполнит n*2 раз.

//task 2
//Сделал циклом сложнее было чем потом рекурсией

// var n = +prompt('введите прогрессию N цикл', '');

// function factorial (n) {
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

//  function factorial (n) {
//   return n ? n * factorial(n - 1) : 1;
// }
// console.log( factorial(n) );

//task 3
// // Числа Фибоначчи

// var n = +prompt('введите N', '');

// function fib (n) {
//   var i, a, b, c;
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

//task 5 Интерфейс суммы

// function sum (a, b, c) {
//   a = +prompt('введите 1ое значение', '');
//   b = +prompt('введите 2ое значение', '');

//   c = a + b;
//   alert('Сумма ' + c);
// }

// sum();

//task 6 Почему 6.35.toFixed(1) == 6.3?
//Из-за хранения чисел в 64 битах, и не возможности хранить дробные числа корректно 

//task 7 Сложение цен

//да бы избежать проблемы с проблемой округления чисел нужно число *10(в степени) затем /10(в степени) из задания a + b 
// (a*10)/10 + (b*10)/10 = точный результат. При этом 10 в степени будет определять кол-ви знаков после "."

//task 8 Бесконечный цикл по ошибке
//Из-за не точности хранимых дробных чисел как 0.2 шаг, высокая веротность того, что в цикле мы не попадет точно на 10ку,
// а получим что-то рода 10.00000003


//task 9 Как получить дробную часть числа?

// function getDecimal (num) {
//   var numInt, numDecimal, a;
//   numInt = ( parseInt(num) );
//   numDecimal = num - numInt;

//   return Math.round(numDecimal * 10000) / 10000;
// }

// alert( getDecimal(12.345) ); 
// alert( getDecimal(1.2) ); 
// alert( getDecimal(-1.2) ); 

//task 10 Формула Бине

// function fibBinet (n) {
//   var f = (1 + Math.sqrt(5)) / 2;
//   return console.log( Math.round(Math.pow(f, n) / Math.sqrt(5) ));
// }

// fibBinet(77);

//task 11 Случайное из интервала (0, max)

//version 1
// function random (min, max) {
//   var a = parseInt (Math.random() * max + 1);
  
//   if ( a >= min) {

//     return a;
//   } else {

//   return  random(min, max);
//   }

// }

//version 2
// function random (n) {
//   console.log(parseInt (Math.random() * n));
// }

// random(100);
// random(50);
// random(8);
// random(15);

//task 12/13 Случайное из интервала (min, max)

// function random (min, max) {
//   var a = parseInt (Math.random() * (max + 1 - min) );

//   return a += min;
// }

// console.log( random(6, 105) );
// console.log( random(7, 105) );
