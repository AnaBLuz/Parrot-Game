let qtd_cartas = 0;

while (qtd_cartas <4 || qtd_cartas > 14 || qtd_cartas%2 != 0){
qtd_cartas = prompt("Com quantas cartas você quer jogar?");
imprimirCartas();
}

const front_imagens = [`<img src="./imagens/back.png" width="100px" height="100px" alt="verso">`,
`<img src="./imagens/back.png" width="100px" height="100px" alt="verso">`, `<img src="./imagens/back.png" width="100px" height="100px" alt="verso">`];

function imprimirCartas(){
    const cartas = document.querySelector(".cartas");
    for(let i = 0; i<qtd_cartas; i++){
        let cardModelo = ` <div class="card" onclick="virar()"; >
        <div class="back-face face">
        <img src="./imagens/back.png" width="100px" height="100px" alt="verso" ">
        </div>
        <div class="front-face face">
        </div>
    </div> `;
    cartas.innerHTML += cardModelo;
    }
}

