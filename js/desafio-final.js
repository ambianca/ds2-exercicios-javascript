function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

function classificarMedia(media) {
    if (media < 5) {
        return "Reprovado";
    } else if (media < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    }
}

let continuar = "sim";
let totalAlunos = 0;

// O laço roda enquanto a resposta digitada for "sim"
while (continuar === "sim") {
    const nome = prompt("Nome do aluno:");
    const curso = prompt("Curso:");
    const nota1 = Number(prompt("1ª nota:"));
    const nota2 = Number(prompt("2ª nota:"));

    // Validando as notas antes de prosseguir
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        console.log("Notas inválidas para " + nome + ". Cadastro não realizado.");
    } else {
        const media = calcularMedia(nota1, nota2);
        const situacao = classificarMedia(media);

        console.log("--- Ficha do Aluno ---");
        console.log("Nome: " + nome);
        console.log("Curso: " + curso);
        console.log("Média: " + media.toFixed(1));
        console.log("Situação: " + situacao);

        totalAlunos++;
    }

    // Pergunta se quer continuar, e guarda a resposta em minúsculo (toLowerCase())
    continuar = prompt("Deseja cadastrar outro aluno? (sim/não)").toLowerCase();
}

console.log("Total de alunos cadastrados: " + totalAlunos);