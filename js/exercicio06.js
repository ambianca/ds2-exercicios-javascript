// Coletando os dados do aluno
const nomeAluno = prompt("Nome do Aluno:");
const nota1 = Number(prompt("1ª nota:"));
const nota2 = Number(prompt("2ª nota:"));

// Calculando a média
const media = (nota1 + nota2) / 2;

// Validando: as notas precisam ser números entre 0 e 10
if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    console.log("Nota inválida. As notas devem estar entre 0 e 10.");
} else if (media < 5) {
    // Média menor que 5: reprovado
    console.log("Nome: " + nomeAluno);
    console.log("Nota 1: " + nota1 + " | Nota 2: " + nota2);
    console.log("Média: " + media.toFixed(1));
    console.log("Situação: Reprovado");
} else if (media < 7) {
    // Média entre 5 e 7 : recuperação
    console.log("Nome: " + nomeAluno);
    console.log("Nota 1: " + nota1 + " | Nota 2: " + nota2);
    console.log("Média: " + media.toFixed(1));
    console.log("Situação: Recuperação");
} else {
    // Média 7 ou mais: aprovado
    console.log("Nome: " + nomeAluno);
    console.log("Nota 1: " + nota1 + " | Nota 2: " + nota2);
    console.log("Média: " + media.toFixed(1));
    console.log("Situação: Aprovado");
}