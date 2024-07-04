// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
// Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
// Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// Удалите свойство surname
// Создать объект товара
// id
// название
// описание
// цена (вывести в консоль, товар с 20% скидкой)

// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     '4': 'Четверг',
//     '5': 'Пятница',
//     '6': 'Суббота',
//     '7': 'Воскресенье',
// }
// console.log(week[3]);

// const fio = {
//     name: 'Никита',
//     surname: 'Пребышевский',
//     age: 32,
// }

// console.log(`${fio.surname} - ${fio.name} - ${fio.age}`);

// fio.lastName = prompt('Введите отчество');
// console.log(fio);
// delete fio.surname;
// console.log(fio);

// const tovar = {
//     id: 1,
//     name: 'Кровать',
//     info: 'Крутая',
//     price: 1000,
//     sale: 0.2,
//     salePrice() {
//         return this.price * (1 - this.sale)
//     }
// }

// console.log(`Цена со скидкой составляет: ${tovar.salePrice()}`);

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера (или наоборот)
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
// В первой задаче добавить проверки
// Во второй задачке нужно реализовать функцию, в которую передаём коэф на который необходимо увеличить значения

// if (arr1.length !== arr2.length) {
//     console.error('Ошибка: Массивы arr1 и arr2 должны быть одинаковой длины.');
//     } else if (arr1.length === 0 || arr2.length === 0) {
//     console.error('Ошибка: Массивы не должны быть пустыми.');
//     } else if (!arr2.every(item => typeof item === 'number')) {
//     console.error('Ошибка: Все элементы массива arr2 должны быть числами.');
//     } else {
//     const daysObj = {};
//     for (let i = 0; i < arr1.length; i++) {
//         daysObj[arr1[i]] = arr2[i];
//     }
//     console.log(daysObj);
// }

// function modifyValues(obj, coefficient) {
//     const modifiedObj = {};
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             modifiedObj[key] = (obj[key] ** 2) + coefficient;
//         }
//     }
//     return modifiedObj;
// }
// const coefficient = 5;
// const modifiedObj = modifyValues(obj, coefficient);

// console.log(obj);
// console.log(5, modifiedObj);

// const obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// Найдите сумму элементов приведенного объекта.
// Дополнительное задание
// использовать методы объекта не использовать цикл for

// let sum=0
// for(value in obj.key1){
//     sum += obj[value][value]
// }
// for(value in obj.key2){
//     sum += obj[value][value]
// }
// for(value in obj.key3){
//     sum += obj[value][value]
// }
// console.log(sum);

// function sumValues(nestedObj) {
//     return Object.values(nestedObj)
//         .flatMap(innerObj => Object.values(innerObj))
//         .reduce((sum, value) => sum + value, 0);
// }

// const totalSum = sumValues(obj);

// console.log(totalSum);

const riddles = {
    question: "Зимой и летом одним цветом?",
    answer: "елка",
    askQuestion() {
        while (prompt(this.question) !== this.answer) {
            console.log('Это же елка');
        }
        console.log('Молодец');
    },
};
riddles.askQuestion();
