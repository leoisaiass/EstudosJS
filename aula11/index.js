/**
 * Aritméticos
 * + (Adição, Concatenação)
 * - (Subtração)
 * * (Multiplicação)
 * / (Divisão)
 * ** (Potenciação)
 * % (Resto da divisão)
 */

// Concatenação = unir dois valores
const num1 = "5";
const num2 = 10;
console.log(num1 + num2);

// Potenciação
const number1 = 2;
const number2 = 10;
console.log(number1 ** number2);

// Resto da divisão
const numero1 = 10;
const numero2 = 5;
console.log(numero1 % numero2);

/**
 * Hierarquia de importância na sequência da conta
 * 
 * ()
 * **
 * / * %
 * + -
 * ++ (Incremento (pré e pós))
 * -- (Decremento (pré e pós))
 */


// Se o sinal vem antes, então já é incrementado e aplicado de imediato
let contador = 1;
contador++; //2
contador++; //3
++contador; //4
++contador; //5
console.log(contador);

// Recomendável que se realize primeiro o incremento ou decremento, antes de utilizar o console.log

const passo = 50;
let contarPasso = 0;

contarPasso += passo; // contarPasso = contarPasso + passo
contarPasso *= passo;
contarPasso -= passo;
console.log(contarPasso);

// NaN -> Not a Number = sua conta deu algum problema
const n1 = 10;
const n2 = Number('5.2');
console.log(n1+n2);

// parseInt -> Transformar string em número inteiro
// parseFloat -> Transformar string em números decimais
// Number() -> Transformar string em números inteiros ou decimais