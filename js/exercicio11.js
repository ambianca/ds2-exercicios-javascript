// Recebe dois números e devolve a soma
function somar(numero1, numero2) {
    return numero1 + numero2;
}

// Recebe duas notas e devolve a média
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Recebe uma média e devolve o texto da situação do aluno
function classificarMedia(media) {
    if (media < 5) {
        return "Reprovado";
    } else if (media < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    }
}

// Recebe um nome e devolve uma saudação personalizada
function criarSaudacao(nome) {
    return "Bem-vindo(a), " + nome + "!";
}

// Usando as funções: cada uma é chamada e o resultado guardado numa variável
const resultadoSoma = somar(4, 7);
const media = calcularMedia(6, 8);
const situacao = classificarMedia(media);
const saudacao = criarSaudacao("Bianca");

// Exibindo tudo no console
console.log("Soma:", resultadoSoma);
console.log("Média:", media.toFixed(1));
console.log("Situação:", situacao);
console.log(saudacao);