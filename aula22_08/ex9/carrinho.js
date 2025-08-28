class Carrinho {
  constructor() {
    this.produtos = [];
  }

  adicionar(produto) {
    this.produtos.push(produto);
  }

  total() {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

module.exports = Carrinho;