const Produto = require('./produto');
const Carrinho = require('./carrinho');

const carrinho = new Carrinho();

const produto1 = new Produto('Camiseta', 49.90);
const produto2 = new Produto('Calça Jeans', 129.90);
const produto3 = new Produto('Tênis', 199.90);

carrinho.adicionar(produto1);
carrinho.adicionar(produto2);
carrinho.adicionar(produto3);

console.log(`Valor total: R$ ${carrinho.total().toFixed(2)}`);