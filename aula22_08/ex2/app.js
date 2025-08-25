const Carro = require("./carro");

const carro1 = new Carro("Fusca", 1970, 20);
const carro2 = new Carro("Opala", 1970, 40);

carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.frear();

console.log(carro1.velocidade);