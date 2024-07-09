{/* <div id="block">
	<p>1</p>
	<p>2</p>
</div>
Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p> */}

// const p = document.querySelector('#block p')
// const p_www = document.querySelectorAll('.www')
// console.log(p);
// console.log(p_www);

// Дан тег <a class="link" href="#">link text html</a>
// Вам необходимо поменять текст внутри ссылки на “link text js”
// Заменить href, на значение https://developer.mozilla.org/ru/

// const link = document.querySelector('.link')
// link.textContent = 'link text js'
// link.setAttribute('href', 'https://developer.mozilla.org/ru/')

// Дан тег <img class="photo" src="" alt="">
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// const photo = document.querySelector('.photo')
// photo.setAttribute('src', 'https://w7.pngwing.com/pngs/883/1005/png-transparent-computer-icons-taxi-mougharbel-address-logo-cdr-heart-monochrome-photography-thumbnail.png')

// Дан тег <div class="content"></div>
// Создайте новый элемент p
// Добавьте в него текст “Новый текстовый элемент”
// Добавьте созданный элемент внутри <div class="content"></div>
// Удалите добавленный узел

// const div = document.querySelector('.content')
// const p1 = document.createElement('p')
// p1.textContent = 'Новый текстовый элемент'
// div.appendChild(p1)
// p1.remove()


// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const div = document.querySelector('.content')
// const btn = document.createElement('button')
// div.appendChild(btn)
// btn.textContent = 'Отправить'
// let count = 0
// // btn.onclick = () => {
// //     count++;
// //     console.log(count);
// // }

// btn.addEventListener('click', () => {
//     count++;
//     console.log(count)
// })

// Дан тег <div class="content"></div>
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

// const div = document.querySelector('.content')
// const btn = document.createElement('button')
// div.appendChild(btn)
// btn.textContent = 'Отправить'
// btn.addEventListener ('click', () => {
//     btn.textContent = 'Текст отправлен'
// })