const Sorter = require('./Sorter.js');
const Buscas = require('./Buscas.js');
const { performance } = require('perf_hooks');

const TAMANHO_REAL = 10000000;
const TAMANHO_BUBBLE_SORT = 50000;

console.log(`\n=== BENCHMARK (Buscas Padronizadas em 10M) ===`);
console.log(`População para Ordenação Bubble: ${TAMANHO_BUBBLE_SORT} (Amostra)`);
console.log(`População para Buscas (Todos):   ${TAMANHO_REAL} (Padronizado)`);

function medirTempo(nomeOperacao, funcao) {
    const inicio = performance.now();
    const resultado = funcao();
    const fim = performance.now();
    const tempoGasto = (fim - inicio).toFixed(4).replace('.', ',');
    
    console.log(`${nomeOperacao}: ${tempoGasto}`);
    return { resultado, tempo: tempoGasto };
}

const MEU_IDENTIFICADOR = TAMANHO_REAL + 9999; 

console.log(`\n--------------------------------------------------`);
console.log(`--- CENÁRIO 1: BUBBLE SORT ---`);

console.log(`>> Medindo ORDENAÇÃO (Vetor ${TAMANHO_BUBBLE_SORT}):`);
let vetorBubblePequeno = Array.from({ length: TAMANHO_BUBBLE_SORT }, () => Math.floor(Math.random() * TAMANHO_BUBBLE_SORT));
medirTempo("  Tempo Ordenação (Bubble - Amostra)", () => Sorter.bubbleSort(vetorBubblePequeno));

console.log(`\n>> Medindo BUSCAS (Vetor ${TAMANHO_REAL} - Preparado via QuickSort auxiliar):`);
let vetorParaBuscaBubble = Array.from({ length: TAMANHO_REAL }, () => Math.floor(Math.random() * TAMANHO_REAL));
vetorParaBuscaBubble[vetorParaBuscaBubble.length - 1] = MEU_IDENTIFICADOR;

Sorter.quickSort(vetorParaBuscaBubble); 

medirTempo("  > Busca Sequencial",   () => Buscas.sequencial(vetorParaBuscaBubble, MEU_IDENTIFICADOR));
medirTempo("  > Busca Binária",      () => Buscas.binaria(vetorParaBuscaBubble, MEU_IDENTIFICADOR));
medirTempo("  > Busca Interpolação", () => Buscas.interpolacao(vetorParaBuscaBubble, MEU_IDENTIFICADOR));

console.log(`\n--------------------------------------------------`);
console.log(`--- CENÁRIO 2: QUICK SORT (${TAMANHO_REAL}) ---`);

let vetorQuick = Array.from({ length: TAMANHO_REAL }, () => Math.floor(Math.random() * TAMANHO_REAL));
vetorQuick[vetorQuick.length - 1] = MEU_IDENTIFICADOR;
const cloneQuick = [...vetorQuick];

try {
    const resQuick = medirTempo("  Tempo Ordenação (Quick)", () => Sorter.quickSort(cloneQuick));
    const ordenadoQuick = resQuick.resultado;

    medirTempo("  > Busca Sequencial",   () => Buscas.sequencial(ordenadoQuick, MEU_IDENTIFICADOR));
    medirTempo("  > Busca Binária",      () => Buscas.binaria(ordenadoQuick, MEU_IDENTIFICADOR));
    medirTempo("  > Busca Interpolação", () => Buscas.interpolacao(ordenadoQuick, MEU_IDENTIFICADOR));
} catch (e) {
    console.log("Erro Quick: " + e.message);
}

console.log(`\n--------------------------------------------------`);
console.log(`--- CENÁRIO 3: MERGE SORT (${TAMANHO_REAL}) ---`);

let vetorMerge = Array.from({ length: TAMANHO_REAL }, () => Math.floor(Math.random() * TAMANHO_REAL));
vetorMerge[vetorMerge.length - 1] = MEU_IDENTIFICADOR;
const cloneMerge = [...vetorMerge];

try {
    const resMerge = medirTempo("  Tempo Ordenação (Merge)", () => Sorter.mergeSort(cloneMerge));
    const ordenadoMerge = resMerge.resultado;

    medirTempo("  > Busca Sequencial",   () => Buscas.sequencial(ordenadoMerge, MEU_IDENTIFICADOR));
    medirTempo("  > Busca Binária",      () => Buscas.binaria(ordenadoMerge, MEU_IDENTIFICADOR));
    medirTempo("  > Busca Interpolação", () => Buscas.interpolacao(ordenadoMerge, MEU_IDENTIFICADOR));
} catch (e) {
    console.log("Erro Merge: " + e.message);
}

console.log("\n=== FIM DA EXECUÇÃO ===");