const Tesouros = require('./Tesouros');

const meuTesouro = new Tesouros();

meuTesouro.adicionar("Colar de diamante");
meuTesouro.adicionar("Rubi");
meuTesouro.adicionar("Anel de Esmeralda");
meuTesouro.adicionar("Pérolas");

console.log(meuTesouro.remover());

console.log(meuTesouro.verTopo());

console.log(meuTesouro.estaVazio());