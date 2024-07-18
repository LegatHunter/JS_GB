// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

const inputFrom = document.querySelector("#from");
const spanDisplay = document.querySelector("span");

inputFrom.addEventListener("input", () => {
    spanDisplay.textContent = inputFrom.value;
});


const messageBtn = document.querySelector(".messageBtn");
const message = document.querySelector(".message");

messageBtn.addEventListener("click", () => {
    message.classList.add("animate_animated", "animate_fadeInLeftBig");
    messageBtn.style.visibility = "visible";
});


const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    let valid = true;
    const formControls = form.querySelectorAll(".form-control");
    formControls.forEach((control) => {
        if (!control.value) {
            control.classList.add("error");
            valid = false;
        } else {
            control.classList.remove("error");
        }
    });
    if (!valid) {
        event.preventDefault();
    }
});

form.querySelectorAll(".form-control").forEach((control) => {
    control.addEventListener("input", () => {
        if (!control.value) {
            control.classList.add("error");
        } else {
            control.classList.remove("error");
        }
    });
});
