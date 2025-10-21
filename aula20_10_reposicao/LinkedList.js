class Node {
    constructor(value) {
        this.value = value;

        this.next = undefined;
    }
}

class LinkedList {

    #head = undefined;
    #length = 0;

    // Inserir no início da lista
    insertAtBeginning(value) { 

        // Cria um novo nó
        let newNode = new Node(value);

        // O novo nó aponta para o antigo "head"
        newNode.next = this.#head;

        // Atualiza o "head" para o novo nó
        this.#head = newNode;

        // Incrementa o tamanho da lista
        this.#length++;
    }

    // Inserir no fim da lista
    insertAtEnd(value) { 
        let newNode = new Node(value);

        // Se a lista estier vazia, o novo nó se torna o "head"
        if (this.#head === undefined) {
            this.#head = newNode;
            return;
        }

        // Percorre até o último nó
        let current = this.#head;
        while (current.next !== undefined) {
            current = current.next;
        }

        // Faz o último nó apontar para o novo nó
        current.next = newNode;

        this.#length++;
    }

    // Remover um nó por valor
    removeByValue(value) { 

        // A lista está vazia
        if (this.#head === undefined) {
            return;
        }

        // Se o valor a ser removido estiver no primeiro nó
        if(this.#head.value === value) {

            // Atualiza o "head" para o próximo nó
            this.#head = this.#head.next;
            return;
        }

        // Percorre a lista procurando o nó a ser removido
        let current = this.#head;
        while (current.next !== undefined && current.next.value !== value) {
            current = current.next;
        }

        // Se o nó for encontrado, ajusta o ponteiro para pular o nó removido
        if (current.next !== undefined) {
            current.next = current.next.next;
        }

        this.#length--;

    }

    // Buscar um nó por valor
    find(value) { 
        let current = this.#head;

        // Percorre a lista até encontrar o nó ou até o final
        while (current !== undefined) {
            // console.log(current.value);
            if(current.value === value) {
                return current; // Nó encontrado
            }
            current = current.next;
        }

        return undefined; // Se não encontrar, retorna null
    }

    // Retorna o tamanho da lista
    size() { 
        let count = 0;
        let current = this.#head;
        while (current !== undefined) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Retorna true se a lista estiver vazia
    isEmpty = () => this.#head === undefined;
    
    // Exibir a lista (opcional, para faciliar a visualizaçao)
    toString() { 
        let current = this.#head;
        let list = '';
        while (current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }

}

module.exports = LinkedList;