// Benchmark.js

// Importando as classes
const AVLTree = require('./AVLTree.js');
const BinaryTree = require('./BinaryTree.js');
const LinkedList = require('./LinkedList.js');
const DoublyLinkedList = require('./DoublyLinkedList.js');
const Fila = require('./Fila.js');
const Pilha = require('./Pilha.js');

// --- CONFIGURAÇÕES DO BENCHMARK ---
const NUMERO_DE_TESTES = 10;
const TAMANHO_DA_MASSA_DE_DADOS = 10000000;
const NOME_PARA_BUSCA = "Matheus"; // Substitua pelo seu nome 

// Função para gerar números aleatórios
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Função para formatar os resultados e calcular a média
function formatarResultados(estrutura, tempos) {
    const media = tempos.reduce((a, b) => a + b, 0) / tempos.length;
    const temposFormatados = tempos.map(t => `${t.toFixed(4)}ms`).join('\t');
    console.log(`${estrutura.padEnd(25)}\t${temposFormatados}\t${media.toFixed(4)}ms`);
}

async function runBenchmark() {
    const estruturas = {
        'Array': () => [],
        'Pilha': () => new Pilha(),
        'Fila': () => new Fila(),
        'Lista Encadeada': () => new LinkedList(),
        'Lista Duplamente Encadeada': () => new DoublyLinkedList(),
        'Árvore Binária': () => new BinaryTree(),
        'Árvore Binária AVL': () => new AVLTree(),
    };

    const metodos = {
        insercao: {
            'Array': (est, val) => est.push(val),
            'Pilha': (est, val) => est.adicionar(val),
            'Fila': (est, val) => est.enqueue(val),
            'Lista Encadeada': (est, val) => est.insertAtBeginning(val), // Inserir no final é mais justo para comparação
            'Lista Duplamente Encadeada': (est, val) => est.append(val),
            'Árvore Binária': (est, val) => est.insert(val),
            'Árvore Binária AVL': (est, val) => est.insert(val),
        },
        busca: {
            'Array': (est, val) => est.includes(val),
            'Pilha': (est, val) => est.procurar(val),
            'Fila': (est, val) => est.procurar(val),
            'Lista Encadeada': (est, val) => est.find(val),
            'Lista Duplamente Encadeada': (est, val) => est.find(val),
            'Árvore Binária': (est, val) => est.search(val),
            'Árvore Binária AVL': (est, val) => est.search(val),
        }
    };

    const resultadosInsercao = {};
    const resultadosBusca = {};

    for (let i = 1; i <= NUMERO_DE_TESTES; i++) {
        console.log(`\n--- EXECUTANDO TESTE Nº ${i} de ${NUMERO_DE_TESTES} ---\n`);

        for (const nome in estruturas) {
            // Garante que a memória seja liberada entre os testes
            if (global.gc) { global.gc(); }
            
            let estrutura = estruturas[nome]();

            // --- Teste de Inserção ---
            let inicioInsercao = performance.now();
            for (let j = 0; j < TAMANHO_DA_MASSA_DE_DADOS; j++) {
                metodos.insercao[nome](estrutura, getRandomInt(TAMANHO_DA_MASSA_DE_DADOS));
            }
            // Insere o nome por último
            metodos.insercao[nome](estrutura, NOME_PARA_BUSCA);
            let fimInsercao = performance.now();

            if (!resultadosInsercao[nome]) resultadosInsercao[nome] = [];
            resultadosInsercao[nome].push(fimInsercao - inicioInsercao);
            console.log(`[Teste ${i}] Inserção em ${nome}: ${(fimInsercao - inicioInsercao).toFixed(4)}ms`);

            // --- Teste de Busca ---
            let inicioBusca = performance.now();
            metodos.busca[nome](estrutura, NOME_PARA_BUSCA);
            let fimBusca = performance.now();

            if (!resultadosBusca[nome]) resultadosBusca[nome] = [];
            resultadosBusca[nome].push(fimBusca - inicioBusca);
            console.log(`[Teste ${i}] Busca em ${nome}:    ${(fimBusca - inicioBusca).toFixed(4)}ms`);

            // Limpa a estrutura para o próximo loop
            estrutura = null;
        }
    }

    // --- Exibição dos Resultados Finais ---
    console.log("\n\n--- TABELA DE RESULTADOS: INSERÇÃO ---");
    console.log("ESTRUTURA\t\t\tT1\t\tT2\t\tT3\t\tT4\t\tT5\t\tT6\t\tT7\t\tT8\t\tT9\t\tT10\t\tMÉDIA");
    for (const nome in resultadosInsercao) {
        formatarResultados(nome, resultadosInsercao[nome]);
    }

    console.log("\n\n--- TABELA DE RESULTADOS: BUSCA ---");
    console.log("ESTRUTURA\t\t\tT1\t\tT2\t\tT3\t\tT4\t\tT5\t\tT6\t\tT7\t\tT8\t\tT9\t\tT10\t\tMÉDIA");
    for (const nome in resultadosBusca) {
        formatarResultados(nome, resultadosBusca[nome]);
    }
}

runBenchmark();