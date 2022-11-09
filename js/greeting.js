// const loginForm = document.querySelector(".loginForm");
// const loginInput = document.querySelector(".loginForm input");

// const greeting = document.querySelector("#greeting");
// const HIDDEN = "hidden";
// const NAME = "name";

// function loginSubmit(event) {
//   event.preventDefault();
//   loginForm.classList.add(HIDDEN);
//   const username = loginInput.value;
//   localStorage.setItem(NAME,username);
//   paintGreeting();
// };

// function paintGreeting() {
//   const you = localStorage.getItem(NAME);
//   greeting.innerText = `Hello, ${you}`;
//   greeting.classList.remove(HIDDEN);
// }

// const SaveName = localStorage.getItem(NAME);

// if (SaveName === null) {
//   loginForm.classList.remove(HIDDEN);
//   loginForm.addEventListener("submit", loginSubmit);
// } else {
//   paintGreeting();
// }


const loginForm = document.querySelector(".loginForm");
const loginInput = document.querySelector(".loginForm Input");
const greeting = document.querySelector("#greeting");
const USER = "user";
const HIDDEN = "hidden";

function loginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN)
  const name = loginInput.value;
  localStorage.setItem(USER, name);
  openGreeting();
};

function openGreeting() {
  const loadname = localStorage.getItem(USER);
  greeting.innerText = `Hi, ${loadname}`;
  greeting.classList.remove(HIDDEN);
};

if (localStorage.getItem(USER) === null) {
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  openGreeting();
};
