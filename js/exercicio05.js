const idadeDigitada = prompt("Qual sua idade?");
const idade = Number(idadeDigitada);

if (idadeDigitada === "" || isNaN(idade) || idade < 0) {
    // isNaN() - sigla de "is Not a Number". 
    // Ela testa se um valor, depois de tentar virar número, deu certo ou não.
    console.log("Idade inválida");
} else if (idade < 16) {
    console.log("Não pode votar")
} else if (idade <= 17) {
    console.log("Voto opcional")
} else {
    console.log("Voto obrigatório")
}