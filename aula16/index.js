/* Arrays é uma lista de itens, geralmente colocá-se apenas
um tipo de dados */

// const alunos = 'Luiz Maria João';
//              012345678910  
// const nome = 'Luiz Otávio'
// console.log(nome[0]);


//                0       1        2        
const alunos = ['Luiz', 'Maria', 'João']; // Cada item é um índice

// let alunos = ['Luiz', 'Maria', 'João']; 
// alunos = 123; // Alterando o tipo da variável de array para number
// console.log(typeof alunos); // Array é um objeto
// console.log(alunos instanceof Array); // Responde se é uma instância de array

// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, 3)); // Pegar o elemento João (->)
// console.log(alunos.slice(0, -1)); // Pegar o elemento Luiza (<-) 

// console.log(alunos[50]); // Resultado será "undefined", porque não existe

// delete alunos[1]; // Remover o item sem apagar o índice

// alunos.pop(); // apaga o último item da array - pode ser armazenado em uma variável
// alunos.shift(); // apaga o primeiro item da array - pode ser armazenado em uma variável
// const removido = alunos.pop();
// console.log(removido);

// alunos.unshift('Luiza'); // Acrescenta um item ao início da array (ínidice 0)
// alunos.unshift('Fábio'); // Conforme, este veio depois da Luiza, ele quem será encaixado no índice 0

// alunos.push('Otávio'); // Acrescentar um item ao final da array (lista)
// alunos[alunos.length]; // Acrescenta um item ao final da array (lista)

// console.log(alunos.length); // Descobrir a quantidade de itens dentro da array

// alunos[0] = 'Eduardo'; // Altera o item especificado
// alunos[3] = 'Luiza'; // Adicionar um elemento

// console.log(alunos[2]); // Acessando itens

console.log(alunos); // Acessando itens