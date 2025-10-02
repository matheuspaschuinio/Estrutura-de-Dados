const DoublyLinkedList = require('./DoublyLinkedList.js');

const trilha = new DoublyLinkedList();

console.log("-------------------------");
console.log("Trilha de aventura");
console.log("-------------------------");

trilha.prepend('Início da trilha');
trilha.append('Caverna');
trilha.append('Mirante');
trilha.append('Cachoeira');

trilha.toString();

console.log("A caverna é muito perigosa, vai ser removida da trilha!");

console.log(trilha.find('Caverna'));

console.log("Removendo: ", trilha.removeAt(1));

trilha.toString();

console.log("Verificando se o mirante ainda está na trilha...");

const indiceMirante = trilha.find('Mirante');

if(indiceMirante !== -1) {
    console.log("Sim, o mirante está na  trilha!");
} else {
    console.log("O mirante não está na trilha!");
}

console.log("Trilha final: ");
trilha.toString();
console.log("Fim da aventura");