'use strict';
// var str = "Ослик Иа-Иа посмотрел на о  виав одук"; // ищем в этой строке
// var target = "о"; // цель поиска

// var pos = 0;
// while (true) {
//   var foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( foundPos ); // нашли на этой позиции
//   pos = foundPos + 1; // продолжить поиск со следующей
// }

//task 1 Сделать первый символ заглавным
// function ucFirst (str) {
//   if (str === '') {
//     return str;
//   }

//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst('вася'));
// console.log(ucFirst(''));

//task 2 Проверьте спам
// Напишите функцию checkSpam(str), которая возвращает true, если строка str содержит „viagra“ или „XXX“, а иначе false.

// function checkSpam (str) {
//   var target = 'viagra';
//   var targetXXX = 'xxx';  
//   str = str.toLowerCase();
//   if ( ~str.indexOf(target) || ~str.indexOf(targetXXX)) return true;
//   return false;
// }

// console.log( checkSpam('buy ViAgRA now') );
// console.log( checkSpam('free xxxxx') );
// console.log( checkSpam("innocent rabbit") );

//task 3 Усечение строки
//Ваще изи за 3мин :) 
// function truncate (str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 3) + '...';
//   }

//   return str;
// }

// console.log( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) ); //= "Вот, что мне хоте..."
// console.log( truncate("Всем привет!", 20) ); //= "Всем привет!"

//task 4 Выделить число
// function extractCurrencyValue (str) {
//   return str = +str.slice(1);
// }

// console.log( extractCurrencyValue('$120') );

//task 5* Reverse the given string

// function reverseStr (str) {
//   var i;
//   var reverseStr = '';

//   for (i = str.length - 1; i >= 0; i -= 1) {

//     reverseStr += str[i];
//   }

//   return reverseStr;
// }
// console.log( reverseStr('Some string') ); // -> 'gnirts emoS'

//task 6 Compare two objects

// (function () {
//   function funcName (param1, param2, param3) {
//     // code...
//   }
//   funcName({key: 'Value'}, {key: 'Value'}, true); // -> true
//   funcName({key: 'Value'}, {key: 'Value 1'}, true); // -> false
//   funcName({key: 'Value', nested: {key: 'Value'}}, {key: 'Value 1', nested: {key: 'Value'}}, true); // -> true
//   funcName({key: 'Value', nested: {key: 'Value'}}, {key: 'Value 1', nested: {key: 'Value'}}); // -> false
// }());

//task 7 Draw an area
//Version not 12345678
// function drawnAnArea (n) {
//   var symbolBorder = ' @ ';
//   var symbolBody = ' - ';
//   var i, j, k;
//   var a = ' ';
  


//   for (i = 0; i < n; i += 1) {
//     var str = '';
//     var strBody = '';

//     // если это первая линия или последняя
//     if (i == 0 || i == n - 1) {
//       for (j = 0; j < n; j += 1) {
//         str += symbolBorder;
//       } 
//     // если это ряд в середине 
//     } else {
//       strBody = symbolBorder;
//       for (k = 0; k < n - 2 ; k += 1) {
//         strBody += symbolBody;
//       }    
//       strBody += symbolBorder;
//       a += ' ';
//       console.log(strBody + a);
//       continue;
//     }

//   console.log(str);
//   }
// }

// drawnAnArea(8);

//Version 01234567
// function drawnAnArea (n) {
//   var symbolBorder = ' @ ';
//   var symbolBody = ' - ';
//   var i, j, k;

//   for (i = 0; i < n; i += 1) {
//     var str = '';
//     var strBody = '';

//     // если это первая линия или последняя
//     if (i == 0 || i == n - 1) {
//       for (j = 0; j < n; j += 1) {
//         str += symbolBorder;
//       } 
//     // если это ряд в середине 
//     } else {
//       for (k = 0; k < n - 2 ; k += 1) {
//         strBody += symbolBody;
//       }    
//       console.log(i + symbolBorder + strBody + symbolBorder);
//       continue;
//     }

//   console.log(i + str);
//   }
// }

// drawnAnArea(8);

function comparison (a, b) {
  if (a.length !== b.length) {
    return false;
  }

  var pos = 0;
  while (true) {
    var foundPos = a.indexOf(b, pos);
    if (foundPos == -1) break;

    console.log(foundPos);
    pos = foundPos + 1;
  }

  // for (var i = 0; i < a.length; i += 1) {
  //   if (~b.indexOf(a[i])) {
  //     for (var j = 0; j < a.length; j += 1)
  //       ~a.indexOf(b[j]);
  //     return 'совпали';
  //   }
  //   return 'adfsd';
  // }

}

console.log(comparison('clock', 'lockc'));
console.log(comparison('tree', 'three')); 
console.log(comparison('mttudd', 'yytmtd'));
console.log(comparison('muuuid', 'dduidd'));

// var pos = 0;
// while (true) {
//   var foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( foundPos ); // нашли на этой позиции
//   pos = foundPos + 1; // продолжить поиск со следующей
// }