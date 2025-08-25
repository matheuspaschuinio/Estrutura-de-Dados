class Carro {
    constructor(modelo, ano, velocidade) {
        this.modelo = modelo;
        this.ano = ano;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade += 10;
    }

    frear() {
        this.velocidade -= 5;
    }
}

module.exports = Carro;