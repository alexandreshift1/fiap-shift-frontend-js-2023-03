/*

Montar um script onde o usuário entre com o valor em Reais e faça a sua respectiva conversão para:
Dólar Americano – Euro - Peso Argentino - Libra Esterlina - Iene
Exibir na tela todos os valores obtidos com apenas 02 casas decimais.
Valor em dólar:
Valor em euro:
...


*/

const prompt = require("prompt-sync")();

let valorReais = +prompt("Reais: ");
let valorDolar = valorReais * 0.19;


console.log(`R$ ${valorReais} = $ ${valorDolar}`);