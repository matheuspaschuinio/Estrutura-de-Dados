class Pilha {

    #items = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#items[this.#tamanho] = elemento;

        this.#tamanho++;

        // console.table(this.#items);
    }

    remover() {
        if(this.#tamanho === 0)
        {
            return undefined;
        }

        const ultimoItem = this.#items[this.#tamanho - 1];

        delete this.#items[this.#tamanho - 1];

        this.#tamanho--;

        console.table(this.#items);

        return ultimoItem;
    }

    verTopo() {
        if(this.#tamanho === 0)
        {
            return undefined;
        }

        return this.#items[this.#tamanho - 1];
    }

    estaVazia = () => this.#tamanho === 0;

    tamanhoPilha = () => this.#tamanho;

    procurar(elemento) {
        return this.#items.includes(elemento);
    }
}

module.exports = Pilha;