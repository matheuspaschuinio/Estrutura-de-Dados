class Pessoa {

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, sou ${this.nome} e tenho ${this.idade} anos!`);
    }
}

module.exports = Pessoa;