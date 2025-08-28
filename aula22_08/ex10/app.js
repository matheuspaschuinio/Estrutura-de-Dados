const Livro = require('./livro');
const Biblioteca = require('./biblioteca');

const biblioteca = new Biblioteca();

const livro1 = new Livro('Dom Casmurro', 'Machado de Assis', 1899);
const livro2 = new Livro('O Alquimista', 'Paulo Coelho', 1988);
const livro3 = new Livro('Memórias Póstumas de Brás Cubas', 'Machado de Assis', 1881);

biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

console.log('Lista de livros na biblioteca:');
console.log(biblioteca.listarLivros());

console.log('\nBuscando livros do autor "Machado de Assis":');
const encontrados = biblioteca.buscarPorAutor('Machado de Assis');
encontrados.forEach(l => {
  console.log(`- ${l.titulo} (${l.ano})`);
})