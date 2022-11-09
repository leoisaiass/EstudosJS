// IEEE 754-2008 // Precisão dos números com casas decimais
let num1 = 0.7; // Number
let num2 = 0.1; // Number

// num1 += num2; // 0.8
// num1 += num2; // 0.9
// num1 += num2; // 1.0
// num1 += num2; // 1.1
// num1 += num2; // 1.2
// num1 += num2; // 1.3
// num1 += num2; // 1.4
// num1 += num2; // 1.5
// num1 += num2; // 1.6
// num1 += num2; // 1.7
// num1 += num2; // 1.8
// num1 += num2; // 1.9
// num1 += num2; // 2.0

// // num1 = num1.toFixed(2);
// // num1 = parseFloat(num1.toFixed(2));
// // num1 = Number(num1.toFixed(2));
// num1 = (num1 * 100 + num2 * 100) / 100; // 0.8
// num1 = (num1 * 100 + num2 * 100) / 100; // 0.9
// num1 = (num1 * 100 + num2 * 100) / 100; // 1.0

num1 = Number(num1.toFixed(2)); // Melhor solução para exibir números muito pequenos, abaixo de 0

console.log(num1);
console.log(Number.isInteger(num1));

// console.log(num1.toString() + num2);
// num1 = num1.toString(); // Transformar o número em string
// console.log(typeof num1);
// console.log(num1.toString(2)); // Representação binária do número
// console.log(num1.toFixed(2)); // Definir a quantidade de casas decimais (arredonda um número comprido)
// console.log(Number.isInteger(num1)); // Informa se o número é inteiro, ou não

/*let temp = num1 * "Olá";
console.log(Number.isNaN(temp)); // Pergunta se a conta é inválida, ou não*/

// NÃO FAZER CONTA COM STRINGS!
