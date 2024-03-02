const body = document.querySelector("body");
const btnLightMode = document.querySelector(".btn-light");
const btnDarkMode = document.querySelector(".btn-dark");
const icon = document.querySelector(".theme-icon");

btnLightMode.addEventListener('click', () => {
    body.classList.remove('dark');
    btnLightMode.classList.add('btn-selected')
    btnDarkMode.classList.remove('btn-selected')
    icon.src = "images/sun.png";
})

btnDarkMode.addEventListener('click', () => {
    body.classList.add('dark');
    btnLightMode.classList.remove('btn-selected');
    btnDarkMode.classList.add('btn-selected');
    icon.src = "images/moon.png";
})