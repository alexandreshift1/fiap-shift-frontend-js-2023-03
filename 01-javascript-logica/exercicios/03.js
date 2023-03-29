/*

Leia 2 valores A e B, que correspondem a 2 notas de um aluno. 
A seguir calcule e informe a média ponderada do aluno, sabendo que a nota A tem peso 4 e a nota B tem peso 6. 

*/

const prompt = require("prompt-sync")();

let notaA = +prompt("Digite a primeira nota: ");
let notaB = +prompt("Digite a segunda nota: ");

// let media = ((notaA * 4) + (notaB * 6))/10;
let media = (notaA * 0.4) + (notaB * 0.6);
console.log(media);