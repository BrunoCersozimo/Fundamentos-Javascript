// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'} - Utilizando um objeto criado e tentando faze-lo apontar para outro endereço.(objeto armazenado em uma constante)

Object.freeze(pessoa) // Congela o objeto, depois dessa linha nada mais poderá ser modificado no objeto, nem mesmo ser deletado

pessoa.nome = 'Maria'// Tentando modificar...
pessoa.end = 'Rua ABC' // adicionar...
delete pessoa.nome // deletar...
console.log(pessoa.nome)