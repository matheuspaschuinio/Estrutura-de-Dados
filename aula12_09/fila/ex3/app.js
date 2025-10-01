const Fila = require('./Fila.js');

const brinquedo = new Fila();
const vip = new Fila();

const tempoBrinquedo = 4000;

brinquedo.enqueue("Visitante 1");
vip.enqueue("Visitante 2 (VIP)");
brinquedo.enqueue("Visitante 3");
vip.enqueue("Visitante 4 (VIP)");
brinquedo.enqueue("Visitante 5");


function operarBrinquedo()
{
    let proximo;

    if(!vip.estaVazia()){
        proximo = vip.front();
        console.log(`Fila vip tem: ${vip.tamanho()} pessoas, o próximo é: ${proximo}`);
    } else if(!brinquedo.estaVazia()) {
        proximo = brinquedo.front();
        console.log(`Fila tem: ${brinquedo.tamanho()} pessoas, o próximo é: ${proximo}`);
    } else {
        console.log("Não tem ninguém na fila.")
        return;
    }

    // embarque
    console.log(`Embarcando: ${proximo}, o brinquedo vai começar`);

    // simulacao
    setTimeout(() => {
        let visitanteSaiu;

        if(proximo.includes("VIP")){
            visitanteSaiu = vip.dequeue();
        } else {
            visitanteSaiu = brinquedo.dequeue();
        }

        // desembarque
        console.log(`Desembarcou: ${visitanteSaiu}`);

        // chama outro ciclo
        operarBrinquedo();

    }, tempoBrinquedo);
}

console.clear();
operarBrinquedo();