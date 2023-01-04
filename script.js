const gamelogoBtn = document.querySelector('.gamelogo');
const gamelogoShow = document.querySelector('.gamelogo-show');
const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
import { myDeck } from 'my-deck.json';

const { DeckEncoder } = require('runeterra');

for (i = 0; i < 12; i++) {
    const deck = DeckEncoder.decode(myDeck[i].code);
    deck.code;
    deck.count;
    deck.set;
    deck.id;
    deck.faction;
    console.log(deck);
}

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