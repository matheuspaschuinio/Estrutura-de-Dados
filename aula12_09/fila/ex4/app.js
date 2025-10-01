const Restaurante = require('./Restaurante.js');

const pedidos = new Restaurante();

let contadorPedidos = 1;

temposPreparo = [3000, 4000, 5000, 8000];

pedidos.enqueue(`Pedido: ${contadorPedidos ++}: Hambúrguer`);
pedidos.enqueue(`Pedido: ${contadorPedidos ++}: Lasanha`);
pedidos.enqueue(`Pedido: ${contadorPedidos ++}: Pizza`);
pedidos.enqueue(`Pedido: ${contadorPedidos ++}: Panqueca`);

function prepararPedidos()
{
    let proximo;

    if(!pedidos.estaVazia())
    {
        proximo = pedidos.front();
        console.log(`O ${proximo} vai ser preparado!`);
    } else {
        console.log("Não tem nenhum pedido!");
        return;
    }

    setTimeout(() => {
        let pedidoSaiu;

        pedidoSaiu = pedidos.dequeue();

        console.log(`O ${pedidoSaiu} está pronto!`);

        prepararPedidos();
    }, temposPreparo[Math.floor(Math.random() * temposPreparo.length)]);
}

console.clear();
prepararPedidos();