// 2. Encontrar o maior número

let numero = [2, 5, 7, 20];
let maiorNum = 0;


for(let i = 0; i < numero.length; i++) {
    if (numero[i] > maiorNum) {
        maiorNum = numero[i];
      }
    }

console.log("O maior numero é: ", maiorNum);