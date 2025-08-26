const ContaBancaria = require('./contaBancaria');

const conta = new ContaBancaria();

conta.depositar(175);
conta.sacar(50);
console.log(conta.verSaldo());