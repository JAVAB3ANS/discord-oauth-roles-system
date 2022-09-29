// Theme Toggle Names
const theme1 = "Dark Mode";
const theme2 = "Light Mode";

// Theme Toggle
const toggle = document.querySelector("#toggle");
let isLight = false;

const setLocalStorage = (bool) => localStorage.setItem('isLight', bool);
let localStorageValue = localStorage.getItem("isLight");

var rootElement = document.body;
toggle.addEventListener("click", () => {
  localStorage.clear();
  isLight = !isLight;
  if (isLight) {
    toggle.innerText = theme1;
    setLocalStorage(true)
  }else{
    toggle.innerText = theme2;
    setLocalStorage(false)
  }
  rootElement.classList.toggle("lightMode");
});


if (localStorageValue === 'true') {
  isLight = true;
  rootElement.classList.toggle("lightMode")
}
if (localStorageValue === 'false') {
  isLight = false;
  rootElement.classList.toggle("");
}