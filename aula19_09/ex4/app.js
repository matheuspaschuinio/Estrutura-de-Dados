const DoublyLinkedList = require('./DoublyLinkedList.js');

const lista = new DoublyLinkedList();

lista.append('Maçã');
lista.append('Banana');
lista.append('Laranja');
lista.append('Uva');
lista.append('Manga');

console.log("Lista inicial:");
lista.toString();

console.log("Removendo Laranja...");
lista.removeValue('Laranja');
console.log("Lista atual:");
lista.toString();

console.log("Removendo Maçã...");
lista.removeValue('Maçã');
console.log("Lista atual:");
lista.toString();

console.log("Removendo Manga...");
lista.removeValue('Manga');
console.log("Lista atual:");
lista.toString();

lista.search('Uva');