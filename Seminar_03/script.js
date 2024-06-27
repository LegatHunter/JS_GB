// № 1
// Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
// Создайте функцию которая возводит переданное число в квадрат
// Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

// function names(fname, lname, age) {
//     console.log(`Привет ${fname} ${lname} с возрастом ${age} лет`);
// }
// names('Иван', 'Петров', 17)

// const names2 = (fname2, lname2, age2) => console.log(`Привет ${fname2} ${lname2} с возрастом ${age2} года`);
// names2('Никита', 'Пребышевский', 32)


// function quadro(num) {
//     return console.log(num ** 2);
// }
// quadro(3)

// const quadro2 = (num2) => console.log(num2 * num2);
// quadro2(4)



// function plus(number) {
//     number > 0 ? '+++' : '---';
// }
// plus(-2)

// const plus2 = (number2) => number2 > 0 ? '+++' : '---'
// plus2(2)



// № 2
// Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль сумму этих чисел.
// С помощью созданной вами функции выведите в консоль сумму значений этих переменных.

// Дана функция
// function func(num = 5) {
// console.log(num * num);
// }
// Расскажите, каким будет результат каждого из вызовов функции.
// func(2);
// func(3);
// func();

// let param1 = '1';
// let param2 = 2;
// let param3 = 3;
// const summaNumbers = (num1, num2, num3) => {
//     console.log(Number(num1) + Number(num2) + Number(num3));
// }
// summaNumbers(param1, param2, param3);


// № 3
// Сделайте функцию (Math.sqrt(num)), которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль (используя функцию суммы). (3.732050807568877)
// Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
// const root = (num1) => Math.sqrt(num1)
// const root2 = (num2) => Math.sqrt(num2)
// const sumRoot = (root, root2) => root + root2;
// console.log(sumRoot(root(3), root(4)));

// const minNum = (num1, num2) => console.log(Math.min(num1, num2));
// console.log(minNum(2,4));


// № 4
// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
// Написать функцию, которой передаем имя и время. она возвращает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван) (гуглить время js)
// let num = +prompt('Введите цифру')
// switch(num) {
//     case 1: console.log('Понедельник');
//     break;
//     case 2: console.log('Вторник');
//     break;
//     case 3: console.log('Среда');
//     break;
//     case 4: console.log('Четверг');
//     break;
//     case 5: console.log('Пятница');
//     break;
//     case 6: console.log('Суббота');
//     break;
//     case 7: console.log('Воскресенье');
//     break;
//     default: console.log('Wrong');
//     break;
// }

// let hours = new Date().getHours();
// const privet = (names, hours) => {
//     if (hours >= 6 && hours <=9){
//         console.log(`Доброе утро ${names}`);
//     } else if (hours >= 12 && hours < 18){
//         console.log(`Доброе день ${names}`);
//     } else if (hours >= 18 && hours < 24){
//         console.log(`Добрый вечер ${names}`);
//     } else {
//         console.log(`Доброй ночи ${names}`);
// }
// }
// privet ('Никита', hours)

// № 5
// Написать функцию, в которую передаем 2 аргумента, первое это вопрос на любую загадку, второе это ответ на данную загадку, необходимо сравнить ответ пользователя на загадку и вернуть, true или false значение
// * Добавить подсказку, если пользователь ответил неверно

// function zagadka(question, correctAnswer) {
//     const userAnswer = prompt(question);
//     if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//     console.log("Правильный ответ!");
//     return true;
//     } else {
//     console.log("Неверно! Попробуйте снова.");
//     console.log(`Подсказка: ответ начинается с "${correctAnswer[0]}"`);
//     return false;
//     }
// }
// zagadka("Загадка 1", "1");
// zagadka("Загадка 2", "2");