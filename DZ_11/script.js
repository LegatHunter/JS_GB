const menuActive = document.querySelector(".menu__burger");
const burger = document.querySelector(".menu");
const menuClose = document.querySelector(".x");

let expanded1 = false;
let expanded2 = false;
let expanded3 = false;

function toggleMenu() {
  menuActive.classList.toggle("hidden__menu");
}
burger.addEventListener("click", toggleMenu);
menuClose.addEventListener("click", toggleMenu);

function showCheckboxes1() {
  const checkboxes1 = document.querySelector(".chois__trending_checkboxes");
  if (!expanded1) {
    checkboxes1.style.display = "block";
    expanded1 = true;
  } else {
    checkboxes1.style.display = "none";
    expanded1 = false;
  }
}

function showCheckboxes2() {
  const checkboxes2 = document.querySelector(".chois__size_checkboxes");
  if (!expanded2) {
    checkboxes2.style.display = "block";
    expanded2 = true;
  } else {
    checkboxes2.style.display = "none";
    expanded2 = false;
  }
}

function showCheckboxes3() {
  const checkboxes3 = document.querySelector(".chois__price_checkboxes");
  if (!expanded3) {
    checkboxes3.style.display = "block";
    expanded3 = true;
  } else {
    checkboxes3.style.display = "none";
    expanded3 = false;
  }
}

const url = "./json.json";
async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

document.addEventListener("DOMContentLoaded", async (e) => {
  const data = await getData(url);
  const list = document.querySelector(".grid__product");
  data.forEach((e) => {
    list.insertAdjacentHTML(
      "beforeend",
      `
      <div class="card${e.count} cards">
                        <img src="${e.img}" alt="" />
                        <div class="card${e.count}__text pad">
                            <h6>${e.tittle}</h6>
                            <p class="card__info">
                                ${e.desc}
                            </p>
                            <p class="card__price">$${e.price}</p>
                            <div class="card__hover">
                                <div class="card__hover__button">
                                    <button>
                                        <img src="./img/Cart.svg" alt="" />Add
                                        to&nbsp;Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`
    );
  });
});
