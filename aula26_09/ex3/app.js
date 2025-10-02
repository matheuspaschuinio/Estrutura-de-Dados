const produto = {};

produto[12] = {
    nome: "Teclado",
    preco: 70
};

produto[14] = {
    nome: "Mousepad",
    preco: 20
};

produto[70] = {
    nome: "Action Figure",
    preco: 60
};

produto[34] = {
    nome: "Mouse",
    preco: 25
};

produto[60] = {
    nome: "Monitor",
    preco: 299
};

for(const chave in produto) {
    if(produto[chave].preco > 50) {
        console.log(`Código do produto: ${chave}, Nome: ${produto[chave].nome}, Preço: ${produto[chave].preco}`);
    }
}