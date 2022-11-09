/*
Leonardo Isaias da Silva Costa tem 18 anos, pesa 70kg
tem  1.80 de altura e seu indiceMassaCorporal é de xxx
Leonardo Isaias nasceu em 2004
*/

const nome = "Leonardo Isaias";
const sobrenome = "Da Silva Costa";
const idade = 18;
const peso = 70;
const alturaEmM = 1.80;
let indiceMassaCorporal; // peso / (alturaEmM * alturaEmM)
let anoNascimento; 

indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
anoNascimento = 2022 - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg, tem", alturaEmM, "m, e seu IMC é de", indiceMassaCorporal);
console.log(nome, "nasceu em", anoNascimento)

// Template String
console.log(`${nome, sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM}m, e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`)