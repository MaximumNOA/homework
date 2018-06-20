'use strict';

//task 1 Window и переменная
// if ("a" in window) { //переменная a = undefind
//   var a = 1;			//присвоение
// }
// alert( a );			//1

//task 2 Window и переменная 2
//ошибка 1ое у нас 'use strict' при котором не возможно обьявить переменную "по старому", и без 'use strict' так же ошибка 
//потому что мы обращаемся к не обьявленной переменной на момент обращения

//task 3 Window и переменная 3
// ^)) так же как и в первом случае произойдет.

//task 4 Что выведет say в начале кода?
// say('Вася'); // Что выведет? Не будет ли ошибки?

// var phrase = 'Привет';

// function say(name) {
//   alert( name + ", " + phrase );
// }

//Поднимается первыми function declaration за ними переменные var = undefind, Вася undefind

//task 5 В какую переменную будет присвоено значение?
// Каков будет результат выполнения этого кода?

// var value = 0;

// function f() {
//   if (1) { 			// (1) = true
//     value = true;	// Выполнится данная строка
//   } else {
//     var value = false;
//   }

//   alert( value );
// }

// f();
// Изменится ли внешняя переменная value ?

// P.S. Какими будут ответы, если из строки var value = false убрать var?

//Результат выполнение кода true, нет не изменится потому как переменная обьявленая внутри фунции исользуется только там
//Если убрать var внутри функции то он найдет эту переменную вне функии

//task 6 var window
// Каков будет результат выполнения этого кода? Почему?

// function test() {

//   alert( window ); // LE {window: undefind}

//   var window = 5; 

//   alert( window ); // LE {window: 5}
// }

// test();

//task 7 Вызов "на месте"
// Каков будет результат выполнения кода? Почему?

// var a = 5

// (function() {
//   alert(a)
// })()
// P.S. Подумайте хорошо! Здесь все ошибаются! P.P.S. Внимание, здесь подводный камень! Ок, вы предупреждены.

//LUL ^) прочел ответ :) 

//task 8 Перекрытие переменной
// Если во внутренней функции есть своя переменная с именем currentCount – можно ли в ней получить currentCount из внешней функции?

// function makeCounter() {
//   var currentCount = 1;

//   return function() {
//     var currentCount;
//     // можно ли здесь вывести currentCount из внешней функции (равный 1)?
//   };
// }

//Нужно убрать "var currentCount;" из внутрений функции, тогда функции обратиться к внешней пемеременной и выведет
// function makeCounter() {
//   var currentCount = 1;

//   return function() {

//     console.log(currentCount);
//     // можно ли здесь вывести currentCount из внешней функции (равный 1)?
//   };
// } 

// var counter1 = makeCounter();

// counter1();

//Если оставить как есть, то обьявление перезатрет внешнию перменную и мы не сможем к ней достучаться изнутри.

//task 9 Глобальный счётчик
// Что выведут эти вызовы, если переменная currentCount находится вне makeCounter?
// var currentCount = 1;

// function makeCounter() {
//   return function() {
//     return currentCount++;
//   };
// }

// var counter = makeCounter();
// var counter2 = makeCounter();

// alert( counter() ); // 2 //не правильно ответил :) 
// alert( counter() ); // 3

// alert( counter2() ); // 2
// alert( counter2() ); // 3

//еще и post ++ даст 1, а не 2. 
//Это если переменая была б обьявлена внутри makeCounter функции то были б не зависимые счетчики, а так LE у нас window.
// 1.2.3.4 верно. 