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
// console.log(reverseStr('Some string')); // -> 'gnirts emoS'

function reverseStr (str) {
  var i = str.length - 1;
  var rStr = '';
  if (i >= 0) {
    rStr += str[i];
    i -= 1;
  } 
  return rStr;
}



// function reverseStr (str) {
//   var i = str.length - 1;
//   var rStr = '';

//   return rStr = (i >= 0) ? reverseStr(str.length - 1)  : 'end';
  
// }
console.log(reverseStr('Some string')); // -> 'gnirts emoS'
// reverseStr('Some string');

//Versin While
// function reverseStr (str) {
//   var i = str.length - 1;
//   var reverseStr = '';
//   while (i >= 0) {
//     reverseStr += str[i];
//     i -= 1;
//   }
//   return console.log(reverseStr);
// }

// reverseStr('Some string');

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


//Работает только по 1ом символу, сравнивает кол-во их в 1-2 строках. 
// function comparison (a, b) {
//   var countA = 0;
//   var countB = 0;
//   var countC = 0;
//   var i = 0;
//   var j = 0;
//   var pos = a.indexOf(a.charAt(1));
//   var posB = b.indexOf(a.charAt(1));


// debugger;
//   if (a.length !== b.length) {
//     return false;
//   }

//   for (;i < a.length; i += 1) {
//     while (pos !== -1) {
//       countA += 1;
//       pos = a.indexOf(a[i], pos + 1);
//     } 
//     while (posB !== -1) {
//       countB += 1;
//       posB = b.indexOf(a[i], posB + 1);
//     }
//      console.log(countA);
//       console.log(countB);
//     if (countA === countB) {
//       // j += 1;
//       // comparison();
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// // function сomparison (textOne, textTwo) {
//   if (textOne.length === textTwo.length) {
//     for (var i = 0; i < textOne.length; i += 1) {
//       var flag = false;
//       for (var j = 0; j < textTwo.length; j += 1) {
//         if (textOne.charAt(i) === textTwo.charAt(j)) {
//           flag = true;
//         }
//       }
//       if (flag === false) {
//         return false;
//       }
//     } 
//     return true;

//   } else {
//    return false;
//   }
// }
// console.log(comparison('cclock', 'lcockc'));
// console.log(comparison('tree', 'three')); 
// console.log(comparison('mtumdd', 'dutmmd'));
// console.log(comparison('mttudd', 'duumtd'));

