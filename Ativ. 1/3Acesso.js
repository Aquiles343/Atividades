// 3. Acesso Restrito

let usuarioDigitado = "Santiago";      
let senhaDigitada = "batatadoce123";    

let nomeEsperado = "Santiago";
let senhaEsperada = "batatadoce123";

if (usuarioDigitado !== nomeEsperado) {
  console.log("Seu nome não está correto");
} else if (senhaDigitada !== senhaEsperada) {
  console.log("A senha está incorreta");
} else {
  console.log("Login realizado com sucesso");}
