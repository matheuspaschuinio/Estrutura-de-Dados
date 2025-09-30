const Fila = require('./Fila.js');

const clientes = new Fila();

clientes.enqueue("Cliente 1");
clientes.enqueue("Cliente 2");
clientes.enqueue("Cliente 3");

console.log(clientes.front());
console.log(clientes.dequeue());
setTimeout()
console.log(clientes.front());
console.log(clientes.dequeue());
console.log(clientes.front());
console.log(clientes.dequeue());

clientes.enqueue("Cliente 4");

console.log(clientes.tamanho());
console.log(clientes.front());