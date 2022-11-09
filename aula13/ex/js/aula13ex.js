/*const nome = prompt("Digite o seu nome: ");
// window.document.write("Um texto"); // Escrever um texto
// Document se refere ao documento que está aberto, que está dentro do window. Window é a janela do navegador

// window.document.body.innerHTML -> o HTML que se encontra dentro do body
// = -> recebe
window.document.body.innerHTML = "Qualquer outra coisa";
document.body.innerHTML += "Ao final <br />";*/

const nome = prompt("Digite o seu nome completo:");
document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br/>`;

document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br/>`;

document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br/>`;

document.body.innerHTML += `Qual o primeiro índice da letra A no seu nome?: <strong>${nome.indexOf(
  "a"
)}</strong> <br/>`;

document.body.innerHTML += `Qual o último índice da letra A no seu nome? <strong>${nome.lastIndexOf(
  "a"
)}</strong> <br/>`;

// Pega o comprimento da string e subtrai por 3
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(
  -3
)}</strong> <br/>`;

document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(
  " "
)} <br/>`;

document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br/>`;

document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong> <br/>`;
