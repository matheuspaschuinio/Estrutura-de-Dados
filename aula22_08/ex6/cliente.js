const Endereco = require("./endereco");

class Cliente {
    constructor(nome, endereco) {
        this.nome = nome;
        this.endereco = endereco;
    }

    exibirDados() {
        return `Cliente: ${this.nome} mora em: ${this.endereco.mostrarEndereco()}`;
    }
}

module.exports = Cliente;