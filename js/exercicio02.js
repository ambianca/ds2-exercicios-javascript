// Declarando as variáveis com os tipos

const nome = "Bianca Araujo de Moura";       // texto (string) — nome não muda, por isso const
let idade = 30;                               // número (number) — pode mudar no futuro, por isso let
const cidade = "Mairinque";                   // texto (string) — não vou me mudar, por isso const
const matriculado = true;                     // booleano (boolean) — true ou false
const nota = 8.5;                             // número (number) — não muda depois de lançada já era

// Exibindo cada valor separado

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cidade:", cidade);
console.log("Matriculado:", matriculado);
console.log("Nota:", nota);

// Exibindo o tipo de cada variável, separado, typeof

console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de cidade:", typeof cidade);
console.log("Tipo de matriculado:", typeof matriculado);
console.log("Tipo de nota:", typeof nota);

// Por que algumas variáveis foram declaradas com `const` e outra com `let`?
// A maioria dos valores aqui não muda depois de definidos: o nome de
// uma pessoa, a cidade, se ela está matriculada e a nota de uma prova
// já lançada não têm motivo para ser reatribuídos no meio do script.
// Por isso usamos const, que é o padrão de mercado "protege" contra
// alteração acidental.
// A idade foi declarada com let porque, diferente dos outros, é um
// valor que naturalmente muda ao longo do tempo (a pessoa faz
// aniversário). Usar let deixa claro, só de ler o código, que essa
// variável é esperado que mude em algum momento.