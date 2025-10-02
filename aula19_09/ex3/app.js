const Batalha = require('./Batalha.js');

const poderes = new Batalha();

console.log("Batalha épica dos heróis!");

poderes.append("Lança do trovão");
poderes.append("Raio Congelante");
poderes.append("Raio laser");

console.log(`Poderes iniciais:`);
poderes.toString();

console.log("Os heróis descubriram novos poderes!");

poderes.prepend("Escudo de fogo");
poderes.append("Jato de água");

console.log("Poderes atualizados:")
poderes.toString();

console.log("O poder Raio Coongelante se tornou ineficaz!");

poderes.removeAt(poderes.find('Raio Congelante'));

console.log("Raio Congelante foi removido!");
console.log("Poderes após a remoção:");
poderes.toString();

if(poderes.find('Escudo de fogo') !== -1) {
    console.log("O poder Escudo de fogo está disponível para o herói utilizar!");
} else {
    console.log("O poder Escudo de fogo não está disponível!");
}