const Documento = require('./Documentos');

const impressao = new Documento();

impressao.enqueue("Documento 1");
impressao.enqueue("Documento 2");
impressao.enqueue("Documento 3");
impressao.enqueue("Documento 4");
impressao.enqueue("Documento 5");

console.log(impressao.tamanho());

impressao.enqueue("Documento 6");

console.log(impressao.tamanho());

impressao.dequeue();

console.log(impressao.tamanho());
console.log(impressao.front());