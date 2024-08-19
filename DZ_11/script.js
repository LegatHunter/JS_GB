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
                                    <button class="btn__card_${e.count} btn__card">
                                        <svg width="32" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.2 29a2.477 2.477 0 1 1 .201 0h-.2ZM6.754 26.32a2.68 2.68 0 1 1 5.364 0 2.68 2.68 0 0 1-5.366 0h.002Zm3.8-5.634a1.184 1.184 0 0 1-1.145-.867L4.575 2.364H1.182a1.182 1.182 0 0 1 0-2.364h4.281a1.183 1.183 0 0 1 1.144.868l4.833 17.455h13.178L29 8.275h-14.6a1.183 1.183 0 1 1 0-2.365h16.413a1.178 1.178 0 0 1 .986.533 1.191 1.191 0 0 1 .1 1.122l-5.405 12.412a1.185 1.185 0 0 1-1.084.709H10.553Z" fill="#E8E8E8"/></svg>Add
                                        to&nbsp;Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`
    );
  });
});
