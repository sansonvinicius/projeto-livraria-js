//Importar os livtos do arquivo database.js
const livros = require("./database");
//Verificar um input para o usuário
const readline = require('readline-sync')

//Verifica se o usuário quer buscar um livro e qual categoria caso a resposta seja S 
const entradaInicial = readline.question('Deseja buscar um livro? (S/N)')

if(entradaInicial.toLocaleUpperCase()==='S'){
    console.log('As categorias disponíveis são:')
    console.log( 'Produtividade e estilo de vida','/História brasileira',
    '/Américas', '/Tecnologia', '/Estilo de vida')

    const entradaCategoria = readline.question('Qual categoria está buscando?')

    // busca todos os livros com a mesma categoria selecionada pelo usuário na database.js
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno);
}
