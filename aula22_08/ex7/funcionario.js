class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularBonus() {
        return this.salario * 0.15;
    }
}

class Gerente extends Funcionario {
    calcularBonus() {
        return this.salario *  0.25;
    }
}

class Desenvolvedor extends Funcionario{
    calcularBonus() {
        return this.salario * 0.20;
    }
}

module.exports = { Funcionario, Gerente, Desenvolvedor};