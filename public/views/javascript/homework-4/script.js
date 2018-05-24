'use strict';

// Task 1 Какое последнее значение выведет этот код? Почему?

// var i = 3;

// while (i) {
//   alert( i-- );// 3 2 1 - дальше i=0 это false цикл прервется
// }

//task 2
// Какие значения i выведет цикл while?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

// Префиксный вариант

// var i = 0;
// while (++i < 5) alert( i ); 1/2/3/4 - увеличили-> записали-> сравнили -> вызвали (вывели значение i)
// Постфиксный вариант

// var i = 0;
// while (i++ < 5) alert( i ); // 1/2/3/4/5 - Сравнили-> увеличили -> записали -> вызвали (вывели значение i)


//task 3
// Какие значения i выведет цикл for?
// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.

//Выввод будет одинаков т.к. увелечение происходит после выполнения тела for 
// Постфиксная форма:
// for (var i = 0; i < 5; i++) alert( i ); // 0/1/2/3/4

// Префиксная форма:
// for (var i = 0; i < 5; ++i) alert( i ); // 0/1/2/3/4

//task 4
// Выведите чётные числа
// При помощи цикла for выведите чётные числа от 2 до 10.

// for (var i=2; i < 10; i+=2) {
//   console.log(i);
// }


//task 5 
// Замените for на while
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

//  for (var i = 0; i < 3; i++) {
//   alert( "номер " + i + "!" );
// }

// var i = 0;

// while (i < 3) {
//   console.log("номер " + i + "!" );
//   i+=1;
// }

//task 6 Повторять цикл, пока ввод неверен
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.


//Version 1
// var num = prompt('Введите число больше 100 иначе это не закончиться', '');

// for (;num <= 100 && num !=== null;) {
//  num = prompt('Введите число больше 100 иначе это не закончиться', '');
// }

//Version 2
//var num;
// do {
//   num = prompt('Введите число больше 100 иначе это не закончиться', '');
// } while (num <= 100 && num !=== null);

//task 7 
// Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1. --- ТУТ пропущенно БЕЗ ОСТАТКА
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.  
// Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

// var i, k;

// outer: for (i = 2; i < 100; i+=1) { // задаем диапазон проверки чисел
//   for (k = 2; k < i; k+=1) { //  задаем диапазон проверки числа делителя Если входное число i = 3 то проверит 2 и 3, чем больше число тем больше раз будет сделана проверка.
//     if ((i % k) === 0) { //тут твориться развязка :) Любое деление на 1 даст тоже число данная проверка не нужна. Значит нам нужны все числа что делятся сами на себя без остатка и только они
//       continue outer;
//     }
//   }
//   console.log( i );
// }

//task 8 
// Напишите "if", аналогичный "switch"
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

//Решение
// var browser = prompt('Какой у Вас браузер', '');

// if (browser === 'IE') {
//   alert( 'О, да у вас IE!' );
// } else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//   alert( 'Да, и эти браузеры мы поддерживаем' );
// } else {
//   alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

//task 9 Переписать if'ы в switch
// Перепишите код с использованием одной конструкции switch:

//  var a = +prompt('a?', '');

// if (a === 0) {
//   alert( 0 );
// }
// if (a === 1) {
//   alert( 1 );
// }

// if (a === 2 || a === 3) {
//   alert( '2,3' );
// }

// var a = +prompt( 'a?', '' );

// switch(a) {
//   case 0 : {
//     alert( 'ноль' );
//     break;
//   }
//   case 1 : {
//     alert( 'еденица' );
//     break;
//   }
//   case 2 :   // (a === 2 || a === 3) логическое или || заменяется на перечеление case сработает так же. 
//   case 3 : {
//     alert( 'двойка или тройка' );
//   }
// }

//task 10 
// Обязателен ли "else"?
// Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос посредством вызова confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Родители разрешили?');
//   }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?

// Ответ: Ничего в поведении не измениться т.к. если условия true то выполнится if и return внутри самого if, что прервет выполнение дальше , а return confirm сработает если же значение не подходит под условия в if.
//такое же поведение будет с else 

// function checkAge(age) { 
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?

//task 11
// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18. В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку. Сделайте два варианта функции checkAge:

// Используя оператор '?'
// Используя оператор ||

//Version "?"
// function checkAge(age) {
//   (age > 18) ? true : confirm('Родители рарешили, а?!'); //return уже не пишем, выдает синтаксическую ошибку, в решение так же без ретерна 
// }

// //Version "||"
// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }

//task 12
// Функция min
// Задача «Hello World» для функций :)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

// function min(a, b) {
//   if (a < b) { //производим сравнение а и б если true то А иначе Б. изи. 
//     console.log('==', + a);
//   } else {
//     console.log('==', + b);
//   }
// }

// min(2, 5) 
// min(3, -1) 
// min(1, 1) 

//task 13 
// Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...*1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.


//Version 1
// var x = prompt('Введите х', '');
// var n = prompt('Введите в какую степень возвести Х', '');

// function pow() {
//   var i, result;
//   result = x;

//   for (i = 1; i < n; i+=1 ) {
//     result *= x;
//   }
//   return result;
// }

// console.log(pow(x, n));

// //P.s. 
// if (n < 1) {
//   alert('Увы так не работает');
// } else {
//   console.log(pow(x, n));
// }

//Version 2 не важно не проверть :) 
var x = prompt('Введите х', '');
var n = prompt('Введите в какую степень возвести Х', '');

function pow() {
  var i, result;
  result = x;

  for (i = 1; i < n; i+=1 ) {
    result *= x;
  }
  return result;
}

function minePow() {
  var i, result, b;
  result = x;
  n = -n;
  for (i = 1; i < n; i+=1 ) {
    result *= x;
  }
  b = 1 / (result);
  return b;
}

 
if (n < 1) {
  console.log(minePow(x, n)); // работает не корректно
  // console.log(x ** n); // работает как надо но это чит
} else {
  console.log(pow(x, n));
}

//task 14
// "" + 1 + 0 - вернет строку '10'
// "" - 1 + 0 - вернет число -1 (результат сложения -1 + 0)
// true + false - число, точнее результат сложения чисел
// 6 / "3" - к числу 2
// "2" * "3" - к числу 6
// 4 + 5 + "px" - к строкам 45px
// "$" + 4 + 5 - к строкам $45
// "4" - 2 - к числу 2 
// "4px" - 2 - к числу NaN
// 7 / 0 - к числу NaN
// "  -9\n" + 5 - к строке -9\n5
// "  -9\n" - 5 - к числу  -14
// 5 && 2 - ((к булевому типу) - не верно! я подсмотрел понял что не верно) 2 т.к. 5 тру и 2 тру то по последнему 
// 2 && 5 - само значение т.е. 5
// 5 || 0 - 5 значения вычеслений
// 0 || 5 - 5 
// null + 1 - число 1
// undefined + 1 - число NaN
// null == "\n0\n" - сложна. типа null == undefind и только значит выдаст false
// +null == +"\n0\n" - тут оба значения приводим к числам =1