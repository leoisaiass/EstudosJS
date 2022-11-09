// função podem ser definidas como ações

// function saudacao(nome) {
//     return `Bom dia, ${nome}!`; //Retorna um valor para a variável
// }

// const variavel = saudacao('Leonardo');
// console.log(variavel);

// function soma(x = 1, y = 1) {
//     const resultado = x + y;
//     return resultado; // Sempre que for encontrado return, a execução para
// }

// console.log(soma(2, 2));

// const resultado = soma(4);
// console.log(resultado);

/* Devido ser uma variável com atribuição de valor 
sendo uma função é necessário o ponto e vírgula após as chaves */
// const raiz = function (n) {
//     return n ** 0.5;
// };
// console.log(raiz(9));
// console.log(raiz(16));
// console.log(raiz(25));

// Arrow function
const raiz = n => n ** 0.5;
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

/* Não é tão interessante criar uma função com várias ações,
sendo muito melhor criar várias funções pequenas com ações específicas */