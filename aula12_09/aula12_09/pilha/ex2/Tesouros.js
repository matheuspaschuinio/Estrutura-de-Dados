class Tesouros {
    #bau = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#bau[this.#tamanho] = elemento;

        this.#tamanho++;

        console.table(this.#bau);
    }

    remover() {
        if(this.#tamanho === 0)
        {
            return undefined;
        }

        const ultimoTesouro = this.#bau[this.#tamanho - 1];

        delete this.#bau[this.#tamanho - 1];

        this.#tamanho--;

        console.table(this.#bau);

        return ultimoTesouro;
    }

    verTopo() {
        if (this.#tamanho === 0) {
            return undefined;
        }

        return this.#bau[this.#tamanho - 1];
    }

    estaVazio = () => this.#tamanho === 0;
}

module.exports = Tesouros;