// Задание 1 (тайминг 25 минут)
// 1. Поиск в интернете (бесплатные api примеры)
// 2. Найти любые данные, на произвольную тему
// 3. Установить расширение в браузер “JSON viewer”
// 4. Пример найденного json объекта

const div = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(div);
let parseData = JSON.parse(data);
console.log(parseData);
parseData.message.forEach((e) => {
  div.insertAdjacentHTML(
    "beforeend",
    `<figure>
  <img src='${e}' alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
`
  );
});

let url = "https://jsonplaceholder.typicode.com/users";
async function getData(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

try {
  const myData = await getData(url)
  console.log(myData);
  myData.forEach(e => {
    div.insertAdjacentHTML('beforeend', `
      <h2>${e.name}</h2>
      <p>${e.email}</p>`)
  })
} catch (error) {
  console.log(`Ошибка ${error.message}`);
}

// Задание 2 (тайминг 15 минут)
// 1. Создать файл data.js
// 2. Создать переменную dataInfo
// 3. Добавить несколько данных в dataInfo

// Задание 3 (тайминг 30 минут)
// 1. Создать файл index.html
// 2. Подключить data.js
// 3. Добавить блок <div class="content"></div>
// 4. Создать переменную data и добавить в нее JSON parse данные из
// файла data.js
// 5. Вывести в консоль объект data
// 6. С помощью foreach обойти массив data
// 7. Вывести все изображения из данных

// Задание 4 (тайминг 20 минут)
// 1. Создать все необходимые заголовки, параграфы изображения (из
// данных json)
// 2. Добавить все содержимое в блок контент
// 3. Добавить стили при необходимости
