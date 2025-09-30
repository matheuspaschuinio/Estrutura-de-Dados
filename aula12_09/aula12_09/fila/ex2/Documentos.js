class Documento
{
    #items = [];
    #inicio = 0;
    #fim = 0;

    enqueue(elemento) 
    {
        if(this.tamanho() === 5){
            console.log("Lista cheia!");
            return false;
        }

        this.#items[this.#fim] = elemento;

        this.#fim++;
    }

    dequeue()
    {
        if(this.estaVazia()) {
            return undefined;
        }

        const item = this.#items[this.#inicio];

        delete this.#items[this.#inicio];

        this.#inicio++;

        if(this.#inicio === this.#fim){
            this.#inicio = 0;
            this.#fim = 0;
        }

        return item;
    }

    front()
    {
        if(this.estaVazia()) {
            return undefined;
        }

        return this.#items[this.#inicio];
    }

    estaVazia = () => this.#fim === this.#inicio;

    tamanho = () => this.#fim - this.#inicio;

    limpar() 
    {
        this.#items = [];
        this.#inicio = 0;
        this.#fim = 0;
    }
}

module.exports = Documento;