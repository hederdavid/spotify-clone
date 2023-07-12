const botaoMenu = document.querySelector("#menu")
const botaoClose = document.querySelector("#close")
const nav = document.querySelector("#nav")


// Events
botaoClose.addEventListener("click", () => {
    nav.classList.add('hidden')
});

botaoMenu.addEventListener("click", () => {
    nav.classList.remove('hidden')
});