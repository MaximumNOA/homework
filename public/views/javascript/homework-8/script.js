'use strict';

//task 1
// var user = {};
// user.name = 'Вася';
// user.surname = 'Петров';
// user.name = 'Серега';
// delete user.name;

// var menu = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// };

// for (var key in menu) {
//   // этот код будет вызван для каждого свойства объекта
//   // ..и выведет имя свойства и его значение

//   alert( "Ключ: " + key + " значение: " + menu[key] );
// }

function isEmpty (obj) {
  for (var key in obj) {
  	return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false