const Caixa = require('./Caixa.js');

const TEMPO_POR_PRODUTO = 1000; // 1s 
const filaDeClientes = new Caixa();
let proximoClienteId = 1;

function gerarNumeroDeProdutos() {
  return Math.floor(Math.random() * 10) + 1;
}

for (let i = 0; i < 5; i++) {
  const cliente = {
    id: proximoClienteId++,
    produtos: gerarNumeroDeProdutos()
  };
  filaDeClientes.enqueue(cliente);
  console.log(`Cliente #${cliente.id} entrou na fila com ${cliente.produtos} produtos.`);
}

function operarCaixa() {
  if (filaDeClientes.estaVazia()) {
    console.log("Fila vazia! O caixa está livre.");
    return;
  }

  const clienteAtual = filaDeClientes.front();
  console.log("-------------------------------------");
  console.log(`Próximo cliente: #${clienteAtual.id} com ${clienteAtual.produtos} produtos.`);

  const tempoDeAtendimento = clienteAtual.produtos * TEMPO_POR_PRODUTO;
  console.log(`Tempo de atendimento estimado: ${tempoDeAtendimento / 1000} segundos.`);

  setTimeout(() => {
    const clienteAtendido = filaDeClientes.dequeue();
    console.log(`Atendimento finalizado para o Cliente #${clienteAtendido.id}.`);

    operarCaixa();

  }, tempoDeAtendimento);
}

console.clear();
console.log("Supermercado aberto, clientes chegando...");
operarCaixa();