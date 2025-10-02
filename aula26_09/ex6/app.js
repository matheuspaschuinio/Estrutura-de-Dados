function frequeciaLetras(texto) {
    const contagem = new Map();

    for (const letra of texto) {
        if(contagem.has(letra)) {
            const contagemAtual = contagem.get(letra);
            contagem.set(letra, contagemAtual + 1);
        } else {
            contagem.set(letra, 1);
        }
    }

    return contagem;
}

const frase = "Meu nome é Matheus";

const resultado = frequeciaLetras(frase);

console.log(resultado);