class AVLNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1; // todo nó começa com altura 1
    } 
}

class AVLTree {

    constructor() {
        this.root = null;
    }

    // Função utilitária para obter a altura de um nó
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Calcula o fator de balanceamento de um nó
    getBalanceFactor(node) {
        return node ? this.getHeight(node.left) - this.getHeight(node.right) : 0;
    }

    // Atualiza a altura de um nó
    updateHeight(node) {
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
    } 

    // Rotação simples à direita
    rotateRight(y) {
        const x = y.left;
        const T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    // Rotação simples à esquerda
    rotateLeft(x) {
        const y = x.right;
        const T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    // Inserção com balanceamento AVL
    insert(value) {
        this.root = this._insert(this.root, value);
    }

    _insert(node, value) {
        if(!node) return new AVLNode(value);

        if(value < node.value) {
            node.left = this._insert(node.left, value);
        } else if(value > node.value) {
            node.right = this._insert(node.right, value);
        } else {
            return node; // valor duplicado não é inserido
        }

        this.updateHeight(node);
        const balance = this.getBalanceFactor(node);

        // Casos de desbalanceamento:
        if(balance > 1 && value < node.left.value) {
            return this.rotateRight(node); // Esquerda-Esquerda
        }

        if(balance < -1 && value > node.right.value) {
            return this.rotateLeft(node); // Direita-Direita
        }

        if(balance > 1 && value > node.left.value) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node); // Esquerda-Direita
        }

        if(balance < -1 && value < node.right.value) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node); // Direita-Esquerda
        }

        return node;
    }

    // Exibir percurso in-order (opcional)
    inOrder(node = this.root) {
        if(node) {
            this.inOrder(node.left);
            console.log(node.value);
            this.inOrder(node.right);
        }
    }

    // Impressão visual da árvore no terminal
    print(node = this.root, prefix = "", isLeft = true) {
        if (node.right !== null) {
            this.print(node.right, prefix + (isLeft ? "│   " : "    "), false);
        }

        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

        if (node.left !== null) {
            this.print(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }

    search(value) {
        return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
        if (node === null) {
            return false;
        }

        if (value < node.value) {
            return this._searchNode(node.left, value);
        } else if (value > node.value) {
            return this._searchNode(node.right, value);
        } else {
            return true; // Encontrou o valor
        }
    }

}

module.exports = AVLTree;