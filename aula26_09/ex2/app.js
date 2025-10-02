function contarTexto(texto) {
    const contagem = {};

    for(const caractere of texto) {

        if(caractere === ' ') {
            continue;
        }

        if(contagem[caractere]) {
            contagem[caractere]++;
        } else {
            contagem[caractere] = 1;
        }
    }

    return contagem;
}

const frase = "me chamo matheus";

const resultado = contarTexto(frase);

console.log(resultado);