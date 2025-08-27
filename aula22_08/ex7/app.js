const { Funcionario, Gerente, Desenvolvedor} = require("./funcionario");

const funcionario1 = new Funcionario('Kleber', 8000);
const gerente1 = new Gerente('Ana', 10000);
const dev1 = new Desenvolvedor('Carlos', 8000);

console.log(`Bônus de ${funcionario1.nome}: R$ ${funcionario1.calcularBonus().toFixed(2)}`);
console.log(`Bônus de ${gerente1.nome}: R$ ${gerente1.calcularBonus().toFixed(2)}`);
console.log(`Bônus de ${dev1.nome}: R$ ${dev1.calcularBonus().toFixed(2)}`);