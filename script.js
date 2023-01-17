let qtd_cartas = 0;
const imagensGif = [
    './imagens/bobrossparrot.gif' ,
    './imagens/bobrossparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/revertitparrot.gif',
    './imagens/explodyparrot.gif',
    './imagens/explodyparrot.gif',
    './imagens/fiestaparrot.gif',
    './imagens/fiestaparrot.gif',
    './imagens/metalparrot.gif',
    './imagens/metalparrot.gif',
    './imagens/unicornparrot.gif',
    './imagens/unicornparrot.gif',
    './imagens/tripletsparrot.gif',
    './imagens/tripletsparrot.gif'];

let cartasSelecionadas = [];

while (qtd_cartas <4 || qtd_cartas > 14 || qtd_cartas%2 != 0){
qtd_cartas = Number(prompt("Com quantas cartas você quer jogar?"));

 for(let i =0; i<qtd_cartas; i++){
    cartasSelecionadas.push(imagensGif[i]);
    
 }

}

cartasSelecionadas.sort(comparador);


function comparador() { 
	return Math.random() - 0.5; 
}
console.log(cartasSelecionadas);
imprimirCartas();

function imprimirCartas(){
    const cartas = document.querySelector(".cartas");
    for(let i = 0; i<qtd_cartas; i++){
        let cardModelo = ` <div data-test="card" class="card" onclick="virar(this)"; >
        <div class="back-face face">
        <img data-test="face-down-image" src="./imagens/back.png" width="100px" height="100px" alt="verso" >
        </div>
        <div class="front-face face">
        <img data-test="face-up-image" src="${cartasSelecionadas[i]}" width="100px" height="100px" alt="verso" >
        </div>
    </div> `;
    cartas.innerHTML += cardModelo;
    }
}
let cartasViradas = 0;
let deck = [];
let parFormado = 0; 

function virar(card){
    
    const back = card.querySelector(".back-face");
    const front =card.querySelector(".front-face");
    back.classList.toggle("back-face");
    back.classList.toggle("front-face");
    front.classList.toggle("back-face");
    front.classList.toggle("front-face");
    
    cartasViradas++;
    deck.push(card);
    
    console.log(cartasViradas);

    const ultimoCard = deck[deck.length - 1];
    const penultimoCard = deck[deck.length - 2];


    if(cartasViradas % 2 === 0 && ultimoCard.innerHTML !== penultimoCard.innerHTML) {
      setTimeout(Desvirar, 1000);
    } 
    else if(ultimoCard.innerHTML === penultimoCard.innerHTML){
        parFormado = parFormado + 1;
        //console.log(parFormado);
    }

  if(parFormado*2 == qtd_cartas){
        setTimeout(mensagemFinal, 500);
    }
     
}

function Desvirar(){
    const ultimoCard = deck[deck.length - 1];
    const penultimoCard = deck[deck.length - 2];

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

function mensagemFinal() {
    alert('Você ganhou em ' + cartasViradas + ' jogadas!');
}