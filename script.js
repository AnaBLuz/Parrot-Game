let qtd_cartas = 0;

while (qtd_cartas <4 || qtd_cartas > 14 || qtd_cartas%2 != 0){
qtd_cartas = Number(prompt("Com quantas cartas você quer jogar?"));

imprimirCartas();
}
const imagensGif = [
    './imagens/revertitparrot.gif' ,
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif'];


function imprimirCartas(){
    const cartas = document.querySelector(".cartas");
    for(let i = 0; i<qtd_cartas; i++){
        let cardModelo = ` <div class="card" onclick="virar(this)"; >
        <div class="back-face face">
        <img src="./imagens/back.png" width="100px" height="100px" alt="verso" >
        </div>
        <div class="front-face face">
        <img src="./imagens/revertitparrot.gif" width="100px" height="100px" alt="verso" >
        </div>
    </div> `;
    cartas.innerHTML += cardModelo;
    }
}
let cartasViradas = 0;
var deck = [];
function virar(card){
    
    deck.push(card);
    const back = card.querySelector(".back-face");
    const front =card.querySelector(".front-face");
    back.classList.toggle("back-face");
    back.classList.toggle("front-face");
    front.classList.toggle("back-face");
    front.classList.toggle("front-face");
    cartasViradas++;
   
    if(cartasViradas%2 == 0){
      Desvirar(deck[deck.length - 1],deck[deck.length - 2]);
    }
     
}

function Desvirar(ultimoCard, penultimoCard){
    const backU = ultimoCard.querySelector(".back-face");
    const frontU = ultimoCard.querySelector(".front-face");
    backU.classList.toggle("back-face");
    backU.classList.toggle("front-face");
    frontU.classList.toggle("back-face");
    frontU.classList.toggle("front-face");

    const backP = penultimoCard.querySelector(".back-face");
    const frontP = penultimoCard.querySelector(".front-face");
    backP.classList.toggle("back-face");
    backP.classList.toggle("front-face");
    frontP.classList.toggle("back-face");
    frontP.classList.toggle("front-face");

}