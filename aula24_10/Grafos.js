class Grafo {
    constructor() {
        // Estrutura para armazenar os vértices e suas conexões
        this.adjacencia = {};
    }

    // Adiciona um novo vértice ao grafo
    adicionarVertice(vertice) {
        if(!this.adjacencia[vertice]) {
            this.adjacencia[vertice] = [];
        }
    }

    adicionarAresta(vertice1, vertice2) {
        if(!this.adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }
        if(!this.adjacencia[vertice2]) {
            this.adicionarVertice(vertice2);
        }
        this.adjacencia[vertice1].push(vertice2);
        this.adjacencia[vertice2].push(vertice1);
    }

    // Remove uma aresta entre dois vértices
    removerAresta(vertice1, vertice2) {
        this.adjacencia[vertice1] = this.adjacencia[vertice1].filter(v => v !== vertice2);
        this.adjacencia[vertice2] = this.adjacencia[vertice2].filter(v => v !== vertice1);
    }

    // Remove um vértice e suas conexões
    removerVertice(vertice) {
        while(this.adjacencia[vertice]?.length) {
            const adjacente = this.adjacencia[vertice].pop();
            this.removerAresta(vertice, adjacente);
        }
        delete this.adjacencia[vertice];
    }

    // Exibe o grafo
    imprimirGrafo() {
        for (let vertice in this.adjacencia) {
            console.log(`${vertice} -> ${this.adjacencia[vertice].join(', ')}`);
        }
    }

    // Adicionar aresta com um peso(valor)
    adicionarArestaComPeso(vertice1, vertice2, peso) {
        if(!this.adjacencia[vertice1]) {
            this.adicionarVertice(vertice1);
        }
        if(!this.adjacencia[vertice2]) {
            this.adicionarVertice(vertice2);
        }
        this.adjacencia[vertice1].push({vertice: vertice2, peso: peso});
        this.adjacencia[vertice2].push({vertice: vertice1, peso: peso});
    }
} // Fecha classe Grafo

module.exports = Grafo;