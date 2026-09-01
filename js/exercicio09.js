// Variáveis que vão acumular os dados ao longo do laço
let quantidade = 0;
let soma = 0;
let maior = null;
let menor = null;

// Pedindo o primeiro número antes do laço começar
let numero = Number(prompt("Digite um número (0 para parar):"));

// Repete enquanto o número digitado for diferente de 0
while (numero !== 0) {
    quantidade++;
    soma += numero;

    // Se ainda não temos maior/menor definidos, esse número vira o primeiro guardião
    // duas perguntas independentes, e as duas precisam ser verificadas a cada número novo
    if (maior === null || numero > maior) {
        maior = numero;
    }
    if (menor === null || numero < menor) {
        menor = numero;
    }

    // Pede o próximo número, senão o laço nunca avança
    numero = Number(prompt("Digite um número (0 para parar):"));
}

// Exibindo o resultado final
if (quantidade === 0) {
    console.log("Nenhum número foi digitado antes do zero.");
} else {
    console.log("Quantidade de números digitados: " + quantidade);
    console.log("Soma: " + soma);
    console.log("Média: " + (soma / quantidade).toFixed(1));
    // Arredondando as casas decimais
    console.log("Maior número: " + maior);
    console.log("Menor número: " + menor);
}