/* [] -> Array
{} -> Objeto */

/* //    Objeto
const pessoa1 = {
//  Atributo: Valor do atributo
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};

const pessoa2 = {
    //  Atributo: Valor do atributo
        nome: 'Maria',
        sobrenome: 'Oliveira',
        idade: 55
    };

console.log(pessoa1.nome); // Acessar os valores da pessoa1
console.log(pessoa1.sobrenome); */

/*
//Função abaixo se chama factory, ou seja ela fabrica objetos
//                  Parâmetros       
function criaPessoa(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade // Pode deixar apagado
    }
}

//                          Argumentos são os valores passados para os parâmetros            
const pessoa1 = criaPessoa("Leonardo", 'Isaias', 18);
const pessoa2 = criaPessoa("Gabriela", 'Maria', 23);
const pessoa3 = criaPessoa("Lucilene", 'Ferreira', 50);
const pessoa4 = criaPessoa("Paulo", 'Cesar', 63);
const pessoa5 = criaPessoa("Paula", 'Carolina', 25);

console.log(pessoa1.nome, pessoa2.nome);
*/

// Quando uma função está dentro de um objeto, ela pode ser considerada um método

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();



