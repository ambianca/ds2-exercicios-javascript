// Coletando os dados do usuário
const nome = prompt("Qual seu nome?");
const idade = prompt("Qual sua idade?");
const cidade = prompt("Em que cidade você mora?");
const curso = prompt("Qual curso você está fazendo?");

// Forma 1: concatenação com +
console.log("Olá, meu nome é " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e estou cursando " + curso + ".");

// Forma 2: template string
console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`);
