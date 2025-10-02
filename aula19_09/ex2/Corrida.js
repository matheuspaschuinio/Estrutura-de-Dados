class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
    }
}


class Corrida {
    #head = undefined;
    #tail = undefined;
    #length = 0;

    append(value) {
        const newNode = new Node(value);

        if(this.#head == undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            newNode.prev = this.#tail;
            this.#tail = newNode;
        }

        this.#length++;
    }

    prepend(value) {
        const newNode = new Node(value);

        if(this.#head == undefined) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            newNode.next = this.#head;
            this.#head.prev = newNode;
            this.#head = newNode;
        }

        this.#length++;
    }

    removeLast() {
        if(this.#tail == undefined) return undefined;

        const removedNode = this.#tail;
        if(this.#tail === this.#head) {
            this.#head = null;
            this.#tail = null;
        } else {
            this.#tail = this.#tail.prev;
            this.#tail.next = undefined;
        }

        this.#length--;
        return removedNode.value;
    }

    removeFirst() {
        if(this.#head == undefined) return undefined;

        const removedNode = this.#head;
        if(this.#head === this.#tail) {
            this.#head = undefined;
            this.#tail = undefined;
        } else {
            this.#head = this.#head.next;
            this.#head.prev = undefined;
        }

        this.#length--;
        return removedNode.value;
    }

    traverse() {
        if(this.isEmpty()) {
            console.log("A lista está vazia!");
            return;
        }

        let current = this.#head;
        while(current) {
            console.log(current.value);
            current = current.next;
        }
    }

    traverseReverse() {
        if(this.isEmpty()) {
            console.log("A lista está vazia!");
            return;
        }

        let current = this.#tail;
        while(current) {
            console.log(current.value);
            current = current.prev;
        }
    }

    insertAt(value, index) {
        if(index < 0 || index > this.#length) return undefined;

        const newNode = new Node(value);

        if(index === 0) {
            this.prepend(value);
            return;
        }

        if(index === this.#length) {
            this.append(value);
            return;
        }

        let current = this.#head;
        let previous;
        let count = 0;

        while(count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        newNode.prev = previous;
        previous.next = newNode;
        current.prev = newNode;

        this.#length++;
    }

    find(value) {
        let current = this.#head;
        let index = 0;

        while (current) {
            if(current.value === value)
                return index;
            
            current = current.next;
            index++;
        }

        return -1;
    }

    removeAt(index) {
        if(index < 0 || index >= this.#length) return null;

        if(index === 0) return this.removeFirst();
        if(index === this.#length - 1) return this.removeLast();

        let current = this.#head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;

        this.#length--;
        return current.value;
    }

    size = () => this.#length;

    isEmpty = () => this.#length === 0;

    toString() {
        let current = this.#head;
        let list = '';
        while(current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined');
    }

}

module.exports = Corrida;