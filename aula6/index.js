// variáveis é o conceito de salvar alguma coisa na memória em tempo de execução do código
// Variável pode ser alterado ao longo do código
// Não se pode redeclarar variáveis
/* Não podemos criar variáveis com palavras reservadas
Exemplo: let let // let if // let console */

// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
/* Utilizamos camelCase 
Exemplo: let nomeCliente*/
// Case-sensitive -> letras maiúsculas e minúscula fazem diferença
// NÃO UTILIZE VAR, UTILIZE LET. (se acaso sua variável for sofrer alteração)

let nome; // Declaração da variável
nome = "João" // Inicializando a variável

console.log(nome, 'nasceu em 1984')
console.log('Em 2000', nome, 'conheceu Maria.');
console.log(nome, 'casou-se com Maria em 2012.');
console.log('Maria teve 1 filho com', nome, 'em 2015');
console.log('O filho de', nome, 'se chama Eduardo');