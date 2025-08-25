const Animal = require("./animal");
const Cachorro = require("./cachorro");
const Gato = require("./gato");

const animal1 = new Animal("Tod");
const cachorro1 = new Cachorro("Krypto");
const gato1 = new Gato("Cisco");

animal1.falar();
cachorro1.falar();
gato1.falar();