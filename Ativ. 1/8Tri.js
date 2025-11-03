// 8. Identificador de Triângulo

let ladoUm = 4;
let ladoDois = 6;
let base = 8;

if (ladoUm + ladoDois > base && ladoUm + base > ladoDois && ladoDois + base > ladoUm) {
 
  if (ladoUm === ladoDois && ladoDois === base) {
    console.log("É um triângulo equilátero");
  } else if (ladoUm === ladoDois || ladoUm === base || ladoDois === base) {
    console.log("É um triângulo isósceles");
  } else {
    console.log("É um triângulo escaleno");
  }

} else {
  console.log("Essas medidas não formam um triângulo");
}

