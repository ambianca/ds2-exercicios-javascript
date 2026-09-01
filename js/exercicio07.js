// Coletando usuário e senha digitados
const usuario = prompt("Usuário:");
const senha = prompt("Senha:");

// Comparação estrita (===) verifica valor E tipo ao mesmo tempo.
// Diferente do = (atribuição, que guarda um valor numa variável),
// o === apenas compara e devolve true ou false, sem alterar nada.
// Usamos && (E lógico) porque as DUAS condições precisam ser
// verdadeiras juntas: usuário certo E senha certa.
if (usuario === "admin" && senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}