//Factory é uma função que sempre retorna um objeto

//factory simples 
function criarPessoa(){
    return { 
        nome:'Ana',
        sobrenome:'Silva'
    }
}
console.log(criarPessoa())

function criarProduto(nome, preco){
    return {
        nome: '...',
        preco: 30
    }
}