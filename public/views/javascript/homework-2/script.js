'use strict';

//first task
//Посмотрите, понятно ли вам, почему код ниже работает именно так?
// var a = 1, b = 1, c, d;

// c = ++a; alert(c); // 2  - ++ (префикс/перед переменной) увеличивает на 1 сразу 1+a=1+1=2
// d = b++; alert(d); // 1  - ++ (постфикс/после переменной) увеличивает на 1 переменную b, но ++ выполняются после в самом конце, в d запишется 1, но при этом b увеличиться на 1. 

// c = (2+ ++a); alert(c); // 5 - 2+ 1+a=2+ 1+2=5
// d = (2+ b++); alert(d); // 4 - 2+ 2=4 - при этом b увеличиться на 1ед и будет уже 3.

// alert(a); // 3 мы дважды проводили операцию инкримента начиная с 1/2/3
// alert(b); // 3 мы дважды проводили операцию инкримента начиная с 1/2/3


//second task
// Чему будет равен x в примере ниже?

// var a = 2;

// var x = 1 + (a *= 2); // можно записать как 1 + (a = a * 2), 1 + (a = 2 * 2), x=5. Сперва выполняется выражение в скобках т.к. выше приоритет, затем умножение, т.к. выше приоритет над =.


//the third task
var name = prompt('Ваше имя', 'Введите Ваше имя');
alert(name);

//fourth task
// Расписать словами в JS комментарии как работает следующий код: 
// var a = 2; var b = 4; var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);

var a = 2;
var b = 4;
var c = (b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a);
//Очередность выполнения согласно приоритетам.
//(b += 5);  - (b = b + 5) = (b=9)
//a++ * b; - Увеличили a=3 и записали в память. 2*9 по табилце приоритетов у ++ 
//(b -= 3 + 1 - --a); - (9 - 3 + 1 - 2) = 7. Потому как a++ мы вызвали повторно то оно уже 3 и уменьшили на 1ед. выходит 2.
//(b += 5) - a++ * b - 3 + (b -= 3 + 1 - --a); - (9+2*9-3+7)=-5 

console.log(c);

