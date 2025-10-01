class Feiticos {

    #livros = [];
    #tamanho = 0;

    adicionar(elemento) {
        this.#livros[this.#tamanho] = elemento;

        this.#tamanho++;

        console.table(this.#livros);
    }

    remover() {
        if(this.#tamanho === 0)
        {
            return undefined;
        }

        const ultimoLivro = this.#livros[this.#tamanho - 1];

        delete this.#livros[this.#tamanho - 1];

        this.#tamanho--;

        console.table(this.#livros);

        return ultimoLivro;
    }

    verTopo() {
        if(this.#tamanho === 0)
        {
            return undefined;
        }

        return this.#livros[this.#tamanho - 1];
    }

    estaVazia = () => this.#tamanho === 0;

    tamanhoPilha = () => this.#tamanho;
}

module.exports = Feiticos;