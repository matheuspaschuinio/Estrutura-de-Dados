class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    return this.livros.map(l => `${l.titulo} (${l.ano}) - ${l.autor}`).join('\n');
  }

  buscarPorAutor(autor) {
    return this.livros.filter(l => l.autor.toLowerCase() === autor.toLowerCase());
  }
}

module.exports = Biblioteca;