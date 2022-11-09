/* 
Tipos de dados primitivos:

String, number, undefined, null, boolean, symbol
*/

const nome = "Leonardo"; //String
const nome1 = 'Leonardo'; //String
const nome2 = `Leonardo`; //String

const num1 = 10; //Number
const num2 = 10.52; // Number

let nomeAluno; // Undefined -> não aponta para local nenhum na memória

const sobrenomeAluno = null; // Nulo -> não aponta para local nenhum na memória
// Null é quando a variável não é apontada explicitamente para algum local na memória

const aprovado = true // Boolean -> true ou false (sim ou não) - Lógico

console.log(typeof nome); // Verificar o tipo de valor da variável

// Dados passados por referência
const a = [1, 2];
const b = a;
console.log(a, b);

b.push(3);
console.log(a, b);