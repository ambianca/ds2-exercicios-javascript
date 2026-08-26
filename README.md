# ds2-exercicios-javascript
Lista de exercícios de JavaScript — P1 — Desenvolvimento para Servidores II
Bianca Araujo de Moura

## Exercício 1 — Páginas estáticas e dinâmicas

Em qual momento uma página dinâmica é processada e por que um banco de dados pode ser necessário? 

A página dinâmica é processada no momento em que o servidor recebe a requisição do navegador, antes de enviar a resposta. Nesse momento, o servidor monta o HTML consultando as informações necessárias.

Um banco de dados costuma ser necessário porque é onde ficam armazenadas as informações que mudam ou que são específicas de cada usuário, como por exemplo: produtos de uma loja, notícias, ou dados de login.
Sem ele, o servidor não teria de onde buscar esse conteúdo para montar a página antes de entregar. 

Usei como exemplo o blog para estático, porém fiquei com uma grande dúvida: considerei estático supondo que seja gerado por ferramenta de site estático, mas acho que blogs geralmente rodam em CMS(Sistema de Gerenciamento de Conteúdo), e isso faria dele um exemplo de site dinâmicos. Como confirmar?

## Exercício 2 — Client-side e Server-side

| Aspecto | Client-side | Server-side |
|---------|-------------|-------------|
| Local de execução | O navegador do usuário (Chrome, Firefox, etc.) | O servidor web, longe do usuário |
| Tecnologias | JavaScript, AJAX | Node.js, Express.js, PHP, banco de dados (MySQL, MongoDB) |
| Responsabilidades | Interatividade, verificação de dados e layout da página | Regra de negócio, acesso a banco de dados, cálculos, segurança dos dados |
| Vantagens | Resposta mais rápida ao usuário, economiza banda, dá apelo visual | Mais seguro (usuário não vê nem manipula os dados), lida bem com grandes volumes de dados |
| Limitações | Usuário pode desativar o JavaScript no navegador, deixando a aplicação sem funcionar | Depende de conexão com o servidor, processamento gera mais tráfego de rede |
| Tarefas típicas | Animar elementos, validar formulário antes de enviar, reagir a cliques | Verificar login e senha em banco de dados, controlar sessão do usuário, calcular valores sensíveis |


### Classificação das operações como *client-side*, *server-side*

1. **Validar se um campo obrigatório foi preenchido** — Ambos.
Pode ser feito no client-side (JavaScript verifica na hora, antes de enviar). Mas um usuário esperto pode desligar o JS e enviar o formulário vazio mesmo assim. Por isso, sistemas sérios validam nos dois lados: client para experiência rápida, server para garantia, o server é obrigatório por segurança.

2. **Consultar dados sigilosos de um cliente** — Server-side.
Os dados moram em um local que o navegador não deveria enxergar.

3. **Alterar a cor de um botão após um clique** — Client-side.
Ação visual, CSS, sem consequência de segurança.

4. **Verificar login e senha em um banco de dados** — Server-side.
A senha real do usuário nunca deveria estar acessível no navegador para comparação.

5. **Calcular o total de uma compra** — Ambos.
Pareceria só matemática, resolvida pelo JS. Mas se o cálculo fosse só local, o usuário poderia alterar o valor da compra antes de enviar o pedido. Ai a necessidade do server-side para confirmar o valor de tudo antes de fechar e validar a compra.

6. **Controlar uma sessão de usuário** — Server-side.
Se a sessão fosse controlada só pelo navegador, um usuário poderia editar essa informação e se passar por outra pessoa sem nunca ter feito login de verdade. É o servidor quem cria e valida a identificação da sessão, o navegador só guarda e reenvia essa informação, mas não pode mudar sozinho.

## Exercício 3 — Primeiro script e diagnóstico pelo console

Quando troca `console.log` por `Console.log`, o navegador retornou o erro:

`exercicio01.js:1 Uncaught ReferenceError: Console is not defined at exercicio01.js:1:1`

O JavaScript é case sensitive `console` (minúsculo) é o objeto embutido do navegador que existe de verdade; `Console`(maiúsculo) é um nome que a linguagem não reconhece. Por isso nenhuma das quatro mensagens apareceu, o erro na primeira linha interrompeu a execução do script inteiro, e as linhas seguintes não chegaram a rodar.