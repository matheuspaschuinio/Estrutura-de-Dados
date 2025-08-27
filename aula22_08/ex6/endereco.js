class Endereco {
    constructor(rua, numero, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }

    mostrarEndereco() {
        return `${this.rua}, ${this.numero} - ${this.cidade}`
    }
}

module.exports = Endereco;