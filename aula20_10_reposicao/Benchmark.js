const AVLTree = require('./AVLTree.js');
const BinaryTree = require('./BinaryTree.js');
const LinkedList = require('./LinkedList.js');
const DoublyLinkedList = require('./DoublyLinkedList.js');
const Fila = require('./Fila.js');
const Pilha = require('./Pilha.js');

const TAMANHO_DA_MASSA_DE_DADOS = 10000000; 

const NOME_PARA_BUSCA = "SEU NOME AQUI";

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function runBenchmark() {
    console.log(`--- INICIANDO TESTE ---`);
    console.log(`(Você deve rodar este script 10 vezes para preencher sua tabela)\n`);
    console.log(`Massa de dados: ${TAMANHO_DA_MASSA_DE_DADOS} itens.\n`);

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
            'Lista Encadeada': (est, val) => est.insertAtBeginning(val), 
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

    let resultadosInsercao = [];
    let resultadosBusca = [];

    console.log("Executando testes... Isso pode demorar.");

    for (const nome in estruturas) {
        
        let estrutura = estruturas[nome]();
        let labelInsercao = `Inserção - ${nome.padEnd(25)}`;
        let labelBusca = `Busca    - ${nome.padEnd(25)}`;

        try {
            let inicioInsercao = performance.now();
            for (let j = 0; j < TAMANHO_DA_MASSA_DE_DADOS; j++) {
                metodos.insercao[nome](estrutura, getRandomInt(TAMANHO_DA_MASSA_DE_DADOS));
            }
            metodos.insercao[nome](estrutura, NOME_PARA_BUSCA);
            let fimInsercao = performance.now();
            
            // --- LINHA MODIFICADA ---
            let tempoInsercaoFormatado = (fimInsercao - inicioInsercao).toFixed(4).replace('.', ',');
            resultadosInsercao.push(`${labelInsercao}: ${tempoInsercaoFormatado}`);


            let inicioBusca = performance.now();
            metodos.busca[nome](estrutura, NOME_PARA_BUSCA);
            let fimBusca = performance.now();
            
            // --- LINHA MODIFICADA ---
            let tempoBuscaFormatado = (fimBusca - inicioBusca).toFixed(4).replace('.', ',');
            resultadosBusca.push(`${labelBusca}: ${tempoBuscaFormatado}`);

        } catch (e) {
            resultadosInsercao.push(`${labelInsercao}: ERRO (Estouro de pilha?)`);
            resultadosBusca.push(`${labelBusca}: N/A`);
        }

        estrutura = null;
    }
    
    console.log("\n\n--- RESULTADOS DE INSERÇÃO ---");
    console.log("=".repeat(45));
    resultadosInsercao.forEach(resultado => console.log(resultado));
    
    console.log("\n--- RESULTADOS DE BUSCA ---");
    console.log("=".repeat(45));
    resultadosBusca.forEach(resultado => console.log(resultado));

    console.log("\n--- TESTE CONCLUÍDO ---");
}

runBenchmark();