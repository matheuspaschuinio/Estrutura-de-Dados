const Endereco = require("./endereco");
const Cliente = require("./cliente");

const endereco1 = new Endereco("Rua Sete de Setembro", 321, 'Jau');
const cliente1 = new Cliente("Matheus", endereco1);

console.log(cliente1.exibirDados());