// 4. Calendário Automatizado.

let diaSemana = ['Domingo', 'Sábado', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
let hoje = 9;

function diaHoje(dia) {
    let seuDia = dia - 1;
    if (seuDia >= 0 && seuDia <= diaSemana.length - 1) {
        console.log("Seu dia é " + diaSemana[seuDia]);
    } else {
        console.log("O número está inválido");
    }
}

diaHoje(hoje);


// A propriedade length em JavaScript serve para descobrir o número de elementos em um array ou o número de caracteres em uma string