// Const é uma variável que não muda o seu valor 

// Não podemos criar constante com palavras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços 
// Utilizamos camelCase
// Case-sensitive
// Não pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado += 5
console.log(resultadoTriplicado)

console.log(typeof primeiroNumero) // Descobrir qual o tipo de valor da variável


// + - * /
// alt e setinha, muda a linha de comando para onde desejar
// String = Text | Number = Número

/* JS é uma linguagem de programação de tipagem dinâmica,
então a partir do momento em que é atribuído um valor
a uma variável, let ou constante, já é salvo em um tipo */