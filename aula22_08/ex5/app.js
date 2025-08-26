const { Carro, Moto} = require('./veiculos');

const carro1 = new Carro(20);

const moto1 = new Moto();

carro1.acelerar();
carro1.cantarPneu();

moto1.empinar();