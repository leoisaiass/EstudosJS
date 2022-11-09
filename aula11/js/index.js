// Sempre quando chamamos usamos os paretêses, é uma chamada de função ou método

// Mensagem de alerta
// alert("Com a nossa mensagem.");

// // Mensagem de confirmação (boolean)
// window.confirm("Deseja realmente apagar?");

// // Prompt para digitar alguma coisa
// window.prompt("Digite o seu nome:");

// Quando uma função se encontra dentro de um objeto, é chamado de método
// Se estiver fora, é uma função

/* const num1 = prompt("Digite um número");
const num2 = prompt("Digite outro número");
const resultado = Number(num1) + Number(num2);
alert(resultado); */

let num1 = prompt("Digite um número");
let num2 = prompt("Digite outro número");
num1 = Number(num1);
num2 = Number(num2);
alert(`O resultado da sua conta é ${num1 + num2}`);
