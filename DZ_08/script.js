// Урок 6. Семинар. Основы событий в JavaScript
// <p class="super_element">Привет</p>
// <img src="https://placeimg.com/50/50/animals" alt="">
// <img src="https://placeimg.com/50/50/arch" alt="">
// <img src="https://placeimg.com/50/50/nature" alt="">
// <img src="https://placeimg.com/50/50/people" alt="">
// <img src="https://placeimg.com/50/50/tech" alt="">
// <img src="https://placeimg.com/50/50/tech/grayscale" alt="">
// <img src="https://placeimg.com/50/50/tech/sepia" alt="">
// <br>
// <button>Кнопка</button>
// <button class="super_element">Кнопка с классом btn</button>
// <button>Кнопка</button>
// <br>
// <textarea></textarea>
// <br>
// <ul>
//   <li>
//     <button>Кнопка 1</button>
//   </li>
//   <li>
//     <button>Кнопка 2</button>
//   </li>
//   <li>
//     <button>Кнопка 3</button>
//   </li>
//   <li>
//     <button>Кнопка 4</button>
//   </li>
// </ul>

"use strict";

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.

window.addEventListener("DOMContentLoaded", (e) => {
    console.log("Все теги прогрузились");
});

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.

window.addEventListener("load", () => {
    console.log("Страница загрузилась");
});

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.body.addEventListener("click", (e) => {
    const target = e.target;
    const tagName = target.tagName.toLowerCase();
    const className = "super_element";
    const hasClass = target.classList.contains(className);

    if (hasClass) {
        console.log(
            `Класс "${className}" присутствует в элементе "${tagName}".`
        );
    } else {
        console.log(
            `Класс "${className}" отсутствует в элементе "${tagName}".`
        );
    }
});
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

const textarea = document.querySelector("textarea");
textarea.addEventListener("mouseover", function () {
    console.log("Вы навели на textarea.");
});

// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.

const ul = document.querySelector("ul");
ul.addEventListener("click", function (event) {
    const target = event.target;
    if (target.tagName.toLowerCase() === "button") {
        console.log(target.textContent);
    }
});

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Когда кликаем по кнопке внутри элемента ul, событие сначала обрабатывается на самом глубоком уровне, то есть на самой кнопке, затем оно поднимается вверх по DOM-дереву, обрабатываясь на каждом уровне.

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const listItems = document.querySelectorAll("ul li");
listItems.forEach((li, index) => {
    if ((index + 1) % 2 === 0) {
        li.style.backgroundColor = "red"; // Измените цвет по вашему желанию
    }
});
