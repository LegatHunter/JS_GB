// Урок 10. Семинар. Работа с JSON
// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.




// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).


const body = document.querySelector("body");
let parseData = JSON.parse(data);
console.log(parseData);
parseData.forEach((e) => {
  let div = document.createElement("div");
  body.appendChild(div);
  div.insertAdjacentHTML(
    "beforeend",
    `<h2>ID пользователя: ${e.id}</h2>
    <h4>Комментарий:</h4>
    <p>${e.body}</p>
`
  );
});