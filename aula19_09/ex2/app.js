const Corrida = require('./Corrida.js');

const fila = new Corrida();

fila.prepend("Rapida");
fila.append("Constante");
fila.append("Veloz");
fila.append("Lenta");

console.log("Fila de largada:");
fila.toString();

console.log("Novas competidoras chegando!");

fila.prepend("Flash");
fila.append("Santista");

console.log("Fila atualizada:")
fila.toString();

console.log("A tartaruga Lenta quer desistir!");

fila.removeAt(fila.find('Lenta'));

console.log("Fila após a desistência:");
fila.toString();

console.log("Onde está a Veloz?");
console.log(`A tartaruga veloz está na: ${fila.find('Veloz') + 1}ª posição!`);