function contarPalavra(frase) {
    const contagem = new Map();

    const fraseMinuscula = frase.toLowerCase();
    
    const palavras = fraseMinuscula.split(' ')

    for(const palavra of palavras) {
        if(contagem.has(palavra)) {
            const contagemAtual = contagem.get(palavra);
            contagem.set(palavra, contagemAtual + 1);
        } else {
            contagem.set(palavra, 1);
        }
    }

    return contagem;
}

const texto = "Meu nome é matheus e gosto de programar em javascript";

const resultado = contarPalavra(texto);

console.log(resultado);