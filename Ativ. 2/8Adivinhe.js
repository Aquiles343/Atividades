// // 8. Adivinhe o Número

const prompt = require('prompt-sync')();

let acerto = false
let numeroSecreto = 5;

while (acerto == false) {

   
    let numeroJogador = prompt('Digite um numero: ');
    
    if(numeroJogador == numeroSecreto){
        console.log("Jogador acertou o numero!")
        acerto = true;
        break;
    }
    console.log("Numero errado"); 
   
}