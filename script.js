const gamelogoBtn = document.querySelector('.gamelogo');
const gamelogoShow = document.querySelector('.gamelogo-show');
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');

gamelogoBtn.addEventListener("click", () => {
    const visibility = gamelogoShow.getAttribute("data-visible");
    if (visibility === "false") {
        gamelogoShow.setAttribute("data-visible", "true")
    } else {
        gamelogoShow.setAttribute("data-visible", "false")
    }
})

btn.addEventListener("click", () => {
    const visibility = menu.getAttribute("data-visible");
    btn.classList.toggle("open");
    if (visibility === "false") {
        menu.setAttribute("data-visible", "true");
    } else {
        menu.setAttribute("data-visible", "false");
    }
})