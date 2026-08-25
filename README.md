# ds2-exercicios-javascript
Lista de exercícios de JavaScript — P1 — Desenvolvimento para Servidores II
Bianca Araujo de Moura

## Exercício 1 — Páginas estáticas e dinâmicas

Em qual momento uma página dinâmica é processada e por que um banco de dados pode ser necessário? 

A página dinâmica é processada no momento em que o servidor recebe a requisição do navegador, antes de enviar a resposta. Nesse momento, o servidor monta o HTML consultando as informações necessárias.

Um banco de dados costuma ser necessário porque é onde ficam armazenadas as informações que mudam ou que são específicas de cada usuário, como por exemplo: produtos de uma loja, notícias, ou dados de login.
Sem ele, o servidor não teria de onde buscar esse conteúdo para montar a página antes de entregar. 

Usei como exemplo o blog para estático, porém fiquei com uma grande dúvida: considerei estático supondo que seja gerado por ferramenta de site estático, mas acho que blogs geralmente rodam em CMS(Sistema de Gerenciamento de Conteúdo), e isso faria dele um exemplo de site dinâmicos. Como confirmar?