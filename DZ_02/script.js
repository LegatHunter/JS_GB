// Урок 4. Семинар. Основы JavaScript
// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

// const num1 = +prompt('Введите первое число: ')
// const num2 = +prompt('Введите второе число: ')
// num1 <= 1 && num2 >= 3 ? console.log('Условия выполнены!') : console.log('Условия НЕ выполнены!!!');



// Задание 2
// Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }

// test === true ? console.log('+++') : console.log('---');



// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = 11;
// if (day >= 1 && day <= 10){
//     console.log('day в первой декаде');
// } else if (day >= 11 && day <= 20){
//     console.log('day во второй декаде');
// } else {
//     console.log('day в третьей декаде');
// }



// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)
// Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"
// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"
// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"
// Уточнение: пользователь всегда вводит корректное положительное целое число.

// РЕШЕНИЕ 1

// const num = prompt("Введите положительное целое число:");
// const hundreds = Math.floor(num / 100);
// const tens = Math.floor((num % 100) / 10);
// const units = num % 10;
// console.log(`В числе ${num} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);

// РЕШЕНИЕ 2

// const num = +prompt("Введите положительное целое число:");
// if (num.length === 1) {
//     console.log(`В числе ${num} количество сотен: 0, десятков: 0, единиц: ${num[0]}`);
// } else if (num.length === 2) {
//     console.log(`В числе ${num} количество сотен: 0, десятков: ${num[0]}, единиц: ${num[1]}`);
// } else if (num.length >= 3) {
//     console.log(`В числе ${num} количество сотен: ${num[num.length - 3]}, десятков: ${num[num.length - 2]}, единиц: ${num[num.length - 1]}`);
// }