/*
Primitivos (imutáveis) - string, number, boolean
undefined, null (bigint, symbol)
Valores copiados
*/

// let a = "A";
// let b = a; // Cópia de quando o valor do dado é primitivo
// console.log(a, b);

// a = "Outra coisa";
// console.log(a, b);

/*
Referência (mutáveis) - array, object, function
Valores passados por referência
*/

/*
let a = [1, 2, 3];
let b = a; // B referencia o mesmo valor de A na memória (não está sendo copiado)
// let b = [...a]; // valor de B será copiado de A
let c = b; 
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(b, a);

a.push('Luiz');
console.log(c);
*/

const a = {
    nome: "Luiz",
    sobrenome: "Otávio"
};

// const b = {...a}
// const b = a;
a.nome = "João"
console.log(b);