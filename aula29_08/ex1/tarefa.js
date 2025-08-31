class MeuArray {
    constructor() {
        this.items = [];

        this.tamanho = 0;
    }

    adicionar(item) {
        this.items[this.tamanho] = item;

        this.tamanho++;
    }

    remover() {
        if(this.tamanho === 0 ) {
            return undefined;
        }

        const ultimoItem = this.items[this.tamanho - 1];

        delete this.items[this.tamanho - 1];

        this.tamanho--;

        return ultimoItem;
    }

    obterItem() {
        if(indice < 0 || indice >= this.tamanho) {
            return undefined;
        }

        return this.items[indice];
    }

    tamanhoArray() {
        return this.tamanho;
    }

    limpar() {
        this.items = [];

        this.tamanho = 0;
    }
}

module.exports = MeuArray;