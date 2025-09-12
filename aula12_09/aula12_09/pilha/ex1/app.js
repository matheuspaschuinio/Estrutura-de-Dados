const Feiticos = require('./Feiticos');

const meuFeitico = new Feiticos();

meuFeitico.adicionar("Bola de fogo");
meuFeitico.adicionar("Invisibilidade");
meuFeitico.adicionar("Relâmpago");
meuFeitico.adicionar("Gelo");

console.log(meuFeitico.remover());

console.log(meuFeitico.verTopo());

console.log(meuFeitico.estaVazia());