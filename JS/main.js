'use strict';

addEventListener('DOMContentLoaded', () => {
  createJoke();
  createElementBookMaker();
});

const content__card = document.querySelector('.content__card');
const body = document.querySelector('body');

const btn = document.querySelector('button');
const div = document.querySelector('div');

async function getJokes() {
  try {
    const req = await fetch(`https://api.chucknorris.io/jokes/random`);
    const data = await req.json();
    content__card.textContent = data.value;
    //return data.value;
  } catch (err) {
    console.error(err);
  }
}

const createElementBookMaker = () => {
  const maxCount = 4;
  //const gridMatrix = document.createElement('div');
};

const createJoke = () => {
  btn.addEventListener('click', () => {
    setTimeout(() => {
      content__card.style.color = `#088dc8`;
      content__card.style.backgroundColor = `#842bd1`;
      content__card.style.padding = `${1}rem `;
      div.style.border = `none`;

      content__card.classList.add(`addNewCard`);

      getJokes();
    }, 1000);
  });
};

const save = () => {};
