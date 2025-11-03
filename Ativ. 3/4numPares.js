// 4. Contar números pares

// 4. Contar números pares

let numeros = [2, 5, 4, 54];
let soma = 0;
let pares = [];

for(let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        soma += numeros[i];
        pares.push(numeros[i]);
    }
}

console.log("Os números pares são:", pares);
console.log("A soma dos números pares é:", soma);