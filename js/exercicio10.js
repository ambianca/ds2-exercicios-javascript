// Contador de quantas vezes o usuário já errou
let tentativas = 0;

// O laço roda enquanto ainda tiverem tentativas (menos de 3 erros)
while (tentativas < 3) {

    // Pedindo usuário e senha a cada tentativa
    const usuario = prompt("Usuário:");
    const senha = prompt("Senha:");

    // Comparação: as duas informações precisam estar certas ao mesmo tempo
    if (usuario === "admin" && senha === "1234") {
        console.log("Acesso permitido");
        break; // encerra o laço na hora, mesmo que sobrassem tentativas
    } else {
        // Errou: soma mais uma tentativa usada
        tentativas++;
        console.log("Login incorreto. Tentativas restantes: " + (3 - tentativas));
    }
}

// Depois que o laço termina, checamos: foi por bloqueio ou por acerto?
if (tentativas === 3) {
    console.log("Acesso bloqueado");
}