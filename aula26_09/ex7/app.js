function objetoParaMap(objeto) {
    const mapa = new Map();

    for (const [chave, valor] of Object.entries(objeto)) {
        mapa.set(chave, valor);
    }

    return mapa;
}

const meuObjeto = {
    nome: "Matheus",
    idade: 19,
    funcao: "Estudante"
};

const resultado = objetoParaMap(meuObjeto);
console.log(resultado);