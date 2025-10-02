const dicionario = {};

dicionario["nome"] = "Matheus";
dicionario["Dinheiro"] = undefined;
dicionario[19] = "idade";
dicionario["passatempos"] = null;


function removerVazio(dicionario) {
    for (const chave in dicionario) {
        if(dicionario[chave] === undefined || dicionario[chave] === null) {
            delete dicionario[chave];
        }
    }
}

removerVazio(dicionario);

console.log(dicionario);