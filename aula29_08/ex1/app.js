const MeuArray = require("./tarefa.js");

let lista = new MeuArray();

lista.adicionar('Arrumar bug');
lista.adicionar('Fazer frontend');
lista.adicionar('Tomar café');
lista.adicionar('Integrar bd');
lista.adicionar('Reunião');

console.table(lista.items);

console.log(lista.remover());

console.table(lista.items);