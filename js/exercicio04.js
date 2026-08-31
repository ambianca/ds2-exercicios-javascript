// Solicitando a idade
const idadeDigitada = prompt("Qual sua idade?");

// Mostrando o valor original e seu tipo
console.log(idadeDigitada);
console.log(typeof idadeDigitada);

// Convertendo para número
const idadeNumero = Number(idadeDigitada);

// Calculando quantos anos terá daqui a 5 anos
const idadeFutura = idadeNumero + 5;

// Exibindo o resultado
console.log("Daqui a 5 anos você terá " + idadeFutura + " anos.");