// 7. Promoção Inteligente


let compra = 110;
let desconto = 0;
let valorFinal = compra;

if (compra >= 100) {
    desconto = compra * 0.10; 
    valorFinal = compra - desconto;
    console.log("Você recebeu um desconto de: R$" + desconto, "Valor com desconto: R$" + valorFinal);
} else {
    console.log("Sem desconto. Valor para pagar: R$" + valorFinal);
}


