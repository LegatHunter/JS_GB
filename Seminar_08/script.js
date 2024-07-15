// // В html создать кнопку button
// // После загрузки страницы вывести в консоль текст “страница загрузилась”
// // Добавить событие onclick которое выводит в консоль текст “событие onclick”
// // Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”
// const body = document.querySelector('body')
// body.insertAdjacentHTML("afterbegin", '<button>Кнопка</button>')
// const btn = document.querySelector('button')
// window.onload = ()=> console.log('Страница загрузилась');
// btn.onclick = () => console.log('Cобытие onclick');
// btn.addEventListener('click', ()=> console.log('событие addEventListener'))

// // Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// // Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// // Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// // Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”
// const body = document.querySelector('body')
// for (let i = 0; i < 3; i++) {
//     body.insertAdjacentHTML("afterbegin", `<button>Кнопка ${i+1}</button>`)
// }

// body.addEventListener('click', (e)=> {
//     if(e.target.nodeName === 'BUTTON'){
//         console.log(`Вы нажали на кнопку ${e.target.textContent}`);
//     }
// })

// body.insertAdjacentHTML("afterbegin", `<button class='btn4'>Кнопка 4</button>`)
// const btn4 = document.querySelector('.btn4')
// let count = 0;
// btn4.addEventListener('click', ()=>{
//     count++;
//     console.log(`На кнопку нажали ${count} раз`);
// })

// body.insertAdjacentHTML("afterbegin", `<button class='btn5'>Кнопка 5</button>`)
// const btn5 = document.querySelector('.btn5')
// btn5.addEventListener('click', ()=>{
//     btn5.textContent = 'Вы нажали на эту кнопку';
// })

// // Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// // Создать вторую кнопку, которая будет удалять созданный заголовок h1
// // Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// const body = document.querySelector("body");
// const btn = document.createElement("button");
// btn.textContent = "Кнопка";
// body.appendChild(btn);
// btn.addEventListener("click", () => {
//     const heading = document.createElement("h1");
//     heading.innerText = "Заголовок";
//     btn.insertAdjacentElement('afterend', heading)
// });
// const btn2 = document.createElement("button");
// btn2.textContent = "Кнопка 2";
// body.appendChild(btn2);
// btn2.addEventListener('click', ()=>{
//     document.querySelector('h1').remove()
// })
// const btn3 = document.createElement("button");
// btn3.textContent = "Кнопка 3";
// body.appendChild(btn3);
// btn3.addEventListener('mouseover', ()=>{
//     console.log('Вы навели на кнопку 3');
// })
// btn3.addEventListener('mouseout', ()=>{
//     console.log('Наведения нет');
// })

// // Создать в html список состоящий из 3-х произвольных элементов li
// // Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// // Создать кнопку, которая будет удалять первый элемент из созданного списка
// // Создать кнопку, при клике на которую ей добавляется класс “click”

// const body = document.querySelector("body");
// const ol = document.querySelector('ol')
// const btn = document.createElement('button')
// btn.innerText = 'Кнопка'
// ol.insertAdjacentElement('afterend', btn)
// btn.addEventListener('click', ()=>{
//     ol.insertAdjacentHTML('beforeend','<li>Новый элемент списка</li>')
// })
// const btn2 = document.createElement('button')
// btn2.innerText = 'Кнопка 2'
// ol.insertAdjacentElement('afterend', btn2)
// btn2.addEventListener('click', ()=>{
//     ol.removeChild(ol.firstElementChild);
// })

// const btn3 = document.createElement('button')
// btn3.innerText = 'Кнопка 3'
// ol.insertAdjacentElement('afterend', btn3)
// btn3.addEventListener('click', ()=>{
//     btn3.classList.add("click");
// })

