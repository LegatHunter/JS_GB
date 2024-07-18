// // -- 1 --
// // В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// // Добавить кнопку отправить
// // При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// // Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

// const inp = document.querySelector("#check");
// const btn = document.querySelector("button");
// const form = document.querySelector("form");
// let errMessage = false;

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     if (!inp.checked && !errMessage) {
//         const p = document.createElement("p");
//         p.textContent = "Необходимо согласиться с условиями";
//         btn.insertAdjacentElement("afterend", p);
//         errMessage = true;
//     } else if (inp.checked) {
//         form.submit();
//     }
// });



// // -- 2 --
// // В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// // Кнопка отправить
// // Если выбран чай, необходимо вывести сообщение “Чай закончился”
// // Если выбран кофе, необходимо вывести соообщение “кофе закончился”

// const btn = document.querySelector("button");
// const drink = document.querySelectorAll("[name='drink']");

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     drink.forEach((btn) => {
//         if (btn.checked) {
//             if (btn.id === "cofe") {
//                 const p = document.createElement("p");
//                 p.textContent = "Кофе закончился";
//                 btn.insertAdjacentElement("afterend", p);
//             } else if (btn.id === "tea") {
//                 const p = document.createElement("p");
//                 p.textContent = "Чай закончился";
//                 btn.insertAdjacentElement("afterend", p);
//             }
//         }
//     });
// });



// //  -- 3 --
// // Создать поле ввода (пароль)
// // Кнопка отправить
// // Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// // Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

// const btn = document.querySelector("button");
// const pass = document.querySelector('#pass')
// const form = document.querySelector("form");

// btn.addEventListener('click', (e)=>{
//     e.preventDefault()
//     if (pass.value.toLowerCase() === 'пароль'){
//         pass.style.border = '1px solid green'
//         form.submit()
//     } else {
//         pass.style.border = '1px solid red'
//         pass.value = ''
//         pass.placeholder = 'Пароль не верный'
//     }
// })



// // Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// // При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

// const inp = document.querySelector('input')
// const h1 = document.querySelector('h1')

// inp.addEventListener('input', (e)=>{
//     h1.textContent = inp.value
// })